const TOTAL_WEEKS = 24; // 6 meses * 4 semanas

function init() {
    let state = JSON.parse(localStorage.getItem('lms_jr_state_v2'));
    if (!state) {
        state = { progress: 0, unlocked: ['m1w1'], scores: {} };
        localStorage.setItem('lms_jr_state_v2', JSON.stringify(state));
    }
    
    updateUI(state);
    
    document.querySelectorAll('.menu-week').forEach(el => {
        el.addEventListener('click', (e) => {
            const targetId = e.currentTarget.getAttribute('data-target');
            const currentState = JSON.parse(localStorage.getItem('lms_jr_state_v2'));
            
            if (currentState.unlocked.includes(targetId)) {
                loadWeekContent(targetId);
            } else {
                e.currentTarget.style.transform = 'translateX(5px)';
                setTimeout(() => e.currentTarget.style.transform = 'translateX(0)', 150);
            }
        });
    });

    let hash = window.location.hash.replace('#', '');
    if (hash && state.unlocked.includes(hash)) {
        loadWeekContent(hash);
    } else {
        loadWeekContent('m1w1');
    }
}

function updateUI(state) {
    const completedExams = Object.keys(state.scores).length;
    const pct = Math.min(100, Math.floor((completedExams / TOTAL_WEEKS) * 100));
    
    document.getElementById('global-progress').style.width = pct + '%';
    document.getElementById('progress-text').innerText = pct + '%';
    
    document.querySelectorAll('.menu-week').forEach(el => {
        const id = el.getAttribute('data-target');
        el.classList.remove('locked', 'active');
        
        let html = el.innerHTML.replace(' <span style="font-size:0.8em; color:var(--accent-green);">✅</span>', '');
        el.innerHTML = html;

        if (state.unlocked.includes(id)) {
            if (state.scores[id] !== undefined) {
                el.innerHTML += ' <span style="font-size:0.8em; color:var(--accent-green);">✅</span>';
            }
        } else {
            el.classList.add('locked');
        }
    });
}

