# 🧠 Memória do Projeto — LMS Modular de Estudo

> Última atualização: **21/04/2026**  
> Status: ✅ **COMPLETO — 24 semanas / 6 meses de conteúdo (Densidade Dupla)**

---

## 1. 📌 O Que É Este Projeto

Uma **plataforma educacional interativa (LMS)** 100% client-side — sem back-end, sem servidor, sem banco de dados externo. Todo o currículo vive em `js/data.js` como um objeto JSON gigante com conteúdo em **Markdown puro**, renderizado em tempo real no browser via `marked.js`.

**Objetivo:** Substituir anotações dispersas por uma plataforma gamificada de auto-estudo para se tornar desenvolvedor Python júnior. Recentemente o currículo foi dobrado em densidade pedagógica para simular o rigor de uma capacitação intensiva real.

---

## 2. 🗂️ Arquivos do Projeto

```
study-dev/
├── cronograma_junior.html     ← SPA principal (toda a UI vive aqui)
├── js/
│   ├── app.js                 ← Motor central: estado, eventos, Pyodide, timers
│   └── data.js                ← Banco de dados do currículo (~8.600 linhas, ~410KB)
└── memoria_projeto_lms.md     ← Este arquivo consolidado
```

---

## 3. ⚙️ Stack Técnica da Plataforma

| Camada | Tecnologia | Função |
|--------|-----------|--------|
| **Estrutura** | HTML5 (SPA) | Single Page Application sem framework |
| **Estilo** | Vanilla CSS | Dark mode, glassmorphism, animações |
| **Lógica** | Vanilla JavaScript | Motor completo de estado e eventos |
| **Markdown** | `marked.js` via CDN | Renderiza conteúdo de aulas do data.js |
| **Python** | `Pyodide` via CDN | Terminal Python real via WebAssembly |
| **Persistência** | `localStorage` | Estado do progresso (chave: `lms_jr_state_v2`) |
| **Backup** | Export/Import `.json` | Save-state portável para evitar perda de cache |

---

## 4. 🚀 Funcionalidades Implementadas

### Core da Plataforma
- ✅ **SPA com navegação** — meses, semanas e aulas sem reload.
- ✅ **Progresso persistido** — localStorage com backup em `.json`.
- ✅ **Botão de reset** — canto superior direito com confirmação.
- ✅ **Exportar / Importar progresso** — download e upload de `.json`.

### Módulos de Aprendizado
- ✅ **Aulas com Markdown** — conteúdo renderizado via marked.js.
- ✅ **Flashcards 3D** — flip animation CSS, frente/verso.
- ✅ **Quiz inline** — por aula, com feedback imediato e explicação.
- ✅ **Exame Semanal** — 4 questões de revisão por semana.
- ✅ **Palácio da Memória** — analogia visual/narrativa por semana.

### Widgets de UX
- ✅ **Terminal Python (Pyodide)** — executa código Python real no browser.
- ✅ **Timer Pomodoro** — 25min foco / 5min pausa com `setInterval`.
- ✅ **UI dark mode** com glassmorphism e micro-animações.

---

## 5. 📚 Fases de Expansão e Currículo Completo

O projeto passou por um ciclo intensivo de ampliação, elevando o conteúdo de 4 para **8 aulas semanais**, focando em "Corporate Grade" (padrão mercado).

### Fase 1: Mês 1 e Mês 2 (Back-end Core)
*   **Mês 1 (Python Fundamentals):** Expansão profunda nas estruturas de dados (Listas, Tuplas, Dicionários), controle de fluxo, escopo de variáveis e complexidade assintótica (Big-O).
*   **Mês 2 (FastAPI & OOP):** Adição de POO Avançada (Herança, Polimorfismo, Dunder Methods), routers, injeção de dependências no FastAPI, e cobertura de testes robusta com pytest.

### Fase 2: Mês 3 e Mês 4 (Persistência e Front-end Escalável)
*   **Mês 3 (Banco de Dados Avançado):** ACID, Views, Triggers, Subqueries, CTEs, Alembic Migrations, e mitigação do N+1 problem usando Eager Loading no SQLAlchemy.
*   **Mês 4 (React Profissional):** Transição de estado básico para mercado com: `useRef`, `React.memo`, Outlet Router, `useReducer`/Redux, React Hook Form + Zod, e TanStack Query (React Query) com interceptors Axios.

### Fase 3: Mês 5 e Mês 6 (Infraestrutura e Mercado)
*   **Mês 5 (Docker & Deploy):** Volumes, redes (Bridge/Host), Multi-stage builds, Docker Compose Profiles e depends_on healthy. Introdução robusta a CI/CD no GitHub Actions (Matrix, Cache, Environments) e Deploy (Nginx, Certbot SSL, PM2).
*   **Mês 6 (Projeto Final e Carreira):** ERDs (Mermaid), Git Flow, MVP ágil e Profiling. Arquitetura passiva via Webhooks e Celery/RabbitMQ. Otimização implacável para ATS no currículo, LinkedIn SEO e método STAR para soft skills.

