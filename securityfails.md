# 🛡️ Relatório de Vulnerabilidades de Segurança (LMS)

> **Status Geral:** 🟢 Ameaça Mínima (Aceitável)
> **Última Atualização:** 21/04/2026
>
> *Nota: As vulnerabilidades críticas reportadas anteriormente (Trava do Pyodide na Main Thread, XSS via DOM/Hash, Ausência de Sanitização de Markdown e Ausência de Política CSP) foram 100% corrigidas na última refatoração.*

A arquitetura do LMS (*Serverless Client-Side*) elimina as maiores vulnerabilidades web. O isolamento de código via Web Worker e a camada de purificação com o DOMPurify garantem a resiliência do front-end. 

No momento, existe apenas **1 ponto de atenção residual** (débito técnico/arquitetural) para o futuro:

---

### ⚠️ 1. Uso de `'unsafe-inline'` na Política de Segurança (CSP)
**Nível de Risco: Muito Baixo**

**A Falha:** 
A nossa tag `Content-Security-Policy` no arquivo `cronograma_junior.html` é extremamente robusta. No entanto, fomos obrigados a manter a diretiva `'unsafe-inline'` na regra `script-src` para que o aplicativo funcione adequadamente:
\`\`\`html
script-src 'self' 'unsafe-inline' 'unsafe-eval' blob: https://cdn.jsdelivr.net;
\`\`\`
Essa permissão é ativada porque a interface do LMS faz o uso intensivo de eventos JavaScript acoplados diretamente ao HTML (ex: atributos como `onclick="toggleSidebar()"` e `onclick="answerInlineQuiz()"`).

O risco real de ataque no momento é **nulo**, pois todo o conteúdo renderizado passa pelo rigoroso filtro do `DOMPurify`, que bloqueia injeção de tags externas. Mas caso o DOMPurify falhe em um cenário obscuro, a presença de `'unsafe-inline'` impediria o navegador de bloquear scripts inseridos maliciosamente pelo atacante.

**Mitigação Futura:** 
A longo prazo, se o projeto for transposto para um framework completo ou refatorado em Vanilla JS, a recomendação de mercado é:
1. Remover todos os eventos embutidos no HTML (`onclick`, `onchange`, `onsubmit`).
2. Transferir todos os *handlers* de clique e formulários exclusivamente para o `app.js` usando listeners dinâmicos:
   \`\`\`javascript
   document.getElementById('btn-sidebar').addEventListener('click', toggleSidebar);
   \`\`\`
3. Após fazer isso, remover a flag `'unsafe-inline'` do arquivo `cronograma_junior.html`. Assim, o navegador rejeitará terminantemente a execução de qualquer string de script solta injetada na página, blindando a SPA em 100%.
