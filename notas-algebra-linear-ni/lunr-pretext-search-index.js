var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "prof-ricardo-machado",
  "level": "1",
  "url": "prof-ricardo-machado.html",
  "type": "Biografia do autor",
  "number": "",
  "title": "Sobre Ricardo Nunes Machado Junior",
  "body": " Sobre Ricardo Nunes Machado Junior  Professor Associado da Universidade Federal Rural de Pernambuco, DM.  Doutor em Matemática pela Universidade Federal de Pernambuco (2009-2013).  Mestre em Matemática pela Universidade Federal de Pernambuco (2007-2009).  Bacharel em Matemática pela Universidade Federal de Pernambuco (2003-2006).  "
},
{
  "id": "preface",
  "level": "1",
  "url": "preface.html",
  "type": "Prefácio",
  "number": "",
  "title": "Prefácio",
  "body": " Boa parte deste texto foi preparado ao mesmo tempo em que o professor Ricardo Machado estava orientando Luiz M de Santana Neto na dissertação do ProfMat .  O primeiro autor descidiu ampliar o texto e acrescentar recursos do SageMath, para usar como texto base na disciplina \"Análise Combinatória\" do 5º período do curso de Licenciatura em Matemática da URFPE.  Agradecemos ao Prof. Me. José Ribamar de Souza Neves por sugerir diversos problemas.  Esta nota de aula ainda está em desenvolvimento.    Ricardo Nunes Machado Junior  Luiz Manoel de Santana Neto  Recife, 2021   "
},
{
  "id": "section-1",
  "level": "1",
  "url": "section-1.html",
  "type": "Seção",
  "number": "1.1",
  "title": "Introdução",
  "body": " Introdução   Uma matriz  é um arranjo retangular de elementos dispostos em linhas e colunas. Matrizes são comumente representadas entre colchetes: Dizemos ainda que tem dimensão ou ordem  , se possui linhas e colunas. O conjunto das matrizes com entradas reais será denotado por ou simplesmente .     Neste material, as matrizes serão geralmente representadas por letras maiúsculas (tal como no exemplo anterior).  As entradas de uma matriz serão representadas utilizando letras minúsculas, com subscritos duplos. Assim, por exemplo, denota o elemento que está na -ésima linha ( ) e -ésima coluna ( ) da matrix acima.  Frequentemente também representamos uma matriz de dimensão por , onde e .  Duas matrizes, e são ditas iguais se , e se para todo e todo . Neste caso, escreve-se .    "
},
{
  "id": "definition-1",
  "level": "2",
  "url": "section-1.html#definition-1",
  "type": "Definição",
  "number": "1.1.1",
  "title": "",
  "body": "Uma matriz  é um arranjo retangular de elementos dispostos em linhas e colunas. Matrizes são comumente representadas entre colchetes: Dizemos ainda que tem dimensão ou ordem  , se possui linhas e colunas. O conjunto das matrizes com entradas reais será denotado por ou simplesmente .  "
},
{
  "id": "remark-2",
  "level": "2",
  "url": "section-1.html#remark-2",
  "type": "Nota",
  "number": "1.1.3",
  "title": "",
  "body": "  Neste material, as matrizes serão geralmente representadas por letras maiúsculas (tal como no exemplo anterior).  As entradas de uma matriz serão representadas utilizando letras minúsculas, com subscritos duplos. Assim, por exemplo, denota o elemento que está na -ésima linha ( ) e -ésima coluna ( ) da matrix acima.  Frequentemente também representamos uma matriz de dimensão por , onde e .  Duas matrizes, e são ditas iguais se , e se para todo e todo . Neste caso, escreve-se .   "
},
{
  "id": "section-2",
  "level": "1",
  "url": "section-2.html",
  "type": "Seção",
  "number": "1.2",
  "title": "Tipos Especiais de Matrizes",
  "body": " Tipos Especiais de Matrizes  Uma matriz é dita uma matriz coluna se . Diz-se ainda que é uma matriz linha se .  Por exemplo, as matrizes e dadas por e são matrizes coluna e linha, respectivamente.   Uma matriz é dita uma matriz nula se para todo e .     é uma matriz nula de ordem .    Uma matriz é dita uma matriz quadrada se , ou seja, se o número de linhas de for igual ao número de colunas de .     é uma matriz quadrada de dimensão .    O conjunto das matrizes quadradas com entradas reais será denotado por ou simplesmente .    Uma matriz é dita uma matriz diagonal se para .     é uma matriz diagonal de ordem .    Uma matriz é dita uma matriz identidade se      é uma matriz identidade de ordem .    Uma matriz é dita uma matriz simétrica se para todos e .     é uma matriz simétrica de ordem .    Uma matriz é dita uma matriz triangular superior se para todo . Analogamente, diz-se que é uma matriz triangular inferior se para todo .    As matrizes e dadas por e são matrizes triangular superior e inferior, respectivamente.   "
},
{
  "id": "definition-2",
  "level": "2",
  "url": "section-2.html#definition-2",
  "type": "Definição",
  "number": "1.2.1",
  "title": "",
  "body": "Uma matriz é dita uma matriz coluna se . Diz-se ainda que é uma matriz linha se . "
},
{
  "id": "example-1",
  "level": "2",
  "url": "section-2.html#example-1",
  "type": "Exemplo",
  "number": "1.2.2",
  "title": "",
  "body": "Por exemplo, as matrizes e dadas por e são matrizes coluna e linha, respectivamente. "
},
{
  "id": "definition-3",
  "level": "2",
  "url": "section-2.html#definition-3",
  "type": "Definição",
  "number": "1.2.3",
  "title": "",
  "body": " Uma matriz é dita uma matriz nula se para todo e .  "
},
{
  "id": "example-2",
  "level": "2",
  "url": "section-2.html#example-2",
  "type": "Exemplo",
  "number": "1.2.4",
  "title": "",
  "body": "  é uma matriz nula de ordem .  "
},
{
  "id": "definition-4",
  "level": "2",
  "url": "section-2.html#definition-4",
  "type": "Definição",
  "number": "1.2.5",
  "title": "",
  "body": " Uma matriz é dita uma matriz quadrada se , ou seja, se o número de linhas de for igual ao número de colunas de .  "
},
{
  "id": "example-3",
  "level": "2",
  "url": "section-2.html#example-3",
  "type": "Exemplo",
  "number": "1.2.6",
  "title": "",
  "body": "  é uma matriz quadrada de dimensão .  "
},
{
  "id": "remark-3",
  "level": "2",
  "url": "section-2.html#remark-3",
  "type": "Nota",
  "number": "1.2.7",
  "title": "",
  "body": " O conjunto das matrizes quadradas com entradas reais será denotado por ou simplesmente .  "
},
{
  "id": "definition-5",
  "level": "2",
  "url": "section-2.html#definition-5",
  "type": "Definição",
  "number": "1.2.8",
  "title": "",
  "body": " Uma matriz é dita uma matriz diagonal se para .  "
},
{
  "id": "example-4",
  "level": "2",
  "url": "section-2.html#example-4",
  "type": "Exemplo",
  "number": "1.2.9",
  "title": "",
  "body": "  é uma matriz diagonal de ordem .  "
},
{
  "id": "definition-6",
  "level": "2",
  "url": "section-2.html#definition-6",
  "type": "Definição",
  "number": "1.2.10",
  "title": "",
  "body": " Uma matriz é dita uma matriz identidade se   "
},
{
  "id": "example-5",
  "level": "2",
  "url": "section-2.html#example-5",
  "type": "Exemplo",
  "number": "1.2.11",
  "title": "",
  "body": "  é uma matriz identidade de ordem .  "
},
{
  "id": "definition-7",
  "level": "2",
  "url": "section-2.html#definition-7",
  "type": "Definição",
  "number": "1.2.12",
  "title": "",
  "body": " Uma matriz é dita uma matriz simétrica se para todos e .  "
},
{
  "id": "example-6",
  "level": "2",
  "url": "section-2.html#example-6",
  "type": "Exemplo",
  "number": "1.2.13",
  "title": "",
  "body": "  é uma matriz simétrica de ordem .  "
},
{
  "id": "definition-8",
  "level": "2",
  "url": "section-2.html#definition-8",
  "type": "Definição",
  "number": "1.2.14",
  "title": "",
  "body": " Uma matriz é dita uma matriz triangular superior se para todo . Analogamente, diz-se que é uma matriz triangular inferior se para todo .  "
},
{
  "id": "example-7",
  "level": "2",
  "url": "section-2.html#example-7",
  "type": "Exemplo",
  "number": "1.2.15",
  "title": "",
  "body": " As matrizes e dadas por e são matrizes triangular superior e inferior, respectivamente.  "
},
{
  "id": "section-3",
  "level": "1",
  "url": "section-3.html",
  "type": "Seção",
  "number": "1.3",
  "title": "Operações com Matrizes",
  "body": " Operações com Matrizes   Sejam e . Definimos a soma  pondo . Ou seja, é obtida somando-se cada entrada de com a entrada de correspondente.    Sejam dadas por Calcule .   a matriz pode ser obtida somando cada entrada de com a entrada correspondente de . Portanto,      No Sage, podemos obter a soma das matrizes da seguinte maneira:      (Propriedades da Adição) Valem as seguintes propriedades da adição de matrizes:  Para todos ,   Para todos e ,  Para todo , existe um único elemento , denominado de matriz nula tal que  Para todo , existe um único elemento , denominado de matriz simétrica ou de , tal que      Sejam e . Definimos o produto  de por , pondo . Ou seja, é obtida multiplicando-se cada entrada de por .    Seja dada por Calcule .   A matriz é obtida multiplicando as linhas (ou colunas) de por 4:      No Sage, podemos multiplicar uma matriz por um número real da seguinte maneira:      (Propriedades da Multiplicação por Escalar) Valem as seguintes propriedades da multiplicação por um escalar:  Para todos e ,   Para todo e ,  Para todo e todos ,      Sejam e . Definimos o produto  pondo na qual, Ou seja, o elemento de é obtido multiplicando-se cada entrada da -ésima linha de pelo elemento correspondente da -ésima coluna de e depois somando-se estes produtos.    O produto está definido apenas quando o número de colunas de é igual ao número de linhas de .    Sejam e dadas por Calcule .   Seja tal que , ou seja, Então, Logo,      No Sage, podemos multiplicar duas matrizes da seguinte maneira:      (Propriedades da Multiplicação de Matrizes) Valem as seguintes propriedades da multiplicação de matrizes:  Para todos ,  Para todos e ,  Para todo e todos ,  De um modo geral, não é verdadeiro que .      Seja . Definimos a transposta de por . Ou seja, é obtida transformando as colunas de em linhas de .    Seja dada por Calcule .   Para calcular basta notar que as linhas de serão as colunas de . Assim, é uma matriz de dimensão dada por      No Sage, podemos a transposta de uma matriz da seguinte maneira:      (Propriedades da Transposição de Matrizes) Valem as seguintes propriedades da transposição de matrizes:  Para todos ,  Para todo e todo ,   Para todo e todo ,   Para todo ,     "
},
{
  "id": "definition-9",
  "level": "2",
  "url": "section-3.html#definition-9",
  "type": "Definição",
  "number": "1.3.1",
  "title": "",
  "body": " Sejam e . Definimos a soma  pondo . Ou seja, é obtida somando-se cada entrada de com a entrada de correspondente.  "
},
{
  "id": "example-8",
  "level": "2",
  "url": "section-3.html#example-8",
  "type": "Exemplo",
  "number": "1.3.2",
  "title": "",
  "body": " Sejam dadas por Calcule .   a matriz pode ser obtida somando cada entrada de com a entrada correspondente de . Portanto,    "
},
{
  "id": "technology-1",
  "level": "2",
  "url": "section-3.html#technology-1",
  "type": "Tecnologia",
  "number": "1.3.3",
  "title": "",
  "body": " No Sage, podemos obter a soma das matrizes da seguinte maneira:   "
},
{
  "id": "remark-4",
  "level": "2",
  "url": "section-3.html#remark-4",
  "type": "Nota",
  "number": "1.3.4",
  "title": "",
  "body": "  (Propriedades da Adição) Valem as seguintes propriedades da adição de matrizes:  Para todos ,   Para todos e ,  Para todo , existe um único elemento , denominado de matriz nula tal que  Para todo , existe um único elemento , denominado de matriz simétrica ou de , tal que    "
},
{
  "id": "definition-10",
  "level": "2",
  "url": "section-3.html#definition-10",
  "type": "Definição",
  "number": "1.3.5",
  "title": "",
  "body": " Sejam e . Definimos o produto  de por , pondo . Ou seja, é obtida multiplicando-se cada entrada de por .  "
},
{
  "id": "example-9",
  "level": "2",
  "url": "section-3.html#example-9",
  "type": "Exemplo",
  "number": "1.3.6",
  "title": "",
  "body": " Seja dada por Calcule .   A matriz é obtida multiplicando as linhas (ou colunas) de por 4:    "
},
{
  "id": "technology-2",
  "level": "2",
  "url": "section-3.html#technology-2",
  "type": "Tecnologia",
  "number": "1.3.7",
  "title": "",
  "body": " No Sage, podemos multiplicar uma matriz por um número real da seguinte maneira:   "
},
{
  "id": "remark-5",
  "level": "2",
  "url": "section-3.html#remark-5",
  "type": "Nota",
  "number": "1.3.8",
  "title": "",
  "body": "  (Propriedades da Multiplicação por Escalar) Valem as seguintes propriedades da multiplicação por um escalar:  Para todos e ,   Para todo e ,  Para todo e todos ,    "
},
{
  "id": "definition-11",
  "level": "2",
  "url": "section-3.html#definition-11",
  "type": "Definição",
  "number": "1.3.9",
  "title": "",
  "body": " Sejam e . Definimos o produto  pondo na qual, Ou seja, o elemento de é obtido multiplicando-se cada entrada da -ésima linha de pelo elemento correspondente da -ésima coluna de e depois somando-se estes produtos.  "
},
{
  "id": "remark-6",
  "level": "2",
  "url": "section-3.html#remark-6",
  "type": "Nota",
  "number": "1.3.10",
  "title": "",
  "body": " O produto está definido apenas quando o número de colunas de é igual ao número de linhas de .  "
},
{
  "id": "example-10",
  "level": "2",
  "url": "section-3.html#example-10",
  "type": "Exemplo",
  "number": "1.3.11",
  "title": "",
  "body": " Sejam e dadas por Calcule .   Seja tal que , ou seja, Então, Logo,    "
},
{
  "id": "technology-3",
  "level": "2",
  "url": "section-3.html#technology-3",
  "type": "Tecnologia",
  "number": "1.3.12",
  "title": "",
  "body": " No Sage, podemos multiplicar duas matrizes da seguinte maneira:   "
},
{
  "id": "remark-7",
  "level": "2",
  "url": "section-3.html#remark-7",
  "type": "Nota",
  "number": "1.3.13",
  "title": "",
  "body": "  (Propriedades da Multiplicação de Matrizes) Valem as seguintes propriedades da multiplicação de matrizes:  Para todos ,  Para todos e ,  Para todo e todos ,  De um modo geral, não é verdadeiro que .    "
},
{
  "id": "definition-12",
  "level": "2",
  "url": "section-3.html#definition-12",
  "type": "Definição",
  "number": "1.3.14",
  "title": "",
  "body": " Seja . Definimos a transposta de por . Ou seja, é obtida transformando as colunas de em linhas de .  "
},
{
  "id": "example-11",
  "level": "2",
  "url": "section-3.html#example-11",
  "type": "Exemplo",
  "number": "1.3.15",
  "title": "",
  "body": " Seja dada por Calcule .   Para calcular basta notar que as linhas de serão as colunas de . Assim, é uma matriz de dimensão dada por    "
},
{
  "id": "technology-4",
  "level": "2",
  "url": "section-3.html#technology-4",
  "type": "Tecnologia",
  "number": "1.3.16",
  "title": "",
  "body": " No Sage, podemos a transposta de uma matriz da seguinte maneira:   "
},
{
  "id": "remark-8",
  "level": "2",
  "url": "section-3.html#remark-8",
  "type": "Nota",
  "number": "1.3.17",
  "title": "",
  "body": "  (Propriedades da Transposição de Matrizes) Valem as seguintes propriedades da transposição de matrizes:  Para todos ,  Para todo e todo ,   Para todo e todo ,   Para todo ,    "
},
{
  "id": "section-4",
  "level": "1",
  "url": "section-4.html",
  "type": "Seção",
  "number": "1.4",
  "title": "Exercícios",
  "body": " Exercícios   Sejam Determine a ordem de cada uma das matrizes e quais somas e produtos podem ser efetuados entre duas matrizes distintas das que foram dadas acima. Nos casos em que tais operações forem possíveis, determine os seus resultados. Calcule a transposta de cada matriz acima.  Verdadeiro ou Falso? No caso de ser verdadeiro provar a afirmativa e no caso de ser falso exibir um contra-exemplo.     Se , então ou    Se , então  Se , então  Se for possível efetuar o produto , então é uma matriz quadrada.    Se calcule e .  Sejam calcule .  Sejam uma matriz de ordem e a n-úpla que possui todas as coordenadas nulas, com exceção da -ésima, que é . Mostre que , isto é, a -ésima linha da matriz , e que , isto é, a -ésima coluna da matriz .  Seja calcule . Generalize para matrizes   Se calcule e e, em geral calcule , em que é um inteiro positivo.  Seja uma matriz quadrada de ordem . Definimos o traço de , e denotamos por , a soma das entradas da diagonal principal. Assim, Considere, agora, as seguintes matrizes Calcule , e verifique que:   ;   ;   ;   ;   e .  As propriedades de 1 a 4 valem pra qualquer par de matrizes e a 5 vale sempre que . Tente provar isso.    "
},
{
  "id": "exercise-1",
  "level": "2",
  "url": "section-4.html#exercise-1",
  "type": "Exercício",
  "number": "1.4.1",
  "title": "",
  "body": "Sejam Determine a ordem de cada uma das matrizes e quais somas e produtos podem ser efetuados entre duas matrizes distintas das que foram dadas acima. Nos casos em que tais operações forem possíveis, determine os seus resultados. Calcule a transposta de cada matriz acima. "
},
{
  "id": "exercise-2",
  "level": "2",
  "url": "section-4.html#exercise-2",
  "type": "Exercício",
  "number": "1.4.2",
  "title": "",
  "body": "Verdadeiro ou Falso? No caso de ser verdadeiro provar a afirmativa e no caso de ser falso exibir um contra-exemplo.     Se , então ou    Se , então  Se , então  Se for possível efetuar o produto , então é uma matriz quadrada.   "
},
{
  "id": "exercise-3",
  "level": "2",
  "url": "section-4.html#exercise-3",
  "type": "Exercício",
  "number": "1.4.3",
  "title": "",
  "body": "Se calcule e . "
},
{
  "id": "exercise-4",
  "level": "2",
  "url": "section-4.html#exercise-4",
  "type": "Exercício",
  "number": "1.4.4",
  "title": "",
  "body": "Sejam calcule . "
},
{
  "id": "exercise-5",
  "level": "2",
  "url": "section-4.html#exercise-5",
  "type": "Exercício",
  "number": "1.4.5",
  "title": "",
  "body": "Sejam uma matriz de ordem e a n-úpla que possui todas as coordenadas nulas, com exceção da -ésima, que é . Mostre que , isto é, a -ésima linha da matriz , e que , isto é, a -ésima coluna da matriz . "
},
{
  "id": "exercise-6",
  "level": "2",
  "url": "section-4.html#exercise-6",
  "type": "Exercício",
  "number": "1.4.6",
  "title": "",
  "body": "Seja calcule . Generalize para matrizes  "
},
{
  "id": "exercise-7",
  "level": "2",
  "url": "section-4.html#exercise-7",
  "type": "Exercício",
  "number": "1.4.7",
  "title": "",
  "body": "Se calcule e e, em geral calcule , em que é um inteiro positivo. "
},
{
  "id": "exercise-8",
  "level": "2",
  "url": "section-4.html#exercise-8",
  "type": "Exercício",
  "number": "1.4.8",
  "title": "",
  "body": "Seja uma matriz quadrada de ordem . Definimos o traço de , e denotamos por , a soma das entradas da diagonal principal. Assim, Considere, agora, as seguintes matrizes Calcule , e verifique que:   ;   ;   ;   ;   e .  As propriedades de 1 a 4 valem pra qualquer par de matrizes e a 5 vale sempre que . Tente provar isso. "
},
{
  "id": "section-5",
  "level": "1",
  "url": "section-5.html",
  "type": "Seção",
  "number": "2.1",
  "title": "Sistemas Lineares",
  "body": " Sistemas Lineares  Um sistema de equações lineares com equações e incógnitas é um sistema de equações da forma onde são números reais, para e , chamados de coeficientes do sistema , são chamadas de incógnitas e são chamados de termos independentes .    Uma solução de é uma -upla que satisfaça as equações.  O conjunto solução de um sistema linear é o conjunto de todas as soluções do sistema.  Dois sistemas de equações lineares são ditos equivalentes se possuem o mesmo conjunto solução.     Considere o sistema de equações lineares com 3 equações e 3 incógnitas Verifique se é solução do sistema dado   Substituindo e no sistema, obtemos Como as três equações são satisfeitas, é solução do sistema dado. Veremos adiante que trata-se da única solução deste sistema, de modo que o conjunto solução do sistema é .     "
},
{
  "id": "definition-13",
  "level": "2",
  "url": "section-5.html#definition-13",
  "type": "Definição",
  "number": "2.1.1",
  "title": "",
  "body": "Um sistema de equações lineares com equações e incógnitas é um sistema de equações da forma onde são números reais, para e , chamados de coeficientes do sistema , são chamadas de incógnitas e são chamados de termos independentes . "
},
{
  "id": "remark-9",
  "level": "2",
  "url": "section-5.html#remark-9",
  "type": "Nota",
  "number": "2.1.2",
  "title": "",
  "body": "  Uma solução de é uma -upla que satisfaça as equações.  O conjunto solução de um sistema linear é o conjunto de todas as soluções do sistema.  Dois sistemas de equações lineares são ditos equivalentes se possuem o mesmo conjunto solução.   "
},
{
  "id": "example-12",
  "level": "2",
  "url": "section-5.html#example-12",
  "type": "Exemplo",
  "number": "2.1.3",
  "title": "",
  "body": " Considere o sistema de equações lineares com 3 equações e 3 incógnitas Verifique se é solução do sistema dado   Substituindo e no sistema, obtemos Como as três equações são satisfeitas, é solução do sistema dado. Veremos adiante que trata-se da única solução deste sistema, de modo que o conjunto solução do sistema é .    "
},
{
  "id": "section-6",
  "level": "1",
  "url": "section-6.html",
  "type": "Seção",
  "number": "2.2",
  "title": "Sistemas Lineares e Matrizes",
  "body": " Sistemas Lineares e Matrizes    (Forma Matricial de um Sistema Linear) O sistema de equações lineares dado em pode ser escrito na forma matricial pondo na qual , e são matrizes dadas por      (Matriz Ampliada do Sistema) Definimos também a matriz ampliada de como sendo a matriz dada por     Note que cada sistema de equações linear corresponde à uma matriz ampliada como acima.    Considere o sistema de equações lineares Reescreva o sistema acima em sua forma matricial onde é a matriz dos coeficientes do sistema, é o vetor-coluna das incógnitas e é o vetor-coluna dos termos independentes. Explicite ainda a matriz ampliada correspondente.   Defina as matrizes onde é a matriz dos coeficientes do sistema, é a matriz das incógnitas e é a matriz dos termos independentes.  Então o sistema dado pode ser escrito como Além disso, a matriz ampliada do sistema é a matriz dada por     "
},
{
  "id": "definition-14",
  "level": "2",
  "url": "section-6.html#definition-14",
  "type": "Definição",
  "number": "2.2.1",
  "title": "",
  "body": "  (Forma Matricial de um Sistema Linear) O sistema de equações lineares dado em pode ser escrito na forma matricial pondo na qual , e são matrizes dadas por   "
},
{
  "id": "definition-15",
  "level": "2",
  "url": "section-6.html#definition-15",
  "type": "Definição",
  "number": "2.2.2",
  "title": "",
  "body": "  (Matriz Ampliada do Sistema) Definimos também a matriz ampliada de como sendo a matriz dada por   "
},
{
  "id": "remark-11",
  "level": "2",
  "url": "section-6.html#remark-11",
  "type": "Nota",
  "number": "2.2.3",
  "title": "",
  "body": " Note que cada sistema de equações linear corresponde à uma matriz ampliada como acima.  "
},
{
  "id": "example-13",
  "level": "2",
  "url": "section-6.html#example-13",
  "type": "Exemplo",
  "number": "2.2.4",
  "title": "",
  "body": " Considere o sistema de equações lineares Reescreva o sistema acima em sua forma matricial onde é a matriz dos coeficientes do sistema, é o vetor-coluna das incógnitas e é o vetor-coluna dos termos independentes. Explicite ainda a matriz ampliada correspondente.   Defina as matrizes onde é a matriz dos coeficientes do sistema, é a matriz das incógnitas e é a matriz dos termos independentes.  Então o sistema dado pode ser escrito como Além disso, a matriz ampliada do sistema é a matriz dada por    "
},
{
  "id": "section-7",
  "level": "1",
  "url": "section-7.html",
  "type": "Seção",
  "number": "2.3",
  "title": "Operações Elementares",
  "body": " Operações Elementares   São três as operações elementares sobre as linhas de uma matriz:  Permutação de linhas . Nesta operação, permutam-se a -ésima e -ésima linhas de uma matriz. Indicaremos esta operação pela notação , na qual indica a -ésima linha da matriz. Por exemplo,   Multiplicação de linha . Nesta operação, multiplica-se a -ésima linha de uma matriz por um número real . Indicaremos esta operação pela notação , na qual indica a -ésima linha da matriz. Por exemplo,   Adição de linhas . Nesta operação, soma-se à -ésima linha de uma matriz a -ésima linha multiplicada por um número real . Indicaremos esta operação pela notação , onde indica a -ésima linha da matriz. Por exemplo,       É possível associar a cada operação elementar acima uma matriz elementar de modo que cada operação elementar sobre as linhas de uma matriz corresponde à multiplicação a esquerda de por .     Matrizes Linha Equivalentes Sejam . Dizemos que é linha equivalente a , e escrevemos , se for obtida de a partir de um número finito de operações elementares sobre as linhas de .    Pode-se mostrar que dois sistemas de equações lineares que possuem matrizes ampliadas linha equivalentes são equivalentes.    Sejam dadas por Mostre que .   "
},
{
  "id": "definition-16",
  "level": "2",
  "url": "section-7.html#definition-16",
  "type": "Definição",
  "number": "2.3.1",
  "title": "",
  "body": " São três as operações elementares sobre as linhas de uma matriz:  Permutação de linhas . Nesta operação, permutam-se a -ésima e -ésima linhas de uma matriz. Indicaremos esta operação pela notação , na qual indica a -ésima linha da matriz. Por exemplo,   Multiplicação de linha . Nesta operação, multiplica-se a -ésima linha de uma matriz por um número real . Indicaremos esta operação pela notação , na qual indica a -ésima linha da matriz. Por exemplo,   Adição de linhas . Nesta operação, soma-se à -ésima linha de uma matriz a -ésima linha multiplicada por um número real . Indicaremos esta operação pela notação , onde indica a -ésima linha da matriz. Por exemplo,     "
},
{
  "id": "remark-12",
  "level": "2",
  "url": "section-7.html#remark-12",
  "type": "Nota",
  "number": "2.3.2",
  "title": "",
  "body": " É possível associar a cada operação elementar acima uma matriz elementar de modo que cada operação elementar sobre as linhas de uma matriz corresponde à multiplicação a esquerda de por .  "
},
{
  "id": "definition-17",
  "level": "2",
  "url": "section-7.html#definition-17",
  "type": "Definição",
  "number": "2.3.3",
  "title": "",
  "body": "  Matrizes Linha Equivalentes Sejam . Dizemos que é linha equivalente a , e escrevemos , se for obtida de a partir de um número finito de operações elementares sobre as linhas de .  "
},
{
  "id": "remark-13",
  "level": "2",
  "url": "section-7.html#remark-13",
  "type": "Nota",
  "number": "2.3.4",
  "title": "",
  "body": " Pode-se mostrar que dois sistemas de equações lineares que possuem matrizes ampliadas linha equivalentes são equivalentes.  "
},
{
  "id": "exemplo_mat_equiv_01",
  "level": "2",
  "url": "section-7.html#exemplo_mat_equiv_01",
  "type": "Exemplo",
  "number": "2.3.5",
  "title": "",
  "body": " Sejam dadas por Mostre que .  "
},
{
  "id": "section-8",
  "level": "1",
  "url": "section-8.html",
  "type": "Seção",
  "number": "2.4",
  "title": "A Forma Escada",
  "body": " A Forma Escada   Uma matriz é dita ter sido linha reduzida à forma escada se  O primeiro elemento não nulo (chamado às vezes de pivô ) de uma linha não nula é 1.  Cada coluna que contém o pivô de alguma linha tem todos os seus outros elementos iguais a zero.  Toda linha nula ocorre abaixo de todas as linhas não nulas  O pivô de uma linha não nula está sempre estritamente à direita do pivô da linha acima dele.      Pode-se mostrar que toda matriz é linha equivalente a uma única matriz-linha reduzida à forma escada.    Determine se as seguintes matrizes abaixo se encontram linha reduzidas à forma escada:                 Verifiquemos se as matrizes abaixo cumprem as condições (a) até (d):                   No Sage, podemos obter a forma linha reduzida à forma escada da seguinte maneira:    "
},
{
  "id": "definition-18",
  "level": "2",
  "url": "section-8.html#definition-18",
  "type": "Definição",
  "number": "2.4.1",
  "title": "",
  "body": " Uma matriz é dita ter sido linha reduzida à forma escada se  O primeiro elemento não nulo (chamado às vezes de pivô ) de uma linha não nula é 1.  Cada coluna que contém o pivô de alguma linha tem todos os seus outros elementos iguais a zero.  Toda linha nula ocorre abaixo de todas as linhas não nulas  O pivô de uma linha não nula está sempre estritamente à direita do pivô da linha acima dele.    "
},
{
  "id": "remark-14",
  "level": "2",
  "url": "section-8.html#remark-14",
  "type": "Nota",
  "number": "2.4.2",
  "title": "",
  "body": " Pode-se mostrar que toda matriz é linha equivalente a uma única matriz-linha reduzida à forma escada.  "
},
{
  "id": "example-15",
  "level": "2",
  "url": "section-8.html#example-15",
  "type": "Exemplo",
  "number": "2.4.3",
  "title": "",
  "body": " Determine se as seguintes matrizes abaixo se encontram linha reduzidas à forma escada:                 Verifiquemos se as matrizes abaixo cumprem as condições (a) até (d):                 "
},
{
  "id": "technology-5",
  "level": "2",
  "url": "section-8.html#technology-5",
  "type": "Tecnologia",
  "number": "2.4.4",
  "title": "",
  "body": " No Sage, podemos obter a forma linha reduzida à forma escada da seguinte maneira:   "
},
{
  "id": "section-9",
  "level": "1",
  "url": "section-9.html",
  "type": "Seção",
  "number": "2.5",
  "title": "Posto e Nulidade",
  "body": " Posto e Nulidade   Seja , tais que e está linha reduzida à forma escada.  O posto de , denotado por , é o número de linhas não-nulas de .  A nulidade de , denotada por , é o número .      Se , dizemos que tem posto completo .    Calcule o posto e a nulidade da matriz dada por    Vimos no que a matriz é linha equivalente à matriz Note ainda que está linha reduzida à forma escada. Como possui 3 linhas não nulas, segue que      No Sage, podemos obter o posto de uma matriz da seguinte maneira:    "
},
{
  "id": "definition-19",
  "level": "2",
  "url": "section-9.html#definition-19",
  "type": "Definição",
  "number": "2.5.1",
  "title": "",
  "body": " Seja , tais que e está linha reduzida à forma escada.  O posto de , denotado por , é o número de linhas não-nulas de .  A nulidade de , denotada por , é o número .    "
},
{
  "id": "remark-15",
  "level": "2",
  "url": "section-9.html#remark-15",
  "type": "Nota",
  "number": "2.5.2",
  "title": "",
  "body": " Se , dizemos que tem posto completo .  "
},
{
  "id": "example-16",
  "level": "2",
  "url": "section-9.html#example-16",
  "type": "Exemplo",
  "number": "2.5.3",
  "title": "",
  "body": " Calcule o posto e a nulidade da matriz dada por    Vimos no que a matriz é linha equivalente à matriz Note ainda que está linha reduzida à forma escada. Como possui 3 linhas não nulas, segue que    "
},
{
  "id": "technology-6",
  "level": "2",
  "url": "section-9.html#technology-6",
  "type": "Tecnologia",
  "number": "2.5.4",
  "title": "",
  "body": " No Sage, podemos obter o posto de uma matriz da seguinte maneira:   "
},
{
  "id": "section-10",
  "level": "1",
  "url": "section-10.html",
  "type": "Seção",
  "number": "2.6",
  "title": "Soluções de um Sistema Linear",
  "body": " Soluções de um Sistema Linear    (Soluções de um Sistema Linear) Considere um sistema de equações lineares da forma . Então, temos três casos possíveis:  O sistema possui uma única solução. Neste caso, diz-se que o sistema é possível e determinado.  O sistema possui infinitas soluções. Neste caso, diz-se que o sistema é possível e indeterminado.  O sistema não possui solução. Neste caso, diz-se que o sistema é impossível.      Se , dizemos que o sistema é homogêneo . Note que um sistema homogêneo sempre admite solução, a saber, a solução trivial  .    Considere um sistema de equações lineares da forma na qual, , e . Seja a matriz ampliada do sistema. Denote , ou seja, o posto da matriz dos coeficientes. E denote , ou seja, o posto da matriz ampliada.  Então, o Sistema Linear satisfaz as seguintes condições:   Possui solução se, e somente se, .  Possui uma única solução se, e somente se, .  Possui infinitas soluções se, e somente se, .      No caso iii. , dizemos que o sistema possui  graus de liberdade . Intuitivamente, isso significa que podemos escolher variáveis como sendo variáveis livres e as demais variáveis do sistema podem ser expressas em função destas.    Resolva o sistema de equações lineares   A matriz ampliada associada ao sistema é Pode-se mostrar que a matriz acima pode ser linha reduzida à forma escada Note que Logo o sistema é possível, porém indeterminado. O número de graus de liberdade do sistema é . Assim, podemos escolher duas incógnitas como variáveis livres, obtendo o sistema Portanto, as soluções básicas do sistema tem a forma     Obtendo a forma escada da matriz ampliada:     Resolva o sistema de equações lineares   A matriz ampliada associada ao sistema é Pode-se mostrar que a matriz acima pode ser linha reduzida à forma escada Reinterpretando em termos de um sistema de equações lineares, Note que . Logo o sistema é possível, porém indeterminado. O número de graus de liberdade do sistema é . Assim, podemos escolher duas incógnitas como variáveis livres, obtendo o sistema Portanto, as soluções básicas do sistema tem a forma     Obtendo a forma escada da matriz ampliada:     Resolva o sistema de equações lineares    A matriz ampliada associada ao sistema é Pode-se mostrar que a matriz acima pode ser linha reduzida à forma escada Note que e . Logo o sistema é impossível.  Reinterpretando em termos de um sistema de equações lineares, Portanto, o conjunto solução do sistema é vazio, ou seja, .     Obtendo a forma escada da matriz ampliada:    "
},
{
  "id": "definition-20",
  "level": "2",
  "url": "section-10.html#definition-20",
  "type": "Definição",
  "number": "2.6.1",
  "title": "",
  "body": "  (Soluções de um Sistema Linear) Considere um sistema de equações lineares da forma . Então, temos três casos possíveis:  O sistema possui uma única solução. Neste caso, diz-se que o sistema é possível e determinado.  O sistema possui infinitas soluções. Neste caso, diz-se que o sistema é possível e indeterminado.  O sistema não possui solução. Neste caso, diz-se que o sistema é impossível.    "
},
{
  "id": "remark-16",
  "level": "2",
  "url": "section-10.html#remark-16",
  "type": "Nota",
  "number": "2.6.2",
  "title": "",
  "body": " Se , dizemos que o sistema é homogêneo . Note que um sistema homogêneo sempre admite solução, a saber, a solução trivial  .  "
},
{
  "id": "theorem-1",
  "level": "2",
  "url": "section-10.html#theorem-1",
  "type": "Teorema",
  "number": "2.6.3",
  "title": "",
  "body": " Considere um sistema de equações lineares da forma na qual, , e . Seja a matriz ampliada do sistema. Denote , ou seja, o posto da matriz dos coeficientes. E denote , ou seja, o posto da matriz ampliada.  Então, o Sistema Linear satisfaz as seguintes condições:   Possui solução se, e somente se, .  Possui uma única solução se, e somente se, .  Possui infinitas soluções se, e somente se, .    "
},
{
  "id": "remark-17",
  "level": "2",
  "url": "section-10.html#remark-17",
  "type": "Nota",
  "number": "2.6.4",
  "title": "",
  "body": " No caso iii. , dizemos que o sistema possui  graus de liberdade . Intuitivamente, isso significa que podemos escolher variáveis como sendo variáveis livres e as demais variáveis do sistema podem ser expressas em função destas.  "
},
{
  "id": "example-17",
  "level": "2",
  "url": "section-10.html#example-17",
  "type": "Exemplo",
  "number": "2.6.5",
  "title": "",
  "body": " Resolva o sistema de equações lineares   A matriz ampliada associada ao sistema é Pode-se mostrar que a matriz acima pode ser linha reduzida à forma escada Note que Logo o sistema é possível, porém indeterminado. O número de graus de liberdade do sistema é . Assim, podemos escolher duas incógnitas como variáveis livres, obtendo o sistema Portanto, as soluções básicas do sistema tem a forma   "
},
{
  "id": "technology-7",
  "level": "2",
  "url": "section-10.html#technology-7",
  "type": "Tecnologia",
  "number": "2.6.6",
  "title": "",
  "body": " Obtendo a forma escada da matriz ampliada:   "
},
{
  "id": "example-18",
  "level": "2",
  "url": "section-10.html#example-18",
  "type": "Exemplo",
  "number": "2.6.7",
  "title": "",
  "body": " Resolva o sistema de equações lineares   A matriz ampliada associada ao sistema é Pode-se mostrar que a matriz acima pode ser linha reduzida à forma escada Reinterpretando em termos de um sistema de equações lineares, Note que . Logo o sistema é possível, porém indeterminado. O número de graus de liberdade do sistema é . Assim, podemos escolher duas incógnitas como variáveis livres, obtendo o sistema Portanto, as soluções básicas do sistema tem a forma   "
},
{
  "id": "technology-8",
  "level": "2",
  "url": "section-10.html#technology-8",
  "type": "Tecnologia",
  "number": "2.6.8",
  "title": "",
  "body": " Obtendo a forma escada da matriz ampliada:   "
},
{
  "id": "example-19",
  "level": "2",
  "url": "section-10.html#example-19",
  "type": "Exemplo",
  "number": "2.6.9",
  "title": "",
  "body": " Resolva o sistema de equações lineares    A matriz ampliada associada ao sistema é Pode-se mostrar que a matriz acima pode ser linha reduzida à forma escada Note que e . Logo o sistema é impossível.  Reinterpretando em termos de um sistema de equações lineares, Portanto, o conjunto solução do sistema é vazio, ou seja, .   "
},
{
  "id": "technology-9",
  "level": "2",
  "url": "section-10.html#technology-9",
  "type": "Tecnologia",
  "number": "2.6.10",
  "title": "",
  "body": " Obtendo a forma escada da matriz ampliada:   "
},
{
  "id": "section-11",
  "level": "1",
  "url": "section-11.html",
  "type": "Seção",
  "number": "2.7",
  "title": "A Inversa de uma Matriz",
  "body": " A Inversa de uma Matriz   Seja . Se existir matriz tal que na qual é a matriz identidade, então dizemos que é uma inversa de e escrevemos .   Se possui inversa, dizemos que é não singular . Do contrário, dizemos que é singular .    Propriedades da Inversa de uma Matriz Sejam . Então,  Se e forem não singulares, então é não singular e vale   Se é não singular, então é não singular e vale   Se é não singular, então   Se é não singular com inversa e for tal que onde é a matriz identidade, então .      Seja dada por Verifique que é uma matriz singular.  Seja tal que Então, Assim, temos o sistema impossível. Portanto, não existe tal que , ou seja, é singular.    Seja dada por Verifique que é a inversa de , onde    Com efeito, Logo, é não singular com .     Dizemos que uma matriz é uma matriz elementar se é obtida da identidade, através da aplicação de uma operação elementar com linhas.     Pode-se mostrar que operar nas linhas de uma matriz equivale a multiplicar à esquerda pela matriz elementar correspondente.  Além disso, toda matriz elementar é não singular e a sua inversa corresponde à operação com linhas inversa da operação efetuada pela matriz .     Seja . Então é não singular se e somente se, a matriz-linha equivalente a forma escada de é a matriz identidade . Neste caso, é dada por um produto de matrizes elementares.    Uma consequência do é a seguinte: suponha que a matriz-linha equivalente a forma escada de é a matriz identidade , ou seja, Então, a última equação implica em Isto nos dá o a seguir.    Se uma matriz pode ser reduzida à matriz identidade por uma sequência de operações elementares nas linhas de , então é não singular e a matriz inversa é obtida a partir da matriz identidade, aplicando-se a mesma sequência de operações nas linhas de .    Na prática, operamos simultaneamente com as matrizes e , através de operações elementares, até chegarmos à matriz na posição correspondente à . A matriz obtida no lugar correspondente à matriz será a inversa de .     Determine uma inversa para a matriz utilizando operações elementares nas linhas de .   Temos Portanto, a inversa de é a matriz      A inversa de uma matriz pode ser obtida da seguinte maneira:   Outra maneira de obter a inversa:      (Inversão de Matrizes e Sistemas Lineares) Considere um sistema de equações lineares da forma , na qual , e . Se for não singular, então o sistema possui uma única solução, a saber, Em particular, se , então, o sistema homogêneo admite apenas a solução trivial .    Resolva o sistema de equações lineares    O sistema pode ser escrito como , na qual Como a matriz é não singular e resulta que o sistema admite uma única solução ,      Obtendo a solução do sistema , usando a :    "
},
{
  "id": "definition-21",
  "level": "2",
  "url": "section-11.html#definition-21",
  "type": "Definição",
  "number": "2.7.1",
  "title": "",
  "body": " Seja . Se existir matriz tal que na qual é a matriz identidade, então dizemos que é uma inversa de e escrevemos .  "
},
{
  "id": "remark-18",
  "level": "2",
  "url": "section-11.html#remark-18",
  "type": "Nota",
  "number": "2.7.2",
  "title": "",
  "body": "Se possui inversa, dizemos que é não singular . Do contrário, dizemos que é singular . "
},
{
  "id": "remark-19",
  "level": "2",
  "url": "section-11.html#remark-19",
  "type": "Nota",
  "number": "2.7.3",
  "title": "",
  "body": "  Propriedades da Inversa de uma Matriz Sejam . Então,  Se e forem não singulares, então é não singular e vale   Se é não singular, então é não singular e vale   Se é não singular, então   Se é não singular com inversa e for tal que onde é a matriz identidade, então .    "
},
{
  "id": "example-20",
  "level": "2",
  "url": "section-11.html#example-20",
  "type": "Exemplo",
  "number": "2.7.4",
  "title": "",
  "body": " Seja dada por Verifique que é uma matriz singular.  Seja tal que Então, Assim, temos o sistema impossível. Portanto, não existe tal que , ou seja, é singular.  "
},
{
  "id": "example-21",
  "level": "2",
  "url": "section-11.html#example-21",
  "type": "Exemplo",
  "number": "2.7.5",
  "title": "",
  "body": " Seja dada por Verifique que é a inversa de , onde    Com efeito, Logo, é não singular com .   "
},
{
  "id": "definition-22",
  "level": "2",
  "url": "section-11.html#definition-22",
  "type": "Definição",
  "number": "2.7.6",
  "title": "",
  "body": " Dizemos que uma matriz é uma matriz elementar se é obtida da identidade, através da aplicação de uma operação elementar com linhas.  "
},
{
  "id": "remark-20",
  "level": "2",
  "url": "section-11.html#remark-20",
  "type": "Nota",
  "number": "2.7.7",
  "title": "",
  "body": "  Pode-se mostrar que operar nas linhas de uma matriz equivale a multiplicar à esquerda pela matriz elementar correspondente.  Além disso, toda matriz elementar é não singular e a sua inversa corresponde à operação com linhas inversa da operação efetuada pela matriz .   "
},
{
  "id": "teo_inversa",
  "level": "2",
  "url": "section-11.html#teo_inversa",
  "type": "Teorema",
  "number": "2.7.8",
  "title": "",
  "body": " Seja . Então é não singular se e somente se, a matriz-linha equivalente a forma escada de é a matriz identidade . Neste caso, é dada por um produto de matrizes elementares.  "
},
{
  "id": "remark-21",
  "level": "2",
  "url": "section-11.html#remark-21",
  "type": "Nota",
  "number": "2.7.9",
  "title": "",
  "body": " Uma consequência do é a seguinte: suponha que a matriz-linha equivalente a forma escada de é a matriz identidade , ou seja, Então, a última equação implica em Isto nos dá o a seguir.  "
},
{
  "id": "cor_inversa",
  "level": "2",
  "url": "section-11.html#cor_inversa",
  "type": "Corolário",
  "number": "2.7.10",
  "title": "",
  "body": " Se uma matriz pode ser reduzida à matriz identidade por uma sequência de operações elementares nas linhas de , então é não singular e a matriz inversa é obtida a partir da matriz identidade, aplicando-se a mesma sequência de operações nas linhas de .  "
},
{
  "id": "remark-22",
  "level": "2",
  "url": "section-11.html#remark-22",
  "type": "Nota",
  "number": "2.7.11",
  "title": "",
  "body": " Na prática, operamos simultaneamente com as matrizes e , através de operações elementares, até chegarmos à matriz na posição correspondente à . A matriz obtida no lugar correspondente à matriz será a inversa de .   "
},
{
  "id": "example-22",
  "level": "2",
  "url": "section-11.html#example-22",
  "type": "Exemplo",
  "number": "2.7.12",
  "title": "",
  "body": " Determine uma inversa para a matriz utilizando operações elementares nas linhas de .   Temos Portanto, a inversa de é a matriz    "
},
{
  "id": "technology-10",
  "level": "2",
  "url": "section-11.html#technology-10",
  "type": "Tecnologia",
  "number": "2.7.13",
  "title": "",
  "body": " A inversa de uma matriz pode ser obtida da seguinte maneira:   Outra maneira de obter a inversa:   "
},
{
  "id": "obs_inversa_sol",
  "level": "2",
  "url": "section-11.html#obs_inversa_sol",
  "type": "Nota",
  "number": "2.7.14",
  "title": "",
  "body": "  (Inversão de Matrizes e Sistemas Lineares) Considere um sistema de equações lineares da forma , na qual , e . Se for não singular, então o sistema possui uma única solução, a saber, Em particular, se , então, o sistema homogêneo admite apenas a solução trivial .  "
},
{
  "id": "example-23",
  "level": "2",
  "url": "section-11.html#example-23",
  "type": "Exemplo",
  "number": "2.7.15",
  "title": "",
  "body": " Resolva o sistema de equações lineares    O sistema pode ser escrito como , na qual Como a matriz é não singular e resulta que o sistema admite uma única solução ,    "
},
{
  "id": "technology-11",
  "level": "2",
  "url": "section-11.html#technology-11",
  "type": "Tecnologia",
  "number": "2.7.16",
  "title": "",
  "body": " Obtendo a solução do sistema , usando a :   "
},
{
  "id": "section-12",
  "level": "1",
  "url": "section-12.html",
  "type": "Seção",
  "number": "2.8",
  "title": "Exercícios",
  "body": " Exercícios   Considere o seguinte sistema.  é solução do sistema?  Reduza as matrizes à forma escada reduzida por linhas   Para cada uma das matrizes da questão anterior determine seu posto.  Considere o seguinte sistema de equações lineares   Escreva o sistema acima na forma de uma equação matricial;  Exiba a matriz ampliada (ou associada) do sistema;  Reduza a matriz ampliada à sua forma escada reduzida por linhas. Determine o posto e nulidade do sistema;  Escreva o sistema de equações lineares correspondente à matriz obtida no item anterior e resolva este sistema.    Determine , para que o sistema abaixo admita solução.   Encontre os valores de (lambda) para os quais o sistema homogêneo  tenha uma solução diferente da solução trivial ( ).  Como devem ser escolhidos os coeficientes e para que o sistema tenha como solução ?  Determine as condições que devem ser satisfeitas por e para garantir que o sistema de equações seja consistente , isto é, admita ao menos uma solução.  Determine todas as soluções do sistema:   Demonstre que as matrizes não são linha equivalentes.  Mostre que existem apenas três tipos de matrizes reduzidas por linhas tais que   Demonstre que a permutação de duas linhas pode ser obtida por um número finito de operações elementares de outros tipos.  Considere o sistema linear homogêneo , em que Determine se as seguintes afirmações são verdadeiras ou falsas:  Se , então todo vetor de é solução de  Se , então o sistema só possui a solução trivial  Se e , então o conjunto das soluções reais de é uma reta que passa pela origem de    Verificar se os seguintes pontos de determinam um hiperplano:  e .  e .   Relembrando que um hiperplano em é o conjunto de pontos que satisfazem uma equação do tipo    Usando o método descrito em sala de aula calcule a inversa de cada uma das matrizes abaixo.   Considere a matriz real Ache as matrizes elementares tais que   Sejam e Demonstre que não existe uma matriz tal que   Seja uma matriz linha equaivalente à matriz identidade Mostre que é inversível.  Seja uma matriz e uma matriz Demonstre que a matriz não pode ser inversível.  Seja uma matriz Demonstre as seguintes afirmações:  Se é inversível e existe uma matriz tal que então   Se não é inversível, existe uma matriz não nula tal que     "
},
{
  "id": "exercise-9",
  "level": "2",
  "url": "section-12.html#exercise-9",
  "type": "Exercício",
  "number": "2.8.1",
  "title": "",
  "body": "Considere o seguinte sistema.  é solução do sistema? "
},
{
  "id": "exercise-10",
  "level": "2",
  "url": "section-12.html#exercise-10",
  "type": "Exercício",
  "number": "2.8.2",
  "title": "",
  "body": "Reduza as matrizes à forma escada reduzida por linhas  "
},
{
  "id": "exercise-11",
  "level": "2",
  "url": "section-12.html#exercise-11",
  "type": "Exercício",
  "number": "2.8.3",
  "title": "",
  "body": "Para cada uma das matrizes da questão anterior determine seu posto. "
},
{
  "id": "exercise-12",
  "level": "2",
  "url": "section-12.html#exercise-12",
  "type": "Exercício",
  "number": "2.8.4",
  "title": "",
  "body": "Considere o seguinte sistema de equações lineares   Escreva o sistema acima na forma de uma equação matricial;  Exiba a matriz ampliada (ou associada) do sistema;  Reduza a matriz ampliada à sua forma escada reduzida por linhas. Determine o posto e nulidade do sistema;  Escreva o sistema de equações lineares correspondente à matriz obtida no item anterior e resolva este sistema.   "
},
{
  "id": "exercise-13",
  "level": "2",
  "url": "section-12.html#exercise-13",
  "type": "Exercício",
  "number": "2.8.5",
  "title": "",
  "body": "Determine , para que o sistema abaixo admita solução.  "
},
{
  "id": "exercise-14",
  "level": "2",
  "url": "section-12.html#exercise-14",
  "type": "Exercício",
  "number": "2.8.6",
  "title": "",
  "body": "Encontre os valores de (lambda) para os quais o sistema homogêneo  tenha uma solução diferente da solução trivial ( ). "
},
{
  "id": "exercise-15",
  "level": "2",
  "url": "section-12.html#exercise-15",
  "type": "Exercício",
  "number": "2.8.7",
  "title": "",
  "body": "Como devem ser escolhidos os coeficientes e para que o sistema tenha como solução ? "
},
{
  "id": "exercise-16",
  "level": "2",
  "url": "section-12.html#exercise-16",
  "type": "Exercício",
  "number": "2.8.8",
  "title": "",
  "body": "Determine as condições que devem ser satisfeitas por e para garantir que o sistema de equações seja consistente , isto é, admita ao menos uma solução. "
},
{
  "id": "exercise-17",
  "level": "2",
  "url": "section-12.html#exercise-17",
  "type": "Exercício",
  "number": "2.8.9",
  "title": "",
  "body": "Determine todas as soluções do sistema:  "
},
{
  "id": "exercise-18",
  "level": "2",
  "url": "section-12.html#exercise-18",
  "type": "Exercício",
  "number": "2.8.10",
  "title": "",
  "body": "Demonstre que as matrizes não são linha equivalentes. "
},
{
  "id": "exercise-19",
  "level": "2",
  "url": "section-12.html#exercise-19",
  "type": "Exercício",
  "number": "2.8.11",
  "title": "",
  "body": "Mostre que existem apenas três tipos de matrizes reduzidas por linhas tais que  "
},
{
  "id": "exercise-20",
  "level": "2",
  "url": "section-12.html#exercise-20",
  "type": "Exercício",
  "number": "2.8.12",
  "title": "",
  "body": "Demonstre que a permutação de duas linhas pode ser obtida por um número finito de operações elementares de outros tipos. "
},
{
  "id": "exercise-21",
  "level": "2",
  "url": "section-12.html#exercise-21",
  "type": "Exercício",
  "number": "2.8.13",
  "title": "",
  "body": "Considere o sistema linear homogêneo , em que Determine se as seguintes afirmações são verdadeiras ou falsas:  Se , então todo vetor de é solução de  Se , então o sistema só possui a solução trivial  Se e , então o conjunto das soluções reais de é uma reta que passa pela origem de   "
},
{
  "id": "exercise-22",
  "level": "2",
  "url": "section-12.html#exercise-22",
  "type": "Exercício",
  "number": "2.8.14",
  "title": "",
  "body": "Verificar se os seguintes pontos de determinam um hiperplano:  e .  e .   Relembrando que um hiperplano em é o conjunto de pontos que satisfazem uma equação do tipo   "
},
{
  "id": "exercise-23",
  "level": "2",
  "url": "section-12.html#exercise-23",
  "type": "Exercício",
  "number": "2.8.15",
  "title": "",
  "body": "Usando o método descrito em sala de aula calcule a inversa de cada uma das matrizes abaixo.  "
},
{
  "id": "exercise-24",
  "level": "2",
  "url": "section-12.html#exercise-24",
  "type": "Exercício",
  "number": "2.8.16",
  "title": "",
  "body": "Considere a matriz real Ache as matrizes elementares tais que  "
},
{
  "id": "exercise-25",
  "level": "2",
  "url": "section-12.html#exercise-25",
  "type": "Exercício",
  "number": "2.8.17",
  "title": "",
  "body": "Sejam e Demonstre que não existe uma matriz tal que  "
},
{
  "id": "exercise-26",
  "level": "2",
  "url": "section-12.html#exercise-26",
  "type": "Exercício",
  "number": "2.8.18",
  "title": "",
  "body": "Seja uma matriz linha equaivalente à matriz identidade Mostre que é inversível. "
},
{
  "id": "exercise-27",
  "level": "2",
  "url": "section-12.html#exercise-27",
  "type": "Exercício",
  "number": "2.8.19",
  "title": "",
  "body": "Seja uma matriz e uma matriz Demonstre que a matriz não pode ser inversível. "
},
{
  "id": "exercise-28",
  "level": "2",
  "url": "section-12.html#exercise-28",
  "type": "Exercício",
  "number": "2.8.20",
  "title": "",
  "body": "Seja uma matriz Demonstre as seguintes afirmações:  Se é inversível e existe uma matriz tal que então   Se não é inversível, existe uma matriz não nula tal que   "
},
{
  "id": "section-13",
  "level": "1",
  "url": "section-13.html",
  "type": "Seção",
  "number": "3.1",
  "title": "Determinante de uma Matriz",
  "body": " Determinante de uma Matriz   Uma permutação dos elementos de um conjunto é qualquer reordenação dos elementos de . Assim, por exemplo, se então são as 6 permutações dos elementos de . Se , definimos o fatorial de como sendo o número Completamos a definição pondo . Pode-se mostrar que o número de permutações de um conjunto com elementos é precisamente .     Seja um conjunto e uma permutação dos elementos de . Uma inversão de é um par de posições cujas entradas estão em ordem oposta.  Assim, por exemplo se e , então possui três inversões: os pares e que correspondem as entradas e .  Denotaremos o número de inversões de uma permutação por .     Seja . Calcule o número de inversões para cada uma das permutações dos elementos de .   A tabela abaixo contém todas as permutações de e o número de inversões correspondente:  Valores de para cada permutação de .                                      (Determinante de uma matriz - Fórmula de Leibniz) Seja . O determinante de , denotado por ou , é definido por na qual é o sinal da permutação e o somatório se estende sobre todas as permutações de . Se , onde é a -ésima linha de , então podemos interpretar o determinante como uma função das linhas de :       Seja dada por   Use a Fórmula de Leibniz para calcular     Temos que só admite duas permutações: e . Além disso, e . Logo,       Seja dada por   Use a Fórmula de Leibniz para calcular .    Usando a , temos      (Propriedades do Determinante de uma Matriz)   Sejam , e .        Se , para vetores-linha e , então         As propriedades do determinante que dizem respeito às colunas de também valem para as suas linhas.    Calculando o determinante de uma matriz:    "
},
{
  "id": "definition-23",
  "level": "2",
  "url": "section-13.html#definition-23",
  "type": "Definição",
  "number": "3.1.1",
  "title": "",
  "body": " Uma permutação dos elementos de um conjunto é qualquer reordenação dos elementos de . Assim, por exemplo, se então são as 6 permutações dos elementos de . Se , definimos o fatorial de como sendo o número Completamos a definição pondo . Pode-se mostrar que o número de permutações de um conjunto com elementos é precisamente .  "
},
{
  "id": "definition-24",
  "level": "2",
  "url": "section-13.html#definition-24",
  "type": "Definição",
  "number": "3.1.2",
  "title": "",
  "body": "  Seja um conjunto e uma permutação dos elementos de . Uma inversão de é um par de posições cujas entradas estão em ordem oposta.  Assim, por exemplo se e , então possui três inversões: os pares e que correspondem as entradas e .  Denotaremos o número de inversões de uma permutação por .   "
},
{
  "id": "example-24",
  "level": "2",
  "url": "section-13.html#example-24",
  "type": "Exemplo",
  "number": "3.1.3",
  "title": "",
  "body": " Seja . Calcule o número de inversões para cada uma das permutações dos elementos de .   A tabela abaixo contém todas as permutações de e o número de inversões correspondente:  Valores de para cada permutação de .                                   "
},
{
  "id": "definition-25",
  "level": "2",
  "url": "section-13.html#definition-25",
  "type": "Definição",
  "number": "3.1.5",
  "title": "",
  "body": "  (Determinante de uma matriz - Fórmula de Leibniz) Seja . O determinante de , denotado por ou , é definido por na qual é o sinal da permutação e o somatório se estende sobre todas as permutações de . Se , onde é a -ésima linha de , então podemos interpretar o determinante como uma função das linhas de :   "
},
{
  "id": "determinante-leibniz-2x2",
  "level": "2",
  "url": "section-13.html#determinante-leibniz-2x2",
  "type": "Exemplo",
  "number": "3.1.6",
  "title": "",
  "body": "   Seja dada por   Use a Fórmula de Leibniz para calcular     Temos que só admite duas permutações: e . Além disso, e . Logo,    "
},
{
  "id": "determinante-leibniz-3x3",
  "level": "2",
  "url": "section-13.html#determinante-leibniz-3x3",
  "type": "Exemplo",
  "number": "3.1.7",
  "title": "",
  "body": "  Seja dada por   Use a Fórmula de Leibniz para calcular .    Usando a , temos    "
},
{
  "id": "prop_det",
  "level": "2",
  "url": "section-13.html#prop_det",
  "type": "Proposição",
  "number": "3.1.8",
  "title": "(Propriedades do Determinante de uma Matriz).",
  "body": " (Propriedades do Determinante de uma Matriz)   Sejam , e .        Se , para vetores-linha e , então       "
},
{
  "id": "remark-24",
  "level": "2",
  "url": "section-13.html#remark-24",
  "type": "Nota",
  "number": "3.1.9",
  "title": "",
  "body": " As propriedades do determinante que dizem respeito às colunas de também valem para as suas linhas.  "
},
{
  "id": "technology-12",
  "level": "2",
  "url": "section-13.html#technology-12",
  "type": "Tecnologia",
  "number": "3.1.10",
  "title": "",
  "body": " Calculando o determinante de uma matriz:   "
},
{
  "id": "section-14",
  "level": "1",
  "url": "section-14.html",
  "type": "Seção",
  "number": "3.2",
  "title": "Desenvolvimento de Laplace",
  "body": " Desenvolvimento de Laplace   (Desenvolvimento de Laplace)   Seja e seja uma submatriz de obtida excluindo-se a -ésima linha e a -ésima coluna. Então, para cada ,   onde é chamado de cofator do elemento .     Observação: O desenvolvimento de Laplace também pode ser dado em relação a uma coluna da matriz .     Use o desenvolvimento de Laplace para calcular o determinante da matriz     Indicamos o item da que foi utilizado em algumas da igualdades. Multiplicando a segunda coluna por e somando à primeira, obtemos   Usando o desenvolvimento de Laplace para a segunda linha da matriz, temos que   Multiplicando cada linha da matriz por , obtemos   Somando a segunda linha à primeira e à terceira, vem que   Usando o desenvolvimento de Laplace para a segunda coluna da matriz, temos que     "
},
{
  "id": "teo-laplace",
  "level": "2",
  "url": "section-14.html#teo-laplace",
  "type": "Teorema",
  "number": "3.2.1",
  "title": "(Desenvolvimento de Laplace).",
  "body": " (Desenvolvimento de Laplace)   Seja e seja uma submatriz de obtida excluindo-se a -ésima linha e a -ésima coluna. Então, para cada ,   onde é chamado de cofator do elemento .   "
},
{
  "id": "remark-25",
  "level": "2",
  "url": "section-14.html#remark-25",
  "type": "Nota",
  "number": "3.2.2",
  "title": "",
  "body": " Observação: O desenvolvimento de Laplace também pode ser dado em relação a uma coluna da matriz .  "
},
{
  "id": "exemplo-laplace-4x4",
  "level": "2",
  "url": "section-14.html#exemplo-laplace-4x4",
  "type": "Exemplo",
  "number": "3.2.3",
  "title": "",
  "body": "  Use o desenvolvimento de Laplace para calcular o determinante da matriz     Indicamos o item da que foi utilizado em algumas da igualdades. Multiplicando a segunda coluna por e somando à primeira, obtemos   Usando o desenvolvimento de Laplace para a segunda linha da matriz, temos que   Multiplicando cada linha da matriz por , obtemos   Somando a segunda linha à primeira e à terceira, vem que   Usando o desenvolvimento de Laplace para a segunda coluna da matriz, temos que    "
},
{
  "id": "section-15",
  "level": "1",
  "url": "section-15.html",
  "type": "Seção",
  "number": "3.3",
  "title": "A Adjunta Clássica",
  "body": " A Adjunta Clássica   (A Adjunta de uma Matriz)  Seja . A adjunta da matriz , denotada por , é definida por na qual, é o cofator do elemento . Em outras palavras, se é a matriz dos cofatores de , então a adjunta de é dada por .     Seja dada por   Calcule a adjunta de .    Calculemos os cofatores de cada um dos elementos de :   Assim, a matriz dos cofatores de é dada por   Portanto, a adjunta de é a matriz      Calculando a adjunta de uma matriz:     Seja . Então, é não singular se, e somente se, . Em caso afirmativo,      Seja dada por   Determine se é não singular e, em caso afirmativo, calcule a inversa de .    Temos que   Assim, é não singular. Por outro lado, vimos no que   Logo,     "
},
{
  "id": "definition-26",
  "level": "2",
  "url": "section-15.html#definition-26",
  "type": "Definição",
  "number": "3.3.1",
  "title": "(A Adjunta de uma Matriz).",
  "body": " (A Adjunta de uma Matriz)  Seja . A adjunta da matriz , denotada por , é definida por na qual, é o cofator do elemento . Em outras palavras, se é a matriz dos cofatores de , então a adjunta de é dada por .  "
},
{
  "id": "exemplo-adjunta-2x2",
  "level": "2",
  "url": "section-15.html#exemplo-adjunta-2x2",
  "type": "Exemplo",
  "number": "3.3.2",
  "title": "",
  "body": "  Seja dada por   Calcule a adjunta de .    Calculemos os cofatores de cada um dos elementos de :   Assim, a matriz dos cofatores de é dada por   Portanto, a adjunta de é a matriz    "
},
{
  "id": "technology-13",
  "level": "2",
  "url": "section-15.html#technology-13",
  "type": "Tecnologia",
  "number": "3.3.3",
  "title": "",
  "body": " Calculando a adjunta de uma matriz:   "
},
{
  "id": "teo-inversa-adjunta",
  "level": "2",
  "url": "section-15.html#teo-inversa-adjunta",
  "type": "Teorema",
  "number": "3.3.4",
  "title": "",
  "body": " Seja . Então, é não singular se, e somente se, . Em caso afirmativo,   "
},
{
  "id": "exemplo-inversa-2x2",
  "level": "2",
  "url": "section-15.html#exemplo-inversa-2x2",
  "type": "Exemplo",
  "number": "3.3.5",
  "title": "",
  "body": "  Seja dada por   Determine se é não singular e, em caso afirmativo, calcule a inversa de .    Temos que   Assim, é não singular. Por outro lado, vimos no que   Logo,    "
},
{
  "id": "section-16",
  "level": "1",
  "url": "section-16.html",
  "type": "Seção",
  "number": "3.4",
  "title": "A Regra de Cramer",
  "body": " A Regra de Cramer   (Regra de Cramer)  Considere um sistema de equações lineares , onde é a matriz dos coeficientes do sistema e são os vetores de incógnitas e dos termos independentes, respectivamente.  Então, o sistema admite uma única solução se, e somente se, . Neste caso, , onde   onde é a matriz obtida substituindo-se a -ésima coluna de pelo vetor .     Considere o sistema de equações lineares   Mostre que o sistema admite uma única solução. Em seguida, use a Regra de Cramer para determinar a solução única do sistema.    A matriz dos coeficientes do sistema é   O determinante de é   Logo, o sistema admite uma única solução e podemos usar a Regra de Cramer.  Assim, sendo o vetor de termos independentes associado ao sistema, temos   Assim, o sistema possui única solução .     Obtendo a solução de um sistema linear da seguinte maneira:    "
},
{
  "id": "teo-cramer",
  "level": "2",
  "url": "section-16.html#teo-cramer",
  "type": "Teorema",
  "number": "3.4.1",
  "title": "(Regra de Cramer).",
  "body": " (Regra de Cramer)  Considere um sistema de equações lineares , onde é a matriz dos coeficientes do sistema e são os vetores de incógnitas e dos termos independentes, respectivamente.  Então, o sistema admite uma única solução se, e somente se, . Neste caso, , onde   onde é a matriz obtida substituindo-se a -ésima coluna de pelo vetor .  "
},
{
  "id": "exemplo-cramer-3x3",
  "level": "2",
  "url": "section-16.html#exemplo-cramer-3x3",
  "type": "Exemplo",
  "number": "3.4.2",
  "title": "",
  "body": "  Considere o sistema de equações lineares   Mostre que o sistema admite uma única solução. Em seguida, use a Regra de Cramer para determinar a solução única do sistema.    A matriz dos coeficientes do sistema é   O determinante de é   Logo, o sistema admite uma única solução e podemos usar a Regra de Cramer.  Assim, sendo o vetor de termos independentes associado ao sistema, temos   Assim, o sistema possui única solução .   "
},
{
  "id": "technology-14",
  "level": "2",
  "url": "section-16.html#technology-14",
  "type": "Tecnologia",
  "number": "3.4.3",
  "title": "",
  "body": " Obtendo a solução de um sistema linear da seguinte maneira:   "
},
{
  "id": "section-17",
  "level": "1",
  "url": "section-17.html",
  "type": "Seção",
  "number": "3.5",
  "title": "Exercícios",
  "body": " Exercícios   Calcule   pela definição  em relação à segunda coluna, usando o desenvolvimento de Laplace.    Dadas as matrizes e , calcule      Dada a matriz , calcule       Mostre que   Dizemos que e são matrizes semelhantes se existe uma matriz tal que . Mostre que se e são semelhantes.  Resolva o sistema, usando a Regra de Cramer:    "
},
{
  "id": "exercise-29",
  "level": "2",
  "url": "section-17.html#exercise-29",
  "type": "Exercício",
  "number": "3.5.1",
  "title": "",
  "body": "Calcule   pela definição  em relação à segunda coluna, usando o desenvolvimento de Laplace.   "
},
{
  "id": "exercise-30",
  "level": "2",
  "url": "section-17.html#exercise-30",
  "type": "Exercício",
  "number": "3.5.2",
  "title": "",
  "body": "Dadas as matrizes e , calcule     "
},
{
  "id": "exercise-31",
  "level": "2",
  "url": "section-17.html#exercise-31",
  "type": "Exercício",
  "number": "3.5.3",
  "title": "",
  "body": "Dada a matriz , calcule      "
},
{
  "id": "exercise-32",
  "level": "2",
  "url": "section-17.html#exercise-32",
  "type": "Exercício",
  "number": "3.5.4",
  "title": "",
  "body": "Mostre que  "
},
{
  "id": "exercise-33",
  "level": "2",
  "url": "section-17.html#exercise-33",
  "type": "Exercício",
  "number": "3.5.5",
  "title": "",
  "body": "Dizemos que e são matrizes semelhantes se existe uma matriz tal que . Mostre que se e são semelhantes. "
},
{
  "id": "exercise-34",
  "level": "2",
  "url": "section-17.html#exercise-34",
  "type": "Exercício",
  "number": "3.5.6",
  "title": "",
  "body": "Resolva o sistema, usando a Regra de Cramer:  "
},
{
  "id": "espacos-vetoriais",
  "level": "1",
  "url": "espacos-vetoriais.html",
  "type": "Seção",
  "number": "4.1",
  "title": "Espaços Vetoriais",
  "body": " Espaços Vetoriais   Um espaço vetorial real é um conjunto , não-vazio, com duas operações:  a adição de vetores  , que associa a cada par de elementos o elemento , chamado a soma de e ;  a multiplicação por escalar  , que associa a cada elemento e a cada elemento o elemento , chamado o produto de e ;   Além disso, as propriedades de i. até viii. precisam ser satisfeitas para quaisquer e .    Para todos , vale:   Para todos , vale:   Existe , chamado de vetor nulo , tal que para todo :   Para todo , existe , chamado de simétrico de , tal que:   Para todos e :   Para todo :   Para todos e todo :   Para todo e todos :       Os elementos de são frequentemente chamados de vetores , e os elementos de são denominados, nesse contexto, de escalares .     (O Espaço Vetorial )  Seja o conjunto:   Se e , então definimos a adição de vetores em por:   Se , então a multiplicação por escalar em é definida por:   O elemento neutro de é o vetor nulo :     (O Espaço Vetorial )  Seja o conjunto:   Se e , então definimos a adição de vetores em por:   Se , então a multiplicação por escalar em é definida por:   O elemento neutro de é a matriz nula  de dimensão .    (O Espaço Vetorial )  Seja o conjunto:   Se então definimos a adição de vetores em por:   Se , então a multiplicação por escalar em é definida por:   O elemento neutro de é o polinômio nulo  .   "
},
{
  "id": "definition-27",
  "level": "2",
  "url": "espacos-vetoriais.html#definition-27",
  "type": "Definição",
  "number": "4.1.1",
  "title": "",
  "body": " Um espaço vetorial real é um conjunto , não-vazio, com duas operações:  a adição de vetores  , que associa a cada par de elementos o elemento , chamado a soma de e ;  a multiplicação por escalar  , que associa a cada elemento e a cada elemento o elemento , chamado o produto de e ;   Além disso, as propriedades de i. até viii. precisam ser satisfeitas para quaisquer e .    Para todos , vale:   Para todos , vale:   Existe , chamado de vetor nulo , tal que para todo :   Para todo , existe , chamado de simétrico de , tal que:   Para todos e :   Para todo :   Para todos e todo :   Para todo e todos :     "
},
{
  "id": "remark-26",
  "level": "2",
  "url": "espacos-vetoriais.html#remark-26",
  "type": "Nota",
  "number": "4.1.2",
  "title": "",
  "body": " Os elementos de são frequentemente chamados de vetores , e os elementos de são denominados, nesse contexto, de escalares .  "
},
{
  "id": "example-31",
  "level": "2",
  "url": "espacos-vetoriais.html#example-31",
  "type": "Exemplo",
  "number": "4.1.3",
  "title": "(O Espaço Vetorial <span class=\"process-math\">\\(\\mathbb{R}^n\\)<\/span>).",
  "body": " (O Espaço Vetorial )  Seja o conjunto:   Se e , então definimos a adição de vetores em por:   Se , então a multiplicação por escalar em é definida por:   O elemento neutro de é o vetor nulo :   "
},
{
  "id": "exemplo-espaco-vetorial-mmn",
  "level": "2",
  "url": "espacos-vetoriais.html#exemplo-espaco-vetorial-mmn",
  "type": "Exemplo",
  "number": "4.1.4",
  "title": "(O Espaço Vetorial <span class=\"process-math\">\\(\\mathcal{M}_{m \\times n}\\)<\/span>).",
  "body": " (O Espaço Vetorial )  Seja o conjunto:   Se e , então definimos a adição de vetores em por:   Se , então a multiplicação por escalar em é definida por:   O elemento neutro de é a matriz nula  de dimensão .  "
},
{
  "id": "exemplo-espaco-vetorial-pn",
  "level": "2",
  "url": "espacos-vetoriais.html#exemplo-espaco-vetorial-pn",
  "type": "Exemplo",
  "number": "4.1.5",
  "title": "(O Espaço Vetorial <span class=\"process-math\">\\(\\mathcal{P}_n\\)<\/span>).",
  "body": " (O Espaço Vetorial )  Seja o conjunto:   Se então definimos a adição de vetores em por:   Se , então a multiplicação por escalar em é definida por:   O elemento neutro de é o polinômio nulo  .  "
},
{
  "id": "section-19",
  "level": "1",
  "url": "section-19.html",
  "type": "Seção",
  "number": "4.2",
  "title": "Subespaços Vetoriais",
  "body": " Subespaços Vetoriais   Subespaços vetoriais  Seja um espaço vetorial real e um subconjunto não-vazio de . Dizemos que é um subespaço vetorial de se:   Para todos , tem-se que .  Para todo e todo , .     Se é um subespaço vetorial de , então:   As condições i. e ii. implicam que, ao operarmos em , permanecemos em . Nesse sentido, é um espaço vetorial contido em . No entanto, não é necessário verificar os axiomas i. à viii. de um espaço vetorial para , pois estes já foram verificados para .  Tem-se que , qualquer que seja o subespaço vetorial .  Todo espaço vetorial admite ao menos dois subespaços triviais: e .      Considere o espaço vetorial real das matrizes . Seja   Mostre que é um subespaço vetorial de .    Note que , pois . Sejam   Então,   Logo, . Além disso, se ,   Logo, . Assim, é um subespaço vetorial de .     Considere o espaço vetorial real . Seja Mostre que é um subespaço vetorial de .  O espaço vetorial e o subespaço vetorial .      Note que , pois . Sejam e . Então,   Logo, . Além disso, se ,   Portanto, . Assim, é um subespaço vetorial de .      Considere o espaço vetorial real . Seja   Mostre que é um subespaço vetorial de .    Note que é o subconjunto de dos polinômios pares. Além disso, , pois o polinômio nulo é par. Sejam . Então e . Logo,   portanto . Ainda, se ,   Logo . Portanto, é um subespaço vetorial de .      Considere o espaço vetorial real . Seja   Mostre que não é um subespaço vetorial de .    Seja e . Então, claramente, . Porém,   Logo, não é subespaço vetorial de .    "
},
{
  "id": "def-subespacos-vetoriais",
  "level": "2",
  "url": "section-19.html#def-subespacos-vetoriais",
  "type": "Definição",
  "number": "4.2.1",
  "title": "Subespaços vetoriais.",
  "body": " Subespaços vetoriais  Seja um espaço vetorial real e um subconjunto não-vazio de . Dizemos que é um subespaço vetorial de se:   Para todos , tem-se que .  Para todo e todo , .   "
},
{
  "id": "obs-subespacos",
  "level": "2",
  "url": "section-19.html#obs-subespacos",
  "type": "Nota",
  "number": "4.2.2",
  "title": "",
  "body": " Se é um subespaço vetorial de , então:   As condições i. e ii. implicam que, ao operarmos em , permanecemos em . Nesse sentido, é um espaço vetorial contido em . No entanto, não é necessário verificar os axiomas i. à viii. de um espaço vetorial para , pois estes já foram verificados para .  Tem-se que , qualquer que seja o subespaço vetorial .  Todo espaço vetorial admite ao menos dois subespaços triviais: e .   "
},
{
  "id": "ex-subespaco-matrizes",
  "level": "2",
  "url": "section-19.html#ex-subespaco-matrizes",
  "type": "Exemplo",
  "number": "4.2.3",
  "title": "",
  "body": "  Considere o espaço vetorial real das matrizes . Seja   Mostre que é um subespaço vetorial de .    Note que , pois . Sejam   Então,   Logo, . Além disso, se ,   Logo, . Assim, é um subespaço vetorial de .   "
},
{
  "id": "ex-subespaco-r3",
  "level": "2",
  "url": "section-19.html#ex-subespaco-r3",
  "type": "Exemplo",
  "number": "4.2.4",
  "title": "",
  "body": " Considere o espaço vetorial real . Seja Mostre que é um subespaço vetorial de .  O espaço vetorial e o subespaço vetorial .      Note que , pois . Sejam e . Então,   Logo, . Além disso, se ,   Portanto, . Assim, é um subespaço vetorial de .   "
},
{
  "id": "ex-subespaco-pn",
  "level": "2",
  "url": "section-19.html#ex-subespaco-pn",
  "type": "Exemplo",
  "number": "4.2.6",
  "title": "",
  "body": "  Considere o espaço vetorial real . Seja   Mostre que é um subespaço vetorial de .    Note que é o subconjunto de dos polinômios pares. Além disso, , pois o polinômio nulo é par. Sejam . Então e . Logo,   portanto . Ainda, se ,   Logo . Portanto, é um subespaço vetorial de .   "
},
{
  "id": "ex-r2-nao-subespaco",
  "level": "2",
  "url": "section-19.html#ex-r2-nao-subespaco",
  "type": "Exemplo",
  "number": "4.2.7",
  "title": "",
  "body": "  Considere o espaço vetorial real . Seja   Mostre que não é um subespaço vetorial de .    Seja e . Então, claramente, . Porém,   Logo, não é subespaço vetorial de .   "
},
{
  "id": "section-20",
  "level": "1",
  "url": "section-20.html",
  "type": "Seção",
  "number": "4.3",
  "title": "Operando com Subespaços Vetoriais",
  "body": " Operando com Subespaços Vetoriais    Seja e subespaços vetoriais de um espaço vetorial . Então:   O conjunto é um subespaço vetorial de .  O conjunto é um subespaço vetorial de .      Observação: Se e são subespaços vetoriais de um espaço vetorial , então, geralmente, não é um subespaço vetorial de .    Soma Direta de Subespaços   Seja e subespaços vetoriais de um espaço vetorial . Dizemos que é a soma direta de e , e escrevemos , se, e somente se:   ;  .       Considere o espaço vetorial real das matrizes . Seja   Mostre que .    Com efeito, dado , então   onde e . Logo, . Além disso,   Como , resulta do que .    "
},
{
  "id": "teo-5.1",
  "level": "2",
  "url": "section-20.html#teo-5.1",
  "type": "Teorema",
  "number": "4.3.1",
  "title": "",
  "body": "  Seja e subespaços vetoriais de um espaço vetorial . Então:   O conjunto é um subespaço vetorial de .  O conjunto é um subespaço vetorial de .    "
},
{
  "id": "remark-28",
  "level": "2",
  "url": "section-20.html#remark-28",
  "type": "Nota",
  "number": "4.3.2",
  "title": "",
  "body": " Observação: Se e são subespaços vetoriais de um espaço vetorial , então, geralmente, não é um subespaço vetorial de .  "
},
{
  "id": "def-soma-direta",
  "level": "2",
  "url": "section-20.html#def-soma-direta",
  "type": "Definição",
  "number": "4.3.3",
  "title": "Soma Direta de Subespaços.",
  "body": " Soma Direta de Subespaços   Seja e subespaços vetoriais de um espaço vetorial . Dizemos que é a soma direta de e , e escrevemos , se, e somente se:   ;  .    "
},
{
  "id": "ex-soma-direta-matrizes",
  "level": "2",
  "url": "section-20.html#ex-soma-direta-matrizes",
  "type": "Exemplo",
  "number": "4.3.4",
  "title": "",
  "body": "  Considere o espaço vetorial real das matrizes . Seja   Mostre que .    Com efeito, dado , então   onde e . Logo, . Além disso,   Como , resulta do que .   "
},
{
  "id": "section-21",
  "level": "1",
  "url": "section-21.html",
  "type": "Seção",
  "number": "4.4",
  "title": "Exercícios",
  "body": " Exercícios   No espaço euclidiano , defina duas operações As operações à direita de ambas as igualdades são as usuais do . Quais dos axiomas de um espaço vetorial são satisfeitas por ?  Considere o conjunto e as seguintes operações O conjunto , com estas operações, é um espaço vetorial?  Considere . Mostre que o conjunto solução de um sistema linear homogêneo é subespaço vetorial de . Obs.: Um sistema linear é dito homogêneo se é da forma Dica: Use a equação matricial do sistema. O que podemos dizer se o sistema não for homogêneo?  Considere o espaço vetorial sobre , . Verifique se os seguintes conjuntos são subespaços vetoriais de :      Determine se os seguintes conjuntos são espaços vetoriais sobre :      O conjunto dos vetores de cujas coordenadas formam uma progressão aritmética.  O conjunto dos vetores de cujas primeiras coordenadas são iguais.  O conjunto dos vetores de que têm coordenadas iguais.  O conjunto das retas no espaço euclidiano .  O conjunto das retas que passam na origem no espaço euclidiano .   Considere espaço vetorial sobre . Assuma que e são subespaços vetoriais de . Mostre que é subespaço vetorial de se, e somente se, ou .  Sejam e subespaços de um espaço vetorial tal que e . Prove que para cada vetor , existe um único e tal que .   "
},
{
  "id": "quest-1",
  "level": "2",
  "url": "section-21.html#quest-1",
  "type": "Exercício",
  "number": "4.4.1",
  "title": "",
  "body": "No espaço euclidiano , defina duas operações As operações à direita de ambas as igualdades são as usuais do . Quais dos axiomas de um espaço vetorial são satisfeitas por ? "
},
{
  "id": "quest-2",
  "level": "2",
  "url": "section-21.html#quest-2",
  "type": "Exercício",
  "number": "4.4.2",
  "title": "",
  "body": "Considere o conjunto e as seguintes operações O conjunto , com estas operações, é um espaço vetorial? "
},
{
  "id": "quest-3",
  "level": "2",
  "url": "section-21.html#quest-3",
  "type": "Exercício",
  "number": "4.4.3",
  "title": "",
  "body": "Considere . Mostre que o conjunto solução de um sistema linear homogêneo é subespaço vetorial de . Obs.: Um sistema linear é dito homogêneo se é da forma Dica: Use a equação matricial do sistema. O que podemos dizer se o sistema não for homogêneo? "
},
{
  "id": "quest-4",
  "level": "2",
  "url": "section-21.html#quest-4",
  "type": "Exercício",
  "number": "4.4.4",
  "title": "",
  "body": "Considere o espaço vetorial sobre , . Verifique se os seguintes conjuntos são subespaços vetoriais de :     "
},
{
  "id": "quest-5",
  "level": "2",
  "url": "section-21.html#quest-5",
  "type": "Exercício",
  "number": "4.4.5",
  "title": "",
  "body": "Determine se os seguintes conjuntos são espaços vetoriais sobre :      O conjunto dos vetores de cujas coordenadas formam uma progressão aritmética.  O conjunto dos vetores de cujas primeiras coordenadas são iguais.  O conjunto dos vetores de que têm coordenadas iguais.  O conjunto das retas no espaço euclidiano .  O conjunto das retas que passam na origem no espaço euclidiano .  "
},
{
  "id": "quest-6",
  "level": "2",
  "url": "section-21.html#quest-6",
  "type": "Exercício",
  "number": "4.4.6",
  "title": "",
  "body": "Considere espaço vetorial sobre . Assuma que e são subespaços vetoriais de . Mostre que é subespaço vetorial de se, e somente se, ou . "
},
{
  "id": "quest-7",
  "level": "2",
  "url": "section-21.html#quest-7",
  "type": "Exercício",
  "number": "4.4.7",
  "title": "",
  "body": "Sejam e subespaços de um espaço vetorial tal que e . Prove que para cada vetor , existe um único e tal que . "
},
{
  "id": "comb-linear",
  "level": "1",
  "url": "comb-linear.html",
  "type": "Seção",
  "number": "4.5",
  "title": "Combinações Lineares",
  "body": " Combinações Lineares   Sejam um espaço vetorial, e . Dizemos que é uma combinação linear de se      Seja . Verifique se é uma combinação linear dos vetores     Precisamos determinar tais que   Equivalente ao sistema:   Matriz ampliada do sistema:   Matriz-linha reduzida:   Portanto, o sistema possui uma única solução: . Assim      Verificando se pode ser obtido como combinação linear de :      Sejam um espaço vetorial e . Consideremos o conjunto   Então é um subespaço vetorial de , chamado subespaço gerado por e denotado por . Dizemos também que os vetores geram , ou ainda, que eles formam um conjunto de geradores de .    O subespaço é o menor subespaço vetorial de que contém os vetores .   Algumas observações decorrem imediatamente do resultado anterior:   Seja e . Então, .  Seja e Então .  Se e para algum , então .       Verifique se os vetores formam um conjunto gerador de :          Resolvemos os dois casos:   Seja . Precisamos mostrar que existem tais que O sistema equivalente é que possui uma única solução Logo, .  Seja . Precisamos mostrar que existem tais que O sistema equivalente é A matriz ampliada do sistema é A matriz-linha reduzida à forma escada é Como o posto da matriz ampliada é diferente do posto da matriz dos coeficientes, o sistema é impossível. Logo, não geram .      Verificando se os vetores do item b. formam um conjunto gerador de :      Verifique se é uma combinação linear dos polinômios     Precisamos determinar se existem tais que   Podemos reescrever a equação como:   Igualando os coeficientes de mesmas potências de , obtemos o sistema:   A matriz ampliada do sistema é:   A matriz-linha reduzida à forma escada da matriz ampliada é:   Portanto, o sistema admite uma única solução , e . Logo,     "
},
{
  "id": "definition-30",
  "level": "2",
  "url": "comb-linear.html#definition-30",
  "type": "Definição",
  "number": "4.5.1",
  "title": "",
  "body": " Sejam um espaço vetorial, e . Dizemos que é uma combinação linear de se   "
},
{
  "id": "example-39",
  "level": "2",
  "url": "comb-linear.html#example-39",
  "type": "Exemplo",
  "number": "4.5.2",
  "title": "",
  "body": "  Seja . Verifique se é uma combinação linear dos vetores     Precisamos determinar tais que   Equivalente ao sistema:   Matriz ampliada do sistema:   Matriz-linha reduzida:   Portanto, o sistema possui uma única solução: . Assim    "
},
{
  "id": "technology-15",
  "level": "2",
  "url": "comb-linear.html#technology-15",
  "type": "Tecnologia",
  "number": "4.5.3",
  "title": "",
  "body": " Verificando se pode ser obtido como combinação linear de :   "
},
{
  "id": "teo_sub_gerado",
  "level": "2",
  "url": "comb-linear.html#teo_sub_gerado",
  "type": "Teorema",
  "number": "4.5.4",
  "title": "",
  "body": "  Sejam um espaço vetorial e . Consideremos o conjunto   Então é um subespaço vetorial de , chamado subespaço gerado por e denotado por . Dizemos também que os vetores geram , ou ainda, que eles formam um conjunto de geradores de .   "
},
{
  "id": "remark-29",
  "level": "2",
  "url": "comb-linear.html#remark-29",
  "type": "Nota",
  "number": "4.5.5",
  "title": "",
  "body": "O subespaço é o menor subespaço vetorial de que contém os vetores . "
},
{
  "id": "remark-30",
  "level": "2",
  "url": "comb-linear.html#remark-30",
  "type": "Nota",
  "number": "4.5.6",
  "title": "",
  "body": " Algumas observações decorrem imediatamente do resultado anterior:   Seja e . Então, .  Seja e Então .  Se e para algum , então .   "
},
{
  "id": "example-40",
  "level": "2",
  "url": "comb-linear.html#example-40",
  "type": "Exemplo",
  "number": "4.5.7",
  "title": "",
  "body": "  Verifique se os vetores formam um conjunto gerador de :          Resolvemos os dois casos:   Seja . Precisamos mostrar que existem tais que O sistema equivalente é que possui uma única solução Logo, .  Seja . Precisamos mostrar que existem tais que O sistema equivalente é A matriz ampliada do sistema é A matriz-linha reduzida à forma escada é Como o posto da matriz ampliada é diferente do posto da matriz dos coeficientes, o sistema é impossível. Logo, não geram .    "
},
{
  "id": "technology-16",
  "level": "2",
  "url": "comb-linear.html#technology-16",
  "type": "Tecnologia",
  "number": "4.5.8",
  "title": "",
  "body": " Verificando se os vetores do item b. formam um conjunto gerador de :   "
},
{
  "id": "example-41",
  "level": "2",
  "url": "comb-linear.html#example-41",
  "type": "Exemplo",
  "number": "4.5.9",
  "title": "",
  "body": "  Verifique se é uma combinação linear dos polinômios     Precisamos determinar se existem tais que   Podemos reescrever a equação como:   Igualando os coeficientes de mesmas potências de , obtemos o sistema:   A matriz ampliada do sistema é:   A matriz-linha reduzida à forma escada da matriz ampliada é:   Portanto, o sistema admite uma única solução , e . Logo,    "
},
{
  "id": "section-23",
  "level": "1",
  "url": "section-23.html",
  "type": "Seção",
  "number": "4.6",
  "title": "Independência Linear",
  "body": " Independência Linear    Sejam um espaço vetorial e . Dizemos que o conjunto é linearmente independente (L.I.) se   implica que .  Se para algum , então dizemos que o conjunto é linearmente dependente (L.D.) .      Decorre da definição que:   O conjunto é linearmente dependente, quaisquer que sejam os vetores .  Se , então é linearmente independente.  Dois vetores são linearmente dependentes se, e somente se, .  Se é um conjunto linearmente independente de vetores e , então é linearmente independente. Reciprocamente, se é um conjunto linearmente dependente e , então é linearmente dependente.       Verifique se os vetores  são linearmente independentes.   Suponha que   Isto nos dá o seguinte sistema homogêneo:   A matriz dos coeficientes do sistema é   Como , o sistema é indeterminado. Assim, existem não todos nulos tais que Logo, é linearmente dependente.     Calculando o determinante de   Calculando o subespaço gerado pelos três vetores dados:   Resolvendo o sistema dado na solução do problema anterior:      O conjunto é linearmente dependente se, e somente se, existir um tal que   Em outras palavras, o conjunto é linearmente dependente se algum dos vetores puder ser escrito como combinação linear dos outros.      Mostre que o conjunto  é linearmente dependente.  Note que Pelo , o conjunto é linearmente dependente, pois um dos vetores é combinação linear dos demais.   "
},
{
  "id": "indep-lin",
  "level": "2",
  "url": "section-23.html#indep-lin",
  "type": "Definição",
  "number": "4.6.1",
  "title": "",
  "body": "  Sejam um espaço vetorial e . Dizemos que o conjunto é linearmente independente (L.I.) se   implica que .  Se para algum , então dizemos que o conjunto é linearmente dependente (L.D.) .   "
},
{
  "id": "remark-31",
  "level": "2",
  "url": "section-23.html#remark-31",
  "type": "Nota",
  "number": "4.6.2",
  "title": "",
  "body": "  Decorre da definição que:   O conjunto é linearmente dependente, quaisquer que sejam os vetores .  Se , então é linearmente independente.  Dois vetores são linearmente dependentes se, e somente se, .  Se é um conjunto linearmente independente de vetores e , então é linearmente independente. Reciprocamente, se é um conjunto linearmente dependente e , então é linearmente dependente.    "
},
{
  "id": "ex-6-4",
  "level": "2",
  "url": "section-23.html#ex-6-4",
  "type": "Exemplo",
  "number": "4.6.3",
  "title": "",
  "body": "  Verifique se os vetores  são linearmente independentes.   Suponha que   Isto nos dá o seguinte sistema homogêneo:   A matriz dos coeficientes do sistema é   Como , o sistema é indeterminado. Assim, existem não todos nulos tais que Logo, é linearmente dependente.   "
},
{
  "id": "technology-17",
  "level": "2",
  "url": "section-23.html#technology-17",
  "type": "Tecnologia",
  "number": "4.6.4",
  "title": "",
  "body": " Calculando o determinante de   Calculando o subespaço gerado pelos três vetores dados:   Resolvendo o sistema dado na solução do problema anterior:   "
},
{
  "id": "teo-6-2",
  "level": "2",
  "url": "section-23.html#teo-6-2",
  "type": "Teorema",
  "number": "4.6.5",
  "title": "",
  "body": "  O conjunto é linearmente dependente se, e somente se, existir um tal que   Em outras palavras, o conjunto é linearmente dependente se algum dos vetores puder ser escrito como combinação linear dos outros.   "
},
{
  "id": "ex-6-5",
  "level": "2",
  "url": "section-23.html#ex-6-5",
  "type": "Exemplo",
  "number": "4.6.6",
  "title": "",
  "body": "  Mostre que o conjunto  é linearmente dependente.  Note que Pelo , o conjunto é linearmente dependente, pois um dos vetores é combinação linear dos demais.  "
},
{
  "id": "section-24",
  "level": "1",
  "url": "section-24.html",
  "type": "Seção",
  "number": "4.7",
  "title": "Exercícios",
  "body": " Exercícios    O vetor é combinação linear dos vetores e ?    Verifique se os seguintes conjuntos são L.I. ou L.D.   .  .  .  .  .  .     Considere o subespaço de descrito por  .  ?  Encontre um valor para de forma que o vetor pertença a .     Considere os vetores e . Se (espaço gerado pelos vetores e ), qual o valor de ?    Mostre que os vetores e geram o espaço euclidiano .    Verifique que o vetor pertence ao subespaço de gerado pelos vetores e .    "
},
{
  "id": "exercise-42",
  "level": "2",
  "url": "section-24.html#exercise-42",
  "type": "Exercício",
  "number": "4.7.1",
  "title": "",
  "body": " O vetor é combinação linear dos vetores e ?  "
},
{
  "id": "exercise-43",
  "level": "2",
  "url": "section-24.html#exercise-43",
  "type": "Exercício",
  "number": "4.7.2",
  "title": "",
  "body": " Verifique se os seguintes conjuntos são L.I. ou L.D.   .  .  .  .  .  .   "
},
{
  "id": "exercise-44",
  "level": "2",
  "url": "section-24.html#exercise-44",
  "type": "Exercício",
  "number": "4.7.3",
  "title": "",
  "body": " Considere o subespaço de descrito por  .  ?  Encontre um valor para de forma que o vetor pertença a .   "
},
{
  "id": "exercise-45",
  "level": "2",
  "url": "section-24.html#exercise-45",
  "type": "Exercício",
  "number": "4.7.4",
  "title": "",
  "body": " Considere os vetores e . Se (espaço gerado pelos vetores e ), qual o valor de ?  "
},
{
  "id": "exercise-46",
  "level": "2",
  "url": "section-24.html#exercise-46",
  "type": "Exercício",
  "number": "4.7.5",
  "title": "",
  "body": " Mostre que os vetores e geram o espaço euclidiano .  "
},
{
  "id": "exercise-47",
  "level": "2",
  "url": "section-24.html#exercise-47",
  "type": "Exercício",
  "number": "4.7.6",
  "title": "",
  "body": " Verifique que o vetor pertence ao subespaço de gerado pelos vetores e .  "
},
{
  "id": "section-25",
  "level": "1",
  "url": "section-25.html",
  "type": "Seção",
  "number": "4.8",
  "title": "Base",
  "body": " Base   Base de um espaço vetorial   Seja um espaço vetorial. Um conjunto é uma base de se:    O conjunto é linearmente independente:  se , então para .    O conjunto gera :  para todo , existem tais que         Mostre que   é uma base para .    Mostremos que é linearmente independente. Sejam tais que   Isto equivale ao sistema   Logo, é linearmente independente.  Mostremos que gera . Dado , precisamos mostrar que existem tais que   Basta tomar , e . Logo, gera e, portanto, é uma base de .     Obtendo uma base para o subespaço gerado pelos vetores do conjunto B:      Determine se   é uma base para .    Mostremos que gera . Dado , precisamos mostrar que existem tais que   Isto equivale ao sistema   A matriz ampliada do sistema é   A matriz-linha reduzida à forma escada da matriz ampliada é   Assim, o sistema é possível, pois o posto da matriz ampliada é igual ao posto da matriz dos coeficientes. Portanto, gera .   Vamos verificar se é linearmente independente. Suponha que   Precisamos mostrar que o sistema associado   admite apenas a solução trivial. A matriz ampliada do sistema é   A matriz-linha reduzida à forma escada da matriz ampliada é   Assim, o sistema é possível, pois o posto da matriz ampliada é igual ao posto da matriz dos coeficientes.  Porém, o sistema é indeterminado, pois o posto da matriz ampliada é menor que 4. Assim, o sistema admite infinitas soluções além da solução trivial.  Segue que é linearmente dependente. Portanto, não é base de .     Obtendo uma base para o subespaço gerado pelos vetores do conjunto B:      Determine se   é uma base para .    O conjunto não é base de , pois não gera o espaço. Se , então   equivale ao sistema impossível   Logo, não pertence ao subespaço gerado por , mas . Assim, não gera .     Obtendo uma base para o subespaço gerado pelos vetores do conjunto B:     Se gera e os vetores são não-nulos, então existe tal que é uma base de .  Em outras palavras, todo conjunto de geradores não-nulos de contém uma base.    Se gera e é linearmente independente, então .  De maneira equivalente, se é gerado por vetores, então qualquer conjunto com vetores ( ) é linearmente dependente.   "
},
{
  "id": "def-base",
  "level": "2",
  "url": "section-25.html#def-base",
  "type": "Definição",
  "number": "4.8.1",
  "title": "Base de um espaço vetorial.",
  "body": " Base de um espaço vetorial   Seja um espaço vetorial. Um conjunto é uma base de se:    O conjunto é linearmente independente:  se , então para .    O conjunto gera :  para todo , existem tais que      "
},
{
  "id": "ex-base-r3",
  "level": "2",
  "url": "section-25.html#ex-base-r3",
  "type": "Exemplo",
  "number": "4.8.2",
  "title": "",
  "body": "  Mostre que   é uma base para .    Mostremos que é linearmente independente. Sejam tais que   Isto equivale ao sistema   Logo, é linearmente independente.  Mostremos que gera . Dado , precisamos mostrar que existem tais que   Basta tomar , e . Logo, gera e, portanto, é uma base de .   "
},
{
  "id": "technology-18",
  "level": "2",
  "url": "section-25.html#technology-18",
  "type": "Tecnologia",
  "number": "4.8.3",
  "title": "",
  "body": " Obtendo uma base para o subespaço gerado pelos vetores do conjunto B:   "
},
{
  "id": "exemplo-7-2",
  "level": "2",
  "url": "section-25.html#exemplo-7-2",
  "type": "Exemplo",
  "number": "4.8.4",
  "title": "",
  "body": "  Determine se   é uma base para .    Mostremos que gera . Dado , precisamos mostrar que existem tais que   Isto equivale ao sistema   A matriz ampliada do sistema é   A matriz-linha reduzida à forma escada da matriz ampliada é   Assim, o sistema é possível, pois o posto da matriz ampliada é igual ao posto da matriz dos coeficientes. Portanto, gera .   Vamos verificar se é linearmente independente. Suponha que   Precisamos mostrar que o sistema associado   admite apenas a solução trivial. A matriz ampliada do sistema é   A matriz-linha reduzida à forma escada da matriz ampliada é   Assim, o sistema é possível, pois o posto da matriz ampliada é igual ao posto da matriz dos coeficientes.  Porém, o sistema é indeterminado, pois o posto da matriz ampliada é menor que 4. Assim, o sistema admite infinitas soluções além da solução trivial.  Segue que é linearmente dependente. Portanto, não é base de .   "
},
{
  "id": "technology-19",
  "level": "2",
  "url": "section-25.html#technology-19",
  "type": "Tecnologia",
  "number": "4.8.5",
  "title": "",
  "body": " Obtendo uma base para o subespaço gerado pelos vetores do conjunto B:   "
},
{
  "id": "exemplo-7-3",
  "level": "2",
  "url": "section-25.html#exemplo-7-3",
  "type": "Exemplo",
  "number": "4.8.6",
  "title": "",
  "body": "  Determine se   é uma base para .    O conjunto não é base de , pois não gera o espaço. Se , então   equivale ao sistema impossível   Logo, não pertence ao subespaço gerado por , mas . Assim, não gera .   "
},
{
  "id": "technology-20",
  "level": "2",
  "url": "section-25.html#technology-20",
  "type": "Tecnologia",
  "number": "4.8.7",
  "title": "",
  "body": " Obtendo uma base para o subespaço gerado pelos vetores do conjunto B:   "
},
{
  "id": "teo-7.1",
  "level": "2",
  "url": "section-25.html#teo-7.1",
  "type": "Teorema",
  "number": "4.8.8",
  "title": "",
  "body": " Se gera e os vetores são não-nulos, então existe tal que é uma base de .  Em outras palavras, todo conjunto de geradores não-nulos de contém uma base.  "
},
{
  "id": "teo-7.2",
  "level": "2",
  "url": "section-25.html#teo-7.2",
  "type": "Teorema",
  "number": "4.8.9",
  "title": "",
  "body": " Se gera e é linearmente independente, então .  De maneira equivalente, se é gerado por vetores, então qualquer conjunto com vetores ( ) é linearmente dependente.  "
},
{
  "id": "section-26",
  "level": "1",
  "url": "section-26.html",
  "type": "Seção",
  "number": "4.9",
  "title": "Dimensão",
  "body": " Dimensão     Seja um espaço vetorial. A dimensão de é o número de elementos de uma base de , denotado por .     Observações    O conjunto , onde ( ) é o vetor com -ésima coordenada 1 e demais coordenadas iguais a zero, é base de , denominada de base canônica do . Resulta que .    O conjunto , é uma base de , denominada de base canônica do . Logo, .    O conjunto , onde é a matriz cuja entrada é igual a 1 e demais entradas iguais a zero, é uma base de , denominada de base canônica do . Portanto, .    Alguns espaços vetoriais possuem dimensão infinita. Por exemplo, considere o espaço vetorial dos polinômios com coeficientes reais. Uma base para é o conjunto . Assim, possui dimensão infinita. Neste curso, os espaços considerados terão sempre dimensão finita .       Seja um espaço vetorial de dimensão finita. Se é linearmente independente, então existe um conjunto tal que e é uma base de .  Em outras palavras, podemos estender um conjunto linearmente independente de vetores de à uma base de .      Suponha que é um espaço vetorial de dimensão . Então:    Um conjunto de vetores é linearmente independente se, e somente se, é uma base de .    Um conjunto de vetores gera se, e somente se, é uma base de .        Mostre que é uma base de .    Como e possui dois elementos, então é suficiente mostrar que é linearmente independente ou que gera .  Mostremos que é linearmente independente. Ora, mas já observamos que um conjunto com dois elementos é linearmente dependente se, e somente se, um vetor é múltiplo do outro. Como se vê facilmente, não existe tal que .  Logo, é linearmente independente e, portanto, uma base de .     Sejam e subespaços vetoriais de um espaço vetorial de dimensão finita. Então, e . Além disso, .     Considere os subespaços vetoriais de ,   Determine os subespaços e .    Note que    Então,   Agora, dado ,    Logo, o sistema possui infinitas soluções. Portanto, .  Além disso, pelo ,       Calculando o determinante de uma matriz:    "
},
{
  "id": "def-dimensao",
  "level": "2",
  "url": "section-26.html#def-dimensao",
  "type": "Definição",
  "number": "4.9.1",
  "title": "",
  "body": "   Seja um espaço vetorial. A dimensão de é o número de elementos de uma base de , denotado por .   "
},
{
  "id": "obs-bases-canonicas",
  "level": "2",
  "url": "section-26.html#obs-bases-canonicas",
  "type": "Nota",
  "number": "4.9.2",
  "title": "Observações.",
  "body": " Observações    O conjunto , onde ( ) é o vetor com -ésima coordenada 1 e demais coordenadas iguais a zero, é base de , denominada de base canônica do . Resulta que .    O conjunto , é uma base de , denominada de base canônica do . Logo, .    O conjunto , onde é a matriz cuja entrada é igual a 1 e demais entradas iguais a zero, é uma base de , denominada de base canônica do . Portanto, .    Alguns espaços vetoriais possuem dimensão infinita. Por exemplo, considere o espaço vetorial dos polinômios com coeficientes reais. Uma base para é o conjunto . Assim, possui dimensão infinita. Neste curso, os espaços considerados terão sempre dimensão finita .    "
},
{
  "id": "teo-7-3",
  "level": "2",
  "url": "section-26.html#teo-7-3",
  "type": "Teorema",
  "number": "4.9.3",
  "title": "",
  "body": "  Seja um espaço vetorial de dimensão finita. Se é linearmente independente, então existe um conjunto tal que e é uma base de .  Em outras palavras, podemos estender um conjunto linearmente independente de vetores de à uma base de .   "
},
{
  "id": "teo-7-4",
  "level": "2",
  "url": "section-26.html#teo-7-4",
  "type": "Teorema",
  "number": "4.9.4",
  "title": "",
  "body": "  Suponha que é um espaço vetorial de dimensão . Então:    Um conjunto de vetores é linearmente independente se, e somente se, é uma base de .    Um conjunto de vetores gera se, e somente se, é uma base de .     "
},
{
  "id": "ex-7-4",
  "level": "2",
  "url": "section-26.html#ex-7-4",
  "type": "Exemplo",
  "number": "4.9.5",
  "title": "",
  "body": "  Mostre que é uma base de .    Como e possui dois elementos, então é suficiente mostrar que é linearmente independente ou que gera .  Mostremos que é linearmente independente. Ora, mas já observamos que um conjunto com dois elementos é linearmente dependente se, e somente se, um vetor é múltiplo do outro. Como se vê facilmente, não existe tal que .  Logo, é linearmente independente e, portanto, uma base de .   "
},
{
  "id": "thm-7-5",
  "level": "2",
  "url": "section-26.html#thm-7-5",
  "type": "Teorema",
  "number": "4.9.6",
  "title": "",
  "body": " Sejam e subespaços vetoriais de um espaço vetorial de dimensão finita. Então, e . Além disso, .  "
},
{
  "id": "ex-7-5",
  "level": "2",
  "url": "section-26.html#ex-7-5",
  "type": "Exemplo",
  "number": "4.9.7",
  "title": "",
  "body": "  Considere os subespaços vetoriais de ,   Determine os subespaços e .    Note que    Então,   Agora, dado ,    Logo, o sistema possui infinitas soluções. Portanto, .  Além disso, pelo ,     "
},
{
  "id": "technology-21",
  "level": "2",
  "url": "section-26.html#technology-21",
  "type": "Tecnologia",
  "number": "4.9.8",
  "title": "",
  "body": " Calculando o determinante de uma matriz:   "
},
{
  "id": "section-27",
  "level": "1",
  "url": "section-27.html",
  "type": "Seção",
  "number": "4.10",
  "title": "Exercícios",
  "body": " Exercícios     Mostre que é base de .    Determine uma base para o espaço vetorial das matrizes . Qual a dimensão deste espaço?    Determine uma base para . Qual a dimensão deste espaço?    Mostre que o conjunto é base de .    Mostre que os polinômios e formam uma base para o espaço dos polinômios de grau ≤ 3 na variável .    Mostre que os vetores e geram o espaço e encontre uma base dentre os vetores e .    Seja e o conjunto .   Mostre que não é base de .  Determine uma base de que possua dois elementos de .     Sejam os vetores e do espaço euclidiano .   Mostre que é base de .  Escreva como combinação linear dos vetores da base .     Seja .   Qual a dimensão de ?  O conjunto é uma base de ?     Seja o espaço das matrizes sobre e seja o subespaço gerado por  . Determine uma base para e sua dimensão.    Considere o subespaço de gerado pelos vetores e .   O vetor ?  Exiba uma base para e determine sua dimensão.  ?     Considere o sistema linear   Seja .   Que condições devemos impor a para que seja subespaço de ?  Encontre uma base para .  Qual a relação entre a dimensão de e o grau de liberdade do sistema?     Definimos como a soma direta dos subespaços e . Se  e .  Exiba uma base para e .  Exiba uma base para .  Exiba uma base para .  é soma direta?  ?     Sejam e subespaços de .   Determine e exiba uma base.  Determine . Tal soma é direta? Vale ?     "
},
{
  "id": "exercise-48",
  "level": "2",
  "url": "section-27.html#exercise-48",
  "type": "Exercício",
  "number": "4.10.1",
  "title": "",
  "body": " Mostre que é base de .  "
},
{
  "id": "exercise-49",
  "level": "2",
  "url": "section-27.html#exercise-49",
  "type": "Exercício",
  "number": "4.10.2",
  "title": "",
  "body": " Determine uma base para o espaço vetorial das matrizes . Qual a dimensão deste espaço?  "
},
{
  "id": "exercise-50",
  "level": "2",
  "url": "section-27.html#exercise-50",
  "type": "Exercício",
  "number": "4.10.3",
  "title": "",
  "body": " Determine uma base para . Qual a dimensão deste espaço?  "
},
{
  "id": "exercise-51",
  "level": "2",
  "url": "section-27.html#exercise-51",
  "type": "Exercício",
  "number": "4.10.4",
  "title": "",
  "body": " Mostre que o conjunto é base de .  "
},
{
  "id": "exercise-52",
  "level": "2",
  "url": "section-27.html#exercise-52",
  "type": "Exercício",
  "number": "4.10.5",
  "title": "",
  "body": " Mostre que os polinômios e formam uma base para o espaço dos polinômios de grau ≤ 3 na variável .  "
},
{
  "id": "exercise-53",
  "level": "2",
  "url": "section-27.html#exercise-53",
  "type": "Exercício",
  "number": "4.10.6",
  "title": "",
  "body": " Mostre que os vetores e geram o espaço e encontre uma base dentre os vetores e .  "
},
{
  "id": "exercise-54",
  "level": "2",
  "url": "section-27.html#exercise-54",
  "type": "Exercício",
  "number": "4.10.7",
  "title": "",
  "body": " Seja e o conjunto .   Mostre que não é base de .  Determine uma base de que possua dois elementos de .   "
},
{
  "id": "exercise-55",
  "level": "2",
  "url": "section-27.html#exercise-55",
  "type": "Exercício",
  "number": "4.10.8",
  "title": "",
  "body": " Sejam os vetores e do espaço euclidiano .   Mostre que é base de .  Escreva como combinação linear dos vetores da base .   "
},
{
  "id": "exercise-56",
  "level": "2",
  "url": "section-27.html#exercise-56",
  "type": "Exercício",
  "number": "4.10.9",
  "title": "",
  "body": " Seja .   Qual a dimensão de ?  O conjunto é uma base de ?   "
},
{
  "id": "exercise-57",
  "level": "2",
  "url": "section-27.html#exercise-57",
  "type": "Exercício",
  "number": "4.10.10",
  "title": "",
  "body": " Seja o espaço das matrizes sobre e seja o subespaço gerado por  . Determine uma base para e sua dimensão.  "
},
{
  "id": "exercise-58",
  "level": "2",
  "url": "section-27.html#exercise-58",
  "type": "Exercício",
  "number": "4.10.11",
  "title": "",
  "body": " Considere o subespaço de gerado pelos vetores e .   O vetor ?  Exiba uma base para e determine sua dimensão.  ?   "
},
{
  "id": "exercise-59",
  "level": "2",
  "url": "section-27.html#exercise-59",
  "type": "Exercício",
  "number": "4.10.12",
  "title": "",
  "body": " Considere o sistema linear   Seja .   Que condições devemos impor a para que seja subespaço de ?  Encontre uma base para .  Qual a relação entre a dimensão de e o grau de liberdade do sistema?   "
},
{
  "id": "exercise-60",
  "level": "2",
  "url": "section-27.html#exercise-60",
  "type": "Exercício",
  "number": "4.10.13",
  "title": "",
  "body": " Definimos como a soma direta dos subespaços e . Se  e .  Exiba uma base para e .  Exiba uma base para .  Exiba uma base para .  é soma direta?  ?   "
},
{
  "id": "exercise-61",
  "level": "2",
  "url": "section-27.html#exercise-61",
  "type": "Exercício",
  "number": "4.10.14",
  "title": "",
  "body": " Sejam e subespaços de .   Determine e exiba uma base.  Determine . Tal soma é direta? Vale ?   "
},
{
  "id": "section-28",
  "level": "1",
  "url": "section-28.html",
  "type": "Seção",
  "number": "4.11",
  "title": "Coordenadas",
  "body": " Coordenadas   Seja espaço vetorial e uma base de . Então, dado , existem únicos tais que .    Seja um espaço vetorial de dimensão e uma base de . Dado , existem únicos tais que . Os números são denominados de coordenadas de em relação à base e são denotados por     Seja uma base para . Determine as coordenadas de em relação à base .  As coordenadas de na base são os únicos números tais que , ou seja, . Temos, então, o sistema Logo, . Portanto, as coordenadas de na base são dadas por .    É importante notar que a ordem dos elementos de uma base também influi nas coordenadas de um vetor em relação a esta base. Por exemplo, se , então . Por este motivo, nos referiremos a uma base de como uma base ordenada .  "
},
{
  "id": "thm-7-6",
  "level": "2",
  "url": "section-28.html#thm-7-6",
  "type": "Teorema",
  "number": "4.11.1",
  "title": "",
  "body": " Seja espaço vetorial e uma base de . Então, dado , existem únicos tais que .  "
},
{
  "id": "definition-34",
  "level": "2",
  "url": "section-28.html#definition-34",
  "type": "Definição",
  "number": "4.11.2",
  "title": "",
  "body": " Seja um espaço vetorial de dimensão e uma base de . Dado , existem únicos tais que . Os números são denominados de coordenadas de em relação à base e são denotados por   "
},
{
  "id": "example-49",
  "level": "2",
  "url": "section-28.html#example-49",
  "type": "Exemplo",
  "number": "4.11.3",
  "title": "",
  "body": " Seja uma base para . Determine as coordenadas de em relação à base .  As coordenadas de na base são os únicos números tais que , ou seja, . Temos, então, o sistema Logo, . Portanto, as coordenadas de na base são dadas por .   "
},
{
  "id": "remark-33",
  "level": "2",
  "url": "section-28.html#remark-33",
  "type": "Nota",
  "number": "4.11.4",
  "title": "",
  "body": "É importante notar que a ordem dos elementos de uma base também influi nas coordenadas de um vetor em relação a esta base. Por exemplo, se , então . Por este motivo, nos referiremos a uma base de como uma base ordenada . "
},
{
  "id": "section-29",
  "level": "1",
  "url": "section-29.html",
  "type": "Seção",
  "number": "4.12",
  "title": "Mudança de Base",
  "body": " Mudança de Base   (Matriz de Mudança de Base)  Sejam e duas bases ordenadas de um mesmo espaço vetorial . Dado , e Então, as coordenadas de com relação às bases e são, respectivamente, Como é base de e então Substituindo em , obtemos Igualando a , temos Isto corresponde ao sistema linear O sistema pode ser escrito na sua forma matricial como  A matriz   é chamada matriz de mudança de base da base para a base . Assim, a relação anterior pode ser escrita como   Note que é a matriz cuja i -ésima coluna são as coordenadas de na base .      Sejam e bases de . Determine e utilize-a para calcular as coordenadas do vetor na base .    Suponha que . O sistema linear correspondente é Logo, e . Analogamente, se , implica em e .  Portanto, a matriz da mudança de base de para é   Por outro lado, se , então Como é a base canônica,   Portanto, ou seja,      Sejam e duas bases ordenadas de um mesmo espaço vetorial . Então a matriz de mudança de base da base para , , é não singular e vale     Sejam e bases de . Determine .  Note que e . Logo, . Pelo  .   "
},
{
  "id": "remark-34",
  "level": "2",
  "url": "section-29.html#remark-34",
  "type": "Nota",
  "number": "4.12.1",
  "title": "(Matriz de Mudança de Base).",
  "body": " (Matriz de Mudança de Base)  Sejam e duas bases ordenadas de um mesmo espaço vetorial . Dado , e Então, as coordenadas de com relação às bases e são, respectivamente, Como é base de e então Substituindo em , obtemos Igualando a , temos Isto corresponde ao sistema linear O sistema pode ser escrito na sua forma matricial como  A matriz   é chamada matriz de mudança de base da base para a base . Assim, a relação anterior pode ser escrita como   Note que é a matriz cuja i -ésima coluna são as coordenadas de na base .   "
},
{
  "id": "example-50",
  "level": "2",
  "url": "section-29.html#example-50",
  "type": "Exemplo",
  "number": "4.12.2",
  "title": "",
  "body": "  Sejam e bases de . Determine e utilize-a para calcular as coordenadas do vetor na base .    Suponha que . O sistema linear correspondente é Logo, e . Analogamente, se , implica em e .  Portanto, a matriz da mudança de base de para é   Por outro lado, se , então Como é a base canônica,   Portanto, ou seja,    "
},
{
  "id": "teo_8.1",
  "level": "2",
  "url": "section-29.html#teo_8.1",
  "type": "Teorema",
  "number": "4.12.3",
  "title": "",
  "body": " Sejam e duas bases ordenadas de um mesmo espaço vetorial . Então a matriz de mudança de base da base para , , é não singular e vale   "
},
{
  "id": "example-51",
  "level": "2",
  "url": "section-29.html#example-51",
  "type": "Exemplo",
  "number": "4.12.4",
  "title": "",
  "body": " Sejam e bases de . Determine .  Note que e . Logo, . Pelo  .  "
},
{
  "id": "section-30",
  "level": "1",
  "url": "section-30.html",
  "type": "Seção",
  "number": "4.13",
  "title": "Exercícios",
  "body": " Exercícios   Sejam e subespaços vetoriais de um espaço vetorial , demonstre que   Sejam e dois planos no passando pela origem (isto é, dois subespaços de dimensão ). Determine quando:  .  .    Determine o vetor coordenada de em relação à base nos seguintes casos:  .  .  .    Considere a base do espaço vetorial euclidiano . Determine o vetor coordenada de em relação à base , onde:  .  .  .    Seja uma base de . Determine o vetor coordenada de em relação à base .  Sejam os vetores , e do espaço euclidiano .  Mostre que é base de .  Escreva , e como combinação linear dos vetores da base .    Seja uma base de .  Mostre que é uma base de .  Encontre as coordenadas de em relação à base .  Encontre a matriz de mudança da base para a base canônica .    Determine as coordenadas do vetor em relação às seguintes bases de :          Sejam , , .  Encontre as seguintes matrizes de mudança de base:  .  .  .    Quais são as coordenadas do vetor em relação à base:   .  .  .    As coordenadas de um vetor em relação à base são dadas por . Quais são as coordenadas de em relação às bases e .    Seja o espaço vetorial das matrizes triangulares inferiores. Considere as seguintes bases: , . Determine as matrizes de mudança de base e .   "
},
{
  "id": "exercise-62",
  "level": "2",
  "url": "section-30.html#exercise-62",
  "type": "Exercício",
  "number": "4.13.1",
  "title": "",
  "body": "Sejam e subespaços vetoriais de um espaço vetorial , demonstre que  "
},
{
  "id": "exercise-63",
  "level": "2",
  "url": "section-30.html#exercise-63",
  "type": "Exercício",
  "number": "4.13.2",
  "title": "",
  "body": "Sejam e dois planos no passando pela origem (isto é, dois subespaços de dimensão ). Determine quando:  .  .   "
},
{
  "id": "exercise-64",
  "level": "2",
  "url": "section-30.html#exercise-64",
  "type": "Exercício",
  "number": "4.13.3",
  "title": "",
  "body": "Determine o vetor coordenada de em relação à base nos seguintes casos:  .  .  .   "
},
{
  "id": "exercise-65",
  "level": "2",
  "url": "section-30.html#exercise-65",
  "type": "Exercício",
  "number": "4.13.4",
  "title": "",
  "body": "Considere a base do espaço vetorial euclidiano . Determine o vetor coordenada de em relação à base , onde:  .  .  .   "
},
{
  "id": "exercise-66",
  "level": "2",
  "url": "section-30.html#exercise-66",
  "type": "Exercício",
  "number": "4.13.5",
  "title": "",
  "body": "Seja uma base de . Determine o vetor coordenada de em relação à base . "
},
{
  "id": "exercise-67",
  "level": "2",
  "url": "section-30.html#exercise-67",
  "type": "Exercício",
  "number": "4.13.6",
  "title": "",
  "body": "Sejam os vetores , e do espaço euclidiano .  Mostre que é base de .  Escreva , e como combinação linear dos vetores da base .   "
},
{
  "id": "exercise-68",
  "level": "2",
  "url": "section-30.html#exercise-68",
  "type": "Exercício",
  "number": "4.13.7",
  "title": "",
  "body": "Seja uma base de .  Mostre que é uma base de .  Encontre as coordenadas de em relação à base .  Encontre a matriz de mudança da base para a base canônica .   "
},
{
  "id": "exercise-69",
  "level": "2",
  "url": "section-30.html#exercise-69",
  "type": "Exercício",
  "number": "4.13.8",
  "title": "",
  "body": "Determine as coordenadas do vetor em relação às seguintes bases de :         "
},
{
  "id": "exercise-70",
  "level": "2",
  "url": "section-30.html#exercise-70",
  "type": "Exercício",
  "number": "4.13.9",
  "title": "",
  "body": "Sejam , , .  Encontre as seguintes matrizes de mudança de base:  .  .  .    Quais são as coordenadas do vetor em relação à base:   .  .  .    As coordenadas de um vetor em relação à base são dadas por . Quais são as coordenadas de em relação às bases e .   "
},
{
  "id": "exercise-71",
  "level": "2",
  "url": "section-30.html#exercise-71",
  "type": "Exercício",
  "number": "4.13.10",
  "title": "",
  "body": "Seja o espaço vetorial das matrizes triangulares inferiores. Considere as seguintes bases: , . Determine as matrizes de mudança de base e . "
},
{
  "id": "sec-transformacoes-lineares",
  "level": "1",
  "url": "sec-transformacoes-lineares.html",
  "type": "Seção",
  "number": "5.1",
  "title": "Transformações Lineares",
  "body": " Transformações Lineares   Sejam e dois espaços vetoriais. Uma transformação linear é uma função que satisfaz os seguintes axiomas:    ;   .     Observação  Decorre da definição que se é uma transformação linear, então .     Seja dada por   Verifique se é linear.    Sejam e , então   Além disso, se ,   Logo, é uma transformação linear.      Seja dada por   Verifique se é linear.    A aplicação não é uma transformação linear. Com efeito,   Como , resulta que não é uma transformação linear.      Seja dada por   Verifique se é linear.    A aplicação não é uma transformação linear. Com efeito, se e , então   Como , não é uma transformação linear.      Seja e dada por   onde . Verifique se é linear.    Sejam , então   Além disso, se ,   Logo, é uma transformação linear.      Seja dada por   Verifique se é linear.    Note que é a aplicação derivada: dado ,   onde é a derivada de . Ora, sabemos que a derivada satisfaz   e   para todos e . Logo, é uma transformação linear.      Seja dada por   onde . Verifique se é linear.    Sejam ,   Além disso,   Logo, é uma transformação linear.      Sejam e espaços vetoriais, base de e . Então existe uma única transformação linear tal que   Além disso, dado ,       Determine a transformação linear tal que     Seja . Então,   Logo,   Logo, para todo .    "
},
{
  "id": "definition-35",
  "level": "2",
  "url": "sec-transformacoes-lineares.html#definition-35",
  "type": "Definição",
  "number": "5.1.1",
  "title": "",
  "body": " Sejam e dois espaços vetoriais. Uma transformação linear é uma função que satisfaz os seguintes axiomas:    ;   .   "
},
{
  "id": "remark-35",
  "level": "2",
  "url": "sec-transformacoes-lineares.html#remark-35",
  "type": "Nota",
  "number": "5.1.2",
  "title": "Observação.",
  "body": " Observação  Decorre da definição que se é uma transformação linear, então .  "
},
{
  "id": "ex-linear-transform-1",
  "level": "2",
  "url": "sec-transformacoes-lineares.html#ex-linear-transform-1",
  "type": "Exemplo",
  "number": "5.1.3",
  "title": "",
  "body": "  Seja dada por   Verifique se é linear.    Sejam e , então   Além disso, se ,   Logo, é uma transformação linear.   "
},
{
  "id": "ex-linear-transform-2",
  "level": "2",
  "url": "sec-transformacoes-lineares.html#ex-linear-transform-2",
  "type": "Exemplo",
  "number": "5.1.4",
  "title": "",
  "body": "  Seja dada por   Verifique se é linear.    A aplicação não é uma transformação linear. Com efeito,   Como , resulta que não é uma transformação linear.   "
},
{
  "id": "ex-linear-transform-3",
  "level": "2",
  "url": "sec-transformacoes-lineares.html#ex-linear-transform-3",
  "type": "Exemplo",
  "number": "5.1.5",
  "title": "",
  "body": "  Seja dada por   Verifique se é linear.    A aplicação não é uma transformação linear. Com efeito, se e , então   Como , não é uma transformação linear.   "
},
{
  "id": "ex-linear-transform-4",
  "level": "2",
  "url": "sec-transformacoes-lineares.html#ex-linear-transform-4",
  "type": "Exemplo",
  "number": "5.1.6",
  "title": "",
  "body": "  Seja e dada por   onde . Verifique se é linear.    Sejam , então   Além disso, se ,   Logo, é uma transformação linear.   "
},
{
  "id": "ex-linear-transform-5",
  "level": "2",
  "url": "sec-transformacoes-lineares.html#ex-linear-transform-5",
  "type": "Exemplo",
  "number": "5.1.7",
  "title": "",
  "body": "  Seja dada por   Verifique se é linear.    Note que é a aplicação derivada: dado ,   onde é a derivada de . Ora, sabemos que a derivada satisfaz   e   para todos e . Logo, é uma transformação linear.   "
},
{
  "id": "ex-linear-transform-6",
  "level": "2",
  "url": "sec-transformacoes-lineares.html#ex-linear-transform-6",
  "type": "Exemplo",
  "number": "5.1.8",
  "title": "",
  "body": "  Seja dada por   onde . Verifique se é linear.    Sejam ,   Além disso,   Logo, é uma transformação linear.   "
},
{
  "id": "thm-unica-transformacao",
  "level": "2",
  "url": "sec-transformacoes-lineares.html#thm-unica-transformacao",
  "type": "Teorema",
  "number": "5.1.9",
  "title": "",
  "body": "  Sejam e espaços vetoriais, base de e . Então existe uma única transformação linear tal que   Além disso, dado ,    "
},
{
  "id": "ex-determinar-transformacao",
  "level": "2",
  "url": "sec-transformacoes-lineares.html#ex-determinar-transformacao",
  "type": "Exemplo",
  "number": "5.1.10",
  "title": "",
  "body": "  Determine a transformação linear tal que     Seja . Então,   Logo,   Logo, para todo .   "
},
{
  "id": "section-32",
  "level": "1",
  "url": "section-32.html",
  "type": "Seção",
  "number": "5.2",
  "title": "Núcleo e Imagem",
  "body": " Núcleo e Imagem   Núcleo e Imagem de uma Transformação  Seja transformação linear. O núcleo de é o conjunto   Definimos também a imagem de como o conjunto     Observação  Pode-se mostrar que é um subespaço vetorial de e que é um subespaço vetorial de .     Seja dada por   Determine o núcleo e a imagem de .    Se é tal que , então,   Logo, . Portanto,   Por outro lado, note que   Assim,   Em particular, e .     Transformações Injetivas e Sobrejetivas   Seja uma função. Dizemos que é injetora se   Dizemos ainda que é sobrejetora se dado , existir tal que . Em outras palavras, é injetora se .      Seja dada por   Determine se é injetora e sobretora.    A transformação linear é injetora. Com efeito,   Porém, não é sobrejetora. De fato, não existe tal que   Logo, e, portanto, .      Seja transformação linear. Então é injetora se, e somente se, .     (Teorema do núcleo e imagem)   Seja transformação linear. Então,       Seja transformação linear. Se , então é injetora se, e somente se, é sobrejetora.      Seja transformação linear injetora. Se , então leva base em base.    "
},
{
  "id": "definition-36",
  "level": "2",
  "url": "section-32.html#definition-36",
  "type": "Definição",
  "number": "5.2.1",
  "title": "Núcleo e Imagem de uma Transformação.",
  "body": " Núcleo e Imagem de uma Transformação  Seja transformação linear. O núcleo de é o conjunto   Definimos também a imagem de como o conjunto   "
},
{
  "id": "remark-36",
  "level": "2",
  "url": "section-32.html#remark-36",
  "type": "Nota",
  "number": "5.2.2",
  "title": "Observação.",
  "body": " Observação  Pode-se mostrar que é um subespaço vetorial de e que é um subespaço vetorial de .  "
},
{
  "id": "ex-nucleo-imagem-exemplo",
  "level": "2",
  "url": "section-32.html#ex-nucleo-imagem-exemplo",
  "type": "Exemplo",
  "number": "5.2.3",
  "title": "",
  "body": "  Seja dada por   Determine o núcleo e a imagem de .    Se é tal que , então,   Logo, . Portanto,   Por outro lado, note que   Assim,   Em particular, e .   "
},
{
  "id": "definition-37",
  "level": "2",
  "url": "section-32.html#definition-37",
  "type": "Definição",
  "number": "5.2.4",
  "title": "Transformações Injetivas e Sobrejetivas.",
  "body": " Transformações Injetivas e Sobrejetivas   Seja uma função. Dizemos que é injetora se   Dizemos ainda que é sobrejetora se dado , existir tal que . Em outras palavras, é injetora se .   "
},
{
  "id": "ex-injetora-sobrejetora",
  "level": "2",
  "url": "section-32.html#ex-injetora-sobrejetora",
  "type": "Exemplo",
  "number": "5.2.5",
  "title": "",
  "body": "  Seja dada por   Determine se é injetora e sobretora.    A transformação linear é injetora. Com efeito,   Porém, não é sobrejetora. De fato, não existe tal que   Logo, e, portanto, .   "
},
{
  "id": "thm-nucleo-nulo",
  "level": "2",
  "url": "section-32.html#thm-nucleo-nulo",
  "type": "Teorema",
  "number": "5.2.6",
  "title": "",
  "body": "  Seja transformação linear. Então é injetora se, e somente se, .   "
},
{
  "id": "thm-nucleo-imagem",
  "level": "2",
  "url": "section-32.html#thm-nucleo-imagem",
  "type": "Teorema",
  "number": "5.2.7",
  "title": "(Teorema do núcleo e imagem).",
  "body": " (Teorema do núcleo e imagem)   Seja transformação linear. Então,    "
},
{
  "id": "cor-injetora-sobrejetora",
  "level": "2",
  "url": "section-32.html#cor-injetora-sobrejetora",
  "type": "Corolário",
  "number": "5.2.8",
  "title": "",
  "body": "  Seja transformação linear. Se , então é injetora se, e somente se, é sobrejetora.   "
},
{
  "id": "cor-injetora-base",
  "level": "2",
  "url": "section-32.html#cor-injetora-base",
  "type": "Corolário",
  "number": "5.2.9",
  "title": "",
  "body": "  Seja transformação linear injetora. Se , então leva base em base.   "
},
{
  "id": "subsec-transformacoes-matrizes",
  "level": "1",
  "url": "subsec-transformacoes-matrizes.html",
  "type": "Seção",
  "number": "5.3",
  "title": "Transformações Lineares e Matrizes",
  "body": " Transformações Lineares e Matrizes    Seja . Podemos associar à uma transformação linear da seguinte forma: para todo ,      Vimos no que a função acima é uma transformação linear.    Exemplo 10.1   Seja   Determine a transformação associada à matriz .    Seja . Então, é dada por   Portanto, para todo .      Seja uma transformação linear, base de e base de . Então, existe uma única matriz tal que . Tal matriz será denotada por . Além disso, se   então,   ou seja, é a matriz cujas colunas são as coordenadas dos vetores .      Seja dado por   Se é uma base de e é uma base de , então determine .    Temos   Logo,      Exemplo 10.3   Sejam base de e base de . Determine a transformação linear cuja matriz é     Interpretando a matriz, temos:   Escrevendo agora   vem que   Logo, é dada por .      Sejam e espaços vetoriais, base de , base de e transformação linear. Então, para todo , vale      Se e for o operador identidade, definido por , para todo , então a igualdade acima se torna     Exemplo 10.4   Considere a transformação linear dada por   em que é base de e é base de . Calcule .    Temos que   Logo,   Logo,       Seja uma transformação linear e e bases de e , respectivamente. Então,    O posto de é igual a ;    A nulidade Recorde que a nulidade de uma matriz é a diferença entre o seu número de colunas e o seu posto. de é igual a .        Seja dada por   Determine a dimensão do núcleo e da imagem de .    Seja a base canônica do . Então,   Note que está na forma escada. Concluímos que o posto de é 2 e a nulidade de é . Logo, e .      Sejam e transformações lineares e , e bases de , e , respectivamente. Então, a composta é linear e       Sejam e dadas respectivamente por   Determine a transformação linear composta .    Se é a base canônica de , então   Logo,   Logo, é dado por para todo .      Seja uma transformação linear inversível Uma função é inversível se, e somente se, é injetora e sobrejetora. e e bases de e , respectivamente. Então é um operador linear e      Uma transformação linear inversível é chamada de isomorfismo . Dizemos ainda que e são espaços vetoriais isomorfos . Decorre do resultado acima que é um isomorfismo se, e somente se, .     Seja uma transformação linear dada por   onde é a base canônica. Determine .    Como , é inversível. Além disso,   Logo, é dado por para todo .      Seja uma transformação linear, e bases de e e bases de . Então,       Considere a transformação linear dada por cuja matriz em relação a base canônica é   Determine , onde .    Calculando as matrizes de mudança de base, obtemos   Portanto,     "
},
{
  "id": "remark-37",
  "level": "2",
  "url": "subsec-transformacoes-matrizes.html#remark-37",
  "type": "Nota",
  "number": "5.3.1",
  "title": "",
  "body": "  Seja . Podemos associar à uma transformação linear da seguinte forma: para todo ,    "
},
{
  "id": "remark-38",
  "level": "2",
  "url": "subsec-transformacoes-matrizes.html#remark-38",
  "type": "Nota",
  "number": "5.3.2",
  "title": "",
  "body": " Vimos no que a função acima é uma transformação linear.  "
},
{
  "id": "ex-10-1",
  "level": "2",
  "url": "subsec-transformacoes-matrizes.html#ex-10-1",
  "type": "Exemplo",
  "number": "5.3.3",
  "title": "Exemplo 10.1.",
  "body": " Exemplo 10.1   Seja   Determine a transformação associada à matriz .    Seja . Então, é dada por   Portanto, para todo .   "
},
{
  "id": "thm-10-1",
  "level": "2",
  "url": "subsec-transformacoes-matrizes.html#thm-10-1",
  "type": "Teorema",
  "number": "5.3.4",
  "title": "",
  "body": "  Seja uma transformação linear, base de e base de . Então, existe uma única matriz tal que . Tal matriz será denotada por . Além disso, se   então,   ou seja, é a matriz cujas colunas são as coordenadas dos vetores .   "
},
{
  "id": "example-62",
  "level": "2",
  "url": "subsec-transformacoes-matrizes.html#example-62",
  "type": "Exemplo",
  "number": "5.3.5",
  "title": "",
  "body": "  Seja dado por   Se é uma base de e é uma base de , então determine .    Temos   Logo,    "
},
{
  "id": "example-63",
  "level": "2",
  "url": "subsec-transformacoes-matrizes.html#example-63",
  "type": "Exemplo",
  "number": "5.3.6",
  "title": "Exemplo 10.3.",
  "body": " Exemplo 10.3   Sejam base de e base de . Determine a transformação linear cuja matriz é     Interpretando a matriz, temos:   Escrevendo agora   vem que   Logo, é dada por .   "
},
{
  "id": "theorem-20",
  "level": "2",
  "url": "subsec-transformacoes-matrizes.html#theorem-20",
  "type": "Teorema",
  "number": "5.3.7",
  "title": "",
  "body": "  Sejam e espaços vetoriais, base de , base de e transformação linear. Então, para todo , vale    "
},
{
  "id": "remark-39",
  "level": "2",
  "url": "subsec-transformacoes-matrizes.html#remark-39",
  "type": "Nota",
  "number": "5.3.8",
  "title": "",
  "body": " Se e for o operador identidade, definido por , para todo , então a igualdade acima se torna   "
},
{
  "id": "example-64",
  "level": "2",
  "url": "subsec-transformacoes-matrizes.html#example-64",
  "type": "Exemplo",
  "number": "5.3.9",
  "title": "Exemplo 10.4.",
  "body": " Exemplo 10.4   Considere a transformação linear dada por   em que é base de e é base de . Calcule .    Temos que   Logo,   Logo,    "
},
{
  "id": "theorem-21",
  "level": "2",
  "url": "subsec-transformacoes-matrizes.html#theorem-21",
  "type": "Teorema",
  "number": "5.3.10",
  "title": "",
  "body": "  Seja uma transformação linear e e bases de e , respectivamente. Então,    O posto de é igual a ;    A nulidade Recorde que a nulidade de uma matriz é a diferença entre o seu número de colunas e o seu posto. de é igual a .     "
},
{
  "id": "example-65",
  "level": "2",
  "url": "subsec-transformacoes-matrizes.html#example-65",
  "type": "Exemplo",
  "number": "5.3.11",
  "title": "",
  "body": "  Seja dada por   Determine a dimensão do núcleo e da imagem de .    Seja a base canônica do . Então,   Note que está na forma escada. Concluímos que o posto de é 2 e a nulidade de é . Logo, e .   "
},
{
  "id": "theorem-22",
  "level": "2",
  "url": "subsec-transformacoes-matrizes.html#theorem-22",
  "type": "Teorema",
  "number": "5.3.12",
  "title": "",
  "body": "  Sejam e transformações lineares e , e bases de , e , respectivamente. Então, a composta é linear e    "
},
{
  "id": "example-66",
  "level": "2",
  "url": "subsec-transformacoes-matrizes.html#example-66",
  "type": "Exemplo",
  "number": "5.3.13",
  "title": "",
  "body": "  Sejam e dadas respectivamente por   Determine a transformação linear composta .    Se é a base canônica de , então   Logo,   Logo, é dado por para todo .   "
},
{
  "id": "corollary-4",
  "level": "2",
  "url": "subsec-transformacoes-matrizes.html#corollary-4",
  "type": "Corolário",
  "number": "5.3.14",
  "title": "",
  "body": "  Seja uma transformação linear inversível Uma função é inversível se, e somente se, é injetora e sobrejetora. e e bases de e , respectivamente. Então é um operador linear e    "
},
{
  "id": "remark-40",
  "level": "2",
  "url": "subsec-transformacoes-matrizes.html#remark-40",
  "type": "Nota",
  "number": "5.3.15",
  "title": "",
  "body": " Uma transformação linear inversível é chamada de isomorfismo . Dizemos ainda que e são espaços vetoriais isomorfos . Decorre do resultado acima que é um isomorfismo se, e somente se, .  "
},
{
  "id": "example-67",
  "level": "2",
  "url": "subsec-transformacoes-matrizes.html#example-67",
  "type": "Exemplo",
  "number": "5.3.16",
  "title": "",
  "body": "  Seja uma transformação linear dada por   onde é a base canônica. Determine .    Como , é inversível. Além disso,   Logo, é dado por para todo .   "
},
{
  "id": "corollary-5",
  "level": "2",
  "url": "subsec-transformacoes-matrizes.html#corollary-5",
  "type": "Corolário",
  "number": "5.3.17",
  "title": "",
  "body": "  Seja uma transformação linear, e bases de e e bases de . Então,    "
},
{
  "id": "example-68",
  "level": "2",
  "url": "subsec-transformacoes-matrizes.html#example-68",
  "type": "Exemplo",
  "number": "5.3.18",
  "title": "",
  "body": "  Considere a transformação linear dada por cuja matriz em relação a base canônica é   Determine , onde .    Calculando as matrizes de mudança de base, obtemos   Portanto,    "
},
{
  "id": "section-34",
  "level": "1",
  "url": "section-34.html",
  "type": "Seção",
  "number": "5.4",
  "title": "Autovalores e Autovetores",
  "body": " Autovalores e Autovetores   Autovetor de um Operador Linear   Seja um espaço vetorial Salvo menção em contrário, todos os espaços vetoriais considerados neste material possuem dimensão finita e estão sobre o corpo dos reais. e um operador linear. Dizemos que um vetor não-nulo é um autovetor de se existir tal que   O escalar é chamado de autovalor de associado ao autovetor .     O vetor nulo, por definição, não é autovetor de nenhuma matriz.    Exemplo 1.1   Seja dado por   Determine se os seguintes vetores abaixo são autovetores de . Em caso afirmativo, exiba o autovalor associado.   (i)  (ii)  (iii)    Tempo estimado: 3 minutos.     Basta verificar a definição para cada um dos vetores dados. Vejamos:    (i) Se , então   Logo, é autovetor com autovalor associado .    (ii) Se , então   Logo, é autovetor com autovalor associado .    (iii) Se , então   Logo, não existe tal que .       Autovetor de uma Matriz   Seja uma matriz Salvo menção em contrário, todas as matrizes consideradas neste material terão entradas reais . Dizemos que um vetor não-nulo é um autovetor de se existir tal que   O escalar é chamado de autovalor de associado ao autovetor .     O vetor nulo, por definição, não é autovetor de nenhuma matriz.     Seja dada por   Determine se os seguintes vetores coluna abaixo são autovetores de . Em caso afirmativo, exiba o autovalor associado.   (i)  (ii)     Basta verificar a definição para cada um dos vetores dados. Vejamos:    (i) Sendo ,   Logo, é autovetor de com autovalor associado .    (ii) Sendo ,   Logo, não é autovetor de .      "
},
{
  "id": "definition-38",
  "level": "2",
  "url": "section-34.html#definition-38",
  "type": "Definição",
  "number": "5.4.1",
  "title": "Autovetor de um Operador Linear.",
  "body": " Autovetor de um Operador Linear   Seja um espaço vetorial Salvo menção em contrário, todos os espaços vetoriais considerados neste material possuem dimensão finita e estão sobre o corpo dos reais. e um operador linear. Dizemos que um vetor não-nulo é um autovetor de se existir tal que   O escalar é chamado de autovalor de associado ao autovetor .   "
},
{
  "id": "remark-41",
  "level": "2",
  "url": "section-34.html#remark-41",
  "type": "Nota",
  "number": "5.4.2",
  "title": "",
  "body": " O vetor nulo, por definição, não é autovetor de nenhuma matriz.  "
},
{
  "id": "example-69",
  "level": "2",
  "url": "section-34.html#example-69",
  "type": "Exemplo",
  "number": "5.4.3",
  "title": "Exemplo 1.1.",
  "body": " Exemplo 1.1   Seja dado por   Determine se os seguintes vetores abaixo são autovetores de . Em caso afirmativo, exiba o autovalor associado.   (i)  (ii)  (iii)    Tempo estimado: 3 minutos.     Basta verificar a definição para cada um dos vetores dados. Vejamos:    (i) Se , então   Logo, é autovetor com autovalor associado .    (ii) Se , então   Logo, é autovetor com autovalor associado .    (iii) Se , então   Logo, não existe tal que .     "
},
{
  "id": "definition-39",
  "level": "2",
  "url": "section-34.html#definition-39",
  "type": "Definição",
  "number": "5.4.5",
  "title": "Autovetor de uma Matriz.",
  "body": " Autovetor de uma Matriz   Seja uma matriz Salvo menção em contrário, todas as matrizes consideradas neste material terão entradas reais . Dizemos que um vetor não-nulo é um autovetor de se existir tal que   O escalar é chamado de autovalor de associado ao autovetor .   "
},
{
  "id": "remark-43",
  "level": "2",
  "url": "section-34.html#remark-43",
  "type": "Nota",
  "number": "5.4.6",
  "title": "",
  "body": " O vetor nulo, por definição, não é autovetor de nenhuma matriz.  "
},
{
  "id": "example-70",
  "level": "2",
  "url": "section-34.html#example-70",
  "type": "Exemplo",
  "number": "5.4.7",
  "title": "",
  "body": "  Seja dada por   Determine se os seguintes vetores coluna abaixo são autovetores de . Em caso afirmativo, exiba o autovalor associado.   (i)  (ii)     Basta verificar a definição para cada um dos vetores dados. Vejamos:    (i) Sendo ,   Logo, é autovetor de com autovalor associado .    (ii) Sendo ,   Logo, não é autovetor de .     "
},
{
  "id": "section-35",
  "level": "1",
  "url": "section-35.html",
  "type": "Seção",
  "number": "5.5",
  "title": "Polinômio característico",
  "body": " Polinômio característico   Polinômio característico de um operador linear   Sejam um espaço vetorial de dimensão e um operador linear. O polinômio característico associado à é definido por   onde é base de e é a matriz identidade .     Pode-se mostrar que a definição acima independe da escolha da base para .    Observações  As seguintes propriedades decorrem diretamente da definição de polinômio característico e das propriedades dos determinantes:    O polinômio característico é mônico Um polinômio é dito mônico se .    O grau de é igual a .    O termo independente de é igual a .       Considere o operador linear dado por   Calcule o polinômio característico de .    Seja a base canônica de . A matriz de com relação à é dada por   Logo,   Assim,   Resulta que   Portanto, o polinômio característico de é dado por      Polinômio característico de uma matriz   Seja . O polinômio característico associado à é definido por   onde é a matriz identidade .     Pode-se mostrar que duas matrizes semelhantes Duas matrizes são ditas semelhantes se existir matriz inversível tal que . possuem o mesmo polinômio característico.     Considere a matriz dada por   Calcule o polinômio característico de .    Note que   Logo, o polinômio característico de é   Calculando o determinante, vem que   Portanto, o polinômio característico de é       Sejam espaço vetorial e operador linear com polinômio característico associado .  Então, é autovalor de se, e somente se, é raiz de .     O continua válido para matrizes.     Considere o operador linear dado por   Determine os autovalores e os autovetores correspondentes de .    Vimos no que o polinômio característico de é   Note que possui duas raízes distintas em e . Pelo Teorema 1.1, possui dois autovalores distintos: (i) ; (ii) .  Para determinar os autovetores associados a cada um dos autovalores de , procedemos da seguinte forma:    (i) Queremos determinar os vetores não-nulos que satisfazem   Logo,   Isto equivale ao sistema   Do sistema acima, obtemos . Assim, o conjunto solução do sistema tem a forma   Qualquer vetor não nulo é autovetor de associado ao autovalor .    (ii) Queremos determinar os vetores não-nulos que satisfazem   Isto equivale ao sistema   Do sistema acima, obtemos e . Assim, o conjunto solução do sistema tem a forma   Qualquer vetor não nulo é autovetor de associado ao autovalor .      "
},
{
  "id": "definition-40",
  "level": "2",
  "url": "section-35.html#definition-40",
  "type": "Definição",
  "number": "5.5.1",
  "title": "Polinômio característico de um operador linear.",
  "body": " Polinômio característico de um operador linear   Sejam um espaço vetorial de dimensão e um operador linear. O polinômio característico associado à é definido por   onde é base de e é a matriz identidade .   "
},
{
  "id": "remark-44",
  "level": "2",
  "url": "section-35.html#remark-44",
  "type": "Nota",
  "number": "5.5.2",
  "title": "",
  "body": " Pode-se mostrar que a definição acima independe da escolha da base para .  "
},
{
  "id": "remark-45",
  "level": "2",
  "url": "section-35.html#remark-45",
  "type": "Nota",
  "number": "5.5.3",
  "title": "Observações.",
  "body": " Observações  As seguintes propriedades decorrem diretamente da definição de polinômio característico e das propriedades dos determinantes:    O polinômio característico é mônico Um polinômio é dito mônico se .    O grau de é igual a .    O termo independente de é igual a .    "
},
{
  "id": "exe_1_3",
  "level": "2",
  "url": "section-35.html#exe_1_3",
  "type": "Exemplo",
  "number": "5.5.4",
  "title": "",
  "body": "  Considere o operador linear dado por   Calcule o polinômio característico de .    Seja a base canônica de . A matriz de com relação à é dada por   Logo,   Assim,   Resulta que   Portanto, o polinômio característico de é dado por    "
},
{
  "id": "definition-41",
  "level": "2",
  "url": "section-35.html#definition-41",
  "type": "Definição",
  "number": "5.5.5",
  "title": "Polinômio característico de uma matriz.",
  "body": " Polinômio característico de uma matriz   Seja . O polinômio característico associado à é definido por   onde é a matriz identidade .   "
},
{
  "id": "remark-46",
  "level": "2",
  "url": "section-35.html#remark-46",
  "type": "Nota",
  "number": "5.5.6",
  "title": "",
  "body": " Pode-se mostrar que duas matrizes semelhantes Duas matrizes são ditas semelhantes se existir matriz inversível tal que . possuem o mesmo polinômio característico.  "
},
{
  "id": "exe_1_4",
  "level": "2",
  "url": "section-35.html#exe_1_4",
  "type": "Exemplo",
  "number": "5.5.7",
  "title": "",
  "body": "  Considere a matriz dada por   Calcule o polinômio característico de .    Note que   Logo, o polinômio característico de é   Calculando o determinante, vem que   Portanto, o polinômio característico de é    "
},
{
  "id": "teo_autovalor_l_raiz",
  "level": "2",
  "url": "section-35.html#teo_autovalor_l_raiz",
  "type": "Teorema",
  "number": "5.5.8",
  "title": "",
  "body": "  Sejam espaço vetorial e operador linear com polinômio característico associado .  Então, é autovalor de se, e somente se, é raiz de .   "
},
{
  "id": "remark-47",
  "level": "2",
  "url": "section-35.html#remark-47",
  "type": "Nota",
  "number": "5.5.9",
  "title": "",
  "body": " O continua válido para matrizes.  "
},
{
  "id": "exe_1_5",
  "level": "2",
  "url": "section-35.html#exe_1_5",
  "type": "Exemplo",
  "number": "5.5.10",
  "title": "",
  "body": "  Considere o operador linear dado por   Determine os autovalores e os autovetores correspondentes de .    Vimos no que o polinômio característico de é   Note que possui duas raízes distintas em e . Pelo Teorema 1.1, possui dois autovalores distintos: (i) ; (ii) .  Para determinar os autovetores associados a cada um dos autovalores de , procedemos da seguinte forma:    (i) Queremos determinar os vetores não-nulos que satisfazem   Logo,   Isto equivale ao sistema   Do sistema acima, obtemos . Assim, o conjunto solução do sistema tem a forma   Qualquer vetor não nulo é autovetor de associado ao autovalor .    (ii) Queremos determinar os vetores não-nulos que satisfazem   Isto equivale ao sistema   Do sistema acima, obtemos e . Assim, o conjunto solução do sistema tem a forma   Qualquer vetor não nulo é autovetor de associado ao autovalor .     "
},
{
  "id": "section-36",
  "level": "1",
  "url": "section-36.html",
  "type": "Seção",
  "number": "5.6",
  "title": "Propriedades dos autovetores",
  "body": " Propriedades dos autovetores   Propriedades dos autovetores   Seja espaço vetorial, operador linear e um autovalor de . Então,    (i) se e são autovetores de associados à , então também é autovetor associado à .   Com efeito, .     (ii) se é autovetor de associado à e , então também é autovetor associado à .   De fato, .        Autoespaço associado a um autovalor   Sejam espaço vetorial, operador linear e um autovalor de . Definimos o autoespaço de T associado à como o conjunto      O autoespaço contém, além do vetor nulo, os autovetores de associados à . Segue das propriedades dos autovetores, (i) e (ii), que é um subespaço vetorial Um subespaço vetorial  de é qualquer subconjunto tal que e para todos e todos . de .   "
},
{
  "id": "theorem-24",
  "level": "2",
  "url": "section-36.html#theorem-24",
  "type": "Teorema",
  "number": "5.6.1",
  "title": "Propriedades dos autovetores.",
  "body": " Propriedades dos autovetores   Seja espaço vetorial, operador linear e um autovalor de . Então,    (i) se e são autovetores de associados à , então também é autovetor associado à .   Com efeito, .     (ii) se é autovetor de associado à e , então também é autovetor associado à .   De fato, .      "
},
{
  "id": "definition-42",
  "level": "2",
  "url": "section-36.html#definition-42",
  "type": "Definição",
  "number": "5.6.2",
  "title": "Autoespaço associado a um autovalor.",
  "body": " Autoespaço associado a um autovalor   Sejam espaço vetorial, operador linear e um autovalor de . Definimos o autoespaço de T associado à como o conjunto    "
},
{
  "id": "remark-48",
  "level": "2",
  "url": "section-36.html#remark-48",
  "type": "Nota",
  "number": "5.6.3",
  "title": "",
  "body": " O autoespaço contém, além do vetor nulo, os autovetores de associados à . Segue das propriedades dos autovetores, (i) e (ii), que é um subespaço vetorial Um subespaço vetorial  de é qualquer subconjunto tal que e para todos e todos . de .  "
},
{
  "id": "section-37",
  "level": "1",
  "url": "section-37.html",
  "type": "Seção",
  "number": "5.7",
  "title": "Multiplicidades algébrica e geométrica",
  "body": " Multiplicidades algébrica e geométrica   Multiplicidades algébrica e geométrica   Sejam espaço vetorial, operador linear e um autovalor de .    A multiplicidade algébrica de , denotada aqui por , é a multiplicidade Formalmente, de como raiz de .    A multiplicidade geométrica de , denotada aqui por , é igual a dimensão do autoespaço .       Mostraremos adiante que para todo autovalor de , vale      Considere o operador linear dado por   Determine as multiplicidades algébrica e geométrica dos autovalores de .    Vimos, no , que o polinômio característico de é dado por   Assim,   e   pois possui multiplicidade 2 como raiz de e possui multiplicidade 1 como raiz de .  Por outro lado, vimos no Exemplo 1.5 que os autoespaços associados à e são dados, respectivamente por   e   Note que e . Resulta que e .    "
},
{
  "id": "definition-43",
  "level": "2",
  "url": "section-37.html#definition-43",
  "type": "Definição",
  "number": "5.7.1",
  "title": "Multiplicidades algébrica e geométrica.",
  "body": " Multiplicidades algébrica e geométrica   Sejam espaço vetorial, operador linear e um autovalor de .    A multiplicidade algébrica de , denotada aqui por , é a multiplicidade Formalmente, de como raiz de .    A multiplicidade geométrica de , denotada aqui por , é igual a dimensão do autoespaço .     "
},
{
  "id": "remark-49",
  "level": "2",
  "url": "section-37.html#remark-49",
  "type": "Nota",
  "number": "5.7.2",
  "title": "",
  "body": " Mostraremos adiante que para todo autovalor de , vale   "
},
{
  "id": "example-74",
  "level": "2",
  "url": "section-37.html#example-74",
  "type": "Exemplo",
  "number": "5.7.3",
  "title": "",
  "body": "  Considere o operador linear dado por   Determine as multiplicidades algébrica e geométrica dos autovalores de .    Vimos, no , que o polinômio característico de é dado por   Assim,   e   pois possui multiplicidade 2 como raiz de e possui multiplicidade 1 como raiz de .  Por outro lado, vimos no Exemplo 1.5 que os autoespaços associados à e são dados, respectivamente por   e   Note que e . Resulta que e .   "
},
{
  "id": "section-38",
  "level": "1",
  "url": "section-38.html",
  "type": "Seção",
  "number": "5.8",
  "title": "Exercícios",
  "body": " Exercícios     Determine quais das seguintes funções são aplicações lineares:   (i) definida por  (ii) definida por  (iii) definida por  (iv) definida por  (v)  (vi)  (vii)  (viii)  (ix)     Dê um exemplo, se possível, de uma transformação linear tal que e .    Existe uma transformação linear de tal que e ?    Se   existe uma transformação linear de em tal que para e ?    Descreva explicitamente uma transformação linear de em tal que e .    Seja uma transformação linear dada por   determine para que valores de a transformação linear não é sobrejetiva.    Seja uma transformação linear tal que    (i) Encontre uma expressão explícita para a transformação linear . Tal expressão é única?  (ii) Determine a imagem de .     Considere a função definida por onde   observando que para que a esteja bem definida.   (i) é transformação linear?  (ii) é injetiva?  (iii) é sobrejetiva?     Considere a transformação linear definida por    (i) Determine e determine sua dimensão.  (ii) Uma base para a imagem de .     Considere a transformação linear definido por    (i) Determine uma base para e sua dimensão.  (ii) Determine uma base para e sua dimensão.     Considere uma função de definida por    (i) Verifique que é uma transformação linear.  (ii) Se é um vetor de quais as condições sobre e para que o vetor esteja na imagem de ? Qual a dimensão da imagem?  (iii) Quais condições sobre e para que esteja no núcleo de ? Qual a dimensão do núcleo?     Descreva explicitamente uma transformação linear de em que tem sua imagem gerada pelos vetores e .    Seja e seja uma matriz fixada em . Se   verifique que é uma transformação linear de em .    "
},
{
  "id": "exercise-72",
  "level": "2",
  "url": "section-38.html#exercise-72",
  "type": "Exercício",
  "number": "5.8.1",
  "title": "",
  "body": " Determine quais das seguintes funções são aplicações lineares:   (i) definida por  (ii) definida por  (iii) definida por  (iv) definida por  (v)  (vi)  (vii)  (viii)  (ix)   "
},
{
  "id": "exercise-73",
  "level": "2",
  "url": "section-38.html#exercise-73",
  "type": "Exercício",
  "number": "5.8.2",
  "title": "",
  "body": " Dê um exemplo, se possível, de uma transformação linear tal que e .  "
},
{
  "id": "exercise-74",
  "level": "2",
  "url": "section-38.html#exercise-74",
  "type": "Exercício",
  "number": "5.8.3",
  "title": "",
  "body": " Existe uma transformação linear de tal que e ?  "
},
{
  "id": "exercise-75",
  "level": "2",
  "url": "section-38.html#exercise-75",
  "type": "Exercício",
  "number": "5.8.4",
  "title": "",
  "body": " Se   existe uma transformação linear de em tal que para e ?  "
},
{
  "id": "exercise-76",
  "level": "2",
  "url": "section-38.html#exercise-76",
  "type": "Exercício",
  "number": "5.8.5",
  "title": "",
  "body": " Descreva explicitamente uma transformação linear de em tal que e .  "
},
{
  "id": "exercise-77",
  "level": "2",
  "url": "section-38.html#exercise-77",
  "type": "Exercício",
  "number": "5.8.6",
  "title": "",
  "body": " Seja uma transformação linear dada por   determine para que valores de a transformação linear não é sobrejetiva.  "
},
{
  "id": "exercise-78",
  "level": "2",
  "url": "section-38.html#exercise-78",
  "type": "Exercício",
  "number": "5.8.7",
  "title": "",
  "body": " Seja uma transformação linear tal que    (i) Encontre uma expressão explícita para a transformação linear . Tal expressão é única?  (ii) Determine a imagem de .   "
},
{
  "id": "exercise-79",
  "level": "2",
  "url": "section-38.html#exercise-79",
  "type": "Exercício",
  "number": "5.8.8",
  "title": "",
  "body": " Considere a função definida por onde   observando que para que a esteja bem definida.   (i) é transformação linear?  (ii) é injetiva?  (iii) é sobrejetiva?   "
},
{
  "id": "exercise-80",
  "level": "2",
  "url": "section-38.html#exercise-80",
  "type": "Exercício",
  "number": "5.8.9",
  "title": "",
  "body": " Considere a transformação linear definida por    (i) Determine e determine sua dimensão.  (ii) Uma base para a imagem de .   "
},
{
  "id": "exercise-81",
  "level": "2",
  "url": "section-38.html#exercise-81",
  "type": "Exercício",
  "number": "5.8.10",
  "title": "",
  "body": " Considere a transformação linear definido por    (i) Determine uma base para e sua dimensão.  (ii) Determine uma base para e sua dimensão.   "
},
{
  "id": "exercise-82",
  "level": "2",
  "url": "section-38.html#exercise-82",
  "type": "Exercício",
  "number": "5.8.11",
  "title": "",
  "body": " Considere uma função de definida por    (i) Verifique que é uma transformação linear.  (ii) Se é um vetor de quais as condições sobre e para que o vetor esteja na imagem de ? Qual a dimensão da imagem?  (iii) Quais condições sobre e para que esteja no núcleo de ? Qual a dimensão do núcleo?   "
},
{
  "id": "exercise-83",
  "level": "2",
  "url": "section-38.html#exercise-83",
  "type": "Exercício",
  "number": "5.8.12",
  "title": "",
  "body": " Descreva explicitamente uma transformação linear de em que tem sua imagem gerada pelos vetores e .  "
},
{
  "id": "exercise-84",
  "level": "2",
  "url": "section-38.html#exercise-84",
  "type": "Exercício",
  "number": "5.8.13",
  "title": "",
  "body": " Seja e seja uma matriz fixada em . Se   verifique que é uma transformação linear de em .  "
},
{
  "id": "section-39",
  "level": "1",
  "url": "section-39.html",
  "type": "Seção",
  "number": "6.1",
  "title": "Diagonalização de operadores",
  "body": " Diagonalização de operadores   (Operadores diagonalizáveis)   Sejam um espaço vetorial e um operador linear. Dizemos que é diagonalizável se existir uma base de formada por autovetores de .      Sejam espaço vetorial de dimensão e um operador linear. Então, é diagonalizável se, e somente se, existe uma base de tal que é diagonal.      Considere o operador linear dado por   Determine se é um operador diagonalizável. Em caso afirmativo, exiba uma base de na qual é uma matriz diagonal.    Vimos no que possui dois autovalores distintos e . Os autoespaços associados a cada um destes autovalores são, respectivamente,   Além disso,   Tomando , é fácil ver que é base de (Verifique!). Como é formada por autovetores de , é diagonalizável.  Com relação à base , a matriz de é a matriz diagonal   pois     "
},
{
  "id": "definition-44",
  "level": "2",
  "url": "section-39.html#definition-44",
  "type": "Definição",
  "number": "6.1.1",
  "title": "(Operadores diagonalizáveis).",
  "body": " (Operadores diagonalizáveis)   Sejam um espaço vetorial e um operador linear. Dizemos que é diagonalizável se existir uma base de formada por autovetores de .   "
},
{
  "id": "theorem-25",
  "level": "2",
  "url": "section-39.html#theorem-25",
  "type": "Teorema",
  "number": "6.1.2",
  "title": "",
  "body": "  Sejam espaço vetorial de dimensão e um operador linear. Então, é diagonalizável se, e somente se, existe uma base de tal que é diagonal.   "
},
{
  "id": "exe_2_1",
  "level": "2",
  "url": "section-39.html#exe_2_1",
  "type": "Exemplo",
  "number": "6.1.3",
  "title": "",
  "body": "  Considere o operador linear dado por   Determine se é um operador diagonalizável. Em caso afirmativo, exiba uma base de na qual é uma matriz diagonal.    Vimos no que possui dois autovalores distintos e . Os autoespaços associados a cada um destes autovalores são, respectivamente,   Além disso,   Tomando , é fácil ver que é base de (Verifique!). Como é formada por autovetores de , é diagonalizável.  Com relação à base , a matriz de é a matriz diagonal   pois    "
},
{
  "id": "section-40",
  "level": "1",
  "url": "section-40.html",
  "type": "Seção",
  "number": "6.2",
  "title": "Diagonalização de matrizes",
  "body": " Diagonalização de matrizes   (Matrizes diagonalizáveis)   Seja . Dizemos que é diagonalizável se for semelhante à uma matriz diagonal.  Em outras palavra, é diagonalizável se existirem matrizes , com inversível e diagonal tais que       Seja . Então é diagonalizável se, e somente se, possui autovetores linearmente independentes. Neste caso, , onde    são autovetores linearmente independentes de e são os autovalores correspondentes, na mesma ordem.      Seja a matriz   Determine se é diagonalizável.    Vimos no que o polinômio característico de é   Pelo , possui três autovalores distintos: , e . A seguir, determinemos os autovetores de associados à cada um destes autovalores.  Para , os autovetores de são os vetores não-nulos tais que , ou seja,   A equação matricial ao sistema   O sistema é equivalente à e . Logo, o autoespaço associado à tem a forma   Para , queremos achar vetores não-nulos tais que . Isto corresponde ao sistema   O sistema é equivalente às equações e . Logo, o autoespaço associado à tem a forma   Por fim, para , queremos achar vetores não-nulos tais que . Isto corresponde ao sistema   O sistema é equivalente às equações e . Logo, o autoespaço associado à tem a forma   Pondo , pode-se mostrar que é base de (Verifique!).  Defina Note que é a matriz de mudança de base de para a base canônica. como a matriz cujas colunas são os elementos de :   Temos que é inversível, pois suas colunas são vetores LI. Um cálculo simples mostra que   Como,   resulta que é semelhante à uma matriz diagonal . Assim, é diagonalizável.    "
},
{
  "id": "definition-45",
  "level": "2",
  "url": "section-40.html#definition-45",
  "type": "Definição",
  "number": "6.2.1",
  "title": "(Matrizes diagonalizáveis).",
  "body": " (Matrizes diagonalizáveis)   Seja . Dizemos que é diagonalizável se for semelhante à uma matriz diagonal.  Em outras palavra, é diagonalizável se existirem matrizes , com inversível e diagonal tais que    "
},
{
  "id": "theorem-26",
  "level": "2",
  "url": "section-40.html#theorem-26",
  "type": "Teorema",
  "number": "6.2.2",
  "title": "",
  "body": "  Seja . Então é diagonalizável se, e somente se, possui autovetores linearmente independentes. Neste caso, , onde    são autovetores linearmente independentes de e são os autovalores correspondentes, na mesma ordem.   "
},
{
  "id": "example-76",
  "level": "2",
  "url": "section-40.html#example-76",
  "type": "Exemplo",
  "number": "6.2.3",
  "title": "",
  "body": "  Seja a matriz   Determine se é diagonalizável.    Vimos no que o polinômio característico de é   Pelo , possui três autovalores distintos: , e . A seguir, determinemos os autovetores de associados à cada um destes autovalores.  Para , os autovetores de são os vetores não-nulos tais que , ou seja,   A equação matricial ao sistema   O sistema é equivalente à e . Logo, o autoespaço associado à tem a forma   Para , queremos achar vetores não-nulos tais que . Isto corresponde ao sistema   O sistema é equivalente às equações e . Logo, o autoespaço associado à tem a forma   Por fim, para , queremos achar vetores não-nulos tais que . Isto corresponde ao sistema   O sistema é equivalente às equações e . Logo, o autoespaço associado à tem a forma   Pondo , pode-se mostrar que é base de (Verifique!).  Defina Note que é a matriz de mudança de base de para a base canônica. como a matriz cujas colunas são os elementos de :   Temos que é inversível, pois suas colunas são vetores LI. Um cálculo simples mostra que   Como,   resulta que é semelhante à uma matriz diagonal . Assim, é diagonalizável.   "
},
{
  "id": "section-41",
  "level": "1",
  "url": "section-41.html",
  "type": "Seção",
  "number": "6.3",
  "title": "Autovetores e independência linear",
  "body": " Autovetores e independência linear    Seja um operador linear. Se for um autovetor associado au autovalor , e se para , então o conjunto é linearmente independente (LI).  Em outras palavras, autovetores associados a autovalores distintos são LI.      Sejam espaço vetorial de dimensão e um operador linear. Se possui autovalores distintos, então é diagonalizável.     A recíproca do não é verdadeira. Com efeito, o operador do é diagonalizável, porém possui apenas dois autovalores distintos.     Seja a matriz   Determine se é diagonalizável.    Vimos no que o polinômio característico de é   Pelo , possui três autovalores distintos: , e . Pelo , é diagonalizável.    "
},
{
  "id": "theorem-27",
  "level": "2",
  "url": "section-41.html#theorem-27",
  "type": "Teorema",
  "number": "6.3.1",
  "title": "",
  "body": "  Seja um operador linear. Se for um autovetor associado au autovalor , e se para , então o conjunto é linearmente independente (LI).  Em outras palavras, autovetores associados a autovalores distintos são LI.   "
},
{
  "id": "cor_2_4",
  "level": "2",
  "url": "section-41.html#cor_2_4",
  "type": "Corolário",
  "number": "6.3.2",
  "title": "",
  "body": "  Sejam espaço vetorial de dimensão e um operador linear. Se possui autovalores distintos, então é diagonalizável.   "
},
{
  "id": "remark-50",
  "level": "2",
  "url": "section-41.html#remark-50",
  "type": "Nota",
  "number": "6.3.3",
  "title": "",
  "body": " A recíproca do não é verdadeira. Com efeito, o operador do é diagonalizável, porém possui apenas dois autovalores distintos.  "
},
{
  "id": "example-77",
  "level": "2",
  "url": "section-41.html#example-77",
  "type": "Exemplo",
  "number": "6.3.4",
  "title": "",
  "body": "  Seja a matriz   Determine se é diagonalizável.    Vimos no que o polinômio característico de é   Pelo , possui três autovalores distintos: , e . Pelo , é diagonalizável.   "
},
{
  "id": "section-42",
  "level": "1",
  "url": "section-42.html",
  "type": "Seção",
  "number": "6.4",
  "title": "Uma caracterização para operadores diagonalizáveis",
  "body": " Uma caracterização para operadores diagonalizáveis    Suponha que é espaço vetorial de dimensão e Seja operador linear. Então é diagonalizável se, e somente se, valem as seguintes condições:    (i) O polinômio característico de se decompõe em fatores lineares:     (ii) para todo .        Seja dado por   Determine se é diagonalizável.    Seja base canônica do . A matriz de com relação à é   Segue que o polinômio característico de é   ou seja,   Pelo Teorema 1.1, é o único autovalor de . Logo, será diagonalizável se .  Os autovetores associados à são os vetores não nulos tais que de , o que fornece o sistema   O sistema acima equivale à . Assim, o autoespaço associado à é   Portanto, . Logo, não é diagonalizável.    "
},
{
  "id": "theorem-28",
  "level": "2",
  "url": "section-42.html#theorem-28",
  "type": "Teorema",
  "number": "6.4.1",
  "title": "",
  "body": "  Suponha que é espaço vetorial de dimensão e Seja operador linear. Então é diagonalizável se, e somente se, valem as seguintes condições:    (i) O polinômio característico de se decompõe em fatores lineares:     (ii) para todo .     "
},
{
  "id": "example-78",
  "level": "2",
  "url": "section-42.html#example-78",
  "type": "Exemplo",
  "number": "6.4.2",
  "title": "",
  "body": "  Seja dado por   Determine se é diagonalizável.    Seja base canônica do . A matriz de com relação à é   Segue que o polinômio característico de é   ou seja,   Pelo Teorema 1.1, é o único autovalor de . Logo, será diagonalizável se .  Os autovetores associados à são os vetores não nulos tais que de , o que fornece o sistema   O sistema acima equivale à . Assim, o autoespaço associado à é   Portanto, . Logo, não é diagonalizável.   "
},
{
  "id": "section-43",
  "level": "1",
  "url": "section-43.html",
  "type": "Seção",
  "number": "6.5",
  "title": "Exercícios",
  "body": " Exercícios    Encontre a transformação linear tal que:   Encontre tal que .      (i) Determine a transformação linear tal que   Calcule e .    (ii) Determine a transformação tal que     (iii) Determine a transformação linear tal que .      Dados transformação linear injetiva. Mostre que se é um conjunto L.I., então também o é.    Dada uma transformação linear tal que e calcule em função de e :   (i)  (ii)  (iii)     Determine uma transformação linear tal que     Mostre que as seguintes transformações lineares são sobrejetivas.   (i)  (ii)  (iii)     Encontre uma transformação linear tal que .    Encontre uma transformação linear cuja imagem é gerada por e .    Considere a transformação linear descrita por:    (i) Determine , onde é a base canônica de ;  (ii) Determine uma base do núcleo de ;  (iii) Determine a dimensão da imagem de ;  (iv) é sobrejetiva?     Determine se as seguintes afirmações são verdadeiras ou falsas.   (i) Se é tal que , então ;  (ii) Se , então ;  (iii) Se é combinação linear de , então é combinação linear de .     Dados os vetores .  Determine se existe uma transformação linear tal que .    Considere tal que e . Determine a matriz da transformação associada às bases canônicas de e .    Determine a matriz do operador derivada relativamente à base canônica .    Sejam e transformações lineares de em . Considere a base canônica do . Se   determine tal que .    Se e . Considere e são as bases canônicas de e respectivamente, determine:   (i) ;  (ii) ;  (iii) e explicitamente.     Seja e considere a base canônica deste espaço descrita por   Seja descrita por     (i) Encontre , onde é a base canônica do espaço .    (ii) Se é tal que , determine explicitamente e, se possível, tal que .      Sejam e bases de e respectivamente. Se   determine explicitamente.    "
},
{
  "id": "exercise-85",
  "level": "2",
  "url": "section-43.html#exercise-85",
  "type": "Exercício",
  "number": "6.5.1",
  "title": "",
  "body": " Encontre a transformação linear tal que:   Encontre tal que .  "
},
{
  "id": "exercise-86",
  "level": "2",
  "url": "section-43.html#exercise-86",
  "type": "Exercício",
  "number": "6.5.2",
  "title": "",
  "body": "   (i) Determine a transformação linear tal que   Calcule e .    (ii) Determine a transformação tal que     (iii) Determine a transformação linear tal que .    "
},
{
  "id": "exercise-87",
  "level": "2",
  "url": "section-43.html#exercise-87",
  "type": "Exercício",
  "number": "6.5.3",
  "title": "",
  "body": " Dados transformação linear injetiva. Mostre que se é um conjunto L.I., então também o é.  "
},
{
  "id": "exercise-88",
  "level": "2",
  "url": "section-43.html#exercise-88",
  "type": "Exercício",
  "number": "6.5.4",
  "title": "",
  "body": " Dada uma transformação linear tal que e calcule em função de e :   (i)  (ii)  (iii)   "
},
{
  "id": "exercise-89",
  "level": "2",
  "url": "section-43.html#exercise-89",
  "type": "Exercício",
  "number": "6.5.5",
  "title": "",
  "body": " Determine uma transformação linear tal que   "
},
{
  "id": "exercise-90",
  "level": "2",
  "url": "section-43.html#exercise-90",
  "type": "Exercício",
  "number": "6.5.6",
  "title": "",
  "body": " Mostre que as seguintes transformações lineares são sobrejetivas.   (i)  (ii)  (iii)   "
},
{
  "id": "exercise-91",
  "level": "2",
  "url": "section-43.html#exercise-91",
  "type": "Exercício",
  "number": "6.5.7",
  "title": "",
  "body": " Encontre uma transformação linear tal que .  "
},
{
  "id": "exercise-92",
  "level": "2",
  "url": "section-43.html#exercise-92",
  "type": "Exercício",
  "number": "6.5.8",
  "title": "",
  "body": " Encontre uma transformação linear cuja imagem é gerada por e .  "
},
{
  "id": "exercise-93",
  "level": "2",
  "url": "section-43.html#exercise-93",
  "type": "Exercício",
  "number": "6.5.9",
  "title": "",
  "body": " Considere a transformação linear descrita por:    (i) Determine , onde é a base canônica de ;  (ii) Determine uma base do núcleo de ;  (iii) Determine a dimensão da imagem de ;  (iv) é sobrejetiva?   "
},
{
  "id": "exercise-94",
  "level": "2",
  "url": "section-43.html#exercise-94",
  "type": "Exercício",
  "number": "6.5.10",
  "title": "",
  "body": " Determine se as seguintes afirmações são verdadeiras ou falsas.   (i) Se é tal que , então ;  (ii) Se , então ;  (iii) Se é combinação linear de , então é combinação linear de .   "
},
{
  "id": "exercise-95",
  "level": "2",
  "url": "section-43.html#exercise-95",
  "type": "Exercício",
  "number": "6.5.11",
  "title": "",
  "body": " Dados os vetores .  Determine se existe uma transformação linear tal que .  "
},
{
  "id": "exercise-96",
  "level": "2",
  "url": "section-43.html#exercise-96",
  "type": "Exercício",
  "number": "6.5.12",
  "title": "",
  "body": " Considere tal que e . Determine a matriz da transformação associada às bases canônicas de e .  "
},
{
  "id": "exercise-97",
  "level": "2",
  "url": "section-43.html#exercise-97",
  "type": "Exercício",
  "number": "6.5.13",
  "title": "",
  "body": " Determine a matriz do operador derivada relativamente à base canônica .  "
},
{
  "id": "exercise-98",
  "level": "2",
  "url": "section-43.html#exercise-98",
  "type": "Exercício",
  "number": "6.5.14",
  "title": "",
  "body": " Sejam e transformações lineares de em . Considere a base canônica do . Se   determine tal que .  "
},
{
  "id": "exercise-99",
  "level": "2",
  "url": "section-43.html#exercise-99",
  "type": "Exercício",
  "number": "6.5.15",
  "title": "",
  "body": " Se e . Considere e são as bases canônicas de e respectivamente, determine:   (i) ;  (ii) ;  (iii) e explicitamente.   "
},
{
  "id": "exercise-100",
  "level": "2",
  "url": "section-43.html#exercise-100",
  "type": "Exercício",
  "number": "6.5.16",
  "title": "",
  "body": " Seja e considere a base canônica deste espaço descrita por   Seja descrita por     (i) Encontre , onde é a base canônica do espaço .    (ii) Se é tal que , determine explicitamente e, se possível, tal que .    "
},
{
  "id": "exercise-101",
  "level": "2",
  "url": "section-43.html#exercise-101",
  "type": "Exercício",
  "number": "6.5.17",
  "title": "",
  "body": " Sejam e bases de e respectivamente. Se   determine explicitamente.  "
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
