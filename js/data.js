const courseData = {
    // ==========================================
    // MÊS 1
    // ==========================================
    "m1w1": {
        title: "Semana 1: Estruturas de Dados Básicas",
        subtitle: "O Alicerce da Engenharia de Software",
        studies: [
            {
                id: "m1w1-s1",
                title: "1. Variáveis e Tipos Primitivos",
                content: `
Em Python, tudo é um objeto. Os tipos primitivos são os blocos de construção de qualquer programa. Entender como eles funcionam na memória é o primeiro passo.

- **int**: Números inteiros.
- **float**: Números com ponto flutuante (decimais).
- **str**: Strings (textos).
- **bool**: Booleanos (Verdadeiro ou Falso).

\`\`\`python
idade = 25 # int
peso = 70.5 # float
nome = "Ana" # str
logado = True # bool
\`\`\`
                `,
                flashcards: [
                    { front: "int", back: "Tipo de dado numérico inteiro." },
                    { front: "bool", back: "Tipo lógico, assume apenas True ou False." }
                ],
                quiz: {
                    question: "Qual o tipo de dado da variável `valor = '10'`?",
                    options: [
                        { text: "int", correct: false, feedback: "Apesar de conter números, está entre aspas." },
                        { text: "str", correct: true, feedback: "Exato! Qualquer valor entre aspas é tratado como String." },
                        { text: "float", correct: false, feedback: "Floats são números com casas decimais (ex: 10.0)." }
                    ]
                }
            },
            {
                id: "m1w1-s2",
                title: "2. Listas e Tuplas (Mutabilidade vs Imutabilidade)",
                content: `
**Listas** (\`list\`) são coleções ordenadas e mutáveis. **Tuplas** (\`tuple\`) são ordenadas, porém estritamente **imutáveis**.

Usamos Tuplas quando queremos garantir que os dados não sofrerão alterações ao longo do programa (ex: coordenadas, configurações).

\`\`\`python
# Lista
usuarios = ["Ana", "Carlos"]
usuarios[0] = "Maria" # OK

# Tupla
coordenadas = (-23.5, -46.6)
# coordenadas[0] = 0 # Gera um TypeError
\`\`\`
                `,
                flashcards: [
                    { front: "Mutável", back: "Um objeto cujo estado (valor) pode ser alterado após a criação (ex: Listas)." },
                    { front: "Imutável", back: "Um objeto que NÃO pode ser alterado após criado (ex: Tuplas, Strings)." }
                ],
                quiz: {
                    question: "Por que usar uma Tupla em vez de uma Lista?",
                    options: [
                        { text: "Para ordenar os dados automaticamente.", correct: false, feedback: "Tuplas não ordenam dados sozinhas." },
                        { text: "Para garantir que os dados não sejam modificados acidentalmente e economizar memória.", correct: true, feedback: "Perfeito! A imutabilidade traz segurança e performance." },
                        { text: "Para permitir adição de novos elementos.", correct: false, feedback: "Tuplas não permitem `.append()`." }
                    ]
                }
            },
            {
                id: "m1w1-s3",
                title: "3. Dicionários (Dicts) e Tabelas Hash",
                content: `
Dicionários (\`dict\`) armazenam pares de chave-valor. Eles utilizam **Tabelas Hash** por baixo dos panos, o que significa que buscar um valor pela sua chave é extremamente rápido, independentemente do tamanho do dicionário (complexidade O(1)).

\`\`\`python
config = {
    "host": "localhost",
    "port": 5432
}
print(config["port"]) # Acesso instantâneo O(1)
\`\`\`
                `,
                flashcards: [
                    { front: "Tabela Hash", back: "Estrutura de dados subjacente dos dicionários. Permite buscas extremamente rápidas." },
                    { front: "Chave (Key)", back: "O identificador único usado para acessar um valor no dicionário. Deve ser de tipo imutável." }
                ],
                quiz: {
                    question: "O que torna a busca em dicionários muito mais rápida que em listas não ordenadas?",
                    options: [
                        { text: "O uso de Tabelas Hash (Mapeamento direto na memória).", correct: true, feedback: "Isso mesmo! O hash da chave indica o endereço direto do valor na memória." },
                        { text: "O dicionário ordena os itens automaticamente.", correct: false, feedback: "A ordenação não é o motivo da velocidade (O(1))." }
                    ]
                }
            },
            {
                id: "m1w1-s4",
                title: "4. Sets (Conjuntos)",
                content: `
**Sets** são coleções não ordenadas de elementos **únicos**. São ideais para remover duplicatas de uma lista ou para verificar rapidamente se um elemento existe no conjunto.

\`\`\`python
cpfs = {"123", "456", "123"}
print(cpfs) # Retorna {"123", "456"} - Duplicata ignorada
\`\`\`
                `,
                flashcards: [
                    { front: "Set", back: "Coleção não ordenada de elementos únicos." },
                    { front: "Vantagem do Set", back: "Remoção de duplicatas e verificações de existência (in) ultra-rápidas O(1)." }
                ],
                quiz: {
                    question: "Se você converter uma Lista com 5 elementos iguais para um Set, qual será o tamanho do Set?",
                    options: [
                        { text: "5", correct: false, feedback: "O Set remove duplicatas." },
                        { text: "1", correct: true, feedback: "Correto! Todos os repetidos são descartados, sobrando apenas um valor único." }
                    ]
                }
            },
            {
                id: "m1w1-s5",
                title: "5. Comprehensions — Listas, Dicts e Sets",
                content: `
**List comprehensions** substituem loops simples por uma sintaxe expressiva e mais rápida:

\`\`\`python
# Jeito verboso
quadrados = []
for n in range(10):
    quadrados.append(n ** 2)

# List comprehension
quadrados = [n ** 2 for n in range(10)]

# Com filtro
pares = [n for n in range(20) if n % 2 == 0]

# Dict comprehension
notas = {"Ana": 9, "Pedro": 6, "Lia": 8}
aprovados = {nome: nota for nome, nota in notas.items() if nota >= 7}
# {'Ana': 9, 'Lia': 8}

# Set comprehension — já garante unicidade
letras_unicas = {c.lower() for c in "Python"}
\`\`\`

> ⚡ Comprehensions são **30-50% mais rápidas** que loops equivalentes pois são otimizadas internamente.
`,
                flashcards: [
                    { front: "List Comprehension", back: "[expressão for item in iterável if condição] — forma concisa de criar listas com filtro opcional." },
                    { front: "Dict Comprehension", back: "{chave: valor for k, v in dict.items()} — cria dicionários a partir de iteráveis." },
                    { front: "Quando NÃO usar comprehension", back: "Quando a lógica tem mais de 2 condições ou transformações — prefira um loop explícito para clareza." }
                ],
                quiz: {
                    question: "Qual comprehension gera apenas números ímpares entre 1 e 10?",
                    options: [
                        { text: "[n for n in range(10) if n % 2 == 0]", correct: false, feedback: "Esse filtra pares (resto 0), não ímpares." },
                        { text: "[n for n in range(1, 11) if n % 2 != 0]", correct: true, feedback: "Correto! range(1,11) vai de 1 a 10, e `n % 2 != 0` filtra os ímpares." },
                        { text: "{n for n in range(10) if n % 2}", correct: false, feedback: "Isso é um set comprehension — correto logicamente mas gera set, não lista." }
                    ]
                }
            },
            {
                id: "m1w1-s6",
                title: "6. Generators e Iteradores",
                content: `
**Generators** produzem valores sob demanda — economizam memória ao processar dados grandes:

\`\`\`python
# Lista: carrega TUDO na memória
milhao = [n ** 2 for n in range(1_000_000)]  # ~8MB na RAM

# Generator: processa um por vez
milhao_gen = (n ** 2 for n in range(1_000_000))  # ~200 bytes!

# Função geradora com yield
def fibonacci():
    a, b = 0, 1
    while True:
        yield a          # Pausa aqui, retorna 'a'
        a, b = b, a + b  # Retoma aqui na próxima chamada

fib = fibonacci()
print(next(fib))  # 0
print(next(fib))  # 1
print(next(fib))  # 1
print(next(fib))  # 2

# Usar generator com for
for num in fibonacci():
    if num > 100:
        break
    print(num)
\`\`\`
`,
                flashcards: [
                    { front: "yield", back: "Pausa a função e retorna um valor. Na próxima chamada, retoma de onde parou." },
                    { front: "next(gen)", back: "Avança o generator um passo, executando até o próximo yield." },
                    { front: "Generator vs Lista", back: "Generator: O(1) memória, lazy. Lista: O(n) memória, eager. Use generator para dados grandes." }
                ],
                quiz: {
                    question: "Por que um generator é mais eficiente que uma lista para processar 10 milhões de registros de um arquivo?",
                    options: [
                        { text: "Generators são mais rápidos em CPU.", correct: false, feedback: "CPU não é o diferencial — é memória." },
                        { text: "Generators processam um item por vez sem carregar tudo na RAM.", correct: true, feedback: "Correto! Uma lista de 10M itens pode ocupar GBs; o generator ocupa bytes independente do tamanho." },
                        { text: "Generators funcionam em múltiplas threads.", correct: false, feedback: "Isso é concorrência — não tem relação com generators." }
                    ]
                }
            },
            {
                id: "m1w1-s7",
                title: "7. Desestruturação, Unpacking e *args/**kwargs",
                content: `
\`\`\`python
# Unpacking básico
a, b, c = [1, 2, 3]
primo, *resto = [2, 3, 5, 7, 11]  # primo=2, resto=[3,5,7,11]
*inicio, ultimo = range(5)         # inicio=[0,1,2,3], ultimo=4

# Swap sem variável temporária
x, y = 10, 20
x, y = y, x  # x=20, y=10

# *args — número variável de argumentos posicionais
def somar(*nums):
    return sum(nums)

somar(1, 2, 3, 4, 5)  # 15

# **kwargs — número variável de argumentos nomeados
def criar_usuario(**dados):
    return dados

criar_usuario(nome="Ana", email="ana@py.com", admin=True)
# {'nome': 'Ana', 'email': 'ana@py.com', 'admin': True}

# Desempacotando ao chamar funções
def area(largura, altura):
    return largura * altura

medidas = {"largura": 5, "altura": 3}
area(**medidas)  # = area(largura=5, altura=3)
\`\`\`
`,
                flashcards: [
                    { front: "*args", back: "Captura argumentos posicionais extras como tupla. def f(*args): args é uma tupla." },
                    { front: "**kwargs", back: "Captura argumentos nomeados extras como dicionário. def f(**kwargs): kwargs é um dict." },
                    { front: "Starred unpacking (*)", back: "*resto captura 'o resto' de uma sequência ao fazer unpacking." }
                ],
                quiz: {
                    question: "O que `primeiro, *meio, ultimo = [1,2,3,4,5]` atribui a `meio`?",
                    options: [
                        { text: "[2]", correct: false, feedback: "meio captura tudo entre primeiro e último." },
                        { text: "[2, 3, 4]", correct: true, feedback: "Correto! primeiro=1, meio=[2,3,4], ultimo=5." },
                        { text: "(2, 3, 4)", correct: false, feedback: "Starred unpacking sempre produz uma lista, não tupla." }
                    ]
                }
            },
            {
                id: "m1w1-s8",
                title: "8. Funções de Ordem Superior e Lambdas",
                content: `
Funções são **objetos de primeira classe** em Python — podem ser passadas como argumentos e retornadas por outras funções.

\`\`\`python
# Função como argumento
def aplicar(func, valor):
    return func(valor)

aplicar(str.upper, "python")  # 'PYTHON'

# Lambda — função anônima de uma linha
dobro = lambda x: x * 2
dobro(5)  # 10

# sorted com key function
usuarios = [
    {"nome": "Pedro", "idade": 30},
    {"nome": "Ana",   "idade": 25},
    {"nome": "Lia",   "idade": 28}
]
ordernados = sorted(usuarios, key=lambda u: u["idade"])

# map e filter com lambdas
numeros = [1, 2, 3, 4, 5]
dobros = list(map(lambda n: n * 2, numeros))   # [2,4,6,8,10]
pares  = list(filter(lambda n: n % 2 == 0, numeros))  # [2,4]

# Closure — função que "lembra" do escopo externo
def multiplicador(fator):
    def inner(n):
        return n * fator
    return inner

triplo = multiplicador(3)
triplo(7)  # 21
\`\`\`
`,
                flashcards: [
                    { front: "Função de Ordem Superior", back: "Função que recebe ou retorna outra função. Ex: map(), filter(), sorted(key=...)." },
                    { front: "Lambda", back: "Função anônima de expressão única. lambda x: x*2. Use para funções simples inline." },
                    { front: "Closure", back: "Função interna que acessa variáveis do escopo externo mesmo após o escopo externo encerrar." }
                ],
                quiz: {
                    question: "Para ordenar uma lista de dicionários pelo campo 'preco' em ordem decrescente, use:",
                    options: [
                        { text: "sorted(lista, key=lambda x: x['preco'])", correct: false, feedback: "Esse ordena crescente — falta reverse=True." },
                        { text: "sorted(lista, key=lambda x: x['preco'], reverse=True)", correct: true, feedback: "Correto! reverse=True inverte para decrescente." },
                        { text: "lista.sort('preco', desc=True)", correct: false, feedback: "sort() não aceita argumentos assim — a sintaxe está errada." }
                    ]
                }
            }
        ],
        memoryPalace: {
            title: "Palácio da Memória: O Prédio dos Dados",
            content: `
Para fixar a Semana 1, feche os olhos e imagine um **prédio comercial**:

- **A Recepção (Variáveis Primitivas):** Onde os dados básicos chegam. Você tem crachás de funcionários (Strings), moedas do café (Integers) e balanças (Floats).
- **O Arquivo Dinâmico (Listas):** Uma sala com estantes infinitas onde pastas podem ser movidas, adicionadas ou deletadas livremente. É organizado (índices 0, 1, 2), mas instável.
- **O Cofre de Aço (Tuplas):** Dentro do arquivo, há um cofre onde você guarda o contrato social da empresa. Uma vez impresso, não pode ser alterado. Seguro e fixo.
- **O Guichê Express (Dicionários):** Você entrega o CPF da pessoa (Chave) e a recepcionista devolve a ficha dela instantaneamente. Sem precisar procurar nas gavetas, graças à Tabela Hash.
- **A Catraca Biométrica (Sets):** Não permite que a mesma pessoa entre duas vezes. Se o seu polegar já passou hoje, a duplicata é rejeitada. Apenas identidades únicas lá dentro.
            `
        },
        exam: [
            {
                question: "1. Qual estrutura nativa do Python é ideal para armazenar os IDs únicos dos clientes extraídos de um banco de dados para checagem rápida?",
                options: ["Listas", "Sets", "Tuplas", "Inteiros"],
                correctIndex: 1
            },
            {
                question: "2. Um erro comum no uso de Listas vs Tuplas. Qual código abaixo gera um TypeError?",
                options: [
                    "arr = [1, 2]; arr[0] = 5",
                    "tup = (1, 2); tup[0] = 5",
                    "dic = {'a': 1}; dic['a'] = 2",
                    "Nenhuma das alternativas"
                ],
                correctIndex: 1
            },
            {
                question: "3. Dicionários no Python mapeiam chaves para valores. Por baixo dos panos, o que garante a velocidade de busca dessas chaves?",
                options: ["Árvores Binárias", "Arrays Sequenciais", "Tabelas Hash (Hash Tables)", "Pilhas LIFO"],
                correctIndex: 2
            },
            {
                question: "4. Qual a principal característica de uma String em Python com relação à mutabilidade?",
                options: ["É mutável.", "É imutável.", "Depende da versão do Python."],
                correctIndex: 1
            }
        ]
    },

    "m1w2": {
        title: "Semana 2: Funções e Erros",
        subtitle: "Código Previsível e Resiliente",
        studies: [
            {
                id: "m1w2-s1",
                title: "1. A Anatomia da Função",
                content: `
Funções empacotam lógica para reuso. Em Python, usamos\`def\`. Parâmetros recebem valores, \`return\` os devolve.

\`\`\`python
def saudacao(nome):
    return f"Olá, {nome}!"
\`\`\`
`,
                flashcards: [
                    { front: "def", back: "Palavra reservada usada para definir uma função no Python." },
                    { front: "return", back: "Finaliza a função e retorna um valor para quem a chamou." }
                ],
                quiz: {
                    question: "O que acontece se uma função não tiver a instrução `return`?",
                    options: [
                        { text: "Causa um erro de sintaxe.", correct: false, feedback: "Python permite funções sem return." },
                        { text: "Retorna None.", correct: true, feedback: "Toda função que termina sem return devolve None implicitamente." }
                    ]
                }
            },
            {
                id: "m1w2-s2",
                title: "2. Funções Puras vs Side Effects",
                content: `
Uma **Função Pura** não altera nada no mundo exterior (sem efeitos colaterais) e sempre retorna a mesma saída para os mesmos argumentos. Isso facilita o teste e previne bugs bizarros.

\`\`\`python
# Função Impura (Side Effect)
contador = 0
def incrementa():
    global contador
    contador += 1
\`\`\`
`,
                flashcards: [
                    { front: "Função Pura", back: "Sempre mesma saída para a mesma entrada, e ZERO modificação externa." },
                    { front: "Side Effect (Efeito Colateral)", back: "Quando a função modifica uma variável global, banco de dados ou estado fora do seu escopo local." }
                ],
                quiz: {
                    question: "Atualizar o banco de dados dentro de uma função matemática é considerado:",
                    options: [
                        { text: "Uma boa prática de encapsulamento.", correct: false, feedback: "Isso fere o princípio de responsabilidade única." },
                        { text: "Um Side Effect (Efeito colateral).", correct: true, feedback: "Sim! Funções matemáticas devem apenas retornar cálculos." }
                    ]
                }
            },
            {
                id: "m1w2-s3",
                title: "3. Type Hints (Tipagem Estática Gradual)",
                content: `
Type hints não forçam os tipos em tempo de execução, mas ajudam sua IDE e ferramentas como *mypy* a encontrar erros **antes** de você rodar o código.

\`\`\`python
def soma(a: int, b: int) -> int:
    return a + b
\`\`\`
`,
                flashcards: [
                    { front: "Type Hints", back: "Anotações de tipo que documentam funções e permitem validação estática de erros." }
                ],
                quiz: {
                    question: "O Python impede a execução do código se os tipos dos Type Hints não forem respeitados?",
                    options: [
                        { text: "Sim, ele gera TypeError.", correct: false, feedback: "Em runtime, Python ignora type hints." },
                        { text: "Não. Ele apenas ajuda o linter e o programador a detectar falhas antecipadamente.", correct: true, feedback: "Correto! Type hints não afetam a execução por padrão." }
                    ]
                }
            },
            {
                id: "m1w2-s4",
                title: "4. Tratamento de Exceções (Try/Except)",
                content: `
Aplicações robustas preveem falhas (como perda de rede ou arquivo inexistente). Usar \`try...except\` impede o sistema de crashar e permite lidar com o erro de forma amigável.

\`\`\`python
try:
    resultado = 10 / 0
except ZeroDivisionError:
    print('Não pode dividir por zero!')
\`\`\`
`,
                flashcards: [
                    { front: "try", back: "Bloco onde você coloca o código 'perigoso' que pode falhar." },
                    { front: "except", back: "Bloco que captura e lida com a falha ocorrida no try." }
                ],
                quiz: {
                    question: "Qual palavra-chave é usada para FORÇAR o disparo de uma exceção manualmente?",
                    options: [
                        { text: "raise", correct: true, feedback: "Isso mesmo. `raise ValueError('Dados inválidos')` força o erro." },
                        { text: "throw", correct: false, feedback: "`throw` é usado em JS ou Java, não Python." }
                    ]
                }
            },
            {
                id: "m1w2-s5",
                title: "5. Escopo — LEGB e Variáveis Globais",
                content: `
Python resolve nomes de variáveis seguindo a regra **LEGB**:

\`\`\`
L — Local      → dentro da função atual
E — Enclosing  → funções externas (closures)
G — Global     → nível do módulo
B — Built-in   → nomes do Python (len, print, etc.)
\`\`\`

\`\`\`python
x = "global"

def externa():
    x = "enclosing"
    def interna():
        x = "local"
        print(x)  # 'local' — encontrou primeiro no L
    interna()
    print(x)  # 'enclosing'

externa()
print(x)  # 'global'

# global e nonlocal
contador = 0

def incrementar():
    global contador  # modifica a variável do escopo global
    contador += 1

def externa2():
    n = 0
    def interna2():
        nonlocal n  # modifica a variável do escopo enclosing
        n += 1
    interna2()
    return n  # 1
\`\`\`

> ⚠️ Evite usar a palavra-chave global — é um anti-pattern. Prefira passar e retornar valores explicitamente.
`,
                flashcards: [
                    { front: "LEGB", back: "Ordem de resolução de nomes: Local → Enclosing → Global → Built-in." },
                    { front: "global", back: "Declara que uma variável dentro da função refere-se ao escopo global. Evitar — cria acoplamento." },
                    { front: "nonlocal", back: "Permite modificar variável do escopo enclosing (closure) sem usar global." }
                ],
                quiz: {
                    question: "Sem `global` ou `nonlocal`, uma função pode LEER uma variável externa?",
                    options: [
                        { text: "Não — sempre precisa de global.", correct: false, feedback: "Leitura funciona sem global — apenas escrita precisa da declaração." },
                        { text: "Sim — pode ler variáveis externas pela regra LEGB, mas não modificá-las.", correct: true, feedback: "Correto! Ler segue LEGB automaticamente. Escrever sem global/nonlocal cria uma nova variável local." },
                        { text: "Só pode ler built-ins.", correct: false, feedback: "G (global) também é acessível para leitura." }
                    ]
                }
            },
            {
                id: "m1w2-s6",
                title: "6. Decoradores",
                content: `
**Decoradores** envolvem uma função adicionando comportamento sem modificá-la:

\`\`\`python
import time
import functools

# Decorador de timer
def timer(func):
    @functools.wraps(func)  # preserva nome e docstring da função original
    def wrapper(*args, **kwargs):
        inicio = time.time()
        resultado = func(*args, **kwargs)
        fim = time.time()
        print(f"{func.__name__} demorou {fim - inicio:.4f}s")
        return resultado
    return wrapper

@timer  # equivale a: calcular = timer(calcular)
def calcular(n):
    return sum(range(n))

calcular(1_000_000)  # calcular demorou 0.0312s

# Decorador com parâmetros
def repetir(vezes):
    def decorador(func):
        @functools.wraps(func)
        def wrapper(*args, **kwargs):
            for _ in range(vezes):
                func(*args, **kwargs)
        return wrapper
    return decorador

@repetir(3)
def ola(nome):
    print(f"Olá {nome}!")

ola("Ana")  # Imprime 3 vezes
\`\`\`
`,
                flashcards: [
                    { front: "Decorador", back: "Função que recebe outra função e retorna uma versão estendida. Sintaxe: @decorador acima da def." },
                    { front: "@functools.wraps", back: "Preserva __name__, __doc__ etc da função original ao criar o wrapper. Sempre usar em decoradores." },
                    { front: "Casos de uso reais", back: "Cache (@lru_cache), autenticação (@login_required), rate limiting, logging, retry automático." }
                ],
                quiz: {
                    question: "O que `@functools.wraps(func)` garante dentro de um decorador?",
                    options: [
                        { text: "Que a função original não é executada.", correct: false, feedback: "functools.wraps não impede a execução." },
                        { text: "Que o wrapper mantém o nome e docstring da função original, evitando confusão no debugging.", correct: true, feedback: "Correto! Sem @wraps, func.__name__ seria 'wrapper' — dificulta logs e introspection." },
                        { text: "Que o decorador aceita qualquer número de argumentos.", correct: false, feedback: "*args/**kwargs cuidam disso — não o @wraps." }
                    ]
                }
            },
            {
                id: "m1w2-s7",
                title: "7. Context Managers (with)",
                content: `
Context managers garantem que recursos sejam **liberados** mesmo se ocorrer exceção:

\`\`\`python
# Sem context manager — perigoso!
arquivo = open("dados.txt")
conteudo = arquivo.read()
arquivo.close()  # E se read() lançar exceção? close() nunca executa!

# Com context manager — seguro (keyword: with)
# with open("dados.txt", "r", encoding="utf-8") as f:
#     conteudo = f.read()
# arquivo.close() chamado automaticamente ao sair do bloco

# Criando seu próprio context manager
from contextlib import contextmanager

@contextmanager
def conexao_db(url):
    conn = criar_conexao(url)
    try:
        yield conn          # código do bloco executa aqui
    finally:
        conn.fechar()       # SEMPRE executa, com ou sem erro

# Uso do context manager:
# with conexao_db("postgresql://...") as db:
#     resultado = db.query("SELECT 1")
# conn.fechar() chamado automaticamente
\`\`\`
`,
                flashcards: [
                    { front: "Context Manager", back: "Objeto que implementa __enter__ e __exit__. Garante setup e cleanup de recursos." },
                    { front: "@contextmanager", back: "Decorator do contextlib que transforma um generator com yield em context manager." },
                    { front: "finally", back: "Bloco que SEMPRE executa — com ou sem exceção. Ideal para liberar recursos." }
                ],
                quiz: {
                    question: "Por que usar `with open(arquivo) as f` em vez de `f = open(arquivo); f.close()`?",
                    options: [
                        { text: "É mais rápido.", correct: false, feedback: "Performance não é a razão." },
                        { text: "Garante que o arquivo seja fechado mesmo se uma exceção ocorrer dentro do bloco.", correct: true, feedback: "Correto! O __exit__ do context manager executa independente de erro." },
                        { text: "open() não funciona sem with.", correct: false, feedback: "open() funciona sem with — com risco de leak de recursos." }
                    ]
                }
            },
            {
                id: "m1w2-s8",
                title: "8. Exceções Personalizadas e Hierarquia de Erros",
                content: `
\`\`\`python
# Hierarquia de exceções built-in
# BaseException
#   └── Exception
#         ├── ValueError
#         ├── TypeError
#         ├── KeyError
#         └── ... (dezenas de outras)

# Exceção customizada
class ValidacaoError(ValueError):
    """Erro de validação de negócio da nossa aplicação."""
    def __init__(self, campo: str, mensagem: str):
        self.campo = campo
        self.mensagem = mensagem
        super().__init__(f"[{campo}] {mensagem}")

class EmailInvalidoError(ValidacaoError):
    pass

# Uso
def validar_email(email: str) -> str:
    if "@" not in email:
        raise EmailInvalidoError("email", "Deve conter @")
    return email.lower()

# Captura hierárquica
try:
    validar_email("sem-arroba")
except EmailInvalidoError as e:
    print(f"Email inválido: {e.mensagem}")
except ValidacaoError as e:
    print(f"Erro de validação: {e}")
except Exception as e:
    print(f"Erro inesperado: {e}")
finally:
    print("Validação encerrada.")  # Sempre executa
\`\`\`
`,
                flashcards: [
                    { front: "Exceção Customizada", back: "Classe que herda de Exception (ou subclasse). Permite capturar erros específicos do domínio da aplicação." },
                    { front: "Hierarquia de except", back: "Excepts são verificados em ordem — coloque os mais específicos primeiro, os genéricos por último." },
                    { front: "except Exception as e", back: "Captura qualquer exceção não tratada. e contém o objeto da exceção com mensagem e atributos." }
                ],
                quiz: {
                    question: "Por que criar exceções customizadas em vez de usar sempre `Exception` genérica?",
                    options: [
                        { text: "Exceções genéricas não funcionam em produção.", correct: false, feedback: "Funcionam — mas são muito genéricas para tratamento específico." },
                        { text: "Permite capturar e tratar erros de domínio específicos separadamente — ex: tratar EmailInvalidoError diferente de BancoDadosError.", correct: true, feedback: "Correto! Exceções customizadas tornam o código mais legível e o tratamento de erros mais preciso." },
                        { text: "Reduz o uso de memória.", correct: false, feedback: "O impacto em memória é desprezível." }
                    ]
                }
            }
        ],
        memoryPalace: {
            title: "Palácio da Memória: A Linha de Montagem",
            content: `
Imagine uma fábrica:

1. A **Função** é uma máquina blindada. Os ingredientes entram por um cano (argumentos), a máquina processa e sai um produto final (return).
2. Se a máquina não suja o chão da fábrica (sem Side Effects), ela é uma **Função Pura**.
3. Os **Type Hints** são os adesivos na máquina dizendo *"Insira apenas Plástico"*.
4. E o **Try/Except** é o extintor de incêndio: se a máquina quebrar, o extintor apaga o fogo e evita que a fábrica toda exploda.
            `
        },
        exam: [
            {
                question: "O que é um Side Effect em uma função?",
                options: ["Quando a função retorna None.", "Quando a função modifica variáveis fora de seu escopo (estado global).", "Quando a função é muito longa."],
                correctIndex: 1
            },
            {
                question: "Para evitar crash ao abrir um arquivo que pode não existir, você deve:",
                options: ["Usar um if/else verificando o nome do arquivo", "Envolver o `open` em um bloco try/except FileNotFoundError", "Escrever um Type Hint indicando que é um arquivo"],
                correctIndex: 1
            },
            {
                question: "O comando `raise ValueError()` faz o que?",
                options: ["Corrige o valor da variável.", "Ignora o erro do valor.", "Dispara uma exceção personalizada indicando erro no valor."],
                correctIndex: 2
            },
            {
                question: "Qual o benefício real do Type Hinting em Python?",
                options: ["Deixa o código 30% mais rápido em execução.", "Bloqueia a compilação do código se houver falhas.", "Melhora o auto-complete (IntelliSense) das IDEs e permite análise estática antes de rodar."],
                correctIndex: 2
            }
        ]
    },

    // ==========================================
    // MÊS 1 — SEMANAS 3 E 4
    // ==========================================
    "m1w3": {
        title: "Semana 3: Orientação a Objetos",
        subtitle: "Modelando o Mundo Real em Código",
        studies: [
            {
                id: "m1w3-s1",
                title: "1. Classes e Objetos",
                content: `
Uma **classe** é um molde, e um **objeto** é o produto fabricado a partir desse molde.

\`\`\`python
class Carro:
    def __init__(self, marca: str, velocidade: int):
        self.marca = marca
        self.velocidade = velocidade

    def acelerar(self, incremento: int):
        self.velocidade += incremento

gol = Carro("VW", 0)
gol.acelerar(60)
print(gol.velocidade) # 60
\`\`\`

- **\`__init__\`**: O construtor, executado automaticamente ao criar o objeto.
- **\`self\`**: Referência à instância atual do objeto.
`,
                flashcards: [
                    { front: "Classe", back: "Molde/blueprint que define atributos e comportamentos." },
                    { front: "Instância (Objeto)", back: "Um exemplar concreto criado a partir de uma classe." },
                    { front: "__init__", back: "Método construtor chamado automaticamente ao instanciar a classe." }
                ],
                quiz: {
                    question: "O que o `self` representa dentro de um método de classe?",
                    options: [
                        { text: "O nome da classe.", correct: false, feedback: "self não é o nome da classe." },
                        { text: "A instância atual do objeto.", correct: true, feedback: "Correto! `self` aponta para o objeto que chamou o método." },
                        { text: "Um parâmetro obrigatório sem função.", correct: false, feedback: "self é fundamental para acessar atributos." }
                    ]
                }
            },
            {
                id: "m1w3-s2",
                title: "2. Encapsulamento e Responsabilidade Única",
                content: `
**Encapsulamento** é o princípio de esconder detalhes internos, expondo apenas o necessário.

\`\`\`python
class ContaBancaria:
    def __init__(self, saldo: float):
        self.__saldo = saldo  # privado

    def depositar(self, valor: float):
        if valor > 0:
            self.__saldo += valor

    def saldo(self) -> float:
        return self.__saldo

conta = ContaBancaria(100.0)
conta.depositar(50)
print(conta.saldo()) # 150.0
\`\`\`

**SRP (Responsabilidade Única):** Cada classe deve ter apenas uma razão para mudar.
`,
                flashcards: [
                    { front: "Encapsulamento", back: "Esconder detalhes internos, expondo apenas interfaces públicas." },
                    { front: "SRP", back: "Single Responsibility Principle — uma classe, uma responsabilidade." },
                    { front: "Atributo Privado (__)", back: "Atributo com name mangling, inacessível diretamente de fora da classe." }
                ],
                quiz: {
                    question: "Por que usar `__saldo` em vez de `saldo` em uma ContaBancaria?",
                    options: [
                        { text: "Para economizar caracteres.", correct: false, feedback: "Não é uma questão de brevidade." },
                        { text: "Para impedir alteração direta, forçando uso dos métodos e suas validações.", correct: true, feedback: "Exato! Garante que todas as regras de negócio sejam respeitadas." },
                        { text: "Python exige isso para atributos numéricos.", correct: false, feedback: "Python não exige — é uma escolha de design." }
                    ]
                }
            },
            {
                id: "m1w3-s3",
                title: "3. Herança e Polimorfismo",
                content: `
**Herança** permite que uma classe filho reutilize e estenda o comportamento de uma classe pai.

**Polimorfismo** permite que objetos de tipos diferentes respondam ao mesmo método de formas distintas.

\`\`\`python
class Animal:
    def falar(self) -> str:
        return "..."

class Cachorro(Animal):
    def falar(self) -> str:
        return "Au!"

class Gato(Animal):
    def falar(self) -> str:
        return "Miau!"

for a in [Cachorro(), Gato()]:
    print(a.falar())  # Au!  Miau!
\`\`\`

> ⚠️ **Prefira Composição à Herança** quando possível — herança profunda cria acoplamento forte.
`,
                flashcards: [
                    { front: "Herança", back: "Classe filho herda atributos e métodos da classe pai." },
                    { front: "Polimorfismo", back: "Objetos distintos respondam ao mesmo método com comportamentos diferentes." },
                    { front: "super()", back: "Chama métodos da classe pai a partir da classe filha." }
                ],
                quiz: {
                    question: "Qual é o risco de usar herança profunda demais (ex: A → B → C → D)?",
                    options: [
                        { text: "O código fica mais rápido.", correct: false, feedback: "Herança profunda pode até piorar legibilidade." },
                        { text: "Alto acoplamento: mudança em A quebra B, C e D em cascata.", correct: true, feedback: "Perfeito! É por isso que 'Prefira Composição à Herança' existe." },
                        { text: "Python não suporta mais de 2 níveis.", correct: false, feedback: "Python suporta herança múltipla, mas com custo de complexidade." }
                    ]
                }
            },
            {
                id: "m1w3-s4",
                title: "4. Dataclasses e Type Hints em OOP",
                content: `
\`@dataclass\` é um decorator que gera automaticamente \`__init__\`, \`__repr__\` e outros métodos boilerplate.

\`\`\`python
from dataclasses import dataclass

@dataclass
class Produto:
    nome: str
    preco: float
    estoque: int = 0

    def disponivel(self) -> bool:
        return self.estoque > 0

p = Produto("Notebook", 3500.0, 10)
print(p)              # Produto(nome='Notebook', ...)
print(p.disponivel()) # True
\`\`\`

Benefícios:
- **Menos boilerplate** (sem escrever \`__init__\` manualmente)
- **Type hints forçados** pela estrutura
- **Imutabilidade opcional** via \`frozen=True\`
`,
                flashcards: [
                    { front: "@dataclass", back: "Decorator que gera automaticamente __init__, __repr__ e __eq__." },
                    { front: "frozen=True", back: "Torna a dataclass imutável após criação." }
                ],
                quiz: {
                    question: "Qual o principal benefício de usar `@dataclass`?",
                    options: [
                        { text: "Executa mais rápido em runtime.", correct: false, feedback: "Performance não é a razão principal." },
                        { text: "Elimina código repetitivo mantendo type hints claros.", correct: true, feedback: "Correto! Reduz drasticamente o boilerplate." },
                        { text: "Permite herança múltipla.", correct: false, feedback: "Herança múltipla já existe sem dataclasses." }
                    ]
                }
            },
            {
                id: "m1w3-s5",
                title: "5. Métodos Especiais (Dunder Methods)",
                content: `
Os **dunder methods** permitem que seus objetos se comportem como tipos nativos do Python:

\`\`\`python
class Vetor:
    def __init__(self, x, y):
        self.x = x
        self.y = y

    def __repr__(self):
        return f"Vetor({self.x}, {self.y})"

    def __add__(self, outro):        # v1 + v2
        return Vetor(self.x + outro.x, self.y + outro.y)

    def __mul__(self, escalar):      # v * 3
        return Vetor(self.x * escalar, self.y * escalar)

    def __len__(self):               # len(v)
        return 2  # 2 dimens\u00f5es

    def __eq__(self, outro):         # v1 == v2
        return self.x == outro.x and self.y == outro.y

    def __abs__(self):               # abs(v) = magnitude
        return (self.x**2 + self.y**2) ** 0.5

v1 = Vetor(3, 4)
v2 = Vetor(1, 2)
print(v1 + v2)   # Vetor(4, 6)
print(abs(v1))   # 5.0
print(v1 == v2)  # False
\`\`\`
`,
                flashcards: [
                    { front: "__repr__", back: "Representa\u00e7\u00e3o oficial do objeto como string. Chamada por repr() e no shell interativo." },
                    { front: "__add__", back: "Implementa o operador +. Permite v1 + v2 em objetos customizados." },
                    { front: "__len__", back: "Implementa len(). Permite usar len() em objetos customizados." }
                ],
                quiz: {
                    question: "Para que um objeto possa ser comparado com `==` corretamente, qual dunder method deve ser implementado?",
                    options: [
                        { text: "__compare__", correct: false, feedback: "__compare__ n\u00e3o existe no Python moderno." },
                        { text: "__eq__", correct: true, feedback: "Correto! __eq__ define a l\u00f3gica de igualdade. Sem ele, == compara identidade (endere\u00e7o de mem\u00f3ria)." },
                        { text: "__same__", correct: false, feedback: "__same__ n\u00e3o existe." }
                    ]
                }
            },
            {
                id: "m1w3-s6",
                title: "6. Heran\u00e7a M\u00faltipla e MRO",
                content: `
Python suporta **heran\u00e7a m\u00faltipla** com uma ordem de resolu\u00e7\u00e3o chamada **MRO (Method Resolution Order)**:

\`\`\`python
class Animal:
    def falar(self): return "..."

class Voador:
    def mover(self): return "Voando"

class Nadador:
    def mover(self): return "Nadando"

class Pato(Animal, Voador, Nadador):
    def falar(self): return "Quack!"

p = Pato()
print(p.mover())  # 'Voando' — Voador vem antes de Nadador no MRO
print(Pato.__mro__)  # (Pato, Animal, Voador, Nadador, object)

# super() navega o MRO automaticamente
class LogadoMixin:
    def salvar(self):
        print("Logando acao...")
        super().salvar()  # delega ao pr\u00f3ximo na cadeia MRO
\`\`\`

**Mixins** s\u00e3o classes leves para adicionar comportamentos:
\`\`\`python
class JSONMixin:
    def to_json(self):
        import json
        return json.dumps(self.__dict__)

class Usuario(JSONMixin):
    def __init__(self, nome, email):
        self.nome = nome
        self.email = email

u = Usuario("Ana", "ana@py.com")
print(u.to_json())  # {"nome": "Ana", "email": "ana@py.com"}
\`\`\`
`,
                flashcards: [
                    { front: "MRO", back: "Method Resolution Order — ordem em que Python busca m\u00e9todos em heran\u00e7a m\u00faltipla. Veja via Classe.__mro__." },
                    { front: "Mixin", back: "Classe leve que adiciona um comportamento espec\u00edfico. N\u00e3o deve ser instanciada sozinha." },
                    { front: "super()", back: "Delega a chamada ao pr\u00f3ximo na cadeia MRO. Essencial em heran\u00e7a m\u00faltipla." }
                ],
                quiz: {
                    question: "Em `class Pato(Animal, Voador)`, se Animal e Voador ambos t\u00eam `falar()`, qual ser\u00e1 chamado por `Pato().falar()`?",
                    options: [
                        { text: "O de Voador.", correct: false, feedback: "MRO vai da esquerda para direita." },
                        { text: "O de Animal — MRO prioriza da esquerda para a direita.", correct: true, feedback: "Correto! A ordem dos pais na defini\u00e7\u00e3o da classe define a prioridade no MRO." },
                        { text: "Gera um erro de ambiguidade.", correct: false, feedback: "Python resolve automaticamente via MRO — sem erro." }
                    ]
                }
            },
            {
                id: "m1w3-s7",
                title: "7. Protocolos e ABC",
                content: `
**Protocolos** (Python 3.8+) definem interfaces via duck typing estrutural — sem heran\u00e7a expl\u00edcita:

\`\`\`python
from typing import Protocol

class Serializ\u00e1vel(Protocol):
    def to_dict(self) -> dict: ...
    def to_json(self) -> str: ...

class Usuario:
    def __init__(self, nome: str):
        self.nome = nome

    def to_dict(self) -> dict:
        return {"nome": self.nome}

    def to_json(self) -> str:
        import json
        return json.dumps(self.to_dict())

# Usuario satisfaz o Protocol Serializ\u00e1vel sem herdar dele!
def salvar(obj: Serializ\u00e1vel) -> None:
    print(obj.to_json())

salvar(Usuario("Ana"))  # OK
\`\`\`

**ABC (Abstract Base Class)** — heran\u00e7a expl\u00edcita com m\u00e9todos obrigat\u00f3rios:
\`\`\`python
from abc import ABC, abstractmethod

class Repositorio(ABC):
    @abstractmethod
    def buscar(self, id: int): ...

    @abstractmethod
    def salvar(self, obj): ...

class UsuarioRepo(Repositorio):
    def buscar(self, id): return db.query(id)
    def salvar(self, obj): return db.save(obj)
\`\`\`
`,
                flashcards: [
                    { front: "Protocol", back: "Interface estrutural via duck typing. Classe satisfaz o Protocol se implementa os m\u00e9todos — sem herdar." },
                    { front: "ABC", back: "Abstract Base Class. Heran\u00e7a expl\u00edcita com m\u00e9todos obrigat\u00f3rios marcados com @abstractmethod." },
                    { front: "Protocol vs ABC", back: "Protocol = duck typing estrutural (mais flex\u00edvel). ABC = heran\u00e7a nominal (mais expl\u00edcita)." }
                ],
                quiz: {
                    question: "Qual a vantagem de Protocol sobre ABC para definir interfaces?",
                    options: [
                        { text: "Protocol \u00e9 mais r\u00e1pido em runtime.", correct: false, feedback: "Performance n\u00e3o \u00e9 a diferen\u00e7a principal." },
                        { text: "Protocol permite que classes externas (sem acesso ao c\u00f3digo-fonte) satisfa\u00e7am a interface sem herdar.", correct: true, feedback: "Correto! Com ABC, a classe PRECISA herdar. Com Protocol, qualquer classe que implemente os m\u00e9todos \u00e9 compat\u00edvel." },
                        { text: "Protocol gera documenta\u00e7\u00e3o autom\u00e1tica.", correct: false, feedback: "N\u00e3o \u00e9 uma funcionalidade de Protocol." }
                    ]
                }
            },
            {
                id: "m1w3-s8",
                title: "8. Propriedades e Encapsulamento Avan\u00e7ado",
                content: `
\`\`\`python
class ContaBancaria:
    def __init__(self, titular: str, saldo_inicial: float = 0):
        self._titular = titular     # protegido (conven\u00e7\u00e3o)
        self.__saldo = saldo_inicial  # privado (name mangling)

    @property
    def saldo(self) -> float:
        """Getter: acesso somente leitura."""
        return self.__saldo

    @property
    def titular(self) -> str:
        return self._titular

    @titular.setter
    def titular(self, novo: str) -> None:
        """Setter: com valida\u00e7\u00e3o."""
        if not novo.strip():
            raise ValueError("Titular n\u00e3o pode ser vazio")
        self._titular = novo

    def depositar(self, valor: float) -> None:
        if valor <= 0:
            raise ValueError("Valor deve ser positivo")
        self.__saldo += valor

    def sacar(self, valor: float) -> None:
        if valor > self.__saldo:
            raise ValueError("Saldo insuficiente")
        self.__saldo -= valor

conta = ContaBancaria("Ana", 1000)
print(conta.saldo)   # 1000 — via @property
conta.depositar(500)
print(conta.saldo)   # 1500
conta.titular = "Ana Silva"  # via @titular.setter
\`\`\`
`,
                flashcards: [
                    { front: "@property", back: "Transforma um m\u00e9todo em atributo de leitura. conta.saldo em vez de conta.saldo()." },
                    { front: "@attr.setter", back: "Define o comportamento ao atribuir valor ao @property. Permite valida\u00e7\u00e3o." },
                    { front: "__ (name mangling)", back: "Atributos com __ prefixo s\u00e3o renomeados para _Classe__attr. Impede acesso externo acidental." }
                ],
                quiz: {
                    question: "Por que usar @property em vez de tornar o atributo p\u00fablico diretamente?",
                    options: [
                        { text: "@property \u00e9 mais r\u00e1pido.", correct: false, feedback: "@property tem overhead m\u00ednimo adicional." },
                        { text: "Permite adicionar valida\u00e7\u00e3o e l\u00f3gica ao acesso sem mudar a API p\u00fablica da classe.", correct: true, feedback: "Correto! Voc\u00ea pode mudar a implementa\u00e7\u00e3o interna sem que o c\u00f3digo que usa a classe precise ser alterado." },
                        { text: "Python exige @property para atributos em classes.", correct: false, feedback: "N\u00e3o \u00e9 exig\u00eancia — \u00e9 boa pr\u00e1tica." }
                    ]
                }
            }
        ],
        memoryPalace: {
            title: "Pal\u00e1cio da Mem\u00f3ria: A F\u00e1brica de Produtos",
            content: `
Visualize uma **fábrica industrial**:

- 🏭 **A Planta (Classe):** O projeto no papel. Define como cada produto será construído.
- 📦 **O Produto (Objeto):** O item que saiu da linha de montagem seguindo a planta.
- 🔒 **A Sala Cofre (Encapsulamento):** Apenas funcionários autorizados (métodos) entram. O visitante não vê o maquinário interno.
- 🧬 **O Modelo Derivado (Herança):** Fábrica de caminhões reutiliza o projeto base de veículos, mas adiciona compartimento de carga.
- 🎭 **O Botão Universal (Polimorfismo):** Existe um botão "buzinar" em todos os veículos. O carro faz "Bi!", o caminhão faz "FOOOON!". Mesmo botão, efeito diferente.
            `
        },
        exam: [
            {
                question: "1. O que acontece ao tentar acessar `objeto.__atributo_privado` de fora da classe?",
                options: ["Funciona normalmente.", "Retorna None.", "Gera AttributeError por name mangling.", "Retorna o valor mas lança um warning."],
                correctIndex: 2
            },
            {
                question: "2. Qual princípio SOLID define que uma classe deve ter apenas uma razão para mudar?",
                options: ["Open/Closed Principle", "Liskov Substitution", "Single Responsibility Principle", "Dependency Inversion"],
                correctIndex: 2
            },
            {
                question: "3. Como chamar o construtor da classe pai dentro da classe filha em Python?",
                options: ["parent.__init__()", "super().__init__()", "base.init()", "cls.__init__()"],
                correctIndex: 1
            },
            {
                question: "4. `@dataclass` com `frozen=True` cria um objeto...",
                options: ["Mais lento de instanciar.", "Imutável após a criação.", "Que não pode ter métodos.", "Sem suporte a herança."],
                correctIndex: 1
            }
        ]
    },

    "m1w4": {
        title: "Semana 4: Algoritmos e Complexidade",
        subtitle: "Escrever Código Eficiente é uma Habilidade Profissional",
        studies: [
            {
                id: "m1w4-s1",
                title: "1. Notação Big-O",
                content: `
**Big-O** descreve como o tempo de execução cresce conforme o tamanho da entrada (n) aumenta.

| Notação | Nome | Exemplo |
|---------|------|---------|
| O(1) | Constante | Acesso por índice |
| O(log n) | Logarítmica | Busca Binária |
| O(n) | Linear | Loop simples |
| O(n²) | Quadrática | Loops aninhados |
| O(2ⁿ) | Exponencial | Força bruta |

> ⚡ **Regra:** Sempre preferir O(log n) ou O(n) sobre O(n²) em dados reais.
`,
                flashcards: [
                    { front: "O(1)", back: "Tempo constante. A operação não muda com o tamanho da entrada." },
                    { front: "O(n²)", back: "Tempo quadrático. Típico de loops aninhados." },
                    { front: "O(log n)", back: "Tempo logarítmico. A entrada é dividida a cada passo." }
                ],
                quiz: {
                    question: "Um loop dentro de outro loop iterando a mesma lista tem qual complexidade?",
                    options: [
                        { text: "O(n)", correct: false, feedback: "O(n) é apenas um loop simples." },
                        { text: "O(n²)", correct: true, feedback: "Correto! Cada elemento é comparado com todos: n × n = n²." },
                        { text: "O(log n)", correct: false, feedback: "O(log n) é da busca binária." }
                    ]
                }
            },
            {
                id: "m1w4-s2",
                title: "2. Busca Linear vs Busca Binária",
                content: `
**Busca Linear O(n):** Percorre elemento por elemento.

\`\`\`python
def busca_linear(lista, alvo):
    for i, v in enumerate(lista):
        if v == alvo:
            return i
    return -1
\`\`\`

**Busca Binária O(log n):** Exige lista **ordenada**. Divide o espaço pela metade a cada passo.

\`\`\`python
def busca_binaria(lista, alvo):
    esq, dir = 0, len(lista) - 1
    while esq <= dir:
        meio = (esq + dir) // 2
        if lista[meio] == alvo:
            return meio
        elif lista[meio] < alvo:
            esq = meio + 1
        else:
            dir = meio - 1
    return -1
\`\`\`

Em 1.000.000 de elementos, a binária encontra qualquer item em no máximo **20 comparações**.
`,
                flashcards: [
                    { front: "Busca Linear", back: "O(n) — percorre todos os elementos. Funciona em listas não ordenadas." },
                    { front: "Busca Binária", back: "O(log n) — exige lista ordenada. Divide o espaço de busca pela metade." }
                ],
                quiz: {
                    question: "Por que a Busca Binária exige que a lista esteja ordenada?",
                    options: [
                        { text: "É uma exigência da linguagem Python.", correct: false, feedback: "É uma questão lógica do algoritmo." },
                        { text: "Para poder descartar metade dos elementos com certeza a cada passo.", correct: true, feedback: "Exato! Sem ordem, não é possível saber em qual metade o alvo está." },
                        { text: "Para reduzir uso de memória.", correct: false, feedback: "Memória não é o motivo principal." }
                    ]
                }
            },
            {
                id: "m1w4-s3",
                title: "3. Algoritmos de Ordenação",
                content: `
**Bubble Sort O(n²):** Empurra os maiores para o final a cada passagem.

\`\`\`python
def bubble_sort(arr):
    n = len(arr)
    for i in range(n):
        for j in range(0, n - i - 1):
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
    return arr
\`\`\`

> 💡 Em produção, use sempre \`sorted()\` do Python (implementado em C com **Timsort O(n log n)**). O valor de estudar Bubble Sort está em **entender loops e comparações**, não em usá-lo.
`,
                flashcards: [
                    { front: "Bubble Sort", back: "O(n²) — compara pares adjacentes e troca. Simples, mas ineficiente." },
                    { front: "Timsort", back: "Algoritmo híbrido usado pelo Python. O(n log n) — muito eficiente." }
                ],
                quiz: {
                    question: "Em uma entrevista, por que implementar Bubble Sort se não é usado em produção?",
                    options: [
                        { text: "Para testar memória do candidato.", correct: false, feedback: "Memorizar sintaxe não é o objetivo." },
                        { text: "Para avaliar raciocínio lógico sobre loops, trocas e complexidade.", correct: true, feedback: "Exato! É um exercício de pensamento algorítmico." },
                        { text: "Porque Python não tem sorted() nativo.", correct: false, feedback: "Python tem sorted() com Timsort." }
                    ]
                }
            },
            {
                id: "m1w4-s4",
                title: "4. Introdução ao pytest",
                content: `
Testar código é habilidade obrigatória no mercado. **pytest** é o framework padrão Python.

\`\`\`python
# test_busca.py
from busca import busca_binaria

def test_encontra_elemento():
    lista = [1, 3, 5, 7, 9]
    assert busca_binaria(lista, 5) == 2

def test_elemento_nao_encontrado():
    lista = [1, 3, 5]
    assert busca_binaria(lista, 99) == -1
\`\`\`

Rode com: \`pytest test_busca.py -v\`

**AAA Pattern:**
- **Arrange:** Prepara os dados.
- **Act:** Executa a função.
- **Assert:** Verifica o resultado.
`,
                flashcards: [
                    { front: "pytest", back: "Framework de testes Python. Descobre funções que começam com test_." },
                    { front: "assert", back: "Lança AssertionError se a condição for False." },
                    { front: "AAA Pattern", back: "Arrange, Act, Assert — estrutura padrão de testes." }
                ],
                quiz: {
                    question: "Para o pytest descobrir e executar um teste, a função deve:",
                    options: [
                        { text: "Estar dentro de uma classe TestCase.", correct: false, feedback: "Isso é do unittest. O pytest é mais flexível." },
                        { text: "Começar com o prefixo `test_`.", correct: true, feedback: "Correto! O pytest descobre testes pelo prefixo test_ por convenção." },
                        { text: "Ter um decorador @pytest.mark.test.", correct: false, feedback: "Esse decorador existe para marcações, não para descoberta básica." }
                    ]
                }
            },
            {
                id: "m1w4-s5",
                title: "5. Recurs\u00e3o e Memoriza\u00e7\u00e3o",
                content: `
Recurs\u00e3o resolve problemas dividindo em sub-problemas id\u00eanticos menores:

\`\`\`python
# Fatorial recursivo
def fatorial(n: int) -> int:
    if n <= 1:        # caso base
        return 1
    return n * fatorial(n - 1)  # caso recursivo

fatorial(5)  # 5 * 4 * 3 * 2 * 1 = 120

# Fibonacci recursivo — ineficiente sem memo
def fib(n):
    if n <= 1: return n
    return fib(n-1) + fib(n-2)  # O(2^n)!

# Com memoiza\u00e7\u00e3o — O(n)
from functools import lru_cache

@lru_cache(maxsize=None)
def fib_memo(n):
    if n <= 1: return n
    return fib_memo(n-1) + fib_memo(n-2)

fib_memo(100)  # Instant\u00e2neo! Sem memo, travaria

# Stack overflow em Python (limite padr\u00e3o: ~1000)
import sys
sys.setrecursionlimit(10_000)  # Aumenta o limite
\`\`\`
`,
                flashcards: [
                    { front: "Caso Base", back: "Condi\u00e7\u00e3o que para a recurs\u00e3o. Sem ele, stack overflow." },
                    { front: "@lru_cache", back: "Memoiza resultados de fun\u00e7\u00f5es. Transforma recurs\u00e3o O(2^n) em O(n) cacheando sub-resultados." },
                    { front: "Stack Overflow", back: "Python limita recurs\u00e3o (~1000 chamadas). Recurs\u00e3o profunda deve virar iterativa." }
                ],
                quiz: {
                    question: "Por que `fib(50)` sem memoiza\u00e7\u00e3o demora muito mais que `fib_memo(50)`?",
                    options: [
                        { text: "@lru_cache usa multi-threading.", correct: false, feedback: "@lru_cache \u00e9 single-thread — usa cache de mem\u00f3ria." },
                        { text: "Sem cache, fib(n) recalcula os mesmos sub-problemas bilh\u00f5es de vezes (O(2^n)). Com cache, cada valor \u00e9 calculado apenas uma vez (O(n)).", correct: true, feedback: "Correto! fib(50) sem memo faz ~2^50 chamadas. Com memo, apenas 50." },
                        { text: "@lru_cache usa hardware especializado.", correct: false, feedback: "\u00c9 puramente software — um dicion\u00e1rio de cache." }
                    ]
                }
            },
            {
                id: "m1w4-s6",
                title: "6. Estruturas de Dados Avan\u00e7adas",
                content: `
\`\`\`python
from collections import deque, Counter, defaultdict, OrderedDict
from heapq import heappush, heappop

# deque — fila dupla O(1) nos dois extremos
fila = deque([1, 2, 3])
fila.appendleft(0)   # [0, 1, 2, 3]
fila.append(4)       # [0, 1, 2, 3, 4]
fila.popleft()       # remove o 0
fila.pop()           # remove o 4

# Counter — conta elementos
palavras = ["python", "java", "python", "go", "python"]
c = Counter(palavras)
print(c.most_common(2))  # [('python', 3), ('java', 1)]

# defaultdict — valor padr\u00e3o autom\u00e1tico
grupos = defaultdict(list)
for nome, dept in [("Ana", "TI"), ("Bob", "TI"), ("Lia", "RH")]:
    grupos[dept].append(nome)
# {"TI": ["Ana", "Bob"], "RH": ["Lia"]}

# Heap (min-heap) — maior prioridade primeiro
heap = []
heappush(heap, 5)
heappush(heap, 1)
heappush(heap, 3)
print(heappop(heap))  # 1 — sempre o menor
\`\`\`
`,
                flashcards: [
                    { front: "deque", back: "Double-ended queue. appendleft/popleft em O(1) — mais eficiente que lista para filas." },
                    { front: "Counter", back: "Conta frequ\u00eancia de elementos. most_common(n) retorna os n mais frequentes." },
                    { front: "defaultdict", back: "Dict com valor padr\u00e3o autom\u00e1tico. defaultdict(list) cria [] para chaves inexistentes." }
                ],
                quiz: {
                    question: "Por que usar `deque` em vez de `list` para implementar uma fila (FIFO)?",
                    options: [
                        { text: "deque ocupa menos mem\u00f3ria.", correct: false, feedback: "Mem\u00f3ria n\u00e3o \u00e9 o principal diferencial." },
                        { text: "list.pop(0) \u00e9 O(n) pois desloca todos os elementos; deque.popleft() \u00e9 O(1).", correct: true, feedback: "Correto! Para filas grandes, a diferen\u00e7a de performance \u00e9 enorme." },
                        { text: "list n\u00e3o suporta append.", correct: false, feedback: "list.append() existe e \u00e9 O(1)." }
                    ]
                }
            },
            {
                id: "m1w4-s7",
                title: "7. Ordenação e Busca Avan\u00e7ada",
                content: `
\`\`\`python
import bisect

# Timsort (sorted) — O(n log n), est\u00e1vel
funcionarios = [
    {"nome": "Ana", "salario": 5000, "dept": "TI"},
    {"nome": "Bob", "salario": 3000, "dept": "RH"},
    {"nome": "Lia", "salario": 5000, "dept": "TI"},
]

# Ordena por sal\u00e1rio desc, depois nome asc
result = sorted(
    funcionarios,
    key=lambda f: (-f["salario"], f["nome"])
)

# bisect — busca bin\u00e1ria em lista ordenada
numeros = [1, 3, 5, 7, 9, 11]

bisect.insort(numeros, 6)   # insere 6 na posi\u00e7\u00e3o correta
print(numeros)  # [1, 3, 5, 6, 7, 9, 11]

pos = bisect.bisect_left(numeros, 7)  # posi\u00e7\u00e3o do 7
print(pos)  # 4

# Comparador customizado
from functools import cmp_to_key

def comparar(a, b):
    return len(a) - len(b)  # ordena por tamanho

palavras = ["banana", "kiwi", "ma\u00e7\u00e3", "abacaxi"]
sorted(palavras, key=cmp_to_key(comparar))
\`\`\`
`,
                flashcards: [
                    { front: "Timsort", back: "Algoritmo h\u00edbrido Merge+Insertion Sort. Padr\u00e3o no Python. O(n log n) no pior caso, O(n) em listas quase ordenadas." },
                    { front: "bisect", back: "M\u00f3dulo de busca bin\u00e1ria em listas ordenadas. bisect_left, bisect_right, insort." },
                    { front: "Ordenação est\u00e1vel", back: "Elementos com chave igual mant\u00eam a ordem original. sorted() no Python \u00e9 est\u00e1vel." }
                ],
                quiz: {
                    question: "Para inserir um elemento numa lista ORDENADA mantendo a ordem sem reordenar tudo, use:",
                    options: [
                        { text: "lista.append(x); sorted(lista)", correct: false, feedback: "Isso reordena a lista inteira — O(n log n) desnecess\u00e1rio." },
                        { text: "bisect.insort(lista, x)", correct: true, feedback: "Correto! insort faz busca bin\u00e1ria O(log n) e insere na posi\u00e7\u00e3o correta." },
                        { text: "lista.insert(0, x)", correct: false, feedback: "Isso insere sempre no in\u00edcio — n\u00e3o mant\u00e9m a ordem." }
                    ]
                }
            },
            {
                id: "m1w4-s8",
                title: "8. Profiling e Otimiza\u00e7\u00e3o de Performance",
                content: `
**Medir antes de otimizar** — a regra de ouro:

\`\`\`python
import timeit
import cProfile

# timeit — mede tempo de execu\u00e7\u00e3o de trechos
tempo = timeit.timeit(
    stmt="[n**2 for n in range(1000)]",
    number=10000
)
print(f"{tempo:.3f}s para 10k execu\u00e7\u00f5es")

# Comparando implementa\u00e7\u00f5es
def soma_loop(n):
    total = 0
    for i in range(n):
        total += i
    return total

def soma_formula(n):
    return n * (n - 1) // 2  # O(1)!

print(timeit.timeit(lambda: soma_loop(10000), number=1000))
print(timeit.timeit(lambda: soma_formula(10000), number=1000))

# cProfile — perfil completo de execu\u00e7\u00e3o
cProfile.run("soma_loop(100000)")
# Mostra cada fun\u00e7\u00e3o, quantas vezes chamou, tempo total
\`\`\`

**Regras de otimiza\u00e7\u00e3o:**
1. **Meça primeiro** (timeit/cProfile) — nunca otimize no escuro
2. **Algoritmo antes de micro-otimiza\u00e7\u00e3o** — O(n) > O(n\u00b2) sempre
3. **Built-ins s\u00e3o mais r\u00e1pidos** — sum(), max(), map() s\u00e3o implementados em C
`,
                flashcards: [
                    { front: "timeit", back: "M\u00f3dulo para medir tempo de execu\u00e7\u00e3o de c\u00f3digo Python com precis\u00e3o." },
                    { front: "cProfile", back: "Profiler completo — mostra tempo gasto em cada fun\u00e7\u00e3o, quantidade de chamadas." },
                    { front: "Regra de otimiza\u00e7\u00e3o", back: "Primeiro correto, depois leg\u00edvel, depois r\u00e1pido. Otimize apenas o que cProfile mostrar como gargalo." }
                ],
                quiz: {
                    question: "Qual a ordem correta de otimiza\u00e7\u00e3o de c\u00f3digo lento?",
                    options: [
                        { text: "Reescreva em C primeiro.", correct: false, feedback: "Reescrever em C sem entender o gargalo pode ser trabalho desperdi\u00e7ado." },
                        { text: "Meça com profiler, identifique o gargalo, melhore o algoritmo, depois micro-otimize se necess\u00e1rio.", correct: true, feedback: "Correto! 'Premature optimization is the root of all evil' — Donald Knuth." },
                        { text: "Adicione mais RAM ao servidor.", correct: false, feedback: "Hardware n\u00e3o resolve um algoritmo O(n\u00b2) quando O(n log n) \u00e9 poss\u00edvel." }
                    ]
                }
            }
        ],
        memoryPalace: {
            title: "Pal\u00e1cio da Mem\u00f3ria: O Arquivo Morto",
            content: `
Imagine um **arquivo morto gigante** com milhões de pastas:

- 📂 **Busca Linear:** Você abre gaveta por gaveta, da primeira até encontrar o documento. Sempre funciona, mas demora muito em arquivos enormes.
- 🗂️ **Busca Binária:** O arquivo está em ordem alfabética. Você abre no meio: se quer 'A' e abriu em 'M', descarta toda a metade direita. Divide e conquista.
- 🫧 **Bubble Sort:** Um estagiário que pega duas pastas vizinhas e troca se estiverem fora de ordem, repetindo da esquerda para a direita até tudo estar organizado.
- 🧪 **pytest:** O auditor que verifica se cada produto saiu dentro das especificações. Sem auditor, o defeito só aparece quando o cliente reclama.
            `
        },
        exam: [
            {
                question: "1. Qual é a complexidade de busca em um dicionário Python pela chave?",
                options: ["O(n)", "O(log n)", "O(1)", "O(n²)"],
                correctIndex: 2
            },
            {
                question: "2. Lista com 1.024 elementos ordenados. Quantas comparações no pior caso na Busca Binária?",
                options: ["1.024", "512", "10", "100"],
                correctIndex: 2
            },
            {
                question: "3. Qual algoritmo de ordenação o Python usa nativamente em `sorted()`?",
                options: ["Bubble Sort", "Quick Sort", "Merge Sort", "Timsort"],
                correctIndex: 3
            },
            {
                question: "4. No padrão AAA de testes, o que significa 'Act'?",
                options: ["Escrever os asserts.", "Preparar os dados de teste.", "Executar a função sendo testada.", "Ativar o modo de debug."],
                correctIndex: 2
            }
        ]
    },

    // ==========================================
    // MÊS 2 — BACK-END PROFISSIONAL
    // ==========================================
    "m2w1": {
        title: "Semana 1: FastAPI & REST",
        subtitle: "Transformando Lógica em Serviço Real",
        studies: [
            {
                id: "m2w1-s1",
                title: "1. O que é REST e HTTP",
                content: `
**REST** (Representational State Transfer) é um estilo arquitetural para APIs. Comunicação via **HTTP** com verbos padronizados:

| Verbo | Ação | Exemplo |
|-------|------|---------|
| GET | Leitura | GET /usuarios |
| POST | Criação | POST /usuarios |
| PUT | Atualização total | PUT /usuarios/1 |
| PATCH | Atualização parcial | PATCH /usuarios/1 |
| DELETE | Remoção | DELETE /usuarios/1 |

**Status Codes importantes:**
- \`200 OK\` — Sucesso
- \`201 Created\` — Recurso criado
- \`400 Bad Request\` — Erro do cliente
- \`404 Not Found\` — Não encontrado
- \`422 Unprocessable Entity\` — Dados inválidos
- \`500 Internal Server Error\` — Erro no servidor
`,
                flashcards: [
                    { front: "REST", back: "Estilo arquitetural de APIs usando verbos HTTP e recursos nomeados por URLs." },
                    { front: "Idempotência", back: "GET/PUT/DELETE são idempotentes: chamar múltiplas vezes produz o mesmo resultado." },
                    { front: "422 Unprocessable Entity", back: "Status retornado quando os dados enviados são sintaticamente válidos mas semanticamente incorretos." }
                ],
                quiz: {
                    question: "Qual verbo HTTP deve ser usado para criar um novo recurso?",
                    options: [
                        { text: "GET", correct: false, feedback: "GET é para leitura, nunca modifica dados." },
                        { text: "POST", correct: true, feedback: "Correto! POST cria novos recursos e não é idempotente." },
                        { text: "PUT", correct: false, feedback: "PUT atualiza um recurso existente (substituição total)." }
                    ]
                }
            },
            {
                id: "m2w1-s2",
                title: "2. Primeiro Projeto FastAPI",
                content: `
**FastAPI** é um framework moderno, assíncrono e com geração automática de documentação Swagger.

\`\`\`python
# main.py
from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def root():
    return {"mensagem": "API no ar!"}

@app.get("/usuarios/{user_id}")
def get_usuario(user_id: int):
    return {"id": user_id, "nome": "Ana"}
\`\`\`

Para rodar: \`uvicorn main:app --reload\`

Acesse a documentação automática em: \`http://localhost:8000/docs\`

> 💡 O \`--reload\` reinicia o servidor automaticamente ao salvar arquivos (modo desenvolvimento).
`,
                flashcards: [
                    { front: "FastAPI", back: "Framework Python moderno para APIs REST, assíncrono e com docs automáticas." },
                    { front: "uvicorn", back: "Servidor ASGI usado para rodar aplicações FastAPI em produção e desenvolvimento." },
                    { front: "Swagger UI", back: "Documentação interativa gerada automaticamente pelo FastAPI em /docs." }
                ],
                quiz: {
                    question: "Qual a URL para acessar a documentação automática do FastAPI?",
                    options: [
                        { text: "/swagger", correct: false, feedback: "Não é o caminho padrão do FastAPI." },
                        { text: "/docs", correct: true, feedback: "Correto! FastAPI gera o Swagger UI automaticamente em /docs." },
                        { text: "/api/docs", correct: false, feedback: "Esse seria um caminho customizado." }
                    ]
                }
            },
            {
                id: "m2w1-s3",
                title: "3. Path Params, Query Params e Request Body",
                content: `
FastAPI distingue automaticamente os tipos de parâmetros pelo contexto:

**Path Parameter** (na URL):
\`\`\`python
@app.get("/itens/{item_id}")
def get_item(item_id: int):
    ...
\`\`\`

**Query Parameter** (após \`?\`):
\`\`\`python
@app.get("/itens/")
def listar(skip: int = 0, limit: int = 10):
    # GET /itens/?skip=0&limit=5
    ...
\`\`\`

**Request Body** (via POST/PUT):
\`\`\`python
from pydantic import BaseModel

class Item(BaseModel):
    nome: str
    preco: float

@app.post("/itens/")
def criar_item(item: Item):
    return item
\`\`\`
`,
                flashcards: [
                    { front: "Path Parameter", back: "Variável embutida na URL. Ex: /usuarios/{id}" },
                    { front: "Query Parameter", back: "Parâmetro após '?' na URL. Ex: /itens?skip=0&limit=10" },
                    { front: "Request Body", back: "Dados enviados no corpo da requisição (JSON). Tipicamente em POST/PUT." }
                ],
                quiz: {
                    question: "No FastAPI, como declarar um parâmetro que vem no corpo JSON da requisição?",
                    options: [
                        { text: "Declarando como int ou str simples.", correct: false, feedback: "Tipos simples são interpretados como path ou query params." },
                        { text: "Usando um modelo Pydantic como tipo do parâmetro.", correct: true, feedback: "Exato! FastAPI detecta automaticamente que é body quando o tipo é um BaseModel." },
                        { text: "Usando o decorator @body.", correct: false, feedback: "Esse decorator não existe no FastAPI." }
                    ]
                }
            },
            {
                id: "m2w1-s4",
                title: "4. Response Models e Status Codes Explícitos",
                content: `
Declarar o \`response_model\` garante que a API nunca vaze campos sensíveis (como senhas) mesmo que o objeto interno os contenha.

\`\`\`python
from pydantic import BaseModel

class UsuarioIn(BaseModel):
    nome: str
    senha: str

class UsuarioOut(BaseModel):
    id: int
    nome: str  # sem senha!

@app.post("/usuarios/", response_model=UsuarioOut, status_code=201)
def criar_usuario(usuario: UsuarioIn):
    return {"id": 1, "nome": usuario.nome, "senha": usuario.senha}
    # A senha é filtrada automaticamente pelo response_model
\`\`\`

> 🔒 Esta é uma das proteções mais importantes contra vazamento de dados em APIs.
`,
                flashcards: [
                    { front: "response_model", back: "Parâmetro do decorator que filtra e serializa a resposta para o formato esperado." },
                    { front: "status_code=201", back: "Declara explicitamente o código HTTP retornado em sucesso pelo endpoint." }
                ],
                quiz: {
                    question: "Por que usar `response_model=UsuarioOut` sendo que retornamos `UsuarioIn` internamente?",
                    options: [
                        { text: "É apenas para documentação no Swagger.", correct: false, feedback: "Vai além da documentação — filtra os dados reais da resposta." },
                        { text: "Para filtrar campos sensíveis (como senha) da resposta automaticamente.", correct: true, feedback: "Perfeito! O FastAPI serializa apenas os campos presentes no response_model." },
                        { text: "Para melhorar a performance da API.", correct: false, feedback: "O impacto em performance é mínimo." }
                    ]
                }
            },
            {
                id: "m2w1-s5",
                title: "5. Path e Query Parameters Avan\u00e7ados",
                content: `
\`\`\`python
from fastapi import FastAPI, Query, Path
from typing import Optional, List

app = FastAPI()

# Path com valida\u00e7\u00e3o inline
@app.get("/produtos/{produto_id}")
def get_produto(
    produto_id: int = Path(gt=0, description="ID do produto (deve ser positivo)"),
    fields: Optional[str] = Query(None, description="Campos a retornar")
):
    return {"id": produto_id, "fields": fields}

# Query com tipo Lista
@app.get("/buscar")
def buscar(
    tags: List[str] = Query(default=[], description="Tags para filtrar"),
    pagina: int = Query(default=1, ge=1),
    por_pagina: int = Query(default=20, ge=1, le=100)
):
    return {
        "tags": tags,
        "paginacao": {"pagina": pagina, "por_pagina": por_pagina}
    }
# GET /buscar?tags=python&tags=fastapi&pagina=2

# Alias de par\u00e2metros (quando o nome do campo Python difere da URL)
@app.get("/itens")
def listar_itens(
    ordem: str = Query(default="asc", alias="sort_order")
):
    return {"ordem": ordem}
# GET /itens?sort_order=desc
\`\`\`
`,
                flashcards: [
                    { front: "Path(gt=0)", back: "Valida\u00e7\u00e3o inline do path parameter. gt=maior que, ge=maior ou igual, lt, le." },
                    { front: "Query(alias=)", back: "Mapeia um nome diferente na URL para o par\u00e2metro Python. Ex: sort_order na URL -> ordem no c\u00f3digo." },
                    { front: "List[str] em Query", back: "Aceita m\u00faltiplos valores do mesmo par\u00e2metro: ?tags=a&tags=b retorna [\"a\", \"b\"]." }
                ],
                quiz: {
                    question: "Para aceitar `GET /items?ids=1&ids=2&ids=3` em FastAPI, o tipo do par\u00e2metro deve ser:",
                    options: [
                        { text: "str", correct: false, feedback: "str s\u00f3 captura um valor." },
                        { text: "List[int]", correct: true, feedback: "Correto! List[int] com Query() captura m\u00faltiplos valores do mesmo nome." },
                        { text: "dict", correct: false, feedback: "dict n\u00e3o funciona para query params m\u00faltiplos." }
                    ]
                }
            },
            {
                id: "m2w1-s6",
                title: "6. Middleware e CORS",
                content: `
Middlewares processam **todas** as requisi\u00e7\u00f5es antes e depois dos endpoints:

\`\`\`python
import time
from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# CORS — permite que o front-end acesse a API
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "https://meusite.com"],
    allow_credentials=True,
    allow_methods=["GET", "POST", "PUT", "DELETE"],
    allow_headers=["*"],
)

# Middleware customizado — loga tempo de resposta
@app.middleware("http")
async def log_requests(request: Request, call_next):
    inicio = time.time()
    response = await call_next(request)  # chama o endpoint
    duracao = time.time() - inicio
    response.headers["X-Process-Time"] = str(duracao)
    print(f"{request.method} {request.url} | {duracao:.4f}s")
    return response
\`\`\`
`,
                flashcards: [
                    { front: "CORS", back: "Cross-Origin Resource Sharing. Pol\u00edtica de seguran\u00e7a do browser que bloqueia requests entre dom\u00ednios diferentes." },
                    { front: "Middleware", back: "Fun\u00e7\u00e3o que intercepta TODAS as requisi\u00e7\u00f5es. Ideal para: logging, auth, rate limiting, CORS." },
                    { front: "allow_origins=[\"*\"]", back: "Permite qualquer origem. NUNCA usar em produ\u00e7\u00e3o — restrinja aos dom\u00ednios do front-end." }
                ],
                quiz: {
                    question: "Por que `allow_origins=['*']` \u00e9 perigoso em produ\u00e7\u00e3o?",
                    options: [
                        { text: "Deixa a API mais lenta.", correct: false, feedback: "Performance n\u00e3o \u00e9 o problema." },
                        { text: "Permite que qualquer site faça requisi\u00e7\u00f5es autenticadas \u00e0 sua API, habilitando ataques CSRF.", correct: true, feedback: "Correto! Restrinja sempre aos dom\u00ednios espec\u00edficos do seu front-end." },
                        { text: "N\u00e3o \u00e9 perigoso — CORS \u00e9 apenas uma configura\u00e7\u00e3o de browser.", correct: false, feedback: "CORS + credentials = risco real de seguran\u00e7a." }
                    ]
                }
            },
            {
                id: "m2w1-s7",
                title: "7. Background Tasks e Tarefas Ass\u00edncronas",
                content: `
Algumas opera\u00e7\u00f5es n\u00e3o devem bloquear a resposta (ex: enviar email, gerar relat\u00f3rio):

\`\`\`python
from fastapi import BackgroundTasks

def enviar_email(email: str, mensagem: str):
    # Simula envio de email (pode demorar 2s)
    import time
    time.sleep(2)
    print(f"Email enviado para {email}: {mensagem}")

@app.post("/registrar")
def registrar_usuario(
    email: str,
    background_tasks: BackgroundTasks
):
    # Salva no banco (r\u00e1pido)
    novo_usuario = {"email": email}

    # Envia email EM BACKGROUND (n\u00e3o bloqueia a resposta)
    background_tasks.add_task(
        enviar_email,
        email,
        "Bem-vindo ao sistema!"
    )

    # Responde imediatamente (antes do email ser enviado)
    return {"mensagem": "Usu\u00e1rio criado!", "usuario": novo_usuario}
\`\`\`

Para tarefas mais complexas (retry, filas, workers), use **Celery + Redis**.
`,
                flashcards: [
                    { front: "BackgroundTasks", back: "Executa fun\u00e7\u00f5es ap\u00f3s a resposta ser enviada ao cliente. Ideal para opera\u00e7\u00f5es lentas que n\u00e3o afetam a resposta." },
                    { front: "add_task(func, *args)", back: "Agenda uma fun\u00e7\u00e3o para executar em background ap\u00f3s o endpoint retornar." },
                    { front: "Celery", back: "Framework de filas de tarefas para tarefas pesadas, distributed, com retry e scheduling." }
                ],
                quiz: {
                    question: "Quando usar BackgroundTasks vs Celery para tarefas ass\u00edncronas?",
                    options: [
                        { text: "BackgroundTasks para TUDO — \u00e9 mais simples.", correct: false, feedback: "BackgroundTasks n\u00e3o tem retry, monitoramento, nem escala horizontal." },
                        { text: "BackgroundTasks para opera\u00e7\u00f5es simples/r\u00e1pidas (emails, notifica\u00e7\u00f5es); Celery para tarefas longas, distribu\u00eddas ou com retry.", correct: true, feedback: "Correto! BackgroundTasks = simples e in-process. Celery = produ\u00e7\u00e3o com escala." },
                        { text: "Celery para TUDO — \u00e9 mais robusto.", correct: false, feedback: "Celery adiciona complexidade desnecess\u00e1ria para tarefas simples." }
                    ]
                }
            },
            {
                id: "m2w1-s8",
                title: "8. Documenta\u00e7\u00e3o Autom\u00e1tica e OpenAPI",
                content: `
O FastAPI gera documenta\u00e7\u00e3o interativa automaticamente:

\`\`\`python
from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI(
    title="API de Produtos",
    description="""## API REST para gerenciamento de produtos

    Features:
    * **CRUD completo** de produtos
    * **Filtragem** por categoria e pre\u00e7o
    * **Pagina\u00e7\u00e3o** customiz\u00e1vel
    """,
    version="1.0.0",
    contact={"name": "Gustavo", "email": "gustavo@api.com"}
)

class Produto(BaseModel):
    """Modelo de produto para a loja."""
    nome: str
    preco: float
    categoria: str

@app.post(
    "/produtos",
    summary="Criar produto",
    description="Cria um novo produto no cat\u00e1logo.",
    response_description="O produto criado com ID gerado.",
    tags=["Produtos"]
)
def criar_produto(produto: Produto):
    return produto
\`\`\`

- **Swagger UI:** \`/docs\` — interface interativa para testar endpoints
- **ReDoc:** \`/redoc\` — documenta\u00e7\u00e3o em formato livro
- **OpenAPI JSON:** \`/openapi.json\` — spec machine-readable
`,
                flashcards: [
                    { front: "Swagger UI (/docs)", back: "Interface web autom\u00e1tica para testar todos os endpoints. Gerada pelo FastAPI sem configura\u00e7\u00e3o extra." },
                    { front: "tags=[\"Produtos\"]", back: "Agrupa endpoints por tag no Swagger. Essencial para APIs com muitos endpoints." },
                    { front: "OpenAPI", back: "Especifica\u00e7\u00e3o padr\u00e3o da ind\u00fastria para descrever APIs REST. FastAPI gera o JSON automaticamente." }
                ],
                quiz: {
                    question: "Como adicionar uma descri\u00e7\u00e3o ao endpoint que aparece no Swagger?",
                    options: [
                        { text: "Num arquivo swagger.yaml separado.", correct: false, feedback: "FastAPI gera o Swagger automaticamente — n\u00e3o precisa de arquivo separado." },
                        { text: "Via par\u00e2metro `description=` no decorator do endpoint OU via docstring da fun\u00e7\u00e3o.", correct: true, feedback: "Correto! FastAPI usa a docstring da fun\u00e7\u00e3o como descri\u00e7\u00e3o autom\u00e1tica." },
                        { text: "N\u00e3o \u00e9 poss\u00edvel customizar o Swagger no FastAPI.", correct: false, feedback: "FastAPI tem customiza\u00e7\u00e3o completa do OpenAPI via par\u00e2metros da instancia FastAPI()." }
                    ]
                }
            }
        ],
        memoryPalace: {
            title: "Pal\u00e1cio da Mem\u00f3ria: O Restaurante Digital",
            content: `
Imagine um **restaurante** para memorizar a arquitetura REST:

- 📋 **O Cardápio (Swagger /docs):** O cliente (front-end) consulta o menu antes de pedir. FastAPI gera isso automaticamente.
- 🧑‍🍳 **O Garçom (Verbo HTTP):** GET = "Me mostre o prato". POST = "Quero pedir um novo". PUT = "Troca meu pedido inteiro". DELETE = "Cancela tudo".
- 🎫 **O Número da Mesa (Path Parameter):** "/pedidos/7" — identifica exatamente qual pedido.
- 📝 **As Preferências (Query Params):** "?sem_cebola=true&porcao=pequena" — filtros adicionais.
- 🚫 **O Filtro da Cozinha (response_model):** O cliente nunca vê a receita secreta (senha) nem o custo de produção. Apenas o prato finalizado.
            `
        },
        exam: [
            {
                question: "1. Qual status HTTP indica que um recurso foi criado com sucesso?",
                options: ["200 OK", "204 No Content", "201 Created", "202 Accepted"],
                correctIndex: 2
            },
            {
                question: "2. O que torna o GET um método idempotente?",
                options: [
                    "Retorna sempre JSON.",
                    "Chamar múltiplas vezes produz o mesmo resultado sem efeitos colaterais.",
                    "Não precisa de autenticação.",
                    "É mais rápido que POST."
                ],
                correctIndex: 1
            },
            {
                question: "3. Para rodar FastAPI em modo desenvolvimento com reload automático:",
                options: [
                    "python main.py",
                    "fastapi run main.py",
                    "uvicorn main:app --reload",
                    "gunicorn main:app"
                ],
                correctIndex: 2
            },
            {
                question: "4. Qual o principal benefício de declarar `response_model` em um endpoint?",
                options: [
                    "Aumenta a velocidade de resposta.",
                    "Filtra campos sensíveis e valida o formato da resposta.",
                    "Permite usar async/await.",
                    "Gera testes automaticamente."
                ],
                correctIndex: 1
            }
        ]
    },

    "m2w2": {
        title: "Semana 2: Validação com Pydantic",
        subtitle: "Dados Confiáveis são a Base de uma API Robusta",
        studies: [
            {
                id: "m2w2-s1",
                title: "1. BaseModel e Validação Automática",
                content: `
**Pydantic** valida e parseia dados automaticamente usando type hints. Se os dados não baterem, um erro \`422\` é retornado antes do seu código executar.

\`\`\`python
from pydantic import BaseModel, Field
from typing import Optional

class Produto(BaseModel):
    nome: str
    preco: float
    descricao: Optional[str] = None
    estoque: int = Field(default=0, ge=0)  # >= 0

p = Produto(nome="Notebook", preco=3500.0)
print(p.model_dump())
# {'nome': 'Notebook', 'preco': 3500.0, 'descricao': None, 'estoque': 0}
\`\`\`

> ✅ **Pydantic v2** (padrão atual) é até 5x mais rápido que v1 por usar Rust internamente.
`,
                flashcards: [
                    { front: "BaseModel", back: "Classe base do Pydantic para criar modelos com validação automática via type hints." },
                    { front: "Field()", back: "Permite adicionar validações extras: ge (>=), le (<=), min_length, regex, etc." },
                    { front: "model_dump()", back: "Converte o modelo Pydantic para dicionário Python (antigo .dict() no v1)." }
                ],
                quiz: {
                    question: "O que acontece se você enviar `preco: 'abc'` para um campo `preco: float` no Pydantic?",
                    options: [
                        { text: "Pydantic salva 'abc' como string mesmo.", correct: false, feedback: "Pydantic não ignora tipos errados." },
                        { text: "Pydantic tenta converter para float; se falhar, lança ValidationError.", correct: true, feedback: "Correto! Pydantic tenta coerção. 'abc' não converte para float, então valida o erro." },
                        { text: "O programa crasha sem mensagem de erro.", correct: false, feedback: "Pydantic retorna um erro estruturado e detalhado, não um crash silencioso." }
                    ]
                }
            },
            {
                id: "m2w2-s2",
                title: "2. Validators Customizados",
                content: `
Quando as validações padrão não bastam, usamos \`@field_validator\` para regras de negócio customizadas:

\`\`\`python
from pydantic import BaseModel, field_validator

class Usuario(BaseModel):
    nome: str
    email: str
    idade: int

    @field_validator("email")
    @classmethod
    def email_valido(cls, v: str) -> str:
        if "@" not in v:
            raise ValueError("Email inválido")
        return v.lower()

    @field_validator("idade")
    @classmethod
    def maior_de_idade(cls, v: int) -> int:
        if v < 18:
            raise ValueError("Usuário deve ter 18 anos ou mais")
        return v
\`\`\`
`,
                flashcards: [
                    { front: "@field_validator", back: "Decorator Pydantic v2 para validações customizadas em campos específicos." },
                    { front: "ValidationError", back: "Exceção lançada pelo Pydantic quando um ou mais campos falham na validação." }
                ],
                quiz: {
                    question: "Quando usar `@field_validator` em vez de `Field(ge=0)`?",
                    options: [
                        { text: "Field() é sempre suficiente.", correct: false, feedback: "Field() cobre validações numéricas simples, mas não lógica de negócio complexa." },
                        { text: "Quando a regra de negócio envolve lógica além de min/max/regex.", correct: true, feedback: "Correto! Ex: verificar se o CPF é válido, se o email já existe no banco, etc." },
                        { text: "Apenas quando a API receber mais de 10 campos.", correct: false, feedback: "Quantidade de campos não é o critério." }
                    ]
                }
            },
            {
                id: "m2w2-s3",
                title: "3. Schemas de Entrada e Saída Separados",
                content: `
Boa prática fundamental: **nunca use o mesmo schema para input e output**.

\`\`\`python
from pydantic import BaseModel
from datetime import datetime

# Entrada (cliente envia)
class UsuarioCreate(BaseModel):
    nome: str
    email: str
    senha: str

# Saída (API retorna)
class UsuarioResponse(BaseModel):
    id: int
    nome: str
    email: str
    criado_em: datetime
    # senha NUNCA aparece aqui!

# No endpoint:
@app.post("/usuarios/", response_model=UsuarioResponse)
def criar(usuario: UsuarioCreate):
    ...
\`\`\`

**Convenção de nomenclatura:**
- \`XCreate\` — dados para criação
- \`XUpdate\` — dados para atualização (campos opcionais)
- \`XResponse\` — dados retornados
`,
                flashcards: [
                    { front: "Schema de Entrada", back: "Model com campos obrigatórios enviados pelo cliente (ex: UsuarioCreate)." },
                    { front: "Schema de Saída", back: "Model com campos seguros retornados pela API (ex: UsuarioResponse), sem dados sensíveis." }
                ],
                quiz: {
                    question: "Por que ter schemas separados para Create e Response?",
                    options: [
                        { text: "Para gerar mais arquivos e organizar pastas.", correct: false, feedback: "Organização é consequência, não o motivo principal." },
                        { text: "Para garantir que campos como senha jamais sejam retornados pela API.", correct: true, feedback: "Exato! É uma barreira de segurança crítica — separação de intenções." },
                        { text: "Porque FastAPI exige dois schemas por endpoint.", correct: false, feedback: "FastAPI não exige, mas é uma boa prática de segurança." }
                    ]
                }
            },
            {
                id: "m2w2-s4",
                title: "4. Tratamento de Erros com HTTPException",
                content: `
Em vez de deixar erros internos vazar para o cliente, use \`HTTPException\` para retornar respostas claras e seguras:

\`\`\`python
from fastapi import FastAPI, HTTPException

fake_db = {1: {"nome": "Ana"}, 2: {"nome": "Carlos"}}

@app.get("/usuarios/{user_id}")
def get_usuario(user_id: int):
    if user_id not in fake_db:
        raise HTTPException(
            status_code=404,
            detail=f"Usuário {user_id} não encontrado"
        )
    return fake_db[user_id]
\`\`\`

> ⚠️ **Nunca retorne stack traces ao cliente** — isso expõe detalhes internos da sua infraestrutura. \`HTTPException\` garante que apenas a mensagem controlada seja enviada.
`,
                flashcards: [
                    { front: "HTTPException", back: "Lança uma resposta HTTP com status code e detail controlados pelo desenvolvedor." },
                    { front: "status_code=404", back: "Indica que o recurso solicitado não foi encontrado no servidor." }
                ],
                quiz: {
                    question: "Qual o perigo de deixar uma exceção interna (ex: KeyError) vazar sem tratamento?",
                    options: [
                        { text: "Nenhum, o cliente apenas recebe 500.", correct: false, feedback: "O 500 genérico pode vazar stack traces com detalhes do servidor." },
                        { text: "Expõe detalhes internos (estrutura do código, banco de dados) para possíveis atacantes.", correct: true, feedback: "Correto! Erros não tratados são uma vulnerabilidade de segurança real." },
                        { text: "Deixa a API mais lenta.", correct: false, feedback: "Performance não é o principal problema aqui." }
                    ]
                }
            },
            {
                id: "m2w2-s5",
                title: "5. Schemas de Request vs Response",
                content: `
Separe sempre os schemas de **entrada** (request) e **sa\u00edda** (response):

\`\`\`python
from pydantic import BaseModel, EmailStr, Field
from typing import Optional
from datetime import datetime

# Schema de Cria\u00e7\u00e3o (request) — campos que o cliente envia
class UsuarioCriar(BaseModel):
    nome: str = Field(min_length=2, max_length=100)
    email: EmailStr
    senha: str = Field(min_length=8)

# Schema de Atualiza\u00e7\u00e3o (request) — todos opcionais (PATCH)
class UsuarioAtualizar(BaseModel):
    nome: Optional[str] = Field(None, min_length=2)
    email: Optional[EmailStr] = None

# Schema de Resposta — nunca inclua senha!
class UsuarioResposta(BaseModel):
    id: int
    nome: str
    email: str
    criado_em: datetime

    model_config = {"from_attributes": True}  # Pydantic v2 ORM mode

# Usando no endpoint
@app.post("/usuarios", response_model=UsuarioResposta, status_code=201)
def criar(usuario: UsuarioCriar, db: Session = Depends(get_db)):
    db_user = Usuario(nome=usuario.nome, email=usuario.email,
                      senha=hash_senha(usuario.senha))
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user  # FastAPI serializa usando UsuarioResposta
\`\`\`
`,
                flashcards: [
                    { front: "Schema de Cria\u00e7\u00e3o vs Resposta", back: "Cria\u00e7\u00e3o inclui campos sens\u00edveis (senha). Resposta NUNCA inclui senha. Sempre separar." },
                    { front: "from_attributes=True", back: "Pydantic v2 config para criar modelo a partir de objeto ORM (SQLAlchemy). Substitui orm_mode=True do v1." },
                    { front: "Schema PATCH", back: "Todos os campos s\u00e3o Optional. O endpoint aplica apenas o que foi enviado." }
                ],
                quiz: {
                    question: "Por que separar UsuarioCriar e UsuarioResposta em vez de usar um \u00fanico schema?",
                    options: [
                        { text: "\u00c9 apenas uma conven\u00e7\u00e3o, sem impacto real.", correct: false, feedback: "Tem impacto real de seguran\u00e7a." },
                        { text: "Para garantir que campos sens\u00edveis (senha, token) nunca sejam retornados na resposta da API.", correct: true, feedback: "Correto! Um \u00fanico schema que inclui senha no request pode vaz\u00e1-la na response se n\u00e3o configurado corretamente." },
                        { text: "Pydantic exige schemas separados.", correct: false, feedback: "Pydantic n\u00e3o exige — \u00e9 uma boa pr\u00e1tica de seguran\u00e7a." }
                    ]
                }
            },
            {
                id: "m2w2-s6",
                title: "6. Validators Customizados (Pydantic v2)",
                content: `
\`\`\`python
from pydantic import BaseModel, field_validator, model_validator
from typing import Self

class Pedido(BaseModel):
    produto_id: int
    quantidade: int
    desconto: float = 0.0
    preco_unitario: float

    # Valida um campo isolado
    @field_validator("quantidade")
    @classmethod
    def quantidade_positiva(cls, v: int) -> int:
        if v <= 0:
            raise ValueError("Quantidade deve ser positiva")
        return v

    # Valida m\u00faltiplos campos juntos
    @model_validator(mode="after")
    def desconto_valido(self) -> Self:
        if self.desconto >= self.preco_unitario:
            raise ValueError(
                f"Desconto ({self.desconto}) n\u00e3o pode ser maior que o pre\u00e7o ({self.preco_unitario})"
            )
        return self

    @property
    def total(self) -> float:
        return (self.preco_unitario - self.desconto) * self.quantidade

# Teste
try:
    Pedido(produto_id=1, quantidade=5, desconto=50.0, preco_unitario=30.0)
except ValueError as e:
    print(e)  # desconto maior que preco
\`\`\`
`,
                flashcards: [
                    { front: "@field_validator", back: "Valida um campo individual. Deve ser @classmethod. Levanta ValueError para erros." },
                    { front: "@model_validator(mode='after')", back: "Valida o modelo completo ap\u00f3s todos os campos serem processados. Ideal para valida\u00e7\u00f5es cruzadas." },
                    { front: "mode='before' vs 'after'", back: "before: recebe valor bruto antes da convers\u00e3o. after: recebe inst\u00e2ncia j\u00e1 validada." }
                ],
                quiz: {
                    question: "Para validar que a data_fim \u00e9 posterior \u00e0 data_inicio em um modelo, use:",
                    options: [
                        { text: "@field_validator na data_fim", correct: false, feedback: "@field_validator n\u00e3o tem acesso a outros campos no momento da valida\u00e7\u00e3o." },
                        { text: "@model_validator(mode='after') para acessar ambos os campos", correct: true, feedback: "Correto! model_validator recebe o objeto completo e pode comparar qualquer combina\u00e7\u00e3o de campos." },
                        { text: "if/else no __init__", correct: false, feedback: "Funciona, mas quebra o padr\u00e3o Pydantic e perde as mensagens de erro formatadas." }
                    ]
                }
            },
            {
                id: "m2w2-s7",
                title: "7. Settings e Vari\u00e1veis de Ambiente",
                content: `
Gerencie configura\u00e7\u00f5es usando **BaseSettings** do Pydantic:

\`\`\`python
# config.py
from pydantic_settings import BaseSettings
from functools import lru_cache

class Settings(BaseSettings):
    # Pydantic l\u00ea automaticamente de .env ou vari\u00e1veis de ambiente
    DATABASE_URL: str
    SECRET_KEY: str
    ALGORITHM: str = "HS256"
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 30
    DEBUG: bool = False
    ALLOWED_ORIGINS: list = ["http://localhost:3000"]

    model_config = {"env_file": ".env"}

# Cache singleton — n\u00e3o rel\u00ea o .env a cada request
@lru_cache
def get_settings() -> Settings:
    return Settings()

# Em qualquer arquivo do projeto
from config import get_settings
settings = get_settings()
print(settings.DATABASE_URL)
\`\`\`

**.env** (nunca commitar no Git):
\`\`\`bash
DATABASE_URL=postgresql://user:pass@localhost/db
SECRET_KEY=sua-chave-secreta-super-forte
DEBUG=false
\`\`\`
`,
                flashcards: [
                    { front: "BaseSettings", back: "Classe Pydantic que l\u00ea configura\u00e7\u00f5es de vari\u00e1veis de ambiente e .env automaticamente." },
                    { front: "@lru_cache em get_settings", back: "Garante que Settings() \u00e9 instanciado apenas uma vez (singleton). Evita reler .env em todo request." },
                    { front: ".env.example", back: "Arquivo template sem valores reais que PODE ser commitado. Documenta quais vari\u00e1veis s\u00e3o necess\u00e1rias." }
                ],
                quiz: {
                    question: "Por que usar @lru_cache em get_settings()?",
                    options: [
                        { text: "Para criptografar as configura\u00e7\u00f5es.", correct: false, feedback: "@lru_cache n\u00e3o faz criptografia." },
                        { text: "Para criar um singleton — evitar instanciar Settings() (e reler .env) a cada requisi\u00e7\u00e3o.", correct: true, feedback: "Correto! Sem cache, cada request criaria um novo Settings(), relendo o disco desnecess\u00e1riamente." },
                        { text: "Para acelerar os validators do Pydantic.", correct: false, feedback: "N\u00e3o afeta os validators." }
                    ]
                }
            },
            {
                id: "m2w2-s8",
                title: "8. Error Handlers Globais e Respostas Padronizadas",
                content: `
Padronize as respostas de erro em toda a API:

\`\`\`python
from fastapi import FastAPI, Request, status
from fastapi.responses import JSONResponse
from fastapi.exceptions import RequestValidationError
from pydantic import BaseModel
from typing import Any, Optional

app = FastAPI()

# Schema padr\u00e3o de resposta de erro
class ErroResposta(BaseModel):
    sucesso: bool = False
    codigo: int
    mensagem: str
    detalhes: Optional[Any] = None

# Handler global para erros de valida\u00e7\u00e3o do Pydantic
@app.exception_handler(RequestValidationError)
async def validation_exception_handler(request: Request, exc: RequestValidationError):
    return JSONResponse(
        status_code=status.HTTP_422_UNPROCESSABLE_ENTITY,
        content=ErroResposta(
            codigo=422,
            mensagem="Dados inv\u00e1lidos",
            detalhes=exc.errors()
        ).model_dump()
    )

# Exce\u00e7\u00e3o de neg\u00f3cio customizada
class RecursoNaoEncontrado(Exception):
    def __init__(self, recurso: str, id: int):
        self.recurso = recurso
        self.id = id

@app.exception_handler(RecursoNaoEncontrado)
async def recurso_nao_encontrado(request: Request, exc: RecursoNaoEncontrado):
    return JSONResponse(
        status_code=404,
        content=ErroResposta(
            codigo=404,
            mensagem=f"{exc.recurso} com ID {exc.id} n\u00e3o encontrado"
        ).model_dump()
    )
\`\`\`
`,
                flashcards: [
                    { front: "@app.exception_handler", back: "Registra um handler global para um tipo espec\u00edfico de exce\u00e7\u00e3o. Intercepta erros em todos os endpoints." },
                    { front: "RequestValidationError", back: "Exce\u00e7\u00e3o lan\u00e7ada quando Pydantic n\u00e3o consegue validar o body do request." },
                    { front: "Resposta padronizada", back: "Sempre use o mesmo schema de erro em toda a API. Facilita o tratamento no front-end." }
                ],
                quiz: {
                    question: "Qual a vantagem de um exception_handler global vs HTTPException em cada endpoint?",
                    options: [
                        { text: "HTTPException \u00e9 sempre preferido.", correct: false, feedback: "Depende do caso de uso." },
                        { text: "Handler global garante formato de erro consistente em toda a API, sem duplicar c\u00f3digo em cada endpoint.", correct: true, feedback: "Correto! DRY (Don't Repeat Yourself) aplicado ao tratamento de erros." },
                        { text: "Handlers globais s\u00e3o mais lentos.", correct: false, feedback: "O overhead \u00e9 irrelev\u00e1vel." }
                    ]
                }
            }
        ],
        memoryPalace: {
            title: "Pal\u00e1cio da Mem\u00f3ria: O Porteiro do Clube",
            content: `
Pense no **Pydantic como o porteiro de um clube exclusivo**:

- 📋 **A Lista (BaseModel):** Define quem pode entrar e com quais documentos. Sem os documentos certos, barrado na porta.
- 📏 **As Regras da Lista (Field validators):** "Precisa ter mais de 18 anos e trajar adequadamente." Regras simples automáticas.
- 🕵️ **O Inspetor Especialista (@field_validator):** Verifica se o documento não é falso, se o email é real, se o CPF existe. Regras que exigem raciocínio.
- 🎭 **A Máscara de Saída (Response Schema):** Quando o membro sai na foto, a câmera borra o crachá com a senha interna. O mundo de fora nunca vê dados internos.
- 🚨 **O Alarme (HTTPException):** Se alguém não autorizado tenta entrar, o porteiro não entra em pânico — ele aciona o botão e exibe uma mensagem clara: "Acesso negado."
            `
        },
        exam: [
            {
                question: "1. Qual método Pydantic v2 converte o modelo para dicionário Python?",
                options: [".dict()", ".to_dict()", ".model_dump()", ".serialize()"],
                correctIndex: 2
            },
            {
                question: "2. `Field(ge=0)` em um campo `estoque: int` significa:",
                options: [
                    "estoque deve ser maior que zero.",
                    "estoque deve ser maior ou igual a zero.",
                    "estoque é opcional.",
                    "estoque aceita apenas inteiros pares."
                ],
                correctIndex: 1
            },
            {
                question: "3. O que acontece quando um `@field_validator` lança `ValueError`?",
                options: [
                    "O programa encerra.",
                    "Pydantic ignora o campo e usa o valor padrão.",
                    "Pydantic transforma em ValidationError e FastAPI retorna 422.",
                    "O FastAPI retorna 500."
                ],
                correctIndex: 2
            },
            {
                question: "4. Por que nunca usar o mesmo schema Pydantic para input e output?",
                options: [
                    "FastAPI não suporta isso tecnicamente.",
                    "Para garantir que dados sensíveis (ex: senha) não sejam retornados acidentalmente.",
                    "Pydantic exige schemas diferentes por padrão.",
                    "Apenas para organizar o código em mais arquivos."
                ],
                correctIndex: 1
            }
        ]
    },

    "m2w3": {
        title: "Semana 3: Camadas e Arquitetura",
        subtitle: "Organização que Escala com o Time",
        studies: [
            {
                id: "m2w3-s1",
                title: "1. Separação em Camadas (Router, Service, Repository)",
                content: `
Projetos reais separam responsabilidades em camadas distintas. Uma estrutura clássica para FastAPI:

\`\`\`
app/
├── main.py           # Ponto de entrada
├── routers/          # Endpoints HTTP
│   └── usuarios.py
├── services/         # Regras de negócio
│   └── usuario_service.py
├── repositories/     # Acesso a dados
│   └── usuario_repo.py
└── schemas/          # Modelos Pydantic
    └── usuario.py
\`\`\`

**Por que separar?**
- **Testabilidade:** Você testa o Service sem precisar de HTTP.
- **Manutenção:** Trocar PostgreSQL por MongoDB afeta apenas o Repository.
- **Legibilidade:** Cada arquivo tem uma responsabilidade clara.
`,
                flashcards: [
                    { front: "Router", back: "Camada HTTP: recebe request, chama Service, retorna response." },
                    { front: "Service", back: "Camada de negócio: contém as regras da aplicação, independente de HTTP." },
                    { front: "Repository", back: "Camada de dados: abstrai o acesso ao banco. Fácil de trocar." }
                ],
                quiz: {
                    question: "Se você trocar o banco de dados de SQLite para PostgreSQL, qual camada deve ser alterada?",
                    options: [
                        { text: "Router", correct: false, feedback: "O Router não sabe nada sobre o banco." },
                        { text: "Service", correct: false, feedback: "O Service contém regras de negócio, não acesso a dados." },
                        { text: "Repository", correct: true, feedback: "Correto! O Repository é a única camada que sabe como acessar o banco." }
                    ]
                }
            },
            {
                id: "m2w3-s2",
                title: "2. APIRouter e Organização de Endpoints",
                content: `
\`APIRouter\` permite organizar endpoints em arquivos separados e registrá-los no \`main.py\`:

\`\`\`python
# routers/usuarios.py
from fastapi import APIRouter

router = APIRouter(prefix="/usuarios", tags=["Usuários"])

@router.get("/")
def listar():
    return []

@router.get("/{id}")
def buscar(id: int):
    return {"id": id}
\`\`\`

\`\`\`python
# main.py
from fastapi import FastAPI
from routers import usuarios

app = FastAPI()
app.include_router(usuarios.router)
\`\`\`

O \`tags=["Usuários"]\` agrupa os endpoints no Swagger UI automaticamente.
`,
                flashcards: [
                    { front: "APIRouter", back: "Permite dividir endpoints em múltiplos arquivos e agrupá-los por domínio." },
                    { front: "prefix", back: "Prefixo aplicado a todas as rotas do router. Ex: prefix='/usuarios' → GET /usuarios/" },
                    { front: "include_router()", back: "Registra um APIRouter no app principal do FastAPI." }
                ],
                quiz: {
                    question: "Qual o benefício de usar `APIRouter` com `prefix='/usuarios'`?",
                    options: [
                        { text: "Aumenta a velocidade dos endpoints.", correct: false, feedback: "Performance não é o motivo." },
                        { text: "Centraliza os endpoints de um domínio e evita repetir o prefixo em cada rota.", correct: true, feedback: "Exato! Você escreve @router.get('/') e automaticamente é mapeado para /usuarios/." },
                        { text: "Permite usar async sem uvicorn.", correct: false, feedback: "Async é uma feature independente do APIRouter." }
                    ]
                }
            },
            {
                id: "m2w3-s3",
                title: "3. Dependency Injection com Depends()",
                content: `
**Injeção de Dependências** é um padrão que torna o código desacoplado e testável. O FastAPI tem suporte nativo via \`Depends()\`:

\`\`\`python
from fastapi import Depends, HTTPException, Header

def verificar_token(authorization: str = Header(...)):
    if authorization != "Bearer meu-token":
        raise HTTPException(status_code=401, detail="Não autorizado")
    return authorization

@app.get("/dados-privados/")
def dados_privados(token: str = Depends(verificar_token)):
    return {"dados": "secretos"}
\`\`\`

**Casos de uso comuns:**
- Autenticação/Autorização
- Sessão de banco de dados
- Configurações globais
`,
                flashcards: [
                    { front: "Depends()", back: "Injeta automaticamente uma dependência (função) em um endpoint ou outro Depends." },
                    { front: "Injeção de Dependência", back: "Padrão que fornece componentes (ex: sessão DB) para funções sem que elas os criem diretamente." }
                ],
                quiz: {
                    question: "Qual a principal vantagem de usar `Depends()` para autenticação?",
                    options: [
                        { text: "Evita usar async.", correct: false, feedback: "Depends funciona com sync e async igualmente." },
                        { text: "Reutiliza a lógica de auth em múltiplos endpoints sem duplicar código.", correct: true, feedback: "Perfeito! Uma função de verificação pode ser injetada em qualquer endpoint." },
                        { text: "Torna o endpoint mais rápido.", correct: false, feedback: "Performance não é o ganho principal." }
                    ]
                }
            },
            {
                id: "m2w3-s4",
                title: "4. Variáveis de Ambiente com python-dotenv",
                content: `
Nunca hardcode segredos no código. Use variáveis de ambiente via \`.env\`:

\`\`\`bash
# .env (nunca committar no Git!)
DATABASE_URL=postgresql://user:senha@localhost/db
SECRET_KEY=minha_chave_secreta_muito_segura
DEBUG=False
\`\`\`

\`\`\`python
# config.py
from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    database_url: str
    secret_key: str
    debug: bool = False

    class Config:
        env_file = ".env"

settings = Settings()
print(settings.database_url)
\`\`\`

> 🔐 **Adicione \`.env\` ao \`.gitignore\` imediatamente!** Vazar credenciais no GitHub é uma das falhas de segurança mais comuns de júniores.
`,
                flashcards: [
                    { front: ".env", back: "Arquivo de variáveis de ambiente local. NUNCA deve ser commitado no Git." },
                    { front: "pydantic_settings", back: "Biblioteca que carrega e valida variáveis de ambiente usando BaseSettings." },
                    { front: ".gitignore", back: "Arquivo que lista padrões de arquivos ignorados pelo Git. Inclua sempre .env!" }
                ],
                quiz: {
                    question: "Por que nunca hardcodar `DATABASE_URL='postgresql://...'` diretamente no código?",
                    options: [
                        { text: "Python não suporta strings longas.", correct: false, feedback: "Python suporta strings de qualquer tamanho." },
                        { text: "Credenciais no código-fonte ficam expostas no repositório Git para qualquer um que acesse.", correct: true, feedback: "Correto! Isso é uma das vulnerabilidades mais comuns e graves — use sempre .env." },
                        { text: "O FastAPI não consegue ler variáveis hardcodadas.", correct: false, feedback: "FastAPI leria normalmente, mas o problema é de segurança." }
                    ]
                }
            },
            {
                id: "m2w3-s5",
                title: "5. Injeção de Dependência Avançada",
                content: `
O FastAPI permite injetar \`Depends()\` em diferentes níveis: em toda a API, num Router ou num Endpoint específico.

\`\`\`python
from fastapi import FastAPI, Depends, APIRouter, Header, HTTPException

def verify_token(x_token: str = Header(...)):
    if x_token != "super-secret-token":
        raise HTTPException(status_code=400, detail="X-Token header inválido")

# 1. Dependência global (aplica a todos os endpoints do app)
app = FastAPI(dependencies=[Depends(verify_token)])

# 2. Dependência no Router (aplica a todos os endpoints deste router)
admin_router = APIRouter(
    prefix="/admin",
    dependencies=[Depends(verify_token)]
)

# 3. Dependência com yield (para fechar conexões)
def get_db():
    db = SessionLocal()
    try:
        yield db   # Repassa o DB para o endpoint
    finally:
        db.close() # Executa APÓS o endpoint retornar a resposta
\`\`\`
`,
                flashcards: [
                    { front: "dependencies=[Depends(...)]", back: "Adiciona dependências no nível do FastAPI() ou APIRouter(). Não precisa passar como parâmetro do endpoint." },
                    { front: "yield em Depends", back: "Permite executar código de limpeza (cleanup) após a resposta ser enviada (ex: fechar banco de dados)." },
                    { front: "Depends() recursivo", back: "Uma dependência do FastAPI pode depender de outra. O framework resolve a árvore inteira." }
                ],
                quiz: {
                    question: "Como garantir que um banco de dados seja fechado mesmo se o endpoint falhar com uma exceção?",
                    options: [
                        { text: "Usando try/except dentro do próprio endpoint.", correct: false, feedback: "Repetiria código em todo endpoint." },
                        { text: "Usando yield e try/finally na função injetada pelo Depends.", correct: true, feedback: "Correto! O FastAPI executa o finally do generator após a resposta terminar." },
                        { text: "O FastAPI fecha as conexões automaticamente.", correct: false, feedback: "Ele não sabe como gerenciar recursos externos (banco, arquivos) sem código explícito." }
                    ]
                }
            },
            {
                id: "m2w3-s6",
                title: "6. Autenticação JWT e OAuth2",
                content: `
O FastAPI tem suporte embutido ao fluxo **OAuth2 com Password (e Bearer JWT)**, onde o usuário envia \`username\` e \`password\` e recebe um Token.

\`\`\`python
from fastapi import FastAPI, Depends, HTTPException
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm

app = FastAPI()

# Diz ao Swagger ONDE pegar o token (neste caso, na rota /token)
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")

@app.post("/token")
def login(form_data: OAuth2PasswordRequestForm = Depends()):
    # Valida usuário e senha do form_data
    if form_data.username == "admin" and form_data.password == "123":
        # Gera o token (normalmente com biblioteca jose/jwt)
        return {"access_token": "token_jwt_aqui", "token_type": "bearer"}
    raise HTTPException(status_code=400, detail="Credenciais erradas")

@app.get("/perfil")
def ler_perfil(token: str = Depends(oauth2_scheme)):
    # Se o token não for enviado no header "Authorization: Bearer ...",
    # o OAuth2PasswordBearer lança erro 401 automaticamente!
    return {"token_enviado": token}
\`\`\`
`,
                flashcards: [
                    { front: "OAuth2PasswordBearer", back: "Extrai o token do header 'Authorization: Bearer <token>' e valida formato, ou lança 401. Integra com o Swagger." },
                    { front: "OAuth2PasswordRequestForm", back: "Espera form data (não JSON) com campos 'username' e 'password'. Padrão do fluxo OAuth2 password." },
                    { front: "JWT (JSON Web Token)", back: "Token seguro criptograficamente que guarda os dados do usuário (payload) sem precisar ir ao banco validar." }
                ],
                quiz: {
                    question: "Por que `OAuth2PasswordRequestForm` recebe dados via Form Data e não JSON?",
                    options: [
                        { text: "Form Data é mais rápido que JSON.", correct: false, feedback: "Performance é similar." },
                        { text: "Porque é a especificação oficial do protocolo OAuth2 para o fluxo de password.", correct: true, feedback: "Correto! O FastAPI segue os padrões estritos da web, e a RFC do OAuth2 exige URL encoded form." },
                        { text: "O FastAPI não suporta JSON para autenticação.", correct: false, feedback: "Você pode fazer em JSON, mas não seria o fluxo padrão OAuth2 suportado pelo Swagger." }
                    ]
                }
            },
            {
                id: "m2w3-s7",
                title: "7. Segurança: Hashing de Senhas",
                content: `
**NUNCA salve senhas em texto puro.** Use um algoritmo forte como **Bcrypt**:

\`\`\`bash
pip install passlib[bcrypt]
\`\`\`

\`\`\`python
from passlib.context import CryptContext

# Cria um contexto usando bcrypt
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

def gerar_hash_senha(senha_texto_puro: str) -> str:
    return pwd_context.hash(senha_texto_puro)

def verificar_senha(senha_texto_puro: str, senha_hash: str) -> bool:
    # Compara a senha do login com o hash salvo no banco
    return pwd_context.verify(senha_texto_puro, senha_hash)

hash_salvo = gerar_hash_senha("senha_secreta_123")
print(hash_salvo) 
# $2b$12$eXo/hZlG/n1O3D3... (salve ISSO no banco)

print(verificar_senha("senha_secreta_123", hash_salvo)) # True
print(verificar_senha("senha_errada", hash_salvo))      # False
\`\`\`
`,
                flashcards: [
                    { front: "Bcrypt", back: "Algoritmo de hashing lento por design, ideal para senhas, que inclui um 'salt' gerado aleatoriamente em cada hash." },
                    { front: "Hashing vs Encriptação", back: "Hash é via de mão única (não dá pra reverter). Encriptação é bidirecional (com chave, dá pra desfazer)." },
                    { front: "Salt", back: "Texto aleatório adicionado à senha antes do hash para evitar ataques de rainbow tables. Bcrypt faz isso automático." }
                ],
                quiz: {
                    question: "O que acontece se um atacante roubar seu banco de dados com as senhas em Hash (Bcrypt)?",
                    options: [
                        { text: "Ele pode usar a chave do servidor para descriptografar todas.", correct: false, feedback: "Hashes não podem ser descriptografados (não há chave)." },
                        { text: "Ele tem o hash, mas descobrir a senha original é matematicamente inviável devido à lentidão do bcrypt e ao salt.", correct: true, feedback: "Correto! Este é o princípio de salvar hashes: mesmo vazando, as senhas originais estão protegidas." },
                        { text: "Ele usa o hash para fazer login direto no sistema.", correct: false, feedback: "O sistema pede a senha original e faz o hash no momento para comparar, não aceita o hash direto." }
                    ]
                }
            },
            {
                id: "m2w3-s8",
                title: "8. Padrão Repository e Isolamento de Lógica",
                content: `
A **Camada de Repositório** foca *exclusivamente* na persistência de dados, isolando o ORM ou banco de dados do resto da aplicação:

\`\`\`python
# repositorio/usuario.py
from sqlalchemy.orm import Session
from models import Usuario
from schemas import UsuarioCreate

# Toda a lógica de banco de dados fica aqui
def buscar_por_email(db: Session, email: str):
    return db.query(Usuario).filter(Usuario.email == email).first()

def criar_usuario(db: Session, user: UsuarioCreate, hashed_pwd: str):
    db_user = Usuario(email=user.email, senha_hash=hashed_pwd)
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user

# router/usuario.py
from repositorio import usuario as rep_user
from fastapi import APIRouter, Depends, HTTPException

@router.post("/")
def criar(user: UsuarioCreate, db: Session = Depends(get_db)):
    # O router só repassa a chamada. Limpo e fácil de ler!
    db_user = rep_user.buscar_por_email(db, email=user.email)
    if db_user:
        raise HTTPException(status_code=400, detail="Email registrado")
    
    hashed = gerar_hash_senha(user.senha)
    return rep_user.criar_usuario(db, user, hashed)
\`\`\`
`,
                flashcards: [
                    { front: "Repository Pattern", back: "Isola a comunicação com o banco de dados. Facilita trocar de ORM/DB e mockar testes." },
                    { front: "Responsabilidade do Router", back: "Receber a requisição, validar (via Depends/Pydantic), invocar o repositório/serviço, e retornar HTTP." },
                    { front: "Vantagem do Repository", back: "Código do banco não fica espalhado nos endpoints (routers), melhorando a legibilidade e manutenibilidade." }
                ],
                quiz: {
                    question: "Qual o erro comum que o Repository Pattern resolve?",
                    options: [
                        { text: "Evitar vazamento de memória.", correct: false, feedback: "Ele ajuda na arquitetura e separação de responsabilidades." },
                        { text: "Evitar escrever as consultas SQL ou ORM diretamente dentro das funções dos endpoints (routers).", correct: true, feedback: "Correto! Se o código do banco fica nos routers, é impossível reutilizar essa lógica ou testar sem HTTP." },
                        { text: "Ele gera documentação automática.", correct: false, feedback: "Isso é função do FastAPI e Pydantic." }
                    ]
                }
            }
        ],
        memoryPalace: {
            title: "Palácio da Memória: O Prédio Corporativo",
            content: `
Visualize um **prédio corporativo bem organizado**:

- 🚪 **Recepção (Router):** O visitante (request HTTP) chega, é identificado e direcionado ao andar correto. A recepção não resolve problemas, apenas direciona.
- 🧠 **Gerência (Service):** O andar onde as decisões de negócio são tomadas. Aqui se decide se o pedido faz sentido, se o usuário tem permissão, se os dados são válidos.
- 🗄️ **Arquivo (Repository):** O subsolo onde ficam todos os documentos (banco de dados). Apenas funcionários autorizados descem aqui.
- 🔌 **Tomadas Padrão (Depends):** Cada sala do prédio tem a mesma tomada padrão. Plugou o aparelho, funciona — sem precisar construir uma nova instalação elétrica para cada sala.
- 🔒 **O Cofre do RH (.env):** Senhas e contratos ficam num cofre separado. Ninguém de fora do prédio tem acesso — e o cofre nunca vai pra foto do Instagram (GitHub).
            `
        },
        exam: [
            {
                question: "1. Em qual camada deve ficar a lógica de 'um usuário só pode deletar seu próprio post'?",
                options: ["Router", "Schema Pydantic", "Service", "Repository"],
                correctIndex: 2
            },
            {
                question: "2. `APIRouter(prefix='/produtos', tags=['Produtos'])` — o que o `tags` define?",
                options: [
                    "O nome do banco de dados.",
                    "A categoria no Swagger UI para agrupar os endpoints visualmente.",
                    "O método HTTP padrão dos endpoints.",
                    "A versão da API."
                ],
                correctIndex: 1
            },
            {
                question: "3. O que `Depends(verificar_token)` faz quando adicionado a um endpoint?",
                options: [
                    "Importa a função verificar_token como módulo.",
                    "Executa verificar_token antes do endpoint e injeta o resultado como parâmetro.",
                    "Desabilita a validação Pydantic no endpoint.",
                    "Adiciona o endpoint ao Swagger com autenticação visual."
                ],
                correctIndex: 1
            },
            {
                question: "4. Qual arquivo NUNCA deve ser incluído em commits Git?",
                options: ["requirements.txt", "main.py", ".env", "schemas.py"],
                correctIndex: 2
            }
        ]
    },

    "m2w4": {
        title: "Semana 4: Testes de Rota com TestClient",
        subtitle: "APIs Confiáveis são APIs Testadas",
        studies: [
            {
                id: "m2w4-s1",
                title: "1. TestClient do FastAPI",
                content: `
O **TestClient** do FastAPI (baseado no \`httpx\`) permite testar endpoints sem subir um servidor real:

\`\`\`python
# test_main.py
from fastapi.testclient import TestClient
from main import app

client = TestClient(app)

def test_root():
    response = client.get("/")
    assert response.status_code == 200
    assert response.json() == {"mensagem": "API no ar!"}

def test_get_usuario():
    response = client.get("/usuarios/1")
    assert response.status_code == 200
    data = response.json()
    assert "nome" in data
\`\`\`

Rode: \`pytest test_main.py -v\`
`,
                flashcards: [
                    { front: "TestClient", back: "Cliente de teste do FastAPI que simula requisições HTTP sem subir um servidor real." },
                    { front: "response.status_code", back: "O código HTTP retornado pelo endpoint testado." },
                    { front: "response.json()", back: "Parseia o corpo da resposta como dicionário Python." }
                ],
                quiz: {
                    question: "Qual a vantagem do TestClient sobre testar manualmente no Postman/browser?",
                    options: [
                        { text: "O TestClient é mais bonito visualmente.", correct: false, feedback: "Interface visual não é o objetivo de testes automatizados." },
                        { text: "Testes automatizados rodam em segundos, são repetíveis e detectam regressões antes do deploy.", correct: true, feedback: "Exato! Um teste que roda em 50ms detecta bugs que Postman manual deixaria passar." },
                        { text: "O TestClient cria dados reais no banco de produção.", correct: false, feedback: "Testes devem usar banco isolado, nunca produção." }
                    ]
                }
            },
            {
                id: "m2w4-s2",
                title: "2. Testando POST, PUT e DELETE",
                content: `
\`\`\`python
def test_criar_usuario():
    payload = {"nome": "Ana", "email": "ana@test.com", "senha": "secreta"}
    response = client.post("/usuarios/", json=payload)
    assert response.status_code == 201
    data = response.json()
    assert data["nome"] == "Ana"
    assert "senha" not in data  # Nunca deve vazar!

def test_usuario_nao_encontrado():
    response = client.get("/usuarios/99999")
    assert response.status_code == 404

def test_deletar_usuario():
    response = client.delete("/usuarios/1")
    assert response.status_code == 204
\`\`\`

> 💡 Sempre teste o **caminho feliz** (sucesso) E os **caminhos de erro** (404, 422, 401). Testes só do caminho feliz dão falsa segurança.
`,
                flashcards: [
                    { front: "client.post(url, json={})", back: "Envia uma requisição POST com corpo JSON para o endpoint." },
                    { front: "Teste de Caminho de Erro", back: "Teste que verifica o comportamento da API quando recebe dados inválidos ou recursos inexistentes." }
                ],
                quiz: {
                    question: "Por que testar `assert 'senha' not in response.json()`?",
                    options: [
                        { text: "Para garantir que o endpoint retorna JSON.", correct: false, feedback: "Isso seria verificado com response.status_code." },
                        { text: "Para garantir que o response_model está filtrando dados sensíveis corretamente.", correct: true, feedback: "Perfeito! Esse assert detecta se alguém acidentalmente expôs a senha na resposta." },
                        { text: "Python não consegue armazenar senhas em JSON.", correct: false, feedback: "Python consegue, mas não devemos retornar senhas em APIs." }
                    ]
                }
            },
            {
                id: "m2w4-s3",
                title: "3. Fixtures e Banco de Dados em Testes",
                content: `
Use **fixtures** do pytest para isolar o estado entre testes:

\`\`\`python
import pytest
from fastapi.testclient import TestClient
from main import app
from database import get_db, Base, engine

# Sobrescreve o banco de produção por um banco de testes
@pytest.fixture
def client_test():
    Base.metadata.create_all(bind=engine)
    with TestClient(app) as c:
        yield c
    Base.metadata.drop_all(bind=engine)

def test_criar_e_buscar(client_test):
    # Cria
    r = client_test.post("/usuarios/", json={"nome": "Bob", "email": "b@test.com"})
    assert r.status_code == 201
    user_id = r.json()["id"]

    # Busca o criado
    r2 = client_test.get(f"/usuarios/{user_id}")
    assert r2.json()["nome"] == "Bob"
\`\`\`
`,
                flashcards: [
                    { front: "@pytest.fixture", back: "Decorator que cria recursos de teste reutilizáveis (setup/teardown automático)." },
                    { front: "yield em fixture", back: "O código antes do yield é o setup, e após o yield é o teardown (limpeza)." }
                ],
                quiz: {
                    question: "Por que usar um banco de dados separado para testes?",
                    options: [
                        { text: "Bancos de teste são mais rápidos.", correct: false, feedback: "Velocidade não é o motivo principal." },
                        { text: "Para não poluir nem corromper dados reais de produção durante os testes.", correct: true, feedback: "Correto! Testes devem ser completamente isolados do ambiente de produção." },
                        { text: "FastAPI não conecta ao banco em modo de teste.", correct: false, feedback: "FastAPI conecta normalmente — por isso você precisa apontar para outro banco." }
                    ]
                }
            },
            {
                id: "m2w4-s4",
                title: "4. Cobertura de Testes com pytest-cov",
                content: `
**Coverage** mede qual percentual do código foi executado pelos testes:

\`\`\`bash
pip install pytest-cov
pytest --cov=app --cov-report=term-missing
\`\`\`

Saída:
\`\`\`
Name                    Stmts   Miss  Cover
-------------------------------------------
app/main.py               15      2    87%
app/routers/usuarios.py   28      0   100%
app/services/usuario.py   20      5    75%
\`\`\`

**Metas realistas:**
- ✅ **70%+** — mínimo aceitável em produção
- 🎯 **80%+** — padrão de time profissional
- ⚠️ **100%** — pode indicar testes frágeis (testando implementação, não comportamento)

> Coverage alto **não garante qualidade** se os asserts forem fracos.
`,
                flashcards: [
                    { front: "Coverage", back: "Percentual de linhas do código que foram executadas pelos testes." },
                    { front: "--cov-report=term-missing", back: "Mostra exatamente quais linhas NÃO foram cobertas pelos testes." }
                ],
                quiz: {
                    question: "100% de cobertura garante que a API não tem bugs?",
                    options: [
                        { text: "Sim, se todas as linhas foram executadas, está correto.", correct: false, feedback: "Linhas executadas não significa asserts corretos — você pode ter 100% de coverage com zero verificações." },
                        { text: "Não. Coverage mede execução, não a qualidade das verificações (asserts).", correct: true, feedback: "Exato! Um teste que chama a função mas não verifica o resultado dá 100% de coverage inútil." },
                        { text: "Sim, mas apenas com o banco de produção.", correct: false, feedback: "Nunca teste em produção." }
                    ]
                }
            },
            {
                id: "m2w4-s5",
                title: "5. Testes com Banco de Dados de Teste (Overrides)",
                content: `
O FastAPI permite substituir qualquer \`Depends\` durante os testes com **dependency_overrides**. Use isso para conectar a API a um banco temporário:

\`\`\`python
# test_db.py
import pytest
from fastapi.testclient import TestClient
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

from main import app, get_db
from models import Base

# Cria um SQLite em memória (muito rápido!)
engine = create_engine("sqlite:///:memory:")
TestingSessionLocal = sessionmaker(autocommit=False, bind=engine)

def override_get_db():
    db = TestingSessionLocal()
    try:
        yield db
    finally:
        db.close()

# Substitui a dependência real pela de teste
app.dependency_overrides[get_db] = override_get_db
client = TestClient(app)

@pytest.fixture(autouse=True)
def preparar_banco():
    # Cria tabelas ANTES de cada teste
    Base.metadata.create_all(bind=engine)
    yield
    # Destrói tabelas APÓS o teste
    Base.metadata.drop_all(bind=engine)

def test_criar_item():
    response = client.post("/itens/", json={"nome": "Caneta"})
    assert response.status_code == 201
    assert response.json()["nome"] == "Caneta"
\`\`\`
`,
                flashcards: [
                    { front: "dependency_overrides", back: "Dicionário no objeto FastAPI() para trocar funções injetadas por mocks ou funções de teste." },
                    { front: "sqlite:///:memory:", back: "Cria um banco SQLite na memória RAM. Perfeito e ultrarrápido para testes isolados." },
                    { front: "Base.metadata.drop_all", back: "Limpa o banco. É essencial zerar o banco entre um teste e outro para evitar interferência." }
                ],
                quiz: {
                    question: "Por que usar `app.dependency_overrides` em testes?",
                    options: [
                        { text: "Para evitar enviar emails reais ou conectar ao banco de dados de produção durante a execução de testes.", correct: true, feedback: "Correto! Essa funcionalidade permite injetar serviços falsos/locais sem alterar o código do aplicativo." },
                        { text: "Para pular a validação do Pydantic em testes e deixá-los mais rápidos.", correct: false, feedback: "A validação do Pydantic deve continuar sendo testada." },
                        { text: "Para aumentar a cobertura do pytest-cov.", correct: false, feedback: "Não aumenta cobertura diretamente." }
                    ]
                }
            },
            {
                id: "m2w4-s6",
                title: "6. Mocks e Patching",
                content: `
Quando sua API faz chamadas a APIs externas (ex: Stripe, AWS), você **não** deve chamar a API real no teste. Use **unittest.mock**:

\`\`\`python
# main.py
import httpx
def chamar_pagamento(valor: float):
    # Faz request para API terceira
    res = httpx.post("https://api.pagamento.com", json={"v": valor})
    return res.status_code == 200

# test_pagamento.py
from unittest.mock import patch
from main import chamar_pagamento

# "patch" substitui temporariamente o httpx.post
@patch("main.httpx.post")
def test_pagamento_sucesso(mock_post):
    # Configuramos o mock para fingir que a resposta tem status 200
    mock_post.return_value.status_code = 200
    
    resultado = chamar_pagamento(100.0)
    
    assert resultado is True
    # Verificamos se nossa função chamou o httpx.post com os dados certos
    mock_post.assert_called_once_with(
        "https://api.pagamento.com", json={"v": 100.0}
    )
\`\`\`
`,
                flashcards: [
                    { front: "@patch('modulo.funcao')", back: "Substitui uma função ou classe inteira por um MockObject. Importante passar o caminho onde a função é usada." },
                    { front: "mock.return_value", back: "Define o que o mock deve retornar quando for chamado." },
                    { front: "assert_called_once_with", back: "Garante que o mock foi chamado apenas 1 vez e checa se os argumentos passados estavam corretos." }
                ],
                quiz: {
                    question: "Por que mockar requisições externas em testes de unidade?",
                    options: [
                        { text: "Mocks não são úteis, testes reais são melhores.", correct: false, feedback: "Testar com APIs reais é lento e frágil." },
                        { text: "Testes devem ser determinísticos e rápidos; não devem falhar porque a API externa está offline ou o limite de requisições acabou.", correct: true, feedback: "Exato! Isolar dependências garante que o teste valida apenas sua lógica." },
                        { text: "Para aumentar a segurança do código.", correct: false, feedback: "Mocks não melhoram a segurança." }
                    ]
                }
            },
            {
                id: "m2w4-s7",
                title: "7. Testes em Endpoints Autenticados",
                content: `
Para testar rotas fechadas com JWT, é comum gerar um token válido dentro do teste e inseri-lo no header de cada requisição.

\`\`\`python
import pytest

# Fixture que gera e retorna um header de autorização
@pytest.fixture
def token_auth_headers(client, preparar_banco):
    # 1. Cria usuário no banco de teste
    client.post("/usuarios/", json={"nome": "test", "senha": "123"})
    
    # 2. Faz login para pegar o token gerado pelo FastAPI
    res = client.post(
        "/token", 
        data={"username": "test", "password": "123"} # Form-data
    )
    token = res.json()["access_token"]
    
    # 3. Retorna o header formatado
    return {"Authorization": f"Bearer {token}"}

# Usa a fixture injetando no teste
def test_rota_protegida(client, token_auth_headers):
    # Passa os headers com o token JWT
    res = client.get("/perfil/", headers=token_auth_headers)
    
    assert res.status_code == 200
    assert res.json()["nome"] == "test"
    
def test_rota_protegida_sem_token(client):
    res = client.get("/perfil/")
    assert res.status_code == 401 # Sem credenciais
\`\`\`
`,
                flashcards: [
                    { front: "Testar endpoints JWT", back: "Gere o token fazendo login pelo TestClient ou mockando a dependência do token, e adicione no headers={'Authorization': 'Bearer ...'}." },
                    { front: "OAuth2 test data", back: "O endpoint de token espera payload 'data=...' (form-encoded), NÃO 'json=...'." },
                    { front: "401 Unauthorized", back: "Sempre inclua testes de caminho triste (sad path): teste se a rota rejeita requisições sem token." }
                ],
                quiz: {
                    question: "Na requisição do TestClient para fazer login e pegar o token (fluxo OAuth2 Password), qual kwarg é correto?",
                    options: [
                        { text: "client.post('/token', json={'username': '...'})", correct: false, feedback: "JSON será rejeitado pelo form-parser do FastAPI." },
                        { text: "client.post('/token', data={'username': '...'})", correct: true, feedback: "Correto! O parâmetro `data` no httpx/TestClient envia como URL-encoded form data, que é o que o OAuth2 requer." },
                        { text: "client.post('/token', headers={'username': '...'})", correct: false, feedback: "Credenciais vão no corpo da request, não no header (ainda)." }
                    ]
                }
            },
            {
                id: "m2w4-s8",
                title: "8. Factory Boy e Faker para Massa de Dados",
                content: `
Ao testar projetos grandes, criar objetos reais no banco manualmente vira um pesadelo de manutenção. Use **Factory Boy**:

\`\`\`python
# pip install factory_boy faker
import factory
from faker import Faker
from models import Usuario, SessionLocal

faker = Faker('pt_BR')

class UsuarioFactory(factory.alchemy.SQLAlchemyModelFactory):
    class Meta:
        model = Usuario
        sqlalchemy_session = SessionLocal()   # Aponta pro DB de teste
        sqlalchemy_session_persistence = "commit"

    # Define regras de geração para cada campo
    nome = factory.Faker("name", locale="pt_BR")
    email = factory.Sequence(lambda n: f"user{n}@teste.com")
    idade = factory.Faker("random_int", min=18, max=80)

# No teste:
def test_busca_usuario():
    # Cria 10 usuários no banco de teste em uma linha!
    usuarios_falsos = UsuarioFactory.create_batch(10)
    
    # Ou um com parâmetro específico
    admin = UsuarioFactory(email="admin@meusite.com")
    
    assert admin.email == "admin@meusite.com"
\`\`\`
`,
                flashcards: [
                    { front: "Factory Boy", back: "Biblioteca para criar fixtures complexas (objetos do banco de dados) com regras de geração e dados falsos." },
                    { front: "Faker", back: "Gera dados aleatórios realistas (nomes, endereços, CPFs falsos, emails)." },
                    { front: "create_batch()", back: "Método do Factory Boy para criar múltiplos registros no banco de dados de uma vez, essencial para testes de paginação." }
                ],
                quiz: {
                    question: "Por que usar Factory Boy em vez de instanciar objetos manualmente (ex: `Usuario(nome='a'...)`) em cada teste?",
                    options: [
                        { text: "Factory Boy roda mais rápido.", correct: false, feedback: "É um pouco mais lento, mas focado na legibilidade." },
                        { text: "Evita que testes quebrem caso um novo campo obrigatório seja adicionado ao modelo no futuro.", correct: true, feedback: "Correto! Se você adicionar o campo `telefone` no modelo, basta atualizar a Factory uma vez; os testes não precisarão ser reescritos." },
                        { text: "Factory Boy não usa o banco de dados.", correct: false, feedback: "Ele usa o banco (via SQLAlchemyModelFactory)." }
                    ]
                }
            }
        ],
        memoryPalace: {
            title: "Palácio da Memória: A Fábrica de Inspeção",
            content: `
Imagine uma **linha de inspeção de qualidade**:

- 🧪 **O Testador (TestClient):** Um robô que simula um cliente real — faz GET, POST, DELETE — mas sem precisar ligar a fábrica inteira. Apenas a esteira de um produto por vez.
- ✅ **O Checklist (assert):** Cada ponto de inspeção tem uma lista. "O produto tem o peso certo? A embalagem está íntegra? A senha não está impressa na caixa?"
- 🔧 **O Ambiente de Teste (Fixture):** Antes de inspecionar, monta-se uma linha de testes limpa. Depois, desmonta-se tudo — sem afetar a linha de produção real.
- 📊 **O Relatório Final (Coverage):** No final do dia, o gerente recebe um relatório: "87% das peças foram inspecionadas." Peças não inspecionadas são riscos escondidos.
            `
        },
        exam: [
            {
                question: "1. O TestClient do FastAPI precisa de um servidor rodando para executar os testes?",
                options: ["Sim, você deve rodar uvicorn antes.", "Não, o TestClient simula as requisições internamente.", "Sim, mas apenas na porta 8001.", "Depende do sistema operacional."],
                correctIndex: 1
            },
            {
                question: "2. Qual assert detecta vazamento acidental de senha na resposta da API?",
                options: [
                    "assert response.status_code == 200",
                    "assert 'senha' not in response.json()",
                    "assert len(response.json()) > 0",
                    "assert response.headers['content-type'] == 'application/json'"
                ],
                correctIndex: 1
            },
            {
                question: "3. Em uma fixture pytest com `yield`, o que acontece APÓS o yield?",
                options: [
                    "O teste principal é executado.",
                    "O pytest ignora o restante do código.",
                    "O código de limpeza (teardown) é executado automaticamente.",
                    "A fixture é chamada novamente."
                ],
                correctIndex: 2
            },
            {
                question: "4. Um projeto com 95% de cobertura e asserts vagos (só verifica status 200) é:",
                options: [
                    "Excelente — cobertura alta é sempre boa.",
                    "Enganoso — coverage mede execução, não qualidade das verificações.",
                    "Impossível — se tem 95%, os asserts são bons.",
                    "Suficiente para produção."
                ],
                correctIndex: 1
            }
        ]
    },

    // ==========================================
    // MÊS 3 — BANCO DE DADOS
    // ==========================================
    "m3w1": {
        title: "Semana 1: SQL & PostgreSQL",
        subtitle: "Onde os Dados Vivem de Verdade",
        studies: [
            {
                id: "m3w1-s1",
                title: "1. Fundamentos de SQL: SELECT, FROM, WHERE",
                content: `
**SQL** (Structured Query Language) é a linguagem padrão para interagir com bancos de dados relacionais.

\`\`\`sql
-- Buscar todos os usuários
SELECT * FROM usuarios;

-- Buscar campos específicos com filtro
SELECT id, nome, email
FROM usuarios
WHERE ativo = true
  AND criado_em > '2024-01-01';

-- Ordenar e limitar
SELECT nome, email
FROM usuarios
ORDER BY nome ASC
LIMIT 10 OFFSET 20;
\`\`\`

**Boas práticas:**
- Nunca use \`SELECT *\` em produção — especifique os campos
- Use \`LIMIT\` para evitar trazer milhões de linhas acidentalmente
- \`OFFSET\` é a base da paginação
`,
                flashcards: [
                    { front: "SELECT", back: "Define quais colunas retornar na consulta." },
                    { front: "WHERE", back: "Filtra as linhas que atendem a uma condição." },
                    { front: "LIMIT / OFFSET", back: "Controla a quantidade de linhas retornadas e o ponto de início (paginação)." }
                ],
                quiz: {
                    question: "Por que evitar `SELECT *` em produção?",
                    options: [
                        { text: "O banco não suporta *.", correct: false, feedback: "* funciona em qualquer banco SQL." },
                        { text: "Traz colunas desnecessárias, aumentando tráfego de rede e risco de vazar dados sensíveis.", correct: true, feedback: "Correto! Especificar colunas melhora performance e segurança." },
                        { text: "Causa bloqueio nas tabelas.", correct: false, feedback: "SELECT não causa bloqueio por si só." }
                    ]
                }
            },
            {
                id: "m3w1-s2",
                title: "2. INSERT, UPDATE, DELETE e Transações",
                content: `
\`\`\`sql
-- Inserir
INSERT INTO produtos (nome, preco, estoque)
VALUES ('Notebook', 3500.00, 10);

-- Atualizar (SEMPRE use WHERE!)
UPDATE produtos
SET preco = 3200.00
WHERE id = 1;

-- Deletar (SEMPRE use WHERE!)
DELETE FROM produtos
WHERE id = 1;
\`\`\`

> ⚠️ **UPDATE e DELETE sem WHERE afetam TODAS as linhas da tabela.** É um dos erros mais catastróficos em produção.

**Transações (ACID):**
\`\`\`sql
BEGIN;
  UPDATE contas SET saldo = saldo - 100 WHERE id = 1;
  UPDATE contas SET saldo = saldo + 100 WHERE id = 2;
COMMIT; -- ou ROLLBACK se algo der errado
\`\`\`
`,
                flashcards: [
                    { front: "COMMIT", back: "Confirma permanentemente todas as operações da transação atual." },
                    { front: "ROLLBACK", back: "Desfaz todas as operações da transação atual em caso de erro." },
                    { front: "ACID", back: "Atomicidade, Consistência, Isolamento, Durabilidade — propriedades de transações confiáveis." }
                ],
                quiz: {
                    question: "O que acontece com `UPDATE usuarios SET ativo = false` sem cláusula WHERE?",
                    options: [
                        { text: "Atualiza apenas o primeiro registro.", correct: false, feedback: "SQL não tem conceito de 'primeiro' sem ORDER BY e LIMIT." },
                        { text: "Desativa TODOS os usuários da tabela.", correct: true, feedback: "Correto! Sem WHERE, o UPDATE afeta todas as linhas — erro catastrófico." },
                        { text: "Gera um erro de sintaxe.", correct: false, feedback: "É SQL válido — por isso é tão perigoso." }
                    ]
                }
            },
            {
                id: "m3w1-s3",
                title: "3. JOINs: Relacionando Tabelas",
                content: `
\`\`\`sql
-- Tabelas
-- usuarios: id, nome
-- pedidos:  id, usuario_id, valor

-- INNER JOIN: apenas registros com correspondência em ambas
SELECT u.nome, p.valor
FROM pedidos p
INNER JOIN usuarios u ON p.usuario_id = u.id;

-- LEFT JOIN: todos os usuários, mesmo sem pedidos
SELECT u.nome, p.valor
FROM usuarios u
LEFT JOIN pedidos p ON u.id = p.usuario_id;
\`\`\`

| Tipo | Resultado |
|------|-----------|
| INNER JOIN | Apenas linhas com match em ambas as tabelas |
| LEFT JOIN | Todas as linhas da tabela esquerda + match da direita |
| RIGHT JOIN | Todas as linhas da tabela direita + match da esquerda |
`,
                flashcards: [
                    { front: "INNER JOIN", back: "Retorna apenas linhas com correspondência em ambas as tabelas." },
                    { front: "LEFT JOIN", back: "Retorna todas as linhas da tabela esquerda, com NULL onde não há match." },
                    { front: "Chave Estrangeira (FK)", back: "Coluna que referencia a chave primária de outra tabela, criando o relacionamento." }
                ],
                quiz: {
                    question: "Você quer listar TODOS os usuários, mostrando seus pedidos (ou NULL se não tiver). Qual JOIN usar?",
                    options: [
                        { text: "INNER JOIN", correct: false, feedback: "INNER JOIN excluiria usuários sem pedidos." },
                        { text: "LEFT JOIN (usuarios LEFT JOIN pedidos)", correct: true, feedback: "Correto! LEFT JOIN preserva todos os usuários, preenchendo com NULL onde não há pedido." },
                        { text: "CROSS JOIN", correct: false, feedback: "CROSS JOIN multiplica todas as linhas entre si — não é isso." }
                    ]
                }
            },
            {
                id: "m3w1-s4",
                title: "4. Índices e Performance",
                content: `
**Índices** aceleram buscas mas têm custo em escrita. Sem índice, o banco faz *full table scan* (lê tudo).

\`\`\`sql
-- Ver se a query usa índice (EXPLAIN)
EXPLAIN SELECT * FROM usuarios WHERE email = 'ana@test.com';

-- Criar índice na coluna email
CREATE INDEX idx_usuarios_email ON usuarios(email);

-- Índice único (garante unicidade + performance)
CREATE UNIQUE INDEX idx_usuarios_email_unique ON usuarios(email);
\`\`\`

**Regras práticas:**
- Indexe colunas usadas frequentemente em \`WHERE\`, \`JOIN ON\` e \`ORDER BY\`
- Colunas com alta cardinalidade (muitos valores únicos) se beneficiam mais
- Não indexe tudo — índices custam espaço e tornam escritas mais lentas
`,
                flashcards: [
                    { front: "Índice (Index)", back: "Estrutura de dados que acelera buscas em colunas específicas, com custo em escritas." },
                    { front: "EXPLAIN", back: "Comando PostgreSQL que mostra o plano de execução de uma query — fundamental para otimização." },
                    { front: "Full Table Scan", back: "Quando o banco lê linha por linha toda a tabela por falta de índice adequado. Evitar em produção." }
                ],
                quiz: {
                    question: "Em qual situação criar um índice é mais benéfico?",
                    options: [
                        { text: "Em uma tabela que recebe INSERT a cada segundo.", correct: false, feedback: "Tabelas de alta escrita sofrem mais com índices (cada INSERT atualiza o índice)." },
                        { text: "Em uma coluna de email que é buscada constantemente no WHERE.", correct: true, feedback: "Perfeito! Alta leitura, alta cardinalidade — cenário ideal para índice." },
                        { text: "Em colunas booleanas (true/false).", correct: false, feedback: "Baixa cardinalidade (só 2 valores) torna índices ineficientes." }
                    ]
                }
            },
            {
                id: "m3w1-s5",
                title: "5. Subqueries e CTEs (Common Table Expressions)",
                content: `
Subqueries são consultas dentro de consultas. **CTEs (WITH)** as tornam legíveis:

\`\`\`sql
-- Subquery clássica (difícil de ler)
SELECT nome FROM usuarios 
WHERE id IN (SELECT usuario_id FROM pedidos WHERE valor > 100);

-- CTE (Muito mais legível)
WITH GrandesPedidos AS (
    SELECT usuario_id FROM pedidos WHERE valor > 100
)
SELECT nome FROM usuarios
JOIN GrandesPedidos ON usuarios.id = GrandesPedidos.usuario_id;
\`\`\`
`,
                flashcards: [
                    { front: "CTE (WITH)", back: "Common Table Expression. Cria um resultado temporário nomeado dentro da query, melhorando a legibilidade e reuso." },
                    { front: "Subquery", back: "Uma query aninhada dentro de outra query (no SELECT, FROM ou WHERE)." }
                ],
                quiz: {
                    question: "Qual o principal benefício visual das CTEs em relação às subqueries tradicionais?",
                    options: [
                        { text: "Elas são sempre mais rápidas.", correct: false, feedback: "Performance geralmente é igual, pois o otimizador as processa de forma semelhante." },
                        { text: "Elas permitem ler a lógica de cima para baixo de forma sequencial.", correct: true, feedback: "Correto! Evita aninhamentos profundos que começam do meio para fora." },
                        { text: "Elas gravam no banco de dados para sempre.", correct: false, feedback: "CTEs existem apenas durante a execução daquela query." }
                    ]
                }
            },
            {
                id: "m3w1-s6",
                title: "6. Princípios ACID em Bancos de Dados",
                content: `
Bancos relacionais modernos seguem o padrão **ACID** para garantir a confiabilidade:

- **A** (Atomicidade): "Tudo ou nada". Se parte de uma transação falha, tudo sofre rollback.
- **C** (Consistência): Uma transação só leva o banco de um estado válido para outro estado válido (regras/constraints são respeitadas).
- **I** (Isolamento): Transações concorrentes não interferem umas nas outras.
- **D** (Durabilidade): Depois do commit, os dados não se perdem nem em queda de energia.
`,
                flashcards: [
                    { front: "Atomicidade", back: "Garante que a transação é indivisível. Tudo é salvo junto, ou nada é salvo (em caso de erro)." },
                    { front: "Durabilidade", back: "Uma vez que o COMMIT retorna sucesso, os dados estão fisicamente seguros no disco." }
                ],
                quiz: {
                    question: "Se o servidor de banco de dados desligar fisicamente da tomada 1 segundo após você receber um retorno de sucesso de um COMMIT, o que o princípio da Durabilidade garante?",
                    options: [
                        { text: "Que a transação será desfeita ao reiniciar.", correct: false, feedback: "Isso violaria o sucesso que foi retornado." },
                        { text: "Que os dados salvos nesse commit estarão lá quando o servidor for religado.", correct: true, feedback: "Correto! Durabilidade significa que se o banco disse 'ok', os dados estão a salvo no disco físico." },
                        { text: "O banco não permite quedas de energia.", correct: false, feedback: "Hardware falha, a regra de software que garante a persistência é a Durabilidade." }
                    ]
                }
            },
            {
                id: "m3w1-s7",
                title: "7. Views e Materialized Views",
                content: `
**Views** são consultas salvas como se fossem tabelas virtuais:

\`\`\`sql
CREATE VIEW relatorio_vendas AS
SELECT p.id, u.nome, p.valor 
FROM pedidos p JOIN usuarios u ON p.usuario_id = u.id;

-- Uso (finge que é uma tabela real!)
SELECT * FROM relatorio_vendas WHERE valor > 50;
\`\`\`

**Materialized Views** salvam os DADOS da consulta fisicamente no disco. Muito mais rápidas para relatórios pesados, mas precisam ser atualizadas (refreshed) periodicamente, pois os dados ficam defasados.
`,
                flashcards: [
                    { front: "View (Visão)", back: "Uma consulta SQL salva no banco. Não guarda dados físicos, apenas a query. Roda na hora." },
                    { front: "Materialized View", back: "Uma view que salva o resultado físico no disco. Excelente para relatórios pesados, mas requer 'refresh' para atualizar os dados." }
                ],
                quiz: {
                    question: "Quando usar uma Materialized View ao invés de uma View normal?",
                    options: [
                        { text: "Quando a query é extremamente complexa e o usuário precisa de resposta em milissegundos, mas aceita dados de 1 hora atrás.", correct: true, feedback: "Perfeito! Materialized views são o principal recurso para BI e dashboards rápidos." },
                        { text: "Quando você precisa garantir que os dados estejam sempre em tempo real.", correct: false, feedback: "Materialized view guarda 'foto' do momento, logo não é 100% tempo real." },
                        { text: "Quando o banco está sem espaço em disco.", correct: false, feedback: "Materialized view USA espaço extra no disco." }
                    ]
                }
            },
            {
                id: "m3w1-s8",
                title: "8. Triggers: Automação no Nível do Banco",
                content: `
**Triggers (Gatilhos)** executam funções automaticamente após INSERT, UPDATE ou DELETE no banco de dados, independente do back-end.

\`\`\`sql
-- Exemplo: Impedir que salário seja menor que zero automaticamente
CREATE TRIGGER trg_valida_salario
BEFORE UPDATE ON funcionarios
FOR EACH ROW
EXECUTE FUNCTION check_salario();
\`\`\`

> ⚠️ **Atenção:** Evite espalhar muita regra de negócio em Triggers. É difícil de debugar porque o código Python (Back-end) não avisa o que aconteceu. Use apenas para integridade de dados estrita.
`,
                flashcards: [
                    { front: "Trigger", back: "Gatilho que dispara uma função no banco automaticamente em resposta a um evento (INSERT/UPDATE/DELETE)." },
                    { front: "Perigo de Triggers", back: "Ocultam a lógica de negócio do back-end, dificultando o debug em caso de bugs complexos." }
                ],
                quiz: {
                    question: "Por que não é recomendado colocar muita lógica de negócio (ex: cálculo complexo de descontos) dentro de Triggers?",
                    options: [
                        { text: "O banco não suporta cálculos complexos.", correct: false, feedback: "Bancos são matematicamente poderosos." },
                        { text: "Porque espalha e oculta a lógica de negócio. Quando o back-end salva algo e outro valor muda magicamente, é difícil para o programador investigar.", correct: true, feedback: "Correto! O código Python/FastAPI se torna insuficiente para entender o fluxo completo, gerando dor de cabeça no debug." },
                        { text: "Porque Triggers não podem ser criados via Migrations.", correct: false, feedback: "Podem sim, através de código SQL bruto via Alembic." }
                    ]
                }
            }
        ],
        memoryPalace: {
            title: "Palácio da Memória: A Biblioteca Municipal",
            content: `
Visualize uma **biblioteca enorme** para gravar SQL:

- 📚 **As Prateleiras (Tabelas):** Cada prateleira tem livros de um tema. \`usuarios\`, \`pedidos\`, \`produtos\` — cada uma com suas colunas como campos de um fichário.
- 🔍 **O Bibliotecário (SELECT/WHERE):** Você pede: "Me traga os livros de ficção de 2024" — SELECT + WHERE. Ele não traz a biblioteca inteira, só o que você pediu.
- 🔗 **A Ficha de Empréstimo (JOIN):** Relaciona o livro (pedidos) ao leitor (usuário) pela ficha. INNER JOIN = apenas empréstimos ativos. LEFT JOIN = todos os leitores, mesmo sem empréstimo.
- ⚠️ **O Carimbo Sem Endereço (UPDATE sem WHERE):** Carimbou "Devolvido" em TODOS os livros da biblioteca de uma vez. Catástrofe.
- 📋 **O Índice do Acervo (Index):** Em vez de varrer prateleira por prateleira, você consulta o índice alfabético e vai direto. Busca em segundos em vez de horas.
            `
        },
        exam: [
            {
                question: "1. Qual cláusula SQL filtra as linhas retornadas com base em uma condição?",
                options: ["ORDER BY", "GROUP BY", "WHERE", "HAVING"],
                correctIndex: 2
            },
            {
                question: "2. O que acontece em uma transação se ocorrer um erro e você executar ROLLBACK?",
                options: [
                    "As operações são salvas parcialmente.",
                    "Apenas o último comando é desfeito.",
                    "Todas as operações da transação são desfeitas.",
                    "O banco reinicia automaticamente."
                ],
                correctIndex: 2
            },
            {
                question: "3. Qual JOIN retorna SOMENTE registros com correspondência em AMBAS as tabelas?",
                options: ["LEFT JOIN", "RIGHT JOIN", "FULL JOIN", "INNER JOIN"],
                correctIndex: 3
            },
            {
                question: "4. Por que não indexar todas as colunas de uma tabela?",
                options: [
                    "PostgreSQL limita a 3 índices por tabela.",
                    "Índices consomem espaço e tornam operações de escrita (INSERT/UPDATE) mais lentas.",
                    "Índices só funcionam em colunas numéricas.",
                    "O EXPLAIN para de funcionar com muitos índices."
                ],
                correctIndex: 1
            }
        ]
    },

    "m3w2": {
        title: "Semana 2: ORM com SQLAlchemy",
        subtitle: "Banco de Dados com a Elegância do Python",
        studies: [
            {
                id: "m3w2-s1",
                title: "1. O que é ORM e Por Que Usar",
                content: `
**ORM** (Object-Relational Mapping) mapeia tabelas do banco para classes Python. Você escreve Python, o ORM gera o SQL.

**Sem ORM (SQL puro):**
\`\`\`python
cursor.execute("INSERT INTO usuarios (nome, email) VALUES (?, ?)", (nome, email))
\`\`\`

**Com SQLAlchemy ORM:**
\`\`\`python
usuario = Usuario(nome=nome, email=email)
db.add(usuario)
db.commit()
\`\`\`

**Quando usar ORM vs SQL puro:**

| Cenário | Preferir |
|---------|---------|
| CRUD simples, lógica de negócio | ORM |
| Queries complexas, performance crítica | SQL puro / Core |
| Relatórios com múltiplos JOINs | SQL puro |
| Migrations e modelos | ORM |
`,
                flashcards: [
                    { front: "ORM", back: "Object-Relational Mapping — mapeia tabelas para classes e registros para objetos Python." },
                    { front: "SQLAlchemy", back: "ORM Python mais popular. Tem dois modos: Core (SQL expressivo) e ORM (classes)." },
                    { front: "Session", back: "Unidade de trabalho do SQLAlchemy — gerencia objetos e transações com o banco." }
                ],
                quiz: {
                    question: "Para um relatório complexo com 5 JOINs e subqueries, o mais adequado é:",
                    options: [
                        { text: "Sempre usar ORM para manter consistência.", correct: false, feedback: "ORM pode gerar SQL ineficiente em queries complexas." },
                        { text: "Usar SQL puro ou SQLAlchemy Core para ter controle total da query.", correct: true, feedback: "Correto! Queries complexas se beneficiam do SQL explícito para otimização." },
                        { text: "Evitar banco de dados e usar memória.", correct: false, feedback: "Isso não escala." }
                    ]
                }
            },
            {
                id: "m3w2-s2",
                title: "2. Definindo Modelos com SQLAlchemy",
                content: `
\`\`\`python
from sqlalchemy import Column, Integer, String, Float, Boolean, DateTime
from sqlalchemy.ext.declarative import declarative_base
from datetime import datetime

Base = declarative_base()

class Usuario(Base):
    __tablename__ = "usuarios"

    id = Column(Integer, primary_key=True, index=True)
    nome = Column(String(100), nullable=False)
    email = Column(String(200), unique=True, nullable=False, index=True)
    ativo = Column(Boolean, default=True)
    criado_em = Column(DateTime, default=datetime.utcnow)

class Produto(Base):
    __tablename__ = "produtos"

    id = Column(Integer, primary_key=True, index=True)
    nome = Column(String(200), nullable=False)
    preco = Column(Float, nullable=False)
\`\`\`
`,
                flashcards: [
                    { front: "declarative_base()", back: "Cria a classe Base do SQLAlchemy que todos os modelos herdam." },
                    { front: "Column(unique=True)", back: "Garante que todos os valores da coluna sejam únicos na tabela." },
                    { front: "nullable=False", back: "Equivale ao NOT NULL do SQL — o campo é obrigatório." }
                ],
                quiz: {
                    question: "O que `Column(String(200), unique=True, index=True)` define em uma coluna de email?",
                    options: [
                        { text: "Um campo de texto que aceita duplicatas mas com índice.", correct: false, feedback: "unique=True proíbe duplicatas." },
                        { text: "Um campo de até 200 chars, único no banco e indexado para buscas rápidas.", correct: true, feedback: "Perfeito! unique garante integridade, index acelera as buscas por email." },
                        { text: "Uma chave primária do tipo texto.", correct: false, feedback: "Chave primária usa primary_key=True." }
                    ]
                }
            },
            {
                id: "m3w2-s3",
                title: "3. CRUD com SQLAlchemy Session",
                content: `
\`\`\`python
from sqlalchemy.orm import Session

# CREATE
def criar_usuario(db: Session, nome: str, email: str) -> Usuario:
    usuario = Usuario(nome=nome, email=email)
    db.add(usuario)
    db.commit()
    db.refresh(usuario)  # atualiza o objeto com id gerado
    return usuario

# READ
def buscar_por_email(db: Session, email: str) -> Usuario | None:
    return db.query(Usuario).filter(Usuario.email == email).first()

def listar_ativos(db: Session) -> list[Usuario]:
    return db.query(Usuario).filter(Usuario.ativo == True).all()

# UPDATE
def desativar_usuario(db: Session, user_id: int) -> Usuario | None:
    usuario = db.query(Usuario).filter(Usuario.id == user_id).first()
    if usuario:
        usuario.ativo = False
        db.commit()
        db.refresh(usuario)
    return usuario

# DELETE
def deletar_usuario(db: Session, user_id: int) -> bool:
    usuario = db.query(Usuario).filter(Usuario.id == user_id).first()
    if usuario:
        db.delete(usuario)
        db.commit()
        return True
    return False
\`\`\`
`,
                flashcards: [
                    { front: "db.add()", back: "Adiciona um objeto à sessão (staging area) para ser persistido." },
                    { front: "db.refresh()", back: "Re-sincroniza o objeto Python com o estado atual do banco (ex: pegar o ID gerado)." },
                    { front: ".filter().first()", back: "Aplica filtro WHERE e retorna apenas o primeiro resultado (ou None)." }
                ],
                quiz: {
                    question: "Por que chamar `db.refresh(usuario)` após o commit?",
                    options: [
                        { text: "Para salvar o objeto no banco novamente.", correct: false, feedback: "db.commit() já salvou." },
                        { text: "Para atualizar o objeto Python com dados gerados pelo banco (como o ID autoincremental).", correct: true, feedback: "Correto! Após commit, o objeto pode ter campos como id e criado_em gerados pelo banco." },
                        { text: "Para fechar a conexão com o banco.", correct: false, feedback: "db.close() fecha a conexão." }
                    ]
                }
            },
            {
                id: "m3w2-s4",
                title: "4. Relacionamentos: ForeignKey e Relationship",
                content: `
\`\`\`python
from sqlalchemy import Column, Integer, String, ForeignKey
from sqlalchemy.orm import relationship

class Usuario(Base):
    __tablename__ = "usuarios"
    id = Column(Integer, primary_key=True)
    nome = Column(String(100))
    pedidos = relationship("Pedido", back_populates="usuario")

class Pedido(Base):
    __tablename__ = "pedidos"
    id = Column(Integer, primary_key=True)
    valor = Column(Float)
    usuario_id = Column(Integer, ForeignKey("usuarios.id"), nullable=False)
    usuario = relationship("Usuario", back_populates="pedidos")

# Uso:
usuario = db.query(Usuario).first()
print(usuario.pedidos)  # Lista de pedidos automaticamente!
\`\`\`

- **ForeignKey**: cria o vínculo no banco
- **relationship**: cria o acesso Pythônico entre objetos
`,
                flashcards: [
                    { front: "ForeignKey", back: "Coluna que referencia a PK de outra tabela, criando integridade referencial." },
                    { front: "relationship()", back: "Define como navegar entre objetos relacionados em Python (lazy loading por padrão)." },
                    { front: "back_populates", back: "Sincroniza a relação bidirecional entre dois modelos." }
                ],
                quiz: {
                    question: "O que `relationship('Pedido', back_populates='usuario')` permite?",
                    options: [
                        { text: "Cria a coluna usuario_id automaticamente.", correct: false, feedback: "ForeignKey cria a coluna — relationship é Python puro, não SQL." },
                        { text: "Acessar `usuario.pedidos` em Python sem escrever JOIN manualmente.", correct: true, feedback: "Exato! O SQLAlchemy executa o JOIN automaticamente quando você acessa o atributo." },
                        { text: "Previne a deleção de usuários com pedidos.", correct: false, feedback: "Para isso, configure cascade ou ondelete no ForeignKey." }
                    ]
                }
            },
            {
                id: "m3w2-s5",
                title: "5. Querying Avançado com SQLAlchemy",
                content: `
Consultas complexas requerem métodos adicionais além de \`filter()\`.

\`\`\`python
from sqlalchemy import func, desc

# 1. Contagem de registros (GROUP BY)
resultados = db.query(
    Usuario.id, 
    func.count(Pedido.id).label("total_pedidos")
).join(Pedido).group_by(Usuario.id).all()

# 2. Ordenação e Limitação
top_usuarios = db.query(Usuario)\\
    .order_by(desc(Usuario.criado_em))\\
    .limit(5).all()

# 3. Múltiplos filtros com OR e AND
from sqlalchemy import or_, and_
db.query(Usuario).filter(
    or_(Usuario.nome == "Ana", Usuario.nome == "Bruno"),
    Usuario.ativo == True  # o vírgula funciona como AND
).all()
\`\`\`
`,
                flashcards: [
                    { front: "func.count()", back: "Função SQL COUNT importada pelo SQLAlchemy para agregações." },
                    { front: "order_by(desc(Campo))", back: "Ordena os resultados em ordem decrescente." },
                    { front: "or_() e and_()", back: "Funções utilitárias do SQLAlchemy para criar condições complexas no WHERE." }
                ],
                quiz: {
                    question: "O que acontece se eu esquecer o `.group_by(Usuario.id)` em uma query usando `func.count(Pedido.id)`?",
                    options: [
                        { text: "O banco de dados lançará um erro de agregação SQL.", correct: true, feedback: "Correto! Ao pedir uma contagem de grupos sem especificar o grupo, o SQL Syntax Error é lançado." },
                        { text: "Ele conta tudo globalmente sem separar por usuário.", correct: false, feedback: "Se você incluiu 'Usuario.id' no select, é obrigatório o group_by no SQL." },
                        { text: "Ele retorna 0 sempre.", correct: false, feedback: "Ele quebra antes de retornar." }
                    ]
                }
            },
            {
                id: "m3w2-s6",
                title: "6. Lazy Loading vs Eager Loading",
                content: `
O problema N+1 é o mais comum em ORMs. Se carregar 100 usuários e acessar \`.pedidos\` de cada um, você fará 1 query de usuários e 100 queries para pedidos (101 queries). O banco chora.

A solução é o **Eager Loading**:
\`\`\`python
from sqlalchemy.orm import selectinload, joinedload

# joinedload: Faz um INNER/LEFT JOIN gigante. Bom para 1:1.
users = db.query(Usuario).options(joinedload(Usuario.perfil)).all()

# selectinload: Faz 2 queries (IN clause). Ideal para listas (1:N).
users = db.query(Usuario).options(selectinload(Usuario.pedidos)).all()

for u in users:
    print(u.pedidos) # Nenhum hit a mais no banco de dados!
\`\`\`
`,
                flashcards: [
                    { front: "Problema N+1", back: "Antipattern onde 1 query inicial dispara 'N' queries adicionais durante o loop. Destrói a performance." },
                    { front: "joinedload()", back: "Resolve N+1 fazendo um JOIN na mesma query. Ótimo para relações um-para-um ou muitos-para-um." },
                    { front: "selectinload()", back: "Resolve N+1 emitindo uma segunda query com IN (...). A melhor opção para relações um-para-muitos (listas)." }
                ],
                quiz: {
                    question: "Qual técnica você usaria para buscar 50 autores e a lista inteira de livros de cada um, evitando travar o banco?",
                    options: [
                        { text: "Não usar relationship e buscar tudo manualmente em loops Python.", correct: false, feedback: "Isso criaria exatamente o problema N+1 manual." },
                        { text: ".options(selectinload(Autor.livros))", correct: true, feedback: "Correto! O SQLAlchemy buscará todos os autores, pegará os IDs e fará 'SELECT * FROM livros WHERE autor_id IN (...)'. Duas queries apenas!" },
                        { text: "Usar limit(1) e offset() em tudo.", correct: false, feedback: "Pode ajudar a não quebrar de vez, mas não resolve a lentidão." }
                    ]
                }
            },
            {
                id: "m3w2-s7",
                title: "7. Integrando Pydantic com SQLAlchemy (orm_mode)",
                content: `
FastAPI não sabe como retornar Objetos do SQLAlchemy diretamente (ele espera dicionários). Para isso usamos \`from_attributes = True\` no Pydantic V2 (antigo \`orm_mode\`).

\`\`\`python
from pydantic import BaseModel, ConfigDict
from models import Usuario  # Modelo SQLAlchemy

class UsuarioResponse(BaseModel):
    id: int
    nome: str
    email: str
    
    # Diz ao Pydantic para ler objetos que não são dicionários
    model_config = ConfigDict(from_attributes=True)

# No FastAPI Router:
@app.get("/usuarios/{id}", response_model=UsuarioResponse)
def get_user(id: int, db: Session = Depends(get_db)):
    db_obj = db.query(Usuario).filter(Usuario.id == id).first()
    # O FastAPI (via Pydantic) pega db_obj.nome, db_obj.email 
    # automaticamente e converte para JSON!
    return db_obj 
\`\`\`
`,
                flashcards: [
                    { front: "from_attributes=True", back: "Configuração do Pydantic (V2) que permite parsear classes do SQLAlchemy (que usam notação de ponto objeto.atributo) em invés de dicionários apenas." },
                    { front: "response_model", back: "Parâmetro do decorator de rota no FastAPI. Garante que os dados do banco serão filtrados exatamente conforme o schema antes de sair para o cliente." }
                ],
                quiz: {
                    question: "O que acontece se você NÃO usar 'from_attributes=True' num schema e retornar um objeto SQLAlchemy do banco de dados na rota?",
                    options: [
                        { text: "Ele será retornado perfeitamente, mas sem segurança.", correct: false, feedback: "Não retornará corretamente." },
                        { text: "O Pydantic lançará um Internal Server Error dizendo que 'Usuario' não é um dicionário válido.", correct: true, feedback: "Correto! O Pydantic por padrão tenta usar 'obj['campo']', mas ORMs usam 'obj.campo'." },
                        { text: "O FastAPI converte o banco inteiro para JSON.", correct: false, feedback: "Pydantic barra antes." }
                    ]
                }
            },
            {
                id: "m3w2-s8",
                title: "8. Bulk Inserts e Updates Rápidos",
                content: `
Adicionar linha por linha no banco de dados (\`db.add()\` + \`db.commit()\`) dentro de um loop de 10 mil itens leva minutos. Operações em massa levam milissegundos.

\`\`\`python
# ❌ RUIM: Lento, 10.000 commits e insert individuais
for dado in arquivo_csv:
    u = Usuario(nome=dado.nome)
    db.add(u)
    db.commit()

# ✅ BOM: Bulk Insert (1 só query gigante)
usuarios = [Usuario(nome=d.nome) for d in arquivo_csv]
db.add_all(usuarios)
db.commit()

# 🔥 UPDATE RÁPIDO (Sem precisar buscar os objetos primeiro)
db.query(Usuario).filter(Usuario.ativo == False).update({"deletado": True})
db.commit()
\`\`\`
`,
                flashcards: [
                    { front: "db.add_all([obj1, obj2])", back: "Insere uma lista de objetos no banco otimizando o envio (bulk insert) em poucas queries." },
                    { front: "query.update()", back: "Atualiza milhares de linhas direto no banco numa única query SQL UPDATE, ignorando as instâncias em memória." }
                ],
                quiz: {
                    question: "Por que não é recomendado colocar `db.commit()` DENTRO de um loop for ao processar centenas de registros?",
                    options: [
                        { text: "Porque se o script falhar no meio, as primeiras partes não sofrem rollback e sobrecarrega I/O com requisições HTTP.", correct: true, feedback: "Isso mesmo! Múltiplos commits ferem a Atomicidade e são mortais para a performance de I/O do disco/rede do banco." },
                        { text: "Porque a função db.commit() só pode ser chamada 1 vez por rota.", correct: false, feedback: "Pode ser chamada várias vezes, mas é má prática." },
                        { text: "Porque apaga os dados anteriores no SQLAlchemy.", correct: false, feedback: "Apenas persiste, não apaga." }
                    ]
                }
            }
        ],
        memoryPalace: {
            title: "Palácio da Memória: O Tradutor Simultâneo",
            content: `
O **ORM é um tradutor simultâneo** entre dois mundos:

- 🗣️ **Você fala Python:** \`usuario = Usuario(nome='Ana')\` — você pensa em objetos, classes e atributos.
- 🔄 **O ORM traduz para SQL:** Internamente gera \`INSERT INTO usuarios...\` automaticamente.
- 📖 **O Dicionário (Model):** A classe \`Usuario\` é o dicionário bilíngue que define como cada palavra (coluna) é traduzida.
- 🤝 **O Contrato (ForeignKey):** Define que o pedido DEVE ter um usuário válido — sem o usuário, o pedido não existe no banco.
- 🔗 **O Telefone Direto (relationship):** Em vez de você ligar para o setor de pedidos (fazer JOIN manualmente), tem um ramal direto: \`usuario.pedidos\` — o ORM faz a ligação automaticamente.
            `
        },
        exam: [
            {
                question: "1. Qual a diferença entre ForeignKey e relationship no SQLAlchemy?",
                options: [
                    "São sinônimos, fazem a mesma coisa.",
                    "ForeignKey cria o vínculo no banco (SQL); relationship cria o acesso Python entre objetos.",
                    "relationship cria a coluna no banco; ForeignKey é apenas para documentação.",
                    "ForeignKey é para PostgreSQL; relationship é para SQLite."
                ],
                correctIndex: 1
            },
            {
                question: "2. O que `db.query(Usuario).filter(Usuario.email == email).first()` retorna se não encontrar o email?",
                options: ["Lança uma exceção KeyError.", "Retorna None.", "Retorna uma lista vazia.", "Lança HTTPException 404."],
                correctIndex: 1
            },
            {
                question: "3. Para que serve `declarative_base()`?",
                options: [
                    "Cria o banco de dados automaticamente.",
                    "Define as configurações de conexão.",
                    "Cria a classe Base que todos os modelos SQLAlchemy herdam.",
                    "Gera as migrations automaticamente."
                ],
                correctIndex: 2
            },
            {
                question: "4. Quando é mais adequado usar SQL puro em vez do ORM?",
                options: [
                    "Sempre — ORM é mais lento.",
                    "Nunca — ORM sempre é superior.",
                    "Em queries simples de CRUD.",
                    "Em relatórios complexos com múltiplos JOINs onde performance é crítica."
                ],
                correctIndex: 3
            }
        ]
    },

    "m3w3": {
        title: "Semana 3: CRUD Completo com FastAPI + SQLAlchemy",
        subtitle: "Conectando Todas as Peças",
        studies: [
            {
                id: "m3w3-s1",
                title: "1. Configurando a Sessão do Banco com Depends()",
                content: `
Integrar SQLAlchemy com FastAPI usando injeção de dependência:

\`\`\`python
# database.py
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, Session
from typing import Generator

DATABASE_URL = "postgresql://user:senha@localhost/db"

engine = create_engine(DATABASE_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

def get_db() -> Generator[Session, None, None]:
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
\`\`\`

\`\`\`python
# routers/usuarios.py
from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from database import get_db

router = APIRouter(prefix="/usuarios")

@router.get("/")
def listar(db: Session = Depends(get_db)):
    return db.query(Usuario).all()
\`\`\`

O \`yield\` garante que a sessão seja **sempre fechada** após a requisição, mesmo em caso de erro.
`,
                flashcards: [
                    { front: "SessionLocal", back: "Factory de sessões SQLAlchemy. Cada request cria uma sessão independente." },
                    { front: "yield em Depends", back: "Garante setup (abrir sessão) e teardown (fechar sessão) automático por request." },
                    { front: "autoflush=False", back: "Evita que o SQLAlchemy envie SQLs ao banco antes do commit explícito." }
                ],
                quiz: {
                    question: "Por que usar `yield` em vez de `return` na função `get_db()`?",
                    options: [
                        { text: "yield é mais rápido que return.", correct: false, feedback: "Performance não é o motivo." },
                        { text: "Para garantir que o bloco `finally: db.close()` execute ao final de CADA request.", correct: true, feedback: "Correto! Com yield, o código após o yield roda como teardown — sempre fecha a sessão." },
                        { text: "SQLAlchemy só funciona com generators.", correct: false, feedback: "É uma escolha de design do FastAPI, não limitação do SQLAlchemy." }
                    ]
                }
            },
            {
                id: "m3w3-s2",
                title: "2. Endpoints GET com Paginação",
                content: `
\`\`\`python
from fastapi import APIRouter, Depends, Query
from sqlalchemy.orm import Session

@router.get("/", response_model=list[UsuarioResponse])
def listar_usuarios(
    skip: int = Query(default=0, ge=0),
    limit: int = Query(default=10, ge=1, le=100),
    db: Session = Depends(get_db)
):
    return db.query(Usuario).offset(skip).limit(limit).all()

@router.get("/{user_id}", response_model=UsuarioResponse)
def buscar_usuario(user_id: int, db: Session = Depends(get_db)):
    usuario = db.query(Usuario).filter(Usuario.id == user_id).first()
    if not usuario:
        raise HTTPException(status_code=404, detail="Usuário não encontrado")
    return usuario
\`\`\`

**Paginação padrão de mercado:**
- \`skip=0, limit=10\` — primeira página
- \`skip=10, limit=10\` — segunda página
- Limite máximo de 100 previne sobrecarga
`,
                flashcards: [
                    { front: ".offset(n)", back: "Pula os primeiros N registros — equivale ao OFFSET do SQL." },
                    { front: ".limit(n)", back: "Limita o número de registros retornados — equivale ao LIMIT do SQL." },
                    { front: "Query(le=100)", back: "Valida que o parâmetro não excede 100. Previne requests abusivos." }
                ],
                quiz: {
                    question: "Para buscar a 3ª página com 20 itens por página, os params corretos são:",
                    options: [
                        { text: "skip=3, limit=20", correct: false, feedback: "skip é o offset em itens, não o número da página." },
                        { text: "skip=40, limit=20", correct: true, feedback: "Correto! Página 3 = pular páginas 1 e 2 = 2 × 20 = 40 itens." },
                        { text: "skip=20, limit=20", correct: false, feedback: "Isso seria a 2ª página." }
                    ]
                }
            },
            {
                id: "m3w3-s3",
                title: "3. Endpoints POST, PUT e DELETE",
                content: `
\`\`\`python
@router.post("/", response_model=UsuarioResponse, status_code=201)
def criar_usuario(dados: UsuarioCreate, db: Session = Depends(get_db)):
    existente = db.query(Usuario).filter(Usuario.email == dados.email).first()
    if existente:
        raise HTTPException(status_code=400, detail="Email já cadastrado")

    usuario = Usuario(**dados.model_dump())
    db.add(usuario)
    db.commit()
    db.refresh(usuario)
    return usuario

@router.put("/{user_id}", response_model=UsuarioResponse)
def atualizar(user_id: int, dados: UsuarioUpdate, db: Session = Depends(get_db)):
    usuario = db.query(Usuario).filter(Usuario.id == user_id).first()
    if not usuario:
        raise HTTPException(status_code=404, detail="Não encontrado")

    for campo, valor in dados.model_dump(exclude_unset=True).items():
        setattr(usuario, campo, valor)

    db.commit()
    db.refresh(usuario)
    return usuario

@router.delete("/{user_id}", status_code=204)
def deletar(user_id: int, db: Session = Depends(get_db)):
    usuario = db.query(Usuario).filter(Usuario.id == user_id).first()
    if not usuario:
        raise HTTPException(status_code=404, detail="Não encontrado")
    db.delete(usuario)
    db.commit()
\`\`\`
`,
                flashcards: [
                    { front: "model_dump(exclude_unset=True)", back: "Retorna apenas os campos que foram explicitamente enviados — fundamental para PATCH parcial." },
                    { front: "setattr(obj, campo, valor)", back: "Define dinamicamente um atributo de objeto pelo nome em string." },
                    { front: "status_code=204", back: "No Content — resposta padrão para DELETE bem-sucedido (sem body)." }
                ],
                quiz: {
                    question: "Por que usar `exclude_unset=True` no model_dump() do endpoint PUT?",
                    options: [
                        { text: "Para não incluir campos com valor None.", correct: false, feedback: "exclude_none=True faria isso." },
                        { text: "Para atualizar APENAS os campos enviados pelo cliente, sem sobrescrever os não enviados.", correct: true, feedback: "Exato! Permite atualizações parciais — se o cliente não mandou `nome`, ele não é zerado." },
                        { text: "Para melhorar performance do banco.", correct: false, feedback: "O ganho é de semântica/segurança, não performance." }
                    ]
                }
            },
            {
                id: "m3w3-s4",
                title: "4. Soft Delete e Campos de Auditoria",
                content: `
**Soft Delete** não apaga o registro — apenas marca como inativo. Essencial para auditoria e compliance.

\`\`\`python
from sqlalchemy import Column, DateTime
from datetime import datetime

class BaseModel(Base):
    __abstract__ = True
    id = Column(Integer, primary_key=True)
    criado_em = Column(DateTime, default=datetime.utcnow)
    atualizado_em = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)
    deletado_em = Column(DateTime, nullable=True)  # None = ativo

class Usuario(BaseModel):
    __tablename__ = "usuarios"
    nome = Column(String(100))

# Soft delete
def soft_delete(db, user_id):
    usuario = db.query(Usuario).filter(
        Usuario.id == user_id,
        Usuario.deletado_em == None  # só ativos
    ).first()
    if usuario:
        usuario.deletado_em = datetime.utcnow()
        db.commit()
\`\`\`

> 📋 **Campos de auditoria** (\`criado_em\`, \`atualizado_em\`) são obrigatórios em sistemas profissionais.
`,
                flashcards: [
                    { front: "Soft Delete", back: "Marca o registro como deletado sem removê-lo fisicamente — preserva histórico." },
                    { front: "onupdate=datetime.utcnow", back: "Atualiza automaticamente o campo sempre que o registro é modificado." },
                    { front: "__abstract__ = True", back: "Impede que o SQLAlchemy crie uma tabela para essa classe — usada como mixin base." }
                ],
                quiz: {
                    question: "Qual a vantagem do Soft Delete sobre DELETE físico?",
                    options: [
                        { text: "É mais rápido que deletar fisicamente.", correct: false, feedback: "Soft delete é mais lento pois não remove dados." },
                        { text: "Preserva o histórico de dados para auditoria, relatórios e possível restauração.", correct: true, feedback: "Correto! Em sistemas com compliance (LGPD, financeiro), dados nunca devem sumir sem rastro." },
                        { text: "Economiza espaço no banco.", correct: false, feedback: "Soft delete usa mais espaço pois mantém os dados." }
                    ]
                }
            },
            {
                id: "m3w3-s5",
                title: "5. Paginação de Resultados (Limit e Offset)",
                content: `
Nunca retorne todos os usuários do banco em um GET. Use paginação:

\`\`\`python
from fastapi import APIRouter, Depends, Query

@router.get("/usuarios")
def listar_usuarios(
    skip: int = Query(0, ge=0, description="Registros a pular"),
    limit: int = Query(10, ge=1, le=100, description="Total de registros por página"),
    db: Session = Depends(get_db)
):
    usuarios = db.query(Usuario).offset(skip).limit(limit).all()
    total = db.query(Usuario).count()
    
    return {
        "total": total,
        "dados": usuarios,
        "pagina": (skip // limit) + 1
    }
\`\`\`

> A função \`Query\` valida e sanitiza a entrada: no exemplo o usuário nunca poderá pedir mais de 100 registros por vez.
`,
                flashcards: [
                    { front: "offset(X)", back: "No SQL e ORM, ignora as 'X' primeiras linhas. Essencial para 'pular' páginas." },
                    { front: "limit(Y)", back: "No SQL e ORM, restringe o número máximo de linhas retornadas. O tamanho da página." },
                    { front: "le=100 em Query()", back: "Validação do Pydantic no FastAPI. Garante que o cliente não possa fazer 'limit=1000000' para tentar derrubar seu servidor." }
                ],
                quiz: {
                    question: "Num sistema, o Front-end solicitou a 'página 3' com 20 itens por página. Qual deve ser o cálculo do `skip` (offset)?",
                    options: [
                        { text: "skip = 60", correct: false, feedback: "Isso traria a página 4." },
                        { text: "skip = 40", correct: true, feedback: "Correto! Página 1: pule 0. Página 2: pule 20. Página 3: pule 40. A fórmula é (pagina - 1) * limite." },
                        { text: "skip = 3", correct: false, feedback: "Skip trabalha com linhas, não números de página." }
                    ]
                }
            },
            {
                id: "m3w3-s6",
                title: "6. Filtros Dinâmicos na API",
                content: `
Construa Queries dinamicamente no SQLAlchemy baseadas nos parâmetros de URL (\`?ativo=true&busca=joao\`).

\`\`\`python
from typing import Optional

@router.get("/usuarios")
def buscar(
    ativo: Optional[bool] = None,
    nome: Optional[str] = None,
    db: Session = Depends(get_db)
):
    # Inicia a base da query, ainda sem ir no banco!
    query = db.query(Usuario)
    
    # Acopla WHERE progressivamente
    if ativo is not None:
        query = query.filter(Usuario.ativo == ativo)
        
    if nome:
        query = query.filter(Usuario.nome.ilike(f"%{nome}%"))
        
    # Somente o .all() executa de fato o SQL
    return query.all()
\`\`\`
`,
                flashcards: [
                    { front: "query base não executada", back: "O método db.query() apenas monta um objeto de query. O SQL só vai pro banco quando chama .all() ou .first()." },
                    { front: "ilike()", back: "Mapeia para ILIKE no Postgres, permitindo buscas parciais '%texto%' ignorando maiúsculas e minúsculas." },
                    { front: "Optional[] em Query Params", back: "Diz ao FastAPI que o parâmetro de query não é obrigatório na URL." }
                ],
                quiz: {
                    question: "Por que a abordagem de concatenar variáveis diretamente na query SQL (`if nome: sql += f' WHERE nome={nome}'`) é estritamente proibida?",
                    options: [
                        { text: "Porque SQL Injection. O uso do SQLAlchemy .filter() assegura que as variáveis sejam passadas por parâmetros seguros e escapados no banco.", correct: true, feedback: "Perfeitamente correto. Concatenação de string no banco é a vulnerabilidade #1 da web." },
                        { text: "Porque polui o código.", correct: false, feedback: "Também polui, mas a falha é de segurança." },
                        { text: "Porque é mais lento.", correct: false, feedback: "Na verdade, concatenar string poderia até ser sutilmente mais rápido no Python, mas não compensa o risco gigante de invasão." }
                    ]
                }
            },
            {
                id: "m3w3-s7",
                title: "7. Lidando com Exceções do Banco de Dados",
                content: `
O usuário enviou um e-mail duplicado numa tabela com \`UNIQUE(email)\`. O FastAPI sozinho retornará 500 (Internal Error). Capture o erro na hora!

\`\`\`python
from sqlalchemy.exc import IntegrityError
from fastapi import HTTPException

@router.post("/usuarios")
def criar_usuario(user: UsuarioCreate, db: Session = Depends(get_db)):
    db_obj = Usuario(email=user.email, nome=user.nome)
    try:
        db.add(db_obj)
        db.commit()
        db.refresh(db_obj)
        return db_obj
    except IntegrityError:
        # Importante: reverta a transação quebrada
        db.rollback() 
        # Retorne 400 amigável para o cliente
        raise HTTPException(
            status_code=400, 
            detail="Este email já está cadastrado."
        )
\`\`\`
`,
                flashcards: [
                    { front: "IntegrityError", back: "Exceção disparada pelo SQLAlchemy quando uma restrição do banco é violada (ex: Unique Constraint de um email, Foreign Key inválida)." },
                    { front: "db.rollback() obrigatório", back: "Sempre que capturar um erro de banco no SQLAlchemy, execute rollback() para não 'travar' a sessão nas próximas operações." }
                ],
                quiz: {
                    question: "O que acontece se um `IntegrityError` for capturado em um `try/except` mas você omitir o comando `db.rollback()`?",
                    options: [
                        { text: "A sessão do SQLAlchemy fica em estado corrompido, e todas as consultas subseqüentes que usarem aquele db falharão dizendo 'current transaction is aborted'.", correct: true, feedback: "Exato! Essa é a origem de 90% dos bugs intermitentes em back-ends." },
                        { text: "O usuário é criado mesmo assim, violando as regras.", correct: false, feedback: "O banco aborta, nada será salvo." },
                        { text: "O banco de dados se reestrutura automaticamente.", correct: false, feedback: "A obrigação de desfazer o estado falho é da aplicação." }
                    ]
                }
            },
            {
                id: "m3w3-s8",
                title: "8. Testes Integrados com SQLAlchemy",
                content: `
Como testar rotas sem sujar o banco oficial?

\`\`\`python
# test_routes.py
from fastapi.testclient import TestClient
from main import app, get_db

# Criar banco SQLite local na memória para este teste
def override_get_db():
    try:
        # SQLite memory base (veja módulo de testes)
        db = TestSessionLocal() 
        yield db
    finally:
        db.close()

app.dependency_overrides[get_db] = override_get_db
client = TestClient(app)

def test_criar_usuario_duplicado():
    # Primeira inserção: funciona
    client.post("/usuarios", json={"email": "a@a.com"})
    
    # Segunda: Falha por email duplicado (IntegrityError mapeado)
    response = client.post("/usuarios", json={"email": "a@a.com"})
    assert response.status_code == 400
    assert response.json()["detail"] == "Este email já está cadastrado."
\`\`\`
`,
                flashcards: [
                    { front: "app.dependency_overrides", back: "Permite ao TestClient do FastAPI interceptar o 'Depends(get_db)' da rota original e plugar um banco falso local isolado." },
                    { front: "SQLite em memória nos testes", back: "Muito rápido e seguro. Destruído magicamente ao final da execução, não polui arquivos físicos." }
                ],
                quiz: {
                    question: "Por que não rodamos testes apontando diretamente pro nosso banco PostgreSQL local de desenvolvimento?",
                    options: [
                        { text: "Porque os testes sujariam nossos dados e, na segunda execução, quebrarão as próprias chaves primárias e constraints que foram inseridas na primeira vez.", correct: true, feedback: "Brilhante! O banco do teste tem que ser zerado antes de CADA script de teste pra garantir que rodar os testes mil vezes dará o mesmo resultado." },
                        { text: "Porque o PostgreSQL não suporta queries via pytest.", correct: false, feedback: "O banco não sabe a diferença se é um app ou teste." },
                        { text: "Para economizar o processador da máquina.", correct: false, feedback: "Embora economize, é 100% sobre isolamento de dados." }
                    ]
                }
            }
        ],
        memoryPalace: {
            title: "Palácio da Memória: A Cadeia de Produção",
            content: `
O CRUD completo é uma **cadeia de produção industrial**:

- 🏭 **A Fábrica (endpoint POST):** Recebe matéria-prima (JSON), valida qualidade (Pydantic), produz o item (INSERT) e entrega o produto finalizado com número de série (id).
- 🔍 **O Catálogo (endpoint GET):** O cliente folheia o catálogo paginado. Não precisa ver os 1.000.000 de produtos de uma vez — skip e limit controlam as páginas.
- ✏️ **A Revisão (endpoint PUT):** Apenas os campos marcados com "alterar" são modificados. O restante fica como estava — exclude_unset=True é o lápis vermelho do revisor.
- 🗄️ **O Arquivo Morto (Soft Delete):** O produto não vai para o lixo — vai para o arquivo morto. A etiqueta "deletado_em" é carimbada. Em caso de auditoria, ele ainda pode ser encontrado.
            `
        },
        exam: [
            {
                question: "1. Por que o bloco `finally: db.close()` em `get_db()` é crítico?",
                options: [
                    "Para reiniciar o banco após cada request.",
                    "Para garantir que a conexão seja devolvida ao pool mesmo em caso de exceção.",
                    "Para commitar automaticamente ao final do request.",
                    "FastAPI exige isso para funcionar."
                ],
                correctIndex: 1
            },
            {
                question: "2. `Query(le=100)` em um parâmetro `limit` serve para:",
                options: [
                    "Limitar a 100 caracteres o texto do parâmetro.",
                    "Garantir que o client não peça mais de 100 registros por request.",
                    "Criar um índice de 100 elementos.",
                    "Paginar automaticamente em grupos de 100."
                ],
                correctIndex: 1
            },
            {
                question: "3. Qual status HTTP um endpoint DELETE deve retornar em sucesso?",
                options: ["200 OK", "201 Created", "204 No Content", "202 Accepted"],
                correctIndex: 2
            },
            {
                question: "4. `__abstract__ = True` em uma classe SQLAlchemy significa:",
                options: [
                    "A classe é abstrata e não pode ser instanciada em Python.",
                    "O SQLAlchemy não cria tabela para essa classe — serve como base compartilhada.",
                    "Os campos da classe são privados.",
                    "A classe não pode ser herdada."
                ],
                correctIndex: 1
            }
        ]
    },

    "m3w4": {
        title: "Semana 4: Migrations com Alembic",
        subtitle: "Versionamento do Banco de Dados como Git para Tabelas",
        studies: [
            {
                id: "m3w4-s1",
                title: "1. Por Que Precisamos de Migrations",
                content: `
**O problema:** Você alterou um Model SQLAlchemy (adicionou coluna), mas o banco de produção ainda tem a estrutura antiga. Como sincronizar com segurança?

**Sem migrations:**
- Rodar \`Base.metadata.create_all()\` apenas cria tabelas novas — não altera tabelas existentes
- Alterar o banco manualmente em produção é propenso a erros e não rastreável

**Com Alembic:**
- Cada alteração no schema vira um arquivo de migration versionado
- Você pode aplicar (\`upgrade\`) e reverter (\`downgrade\`) migrações
- O histórico fica no Git — toda mudança no banco é rastreada

\`\`\`bash
pip install alembic
alembic init alembic  # cria estrutura de pastas
\`\`\`
`,
                flashcards: [
                    { front: "Alembic", back: "Ferramenta de migrations para SQLAlchemy — versionamento do schema do banco." },
                    { front: "Migration", back: "Script que descreve uma transformação no schema do banco (criar tabela, adicionar coluna, etc.)." },
                    { front: "upgrade/downgrade", back: "Funções de uma migration: upgrade aplica, downgrade reverte a mudança." }
                ],
                quiz: {
                    question: "Por que `Base.metadata.create_all()` não é suficiente para produção?",
                    options: [
                        { text: "É lento demais para bancos grandes.", correct: false, feedback: "Performance não é o problema principal." },
                        { text: "Apenas cria tabelas novas — não altera tabelas existentes que já possuem dados.", correct: true, feedback: "Correto! Em produção, você nunca pode recriar tabelas — os dados seriam perdidos." },
                        { text: "Não funciona com PostgreSQL.", correct: false, feedback: "Funciona com qualquer banco suportado pelo SQLAlchemy." }
                    ]
                }
            },
            {
                id: "m3w4-s2",
                title: "2. Configurando o Alembic",
                content: `
\`\`\`ini
# alembic.ini
sqlalchemy.url = postgresql://user:senha@localhost/db
\`\`\`

\`\`\`python
# alembic/env.py — conectar ao seus models
from models import Base  # importa seus models
target_metadata = Base.metadata  # Alembic usa para autogenerate
\`\`\`

**Fluxo básico:**
\`\`\`bash
# 1. Gerar migration automaticamente (compara models vs banco atual)
alembic revision --autogenerate -m "adiciona coluna telefone em usuarios"

# 2. Revisar o arquivo gerado em alembic/versions/
# 3. Aplicar ao banco
alembic upgrade head

# Ver histórico de migrations aplicadas
alembic history
alembic current
\`\`\`

> ✅ **Sempre revise** o arquivo gerado antes de aplicar. O autogenerate é inteligente mas não perfeito.
`,
                flashcards: [
                    { front: "--autogenerate", back: "Alembic compara os models com o banco e gera o script de migration automaticamente." },
                    { front: "upgrade head", back: "Aplica todas as migrations pendentes até a mais recente." },
                    { front: "alembic current", back: "Mostra qual migration está atualmente aplicada no banco." }
                ],
                quiz: {
                    question: "Para que serve o `target_metadata = Base.metadata` no `env.py` do Alembic?",
                    options: [
                        { text: "Define a URL de conexão com o banco.", correct: false, feedback: "A URL fica no alembic.ini." },
                        { text: "Permite que o Alembic compare os models Python com o estado atual do banco para autogenerate.", correct: true, feedback: "Correto! Sem isso, o Alembic não sabe quais tabelas/colunas existem nos seus models." },
                        { text: "Define quais models serão ignorados nas migrations.", correct: false, feedback: "Não tem essa função." }
                    ]
                }
            },
            {
                id: "m3w4-s3",
                title: "3. Anatomia de uma Migration",
                content: `
\`\`\`python
# alembic/versions/abc123_adiciona_telefone.py
from alembic import op
import sqlalchemy as sa

revision = 'abc123'
down_revision = 'xyz789'  # migration anterior (encadeamento)
branch_labels = None
depends_on = None

def upgrade() -> None:
    # Adiciona coluna nova
    op.add_column('usuarios',
        sa.Column('telefone', sa.String(20), nullable=True)
    )
    # Cria índice na nova coluna
    op.create_index('ix_usuarios_telefone', 'usuarios', ['telefone'])

def downgrade() -> None:
    # Desfaz tudo em ordem inversa
    op.drop_index('ix_usuarios_telefone', table_name='usuarios')
    op.drop_column('usuarios', 'telefone')
\`\`\`

O encadeamento via \`down_revision\` forma uma cadeia de versões — exatamente como commits do Git.
`,
                flashcards: [
                    { front: "op.add_column()", back: "Adiciona uma nova coluna a uma tabela existente sem perder dados." },
                    { front: "down_revision", back: "Aponta para a migration anterior — forma o encadeamento de versões." },
                    { front: "op.drop_column()", back: "Remove uma coluna da tabela — usado no downgrade para reverter." }
                ],
                quiz: {
                    question: "O que acontece se você rodar `alembic downgrade -1`?",
                    options: [
                        { text: "Deleta o banco inteiro.", correct: false, feedback: "Não é tão destrutivo." },
                        { text: "Reverte a última migration aplicada, executando sua função downgrade().", correct: true, feedback: "Correto! -1 significa 'uma migration para trás'. É o rollback do banco." },
                        { text: "Gera uma nova migration.", correct: false, feedback: "Para gerar use revision --autogenerate." }
                    ]
                }
            },
            {
                id: "m3w4-s4",
                title: "4. Boas Práticas de Migrations em Produção",
                content: `
**O que fazer e o que NUNCA fazer:**

✅ **Faça:**
- Sempre commit o arquivo de migration junto com o código que o usa
- Teste o downgrade antes de fazer merge em produção
- Use nomes descritivos: \`adiciona_indice_email_usuarios\`
- Rode migrations como parte do processo de deploy

❌ **Nunca:**
- Edite migrations já aplicadas em produção
- Delete arquivos de migration do repositório
- Aplique migrations manualmente sem versionamento
- Faça migrations durante horário de pico sem janela de manutenção

**Integração com deploy:**
\`\`\`bash
# Dockerfile / script de deploy
alembic upgrade head  # antes de subir a aplicação
uvicorn main:app --host 0.0.0.0 --port 8000
\`\`\`
`,
                flashcards: [
                    { front: "Nunca editar migration aplicada", back: "Uma migration aplicada em produção é imutável. Crie uma nova para corrigir." },
                    { front: "Migration no deploy", back: "Aplique migrations ANTES de subir a nova versão da aplicação." }
                ],
                quiz: {
                    question: "Você achou um erro em uma migration que já foi aplicada em produção. O que fazer?",
                    options: [
                        { text: "Editar o arquivo de migration e reaplicar.", correct: false, feedback: "NUNCA edite uma migration já aplicada — isso corromperia o histórico." },
                        { text: "Criar uma nova migration que corrija o erro.", correct: true, feedback: "Correto! A nova migration é o caminho seguro. O histórico permanece íntegro." },
                        { text: "Deletar o banco e recriar do zero.", correct: false, feedback: "Em produção, isso significaria perda total de dados." }
                    ]
                }
            },
            {
                id: "m3w4-s5",
                title: "5. Data Migrations: Populando Dados com Alembic",
                content: `
Migrations não servem só para criar colunas. Elas podem (e devem) popular dados base em produção:

\`\`\`python
# arquivo gerado pelo alembic: 1234abcd_adiciona_roles.py

from alembic import op
from sqlalchemy import table, column, Integer, String

# Definimos uma "tabela virtual" para usar nas inserções seguras
roles_table = table('roles',
    column('id', Integer),
    column('nome', String)
)

def upgrade():
    # Ao aplicar a migration, insira os dados base
    op.bulk_insert(roles_table, [
        {'id': 1, 'nome': 'admin'},
        {'id': 2, 'nome': 'usuario_comum'}
    ])

def downgrade():
    op.execute("DELETE FROM roles WHERE id IN (1, 2)")
\`\`\`
`,
                flashcards: [
                    { front: "Data Migration", back: "Uso do Alembic para criar ou modificar registros no banco em vez de alterar a estrutura de tabelas." },
                    { front: "op.bulk_insert()", back: "Método do Alembic usado na função upgrade() para popular dados durante a migração." }
                ],
                quiz: {
                    question: "Por que não rodar simplesmente um script manual no banco em vez de usar Data Migration?",
                    options: [
                        { text: "Porque o Alembic garante que esse dado será inserido em todos os ambientes (Dev, Staging, Produção) de forma automática e na ordem correta, versionada no Git.", correct: true, feedback: "Exato! Scripts soltos não são versionados e a equipe frequentemente esquece de rodá-los na AWS em deploy de produção." },
                        { text: "Alembic roda scripts mais rapidamente.", correct: false, feedback: "A velocidade é a mesma que script." },
                        { text: "Banco de dados não aceita scripts manuais de inserts.", correct: false, feedback: "Aceita, mas foge do padrão profissional." }
                    ]
                }
            },
            {
                id: "m3w4-s6",
                title: "6. Resolvendo Conflitos de Alembic",
                content: `
Se dois desenvolvedores na equipe criarem uma migration ao mesmo tempo na sua máquina local, eles farão push de migrations com \`down_revision\` iguais (apontando para a mesma base).

Isso causa um erro chamado **Multiple Head Revisions**.

\`\`\`bash
# Erro comum no terminal:
alembic.util.exc.CommandError: Multiple head revisions are present...
\`\`\`

**Como corrigir:**
\`\`\`bash
# O Alembic permite juntar (merge) os dois ramos
alembic merge heads -m "merge de migrations concorrentes"

# Isso criará uma TERCEIRA migration vazia que depende das duas e une o histórico.
\`\`\`
`,
                flashcards: [
                    { front: "Multiple heads present", back: "Erro clássico de branches GIT quando dois programadores criaram migrations paralelamente no mesmo projeto." },
                    { front: "alembic merge heads", back: "Comando que salva a pátria criando uma ramificação de convergência no histórico das migrations." }
                ],
                quiz: {
                    question: "Dois juniores adicionam tabelas em branches diferentes. Eles fazem merge e o deploy de produção trava com 'Multiple Head Revisions'. Como evitar?",
                    options: [
                        { text: "Rodando alembic merge heads e comitando o resultado do novo arquivo antes do deploy.", correct: true, feedback: "Certa! Assim como o Git, o Alembic também precisa realizar o merge do histórico caso tenham bifurcações simultâneas." },
                        { text: "Deletar a migration do júnior 2.", correct: false, feedback: "Faltarão tabelas de produção de uma funcionalidade recém mesclada!" },
                        { text: "Reescrever o banco do zero em produção.", correct: false, feedback: "Nunca uma opção em produção real." }
                    ]
                }
            },
            {
                id: "m3w4-s7",
                title: "7. Seeders e Scripts Locais",
                content: `
Diferente de **Data Migrations** (dados oficiais), um **Seed** é focado apenas no ambiente do desenvolvedor local e serve para poluir o banco com 500.000 usuários para teste visual ou de performance. Não se envia Seeders pelo Alembic para a produção.

\`\`\`python
# scripts/seed_banco_local.py
from faker import Faker
from models import Usuario
from database import SessionLocal

fake = Faker()
db = SessionLocal()

print("Gerando 10 mil usuários falsos no banco local...")
usuarios = [
    Usuario(nome=fake.name(), email=fake.email())
    for _ in range(10000)
]
db.add_all(usuarios)
db.commit()
print("Banco seedado!")
\`\`\`
`,
                flashcards: [
                    { front: "Seed", back: "Script solto para povoamento intencional de dados de brincadeira (fake/mock) focado apenas no conforto da equipe em ambiente DEV local." },
                    { front: "Diferença Seed x Migration", back: "Migration altera produção (oficial). Seed suja banco do estagiário com dados aleatórios para testar a tela." }
                ],
                quiz: {
                    question: "Por que NÃO devemos usar o Alembic para gerar os 10.000 usuários do banco para o ambiente da equipe?",
                    options: [
                        { text: "Porque se fizermos isso no Alembic, quando rodar o CI/CD para deploy em Produção, injetaremos 10 mil usuários bizarros do Faker nos dados dos clientes.", correct: true, feedback: "Perfeitamente correto. Alembic = Arquitetura oficial. Seeder Python solto = script de desenvolvimento." },
                        { text: "Alembic proíbe o uso da biblioteca Faker.", correct: false, feedback: "Ele permite tudo, mas seria destrutivo." },
                        { text: "Bancos não aguentam inserções de Alembic em massa.", correct: false, feedback: "Eles aguentam e muito." }
                    ]
                }
            },
            {
                id: "m3w4-s8",
                title: "8. Deploy Contínuo (Zero Downtime Migrations)",
                content: `
Em sistemas que não podem sair do ar (ex: bancos, IFood), você **não** pode dropar colunas ou renomeá-las facilmente (isso causaria falha 500 se o código antigo ainda estivesse rodando).

**Padrão de 3 passos para alterar colunas sem downtime:**
1. Crie a coluna nova via Migration (nullable=True). Código backend começa a salvar dado antigo e a cópia nova ao mesmo tempo. (Deploy 1)
2. Rode script copiando os dados das velhas colunas para as novas. Atualize backend para ler apenas da nova. (Deploy 2)
3. Crie Migration deletando a coluna antiga agora que nada a usa. (Deploy 3)
`,
                flashcards: [
                    { front: "Zero Downtime Deploy", back: "Processo de atualização do back-end ou banco sem que os usuários notem indisponibilidade no serviço." },
                    { front: "O perigo do DROP COLUMN", back: "Se você apaga uma coluna numa migração e há requisições rodando na versão velha do código, haverá erros fatais 500 na hora de selecionar aquela coluna extinta." }
                ],
                quiz: {
                    question: "Por que uma migration com `op.drop_column('senha_velha')` pode derrubar o sistema em um deploy contínuo na AWS?",
                    options: [
                        { text: "O banco não permite deleção de colunas com strings.", correct: false, feedback: "Falso." },
                        { text: "Porque as requisições que estão ocorrendo naquele exato segundo no servidor antigo do FastAPI tentarão realizar `SELECT senha_velha` e encontrarão um 'Column Not Found', devolvendo Erro 500 ao cliente.", correct: true, feedback: "Bingo. Em alta escala de acessos, deve-se trocar o código para ignorar a coluna antes de efetivamente apagar a coluna do banco." },
                        { text: "Por que deletar colunas limpa a memória e o server reboota.", correct: false, feedback: "Invenção." }
                    ]
                }
            }
        ],
        memoryPalace: {
            title: "Palácio da Memória: O Notário do Banco",
            content: `
O **Alembic é o notário do seu banco de dados**:

- 📜 **O Cartório (alembic/versions/):** Cada mudança no banco vira um documento oficial numerado e assinado. Não se muda o passado — apenas adiciona novos documentos.
- 🔗 **A Cadeia Documental (down_revision):** Cada documento referencia o anterior. Como uma escritura que cita a anterior. Se a cadeia quebra, o cartório rejeita.
- ⬆️ **Registrar (upgrade head):** Leva o banco ao estado mais atual — como protocolar todos os documentos pendentes.
- ⬇️ **Cancelar (downgrade -1):** Revoga o último documento registrado — retorna ao estado anterior. Útil se o deploy deu errado.
- 🚫 **Falsificar Documento (editar migration aplicada):** Crime no cartório. O sistema detecta a adulteração. Sempre crie um documento novo para corrigir.
            `
        },
        exam: [
            {
                question: "1. Qual comando Alembic aplica todas as migrations pendentes?",
                options: [
                    "alembic migrate",
                    "alembic run",
                    "alembic upgrade head",
                    "alembic apply --all"
                ],
                correctIndex: 2
            },
            {
                question: "2. Qual a função do `down_revision` em uma migration?",
                options: [
                    "Define a versão mínima do Python necessária.",
                    "Encadeia a migration à anterior, formando o histórico versionado.",
                    "Indica que a migration deve ser aplicada em downgrade.",
                    "Aponta para a próxima migration."
                ],
                correctIndex: 1
            },
            {
                question: "3. Quando deve ser rodado `alembic upgrade head` no processo de deploy?",
                options: [
                    "Após iniciar a aplicação.",
                    "Apenas em ambiente local.",
                    "Antes de iniciar a nova versão da aplicação.",
                    "Uma vez por semana em manutenção."
                ],
                correctIndex: 2
            },
            {
                question: "4. Você precisa corrigir uma migration já aplicada em produção. A ação correta é:",
                options: [
                    "Editar o arquivo .py da migration e rodar upgrade novamente.",
                    "Criar uma nova migration que desfaça e reaplique a correção.",
                    "Deletar o banco e recriar com create_all().",
                    "Deletar o arquivo de migration do repositório."
                ],
                correctIndex: 1
            }
        ]
    },

    // ==========================================
    // MÊS 4 — FRONT-END PROFISSIONAL (REACT)
    // ==========================================
    "m4w1": {
        title: "Semana 1: React — Fundamentos",
        subtitle: "Construindo Interfaces com Componentes",
        studies: [
            {
                id: "m4w1-s1",
                title: "1. Componentes e JSX",
                content: `
React é uma biblioteca para construir interfaces de usuário com **componentes reutilizáveis**.

**JSX** é uma extensão de sintaxe que parece HTML mas é JavaScript:

\`\`\`jsx
// Componente funcional
function Saudacao({ nome }) {
    return (
        <div className="card">
            <h1>Olá, {nome}!</h1>
            <p>Bem-vindo ao React.</p>
        </div>
    );
}

// Uso
function App() {
    return <Saudacao nome="Ana" />;
}
\`\`\`

**Regras do JSX:**
- Sempre retorne um único elemento raiz (ou use \`<></>\`)
- \`class\` → \`className\` (class é palavra reservada em JS)
- Expressões JS ficam entre \`{}\`
- Componentes customizados começam com **maiúscula**
`,
                flashcards: [
                    { front: "Componente React", back: "Função JS que recebe props e retorna JSX. Unidade fundamental de UI no React." },
                    { front: "JSX", back: "Sintaxe que mistura JS e HTML. É transpilado para React.createElement() pelo Babel." },
                    { front: "Props", back: "Dados imutáveis passados de componente pai para filho via atributos JSX." }
                ],
                quiz: {
                    question: "Por que usamos `className` em vez de `class` no JSX?",
                    options: [
                        { text: "É uma convenção do React sem motivo técnico.", correct: false, feedback: "Há um motivo técnico claro." },
                        { text: "Porque `class` é palavra reservada em JavaScript — JSX é JS, não HTML.", correct: true, feedback: "Correto! JSX é transformado em JS, então class (palavra reservada) colide com declaração de classes." },
                        { text: "Para diferenciar de componentes de classe.", correct: false, feedback: "Essa não é a razão principal." }
                    ]
                }
            },
            {
                id: "m4w1-s2",
                title: "2. Props e Composição de Componentes",
                content: `
**Props** são o mecanismo de comunicação de pai para filho. São **imutáveis** — o filho não pode alterá-las.

\`\`\`jsx
function Botao({ texto, variante = "primario", onClick }) {
    return (
        <button
            className={\`btn btn-\${variante}\`}
            onClick={onClick}
        >
            {texto}
        </button>
    );
}

function App() {
    return (
        <div>
            <Botao texto="Salvar" variante="primario" onClick={() => alert("Salvo!")} />
            <Botao texto="Cancelar" variante="secundario" onClick={() => {}} />
        </div>
    );
}
\`\`\`

**Destructuring de props** é padrão — \`{ texto, variante }\` em vez de \`props.texto, props.variante\`.

**children** é uma prop especial:
\`\`\`jsx
function Card({ children }) {
    return <div className="card">{children}</div>;
}
// Uso: <Card><h1>Conteúdo</h1></Card>
\`\`\`
`,
                flashcards: [
                    { front: "Props são imutáveis", back: "O componente filho NUNCA deve modificar as props recebidas. Para mudança de estado, use useState." },
                    { front: "children", back: "Prop especial que recebe o conteúdo JSX entre as tags de abertura e fechamento do componente." },
                    { front: "Default Props", back: "Valores padrão de props via destructuring: `function C({ valor = 0 })`" }
                ],
                quiz: {
                    question: "O que acontece se um componente filho tentar modificar uma prop diretamente?",
                    options: [
                        { text: "A interface atualiza imediatamente.", correct: false, feedback: "Props são read-only — React não permite isso." },
                        { text: "React lança um erro em desenvolvimento — props são somente leitura.", correct: true, feedback: "Correto! Props são imutáveis. Para dados mutáveis, use useState no componente pai." },
                        { text: "A prop é atualizada apenas localmente.", correct: false, feedback: "Props não podem ser modificadas — React enforça isso." }
                    ]
                }
            },
            {
                id: "m4w1-s3",
                title: "3. Renderização Condicional e Listas",
                content: `
**Renderização Condicional:**
\`\`\`jsx
function Status({ carregando, erro, dados }) {
    if (carregando) return <p>Carregando...</p>;
    if (erro) return <p className="erro">{erro}</p>;
    return <p>Dados: {dados}</p>;
}

// Operador ternário inline
function Badge({ ativo }) {
    return (
        <span className={\`badge \${ativo ? 'verde' : 'vermelho'}\`}>
            {ativo ? 'Ativo' : 'Inativo'}
        </span>
    );
}

// Short-circuit: renderiza apenas se condição for true
function Aviso({ mensagem }) {
    return <div>{mensagem && <p className="aviso">{mensagem}</p>}</div>;
}
\`\`\`

**Renderização de Listas:**
\`\`\`jsx
function ListaUsuarios({ usuarios }) {
    return (
        <ul>
            {usuarios.map(u => (
                <li key={u.id}>{u.nome} — {u.email}</li>
            ))}
        </ul>
    );
}
\`\`\`
`,
                flashcards: [
                    { front: "key em listas", back: "Identificador único obrigatório para itens de lista — ajuda React a rastrear mudanças eficientemente." },
                    { front: "Short-circuit (&&)", back: "Renderiza o JSX apenas se a condição à esquerda for truthy. Ex: `{erro && <p>{erro}</p>}`" },
                    { front: "Nunca use index como key", back: "Usar o índice do array como key causa bugs em listas ordenadas/filtradas. Use IDs únicos." }
                ],
                quiz: {
                    question: "Por que o `key` é obrigatório em listas renderizadas com .map()?",
                    options: [
                        { text: "É apenas uma convenção de estilo do React.", correct: false, feedback: "React avisa como erro, não só convenção." },
                        { text: "Para o React identificar eficientemente quais itens mudaram, foram adicionados ou removidos.", correct: true, feedback: "Correto! Sem key, React re-renderiza a lista inteira desnecessariamente." },
                        { text: "Para acessar o elemento via CSS.", correct: false, feedback: "key não aparece no DOM — é apenas para React." }
                    ]
                }
            },
            {
                id: "m4w1-s4",
                title: "4. Criando Projeto com Vite",
                content: `
**Vite** é o bundler/dev server moderno para React — muito mais rápido que o Create React App.

\`\`\`bash
npm create vite@latest meu-projeto -- --template react
cd meu-projeto
npm install
npm run dev
\`\`\`

**Estrutura padrão:**
\`\`\`
src/
├── main.jsx          # Ponto de entrada
├── App.jsx           # Componente raiz
├── components/       # Componentes reutilizáveis
│   └── Botao.jsx
├── pages/            # Componentes de página
│   └── Home.jsx
└── styles/           # CSS modules ou global
    └── App.css
\`\`\`

**Convenções:**
- Arquivos de componente: **PascalCase.jsx**
- Um componente por arquivo
- CSS Modules (\`.module.css\`) para estilos escopados
`,
                flashcards: [
                    { front: "Vite", back: "Bundler moderno com HMR instantâneo. Alternativa rápida ao Create React App." },
                    { front: "HMR (Hot Module Replacement)", back: "Atualiza o módulo alterado sem recarregar a página inteira — DX superior." },
                    { front: "CSS Modules", back: "Escopa classes CSS por componente, evitando colisões de nomes globais." }
                ],
                quiz: {
                    question: "Qual a principal vantagem do Vite sobre o Create React App?",
                    options: [
                        { text: "Gera componentes automaticamente.", correct: false, feedback: "Nenhum dos dois gera componentes automaticamente." },
                        { text: "Servidor de desenvolvimento instantâneo com HMR nativo via ESModules — muito mais rápido.", correct: true, feedback: "Correto! Vite usa ESModules nativos do browser, sem precisar rebuildar o bundle inteiro." },
                        { text: "Tem suporte a TypeScript por padrão.", correct: false, feedback: "Ambos suportam TypeScript — não é diferencial exclusivo do Vite." }
                    ]
                }
            },
            {
                id: "m4w1-s5",
                title: "5. Renderização Condicional Avançada",
                content: `
Diferentes maneiras de exibir componentes baseados em condições:

\`\`\`jsx
function Perfil({ logado, admin, mensagens }) {
    // 1. Ternário (ideal para if/else no JSX)
    const saudacao = logado ? <Logout /> : <Login />;

    // 2. Operador Lógico && (ideal para apenas IF)
    // Cuidado: se mensagens for 0, o React renderiza "0".
    // Use booleanos (mensagens > 0)
    const avisos = (mensagens > 0) && <p>Você tem novas mensagens!</p>;

    // 3. Early Return (ideal para evitar aninhamentos)
    if (!logado) return <TelaBloqueada />;

    return (
        <div>
            {saudacao}
            {admin ? <PainelAdmin /> : <PainelUser />}
            {avisos}
        </div>
    );
}
\`\`\`
`,
                flashcards: [
                    { front: "Ternário em JSX", back: "condição ? <ComponenteVerdadeiro /> : <ComponenteFalso />" },
                    { front: "Problema do && com zero", back: "No React, `0 && <Componente />` renderiza o número 0 na tela. Solução: transforme em booleano `numero > 0 && ...`." },
                    { front: "Early Return", back: "Retornar um componente logo no início da função se uma condição (ex: loading, erro) for atendida." }
                ],
                quiz: {
                    question: "O que será renderizado na tela se a variável `qtd = 0` no código `{qtd && <Notificacao />}`?",
                    options: [
                        { text: "Nada.", correct: false, feedback: "Em JavaScript puro, 0 && 'A' é 0. O React renderiza números." },
                        { text: "O número 0.", correct: true, feedback: "Correto! Isso quebra o layout visualmente. A forma segura seria `{qtd > 0 && <Notificacao />}` ou `{!!qtd && <Notificacao />}`." },
                        { text: "Dará erro de sintaxe.", correct: false, feedback: "É uma sintaxe JS perfeitamente válida." }
                    ]
                }
            },
            {
                id: "m4w1-s6",
                title: "6. Renderizando Listas (O Poder do Map)",
                content: `
Você nunca usa \`for()\` dentro do JSX. Usamos \`.map()\`.

\`\`\`jsx
const produtos = [
    { id: 1, nome: "Notebook" },
    { id: 2, nome: "Mouse" }
];

function ListaProdutos() {
    return (
        <ul>
            {produtos.map(produto => (
                // ⚠️ A prop "key" é obrigatória e deve ser única/estável!
                <li key={produto.id}>
                    {produto.nome}
                </li>
            ))}
        </ul>
    );
}
\`\`\`

**Por que a \`key\` é importante?**
O React usa a chave para descobrir qual item foi adicionado, removido ou reordenado. Se você usar o índice do array (\`key={index}\`) e a lista for reordenada, o React pode se confundir e misturar os estados dos componentes.
`,
                flashcards: [
                    { front: "Array.map() no JSX", back: "Padrão oficial para transformar um array de dados em um array de componentes React." },
                    { front: "Propriedade 'key'", back: "Identificador único obrigatório em loops. Essencial para a performance e consistência do Virtual DOM." }
                ],
                quiz: {
                    question: "Qual o maior perigo de usar o índice do array (`index`) como a propriedade `key` em uma lista?",
                    options: [
                        { text: "É lento e trava o navegador.", correct: false, feedback: "A performance não é o principal problema." },
                        { text: "Se a lista for reordenada, filtrada ou tiver itens removidos, o React passará props para o componente errado, causando bugs de estado.", correct: true, feedback: "Correto! O índice 0 de repente vira o índice 1. Se havia um input digitado no índice 0, o texto vai 'pular' para o item errado." },
                        { text: "O React lança um Fatal Error.", correct: false, feedback: "Ele apenas dá um warning no console." }
                    ]
                }
            },
            {
                id: "m4w1-s7",
                title: "7. Elevating State (Lifting State Up)",
                content: `
Quando dois componentes "Irmãos" precisam compartilhar o mesmo dado, o estado não pode ficar dentro deles. Ele precisa ser **"elevado" (Lifting State Up)** para o componente Pai mais próximo.

\`\`\`jsx
// Componente PAI
function Calculadora() {
    // O estado fica no pai!
    const [temperatura, setTemperatura] = useState(0);

    return (
        <div>
            {/* Irmão 1 recebe estado e o setter (como props) */}
            <Termometro temp={temperatura} setTemp={setTemperatura} />
            
            {/* Irmão 2 só recebe o estado para mostrar na tela */}
            <AlertaFervura temp={temperatura} />
        </div>
    );
}
\`\`\`
`,
                flashcards: [
                    { front: "Lifting State Up", back: "Mover o state para o componente Pai comum mais próximo para que componentes irmãos possam compartilhar a informação via props." },
                    { front: "One-Way Data Flow", back: "Os dados no React fluem apenas para baixo (Pai -> Filho). Filhos enviam dados ao Pai chamando funções (callbacks)." }
                ],
                quiz: {
                    question: "Como um componente 'Filho' consegue alterar um estado que pertence ao componente 'Pai'?",
                    options: [
                        { text: "O Pai passa a função de atualização (`setState`) como uma propriedade (prop) para o Filho, e o Filho a chama.", correct: true, feedback: "Perfeito! Isso se chama Callback Prop." },
                        { text: "O Filho importa o estado do Pai usando `import`.", correct: false, feedback: "Estados não são exportáveis." },
                        { text: "Não é possível, o fluxo é apenas de cima para baixo.", correct: false, feedback: "Os dados descem, mas funções descem também para permitir que eventos subam (Data Down, Actions Up)." }
                    ]
                }
            },
            {
                id: "m4w1-s8",
                title: "8. Componentes Controlados vs Não-Controlados",
                content: `
Em formulários React, há dois paradigmas:

**Controlados (Controlled):** O React é a única fonte da verdade. O input reflete o \`useState\`. (Recomendado na maioria dos casos).
\`\`\`jsx
const [texto, setTexto] = useState("");
<input value={texto} onChange={e => setTexto(e.target.value)} />
\`\`\`

**Não-Controlados (Uncontrolled):** O DOM real guarda o dado. Você acessa via \`useRef\`. (Útil para formulários gigantes ou integração com bibliotecas não-React).
\`\`\`jsx
const inputRef = useRef(null);
const enviar = () => alert(inputRef.current.value);
<input ref={inputRef} type="text" />
\`\`\`
`,
                flashcards: [
                    { front: "Componente Controlado", back: "O valor do input de formulário é guiado pelo state do React. Dispara re-render a cada tecla digitada." },
                    { front: "Componente Não-Controlado", back: "O valor fica no DOM tradicional (sem state). Acessamos o valor via \`useRef()\` apenas na hora de submeter." }
                ],
                quiz: {
                    question: "Se você precisar aplicar uma máscara de CPF formatando o input *enquanto* o usuário digita, qual abordagem é necessária?",
                    options: [
                        { text: "Componente Não-Controlado (useRef).", correct: false, feedback: "Não-controlado só te dá o valor no final, é ruim para máscaras ao vivo." },
                        { text: "Componente Controlado (useState + value).", correct: true, feedback: "Correto! Como o React controla cada tecla via state, você pode alterar a string adicionando os pontos/traços antes de injetar de volta no 'value'." },
                        { text: "Manipulação direta do DOM via document.getElementById.", correct: false, feedback: "Isso quebra o ciclo de vida do React." }
                    ]
                }
            }
        ],
        memoryPalace: {
            title: "Palácio da Memória: O Lego da Interface",
            content: `
React é exatamente como um conjunto de **Lego**:

- 🧱 **Os Blocos (Componentes):** Cada peça tem uma forma específica — um Botão, um Card, um Header. Pode ser reutilizado em qualquer construção.
- 📦 **O Manual (Props):** Cada bloco vem com especificações — cor, tamanho, texto. Você passa as especificações de fora, o bloco não inventa as suas.
- 🎨 **O Estêncil (JSX):** A planta de montagem. Parece HTML, mas é JavaScript — você pode inserir lógica dinâmica em qualquer ponto.
- 🗝️ **O Código de Rastreamento (key):** Cada peça em uma sequência tem um número gravado embaixo. Sem ele, o Lego não sabe quais peças foram trocadas.
- 🏗️ **A Caixa da Construção (Vite):** O ambiente que mantém tudo funcionando enquanto você monta — recarrega na hora que você troca uma peça, sem desmontar o resto.
            `
        },
        exam: [
            {
                question: "1. Qual é a sintaxe correta para aplicar uma classe CSS condicional em JSX?",
                options: [
                    "`class={ativo ? 'verde' : 'vermelho'}`",
                    "`className={ativo ? 'verde' : 'vermelho'}`",
                    "`style={ativo ? 'verde' : 'vermelho'}`",
                    "`css={ativo ? 'verde' : 'vermelho'}`"
                ],
                correctIndex: 1
            },
            {
                question: "2. Por que não se deve usar o índice do array como `key` em listas React?",
                options: [
                    "React não aceita números como key.",
                    "Causa bugs quando a lista é reordenada ou filtrada, pois os índices mudam.",
                    "O índice não está disponível dentro do .map().",
                    "Deixa a renderização mais lenta."
                ],
                correctIndex: 1
            },
            {
                question: "3. O que `{mensagem && <p>{mensagem}</p>}` renderiza quando `mensagem` é uma string vazia?",
                options: [
                    "Renderiza `<p></p>` vazio.",
                    "Nada — string vazia é falsy em JS.",
                    "Lança um erro de tipo.",
                    "Renderiza o texto 'false'."
                ],
                correctIndex: 1
            },
            {
                question: "4. Qual comando cria um novo projeto React com Vite?",
                options: [
                    "npx create-react-app meu-projeto",
                    "npm init react meu-projeto",
                    "npm create vite@latest meu-projeto -- --template react",
                    "npx vite new meu-projeto"
                ],
                correctIndex: 2
            }
        ]
    },

    "m4w2": {
        title: "Semana 2: Hooks — Estado e Efeitos",
        subtitle: "Tornando Interfaces Dinâmicas e Reativas",
        studies: [
            {
                id: "m4w2-s1",
                title: "1. useState — O Estado Local",
                content: `
**useState** é o hook para gerenciar estado local em componentes funcionais.

\`\`\`jsx
import { useState } from 'react';

function Contador() {
    const [contagem, setContagem] = useState(0);

    return (
        <div>
            <p>Contagem: {contagem}</p>
            <button onClick={() => setContagem(c => c + 1)}>+</button>
            <button onClick={() => setContagem(c => c - 1)}>-</button>
            <button onClick={() => setContagem(0)}>Reset</button>
        </div>
    );
}
\`\`\`

**Regras críticas:**
- **Nunca mute** o estado diretamente: \`contagem++\` ❌ → use \`setContagem\`
- Para arrays/objetos, sempre crie **novos** (imutabilidade):
\`\`\`jsx
// ERRADO
itens.push(novoItem); setItens(itens);

// CORRETO
setItens(prev => [...prev, novoItem]);
\`\`\`
`,
                flashcards: [
                    { front: "useState(valorInicial)", back: "Retorna [estadoAtual, funcaoAtualizadora]. Re-renderiza o componente quando o estado muda." },
                    { front: "Função atualizadora (prev => ...)", back: "Garante acesso ao estado mais recente — essencial em atualizações assíncronas." },
                    { front: "Imutabilidade no React", back: "Nunca mutate estado diretamente. Sempre crie novos arrays/objetos para triggers de re-render." }
                ],
                quiz: {
                    question: "Por que usar `setItens(prev => [...prev, novoItem])` em vez de `itens.push(novoItem); setItens(itens)`?",
                    options: [
                        { text: "push() não funciona em React.", correct: false, feedback: "push() funciona em JS — o problema é semântico." },
                        { text: "React usa comparação por referência — mutar o array original não dispara re-render.", correct: true, feedback: "Correto! O spread cria um novo array (nova referência), sinalizando que o estado mudou." },
                        { text: "É apenas uma questão de estilo de código.", correct: false, feedback: "Não é estilo — é necessário para o React detectar a mudança." }
                    ]
                }
            },
            {
                id: "m4w2-s2",
                title: "2. useEffect — Efeitos Colaterais",
                content: `
**useEffect** executa código após a renderização — ideal para chamadas de API, timers e subscriptions.

\`\`\`jsx
import { useState, useEffect } from 'react';

function Perfil({ userId }) {
    const [usuario, setUsuario] = useState(null);
    const [carregando, setCarregando] = useState(true);

    useEffect(() => {
        setCarregando(true);

        fetch(\`/api/usuarios/\${userId}\`)
            .then(r => r.json())
            .then(data => {
                setUsuario(data);
                setCarregando(false);
            });

        // Cleanup (cancela efeitos ao desmontar)
        return () => {
            setCarregando(false);
        };
    }, [userId]); // Roda novamente quando userId mudar

    if (carregando) return <p>Carregando...</p>;
    return <h1>{usuario?.nome}</h1>;
}
\`\`\`

**Array de dependências:**
- \`[]\` — roda apenas uma vez (montagem)
- \`[id]\` — roda quando id mudar
- sem array — roda em TODA re-renderização (evitar)
`,
                flashcards: [
                    { front: "useEffect(() => {}, [])", back: "Roda uma vez após a montagem do componente — equivale ao componentDidMount." },
                    { front: "Cleanup Function", back: "Função retornada pelo useEffect. Roda antes do próximo efeito ou ao desmontar o componente." },
                    { front: "Array de dependências", back: "Controla quando o efeito re-executa. [] = uma vez, [x] = quando x mudar, sem array = sempre." }
                ],
                quiz: {
                    question: "O que acontece se você omitir o array de dependências no useEffect?",
                    options: [
                        { text: "O efeito nunca roda.", correct: false, feedback: "Sem array, o efeito roda em TODAS as renderizações." },
                        { text: "O efeito roda em toda re-renderização do componente — geralmente causa loop infinito com chamadas de API.", correct: true, feedback: "Correto! Sem array, useEffect roda sempre. Se o efeito atualiza estado, causa re-render infinito." },
                        { text: "React lança um erro de compilação.", correct: false, feedback: "Não é erro de compilação, mas pode causar bug de performance grave." }
                    ]
                }
            },
            {
                id: "m4w2-s3",
                title: "3. Formulários Controlados",
                content: `
Em React, formulários **controlados** têm o estado gerenciado pelo React, não pelo DOM.

\`\`\`jsx
function FormLogin() {
    const [form, setForm] = useState({ email: '', senha: '' });
    const [erro, setErro] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault(); // Previne reload da página
        if (!form.email.includes('@')) {
            setErro('Email inválido');
            return;
        }
        // Chamar API...
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email"
            />
            <input
                name="senha"
                type="password"
                value={form.senha}
                onChange={handleChange}
            />
            {erro && <p className="erro">{erro}</p>}
            <button type="submit">Entrar</button>
        </form>
    );
}
\`\`\`
`,
                flashcards: [
                    { front: "Formulário Controlado", back: "O valor do input é controlado pelo estado React via value + onChange. Fonte única de verdade." },
                    { front: "e.preventDefault()", back: "Previne o comportamento padrão do form (reload da página) no submit." },
                    { front: "[name]: value", back: "Computed property name — atualiza dinamicamente qualquer campo usando o atributo name do input." }
                ],
                quiz: {
                    question: "Por que chamar `e.preventDefault()` no handler de submit?",
                    options: [
                        { text: "Para desabilitar a validação HTML nativa.", correct: false, feedback: "Não é esse o objetivo." },
                        { text: "Para evitar que o browser recarregue a página ao submeter o formulário.", correct: true, feedback: "Correto! Sem isso, o form faz uma requisição GET/POST nativa e recarrega a página." },
                        { text: "Para limpar os campos do formulário.", correct: false, feedback: "Isso é feito manualmente com setState." }
                    ]
                }
            },
            {
                id: "m4w2-s4",
                title: "4. useCallback e useMemo — Otimização",
                content: `
Hooks de performance para evitar re-criações desnecessárias:

**useCallback:** Memoriza uma função entre renderizações.
\`\`\`jsx
const buscar = useCallback(async (termo) => {
    const result = await fetch(\`/api/busca?q=\${termo}\`);
    return result.json();
}, []); // Recria apenas quando deps mudarem
\`\`\`

**useMemo:** Memoriza o resultado de um cálculo pesado.
\`\`\`jsx
const totalFiltrado = useMemo(() => {
    return pedidos
        .filter(p => p.status === 'pago')
        .reduce((acc, p) => acc + p.valor, 0);
}, [pedidos]); // Recalcula apenas quando pedidos mudar
\`\`\`

> ⚠️ **Não otimize prematuramente.** useCallback/useMemo têm custo. Use apenas quando:
> - Funções são passadas como props para componentes memorizados
> - Cálculos são genuinamente pesados (listas com milhares de itens)
`,
                flashcards: [
                    { front: "useCallback", back: "Memoriza a referência de uma função. Evita que filhos desnecessariamente re-renderizem." },
                    { front: "useMemo", back: "Memoriza o resultado de um cálculo. Só recalcula quando as dependências mudam." },
                    { front: "React.memo()", back: "HOC que previne re-render de um componente se as props não mudaram." }
                ],
                quiz: {
                    question: "Quando é recomendado usar `useMemo`?",
                    options: [
                        { text: "Em todo cálculo, para melhorar performance.", correct: false, feedback: "useMemo tem overhead próprio — usar em excesso piora a performance." },
                        { text: "Em cálculos computacionalmente pesados cujo resultado depende de estado/props específicos.", correct: true, feedback: "Correto! Filtragem de listas grandes, agregações matemáticas, ordenações complexas." },
                        { text: "Apenas em componentes de classe.", correct: false, feedback: "useMemo é exclusivo de componentes funcionais." }
                    ]
                }
            },
            {
                id: "m4w2-s5",
                title: "5. Custom Hooks: Reutilizando Lógica",
                content: `
Se dois componentes compartilham a mesma lógica com \`useState\` e \`useEffect\`, você pode extrair isso para um **Custom Hook** (uma função que começa com \`use\`).

\`\`\`jsx
// hook customizado: useJanela.js
import { useState, useEffect } from 'react';

export function useJanela() {
    const [largura, setLargura] = useState(window.innerWidth);

    useEffect(() => {
        const resize = () => setLargura(window.innerWidth);
        window.addEventListener('resize', resize);
        return () => window.removeEventListener('resize', resize);
    }, []);

    return largura;
}

// Em qualquer componente:
function Responsivo() {
    const largura = useJanela();
    return <p>A tela tem {largura}px</p>;
}
\`\`\`
`,
                flashcards: [
                    { front: "Custom Hook", back: "Função JavaScript cujo nome começa com 'use' e que chama outros Hooks. Serve para extrair lógica de componentes." },
                    { front: "Regra do 'use'", back: "O React exige que todo hook inicie com 'use' para aplicar as validações de linter (Rules of Hooks)." }
                ],
                quiz: {
                    question: "Dois componentes diferentes usam o mesmo Custom Hook. Eles compartilham o mesmo Estado na memória?",
                    options: [
                        { text: "Sim, Custom Hooks funcionam como variáveis globais.", correct: false, feedback: "Eles não são o Redux/Context." },
                        { text: "Não, cada chamada ao Custom Hook cria um estado (useState) completamente isolado e independente para aquele componente.", correct: true, feedback: "Correto! Custom Hooks reusam a LÓGICA do estado, não os DADOS do estado." },
                        { text: "O React lançará um erro se tentar usar o mesmo hook em dois lugares.", correct: false, feedback: "Reusabilidade é exatamente o objetivo." }
                    ]
                }
            },
            {
                id: "m4w2-s6",
                title: "6. useRef: Variáveis que Sobrevivem",
                content: `
O \`useRef\` serve para duas coisas:
1. Guardar a referência a um elemento real do DOM (ex: dar foco num input).
2. Guardar um valor mutável que **NÃO causa re-renderização** da tela ao mudar.

\`\`\`jsx
function Cronometro() {
    const [segundos, setSegundos] = useState(0);
    // Guarda o ID do intervalo sem causar re-render na tela
    const timerId = useRef(null); 

    const iniciar = () => {
        timerId.current = setInterval(() => setSegundos(s => s+1), 1000);
    };

    const parar = () => {
        clearInterval(timerId.current);
    };

    return <button onClick={iniciar}>{segundos}s</button>;
}
\`\`\`
`,
                flashcards: [
                    { front: "useRef vs useState", back: "Mudanças no state forçam um novo render da tela. Mudanças em ref.current NÃO alteram a tela, ocorrem em background." },
                    { front: "ref={...} no JSX", back: "Atributo especial para atrelar um elemento HTML do DOM (ex: <input>) à variável useRef." }
                ],
                quiz: {
                    question: "Por que você não deve usar `useRef` para guardar algo que deve aparecer visualmente na tela (ex: um contador visível)?",
                    options: [
                        { text: "Porque atualizar a propriedade `.current` do ref não avisa o React para atualizar o componente visualmente.", correct: true, feedback: "Exato! A tela ficaria congelada no valor inicial até que outro setState forçasse um render." },
                        { text: "Porque refs não suportam números.", correct: false, feedback: "Suportam qualquer tipo de dado." },
                        { text: "Porque refs são deletadas entre renders.", correct: false, feedback: "O oposto: eles sobrevivem intactos entre renders." }
                    ]
                }
            },
            {
                id: "m4w2-s7",
                title: "7. React.memo e Dependências de Objetos",
                content: `
O React re-renderiza um filho sempre que o pai renderiza. **React.memo** impede isso caso as props não tenham mudado.

Mas cuidado com objetos/arrays! No JS, \`{} === {}\` é sempre **falso** (referências de memória diferentes).

\`\`\`jsx
// Mesmo usando memo...
const BotaoMemo = React.memo(Botao);

function Pai() {
    // A cada render do Pai, o objeto {id:1} ganha novo endereço de memória
    // O memo do Filho acha que a prop mudou e re-renderiza igual!
    const estilo = { color: 'red' }; 
    
    // Solução: useMemo no objeto!
    const estiloMemo = useMemo(() => ({ color: 'red' }), []);

    return <BotaoMemo estilo={estiloMemo} />;
}
\`\`\`
`,
                flashcards: [
                    { front: "Igualdade Referencial (JS)", back: "Dois objetos idênticos visualmente não são o mesmo na memória. Isso 'quebra' o React.memo se passados diretamente." },
                    { front: "Uso combinado", back: "React.memo() no filho precisa de useMemo/useCallback no Pai para objetos/funções passados como props." }
                ],
                quiz: {
                    question: "Por que passar uma função inline `<Botao onClick={() => clica()} />` pode prejudicar componentes envelopados com `React.memo`?",
                    options: [
                        { text: "As Arrow functions disparam erros no React.memo.", correct: false, feedback: "Não disparam erros." },
                        { text: "Porque funções inline são recriadas a cada render com nova referência de memória, forçando o botão a re-renderizar.", correct: true, feedback: "Isso! Para o `memo` funcionar, a prop `onClick` teria que ser envolvida em um `useCallback`." },
                        { text: "React.memo não suporta a prop onClick.", correct: false, feedback: "Suporta qualquer prop." }
                    ]
                }
            },
            {
                id: "m4w2-s8",
                title: "8. useEffect Avançado (Race Conditions)",
                content: `
O que acontece se um \`useEffect\` faz um fetch demorado, o usuário muda de página rapidamente, e o fetch termina quando o componente já sumiu?
Erro: *Can't perform a React state update on an unmounted component.*

Use **AbortController** para cancelar requisições "fantasmas":

\`\`\`jsx
useEffect(() => {
    const controller = new AbortController();
    
    fetch('/api/dados', { signal: controller.signal })
        .then(res => res.json())
        .then(setDados);

    // Cleanup Function: cancela a requisição HTTP ativa
    // se o componente for destruído (unmounted) ou se o Effect rodar de novo.
    return () => {
        controller.abort();
    };
}, [idPesquisa]);
\`\`\`
`,
                flashcards: [
                    { front: "Race Condition", back: "Quando uma requisição HTTP velha termina DEPOIS de uma nova, sobrepondo o estado do usuário com dados obsoletos." },
                    { front: "AbortController", back: "API nativa do navegador para cancelar requests FETCH pendentes." },
                    { front: "Cleanup Function", back: "O return () => {} do useEffect. Roda quando o componente desmonta ou logo antes de o efeito rodar de novo." }
                ],
                quiz: {
                    question: "Qual problema visual o AbortController em useEffect resolve em barras de busca instantânea (typeahead)?",
                    options: [
                        { text: "Resolve travamento do navegador por excesso de DOM.", correct: false, feedback: "Resolve a rede, não a DOM." },
                        { text: "Evita que respostas de APIs demoradas cheguem fora de ordem. Ex: você digitou 'ABC', mas o request 'A' (que demorou mais) chega por último e sobrescreve a tela.", correct: true, feedback: "Fantástico! Race Conditions geram bugs bizarros onde o resultado final não bate com o input atual. Cancelar o request velho previne isso." },
                        { text: "Ele salva em cache as requisições.", correct: false, feedback: "Cancelar = deletar, não cachear." }
                    ]
                }
            }
        ],
        memoryPalace: {
            title: "Palácio da Memória: A Sala de Controle",
            content: `
Os Hooks são os **controles de uma sala de operações**:

- 🔁 **useState — O Painel de Controle:** Cada botão representa um dado da interface. Quando você pressiona (setState), o painel atualiza e a tela reflete instantaneamente.
- ⏰ **useEffect — O Agendador:** Programa ações para acontecerem após eventos. "Quando o operador entra na sala [montagem], ligue os sistemas. Quando sair [desmontagem], desligue-os."
- 📋 **Formulário Controlado — A Cópia Carbono:** Cada tecla digitada no campo cria uma cópia idêntica no estado React. Você não confia no papel original (DOM) — sempre consulta a cópia.
- ⚡ **useMemo/useCallback — A Cache da CPU:** Resultados de cálculos pesados ficam guardados. Só recalcula se os dados de entrada mudaram. Não refaz o que já foi feito.
            `
        },
        exam: [
            {
                question: "1. Como adicionar um item a um array no estado React corretamente?",
                options: [
                    "`estado.push(item); setEstado(estado)`",
                    "`setEstado([...estado, item])`",
                    "`setEstado(estado.add(item))`",
                    "`estado[estado.length] = item; setEstado(estado)`"
                ],
                correctIndex: 1
            },
            {
                question: "2. `useEffect(() => { fetchData() }, [id])` — o efeito executa:",
                options: [
                    "Apenas uma vez ao montar o componente.",
                    "Em toda re-renderização do componente.",
                    "Ao montar e sempre que `id` mudar.",
                    "Apenas quando o componente desmonta."
                ],
                correctIndex: 2
            },
            {
                question: "3. Qual o objetivo da Cleanup Function retornada pelo useEffect?",
                options: [
                    "Limpar os campos do formulário.",
                    "Cancelar subscriptions/timers/requests ao desmontar ou antes do próximo efeito.",
                    "Resetar o estado para o valor inicial.",
                    "Remover event listeners do DOM manualmente."
                ],
                correctIndex: 1
            },
            {
                question: "4. `useMemo` e `useCallback` sempre melhoram a performance?",
                options: [
                    "Sim — memorização sempre é mais rápida.",
                    "Não — têm overhead de comparação de dependências. Só valem em cenários específicos.",
                    "Sim, mas apenas com TypeScript.",
                    "Não — são apenas para código legado."
                ],
                correctIndex: 1
            }
        ]
    },

    "m4w3": {
        title: "Semana 3: React Router e Context API",
        subtitle: "Navegação e Estado Global",
        studies: [
            {
                id: "m4w3-s1",
                title: "1. React Router — Navegação SPA",
                content: `
**React Router v6** gerencia navegação sem recarregar a página:

\`\`\`bash
npm install react-router-dom
\`\`\`

\`\`\`jsx
// main.jsx
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);

// App.jsx
import { Routes, Route, Link, Navigate } from 'react-router-dom';

function App() {
    return (
        <>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/usuarios">Usuários</Link>
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/usuarios" element={<Usuarios />} />
                <Route path="/usuarios/:id" element={<PerfilUsuario />} />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </>
    );
}
\`\`\`
`,
                flashcards: [
                    { front: "BrowserRouter", back: "Provedor que habilita o roteamento baseado no histórico do browser (URL real)." },
                    { front: "Route path=':id'", back: "Parâmetro dinâmico na URL. Acessado via `useParams()` no componente." },
                    { front: "Navigate", back: "Componente que redireciona para outra rota ao ser renderizado." }
                ],
                quiz: {
                    question: "Por que usar `<Link to='/usuarios'>` em vez de `<a href='/usuarios'>`?",
                    options: [
                        { text: "Link tem estilo padrão melhor.", correct: false, feedback: "Não é sobre estilo." },
                        { text: "Link navega sem recarregar a página — mantém a SPA e o estado do React.", correct: true, feedback: "Correto! `<a>` causa full page reload, destruindo o estado React. Link usa o History API." },
                        { text: "a tag não funciona dentro do React Router.", correct: false, feedback: "Funciona, mas com comportamento de reload indesejado em SPA." }
                    ]
                }
            },
            {
                id: "m4w3-s2",
                title: "2. useParams, useNavigate e useLocation",
                content: `
Hooks do React Router para interagir com a navegação:

\`\`\`jsx
import { useParams, useNavigate, useLocation } from 'react-router-dom';

function PerfilUsuario() {
    const { id } = useParams(); // /usuarios/42 → id = "42"
    const navigate = useNavigate();
    const location = useLocation(); // objeto da URL atual

    const handleVoltar = () => navigate(-1); // Volta na história
    const handleIr = () => navigate('/usuarios', {
        state: { mensagem: 'Perfil salvo!' }
    });

    console.log(location.pathname); // "/usuarios/42"
    console.log(location.state);    // { mensagem: ... }

    return (
        <div>
            <h1>Usuário #{id}</h1>
            <button onClick={handleVoltar}>Voltar</button>
        </div>
    );
}
\`\`\`
`,
                flashcards: [
                    { front: "useParams()", back: "Retorna os parâmetros dinâmicos da URL atual como objeto." },
                    { front: "useNavigate()", back: "Retorna função para navegar programaticamente. navigate(-1) volta uma página." },
                    { front: "useLocation()", back: "Retorna informações da URL atual: pathname, search, hash, state." }
                ],
                quiz: {
                    question: "Se a rota é `/produtos/:categoria/:id`, o que `useParams()` retorna em `/produtos/eletronicos/42`?",
                    options: [
                        { text: "['eletronicos', '42']", correct: false, feedback: "useParams retorna objeto, não array." },
                        { text: "{ categoria: 'eletronicos', id: '42' }", correct: true, feedback: "Correto! Os nomes dos params são as chaves do objeto retornado." },
                        { text: "{ path: '/produtos/eletronicos/42' }", correct: false, feedback: "Isso seria useLocation().pathname." }
                    ]
                }
            },
            {
                id: "m4w3-s3",
                title: "3. Context API — Estado Global Simples",
                content: `
**Context API** resolve o problema de **prop drilling** — passar props por múltiplos níveis.

\`\`\`jsx
// contexts/AuthContext.jsx
import { createContext, useContext, useState } from 'react';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
    const [usuario, setUsuario] = useState(null);

    const login = (dados) => setUsuario(dados);
    const logout = () => setUsuario(null);

    return (
        <AuthContext.Provider value={{ usuario, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

// Hook customizado (encapsula o useContext)
export function useAuth() {
    const ctx = useContext(AuthContext);
    if (!ctx) throw new Error('useAuth deve ser usado dentro de AuthProvider');
    return ctx;
}

// Uso em qualquer componente:
function Header() {
    const { usuario, logout } = useAuth();
    return <button onClick={logout}>Sair ({usuario?.nome})</button>;
}
\`\`\`
`,
                flashcards: [
                    { front: "Prop Drilling", back: "Anti-pattern de passar props por múltiplos componentes intermediários que não as usam." },
                    { front: "createContext()", back: "Cria um contexto React com um valor padrão." },
                    { front: "Custom Hook (useAuth)", back: "Encapsula useContext + validação de provider — padrão de qualidade em Context API." }
                ],
                quiz: {
                    question: "Quando usar Context API em vez de apenas props?",
                    options: [
                        { text: "Para qualquer dado compartilhado entre 2 componentes.", correct: false, feedback: "Para 2 componentes próximos, elevar estado (lifting state up) é mais simples." },
                        { text: "Para dados globais acessados em muitos componentes em diferentes níveis (ex: usuário logado, tema).", correct: true, feedback: "Correto! Context resolve prop drilling em dados verdadeiramente globais." },
                        { text: "Context sempre substitui Redux.", correct: false, feedback: "Context é ótimo para estado simples. Redux/Zustand escalam melhor para estados complexos." }
                    ]
                }
            },
            {
                id: "m4w3-s4",
                title: "4. Rotas Protegidas (Protected Routes)",
                content: `
Componente que redireciona usuários não autenticados:

\`\`\`jsx
// components/ProtectedRoute.jsx
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

function ProtectedRoute({ children }) {
    const { usuario } = useAuth();
    const location = useLocation();

    if (!usuario) {
        // Salva a rota tentada para redirecionar após login
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return children;
}

// Uso no App.jsx:
<Routes>
    <Route path="/login" element={<Login />} />
    <Route path="/dashboard" element={
        <ProtectedRoute>
            <Dashboard />
        </ProtectedRoute>
    } />
</Routes>
\`\`\`
`,
                flashcards: [
                    { front: "Protected Route", back: "Componente wrapper que verifica autenticação antes de renderizar a rota." },
                    { front: "replace em Navigate", back: "Substitui a entrada no histórico em vez de adicionar — usuário não pode voltar para a rota protegida." },
                    { front: "state={{ from: location }}", back: "Passa a rota original para que o login possa redirecionar de volta após autenticação." }
                ],
                quiz: {
                    question: "Por que passar `replace` no Navigate do ProtectedRoute?",
                    options: [
                        { text: "Para tornar a navegação mais rápida.", correct: false, feedback: "Performance não é o motivo." },
                        { text: "Para que o botão 'Voltar' não leve o usuário de volta à rota protegida após ser redirecionado.", correct: true, feedback: "Correto! Sem replace, o histórico teria: /dashboard → /login. Com replace: apenas /login." },
                        { text: "Replace é obrigatório com Navigate.", correct: false, feedback: "Replace é opcional — é uma escolha de UX." }
                    ]
                }
            },
            {
                id: "m4w3-s5",
                title: "5. Roteamento Aninhado e Outlet",
                content: `
Páginas com layouts compartilhados (como uma tela de Dashboard com sidebar fixa onde só o centro muda) usam Roteamento Aninhado.

\`\`\`jsx
// App.jsx
<Routes>
    <Route path="/admin" element={<AdminLayout />}>
        {/* Renderizadas DENTRO do Layout */}
        <Route index element={<Estatisticas />} /> 
        <Route path="users" element={<UserList />} />
    </Route>
</Routes>

// AdminLayout.jsx
import { Outlet } from 'react-router-dom';

function AdminLayout() {
    return (
        <div className="flex">
            <Sidebar fixa />
            <main>
                <Outlet /> {/* Aqui renderizam as rotas filhas! */}
            </main>
        </div>
    );
}
\`\`\`
`,
                flashcards: [
                    { front: "<Outlet />", back: "Componente placeholder do React Router DOM. Define ONDE os componentes das sub-rotas serão renderizados." },
                    { front: "Nested Routes", back: "Rotas definidas dentro de outras rotas. Permitem layouts complexos sem duplicação de código." }
                ],
                quiz: {
                    question: "No contexto de roteamento aninhado, o que a prop especial `index` em uma Route significa?",
                    options: [
                        { text: "Gera um sitemap para os motores de busca.", correct: false, feedback: "Não tem relação com SEO." },
                        { text: "Diz que essa é a rota filha padrão que renderiza no <Outlet /> quando a URL bate exatamente com o caminho do pai.", correct: true, feedback: "Exato! Se o caminho pai é '/admin', a rota index é renderizada exatamente no '/admin'." },
                        { text: "Coloca a rota na memória RAM.", correct: false, feedback: "Invenção." }
                    ]
                }
            },
            {
                id: "m4w3-s6",
                title: "6. Lazy Loading e Suspense",
                content: `
O Vite empacota todo o seu JS num arquivo gigante. Se o site tiver 50 páginas, o usuário baixa as 50 na tela inicial. **Lazy Loading (Code Splitting)** resolve isso dividindo os arquivos.

\`\`\`jsx
import { lazy, Suspense } from 'react';
// Importação dinâmica (gera arquivo JS separado!)
const TelaPesada = lazy(() => import('./pages/TelaPesada'));

function App() {
    return (
        // Suspense exibe fallback enquanto o JS extra não baixa
        <Suspense fallback={<Spinner />}>
            <Routes>
                <Route path="/pesada" element={<TelaPesada />} />
            </Routes>
        </Suspense>
    );
}
\`\`\`
`,
                flashcards: [
                    { front: "React.lazy()", back: "Permite importar dinamicamente componentes apenas quando forem renderizados na tela." },
                    { front: "<Suspense>", back: "Componente que 'pausa' a renderização e mostra um fallback (ex: carregando) enquanto o lazy component está baixando." },
                    { front: "Code Splitting", back: "Técnica de quebrar o 'bundle.js' gigante em pequenos pedaços (chunks) carregados sob demanda." }
                ],
                quiz: {
                    question: "O que acontece se você usar `React.lazy()` mas esquecer de envelopar o uso do componente em um `<Suspense>`?",
                    options: [
                        { text: "O React trava com um erro fatal reclamando da falta de um Suspense boundary.", correct: true, feedback: "Correto! O React não sabe o que colocar na tela durante o download da rede, forçando você a providenciar o Suspense." },
                        { text: "A tela fica preta silenciosamente até carregar.", correct: false, feedback: "O React lança erro, não fica em silêncio." },
                        { text: "O Vite ignora o lazy e junta tudo no mesmo arquivo.", correct: false, feedback: "A compilação não afeta o requirement runtime do Suspense." }
                    ]
                }
            },
            {
                id: "m4w3-s7",
                title: "7. useReducer: Estados Complexos",
                content: `
Quando você tem vários \`useState\` dependendo uns dos outros (ex: Carrinho de Compras), usar \`useReducer\` concentra toda a lógica de alteração de estado em um só lugar.

\`\`\`jsx
// 1. A Função Redutora (Pura)
function carrinhoReducer(estado, action) {
    switch(action.type) {
        case 'ADD':
            return { qtd: estado.qtd + 1 };
        case 'ZERAR':
            return { qtd: 0 };
        default:
            return estado;
    }
}

// 2. Uso no Componente
function Carrinho() {
    const [estado, dispatch] = useReducer(carrinhoReducer, { qtd: 0 });

    return (
        <button onClick={() => dispatch({ type: 'ADD' })}>
            Carrinho ({estado.qtd})
        </button>
    );
}
\`\`\`
`,
                flashcards: [
                    { front: "Reducer", back: "Uma função pura que recebe o estado atual e uma Ação, e retorna o NOVO estado." },
                    { front: "Dispatch", back: "Função usada para 'despachar' ações para o reducer. É a única forma de engatilhar mudanças." },
                    { front: "Action", back: "Um objeto JS (ex: { type: 'ADICIONAR', payload: {id: 1} }) descrevendo O QUE aconteceu." }
                ],
                quiz: {
                    question: "Qual o erro fatal de uma função Reducer ao modificar o estado?",
                    options: [
                        { text: "Mutar o estado original (ex: `estado.qtd += 1; return estado`). O React depende de imutabilidade (objetos novos) para detectar mudanças.", correct: true, feedback: "Excelente! Reducers DEVEM retornar objetos/arrays completamente novos, geralmente usando spread operator `return { ...estado, qtd: novo }`." },
                        { text: "Retornar apenas uma string.", correct: false, feedback: "Pode retornar string, dependendo do estado." },
                        { text: "Realizar `dispatch` dentro do reducer.", correct: false, feedback: "Você nem tem acesso ao dispatch dentro do reducer." }
                    ]
                }
            },
            {
                id: "m4w3-s8",
                title: "8. Redux Toolkit (Visão Geral)",
                content: `
Context API + useReducer resolve estados médios. Mas para aplicações enormes, **Redux Toolkit (RTK)** é a norma corporativa.

O RTK eliminou o boilerplate do Redux antigo usando "Slices":

\`\`\`javascript
import { createSlice } from '@reduxjs/toolkit';

const carrinhoSlice = createSlice({
    name: 'carrinho',
    initialState: { itens: [] },
    reducers: {
        // O RTK usa Immer por baixo dos panos!
        // Podemos "mutar" o estado direto (código mais limpo)
        adicionarItem: (state, action) => {
            state.itens.push(action.payload);
        }
    }
});

export const { adicionarItem } = carrinhoSlice.actions;
export default carrinhoSlice.reducer;
\`\`\`
`,
                flashcards: [
                    { front: "Redux", back: "Gerenciador de estado global robusto. Usa uma Store única para toda a aplicação." },
                    { front: "Slice (RTK)", back: "Uma fatia do seu estado (ex: authSlice, cartSlice). Junta estado inicial, reducers e actions num só lugar." },
                    { front: "Immer.js", back: "Biblioteca que o RTK usa invisivelmente. Permite escrever código que 'muta' o state (push, =, etc), mas gera código imutável no fundo." }
                ],
                quiz: {
                    question: "Por que podemos usar `state.itens.push()` em um reducer do Redux Toolkit sem quebrar a regra de imutabilidade do React?",
                    options: [
                        { text: "Porque o Redux Toolkit não usa as regras do React.", correct: false, feedback: "Usa o react-redux que obedece às regras." },
                        { text: "Porque o RTK utiliza a biblioteca Immer por trás dos bastidores, que intercepta as 'mutações falsas' e cria uma cópia imutável perfeita automaticamente.", correct: true, feedback: "Isso mesmo! O código fica muito mais limpo de se ler sem a loucura dos spread operators `...`." },
                        { text: "Porque push() é imutável em JS.", correct: false, feedback: "Push() altera o array original em JS." }
                    ]
                }
            }
        ],
        memoryPalace: {
            title: "Palácio da Memória: O Shopping Center",
            content: `
O React Router é como um **shopping center**:

- 🗺️ **O Mapa do Shopping (Routes):** Define onde cada loja (página) fica. Cada corredor tem um endereço (path).
- 🚶 **As Escadas Rolantes (Link):** Levam você de um andar para o outro sem precisar sair e entrar novamente no shopping (sem page reload).
- 🔢 **O Número da Loja (useParams):** "/lojas/42" — o 42 identifica exatamente qual loja da rede.
- 🔑 **O Segurança (ProtectedRoute):** Na entrada do VIP Lounge, verifica o crachá. Sem credencial, você vai para a recepção (login) — e guarda onde queria ir para te devolver depois.
- 📻 **O Sistema de Comunicação Interna (Context API):** Em vez de mandar um funcionário de uma loja para outra com um bilhete (prop drilling), usa o rádio interno para avisar todos de uma vez.
            `
        },
        exam: [
            {
                question: "1. Qual hook do React Router acessa parâmetros dinâmicos da URL como `/usuarios/:id`?",
                options: ["useLocation()", "useParams()", "useRouteMatch()", "usePathname()"],
                correctIndex: 1
            },
            {
                question: "2. O que é `prop drilling`?",
                options: [
                    "Técnica de perfurar o DOM com JavaScript.",
                    "Passar props por múltiplos componentes intermediários que não as utilizam.",
                    "Otimização de props com useMemo.",
                    "Desestruturação de props aninhadas."
                ],
                correctIndex: 1
            },
            {
                question: "3. `<Route path='*' element={<Navigate to='/' />} />` serve para:",
                options: [
                    "Definir a rota padrão da aplicação.",
                    "Capturar todas as URLs não mapeadas e redirecionar para home (404 handler).",
                    "Permitir qualquer componente na rota.",
                    "Criar rotas aninhadas."
                ],
                correctIndex: 1
            },
            {
                question: "4. Por que criar um custom hook `useAuth()` em vez de usar `useContext(AuthContext)` diretamente?",
                options: [
                    "useContext não funciona fora de componentes.",
                    "Para encapsular a lógica, validar que o Provider existe e melhorar a API de consumo.",
                    "Custom hooks são mais rápidos que useContext.",
                    "Para evitar re-renders."
                ],
                correctIndex: 1
            }
        ]
    },

    "m4w4": {
        title: "Semana 4: Integração com APIs REST",
        subtitle: "Conectando Front-end ao Back-end",
        studies: [
            {
                id: "m4w4-s1",
                title: "1. Fetch API e Axios",
                content: `
Duas opções para fazer requisições HTTP no React:

**Fetch (nativo):**
\`\`\`jsx
async function buscarUsuarios() {
    const res = await fetch('http://localhost:8000/usuarios/', {
        headers: { 'Authorization': 'Bearer token123' }
    });
    if (!res.ok) throw new Error(\`HTTP \${res.status}\`);
    return res.json();
}
\`\`\`

**Axios (biblioteca — mais recursos):**
\`\`\`bash
npm install axios
\`\`\`

\`\`\`jsx
import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:8000',
    headers: { 'Content-Type': 'application/json' }
});

// Interceptor: adiciona token automaticamente
api.interceptors.request.use(config => {
    const token = localStorage.getItem('token');
    if (token) config.headers.Authorization = \`Bearer \${token}\`;
    return config;
});
\`\`\`
`,
                flashcards: [
                    { front: "res.ok", back: "true quando status HTTP está entre 200-299. Fetch não lança erro automaticamente em 4xx/5xx." },
                    { front: "axios.create()", back: "Cria instância Axios com configurações base (URL, headers). Reutilizável em toda a app." },
                    { front: "Interceptors", back: "Middleware do Axios que roda antes de toda request/response — ideal para auth tokens." }
                ],
                quiz: {
                    question: "Por que verificar `if (!res.ok)` ao usar fetch?",
                    options: [
                        { text: "fetch lança erro automaticamente em qualquer status.", correct: false, feedback: "Ao contrário do Axios, fetch NUNCA lança erro em respostas 4xx/5xx." },
                        { text: "Porque fetch só lança erro em falhas de rede — respostas 404/500 são consideradas 'sucesso' para o fetch.", correct: true, feedback: "Correto! Sem checar res.ok, um 404 passaria silenciosamente como se fosse 200." },
                        { text: "Para verificar se o JSON é válido.", correct: false, feedback: "JSON inválido é tratado separadamente no .json()." }
                    ]
                }
            },
            {
                id: "m4w4-s2",
                title: "2. Custom Hook para Chamadas de API",
                content: `
Extraia a lógica de fetch em um custom hook reutilizável:

\`\`\`jsx
// hooks/useFetch.js
import { useState, useEffect } from 'react';

export function useFetch(url) {
    const [dados, setDados] = useState(null);
    const [carregando, setCarregando] = useState(true);
    const [erro, setErro] = useState(null);

    useEffect(() => {
        let cancelado = false;

        setCarregando(true);
        setErro(null);

        fetch(url)
            .then(r => { if (!r.ok) throw new Error(\`HTTP \${r.status}\`); return r.json(); })
            .then(data => { if (!cancelado) setDados(data); })
            .catch(err => { if (!cancelado) setErro(err.message); })
            .finally(() => { if (!cancelado) setCarregando(false); });

        return () => { cancelado = true; }; // Cleanup: previne setState em componente desmontado
    }, [url]);

    return { dados, carregando, erro };
}

// Uso:
function Usuarios() {
    const { dados, carregando, erro } = useFetch('/api/usuarios/');
    if (carregando) return <Spinner />;
    if (erro) return <Erro mensagem={erro} />;
    return <Lista itens={dados} />;
}
\`\`\`
`,
                flashcards: [
                    { front: "Custom Hook", back: "Função JS que começa com 'use' e encapsula lógica com hooks — reutilizável entre componentes." },
                    { front: "cancelado flag", back: "Previne setState em componente já desmontado — evita memory leaks e warnings do React." }
                ],
                quiz: {
                    question: "Para que serve a variável `cancelado` no cleanup do useEffect?",
                    options: [
                        { text: "Para cancelar a requisição HTTP em andamento.", correct: false, feedback: "fetch nativo não tem cancelamento direto — para isso, use AbortController." },
                        { text: "Para evitar atualizar o estado de um componente que já foi desmontado da tela.", correct: true, feedback: "Correto! Se o usuário navegar antes da resposta chegar, o componente já não existe — setState causaria warning/leak." },
                        { text: "Para pausar o timer do useEffect.", correct: false, feedback: "useEffect não tem timer interno." }
                    ]
                }
            },
            {
                id: "m4w4-s3",
                title: "3. Gerenciamento de Estado de Server (React Query)",
                content: `
**TanStack Query (React Query)** simplifica drásticamente o gerenciamento de dados do servidor:

\`\`\`bash
npm install @tanstack/react-query
\`\`\`

\`\`\`jsx
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

// Buscar dados
function Usuarios() {
    const { data, isLoading, error } = useQuery({
        queryKey: ['usuarios'],
        queryFn: () => fetch('/api/usuarios/').then(r => r.json())
    });

    if (isLoading) return <Spinner />;
    if (error) return <p>Erro: {error.message}</p>;
    return <Lista itens={data} />;
}

// Mutação (criar/atualizar/deletar)
function FormUsuario() {
    const queryClient = useQueryClient();
    const mutation = useMutation({
        mutationFn: (dados) => fetch('/api/usuarios/', {
            method: 'POST', body: JSON.stringify(dados)
        }).then(r => r.json()),
        onSuccess: () => queryClient.invalidateQueries({ queryKey: ['usuarios'] })
    });

    return <button onClick={() => mutation.mutate({ nome: 'Ana' })}>Criar</button>;
}
\`\`\`
`,
                flashcards: [
                    { front: "useQuery", back: "Hook que busca dados, gerencia cache, loading e refetch automaticamente." },
                    { front: "useMutation", back: "Hook para operações que modificam dados (POST/PUT/DELETE) com callbacks de sucesso/erro." },
                    { front: "invalidateQueries", back: "Marca queries como stale, forçando refetch automático — sincroniza UI após mutação." }
                ],
                quiz: {
                    question: "Por que chamar `invalidateQueries` após uma mutação bem-sucedida?",
                    options: [
                        { text: "Para limpar o cache completamente.", correct: false, feedback: "Invalida, não limpa — o dado permanece até o refetch." },
                        { text: "Para forçar a UI a buscar os dados atualizados do servidor, refletindo a mudança.", correct: true, feedback: "Correto! Sem isso, a lista de usuários não mostraria o novo usuário criado." },
                        { text: "Para desconectar do servidor.", correct: false, feedback: "invalidateQueries é apenas sobre sincronização de cache." }
                    ]
                }
            },
            {
                id: "m4w4-s4",
                title: "4. CORS, Variáveis de Ambiente e Proxy",
                content: `
**CORS** (Cross-Origin Resource Sharing) — o browser bloqueia requests de origens diferentes por segurança.

**No Back-end (FastAPI):**
\`\`\`python
from fastapi.middleware.cors import CORSMiddleware

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # URL do Vite
    allow_methods=["*"],
    allow_headers=["*"],
)
\`\`\`

**Variáveis de Ambiente no Vite:**
\`\`\`bash
# .env.local (nunca commitar!)
VITE_API_URL=http://localhost:8000
\`\`\`

\`\`\`jsx
const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL  // acesso no código
});
\`\`\`

> ⚠️ No Vite, variáveis devem começar com **VITE_** para serem expostas ao browser.
`,
                flashcards: [
                    { front: "CORS", back: "Mecanismo de segurança do browser que bloqueia requests entre origens diferentes sem permissão explícita." },
                    { front: "VITE_", back: "Prefixo obrigatório para expor variáveis de ambiente ao código JavaScript no Vite." },
                    { front: "import.meta.env", back: "Objeto que contém as variáveis de ambiente disponíveis no bundle do Vite." }
                ],
                quiz: {
                    question: "Por que um `fetch('http://localhost:8000/api')` feito no browser em `localhost:5173` pode falhar?",
                    options: [
                        { text: "fetch não suporta localhost.", correct: false, feedback: "fetch suporta qualquer URL." },
                        { text: "CORS: o browser bloqueia requests de origens diferentes sem o header Access-Control-Allow-Origin.", correct: true, feedback: "Correto! 5173 e 8000 são portas diferentes — origens distintas. O FastAPI precisa ter CORS configurado." },
                        { text: "O FastAPI não aceita requests HTTP.", correct: false, feedback: "FastAPI é uma API HTTP — aceita qualquer request com CORS configurado." }
                    ]
                }
            },
            {
                id: "m4w4-s5",
                title: "5. Axios Interceptors (Refresh Token)",
                content: `
Interceptors interceptam *todas* as requisições/respostas antes delas saírem ou serem processadas pelo seu componente. Perfeito para injetar Token ou fazer lógica de Refresh Token global.

\`\`\`javascript
import axios from 'axios';

const api = axios.create({ baseURL: '/api' });

// Antes da requisição SAIR: injeta Token no header
api.interceptors.request.use(config => {
    const token = localStorage.getItem('token');
    if (token) config.headers.Authorization = \`Bearer \${token}\`;
    return config;
});

// Antes da resposta CHEGAR no componente: intercepta 401
api.interceptors.response.use(
    resposta => resposta, // Se deu certo, passa adiante
    erro => {
        if (erro.response?.status === 401) {
            // Lógica de deslogar usuário ou pedir novo token silenciosamente
            window.location.href = '/login';
        }
        return Promise.reject(erro);
    }
);
\`\`\`
`,
                flashcards: [
                    { front: "Axios Interceptor", back: "Middleware no Front-end que roda antes do request sair ou depois da resposta chegar (antes do .then/.catch)." },
                    { front: "Refresh Token Flow", back: "Se API retornar 401 (token expirou), interceptor paralisa requests, pede token novo no background e tenta novamente." }
                ],
                quiz: {
                    question: "Qual o benefício de injetar o Header de Authorization via Interceptor em vez de manualmente no componente?",
                    options: [
                        { text: "É a única forma de enviar headers via Axios.", correct: false, feedback: "Você pode passar headers por parâmetro." },
                        { text: "Garante DRY (Don't Repeat Yourself). Não é necessário espalhar a leitura do LocalStorage e código de Auth por 50 componentes.", correct: true, feedback: "Correto! O componente chama apenas api.get('/user') e não sabe nem se preocupa como a autenticação foi feita." },
                        { text: "É mais seguro contra hackers.", correct: false, feedback: "Os hackers têm acesso ao interceptor pelo código JS cliente." }
                    ]
                }
            },
            {
                id: "m4w4-s6",
                title: "6. TanStack Query: Mutações (POST/PUT)",
                content: `
Enquanto \`useQuery\` é para GET, \`useMutation\` é para operações que alteram o banco.

\`\`\`jsx
import { useMutation, useQueryClient } from '@tanstack/react-query';

function NovoUsuario() {
    const queryClient = useQueryClient();

    const mutacao = useMutation({
        mutationFn: (novoNome) => axios.post('/api/users', { nome: novoNome }),
        // Executado se a API deu 200 OK
        onSuccess: () => {
            // Força a query "lista-usuarios" do useQuery a ser invalidada.
            // O TanStack automaticamente fará um refetch no background!
            queryClient.invalidateQueries(['lista-usuarios']);
        }
    });

    return (
        <button onClick={() => mutacao.mutate("João")} disabled={mutacao.isLoading}>
            {mutacao.isLoading ? 'Salvando...' : 'Salvar João'}
        </button>
    );
}
\`\`\`
`,
                flashcards: [
                    { front: "useMutation", back: "Hook do React Query usado para operações CUD (Create, Update, Delete)." },
                    { front: "invalidateQueries", back: "Marca dados do cache como obsoletos. Força a tela a refazer a busca no banco sem precisar gerenciar states ou useEffect." }
                ],
                quiz: {
                    question: "O que acontece na interface logo após o comando `invalidateQueries(['lista-usuarios'])` ser executado no OnSuccess?",
                    options: [
                        { text: "O site inteiro é recarregado.", correct: false, feedback: "Invalidar quer dizer recarregar por baixo dos panos (AJAX), não F5." },
                        { text: "Os componentes que usam a query 'lista-usuarios' refazem o fetch instantaneamente, atualizando a tabela na tela de forma reativa.", correct: true, feedback: "Mágica pura! Sem passar props ou context, a tabela atualiza sozinha refletindo a nova adição." },
                        { text: "O cache fica bloqueado.", correct: false, feedback: "O cache é apenas marcado como velho (stale)." }
                    ]
                }
            },
            {
                id: "m4w4-s7",
                title: "7. React Query: Infinite Scroll",
                content: `
O \`useInfiniteQuery\` do TanStack lida matematicamente com listas que crescem dinamicamente ao chegar no final da página.

\`\`\`jsx
const { data, fetchNextPage, hasNextPage } = useInfiniteQuery({
    queryKey: ['projetos'],
    // pageParam é injetado automaticamente
    queryFn: async ({ pageParam = 1 }) => {
        const res = await axios.get(\`/api/projetos?page=\${pageParam}\`);
        return res.data;
    },
    // Lógica para descobrir se tem mais dados
    getNextPageParam: (lastPage, allPages) => {
        return lastPage.tem_mais ? allPages.length + 1 : undefined;
    }
});

return (
    <div>
        {data.pages.map((pagina) => 
            pagina.itens.map(item => <Item key={item.id} />)
        )}
        <button onClick={() => fetchNextPage()} disabled={!hasNextPage}>
            Carregar Mais
        </button>
    </div>
);
\`\`\`
`,
                flashcards: [
                    { front: "useInfiniteQuery", back: "Hook para paginação baseada em 'Carregar mais...' ou Infinite Scroll. Guarda um array de arrays de páginas." },
                    { front: "getNextPageParam", back: "Função que você cria para analisar o JSON do back-end e deduzir se há uma próxima página ou se chegou ao fim do scroll." }
                ],
                quiz: {
                    question: "Diferente de uma query normal que retorna os dados direto, qual a estrutura de dados retornada na variável `data.pages` pelo `useInfiniteQuery`?",
                    options: [
                        { text: "Um Array contendo os Arrays (ou objetos) de resposta de CADA página carregada até o momento.", correct: true, feedback: "Correto! É um array multidimensional. Por isso no JSX você vê dois `.map()` aninhados (mapear a página, e mapear os itens dentro da página)." },
                        { text: "Uma string gigante.", correct: false, feedback: "Retorna estruturas em JSON." },
                        { text: "Apenas a última página.", correct: false, feedback: "Isso destruiria o conceito do 'carregar mais' mantendo os itens antigos na tela." }
                    ]
                }
            },
            {
                id: "m4w4-s8",
                title: "8. Forms Profissionais: React Hook Form + Zod",
                content: `
Formulários no React requerem dezenas de \`useState\` e re-renders lentos. O **React Hook Form (RHF)** usa abordagens *Não-Controladas* otimizadas sob os panos. O **Zod** faz a validação robusta.

\`\`\`bash
npm install react-hook-form @hookform/resolvers zod
\`\`\`

\`\`\`jsx
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

// 1. Schema do Zod (parecido com Pydantic!)
const schema = z.object({
  email: z.string().email("E-mail inválido"),
  senha: z.string().min(6, "Mínimo 6 chars")
});

function FormLogin() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(schema)
  });

  const onSubmit = data => console.log(data); // data é tipado e validado!

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* O register injeta onChange, onBlur e ref */}
      <input {...register("email")} />
      {errors.email && <p>{errors.email.message}</p>}

      <input type="password" {...register("senha")} />
      {errors.senha && <p>{errors.senha.message}</p>}
      
      <button>Login</button>
    </form>
  );
}
\`\`\`
`,
                flashcards: [
                    { front: "React Hook Form (RHF)", back: "Biblioteca de formulários performática. Evita re-renders a cada tecla combinando refs locais do DOM." },
                    { front: "Zod", back: "Biblioteca de declaração e validação de schemas em JS/TS. É o 'Pydantic' do ecossistema TypeScript." },
                    { front: "{...register('campo')}", back: "Atrela o elemento <input> do HTML ao controle interno do React Hook Form via spread operator." }
                ],
                quiz: {
                    question: "Qual o principal problema da abordagem clássica (useState + onChange em todos os campos) que o React Hook Form resolve brilhantemente?",
                    options: [
                        { text: "Performance: ao digitar num formulário de 30 inputs num cadastro gigante usando a abordagem clássica, a página inteira re-renderiza a cada tecla pressionada.", correct: true, feedback: "Correto. O RHF se baseia em hooks e DOM refs para isolar essas renderizações e manter a tela extremamente lisa." },
                        { text: "O setState era complexo demais de se escrever.", correct: false, feedback: "setState é simples, mas ele pune a performance global do componente." },
                        { text: "O React clássico não deixava usar a tag <form>.", correct: false, feedback: "Ele permite a tag form normalmente." }
                    ]
                }
            }
        ],
        memoryPalace: {
            title: "Palácio da Memória: A Central de Encomendas",
            content: `
A integração com APIs é como uma **central de encomendas**:

- 📦 **O Pedido (fetch/axios):** Você faz o pedido (request). Axios é o serviço premium com rastreamento automático (interceptors). Fetch é o serviço básico — você mesmo confere se chegou certo (res.ok).
- 🏷️ **O Rastreio (Custom Hook useFetch):** Em vez de ligar toda hora para saber do pedido, você tem uma tela que atualiza automaticamente: "carregando → chegou / falhou."
- 🏭 **O Armazém Inteligente (React Query):** Guarda os pedidos que já chegaram em cache. Quando pede de novo, já tem guardado — só busca novo se expirar. E quando um pedido muda (mutation), o armazém se atualiza sozinho.
- 🛂 **A Alfândega (CORS):** Se o pedido vem de uma origem diferente (outra porta), precisa de autorização explícita. Sem o carimbo (Access-Control-Allow-Origin), o pedido é retido.
            `
        },
        exam: [
            {
                question: "1. Por que fetch não lança erro automaticamente em respostas 404 ou 500?",
                options: [
                    "É um bug do JavaScript.",
                    "fetch considera qualquer resposta do servidor como 'sucesso de rede' — apenas falhas de conexão são erros.",
                    "fetch lança erro apenas em respostas 500.",
                    "Porque o JSON é inválido nessas respostas."
                ],
                correctIndex: 1
            },
            {
                question: "2. Qual a vantagem de um custom hook `useFetch` em vez de copiar o useEffect em cada componente?",
                options: [
                    "custom hooks são mais rápidos.",
                    "Reutilização da lógica de loading/error/cleanup em qualquer componente com uma linha de código.",
                    "React exige custom hooks para chamadas de API.",
                    "Evita o uso de useEffect."
                ],
                correctIndex: 1
            },
            {
                question: "3. O que `invalidateQueries({ queryKey: ['usuarios'] })` faz no React Query?",
                options: [
                    "Apaga os dados de usuários do cache permanentemente.",
                    "Marca a query como desatualizada, forçando refetch na próxima renderização.",
                    "Cancela todas as queries em andamento.",
                    "Reinicia o QueryClient."
                ],
                correctIndex: 1
            },
            {
                question: "4. Para acessar uma variável de ambiente no código Vite, ela deve:",
                options: [
                    "Começar com `REACT_APP_`.",
                    "Estar no arquivo `.env.production`.",
                    "Começar com `VITE_` e ser acessada via `import.meta.env`.",
                    "Ser definida no `package.json`."
                ],
                correctIndex: 2
            }
        ]
    },

    // ==========================================
    // MÊS 5 — DOCKER + DEPLOY
    // ==========================================
    "m5w1": {
        title: "Semana 1: Docker Fundamentos",
        subtitle: "Seu Código Roda em Qualquer Lugar",
        studies: [
            {
                id: "m5w1-s1",
                title: "1. O Problema que Docker Resolve",
                content: `
**"Funciona na minha máquina"** — a frase mais temida em times de desenvolvimento.

**Sem Docker:** Cada desenvolvedor tem versões diferentes de Python, Node, PostgreSQL. Deploy em produção falha porque o ambiente é diferente.

**Com Docker:** A aplicação e **todo o seu ambiente** (linguagem, dependências, configurações) ficam dentro de um **container**. Você envia o container — não apenas o código.

**Conceitos fundamentais:**

| Conceito | Analogia | Descrição |
|----------|----------|-----------|
| **Image** | Receita de bolo | Blueprint imutável do ambiente |
| **Container** | Bolo assado | Instância em execução de uma image |
| **Dockerfile** | Lista de ingredientes | Instruções para criar uma image |
| **Registry** | Padaria | Repositório de images (Docker Hub) |

\`\`\`bash
# Verificar instalação
docker --version
docker run hello-world
\`\`\`
`,
                flashcards: [
                    { front: "Container", back: "Processo isolado com seu próprio filesystem, rede e recursos. Instância de uma image." },
                    { front: "Image", back: "Blueprint imutável e em camadas. Contém OS base + dependências + código + config." },
                    { front: "Registry (Docker Hub)", back: "Repositório remoto de images. Como o GitHub, mas para imagens Docker." }
                ],
                quiz: {
                    question: "Qual a diferença entre uma Docker Image e um Container?",
                    options: [
                        { text: "São a mesma coisa com nomes diferentes.", correct: false, feedback: "São conceitos distintos e fundamentais." },
                        { text: "Image é o blueprint estático; Container é a instância em execução criada a partir da image.", correct: true, feedback: "Correto! Como classe vs objeto em POO — a image é a 'classe', o container é a 'instância'." },
                        { text: "Container é mais rápido que Image.", correct: false, feedback: "Velocidade não é a distinção — são papéis diferentes." }
                    ]
                }
            },
            {
                id: "m5w1-s2",
                title: "2. Dockerfile — Construindo Sua Imagem",
                content: `
O **Dockerfile** descreve passo a passo como construir a imagem da sua aplicação:

\`\`\`dockerfile
# Dockerfile (FastAPI)
FROM python:3.11-slim

# Variáveis de ambiente
ENV PYTHONDONTWRITEBYTECODE=1 \\
    PYTHONUNBUFFERED=1

# Diretório de trabalho
WORKDIR /app

# Instala dependências ANTES do código (cache eficiente)
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copia o código
COPY . .

# Expõe a porta
EXPOSE 8000

# Comando de inicialização
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]
\`\`\`

\`\`\`bash
# Build da imagem
docker build -t minha-api:1.0 .

# Executar o container
docker run -p 8000:8000 --env-file .env minha-api:1.0
\`\`\`
`,
                flashcards: [
                    { front: "FROM", back: "Define a image base. Ex: python:3.11-slim é Python 3.11 com Linux mínimo." },
                    { front: "COPY deps antes do código", back: "Aproveita o cache do Docker — layers de dependências não são reconstruídas se apenas o código mudar." },
                    { front: "EXPOSE", back: "Documenta qual porta o container usa. Não publica automaticamente — use -p no docker run." }
                ],
                quiz: {
                    question: "Por que copiar `requirements.txt` e rodar `pip install` ANTES de copiar o restante do código?",
                    options: [
                        { text: "Porque o pip precisa do requirements antes de qualquer coisa.", correct: false, feedback: "Não é uma limitação técnica do pip." },
                        { text: "Para aproveitar o cache de layers do Docker — dependências raramente mudam, então a layer é reutilizada.", correct: true, feedback: "Correto! Se você mudar apenas o código, Docker usa a layer de dependências do cache, sem reinstalar tudo." },
                        { text: "Para economizar memória no container.", correct: false, feedback: "Memória não é o benefício aqui — é velocidade de build." }
                    ]
                }
            },
            {
                id: "m5w1-s3",
                title: "3. Comandos Essenciais do Docker",
                content: `
\`\`\`bash
# === IMAGES ===
docker build -t nome:tag .      # Build local
docker pull python:3.11-slim    # Download do registry
docker images                   # Listar images locais
docker rmi nome:tag             # Remover image

# === CONTAINERS ===
docker run -d \\                 # -d = detached (background)
  -p 8000:8000 \\               # host:container port
  --name minha-api \\           # nome amigável
  --env-file .env \\           # variáveis de ambiente
  minha-api:1.0

docker ps                       # Containers em execução
docker ps -a                    # Todos os containers
docker logs minha-api           # Ver logs
docker logs -f minha-api        # Follow (stream de logs)
docker exec -it minha-api bash  # Entrar no container
docker stop minha-api           # Parar container
docker rm minha-api             # Remover container
\`\`\`

> 💡 **docker exec -it container bash** é o SSH do Docker — permite inspecionar o container por dentro.
`,
                flashcards: [
                    { front: "docker run -d", back: "Roda o container em background (detached). Sem -d, o terminal fica preso ao container." },
                    { front: "docker exec -it bash", back: "Abre um shell interativo dentro do container em execução." },
                    { front: "docker logs -f", back: "Stream de logs em tempo real — equivale ao tail -f de um arquivo de log." }
                ],
                quiz: {
                    question: "O que `-p 8000:8000` faz no comando `docker run`?",
                    options: [
                        { text: "Define a porta interna que o container usa.", correct: false, feedback: "EXPOSE define a porta interna. -p faz o mapeamento." },
                        { text: "Mapeia a porta 8000 do host para a porta 8000 do container (host:container).", correct: true, feedback: "Correto! Sem -p, o container está isolado — nenhuma requisição externa chega até ele." },
                        { text: "Limita o container a usar apenas a porta 8000.", correct: false, feedback: "-p não limita — abre a comunicação entre host e container." }
                    ]
                }
            },
            {
                id: "m5w1-s4",
                title: "4. .dockerignore e Boas Práticas",
                content: `
**.dockerignore** evita copiar arquivos desnecessários para a image:

\`\`\`
# .dockerignore
__pycache__/
*.pyc
*.pyo
.env
.git
.gitignore
node_modules/
venv/
.pytest_cache/
*.md
\`\`\`

**Boas práticas de Dockerfile:**

✅ Use **imagens base slim** (\`python:3.11-slim\` não \`python:3.11\`)  
✅ Execute como **usuário não-root**:
\`\`\`dockerfile
RUN adduser --disabled-password appuser
USER appuser
\`\`\`
✅ **Uma responsabilidade por container** — API em um container, banco em outro  
✅ Nunca coloque **segredos no Dockerfile** — use variáveis de ambiente  
✅ Use **tags explícitas** (\`python:3.11-slim\` não \`python:latest\`)
`,
                flashcards: [
                    { front: ".dockerignore", back: "Lista de arquivos/dirs ignorados ao copiar contexto para o Docker build. Reduz tamanho da image." },
                    { front: "USER não-root", back: "Boa prática de segurança — container comprometido não tem acesso root ao host." },
                    { front: "Nunca usar :latest", back: ":latest é mutável e não determinístico. Use tags específicas para builds reproduzíveis." }
                ],
                quiz: {
                    question: "Por que evitar a tag `:latest` em images de produção?",
                    options: [
                        { text: "latest é mais lenta para baixar.", correct: false, feedback: "Velocidade não é o problema." },
                        { text: "latest aponta para versões diferentes ao longo do tempo — builds deixam de ser reproduzíveis.", correct: true, feedback: "Correto! Um rebuild em 6 meses pode pegar uma versão incompatível. Tags fixas garantem consistência." },
                        { text: "Docker Hub proíbe latest em produção.", correct: false, feedback: "Docker Hub não proíbe — é uma boa prática, não uma regra." }
                    ]
                }
            }
        ],
        memoryPalace: {
            title: "Palácio da Memória: A Nave Espacial",
            content: `
Docker é como enviar uma **nave espacial autocontida**:

- 🚀 **A Nave (Container):** Leva tudo que precisa para sobreviver no espaço — ar, comida, sistemas. Não depende do planeta de destino ter nada pronto.
- 📐 **O Projeto da Nave (Dockerfile):** O blueprint completo de como construir a nave, parafuso por parafuso. Qualquer estaleiro (máquina) que siga o projeto produz a mesma nave.
- 🏭 **O Estaleiro (docker build):** Constrói a nave seguindo o projeto. Reutiliza peças que não mudaram (cache de layers) para ser eficiente.
- 🌍 **O Porto de Lançamento (Registry):** Onde as naves são armazenadas e distribuídas — Docker Hub é o maior porto do universo.
- 🔌 **O Tubo de Comunicação (-p 8000:8000):** A estação terrestre não consegue falar com a nave sem um canal estabelecido. -p abre esse canal entre o host e o container.
            `
        },
        exam: [
            {
                question: "1. O que um Dockerfile define?",
                options: [
                    "A configuração de rede do container.",
                    "As instruções passo a passo para construir uma Docker Image.",
                    "Os containers que devem rodar juntos.",
                    "As variáveis de ambiente de produção."
                ],
                correctIndex: 1
            },
            {
                question: "2. Por que usar `python:3.11-slim` em vez de `python:3.11`?",
                options: [
                    "slim tem mais recursos que a versão padrão.",
                    "slim é a versão com menos dependências do SO, resultando em images menores e mais seguras.",
                    "slim é mais rápida em tempo de execução.",
                    "python:3.11 não existe no Docker Hub."
                ],
                correctIndex: 1
            },
            {
                question: "3. Qual comando permite inspecionar o filesystem de um container em execução?",
                options: [
                    "docker inspect container_name",
                    "docker exec -it container_name bash",
                    "docker logs container_name",
                    "docker ps container_name"
                ],
                correctIndex: 1
            },
            {
                question: "4. O `.dockerignore` serve para:",
                options: [
                    "Definir quais containers ignorar no docker-compose.",
                    "Excluir arquivos do contexto de build, reduzindo tamanho da image e evitando vazar segredos.",
                    "Ignorar erros durante o docker build.",
                    "Configurar quais portas não mapear."
                ],
                correctIndex: 1
            }
        ]
    },

    "m5w2": {
        title: "Semana 2: Docker Compose",
        subtitle: "Orquestrando Múltiplos Serviços",
        studies: [
            {
                id: "m5w2-s1",
                title: "1. O Problema do Multi-Container",
                content: `
Uma aplicação real tem múltiplos serviços: **API + Banco + Cache + Worker**. Gerenciar cada container separadamente é inviável.

**Docker Compose** define e orquestra múltiplos containers com um único arquivo YAML.

\`\`\`yaml
# docker-compose.yml
services:
  api:
    build: .
    ports:
      - "8000:8000"
    environment:
      - DATABASE_URL=postgresql://user:senha@db:5432/mydb
    depends_on:
      db:
        condition: service_healthy

  db:
    image: postgres:15-alpine
    environment:
      POSTGRES_USER: user
      POSTGRES_PASSWORD: senha
      POSTGRES_DB: mydb
    volumes:
      - postgres_data:/var/lib/postgresql/data
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U user"]
      interval: 5s
      retries: 5

volumes:
  postgres_data:
\`\`\`
`,
                flashcards: [
                    { front: "docker-compose.yml", back: "Arquivo YAML que define todos os serviços, redes e volumes da aplicação." },
                    { front: "depends_on + healthcheck", back: "Garante que o banco esteja pronto antes de iniciar a API — evita erros de conexão no startup." },
                    { front: "volumes nomeados", back: "Persiste dados do banco fora do container. Sem isso, dados somem ao remover o container." }
                ],
                quiz: {
                    question: "Por que usar `depends_on: condition: service_healthy` em vez de só `depends_on: db`?",
                    options: [
                        { text: "Não há diferença funcional.", correct: false, feedback: "Há diferença crítica." },
                        { text: "service_healthy aguarda o banco estar operacional — depends_on simples apenas aguarda o container iniciar, não o serviço estar pronto.", correct: true, feedback: "Correto! O container pode iniciar mas o PostgreSQL leva alguns segundos para aceitar conexões." },
                        { text: "condition: service_healthy é mais rápido.", correct: false, feedback: "É mais lento (aguarda mais) — mas muito mais seguro." }
                    ]
                }
            },
            {
                id: "m5w2-s2",
                title: "2. Comandos do Docker Compose",
                content: `
\`\`\`bash
# Subir todos os serviços (build se necessário)
docker compose up --build

# Subir em background
docker compose up -d

# Ver status dos serviços
docker compose ps

# Ver logs de todos
docker compose logs -f

# Ver logs de um serviço específico
docker compose logs -f api

# Entrar em um container
docker compose exec api bash

# Parar tudo (mantém containers)
docker compose stop

# Parar E remover containers
docker compose down

# Parar, remover containers E volumes (dados!)
docker compose down -v  # ⚠️ CUIDADO — apaga dados!

# Rodar comando único (ex: migrations)
docker compose run --rm api alembic upgrade head
\`\`\`
`,
                flashcards: [
                    { front: "docker compose up --build", back: "Recria as images antes de subir os containers. Use ao alterar o Dockerfile ou dependências." },
                    { front: "docker compose down -v", back: "Remove containers E volumes — apaga dados do banco. Use apenas em dev/reset." },
                    { front: "docker compose run --rm", back: "Executa um comando único num container temporário (removido após execução)." }
                ],
                quiz: {
                    question: "Você precisa rodar as migrations Alembic dentro do container. Qual comando usar?",
                    options: [
                        { text: "docker compose up alembic", correct: false, feedback: "alembic não é um serviço definido no compose." },
                        { text: "docker compose run --rm api alembic upgrade head", correct: true, feedback: "Correto! run cria um container temporário do serviço api, executa o comando e o remove." },
                        { text: "docker alembic upgrade head", correct: false, feedback: "Não existe esse comando Docker." }
                    ]
                }
            },
            {
                id: "m5w2-s3",
                title: "3. Volumes e Redes no Compose",
                content: `
**Volumes** persistem dados entre reinicializações:

\`\`\`yaml
services:
  db:
    image: postgres:15
    volumes:
      # Volume nomeado (gerenciado pelo Docker)
      - postgres_data:/var/lib/postgresql/data
      # Bind mount (pasta local)
      - ./init.sql:/docker-entrypoint-initdb.d/init.sql

volumes:
  postgres_data:
\`\`\`

**Redes** isolam comunicação:

\`\`\`yaml
services:
  api:
    networks:
      - backend
      - frontend

  db:
    networks:
      - backend  # DB só visível para api

  nginx:
    networks:
      - frontend  # nginx só vê a api

networks:
  backend:
  frontend:
\`\`\`

> Containers se comunicam pelo **nome do serviço** como hostname. A api acessa o banco via \`db:5432\`.
`,
                flashcards: [
                    { front: "Volume Nomeado", back: "Gerenciado pelo Docker. Dados persistem entre restarts e remoções de container." },
                    { front: "Bind Mount", back: "Mapeia diretório local para o container. Útil em dev para hot reload sem rebuild." },
                    { front: "Nome do serviço como hostname", back: "Em redes Compose, containers se acessam pelo nome: api conecta em db:5432, não localhost:5432." }
                ],
                quiz: {
                    question: "Como a API deve se conectar ao PostgreSQL no Docker Compose?",
                    options: [
                        { text: "postgresql://user:senha@localhost:5432/db", correct: false, feedback: "localhost não funciona — cada container tem seu próprio localhost." },
                        { text: "postgresql://user:senha@db:5432/db (nome do serviço como host)", correct: true, feedback: "Correto! No Compose, o DNS interno resolve nomes de serviço para o IP do container." },
                        { text: "postgresql://user:senha@0.0.0.0:5432/db", correct: false, feedback: "0.0.0.0 não é um endereço de destino válido." }
                    ]
                }
            },
            {
                id: "m5w2-s4",
                title: "4. Compose para Desenvolvimento vs Produção",
                content: `
Use **override files** para separar configurações de dev e produção:

\`\`\`yaml
# docker-compose.yml (base compartilhada)
services:
  api:
    image: minha-api:latest
    env_file: .env

  db:
    image: postgres:15-alpine
    volumes:
      - postgres_data:/var/lib/postgresql/data

volumes:
  postgres_data:
\`\`\`

\`\`\`yaml
# docker-compose.override.yml (DEV — carregado automaticamente)
services:
  api:
    build: .              # Rebuild local em dev
    volumes:
      - .:/app            # Hot reload: código local reflete no container
    ports:
      - "8000:8000"

  db:
    ports:
      - "5432:5432"       # Expõe DB para ferramentas locais (DBeaver, etc)
\`\`\`

\`\`\`bash
# Produção: usa apenas o arquivo base
docker compose -f docker-compose.yml up -d
\`\`\`
`,
                flashcards: [
                    { front: "docker-compose.override.yml", back: "Arquivo carregado automaticamente em dev. Sobrescreve configurações do compose.yml base." },
                    { front: "Hot reload com bind mount", back: "Em dev, monta o código local no container — mudanças refletem instantaneamente sem rebuild." },
                    { front: "-f flag", back: "Especifica quais arquivos Compose usar. Permite separar configs de dev e produção." }
                ],
                quiz: {
                    question: "Por que expor a porta do banco (`5432:5432`) apenas no arquivo de dev, não no de produção?",
                    options: [
                        { text: "O banco não precisa de porta em produção.", correct: false, feedback: "O banco usa porta internamente — não expor ao host é por segurança." },
                        { text: "Em produção, o banco deve ser acessível apenas pelos containers internos, não pelo host/internet.", correct: true, feedback: "Correto! Expor o banco diretamente na internet é uma vulnerabilidade grave de segurança." },
                        { text: "Produção usa portas diferentes automaticamente.", correct: false, feedback: "Não há automação — é uma decisão explícita de design." }
                    ]
                }
            }
        ],
        memoryPalace: {
            title: "Palácio da Memória: A Base Espacial",
            content: `
Docker Compose é a **base espacial** que coordena várias naves:

- 📋 **O Plano de Missão (docker-compose.yml):** Define quais naves (serviços) participam, como se comunicam e quais recursos têm.
- 🚀 **O Lançamento (docker compose up):** Com um comando, todas as naves decolam na ordem certa — banco antes da API.
- 🏥 **O Centro de Saúde (healthcheck):** Antes de lançar a API, verifica se o banco está de fato operacional — não apenas "no ar".
- 📡 **A Rede de Comunicação (networks):** Cada nave só fala com quem tem autorização. O banco não é visível pela internet — apenas pela API.
- 💾 **O Módulo de Armazenamento (volumes):** Dados críticos ficam em compartimentos separados. Se uma nave for substituída, os dados sobrevivem.
            `
        },
        exam: [
            {
                question: "1. O que `docker compose down -v` faz além de parar os containers?",
                options: [
                    "Remove as images locais.",
                    "Remove os volumes nomeados — apagando dados persistidos.",
                    "Remove o arquivo docker-compose.yml.",
                    "Reinicia os containers após parar."
                ],
                correctIndex: 1
            },
            {
                question: "2. No docker-compose.yml, como a API deve referenciar o banco de dados?",
                options: [
                    "Usando `localhost:5432`",
                    "Usando o nome do serviço como hostname: `db:5432`",
                    "Usando o IP do container: `172.17.0.2:5432`",
                    "Usando `host.docker.internal:5432`"
                ],
                correctIndex: 1
            },
            {
                question: "3. Qual a vantagem de um bind mount em desenvolvimento?",
                options: [
                    "Mais seguro que volumes nomeados.",
                    "Permite que mudanças no código local reflitam no container sem rebuild.",
                    "Dados persistem em produção automaticamente.",
                    "Acelera o tempo de build da image."
                ],
                correctIndex: 1
            },
            {
                question: "4. `docker compose run --rm api alembic upgrade head` faz o quê?",
                options: [
                    "Reinicia o serviço api e roda alembic.",
                    "Cria um container temporário do serviço api, executa o comando e o remove ao finalizar.",
                    "Atualiza a image do serviço api.",
                    "Roda alembic em todos os serviços do compose."
                ],
                correctIndex: 1
            }
        ]
    },

    "m5w3": {
        title: "Semana 3: CI/CD com GitHub Actions",
        subtitle: "Automatize Testes e Deploy",
        studies: [
            {
                id: "m5w3-s1",
                title: "1. O que é CI/CD e Por Que Importa",
                content: `
**CI/CD** (Continuous Integration / Continuous Deployment) automatiza o pipeline de qualidade e entrega.

**Sem CI/CD:**
- Developer faz push → espera feedback manual → testa localmente → deploy manual → reza
- Qualquer passo esquecido pode quebrar produção

**Com CI/CD:**
- Developer faz push → pipeline roda automaticamente → testes passam → deploy automático

**As etapas do pipeline:**

\`\`\`
Push → Lint → Testes → Build Docker → Push Registry → Deploy
\`\`\`

**Benefícios:**
- ✅ Bugs detectados imediatamente após o commit
- ✅ Deploy consistente e sem erro humano
- ✅ Rollback rápido se algo falhar
- ✅ Histórico completo de cada deploy
`,
                flashcards: [
                    { front: "CI (Continuous Integration)", back: "Automatiza a execução de testes e lint a cada commit/PR. Detecta problemas cedo." },
                    { front: "CD (Continuous Deployment)", back: "Automatiza o deploy em produção após CI passar. Zero intervenção manual." },
                    { front: "Pipeline", back: "Sequência de etapas automatizadas: lint → test → build → deploy." }
                ],
                quiz: {
                    question: "Qual o principal benefício do CI (Continuous Integration)?",
                    options: [
                        { text: "Elimina a necessidade de escrever testes.", correct: false, feedback: "CI roda testes — não os elimina." },
                        { text: "Detecta bugs logo após o commit, antes de chegarem a produção.", correct: true, feedback: "Correto! O feedback imediato é o valor central do CI — quanto mais cedo detectar, mais barato corrigir." },
                        { text: "Faz deploy mais rápido sem testes.", correct: false, feedback: "Velocidade sem qualidade não é o objetivo." }
                    ]
                }
            },
            {
                id: "m5w3-s2",
                title: "2. GitHub Actions — Primeiro Workflow",
                content: `
**GitHub Actions** é o CI/CD nativo do GitHub. Workflows ficam em \`.github/workflows/\`.

\`\`\`yaml
# .github/workflows/ci.yml
name: CI Pipeline

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest

    services:
      postgres:
        image: postgres:15
        env:
          POSTGRES_PASSWORD: testpassword
          POSTGRES_DB: testdb
        options: >-
          --health-cmd pg_isready
          --health-interval 10s
          --health-retries 5

    steps:
      - uses: actions/checkout@v4

      - name: Setup Python
        uses: actions/setup-python@v5
        with:
          python-version: '3.11'

      - name: Install deps
        run: pip install -r requirements.txt

      - name: Run tests
        env:
          DATABASE_URL: postgresql://postgres:testpassword@localhost/testdb
        run: pytest --cov=app --cov-report=term-missing
\`\`\`
`,
                flashcards: [
                    { front: "on: push/pull_request", back: "Eventos que disparam o workflow. push = commit enviado, pull_request = PR aberta." },
                    { front: "services", back: "Containers auxiliares que rodam durante o job (ex: banco de dados de teste)." },
                    { front: "steps", back: "Sequência de tarefas do job. Cada step roda em ordem sequencial." }
                ],
                quiz: {
                    question: "Por que definir `services: postgres` no workflow em vez de usar sqlite em testes?",
                    options: [
                        { text: "GitHub Actions não suporta SQLite.", correct: false, feedback: "SQLite funciona perfeitamente em Actions." },
                        { text: "Para testar com o mesmo banco de produção — SQLite tem comportamentos diferentes do PostgreSQL.", correct: true, feedback: "Correto! Testar com SQLite pode mascarar bugs específicos do PostgreSQL (tipos, constraints, etc)." },
                        { text: "Postgres é mais rápido em CI.", correct: false, feedback: "SQLite seria mais rápido — a razão é fidelidade ao ambiente real." }
                    ]
                }
            },
            {
                id: "m5w3-s3",
                title: "3. Build e Push de Docker Image no CI",
                content: `
\`\`\`yaml
# .github/workflows/deploy.yml
name: Build & Deploy

on:
  push:
    branches: [main]

jobs:
  build-and-push:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - name: Login no Docker Hub
        uses: docker/login-action@v3
        with:
          username: \${{ secrets.DOCKERHUB_USERNAME }}
          password: \${{ secrets.DOCKERHUB_TOKEN }}

      - name: Build e Push
        uses: docker/build-push-action@v5
        with:
          push: true
          tags: |
            usuario/minha-api:latest
            usuario/minha-api:\${{ github.sha }}

  deploy:
    needs: build-and-push
    runs-on: ubuntu-latest
    steps:
      - name: Deploy via SSH
        uses: appleboy/ssh-action@v1
        with:
          host: \${{ secrets.SERVER_HOST }}
          username: \${{ secrets.SERVER_USER }}
          key: \${{ secrets.SSH_PRIVATE_KEY }}
          script: |
            docker compose pull
            docker compose up -d
\`\`\`
`,
                flashcards: [
                    { front: "secrets.*", back: "Variáveis sensíveis armazenadas no GitHub (Settings → Secrets). Nunca expostas em logs." },
                    { front: "github.sha", back: "Hash do commit atual — usado como tag Docker para identificar exatamente qual commit está deployado." },
                    { front: "needs:", back: "Define dependência entre jobs — deploy só roda se build-and-push passou." }
                ],
                quiz: {
                    question: "Por que usar `github.sha` como tag da imagem além de `:latest`?",
                    options: [
                        { text: "Docker exige duas tags por push.", correct: false, feedback: "Não é obrigatório — é uma boa prática." },
                        { text: "Para rastrear exatamente qual commit está em produção e fazer rollback para uma versão específica.", correct: true, feedback: "Correto! usuario/api:abc1234 aponta precisamente para um commit — :latest sempre sobrescreve." },
                        { text: "latest não funciona em produção.", correct: false, feedback: "latest funciona, mas não é rastreável." }
                    ]
                }
            },
            {
                id: "m5w3-s4",
                title: "4. Secrets, Ambientes e Proteção de Branch",
                content: `
**Secrets no GitHub:**
\`\`\`
Settings → Secrets and variables → Actions → New repository secret
\`\`\`

Secrets disponíveis no workflow via \`\${{ secrets.NOME }}\` — **nunca** aparecem em logs.

**Environments (Ambientes):**
\`\`\`yaml
jobs:
  deploy-prod:
    environment: production  # Requer aprovação manual!
    steps:
      - run: echo "Deployando em produção..."
\`\`\`

**Proteção de Branch (Branch Protection Rules):**
- ✅ Require status checks to pass (CI deve passar)
- ✅ Require pull request reviews (mínimo 1 aprovação)
- ✅ Restrict direct pushes to main (ninguém faz push direto)

> 🔐 **Com essas 3 regras:** Nenhum código entra em \`main\` sem passar por testes **e** revisão humana.
`,
                flashcards: [
                    { front: "GitHub Secrets", back: "Variáveis criptografadas armazenadas no repositório. Acessíveis em workflows mas nunca visíveis em logs." },
                    { front: "Environment Protection", back: "Requer aprovação manual antes de executar jobs de deploy em ambientes críticos." },
                    { front: "Branch Protection Rules", back: "Regras que impedem push direto, exigem testes e reviews antes de merge em branches protegidas." }
                ],
                quiz: {
                    question: "O que `Require status checks to pass` em Branch Protection garante?",
                    options: [
                        { text: "Que o código passa na revisão de código antes do merge.", correct: false, feedback: "Isso é 'Require pull request reviews'." },
                        { text: "Que o CI pipeline passou antes de permitir o merge na branch protegida.", correct: true, feedback: "Correto! Sem isso, qualquer código — mesmo com testes quebrando — poderia ser mergeado." },
                        { text: "Que o deploy foi bem-sucedido.", correct: false, feedback: "Status checks são CI/lint — não deploy." }
                    ]
                }
            }
        ],
        memoryPalace: {
            title: "Palácio da Memória: A Linha de Montagem Automatizada",
            content: `
CI/CD é uma **linha de montagem industrial** completamente automatizada:

- 🔧 **O Gatilho (Push/PR):** Quando um funcionário entrega uma peça nova (commit), a esteira começa automaticamente. Nenhum operador precisa apertar o botão.
- 🔬 **Controle de Qualidade (CI - Testes):** A peça passa por estações de inspeção automática. Se falhar em qualquer ponto, a esteira para e um alarme soa.
- 📦 **Empacotamento (Build Docker):** A peça aprovada é embalada numa caixa padronizada (container) com tudo que precisa para funcionar.
- 🚢 **Expedição (Push Registry):** A caixa é enviada para o depósito central (registry) com código de rastreio (git sha).
- 🏪 **Entrega (Deploy):** A caixa é instalada automaticamente no destino final. Zero intervenção humana — a não ser em produção, onde um gerente (Environment Protection) assina a entrega.
            `
        },
        exam: [
            {
                question: "1. O que é um GitHub Actions 'workflow'?",
                options: [
                    "Um script Python executado no servidor.",
                    "Um arquivo YAML em `.github/workflows/` que define jobs automatizados.",
                    "Uma branch especial do repositório.",
                    "Uma configuração de segurança do repositório."
                ],
                correctIndex: 1
            },
            {
                question: "2. `needs: build-and-push` em um job significa:",
                options: [
                    "O job instala as dependências de build.",
                    "O job só executa se o job `build-and-push` for concluído com sucesso.",
                    "Os dois jobs rodam em paralelo.",
                    "O job herda as variáveis do job anterior."
                ],
                correctIndex: 1
            },
            {
                question: "3. Por que usar `${{ secrets.DOCKERHUB_TOKEN }}` em vez de escrever o token diretamente no YAML?",
                options: [
                    "O YAML não suporta strings longas.",
                    "Secrets são criptografados e nunca expostos em logs — tokens no código seriam públicos no repositório.",
                    "Docker Hub só aceita tokens via secrets.",
                    "É uma exigência do GitHub para repositórios públicos."
                ],
                correctIndex: 1
            },
            {
                question: "4. O que 'Restrict direct pushes to main' em Branch Protection impede?",
                options: [
                    "Commits na branch main.",
                    "Desenvolvedores de fazer push diretamente para main sem passar por PR e revisão.",
                    "O CI de rodar na branch main.",
                    "Merges de branches com conflitos."
                ],
                correctIndex: 1
            }
        ]
    },

    "m5w4": {
        title: "Semana 4: Deploy em Nuvem",
        subtitle: "Do Container ao Mundo Real",
        studies: [
            {
                id: "m5w4-s1",
                title: "1. Opções de Deploy: VPS vs PaaS vs Serverless",
                content: `
Escolha a plataforma certa para cada projeto:

| Plataforma | Controle | Complexidade | Custo | Quando Usar |
|------------|----------|--------------|-------|-------------|
| **VPS** (DigitalOcean, Linode) | Total | Alta | Médio | Projetos com requisitos específicos |
| **PaaS** (Railway, Render, Fly.io) | Médio | Baixa | Baixo/Médio | Projetos em crescimento rápido |
| **Serverless** (AWS Lambda) | Baixo | Média | Pay-per-use | APIs com tráfego esporádico |
| **Kubernetes** (EKS, GKE) | Total | Muito alta | Alto | Escala massiva, times grandes |

**Para Júniores: comece com PaaS**

Railway, Render e Fly.io abstraem a infraestrutura — você faz deploy com \`git push\` ou um Dockerfile e eles cuidam do resto.
`,
                flashcards: [
                    { front: "VPS", back: "Servidor virtual com SO completo. Você controla tudo — mais flexível, mais responsabilidade." },
                    { front: "PaaS", back: "Plataforma gerenciada que abstrai infraestrutura. Deploy simples, sem gerenciar SO ou rede." },
                    { front: "Serverless", back: "Executa funções sob demanda. Você paga apenas pelo tempo de execução, não pelo servidor 24/7." }
                ],
                quiz: {
                    question: "Para um MVP de uma startup que precisa de deploy rápido sem experiência em DevOps, qual plataforma faz mais sentido?",
                    options: [
                        { text: "Kubernetes (EKS)", correct: false, feedback: "Kubernetes tem curva de aprendizado enorme — overkill para MVP." },
                        { text: "VPS com configuração manual", correct: false, feedback: "VPS requer conhecimento de Linux, firewall, nginx, SSL — muito overhead inicial." },
                        { text: "PaaS como Railway ou Render", correct: true, feedback: "Correto! PaaS foca no código — infraestrutura é abstraída. Ideal para velocidade de iteração." }
                    ]
                }
            },
            {
                id: "m5w4-s2",
                title: "2. Deploy de FastAPI no Railway/Render",
                content: `
**Railway** detecta o Dockerfile automaticamente. O mínimo necessário:

\`\`\`
minha-api/
├── Dockerfile
├── requirements.txt
├── main.py
└── .env  # NÃO commitar — configure no painel
\`\`\`

**Variáveis de ambiente no painel:**
\`\`\`
DATABASE_URL=postgresql://...  (fornecida pelo Railway automaticamente)
SECRET_KEY=sua_chave_secreta
DEBUG=false
\`\`\`

**Dockerfile de produção otimizado:**
\`\`\`dockerfile
FROM python:3.11-slim

WORKDIR /app
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

# Multi-stage: não inclui ferramentas de dev na imagem final
RUN adduser --disabled-password --no-create-home appuser
USER appuser

EXPOSE 8000
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000", "--workers", "2"]
\`\`\`

> 🚀 Railway detecta mudanças no GitHub e faz redeploy automático a cada push na \`main\`.
`,
                flashcards: [
                    { front: "--workers 2", back: "Múltiplos workers Uvicorn para aproveitar múltiplas CPUs em produção." },
                    { front: "Redeploy automático", back: "Plataformas PaaS monitoram o repositório GitHub e redeployam a cada push na branch configurada." }
                ],
                quiz: {
                    question: "Por que usar `--workers 2` (ou mais) no uvicorn em produção?",
                    options: [
                        { text: "Para ter backup caso um worker falhe.", correct: false, feedback: "Redundância não é o motivo principal em workers uvicorn." },
                        { text: "Para processar múltiplas requisições em paralelo aproveitando CPUs disponíveis.", correct: true, feedback: "Correto! 1 worker = 1 CPU aproveitada. Com 2 workers, 2 CPUs trabalham simultaneamente." },
                        { text: "O Railway exige mínimo de 2 workers.", correct: false, feedback: "Não é uma exigência do Railway." }
                    ]
                }
            },
            {
                id: "m5w4-s3",
                title: "3. Nginx como Reverse Proxy",
                content: `
**Nginx** fica na frente da API — gerencia SSL, load balancing e assets estáticos.

\`\`\`nginx
# nginx.conf
server {
    listen 80;
    server_name meudominio.com;

    # Redireciona HTTP → HTTPS
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl;
    server_name meudominio.com;

    ssl_certificate /etc/letsencrypt/live/meudominio.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/meudominio.com/privkey.pem;

    location /api/ {
        proxy_pass http://api:8000/;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }

    location / {
        root /var/www/html;  # React build
        try_files $uri $uri/ /index.html;
    }
}
\`\`\`

**No docker-compose.yml:**
\`\`\`yaml
services:
  nginx:
    image: nginx:alpine
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - ./nginx.conf:/etc/nginx/conf.d/default.conf
      - ./frontend/dist:/var/www/html
\`\`\`
`,
                flashcards: [
                    { front: "Reverse Proxy", back: "Servidor que recebe requisições externas e as encaminha ao serviço interno correto." },
                    { front: "try_files $uri /index.html", back: "Redireciona qualquer rota não encontrada para index.html — essencial para React Router funcionar." },
                    { front: "SSL Termination", back: "Nginx decifra HTTPS e se comunica com a API via HTTP interno — mais eficiente." }
                ],
                quiz: {
                    question: "Por que `try_files $uri /index.html` é necessário para apps React?",
                    options: [
                        { text: "Para servir o index.html para todas as requisições.", correct: false, feedback: "Não — apenas para rotas não encontradas como arquivo estático." },
                        { text: "Porque React Router gerencia rotas no browser — o servidor precisa servir index.html para qualquer rota desconhecida.", correct: true, feedback: "Correto! Sem isso, acessar /usuarios diretamente retornaria 404 do nginx, pois esse arquivo não existe." },
                        { text: "Para melhorar a performance de carregamento.", correct: false, feedback: "Performance não é a razão — é funcionalidade." }
                    ]
                }
            },
            {
                id: "m5w4-s4",
                title: "4. Monitoramento e Logs em Produção",
                content: `
**Produção sem monitoramento é voar às cegas.** Ferramentas essenciais:

**Logs estruturados (Python):**
\`\`\`python
import logging
import json

logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s %(levelname)s %(name)s %(message)s'
)
logger = logging.getLogger(__name__)

@app.middleware("http")
async def log_requests(request, call_next):
    logger.info(f"→ {request.method} {request.url}")
    response = await call_next(request)
    logger.info(f"← {response.status_code}")
    return response
\`\`\`

**Health Check endpoint:**
\`\`\`python
@app.get("/health")
async def health_check(db: Session = Depends(get_db)):
    try:
        db.execute("SELECT 1")
        return {"status": "healthy", "db": "connected"}
    except Exception:
        raise HTTPException(status_code=503, detail="Database unavailable")
\`\`\`

**Ferramentas gratuitas:**
- **Sentry** — captura erros com stack trace automático
- **UptimeRobot** — monitora disponibilidade a cada 5min
- **Railway/Render Metrics** — CPU, RAM, latência built-in
`,
                flashcards: [
                    { front: "Health Check", back: "Endpoint /health que verifica se a API e suas dependências (banco, cache) estão operacionais." },
                    { front: "Sentry", back: "Plataforma de monitoramento de erros. Captura exceções em produção com contexto completo." },
                    { front: "Log estruturado", back: "Logs em formato consistente (JSON ou padrão) facilita busca e análise em ferramentas externas." }
                ],
                quiz: {
                    question: "Por que um endpoint `/health` deve verificar o banco de dados, não apenas retornar 200?",
                    options: [
                        { text: "Para deixar a resposta mais informativa.", correct: false, feedback: "Informação é um benefício — mas não o motivo principal." },
                        { text: "Porque a API pode estar no ar mas incapaz de funcionar se o banco estiver fora — um 200 falso mascara o problema.", correct: true, feedback: "Correto! Load balancers e orquestradores usam health checks para decidir se enviam tráfego ao serviço." },
                        { text: "O banco sempre está disponível se a API está.", correct: false, feedback: "Banco e API são serviços independentes — um pode cair sem o outro." }
                    ]
                }
            }
        ],
        memoryPalace: {
            title: "Palácio da Memória: O Aeroporto Internacional",
            content: `
O deploy em produção é como operar um **aeroporto internacional**:

- 🌐 **A Escolha do Aeroporto (PaaS vs VPS):** Um aeroporto gerenciado (PaaS) — você só traz os aviões (containers). Um aeroporto próprio (VPS) — você constrói as pistas, torres e sistemas do zero.
- 🛫 **A Decolagem (Deploy):** Cada push na main é um novo voo. O CI/CD verifica a segurança da aeronave antes de liberar.
- 🗼 **A Torre de Controle (Nginx):** Não fala diretamente com os passageiros (usuários). Coordena o tráfego — HTTPS chega aqui, é descriptografado e direcionado ao portão certo (API ou React).
- 🏥 **A Equipe Médica de Plantão (Health Check):** Não apenas "o avião está ligado?" — verifica se combustível (banco), sistemas de navegação (cache) e tripulação (workers) estão todos operacionais.
- 📡 **O Radar (Sentry + Logs):** Monitora cada voo em tempo real. Se algo der errado, o alerta chega antes do passageiro reclamar.
            `
        },
        exam: [
            {
                question: "1. Para um projeto MVP inicial, qual plataforma de deploy tem a menor curva de aprendizado?",
                options: [
                    "Kubernetes (GKE)",
                    "VPS com Ubuntu configurado manualmente",
                    "PaaS como Railway ou Render",
                    "AWS EC2 com configuração completa"
                ],
                correctIndex: 2
            },
            {
                question: "2. Por que o Nginx fica na frente da API em vez de expor o uvicorn diretamente?",
                options: [
                    "uvicorn não suporta HTTPS.",
                    "Nginx gerencia SSL, serve arquivos estáticos, faz load balancing e protege o serviço interno.",
                    "uvicorn é mais lento que Nginx.",
                    "É uma exigência legal para produção."
                ],
                correctIndex: 1
            },
            {
                question: "3. `try_files $uri $uri/ /index.html` no Nginx serve para:",
                options: [
                    "Servir qualquer arquivo sem verificar se existe.",
                    "Permitir que React Router funcione ao servir index.html para rotas desconhecidas.",
                    "Redirecionar HTTP para HTTPS.",
                    "Configurar o proxy reverso para a API."
                ],
                correctIndex: 1
            },
            {
                question: "4. Um endpoint `/health` que retorna 200 sem verificar o banco:",
                options: [
                    "É suficiente — confirma que a API está rodando.",
                    "É enganoso — pode reportar saúde quando o sistema está inoperante por falha no banco.",
                    "É o padrão recomendado para produção.",
                    "Não funciona com load balancers."
                ],
                correctIndex: 1
            }
        ]
    },

    // ==========================================
    // MÊS 6 — PROJETO FINAL + PORTFÓLIO
    // ==========================================
    "m6w1": {
        title: "Semana 1: Planejamento do Projeto Final",
        subtitle: "Do Problema à Arquitetura",
        studies: [
            {
                id: "m6w1-s1",
                title: "1. Escolhendo o Projeto Certo para o Portfólio",
                content: `
O projeto final precisa impressionar recrutadores em **3 segundos de leitura do GitHub**.

**Critérios de um bom projeto de portfólio:**

✅ **Problema real** — resolve algo que pessoas usam de fato  
✅ **Stack completa** — FastAPI + PostgreSQL + React + Docker  
✅ **CRUD real** — não apenas "Hello World com API"  
✅ **Autenticação** — JWT é quase obrigatório  
✅ **Deploy acessível** — link funcionando no README  
✅ **Testes** — mínimo 70% de cobertura  

**Ideias sólidas para júnior:**
- 📚 **API de Biblioteca** — CRUD de livros, empréstimos, usuários com roles
- 💰 **Gerenciador de Gastos** — categorias, relatórios, gráficos no front
- 📋 **Task Manager** — boards Kanban, times, prazo com notificação
- 🏋️ **Tracker de Treinos** — exercícios, séries, evolução mensal
`,
                flashcards: [
                    { front: "Stack Completa", back: "Back-end + Banco de dados + Front-end + Deploy. Demonstra domínio do ciclo completo." },
                    { front: "Deploy acessível", back: "Link funcionando no README. Sem isso, 90% dos recrutadores não vão clonar e rodar localmente." }
                ],
                quiz: {
                    question: "Por que autenticação JWT quase que obrigatória num projeto de portfólio?",
                    options: [
                        { text: "Toda API precisa de JWT por lei.", correct: false, feedback: "Não é obrigação técnica." },
                        { text: "Demonstra que você sabe implementar segurança real — um dos requisitos mais comuns em vagas júnior.", correct: true, feedback: "Correto! Quase toda vaga júnior menciona autenticação. Demonstrar isso no portfólio é diferencial." },
                        { text: "JWT é mais rápido que session-based auth.", correct: false, feedback: "Performance não é a razão do portfólio." }
                    ]
                }
            },
            {
                id: "m6w1-s2",
                title: "2. Modelagem do Banco de Dados",
                content: `
Antes de codar, modele o banco. Exemplo para **Task Manager**:

\`\`\`
usuarios
  id, nome, email, senha_hash, criado_em

times
  id, nome, owner_id (FK → usuarios), criado_em

membros_time
  id, time_id (FK), usuario_id (FK), role (admin/membro)

boards
  id, nome, time_id (FK), criado_em

colunas
  id, nome, board_id (FK), ordem

tarefas
  id, titulo, descricao, coluna_id (FK),
  responsavel_id (FK → usuarios), prazo, prioridade,
  criado_em, atualizado_em, deletado_em (soft delete)

etiquetas
  id, nome, cor, board_id (FK)

tarefa_etiquetas
  tarefa_id (FK), etiqueta_id (FK)  ← relação N:N
\`\`\`

**Princípios aplicados:**
- Soft delete em \`tarefas\` (histórico de auditoria)
- Campos de auditoria (\`criado_em\`, \`atualizado_em\`)
- Normalização: etiquetas separadas com tabela de junção
`,
                flashcards: [
                    { front: "Tabela de Junção (N:N)", back: "Tabela intermediária que resolve relações muitos-para-muitos. Ex: tarefa_etiquetas." },
                    { front: "Normalização", back: "Organizar dados para eliminar redundância. Cada dado em um único lugar." }
                ],
                quiz: {
                    question: "Por que usar uma tabela `tarefa_etiquetas` em vez de uma coluna `etiquetas` em tarefas?",
                    options: [
                        { text: "Bancos de dados não suportam arrays.", correct: false, feedback: "PostgreSQL suporta arrays — mas não é a melhor prática." },
                        { text: "Para modelar a relação N:N corretamente — uma tarefa tem múltiplas etiquetas e uma etiqueta pertence a múltiplas tarefas.", correct: true, feedback: "Correto! A tabela de junção é o padrão relacional para N:N." },
                        { text: "Para facilitar os JOINs.", correct: false, feedback: "Na verdade, adiciona mais JOINs — o benefício é integridade e flexibilidade." }
                    ]
                }
            },
            {
                id: "m6w1-s3",
                title: "3. Arquitetura do Projeto",
                content: `
**Estrutura de pastas — monorepo organizado:**

\`\`\`
task-manager/
├── backend/
│   ├── app/
│   │   ├── main.py
│   │   ├── database.py
│   │   ├── models/          # SQLAlchemy models
│   │   ├── schemas/         # Pydantic schemas
│   │   ├── routers/         # FastAPI routers
│   │   ├── services/        # Business logic
│   │   └── core/
│   │       ├── config.py    # Settings (pydantic-settings)
│   │       └── security.py  # JWT, hashing
│   ├── tests/
│   ├── alembic/
│   ├── Dockerfile
│   └── requirements.txt
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── hooks/
│   │   ├── contexts/
│   │   └── services/  # axios instances
│   ├── Dockerfile
│   └── package.json
├── docker-compose.yml
├── docker-compose.override.yml
└── README.md           ← CRÍTICO para portfólio
\`\`\`
`,
                flashcards: [
                    { front: "Monorepo", back: "Front e back no mesmo repositório. Facilita integração e CI/CD unificado." },
                    { front: "core/security.py", back: "Centraliza lógica de JWT e hashing de senha — reutilizável em toda a aplicação." }
                ],
                quiz: {
                    question: "Por que separar `schemas/` de `models/` no back-end?",
                    options: [
                        { text: "São a mesma coisa com nomes diferentes.", correct: false, feedback: "São propósitos completamente diferentes." },
                        { text: "models/ são SQLAlchemy (banco); schemas/ são Pydantic (validação HTTP). Separar evita acoplamento.", correct: true, feedback: "Correto! O model do banco não deve expor todos os campos na API — o schema controla isso." },
                        { text: "FastAPI exige essa separação para funcionar.", correct: false, feedback: "Não é exigência técnica — é boa prática de arquitetura." }
                    ]
                }
            },
            {
                id: "m6w1-s4",
                title: "4. Implementando Autenticação JWT",
                content: `
\`\`\`python
# core/security.py
from datetime import datetime, timedelta
from jose import JWTError, jwt
from passlib.context import CryptContext

SECRET_KEY = "sua-chave-secreta"
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 30

pwd_context = CryptContext(schemes=["bcrypt"])

def hash_senha(senha: str) -> str:
    return pwd_context.hash(senha)

def verificar_senha(senha: str, hash: str) -> bool:
    return pwd_context.verify(senha, hash)

def criar_token(data: dict) -> str:
    payload = data.copy()
    payload["exp"] = datetime.utcnow() + timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    return jwt.encode(payload, SECRET_KEY, algorithm=ALGORITHM)

def decodificar_token(token: str) -> dict:
    return jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
\`\`\`

\`\`\`python
# routers/auth.py
@router.post("/login")
def login(form: OAuth2PasswordRequestForm = Depends(), db: Session = Depends(get_db)):
    usuario = buscar_por_email(db, form.username)
    if not usuario or not verificar_senha(form.password, usuario.senha_hash):
        raise HTTPException(status_code=401, detail="Credenciais inválidas")
    token = criar_token({"sub": str(usuario.id)})
    return {"access_token": token, "token_type": "bearer"}
\`\`\`
`,
                flashcards: [
                    { front: "JWT (JSON Web Token)", back: "Token assinado que contém claims (dados). Stateless — o servidor não precisa de sessão." },
                    { front: "bcrypt", back: "Algoritmo de hashing de senha com salt automático. Padrão da indústria." },
                    { front: "OAuth2PasswordRequestForm", back: "Schema FastAPI para receber username/password via form-data no endpoint de login." }
                ],
                quiz: {
                    question: "Por que armazenar `senha_hash` em vez da senha em texto puro?",
                    options: [
                        { text: "Hashes ocupam menos espaço.", correct: false, feedback: "Na prática, bcrypt hashes são maiores que senhas simples." },
                        { text: "Se o banco for vazado, as senhas reais dos usuários não ficam expostas.", correct: true, feedback: "Correto! bcrypt é irreversível — mesmo com o hash, não é possível recuperar a senha original." },
                        { text: "O banco de dados exige hashing.", correct: false, feedback: "O banco armazena qualquer string — é uma decisão de segurança." }
                    ]
                }
            }
        ],
        memoryPalace: {
            title: "Palácio da Memória: O Arquiteto",
            content: `
O planejamento do projeto é como trabalho de um **arquiteto antes da construção**:

- 📐 **A Planta Baixa (Modelagem do Banco):** Antes de colocar um tijolo, você define onde ficam as paredes, portas e janelas. Mudar a planta depois que a casa está pronta é caro.
- 🏗️ **Os Andares (Camadas):** Térreo (routers/HTTP), Primeiro Andar (services/regras), Subsolo (repositories/banco). Cada andar tem sua função.
- 🔑 **O Cofre (JWT/bcrypt):** As senhas ficam num cofre cujo código ninguém sabe — nem você. Só a porta (verificar_senha) confirma se a chave certa foi usada.
- 📋 **O Memorial Descritivo (README):** O documento que explica o projeto para qualquer pessoa. Sem ele, a casa mais bonita não é vendida.
            `
        },
        exam: [
            {
                question: "1. O que bcrypt garante ao armazenar senhas?",
                options: [
                    "Que a senha pode ser recuperada pelo administrador.",
                    "Que mesmo vazando o banco, as senhas reais não são expostas pois o hash é irreversível.",
                    "Que a senha é criptografada e descriptografada com uma chave.",
                    "Que senhas iguais geram hashes iguais para fácil comparação."
                ],
                correctIndex: 1
            },
            {
                question: "2. Por que um link de deploy funcionando é crítico no portfólio?",
                options: [
                    "Recrutadores não sabem usar Git.",
                    "90% dos recrutadores não clonam e rodam projetos localmente — o link é a primeira impressão.",
                    "GitHub não exibe projetos sem deploy.",
                    "Deploy indica que o código está em produção real."
                ],
                correctIndex: 1
            },
            {
                question: "3. JWT é 'stateless' — o que isso significa?",
                options: [
                    "O token nunca expira.",
                    "O servidor não precisa armazenar sessões — toda informação necessária está no próprio token.",
                    "O cliente não precisa enviar o token a cada requisição.",
                    "JWT não usa banco de dados."
                ],
                correctIndex: 1
            },
            {
                question: "4. Qual o propósito da tabela `membros_time` com coluna `role`?",
                options: [
                    "Armazenar o nome do time.",
                    "Implementar controle de acesso baseado em papel (RBAC) dentro de cada time.",
                    "Relacionar tarefas com usuários.",
                    "Registrar o histórico de alterações do time."
                ],
                correctIndex: 1
            }
        ]
    },

    "m6w2": {
        title: "Semana 2: Desenvolvimento do Back-end Completo",
        subtitle: "Colocando Tudo Junto",
        studies: [
            {
                id: "m6w2-s1",
                title: "1. Dependency Injection para Usuário Logado",
                content: `
Um padrão essencial: obter o usuário autenticado em qualquer endpoint via \`Depends()\`:

\`\`\`python
# core/deps.py
from fastapi import Depends, HTTPException
from fastapi.security import OAuth2PasswordBearer
from jose import JWTError
from sqlalchemy.orm import Session
from database import get_db
from core.security import decodificar_token
from models.usuario import Usuario

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="/auth/login")

def get_usuario_atual(
    token: str = Depends(oauth2_scheme),
    db: Session = Depends(get_db)
) -> Usuario:
    try:
        payload = decodificar_token(token)
        user_id = int(payload.get("sub"))
    except (JWTError, ValueError):
        raise HTTPException(status_code=401, detail="Token inválido")

    usuario = db.query(Usuario).filter(Usuario.id == user_id).first()
    if not usuario:
        raise HTTPException(status_code=401, detail="Usuário não encontrado")
    return usuario

# Uso em qualquer endpoint:
@router.get("/tarefas/")
def listar_tarefas(
    usuario: Usuario = Depends(get_usuario_atual),
    db: Session = Depends(get_db)
):
    # usuario já está disponível e autenticado
    return buscar_tarefas_do_usuario(db, usuario.id)
\`\`\`
`,
                flashcards: [
                    { front: "OAuth2PasswordBearer", back: "Extrai o Bearer token do header Authorization automaticamente." },
                    { front: "get_usuario_atual", back: "Dependency reutilizável que valida JWT e retorna o usuário logado em qualquer endpoint." }
                ],
                quiz: {
                    question: "Qual a vantagem de `Depends(get_usuario_atual)` em vez de validar o token manualmente em cada endpoint?",
                    options: [
                        { text: "É mais rápido em tempo de execução.", correct: false, feedback: "Performance não é o benefício principal." },
                        { text: "DRY — a lógica de auth é escrita uma vez e reutilizada em todos os endpoints protegidos.", correct: true, feedback: "Correto! Sem Depends, você duplicaria a validação de JWT em cada rota." },
                        { text: "FastAPI exige usar Depends para JWT.", correct: false, feedback: "Não é exigência técnica — é melhor prática." }
                    ]
                }
            },
            {
                id: "m6w2-s2",
                title: "2. Controle de Acesso (Authorization)",
                content: `
Autenticação = *quem você é*. Autorização = *o que você pode fazer*.

\`\`\`python
# services/tarefa_service.py

def verificar_acesso_board(db: Session, board_id: int, usuario_id: int):
    """Verifica se o usuário é membro do time dono do board."""
    board = db.query(Board).filter(Board.id == board_id).first()
    if not board:
        raise HTTPException(404, "Board não encontrado")

    membro = db.query(MembroTime).filter(
        MembroTime.time_id == board.time_id,
        MembroTime.usuario_id == usuario_id
    ).first()

    if not membro:
        raise HTTPException(403, "Sem acesso a este board")

    return board, membro

# No router:
@router.post("/boards/{board_id}/tarefas/")
def criar_tarefa(
    board_id: int,
    dados: TarefaCreate,
    usuario: Usuario = Depends(get_usuario_atual),
    db: Session = Depends(get_db)
):
    board, membro = verificar_acesso_board(db, board_id, usuario.id)
    # Agora sabemos que o usuário tem acesso
    return tarefa_service.criar(db, dados, board_id, usuario.id)
\`\`\`
`,
                flashcards: [
                    { front: "401 Unauthorized", back: "Não autenticado — token ausente, inválido ou expirado." },
                    { front: "403 Forbidden", back: "Autenticado mas sem permissão — você está logado mas não pode acessar este recurso." },
                    { front: "RBAC", back: "Role-Based Access Control — permissões baseadas no papel do usuário (admin, membro, viewer)." }
                ],
                quiz: {
                    question: "Qual a diferença entre HTTP 401 e 403?",
                    options: [
                        { text: "São sinônimos — ambos indicam acesso negado.", correct: false, feedback: "São distintos e importantes." },
                        { text: "401 = não autenticado (sem token válido); 403 = autenticado mas sem permissão para o recurso.", correct: true, feedback: "Correto! 401 = 'quem é você?', 403 = 'eu sei quem você é, mas não pode entrar aqui'." },
                        { text: "401 é para erros de servidor; 403 é para erros de cliente.", correct: false, feedback: "Ambos são erros de cliente (4xx) — a distinção é de autenticação vs autorização." }
                    ]
                }
            },
            {
                id: "m6w2-s3",
                title: "3. Testes de Integração Completos",
                content: `
\`\`\`python
# tests/conftest.py
import pytest
from fastapi.testclient import TestClient
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from main import app
from database import get_db, Base

TEST_DB = "sqlite:///./test.db"
engine = create_engine(TEST_DB, connect_args={"check_same_thread": False})
TestingSession = sessionmaker(bind=engine)

@pytest.fixture(autouse=True)
def setup_db():
    Base.metadata.create_all(bind=engine)
    yield
    Base.metadata.drop_all(bind=engine)

@pytest.fixture
def client():
    def override_get_db():
        db = TestingSession()
        try:
            yield db
        finally:
            db.close()
    app.dependency_overrides[get_db] = override_get_db
    return TestClient(app)

@pytest.fixture
def usuario_e_token(client):
    client.post("/usuarios/", json={"nome": "Teste", "email": "t@t.com", "senha": "123456"})
    r = client.post("/auth/login", data={"username": "t@t.com", "password": "123456"})
    return r.json()["access_token"]

# tests/test_tarefas.py
def test_criar_tarefa_autenticada(client, usuario_e_token):
    headers = {"Authorization": f"Bearer {usuario_e_token}"}
    r = client.post("/tarefas/", json={"titulo": "Minha tarefa"}, headers=headers)
    assert r.status_code == 201
    assert r.json()["titulo"] == "Minha tarefa"

def test_criar_tarefa_sem_token(client):
    r = client.post("/tarefas/", json={"titulo": "Sem auth"})
    assert r.status_code == 401
\`\`\`
`,
                flashcards: [
                    { front: "dependency_overrides", back: "Substitui dependências do FastAPI em testes. Permite trocar o banco real pelo de testes." },
                    { front: "autouse=True", back: "Fixture executada automaticamente em todos os testes — sem precisar declarar explicitamente." }
                ],
                quiz: {
                    question: "Por que usar `dependency_overrides[get_db]` nos testes?",
                    options: [
                        { text: "Para desativar o banco de dados nos testes.", correct: false, feedback: "O banco ainda é usado — apenas um diferente." },
                        { text: "Para redirecionar a injeção de dependência para o banco de testes sem alterar o código de produção.", correct: true, feedback: "Correto! É a forma idiomática de substituir dependências do FastAPI em testes." },
                        { text: "FastAPI exige override para testes.", correct: false, feedback: "Não é exigência — é a melhor prática." }
                    ]
                }
            },
            {
                id: "m6w2-s4",
                title: "4. README Profissional",
                content: `
O README é o **cartão de visitas** do projeto. Template para portfólio:

\`\`\`markdown
# 📋 Task Manager API

> API REST para gestão de tarefas em equipe com boards Kanban.

[![CI](https://github.com/user/repo/actions/workflows/ci.yml/badge.svg)](...)
[![Coverage](https://codecov.io/gh/user/repo/badge.svg)](...)

## 🚀 Demo
**API:** https://task-api.railway.app/docs  
**Frontend:** https://task-manager.vercel.app

## 🛠️ Stack
- **Back-end:** Python 3.11, FastAPI, SQLAlchemy, Alembic
- **Banco:** PostgreSQL 15
- **Front-end:** React 18, Vite, TanStack Query
- **Auth:** JWT com bcrypt
- **Infra:** Docker, GitHub Actions CI/CD, Railway

## ▶️ Rodando Localmente
\`\`\`bash
git clone https://github.com/user/task-manager
cd task-manager
cp .env.example .env
docker compose up --build
\`\`\`
API disponível em http://localhost:8000/docs

## 🧪 Testes
\`\`\`bash
docker compose run --rm api pytest --cov=app
\`\`\`
\`\`\`

**Seções obrigatórias:** Demo link, Stack, Como rodar, Testes, Arquitetura.
`,
                flashcards: [
                    { front: "Badges no README", back: "Indicadores visuais de CI status e coverage. Mostram maturidade de engenharia ao recrutador." },
                    { front: ".env.example", back: "Template do .env sem valores reais — commitado no repo para facilitar setup local." }
                ],
                quiz: {
                    question: "Por que commitar `.env.example` mas não `.env`?",
                    options: [
                        { text: "Porque .env não é um arquivo de texto.", correct: false, feedback: ".env é texto simples." },
                        { text: ".env.example mostra as variáveis necessárias sem expor segredos reais. .env contém credenciais de produção.", correct: true, feedback: "Correto! O example serve de documentação e template — o .env real fica no .gitignore." },
                        { text: "GitHub rejeita arquivos .env.", correct: false, feedback: "GitHub aceita qualquer arquivo — é uma decisão de segurança sua." }
                    ]
                }
            }
        ],
        memoryPalace: {
            title: "Palácio da Memória: O Crachá do Evento",
            content: `
Autenticação e autorização são como um **sistema de crachás em um evento corporativo**:

- 🎫 **O Crachá (JWT):** Você recebe na entrada (login). Contém seu nome, cargo e validade. Sem ele, você não entra em nenhuma sala.
- 🔐 **O Cofre de Senhas (bcrypt):** Na recepção, sua senha é destruída — apenas sua impressão digital (hash) fica registrada. Nem a recepcionista sabe sua senha.
- 🚪 **O Segurança da Sala (401 vs 403):** 401 = você não tem crachá. 403 = tem crachá, mas não é VIP — esta sala é só para membros Gold.
- 🔄 **A Catraca Reutilizável (Depends):** Cada porta tem a mesma catraca — você não instala um sistema de segurança diferente em cada sala.
- 📰 **O Folder do Evento (README):** O guia que qualquer participante pega na entrada. Sem ele, ninguém sabe o que o evento oferece nem como se locomover.
            `
        },
        exam: [
            {
                question: "1. `OAuth2PasswordBearer(tokenUrl='/auth/login')` serve para:",
                options: [
                    "Criar o endpoint de login automaticamente.",
                    "Extrair o Bearer token do header Authorization das requisições.",
                    "Validar se o token é um JWT válido.",
                    "Conectar ao OAuth2 do Google."
                ],
                correctIndex: 1
            },
            {
                question: "2. Um usuário logado tenta acessar um board de outro time. O status correto é:",
                options: ["200 OK", "401 Unauthorized", "403 Forbidden", "404 Not Found"],
                correctIndex: 2
            },
            {
                question: "3. `app.dependency_overrides[get_db] = override_get_db` nos testes serve para:",
                options: [
                    "Desabilitar autenticação nos testes.",
                    "Redirecionar a injeção de get_db para o banco de testes sem modificar o código de produção.",
                    "Acelerar os testes desativando o ORM.",
                    "Simular erros de banco de dados."
                ],
                correctIndex: 1
            },
            {
                question: "4. Por que incluir um link de demo ao vivo no README do portfólio?",
                options: [
                    "É obrigatório pelo GitHub.",
                    "Permite que recrutadores vejam o projeto funcionando sem setup local — aumenta drasticamente as chances de avaliação.",
                    "Melhora o SEO do repositório.",
                    "Demonstra conhecimento de DNS."
                ],
                correctIndex: 1
            }
        ]
    },

    "m6w3": {
        title: "Semana 3: Front-end do Projeto Final",
        subtitle: "Interface Completa e Integrada",
        studies: [
            {
                id: "m6w3-s1",
                title: "1. Estrutura e Autenticação no React",
                content: `
**AuthContext** com persistência de token e proteção de rotas:

\`\`\`jsx
// contexts/AuthContext.jsx
import { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
    const [usuario, setUsuario] = useState(null);
    const [carregando, setCarregando] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            api.defaults.headers.Authorization = \`Bearer \${token}\`;
            api.get('/usuarios/me')
                .then(r => setUsuario(r.data))
                .catch(() => localStorage.removeItem('token'))
                .finally(() => setCarregando(false));
        } else {
            setCarregando(false);
        }
    }, []);

    const login = async (email, senha) => {
        const form = new FormData();
        form.append('username', email);
        form.append('password', senha);
        const { data } = await api.post('/auth/login', form);
        localStorage.setItem('token', data.access_token);
        api.defaults.headers.Authorization = \`Bearer \${data.access_token}\`;
        const me = await api.get('/usuarios/me');
        setUsuario(me.data);
        navigate('/dashboard');
    };

    const logout = () => {
        localStorage.removeItem('token');
        setUsuario(null);
        navigate('/login');
    };

    return (
        <AuthContext.Provider value={{ usuario, login, logout, carregando }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => useContext(AuthContext);
\`\`\`
`,
                flashcards: [
                    { front: "Persistir token no localStorage", back: "Permite que o usuário continue logado após fechar o browser. Revalide ao carregar a app." },
                    { front: "api.defaults.headers.Authorization", back: "Define o header Bearer em todas as requisições Axios futuras automaticamente." }
                ],
                quiz: {
                    question: "Por que fazer `api.get('/usuarios/me')` ao encontrar o token no localStorage?",
                    options: [
                        { text: "Para testar a velocidade da API.", correct: false, feedback: "Performance não é o motivo." },
                        { text: "Para verificar se o token ainda é válido e obter os dados atuais do usuário.", correct: true, feedback: "Correto! Um token expirado ou revogado retornaria 401 — sem essa verificação, você exibiria um estado logado inválido." },
                        { text: "O token não contém informações do usuário.", correct: false, feedback: "JWT contém dados, mas podem estar desatualizados — buscar do servidor garante dados frescos." }
                    ]
                }
            },
            {
                id: "m6w3-s2",
                title: "2. Kanban Board com React",
                content: `
**Board interativo** com React Query para sincronizar com a API:

\`\`\`jsx
// pages/Board.jsx
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import api from '../services/api';

function Board({ boardId }) {
    const queryClient = useQueryClient();

    const { data: colunas, isLoading } = useQuery({
        queryKey: ['board', boardId, 'colunas'],
        queryFn: () => api.get(\`/boards/\${boardId}/colunas\`).then(r => r.data)
    });

    const moverTarefa = useMutation({
        mutationFn: ({ tarefaId, colunaId }) =>
            api.patch(\`/tarefas/\${tarefaId}\`, { coluna_id: colunaId }),
        onSuccess: () => queryClient.invalidateQueries({ queryKey: ['board', boardId] })
    });

    if (isLoading) return <BoardSkeleton />;

    return (
        <div className="board-container">
            {colunas?.map(coluna => (
                <Coluna
                    key={coluna.id}
                    coluna={coluna}
                    onMoverTarefa={moverTarefa.mutate}
                />
            ))}
        </div>
    );
}
\`\`\`
`,
                flashcards: [
                    { front: "Skeleton Loading", back: "Placeholder visual enquanto dados carregam — melhor UX que spinner genérico." },
                    { front: "PATCH vs PUT", back: "PATCH atualiza campos específicos; PUT substitui o recurso inteiro. Mover tarefa = PATCH." }
                ],
                quiz: {
                    question: "Por que usar `invalidateQueries` após mover uma tarefa?",
                    options: [
                        { text: "Para limpar o cache e economizar memória.", correct: false, feedback: "Não é sobre memória." },
                        { text: "Para forçar o React Query a buscar o estado atualizado do board, refletindo a nova posição da tarefa.", correct: true, feedback: "Correto! Sem invalidação, o board mostraria a tarefa na posição antiga até o próximo refetch." },
                        { text: "PATCH não atualiza o cache automaticamente.", correct: false, feedback: "Verdade, mas a razão é garantir consistência com o servidor." }
                    ]
                }
            },
            {
                id: "m6w3-s3",
                title: "3. Formulários com Validação (React Hook Form)",
                content: `
\`\`\`bash
npm install react-hook-form zod @hookform/resolvers
\`\`\`

\`\`\`jsx
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const schema = z.object({
    titulo: z.string().min(3, 'Mínimo 3 caracteres').max(100),
    prazo: z.string().optional(),
    prioridade: z.enum(['baixa', 'media', 'alta'])
});

function FormTarefa({ onSubmit }) {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(schema),
        defaultValues: { prioridade: 'media' }
    });

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register('titulo')} placeholder="Título da tarefa" />
            {errors.titulo && <span className="erro">{errors.titulo.message}</span>}

            <select {...register('prioridade')}>
                <option value="baixa">Baixa</option>
                <option value="media">Média</option>
                <option value="alta">Alta</option>
            </select>

            <button type="submit">Criar Tarefa</button>
        </form>
    );
}
\`\`\`
`,
                flashcards: [
                    { front: "React Hook Form", back: "Biblioteca de formulários performática — minimiza re-renders usando refs ao invés de estado." },
                    { front: "Zod", back: "Biblioteca de validação de schema com TypeScript-first. Integra com RHF via zodResolver." },
                    { front: "register()", back: "Conecta um input ao formulário do RHF sem precisar de useState manual." }
                ],
                quiz: {
                    question: "Por que React Hook Form é mais performático que formulários com useState?",
                    options: [
                        { text: "Usa WebWorkers para processamento.", correct: false, feedback: "Não usa WebWorkers." },
                        { text: "Usa refs para rastrear inputs — não dispara re-render a cada tecla digitada.", correct: true, feedback: "Correto! useState re-renderiza a cada keystroke. RHF com refs mantém o DOM atualizado sem re-render." },
                        { text: "Desabilita a validação para ser mais rápido.", correct: false, feedback: "RHF ainda valida — só faz isso de forma mais eficiente." }
                    ]
                }
            },
            {
                id: "m6w3-s4",
                title: "4. Deploy Full-Stack (API + Frontend)",
                content: `
**Estratégia de deploy separado** (mais comum e recomendada):

\`\`\`
API (FastAPI):   Railway / Render / Fly.io
Frontend (React): Vercel / Netlify
Banco:          Railway PostgreSQL / Supabase
\`\`\`

**Build de produção do React:**
\`\`\`bash
npm run build  # Gera pasta dist/
\`\`\`

**Configuração Vercel** (\`vercel.json\`):
\`\`\`json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
\`\`\`

> O \`rewrites\` é o equivalente do \`try_files\` do Nginx — garante que o React Router funcione.

**Variáveis de ambiente no Vercel:**
\`\`\`
VITE_API_URL=https://task-api.railway.app
\`\`\`

**CORS no FastAPI para produção:**
\`\`\`python
allow_origins=["https://task-manager.vercel.app"]
\`\`\`
`,
                flashcards: [
                    { front: "Vercel", back: "PaaS otimizado para front-end. Deploy automático via GitHub, CDN global, SSL gratuito." },
                    { front: "vercel.json rewrites", back: "Redireciona todas as rotas para index.html — essencial para React Router funcionar com deep links." }
                ],
                quiz: {
                    question: "Por que restringir o `allow_origins` do CORS ao domínio de produção específico?",
                    options: [
                        { text: "Para reduzir latência das requisições.", correct: false, feedback: "Performance não é o motivo." },
                        { text: "Por segurança — `allow_origins=['*']` permitiria qualquer site fazer requisições autenticadas à sua API.", correct: true, feedback: "Correto! Com * qualquer site malicioso poderia usar tokens roubados para acessar sua API." },
                        { text: "Vercel exige CORS restrito.", correct: false, feedback: "Não é exigência da Vercel — é boa prática de segurança." }
                    ]
                }
            }
        ],
        memoryPalace: {
            title: "Palácio da Memória: O Espelho da Aplicação",
            content: `
O front-end do projeto final é o **espelho da API**:

- 🪞 **O Reflexo (AuthContext):** O front guarda o reflexo do usuário logado. Quando o espelho inicia, verifica se o reflexo anterior ainda é válido (token no localStorage).
- 🎴 **O Quadro de Avisos (Kanban):** Cada coluna é uma área do quadro. Mover um papel (tarefa) de uma área para outra é um PATCH — uma pequena mudança cirúrgica.
- ✏️ **O Formulário do Cartório (React Hook Form + Zod):** Antes de registrar qualquer documento, o cartório verifica a formatação. Sem assinatura (mínimo 3 chars), sem protocolo.
- 🌐 **A Vitrine (Vercel):** A vitrine fica na rua principal (CDN global). Não importa de onde o cliente vem — a vitrine é sempre rápida.
            `
        },
        exam: [
            {
                question: "1. Por que fazer uma requisição à API ao carregar o app quando há token no localStorage?",
                options: [
                    "Para popular o cache do React Query.",
                    "Para validar que o token ainda é válido e obter dados frescos do usuário.",
                    "O localStorage pode ter corrompido o token.",
                    "Para registrar o acesso no servidor."
                ],
                correctIndex: 1
            },
            {
                question: "2. Qual a diferença entre PATCH e PUT em uma API REST?",
                options: [
                    "PATCH é mais rápido que PUT.",
                    "PATCH atualiza campos específicos; PUT substitui o recurso inteiro.",
                    "PUT é para criar; PATCH é para deletar.",
                    "São equivalentes — apenas convenção de nomenclatura."
                ],
                correctIndex: 1
            },
            {
                question: "3. React Hook Form usa refs em vez de useState. Qual o benefício?",
                options: [
                    "Refs permitem validação mais complexa.",
                    "Evita re-renders a cada keystroke — melhor performance em formulários grandes.",
                    "useState não funciona com formulários.",
                    "Refs persistem o estado após recarregar a página."
                ],
                correctIndex: 1
            },
            {
                question: "4. O arquivo `vercel.json` com rewrites serve para:",
                options: [
                    "Configurar as variáveis de ambiente do Vercel.",
                    "Permitir que o React Router funcione redirecionando todas as rotas para index.html.",
                    "Definir qual branch é deployada automaticamente.",
                    "Configurar o domínio personalizado."
                ],
                correctIndex: 1
            }
        ]
    },

    "m6w4": {
        title: "Semana 4: Polimento, Portfólio e Próximos Passos",
        subtitle: "Da Conclusão à Primeira Vaga",
        studies: [
            {
                id: "m6w4-s1",
                title: "1. Polimento Final do Projeto",
                content: `
Os detalhes que separam um projeto de portfólio de um projeto de estudo:

**Tratamento de Erros Global:**
\`\`\`jsx
// services/api.js
api.interceptors.response.use(
    response => response,
    error => {
        if (error.response?.status === 401) {
            localStorage.removeItem('token');
            window.location.href = '/login';
        }
        return Promise.reject(error);
    }
);
\`\`\`

**Feedback visual para o usuário:**
- ✅ Loading states em todos os botões de ação
- ✅ Mensagens de sucesso/erro com toast notifications
- ✅ Skeleton loaders em vez de spinners genéricos
- ✅ Formulários desabilitados durante submit
- ✅ Confirmação antes de deletar recursos

**Acessibilidade básica:**
\`\`\`jsx
<button
    aria-label="Deletar tarefa Implementar auth"
    disabled={isDeleting}
>
    {isDeleting ? 'Deletando...' : '🗑️'}
</button>
\`\`\`
`,
                flashcards: [
                    { front: "Interceptor 401 global", back: "Desoga automaticamente o usuário em qualquer requisição que retorne 401 — evita estado incoerente." },
                    { front: "Toast Notifications", back: "Mensagens temporárias de feedback (sucesso/erro) — React Hot Toast, Sonner, Chakra Toast." }
                ],
                quiz: {
                    question: "Por que usar um interceptor global para tratar o erro 401 em vez de tratar em cada chamada?",
                    options: [
                        { text: "Interceptors são mais rápidos.", correct: false, feedback: "Performance não é o motivo." },
                        { text: "DRY — a lógica de logout por token expirado é escrita uma vez e aplicada a todas as requisições automaticamente.", correct: true, feedback: "Correto! Sem o interceptor, você repetiria esse tratamento em cada chamada de API." },
                        { text: "Axios exige interceptors para tratamento de erros.", correct: false, feedback: "Axios funciona sem interceptors — é uma escolha de design." }
                    ]
                }
            },
            {
                id: "m6w4-s2",
                title: "2. Git Profissional — Commits e Branches",
                content: `
**Conventional Commits** — padrão da indústria:

\`\`\`bash
feat: adiciona endpoint de criação de tarefas
fix: corrige validação de email no cadastro
docs: atualiza README com instruções de deploy
test: adiciona testes para service de autenticação
refactor: extrai lógica de JWT para core/security.py
chore: atualiza dependências do requirements.txt
\`\`\`

**Git Flow simplificado:**
\`\`\`
main          ←── produção (protegida)
  └── develop ←── integração
        ├── feature/auth-jwt
        ├── feature/kanban-board
        └── fix/validacao-email
\`\`\`

**Pull Request Template** (\`.github/pull_request_template.md\`):
\`\`\`markdown
## O que essa PR faz?
Implementa autenticação JWT com bcrypt.

## Como testar?
1. POST /auth/login com { username, password }
2. Verificar token no response

## Checklist
- [x] Testes passando
- [x] Coverage > 80%
- [x] Documentação atualizada
\`\`\`
`,
                flashcards: [
                    { front: "Conventional Commits", back: "Padrão de mensagens de commit: tipo(escopo): descrição. Facilita changelogs automáticos." },
                    { front: "PR Template", back: "Template automático para pull requests — padroniza informações e checklist de qualidade." }
                ],
                quiz: {
                    question: "Por que seguir Conventional Commits é valorizado por recrutadores?",
                    options: [
                        { text: "GitHub exige esse formato.", correct: false, feedback: "GitHub aceita qualquer mensagem de commit." },
                        { text: "Demonstra profissionalismo e conhecimento de práticas de times reais — commits rastreáveis e legíveis.", correct: true, feedback: "Correto! Um histórico de commits bem estruturado mostra maturidade de engenharia." },
                        { text: "Commits convencionais são mais rápidos de fazer.", correct: false, feedback: "Na verdade, exigem mais atenção." }
                    ]
                }
            },
            {
                id: "m6w4-s3",
                title: "3. Preparando o LinkedIn e GitHub para Recrutadores",
                content: `
**GitHub Profile README** — seu cartão de visitas público:

\`\`\`markdown
# Olá, sou [Nome] 👋

Desenvolvedor Back-end Python | FastAPI | PostgreSQL | Docker

## 🛠️ Stack Principal
![Python](https://img.shields.io/badge/-Python-3776AB?logo=python&logoColor=white)
![FastAPI](https://img.shields.io/badge/-FastAPI-009688?logo=fastapi&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/-PostgreSQL-336791?logo=postgresql)
![Docker](https://img.shields.io/badge/-Docker-2496ED?logo=docker&logoColor=white)
![React](https://img.shields.io/badge/-React-61DAFB?logo=react&logoColor=black)

## 🚀 Projetos em Destaque
| Projeto | Stack | Demo |
|---------|-------|------|
| Task Manager | FastAPI + React + Docker | [link](https://...) |
\`\`\`

**LinkedIn — pontos críticos:**
- Título: "Desenvolvedor Python | FastAPI | Back-end" (não apenas "Programador")
- About: projetos concretos com tecnologias e resultados
- Projetos na seção "Projetos" com link do GitHub + deploy
- Contribuições GitHub visíveis (mapa verde)

**Palavras-chave que recrutadores buscam:**
\`Python\` \`FastAPI\` \`REST API\` \`PostgreSQL\` \`Docker\` \`CI/CD\` \`React\` \`Git\`
`,
                flashcards: [
                    { front: "GitHub Profile README", back: "Arquivo README.md na raiz de um repo com mesmo nome do usuário. Exibido no perfil público." },
                    { front: "Shields.io badges", back: "Badges visuais de tecnologias para o README. Mostram stack visualmente." }
                ],
                quiz: {
                    question: "Por que o mapa de contribuições do GitHub ('quadradinhos verdes') importa para recrutadores?",
                    options: [
                        { text: "Recrutadores avaliam o número de estrelas dos repos.", correct: false, feedback: "Estrelas são relevantes mas não o principal." },
                        { text: "Demonstra consistência e hábito de codar — atividade regular é mais valorizada que um único projeto grande.", correct: true, feedback: "Correto! Consistência diária mostra disciplina — uma qualidade muito valorizada em júniores." },
                        { text: "O GitHub usa o mapa para calcular a reputação do desenvolvedor.", correct: false, feedback: "Não existe 'reputação oficial' do GitHub." }
                    ]
                }
            },
            {
                id: "m6w4-s4",
                title: "4. O Que Vem Depois — Próximos Passos",
                content: `
**Você concluiu 6 meses de fundamentos sólidos. O que estudar em seguida:**

**Nível Pleno (próximos 6-12 meses):**
- 🔴 **Redis** — cache, filas de tarefas, pub/sub
- ⚡ **WebSockets** — tempo real (chats, notificações)
- 🔄 **Celery** — tasks assíncronas e agendadas
- 📊 **TypeScript** — tipagem estática no React
- 🧪 **TDD** — Test-Driven Development

**Infraestrutura:**
- ☁️ **AWS/GCP** — S3, Lambda, RDS
- 🔧 **Terraform** — infraestrutura como código
- ☸️ **Kubernetes** — orquestração de containers

**Práticas de Time:**
- 📐 **Clean Architecture / Hexagonal Architecture**
- 🔍 **Code Review** — dar e receber feedback
- 📖 **Design Patterns** — Singleton, Factory, Repository

**Checklist para candidatura:**
- ✅ 2-3 projetos no GitHub com README profissional e deploy
- ✅ LinkedIn atualizado com stack e projetos
- ✅ Conventional commits e histórico Git limpo
- ✅ Mínimo 70% coverage nos projetos principais
- ✅ Swagger/OpenAPI documentado na API
`,
                flashcards: [
                    { front: "Redis", back: "Store em memória para cache, sessões e filas. Essencial para APIs de alta performance." },
                    { front: "TypeScript", back: "Superset tipado do JavaScript. Reduz bugs em runtime e melhora DX em projetos React maiores." },
                    { front: "Próxima milestone", back: "2-3 projetos sólidos no GitHub + LinkedIn otimizado = condições mínimas para aplicar vagas." }
                ],
                quiz: {
                    question: "Qual o próximo passo mais impactante após concluir o curso de 6 meses?",
                    options: [
                        { text: "Aprender imediatamente Kubernetes e AWS.", correct: false, feedback: "Kubernetes é para nível sênior/pleno — não é o próximo passo para júnior." },
                        { text: "Publicar 2-3 projetos sólidos com README + deploy e otimizar o LinkedIn para começar a aplicar vagas.", correct: true, feedback: "Correto! Projetos publicados e perfil otimizado são os gatilhos para entrevistas. Não existe vaga sem portfólio visível." },
                        { text: "Esperar acumular mais 6 meses de estudo antes de aplicar.", correct: false, feedback: "Você já tem o necessário — aplique agora e aprenda no processo." }
                    ]
                }
            }
        ],
        memoryPalace: {
            title: "Palácio da Memória: A Cerimônia de Formatura",
            content: `
A semana final é a **cerimônia de formatura**:

- 🎓 **O Diploma (Projeto Deployado):** Não é o canudo de papel — é o link funcionando. Qualquer pessoa no mundo pode acessar o que você construiu.
- 📚 **O Histórico Escolar (Git Log):** Cada commit é uma disciplina cursada. Conventional Commits são as notas organizadas que qualquer professor (recrutador) consegue ler.
- 🪪 **A Carteirinha (LinkedIn + GitHub Profile):** Sua identidade profissional pública. É o primeiro lugar onde um recrutador olha antes de ligar.
- 🗺️ **O Mapa do Mundo (Próximos Passos):** Você chegou aqui. Agora há continentes inexplorados — Redis, TypeScript, Kubernetes. Mas você tem o mapa e sabe como navegar.
- 🚀 **O Lançamento (Primeira Candidatura):** O foguete está pronto. Não existe "perfecto" — existe "lançado". Quem aplica aprende mais em 1 mês de entrevistas do que em 6 meses a mais de estudo isolado.
            `
        },
        exam: [
            {
                question: "1. O interceptor global de 401 no Axios serve para:",
                options: [
                    "Redirecionar requisições para backup servers.",
                    "Fazer logout automático quando qualquer requisição retorna token expirado/inválido.",
                    "Repetir automaticamente requisições que falharam.",
                    "Logar todas as requisições no console."
                ],
                correctIndex: 1
            },
            {
                question: "2. `feat: adiciona autenticação JWT` é um exemplo de:",
                options: [
                    "Git branch naming convention.",
                    "Conventional Commits — padrão de mensagens de commit da indústria.",
                    "GitHub Actions workflow name.",
                    "Comentário de código Python."
                ],
                correctIndex: 1
            },
            {
                question: "3. Qual o checklist mínimo antes de aplicar para vagas?",
                options: [
                    "Conhecer Kubernetes e AWS avançado.",
                    "2-3 projetos com README + deploy + LinkedIn otimizado + cobertura de testes mínima.",
                    "Ter 500+ commits no GitHub.",
                    "Certificação AWS Solutions Architect."
                ],
                correctIndex: 1
            },
            {
                question: "4. Por que não esperar 'estar completamente pronto' para aplicar vagas?",
                options: [
                    "As vagas expiram rapidamente.",
                    "Entrevistas são o melhor feedback — você aprende mais em 1 mês aplicando do que em 6 meses estudando sem aplicar.",
                    "Recrutadores preferem candidatos inexperientes.",
                    "O mercado está saturado e esperar piora as chances."
                ],
                correctIndex: 1
            }
        ]
    }
};

window.courseData = courseData;