function loadWeekContent(weekId) {
    // 1. Atualizar sidebar ativa
    document.querySelectorAll('.menu-week').forEach(el => el.classList.remove('active'));
    const navItem = document.querySelector(`.menu-week[data-target="${weekId}"]`);
    if(navItem) navItem.classList.add('active');

    // 2. Fechar sidebar mobile se necessário
    if(window.innerWidth <= 800) {
        document.getElementById('sidebar').classList.remove('open');
    }

    // 3. Renderizar conteúdo dinamicamente
    const container = document.getElementById('content-area');
    container.innerHTML = ''; // Limpar anterior

    const data = window.courseData ? window.courseData[weekId] : null;

    if (!data) {
        const safeWeekId = weekId.replace(/</g, "&lt;").replace(/>/g, "&gt;");
        container.innerHTML = `
            <h1>Conteúdo indisponível</h1>
            <p>O módulo ${safeWeekId} está em fase de construção ou não possui dados vinculados ainda.</p>
        `;
    } else {
        // Renderizar a estrutura da semana
        let html = `
            <h1>${data.title}</h1>
            <div class="subtitle">${data.subtitle}</div>
        `;

        // Renderizar os 4 estudos
        if (data.studies && data.studies.length > 0) {
            data.studies.forEach((study, studyIdx) => {
                html += `
                <div class="study-container">
                    <h2>${study.title}</h2>
                    <div class="markdown-content">
                        ${window.DOMPurify ? DOMPurify.sanitize(marked.parse(study.content)) : marked.parse(study.content)}
                    </div>
                `;

                // Flashcards do estudo
                if (study.flashcards && study.flashcards.length > 0) {
                    html += `<h3>Flashcards de Revisão</h3><div class="flashcards-grid">`;
                    study.flashcards.forEach(fc => {
                        html += `
                        <div class="flashcard" onclick="this.classList.toggle('flipped')">
                            <div class="flashcard-inner">
                                <div class="flashcard-front">${fc.front}</div>
                                <div class="flashcard-back">${fc.back}</div>
                            </div>
                        </div>`;
                    });
                    html += `</div>`;
                }

                // Quiz do estudo
                if (study.quiz) {
                    let optionsHtml = '';
                    study.quiz.options.forEach((opt, optIdx) => {
                        // stringify feedback safely
                        const fb = opt.feedback.replace(/'/g, "&#39;").replace(/"/g, "&quot;");
                        optionsHtml += `<button type="button" class="quiz-btn" onclick="answerInlineQuiz(this, 'quiz-${study.id}', ${opt.correct}, '${fb}')">${opt.text}</button>`;
                    });

                    html += `
                    <div class="inline-quiz" id="quiz-${study.id}">
                        <h4>Teste de Conhecimento</h4>
                        <p>${study.quiz.question}</p>
                        <div class="quiz-options">
                            ${optionsHtml}
                        </div>
                        <div class="quiz-feedback"></div>
                    </div>`;
                }

                html += `</div>`; // fechar study-container
            });
        }

        // Palácio da Memória
        if (data.memoryPalace) {
            html += `
            <div class="memory-palace">
                <h2>${data.memoryPalace.title}</h2>
                <div class="markdown-content">
                    ${window.DOMPurify ? DOMPurify.sanitize(marked.parse(data.memoryPalace.content)) : marked.parse(data.memoryPalace.content)}
                </div>
            </div>`;
        }

        // Exame
        if (data.exam && data.exam.length > 0) {
            let questionsHtml = '';
            data.exam.forEach((q, qIdx) => {
                let optionsHtml = '';
                q.options.forEach((opt, optIdx) => {
                    optionsHtml += `
                    <label>
                        <input type="radio" name="q${qIdx}" value="${optIdx === q.correctIndex ? '1' : '0'}" required> 
                        ${opt}
                    </label>`;
                });

                questionsHtml += `
                <div class="exam-question">
                    <p>${q.question}</p>
                    <div class="exam-options">${optionsHtml}</div>
                </div>`;
            });

            // Determinar o próximo módulo logicamente (simples para M1)
            let nextModule = getNextModuleId(weekId);

            html += `
            <div class="exam-section">
                <h2>Prova Final: ${data.title}</h2>
                <form id="form-${weekId}" onsubmit="submitExam(event, '${weekId}', '${nextModule}')">
                    ${questionsHtml}
                    <button type="submit" class="btn-submit">Finalizar Prova</button>
                    <div id="result-${weekId}" class="exam-result"></div>
                </form>
            </div>`;
        }

        container.innerHTML = html;
    }

    history.pushState(null, null, '#' + weekId);
    document.getElementById('content-area').parentElement.scrollTop = 0;
}

function getNextModuleId(current) {
    // Exemplo: 'm1w1' -> 'm1w2'
    // 'm1w4' -> 'm2w1'
    let m = parseInt(current.charAt(1));
    let w = parseInt(current.charAt(3));
    
    if (w < 4) {
        return `m${m}w${w+1}`;
    } else {
        return `m${m+1}w1`;
    }
}

window.answerInlineQuiz = function(btnElement, quizId, isCorrect, feedbackMsg) {
    const quizDiv = document.getElementById(quizId);
    const feedbackDiv = quizDiv.querySelector('.quiz-feedback');
    
    quizDiv.querySelectorAll('.quiz-btn').forEach(btn => {
        btn.disabled = true;
        btn.classList.remove('correct', 'wrong');
        btn.style.opacity = '0.6';
    });
    
    btnElement.style.opacity = '1';
    
    if (isCorrect) {
        btnElement.classList.add('correct');
        feedbackDiv.style.backgroundColor = 'rgba(16, 185, 129, 0.1)';
        feedbackDiv.style.color = 'var(--accent-green)';
        feedbackDiv.style.border = '1px solid var(--accent-green)';
    } else {
        btnElement.classList.add('wrong');
        feedbackDiv.style.backgroundColor = 'rgba(239, 68, 68, 0.1)';
        feedbackDiv.style.color = 'var(--accent-red)';
        feedbackDiv.style.border = '1px solid var(--accent-red)';
    }
    
    feedbackDiv.innerHTML = feedbackMsg;
    feedbackDiv.classList.add('show');
}

window.submitExam = function(e, currentSection, nextSection) {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    
    let totalQuestions = 0;
    let score = 0;
    
    for (let [key, value] of formData.entries()) {
        totalQuestions++;
        score += parseInt(value);
    }
    
    const pct = (score / totalQuestions) * 100;
    // Semanas normais exigem 70%. Semanas finais de mês (w4) exigem 80%
    const isFinalExam = currentSection.endsWith('w4');
    const minPassingScore = isFinalExam ? 80 : 70; 
    
    const resultDiv = document.getElementById('result-' + currentSection);
    resultDiv.style.display = 'block';
    
    if (pct >= minPassingScore) {
        resultDiv.style.backgroundColor = 'rgba(16, 185, 129, 0.1)';
        resultDiv.style.color = 'var(--accent-green)';
        resultDiv.style.border = '2px solid var(--accent-green)';
        resultDiv.innerHTML = `🎉 Aprovado! Sua pontuação: <strong>${pct.toFixed(0)}%</strong>. <br><br> <button type="button" class="btn-submit" style="width: auto; padding: 10px 20px; font-size: 0.9em; margin-top: 15px;" onclick="loadWeekContent('${nextSection}')">Ir para Próxima Etapa</button>`;
        
        let state = JSON.parse(localStorage.getItem('lms_jr_state_v2'));
        state.scores[currentSection] = pct;
        
        if (!state.unlocked.includes(nextSection)) {
            state.unlocked.push(nextSection);
        }
        
        localStorage.setItem('lms_jr_state_v2', JSON.stringify(state));
        updateUI(state);
        
        form.querySelectorAll('input').forEach(i => i.disabled = true);
        form.querySelector('.btn-submit').disabled = true;
        
    } else {
        resultDiv.style.backgroundColor = 'rgba(239, 68, 68, 0.1)';
        resultDiv.style.color = 'var(--accent-red)';
        resultDiv.style.border = '2px solid var(--accent-red)';
        resultDiv.innerHTML = `❌ Reprovado. Pontuação: <strong>${pct.toFixed(0)}%</strong> (Mínimo: ${minPassingScore}%). Revise o Palácio da Memória e tente novamente.`;
    }
}

window.toggleSidebar = function() {
    document.getElementById('sidebar').classList.toggle('open');
}

window.resetStudy = function() {
    if (confirm("Tem certeza que deseja zerar todo o seu progresso? Essa ação não pode ser desfeita.")) {
        localStorage.removeItem('lms_jr_state_v2');
        window.location.hash = '';
        init();
    }
}

// ==========================================
// PYTHON TERMINAL LOGIC (AUTO-TIMEOUT WORKER)
// ==========================================
const EXECUTION_TIMEOUT = 5000; // 5 segundos
let pyWorker = null;
let isWorkerReady = false;

function initPyWorker() {
    if (pyWorker) pyWorker.terminate();
    
    pyWorker = new Worker('./js/py-worker.js');
    isWorkerReady = true; // Assumimos que está carregando em background
    
    // Tratamento de mensagens globais
    pyWorker.onmessage = (e) => {
        if (e.data && e.data.status === 'ready') {
            isWorkerReady = true;
        }
    };
    
    pyWorker.onerror = (e) => {
        console.error("Erro interno no Worker:", e);
    };
}

// Inicia em background silencioso assim que abrir a IDE
function ensureWorker() {
    if (!pyWorker) initPyWorker();
}

window.togglePlayground = function() {
    const panel = document.getElementById('playground-panel');
    panel.classList.toggle('open');
    if (panel.classList.contains('open')) {
        ensureWorker();
    }
}

window.runPython = function() {
    const code = document.getElementById('py-code').value;
    if (!code.trim()) return;
    
    const outputEle = document.getElementById('py-output');
    const btnRun = document.getElementById('btn-run-py');
    
    outputEle.innerText = "Executando em background...";
    outputEle.classList.remove('py-error');
    btnRun.disabled = true;
    
    ensureWorker();
    
    // Configura um timer limitador
    const timeoutId = setTimeout(() => {
        pyWorker.terminate(); // Mata a thread travada
        pyWorker = null; // Zera a referência
        
        outputEle.innerText = "❌ TIMEOUT ERRO: A execução ultrapassou 5 segundos (loop infinito detectado?). A thread foi destruída e uma nova será iniciada.";
        outputEle.classList.add('py-error');
        btnRun.disabled = false;
        
        // Reidrata um novo worker instantaneamente
        initPyWorker();
    }, EXECUTION_TIMEOUT);
    
    // Define o handler exclusivo para esta execução
    pyWorker.onmessage = (event) => {
        clearTimeout(timeoutId); // Código rodou liso, limpa o contador da morte
        btnRun.disabled = false;
        
        const { stdout, stderr, error } = event.data;
        
        if (error) {
            outputEle.innerText = error;
            outputEle.classList.add('py-error');
        } else if (stderr) {
            outputEle.innerText = stderr;
            outputEle.classList.add('py-error');
        } else {
            outputEle.innerText = stdout ? stdout : "Código executado com sucesso (sem saída).";
        }
    };
    
    // Envia o código para o Worker
    pyWorker.postMessage({ id: Date.now(), python: code });
}

// ==========================================
// SAVE-STATE (EXPORT / IMPORT) LOGIC
// ==========================================
window.exportProgress = function() {
    const state = localStorage.getItem('lms_jr_state_v2');
    if (!state) {
        alert("Nenhum progresso encontrado para exportar.");
        return;
    }
    
    const blob = new Blob([state], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    
    const a = document.createElement('a');
    a.href = url;
    const dateStr = new Date().toISOString().split('T')[0];
    a.download = `lms_progresso_${dateStr}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

window.importProgress = function(event) {
    const file = event.target.files[0];
    if (!file) return;
    
    const reader = new FileReader();
    reader.onload = function(e) {
        try {
            const importedState = JSON.parse(e.target.result);
            
            // Validação básica
            if (importedState.hasOwnProperty('progress') && importedState.hasOwnProperty('unlocked') && importedState.hasOwnProperty('scores')) {
                localStorage.setItem('lms_jr_state_v2', JSON.stringify(importedState));
                alert("Progresso importado com sucesso! Recarregando plataforma...");
                window.location.hash = '';
                init();
            } else {
                alert("Arquivo de progresso inválido ou corrompido.");
            }
        } catch (err) {
            alert("Erro ao ler o arquivo JSON.");
        }
    };
    reader.readAsText(file);
    
    // Reseta o input para permitir importar o mesmo arquivo de novo
    event.target.value = '';
}

// ==========================================
// POMODORO TIMER LOGIC
// ==========================================
let pomoInterval = null;
let pomoTimeLeft = 25 * 60; // 25 min em segundos
let pomoState = 'stopped'; // 'stopped', 'running', 'break'

window.togglePomodoro = function() {
    if (pomoState === 'stopped') {
        startPomodoro(25 * 60, 'running');
    } else if (pomoState === 'running' || pomoState === 'break') {
        if (confirm("Deseja parar o Pomodoro atual?")) {
            stopPomodoro();
        }
    }
}

function startPomodoro(seconds, state) {
    pomoTimeLeft = seconds;
    pomoState = state;
    const timerUI = document.getElementById('pomodoro-timer');
    
    if (state === 'running') {
        timerUI.className = 'running';
        timerUI.title = "Foco! Clique para parar.";
    } else if (state === 'break') {
        timerUI.className = 'break';
        timerUI.title = "Descanso! Clique para parar.";
    }

    if (pomoInterval) clearInterval(pomoInterval);
    
    pomoInterval = setInterval(() => {
        pomoTimeLeft--;
        updatePomodoroUI();
        
        if (pomoTimeLeft <= 0) {
            clearInterval(pomoInterval);
            if (pomoState === 'running') {
                alert("Pomodoro concluído! Hora de 5 minutos de descanso. Beba uma água 💧");
                startPomodoro(5 * 60, 'break');
            } else {
                alert("Descanso encerrado! Pronto para outro Pomodoro de foco? 🧠");
                stopPomodoro();
            }
        }
    }, 1000);
    updatePomodoroUI(); // Atualiza UI instantaneamente
}

function stopPomodoro() {
    if (pomoInterval) clearInterval(pomoInterval);
    pomoState = 'stopped';
    pomoTimeLeft = 25 * 60;
    const timerUI = document.getElementById('pomodoro-timer');
    timerUI.className = '';
    timerUI.title = "Iniciar Pomodoro (25min)";
    updatePomodoroUI();
}

function updatePomodoroUI() {
    const timerUI = document.getElementById('pomodoro-timer');
    const m = Math.floor(pomoTimeLeft / 60).toString().padStart(2, '0');
    const s = (pomoTimeLeft % 60).toString().padStart(2, '0');
    let icon = pomoState === 'break' ? '☕' : '🍅';
    if (pomoState === 'stopped') icon = '🍅';
    timerUI.innerHTML = `${icon} ${m}:${s}`;
}

window.addEventListener('DOMContentLoaded', init);