### Fase 4: Blindagem de Segurança (SPA Security)
*   **Web Worker Isolado:** Remoção do Pyodide da thread principal para um Worker descartável (`py-worker.js`) com *Auto-Timeout* de 5 segundos, prevenindo ataques de negação de serviço (DoS) via loops infinitos.
*   **Sanitização Rigorosa:** Implementação do `DOMPurify` acoplado ao `marked.js` e *HTML Encoding* nas URLs de Hash, neutralizando vetores de XSS na manipulação de LocalStorage.
*   **Content Security Policy (CSP):** Adição de cabeçalhos de defesa passiva bloqueando a exfiltração de dados para origens não cadastradas.

---

## 6. 🛠 Desafios Técnicos do Ciclo de Expansão

A injeção de uma carga pedagógica tão alta gerou obstáculos técnicos complexos, que foram superados metodicamente:

1. **Manipulação de Arquivo Maciço:** O `data.js` cresceu enormemente, atingindo mais de 8.600 linhas. Inserir manualmente arrays de objetos (da aula `s5` até `s8`) trouxe perigos reais de corrupção de vírgulas, chaves e colchetes.
2. **Conflito de Template Strings (Crases):** As aulas de programação modernas utilizam vastamente aspas invertidas (crases) nos códigos Markdown. Essas crases conflitavam abertamente com o delimitador das template strings JavaScript (`\``) no `content: \`...\``. 
3. **Resolução de Bugs (Debugging Automático):** Desenvolvemos um workflow de validação shell rodando `node -e "new Function(code)"`. Isso permitiu verificar instantaneamente a árvore sintática do arquivo, capturando vazamentos de template literals e balanceamento de chaves sem precisar debugar "no olho" num arquivo de meio megabyte.

---

## 7. 🧱 Estrutura Padrão de Cada Semana no data.js

```javascript
"m1w1": {
    title: "Semana X: Título",
    subtitle: "Subtítulo",
    studies: [
        {
            id: "m1w1-s1",
            title: "1. Tópico",
            content: `# Markdown com código`,
            flashcards: [{ front: "Conceito", back: "Definição" }],
            quiz: {
                question: "Pergunta?",
                options: [
                    { text: "...", correct: false, feedback: "..." },
                    { text: "...", correct: true,  feedback: "Correto!" }
                ]
            }
        }
        // ... repete até mXwY-s8 (8 lições completas por semana)
    ],
    memoryPalace: { title: "Palácio: ...", content: `Analogia narrativa` },
    exam: [{ question: "...", options: [...], correctIndex: 1 }] // 4 questões por semana
}
```

---

## 8. 💡 Decisões de Design

| Decisão | Razão |
|---------|-------|
| **Markdown no data.js** | ~80% menos tokens vs HTML raw |
| **Client-side puro** | Zero custo de hosting, latência zero |
| **localStorage + JSON export** | Portabilidade total sem precisar de servidor |
| **8 aulas por semana** | Escalamos a densidade para forjar hábitos de programação extremos |
| **Palácio da Memória** | Mnemônicas narrativas para retenção de conteúdo técnico |

---

## 9. 📈 Métricas Atualizadas

| Métrica | Valor |
|---------|-------|
| Semanas de conteúdo | **24 semanas (6 Meses)** |
| Aulas totais | **192 aulas** |
| Flashcards | **~384+ cards** |
| Quizzes inline | **192 quizzes** |
| Questões de exame | **96 questões** |
| Palácios da Memória | **24 analogias** |
| Linhas no data.js | **~8.600 linhas** |
| Tamanho do data.js | **~410KB** |

---

## 10. 🔮 Roadmap Futuro

### Alta Prioridade
- [ ] **Validação UI de Massa** — Confirmar o layout do menu lateral com 32 lições acumuladas num mês.
- [ ] **SRS (Spaced Repetition)** — Algoritmo tipo Anki para injetar flashcards de semanas passadas no loop atual.

### Média Prioridade
- [ ] **Busca Global** — Filtrar aulas por palavra-chave e redirecionar para a respectiva tab.
- [ ] **Toggle dark/light mode**
- [ ] **Integração Externa Opcional** — Save-state no Firebase para acessibilidade cross-device.

---

## 11. 🔑 Informações para Retomada

**Chave do localStorage em uso:**
```javascript
const STATE_KEY = 'lms_jr_state_v2';
```

**Dependências CDN (Não remover do index.html):**
```html
<script src="https://cdn.jsdelivr.net/npm/dompurify@3.0.9/dist/purify.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"></script>
<!-- O Pyodide agora é instanciado silenciosamente via importScripts() dentro de js/py-worker.js -->
```

---
*"Não existe 'perfeito' — existe 'lançado'. Código escrito e entregue vence teoria eterna."*
