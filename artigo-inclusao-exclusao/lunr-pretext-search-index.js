var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "frontmatter",
  "level": "1",
  "url": "frontmatter.html",
  "type": "Pré-textual",
  "number": "",
  "title": "Pré-textual",
  "body": "     Jogli Gidel da Silva Araújo   Departamento de Matemática    Universidade Federal Rural de Pernambuco - UFRPE  Recife, Pernambuco, Brasil   jogli.silva@ufrpe.br    Ricardo Nunes Machado Junior   Departamento de Matemática    Universidade Federal Rural de Pernambuco - UFRPE  Recife, Pernambuco, Brasil   ricardo.machadojunior@ufrpe.br    Thiago Yukio Tanaka   Departamento de Matemática    Universidade Federal Rural de Pernambuco - UFRPE  Recife, Pernambuco, Brasil   thiago.tanaka@ufrpe.br       Sejam todas e todos bem-vindas e bem-vindos ao complemento do artigo: \"O Problema das Moedas de Frobenius: Uma abordagem Olímpica e Computacional\", submetido à Revista Eletrônica da Matemática (REMAT). Se você chegou até aqui através de nosso trabalho, descobrirá um complemento da parte computacional que desenvolvemos para a construção de nosso artigo.  Destacamos dentre as ferramentas computacionais disponibilizadas:  O Algoritmo de Euclides para o cálculo de MDC;  A solução geral para uma equação diofantina linear (em qualquer dimensão).  Gráfico com algumas soluções de Equações Diofantinas Lineares de dimensão 2.  A solução do número de Frobenius em dimensão 2 e dimensão 3.  Estas tecnologias podem auxiliar bastante o estudo no tema das Equações Diofantinas uma vez que permitem não apenas rápidas soluções para o problema, mas também processos intermediários detalhadamente escritos.  Esperamos que vocês gostem, usem e abusem da tecnologia disponibilizada!    "
},
{
  "id": "sec-aritmetica",
  "level": "1",
  "url": "sec-aritmetica.html",
  "type": "Seção",
  "number": "1",
  "title": "Aritmética dos Inteiros",
  "body": " Aritmética dos Inteiros     Sejam e números inteiros com . Então existem únicos inteiros e tais que O número é chamado de dividendo , o número é chamado de divisor , o número é chamado de quociente e o número é chamado de resto .    Escolha valores para e para obter todos os passos do algoritmo descrito no teorema anterior.   Divisão Euclideana.    O algoritmo em SageMath está descrito abaixo:     Sejam e dois inteiros, diz-se que o inteiro positivo é o máximo divisor comum de e , e denotamos por , se satisfaz as seguintes condições:  é um divisor comum de e , ou seja, e ;  é divisível por todo divisor comum de e , isto é, se é divisor comum de e , então .      (Algoritmo de Euclides para calcular o MDC)  Sejam e inteiros positivos. O pode ser calculado com os seguintes passos.  Faça , e ;  Defina como o resto da divisão de por , isto é, com ;  Se incremete de 1 e volte para o passo 2, caso contrário .      Escolha valores para e para obter todos os passos do algoritmo descrito no teorema anterior.   Algoritmo de Euclides para calcular MDC.    O algoritmo em SageMath está descrito abaixo:     Se e são inteiros, um dos quais não é nulo, então existem inteiros e tais que    Além de partes implementadas em SageMath, vamos mostrar alguns comandos de SageMath para o cálculo do MDC e de soluções para Equações Diofantinas.   Dados e números inteiros, os valores de , e , tais que podem ser obtidos usando método . A saída será uma tripla, contendo o MDC, o valor de e o valor de , respectivamente.   O código abaixo, quando executado, retornará \"88 * (2) + 25 * (-7) = 1\". Os valores de e podem ser trocados.    "
},
{
  "id": "theorem-1",
  "level": "2",
  "url": "sec-aritmetica.html#theorem-1",
  "type": "Teorema",
  "number": "1.1",
  "title": "",
  "body": " Sejam e números inteiros com . Então existem únicos inteiros e tais que O número é chamado de dividendo , o número é chamado de divisor , o número é chamado de quociente e o número é chamado de resto .  "
},
{
  "id": "technology-1",
  "level": "2",
  "url": "sec-aritmetica.html#technology-1",
  "type": "Tecnologia",
  "number": "1.2",
  "title": "",
  "body": " Escolha valores para e para obter todos os passos do algoritmo descrito no teorema anterior.   Divisão Euclideana.    O algoritmo em SageMath está descrito abaixo:   "
},
{
  "id": "definition-1",
  "level": "2",
  "url": "sec-aritmetica.html#definition-1",
  "type": "Definição",
  "number": "1.4",
  "title": "",
  "body": " Sejam e dois inteiros, diz-se que o inteiro positivo é o máximo divisor comum de e , e denotamos por , se satisfaz as seguintes condições:  é um divisor comum de e , ou seja, e ;  é divisível por todo divisor comum de e , isto é, se é divisor comum de e , então .    "
},
{
  "id": "theorem-2",
  "level": "2",
  "url": "sec-aritmetica.html#theorem-2",
  "type": "Teorema",
  "number": "1.5",
  "title": "(Algoritmo de Euclides para calcular o MDC).",
  "body": " (Algoritmo de Euclides para calcular o MDC)  Sejam e inteiros positivos. O pode ser calculado com os seguintes passos.  Faça , e ;  Defina como o resto da divisão de por , isto é, com ;  Se incremete de 1 e volte para o passo 2, caso contrário .    "
},
{
  "id": "technology-2",
  "level": "2",
  "url": "sec-aritmetica.html#technology-2",
  "type": "Tecnologia",
  "number": "1.6",
  "title": "",
  "body": " Escolha valores para e para obter todos os passos do algoritmo descrito no teorema anterior.   Algoritmo de Euclides para calcular MDC.    O algoritmo em SageMath está descrito abaixo:   "
},
{
  "id": "theorem-3",
  "level": "2",
  "url": "sec-aritmetica.html#theorem-3",
  "type": "Teorema",
  "number": "1.8",
  "title": "",
  "body": " Se e são inteiros, um dos quais não é nulo, então existem inteiros e tais que   "
},
{
  "id": "technology-3",
  "level": "2",
  "url": "sec-aritmetica.html#technology-3",
  "type": "Tecnologia",
  "number": "1.9",
  "title": "",
  "body": " Dados e números inteiros, os valores de , e , tais que podem ser obtidos usando método . A saída será uma tripla, contendo o MDC, o valor de e o valor de , respectivamente.   O código abaixo, quando executado, retornará \"88 * (2) + 25 * (-7) = 1\". Os valores de e podem ser trocados.   "
},
{
  "id": "section-2",
  "level": "1",
  "url": "section-2.html",
  "type": "Seção",
  "number": "2",
  "title": "Equações Diofantinas Lineares",
  "body": " Equações Diofantinas Lineares   Seja uma solução particular da Equação Diofantina Linear  , na qual, . Então, o seu conjunto solução, é composto pelos pares em tais que     No SageMath existe um método para resolver equações diofantinas. Para utiliza-lo é necessário declarar cada variável que será usada na equação. Abaixo, declaramos as variáveis e e escrevemos os comandos para resolver a equação diofantina      Escolha os valores , e para obter algumas soluções inteiras no plano, da Equação Diofantina:       Abaixo, temos o código em SageMath para a função que calcula algumas soluções e faz o gráfico das Equações Diofantinas Lineares em duas variáveis.    Não entraremos em detalhes, mas ressaltamos que a função \"solve_diophantine\" se estende para uma maior quantidade de variáveis e não está restrita ao caso linear. Experimente a equação abaixo e depois substitua a equação por outra.   "
},
{
  "id": "proposition-1",
  "level": "2",
  "url": "section-2.html#proposition-1",
  "type": "Proposição",
  "number": "2.1",
  "title": "",
  "body": " Seja uma solução particular da Equação Diofantina Linear  , na qual, . Então, o seu conjunto solução, é composto pelos pares em tais que   "
},
{
  "id": "technology-4",
  "level": "2",
  "url": "section-2.html#technology-4",
  "type": "Tecnologia",
  "number": "2.2",
  "title": "",
  "body": " No SageMath existe um método para resolver equações diofantinas. Para utiliza-lo é necessário declarar cada variável que será usada na equação. Abaixo, declaramos as variáveis e e escrevemos os comandos para resolver a equação diofantina    "
},
{
  "id": "technology-5",
  "level": "2",
  "url": "section-2.html#technology-5",
  "type": "Tecnologia",
  "number": "2.3",
  "title": "",
  "body": " Escolha os valores , e para obter algumas soluções inteiras no plano, da Equação Diofantina:       Abaixo, temos o código em SageMath para a função que calcula algumas soluções e faz o gráfico das Equações Diofantinas Lineares em duas variáveis.   "
},
{
  "id": "section-3",
  "level": "1",
  "url": "section-3.html",
  "type": "Seção",
  "number": "3",
  "title": "O Problema do Número de Frobenius",
  "body": " O Problema do Número de Frobenius   Sejam e inteiros positivos com . Considere a expressão , com . O maior inteiro , tal que não admite solução, mas admite solução sempre que e , é dado por     Número de Frobenius para duas variáveis.      O código para calcular o número de Frobenius para duas variáveis e uma parametrização para a solução geral segue abaixo:     Número de Frobenius para 3 variáveis.        Dados os inteiros positivos e com , existem exatamente números inteiros não negativos que não são da forma com .    Implementação para calcular a quantidade de valores e os valores que não são da forma com .        "
},
{
  "id": "theorem-4",
  "level": "2",
  "url": "section-3.html#theorem-4",
  "type": "Teorema",
  "number": "3.1",
  "title": "",
  "body": " Sejam e inteiros positivos com . Considere a expressão , com . O maior inteiro , tal que não admite solução, mas admite solução sempre que e , é dado por   "
},
{
  "id": "technology-6",
  "level": "2",
  "url": "section-3.html#technology-6",
  "type": "Tecnologia",
  "number": "3.2",
  "title": "",
  "body": " Número de Frobenius para duas variáveis.      O código para calcular o número de Frobenius para duas variáveis e uma parametrização para a solução geral segue abaixo:   "
},
{
  "id": "technology-7",
  "level": "2",
  "url": "section-3.html#technology-7",
  "type": "Tecnologia",
  "number": "3.4",
  "title": "",
  "body": " Número de Frobenius para 3 variáveis.      "
},
{
  "id": "proposition-2",
  "level": "2",
  "url": "section-3.html#proposition-2",
  "type": "Proposição",
  "number": "3.6",
  "title": "",
  "body": " Dados os inteiros positivos e com , existem exatamente números inteiros não negativos que não são da forma com .  "
},
{
  "id": "technology-8",
  "level": "2",
  "url": "section-3.html#technology-8",
  "type": "Tecnologia",
  "number": "3.7",
  "title": "",
  "body": " Implementação para calcular a quantidade de valores e os valores que não são da forma com .       "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
