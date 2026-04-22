const fs = require('fs');
let c = fs.readFileSync('a:/AI/code-projects/chad-devstudy/js/data.js', 'utf8');

c = c.replace(/                \},\r?\n            \{\r?\n                id: "/g, '                }\n            },\n            {\n                id: "');

fs.writeFileSync('a:/AI/code-projects/chad-devstudy/js/data.js', c);
console.log('Restored lesson brackets');
