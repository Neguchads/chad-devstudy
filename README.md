<div align="center">
  <h1>🚀 Chad-DevStudy LMS</h1>
  <p><strong>A Serverless, Fully Client-Side Learning Management System</strong></p>
  
  [![Status](https://img.shields.io/badge/Status-Completed-success.svg)](#)
  [![License](https://img.shields.io/badge/License-MIT-blue.svg)](#)
  [![Tech](https://img.shields.io/badge/Vanilla-JS%20%7C%20CSS%20%7C%20HTML-f0db4f.svg)](#)
</div>

<div align="center">
  <h4>
    <a href="#english-version">🇺🇸 Read in English</a> | 
    <a href="#versão-em-português">🇧🇷 Leia em Português</a>
  </h4>
</div>

---

<h2 id="english-version">🇺🇸 English Version</h2>

> **Note on Content Language:** While the platform's engine, architecture, and codebase are built for global scale (100% Client-Side), the *curriculum content* inside the database (`data.js`) is currently written in Portuguese (PT-BR), as it was originally designed for the Brazilian educational market.

The **Chad-DevStudy LMS** is an end-to-end interactive educational platform designed to run **100% in the browser** (Client-Side). With no external database or hosted back-end required, it renders an extensive Markdown curriculum, persisting state via `localStorage` with full gamification and productivity features.

Developed as a portable project, its current curriculum focuses on a "Zero to Junior" roadmap for Software Developers, featuring over **192 lessons, quizzes, and flashcards**.

### ✨ Key Features

* ⚡ **Serverless Architecture:** Everything happens on the client side. Data lives in a native JSON object for instant rendering, resulting in zero latency.
* 📚 **Rich Rendering:** Lessons written in Markdown (via `marked.js`), perfectly rendering code snippets and diagrams.
* 🧠 **Active Retention:**
  * Interactive **3D Flashcards** (CSS dynamic flip).
  * **Inline Quizzes** at the end of each lesson with immediate feedback.
  * **Weekly Exams** for consolidated review.
  * **Memory Palace:** Narrative mnemonics and metaphors for playful retention.
* 💾 **Secure Persistence:** User state (progress) is automatically saved in `localStorage`, with native support for importing/exporting `.json` backups.
* 🐍 **Real-Time Code Execution:** Integrated terminal running pure Python directly in the browser via **WebAssembly** (`Pyodide`). Runs in the background via Web Workers to prevent UI freezing (Anti-DoS).
* 🛡️ **Front-End Hardening:** Active protection with Markdown Sanitization (`DOMPurify`), XSS prevention via route escaping, and strict Content-Security-Policy (CSP).
* ⏳ **Productivity (Pomodoro):** Integrated timer focused on 25-minute deep focus blocks.
* 🎨 **Modern Design:** "Dark Mode" interface featuring Glassmorphism and CSS micro-animations.

### 🛠️ Tech Stack

| Layer | Main Technology | Description |
|--------|----------------------|-----------|
| **Core UI** | HTML5 / Vanilla JS | Single Page Application (SPA) creation. |
| **Styling** | Vanilla CSS | Design system without external frameworks. |
| **Parser** | `marked.js` | Runtime Markdown to HTML transpilation. |
| **Engine** | `Pyodide` (WASM) | Real Python interpreter embedded in the web app. |
| **Isolation**| `Web Workers` | Python execution in background thread (Auto-timeout). |
| **Security** | `DOMPurify` & CSP | Protection against XSS injections and data exfiltration. |
| **Storage** | `localStorage` API | Local persistence tied to the domain. |

### 🚀 How to Run Locally

The beauty of this architecture is that **there is no build process** and **no Node.js dependencies**. You don't need to run `npm install`.

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Neguchads/chad-devstudy.git
   ```

2. **Open the file in your browser:**
   - You can simply double-click the `index.html` file to open it locally (the `file://` protocol supports most functions).
   - *Recommended alternative (to avoid CORS blocking for fonts/modules):* Run a simple static server. If you have Python installed:
     ```bash
     python -m http.server 3000
     ```
   - Access `http://localhost:3000/`.

---

<h2 id="versão-em-português">🇧🇷 Versão em Português</h2>

O **Chad-DevStudy LMS** é uma plataforma educacional interativa de ponta a ponta projetada para rodar **100% no navegador** (Client-Side). Sem necessidade de banco de dados externo ou back-end hospedado, ele renderiza um currículo extensivo em Markdown, persistindo o estado via `localStorage` com recursos completos de gamificação e produtividade.

Desenvolvido como um projeto portável, seu currículo atual foca na formação "Zero to Junior" para Desenvolvedores de Software, contando com mais de **192 aulas, quizzes e flashcards**.

### ✨ Features Principais

* ⚡ **Arquitetura Serverless:** Tudo acontece no lado do cliente. Os dados vivem em um objeto JSON nativo para renderização instantânea, resultando em latência zero.
* 📚 **Renderização Rica:** Aulas escritas em Markdown (via `marked.js`), renderizando perfeitamente snippets de código e diagramas.
* 🧠 **Retenção Ativa:**
  * **Flashcards 3D** iterativos (flip dinâmico em CSS).
  * **Quizzes Inline** ao final de cada lição com feedback imediato.
  * **Exames Semanais** para revisão consolidada.
  * **Palácio da Memória:** Mnemônicas e metáforas narrativas para retenção lúdica.
* 💾 **Persistência Segura:** O estado do usuário (progresso) é salvo automaticamente no `localStorage`, com suporte nativo a importação/exportação de backups `.json`.
* 🐍 **Execução de Código em Tempo Real:** Terminal integrado executando Python puro direto no browser através de **WebAssembly** (`Pyodide`). Rodando em background via Web Workers para evitar travamentos (Anti-DoS).
* 🛡️ **Blindagem Front-end:** Proteção ativa com Sanitização de Markdown (`DOMPurify`), prevenção de XSS via escaping de rotas e políticas estritas de Content-Security-Policy (CSP).
* ⏳ **Produtividade (Pomodoro):** Timer integrado à plataforma focado em blocos de foco profundo de 25 minutos.
* 🎨 **Design Moderno:** Interface no estilo "Dark Mode" contendo Glassmorphism e micro-animações CSS.

### 🛠️ Stack Tecnológica

| Camada | Tecnologia Principal | Descrição |
|--------|----------------------|-----------|
| **Core UI** | HTML5 / Vanilla JS | Criação da Single Page Application (SPA). |
| **Estilização** | Vanilla CSS | Design system sem frameworks externos. |
| **Parser** | `marked.js` | Transpilação de Markdown para HTML em tempo de execução. |
| **Engine** | `Pyodide` (WASM) | Interpretador Python real embutido na aplicação web. |
| **Isolamento** | `Web Workers` | Execução do Python em background thread (Auto-timeout). |
| **Segurança** | `DOMPurify` & CSP | Proteção contra injeções XSS e exfiltração de dados. |
| **Storage** | `localStorage` API | Persistência local atrelada ao domínio. |

### 🚀 Como Rodar Localmente

A beleza desta arquitetura é que **não há processo de build** e **não há dependências do Node.js**. Você não precisa rodar `npm install`.

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/Neguchads/chad-devstudy.git
   ```

2. **Abra o arquivo no seu navegador:**
   - Você pode simplesmente dar um duplo-clique no arquivo `index.html` para abri-lo localmente (o protocolo `file://` suporta a maioria das funções).
   - *Alternativa recomendada (para evitar bloqueios CORS de fontes/Módulos):* Rode um servidor estático simples. Se tiver o Python instalado:
     ```bash
     python -m http.server 3000
     ```
   - Acesse `http://localhost:3000/`.

---

<div align="center">
  <i>"Não existe perfeito — existe lançado."</i><br>
  Criado por <strong>Gustavo (Chad-DevStudy)</strong>
</div>
