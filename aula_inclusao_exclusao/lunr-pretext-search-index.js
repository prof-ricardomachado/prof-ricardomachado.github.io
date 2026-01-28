var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "frontmatter",
  "level": "1",
  "url": "frontmatter.html",
  "type": "Pré-textual",
  "number": "",
  "title": "Pré-textual",
  "body": "     Ricardo Nunes Machado Junior   Departamento de Matemática    Universidade Federal Rural de Pernambuco - UFRPE  Recife, Pernambuco, Brasil   ricardo.machadojunior@ufrpe.br        "
},
{
  "id": "sec_introducao",
  "level": "1",
  "url": "sec_introducao.html",
  "type": "Seção",
  "number": "1",
  "title": "O Princípio da Inclusão-Exclusão",
  "body": " O Princípio da Inclusão-Exclusão    O Princípio da Inclusão-Exclusão é uma ferramenta fundamental da Combinatória, utilizada para realizar a contagem precisa de elementos pertencentes a vários conjuntos. Apresentamos esse princípio combinando teoria e exemplos, com atenção especial à integração de recursos tecnológicos desenvolvidos com o auxílio do SageMath .     Usaremos o símbolo para representar o número de elementos do conjunto , isto é, a cardinalidade de .  Dizemos que dois conjuntos e são disjuntos quando .     O Princípio da Inclusão-Exclusão para 2 e 3 conjuntos    Sejam e conjuntos finitos, então   Diagrama de Venn para .    Ou seja, a cardinalidade de é igual a cardinalidade de mais a cardinalidade de menos a cardinalidade de .     (POTI Nível 3 - modificado)   Um retângulo é feito de quadrados unitários. Por quantos quadrados unitários a diagonal do retângulo passa?    A diagonal corta cada um dos quadrados? A resposta é não. De fato, pode ocorrer de haver repetições na \"mudança\". Veja o seguinte exemplo bidimensional, num retângulo .   Note que há três repetições. Opa! e . O que acontece é que se , ocorrem blocos de repetições. Logo, devemos subtrair . A resposta é .  No nosso caso, a resposta é      Escolha os valores dos campos, m (número de linhas) e n (número de colunas) para determinar quantos quadrados unitários a diagonal do retângulo passa.        Sejam e conjuntos finitos, então    Diagrama de Venn para .       Determine o número de elementos do conjunto:    Inicialmente defina os conjuntos   Note que O número de múltiplos de um número natural , entre 1 e 1000, inclusive, é dado pelo quociente da divisão Euclideana de 1000 por , pois, se , com , então os números são múltiplos de e estão entre 1 e 1000. Porém, no exemplo, a contagem dos múltiplos deve ser entre 100 e 1000, inclusive. Para contornar esta situação, definimos os conjuntos e os conjuntos   Assim, Portanto, pois e .  Analogamente,   Para o caso das interseções , devemos usar o quociente da divisão Euclideana pelo . Pois, o MMC é o menor múltiplo desses números, por definição. Logo, pois , e . Analogamente,   Na interseção dos três conjuntos temos, pois , e .  Finalmente, pelo Princípio da Inclusão-Exclusão:      Escolha os valores dos campos, Vmin ,Vmax e lista, para determinar a cardinalidade do conjunto abaixo:          O Princípio da Inclusão-Exclusão para conjuntos   Sejam conjuntos finitos. A cardinalidade de é dada por:      Suponha que o elemento pertence a exatamente ( ) dos conjuntos . Será mostrado que é contado exatamente uma vez pelo lado direito da Expressão .  No somatório: observa-se que é contado vezes, pois pertence a exatamente dos conjuntos. No somatório nota-se que é contado vezes, pois, em cada termo do somatório, para que seja contado, precisa pertencer aos dois conjuntos. Se separarmos os conjuntos que contém , existem interseções contendo . No caso geral, será contado vezes, pelo somatório envolvendo dos conjuntos .   Desta forma, o elemento será contado exatamente vezes pelo lado direito de . Usando a Expansão do Binômio de Newton (veja ), temos Portanto, Isto mostra que o elemento é contado exatamente uma vez pelo lado direito de .  Como o elemento é arbitrário e a quantidade , também é arbitrária, esse argumento serve para cada um dos elementos de , o que prova o teorema.    (POTI Nível 3)  Quantos são os primos menores ou iguais a ?   Podemos listar todos os exemplos (não são muitos!), mas vamos mostrar um método que serve no caso geral. Basta eliminar os compostos e o número 1, que não é primo nem composto. Assim, sendo t a quantidade de compostos entre 1 e 111, a resposta é .  Note que . Os primos menos que 11 são: . Vamos aplicar o mesmo procedimento do Exemplo para descobrir o número de múltiplos desses números.      Portanto, a resposta é .      Quantos são os anagramas da palavra PRINCIPIO que tem P em 1º lugar, ou R em 2º lugar, ou I em 3º lugar, ou N em 4º lugar?     Escolha uma palavra e uma lista de posições para obter o número de anagramas da palavra, na qual pelo menos uma das letras das posições escolhidas estará na posição original.       (POTI Nível 3)  No primeiro dia de uma competição matemática, vinte pessoas tiraram uma foto em grupo, em fila. No último dia, tiraram outra foto, de modo que todos tinham ou novo vizinho à sua direita. De quantas maneiras eles poderiam fazer isso?   Considere o conjunto das permutações do conjunto e seja o conjunto destas permutações, na qual, o par é uma sucessão, . O número de fotos possíveis é dado por . Vamos precisar do PIE para calcular .   Observe que , para qualquer . Pois, olhamos para o par como um elemento e ficamos com um conjunto de elementos para contar o número de permutações.   O caso de , vamos separar em duas situações.   ( e não são consecutivos) Neste caso, Olhamos para o par como apenas um elemento e o par como um elemento também, ficamos com elementos para contar o número de permutações.  ( e são consecutivos) Neste caso olhamos para a tripla como apenas um elemento e também ficamos com elementos para contar o número de permutações.   Nos dois casos o número de permutações é . E o número de interseções 2 a 2 é    O caso de , vamos separar em três situações.   ( , e não são consecutivos) Neste caso, Olhamos para os pares como apenas um elemento, ficamos com elementos para contar o número de permutações.  ( , e apenas dois são consecutivos) Neste caso olhamos para a tripla como apenas um elemento e um par como um elementos. Também ficamos com elementos para contar o número de permutações.  ( , e os três são consecutivos) Neste caso olhamos para a tripla como apenas um elemento. Também ficamos com elementos para contar o número de permutações.   Nos três casos o número de permutações é . E o número de interseções 2 a 2 é    Seguindo com essa ideia, obtemos   Calcule o número de permutações sem sucessores.        Aplicação: Permutações Caóticas   Uma permutação de uma lista de elementos é chamada de permutação caótica , quando nenhum dos elementos da permutação está na posição original, ou seja, uma permutação de é chamada de caótica quando nenhum dos se encontra na -ésima posição.  Notação:    As permutações caóticas dos elementos podem ser geradas no Sage, com o seguinte comando:     Todos os anagramas de AMOR, de forma que nenhuma letra fique na posição original. Troque as informações da lista para obter o número de permutações caóticas e as permutações caóticas da sua lista.      A quantidade de permutações caóticas de uma lista com objetos distintos, pode ser calculada da seguinte maneira:   Considere todas as permutações dos elementos . Indicando por todas as permutações formadas pelos elementos com no -ésimo lugar, calcularemos : Visto que existem termos no primeiro somatório, termos no segundo, termos no terceiro, , no último e temos evidenciando , obtém-se:     Calculando o número de permutações caóticas no Sage:    Luiz, Cláudia, Paulo, Rodrigo e Ana brincam entre si de amigo-secreto (ou amigo-oculto). O nome de cada um é escrito em um pedaço de papel, que é colocado em uma urna. Em seguida, cada participante da brincadeira retira da urna um dos pedaços de papel, ao acaso. De quantas formas pode ocorrer a distribuição dos papéis de modo que nenhum dos participantes retire seu próprio nome?   Uma clássica questão de permutação caótica, visto que durante a distribuição dos papéis nenhum dos participantes poderá retirar seu próprio nome. Assim o número de maneiras de ocorrer tal evento, é dado por:      Quantas são as permutações de que têm exatamente 4 elementos no seu lugar primitivo?   O número de modos de escolher os quatro elementos que ocuparão o seu lugar primitivo é .  Com estes elementos em seus lugares, os outros seis elementos devem ser arrumados de forma caótica. o que pode ser feito de formas. A resposta é      (Canadá) Seja um inteiro positivo, e . Mostre que o número de permutações de sem pontos fixos e o número de permutações de com exatamente um ponto fixo tem diferença exatamente .   O número de permutações sem ponto fixo é exatamente .  O número de permutações com exatamente um ponto fixo é  .   .     Sejam um conjunto, subconjuntos de . Definimos os números da seguinte maneira:     Quantas são as permutações dos elementos , na qual, nenhum número ímpar ocupa o seu lugar primitivo?   Vamos calcular o número total de permutações e subtrair o número de permutações, na qual, algum número ímpar ocupa a posição original. Seja o conjunto das permutações, na qual, o número ocupa a posição original. Precisamos calcular . Para aplicar o PIE, precisamos calcular os valores de .  Observe que , pois o número ímpar ocupa sua posição original, os demais podem ocupar qualquer posição. Assim, , pois são números ímpares.   , pois dois números estão em suas posições originais, os demais podem ocupar qualquer posição. Para calcular , basta multiplicar o valor pelo número de maneiras de escolher os dois números ímpares, ou seja,   Seguindo com o mesmo raciocínio, obtemos e  Portanto, pelo PIE, a resposta é      Quantos são os anagramas da palavra SAGAZ, na qual, nenhuma letra está em sua posição original?   Vamos contar o total de permutações e subtrair o número de permutações que possuem alguma letra na posição original. O total de permutações é A resposta será dada por Na qual, o conjunto é o conjunto das permutações com a letra na posição original.  Neste caso, vamos contar separadamente o número de permutações que tem alguma letra na posição original. Primeiro vamos contar 1 a 1, ou seja, fixamos a letra na posição original e calculamos o número de permutações das outras letras:  S:  A:  G:  A:  Z:  Assim,   Interseções 2 a 2, fixamos as letras nas posições originais e calculamos o número de permutações das outras letras:  SA:  SG:  SA:  SZ:  AG:  AA:  AZ:  GA:  GZ:  AZ:  Logo,   Interseções 3 a 3:  SAG:  SAA:  SAZ:  SGA:  SGZ:  SAZ:  AGA:  AGZ:  AAZ:  GAZ:  Logo,   Interseções 4 a 4:  AGAZ:  SGAZ:  SAAZ:  SAGZ:  SAGA:  Logo,   No caso 5 a 5, só temos uma maneira.   A resposta é          Qual o número de permutações de , na qual, o número não pode ocupar o segundo lugar, o número não pode ocupar o quarto lugar e o número não pode ocupar nem o primeiro nem o quarto lugar?   Vamos calcular o número de permutações de 4 elementos e subtrair o número de permutações em que pelo menos uma das condições acontece.    1 no 2º lugar:  2 no 4º lugar:  3 no 1º lugar:  3 no 4º lugar:      1 no 2º lugar e 2 no 4º lugar:  1 no 2º lugar e 3 no 1º lugar:  1 no 2º lugar e 3 no 4º lugar:  2 no 4º lugar e 3 no 1º lugar:      1 no 2º lugar e 2 no 4º lugar e 3 no 1º lugar:    Resposta:       Generalização do Princípio da Inclusão-Exclusão   Sejam subconjuntos de um conjunto .  O número de elementos de que pertencem a exatamente desses subconjuntos é dado por:    O número de elementos de que pertencem a pelo menos desses subconjuntos é dado por:         Determine quantos inteiros estão compreendidos entre e inclusive, e são múltiplos de  exatamente dois dos números: e ;  pelo menos dois dos números: e .      Observe que é o conjunto dos números inteiros entre 100 e 1000 inclusive. Portanto, Utilizando as informações da solução do Exemplo \\ref{exe_01}, temos:      Agora, basta aplicar os itens e do Teorema \\ref{teo_fim} para obtermos as respostas dos itens e , respectivamente.      Escolha os valores dos campos, Vmin ,Vmax, lista e p, para determinar os valores de , , e a cardinalidade do conjunto , definido abaixo:          Exercícios  Considere os conjuntos e Os conjuntos e possuem a mesma cardinalidade?  e . Portanto, a resposta é não.   (POTI Nível 3) Um paralelepipedo é feito de cubos unitários. Por quantos cubos unitários a diagonal do paralelepı́pedo passa?  Use a mesma ideia do Exemplo .    Quantos são os anagramas da palavra PETELECOS que possuem a letra P na 1ª posição, ou a letra E na 2ª posição, ou a letra T na 3ª posição?    Sejam Queremos calcular . Note que , pois são as quantidades de anagramas da palavra PETELECOS com a letra P na primeira posição, para , e com a letra T na terceira posição, para . Note também que .  Agora, vamos calcular as cardinalidades das interseções , com .  , pois P e E ficam fixados;  , pois P e T ficam fixados;  , pois E e T ficam fixados.  Finalmente, . Aplicando o Princípio da Inclusão-Exclusão:    Quantos inteiros entre 1 e 10000 inclusive:  são divisíveis por pelo menos dois dos números ?  não são divisíveis por nenhum dos números ?  são divisíveis por exatamente um dos números ?  são divisíveis por pelo menos um dos números ?           Sejam e os conjuntos dos anagramas da palavra PRINCIPIO que possuem a letra P em primeiro lugar, a letra R em segundo lugar e a letra I em terceiro lugar, respectivamente.  Quantos são os anagramas de PRINCIPIO que estão em exatamente um dos conjuntos e ?  Quantos são os anagramas de PRINCIPIO que estão em pelo menos um dos conjuntos e ?         De acordo com a , a resposta do item a) é o valor de e o do item b) é o valor de . Note que o número total de anagramas da palavra PRINCIPIO é , que o valor de . Para calcular os valores de e , precisamos dos seguintes valores:         Portanto,      Aplicando a , obtemos as respostas dos itens a) e b) e     Determine o número de permutações de nas quais nem o 2 ocupa o 2ª lugar nem o 3 ocupa o 3º lugar nem o 4 ocupa o 4º lugar?           Calculando os valores de e :       Queremos o número de permutações na qual, os valores 2, 3 e 4 não estão em suas posições originais. Então, precisamos calcular o valor de :    Quantos são os anagramas das palavras abaixo, na qual, nenhuma letra está em sua posição original?  TERMO;  SAGAZ.         Quantas são as permutações de que têm exatamente 3 elementos no seu lugar primitivo?                   (OBM 2011 - 1ª fase do nível 3) Três polı́gonos regulares, de 8, 12 e 18 lados respectivamente, estão inscritos em uma mesma circunferência e têm um vértice em comum. Os vértices dos três polı́gonos são marcados na circunferência. Quantos vértices distintos foram marcados?   Sendo a quantidade de pontos do polı́gono de vértices, queremos calcular . Note que .   28   Sejam , , os conjuntos dos vértices dos polígonos com 8, 12 e 18 lados, respectivamente. Queremos calcular . Pelo Princípio da Inclusão-Exclusão, temos Como , para concluir o cálculo, precisamos descobrir a cardinalidade de cada interseção.  Usando a figura abaixo como referência, se expandirmos os polígonos até a circunferência, estaremos de acordo com o enunciado. O vértice em comum aos três polígonos foi desenhado no ponto extremo superior, sem perda de generalidade, pois independente de onde ele esteja, os polígonos podem ser girados para ficarem desta forma.   Polígonos encolhidos.    Considere os semicírculos que partem do extremo superior no sentido horário, até o vértice seguinte de e assim sucessivamente, de um vértice de até o seguinte. Desta forma cada conjunto define semicírculos. Teremos a interseção de dois ou três vértices quando a respectiva quantidade de extremidades dos semicírculos coincidirem. Portanto, usaremos o máximo divisor comum para calcular a quantidade de interseções dos vértices. Assim, , para , com e . Logo,   Na figura abaixo, podemos imaginar que os polígonos foram \"cortados\" e esticados para podermos visualizar as interseções dos vértices de acordo com os valores dos mdcs.  Verificação das interseções.       Quantos são os inteiros de dígitos, que têm todos os dígitos pertencentes ao conjunto ? Em quantos deles os inteiros e figuram todos?   a) , b) .   item a) Temos 3 opções para o primeiro dígito, 3 opções para o segundo dígito e assim sucessivamente, até o -ésimo dígito que também temos 3 opções. Portanto a resposta é .  item b) Agora precisamos subtrair de a quantidade de números de dígitos, na qual, nem todos os três dígitos disponíveis aparecem. Defina como o subconjunto dos números de dígitos formados pelos dígitos e tal que o dígito não aparece. De maneira análoga defina os subconjuntos e . Desta forma, queremos calcular . Pelo Princípio da Inclusão-Exclusão, sabemos que  possui elementos, pois o dígito não pode figurar no número de dígitos, sobrando apenas os dígitos e . Desta forma, temos duas opções para o primeiro dígito, 2 opções para o segundo dígito e assim sucessivamente. Observe que os conjuntos e possuem a mesma quantidade de elementos.  possui apenas elemento, pois os dígitos e não podem figurar, sobrando apenas o dígito 3. Desta forma temos apenas uma opções para o primeiro dígito, uma opção para o segundo dígito e assim sucessivamente. De maneira análoga observamos que e também possuem apenas um elemento.  Finalmente, não possui elementos, pois nenhum dos três dígitos podem figurar. Portanto a resposta é     Se e ( ), quantas são as funções sobrejetoras?     Note que, no total, exitem funções , pois existem maneiras de escolher a imagem de cada um dos elementos de .  Sejam os elementos do conjunto . Defina o conjunto das funções , tais que não pertence a imagem de . Logo, e .  As funções que não são sobrejetivas são as que pertencem a . Então, o número de funções sobrejetoras é dado por .  Para usar o Princípio da Inclusão-Exclusão, precisamos calcular a cardinalidade dos conjuntos , a cardinalidade das interseções a desses conjuntos, com e a quantidade de interseções a desses conjuntos:  Para o caso de apenas um conjunto, já sabemos que e no total existem conjuntos;  Para o caso das interseções de dois conjuntos, temos e no total existem dessas interseções;  Para o caso das interseções de conjuntos, temos e no total existem dessas interseções.  Aplicando o Princípio da Inclusão-Exclusão, a resposta é     (OMU 2024 - Prova Individual - Item b) Andrês decidiu visitar um museu com exposições. Andrês e Marcelo são rivais. De quantas maneiras Andrês e Marcelo podem visitar exposições, de modo que eles nunca visitem uma mesma exposição, mas cada um visite pelo menos uma?   .   Considere que as exposições do museu estão numeradas de até . Podemos representar cada maneira de visitar o museu com uma -úpla. Usando e como entradas da -úpla, para indicar que Andrês, Marcelo e Nenhum deles, respectivamente, visitou a -ésima exposição.  Podemos formar um total de  -úplas dessa maneira. Depois, precisamos excluir as que não possuem o símbolo ou que não possuem o símbolo . Note que podem ser formadas  -úplas com apenas os símbolos e (sem o símbolo A) e também podem ser formadas  -úplas com apenas os símbolos e (sem o símbolo M). E pode ser formada somente 1 -úpla com apenas o símbolo .  Portanto, o número de maneiras de visitar o museu é .    (IME) Cinco equipes concorrem numa competição automobilı́stica, em que cada equipe possui dois carros. Para a largada são formadas duas colunas de carros lado a lado, de tal forma que cada carro da coluna da direita tenha ao seu lado, na coluna da esquerda, um carro de outra equipe. Determine o número de formações possı́veis para a largada.   2088960   Inicialmente, temos 10! possibilidades de colocarmos esses 10 veículos na posição de largada. Dessas permutações, vamos excluir aquelas que possuem uma equipe com dois carros lado a lado. Para isso, existem maneiras de escolhermos essa equipe que poderá ser colocada em uma das 5 filas na largada . Devemos, ainda, permutar os carros de uma mesma equipe 2! e os demais 8 carros podem ser organizados de 8!. Assim, temos formas distintas de organizarmos esses carros.  Algumas dessas maneiras de organizar os carros apresentam mais de uma equipe com seus carros emparelhados.  Agora, calcularemos em quantos casos teremos ao menos 2 equipes com seus carros emparelhados. Primeiramente, temos formas de escolhermos essas 2 equipes e podemos colocá-las de maneiras diferentes nas 5 filas da largada (a primeira equipe pode entrar em qualquer uma das 5 filas e a segunda em uma das outras 4 que restaram). Mas, ainda, devemos permutar os carros das duas equipes lado a lado e das demais equipes .  Seguindo essa linha de raciocínio, pelo Princípio da Inclusão-Exclusão temos     (ITA 2010) Sejam e conjuntos tais que  ,  ,   e é uma progressão geométrica de razão .   Determine  Determine    a) b) .   item a) Como , temos , logo e . Logo Ou seja,   Usando que é uma P.G., podemos escrever e . Logo,   Portanto, .  Por hipótese, , mas , assim    Finalmente, usando as igualdades , , e o Princípio da Inclusão-Exclusão ( ), obtemos Efetuando o cálculo, .  item b) Como , temos   (OBM 2019 - Nível Universitário 2ª Fase Q6 - Modificado) Um grupo de pessoas fará um amigo oculto e o sorteio dos nomes deverá satisfazer duas condições:  Ninguém pode tirar o próprio nome;  Não podem existir duas pessoas e tais que tirou e tirou .  De quantas maneiras poderá ser realizado o sorteio?    Denote as pessoas por . Sejam , com , os conjuntos das permutações caóticas em que a pessoa tirou a pessoa e a pessoa tirou a pessoa . A resposta deste problema é dada por Para obter este valor, usaremos o Princípio da Inclusão-Exclusão.  Observe que possui a mesma cardinalidade, independetemente dos valores dos índices, assim como também possui a mesma cardinalidade, independentemente dos índices, e assim por diante. Então, para usar o Princípio da Inclusão-Exclusão, precisamos calcular essas cardinalidades e as quantidades dos conjuntos , das interseções duas a duas, três a três e assim por diante. Sem perda de generalidade, vamos fixar os índices:  e no total são conjuntos deste tipo, pois para formar um conjunto , precisamos escolher duas pessoas de disponíveis.  e no total são conjuntos deste tipo, pois para formar uma interseção , precisamos escolher duas pessoas de disponíveis e depois mais duas de disponíveis.  A cardinalidade da interseção de conjuntos é e no total são conjuntos deste tipo, pois para formar uma interseção de conjuntos, precisamos escolher duas pessoas de disponíveis e depois mais duas de disponíveis e assim por diante, até que precisamos escolher duas pessoas de disponíveis.  Antes de escrever o resultado da Expressão vamos obter uma expressão para . Utilizando essas informações na Expressão , obtemos  Fazendo a mudança ,     Seja uma permutação do conjunto . Se então o par é chamado de uma sucessão da permutação.  Exemplo:  Considere as permutações do conjunto . Estas 24 permutações podem ser classificadas de acordo com suas sucessões da seguinte forma:    As permutações sem nenhuma sucessão são as seguintes 11:      As permutações com uma sucessão são as seguintes 9:      As permutações com duas sucessões são as seguintes 3:     A permutação é a única permutação com três sucessões.    Mostre que   O número de permutações do conjunto sem uma sucessão é igual a   O número de permutações do conjunto com exatamente sucessões é igual a onde representa o número de permutações de um conjunto de elementos que não possuem nenhuma sucessão.     "
},
{
  "id": "remark-1",
  "level": "2",
  "url": "sec_introducao.html#remark-1",
  "type": "Nota",
  "number": "1.1",
  "title": "",
  "body": "  Usaremos o símbolo para representar o número de elementos do conjunto , isto é, a cardinalidade de .  Dizemos que dois conjuntos e são disjuntos quando .   "
},
{
  "id": "teo-inclusao-exclusao-2",
  "level": "2",
  "url": "sec_introducao.html#teo-inclusao-exclusao-2",
  "type": "Teorema",
  "number": "1.2",
  "title": "",
  "body": "  Sejam e conjuntos finitos, então   Diagrama de Venn para .    Ou seja, a cardinalidade de é igual a cardinalidade de mais a cardinalidade de menos a cardinalidade de .    "
},
{
  "id": "poti3_modif",
  "level": "2",
  "url": "sec_introducao.html#poti3_modif",
  "type": "Exemplo",
  "number": "1.4",
  "title": "(POTI Nível 3 - modificado).",
  "body": "(POTI Nível 3 - modificado)   Um retângulo é feito de quadrados unitários. Por quantos quadrados unitários a diagonal do retângulo passa?    A diagonal corta cada um dos quadrados? A resposta é não. De fato, pode ocorrer de haver repetições na \"mudança\". Veja o seguinte exemplo bidimensional, num retângulo .   Note que há três repetições. Opa! e . O que acontece é que se , ocorrem blocos de repetições. Logo, devemos subtrair . A resposta é .  No nosso caso, a resposta é    "
},
{
  "id": "technology-1",
  "level": "2",
  "url": "sec_introducao.html#technology-1",
  "type": "Tecnologia",
  "number": "1.5",
  "title": "",
  "body": " Escolha os valores dos campos, m (número de linhas) e n (número de colunas) para determinar quantos quadrados unitários a diagonal do retângulo passa.      "
},
{
  "id": "theorem-2",
  "level": "2",
  "url": "sec_introducao.html#theorem-2",
  "type": "Teorema",
  "number": "1.7",
  "title": "",
  "body": " Sejam e conjuntos finitos, então    Diagrama de Venn para .     "
},
{
  "id": "ex_multiplos_001",
  "level": "2",
  "url": "sec_introducao.html#ex_multiplos_001",
  "type": "Exemplo",
  "number": "1.9",
  "title": "",
  "body": " Determine o número de elementos do conjunto:    Inicialmente defina os conjuntos   Note que O número de múltiplos de um número natural , entre 1 e 1000, inclusive, é dado pelo quociente da divisão Euclideana de 1000 por , pois, se , com , então os números são múltiplos de e estão entre 1 e 1000. Porém, no exemplo, a contagem dos múltiplos deve ser entre 100 e 1000, inclusive. Para contornar esta situação, definimos os conjuntos e os conjuntos   Assim, Portanto, pois e .  Analogamente,   Para o caso das interseções , devemos usar o quociente da divisão Euclideana pelo . Pois, o MMC é o menor múltiplo desses números, por definição. Logo, pois , e . Analogamente,   Na interseção dos três conjuntos temos, pois , e .  Finalmente, pelo Princípio da Inclusão-Exclusão:    "
},
{
  "id": "technology-2",
  "level": "2",
  "url": "sec_introducao.html#technology-2",
  "type": "Tecnologia",
  "number": "1.10",
  "title": "",
  "body": " Escolha os valores dos campos, Vmin ,Vmax e lista, para determinar a cardinalidade do conjunto abaixo:       "
},
{
  "id": "teo-inclusao-exclusao-n",
  "level": "2",
  "url": "sec_introducao.html#teo-inclusao-exclusao-n",
  "type": "Teorema",
  "number": "1.12",
  "title": "",
  "body": " Sejam conjuntos finitos. A cardinalidade de é dada por:      Suponha que o elemento pertence a exatamente ( ) dos conjuntos . Será mostrado que é contado exatamente uma vez pelo lado direito da Expressão .  No somatório: observa-se que é contado vezes, pois pertence a exatamente dos conjuntos. No somatório nota-se que é contado vezes, pois, em cada termo do somatório, para que seja contado, precisa pertencer aos dois conjuntos. Se separarmos os conjuntos que contém , existem interseções contendo . No caso geral, será contado vezes, pelo somatório envolvendo dos conjuntos .   Desta forma, o elemento será contado exatamente vezes pelo lado direito de . Usando a Expansão do Binômio de Newton (veja ), temos Portanto, Isto mostra que o elemento é contado exatamente uma vez pelo lado direito de .  Como o elemento é arbitrário e a quantidade , também é arbitrária, esse argumento serve para cada um dos elementos de , o que prova o teorema.   "
},
{
  "id": "example-3",
  "level": "2",
  "url": "sec_introducao.html#example-3",
  "type": "Exemplo",
  "number": "1.13",
  "title": "(POTI Nível 3).",
  "body": "(POTI Nível 3)  Quantos são os primos menores ou iguais a ?   Podemos listar todos os exemplos (não são muitos!), mas vamos mostrar um método que serve no caso geral. Basta eliminar os compostos e o número 1, que não é primo nem composto. Assim, sendo t a quantidade de compostos entre 1 e 111, a resposta é .  Note que . Os primos menos que 11 são: . Vamos aplicar o mesmo procedimento do Exemplo para descobrir o número de múltiplos desses números.      Portanto, a resposta é .   "
},
{
  "id": "exem_complexa",
  "level": "2",
  "url": "sec_introducao.html#exem_complexa",
  "type": "Exemplo",
  "number": "1.15",
  "title": "",
  "body": "  Quantos são os anagramas da palavra PRINCIPIO que tem P em 1º lugar, ou R em 2º lugar, ou I em 3º lugar, ou N em 4º lugar?   "
},
{
  "id": "technology-3",
  "level": "2",
  "url": "sec_introducao.html#technology-3",
  "type": "Tecnologia",
  "number": "1.16",
  "title": "",
  "body": " Escolha uma palavra e uma lista de posições para obter o número de anagramas da palavra, na qual pelo menos uma das letras das posições escolhidas estará na posição original.      "
},
{
  "id": "example-5",
  "level": "2",
  "url": "sec_introducao.html#example-5",
  "type": "Exemplo",
  "number": "1.18",
  "title": "(POTI Nível 3).",
  "body": "(POTI Nível 3)  No primeiro dia de uma competição matemática, vinte pessoas tiraram uma foto em grupo, em fila. No último dia, tiraram outra foto, de modo que todos tinham ou novo vizinho à sua direita. De quantas maneiras eles poderiam fazer isso?   Considere o conjunto das permutações do conjunto e seja o conjunto destas permutações, na qual, o par é uma sucessão, . O número de fotos possíveis é dado por . Vamos precisar do PIE para calcular .   Observe que , para qualquer . Pois, olhamos para o par como um elemento e ficamos com um conjunto de elementos para contar o número de permutações.   O caso de , vamos separar em duas situações.   ( e não são consecutivos) Neste caso, Olhamos para o par como apenas um elemento e o par como um elemento também, ficamos com elementos para contar o número de permutações.  ( e são consecutivos) Neste caso olhamos para a tripla como apenas um elemento e também ficamos com elementos para contar o número de permutações.   Nos dois casos o número de permutações é . E o número de interseções 2 a 2 é    O caso de , vamos separar em três situações.   ( , e não são consecutivos) Neste caso, Olhamos para os pares como apenas um elemento, ficamos com elementos para contar o número de permutações.  ( , e apenas dois são consecutivos) Neste caso olhamos para a tripla como apenas um elemento e um par como um elementos. Também ficamos com elementos para contar o número de permutações.  ( , e os três são consecutivos) Neste caso olhamos para a tripla como apenas um elemento. Também ficamos com elementos para contar o número de permutações.   Nos três casos o número de permutações é . E o número de interseções 2 a 2 é    Seguindo com essa ideia, obtemos   Calcule o número de permutações sem sucessores.    "
},
{
  "id": "def-permutacao-caotica",
  "level": "2",
  "url": "sec_introducao.html#def-permutacao-caotica",
  "type": "Definição",
  "number": "1.19",
  "title": "",
  "body": " Uma permutação de uma lista de elementos é chamada de permutação caótica , quando nenhum dos elementos da permutação está na posição original, ou seja, uma permutação de é chamada de caótica quando nenhum dos se encontra na -ésima posição.  Notação:   "
},
{
  "id": "technology-4",
  "level": "2",
  "url": "sec_introducao.html#technology-4",
  "type": "Tecnologia",
  "number": "1.20",
  "title": "",
  "body": "As permutações caóticas dos elementos podem ser geradas no Sage, com o seguinte comando:  "
},
{
  "id": "tec-caotica-r-sage",
  "level": "2",
  "url": "sec_introducao.html#tec-caotica-r-sage",
  "type": "Tecnologia",
  "number": "1.21",
  "title": "",
  "body": " Todos os anagramas de AMOR, de forma que nenhuma letra fique na posição original. Troque as informações da lista para obter o número de permutações caóticas e as permutações caóticas da sua lista.   "
},
{
  "id": "teo-pcaotica1",
  "level": "2",
  "url": "sec_introducao.html#teo-pcaotica1",
  "type": "Teorema",
  "number": "1.22",
  "title": "",
  "body": " A quantidade de permutações caóticas de uma lista com objetos distintos, pode ser calculada da seguinte maneira:   Considere todas as permutações dos elementos . Indicando por todas as permutações formadas pelos elementos com no -ésimo lugar, calcularemos : Visto que existem termos no primeiro somatório, termos no segundo, termos no terceiro, , no último e temos evidenciando , obtém-se:    "
},
{
  "id": "tec-pcaotica1",
  "level": "2",
  "url": "sec_introducao.html#tec-pcaotica1",
  "type": "Tecnologia",
  "number": "1.23",
  "title": "",
  "body": "Calculando o número de permutações caóticas no Sage:  "
},
{
  "id": "example-6",
  "level": "2",
  "url": "sec_introducao.html#example-6",
  "type": "Exemplo",
  "number": "1.24",
  "title": "",
  "body": " Luiz, Cláudia, Paulo, Rodrigo e Ana brincam entre si de amigo-secreto (ou amigo-oculto). O nome de cada um é escrito em um pedaço de papel, que é colocado em uma urna. Em seguida, cada participante da brincadeira retira da urna um dos pedaços de papel, ao acaso. De quantas formas pode ocorrer a distribuição dos papéis de modo que nenhum dos participantes retire seu próprio nome?   Uma clássica questão de permutação caótica, visto que durante a distribuição dos papéis nenhum dos participantes poderá retirar seu próprio nome. Assim o número de maneiras de ocorrer tal evento, é dado por:    "
},
{
  "id": "example-7",
  "level": "2",
  "url": "sec_introducao.html#example-7",
  "type": "Exemplo",
  "number": "1.25",
  "title": "",
  "body": " Quantas são as permutações de que têm exatamente 4 elementos no seu lugar primitivo?   O número de modos de escolher os quatro elementos que ocuparão o seu lugar primitivo é .  Com estes elementos em seus lugares, os outros seis elementos devem ser arrumados de forma caótica. o que pode ser feito de formas. A resposta é    "
},
{
  "id": "example-8",
  "level": "2",
  "url": "sec_introducao.html#example-8",
  "type": "Exemplo",
  "number": "1.26",
  "title": "",
  "body": " (Canadá) Seja um inteiro positivo, e . Mostre que o número de permutações de sem pontos fixos e o número de permutações de com exatamente um ponto fixo tem diferença exatamente .   O número de permutações sem ponto fixo é exatamente .  O número de permutações com exatamente um ponto fixo é  .   .   "
},
{
  "id": "definition-2",
  "level": "2",
  "url": "sec_introducao.html#definition-2",
  "type": "Definição",
  "number": "1.27",
  "title": "",
  "body": " Sejam um conjunto, subconjuntos de . Definimos os números da seguinte maneira:   "
},
{
  "id": "example-9",
  "level": "2",
  "url": "sec_introducao.html#example-9",
  "type": "Exemplo",
  "number": "1.28",
  "title": "",
  "body": " Quantas são as permutações dos elementos , na qual, nenhum número ímpar ocupa o seu lugar primitivo?   Vamos calcular o número total de permutações e subtrair o número de permutações, na qual, algum número ímpar ocupa a posição original. Seja o conjunto das permutações, na qual, o número ocupa a posição original. Precisamos calcular . Para aplicar o PIE, precisamos calcular os valores de .  Observe que , pois o número ímpar ocupa sua posição original, os demais podem ocupar qualquer posição. Assim, , pois são números ímpares.   , pois dois números estão em suas posições originais, os demais podem ocupar qualquer posição. Para calcular , basta multiplicar o valor pelo número de maneiras de escolher os dois números ímpares, ou seja,   Seguindo com o mesmo raciocínio, obtemos e  Portanto, pelo PIE, a resposta é    "
},
{
  "id": "example-10",
  "level": "2",
  "url": "sec_introducao.html#example-10",
  "type": "Exemplo",
  "number": "1.29",
  "title": "",
  "body": " Quantos são os anagramas da palavra SAGAZ, na qual, nenhuma letra está em sua posição original?   Vamos contar o total de permutações e subtrair o número de permutações que possuem alguma letra na posição original. O total de permutações é A resposta será dada por Na qual, o conjunto é o conjunto das permutações com a letra na posição original.  Neste caso, vamos contar separadamente o número de permutações que tem alguma letra na posição original. Primeiro vamos contar 1 a 1, ou seja, fixamos a letra na posição original e calculamos o número de permutações das outras letras:  S:  A:  G:  A:  Z:  Assim,   Interseções 2 a 2, fixamos as letras nas posições originais e calculamos o número de permutações das outras letras:  SA:  SG:  SA:  SZ:  AG:  AA:  AZ:  GA:  GZ:  AZ:  Logo,   Interseções 3 a 3:  SAG:  SAA:  SAZ:  SGA:  SGZ:  SAZ:  AGA:  AGZ:  AAZ:  GAZ:  Logo,   Interseções 4 a 4:  AGAZ:  SGAZ:  SAAZ:  SAGZ:  SAGA:  Logo,   No caso 5 a 5, só temos uma maneira.   A resposta é        "
},
{
  "id": "example-11",
  "level": "2",
  "url": "sec_introducao.html#example-11",
  "type": "Exemplo",
  "number": "1.31",
  "title": "",
  "body": " Qual o número de permutações de , na qual, o número não pode ocupar o segundo lugar, o número não pode ocupar o quarto lugar e o número não pode ocupar nem o primeiro nem o quarto lugar?   Vamos calcular o número de permutações de 4 elementos e subtrair o número de permutações em que pelo menos uma das condições acontece.    1 no 2º lugar:  2 no 4º lugar:  3 no 1º lugar:  3 no 4º lugar:      1 no 2º lugar e 2 no 4º lugar:  1 no 2º lugar e 3 no 1º lugar:  1 no 2º lugar e 3 no 4º lugar:  2 no 4º lugar e 3 no 1º lugar:      1 no 2º lugar e 2 no 4º lugar e 3 no 1º lugar:    Resposta:    "
},
{
  "id": "apbp",
  "level": "2",
  "url": "sec_introducao.html#apbp",
  "type": "Proposição",
  "number": "1.32",
  "title": "",
  "body": " Sejam subconjuntos de um conjunto .  O número de elementos de que pertencem a exatamente desses subconjuntos é dado por:    O número de elementos de que pertencem a pelo menos desses subconjuntos é dado por:      "
},
{
  "id": "example-12",
  "level": "2",
  "url": "sec_introducao.html#example-12",
  "type": "Exemplo",
  "number": "1.33",
  "title": "",
  "body": "  Determine quantos inteiros estão compreendidos entre e inclusive, e são múltiplos de  exatamente dois dos números: e ;  pelo menos dois dos números: e .      Observe que é o conjunto dos números inteiros entre 100 e 1000 inclusive. Portanto, Utilizando as informações da solução do Exemplo \\ref{exe_01}, temos:      Agora, basta aplicar os itens e do Teorema \\ref{teo_fim} para obtermos as respostas dos itens e , respectivamente.    "
},
{
  "id": "technology-7",
  "level": "2",
  "url": "sec_introducao.html#technology-7",
  "type": "Tecnologia",
  "number": "1.34",
  "title": "",
  "body": " Escolha os valores dos campos, Vmin ,Vmax, lista e p, para determinar os valores de , , e a cardinalidade do conjunto , definido abaixo:       "
},
{
  "id": "exercise-1",
  "level": "2",
  "url": "sec_introducao.html#exercise-1",
  "type": "Exercício",
  "number": "1.5.1",
  "title": "",
  "body": "Considere os conjuntos e Os conjuntos e possuem a mesma cardinalidade?  e . Portanto, a resposta é não.  "
},
{
  "id": "exercise-2",
  "level": "2",
  "url": "sec_introducao.html#exercise-2",
  "type": "Exercício",
  "number": "1.5.2",
  "title": "(POTI Nível 3).",
  "body": "(POTI Nível 3) Um paralelepipedo é feito de cubos unitários. Por quantos cubos unitários a diagonal do paralelepı́pedo passa?  Use a mesma ideia do Exemplo .   "
},
{
  "id": "exercise-3",
  "level": "2",
  "url": "sec_introducao.html#exercise-3",
  "type": "Exercício",
  "number": "1.5.3",
  "title": "",
  "body": "Quantos são os anagramas da palavra PETELECOS que possuem a letra P na 1ª posição, ou a letra E na 2ª posição, ou a letra T na 3ª posição?    Sejam Queremos calcular . Note que , pois são as quantidades de anagramas da palavra PETELECOS com a letra P na primeira posição, para , e com a letra T na terceira posição, para . Note também que .  Agora, vamos calcular as cardinalidades das interseções , com .  , pois P e E ficam fixados;  , pois P e T ficam fixados;  , pois E e T ficam fixados.  Finalmente, . Aplicando o Princípio da Inclusão-Exclusão:   "
},
{
  "id": "exercise-4",
  "level": "2",
  "url": "sec_introducao.html#exercise-4",
  "type": "Exercício",
  "number": "1.5.4",
  "title": "",
  "body": "Quantos inteiros entre 1 e 10000 inclusive:  são divisíveis por pelo menos dois dos números ?  não são divisíveis por nenhum dos números ?  são divisíveis por exatamente um dos números ?  são divisíveis por pelo menos um dos números ?          "
},
{
  "id": "exercise-5",
  "level": "2",
  "url": "sec_introducao.html#exercise-5",
  "type": "Exercício",
  "number": "1.5.5",
  "title": "",
  "body": "Sejam e os conjuntos dos anagramas da palavra PRINCIPIO que possuem a letra P em primeiro lugar, a letra R em segundo lugar e a letra I em terceiro lugar, respectivamente.  Quantos são os anagramas de PRINCIPIO que estão em exatamente um dos conjuntos e ?  Quantos são os anagramas de PRINCIPIO que estão em pelo menos um dos conjuntos e ?         De acordo com a , a resposta do item a) é o valor de e o do item b) é o valor de . Note que o número total de anagramas da palavra PRINCIPIO é , que o valor de . Para calcular os valores de e , precisamos dos seguintes valores:         Portanto,      Aplicando a , obtemos as respostas dos itens a) e b) e   "
},
{
  "id": "exercise-6",
  "level": "2",
  "url": "sec_introducao.html#exercise-6",
  "type": "Exercício",
  "number": "1.5.6",
  "title": "",
  "body": " Determine o número de permutações de nas quais nem o 2 ocupa o 2ª lugar nem o 3 ocupa o 3º lugar nem o 4 ocupa o 4º lugar?           Calculando os valores de e :       Queremos o número de permutações na qual, os valores 2, 3 e 4 não estão em suas posições originais. Então, precisamos calcular o valor de :   "
},
{
  "id": "exercise-7",
  "level": "2",
  "url": "sec_introducao.html#exercise-7",
  "type": "Exercício",
  "number": "1.5.7",
  "title": "",
  "body": "Quantos são os anagramas das palavras abaixo, na qual, nenhuma letra está em sua posição original?  TERMO;  SAGAZ.        "
},
{
  "id": "exercise-8",
  "level": "2",
  "url": "sec_introducao.html#exercise-8",
  "type": "Exercício",
  "number": "1.5.8",
  "title": "",
  "body": "Quantas são as permutações de que têm exatamente 3 elementos no seu lugar primitivo?                 "
},
{
  "id": "exercise-9",
  "level": "2",
  "url": "sec_introducao.html#exercise-9",
  "type": "Exercício",
  "number": "1.5.9",
  "title": "",
  "body": " (OBM 2011 - 1ª fase do nível 3) Três polı́gonos regulares, de 8, 12 e 18 lados respectivamente, estão inscritos em uma mesma circunferência e têm um vértice em comum. Os vértices dos três polı́gonos são marcados na circunferência. Quantos vértices distintos foram marcados?   Sendo a quantidade de pontos do polı́gono de vértices, queremos calcular . Note que .   28   Sejam , , os conjuntos dos vértices dos polígonos com 8, 12 e 18 lados, respectivamente. Queremos calcular . Pelo Princípio da Inclusão-Exclusão, temos Como , para concluir o cálculo, precisamos descobrir a cardinalidade de cada interseção.  Usando a figura abaixo como referência, se expandirmos os polígonos até a circunferência, estaremos de acordo com o enunciado. O vértice em comum aos três polígonos foi desenhado no ponto extremo superior, sem perda de generalidade, pois independente de onde ele esteja, os polígonos podem ser girados para ficarem desta forma.   Polígonos encolhidos.    Considere os semicírculos que partem do extremo superior no sentido horário, até o vértice seguinte de e assim sucessivamente, de um vértice de até o seguinte. Desta forma cada conjunto define semicírculos. Teremos a interseção de dois ou três vértices quando a respectiva quantidade de extremidades dos semicírculos coincidirem. Portanto, usaremos o máximo divisor comum para calcular a quantidade de interseções dos vértices. Assim, , para , com e . Logo,   Na figura abaixo, podemos imaginar que os polígonos foram \"cortados\" e esticados para podermos visualizar as interseções dos vértices de acordo com os valores dos mdcs.  Verificação das interseções.     "
},
{
  "id": "exercise-10",
  "level": "2",
  "url": "sec_introducao.html#exercise-10",
  "type": "Exercício",
  "number": "1.5.10",
  "title": "",
  "body": " Quantos são os inteiros de dígitos, que têm todos os dígitos pertencentes ao conjunto ? Em quantos deles os inteiros e figuram todos?   a) , b) .   item a) Temos 3 opções para o primeiro dígito, 3 opções para o segundo dígito e assim sucessivamente, até o -ésimo dígito que também temos 3 opções. Portanto a resposta é .  item b) Agora precisamos subtrair de a quantidade de números de dígitos, na qual, nem todos os três dígitos disponíveis aparecem. Defina como o subconjunto dos números de dígitos formados pelos dígitos e tal que o dígito não aparece. De maneira análoga defina os subconjuntos e . Desta forma, queremos calcular . Pelo Princípio da Inclusão-Exclusão, sabemos que  possui elementos, pois o dígito não pode figurar no número de dígitos, sobrando apenas os dígitos e . Desta forma, temos duas opções para o primeiro dígito, 2 opções para o segundo dígito e assim sucessivamente. Observe que os conjuntos e possuem a mesma quantidade de elementos.  possui apenas elemento, pois os dígitos e não podem figurar, sobrando apenas o dígito 3. Desta forma temos apenas uma opções para o primeiro dígito, uma opção para o segundo dígito e assim sucessivamente. De maneira análoga observamos que e também possuem apenas um elemento.  Finalmente, não possui elementos, pois nenhum dos três dígitos podem figurar. Portanto a resposta é   "
},
{
  "id": "exercise-11",
  "level": "2",
  "url": "sec_introducao.html#exercise-11",
  "type": "Exercício",
  "number": "1.5.11",
  "title": "",
  "body": "Se e ( ), quantas são as funções sobrejetoras?     Note que, no total, exitem funções , pois existem maneiras de escolher a imagem de cada um dos elementos de .  Sejam os elementos do conjunto . Defina o conjunto das funções , tais que não pertence a imagem de . Logo, e .  As funções que não são sobrejetivas são as que pertencem a . Então, o número de funções sobrejetoras é dado por .  Para usar o Princípio da Inclusão-Exclusão, precisamos calcular a cardinalidade dos conjuntos , a cardinalidade das interseções a desses conjuntos, com e a quantidade de interseções a desses conjuntos:  Para o caso de apenas um conjunto, já sabemos que e no total existem conjuntos;  Para o caso das interseções de dois conjuntos, temos e no total existem dessas interseções;  Para o caso das interseções de conjuntos, temos e no total existem dessas interseções.  Aplicando o Princípio da Inclusão-Exclusão, a resposta é   "
},
{
  "id": "exercise-12",
  "level": "2",
  "url": "sec_introducao.html#exercise-12",
  "type": "Exercício",
  "number": "1.5.12",
  "title": "",
  "body": " (OMU 2024 - Prova Individual - Item b) Andrês decidiu visitar um museu com exposições. Andrês e Marcelo são rivais. De quantas maneiras Andrês e Marcelo podem visitar exposições, de modo que eles nunca visitem uma mesma exposição, mas cada um visite pelo menos uma?   .   Considere que as exposições do museu estão numeradas de até . Podemos representar cada maneira de visitar o museu com uma -úpla. Usando e como entradas da -úpla, para indicar que Andrês, Marcelo e Nenhum deles, respectivamente, visitou a -ésima exposição.  Podemos formar um total de  -úplas dessa maneira. Depois, precisamos excluir as que não possuem o símbolo ou que não possuem o símbolo . Note que podem ser formadas  -úplas com apenas os símbolos e (sem o símbolo A) e também podem ser formadas  -úplas com apenas os símbolos e (sem o símbolo M). E pode ser formada somente 1 -úpla com apenas o símbolo .  Portanto, o número de maneiras de visitar o museu é .  "
},
{
  "id": "exercise-13",
  "level": "2",
  "url": "sec_introducao.html#exercise-13",
  "type": "Exercício",
  "number": "1.5.13",
  "title": "",
  "body": " (IME) Cinco equipes concorrem numa competição automobilı́stica, em que cada equipe possui dois carros. Para a largada são formadas duas colunas de carros lado a lado, de tal forma que cada carro da coluna da direita tenha ao seu lado, na coluna da esquerda, um carro de outra equipe. Determine o número de formações possı́veis para a largada.   2088960   Inicialmente, temos 10! possibilidades de colocarmos esses 10 veículos na posição de largada. Dessas permutações, vamos excluir aquelas que possuem uma equipe com dois carros lado a lado. Para isso, existem maneiras de escolhermos essa equipe que poderá ser colocada em uma das 5 filas na largada . Devemos, ainda, permutar os carros de uma mesma equipe 2! e os demais 8 carros podem ser organizados de 8!. Assim, temos formas distintas de organizarmos esses carros.  Algumas dessas maneiras de organizar os carros apresentam mais de uma equipe com seus carros emparelhados.  Agora, calcularemos em quantos casos teremos ao menos 2 equipes com seus carros emparelhados. Primeiramente, temos formas de escolhermos essas 2 equipes e podemos colocá-las de maneiras diferentes nas 5 filas da largada (a primeira equipe pode entrar em qualquer uma das 5 filas e a segunda em uma das outras 4 que restaram). Mas, ainda, devemos permutar os carros das duas equipes lado a lado e das demais equipes .  Seguindo essa linha de raciocínio, pelo Princípio da Inclusão-Exclusão temos   "
},
{
  "id": "exercise-14",
  "level": "2",
  "url": "sec_introducao.html#exercise-14",
  "type": "Exercício",
  "number": "1.5.14",
  "title": "",
  "body": " (ITA 2010) Sejam e conjuntos tais que  ,  ,   e é uma progressão geométrica de razão .   Determine  Determine    a) b) .   item a) Como , temos , logo e . Logo Ou seja,   Usando que é uma P.G., podemos escrever e . Logo,   Portanto, .  Por hipótese, , mas , assim    Finalmente, usando as igualdades , , e o Princípio da Inclusão-Exclusão ( ), obtemos Efetuando o cálculo, .  item b) Como , temos  "
},
{
  "id": "exercise-15",
  "level": "2",
  "url": "sec_introducao.html#exercise-15",
  "type": "Exercício",
  "number": "1.5.15",
  "title": "",
  "body": "(OBM 2019 - Nível Universitário 2ª Fase Q6 - Modificado) Um grupo de pessoas fará um amigo oculto e o sorteio dos nomes deverá satisfazer duas condições:  Ninguém pode tirar o próprio nome;  Não podem existir duas pessoas e tais que tirou e tirou .  De quantas maneiras poderá ser realizado o sorteio?    Denote as pessoas por . Sejam , com , os conjuntos das permutações caóticas em que a pessoa tirou a pessoa e a pessoa tirou a pessoa . A resposta deste problema é dada por Para obter este valor, usaremos o Princípio da Inclusão-Exclusão.  Observe que possui a mesma cardinalidade, independetemente dos valores dos índices, assim como também possui a mesma cardinalidade, independentemente dos índices, e assim por diante. Então, para usar o Princípio da Inclusão-Exclusão, precisamos calcular essas cardinalidades e as quantidades dos conjuntos , das interseções duas a duas, três a três e assim por diante. Sem perda de generalidade, vamos fixar os índices:  e no total são conjuntos deste tipo, pois para formar um conjunto , precisamos escolher duas pessoas de disponíveis.  e no total são conjuntos deste tipo, pois para formar uma interseção , precisamos escolher duas pessoas de disponíveis e depois mais duas de disponíveis.  A cardinalidade da interseção de conjuntos é e no total são conjuntos deste tipo, pois para formar uma interseção de conjuntos, precisamos escolher duas pessoas de disponíveis e depois mais duas de disponíveis e assim por diante, até que precisamos escolher duas pessoas de disponíveis.  Antes de escrever o resultado da Expressão vamos obter uma expressão para . Utilizando essas informações na Expressão , obtemos  Fazendo a mudança ,   "
},
{
  "id": "exercise-16",
  "level": "2",
  "url": "sec_introducao.html#exercise-16",
  "type": "Exercício",
  "number": "1.5.16",
  "title": "",
  "body": " Seja uma permutação do conjunto . Se então o par é chamado de uma sucessão da permutação.  Exemplo:  Considere as permutações do conjunto . Estas 24 permutações podem ser classificadas de acordo com suas sucessões da seguinte forma:    As permutações sem nenhuma sucessão são as seguintes 11:      As permutações com uma sucessão são as seguintes 9:      As permutações com duas sucessões são as seguintes 3:     A permutação é a única permutação com três sucessões.    Mostre que   O número de permutações do conjunto sem uma sucessão é igual a   O número de permutações do conjunto com exatamente sucessões é igual a onde representa o número de permutações de um conjunto de elementos que não possuem nenhuma sucessão.   "
},
{
  "id": "referencias",
  "level": "1",
  "url": "referencias.html",
  "type": "Referêcias",
  "number": "2",
  "title": "Referências Bibliográficas",
  "body": "    Referências Bibliográficas     Carlos Shine Aula 5 do POTI, nível 3 .    Nunes Machado Junior, R., Araujo Guedes, G. (2023). POLINÔMIOS DE TORRE E APLICAÇÕES COM IMPLEMENTAÇÕES NO SAGEMATH. Revista Sergipana De Matemática E Educação Matemática, 8(1), 1–36.     Ricardo Nunes Machado Junior. Caos Permutações e Tabuleiros. É Matemática, Oxente!.     MACHADO J. R. N., GUEDES G. A. O Princípio da Inclusao-Exclusão, pensamento computacional e implementações em SageMath , PMO, 2025.   "
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
