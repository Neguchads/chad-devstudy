<div align="center">
  <h1>🚀 Study-Dev LMS</h1>
  <p><strong>A Serverless, Fully Client-Side Learning Management System</strong></p>
  
  [![Status](https://img.shields.io/badge/Status-Completed-success.svg)](#)
  [![License](https://img.shields.io/badge/License-MIT-blue.svg)](#)
  [![Tech](https://img.shields.io/badge/Vanilla-JS%20%7C%20CSS%20%7C%20HTML-f0db4f.svg)](#)
</div>

<br />

O **Study-Dev LMS** é uma plataforma educacional interativa de ponta a ponta projetada para rodar **100% no navegador** (Client-Side). Sem necessidade de banco de dados externo ou back-end hospedado, ele renderiza um currículo extensivo em Markdown, persistindo o estado via \`localStorage\` com recursos completos de gamificação e produtividade.

Desenvolvido como um projeto portável, seu currículo atual foca na formação "Zero to Junior" para Desenvolvedores de Software, contando com mais de **190 aulas, quizzes e flashcards**.

---

## ✨ Features Principais

* ⚡ **Arquitetura Serverless:** Tudo acontece no lado do cliente. Os dados vivem em um objeto JSON nativo para renderização instantânea, resultando em latência zero.
* 📚 **Renderização Rica:** Aulas escritas em Markdown (via \`marked.js\`), renderizando perfeitamente snippets de código e diagramas.
* 🧠 **Retenção Ativa:**
  * **Flashcards 3D** iterativos (flip dinâmico em CSS).
  * **Quizzes Inline** ao final de cada lição com feedback imediato.
  * **Exames Semanais** para revisão consolidada.
  * **Palácio da Memória:** Mnemônicas e metáforas narrativas para retenção lúdica.
* 💾 **Persistência Segura:** O estado do usuário (progresso) é salvo automaticamente no \`localStorage\`, com suporte nativo a importação/exportação de backups \`.json\`.
* 🐍 **Execução de Código em Tempo Real:** Terminal integrado executando Python puro direto no browser através de **WebAssembly** (\`Pyodide\`). Rodando em background via Web Workers para evitar travamentos (Anti-DoS).
* 🛡️ **Blindagem Front-end:** Proteção ativa com Sanitização de Markdown (\`DOMPurify\`), prevenção de XSS via escaping de rotas e políticas estritas de Content-Security-Policy (CSP).
* ⏳ **Produtividade (Pomodoro):** Timer integrado à plataforma focado em blocos de foco profundo de 25 minutos.
* 🎨 **Design Moderno:** Interface no estilo "Dark Mode" contendo Glassmorphism e micro-animações CSS.

---

## 🛠️ Stack Tecnológica

| Camada | Tecnologia Principal | Descrição |
|--------|----------------------|-----------|
| **Core UI** | HTML5 / Vanilla JS | Criação da Single Page Application (SPA). |
| **Estilização** | Vanilla CSS | Design system sem frameworks externos. |
| **Parser** | \`marked.js\` | Transpilação de Markdown para HTML em tempo de execução. |
| **Engine** | \`Pyodide\` (WASM) | Interpretador Python real embutido na aplicação web. |
| **Isolamento** | \`Web Workers\` | Execução do Python em background thread (Auto-timeout). |
| **Segurança** | \`DOMPurify\` & CSP | Proteção contra injeções XSS e exfiltração de dados. |
| **Storage** | \`localStorage\` API | Persistência local atrelada ao domínio. |

---

## 🚀 Como Rodar Localmente

A beleza desta arquitetura é que **não há processo de build** e **não há dependências do Node.js**. Você não precisa rodar \`npm install\`.

1. **Clone o repositório:**
   \`\`\`bash
   git clone https://github.com/seu-usuario/study-dev.git
   \`\`\`

2. **Abra o arquivo no seu navegador:**
   - Você pode simplesmente dar um duplo-clique no arquivo \`index.html\` para abri-lo localmente (o protocolo \`file://\` suporta a maioria das funções).
   - *Alternativa recomendada (para evitar bloqueios CORS de fontes/Módulos):* Rode um servidor estático simples. Se tiver o Python instalado:
     \`\`\`bash
     python -m http.server 3000
     \`\`\`
   - Acesse \`http://localhost:3000/\`.

---

## 📁 Estrutura do Projeto

\`\`\`text
study-dev/
├── index.html                 # SPA de Entrada (Layout, Views, DOM Nodes)
├── memory.md                  # Histórico e arquitetura profunda do projeto
├── README.md                  # Este arquivo
└── js/
    ├── app.js                 # Engine principal: Roteamento, Eventos, Estado, Timer
    ├── py-worker.js           # Web Worker isolado rodando o Python (Pyodide)
    └── data.js                # Database em JS puro (~8.600 linhas, contém todo o currículo)
\`\`\`

---

## 📖 Visão Geral do Currículo Atual (6 Meses)

A grade atual está densamente construída com foco na "Escola Corporate", entregando de 4 a 8 lições por semana.

* **Mês 1 (Base):** Fundamentos Python, Estruturas de Dados e Big-O.
* **Mês 2 (Back-end & POO):** POO Avançada, FastAPI, Pydantic, e Testes.
* **Mês 3 (Persistência):** PostgreSQL Avançado (CTEs, Subqueries, N+1 problem) e SQLAlchemy ORM.
* **Mês 4 (Front-end Moderno):** React escalável (useRef, Redux, React Hook Form + Zod, TanStack Query).
* **Mês 5 (DevOps & Deploy):** Docker, Multi-stage builds, Compose, CI/CD com GitHub Actions, e Deploy em Nuvem.
* **Mês 6 (Projeto & Carreira):** ERDs, Git Flow, Filas/Webhooks (RabbitMQ), e Otimização para ATS/LinkedIn.

---

## 🔮 Roadmap / Próximos Passos

- [ ] **Integração de Spaced Repetition System (SRS):** Lógica nativa tipo Anki para injetar revisões espaçadas de flashcards.
- [ ] **Search Engine Global:** Implementar pesquisa client-side entre todo o \`data.js\` mapeando a rota/semana.
- [ ] **Sincronização Cloud Opcional:** Feature opt-in para ligar Firebase/Supabase e não depender estritamente de import/export de JSON para transitar entre devices.

---
<div align="center">
  <i>"Não existe perfeito — existe lançado."</i><br>
  Criado por <a href="#">Seu Nome</a>
</div>
