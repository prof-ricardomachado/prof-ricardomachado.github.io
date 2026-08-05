var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "prof-ricardo-machado",
  "level": "1",
  "url": "prof-ricardo-machado.html",
  "type": "Biografia do autor",
  "number": "",
  "title": "Sobre Ricardo Machado",
  "body": " Sobre Ricardo Machado  Professor Adjunto da Universidade Federal Rural de Pernambuco, DM.  Doutor em Matemática pela Universidade Federal de Pernambuco (2009-2013).  Mestre em Matemática pela Universidade Federal de Pernambuco (2007-2009).  Bacharel em Matemática pela Universidade Federal de Pernambuco (2003-2006).  "
},
{
  "id": "preface",
  "level": "1",
  "url": "preface.html",
  "type": "Prefácio",
  "number": "",
  "title": "Prefácio",
  "body": "    Ricardo Machado  Recife, 2023   "
},
{
  "id": "problemas-resolvidos",
  "level": "1",
  "url": "problemas-resolvidos.html",
  "type": "Seção",
  "number": "1.1",
  "title": "Paridade",
  "body": " Paridade  Todo número é par ou ímpar. Óbvio, não? Pois é com essa simples afirmação que vamos resolver os problemas deste capítulo.    Existe alguma solução inteira para a equação ?    Analise as quatro possibilidades de paridade do par (a, b).    Não. Se e tiverem paridades diferentes então um dos dois é par, de forma que par. Mas isso é uma contradição já que é ímpar. Agora, se e tiverem a mesma paridade então deve ser par e do mesmo modo chegamos a uma contradição. Logo, não há solução inteira.      (Leningrado 1990)   Paula comprou um caderno com 96 folhas, com páginas enumeradas de 1 a 192. Nicolas arrancou 25 folhas aleatórias e somou todos os 50 números escritos nestas folhas. É possível que esta soma seja 1990?    Observe que a soma dos números escritos em uma mesma folha sempre é ímpar. Dessa forma, se Nicolas arrancou 25 folhas, a soma de todos os números será ímpar. Pois é a soma de uma quantidade ímpar de números ímpares. Logo, esta soma não pode ser 1990.      Um gafanhoto vive na reta coordenada. Inicialmente, ele se encontra no ponto 1. Ele pode pular 1 ou 5 unidades, tanto para direita quanto para esquerda. Porém, a reta coordenada possui buracos em todos os pontos que são múltiplos de 4 (i.e. existem buracos nos pontos -4, 0, 4, 8 etc), então ele não pode pular para estes pontos. Pode o gafanhoto chegar ao ponto 3 após 2003 saltos?    Note que a cada salto, muda a paridade do ponto em que o gafanhoto se encontra. Logo, após 2003 saltos, ele estará em uma coordenada par. Portanto, não pode ser 3.      No reino da Frutilândia existe uma árvore mágica que possui 2005 maçãs e 2006 tomates. Todo dia um garoto sobe na árvore e come duas frutas. Quando ele come duas frutas iguais, nasce um tomate na árvore; quando ele come duas frutas diferentes, nasce uma maçã. Após alguns dias restará apenas uma fruta na árvore. Que fruta será?    Sempre que o garoto pega duas frutas da árvore, o número de maçãs diminuirá de 2 ou permanecerá constante. Dessa forma a paridade do número de maçãs será sempre o mesmo. Como inicialmente tínhamos um número ímpar de maçãs, a quantidade delas continuará ímpar até o final. Logo, a última fruta deve ser uma maçã.      Um jogo consiste de 9 botões luminosos (de cor verde ou amarelo) dispostos da seguinte forma:   1 2 3  4 5 6  7 8 9   Apertando um botão do bordo do retângulo, trocam de cor ele e os seus vizinhos (do lado ou em diagonal). Apertando o botão do centro, trocam de cor todos os seus oito vizinhos, porém ele não. Inicialmente todos os botões estão verdes. É possível, apertando sucessivamente alguns botões, torná-los todos amarelos?    Note que ao apertar um dos botões 1, 3, 7 ou 9 trocamos de cor 4 botões. Apertando um dos botões 2, 4, 6 ou 8 trocamos a cor de 6 botões. Apertando o botão do centro trocamos a cor de 8 botões. Como 4, 6 e 8 são números pares a quantidade total de botões verdes é sempre um número ímpar e para ter os 9 botões amarelos, deveríamos ter zero botões verdes. Absurdo, já que 0 é um número par.     (Leningrado 1989)   Um grupo de K físicos e K químicos está sentado ao redor de uma mesa. Alguns deles sempre falam a verdade e outros sempre mentem. Sabe-se que o número de mentirosos entre os físicos e químicos é o mesmo. Quando foi perguntado: \"Qual é a profissão de seu vizinho da direita?\", todos responderam \"Químico.\" Mostre que K é par.    Pela resposta das pessoas do grupo, podemos concluir que do lado esquerdo de um físico sempre está sentado um mentiroso e que do lado direito de um mentiroso sempre existe um físico. Então, o número de físicos é igual ao número de mentirosos, que é claramente par. Então K é par.       Problemas Propostos   Os números estão escritos em sequência. É permitido permutar quaisquer dois elementos. É possível retornar à posição inicial após 2001 permutações?   Dizemos que uma sequência tem uma inversão quando um número maior vem antes de um número menor. O número de inversões de uma sequência é o número de pares com que podemos encontrar na sequência tais que aparece antes de . Por exemplo, o número de inversões da sequência é 2. Verifique que ao permutarmos 2 números, a paridade do número de inversões muda. No problema, a sequência inicial tem 0 inversões. Como são feitas 2001 permutações, temos 2001 mudanças de paridade do número de inversões. Dessa forma, o número de inversões final deve ser ímpar. Então não podemos ter, ao fim, a sequência inicial.    Um círculo está dividido em seis setores que estão marcados com os números no sentido horário. É permitido somar a dois setores vizinhos. É possível, repetindo esta operação várias vezes, fazer com que todos os números se tornem iguais?   Suponha que os números nos setores sejam e no sentido horário. Vamos chamar de o módulo do número . Note que ao somar 1 a dois setores vizinhos o valor de não se altera. Então . Desse modo, é impossível que todos os números sejam iguais pois teríamos .    É possível que as seis diferenças entre dois elementos de um conjunto de quatro números inteiros serem iguais a e ?   Se e são números inteiros, e possuem a mesma paridade.   Não. Imagine que o conjunto seja . Então podemos supor . Mas e e são diferenças de dois elementos do conjunto. Porém, todas as diferenças, com exceção de 3, são pares. Logo, é par. Isso é uma contradição já que esse valor é igual a 3 que é ímpar. Concluímos que não é possível que as diferenças sejam essas.    Raul falou que tinha dois anos a mais que Kátia. Kátia falou que tinha o dobro da idade de Pedro. Pedro falou que Raul tinha 17 anos. Mostre que um deles mentiu.   Suponha que ninguém mentiu. Então Raul tem 17 anos e portanto Kátia tem 15 anos. Mas Kátia tem o dobro da idade de Pedro e, portanto, sua idade deve ser par, contradição. Logo, alguém deve ter mentido.    (Torneio das Cidades 1987) Uma máquina dá cinco fichas vermelhas quando alguém insere uma ficha azul e dá cinco fichas azuis quando alguém insere uma ficha vermelha. Pedro possui apenas uma ficha azul e deseja obter a mesma quantidade de fichas azuis e vermelhas usando essa máquina. É possível fazer isto?   Não. Observe que quando Pedro insere uma ficha e recebe cinco seu número de fichas aumenta 4 unidades. Logo, a paridade do número de fichas não muda. Para ter a mesma quantidade de fichas azuis e vermelhas Pedro deve ter um número par de fichas, mas isso não é possível já que ele inicialmente só possui 1 ficha e 1 é ímpar.    (China 1986) Considere uma permutação dos números tal que entre dois números k existem k números. É ou não possível fazer isto?   Contados da esquerda para a direita, denotemos por e as posições do primeiro e segundo número , respectivamente. Note que . Como existem números entre dois números 's, devemos ter . Se é possível escrever os números em linha como no enunciado, obtemos: Somando as duas linhas, . Logo, a fração deve ser um inteiro par. Para , é ímpar e consequentemente não é possível dispormos esses números em linha.    (Rússia 2004) É possível colocarmos números inteiros positivos nas casas de um tabuleiro de modo que a soma dos números de cada linha e a soma dos números de cada coluna sejam primos? Justifique sua resposta.   Suponha que seja possível fazer tal construção. Sejam as somas dos números de cada uma das 9 linhas, e as somas dos números de cada uma das 2004 colunas. Como cada e são primos, estes devem ser números ímpares (já que são soma de pelo menos nove inteiros positivos e portanto são maiores que 2). Seja S a soma de todos os números do tabuleiro. Por um lado teríamos: donde concluímos que S é ímpar, pois é soma de 9 ímpares. Por outro lado: e daqui concluímos que S é par, pois é uma soma de uma quantidade par de ímpares, o que é um absurdo. Logo, tal construção não é possível.    O número A possui 17 dígitos. O número B possui os mesmos dígitos de A, porém em ordem inversa. É possível que todos os dígitos de sejam ímpares?   Não. Vamos mostrar que algum dos dígitos deve ser par. Considere a seguinte soma e se for par (teríamos ) então o problema acaba. Suponha então que isso não ocorre. A única possibilidade é a de que a soma anterior ficou maior do que ou igual a 10 e 1 foi adicionado a soma dos . Temos dois casos:   e a soma deles (acima de ) recebeu um 1 da soma anterior, isso implicaria que e o problema acabaria aqui;  o segundo caso é .   Vamos então supor que . Repare que se então . Se e tiverem paridades diferentes, um dos dois será par e então o problema acaba. Vamos supor que isso não ocorre. Para que isso não ocorra, a soma acima de também deve receber um 1 da soma anterior. Dessa forma, analogamente como fizermos com , podemos supor que . Usando o mesmo argumento de paridades diferentes entre e chegamos a suposição de que . Repetindo mais uma vez esse processo nós chegamos em . Com isso, nós concluímos que a soma acima de receberá um 1 da soma anterior que é a de . Isso quer dizer que . Porém, como não há soma antes de , devemos ter . Note que e têm paridades diferentes e então algum dos dois é par. Isso conclui a demonstração. Repare que esses argumentos valem para qualquer natural com um número ímpar de dígitos, basta que exista o dígito do meio nesse caso é o .    *Considere um tabuleiro pintado alternadamente de preto e branco da maneira usual. Em cada casa do tabuleiro, escrevemos 0 ou 1, de modo que a quantidade de 1's em cada linha e em cada coluna do tabuleiro é ímpar. Prove que a quantidade de 1's escritos nas casas brancas é par.   Seja o número escrito na casa da i-ésima linha e da j-ésima coluna, e . A casa (i, j) é branca se e somente se i e j possuem a mesma paridade. é a soma dos números nas 999 linhas de ordem ímpar. Como a soma dos números de cada linha é ímpar, L é ímpar. De maneira análoga, a soma dos números nas 1001 colunas de ordem par também é ímpar. Seja P o conjunto de todas as casas pretas que estão em colunas de ordem par, e a soma de todos os números escritos nas casas de P. Cada número escrito em uma casa de P aparece exatamente uma vez na soma L e exatamente uma vez na soma C. Ademais, cada número escrito em uma casa branca aparece exatamente uma vez na soma . Assim, a soma dos números escritos nas casas brancas é igual a que é par.    *(Ucrânia 1997) Considere um tabuleiro pintado de preto e branco da maneira usual e, em cada casa do tabuleiro, escreva um número inteiro, de modo que a soma dos números em cada coluna e em cada linha é par. Mostre que a soma dos números nas casas pretas é par.   A solução é análoga à do problema anterior. A casa é a casa da i-ésima linha e j-ésima coluna. A casa é preta se e somente se i e j têm paridades diferentes. Seja e a soma dos números nas k-ésima linha e coluna respectivamente. Então, é a soma das linhas de ordem ímpar e é a soma das colunas também de ordem ímpar. Como a soma dos números em cada coluna e em cada linha é par, e devem ser pares. Seja B o conjunto de todas as casas brancas em colunas de ordem ímpar, e a somas dos números escritos nas casas de B. Cada casa de B é contada uma vez em C e uma vez em L. Além disso, cada casa preta é contada exatamente uma vez na soma . Logo, a soma dos números nas casas pretas é que é par.    "
},
{
  "id": "prob-06",
  "level": "2",
  "url": "problemas-resolvidos.html#prob-06",
  "type": "Exemplo",
  "number": "1.1.1",
  "title": "",
  "body": "  Existe alguma solução inteira para a equação ?    Analise as quatro possibilidades de paridade do par (a, b).    Não. Se e tiverem paridades diferentes então um dos dois é par, de forma que par. Mas isso é uma contradição já que é ímpar. Agora, se e tiverem a mesma paridade então deve ser par e do mesmo modo chegamos a uma contradição. Logo, não há solução inteira.   "
},
{
  "id": "prob-03",
  "level": "2",
  "url": "problemas-resolvidos.html#prob-03",
  "type": "Exemplo",
  "number": "1.1.2",
  "title": "(Leningrado 1990).",
  "body": " (Leningrado 1990)   Paula comprou um caderno com 96 folhas, com páginas enumeradas de 1 a 192. Nicolas arrancou 25 folhas aleatórias e somou todos os 50 números escritos nestas folhas. É possível que esta soma seja 1990?    Observe que a soma dos números escritos em uma mesma folha sempre é ímpar. Dessa forma, se Nicolas arrancou 25 folhas, a soma de todos os números será ímpar. Pois é a soma de uma quantidade ímpar de números ímpares. Logo, esta soma não pode ser 1990.   "
},
{
  "id": "prob-05",
  "level": "2",
  "url": "problemas-resolvidos.html#prob-05",
  "type": "Exemplo",
  "number": "1.1.3",
  "title": "",
  "body": "  Um gafanhoto vive na reta coordenada. Inicialmente, ele se encontra no ponto 1. Ele pode pular 1 ou 5 unidades, tanto para direita quanto para esquerda. Porém, a reta coordenada possui buracos em todos os pontos que são múltiplos de 4 (i.e. existem buracos nos pontos -4, 0, 4, 8 etc), então ele não pode pular para estes pontos. Pode o gafanhoto chegar ao ponto 3 após 2003 saltos?    Note que a cada salto, muda a paridade do ponto em que o gafanhoto se encontra. Logo, após 2003 saltos, ele estará em uma coordenada par. Portanto, não pode ser 3.   "
},
{
  "id": "prob-01",
  "level": "2",
  "url": "problemas-resolvidos.html#prob-01",
  "type": "Exemplo",
  "number": "1.1.4",
  "title": "",
  "body": "  No reino da Frutilândia existe uma árvore mágica que possui 2005 maçãs e 2006 tomates. Todo dia um garoto sobe na árvore e come duas frutas. Quando ele come duas frutas iguais, nasce um tomate na árvore; quando ele come duas frutas diferentes, nasce uma maçã. Após alguns dias restará apenas uma fruta na árvore. Que fruta será?    Sempre que o garoto pega duas frutas da árvore, o número de maçãs diminuirá de 2 ou permanecerá constante. Dessa forma a paridade do número de maçãs será sempre o mesmo. Como inicialmente tínhamos um número ímpar de maçãs, a quantidade delas continuará ímpar até o final. Logo, a última fruta deve ser uma maçã.   "
},
{
  "id": "prob-02",
  "level": "2",
  "url": "problemas-resolvidos.html#prob-02",
  "type": "Exemplo",
  "number": "1.1.5",
  "title": "",
  "body": "  Um jogo consiste de 9 botões luminosos (de cor verde ou amarelo) dispostos da seguinte forma:   1 2 3  4 5 6  7 8 9   Apertando um botão do bordo do retângulo, trocam de cor ele e os seus vizinhos (do lado ou em diagonal). Apertando o botão do centro, trocam de cor todos os seus oito vizinhos, porém ele não. Inicialmente todos os botões estão verdes. É possível, apertando sucessivamente alguns botões, torná-los todos amarelos?    Note que ao apertar um dos botões 1, 3, 7 ou 9 trocamos de cor 4 botões. Apertando um dos botões 2, 4, 6 ou 8 trocamos a cor de 6 botões. Apertando o botão do centro trocamos a cor de 8 botões. Como 4, 6 e 8 são números pares a quantidade total de botões verdes é sempre um número ímpar e para ter os 9 botões amarelos, deveríamos ter zero botões verdes. Absurdo, já que 0 é um número par.   "
},
{
  "id": "prob-04",
  "level": "2",
  "url": "problemas-resolvidos.html#prob-04",
  "type": "Exemplo",
  "number": "1.1.6",
  "title": "(Leningrado 1989).",
  "body": " (Leningrado 1989)   Um grupo de K físicos e K químicos está sentado ao redor de uma mesa. Alguns deles sempre falam a verdade e outros sempre mentem. Sabe-se que o número de mentirosos entre os físicos e químicos é o mesmo. Quando foi perguntado: \"Qual é a profissão de seu vizinho da direita?\", todos responderam \"Químico.\" Mostre que K é par.    Pela resposta das pessoas do grupo, podemos concluir que do lado esquerdo de um físico sempre está sentado um mentiroso e que do lado direito de um mentiroso sempre existe um físico. Então, o número de físicos é igual ao número de mentirosos, que é claramente par. Então K é par.   "
},
{
  "id": "prob-07",
  "level": "2",
  "url": "problemas-resolvidos.html#prob-07",
  "type": "Exercício",
  "number": "1.1.1",
  "title": "",
  "body": " Os números estão escritos em sequência. É permitido permutar quaisquer dois elementos. É possível retornar à posição inicial após 2001 permutações?   Dizemos que uma sequência tem uma inversão quando um número maior vem antes de um número menor. O número de inversões de uma sequência é o número de pares com que podemos encontrar na sequência tais que aparece antes de . Por exemplo, o número de inversões da sequência é 2. Verifique que ao permutarmos 2 números, a paridade do número de inversões muda. No problema, a sequência inicial tem 0 inversões. Como são feitas 2001 permutações, temos 2001 mudanças de paridade do número de inversões. Dessa forma, o número de inversões final deve ser ímpar. Então não podemos ter, ao fim, a sequência inicial.  "
},
{
  "id": "prob-08",
  "level": "2",
  "url": "problemas-resolvidos.html#prob-08",
  "type": "Exercício",
  "number": "1.1.2",
  "title": "",
  "body": " Um círculo está dividido em seis setores que estão marcados com os números no sentido horário. É permitido somar a dois setores vizinhos. É possível, repetindo esta operação várias vezes, fazer com que todos os números se tornem iguais?   Suponha que os números nos setores sejam e no sentido horário. Vamos chamar de o módulo do número . Note que ao somar 1 a dois setores vizinhos o valor de não se altera. Então . Desse modo, é impossível que todos os números sejam iguais pois teríamos .  "
},
{
  "id": "prob-09",
  "level": "2",
  "url": "problemas-resolvidos.html#prob-09",
  "type": "Exercício",
  "number": "1.1.3",
  "title": "",
  "body": " É possível que as seis diferenças entre dois elementos de um conjunto de quatro números inteiros serem iguais a e ?   Se e são números inteiros, e possuem a mesma paridade.   Não. Imagine que o conjunto seja . Então podemos supor . Mas e e são diferenças de dois elementos do conjunto. Porém, todas as diferenças, com exceção de 3, são pares. Logo, é par. Isso é uma contradição já que esse valor é igual a 3 que é ímpar. Concluímos que não é possível que as diferenças sejam essas.  "
},
{
  "id": "prob-10",
  "level": "2",
  "url": "problemas-resolvidos.html#prob-10",
  "type": "Exercício",
  "number": "1.1.4",
  "title": "",
  "body": " Raul falou que tinha dois anos a mais que Kátia. Kátia falou que tinha o dobro da idade de Pedro. Pedro falou que Raul tinha 17 anos. Mostre que um deles mentiu.   Suponha que ninguém mentiu. Então Raul tem 17 anos e portanto Kátia tem 15 anos. Mas Kátia tem o dobro da idade de Pedro e, portanto, sua idade deve ser par, contradição. Logo, alguém deve ter mentido.  "
},
{
  "id": "prob-11",
  "level": "2",
  "url": "problemas-resolvidos.html#prob-11",
  "type": "Exercício",
  "number": "1.1.5",
  "title": "",
  "body": " (Torneio das Cidades 1987) Uma máquina dá cinco fichas vermelhas quando alguém insere uma ficha azul e dá cinco fichas azuis quando alguém insere uma ficha vermelha. Pedro possui apenas uma ficha azul e deseja obter a mesma quantidade de fichas azuis e vermelhas usando essa máquina. É possível fazer isto?   Não. Observe que quando Pedro insere uma ficha e recebe cinco seu número de fichas aumenta 4 unidades. Logo, a paridade do número de fichas não muda. Para ter a mesma quantidade de fichas azuis e vermelhas Pedro deve ter um número par de fichas, mas isso não é possível já que ele inicialmente só possui 1 ficha e 1 é ímpar.  "
},
{
  "id": "prob-12",
  "level": "2",
  "url": "problemas-resolvidos.html#prob-12",
  "type": "Exercício",
  "number": "1.1.6",
  "title": "",
  "body": " (China 1986) Considere uma permutação dos números tal que entre dois números k existem k números. É ou não possível fazer isto?   Contados da esquerda para a direita, denotemos por e as posições do primeiro e segundo número , respectivamente. Note que . Como existem números entre dois números 's, devemos ter . Se é possível escrever os números em linha como no enunciado, obtemos: Somando as duas linhas, . Logo, a fração deve ser um inteiro par. Para , é ímpar e consequentemente não é possível dispormos esses números em linha.  "
},
{
  "id": "prob-13",
  "level": "2",
  "url": "problemas-resolvidos.html#prob-13",
  "type": "Exercício",
  "number": "1.1.7",
  "title": "",
  "body": " (Rússia 2004) É possível colocarmos números inteiros positivos nas casas de um tabuleiro de modo que a soma dos números de cada linha e a soma dos números de cada coluna sejam primos? Justifique sua resposta.   Suponha que seja possível fazer tal construção. Sejam as somas dos números de cada uma das 9 linhas, e as somas dos números de cada uma das 2004 colunas. Como cada e são primos, estes devem ser números ímpares (já que são soma de pelo menos nove inteiros positivos e portanto são maiores que 2). Seja S a soma de todos os números do tabuleiro. Por um lado teríamos: donde concluímos que S é ímpar, pois é soma de 9 ímpares. Por outro lado: e daqui concluímos que S é par, pois é uma soma de uma quantidade par de ímpares, o que é um absurdo. Logo, tal construção não é possível.  "
},
{
  "id": "prob-14",
  "level": "2",
  "url": "problemas-resolvidos.html#prob-14",
  "type": "Exercício",
  "number": "1.1.8",
  "title": "",
  "body": " O número A possui 17 dígitos. O número B possui os mesmos dígitos de A, porém em ordem inversa. É possível que todos os dígitos de sejam ímpares?   Não. Vamos mostrar que algum dos dígitos deve ser par. Considere a seguinte soma e se for par (teríamos ) então o problema acaba. Suponha então que isso não ocorre. A única possibilidade é a de que a soma anterior ficou maior do que ou igual a 10 e 1 foi adicionado a soma dos . Temos dois casos:   e a soma deles (acima de ) recebeu um 1 da soma anterior, isso implicaria que e o problema acabaria aqui;  o segundo caso é .   Vamos então supor que . Repare que se então . Se e tiverem paridades diferentes, um dos dois será par e então o problema acaba. Vamos supor que isso não ocorre. Para que isso não ocorra, a soma acima de também deve receber um 1 da soma anterior. Dessa forma, analogamente como fizermos com , podemos supor que . Usando o mesmo argumento de paridades diferentes entre e chegamos a suposição de que . Repetindo mais uma vez esse processo nós chegamos em . Com isso, nós concluímos que a soma acima de receberá um 1 da soma anterior que é a de . Isso quer dizer que . Porém, como não há soma antes de , devemos ter . Note que e têm paridades diferentes e então algum dos dois é par. Isso conclui a demonstração. Repare que esses argumentos valem para qualquer natural com um número ímpar de dígitos, basta que exista o dígito do meio nesse caso é o .  "
},
{
  "id": "prob-15",
  "level": "2",
  "url": "problemas-resolvidos.html#prob-15",
  "type": "Exercício",
  "number": "1.1.9",
  "title": "",
  "body": " *Considere um tabuleiro pintado alternadamente de preto e branco da maneira usual. Em cada casa do tabuleiro, escrevemos 0 ou 1, de modo que a quantidade de 1's em cada linha e em cada coluna do tabuleiro é ímpar. Prove que a quantidade de 1's escritos nas casas brancas é par.   Seja o número escrito na casa da i-ésima linha e da j-ésima coluna, e . A casa (i, j) é branca se e somente se i e j possuem a mesma paridade. é a soma dos números nas 999 linhas de ordem ímpar. Como a soma dos números de cada linha é ímpar, L é ímpar. De maneira análoga, a soma dos números nas 1001 colunas de ordem par também é ímpar. Seja P o conjunto de todas as casas pretas que estão em colunas de ordem par, e a soma de todos os números escritos nas casas de P. Cada número escrito em uma casa de P aparece exatamente uma vez na soma L e exatamente uma vez na soma C. Ademais, cada número escrito em uma casa branca aparece exatamente uma vez na soma . Assim, a soma dos números escritos nas casas brancas é igual a que é par.  "
},
{
  "id": "prob-16",
  "level": "2",
  "url": "problemas-resolvidos.html#prob-16",
  "type": "Exercício",
  "number": "1.1.10",
  "title": "",
  "body": " *(Ucrânia 1997) Considere um tabuleiro pintado de preto e branco da maneira usual e, em cada casa do tabuleiro, escreva um número inteiro, de modo que a soma dos números em cada coluna e em cada linha é par. Mostre que a soma dos números nas casas pretas é par.   A solução é análoga à do problema anterior. A casa é a casa da i-ésima linha e j-ésima coluna. A casa é preta se e somente se i e j têm paridades diferentes. Seja e a soma dos números nas k-ésima linha e coluna respectivamente. Então, é a soma das linhas de ordem ímpar e é a soma das colunas também de ordem ímpar. Como a soma dos números em cada coluna e em cada linha é par, e devem ser pares. Seja B o conjunto de todas as casas brancas em colunas de ordem ímpar, e a somas dos números escritos nas casas de B. Cada casa de B é contada uma vez em C e uma vez em L. Além disso, cada casa preta é contada exatamente uma vez na soma . Logo, a soma dos números nas casas pretas é que é par.  "
},
{
  "id": "sec-raciocinio-por-contagem",
  "level": "1",
  "url": "sec-raciocinio-por-contagem.html",
  "type": "Seção",
  "number": "1.2",
  "title": "Recobrimento e Tabuleiros",
  "body": " Recobrimento e Tabuleiros  O raciocínio por contagem é a primeira e mais intuitiva ferramenta na resolução de problemas de tabuleiros. Inicialmente, um simples argumento de área, paridade ou divisibilidade pode ser suficiente para verificar a impossibilidade de uma cobertura. Nesta seção, começamos com argumentos simples de área, paridade e divisibilidade, que já são suficientes para resolver diversos problemas de cobertura.    É possível cobrir um tabuleiro com dominós (peças )?    O tabuleiro possui uma quantidade ímpar de casas. Com dominós, não é possível cobrir uma quantidade ímpar de casas. Logo, não é possível cobrir o tabuleiro com os dominós.     Rússia adaptado   Podemos cobrir um tabuleiro com -triminós?   -triminó.      Note que um -triminó tem 3 casas. Logo ele cobre exatamente 3 casas do tabuleiro. Como só temos esse tipo de peça, a quantidade de casas do tabuleiro coberta por essas peças tem que ser múltipla de 3. O nosso tabuleiro tem casas, logo não pode ser coberto por -triminós.     [livro]   Determine se é possível cobrir um tabuleiro do qual foram retiradas a primeira casa e a casa diagonalmente oposta usando apenas dominós (peças )?   Tabuleiro com a remoção da primeira casa e a casa diagonalmente oposta.      Observe que, neste tabuleiro, foram removidas duas casas escuras. Cada peça de dominó sempre cobre uma casa clara e uma escura no tabuleiro. Deste modo, se fosse possível cobrir o tabuleiro usando apenas dominós, deveríamos ter o tabuleiro com a quantidade de casas escuras igual à quantidade de casas claras. Neste tabuleiro existem 32 casas claras e 30 casas escuras. Logo, não é possível fazer tal cobertura.      Determine se é possível cobrir um tabuleiro do qual foram retiradas duas casas, conforme a Figura usando apenas dominós (peças )?   Tabuleiro com duas casas de cores distintas removidas.      Sim, é possível. Veja a Figura :   Cobertura do Tabuleiro da Figura usando dominós.      De fato, o Exemplo é um caso particular do seguinte teorema:   Teorema de Gomory [gardner2006colossal]   Seja um tabuleiro de xadrez de dimensões , onde o produto é um número par. Se removermos do tabuleiro exatamente duas casas de cores opostas (uma clara e uma escura), a malha resultante sempre admitirá uma cobertura perfeita utilizando exclusivamente peças de dominó .     Ralph E. Gomory foi um destacado matemático norte-americano e um dos pioneiros da programação inteira e da pesquisa operacional, tendo também desempenhado papel de grande relevância na pesquisa científica da IBM. No contexto da matemática olímpica, seu nome está associado ao chamado Teorema de Gomory, que trata de maneira elegante do problema de recobrir, com peças de dominó, tabuleiros com casas removidas. A demonstração desse resultado apoia-se na modelagem do tabuleiro por meio de grafos e na construção de ciclos hamiltonianos. Como tais ferramentas se afastam do enfoque combinatório adotado neste trabalho, a prova formal do teorema foge ao escopo deste artigo. Para saber mais sobre Gomory veja [gomory].    Seletiva Fortaleza – Rioplatense\/2012 – Nível A [Seletiva]   Benjamim tem 25 peças A e 25 peças B, cujos formatos estão mostrados na figura.   Peças do tipo A e B.    Com as 50 peças, Benjamim pretende cobrir um tabuleiro completamente, sem deixar buracos e nem fazer sobreposições. Ele sabe que cada quadradinho da peça A e que cada quadradinho da peça B tem 1 cm de área. Sabendo que ele pode girar as peças do jeito que ele quiser, podendo inclusive \"inverter\" qualquer peça, pergunta-se:    Se o tabuleiro for (ou seja, ele tiver 8 cm de comprimento por 8 cm de largura), é possível que ele consiga cobrir todo o tabuleiro?    Se o tabuleiro for , é possível que ele consiga cobrir todo o tabuleiro?    Se o tabuleiro for , é possível que ele consiga cobrir todo o tabuleiro?    Se todas as casas acima de uma diagonal do tabuleiro forem retiradas (veja Figura ), é possível que ele consiga cobrir todo o tabuleiro?   Tabuleiro sem as casas acima da diagonal principal.          Os dois tipos de peças possuem área 4 cm e o tabuleiro possui área cm que é múltiplo de 4. Vamos mostrar que é possível fazer a cobertura. Juntando duas peças do tipo B, obtemos um retângulo e com 8 desses retângulos podemos cobrir o tabuleiro, conforme a figura abaixo:   Cobertura do tabuleiro utilizando peças do Tipo B.      Os dois tipos de peças possuem área 4 e o tabuleiro possui área que é múltiplo de 4. Vamos mostrar que é possível fazer a cobertura. Juntando duas peças do tipo A e uma do tipo B podemos obter um retângulo . Utilizando 6 desses retângulos podemos fazer a cobertura, conforme na figura a seguir.   Cobertura do tabuleiro utilizando peças do Tipo A e B.      O tabuleiro possui área que não é múltiplo de 4. Portanto, não é possível fazer a cobertura.    A área do tabuleiro é que é múltiplo de 4. Porém, vamos mostrar que não é possível cobrir o tabuleiro. Na coloração do tabuleiro de xadrez, os dois tipos de peças cobrem duas casas claras e duas casas escuras. O tabuleiro do item (d) possui 20 casas claras e 16 casas escuras, portanto não é possível fazer a cobertura.       Rússia 1997 [poti]   Podemos cobrir um tabuleiro usando dominós e cruzes (peça de 5 quadrados)?   Peça do tipo dominó e do tipo cruz.      Utilizando a coloração de um tabuleiro de xadrez atribua o valor para cada casa escura e o valor para cada casa clara.  Supondo que a casa que fica no canto esquerdo superior é escura, o tabuleiro possui casas escuras e casas claras. Portanto, a soma dos valores de todas as casas deste tabuleiro é   Analisando a soma dos valores que cada peça pode cobrir, observamos que   Uma peça de Dominó cobre uma casa clara e uma escura . O valor dessa cobertura é .  Uma peça em forma de Cruz com centro escuro cobre 4 casas claras e 1 escura. O valor dessa cobertura é .  Uma peça em forma de Cruz com centro claro cobre 1 casa clara e 4 escuras. O valor dessa cobertura é .   Seja o número de dominós, o número de cruzes com centro escuro e o número de cruzes com centro claro. Para que a cobertura seja possível é necessário que a seguinte equação admita solução nos inteiros não negativos:   ou seja, precisa admitir solução com e inteiros, o que é um absurdo.     Coloração com Mais Cores  Em muitos problemas de cobertura, a tradicional coloração com duas cores não é suficiente para resolvê-los. Em alguns casos, torna-se natural recorrer a colorações com três ou mais cores. Esse refinamento permite obter novos invariantes e, com eles, demonstrar impossibilidades ou localizar posições especiais em uma cobertura.   [Excalibur]   Um tabuleiro é coberto por oito peças e uma peça . Justifique por que a peça deve ficar exatamente na casa do centro do tabuleiro.    Vamos pintar o tabuleiro com as três cores da seguinte forma:   Tabuleiro com 3 cores.    Observe que o tabuleiro tem 8 casas com a cor A, 9 com a cor B e 8 com a cor C. Colocando uma peça sobre o tabuleiro, ela sempre vai cobrir uma casa de cada cor. Concluímos que a peça deve estar sobre uma casa da cor B. Vamos girar o tabuleiro 90 graus no sentido horário obtendo a nova coloração:   Rotação do tabuleiro da Figura .    Pelo mesmo argumento anterior, a distribuição de cores se mantém (8 casas da cor A, 9 casas da cor B, 8 casas da cor C). Logo, a peça também deve ocupar uma casa da cor B nesta nova configuração.  Para satisfazer ambas as condições simultaneamente, a posição da peça deve estar na interseção. Observando as duas figuras sobrepostas, a única casa que possui a cor B na primeira pintura e a cor B na segunda pintura é a casa central. A seguir, exibimos uma cobertura válida:   Uma cobertura válida.        Coloração Listrada  Em vários problemas de cobertura, a coloração de xadrez não é a mais adequada para revelar a estrutura envolvida. Nesses casos, pode ser mais conveniente adotar uma coloração em faixas alternadas, pintando, por exemplo, colunas consecutivas com cores diferentes. Essa estratégia, que chamaremos de coloração listrada, permite analisar com mais precisão como cada peça ocupa o tabuleiro e pode tanto excluir certas coberturas quanto determinar quais configurações são possíveis. Nesta seção, veremos exemplos em que essa ideia se mostra especialmente útil.   Estônia 1993 [estonia]   Para quais naturais é possível cobrir um retângulo de tamanho com as peças mostradas na Figura ?   Peças -triminó e -tetraminó.      Pinte o tabuleiro com números da seguinte forma: as linhas 1 e 3 com o número 1, e a linha 2 com o número . A soma de todos os números no tabuleiro é .   Tabuleiro com coloração listrada e atribuição de valores às casas.    Veja que a soma dos números cobertos por um -tetraminó é sempre zero. A soma dos números cobertos por um -triminó é sempre 1 ou (veja as Figuras e ). Para cobrir o tabuleiro, a soma total dos números cobertos pelas peças deve ser .  Se colocarmos as peças do tipo L de modo que a soma das casas seja 1, é possível completar o tabuleiro de 2 em 2, de modo que a soma seja 2 a cada duas colunas.   Juntando duas peças -triminós, cada uma com soma igual a .    No final chegaremos em , se for par. Então para qualquer par, podemos completar o tabuleiro apenas com -triminós.  Se adicionarmos uma -tetraminó ao tabuleiro, a soma máxima de todas as peças será , pois cada -tetraminó possui soma zero e após adicionar uma peça deste tipo, no máximo cabem  -triminós, portanto a soma máxima possível é . Logo, não podemos utilizar -tetraminós.  Vamos mostrar que não pode ser ímpar. Como não podemos utilizar as peças -tetraminós, vamos analisar configurações com as peças -triminós. Para cada peça do tipo L colocada como na Figura ,   -triminó com soma .    a soma será igual a e a soma total da cobertura será menor que . Como toda peça deve contribuir com soma , cada -triminó ocupa exatamente duas casas de uma das linhas extremas e uma casa da linha central. Isso força o recobrimento a se organizar em blocos , como na Figura . Portanto, deve ser par.      Mostre que é impossível cobrir um tabuleiro utilizando apenas -tetraminós.    Vamos fazer uma coloração listrada nesse tabuleiro, conforme a Figura . Perceba que independentemente de como seja colocada no tabuleiro, um -tetraminó sempre cobre 1 casa escura e 3 claras ou 3 escuras e 1 clara como na figura abaixo:   Tabuleiro com coloração listrada na vertical.    Vamos chamar de a quantidade de -tetraminós que cobrem 3 casas claras e uma escura do tabuleiro e de as que cobrem 3 casas escuras e uma clara. Logo, temos o sistema:   Multiplicando a primeira equação por 3 e subtraindo pela segunda equação, obtemos . Absurdo, pois e são números inteiros. Logo, não podemos cobrir o tabuleiro apenas com esses tipos de peças.      Outros Tipos de Coloração  Embora as colorações de xadrez, listrada e com mais cores sejam especialmente frequentes, elas estão longe de esgotar as possibilidades. Em muitos problemas, a chave da solução está em construir uma coloração adaptada à peça ou à configuração estudada, de modo a destacar alguma regularidade que não seria percebida pelas colorações mais usuais.   [Excalibur]   Um tabuleiro pode ser coberto por 15 peças e uma peça sem que haja sobreposição?    Vamos colorir esse tabuleiro com a coloração dupla diagonal:   Tabuleiro com coloração dupla diagonal.    Nessa coloração temos 32 casas claras e 32 escuras. Cada peça cobre duas claras e duas escuras independentemente de como for colocada no tabuleiro. E a peça cobre uma casa escura e três claras ou cobre três casas escuras e uma clara.   Tabuleiro com coloração dupla diagonal e algumas peças sobre o tabuleiro.    Logo, as 15 peças cobrem 30 casas escuras e 30 casas claras. Com a adição da peça , teríamos a cobertura de 31 casas escuras e 33 claras ou 33 casas escuras e 31 claras. Portanto, concluímos com esta contagem que tal cobertura é impossível.        Podemos cobrir um tabuleiro usando apenas T-tetraminós como abaixo?       Pinte o tabuleiro de branco e preto da maneira usual (como no xadrez). Note que ao colocarmos um T-tetraminó no tabuleiro ele pode assumir colorações do tipo 1 (1 casa branca e 3 pretas) ou tipo 2 (3 casas brancas e 1 preta).     Suponha que ao cobrir o tabuleiro usamos A peças do tipo 1 e B do tipo 2. Sabemos que devemos usar 25 peças no total, ou seja, .  Cada peça do tipo 1 possui uma casa branca e cada peça do tipo 2 possui 3 casas brancas, e como temos ao todo 50 casas brancas no tabuleiro, temos a equação: . De modo análogo, para as 50 casas pretas, obtemos .  Porém, o sistema: não possui solução inteira. Logo, não é possível cobrir o tabuleiro.    Sobre uma das casas de um tabuleiro infinito, existe um cubo que cobre a casa perfeitamente. A face no topo do cubo é branca, enquanto as demais faces são pretas. A cada passo, podemos tombar o cubo para um dos lados. É possível que:  Após 2004 passos o cubo volte ao mesmo quadrado com a face branca para baixo?  Após 2005 passos?      Sim. Vire o cubo duas vezes para a direita, uma para baixo, duas para a esquerda e uma para cima (figura 4). Após estes seis passos, a face branca estará virada para baixo. Sobram 1998 passos, basta tombar repetidamente o cudo para direira e para esquerda.     Não. Pinte o tabuleiro na maneira usual. Note que, a cada movimento, o cubo muda de uma casa preta para uma casa branca e vice-versa. Logo, após um número ı́mpar de movimentos não poderá estar na casa inicial.     É possível cobrir o tabuleiro a seguir usando apenas dominós?        (OBM\/2012 – N2 – 2ª fase – Q1) João gosta de verificar propriedades do jogo de xadrez em um tabuleiro . Num de seus experimentos, João coloca um cavalo na casa inferior esquerda do tabuleiro . Qual o número mínimo de movimentos do cavalo para que ele possa chegar a qualquer casa do tabuleiro ?  Observação: O cavalo movimenta-se em L, isto é, anda duas casas em uma direção e, logo em seguida, uma casa na direção perpendicular, como ilustrado na figura.       Vamos colorir cada casa do tabuleiro com o número quando o cavalo precisar de no mínimo movimentos para chegar a tal casa do tabuleiro. Comecemos, então, pelo :   Portanto, a resposta é .    É possível cobrir um tabuleiro usando apenas peças como abaixo?    Sim, é possível.   .   "
},
{
  "id": "example-7",
  "level": "2",
  "url": "sec-raciocinio-por-contagem.html#example-7",
  "type": "Exemplo",
  "number": "1.2.1",
  "title": "",
  "body": "  É possível cobrir um tabuleiro com dominós (peças )?    O tabuleiro possui uma quantidade ímpar de casas. Com dominós, não é possível cobrir uma quantidade ímpar de casas. Logo, não é possível cobrir o tabuleiro com os dominós.   "
},
{
  "id": "example-8",
  "level": "2",
  "url": "sec-raciocinio-por-contagem.html#example-8",
  "type": "Exemplo",
  "number": "1.2.2",
  "title": "Rússia adaptado.",
  "body": " Rússia adaptado   Podemos cobrir um tabuleiro com -triminós?   -triminó.      Note que um -triminó tem 3 casas. Logo ele cobre exatamente 3 casas do tabuleiro. Como só temos esse tipo de peça, a quantidade de casas do tabuleiro coberta por essas peças tem que ser múltipla de 3. O nosso tabuleiro tem casas, logo não pode ser coberto por -triminós.   "
},
{
  "id": "example-9",
  "level": "2",
  "url": "sec-raciocinio-por-contagem.html#example-9",
  "type": "Exemplo",
  "number": "1.2.4",
  "title": "[livro].",
  "body": " [livro]   Determine se é possível cobrir um tabuleiro do qual foram retiradas a primeira casa e a casa diagonalmente oposta usando apenas dominós (peças )?   Tabuleiro com a remoção da primeira casa e a casa diagonalmente oposta.      Observe que, neste tabuleiro, foram removidas duas casas escuras. Cada peça de dominó sempre cobre uma casa clara e uma escura no tabuleiro. Deste modo, se fosse possível cobrir o tabuleiro usando apenas dominós, deveríamos ter o tabuleiro com a quantidade de casas escuras igual à quantidade de casas claras. Neste tabuleiro existem 32 casas claras e 30 casas escuras. Logo, não é possível fazer tal cobertura.   "
},
{
  "id": "ex_4",
  "level": "2",
  "url": "sec-raciocinio-por-contagem.html#ex_4",
  "type": "Exemplo",
  "number": "1.2.6",
  "title": "",
  "body": "  Determine se é possível cobrir um tabuleiro do qual foram retiradas duas casas, conforme a Figura usando apenas dominós (peças )?   Tabuleiro com duas casas de cores distintas removidas.      Sim, é possível. Veja a Figura :   Cobertura do Tabuleiro da Figura usando dominós.     "
},
{
  "id": "theorem-1",
  "level": "2",
  "url": "sec-raciocinio-por-contagem.html#theorem-1",
  "type": "Teorema",
  "number": "1.2.9",
  "title": "Teorema de Gomory [gardner2006colossal].",
  "body": " Teorema de Gomory [gardner2006colossal]   Seja um tabuleiro de xadrez de dimensões , onde o produto é um número par. Se removermos do tabuleiro exatamente duas casas de cores opostas (uma clara e uma escura), a malha resultante sempre admitirá uma cobertura perfeita utilizando exclusivamente peças de dominó .   "
},
{
  "id": "remark-1",
  "level": "2",
  "url": "sec-raciocinio-por-contagem.html#remark-1",
  "type": "Nota",
  "number": "1.2.10",
  "title": "",
  "body": " Ralph E. Gomory foi um destacado matemático norte-americano e um dos pioneiros da programação inteira e da pesquisa operacional, tendo também desempenhado papel de grande relevância na pesquisa científica da IBM. No contexto da matemática olímpica, seu nome está associado ao chamado Teorema de Gomory, que trata de maneira elegante do problema de recobrir, com peças de dominó, tabuleiros com casas removidas. A demonstração desse resultado apoia-se na modelagem do tabuleiro por meio de grafos e na construção de ciclos hamiltonianos. Como tais ferramentas se afastam do enfoque combinatório adotado neste trabalho, a prova formal do teorema foge ao escopo deste artigo. Para saber mais sobre Gomory veja [gomory].  "
},
{
  "id": "example-11",
  "level": "2",
  "url": "sec-raciocinio-por-contagem.html#example-11",
  "type": "Exemplo",
  "number": "1.2.11",
  "title": "Seletiva Fortaleza – Rioplatense\/2012 – Nível A [Seletiva].",
  "body": " Seletiva Fortaleza – Rioplatense\/2012 – Nível A [Seletiva]   Benjamim tem 25 peças A e 25 peças B, cujos formatos estão mostrados na figura.   Peças do tipo A e B.    Com as 50 peças, Benjamim pretende cobrir um tabuleiro completamente, sem deixar buracos e nem fazer sobreposições. Ele sabe que cada quadradinho da peça A e que cada quadradinho da peça B tem 1 cm de área. Sabendo que ele pode girar as peças do jeito que ele quiser, podendo inclusive \"inverter\" qualquer peça, pergunta-se:    Se o tabuleiro for (ou seja, ele tiver 8 cm de comprimento por 8 cm de largura), é possível que ele consiga cobrir todo o tabuleiro?    Se o tabuleiro for , é possível que ele consiga cobrir todo o tabuleiro?    Se o tabuleiro for , é possível que ele consiga cobrir todo o tabuleiro?    Se todas as casas acima de uma diagonal do tabuleiro forem retiradas (veja Figura ), é possível que ele consiga cobrir todo o tabuleiro?   Tabuleiro sem as casas acima da diagonal principal.          Os dois tipos de peças possuem área 4 cm e o tabuleiro possui área cm que é múltiplo de 4. Vamos mostrar que é possível fazer a cobertura. Juntando duas peças do tipo B, obtemos um retângulo e com 8 desses retângulos podemos cobrir o tabuleiro, conforme a figura abaixo:   Cobertura do tabuleiro utilizando peças do Tipo B.      Os dois tipos de peças possuem área 4 e o tabuleiro possui área que é múltiplo de 4. Vamos mostrar que é possível fazer a cobertura. Juntando duas peças do tipo A e uma do tipo B podemos obter um retângulo . Utilizando 6 desses retângulos podemos fazer a cobertura, conforme na figura a seguir.   Cobertura do tabuleiro utilizando peças do Tipo A e B.      O tabuleiro possui área que não é múltiplo de 4. Portanto, não é possível fazer a cobertura.    A área do tabuleiro é que é múltiplo de 4. Porém, vamos mostrar que não é possível cobrir o tabuleiro. Na coloração do tabuleiro de xadrez, os dois tipos de peças cobrem duas casas claras e duas casas escuras. O tabuleiro do item (d) possui 20 casas claras e 16 casas escuras, portanto não é possível fazer a cobertura.     "
},
{
  "id": "example-12",
  "level": "2",
  "url": "sec-raciocinio-por-contagem.html#example-12",
  "type": "Exemplo",
  "number": "1.2.16",
  "title": "Rússia 1997 [poti].",
  "body": " Rússia 1997 [poti]   Podemos cobrir um tabuleiro usando dominós e cruzes (peça de 5 quadrados)?   Peça do tipo dominó e do tipo cruz.      Utilizando a coloração de um tabuleiro de xadrez atribua o valor para cada casa escura e o valor para cada casa clara.  Supondo que a casa que fica no canto esquerdo superior é escura, o tabuleiro possui casas escuras e casas claras. Portanto, a soma dos valores de todas as casas deste tabuleiro é   Analisando a soma dos valores que cada peça pode cobrir, observamos que   Uma peça de Dominó cobre uma casa clara e uma escura . O valor dessa cobertura é .  Uma peça em forma de Cruz com centro escuro cobre 4 casas claras e 1 escura. O valor dessa cobertura é .  Uma peça em forma de Cruz com centro claro cobre 1 casa clara e 4 escuras. O valor dessa cobertura é .   Seja o número de dominós, o número de cruzes com centro escuro e o número de cruzes com centro claro. Para que a cobertura seja possível é necessário que a seguinte equação admita solução nos inteiros não negativos:   ou seja, precisa admitir solução com e inteiros, o que é um absurdo.   "
},
{
  "id": "example-13",
  "level": "2",
  "url": "sec-raciocinio-por-contagem.html#example-13",
  "type": "Exemplo",
  "number": "1.2.18",
  "title": "[Excalibur].",
  "body": " [Excalibur]   Um tabuleiro é coberto por oito peças e uma peça . Justifique por que a peça deve ficar exatamente na casa do centro do tabuleiro.    Vamos pintar o tabuleiro com as três cores da seguinte forma:   Tabuleiro com 3 cores.    Observe que o tabuleiro tem 8 casas com a cor A, 9 com a cor B e 8 com a cor C. Colocando uma peça sobre o tabuleiro, ela sempre vai cobrir uma casa de cada cor. Concluímos que a peça deve estar sobre uma casa da cor B. Vamos girar o tabuleiro 90 graus no sentido horário obtendo a nova coloração:   Rotação do tabuleiro da Figura .    Pelo mesmo argumento anterior, a distribuição de cores se mantém (8 casas da cor A, 9 casas da cor B, 8 casas da cor C). Logo, a peça também deve ocupar uma casa da cor B nesta nova configuração.  Para satisfazer ambas as condições simultaneamente, a posição da peça deve estar na interseção. Observando as duas figuras sobrepostas, a única casa que possui a cor B na primeira pintura e a cor B na segunda pintura é a casa central. A seguir, exibimos uma cobertura válida:   Uma cobertura válida.     "
},
{
  "id": "exem_zebra",
  "level": "2",
  "url": "sec-raciocinio-por-contagem.html#exem_zebra",
  "type": "Exemplo",
  "number": "1.2.22",
  "title": "Estônia 1993 [estonia].",
  "body": " Estônia 1993 [estonia]   Para quais naturais é possível cobrir um retângulo de tamanho com as peças mostradas na Figura ?   Peças -triminó e -tetraminó.      Pinte o tabuleiro com números da seguinte forma: as linhas 1 e 3 com o número 1, e a linha 2 com o número . A soma de todos os números no tabuleiro é .   Tabuleiro com coloração listrada e atribuição de valores às casas.    Veja que a soma dos números cobertos por um -tetraminó é sempre zero. A soma dos números cobertos por um -triminó é sempre 1 ou (veja as Figuras e ). Para cobrir o tabuleiro, a soma total dos números cobertos pelas peças deve ser .  Se colocarmos as peças do tipo L de modo que a soma das casas seja 1, é possível completar o tabuleiro de 2 em 2, de modo que a soma seja 2 a cada duas colunas.   Juntando duas peças -triminós, cada uma com soma igual a .    No final chegaremos em , se for par. Então para qualquer par, podemos completar o tabuleiro apenas com -triminós.  Se adicionarmos uma -tetraminó ao tabuleiro, a soma máxima de todas as peças será , pois cada -tetraminó possui soma zero e após adicionar uma peça deste tipo, no máximo cabem  -triminós, portanto a soma máxima possível é . Logo, não podemos utilizar -tetraminós.  Vamos mostrar que não pode ser ímpar. Como não podemos utilizar as peças -tetraminós, vamos analisar configurações com as peças -triminós. Para cada peça do tipo L colocada como na Figura ,   -triminó com soma .    a soma será igual a e a soma total da cobertura será menor que . Como toda peça deve contribuir com soma , cada -triminó ocupa exatamente duas casas de uma das linhas extremas e uma casa da linha central. Isso força o recobrimento a se organizar em blocos , como na Figura . Portanto, deve ser par.   "
},
{
  "id": "exem_L_tetra",
  "level": "2",
  "url": "sec-raciocinio-por-contagem.html#exem_L_tetra",
  "type": "Exemplo",
  "number": "1.2.27",
  "title": "",
  "body": "  Mostre que é impossível cobrir um tabuleiro utilizando apenas -tetraminós.    Vamos fazer uma coloração listrada nesse tabuleiro, conforme a Figura . Perceba que independentemente de como seja colocada no tabuleiro, um -tetraminó sempre cobre 1 casa escura e 3 claras ou 3 escuras e 1 clara como na figura abaixo:   Tabuleiro com coloração listrada na vertical.    Vamos chamar de a quantidade de -tetraminós que cobrem 3 casas claras e uma escura do tabuleiro e de as que cobrem 3 casas escuras e uma clara. Logo, temos o sistema:   Multiplicando a primeira equação por 3 e subtraindo pela segunda equação, obtemos . Absurdo, pois e são números inteiros. Logo, não podemos cobrir o tabuleiro apenas com esses tipos de peças.   "
},
{
  "id": "example-16",
  "level": "2",
  "url": "sec-raciocinio-por-contagem.html#example-16",
  "type": "Exemplo",
  "number": "1.2.29",
  "title": "[Excalibur].",
  "body": " [Excalibur]   Um tabuleiro pode ser coberto por 15 peças e uma peça sem que haja sobreposição?    Vamos colorir esse tabuleiro com a coloração dupla diagonal:   Tabuleiro com coloração dupla diagonal.    Nessa coloração temos 32 casas claras e 32 escuras. Cada peça cobre duas claras e duas escuras independentemente de como for colocada no tabuleiro. E a peça cobre uma casa escura e três claras ou cobre três casas escuras e uma clara.   Tabuleiro com coloração dupla diagonal e algumas peças sobre o tabuleiro.    Logo, as 15 peças cobrem 30 casas escuras e 30 casas claras. Com a adição da peça , teríamos a cobertura de 31 casas escuras e 33 claras ou 33 casas escuras e 31 claras. Portanto, concluímos com esta contagem que tal cobertura é impossível.   "
},
{
  "id": "problem-1",
  "level": "2",
  "url": "sec-raciocinio-por-contagem.html#problem-1",
  "type": "Problema",
  "number": "1.2.32",
  "title": "",
  "body": "  Podemos cobrir um tabuleiro usando apenas T-tetraminós como abaixo?       Pinte o tabuleiro de branco e preto da maneira usual (como no xadrez). Note que ao colocarmos um T-tetraminó no tabuleiro ele pode assumir colorações do tipo 1 (1 casa branca e 3 pretas) ou tipo 2 (3 casas brancas e 1 preta).     Suponha que ao cobrir o tabuleiro usamos A peças do tipo 1 e B do tipo 2. Sabemos que devemos usar 25 peças no total, ou seja, .  Cada peça do tipo 1 possui uma casa branca e cada peça do tipo 2 possui 3 casas brancas, e como temos ao todo 50 casas brancas no tabuleiro, temos a equação: . De modo análogo, para as 50 casas pretas, obtemos .  Porém, o sistema: não possui solução inteira. Logo, não é possível cobrir o tabuleiro.   "
},
{
  "id": "problem-2",
  "level": "2",
  "url": "sec-raciocinio-por-contagem.html#problem-2",
  "type": "Problema",
  "number": "1.2.35",
  "title": "",
  "body": "Sobre uma das casas de um tabuleiro infinito, existe um cubo que cobre a casa perfeitamente. A face no topo do cubo é branca, enquanto as demais faces são pretas. A cada passo, podemos tombar o cubo para um dos lados. É possível que:  Após 2004 passos o cubo volte ao mesmo quadrado com a face branca para baixo?  Após 2005 passos?      Sim. Vire o cubo duas vezes para a direita, uma para baixo, duas para a esquerda e uma para cima (figura 4). Após estes seis passos, a face branca estará virada para baixo. Sobram 1998 passos, basta tombar repetidamente o cudo para direira e para esquerda.     Não. Pinte o tabuleiro na maneira usual. Note que, a cada movimento, o cubo muda de uma casa preta para uma casa branca e vice-versa. Logo, após um número ı́mpar de movimentos não poderá estar na casa inicial.    "
},
{
  "id": "problem-3",
  "level": "2",
  "url": "sec-raciocinio-por-contagem.html#problem-3",
  "type": "Problema",
  "number": "1.2.37",
  "title": "",
  "body": "É possível cobrir o tabuleiro a seguir usando apenas dominós?     "
},
{
  "id": "problem-4",
  "level": "2",
  "url": "sec-raciocinio-por-contagem.html#problem-4",
  "type": "Problema",
  "number": "1.2.39",
  "title": "",
  "body": "  (OBM\/2012 – N2 – 2ª fase – Q1) João gosta de verificar propriedades do jogo de xadrez em um tabuleiro . Num de seus experimentos, João coloca um cavalo na casa inferior esquerda do tabuleiro . Qual o número mínimo de movimentos do cavalo para que ele possa chegar a qualquer casa do tabuleiro ?  Observação: O cavalo movimenta-se em L, isto é, anda duas casas em uma direção e, logo em seguida, uma casa na direção perpendicular, como ilustrado na figura.       Vamos colorir cada casa do tabuleiro com o número quando o cavalo precisar de no mínimo movimentos para chegar a tal casa do tabuleiro. Comecemos, então, pelo :   Portanto, a resposta é .   "
},
{
  "id": "problem-5",
  "level": "2",
  "url": "sec-raciocinio-por-contagem.html#problem-5",
  "type": "Problema",
  "number": "1.2.42",
  "title": "",
  "body": "É possível cobrir um tabuleiro usando apenas peças como abaixo?    Sim, é possível.   . "
},
{
  "id": "section-casa-pombos",
  "level": "1",
  "url": "section-casa-pombos.html",
  "type": "Seção",
  "number": "1.3",
  "title": "Princípio da Casa dos Pombos",
  "body": " Princípio da Casa dos Pombos    Nota Histórica  O Princípio da Casa dos Pombos, também conhecido como O Princípio das Gavetas de Dirichlet, surgiu em 1834, o conceito foi utilizado pelo matemático alemão Johann Peter Gustav Lejeune Dirichlet, estudante da Universidade de Paris, que trabalhou nas Universidades de Breslau e Berlim, posteriormente sendo escolhido como sucessor de Johann Carl Friedrich Gauss na Universidade de Göttingen. Dirichlet foi responsável por grandes avanços na Matemática, especialmente na área de Teoria dos Números.   Johann Peter Gustav Lejeune Dirichlet, fonte: gigantesdamatematica.wordpress.com\/      1ª versão do Princípio da Casa dos Pombos   Se pombos forem colocados em casas, então existe pelo menos uma casa contendo dois ou mais pombos.  Suponha que nenhuma das casas contém mais de um pombo. Então o número total de pombos seria no máximo . Isto é uma contradição, já que existem pelo menos pombos.    Podemos interpretar o princípio usando funções da seguinte forma: Sejam e , dois conjuntos. Se o número de elementos de for maior que o números de elementos de , então não existe uma função injetiva de para , ou seja, pelo menos dois elementos do domínio terão a mesma imagem, independente da função entre e .  Essencialmente, para usar este princípio, precisamos identificar dois conjuntos, que chamaremos sugestivamente de e para representarem o conjunto dos pombos e o conjunto das casas, respectivamente. Em seguida comparamos o número de elementos entre eles.    Mostre que, em um grupo de 367 pessoas, pelo menos duas fazem o aniversário no mesmo dia.   Chame de o conjunto das pessoas e o conjunto dos dias do ano. Desta forma como temos mais elementos em do que em , pelo princípio da casa dos pombos, pelo menos duas pessoas fazem aniversário no mesmo dia.     Mostre que entre nove números que não possuem divisores primos maiores que cinco, existem dois cujo produto é um quadrado.   Inicialmente observe que, qualquer número inteiro que não possui divisor primo maior que cinco, se escreve na forma , com e inteiros não negativos.  Defina um conjunto com 9 números arbitrários que satisfaçam as hipóteses do enunciado: Como os expoentes e só podem ser pares ou ímpares, seja um conjunto que represente todas as paridades possíveis para os expoentes de 2, 3 e 5 em . Este conjunto possui 8 elementos, pois temos duas possibilidades para a paridade de cada um dos 3 expoentes.  Como o conjunto é formado por nove elementos, pelo princípio da casa dos pombos, teremos dois elementos em , cujos expoentes possuem a mesma paridade, digamos que e .  O produto entre eles é da forma , com , que é um quadrado, pois pode ser escrito na forma .     (IMO 1972) Prove que, de qualquer conjunto de dez números naturais distintos de dois dígitos, podemos escolher dois subconjuntos A e B (disjuntos) cuja a soma dos elementos é a mesma em ambos.   Seja um conjunto com 10 números naturais distintos de dois dígitos. A soma de todos os elementos de pode ser no máximo 945, no caso em que .  Considere o conjunto das partes de , ou seja, o conjunto formado por todos os subconjuntos de . Este conjunto possui elementos, sendo um deles o conjunto vazio, pois para formar um subconjunto de , precisamos decidir se cada elemento de vai pertencer ou não a este subconjunto.  Defina e como o conjunto das partes de , menos o conjunto vazio. Desta forma possui elementos.  Observe que um elemento de é um subconjunto de e que a soma dos elementos de um elemento de será um número que pertence a . Pelo princípio da casa dos pombos, como temos mais elementos em do que em , pelo menos dois elementos possuem a mesma soma.  Se e forem disjuntos, acabou. Se não, considere e . Logo, os conjuntos e são disjuntos e a soma dos seus elementos é a mesma.      2ª versão do Princípio da Casa dos Pombos  Para uma versão mais geral do princípio da casa dos pombos, vamos usar a função teto: dada por ou seja, é o menor inteiro que é maior ou igual a . Observe que , para qualquer .         Se pombos forem colocados em casas, então existe pelo menos uma casa contendo pelo menos pombos.   Suponha que nenhuma das caixas contém mais que pombos. Então, o número total de pombos é no máximo na qual, a desigualdade foi usada. Esta é uma contradição, pois existem um total de pombos.     Nove pontos são colocados no interior de um triângulo de área 4 , de forma que não tenha 3 pontos colineares. Mostre que podemos escolher três deles para serem os vértices de um triângulo de área no máximo igual a 1 .   Sejam e os vértices do triângulo de área 4 . Considere três pontos e na arestas , de forma que e formem quatro triângulos, cada um com área de 1 .  Desta forma ao colocar os pontos no triâgulo , pelo princípio da casa dos pombos, existem pelo menos pontos em um dos quatro triângulos: e .   Triângulo subdividido.    Logo os três pontos que estão dentro de um destes 4 triângulos, por não serem colineares, formam um triângulo de área no máximo igual a 1 .     (Putnam 1953). Assuma que em um grupo de 6 pessoas, cada par de pessoas consistem em dois amigos ou dois inimigos. Mostre que ou existem 3 amigos mútuos ou 3 inimigos mútuos.   Seja uma das 6 pessoas. Sejam e o conjunto com as outras 5 pessoas.  Pela 2ª versão do princípio da casa dos pombos, dividindo as 5 pessoas de nos 2 conjuntos de , um desses conjuntos possui pelo menos elementos. Então, ou existem 3 ou mais que são amigos de , ou 3 ou mais que são inimigos de .  Suponha sem perda de generalidade que e sejam amigos de . Se quaisquer duas destas 3 pessoas são amigas, então estas duas pessoas e formam um conjunto de 3 amigos mútuos. Caso contrário e formam um conjunto de 3 inimigos mútuos. O outro caso é análogo.     A solução do , é equivalente a demonstração de que o número de Ramsey . A Teoria de Ramsey é uma área importante da Combinatória, mais especificamente da teoria dos Grafos. O número de Ramsey, , é o menor inteiro tal que o grafo completo bicolorido , nas cores vermelho e azul para arestas, possui um subgrafo completo monocromático vermelho ou um subgrafo completo monocromático azul . Para mais informação sobre a Teoria de Ramsey, veja . Determinar um número de Ramsey em geral é muito difícil e é um problema em aberto. Para determinar o número , que foi descoberto em 1993, foram necessários 11 anos de tempo de processamento em 110 computadores desktop.     Exercícios   Qual é o número mínimo de pessoas que deve haver em um grupo para que possamos garantir que nele haja pelo menos 5 pessoas nascidas no mesmo mês?   49   Pelo basta encontrar o menor número inteiro , tal que . Como , o valor de é 49.     Escolhem-se ao acaso 5 pontos sobre a superfície de um quadrado de lado 2. Mostre que pelo menos um dos segmentos que eles determinam tem comprimento menor ou igual a .   Dividindo o quadrado de lado 2 em 4 quadrados de lado 1 ficamos com quatro regiões, nas quais, a maior distância possível entre dois pontos é determinado pelas diagonais, cujo comprimento mede . Se os segmentos determinados pelos quatro primeiros pontos ainda não satisfazem a condição do enunciado, necessariamente, ao escolher o quinto ponto, ele ficará em um dos quatro quadrados que já possuem um ponto cada um. Portando dentre todos os segmentos determinados pelos cinco pontos, a menor distância será menor ou igual a .    Cinquenta e um pontos são pontos são postos no interior de um quadrado de lado 1 metro. Prove que existe um conjunto de três desses pontos podem ser cobertos por um quadrado de lado 20 centímetros.   Particione o quadrado de 100 em 25 quadrados de 20 . Queremos colocar 51 pontos em 25 quadros, pelo PCP então pelo menos 1 quadrado de 20 contém 3 pontos.    Em cada casa de um tabuleiro é colocado um dos números . Prove que, dentre as oito somas ao longo de uma mesma linha, coluna ou diagonal, existem duas iguais.   Observe que o valor mínimo possível é e o máximo possível é . Todas as possibilidades são: , ou seja, são 7 valores possíveis. Como são 8 somas, pelo PCP, pelo menos duas são iguais.    Prove que dados sete inteiros positivos, existem dois cuja soma ou a diferença é um múltiplo de 10.   Considere os conjuntos , na qual, um inteiro está no conjunto se é congruente a ou módulo . Como são conjuntos e números, pelo menos um conjunto vai possuir dois números. Se esses dois números forem congruentes módulo , a diferença é um múltiplo de . Caso contrário, a soma é um múltiplo de .    Prove que de qualquer conjunto de dez inteiros podemos escolher um subconjunto cuja soma é um múltiplo de 10.   Seja um conjunto com 10 inteiros quaisquer. Considere as somas: Se existe algum , tal que , acabou. Caso contrário, os restos na divisão Euclideana estão entre 1 e 9.  Temos 10 somas e 9 restos possíveis. Pelo PCP, pelo menos dois restos são iguais, ou seja, existem e , tais que . Se ,     Prove que existe uma potência de 3 terminada nos dígitos (na base decimal).   Na divisão Euclideana existem 1000 restos possíveis na divisão por 1000. Considere as 1001 potências de 3: Pelo PCP, como existem mais potências de 3 que restos possíveis na divisão por 1000, pelo menos dois restos serão iguais. Considere que e então Como , temos Portanto, termina com os dígitos .    Em cada casa de um tabuleiro é posto um inteiro de modo que a diferença positiva entre dois os inteiros de duas casas vizinhas (lado em comum) é no máximo 5. Prove que dois destes inteiros devem ser iguais.   Seja o menor valor do tabuleiro.  De para um vizinho o valor máximo é ;  A distância máxima entre dois quadrados do tabuleiro pode ser dada quando um dos quadrados está no canto inferior esquerdo e o outro no canto superior direito. Logo, a distância máxima é .  Portanto, o valor máximo possível é Assim, os números do tabuleiro podem variar de até . No total são números possíveis e são quadrados. Pelo PCP, pelo menos dois quadrados vão ter o mesmo número.    (IMO 1964) 17 pessoas se comunicam por cartas. Em todas a cartas, eles discutem apenas um dos três tópicos possíveis. Cada par de pessoas discute apenas um tópico. Mostre que há pelo menos três pessoas que discutiram apenas um tópico.   Selecione uma pessoa qualquer e chame de . Como se comunica com 16 outras pessoas e são apenas 3 tópicos possíveis, pelo  deve discutir sobre um mesmo tópico com pelo menos 6 pessoas, pois  Suponha que discute o tópico I com 6 pessoas. Se qualquer uma dessas seis pessoas discutir com outra dessas 6 pessoas sobre o tópico I, então há 3 escritores correspondentes no tópico I. (O triângulo verde da representa as 3 pessoas que discutem o mesmo tôpico.)   3 pessoas que discutem o tópico 1.    Portanto, suponha que dentre essas seis pessoas apenas os tópicos II e III são discutidos. Se for um desses seis, então pelo  deve discutir com pelo menos 3 dos outros 5 um dos dois tópicos, digamos II, pois  Ainda, existem duas possibilidades para essas três últimas pessoas.  3 pessoas que discutem o tópico II ou o tópico III.   Se alguém escreve para outra pessoa sobre o tópico II, então encontramos três pessoas discutindo sobre o tópico II. Caso contrário, se nenhum dos três escreve para outro sobre o tópico II, então todos os três devem escrever um para o outro sobre o tópico III. Isso prova o afirmação.    (IMO 1985) Seja um conjunto com 1985 inteiros positivos, de modo que nenhum possui um divisor primo maior que 23. Mostre que em existem 4 inteiros, cujo produto é o quarta potência de um inteiro.   Existem nove primos menores ou iguais a : e . Considere uma lista, com entradas, para cada um dos 1985 números, de modo que cada entrada seja a potência do respectivo primo que aparece na fatoração do número. Por exemplo, se o número estiver entre os 1985 números, a lista dele será: Para que existam 4 interios, cujo produto seja a quarta potência de um inteiro, é suficiente mostrar que é possível encontrar 4 listas, tais que, se forem somadas entrada a entrada, cada uma dessas novas entradas será divisível por 4.  Para cada uma das 1985 listas , considere uma nova lista , na qual, cada entrada será o resto da divisão por 2, da entrada da lista original (ou seja, módulo 2). Por exemplo:  Assim, cada nova lista estará entre as 512 possíveis listas distintas. Dessa forma, pelo Princípio da Casa dos Pombos, para cada 513 listas , haverão duas idênticas. Considere quaiquer 513 listas , separe o par idêntico e repita esse processo até sobrarem 511 listas. No final desse processo, foram separadas 737 pares de listas.  Para cada um dos 737 pares, considere uma lista formada pela soma . Observe que cada entrada das 737 listas é igual a zero ou a dois. Como só existem 512 listas diferentes, com entradas 0 ou 2, pelo Princípio da Casa dos Pombos, pelo menos duas das listas serão idênticas. Digamos que e , então o número é a quarta potência de um inteiro.      (Vietnam 2007) Dado um polígono regular com lados, encontre o menor inteiro positivo tal que entre quaisquer vértices do polígono existam com a propriedade: o quadrilátero convexo que eles formam compartilha lados com o polígono.   Numere os vértices do polígono de a . O que queremos descobir é o menor valor de , tal que, qualquer conjunto com vértices possua pelo menos vértices consecutivos.  Considere o conjunto das -tuplas de vértices consecutivos: Cada vértice do polígono está presente em 4 elementos do conjunto . Desse modo, cada vértice escolhido no polígono correspondem a 4 elementos de . Como possui elementos, escreva uma lista com os números de todas as -tuplas de forma consecutiva, formando uma lista com números. Na lista podemos escolher até números, de forma que não tenham elementos consecutivos. Então, como cada vértice do polígono correspondem a elementos de , se , teremos a condição satisfeita: qualquer conjunto de vértices possui pelo menos vértices consecutivos. Fazendo as contas,   Agora precisamos monstrar que o menor valor de é . Vamos escolher vértices de forma que não tenham vértices consecutivos. Considere todos os vértices do polígono, menos o vértice e os vértices que são múltiplos de . Como , temos múltiplos de , dessa forma temos vértices sem que deles sejam consecutivos.    (OMM 2003) Há meninos e meninas em uma festa. Cada menino gosta de meninas e cada menina gosta de meninos. Encontre todos os pares de forma que sempre deve haver ser um menino e uma menina que gostam um do outro.   Considere os pares , na qual é um menino que gosta da menina . Para cada menino, existem pares, então existem pares. Portanto existe uma menina em desses pares, ou seja, existe uma menina que pelo menos meninos gostam dela. Se essa menina gosta de mais que meninos, então podemos encontrar o par desejado. Portanto, se , podemos encontrar um par.  Se vamos mostar que nem sempre é possível encontrar um par satisfazendo a condição do enunciado. Vamos numerar os meninos e as meninas de a . Dado um par , com a primeira entrada correspondendo a menina e a segunda entrada correspondendo ao menino. Diremos que gosta de , se deixar resto que pertence ao conjunto , na divisão por . Diremos que gosta de , se deixar resto que pertence ao conjunto , na divisão por . Com isso, cada menino gosta de meninas, cada menina gosta de meninos e não existe um par que os dois se gostem.    "
},
{
  "id": "figura-dirichlet",
  "level": "2",
  "url": "section-casa-pombos.html#figura-dirichlet",
  "type": "Figura",
  "number": "1.3.1",
  "title": "",
  "body": " Johann Peter Gustav Lejeune Dirichlet, fonte: gigantesdamatematica.wordpress.com\/   "
},
{
  "id": "teo-casa-pombo",
  "level": "2",
  "url": "section-casa-pombos.html#teo-casa-pombo",
  "type": "Teorema",
  "number": "1.3.2",
  "title": "",
  "body": " Se pombos forem colocados em casas, então existe pelo menos uma casa contendo dois ou mais pombos.  Suponha que nenhuma das casas contém mais de um pombo. Então o número total de pombos seria no máximo . Isto é uma contradição, já que existem pelo menos pombos.  "
},
{
  "id": "remark-2",
  "level": "2",
  "url": "section-casa-pombos.html#remark-2",
  "type": "Nota",
  "number": "1.3.3",
  "title": "",
  "body": " Podemos interpretar o princípio usando funções da seguinte forma: Sejam e , dois conjuntos. Se o número de elementos de for maior que o números de elementos de , então não existe uma função injetiva de para , ou seja, pelo menos dois elementos do domínio terão a mesma imagem, independente da função entre e .  Essencialmente, para usar este princípio, precisamos identificar dois conjuntos, que chamaremos sugestivamente de e para representarem o conjunto dos pombos e o conjunto das casas, respectivamente. Em seguida comparamos o número de elementos entre eles.  "
},
{
  "id": "example-17",
  "level": "2",
  "url": "section-casa-pombos.html#example-17",
  "type": "Exemplo",
  "number": "1.3.4",
  "title": "",
  "body": " Mostre que, em um grupo de 367 pessoas, pelo menos duas fazem o aniversário no mesmo dia.   Chame de o conjunto das pessoas e o conjunto dos dias do ano. Desta forma como temos mais elementos em do que em , pelo princípio da casa dos pombos, pelo menos duas pessoas fazem aniversário no mesmo dia.   "
},
{
  "id": "example-18",
  "level": "2",
  "url": "section-casa-pombos.html#example-18",
  "type": "Exemplo",
  "number": "1.3.5",
  "title": "",
  "body": " Mostre que entre nove números que não possuem divisores primos maiores que cinco, existem dois cujo produto é um quadrado.   Inicialmente observe que, qualquer número inteiro que não possui divisor primo maior que cinco, se escreve na forma , com e inteiros não negativos.  Defina um conjunto com 9 números arbitrários que satisfaçam as hipóteses do enunciado: Como os expoentes e só podem ser pares ou ímpares, seja um conjunto que represente todas as paridades possíveis para os expoentes de 2, 3 e 5 em . Este conjunto possui 8 elementos, pois temos duas possibilidades para a paridade de cada um dos 3 expoentes.  Como o conjunto é formado por nove elementos, pelo princípio da casa dos pombos, teremos dois elementos em , cujos expoentes possuem a mesma paridade, digamos que e .  O produto entre eles é da forma , com , que é um quadrado, pois pode ser escrito na forma .   "
},
{
  "id": "example-19",
  "level": "2",
  "url": "section-casa-pombos.html#example-19",
  "type": "Exemplo",
  "number": "1.3.6",
  "title": "",
  "body": " (IMO 1972) Prove que, de qualquer conjunto de dez números naturais distintos de dois dígitos, podemos escolher dois subconjuntos A e B (disjuntos) cuja a soma dos elementos é a mesma em ambos.   Seja um conjunto com 10 números naturais distintos de dois dígitos. A soma de todos os elementos de pode ser no máximo 945, no caso em que .  Considere o conjunto das partes de , ou seja, o conjunto formado por todos os subconjuntos de . Este conjunto possui elementos, sendo um deles o conjunto vazio, pois para formar um subconjunto de , precisamos decidir se cada elemento de vai pertencer ou não a este subconjunto.  Defina e como o conjunto das partes de , menos o conjunto vazio. Desta forma possui elementos.  Observe que um elemento de é um subconjunto de e que a soma dos elementos de um elemento de será um número que pertence a . Pelo princípio da casa dos pombos, como temos mais elementos em do que em , pelo menos dois elementos possuem a mesma soma.  Se e forem disjuntos, acabou. Se não, considere e . Logo, os conjuntos e são disjuntos e a soma dos seus elementos é a mesma.   "
},
{
  "id": "remark-3",
  "level": "2",
  "url": "section-casa-pombos.html#remark-3",
  "type": "Nota",
  "number": "1.3.7",
  "title": "",
  "body": "Para uma versão mais geral do princípio da casa dos pombos, vamos usar a função teto: dada por ou seja, é o menor inteiro que é maior ou igual a . Observe que , para qualquer .  "
},
{
  "id": "example-20",
  "level": "2",
  "url": "section-casa-pombos.html#example-20",
  "type": "Exemplo",
  "number": "1.3.8",
  "title": "",
  "body": "    "
},
{
  "id": "teo-casa-pombo2",
  "level": "2",
  "url": "section-casa-pombos.html#teo-casa-pombo2",
  "type": "Teorema",
  "number": "1.3.9",
  "title": "",
  "body": " Se pombos forem colocados em casas, então existe pelo menos uma casa contendo pelo menos pombos.   Suponha que nenhuma das caixas contém mais que pombos. Então, o número total de pombos é no máximo na qual, a desigualdade foi usada. Esta é uma contradição, pois existem um total de pombos.   "
},
{
  "id": "example-21",
  "level": "2",
  "url": "section-casa-pombos.html#example-21",
  "type": "Exemplo",
  "number": "1.3.10",
  "title": "",
  "body": " Nove pontos são colocados no interior de um triângulo de área 4 , de forma que não tenha 3 pontos colineares. Mostre que podemos escolher três deles para serem os vértices de um triângulo de área no máximo igual a 1 .   Sejam e os vértices do triângulo de área 4 . Considere três pontos e na arestas , de forma que e formem quatro triângulos, cada um com área de 1 .  Desta forma ao colocar os pontos no triâgulo , pelo princípio da casa dos pombos, existem pelo menos pontos em um dos quatro triângulos: e .   Triângulo subdividido.    Logo os três pontos que estão dentro de um destes 4 triângulos, por não serem colineares, formam um triângulo de área no máximo igual a 1 .   "
},
{
  "id": "exe-putnam",
  "level": "2",
  "url": "section-casa-pombos.html#exe-putnam",
  "type": "Exemplo",
  "number": "1.3.12",
  "title": "",
  "body": " (Putnam 1953). Assuma que em um grupo de 6 pessoas, cada par de pessoas consistem em dois amigos ou dois inimigos. Mostre que ou existem 3 amigos mútuos ou 3 inimigos mútuos.   Seja uma das 6 pessoas. Sejam e o conjunto com as outras 5 pessoas.  Pela 2ª versão do princípio da casa dos pombos, dividindo as 5 pessoas de nos 2 conjuntos de , um desses conjuntos possui pelo menos elementos. Então, ou existem 3 ou mais que são amigos de , ou 3 ou mais que são inimigos de .  Suponha sem perda de generalidade que e sejam amigos de . Se quaisquer duas destas 3 pessoas são amigas, então estas duas pessoas e formam um conjunto de 3 amigos mútuos. Caso contrário e formam um conjunto de 3 inimigos mútuos. O outro caso é análogo.   "
},
{
  "id": "remark-4",
  "level": "2",
  "url": "section-casa-pombos.html#remark-4",
  "type": "Nota",
  "number": "1.3.13",
  "title": "",
  "body": " A solução do , é equivalente a demonstração de que o número de Ramsey . A Teoria de Ramsey é uma área importante da Combinatória, mais especificamente da teoria dos Grafos. O número de Ramsey, , é o menor inteiro tal que o grafo completo bicolorido , nas cores vermelho e azul para arestas, possui um subgrafo completo monocromático vermelho ou um subgrafo completo monocromático azul . Para mais informação sobre a Teoria de Ramsey, veja . Determinar um número de Ramsey em geral é muito difícil e é um problema em aberto. Para determinar o número , que foi descoberto em 1993, foram necessários 11 anos de tempo de processamento em 110 computadores desktop.  "
},
{
  "id": "exercise-11",
  "level": "2",
  "url": "section-casa-pombos.html#exercise-11",
  "type": "Exercício",
  "number": "1.3.4.1",
  "title": "",
  "body": " Qual é o número mínimo de pessoas que deve haver em um grupo para que possamos garantir que nele haja pelo menos 5 pessoas nascidas no mesmo mês?   49   Pelo basta encontrar o menor número inteiro , tal que . Como , o valor de é 49.  "
},
{
  "id": "exercise-12",
  "level": "2",
  "url": "section-casa-pombos.html#exercise-12",
  "type": "Exercício",
  "number": "1.3.4.2",
  "title": "",
  "body": " Escolhem-se ao acaso 5 pontos sobre a superfície de um quadrado de lado 2. Mostre que pelo menos um dos segmentos que eles determinam tem comprimento menor ou igual a .   Dividindo o quadrado de lado 2 em 4 quadrados de lado 1 ficamos com quatro regiões, nas quais, a maior distância possível entre dois pontos é determinado pelas diagonais, cujo comprimento mede . Se os segmentos determinados pelos quatro primeiros pontos ainda não satisfazem a condição do enunciado, necessariamente, ao escolher o quinto ponto, ele ficará em um dos quatro quadrados que já possuem um ponto cada um. Portando dentre todos os segmentos determinados pelos cinco pontos, a menor distância será menor ou igual a .  "
},
{
  "id": "exercise-13",
  "level": "2",
  "url": "section-casa-pombos.html#exercise-13",
  "type": "Exercício",
  "number": "1.3.4.3",
  "title": "",
  "body": " Cinquenta e um pontos são pontos são postos no interior de um quadrado de lado 1 metro. Prove que existe um conjunto de três desses pontos podem ser cobertos por um quadrado de lado 20 centímetros.   Particione o quadrado de 100 em 25 quadrados de 20 . Queremos colocar 51 pontos em 25 quadros, pelo PCP então pelo menos 1 quadrado de 20 contém 3 pontos.  "
},
{
  "id": "exercise-14",
  "level": "2",
  "url": "section-casa-pombos.html#exercise-14",
  "type": "Exercício",
  "number": "1.3.4.4",
  "title": "",
  "body": " Em cada casa de um tabuleiro é colocado um dos números . Prove que, dentre as oito somas ao longo de uma mesma linha, coluna ou diagonal, existem duas iguais.   Observe que o valor mínimo possível é e o máximo possível é . Todas as possibilidades são: , ou seja, são 7 valores possíveis. Como são 8 somas, pelo PCP, pelo menos duas são iguais.  "
},
{
  "id": "exercise-15",
  "level": "2",
  "url": "section-casa-pombos.html#exercise-15",
  "type": "Exercício",
  "number": "1.3.4.5",
  "title": "",
  "body": " Prove que dados sete inteiros positivos, existem dois cuja soma ou a diferença é um múltiplo de 10.   Considere os conjuntos , na qual, um inteiro está no conjunto se é congruente a ou módulo . Como são conjuntos e números, pelo menos um conjunto vai possuir dois números. Se esses dois números forem congruentes módulo , a diferença é um múltiplo de . Caso contrário, a soma é um múltiplo de .  "
},
{
  "id": "exercise-16",
  "level": "2",
  "url": "section-casa-pombos.html#exercise-16",
  "type": "Exercício",
  "number": "1.3.4.6",
  "title": "",
  "body": " Prove que de qualquer conjunto de dez inteiros podemos escolher um subconjunto cuja soma é um múltiplo de 10.   Seja um conjunto com 10 inteiros quaisquer. Considere as somas: Se existe algum , tal que , acabou. Caso contrário, os restos na divisão Euclideana estão entre 1 e 9.  Temos 10 somas e 9 restos possíveis. Pelo PCP, pelo menos dois restos são iguais, ou seja, existem e , tais que . Se ,   "
},
{
  "id": "exercise-17",
  "level": "2",
  "url": "section-casa-pombos.html#exercise-17",
  "type": "Exercício",
  "number": "1.3.4.7",
  "title": "",
  "body": " Prove que existe uma potência de 3 terminada nos dígitos (na base decimal).   Na divisão Euclideana existem 1000 restos possíveis na divisão por 1000. Considere as 1001 potências de 3: Pelo PCP, como existem mais potências de 3 que restos possíveis na divisão por 1000, pelo menos dois restos serão iguais. Considere que e então Como , temos Portanto, termina com os dígitos .  "
},
{
  "id": "exercise-18",
  "level": "2",
  "url": "section-casa-pombos.html#exercise-18",
  "type": "Exercício",
  "number": "1.3.4.8",
  "title": "",
  "body": " Em cada casa de um tabuleiro é posto um inteiro de modo que a diferença positiva entre dois os inteiros de duas casas vizinhas (lado em comum) é no máximo 5. Prove que dois destes inteiros devem ser iguais.   Seja o menor valor do tabuleiro.  De para um vizinho o valor máximo é ;  A distância máxima entre dois quadrados do tabuleiro pode ser dada quando um dos quadrados está no canto inferior esquerdo e o outro no canto superior direito. Logo, a distância máxima é .  Portanto, o valor máximo possível é Assim, os números do tabuleiro podem variar de até . No total são números possíveis e são quadrados. Pelo PCP, pelo menos dois quadrados vão ter o mesmo número.  "
},
{
  "id": "exercise-19",
  "level": "2",
  "url": "section-casa-pombos.html#exercise-19",
  "type": "Exercício",
  "number": "1.3.4.9",
  "title": "",
  "body": " (IMO 1964) 17 pessoas se comunicam por cartas. Em todas a cartas, eles discutem apenas um dos três tópicos possíveis. Cada par de pessoas discute apenas um tópico. Mostre que há pelo menos três pessoas que discutiram apenas um tópico.   Selecione uma pessoa qualquer e chame de . Como se comunica com 16 outras pessoas e são apenas 3 tópicos possíveis, pelo  deve discutir sobre um mesmo tópico com pelo menos 6 pessoas, pois  Suponha que discute o tópico I com 6 pessoas. Se qualquer uma dessas seis pessoas discutir com outra dessas 6 pessoas sobre o tópico I, então há 3 escritores correspondentes no tópico I. (O triângulo verde da representa as 3 pessoas que discutem o mesmo tôpico.)   3 pessoas que discutem o tópico 1.    Portanto, suponha que dentre essas seis pessoas apenas os tópicos II e III são discutidos. Se for um desses seis, então pelo  deve discutir com pelo menos 3 dos outros 5 um dos dois tópicos, digamos II, pois  Ainda, existem duas possibilidades para essas três últimas pessoas.  3 pessoas que discutem o tópico II ou o tópico III.   Se alguém escreve para outra pessoa sobre o tópico II, então encontramos três pessoas discutindo sobre o tópico II. Caso contrário, se nenhum dos três escreve para outro sobre o tópico II, então todos os três devem escrever um para o outro sobre o tópico III. Isso prova o afirmação.  "
},
{
  "id": "exercise-20",
  "level": "2",
  "url": "section-casa-pombos.html#exercise-20",
  "type": "Exercício",
  "number": "1.3.4.10",
  "title": "",
  "body": " (IMO 1985) Seja um conjunto com 1985 inteiros positivos, de modo que nenhum possui um divisor primo maior que 23. Mostre que em existem 4 inteiros, cujo produto é o quarta potência de um inteiro.   Existem nove primos menores ou iguais a : e . Considere uma lista, com entradas, para cada um dos 1985 números, de modo que cada entrada seja a potência do respectivo primo que aparece na fatoração do número. Por exemplo, se o número estiver entre os 1985 números, a lista dele será: Para que existam 4 interios, cujo produto seja a quarta potência de um inteiro, é suficiente mostrar que é possível encontrar 4 listas, tais que, se forem somadas entrada a entrada, cada uma dessas novas entradas será divisível por 4.  Para cada uma das 1985 listas , considere uma nova lista , na qual, cada entrada será o resto da divisão por 2, da entrada da lista original (ou seja, módulo 2). Por exemplo:  Assim, cada nova lista estará entre as 512 possíveis listas distintas. Dessa forma, pelo Princípio da Casa dos Pombos, para cada 513 listas , haverão duas idênticas. Considere quaiquer 513 listas , separe o par idêntico e repita esse processo até sobrarem 511 listas. No final desse processo, foram separadas 737 pares de listas.  Para cada um dos 737 pares, considere uma lista formada pela soma . Observe que cada entrada das 737 listas é igual a zero ou a dois. Como só existem 512 listas diferentes, com entradas 0 ou 2, pelo Princípio da Casa dos Pombos, pelo menos duas das listas serão idênticas. Digamos que e , então o número é a quarta potência de um inteiro.  "
},
{
  "id": "exercise-21",
  "level": "2",
  "url": "section-casa-pombos.html#exercise-21",
  "type": "Exercício",
  "number": "1.3.4.11",
  "title": "",
  "body": " (Vietnam 2007) Dado um polígono regular com lados, encontre o menor inteiro positivo tal que entre quaisquer vértices do polígono existam com a propriedade: o quadrilátero convexo que eles formam compartilha lados com o polígono.   Numere os vértices do polígono de a . O que queremos descobir é o menor valor de , tal que, qualquer conjunto com vértices possua pelo menos vértices consecutivos.  Considere o conjunto das -tuplas de vértices consecutivos: Cada vértice do polígono está presente em 4 elementos do conjunto . Desse modo, cada vértice escolhido no polígono correspondem a 4 elementos de . Como possui elementos, escreva uma lista com os números de todas as -tuplas de forma consecutiva, formando uma lista com números. Na lista podemos escolher até números, de forma que não tenham elementos consecutivos. Então, como cada vértice do polígono correspondem a elementos de , se , teremos a condição satisfeita: qualquer conjunto de vértices possui pelo menos vértices consecutivos. Fazendo as contas,   Agora precisamos monstrar que o menor valor de é . Vamos escolher vértices de forma que não tenham vértices consecutivos. Considere todos os vértices do polígono, menos o vértice e os vértices que são múltiplos de . Como , temos múltiplos de , dessa forma temos vértices sem que deles sejam consecutivos.  "
},
{
  "id": "exercise-22",
  "level": "2",
  "url": "section-casa-pombos.html#exercise-22",
  "type": "Exercício",
  "number": "1.3.4.12",
  "title": "",
  "body": " (OMM 2003) Há meninos e meninas em uma festa. Cada menino gosta de meninas e cada menina gosta de meninos. Encontre todos os pares de forma que sempre deve haver ser um menino e uma menina que gostam um do outro.   Considere os pares , na qual é um menino que gosta da menina . Para cada menino, existem pares, então existem pares. Portanto existe uma menina em desses pares, ou seja, existe uma menina que pelo menos meninos gostam dela. Se essa menina gosta de mais que meninos, então podemos encontrar o par desejado. Portanto, se , podemos encontrar um par.  Se vamos mostar que nem sempre é possível encontrar um par satisfazendo a condição do enunciado. Vamos numerar os meninos e as meninas de a . Dado um par , com a primeira entrada correspondendo a menina e a segunda entrada correspondendo ao menino. Diremos que gosta de , se deixar resto que pertence ao conjunto , na divisão por . Diremos que gosta de , se deixar resto que pertence ao conjunto , na divisão por . Com isso, cada menino gosta de meninas, cada menina gosta de meninos e não existe um par que os dois se gostem.  "
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
