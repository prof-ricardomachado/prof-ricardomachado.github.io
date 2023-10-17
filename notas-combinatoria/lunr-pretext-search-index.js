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
  "id": "prof-gabriel-guedes",
  "level": "1",
  "url": "prof-gabriel-guedes.html",
  "type": "Biografia do autor",
  "number": "",
  "title": "Sobre Gabriel Araújo Guedes",
  "body": " Sobre Gabriel Araújo Guedes  Professor Associado da Universidade Federal Rural de Pernambuco, DM.  Doutor em Matemática pela Universidade Federal de Pernambuco (2009-2013).  Mestre em Matemática pela Universidade Federal de Minas Gerais (2007-2009).  Bacharel em Matemática pela Universidade Federal de Pernambuco (2003-2006).  "
},
{
  "id": "prof-luiz-manoel",
  "level": "1",
  "url": "prof-luiz-manoel.html",
  "type": "Biografia do autor",
  "number": "",
  "title": "Sobre Luiz Manoel de Santana Neto",
  "body": " Sobre Luiz Manoel de Santana Neto  Professor e Coordenador do Diferencial+ Cursos e Concursos.  Professor de Matemática da Rede Estadual de Pernambuco.  Mestre em Matemática pelo PROFMAT - Universidade Federal Rural de Pernambuco (2018-2020).  Especialista em Educação Matemática pelo Centro Universitário de Vitória do Santo Antão (2009-2010).  Licenciado em Matemática pela Universidade Federal Rural de Pernambuco (2004-2008).  "
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
  "title": "Conjuntos",
  "body": " Conjuntos    Em combinatória, estamos quase sempre contando o número de elementos de conjuntos ou número de subconjuntos com determinada propriedade. Por isso este material possui uma seção dedicado a este tópico.   Utilizamos o conceito de conjunto, como no ensino médio, como uma ideia de coleção. Uma noção completa com os axiomas da teoria dos conjuntos foge do propósito deste material. Para mais informações sobre a teoria dos conjuntos veja ou Teoria ingênua dos conjuntos .  A seguir há três notações básicas:  letras maiúsculas indicarão conjuntos. Ex.  a letra grega representará o conjunto universo .  letras minúsculas indicarão elementos dos conjuntos. Ex. .    A relação de pertencer será indicada pela letra grega e escrevemos por exemplo, . O conjunto vazio será representado pela letra . Um conjunto com um número reduzido de elementos será indicado simplesmente listando seus elementos. Por exemplo, o conjunto que consiste nos números e será representado por   Um conjunto também pode ser descrito por uma propriedade , comum a todos os seus elementos e escrevemos   Por exemplo, é o conjunto dos números inteiros e pares.   Usamos o símbolo para representar o número de elementos do conjunto , isto é, a cardinalidade de .    Se todo elemento de um conjunto é também elemento de um conjunto , dizemos que é subconjunto de e escrevemos simbolicamente . Se mas existe um elemento tal que , diremos que é um subconjunto próprio de B.    Sejam e dois conjuntos. e são chamados de conjuntos iguais quando todo elemento de pertence a e, reciprocamente, todo elemento de pertence a .  Isto é, e ; portanto, podemos escrever:   Para ilustrar definições, resultados e demonstrações da teoria de conjuntos, é muito comum usar uma representação gráfica chamada de diagrama de Venn .   Os diagramas de Venn consistem em curvas fechadas simples, tais como círculos ou ovais, desenhadas sobre um plano, de forma a simbolizar os conjuntos e permitir a representação das relações de pertinência entre conjuntos e seus elementos (por exemplo, )  Conjunto .   e relações de continência (inclusão) entre os conjuntos (por exemplo, ). Assim, duas curvas que não se tocam e estão uma no espaço interno da outra simbolizam conjuntos que possuem continência;  .       Sejam , ( ) conjuntos e o conjunto universo.   O conjunto união de e é o conjunto dos elementos que pertencem a ou a . Simbolicamente, Mais geralmente,  O conjunto interseção de e é o conjunto dos elementos que pertencem simultaneamente a e a . Simbolicamente, De forma geral,   Dizemos que e são disjuntos se . E dizemos que são disjuntos quando forem disjuntos dois a dois, ou seja,   O conjunto complementar de é o conjunto dos elementos de que não pertencem a . Simbolicamente   O conjunto diferença de e é o conjunto dos elementos que pertencem a e não pertencem a . Simbolicamente,   O produto cartesiano de por é o conjunto de pares ordenados , na qual e . Simbolicamente,   O conjunto das partes ou conjunto potência de é o conjunto de todos os subconjuntos de . Simbolicamente,      Sejam e conjuntos; então, valem as seguintes propriedades:         Demonstração do item 1:   O segundo pode ser demonstrado de forma análoga.    (Leis de Morgan) Sejam e conjuntos. São válidas as seguintes propriedades:          Vamos demonstrar a primeira destas propriedades. A outra é demonstrada de forma análoga. Usamos o fato de que , se, e somente se, e .  Seja , logo . Sendo assim, e . Portanto e , logo . Acabamos de mostrar que .  Considere , então e . Logo , e . Portanto, , sendo assim . Acabamos de mostrar que . Portanto     "
},
{
  "id": "p-23",
  "level": "2",
  "url": "section-1.html#p-23",
  "type": "Parágrafo (with a defined term)",
  "number": "",
  "title": "",
  "body": "Teoria ingênua dos conjuntos "
},
{
  "id": "definition-1",
  "level": "2",
  "url": "section-1.html#definition-1",
  "type": "Definição",
  "number": "1.1.1",
  "title": "",
  "body": " Usamos o símbolo para representar o número de elementos do conjunto , isto é, a cardinalidade de .  "
},
{
  "id": "definition-2",
  "level": "2",
  "url": "section-1.html#definition-2",
  "type": "Definição",
  "number": "1.1.2",
  "title": "",
  "body": " Se todo elemento de um conjunto é também elemento de um conjunto , dizemos que é subconjunto de e escrevemos simbolicamente . Se mas existe um elemento tal que , diremos que é um subconjunto próprio de B.  "
},
{
  "id": "definition-3",
  "level": "2",
  "url": "section-1.html#definition-3",
  "type": "Definição",
  "number": "1.1.3",
  "title": "",
  "body": " Sejam e dois conjuntos. e são chamados de conjuntos iguais quando todo elemento de pertence a e, reciprocamente, todo elemento de pertence a .  Isto é, e ; portanto, podemos escrever:  "
},
{
  "id": "venn",
  "level": "2",
  "url": "section-1.html#venn",
  "type": "Definição",
  "number": "1.1.4",
  "title": "",
  "body": " Os diagramas de Venn consistem em curvas fechadas simples, tais como círculos ou ovais, desenhadas sobre um plano, de forma a simbolizar os conjuntos e permitir a representação das relações de pertinência entre conjuntos e seus elementos (por exemplo, )  Conjunto .   e relações de continência (inclusão) entre os conjuntos (por exemplo, ). Assim, duas curvas que não se tocam e estão uma no espaço interno da outra simbolizam conjuntos que possuem continência;  .     "
},
{
  "id": "definition-5",
  "level": "2",
  "url": "section-1.html#definition-5",
  "type": "Definição",
  "number": "1.1.7",
  "title": "",
  "body": " Sejam , ( ) conjuntos e o conjunto universo.   O conjunto união de e é o conjunto dos elementos que pertencem a ou a . Simbolicamente, Mais geralmente,  O conjunto interseção de e é o conjunto dos elementos que pertencem simultaneamente a e a . Simbolicamente, De forma geral,   Dizemos que e são disjuntos se . E dizemos que são disjuntos quando forem disjuntos dois a dois, ou seja,   O conjunto complementar de é o conjunto dos elementos de que não pertencem a . Simbolicamente   O conjunto diferença de e é o conjunto dos elementos que pertencem a e não pertencem a . Simbolicamente,   O produto cartesiano de por é o conjunto de pares ordenados , na qual e . Simbolicamente,   O conjunto das partes ou conjunto potência de é o conjunto de todos os subconjuntos de . Simbolicamente,    "
},
{
  "id": "distributiva",
  "level": "2",
  "url": "section-1.html#distributiva",
  "type": "Teorema",
  "number": "1.1.8",
  "title": "",
  "body": " Sejam e conjuntos; então, valem as seguintes propriedades:       "
},
{
  "id": "proof-1",
  "level": "2",
  "url": "section-1.html#proof-1",
  "type": "Demonstração",
  "number": "1.1.1",
  "title": "",
  "body": " Demonstração do item 1:   O segundo pode ser demonstrado de forma análoga.  "
},
{
  "id": "morgan",
  "level": "2",
  "url": "section-1.html#morgan",
  "type": "Teorema",
  "number": "1.1.9",
  "title": "",
  "body": " (Leis de Morgan) Sejam e conjuntos. São válidas as seguintes propriedades:        "
},
{
  "id": "proof-2",
  "level": "2",
  "url": "section-1.html#proof-2",
  "type": "Demonstração",
  "number": "1.1.2",
  "title": "",
  "body": " Vamos demonstrar a primeira destas propriedades. A outra é demonstrada de forma análoga. Usamos o fato de que , se, e somente se, e .  Seja , logo . Sendo assim, e . Portanto e , logo . Acabamos de mostrar que .  Considere , então e . Logo , e . Portanto, , sendo assim . Acabamos de mostrar que . Portanto   "
},
{
  "id": "section-note-on-proofs",
  "level": "1",
  "url": "section-note-on-proofs.html",
  "type": "Seção",
  "number": "1.2",
  "title": "Princípios Combinatórios",
  "body": " Princípios Combinatórios     Princípio Aditivo   Suponha que na disciplina de análise combinatória existem três listas de exercício. A 1ª contém 15 exercícios, a 2ª contém 18 exercícios e a 3ª contém 14 exercícios. De quantas maneiras um estudante pode escolher um exercício para resolver?   O estudante têm 15 opções para escolher um exercício da primeira lista, 18 opções para escolher um exercício da segunda lista e 14 opções para escolher um exercício da terceira lista. Portanto o estudante têm maneiras de escolher um exercício.     (O Princípio Aditivo 1ª versão) Se uma tarefa puder ser feita de maneiras e uma segunda tarefa de maneiras e se essas tarefas não puderem ser feitas ao mesmo tempo; então, existem maneiras de fazer ambas as tarefas.    (O Princípio Aditivo 2ª versão) Sejam e conjuntos finitos e disjuntos, então    Sejam e as tarefas de escolher um elemento em e em , respectivamente. Existem maneiras de escolher um elemento em e maneiras de escolher um elemento em . Pelo Princípio Aditivo 1ª versão, como as tarefas não podem ser feitas ao mesmo tempo, o número de maneiras de escolher um elemento em cada um dos conjuntos é      Abaixo, clique em \"Evaluate (Sage)\" para obter a lista com todos os elementos da união dos conjuntos e .   O comando set(['a', 'b', 'c']) transforma a lista ['a', 'b', 'c'] em conjunto, ou seja, mesmo se tiverem elementos repetidos na lista, o método set remove as repetições e retorna um conjunto. Assim é possível usar métodos específicos para conjuntos, como união, interseção, diferença e diferença simétrica.     Princípio Multiplicativo   Quantos números naturais de três algarismos distintos (na base 10) existem?   O procedimento de escolher um número satisfazendo estas hipóteses pode ser quebrado em três tarefas.  A 1ª tarefa é escolher o primeiro dígito, (da esquerda para a direita) que pode ser feito de 9 maneiras, já que o zero não pode ser escolhido.  A 2ª tarefa é escolher o segundo dígito, que pode ser feito de 9 maneiras, pois não pode ser igual a escolha do primeiro dígito.  A 3ª tarefa é escolher o terceiro dígito, que pode ser feito de 8 maneiras, pois não pode ser igual aos dois primeiros dígitos.  A resposta é .     (O Princípio Multiplicativo 1ª versão) Suponha que um procedimento pode ser quebrado em duas tarefas. Se existem maneiras de executar a primeira tarefa e maneiras de executar a segunda tarefa, depois que a primeira tarefa estiver executada, então existem maneiras de executar o procedimento.     (Princípio Multiplicativo 2ª versão) Sejam e conjuntos finitos; então,   Note que a tarefa de escolher um elemento no produto cartesiano pode ser feita escolhendo um elemento em e um elemento em , do Princípio Multiplicativo 1ª versão temos      Abaixo, clique em \"Evaluate (Sage)\" para obter a lista com todos os elementos do produto cartesiano .     A placa dos automóveis eram formadas por 3 letras (K, Y e W inclusive) seguidas por quatro algarismos. Quantas placas podiam ser formadas?   Cada letra pode ser escolhida de 26 modos e cada algarismo de 10 modos distintos. A resposta é      Sejam e dois conjuntos com e .  Quantas são as funções ?  Quantas são as funções injetoras ?     Solução 1. Devemos escolher a imagem de cada elemento de . Existem modos de escolher a imagem do \"primeiro\" elemento de , modos de escolher a imagem do \"segundo\" elemento de  até modos de escolher a imagem do \"m-ésimo\" elemento de . Pelo princípio multiplicativo, temos 2. Primeiramente, para existir solução precisamos que , pois a função precisa ser injetora. Neste caso, existem modos de escolher a imagem do \"primeiro\" elemento de , modos de escolher a imagem do \"segundo\" elemento de  até modos de escolher a imagem do \"m-ésimo\" elemento de . A resposta é      Quantos são os números naturais pares que se escrevem (na base 10) com três algarismos distintos?   Já sabemos que o número total de números naturais com três algarismos distintos é Podemos contar dentre estes, os que são ímpares, a diferença será a resposta deste problema. O último algarismo pode ser escolhido de 5 maneiras (1, 3, 5, 7 ou 9). O primeiro algarismo pode ser escolhido de 8 maneiras (não pode ser o zero, nem o que foi escolhido para o último algarismo) e o segundo algarismo pode ser escolhido de 8 maneiras (nem pode ser igual ao primeiro nem ao último). Portanto a resposta é        Princípio da Bijeção  O princípio da bijeção é uma ferramenta muito poderosa em análise combinatória. Utilizamos este princípio para contar, de maneira indireta, o número de elementos de um conjunto.   (Princípio da Bijeção)  Dados dois conjuntos finitos e e uma função bijetiva , então .   Suponha que . Como é injetiva, temos que , se , ou seja, existem pelo menos elementos distintos em . Em termos de cardinalidade, .  Por outro lado, se é uma função sobrejetiva, então existe um tal que , ou seja, existem pelo menos elementos distintos em , isto é, . Logo .     O Princípio da Bijeção é usado da seguinte forma: é comum em análise combinatória encontrarmos um problema cuja solução passa por determinar a cardinalidade de um certo conjunto, o qual denotaremos por , mas que não sabemos como calcular. Porém, conseguimos mostrar que os elementos desse conjunto estão em bijeção como os elementos de um outro conjunto , do qual obtemos êxito em calcular a cardinalidade com destreza. Assim, pelo princípio da bijeção, basta calcularmos a cardinalidade de . Portanto, o princípio da bijeção é um método de transformar um problema em que temos dificuldade de responder, em outro que possui solução mais simples.     Exercícios   Quantas palavras contendo 5 letras diferentes podem ser formadas com um alfabeto de 26 letras?   26×25×24×23×22=7893600   Para formar uma palavra, temos 26 opções para a primeira letra, 25 opções para a segunda letra, 24 opções para a terceira letra, 23 opções para a quarta letra e 22 opções para quinta e última letra. Pelo Princípio Multiplicativo a resposta é    Quantos são os gabaritos possíveis de um teste de 25 questões de múltipla-escolha, com cinco alternativas por questão?     Para cada questão, temos 5 opções. Como são 25 questões a resposta é    Quantos divisores naturais possui o número 600?     A fatoração em primos de número 600 é Os divisores naturais de 600 são os números da forma: . Portanto, temos quatro opções para o valor de , duas opções para o valor de e três opções para o valor de . Logo, a resposta é     Em uma banca há 7 exemplares iguais da revista A, 4 exemplares iguais da revista B e 15 exemplares iguais da revista C. Quantas coleções não vazias de revistas dessa banca é possível formar?     Vamos inicialmente contar de forma que seja possível obter uma coleção vazia, no final, essa possibilidade será excluída do total para obtermos a resposta.  Como exitem 7 exemplares da revista A, podemos escolher de 0 até 7 exemplares para incluir na coleção, totalizando 8 possibilidades. Como existem 4 exemplares da revista B, podemos escolher de 0 até 4 exemplares para incluir na coleção, totalizando 5 possibilidades. Por último, como existem 15 exemplares da revista C, podemos escolher de 0 até 15 exemplares para incluir na coleção, totalizando 16 possibilidades.  A única maneira de escolher os exemplares, de modo que a coleção fique vazia é escolhendo 0 exemplares de cada revista. Portanto a resposta é     Quantos números inteiros entre 1000 e 9999 são ímpares e possuem quatro dígitos distintos?      Vamos começar escolhendo o dígito das unidades. O dígito das unidades pode ser qualquer um dos elementos do conjunto: , ou seja, temos 5 opções. Agora, vamos escolher o primeiro dígito, da esquerda para a direita. O primeiro dígito nem pode ser igual ao dígito das unidades, nem pode ser zero, portanto, temos 8 opções para escolhe-lo. Para escolher o segundo dígito, temos 8 opções, pois ele nem pode ser igual ao primeiro dígito, nem igual ao último. Finalmente, para escolher o terceiro dígito temos 7 opções, pois 3 dígitos já foram escolhidos. Pelo princípio multiplicativo, a resposta é     Um restaurante apresenta um cardápio popular, onde o cliente escolhe uma salada (dentre salada verde, salada russa ou salpicão), um prato principal (bife com fritas, peixe com purê, frango com legumes ou lasanha) e uma sobremesa (salada de frutas, pudim ou doce de leite). Quantas são as possíveis refeições?      Temos 3 opções para a salada, 4 opções para a prato principal e 3 opções para a sobremesa. Portanto a resposta é     (UPE Seriado 2013 corrigido) Para efetuar saques, pagamentos, transferências e outras movimentações, os clientes do Banco Money precisam digitar uma senha numérica de sete dígitos que corresponde a uma senha formada por quatro algarismos e, em seguida, um código de acesso, também numérico, formado por três algarismos. Os clientes são orientados a não criar senhas iniciadas com zero nem códigos de acesso com algarismos repetidos, como no exemplo a seguir:   Dessa forma, quantas senhas numéricas distintas podem ser criadas pelos clientes do Banco Money?  a) 1,64 milhões b) 3,62 milhões c) 5,16 milhões d) 6,48 milhões e) 9,80 milhões   d)   O primeiro algarismo da Senha pode ser escolhido de 9 maneiras, o segundo, o terceiro e o quarto, podem ser escolhidos de 10 maneiras cada um.  O primeiro algarismo do Código de Acesso pode ser escolhido de 10 maneiras, o segundo de 9 maneiras e o terceiro de 8 maneiras. Portanto a resposta é:     (PROFMAT 2015) De um baralho comum de 52 cartas são retiradas, em sequência e sem reposição, duas cartas. De quantos modos isso pode ser feito de maneira que a primeira carta seja de ouros e a segunda carta não seja uma dama? Informação: Um baralho de 52 cartas tem 4 naipes: copas, espadas, ouros e paus. Cada naipe possui 13 cartas: A(ás), 2, 3, 4, 5, 6, 7, 8, 9, 10, J(valete), Q(dama) e K(rei). Portanto há 4 reis, 4 damas, 4 valetes, 4 ases, etc.  a) 611 b) 612 c) 624 d) 625 e) 637   b)   Vamos separar em dois casos.  1º caso: a primeira carta é uma dama de ouros. Nesse caso, a primeira carta já está determinada. Para a segunda carta sobraram 51 opções, mas não queremos que ela seja uma dama, como ainda retam 3 damas o total de opções é .  2º caso: a primeira carta não é uma dama de ouros. Nesse caso, temos 12 opções para a primeira carta, pois ela precisa ser de ouros, sem ser dama. Para a segunda carta sobraram 51 opções, mas não queremos que seja uma dama, o total de opções é .  Pelos princípios aditivo e multiplicativo a resposta é   (OBM 2004 - 2ª fase do nível 1) De quantos modos podemos sombrear quatro casas do tabuleiro de modo que em cada linha e em cada coluna exista uma única casa sombreada?      Para a primeira linha, temos 4 opções. Para a segunda linha, temos 3 opções, pois não podemos sombrear na mesma coluna que já foi sombrado na linha 1. Na terceira linha, temos 2 opções, e finalmente, na última linha temos apenas uma opções. A resposta é    (OBM 2005 - 2ª fase do nível 1) Lara tem cubos iguais e quer pintá-los de maneiras diferentes, utilizando as cores laranja ou azul para colorir cada uma de suas faces. Para que dois cubos não se confundam, não deve ser possível girar um deles de forma que fique idêntico ao outro. Por exemplo, há uma única maneira de pintar o cubo com uma face laranja e cinco azuis. Quantos cubos pintados de modos diferentes ela consegue obter?      Para 0 faces azuis e 6 laranjas, Lara só tem uma maneira de pintar os cubos.  Para 1 face azul e 5 laranjas, Lara só tem uma maneira de pintar os cubos.  Para 2 faces azuis e 4 laranjas, Lara tem duas maneiras de pintar os cubos, duas faces azuis opostas, ou duas adjacentes.  Para 3 faces azuis e 3 laranjas, Lara tem duas maneiras de pintar os cubos, três faces azuis com um vértice em comum, ou três faces azuis com uma aresta em comum, duas a duas.  Para 4 faces azuis e 2 laranjas, Lara tem duas maneiras de pintar os cubos, duas faces laranjas opostas, ou duas adjacentes.  Para 5 faces azuis e 1 laranja, Lara só tem uma maneira de pintar os cubos.  Para 6 faces azuis e 0 laranjas, Lara só tem uma maneira de pintar os cubos.  Pelo princípio aditivo, a resposta é     (FUVEST 2015 - 2ª fase) Um “alfabeto minimalista” é constituído por apenas dois símbolos, representados por e . Uma palavra de comprimento , é formada por escolhas sucessivas de um desses dois símbolos. Por exemplo, é uma palavra de comprimento e é uma palavra de comprimento . Usando esse alfabeto minimalista,   quantas palavras de comprimento menor do que podem ser formadas?  qual é o menor valor de para o qual é possível formar de palavras de tamanho menor ou igual a ?    a) b) .   item a) O número de palavras de comprimento menor que 6 é   item b) Precisamos descobrir o menor valor de para que Usando a fórmula da soma da PG, temos Como e concluímos que o menor valor de é .    "
},
{
  "id": "example-1",
  "level": "2",
  "url": "section-note-on-proofs.html#example-1",
  "type": "Exemplo",
  "number": "1.2.1",
  "title": "",
  "body": " Suponha que na disciplina de análise combinatória existem três listas de exercício. A 1ª contém 15 exercícios, a 2ª contém 18 exercícios e a 3ª contém 14 exercícios. De quantas maneiras um estudante pode escolher um exercício para resolver?   O estudante têm 15 opções para escolher um exercício da primeira lista, 18 opções para escolher um exercício da segunda lista e 14 opções para escolher um exercício da terceira lista. Portanto o estudante têm maneiras de escolher um exercício.   "
},
{
  "id": "definition-6",
  "level": "2",
  "url": "section-note-on-proofs.html#definition-6",
  "type": "Definição",
  "number": "1.2.2",
  "title": "",
  "body": " (O Princípio Aditivo 1ª versão) Se uma tarefa puder ser feita de maneiras e uma segunda tarefa de maneiras e se essas tarefas não puderem ser feitas ao mesmo tempo; então, existem maneiras de fazer ambas as tarefas.  "
},
{
  "id": "theorem-3",
  "level": "2",
  "url": "section-note-on-proofs.html#theorem-3",
  "type": "Teorema",
  "number": "1.2.3",
  "title": "",
  "body": " (O Princípio Aditivo 2ª versão) Sejam e conjuntos finitos e disjuntos, então    Sejam e as tarefas de escolher um elemento em e em , respectivamente. Existem maneiras de escolher um elemento em e maneiras de escolher um elemento em . Pelo Princípio Aditivo 1ª versão, como as tarefas não podem ser feitas ao mesmo tempo, o número de maneiras de escolher um elemento em cada um dos conjuntos é    "
},
{
  "id": "technology-1",
  "level": "2",
  "url": "section-note-on-proofs.html#technology-1",
  "type": "Tecnologia",
  "number": "1.2.4",
  "title": "",
  "body": " Abaixo, clique em \"Evaluate (Sage)\" para obter a lista com todos os elementos da união dos conjuntos e .   O comando set(['a', 'b', 'c']) transforma a lista ['a', 'b', 'c'] em conjunto, ou seja, mesmo se tiverem elementos repetidos na lista, o método set remove as repetições e retorna um conjunto. Assim é possível usar métodos específicos para conjuntos, como união, interseção, diferença e diferença simétrica.  "
},
{
  "id": "example-2",
  "level": "2",
  "url": "section-note-on-proofs.html#example-2",
  "type": "Exemplo",
  "number": "1.2.5",
  "title": "",
  "body": " Quantos números naturais de três algarismos distintos (na base 10) existem?   O procedimento de escolher um número satisfazendo estas hipóteses pode ser quebrado em três tarefas.  A 1ª tarefa é escolher o primeiro dígito, (da esquerda para a direita) que pode ser feito de 9 maneiras, já que o zero não pode ser escolhido.  A 2ª tarefa é escolher o segundo dígito, que pode ser feito de 9 maneiras, pois não pode ser igual a escolha do primeiro dígito.  A 3ª tarefa é escolher o terceiro dígito, que pode ser feito de 8 maneiras, pois não pode ser igual aos dois primeiros dígitos.  A resposta é .   "
},
{
  "id": "definition-7",
  "level": "2",
  "url": "section-note-on-proofs.html#definition-7",
  "type": "Definição",
  "number": "1.2.6",
  "title": "",
  "body": " (O Princípio Multiplicativo 1ª versão) Suponha que um procedimento pode ser quebrado em duas tarefas. Se existem maneiras de executar a primeira tarefa e maneiras de executar a segunda tarefa, depois que a primeira tarefa estiver executada, então existem maneiras de executar o procedimento.  "
},
{
  "id": "theorem-4",
  "level": "2",
  "url": "section-note-on-proofs.html#theorem-4",
  "type": "Teorema",
  "number": "1.2.7",
  "title": "",
  "body": "  (Princípio Multiplicativo 2ª versão) Sejam e conjuntos finitos; então,   Note que a tarefa de escolher um elemento no produto cartesiano pode ser feita escolhendo um elemento em e um elemento em , do Princípio Multiplicativo 1ª versão temos    "
},
{
  "id": "technology-2",
  "level": "2",
  "url": "section-note-on-proofs.html#technology-2",
  "type": "Tecnologia",
  "number": "1.2.8",
  "title": "",
  "body": " Abaixo, clique em \"Evaluate (Sage)\" para obter a lista com todos os elementos do produto cartesiano .   "
},
{
  "id": "example-3",
  "level": "2",
  "url": "section-note-on-proofs.html#example-3",
  "type": "Exemplo",
  "number": "1.2.9",
  "title": "",
  "body": " A placa dos automóveis eram formadas por 3 letras (K, Y e W inclusive) seguidas por quatro algarismos. Quantas placas podiam ser formadas?   Cada letra pode ser escolhida de 26 modos e cada algarismo de 10 modos distintos. A resposta é    "
},
{
  "id": "example-4",
  "level": "2",
  "url": "section-note-on-proofs.html#example-4",
  "type": "Exemplo",
  "number": "1.2.10",
  "title": "",
  "body": " Sejam e dois conjuntos com e .  Quantas são as funções ?  Quantas são as funções injetoras ?     Solução 1. Devemos escolher a imagem de cada elemento de . Existem modos de escolher a imagem do \"primeiro\" elemento de , modos de escolher a imagem do \"segundo\" elemento de  até modos de escolher a imagem do \"m-ésimo\" elemento de . Pelo princípio multiplicativo, temos 2. Primeiramente, para existir solução precisamos que , pois a função precisa ser injetora. Neste caso, existem modos de escolher a imagem do \"primeiro\" elemento de , modos de escolher a imagem do \"segundo\" elemento de  até modos de escolher a imagem do \"m-ésimo\" elemento de . A resposta é    "
},
{
  "id": "example-5",
  "level": "2",
  "url": "section-note-on-proofs.html#example-5",
  "type": "Exemplo",
  "number": "1.2.11",
  "title": "",
  "body": " Quantos são os números naturais pares que se escrevem (na base 10) com três algarismos distintos?   Já sabemos que o número total de números naturais com três algarismos distintos é Podemos contar dentre estes, os que são ímpares, a diferença será a resposta deste problema. O último algarismo pode ser escolhido de 5 maneiras (1, 3, 5, 7 ou 9). O primeiro algarismo pode ser escolhido de 8 maneiras (não pode ser o zero, nem o que foi escolhido para o último algarismo) e o segundo algarismo pode ser escolhido de 8 maneiras (nem pode ser igual ao primeiro nem ao último). Portanto a resposta é     "
},
{
  "id": "teo-prin-bij",
  "level": "2",
  "url": "section-note-on-proofs.html#teo-prin-bij",
  "type": "Teorema",
  "number": "1.2.12",
  "title": "(Princípio da Bijeção).",
  "body": " (Princípio da Bijeção)  Dados dois conjuntos finitos e e uma função bijetiva , então .   Suponha que . Como é injetiva, temos que , se , ou seja, existem pelo menos elementos distintos em . Em termos de cardinalidade, .  Por outro lado, se é uma função sobrejetiva, então existe um tal que , ou seja, existem pelo menos elementos distintos em , isto é, . Logo .   "
},
{
  "id": "remark-1",
  "level": "2",
  "url": "section-note-on-proofs.html#remark-1",
  "type": "Nota",
  "number": "1.2.13",
  "title": "",
  "body": " O Princípio da Bijeção é usado da seguinte forma: é comum em análise combinatória encontrarmos um problema cuja solução passa por determinar a cardinalidade de um certo conjunto, o qual denotaremos por , mas que não sabemos como calcular. Porém, conseguimos mostrar que os elementos desse conjunto estão em bijeção como os elementos de um outro conjunto , do qual obtemos êxito em calcular a cardinalidade com destreza. Assim, pelo princípio da bijeção, basta calcularmos a cardinalidade de . Portanto, o princípio da bijeção é um método de transformar um problema em que temos dificuldade de responder, em outro que possui solução mais simples.  "
},
{
  "id": "exercise-1",
  "level": "2",
  "url": "section-note-on-proofs.html#exercise-1",
  "type": "Exercício",
  "number": "1.2.4.1",
  "title": "",
  "body": " Quantas palavras contendo 5 letras diferentes podem ser formadas com um alfabeto de 26 letras?   26×25×24×23×22=7893600   Para formar uma palavra, temos 26 opções para a primeira letra, 25 opções para a segunda letra, 24 opções para a terceira letra, 23 opções para a quarta letra e 22 opções para quinta e última letra. Pelo Princípio Multiplicativo a resposta é  "
},
{
  "id": "exercise-2",
  "level": "2",
  "url": "section-note-on-proofs.html#exercise-2",
  "type": "Exercício",
  "number": "1.2.4.2",
  "title": "",
  "body": " Quantos são os gabaritos possíveis de um teste de 25 questões de múltipla-escolha, com cinco alternativas por questão?     Para cada questão, temos 5 opções. Como são 25 questões a resposta é  "
},
{
  "id": "exercise-3",
  "level": "2",
  "url": "section-note-on-proofs.html#exercise-3",
  "type": "Exercício",
  "number": "1.2.4.3",
  "title": "",
  "body": " Quantos divisores naturais possui o número 600?     A fatoração em primos de número 600 é Os divisores naturais de 600 são os números da forma: . Portanto, temos quatro opções para o valor de , duas opções para o valor de e três opções para o valor de . Logo, a resposta é   "
},
{
  "id": "exercise-4",
  "level": "2",
  "url": "section-note-on-proofs.html#exercise-4",
  "type": "Exercício",
  "number": "1.2.4.4",
  "title": "",
  "body": " Em uma banca há 7 exemplares iguais da revista A, 4 exemplares iguais da revista B e 15 exemplares iguais da revista C. Quantas coleções não vazias de revistas dessa banca é possível formar?     Vamos inicialmente contar de forma que seja possível obter uma coleção vazia, no final, essa possibilidade será excluída do total para obtermos a resposta.  Como exitem 7 exemplares da revista A, podemos escolher de 0 até 7 exemplares para incluir na coleção, totalizando 8 possibilidades. Como existem 4 exemplares da revista B, podemos escolher de 0 até 4 exemplares para incluir na coleção, totalizando 5 possibilidades. Por último, como existem 15 exemplares da revista C, podemos escolher de 0 até 15 exemplares para incluir na coleção, totalizando 16 possibilidades.  A única maneira de escolher os exemplares, de modo que a coleção fique vazia é escolhendo 0 exemplares de cada revista. Portanto a resposta é   "
},
{
  "id": "exercise-5",
  "level": "2",
  "url": "section-note-on-proofs.html#exercise-5",
  "type": "Exercício",
  "number": "1.2.4.5",
  "title": "",
  "body": " Quantos números inteiros entre 1000 e 9999 são ímpares e possuem quatro dígitos distintos?      Vamos começar escolhendo o dígito das unidades. O dígito das unidades pode ser qualquer um dos elementos do conjunto: , ou seja, temos 5 opções. Agora, vamos escolher o primeiro dígito, da esquerda para a direita. O primeiro dígito nem pode ser igual ao dígito das unidades, nem pode ser zero, portanto, temos 8 opções para escolhe-lo. Para escolher o segundo dígito, temos 8 opções, pois ele nem pode ser igual ao primeiro dígito, nem igual ao último. Finalmente, para escolher o terceiro dígito temos 7 opções, pois 3 dígitos já foram escolhidos. Pelo princípio multiplicativo, a resposta é   "
},
{
  "id": "exercise-6",
  "level": "2",
  "url": "section-note-on-proofs.html#exercise-6",
  "type": "Exercício",
  "number": "1.2.4.6",
  "title": "",
  "body": " Um restaurante apresenta um cardápio popular, onde o cliente escolhe uma salada (dentre salada verde, salada russa ou salpicão), um prato principal (bife com fritas, peixe com purê, frango com legumes ou lasanha) e uma sobremesa (salada de frutas, pudim ou doce de leite). Quantas são as possíveis refeições?      Temos 3 opções para a salada, 4 opções para a prato principal e 3 opções para a sobremesa. Portanto a resposta é   "
},
{
  "id": "exercise-7",
  "level": "2",
  "url": "section-note-on-proofs.html#exercise-7",
  "type": "Exercício",
  "number": "1.2.4.7",
  "title": "",
  "body": " (UPE Seriado 2013 corrigido) Para efetuar saques, pagamentos, transferências e outras movimentações, os clientes do Banco Money precisam digitar uma senha numérica de sete dígitos que corresponde a uma senha formada por quatro algarismos e, em seguida, um código de acesso, também numérico, formado por três algarismos. Os clientes são orientados a não criar senhas iniciadas com zero nem códigos de acesso com algarismos repetidos, como no exemplo a seguir:   Dessa forma, quantas senhas numéricas distintas podem ser criadas pelos clientes do Banco Money?  a) 1,64 milhões b) 3,62 milhões c) 5,16 milhões d) 6,48 milhões e) 9,80 milhões   d)   O primeiro algarismo da Senha pode ser escolhido de 9 maneiras, o segundo, o terceiro e o quarto, podem ser escolhidos de 10 maneiras cada um.  O primeiro algarismo do Código de Acesso pode ser escolhido de 10 maneiras, o segundo de 9 maneiras e o terceiro de 8 maneiras. Portanto a resposta é:   "
},
{
  "id": "exercise-8",
  "level": "2",
  "url": "section-note-on-proofs.html#exercise-8",
  "type": "Exercício",
  "number": "1.2.4.8",
  "title": "",
  "body": " (PROFMAT 2015) De um baralho comum de 52 cartas são retiradas, em sequência e sem reposição, duas cartas. De quantos modos isso pode ser feito de maneira que a primeira carta seja de ouros e a segunda carta não seja uma dama? Informação: Um baralho de 52 cartas tem 4 naipes: copas, espadas, ouros e paus. Cada naipe possui 13 cartas: A(ás), 2, 3, 4, 5, 6, 7, 8, 9, 10, J(valete), Q(dama) e K(rei). Portanto há 4 reis, 4 damas, 4 valetes, 4 ases, etc.  a) 611 b) 612 c) 624 d) 625 e) 637   b)   Vamos separar em dois casos.  1º caso: a primeira carta é uma dama de ouros. Nesse caso, a primeira carta já está determinada. Para a segunda carta sobraram 51 opções, mas não queremos que ela seja uma dama, como ainda retam 3 damas o total de opções é .  2º caso: a primeira carta não é uma dama de ouros. Nesse caso, temos 12 opções para a primeira carta, pois ela precisa ser de ouros, sem ser dama. Para a segunda carta sobraram 51 opções, mas não queremos que seja uma dama, o total de opções é .  Pelos princípios aditivo e multiplicativo a resposta é  "
},
{
  "id": "exercise-9",
  "level": "2",
  "url": "section-note-on-proofs.html#exercise-9",
  "type": "Exercício",
  "number": "1.2.4.9",
  "title": "",
  "body": "(OBM 2004 - 2ª fase do nível 1) De quantos modos podemos sombrear quatro casas do tabuleiro de modo que em cada linha e em cada coluna exista uma única casa sombreada?      Para a primeira linha, temos 4 opções. Para a segunda linha, temos 3 opções, pois não podemos sombrear na mesma coluna que já foi sombrado na linha 1. Na terceira linha, temos 2 opções, e finalmente, na última linha temos apenas uma opções. A resposta é   "
},
{
  "id": "exercise-10",
  "level": "2",
  "url": "section-note-on-proofs.html#exercise-10",
  "type": "Exercício",
  "number": "1.2.4.10",
  "title": "",
  "body": "(OBM 2005 - 2ª fase do nível 1) Lara tem cubos iguais e quer pintá-los de maneiras diferentes, utilizando as cores laranja ou azul para colorir cada uma de suas faces. Para que dois cubos não se confundam, não deve ser possível girar um deles de forma que fique idêntico ao outro. Por exemplo, há uma única maneira de pintar o cubo com uma face laranja e cinco azuis. Quantos cubos pintados de modos diferentes ela consegue obter?      Para 0 faces azuis e 6 laranjas, Lara só tem uma maneira de pintar os cubos.  Para 1 face azul e 5 laranjas, Lara só tem uma maneira de pintar os cubos.  Para 2 faces azuis e 4 laranjas, Lara tem duas maneiras de pintar os cubos, duas faces azuis opostas, ou duas adjacentes.  Para 3 faces azuis e 3 laranjas, Lara tem duas maneiras de pintar os cubos, três faces azuis com um vértice em comum, ou três faces azuis com uma aresta em comum, duas a duas.  Para 4 faces azuis e 2 laranjas, Lara tem duas maneiras de pintar os cubos, duas faces laranjas opostas, ou duas adjacentes.  Para 5 faces azuis e 1 laranja, Lara só tem uma maneira de pintar os cubos.  Para 6 faces azuis e 0 laranjas, Lara só tem uma maneira de pintar os cubos.  Pelo princípio aditivo, a resposta é  "
},
{
  "id": "exercise-11",
  "level": "2",
  "url": "section-note-on-proofs.html#exercise-11",
  "type": "Exercício",
  "number": "1.2.4.11",
  "title": "",
  "body": " (FUVEST 2015 - 2ª fase) Um “alfabeto minimalista” é constituído por apenas dois símbolos, representados por e . Uma palavra de comprimento , é formada por escolhas sucessivas de um desses dois símbolos. Por exemplo, é uma palavra de comprimento e é uma palavra de comprimento . Usando esse alfabeto minimalista,   quantas palavras de comprimento menor do que podem ser formadas?  qual é o menor valor de para o qual é possível formar de palavras de tamanho menor ou igual a ?    a) b) .   item a) O número de palavras de comprimento menor que 6 é   item b) Precisamos descobrir o menor valor de para que Usando a fórmula da soma da PG, temos Como e concluímos que o menor valor de é .  "
},
{
  "id": "section-permutacoes-simples",
  "level": "1",
  "url": "section-permutacoes-simples.html",
  "type": "Seção",
  "number": "1.3",
  "title": "Permutações Simples",
  "body": " Permutações Simples    Nota Histórica  Al-Khalil (717-786), um matemático e criptógrafo árabe, escreveu o Livro de Mensagens Criptográficas. Ele contém o primeiro uso de permutações e combinações, para listar todas as palavras árabes possíveis com e sem vogais.  A regra para determinar o número de permutações de objetos era conhecida na cultura indiana por volta de 1150. O Līlāvatī, do matemático indiano Bhāskarācārya (Bhaskara II), contém uma passagem que se traduz em:  O produto da multiplicação da série aritmética começando e aumentando pela unidade e continuando até o número de casas, serão as variações do número com algarismos específicos.   Fonte: en.wikipedia.org\/wiki\/Permutation .    Permutações Simples   Permutar uma lista de objetos é mudar a ordem em que eles estavam. O número de permutações de objetos distintos , é o número total de maneiras de ordenar estes objetos. Para descrever o número de permutações de objetos distintos, usamos as notações:     Todas as permutações dos elementos :   Observe que é uma das permutações possíveis, pois essa é uma das formas de ordenar os elementos . Portanto,    Abaixo, clique em \"Evaluate (Sage)\" para obter a lista com todas as permutações dos elementos: 1, 2, 3, 4.   Os números podem ser alterados, ao executar o código, a lista das permutações será atualizada.     O número de permutações de objetos distintos é    Pelo princípio multiplicativo, temos modos de escolher o elemento que ocupará o primeiro lugar, uma vez tomada essa decisão, teremos modos de escolher o elemento que ocupará o segundo lugar, e assim por diante, até que haja apenas um único modo de escolher o elemento que ocupará o último lugar. Portanto    O fatorial de um número natural é denotado por e consiste na multiplicação desse número por seus antecessores, com exceção do zero. Ou seja    Para calcular no Sage, usamos a função fatorial: . Definimos apenas para abreviar, confira o cálculo de apertando no botão \"Evaluate (Sage)\".   Uma vez definida a função , podemos combiná-la com outras operações já definidas no Sage. Veja na próxima célula o cálculo de :     Um anagrama é uma palavra ou expressão elaborada usando exatamente as mesmas letras que a palavra ou expressão original. Por exemplo, a palavra ROMA é um anagrama da palavra AMOR e vice-versa.  Nos dicionários, um anagrama é a transposição das letras de uma palavra (ou frase) para formar outra palavra (ou frase). Observe que pela definição do dicionário, só seria contado os casos em que a permutação das letras formassem outra palavra (ou frase). No entanto, em matemática, qualquer permutação das letras de uma palavra é considerado como anagrama.    Quantos são os anagramas da palavra SAGE?   A palavra SAGE possui quatro letras distintas, logo, o número de anagramas da palavra SAGE é      Quantos são os anagramas da palavra XADREZ que começam e terminam por consoante?   A consoante inicial pode ser escolhida de maneiras, uma vez feita essa escolha, a consoante final pode ser escolhida de maneiras. Restam quatro letras que podem ser ordenadas de maneiras. Pelo Princípio Multiplicativo, a resposta é       De quantos modos podemos dividir pessoas em três grupos de quatro pessoas cada?   Podemos ordenar as pessoas em uma fila. O primeiro grupo será formado pelas primeiras pessoas, o segundo grupo, pelas pessoas seguintes e o terceiro grupo pelas quatro últimas pessoas. O número de maneiras de ordenar as pessoas é . Dessa forma, cada grupo esta sendo contado vezes, por exemplo, representam o mesmo grupo. Logo, precisamos dividir por , já que são grupos.  Por fim, note que a ordem dos grupos não importa, como são maneiras de ordenar os grupos, dividindo por , obtemos a resposta       Permutam-se de todos os modos possíveis os algarismos e escrevem-se os números assim formados em ordem crescente.   Que lugar ocupa o número ?  Qual o número que ocupa o lugar?    item a.  Como os números foram escritos em ordem crescente, os que começam com e aparecem antes do número . Existem números que começam com cada um destes algarismos, ou seja números.  Existem números que começam com , e a mesma quantidade que começam com , ou seja números.  Existem números que começam com .  O próximo número já que o que queremos. Portanto, a resposta é  item b.  Começando com e temos um total de números. Se considerarmos também, todos que começam com , teremos mais números, ultrapassando a posição .  Já sabemos que o número que ocupa a posição começa com o algarismo e que o primeiro número com o algarismo ocupa a posição . Precisamos encontrar o número que começa com o algarismo e está na posição , dentre estes números que começam com .  Começando com e , são números. Dessa forma, o número seguinte está na posição , dentre os que começam com o algarismo . Assim, o número está na posição e o número está na posição .  (Usando o Sage)  Quando calculamos todas as permutações no Sage, a saída é exibida em ordem crescente. Como as listas no Sage começam a ser contadas a partir do zero , podemos consultar a permutação de posição 500 com o comando abaixo:      Implementação em Sage para verificar respostas de problemas como o .  No campo abaixo, digite um número para obter a posição dele, numa permutação dos dígitos do número informado.      Escolha os dígitos que serão permutados e escreva como um número, em seguida, escolha a posição para obter o número que a ocupa.       Um palíndromo (ou capicua ) é uma sequência de caracteres que pode ser lido da esquerda para a direita ou da direita para a esquerda, mantendo seu sentido. Esses caracteres podem ser número, palavra ou frase.  Por exemplo, , \"osso\" e \"Socorram-me, subi no ônibus em Marrocos\", são palíndromos.     Quantos números palíndromos de algarismos há em nosso sistema de numeração?  Com os algarismos , quantos palíndromos de algarismos conseguimos formar?    item a.  Para formar um número palíndromo com três algarismos, quando o primeiro algarismo for escolhido, o terceiro já está definido como sendo igual ao primeiro. Depois desta escolha, resta apenas o segundo algarismo para ser definido.  Para escolher o primeiro algarismo temos opções, pois o zero não é permitido, para o segundo algarismo, temos opções. Portanto, a resposta é   item b.  Observe que, usando ou algarismos distintos não é possível formar um palíndromo de algarismos.  Usando apenas um dos cinco algarismos distintos, só temos um número que é um palíndromo, por exemplo . Como temos possibilidades de escolha de algarismo, existem palíndromos deste tipo.  Usando dois algarismos distintos, só temos palíndromos, por exemplo e . Com os cinco algarismos disponíveis, podemos escolher dois deles de maneiras, pois o primeiro pode ser escolhido de maneiras e o segundo de maneiras, como a ordem da escolha não importa, precisamos dividir por . Portanto, neste caso temos palíndromos. Pelo Princípio Aditivo, a resposta é      O palíndromo do Chico.   Quando Chico era nosso homem na Itália toda semana a gente publicava matéria dele. Era um correspondente aplicado. Me lembro de umas fotos que mandou, posando ao lado de nosso ancestral, o temível Pasquino.  Agora... Liguei para ele pedindo para escrever alguma coisa para o primeiro número do Pasquim paulista. \"Minha agenda estourou. Tô enlouquecido, ensaiando o show com Bethânia para o dia 2 em Paris.\" \"Pô, Chico, tremenda sacanagem nos deixar na mão!\" \"Fazer matéria nem pensar, mas se vocês quiserem um palíndromo...\" Palíndromo, como talvez só o Houaiss saiba, é uma frase que significa literalmente o mesmo, seja lida de cá pra lá, como de lá pra cá, da direita para a esquerda. \"Levei 5 horas fazendo\", disse Chico. \"Insônia.\" Era pegar ou largar. Peguei. E, outra vez por acaso, eis o Pasquim inovando ao publicar o primeiro palíndromo ilustrado. Por outro Chico. (Jaguar)  Pasquim São Paulo Ano XVIII número 13 a 10 de julho de 1986  O palíndromo que Chico Buarque fez: \"Até reagan sibarita tira bisnaga ereta\"   Fonte: http:\/\/www.chicobuarque.com.br\/sanatorio\/palindromo.htm .     Exercícios   Quantos são os anagramas da palavra SINGULAR:   Que começam por consoante e terminam por vogal?  Que têm as letras S,I,N juntas em qualquer ordem?  Que têm as vogais e as consoantes intercaladas?    a) 5×3×6!=10800, b) , c) 0    Temos 5 consoantes e 3 vogais, então são 5 opções para escolher a primeira letra e 3 opções para escolher a última letra. Depois de fazer essas escolhas sobram 6 letras que podem ocupar as outras 6 posições. Portanto a resposta é  Temos modos de ordenar as letras S,I,N. Considerando cada permutação das letras S,I,N como um elemento, ficamos com 6 elementos no total para serem ordenados, o que pode ser feito de modos. A resposta é  Como temos 5 consoantes e 3 vogais, não é possível deixar as vogais e as consoantes intercaladas, portanto a resposta é     Com relação aos anagramas da palavra CADERNO:   Quantos são ao todo?  Quantos começam por C?  Quantos começam por C e terminam com O?  Quantos começam por vogal?  Quantos têm as vogais juntas?  Quantos têm as vogais juntas em ordem alfabética?  Quantos têm as vogais em ordem alfabética, mesmo não estando juntas?  Quantos têm as vogais e as consoantes intercaladas?                De quantos modos é possível fazer uma fila com pessoas de modo que três determinadas pessoas dessas não fiquem juntas?   457228800   O número total de modos de ordenar as pessoas é . Vamos contar o número de maneiras de ordenar as pessoas de modo que determinadas pessoas fiquem juntas, para subtrair de e obter a resposta.  Temos modos de ordenar as pessoas que vão ficar juntas. Considerando essas pessoas como apenas um elemento, ficamos com elementos no total e podemos ordenar esses elementos de maneiras.  Juntando as ideias obtemos a resposta:    Quantos dados diferentes podemos formar gravando números de a sobre as faces indistinguíveis de um cubo   se os número podem ser gravados em qualquer ordem?  se o valor da soma das faces opostas precisam ser iguais a ?    a. b.     A princípio, temos maneiras de gravar os números nas faces dos cubos. Dessa forma ficaremos com vários cubos repetidos, pois existem várias maneiras de posicionar um cubo, observe que figura que os dois cubos são iguais.   Dois dados equivalentes.    Para posicionar um cubo, temos 6 maneiras de escolher qual a face que ficará para cima, uma vez feita essa escolha, sobram 4 faces para escolher uma que ficará de frente. Portanto existem maneiras de posicionar um cubo. A resposta é  Podemos escolher a face do 1 de 6 maneiras, a face do 6 estará automaticamente determinada. Uma vez que as faces do 1 e do 6 estão definidas, temos 4 maneiras de escolher a face do 2. A face do 5 estará automaticamente definida. Agora temos duas maneiras de escolher a face do 3. A face do 4 também estará automaticamente determinada.  Assim como no item a. precisamos dividir pelo número de maneiras de posicionar os dados. Fazendo a divisão, obtemos o resultado      (UPE 2013 tradicional) Oito amigos entraram em um restaurante para jantar e sentaram-se numa mesa retangular, com oito lugares, como mostra a figura a seguir:   Dentre todas as configurações possíveis, quantas são as possibilidades de dois desses amigos, Amaro e Danilo, ficarem sentados em frente um do outro?  a) 1440 b) 1920 c) 2016 d) 4032 e) 5760   e)   Uma vez que Amaro escolha um lugar, Danilo já está com seu lugar definido. Amaro pode escolher um lugar de 8 modos. Depois que Amaro e Danilo definiram seus lugares, os outros 6 amigos podem escolher quaisquer lugares, portanto restam possibilidades. A resposta é     (UPE 2013 tradicional) Seguindo a etiqueta japonesa, um restaurante tipicamente oriental solicita aos seus clientes que retirem seus calçados na entrada do estabelecimento. Em certa noite, 6 pares de sapatos e 2 pares de sandálias, todos distintos, estavam dispostos na entrada do restaurante, em duas fileiras com quatro pares de calçados cada uma. Se esses pares de calçados forem organizados nessas fileiras de tal forma que as sandálias devam ocupar as extremidades da primeira fila, de quantas formas diferentes podem-se organizar esses calçados nas duas fileiras?  a)  b)  c)  d)  e)   b)   Como as sandálias devem ocupar as extremidades da primeira fileira, temos duas maneiras de escolher onde colocá-las. Uma vez escolhido os lugares das sandálias, temos 6 pares de sapatos e 6 lugares, portanto a resposta é     Considere um tabuleiro de xadrez .   De quantos modos podemos colocar 8 torres iguais, de modo que haja uma única em cada linha e em cada coluna?  De quantos modos podemos colocar 8 torres diferentes, de modo que haja uma única em cada linha e em cada coluna?    a) b)    Na primeira linha, temos 8 opções para colocar a primeira torre, na segunda linha temos opções para colocar a segunda torre, pois ela não pode ficar na mesma coluna que a primeira torre. Seguindo esse raciocínio, na -ésima linha, temos opções para colocar a -ésima torre. Logo, a resposta é  Seguindo com a ideia do item a, temos modos de escolher os lugares onde as torres podem ocupar, depois disso podemos ordenar as torres de modos, portanto a resposta é      Um grupo formado por quatro rapazes e uma senhorita vão visitar uma exposição de arte. À entrada, passa uma pessoa de cada vez pela porta da sala de exposições. Um dos rapazes dando-se ares de perfeito cavalheiro, não passa pela porta sem que a senhorita já o tenha feito. Qual o número de modos, isto é, de quantas maneiras diferentes eles podem entrar no recinto?     Vamos separar em quatro casos.  1º caso: a senhorita será a primeira pessoa a entrar. Nesse caso, os quatro rapazes podem entrar em qualquer ordem, ou seja, possibilidades.  2º caso: a senhorita será a segunda pessoa a entrar. Nesse caso temos 3 possibilidades de escolha o primeiro rapaz, depois temos possíveis ordem para os outros rapazes.  3º caso: a senhorita será a terceira pessoa a entrar. Nesse caso temos possibilidades para os dois primeiros rapazes e ordens possíveis para os dois últimos rapazes.  4º caso: a senhorita será a quarta pessoa a entrar. Nesse caso temos ordens para os três primeiros rapazes.  Portanto, pelo Princípio Aditivo, a resposta é    (UPE 2011 seriado) Uma bibliotecária tenta organizar 4 livros diferentes de matemática, 4 livros diferentes de geografia e 2 livros diferentes de inglês em uma estante. O número de modos distintos de organização deve ser de tal forma que os livros da mesma disciplina estejam sempre juntos e que os de geografia apareçam sempre na mesma ordem. Assim, o número de possibilidades dessa arrumação é de  a)  b)  c)  d)  e)   d)   O número de modos de ordenar as disciplinas é . Os livros de matemática podem ser ordenados de maneiras e os livros de inglês podem ser ordenados de maneiras. Dessa forma, o número de possibilidades dessa arrumação é    Quantas são as permutações das letras A, B, C, D, E, F, G, H, nas quais, a letra B está situada à direita da letra A e à esquerda da letra F, embora, não necessariamente, em lugares consecutivos?     Inicialmente contamos o número de maneiras de ordenar as oito letras que é . Dividindo esse valor pelo número de maneiras de ordenar as letras B, A, F, obtemos o resultado, pois em apenas uma das formas de ordenar as três letras teremos a ordem exigida. A resposta é    (UFPE - UFRPE 2003) Seja a soma dos números formados pelas permutações dos algarismos e . Indique a soma dos dígitos de .     Note que cada número formado possui 5 dígitos. Podemos contar o valor de da seguinte maneira.  Sejam os números formados pelos algarismos disponíveis. Como são 5 algarismos, temos um total de números, então Observe que para cada , pois, cada algarismo estará presente em dos , para cada fixado.  Logo,    Observe que para cada permutação existe exatamente outra que a soma delas é . Por exemplo:  Podemos organizar as permutações de duas em duas, de modo que a soma de cada par seja . Portanto, o valor da soma de todas as permutações é . Somando os dígitos chegamos na resposta que é .  Podemos usar o código abaixo para conferir esta resposta e verificar a resposta de deste mesmo problema, para outros dígitos.     (UFF-RJ) Um garçom anotou os pedidos de três fregueses. Cada freguês pediu um prato principal, um acompanhamento e uma bebida. Posteriormente, o garçom não sabia identificar o autor de cada pedido. Lembrava-se, porém, de que não havia qualquer coincidência entre os pedidos: os pratos principais eram diferentes entre si, o mesmo ocorrendo com os acompanhamentos e as bebidas. O número de maneiras diferentes que o garçom poderia distribuir os pedidos entre os três fregueses é:  a)  b)  c)  d)  e)   a)   O garçom poderia distribuir os pratos principais de maneiras, os acompanhamentos também poderiam ser distribuídos de , assim como as bebidas que também poderiam ser distribuídas de maneiras. Portanto a resposta é     (OPEMAT 2019 - nível 1) Em uma viagem a Recife, o grupo formado pelos números 1, 2, 3, 4 e 5, resolveu tirar fotos próximo ao monumento do Parque das Esculturas do artista Pernambucano Francisco Brennand. Indecisos pela escolha da disposição na foto, eles concordaram em tirar várias fotos em todas as disposições possíveis, permutando os lugares entre si conforme as imagens abaixo:    Por fim, eles colocaram as fotos em ordem crescente de numeração formando a seguinte lista:   Julgue as afirmações a seguir atribuindo (V) se a afirmação for verdadeira e (F) se a afirmação for falsa.   (V) (F) Quem ocupa a última posição da vigésima foto é o 3.  (V) (F) A foto em que os números aparecem na disposição 32541, ocupa o 59º lugar desta lista.  (V) (F) A quantidade de fotos em que os números 1 e 2 aparecem separados é 96.  (V) (F) A quantidade de fotos em que a disposição dos números é maior do que a foto com disposição 25413 é 73.  (V) (F) A soma de todos os números de cinco dígitos representados pelas fotos é 3999960.    A) V, B) F, C) F, D) V, E) V   (OBM 2008 - 2ª fase do nível 3) Quantas permutações de há com a propriedade de que, para todo , os números que aparecem entre e (onde pode aparecer tanto antes como depois de ) são todos menores do que ? Por exemplo, é uma permutação com esta propriedade.   256  Da propriedade, decorre que só pode aparecer ou como primeiro ou como último elemento da permutação e que os elementos de a formam uma permutação com a mesma propriedade. Assim, o número pedido é o dobro do número de permutações de com a mesma propriedade. Da mesma forma, o número de permutações de com a propriedade é o dobro do número de permutações de com a propriedade. Repetindo o raciocínio, concluímos que o número pedido é portanto .  (UPE - SSA 2 - 2014) Depois de explicar à turma do ano o que é um número palíndromo ou capicua, o professor Barreto pediu que os alunos se organizassem em duplas e entregou algumas cartelas numeradas para que formassem capicuas de três, quatro e cinco algarismos, fazendo o registro de cada resultado possível e podendo reutilizar as cartelas.  Números palíndromos ou capicuas são aqueles que são iguais quando lidos nos dois sentidos, isto é, da direita para a esquerda e da esquerda para a direita. Exemplo: ; ; .  A dupla Ian e Júlia recebeu as cartelas seguintes:    No máximo, quantos capicuas de quatro algarismos essa dupla conseguiu formar?  a)  b)  c)  d)  e)   b)   Para uma melhor visualização, ordenando as cartelas disponíveis, ficamos com os seguintes dígitos: .  Para as capicuas com os quatro algarismos iguais, temos apenas e .  Para as capicuas com dois algarismos distintos, nem podemos usar o 5, nem o 8, pois só temos uma cartela de cada. Sobraram os algarismos que estão disponíveis em pelo menos duas cartelas. Assim, para o primeiro algarismo, temos 7 opções e para o segundo algarismo, temos 6 opções. Para cada escolha dos dois primeiros algarismos, o terceiro algarismo será igual ao segundo e o quarto será igual ao primeiro. Portando, temos capicuas com dois algarismos distintos.  Observe que usando três ou mais algarismos distintos, não é possível formar uma capicua de 4 algarismos. A resposta é    "
},
{
  "id": "p-124",
  "level": "2",
  "url": "section-permutacoes-simples.html#p-124",
  "type": "Parágrafo (with a defined term)",
  "number": "",
  "title": "",
  "body": "en.wikipedia.org\/wiki\/Permutation "
},
{
  "id": "def-permutacao",
  "level": "2",
  "url": "section-permutacoes-simples.html#def-permutacao",
  "type": "Definição",
  "number": "1.3.1",
  "title": "",
  "body": " Permutar uma lista de objetos é mudar a ordem em que eles estavam. O número de permutações de objetos distintos , é o número total de maneiras de ordenar estes objetos. Para descrever o número de permutações de objetos distintos, usamos as notações:   "
},
{
  "id": "example-6",
  "level": "2",
  "url": "section-permutacoes-simples.html#example-6",
  "type": "Exemplo",
  "number": "1.3.2",
  "title": "",
  "body": " Todas as permutações dos elementos :   Observe que é uma das permutações possíveis, pois essa é uma das formas de ordenar os elementos . Portanto,  "
},
{
  "id": "technology-3",
  "level": "2",
  "url": "section-permutacoes-simples.html#technology-3",
  "type": "Tecnologia",
  "number": "1.3.3",
  "title": "",
  "body": " Abaixo, clique em \"Evaluate (Sage)\" para obter a lista com todas as permutações dos elementos: 1, 2, 3, 4.   Os números podem ser alterados, ao executar o código, a lista das permutações será atualizada.  "
},
{
  "id": "teo-permutacao",
  "level": "2",
  "url": "section-permutacoes-simples.html#teo-permutacao",
  "type": "Teorema",
  "number": "1.3.4",
  "title": "",
  "body": " O número de permutações de objetos distintos é    Pelo princípio multiplicativo, temos modos de escolher o elemento que ocupará o primeiro lugar, uma vez tomada essa decisão, teremos modos de escolher o elemento que ocupará o segundo lugar, e assim por diante, até que haja apenas um único modo de escolher o elemento que ocupará o último lugar. Portanto   "
},
{
  "id": "remark-2",
  "level": "2",
  "url": "section-permutacoes-simples.html#remark-2",
  "type": "Nota",
  "number": "1.3.5",
  "title": "",
  "body": "O fatorial de um número natural é denotado por e consiste na multiplicação desse número por seus antecessores, com exceção do zero. Ou seja  "
},
{
  "id": "tec-permutacao",
  "level": "2",
  "url": "section-permutacoes-simples.html#tec-permutacao",
  "type": "Tecnologia",
  "number": "1.3.6",
  "title": "",
  "body": " Para calcular no Sage, usamos a função fatorial: . Definimos apenas para abreviar, confira o cálculo de apertando no botão \"Evaluate (Sage)\".   Uma vez definida a função , podemos combiná-la com outras operações já definidas no Sage. Veja na próxima célula o cálculo de :   "
},
{
  "id": "definition-9",
  "level": "2",
  "url": "section-permutacoes-simples.html#definition-9",
  "type": "Definição",
  "number": "1.3.7",
  "title": "",
  "body": " Um anagrama é uma palavra ou expressão elaborada usando exatamente as mesmas letras que a palavra ou expressão original. Por exemplo, a palavra ROMA é um anagrama da palavra AMOR e vice-versa.  Nos dicionários, um anagrama é a transposição das letras de uma palavra (ou frase) para formar outra palavra (ou frase). Observe que pela definição do dicionário, só seria contado os casos em que a permutação das letras formassem outra palavra (ou frase). No entanto, em matemática, qualquer permutação das letras de uma palavra é considerado como anagrama.  "
},
{
  "id": "example-7",
  "level": "2",
  "url": "section-permutacoes-simples.html#example-7",
  "type": "Exemplo",
  "number": "1.3.8",
  "title": "",
  "body": " Quantos são os anagramas da palavra SAGE?   A palavra SAGE possui quatro letras distintas, logo, o número de anagramas da palavra SAGE é    "
},
{
  "id": "example-8",
  "level": "2",
  "url": "section-permutacoes-simples.html#example-8",
  "type": "Exemplo",
  "number": "1.3.9",
  "title": "",
  "body": " Quantos são os anagramas da palavra XADREZ que começam e terminam por consoante?   A consoante inicial pode ser escolhida de maneiras, uma vez feita essa escolha, a consoante final pode ser escolhida de maneiras. Restam quatro letras que podem ser ordenadas de maneiras. Pelo Princípio Multiplicativo, a resposta é     "
},
{
  "id": "example-9",
  "level": "2",
  "url": "section-permutacoes-simples.html#example-9",
  "type": "Exemplo",
  "number": "1.3.10",
  "title": "",
  "body": " De quantos modos podemos dividir pessoas em três grupos de quatro pessoas cada?   Podemos ordenar as pessoas em uma fila. O primeiro grupo será formado pelas primeiras pessoas, o segundo grupo, pelas pessoas seguintes e o terceiro grupo pelas quatro últimas pessoas. O número de maneiras de ordenar as pessoas é . Dessa forma, cada grupo esta sendo contado vezes, por exemplo, representam o mesmo grupo. Logo, precisamos dividir por , já que são grupos.  Por fim, note que a ordem dos grupos não importa, como são maneiras de ordenar os grupos, dividindo por , obtemos a resposta     "
},
{
  "id": "exem-permutacao-pos",
  "level": "2",
  "url": "section-permutacoes-simples.html#exem-permutacao-pos",
  "type": "Exemplo",
  "number": "1.3.11",
  "title": "",
  "body": " Permutam-se de todos os modos possíveis os algarismos e escrevem-se os números assim formados em ordem crescente.   Que lugar ocupa o número ?  Qual o número que ocupa o lugar?    item a.  Como os números foram escritos em ordem crescente, os que começam com e aparecem antes do número . Existem números que começam com cada um destes algarismos, ou seja números.  Existem números que começam com , e a mesma quantidade que começam com , ou seja números.  Existem números que começam com .  O próximo número já que o que queremos. Portanto, a resposta é  item b.  Começando com e temos um total de números. Se considerarmos também, todos que começam com , teremos mais números, ultrapassando a posição .  Já sabemos que o número que ocupa a posição começa com o algarismo e que o primeiro número com o algarismo ocupa a posição . Precisamos encontrar o número que começa com o algarismo e está na posição , dentre estes números que começam com .  Começando com e , são números. Dessa forma, o número seguinte está na posição , dentre os que começam com o algarismo . Assim, o número está na posição e o número está na posição .  (Usando o Sage)  Quando calculamos todas as permutações no Sage, a saída é exibida em ordem crescente. Como as listas no Sage começam a ser contadas a partir do zero , podemos consultar a permutação de posição 500 com o comando abaixo:    "
},
{
  "id": "technology-5",
  "level": "2",
  "url": "section-permutacoes-simples.html#technology-5",
  "type": "Tecnologia",
  "number": "1.3.12",
  "title": "",
  "body": " Implementação em Sage para verificar respostas de problemas como o .  No campo abaixo, digite um número para obter a posição dele, numa permutação dos dígitos do número informado.      Escolha os dígitos que serão permutados e escreva como um número, em seguida, escolha a posição para obter o número que a ocupa.     "
},
{
  "id": "definition-10",
  "level": "2",
  "url": "section-permutacoes-simples.html#definition-10",
  "type": "Definição",
  "number": "1.3.15",
  "title": "",
  "body": " Um palíndromo (ou capicua ) é uma sequência de caracteres que pode ser lido da esquerda para a direita ou da direita para a esquerda, mantendo seu sentido. Esses caracteres podem ser número, palavra ou frase.  Por exemplo, , \"osso\" e \"Socorram-me, subi no ônibus em Marrocos\", são palíndromos.  "
},
{
  "id": "example-11",
  "level": "2",
  "url": "section-permutacoes-simples.html#example-11",
  "type": "Exemplo",
  "number": "1.3.16",
  "title": "",
  "body": "  Quantos números palíndromos de algarismos há em nosso sistema de numeração?  Com os algarismos , quantos palíndromos de algarismos conseguimos formar?    item a.  Para formar um número palíndromo com três algarismos, quando o primeiro algarismo for escolhido, o terceiro já está definido como sendo igual ao primeiro. Depois desta escolha, resta apenas o segundo algarismo para ser definido.  Para escolher o primeiro algarismo temos opções, pois o zero não é permitido, para o segundo algarismo, temos opções. Portanto, a resposta é   item b.  Observe que, usando ou algarismos distintos não é possível formar um palíndromo de algarismos.  Usando apenas um dos cinco algarismos distintos, só temos um número que é um palíndromo, por exemplo . Como temos possibilidades de escolha de algarismo, existem palíndromos deste tipo.  Usando dois algarismos distintos, só temos palíndromos, por exemplo e . Com os cinco algarismos disponíveis, podemos escolher dois deles de maneiras, pois o primeiro pode ser escolhido de maneiras e o segundo de maneiras, como a ordem da escolha não importa, precisamos dividir por . Portanto, neste caso temos palíndromos. Pelo Princípio Aditivo, a resposta é    "
},
{
  "id": "fact-1",
  "level": "2",
  "url": "section-permutacoes-simples.html#fact-1",
  "type": "Fato",
  "number": "1.3.17",
  "title": "",
  "body": " O palíndromo do Chico.   Quando Chico era nosso homem na Itália toda semana a gente publicava matéria dele. Era um correspondente aplicado. Me lembro de umas fotos que mandou, posando ao lado de nosso ancestral, o temível Pasquino.  Agora... Liguei para ele pedindo para escrever alguma coisa para o primeiro número do Pasquim paulista. \"Minha agenda estourou. Tô enlouquecido, ensaiando o show com Bethânia para o dia 2 em Paris.\" \"Pô, Chico, tremenda sacanagem nos deixar na mão!\" \"Fazer matéria nem pensar, mas se vocês quiserem um palíndromo...\" Palíndromo, como talvez só o Houaiss saiba, é uma frase que significa literalmente o mesmo, seja lida de cá pra lá, como de lá pra cá, da direita para a esquerda. \"Levei 5 horas fazendo\", disse Chico. \"Insônia.\" Era pegar ou largar. Peguei. E, outra vez por acaso, eis o Pasquim inovando ao publicar o primeiro palíndromo ilustrado. Por outro Chico. (Jaguar)  Pasquim São Paulo Ano XVIII número 13 a 10 de julho de 1986  O palíndromo que Chico Buarque fez: \"Até reagan sibarita tira bisnaga ereta\"   Fonte: http:\/\/www.chicobuarque.com.br\/sanatorio\/palindromo.htm .  "
},
{
  "id": "exercise-12",
  "level": "2",
  "url": "section-permutacoes-simples.html#exercise-12",
  "type": "Exercício",
  "number": "1.3.3.1",
  "title": "",
  "body": " Quantos são os anagramas da palavra SINGULAR:   Que começam por consoante e terminam por vogal?  Que têm as letras S,I,N juntas em qualquer ordem?  Que têm as vogais e as consoantes intercaladas?    a) 5×3×6!=10800, b) , c) 0    Temos 5 consoantes e 3 vogais, então são 5 opções para escolher a primeira letra e 3 opções para escolher a última letra. Depois de fazer essas escolhas sobram 6 letras que podem ocupar as outras 6 posições. Portanto a resposta é  Temos modos de ordenar as letras S,I,N. Considerando cada permutação das letras S,I,N como um elemento, ficamos com 6 elementos no total para serem ordenados, o que pode ser feito de modos. A resposta é  Como temos 5 consoantes e 3 vogais, não é possível deixar as vogais e as consoantes intercaladas, portanto a resposta é   "
},
{
  "id": "exercise-13",
  "level": "2",
  "url": "section-permutacoes-simples.html#exercise-13",
  "type": "Exercício",
  "number": "1.3.3.2",
  "title": "",
  "body": " Com relação aos anagramas da palavra CADERNO:   Quantos são ao todo?  Quantos começam por C?  Quantos começam por C e terminam com O?  Quantos começam por vogal?  Quantos têm as vogais juntas?  Quantos têm as vogais juntas em ordem alfabética?  Quantos têm as vogais em ordem alfabética, mesmo não estando juntas?  Quantos têm as vogais e as consoantes intercaladas?              "
},
{
  "id": "exercise-14",
  "level": "2",
  "url": "section-permutacoes-simples.html#exercise-14",
  "type": "Exercício",
  "number": "1.3.3.3",
  "title": "",
  "body": " De quantos modos é possível fazer uma fila com pessoas de modo que três determinadas pessoas dessas não fiquem juntas?   457228800   O número total de modos de ordenar as pessoas é . Vamos contar o número de maneiras de ordenar as pessoas de modo que determinadas pessoas fiquem juntas, para subtrair de e obter a resposta.  Temos modos de ordenar as pessoas que vão ficar juntas. Considerando essas pessoas como apenas um elemento, ficamos com elementos no total e podemos ordenar esses elementos de maneiras.  Juntando as ideias obtemos a resposta:  "
},
{
  "id": "exercise-15",
  "level": "2",
  "url": "section-permutacoes-simples.html#exercise-15",
  "type": "Exercício",
  "number": "1.3.3.4",
  "title": "",
  "body": " Quantos dados diferentes podemos formar gravando números de a sobre as faces indistinguíveis de um cubo   se os número podem ser gravados em qualquer ordem?  se o valor da soma das faces opostas precisam ser iguais a ?    a. b.     A princípio, temos maneiras de gravar os números nas faces dos cubos. Dessa forma ficaremos com vários cubos repetidos, pois existem várias maneiras de posicionar um cubo, observe que figura que os dois cubos são iguais.   Dois dados equivalentes.    Para posicionar um cubo, temos 6 maneiras de escolher qual a face que ficará para cima, uma vez feita essa escolha, sobram 4 faces para escolher uma que ficará de frente. Portanto existem maneiras de posicionar um cubo. A resposta é  Podemos escolher a face do 1 de 6 maneiras, a face do 6 estará automaticamente determinada. Uma vez que as faces do 1 e do 6 estão definidas, temos 4 maneiras de escolher a face do 2. A face do 5 estará automaticamente definida. Agora temos duas maneiras de escolher a face do 3. A face do 4 também estará automaticamente determinada.  Assim como no item a. precisamos dividir pelo número de maneiras de posicionar os dados. Fazendo a divisão, obtemos o resultado   "
},
{
  "id": "exercise-16",
  "level": "2",
  "url": "section-permutacoes-simples.html#exercise-16",
  "type": "Exercício",
  "number": "1.3.3.5",
  "title": "",
  "body": " (UPE 2013 tradicional) Oito amigos entraram em um restaurante para jantar e sentaram-se numa mesa retangular, com oito lugares, como mostra a figura a seguir:   Dentre todas as configurações possíveis, quantas são as possibilidades de dois desses amigos, Amaro e Danilo, ficarem sentados em frente um do outro?  a) 1440 b) 1920 c) 2016 d) 4032 e) 5760   e)   Uma vez que Amaro escolha um lugar, Danilo já está com seu lugar definido. Amaro pode escolher um lugar de 8 modos. Depois que Amaro e Danilo definiram seus lugares, os outros 6 amigos podem escolher quaisquer lugares, portanto restam possibilidades. A resposta é   "
},
{
  "id": "exercise-17",
  "level": "2",
  "url": "section-permutacoes-simples.html#exercise-17",
  "type": "Exercício",
  "number": "1.3.3.6",
  "title": "",
  "body": " (UPE 2013 tradicional) Seguindo a etiqueta japonesa, um restaurante tipicamente oriental solicita aos seus clientes que retirem seus calçados na entrada do estabelecimento. Em certa noite, 6 pares de sapatos e 2 pares de sandálias, todos distintos, estavam dispostos na entrada do restaurante, em duas fileiras com quatro pares de calçados cada uma. Se esses pares de calçados forem organizados nessas fileiras de tal forma que as sandálias devam ocupar as extremidades da primeira fila, de quantas formas diferentes podem-se organizar esses calçados nas duas fileiras?  a)  b)  c)  d)  e)   b)   Como as sandálias devem ocupar as extremidades da primeira fileira, temos duas maneiras de escolher onde colocá-las. Uma vez escolhido os lugares das sandálias, temos 6 pares de sapatos e 6 lugares, portanto a resposta é   "
},
{
  "id": "exer-xadrez",
  "level": "2",
  "url": "section-permutacoes-simples.html#exer-xadrez",
  "type": "Exercício",
  "number": "1.3.3.7",
  "title": "",
  "body": " Considere um tabuleiro de xadrez .   De quantos modos podemos colocar 8 torres iguais, de modo que haja uma única em cada linha e em cada coluna?  De quantos modos podemos colocar 8 torres diferentes, de modo que haja uma única em cada linha e em cada coluna?    a) b)    Na primeira linha, temos 8 opções para colocar a primeira torre, na segunda linha temos opções para colocar a segunda torre, pois ela não pode ficar na mesma coluna que a primeira torre. Seguindo esse raciocínio, na -ésima linha, temos opções para colocar a -ésima torre. Logo, a resposta é  Seguindo com a ideia do item a, temos modos de escolher os lugares onde as torres podem ocupar, depois disso podemos ordenar as torres de modos, portanto a resposta é    "
},
{
  "id": "exercise-19",
  "level": "2",
  "url": "section-permutacoes-simples.html#exercise-19",
  "type": "Exercício",
  "number": "1.3.3.8",
  "title": "",
  "body": " Um grupo formado por quatro rapazes e uma senhorita vão visitar uma exposição de arte. À entrada, passa uma pessoa de cada vez pela porta da sala de exposições. Um dos rapazes dando-se ares de perfeito cavalheiro, não passa pela porta sem que a senhorita já o tenha feito. Qual o número de modos, isto é, de quantas maneiras diferentes eles podem entrar no recinto?     Vamos separar em quatro casos.  1º caso: a senhorita será a primeira pessoa a entrar. Nesse caso, os quatro rapazes podem entrar em qualquer ordem, ou seja, possibilidades.  2º caso: a senhorita será a segunda pessoa a entrar. Nesse caso temos 3 possibilidades de escolha o primeiro rapaz, depois temos possíveis ordem para os outros rapazes.  3º caso: a senhorita será a terceira pessoa a entrar. Nesse caso temos possibilidades para os dois primeiros rapazes e ordens possíveis para os dois últimos rapazes.  4º caso: a senhorita será a quarta pessoa a entrar. Nesse caso temos ordens para os três primeiros rapazes.  Portanto, pelo Princípio Aditivo, a resposta é  "
},
{
  "id": "exercise-20",
  "level": "2",
  "url": "section-permutacoes-simples.html#exercise-20",
  "type": "Exercício",
  "number": "1.3.3.9",
  "title": "",
  "body": " (UPE 2011 seriado) Uma bibliotecária tenta organizar 4 livros diferentes de matemática, 4 livros diferentes de geografia e 2 livros diferentes de inglês em uma estante. O número de modos distintos de organização deve ser de tal forma que os livros da mesma disciplina estejam sempre juntos e que os de geografia apareçam sempre na mesma ordem. Assim, o número de possibilidades dessa arrumação é de  a)  b)  c)  d)  e)   d)   O número de modos de ordenar as disciplinas é . Os livros de matemática podem ser ordenados de maneiras e os livros de inglês podem ser ordenados de maneiras. Dessa forma, o número de possibilidades dessa arrumação é  "
},
{
  "id": "exercise-21",
  "level": "2",
  "url": "section-permutacoes-simples.html#exercise-21",
  "type": "Exercício",
  "number": "1.3.3.10",
  "title": "",
  "body": " Quantas são as permutações das letras A, B, C, D, E, F, G, H, nas quais, a letra B está situada à direita da letra A e à esquerda da letra F, embora, não necessariamente, em lugares consecutivos?     Inicialmente contamos o número de maneiras de ordenar as oito letras que é . Dividindo esse valor pelo número de maneiras de ordenar as letras B, A, F, obtemos o resultado, pois em apenas uma das formas de ordenar as três letras teremos a ordem exigida. A resposta é  "
},
{
  "id": "exercise-22",
  "level": "2",
  "url": "section-permutacoes-simples.html#exercise-22",
  "type": "Exercício",
  "number": "1.3.3.11",
  "title": "",
  "body": " (UFPE - UFRPE 2003) Seja a soma dos números formados pelas permutações dos algarismos e . Indique a soma dos dígitos de .     Note que cada número formado possui 5 dígitos. Podemos contar o valor de da seguinte maneira.  Sejam os números formados pelos algarismos disponíveis. Como são 5 algarismos, temos um total de números, então Observe que para cada , pois, cada algarismo estará presente em dos , para cada fixado.  Logo,    Observe que para cada permutação existe exatamente outra que a soma delas é . Por exemplo:  Podemos organizar as permutações de duas em duas, de modo que a soma de cada par seja . Portanto, o valor da soma de todas as permutações é . Somando os dígitos chegamos na resposta que é .  Podemos usar o código abaixo para conferir esta resposta e verificar a resposta de deste mesmo problema, para outros dígitos.   "
},
{
  "id": "exercise-23",
  "level": "2",
  "url": "section-permutacoes-simples.html#exercise-23",
  "type": "Exercício",
  "number": "1.3.3.12",
  "title": "",
  "body": " (UFF-RJ) Um garçom anotou os pedidos de três fregueses. Cada freguês pediu um prato principal, um acompanhamento e uma bebida. Posteriormente, o garçom não sabia identificar o autor de cada pedido. Lembrava-se, porém, de que não havia qualquer coincidência entre os pedidos: os pratos principais eram diferentes entre si, o mesmo ocorrendo com os acompanhamentos e as bebidas. O número de maneiras diferentes que o garçom poderia distribuir os pedidos entre os três fregueses é:  a)  b)  c)  d)  e)   a)   O garçom poderia distribuir os pratos principais de maneiras, os acompanhamentos também poderiam ser distribuídos de , assim como as bebidas que também poderiam ser distribuídas de maneiras. Portanto a resposta é   "
},
{
  "id": "exercise-24",
  "level": "2",
  "url": "section-permutacoes-simples.html#exercise-24",
  "type": "Exercício",
  "number": "1.3.3.13",
  "title": "",
  "body": " (OPEMAT 2019 - nível 1) Em uma viagem a Recife, o grupo formado pelos números 1, 2, 3, 4 e 5, resolveu tirar fotos próximo ao monumento do Parque das Esculturas do artista Pernambucano Francisco Brennand. Indecisos pela escolha da disposição na foto, eles concordaram em tirar várias fotos em todas as disposições possíveis, permutando os lugares entre si conforme as imagens abaixo:    Por fim, eles colocaram as fotos em ordem crescente de numeração formando a seguinte lista:   Julgue as afirmações a seguir atribuindo (V) se a afirmação for verdadeira e (F) se a afirmação for falsa.   (V) (F) Quem ocupa a última posição da vigésima foto é o 3.  (V) (F) A foto em que os números aparecem na disposição 32541, ocupa o 59º lugar desta lista.  (V) (F) A quantidade de fotos em que os números 1 e 2 aparecem separados é 96.  (V) (F) A quantidade de fotos em que a disposição dos números é maior do que a foto com disposição 25413 é 73.  (V) (F) A soma de todos os números de cinco dígitos representados pelas fotos é 3999960.    A) V, B) F, C) F, D) V, E) V  "
},
{
  "id": "exercise-25",
  "level": "2",
  "url": "section-permutacoes-simples.html#exercise-25",
  "type": "Exercício",
  "number": "1.3.3.14",
  "title": "",
  "body": "(OBM 2008 - 2ª fase do nível 3) Quantas permutações de há com a propriedade de que, para todo , os números que aparecem entre e (onde pode aparecer tanto antes como depois de ) são todos menores do que ? Por exemplo, é uma permutação com esta propriedade.   256  Da propriedade, decorre que só pode aparecer ou como primeiro ou como último elemento da permutação e que os elementos de a formam uma permutação com a mesma propriedade. Assim, o número pedido é o dobro do número de permutações de com a mesma propriedade. Da mesma forma, o número de permutações de com a propriedade é o dobro do número de permutações de com a propriedade. Repetindo o raciocínio, concluímos que o número pedido é portanto . "
},
{
  "id": "exercise-26",
  "level": "2",
  "url": "section-permutacoes-simples.html#exercise-26",
  "type": "Exercício",
  "number": "1.3.3.15",
  "title": "",
  "body": "(UPE - SSA 2 - 2014) Depois de explicar à turma do ano o que é um número palíndromo ou capicua, o professor Barreto pediu que os alunos se organizassem em duplas e entregou algumas cartelas numeradas para que formassem capicuas de três, quatro e cinco algarismos, fazendo o registro de cada resultado possível e podendo reutilizar as cartelas.  Números palíndromos ou capicuas são aqueles que são iguais quando lidos nos dois sentidos, isto é, da direita para a esquerda e da esquerda para a direita. Exemplo: ; ; .  A dupla Ian e Júlia recebeu as cartelas seguintes:    No máximo, quantos capicuas de quatro algarismos essa dupla conseguiu formar?  a)  b)  c)  d)  e)   b)   Para uma melhor visualização, ordenando as cartelas disponíveis, ficamos com os seguintes dígitos: .  Para as capicuas com os quatro algarismos iguais, temos apenas e .  Para as capicuas com dois algarismos distintos, nem podemos usar o 5, nem o 8, pois só temos uma cartela de cada. Sobraram os algarismos que estão disponíveis em pelo menos duas cartelas. Assim, para o primeiro algarismo, temos 7 opções e para o segundo algarismo, temos 6 opções. Para cada escolha dos dois primeiros algarismos, o terceiro algarismo será igual ao segundo e o quarto será igual ao primeiro. Portando, temos capicuas com dois algarismos distintos.  Observe que usando três ou mais algarismos distintos, não é possível formar uma capicua de 4 algarismos. A resposta é  "
},
{
  "id": "section-combinacoes-simples",
  "level": "1",
  "url": "section-combinacoes-simples.html",
  "type": "Seção",
  "number": "1.4",
  "title": "Combinações Simples",
  "body": " Combinações Simples    Nota Histórica  A primeira descrição conhecida sobre coeficientes binomiais (equivalente a combinações simples) está em um dos livros do matemático indiano do século X, Halayudha. O livro possui o título Mṛta-Sañjīvanī e é conhecido como um comentário do livro Chandaḥśāstra do poeta e matemático indiano, Pingala (dos séculos III\/II A.C.). O comentário de Halayudha inclui uma apresentação do triângulo de Pascal (chamado meruprastāra).  Fonte: https:\/\/en.wikipedia.org\/wiki\/Binomial_coefficient .  Por volta de 1150, o matemático indiano Bhāskarācārya (Bhaskara II) fez uma exposição dos coeficientes binomiais em seu livro Līlāvatī.   Līlāvatī de Bhāskarācārya, traduzido para inglês por Patwardhan, Naimpally e Shyam Lal Singh.      Combinações Simples  Em determinadas situações, precisamos escolher algumas opções, sem que a ordem seja importante. Confira o exemplo a seguir.   De quantas maneiras é possível fazer uma salada de frutas, usando quatro frutas distintas, se temos disponíveis as frutas: abacaxi, banana, maçã, mamão, manga e uva?   São 6 opções para a primeira fruta, 5 opções para a segunda fruta, 4 opções para a terceira fruta, e finalmente, 3 opções para a última fruta.  Note que, dessa maneira a ordem está sendo levada em consideração. Como cada escolha de frutas pode ser ordenada de maneiras, dividindo por passamos a contar cada salada exatamente uma vez. A resposta é dada por       No Sage, podemos obter uma lista com todos os subconjuntos de {1, 2, 3, 4, 5, 6}, tomados 4 a 4. Basta usar o seguinte código:     O número de formas de escolher elementos, dentre elementos disponíveis, sem que a ordem importe, é chamado de número de combinações de elementos, tomados a .  Observe que, o número de subconjuntos com elementos, de um conjunto com elementos é exatamente o número de combinações de , tomados a . As notações para o número de combinações de , a são dadas por:     O número de combinações de objetos distintos, tomados a é    Temos modos de escolher o primeiro elemento, modos de escolher o segundo elemento, e assim sucessivamente, até modos de escolher o -ésimo elemento.  Agora observe que contamos muito mais agrupamentos do que deveríamos, pois para conjuntos, a ordem não importa, portanto precisamos dividir pelo número de formas de ordenar estes elementos que escolhemos de forma ordenada, ou seja, por . Assim:    Fazendo as contas concluímos que      pode ser calculado no Sage com o código binomial(n, p). Para abreviar vamos usar C(n, p) = binomial(n, p). Teste o código abaixo, para o caso , .      Uma criança possui 5 figurinhas distintas e outra criança possui 7 figurinhas distintas. Se as figurinhas da primeira criança são todas diferentes das figurinhas da segunda criança, de quantas maneiras é possível trocar 4 figurinhas pertencentes a primeira criança com 4 pertencentes a segunda?   A primeira criança pode escolher suas 4 figurinhas de maneiras e a segunda criança pode escolher suas 4 figurinhas de maneiras. Portanto, o número de maneiras de realizar a troca é      Um Juiz dispõe de 11 pessoas, das quais somente 4 são advogados.   Para formar um único júri com 9 jurados. Qual é o número de formas de compor o júri, com pelo menos 2 advogados?  Para formar um único júri com 6 jurados. Qual é o número de formas de compor o júri, com pelo menos 2 advogados?    item a) Basta escolher 9 jurados, pois pelo menos dois serão advogados. Isto pode ser feito de maneiras.  item b) Se escolhermos diretamente 6 jurados, dentre as 11 pessoas disponíveis, estaremos contando os casos em que não temos pelo menos dois advogados. Precisamos contornar este problema.  Para garantir que estamos contando todos os casos em que pelo menos dois advogados foram selecionados, vamos separar em três casos. 1º vamos contar o número de maneiras de selecionar 2 advogados e 4 não advogados. 2º vamos contar o número de maneiras de selecionar 3 advogados e 3 não advogados. 3º vamos contar o número de maneiras de selecionar 4 advogados e 2 não advogados. Como os casos são disjuntos, pelo Princípio Aditivo a resposta é   No Sage, esse cálculo pode ser feito da seguinte maneira:      De quantos modos podemos dividir 12 pessoas em três grupos de quatro pessoas cada?   Para o primeiro grupo, temos um total de maneiras de selecionar as 4 pessoas.  Para o segundo grupo temos um total de maneiras de selecionar as 4 pessoas.  Para o terceiro grupo temos um total de maneiras de selecionar as 4 pessoas.  Como a ordem dos grupos não importa, precisamos dividir por Portanto a resposta é       Exercícios   Quantas diagonais possuem um polígono de lados?     Cada vértice pode ser ligado a outros vértices por meio uma diagonal, pois o vértice nem pode ser ligado a ele mesmo, nem aos seus dois vértices adjacentes, usando diagonais. Como são vértices ficamos com diagonais, mas elas foram contadas duas vezes, portanto a resposta é    Em uma reunião social, cada pessoa cumprimentou todas as outras, havendo ao todo apertos de mão. Quantas pessoas havia na reunião?    Precisamos descobrir o valor de para o qual, Assim, como , precisamos resolver a equação: Ou seja, . As soluções são ou . Como o número de pessoas precisa ser positivo, a resposta é    Doze atletas disputam uma prova. Serão premiados os cinco primeiros colocados com prêmios diferentes para cada um deles. De quantas maneiras pode ser feita a premiação?    Precisamos contar o números de maneiras de \"separar\" das pessoas, as que ficarão entre os primeiros lugares. Depois disso, como os prêmios são diferentes, precisamos contar o número de maneiras de ordenar essas pessoas. Portanto, a resposta é    Dentre números positivos e números negativos, de quantos modos podemos escolher números cujo produto seja positivo?  255.   Para que o produto de números seja positivo, precisamos que sejam números positivos, ou números negativos, ou positivos e negativos. O total de maneiras de fazer essas escolhas é dado por    Dez amigos pretendiam viajar de férias, mas apenas dispõem de um automóvel de cinco lugares. Chegaram a um acordo de sortear os cinco que iriam de carro, enquanto os demais iriam de ônibus. Quantos grupos distintos podem ser formados para ocuparem o carro, admitindo-se que:  qualquer uma das dez pessoas pode dirigir.  apenas 3 pessos possuem habilitação.          item a) Basta escolher as pessoas que irão de carro, as demais irão de ônibus. A resposta é    item b) Neste caso, podemos escolher as pessoas que irão no carro das seguintes maneiras:  1 pessoa com habilitação e 4 sem habilitação, ou  2 pessoas com habilitação e 3 sem habilitação, ou  3 pessoas com habilitação e 2 sem habilitação.  Isto pode ser contato da seguinte forma:     Quantas são as pedras de um dominó comum?   28   As pedras de um dominó possuem dois números que podem ter valores de 0 até 6. Dessas pedras, 7 possuem os dois números iguais. Para formar uma pedra com dois números diferentes, temos modos de escolher os números. Portanto o número de pedras de um dominó comum é     (UFPE 2012) As pedras de um dominó usual são compostas por dois quadrados, com 7 possíveis marcas (de zero pontos até 6 pontos). Quantas pedras terá um dominó se cada quadrado puder ter até 9 pontos? Veja no desenho abaixo um exemplo de uma nova pedra do dominó.    55   As pedras desse dominó possuem dois números que podem ter valores de 0 até 9. Dessas pedras, 10 possuem os dois números iguais. Para formar uma pedra com dois números diferentes, temos modos de escolher os números. Portanto o número de pedros desse dominó é     (UFPE 2001) Quantos são os paralelogramos com lados sobre os segmentos da figura seguinte, onde os segmentos que não se interceptam são paralelos.    90   Podemos prolongar os segmentos que definem os lados dos paralelogramos conforme a figura abaixo:   Paralelogramos com prolongamento de segmentos.    Observe que escolher dois segmentos em cima e dois segmentos do lado esquerdo define um único paralelogramo. Observe também que cada paralelogramo da figura corresponde a dois segmentos na parte de cima e dois segmentos do lado esquerdo. Portanto, a resposta é o número de maneiras de escolher 2 dentre 6 segmentos na parte de cima, multiplicado pelo número de maneiras de escolher 2 dentre 4 segmentos no lado esquerdo:    Seja um polígono convexo de lados, tal que não há três diagonais que se intersectam no mesmo ponto. Qual o número total de pontos de interseções dessas diagonais.    Vamos analisar o que acontece no caso . Num polígono convexo com vértices, do total de segmentos, temos lados e diagonais que se intersectam num único ponto. Perceba que para quaisquer vértices de um polígono de lados teremos um único par de diagonais que se encontram num único ponto.  Quatro vértices do polígono convexo .     Assim, defina uma função que associa cada quádrupla de vértices do polígono ao par de diagonais que se intersectam num único ponto. Observe que, por construção, esta função é sobrejetiva. Ela também é injetiva, pois a única forma dela não ser injetiva seria termos três diagonais que se intersectassem num único ponto, mas por hipótese isto não acontece. Dessa maneira, temos uma bijeção que associa cada vértices de em um ponto de interseção das diagonais, determinado por eles. Aplicando o Princípio da Bijeção ( ), a quantidade de pontos das interseções das diagonais é o mesmo que o número de maneiras de escolher vértices em um polígono com vértices, e este número é dado por .     (PROFMAT 2015) Uma escola de educação básica possui 12 professores de matemática, sendo que 8 atuam exclusivamente no Ensino Fundamental e 4 atuam exclusivamente no Ensino Médio. Para a organização da 1ª Olimpíada de Matemática da escola, será formada uma comissão de 5 professores de matemática, de modo que pelo menos um deles seja professor do Ensino Médio. De quantas maneiras essa comissão poderá ser formada?     Vamos contar o total de modos de escolher 5 professores dentre os 12, depois subtraímos o número de casos em que nenhum professor do ensino médio foi selecionado. O número de soluções é     (UFBA 2006) Durante uma reunião, ocorreu uma divergência quanto à formação de uma comissão gestora, a ser escolhida entre os presentes. Um grupo defendia uma comissão com três membros, sendo um presidente, um vice-presidente e um secretário. Outro grupo queria uma comissão com três membros sem cargos definidos. A primeira alternativa oferece 280 possibilidades de escolha a mais que a segunda. Determine o número de pessoas presentes à reunião, sabendo-se que esse número é maior que 5.   8   Seja a quantidade de pessoas na reunião. No primeiro caso temos modos de escolher a comissão. No segundo caso temos modos de escolher a comissão. Como a primeira alternativa oferece possibilidades de escolha a mais que a segunda, temos Logo e Observe que no lado esquerdo da equação temos o produto de três números naturais consecutivos, e do outro lado, temos o número . Fatorando e reescrevendo como produto de três números naturais consecutivos obtemos: Portanto, e .     Considere tabuleiros, como os de xadrez, mas com dimensões .   De quantos modos podemos colocar 5 torres iguais em um tabuleiro , de modo que haja uma única em cada linha e em cada coluna?  De quantos modos podemos colocar 5 torres iguais em um tabuleiro , de modo que haja uma única em cada linha e em cada coluna?  De quantos modos podemos colocar torres iguais em um tabuleiro , de modo que haja uma única em cada linha e em cada coluna?    a) b) c)    Precisamos selecionar as linhas e as colunas que colocaremos as torres, em seguida procedemos como no  . Para selecionar as linhas que serão utilizadas, temos opções. Para selecionar as colunas que serão utilizadas, também temos opções. Portanto, a resposta é  Seguindo com a ideia do item a, para selecionar as linhas que serão utilizadas, temos opções. Para selecionar as colunas que serão utilizadas, temos opções. Logo, a resposta é  Observe que para ter solução, é necessário que . Se isto for verdade, procedendo de modo análogo ao item anterior, a resposta é    (OBM 2004 - 2ª fase do nível 3) Os doze alunos de uma turma de olimpíada saíam para jogar futebol todos os dias após a aula de matemática, formando dois times de 6 jogadores cada e jogando entre si. A cada dia eles formavam dois times diferentes dos times formados em dias anteriores. Ao final do ano, eles verificaram que cada 5 alunos haviam jogado juntos num mesmo time exatamente uma vez. Quantos times diferentes foram formados ao longo do ano?   Temos maneiras de escolher 6 dentre 12 alunos. Note que para cada 5 alunos fixados, temos 7 times possíveis.     (OBM 2006 - 2ª fase do nível 3) Seja inteiro positivo. De quantas maneiras podemos distribuir brinquedos distintos para crianças de modo que toda criança receba pelo menos um brinquedo?   Escolha uma criança para receber dois brinquedos, em seguida escolha os dois brinquedos dessa criança. Agora distribua um brinquedo para cada criança que restou.     (OBM 2013 - 2ª fase do nível 3) Para cobrir um tabuleiro de dimensões , podemos utilizar heptaminós amarelos, de dimensões , e octaminós vermelhos, de dimensões . De quantos modos podemos cobrir completamente o tabuleiro?     Suponha que vamos usar heptaminós e octaminós. Para cobrir tudo, temos .  Observe que é múltiplo de e de . Assim, é múltiplo de 8, pois . Analogamente, é múltiplo de 7, pois . Como e são primos entre si, é múltiplo de e é múltiplo de .  Sendo e , temos . Assim, os valores de são e , que correspondem a sendo e .  Analisando os três casos:  1º: , apenas uma maneira de cobrir, pois todas as peças são octaminós.  2º: , temos no total peças que colocaremos no tabuleiro. Como as peças de tamanho diferente possuem cores distintas e o tabuleiro ficará sem ''buracos'', precisamos escolher as posições que serão colocados os heptaminós, ou as posições que serão colocados os octaminós, pois estes dois valores são iguais. O número de maneiras de fazer isto é   3º: , análogo ao primeiro caso, apenas uma maneira.  No total temos maneiras de cobrir completamente o tabuleiro.   (OBM 2015 - 2ª fase do nível 3) Um subconjunto de elementos do conjunto é dito largo se ao colocar os seus elementos em ordem crescente tivermos a propriedade de que a diferença do segundo menos o primeiro é maior que , do terceiro para o segundo é maior que , do quarto para o terceiro é maior que e do quinto para o quarto é maior que . Existem quantos subconjuntos largos?     Sejam os elementos de um conjunto largo. Assim, e , ou seja, .  Desta forma, é um subconjunto de . Reciprocamente, se é um subconjunto de com então é um conjunto largo, pois e .  Com isso, a quantidade de subconjuntos largos é igual à quantidade de subconjuntos de elementos de , que é     (FUVEST 2020 - 2ª fase) Um jogo educativo possui 16 peças nos formatos: círculo, triângulo, quadrado e estrela, e cada formato é apresentado em 4 cores: amarelo, branco, laranja e verde. Dois jogadores distribuem entre si quantidades iguais dessas peças, de forma aleatória. O conjunto de 8 peças que cada jogador recebe é chamado de coleção.   Quantas são as possíveis coleções que um jogador pode receber?  A regra do jogo estabelece pontuações para as peças, da seguinte forma: círculo = 1 ponto, triângulo = 2 pontos, quadrado = 3 pontos e estrela = 4 pontos. Quantas são as possíveis coleções que valem 26 pontos ou mais?    a) b)   item a) O número de possíveis coleções é dado por:   item b) As coleções possíveis são:  1) 4 estrelas e 4 quadrados totalizando 28 pontos:  2) 4 estrelas, 3 quadrados e 1 triângulo totalizando 27 pontos:  3) 4 estrelas, 3 quadrados e 1 círculo totalizando 26 pontos:  4) 4 estrelas, 2 quadrados e 2 triângulos totalizando 26 pontos:  5) 3 estrelas, 4 quadrados e 1 triângulo totalizando 26 pontos: Portanto existem coleções possíveis.    (FUVEST 2018 - 2ª fase) Em um torneio de xadrez, há participantes. Na primeira rodada, há jogos. Calcule, em função de , o número de possibilidades para se fazer o emparceiramento da primeira rodada, sem levar em conta a cor das peças.      Para o primeiro jogo, temos um total de maneiras de escolher os participantes. Para o segundo jogo, temos um total de maneiras de escolher os participantes e assim sucessivamente, até que para o último jogo ficamos com maneiras de escolher os participantes.  Observe que a ordem os jogos não importa. Portanto, precisamos dividir pela quantidade de maneiras de ordenar esses jogos. A resposta é dada por:     "
},
{
  "id": "p-246",
  "level": "2",
  "url": "section-combinacoes-simples.html#p-246",
  "type": "Parágrafo (with a defined term)",
  "number": "",
  "title": "",
  "body": "https:\/\/en.wikipedia.org\/wiki\/Binomial_coefficient "
},
{
  "id": "figura-lilavati",
  "level": "2",
  "url": "section-combinacoes-simples.html#figura-lilavati",
  "type": "Figura",
  "number": "1.4.1",
  "title": "",
  "body": " Līlāvatī de Bhāskarācārya, traduzido para inglês por Patwardhan, Naimpally e Shyam Lal Singh.   "
},
{
  "id": "example-12",
  "level": "2",
  "url": "section-combinacoes-simples.html#example-12",
  "type": "Exemplo",
  "number": "1.4.2",
  "title": "",
  "body": " De quantas maneiras é possível fazer uma salada de frutas, usando quatro frutas distintas, se temos disponíveis as frutas: abacaxi, banana, maçã, mamão, manga e uva?   São 6 opções para a primeira fruta, 5 opções para a segunda fruta, 4 opções para a terceira fruta, e finalmente, 3 opções para a última fruta.  Note que, dessa maneira a ordem está sendo levada em consideração. Como cada escolha de frutas pode ser ordenada de maneiras, dividindo por passamos a contar cada salada exatamente uma vez. A resposta é dada por    "
},
{
  "id": "technology-6",
  "level": "2",
  "url": "section-combinacoes-simples.html#technology-6",
  "type": "Tecnologia",
  "number": "1.4.3",
  "title": "",
  "body": " No Sage, podemos obter uma lista com todos os subconjuntos de {1, 2, 3, 4, 5, 6}, tomados 4 a 4. Basta usar o seguinte código:   "
},
{
  "id": "def-combinacao",
  "level": "2",
  "url": "section-combinacoes-simples.html#def-combinacao",
  "type": "Definição",
  "number": "1.4.4",
  "title": "",
  "body": " O número de formas de escolher elementos, dentre elementos disponíveis, sem que a ordem importe, é chamado de número de combinações de elementos, tomados a .  Observe que, o número de subconjuntos com elementos, de um conjunto com elementos é exatamente o número de combinações de , tomados a . As notações para o número de combinações de , a são dadas por:   "
},
{
  "id": "teo-combinacao",
  "level": "2",
  "url": "section-combinacoes-simples.html#teo-combinacao",
  "type": "Teorema",
  "number": "1.4.5",
  "title": "",
  "body": " O número de combinações de objetos distintos, tomados a é    Temos modos de escolher o primeiro elemento, modos de escolher o segundo elemento, e assim sucessivamente, até modos de escolher o -ésimo elemento.  Agora observe que contamos muito mais agrupamentos do que deveríamos, pois para conjuntos, a ordem não importa, portanto precisamos dividir pelo número de formas de ordenar estes elementos que escolhemos de forma ordenada, ou seja, por . Assim:    Fazendo as contas concluímos que    "
},
{
  "id": "tec-combinacao",
  "level": "2",
  "url": "section-combinacoes-simples.html#tec-combinacao",
  "type": "Tecnologia",
  "number": "1.4.6",
  "title": "",
  "body": " pode ser calculado no Sage com o código binomial(n, p). Para abreviar vamos usar C(n, p) = binomial(n, p). Teste o código abaixo, para o caso , .   "
},
{
  "id": "example-13",
  "level": "2",
  "url": "section-combinacoes-simples.html#example-13",
  "type": "Exemplo",
  "number": "1.4.7",
  "title": "",
  "body": " Uma criança possui 5 figurinhas distintas e outra criança possui 7 figurinhas distintas. Se as figurinhas da primeira criança são todas diferentes das figurinhas da segunda criança, de quantas maneiras é possível trocar 4 figurinhas pertencentes a primeira criança com 4 pertencentes a segunda?   A primeira criança pode escolher suas 4 figurinhas de maneiras e a segunda criança pode escolher suas 4 figurinhas de maneiras. Portanto, o número de maneiras de realizar a troca é    "
},
{
  "id": "example-14",
  "level": "2",
  "url": "section-combinacoes-simples.html#example-14",
  "type": "Exemplo",
  "number": "1.4.8",
  "title": "",
  "body": " Um Juiz dispõe de 11 pessoas, das quais somente 4 são advogados.   Para formar um único júri com 9 jurados. Qual é o número de formas de compor o júri, com pelo menos 2 advogados?  Para formar um único júri com 6 jurados. Qual é o número de formas de compor o júri, com pelo menos 2 advogados?    item a) Basta escolher 9 jurados, pois pelo menos dois serão advogados. Isto pode ser feito de maneiras.  item b) Se escolhermos diretamente 6 jurados, dentre as 11 pessoas disponíveis, estaremos contando os casos em que não temos pelo menos dois advogados. Precisamos contornar este problema.  Para garantir que estamos contando todos os casos em que pelo menos dois advogados foram selecionados, vamos separar em três casos. 1º vamos contar o número de maneiras de selecionar 2 advogados e 4 não advogados. 2º vamos contar o número de maneiras de selecionar 3 advogados e 3 não advogados. 3º vamos contar o número de maneiras de selecionar 4 advogados e 2 não advogados. Como os casos são disjuntos, pelo Princípio Aditivo a resposta é   No Sage, esse cálculo pode ser feito da seguinte maneira:    "
},
{
  "id": "example-15",
  "level": "2",
  "url": "section-combinacoes-simples.html#example-15",
  "type": "Exemplo",
  "number": "1.4.9",
  "title": "",
  "body": " De quantos modos podemos dividir 12 pessoas em três grupos de quatro pessoas cada?   Para o primeiro grupo, temos um total de maneiras de selecionar as 4 pessoas.  Para o segundo grupo temos um total de maneiras de selecionar as 4 pessoas.  Para o terceiro grupo temos um total de maneiras de selecionar as 4 pessoas.  Como a ordem dos grupos não importa, precisamos dividir por Portanto a resposta é    "
},
{
  "id": "exercise-27",
  "level": "2",
  "url": "section-combinacoes-simples.html#exercise-27",
  "type": "Exercício",
  "number": "1.4.3.1",
  "title": "",
  "body": " Quantas diagonais possuem um polígono de lados?     Cada vértice pode ser ligado a outros vértices por meio uma diagonal, pois o vértice nem pode ser ligado a ele mesmo, nem aos seus dois vértices adjacentes, usando diagonais. Como são vértices ficamos com diagonais, mas elas foram contadas duas vezes, portanto a resposta é   "
},
{
  "id": "exercise-28",
  "level": "2",
  "url": "section-combinacoes-simples.html#exercise-28",
  "type": "Exercício",
  "number": "1.4.3.2",
  "title": "",
  "body": "Em uma reunião social, cada pessoa cumprimentou todas as outras, havendo ao todo apertos de mão. Quantas pessoas havia na reunião?    Precisamos descobrir o valor de para o qual, Assim, como , precisamos resolver a equação: Ou seja, . As soluções são ou . Como o número de pessoas precisa ser positivo, a resposta é   "
},
{
  "id": "exercise-29",
  "level": "2",
  "url": "section-combinacoes-simples.html#exercise-29",
  "type": "Exercício",
  "number": "1.4.3.3",
  "title": "",
  "body": "Doze atletas disputam uma prova. Serão premiados os cinco primeiros colocados com prêmios diferentes para cada um deles. De quantas maneiras pode ser feita a premiação?    Precisamos contar o números de maneiras de \"separar\" das pessoas, as que ficarão entre os primeiros lugares. Depois disso, como os prêmios são diferentes, precisamos contar o número de maneiras de ordenar essas pessoas. Portanto, a resposta é   "
},
{
  "id": "exercise-30",
  "level": "2",
  "url": "section-combinacoes-simples.html#exercise-30",
  "type": "Exercício",
  "number": "1.4.3.4",
  "title": "",
  "body": "Dentre números positivos e números negativos, de quantos modos podemos escolher números cujo produto seja positivo?  255.   Para que o produto de números seja positivo, precisamos que sejam números positivos, ou números negativos, ou positivos e negativos. O total de maneiras de fazer essas escolhas é dado por   "
},
{
  "id": "exercise-31",
  "level": "2",
  "url": "section-combinacoes-simples.html#exercise-31",
  "type": "Exercício",
  "number": "1.4.3.5",
  "title": "",
  "body": "Dez amigos pretendiam viajar de férias, mas apenas dispõem de um automóvel de cinco lugares. Chegaram a um acordo de sortear os cinco que iriam de carro, enquanto os demais iriam de ônibus. Quantos grupos distintos podem ser formados para ocuparem o carro, admitindo-se que:  qualquer uma das dez pessoas pode dirigir.  apenas 3 pessos possuem habilitação.          item a) Basta escolher as pessoas que irão de carro, as demais irão de ônibus. A resposta é    item b) Neste caso, podemos escolher as pessoas que irão no carro das seguintes maneiras:  1 pessoa com habilitação e 4 sem habilitação, ou  2 pessoas com habilitação e 3 sem habilitação, ou  3 pessoas com habilitação e 2 sem habilitação.  Isto pode ser contato da seguinte forma:   "
},
{
  "id": "exercise-32",
  "level": "2",
  "url": "section-combinacoes-simples.html#exercise-32",
  "type": "Exercício",
  "number": "1.4.3.6",
  "title": "",
  "body": " Quantas são as pedras de um dominó comum?   28   As pedras de um dominó possuem dois números que podem ter valores de 0 até 6. Dessas pedras, 7 possuem os dois números iguais. Para formar uma pedra com dois números diferentes, temos modos de escolher os números. Portanto o número de pedras de um dominó comum é   "
},
{
  "id": "exercise-33",
  "level": "2",
  "url": "section-combinacoes-simples.html#exercise-33",
  "type": "Exercício",
  "number": "1.4.3.7",
  "title": "",
  "body": " (UFPE 2012) As pedras de um dominó usual são compostas por dois quadrados, com 7 possíveis marcas (de zero pontos até 6 pontos). Quantas pedras terá um dominó se cada quadrado puder ter até 9 pontos? Veja no desenho abaixo um exemplo de uma nova pedra do dominó.    55   As pedras desse dominó possuem dois números que podem ter valores de 0 até 9. Dessas pedras, 10 possuem os dois números iguais. Para formar uma pedra com dois números diferentes, temos modos de escolher os números. Portanto o número de pedros desse dominó é   "
},
{
  "id": "exercise-34",
  "level": "2",
  "url": "section-combinacoes-simples.html#exercise-34",
  "type": "Exercício",
  "number": "1.4.3.8",
  "title": "",
  "body": " (UFPE 2001) Quantos são os paralelogramos com lados sobre os segmentos da figura seguinte, onde os segmentos que não se interceptam são paralelos.    90   Podemos prolongar os segmentos que definem os lados dos paralelogramos conforme a figura abaixo:   Paralelogramos com prolongamento de segmentos.    Observe que escolher dois segmentos em cima e dois segmentos do lado esquerdo define um único paralelogramo. Observe também que cada paralelogramo da figura corresponde a dois segmentos na parte de cima e dois segmentos do lado esquerdo. Portanto, a resposta é o número de maneiras de escolher 2 dentre 6 segmentos na parte de cima, multiplicado pelo número de maneiras de escolher 2 dentre 4 segmentos no lado esquerdo:   "
},
{
  "id": "exercise-35",
  "level": "2",
  "url": "section-combinacoes-simples.html#exercise-35",
  "type": "Exercício",
  "number": "1.4.3.9",
  "title": "",
  "body": "Seja um polígono convexo de lados, tal que não há três diagonais que se intersectam no mesmo ponto. Qual o número total de pontos de interseções dessas diagonais.    Vamos analisar o que acontece no caso . Num polígono convexo com vértices, do total de segmentos, temos lados e diagonais que se intersectam num único ponto. Perceba que para quaisquer vértices de um polígono de lados teremos um único par de diagonais que se encontram num único ponto.  Quatro vértices do polígono convexo .     Assim, defina uma função que associa cada quádrupla de vértices do polígono ao par de diagonais que se intersectam num único ponto. Observe que, por construção, esta função é sobrejetiva. Ela também é injetiva, pois a única forma dela não ser injetiva seria termos três diagonais que se intersectassem num único ponto, mas por hipótese isto não acontece. Dessa maneira, temos uma bijeção que associa cada vértices de em um ponto de interseção das diagonais, determinado por eles. Aplicando o Princípio da Bijeção ( ), a quantidade de pontos das interseções das diagonais é o mesmo que o número de maneiras de escolher vértices em um polígono com vértices, e este número é dado por .  "
},
{
  "id": "exercise-36",
  "level": "2",
  "url": "section-combinacoes-simples.html#exercise-36",
  "type": "Exercício",
  "number": "1.4.3.10",
  "title": "",
  "body": " (PROFMAT 2015) Uma escola de educação básica possui 12 professores de matemática, sendo que 8 atuam exclusivamente no Ensino Fundamental e 4 atuam exclusivamente no Ensino Médio. Para a organização da 1ª Olimpíada de Matemática da escola, será formada uma comissão de 5 professores de matemática, de modo que pelo menos um deles seja professor do Ensino Médio. De quantas maneiras essa comissão poderá ser formada?     Vamos contar o total de modos de escolher 5 professores dentre os 12, depois subtraímos o número de casos em que nenhum professor do ensino médio foi selecionado. O número de soluções é   "
},
{
  "id": "exercise-37",
  "level": "2",
  "url": "section-combinacoes-simples.html#exercise-37",
  "type": "Exercício",
  "number": "1.4.3.11",
  "title": "",
  "body": " (UFBA 2006) Durante uma reunião, ocorreu uma divergência quanto à formação de uma comissão gestora, a ser escolhida entre os presentes. Um grupo defendia uma comissão com três membros, sendo um presidente, um vice-presidente e um secretário. Outro grupo queria uma comissão com três membros sem cargos definidos. A primeira alternativa oferece 280 possibilidades de escolha a mais que a segunda. Determine o número de pessoas presentes à reunião, sabendo-se que esse número é maior que 5.   8   Seja a quantidade de pessoas na reunião. No primeiro caso temos modos de escolher a comissão. No segundo caso temos modos de escolher a comissão. Como a primeira alternativa oferece possibilidades de escolha a mais que a segunda, temos Logo e Observe que no lado esquerdo da equação temos o produto de três números naturais consecutivos, e do outro lado, temos o número . Fatorando e reescrevendo como produto de três números naturais consecutivos obtemos: Portanto, e .  "
},
{
  "id": "exercise-38",
  "level": "2",
  "url": "section-combinacoes-simples.html#exercise-38",
  "type": "Exercício",
  "number": "1.4.3.12",
  "title": "",
  "body": " Considere tabuleiros, como os de xadrez, mas com dimensões .   De quantos modos podemos colocar 5 torres iguais em um tabuleiro , de modo que haja uma única em cada linha e em cada coluna?  De quantos modos podemos colocar 5 torres iguais em um tabuleiro , de modo que haja uma única em cada linha e em cada coluna?  De quantos modos podemos colocar torres iguais em um tabuleiro , de modo que haja uma única em cada linha e em cada coluna?    a) b) c)    Precisamos selecionar as linhas e as colunas que colocaremos as torres, em seguida procedemos como no  . Para selecionar as linhas que serão utilizadas, temos opções. Para selecionar as colunas que serão utilizadas, também temos opções. Portanto, a resposta é  Seguindo com a ideia do item a, para selecionar as linhas que serão utilizadas, temos opções. Para selecionar as colunas que serão utilizadas, temos opções. Logo, a resposta é  Observe que para ter solução, é necessário que . Se isto for verdade, procedendo de modo análogo ao item anterior, a resposta é   "
},
{
  "id": "exercise-39",
  "level": "2",
  "url": "section-combinacoes-simples.html#exercise-39",
  "type": "Exercício",
  "number": "1.4.3.13",
  "title": "",
  "body": "(OBM 2004 - 2ª fase do nível 3) Os doze alunos de uma turma de olimpíada saíam para jogar futebol todos os dias após a aula de matemática, formando dois times de 6 jogadores cada e jogando entre si. A cada dia eles formavam dois times diferentes dos times formados em dias anteriores. Ao final do ano, eles verificaram que cada 5 alunos haviam jogado juntos num mesmo time exatamente uma vez. Quantos times diferentes foram formados ao longo do ano?   Temos maneiras de escolher 6 dentre 12 alunos. Note que para cada 5 alunos fixados, temos 7 times possíveis.    "
},
{
  "id": "exercise-40",
  "level": "2",
  "url": "section-combinacoes-simples.html#exercise-40",
  "type": "Exercício",
  "number": "1.4.3.14",
  "title": "",
  "body": "(OBM 2006 - 2ª fase do nível 3) Seja inteiro positivo. De quantas maneiras podemos distribuir brinquedos distintos para crianças de modo que toda criança receba pelo menos um brinquedo?   Escolha uma criança para receber dois brinquedos, em seguida escolha os dois brinquedos dessa criança. Agora distribua um brinquedo para cada criança que restou.    "
},
{
  "id": "exercise-41",
  "level": "2",
  "url": "section-combinacoes-simples.html#exercise-41",
  "type": "Exercício",
  "number": "1.4.3.15",
  "title": "",
  "body": "(OBM 2013 - 2ª fase do nível 3) Para cobrir um tabuleiro de dimensões , podemos utilizar heptaminós amarelos, de dimensões , e octaminós vermelhos, de dimensões . De quantos modos podemos cobrir completamente o tabuleiro?     Suponha que vamos usar heptaminós e octaminós. Para cobrir tudo, temos .  Observe que é múltiplo de e de . Assim, é múltiplo de 8, pois . Analogamente, é múltiplo de 7, pois . Como e são primos entre si, é múltiplo de e é múltiplo de .  Sendo e , temos . Assim, os valores de são e , que correspondem a sendo e .  Analisando os três casos:  1º: , apenas uma maneira de cobrir, pois todas as peças são octaminós.  2º: , temos no total peças que colocaremos no tabuleiro. Como as peças de tamanho diferente possuem cores distintas e o tabuleiro ficará sem ''buracos'', precisamos escolher as posições que serão colocados os heptaminós, ou as posições que serão colocados os octaminós, pois estes dois valores são iguais. O número de maneiras de fazer isto é   3º: , análogo ao primeiro caso, apenas uma maneira.  No total temos maneiras de cobrir completamente o tabuleiro.  "
},
{
  "id": "exercise-42",
  "level": "2",
  "url": "section-combinacoes-simples.html#exercise-42",
  "type": "Exercício",
  "number": "1.4.3.16",
  "title": "",
  "body": "(OBM 2015 - 2ª fase do nível 3) Um subconjunto de elementos do conjunto é dito largo se ao colocar os seus elementos em ordem crescente tivermos a propriedade de que a diferença do segundo menos o primeiro é maior que , do terceiro para o segundo é maior que , do quarto para o terceiro é maior que e do quinto para o quarto é maior que . Existem quantos subconjuntos largos?     Sejam os elementos de um conjunto largo. Assim, e , ou seja, .  Desta forma, é um subconjunto de . Reciprocamente, se é um subconjunto de com então é um conjunto largo, pois e .  Com isso, a quantidade de subconjuntos largos é igual à quantidade de subconjuntos de elementos de , que é   "
},
{
  "id": "quest-fuvest2020comb",
  "level": "2",
  "url": "section-combinacoes-simples.html#quest-fuvest2020comb",
  "type": "Exercício",
  "number": "1.4.3.17",
  "title": "",
  "body": " (FUVEST 2020 - 2ª fase) Um jogo educativo possui 16 peças nos formatos: círculo, triângulo, quadrado e estrela, e cada formato é apresentado em 4 cores: amarelo, branco, laranja e verde. Dois jogadores distribuem entre si quantidades iguais dessas peças, de forma aleatória. O conjunto de 8 peças que cada jogador recebe é chamado de coleção.   Quantas são as possíveis coleções que um jogador pode receber?  A regra do jogo estabelece pontuações para as peças, da seguinte forma: círculo = 1 ponto, triângulo = 2 pontos, quadrado = 3 pontos e estrela = 4 pontos. Quantas são as possíveis coleções que valem 26 pontos ou mais?    a) b)   item a) O número de possíveis coleções é dado por:   item b) As coleções possíveis são:  1) 4 estrelas e 4 quadrados totalizando 28 pontos:  2) 4 estrelas, 3 quadrados e 1 triângulo totalizando 27 pontos:  3) 4 estrelas, 3 quadrados e 1 círculo totalizando 26 pontos:  4) 4 estrelas, 2 quadrados e 2 triângulos totalizando 26 pontos:  5) 3 estrelas, 4 quadrados e 1 triângulo totalizando 26 pontos: Portanto existem coleções possíveis.  "
},
{
  "id": "quest-fuvest2018comb",
  "level": "2",
  "url": "section-combinacoes-simples.html#quest-fuvest2018comb",
  "type": "Exercício",
  "number": "1.4.3.18",
  "title": "",
  "body": " (FUVEST 2018 - 2ª fase) Em um torneio de xadrez, há participantes. Na primeira rodada, há jogos. Calcule, em função de , o número de possibilidades para se fazer o emparceiramento da primeira rodada, sem levar em conta a cor das peças.      Para o primeiro jogo, temos um total de maneiras de escolher os participantes. Para o segundo jogo, temos um total de maneiras de escolher os participantes e assim sucessivamente, até que para o último jogo ficamos com maneiras de escolher os participantes.  Observe que a ordem os jogos não importa. Portanto, precisamos dividir pela quantidade de maneiras de ordenar esses jogos. A resposta é dada por:   "
},
{
  "id": "section-permutacoes-circulares",
  "level": "1",
  "url": "section-permutacoes-circulares.html",
  "type": "Seção",
  "number": "1.5",
  "title": "Permutações Circulares",
  "body": " Permutações Circulares    O número de permutações circulares de elementos, é o número de maneiras de organizar objetos distintos ao longo de um círculo fixo (isto é, não pode ser retirado do plano e virado). Notação:     Observe que os três círculos da ( ) são equivalentes, ou seja, representam a mesma permutação circular, pois o segundo círculo pode ser obtido a partir do primeiro por uma rotação de e o terceiro círculo pode ser obtido a partir do primeiro por uma rotação de .   Três círculos que representam a mesma permutação circular.      O número total de permutações circulares com 3 elementos distintos é 2.   Observe que as permutações simples (1, 2, 3), (3, 1, 2) e (2, 3 ,1) podem ser identificadas com os círculos da ( ), colocando o primeiro elemento na parte mais alta do círculo, o segundo elemento do lado direito e o terceiro elemento do lado esquerdo. Portanto essas três permutações simples, correspondem a apenas uma permutação circular.  Observe que as permutações simples (1, 3, 2), (2, 1, 3) e (3, 2 ,1) podem ser identificadas com os círculos da ( ), da mesma forma que foi feito no caso anterior. Portanto essas três permutações simples, correspondem a apenas uma permutação circular.   Três circulos que representam a mesma permutação circular.   Como não temos mais casos, o número total de permutações circulares com três elementos é 2.   > O número de permutações circulares com elementos distintos é   Se não considerássemos equivalentes disposições que possam coincidir por rotação, teríamos disposições.  Como para cada disposição, temos disposições equivalentes, dividindo o total de permutações por , obtemos     A lista com todas as permutações circulares, pode ser obtida com o seguinte comando:    O número de permutações circulares com 10 elementos pode ser calculado da seguinte forma:     Quantas rodas de ciranda podem ser formadas com 8 pessoas?  Basta calcular o número de permutações circulares de 8 elementos.      Quantas rodas de ciranda podem ser formadas com 8 pessoas, se duas determinadas pessoas não podem ficar juntas?   Calculamos o número de permutações circulares com 8 elementos, . Agora, subtraímos desse total, o número de permutações de 8 elementos, na qual, dois deles estão juntos.   Duas formas de organizar os elementos 1 e 2.    O que dá um total de permutações circulares, pois temos duas formas de permutar os dois elementos que estão juntos, depois disso, olhamos para a roda de ciranda como se tivesse apenas 7 elementos. Portanto a resposta é       Exercícios   De quantos modos 7 meninos e 7 meninas podem formar uma roda de ciranda de modo que pessoas de mesmo sexo não fiquem juntas?   3628800    De quantos modos 18 casais podem formar uma roda de ciranda de modo que cada homem permaneça ao lado de sua mulher?   93241325150797824000   (Fundação CEFETMINAS - Prefeitura de Barbacena - Enfermeiro - 2016). Em uma empresa, as reuniões ocorrem em uma sala de mesa circular, segundo os seguintes critérios:  O presidente e o vice-presidente sempre se sentam um ao lado do outro.  Os três gerentes sempre se sentam um ao lado do outro.  Considerando-se uma reunião com 9 pessoas, o número de maneiras que elas poderão ocupar os assentos de tal forma que esses critérios sejam cumpridos é     (VESTIBULAR UFPE – UFRPE \/ 1998 2ª ETAPA) Semelhante ao dominó, mas feito de pedras triangulares equiláteras, o jogo de trominó apresenta na face triangular superior um certo número de pontos com repetições, escolhidos de 1 a n, dispostos ao longo de cada aresta (ver figura).   Uma das peças com os valores 1, 2 e 4.    Quantas peças há no trominó, supondo ?  76   Observe que os números estão em disposição circular, então vamos separar as peças em três tipos:   Todos os lados com o mesmo valor. Cada peça pode ser formada de uma única forma, assim temos 6 peças desse tipo.  Dois lados possuem um valor e o terceiro lado possui um valor diferente. Uma vez decidido qual valor será usado duas vezes, cada peça pode ser formada de uma única forma, pois o número de permutações circulares com 3 elementos é 2, mas duas entradas são iguais, logo precisamos dividir por 2. Nesse caso temos modos de formar as peças.  Cada lado possui um valor diferente. Neste caso, cada peça pode ser formada de duas formas, pois o número de permutações circulares com 3 elementos é 2. Nesse caso temos modos de formar as peças.   Portanto, o número de soluções é:    "
},
{
  "id": "def-permutacao-circular",
  "level": "2",
  "url": "section-permutacoes-circulares.html#def-permutacao-circular",
  "type": "Definição",
  "number": "1.5.1",
  "title": "",
  "body": " O número de permutações circulares de elementos, é o número de maneiras de organizar objetos distintos ao longo de um círculo fixo (isto é, não pode ser retirado do plano e virado). Notação:   "
},
{
  "id": "remark-3",
  "level": "2",
  "url": "section-permutacoes-circulares.html#remark-3",
  "type": "Nota",
  "number": "1.5.2",
  "title": "",
  "body": " Observe que os três círculos da ( ) são equivalentes, ou seja, representam a mesma permutação circular, pois o segundo círculo pode ser obtido a partir do primeiro por uma rotação de e o terceiro círculo pode ser obtido a partir do primeiro por uma rotação de .   Três círculos que representam a mesma permutação circular.    "
},
{
  "id": "claim-1",
  "level": "2",
  "url": "section-permutacoes-circulares.html#claim-1",
  "type": "Afirmação",
  "number": "1.5.4",
  "title": "",
  "body": " O número total de permutações circulares com 3 elementos distintos é 2.   Observe que as permutações simples (1, 2, 3), (3, 1, 2) e (2, 3 ,1) podem ser identificadas com os círculos da ( ), colocando o primeiro elemento na parte mais alta do círculo, o segundo elemento do lado direito e o terceiro elemento do lado esquerdo. Portanto essas três permutações simples, correspondem a apenas uma permutação circular.  Observe que as permutações simples (1, 3, 2), (2, 1, 3) e (3, 2 ,1) podem ser identificadas com os círculos da ( ), da mesma forma que foi feito no caso anterior. Portanto essas três permutações simples, correspondem a apenas uma permutação circular.   Três circulos que representam a mesma permutação circular.   Como não temos mais casos, o número total de permutações circulares com três elementos é 2.  "
},
{
  "id": "teo-permutacao-circular",
  "level": "2",
  "url": "section-permutacoes-circulares.html#teo-permutacao-circular",
  "type": "Teorema",
  "number": "1.5.6",
  "title": "",
  "body": "> O número de permutações circulares com elementos distintos é   Se não considerássemos equivalentes disposições que possam coincidir por rotação, teríamos disposições.  Como para cada disposição, temos disposições equivalentes, dividindo o total de permutações por , obtemos   "
},
{
  "id": "tec-permutacao-circular",
  "level": "2",
  "url": "section-permutacoes-circulares.html#tec-permutacao-circular",
  "type": "Tecnologia",
  "number": "1.5.7",
  "title": "",
  "body": " A lista com todas as permutações circulares, pode ser obtida com o seguinte comando:    O número de permutações circulares com 10 elementos pode ser calculado da seguinte forma:   "
},
{
  "id": "example-16",
  "level": "2",
  "url": "section-permutacoes-circulares.html#example-16",
  "type": "Exemplo",
  "number": "1.5.8",
  "title": "",
  "body": " Quantas rodas de ciranda podem ser formadas com 8 pessoas?  Basta calcular o número de permutações circulares de 8 elementos.    "
},
{
  "id": "example-17",
  "level": "2",
  "url": "section-permutacoes-circulares.html#example-17",
  "type": "Exemplo",
  "number": "1.5.9",
  "title": "",
  "body": " Quantas rodas de ciranda podem ser formadas com 8 pessoas, se duas determinadas pessoas não podem ficar juntas?   Calculamos o número de permutações circulares com 8 elementos, . Agora, subtraímos desse total, o número de permutações de 8 elementos, na qual, dois deles estão juntos.   Duas formas de organizar os elementos 1 e 2.    O que dá um total de permutações circulares, pois temos duas formas de permutar os dois elementos que estão juntos, depois disso, olhamos para a roda de ciranda como se tivesse apenas 7 elementos. Portanto a resposta é    "
},
{
  "id": "exercise-45",
  "level": "2",
  "url": "section-permutacoes-circulares.html#exercise-45",
  "type": "Exercício",
  "number": "1.5.1",
  "title": "",
  "body": " De quantos modos 7 meninos e 7 meninas podem formar uma roda de ciranda de modo que pessoas de mesmo sexo não fiquem juntas?   3628800  "
},
{
  "id": "exercise-46",
  "level": "2",
  "url": "section-permutacoes-circulares.html#exercise-46",
  "type": "Exercício",
  "number": "1.5.2",
  "title": "",
  "body": " De quantos modos 18 casais podem formar uma roda de ciranda de modo que cada homem permaneça ao lado de sua mulher?   93241325150797824000  "
},
{
  "id": "exercise-47",
  "level": "2",
  "url": "section-permutacoes-circulares.html#exercise-47",
  "type": "Exercício",
  "number": "1.5.3",
  "title": "",
  "body": "(Fundação CEFETMINAS - Prefeitura de Barbacena - Enfermeiro - 2016). Em uma empresa, as reuniões ocorrem em uma sala de mesa circular, segundo os seguintes critérios:  O presidente e o vice-presidente sempre se sentam um ao lado do outro.  Os três gerentes sempre se sentam um ao lado do outro.  Considerando-se uma reunião com 9 pessoas, o número de maneiras que elas poderão ocupar os assentos de tal forma que esses critérios sejam cumpridos é    "
},
{
  "id": "exercise-48",
  "level": "2",
  "url": "section-permutacoes-circulares.html#exercise-48",
  "type": "Exercício",
  "number": "1.5.4",
  "title": "",
  "body": "(VESTIBULAR UFPE – UFRPE \/ 1998 2ª ETAPA) Semelhante ao dominó, mas feito de pedras triangulares equiláteras, o jogo de trominó apresenta na face triangular superior um certo número de pontos com repetições, escolhidos de 1 a n, dispostos ao longo de cada aresta (ver figura).   Uma das peças com os valores 1, 2 e 4.    Quantas peças há no trominó, supondo ?  76   Observe que os números estão em disposição circular, então vamos separar as peças em três tipos:   Todos os lados com o mesmo valor. Cada peça pode ser formada de uma única forma, assim temos 6 peças desse tipo.  Dois lados possuem um valor e o terceiro lado possui um valor diferente. Uma vez decidido qual valor será usado duas vezes, cada peça pode ser formada de uma única forma, pois o número de permutações circulares com 3 elementos é 2, mas duas entradas são iguais, logo precisamos dividir por 2. Nesse caso temos modos de formar as peças.  Cada lado possui um valor diferente. Neste caso, cada peça pode ser formada de duas formas, pois o número de permutações circulares com 3 elementos é 2. Nesse caso temos modos de formar as peças.   Portanto, o número de soluções é:  "
},
{
  "id": "section-permutacoes-com-repeticoes",
  "level": "1",
  "url": "section-permutacoes-com-repeticoes.html",
  "type": "Seção",
  "number": "1.6",
  "title": "Permutações com Repetições",
  "body": " Permutações com Repetições   Quando estamos contando o número de permutações, precisamos levar em consideração se todos os elementos são distintos ou não, pois a permutação de dois elementos idênticos não gera uma nova permutação. Veja o exemplo a seguir.   Quantos são os anagramas da palavra SAGEMATH?   Observe que a palavra SAGEMATH possui 8 letras, mas a letra A aparece duas vezes, o restante aparece apenas uma vez. Podemos imaginar, por enquanto, que a palavra é assim com , nesse caso teríamos um total de permutações.  Agora vamos resolver o problema das repetições. Observe que para cada permutação, trocar os A's de lugar não muda o anagrama. Portanto, precisamos dividir do total de permutações, o número de maneiras de ordenar os A's, como se fossem elementos distintos. Dessa forma, a resposta é     O número de permutações com repetições envolvendo objetos, dos quais existem objetos iguais a , objetos iguais a , e assim por diante, até um elemento que figura vezes, no qual, é denotado por     Obtendo a lista com todas as permutações com repetições dos elementos :      Considere os objetos da seguinte forma: observe que Para encontrar o número de formas de permutar esses elementos, vamos quebrar em etapas. Na primeira etapa, vamos escolher posições, dentre , para colocar . Na segunda etapa, vamos escolher posições, dentre , para colocar . Na -ésima etapa, vamos escolher posições, dentre , para colocar . Portanto, Calculando cada  E cancelando os , obtemos     Obtendo o número de permutações com repetições no Sage. Da linha 1 até a linha 5 temos uma implementação de uma função para efetuar esse cálculo. Na linha 6, a função está sendo usada para o caso e .   Para entender essa implementação e aprender mais sobre o SageMath veja a referência .    Quantos são os anagramas da palavra MATEMATICA?   Temos uma palavra com 10 letras. Das 10 letras, temos 3 A's, 2 M's e 2 T's e as outras aparecem uma única vez, portanto o número de anagramas desta palavra é      Quantos são os anagramas da palavra MATEMATICA que começam por vogal?   Se o anagrama começa por vogal, temos as possibilidades, A ou E ou I.  Começando com A, temos um total de anagramas, começando com E, temos um total de anagramas e começando com I, temos um total de anagramas. Portanto a resposta é Este cálculo pode ser efetuado no Sage da seguinte maneira:      De quantos modos podemos dividir 12 pessoas em três grupos de quatro pessoas cada?   Use os números de 1 à 12 para representar as pessoas. Desta forma, a posição de cada permutação dos dígitos: serve para representar quem está no grupo 1, no grupo 2 e no grupo 3, respectivamente. Assim pela ordem que está escrito, os números que estão no grupo 1 são: , no grupo 2 são e no grupo 3 são .  Desta forma, usando permutação com repetição para , o número de maneiras de dividir 12 pessoas em três grupos, levando em consideração a ordem dos grupos é  Como a ordem dos grupos não é importante, estamos contando a mais. Assim, precisamos dividir tudo pelo número de maneiras de ordenar os 3 grupos que é 3!. Portanto a resposta é      Exercícios  Um byte, em um computador, é uma sequência de 8 algarismos formada apenas com e . Determine quantos bytes existem formados com três e cinco .    Quantos são os anagramas da palavra:  PRECEDENTE;  PROPONENTE;  FOTOSSINTETIZANTES.             .    Refaça o exercício anterior com as seguintes condições:  A palavra começa com vogal;  A palavra começa e termina com consoante.     Quantos números de 8 dígitos, maiores que 50.000.000, podem ser formados usando apenas os algarismos 1, 2, 5, 5, 5, 7, 7, 7?   840    De quantos modos podemos colocar em fila 6 letras A, 6 letras B, 5 letras C e 4 letras D, de modo que não haja duas letras C juntas?   10406235840    Quantas são as opções que temos de colocar 10 bolinhas e 7 barras em sequência?   19448    (OPEMAT 2016 - nível 2) A figura abaixo representa o mapa de uma cidade. Cada aresta representa uma rua e cada vértice representa um cruzamento. Quantos são os trajetos de comprimento mínimo ligando o ponto A ao ponto B?    1743   (OBM 2011 - 2ª fase do nível 3) Uma sequência de letras, com ou sem sentido, é dita alternada quando é formada alternadamente por consoantes e vogais. Por exemplo, EZEQAF, MATEMÁTICA, LEGAL e ANIMADA são palavras alternadas, mas DSOIUF, DINHEIRO e ORDINÁRIO não são. Quantos anagramas da palavra FELICIDADE (incluindo a palavra FELICIDADE) são sequências alternadas?   3600   As consoantes de FELICIDADE são F, L, C, D, D e as vogais são E, I, I, A, E. Como são 5 vogais e 5 consoantes, cada anagrama alternado terá cada consoante em posição ímpar ou em posição par. Organizando as consoantes em posições ímpares, ficamos com a seguinte organização   Na qual, os espaços serão ocupados por vogais. Assim, temos um total de maneiras de ordenar essas consoantes. Para ordenar as vogais, temos maneiras, pois temos no total 5 letras, sendo duas letras E, duas letras I e uma letra A.  Como podemos alterar as vogais com as consoantes, o número de anagramas alternados de FELICIDADE é     De quantos formas 12 estudantes podem ser divididos e colocados em 3 salas, sendo 4 na primeira, 5 na segunda e 3 na terceira?   27720   Pense na seguinte lista: Para cada permutação da lista , podemos distribuir os estudantes nas salas da seguinte maneira. Use a posição do número para indicar a pessoa e o número para indicar a sala. Desta forma, a resposta é:   Por exemplo, a permutação identidade, que é a apresentada na lista indica que a 1ª, a 2ª a 3ª e a 4ª pessoa deve ficar na sala 1. A 4ª, a 5ª, a 6ª, a 7ª, e a 8ª pessoa deve ficar na sala 2 e assim por diante.    De quantos modos 8 pessoas podem ocupar duas salas distintas, devendo cada sala conter pelo menos 3 pessoas?   182   Observe que temos 3 casos para distribuir as pessoas nas duas salas.  1º caso: 3 pessoas na sala 1 e 5 pessoas na sala 2. Neste caso temos um total de soluções.  2º caso: 4 pessoas na sala 1 e 4 pessoas na sala 2. Neste caso temos um total de soluções.  3º caso: 5 pessoas na sala 1 e 3 pessoas na sala 2. Neste caso temos um total de soluções.  Portanto a resposta é     Um baralho tem 52 cartas. De quantos modos podemos distribuí-las entre 4 jogadores, de modo que cada um receba 13 cartas?   53644737765488792839237440000   Pense em uma lista composta por 13 números 1, 13 números 2, 13 números 3 e 13 números 4. O número de permutações com repetições desta lista é o número de modos de distribuir as 52 duas cartas entre os 4 jogadores, com cada um recebendo 13 cartas.  A justificativa é a seguinte. Para cada elemento da lista permutada, use a posição do elemento para pegar a carta que deve estar em uma pilha ou ordenada, e use o número para indicar a pessoa, sendo o número 1 indicando a primeira pessoa e assim por diante. A resposta é:     No mapa abaixo estão esboçadas as ruas de um bairro. As ruas verticais são paralelas entre si e é igual a distância entre ruas consecutivas; o mesmo acontece com as ruas horizontais. Calcule o número de formas de sair de A e chegar até B percorrendo a menor distância possível.    735   Podemos separar os caminhos que saem de A e chegam em B em tipos disjuntos.   Mapa da solução.    1º tipo: De A para X e de X para B. Nesse caso temos caminhos de A para X e caminhos de X para B. No total temos caminhos do 1º tipo.  2º tipo: De A para Y e de Y para B. Nesse caso temos caminhos de A para Y e caminhos de Y para B. No total temos caminhos do 2º tipo.  Como os caminhos do 1º e 2º tipos são disjuntos a resposta é     João vai comprar algo que custa centavos em uma máquina automática e dispõe de moedas de centavos do mesmo modelo e moedas de centavos também do mesmo modelo. Assim, sendo o número de diferentes sequências de moedas que ele pode inserir de modo a totalizar os 55 centavos, determine o valor de .     João pode escolher os valores das moedas de maneiras, em cada caso, existem várias maneiras de ordenar as moedas escolhida:  moedas de centavos e de centavos, totalizando ordens possíveis;  moedas de centavos e de centavos, totalizando ordens possíveis;  moedas de centavos e de centavos, totalizando ordens possíveis;  moedas de centavos e de centavos, totalizando ordens possíveis.  Portanto, a resposta é    (Caminhos de Delannoy) Diremos que uma partícula faz um caminho de Delannoy se estando no ponto ela pode se deslocar para os pontos: ou ou . Calcule o número de caminhos de Delannoy da origem até o ponto . E da origem até o ponto .   Digite uma sequência de L's, N's e D's e clique no botão \"Update\" para obter o respectivo caminho no reticulado.   Um caminho de Delannoy no reticulado.       "
},
{
  "id": "example-18",
  "level": "2",
  "url": "section-permutacoes-com-repeticoes.html#example-18",
  "type": "Exemplo",
  "number": "1.6.1",
  "title": "",
  "body": " Quantos são os anagramas da palavra SAGEMATH?   Observe que a palavra SAGEMATH possui 8 letras, mas a letra A aparece duas vezes, o restante aparece apenas uma vez. Podemos imaginar, por enquanto, que a palavra é assim com , nesse caso teríamos um total de permutações.  Agora vamos resolver o problema das repetições. Observe que para cada permutação, trocar os A's de lugar não muda o anagrama. Portanto, precisamos dividir do total de permutações, o número de maneiras de ordenar os A's, como se fossem elementos distintos. Dessa forma, a resposta é   "
},
{
  "id": "def-perm_repet",
  "level": "2",
  "url": "section-permutacoes-com-repeticoes.html#def-perm_repet",
  "type": "Definição",
  "number": "1.6.2",
  "title": "",
  "body": " O número de permutações com repetições envolvendo objetos, dos quais existem objetos iguais a , objetos iguais a , e assim por diante, até um elemento que figura vezes, no qual, é denotado por    "
},
{
  "id": "technology-9",
  "level": "2",
  "url": "section-permutacoes-com-repeticoes.html#technology-9",
  "type": "Tecnologia",
  "number": "1.6.3",
  "title": "",
  "body": "Obtendo a lista com todas as permutações com repetições dos elementos :  "
},
{
  "id": "teo-permutacao-repeticao",
  "level": "2",
  "url": "section-permutacoes-com-repeticoes.html#teo-permutacao-repeticao",
  "type": "Teorema",
  "number": "1.6.4",
  "title": "",
  "body": "  Considere os objetos da seguinte forma: observe que Para encontrar o número de formas de permutar esses elementos, vamos quebrar em etapas. Na primeira etapa, vamos escolher posições, dentre , para colocar . Na segunda etapa, vamos escolher posições, dentre , para colocar . Na -ésima etapa, vamos escolher posições, dentre , para colocar . Portanto, Calculando cada  E cancelando os , obtemos   "
},
{
  "id": "tec-permutacao-repeticao",
  "level": "2",
  "url": "section-permutacoes-com-repeticoes.html#tec-permutacao-repeticao",
  "type": "Tecnologia",
  "number": "1.6.5",
  "title": "",
  "body": " Obtendo o número de permutações com repetições no Sage. Da linha 1 até a linha 5 temos uma implementação de uma função para efetuar esse cálculo. Na linha 6, a função está sendo usada para o caso e .   Para entender essa implementação e aprender mais sobre o SageMath veja a referência .  "
},
{
  "id": "example-19",
  "level": "2",
  "url": "section-permutacoes-com-repeticoes.html#example-19",
  "type": "Exemplo",
  "number": "1.6.6",
  "title": "",
  "body": " Quantos são os anagramas da palavra MATEMATICA?   Temos uma palavra com 10 letras. Das 10 letras, temos 3 A's, 2 M's e 2 T's e as outras aparecem uma única vez, portanto o número de anagramas desta palavra é    "
},
{
  "id": "example-20",
  "level": "2",
  "url": "section-permutacoes-com-repeticoes.html#example-20",
  "type": "Exemplo",
  "number": "1.6.7",
  "title": "",
  "body": " Quantos são os anagramas da palavra MATEMATICA que começam por vogal?   Se o anagrama começa por vogal, temos as possibilidades, A ou E ou I.  Começando com A, temos um total de anagramas, começando com E, temos um total de anagramas e começando com I, temos um total de anagramas. Portanto a resposta é Este cálculo pode ser efetuado no Sage da seguinte maneira:    "
},
{
  "id": "exemplo_permut_repet",
  "level": "2",
  "url": "section-permutacoes-com-repeticoes.html#exemplo_permut_repet",
  "type": "Exemplo",
  "number": "1.6.8",
  "title": "",
  "body": " De quantos modos podemos dividir 12 pessoas em três grupos de quatro pessoas cada?   Use os números de 1 à 12 para representar as pessoas. Desta forma, a posição de cada permutação dos dígitos: serve para representar quem está no grupo 1, no grupo 2 e no grupo 3, respectivamente. Assim pela ordem que está escrito, os números que estão no grupo 1 são: , no grupo 2 são e no grupo 3 são .  Desta forma, usando permutação com repetição para , o número de maneiras de dividir 12 pessoas em três grupos, levando em consideração a ordem dos grupos é  Como a ordem dos grupos não é importante, estamos contando a mais. Assim, precisamos dividir tudo pelo número de maneiras de ordenar os 3 grupos que é 3!. Portanto a resposta é    "
},
{
  "id": "exercise-49",
  "level": "2",
  "url": "section-permutacoes-com-repeticoes.html#exercise-49",
  "type": "Exercício",
  "number": "1.6.1",
  "title": "",
  "body": "Um byte, em um computador, é uma sequência de 8 algarismos formada apenas com e . Determine quantos bytes existem formados com três e cinco .   "
},
{
  "id": "exercise-50",
  "level": "2",
  "url": "section-permutacoes-com-repeticoes.html#exercise-50",
  "type": "Exercício",
  "number": "1.6.2",
  "title": "",
  "body": "Quantos são os anagramas da palavra:  PRECEDENTE;  PROPONENTE;  FOTOSSINTETIZANTES.             .   "
},
{
  "id": "exercise-51",
  "level": "2",
  "url": "section-permutacoes-com-repeticoes.html#exercise-51",
  "type": "Exercício",
  "number": "1.6.3",
  "title": "",
  "body": "Refaça o exercício anterior com as seguintes condições:  A palavra começa com vogal;  A palavra começa e termina com consoante.   "
},
{
  "id": "exercise-52",
  "level": "2",
  "url": "section-permutacoes-com-repeticoes.html#exercise-52",
  "type": "Exercício",
  "number": "1.6.4",
  "title": "",
  "body": " Quantos números de 8 dígitos, maiores que 50.000.000, podem ser formados usando apenas os algarismos 1, 2, 5, 5, 5, 7, 7, 7?   840  "
},
{
  "id": "exercise-53",
  "level": "2",
  "url": "section-permutacoes-com-repeticoes.html#exercise-53",
  "type": "Exercício",
  "number": "1.6.5",
  "title": "",
  "body": " De quantos modos podemos colocar em fila 6 letras A, 6 letras B, 5 letras C e 4 letras D, de modo que não haja duas letras C juntas?   10406235840  "
},
{
  "id": "exercise-54",
  "level": "2",
  "url": "section-permutacoes-com-repeticoes.html#exercise-54",
  "type": "Exercício",
  "number": "1.6.6",
  "title": "",
  "body": " Quantas são as opções que temos de colocar 10 bolinhas e 7 barras em sequência?   19448  "
},
{
  "id": "exercise-55",
  "level": "2",
  "url": "section-permutacoes-com-repeticoes.html#exercise-55",
  "type": "Exercício",
  "number": "1.6.7",
  "title": "",
  "body": " (OPEMAT 2016 - nível 2) A figura abaixo representa o mapa de uma cidade. Cada aresta representa uma rua e cada vértice representa um cruzamento. Quantos são os trajetos de comprimento mínimo ligando o ponto A ao ponto B?    1743  "
},
{
  "id": "exercise-56",
  "level": "2",
  "url": "section-permutacoes-com-repeticoes.html#exercise-56",
  "type": "Exercício",
  "number": "1.6.8",
  "title": "",
  "body": "(OBM 2011 - 2ª fase do nível 3) Uma sequência de letras, com ou sem sentido, é dita alternada quando é formada alternadamente por consoantes e vogais. Por exemplo, EZEQAF, MATEMÁTICA, LEGAL e ANIMADA são palavras alternadas, mas DSOIUF, DINHEIRO e ORDINÁRIO não são. Quantos anagramas da palavra FELICIDADE (incluindo a palavra FELICIDADE) são sequências alternadas?   3600   As consoantes de FELICIDADE são F, L, C, D, D e as vogais são E, I, I, A, E. Como são 5 vogais e 5 consoantes, cada anagrama alternado terá cada consoante em posição ímpar ou em posição par. Organizando as consoantes em posições ímpares, ficamos com a seguinte organização   Na qual, os espaços serão ocupados por vogais. Assim, temos um total de maneiras de ordenar essas consoantes. Para ordenar as vogais, temos maneiras, pois temos no total 5 letras, sendo duas letras E, duas letras I e uma letra A.  Como podemos alterar as vogais com as consoantes, o número de anagramas alternados de FELICIDADE é   "
},
{
  "id": "exercise-57",
  "level": "2",
  "url": "section-permutacoes-com-repeticoes.html#exercise-57",
  "type": "Exercício",
  "number": "1.6.9",
  "title": "",
  "body": " De quantos formas 12 estudantes podem ser divididos e colocados em 3 salas, sendo 4 na primeira, 5 na segunda e 3 na terceira?   27720   Pense na seguinte lista: Para cada permutação da lista , podemos distribuir os estudantes nas salas da seguinte maneira. Use a posição do número para indicar a pessoa e o número para indicar a sala. Desta forma, a resposta é:   Por exemplo, a permutação identidade, que é a apresentada na lista indica que a 1ª, a 2ª a 3ª e a 4ª pessoa deve ficar na sala 1. A 4ª, a 5ª, a 6ª, a 7ª, e a 8ª pessoa deve ficar na sala 2 e assim por diante.  "
},
{
  "id": "exercise-58",
  "level": "2",
  "url": "section-permutacoes-com-repeticoes.html#exercise-58",
  "type": "Exercício",
  "number": "1.6.10",
  "title": "",
  "body": " De quantos modos 8 pessoas podem ocupar duas salas distintas, devendo cada sala conter pelo menos 3 pessoas?   182   Observe que temos 3 casos para distribuir as pessoas nas duas salas.  1º caso: 3 pessoas na sala 1 e 5 pessoas na sala 2. Neste caso temos um total de soluções.  2º caso: 4 pessoas na sala 1 e 4 pessoas na sala 2. Neste caso temos um total de soluções.  3º caso: 5 pessoas na sala 1 e 3 pessoas na sala 2. Neste caso temos um total de soluções.  Portanto a resposta é   "
},
{
  "id": "exercise-59",
  "level": "2",
  "url": "section-permutacoes-com-repeticoes.html#exercise-59",
  "type": "Exercício",
  "number": "1.6.11",
  "title": "",
  "body": " Um baralho tem 52 cartas. De quantos modos podemos distribuí-las entre 4 jogadores, de modo que cada um receba 13 cartas?   53644737765488792839237440000   Pense em uma lista composta por 13 números 1, 13 números 2, 13 números 3 e 13 números 4. O número de permutações com repetições desta lista é o número de modos de distribuir as 52 duas cartas entre os 4 jogadores, com cada um recebendo 13 cartas.  A justificativa é a seguinte. Para cada elemento da lista permutada, use a posição do elemento para pegar a carta que deve estar em uma pilha ou ordenada, e use o número para indicar a pessoa, sendo o número 1 indicando a primeira pessoa e assim por diante. A resposta é:   "
},
{
  "id": "exercise-60",
  "level": "2",
  "url": "section-permutacoes-com-repeticoes.html#exercise-60",
  "type": "Exercício",
  "number": "1.6.12",
  "title": "",
  "body": " No mapa abaixo estão esboçadas as ruas de um bairro. As ruas verticais são paralelas entre si e é igual a distância entre ruas consecutivas; o mesmo acontece com as ruas horizontais. Calcule o número de formas de sair de A e chegar até B percorrendo a menor distância possível.    735   Podemos separar os caminhos que saem de A e chegam em B em tipos disjuntos.   Mapa da solução.    1º tipo: De A para X e de X para B. Nesse caso temos caminhos de A para X e caminhos de X para B. No total temos caminhos do 1º tipo.  2º tipo: De A para Y e de Y para B. Nesse caso temos caminhos de A para Y e caminhos de Y para B. No total temos caminhos do 2º tipo.  Como os caminhos do 1º e 2º tipos são disjuntos a resposta é   "
},
{
  "id": "exercise-61",
  "level": "2",
  "url": "section-permutacoes-com-repeticoes.html#exercise-61",
  "type": "Exercício",
  "number": "1.6.13",
  "title": "",
  "body": " João vai comprar algo que custa centavos em uma máquina automática e dispõe de moedas de centavos do mesmo modelo e moedas de centavos também do mesmo modelo. Assim, sendo o número de diferentes sequências de moedas que ele pode inserir de modo a totalizar os 55 centavos, determine o valor de .     João pode escolher os valores das moedas de maneiras, em cada caso, existem várias maneiras de ordenar as moedas escolhida:  moedas de centavos e de centavos, totalizando ordens possíveis;  moedas de centavos e de centavos, totalizando ordens possíveis;  moedas de centavos e de centavos, totalizando ordens possíveis;  moedas de centavos e de centavos, totalizando ordens possíveis.  Portanto, a resposta é   "
},
{
  "id": "exercise-62",
  "level": "2",
  "url": "section-permutacoes-com-repeticoes.html#exercise-62",
  "type": "Exercício",
  "number": "1.6.14",
  "title": "(Caminhos de Delannoy).",
  "body": "(Caminhos de Delannoy) Diremos que uma partícula faz um caminho de Delannoy se estando no ponto ela pode se deslocar para os pontos: ou ou . Calcule o número de caminhos de Delannoy da origem até o ponto . E da origem até o ponto .   Digite uma sequência de L's, N's e D's e clique no botão \"Update\" para obter o respectivo caminho no reticulado.   Um caminho de Delannoy no reticulado.     "
},
{
  "id": "section-combinacoes-completas",
  "level": "1",
  "url": "section-combinacoes-completas.html",
  "type": "Seção",
  "number": "1.7",
  "title": "Combinações Completas",
  "body": " Combinações Completas   Na combinação completa (ou combinação com repetição ), contamos o número de maneiras de escolher elementos de um conjunto, sendo permitido escolher um elemento repetidamente. Antes de formalizar o conceito, começamos com um exemplo que ilustra bem essa noção.   Em uma determinada sorveteria há 6 sabores disponíveis, de quantos modos pode ser feito um pedido de uma taça com 3 bolas de sorvete?   Denote cada sabor por um número entre e . Note que este problema é equivalente ao de encontrar o número de soluções inteiras da equação: na qual, cada representa a quantidade de bolas de sorvete com sabor . Claramente, temos a restrição , pois não podemos pegar uma quantidade negativa de bolas de sorvete.  Vamos mostrar que o problema de encontrar o número de soluções é equivalente a encontrar o número de permutações com repetições de uma sequência com elementos de um tipo e elementos de outro tipo.  Escreva de até , entre uma incógnita e outra coloque na linha de baixo um traço vertical. Para representar a quantidade bolas de sorvete com sabor ou , coloque a respectiva quantidade de bolas antes do primeiro traço ou depois do último traço, respectivamente. Para representar a quantidade de bolas de sorvete com sabor , com , coloque a quantidade de bolas abaixo de , entre dois traços consecutivos. Assim, a solução é representada por:   Observe que cada permutação dessa representação de traços e bolas é uma solução da Equação e que cada solução da Equação pode ser representada com traços de bolas (Existe uma bijeção entre as duas coisas).  Portanto, para encontrar o número de soluções da Equação , basta calcular pois, temos 5 traços e 3 bolas, então estamos permutando um total de 8 elementos, sendo 5 de um tipo e 3 de outro tipo.      O número de combinações completas de elementos, tomados a é o número de formas de escolher elementos dentre disponíveis, podendo escolher repetidamente os objetos, até obter a quantidade .  O número de combinações completas de elementos, tomados a é denotado por:   As combinações completas dos objetos tomados 3 a 3 são:     Calcular é o mesmo que encontrar o número de soluções da equação: Usando a ideia da representação de \"bolas e traços\" da Solução do ( ) vamos ficar com bolas e traços. O cálculo do número de permutações destes objetos com objetos de um tipo e objetos de outro tipo é dado por:     Para obter o número de combinações completas de ,tomados a , usamos o código binomial(p+n-1, p).     Quantas são as soluções inteiras e não negativas de   O número de soluções desta equação, com é o número de combinações completas de 10 elementos, tomados 20 a 20:      Quantas são as soluções inteiras da equação com , e ?   Defina   Substituindo, temos ou seja Desta forma, o número de soluções de será a solução do problema, pois, quando teremos , quando teremos e quando teremos . Portanto a resposta é      Quantas são as soluções inteiras e não negativas de   Observe que uma possibilidade seria calcular o número de soluções de cada um dos casos: A soma do número de soluções de cada um dos casos é a resposta, no entanto, é inviável fazer tal cálculo. Felizmente temos outra forma de resolver este problema.  Observe que existe uma bijeção entre o conjunto das soluções de com o conjunto das soluções da equação :   Para entender a bijeção, observe o seguinte. Somando , nos dois lados da igualdade, na linha de , não mudamos absolutamente nada e ficamos com:   Cada solução da linha , é uma solução de com o valor de igual a . E para cada a solução de vai ser a solução da linha de .  Portanto a resposta é o número de solução da equação que é dado por:     (VESTIBULAR UFPE – UFRPE \/ 1998 2ª ETAPA) Semelhante ao dominó, mas feito de pedras triangulares equiláteras, o jogo de trominó apresenta na face triangular superior um certo número de pontos com repetições, escolhidos de 1 a n, dispostos ao longo de cada aresta (ver figura).   Uma das peças com os valores 1, 2 e 4.    Quantas peças há no trominó, supondo n = 6?   Observe que os números estão em disposição circular, então vamos separar as peças em três tipos:   Todos os lados com o mesmo valor. Cada peça pode ser formada de uma única forma.  Dois lados possuem um valor e o terceiro lado possui um valor diferente. Cada peça pode ser formada de uma única forma, pois o número de permutações circulares com 3 elementos é 2, mas como temos duas entradas iguais, precisamos dividir por 2.  Cada lado possui um valor diferente. Cada peça pode ser formada de duas formas, pois o número de permutações circulares com 3 elementos é 2.   Inicialmente, vamos contar como se em cada tipo, as peças só pudessem ser formadas de uma forma, depois vamos acrescentar a quantidade de peças do terceiro tipo, que fica faltando nessa contagem inicial.  Temos que escolher os valores de cada um dos 3 lados de cada peça do trominó. Como os valores vão de 1 até 6 e são 3 lados, o número de peças do trominó (sem contar as permutações circulares) para é o número de soluções inteiras não negativas da equação: que é dado por .  Agora precisamos contar as peças, do terceiro tipo, que estão faltando. Como os três valores são diferentes, temos 6 opções de valores para escolher 3 e para cada escolha, temos duas formas de organizar na peça do trominó, portanto o número de peças desse tipo é: Já que, a metade das peças do terceiro tipo foram contadas uma vez pela combinação completa, , a quantidade total de peças é:     Exercícios   Quantas são as soluções inteiras positivas de ?      Quantas são as peças de um dominó comum?   28   Sejam variáveis. Cada solução não negativa da equação: representa uma pedra do dominó. Portanto, o número de pedras do dominó é    (UFPE 2012) As pedras de um dominó usual são compostas por dois quadrados, com 7 possíveis marcas (de zero pontos até 6 pontos). Quantas pedras terá um dominó se cada quadrado puder ter até 9 pontos? Veja no desenho abaixo um exemplo de uma nova pedra do dominó.    55   Sejam variáveis. Cada solução não negativa da equação: representa uma pedra do dominó. Portanto, o número de pedras do dominó é    Um bar vende três tipos de cerveja: Heineken, Spaten e Budweiser. De quantos modos uma pessoa pode comprar 7 garrafas de cerveja?   36   O número de soluções deste problema é o mesmo que o número de solução inteiras, não negativas da equação: Portanto a resposta é     Quantas são as soluções inteiras não-negativas de nas quais ?   200    De quantos modos podem ser pintados 15 objetos iguais usando 6 cores diferentes?   15504    Quantos inteiros entre e , inclusive, possui a propriedade: \"cada dígito é menor ou igual ao seu sucessor\"?   24309    De quantas maneiras é possível colocar 10 anéis diferentes em 8 dedos?   70572902400    "
},
{
  "id": "exem-com-completa",
  "level": "2",
  "url": "section-combinacoes-completas.html#exem-com-completa",
  "type": "Exemplo",
  "number": "1.7.1",
  "title": "",
  "body": " Em uma determinada sorveteria há 6 sabores disponíveis, de quantos modos pode ser feito um pedido de uma taça com 3 bolas de sorvete?   Denote cada sabor por um número entre e . Note que este problema é equivalente ao de encontrar o número de soluções inteiras da equação: na qual, cada representa a quantidade de bolas de sorvete com sabor . Claramente, temos a restrição , pois não podemos pegar uma quantidade negativa de bolas de sorvete.  Vamos mostrar que o problema de encontrar o número de soluções é equivalente a encontrar o número de permutações com repetições de uma sequência com elementos de um tipo e elementos de outro tipo.  Escreva de até , entre uma incógnita e outra coloque na linha de baixo um traço vertical. Para representar a quantidade bolas de sorvete com sabor ou , coloque a respectiva quantidade de bolas antes do primeiro traço ou depois do último traço, respectivamente. Para representar a quantidade de bolas de sorvete com sabor , com , coloque a quantidade de bolas abaixo de , entre dois traços consecutivos. Assim, a solução é representada por:   Observe que cada permutação dessa representação de traços e bolas é uma solução da Equação e que cada solução da Equação pode ser representada com traços de bolas (Existe uma bijeção entre as duas coisas).  Portanto, para encontrar o número de soluções da Equação , basta calcular pois, temos 5 traços e 3 bolas, então estamos permutando um total de 8 elementos, sendo 5 de um tipo e 3 de outro tipo.   "
},
{
  "id": "def-combinacao-completa",
  "level": "2",
  "url": "section-combinacoes-completas.html#def-combinacao-completa",
  "type": "Definição",
  "number": "1.7.2",
  "title": "",
  "body": " O número de combinações completas de elementos, tomados a é o número de formas de escolher elementos dentre disponíveis, podendo escolher repetidamente os objetos, até obter a quantidade .  O número de combinações completas de elementos, tomados a é denotado por:  "
},
{
  "id": "remark-4",
  "level": "2",
  "url": "section-combinacoes-completas.html#remark-4",
  "type": "Nota",
  "number": "1.7.3",
  "title": "",
  "body": "As combinações completas dos objetos tomados 3 a 3 são:  "
},
{
  "id": "teo-combinacao-completa",
  "level": "2",
  "url": "section-combinacoes-completas.html#teo-combinacao-completa",
  "type": "Teorema",
  "number": "1.7.4",
  "title": "",
  "body": "  Calcular é o mesmo que encontrar o número de soluções da equação: Usando a ideia da representação de \"bolas e traços\" da Solução do ( ) vamos ficar com bolas e traços. O cálculo do número de permutações destes objetos com objetos de um tipo e objetos de outro tipo é dado por:   "
},
{
  "id": "tec-combinacao-completa",
  "level": "2",
  "url": "section-combinacoes-completas.html#tec-combinacao-completa",
  "type": "Tecnologia",
  "number": "1.7.5",
  "title": "",
  "body": " Para obter o número de combinações completas de ,tomados a , usamos o código binomial(p+n-1, p).   "
},
{
  "id": "example-23",
  "level": "2",
  "url": "section-combinacoes-completas.html#example-23",
  "type": "Exemplo",
  "number": "1.7.6",
  "title": "",
  "body": " Quantas são as soluções inteiras e não negativas de   O número de soluções desta equação, com é o número de combinações completas de 10 elementos, tomados 20 a 20:    "
},
{
  "id": "example-24",
  "level": "2",
  "url": "section-combinacoes-completas.html#example-24",
  "type": "Exemplo",
  "number": "1.7.7",
  "title": "",
  "body": " Quantas são as soluções inteiras da equação com , e ?   Defina   Substituindo, temos ou seja Desta forma, o número de soluções de será a solução do problema, pois, quando teremos , quando teremos e quando teremos . Portanto a resposta é    "
},
{
  "id": "example-25",
  "level": "2",
  "url": "section-combinacoes-completas.html#example-25",
  "type": "Exemplo",
  "number": "1.7.8",
  "title": "",
  "body": " Quantas são as soluções inteiras e não negativas de   Observe que uma possibilidade seria calcular o número de soluções de cada um dos casos: A soma do número de soluções de cada um dos casos é a resposta, no entanto, é inviável fazer tal cálculo. Felizmente temos outra forma de resolver este problema.  Observe que existe uma bijeção entre o conjunto das soluções de com o conjunto das soluções da equação :   Para entender a bijeção, observe o seguinte. Somando , nos dois lados da igualdade, na linha de , não mudamos absolutamente nada e ficamos com:   Cada solução da linha , é uma solução de com o valor de igual a . E para cada a solução de vai ser a solução da linha de .  Portanto a resposta é o número de solução da equação que é dado por:    "
},
{
  "id": "example-26",
  "level": "2",
  "url": "section-combinacoes-completas.html#example-26",
  "type": "Exemplo",
  "number": "1.7.9",
  "title": "",
  "body": "(VESTIBULAR UFPE – UFRPE \/ 1998 2ª ETAPA) Semelhante ao dominó, mas feito de pedras triangulares equiláteras, o jogo de trominó apresenta na face triangular superior um certo número de pontos com repetições, escolhidos de 1 a n, dispostos ao longo de cada aresta (ver figura).   Uma das peças com os valores 1, 2 e 4.    Quantas peças há no trominó, supondo n = 6?   Observe que os números estão em disposição circular, então vamos separar as peças em três tipos:   Todos os lados com o mesmo valor. Cada peça pode ser formada de uma única forma.  Dois lados possuem um valor e o terceiro lado possui um valor diferente. Cada peça pode ser formada de uma única forma, pois o número de permutações circulares com 3 elementos é 2, mas como temos duas entradas iguais, precisamos dividir por 2.  Cada lado possui um valor diferente. Cada peça pode ser formada de duas formas, pois o número de permutações circulares com 3 elementos é 2.   Inicialmente, vamos contar como se em cada tipo, as peças só pudessem ser formadas de uma forma, depois vamos acrescentar a quantidade de peças do terceiro tipo, que fica faltando nessa contagem inicial.  Temos que escolher os valores de cada um dos 3 lados de cada peça do trominó. Como os valores vão de 1 até 6 e são 3 lados, o número de peças do trominó (sem contar as permutações circulares) para é o número de soluções inteiras não negativas da equação: que é dado por .  Agora precisamos contar as peças, do terceiro tipo, que estão faltando. Como os três valores são diferentes, temos 6 opções de valores para escolher 3 e para cada escolha, temos duas formas de organizar na peça do trominó, portanto o número de peças desse tipo é: Já que, a metade das peças do terceiro tipo foram contadas uma vez pela combinação completa, , a quantidade total de peças é:   "
},
{
  "id": "exercise-63",
  "level": "2",
  "url": "section-combinacoes-completas.html#exercise-63",
  "type": "Exercício",
  "number": "1.7.1",
  "title": "",
  "body": " Quantas são as soluções inteiras positivas de ?    "
},
{
  "id": "exercise-64",
  "level": "2",
  "url": "section-combinacoes-completas.html#exercise-64",
  "type": "Exercício",
  "number": "1.7.2",
  "title": "",
  "body": " Quantas são as peças de um dominó comum?   28   Sejam variáveis. Cada solução não negativa da equação: representa uma pedra do dominó. Portanto, o número de pedras do dominó é  "
},
{
  "id": "exercise-65",
  "level": "2",
  "url": "section-combinacoes-completas.html#exercise-65",
  "type": "Exercício",
  "number": "1.7.3",
  "title": "",
  "body": " (UFPE 2012) As pedras de um dominó usual são compostas por dois quadrados, com 7 possíveis marcas (de zero pontos até 6 pontos). Quantas pedras terá um dominó se cada quadrado puder ter até 9 pontos? Veja no desenho abaixo um exemplo de uma nova pedra do dominó.    55   Sejam variáveis. Cada solução não negativa da equação: representa uma pedra do dominó. Portanto, o número de pedras do dominó é  "
},
{
  "id": "exercise-66",
  "level": "2",
  "url": "section-combinacoes-completas.html#exercise-66",
  "type": "Exercício",
  "number": "1.7.4",
  "title": "",
  "body": " Um bar vende três tipos de cerveja: Heineken, Spaten e Budweiser. De quantos modos uma pessoa pode comprar 7 garrafas de cerveja?   36   O número de soluções deste problema é o mesmo que o número de solução inteiras, não negativas da equação: Portanto a resposta é   "
},
{
  "id": "exercise-67",
  "level": "2",
  "url": "section-combinacoes-completas.html#exercise-67",
  "type": "Exercício",
  "number": "1.7.5",
  "title": "",
  "body": " Quantas são as soluções inteiras não-negativas de nas quais ?   200  "
},
{
  "id": "exercise-68",
  "level": "2",
  "url": "section-combinacoes-completas.html#exercise-68",
  "type": "Exercício",
  "number": "1.7.6",
  "title": "",
  "body": " De quantos modos podem ser pintados 15 objetos iguais usando 6 cores diferentes?   15504  "
},
{
  "id": "exercise-69",
  "level": "2",
  "url": "section-combinacoes-completas.html#exercise-69",
  "type": "Exercício",
  "number": "1.7.7",
  "title": "",
  "body": " Quantos inteiros entre e , inclusive, possui a propriedade: \"cada dígito é menor ou igual ao seu sucessor\"?   24309  "
},
{
  "id": "exercise-70",
  "level": "2",
  "url": "section-combinacoes-completas.html#exercise-70",
  "type": "Exercício",
  "number": "1.7.8",
  "title": "",
  "body": " De quantas maneiras é possível colocar 10 anéis diferentes em 8 dedos?   70572902400  "
},
{
  "id": "section-inclusao-exclusao",
  "level": "1",
  "url": "section-inclusao-exclusao.html",
  "type": "Seção",
  "number": "2.1",
  "title": "Princípio da Inclusão-Exclusão",
  "body": " Princípio da Inclusão-Exclusão     O Princípio da Inclusão-Exclusão para 2 e 3 conjuntos   Sejam e conjuntos finitos, então   Diagrama de Venn para .    Ou seja, a cardinalidade de é igual a cardinalidade de mais a cardinalidade de menos a cardinalidade de .   Sejam e conjuntos finitos, a tarefa de selecionar um elemento de e a tarefa de selecionar um elemento de .  Existem maneiras de realizar e maneiras de realizar . O número de maneiras de executar ou é a soma do número de maneiras de executar com o número de maneiras de executar menos o número de maneiras de executar ambos e , pois esta quantidade já foi contada duas vezes.  Como existem maneiras de realizar ou e maneiras de realizar e , temos:      Numa pesquisa com jovens foram feitas as seguintes perguntas para que respondessem sim ou não. Gosta de exatas? Gosta de humanas? Responderam sim a primeira pergunta 80 jovens, 60 reponderam sim a segunda e 15 responderam sim a ambas. Quantos jovens foram entrevistados?   Defina como o conjunto dos alunos entrevistados que gostam de exatas e defina como o conjunto dos alunos entrevistados que gostam de humanas, assim Dessa forma, calculando o número de alunos que gostam de ambas as áreas é contado duas vezes. Portanto, para determinar o número de alunos entrevistados, retira-se o número de alunos que foi contado duas vezes, ou seja      Sejam e conjuntos finitos, então    Diagrama de Venn para .     Considere como um conjunto, usando o ( ) temos: Usando a igualdade: temos Aplicando o ( ) na união , concluímos a demonstração:       O Princípio da Inclusão-Exclusão para conjuntos   Sejam conjuntos finitos. A cardinalidade de é dada por:      Suponha que o elemento pertence a exatamente ( ) dos conjuntos . Será mostrado que é contado exatamente uma vez pelo lado direito da Expressão .  No somatório: observa-se que é contado vezes, pois pertence a exatamente dos conjuntos. No somatório nota-se que é contado vezes, pois, em cada termo do somatório, para que seja contado, precisa pertencer aos dois conjuntos. Se separarmos os conjuntos que contém , existem interseções contendo . No caso geral, será contado vezes, pelo somatório envolvendo dos conjuntos .   Desta forma, o elemento será contado exatamente vezes pelo lado direito de . Usando a Expansão do Binômio de Newton (veja ), temos Portanto, Isto mostra que o elemento é contado exatamente uma vez pelo lado direito de .  Como o elemento é arbitrário e a quantidade , também é arbitrária, esse argumento serve para cada um dos elementos de , o que prova o teorema.     Quantos são os anagramas da palavra COMPLEXA que tem C em 1º lugar, ou O em 2º lugar, ou M em 3º lugar ou P em 4º lugar?  Sejam  Assim, para .  Observe que é o número de anagramas da palavra COMPLEXA que estão em dois dos conjuntos , logo  Observe que é o número de anagramas da palavra COMPLEXA que estão em três dos conjuntos , logo  Observe que é o número de anagramas da palavra COMPLEXA que tem as letras C, O, M e P nas posições fixas, logo Pelo Princípio da Inclusão-Exclusão ( ), Organizando, temos Substituindo, temos      Determine o número de elementos dos conjuntos:        item a) Sejam  A resposta do item a) é a cardinalidade do conjunto: Pelo Princípio da Inclusão-Exclusão ( ): Para obter a cardinalidade de cada um dos conjuntos , vamos dividir 10000 por , pois se obtermos , na divisão Euclideana, significa que são todos múltiplos de e são menores que 10000. Fazendo as divisões obtemos: Para obter a cardinalidade de cada uma das interseções , vamos dividir 10000 por : Para obter a cardinalidade de , vamos dividir 10000 por : Portanto, pelo Princípio Inclusão-Exclusão temos:   item b) Usando a ideia do item a), queremos calcular a cardinalidade do conjunto: Vamos começar calculando a cardinalidade de cada conjunto: Calculando a cardinalidade de cada uma das interseções : Para obter a cardinalidade de , dividimos pelo , logo: Portanto, pelo Princípio da Inclusão-Exclusão:   item c) Neste caso, não é viável fazer as contas à mão, vamos usar o SageMath para contar a quantidade de elementos da união:   Clique em \"Evaluate (Sage)\" para obter a resposta do problema, depois troque os valores da lista e execute o código novamente, para obter a resposta do item a).       Exercícios   (OBM 2011 - 1ª fase do nível 3) Três polı́gonos regulares, de 8, 12 e 18 lados respectivamente, estão inscritos em uma mesma circunferência e têm um vértice em comum. Os vértices dos três polı́gonos são marcados na circunferência. Quantos vértices distintos foram marcados?   Sendo a quantidade de pontos do polı́gono de vértices, queremos calcular . Note que .   28    Determine o número de permutações de nas quais nem o 2 ocupa o 2ª lugar nem o 3 ocupa o 3º lugar nem o 4 ocupa o 4º lugar?   27240    Quantos são os inteiros de dígitos, que têm todos os dígitos pertencentes ao conjunto ? Em quantos deles os inteiros e figuram todos?   a) , b) .   item a) Temos 3 opções para o primeiro dígito, 3 opções para o segundo dígito e assim sucessivamente, até o -ésimo dígito que também temos 3 opções. Portanto a resposta é .  item b) Agora precisamos subtrair de a quantidade de números de dígitos, na qual, nem todos os três dígitos disponíveis aparecem. Defina como o subconjunto dos números de dígitos formados pelos dígitos e tal que o dígito não aparece. De maneira análoga defina os subconjuntos e . Desta forma, queremos calcular . Pelo Pincípio da Inclusão-Exclusão sabemos que  possui elementos, pois o dígito não pode figurar no número de dígitos, sobrando apenas os dígitos e . Desta forma, temos duas opções para o primeiro dígito, 2 opções para o segundo dígito e assim sucessivamente. Observe que os conjuntos e possuem a mesma quantidade de elementos.  possui apenas elemento, pois os dígitos e não podem figurar, sobrando apenas o dígito 3. Desta forma temos apenas uma opções para o primeiro dígito, uma opção para o segundo dígito e assim sucessivamente. De maneira análoga observamos que e também possuem apenas um elemento.  Finalmente, não possui elementos, pois nenhum dos três dígitos podem figurar. Portanto a resposta é      Considere o conjunto , determine o número de funções bijetoras , nas quais , para .   44    (IME) Cinco equipes concorrem numa competição automobilı́stica, em que cada equipe possui dois carros. Para a largada são formadas duas colunas de carros lado a lado, de tal forma que cada carro da coluna da direita tenha ao seu lado, na coluna da esquerda, um carro de outra equipe. Determine o número de formações possı́veis para a largada.   2088960   Inicialmente, temos 10! possibilidades de colocarmos esses 10 veículos na posição de largada. Dessas permutações, vamos excluir aquelas que possuem uma equipe com dois carros lado a lado. Para isso, existem maneiras de escolhermos essa equipe que poderá ser colocada em uma das 5 filas na largada . Devemos, ainda, permutar os carros de uma mesma equipe 2! e os demais 8 carros podem ser organizados de 8!. Assim, temos formas distintas de organizarmos esses carros.  Algumas dessas maneiras de organizar os carros apresentam mais de uma equipe com seus carros emparelhados.  Agora, calcularemos em quantos casos teremos ao menos 2 equipes com seus carros emparelhados. Primeiramente, temos formas de escolhermos essas 2 equipes e podemos colocá-las de maneiras diferentes nas 5 filas da largada (a primeira equipe pode entrar em qualquer uma das 5 filas e a segunda em uma das outras 4 que restaram). Mas, ainda, devemos permutar os carros das duas equipes lado a lado e das demais equipes .  Seguindo essa linha de raciocínio, pelo Princípio da Inclusão-Exclusão temos     (ITA 2010) Sejam e conjuntos tais que , , e é uma progressão geométrica de razão .   Determine  Determine    a) b) .   item a) Como , temos , logo e . Logo Ou seja,   Usando que é uma PG, obtemos   Por hipótese, , mas , logo  Finalmente, usando o ( ) obtemos Efetuando o calculo obtemos .  item b) Como , temos    "
},
{
  "id": "teo-inclusao-exclusao-2",
  "level": "2",
  "url": "section-inclusao-exclusao.html#teo-inclusao-exclusao-2",
  "type": "Teorema",
  "number": "2.1.1",
  "title": "",
  "body": " Sejam e conjuntos finitos, então   Diagrama de Venn para .    Ou seja, a cardinalidade de é igual a cardinalidade de mais a cardinalidade de menos a cardinalidade de .   Sejam e conjuntos finitos, a tarefa de selecionar um elemento de e a tarefa de selecionar um elemento de .  Existem maneiras de realizar e maneiras de realizar . O número de maneiras de executar ou é a soma do número de maneiras de executar com o número de maneiras de executar menos o número de maneiras de executar ambos e , pois esta quantidade já foi contada duas vezes.  Como existem maneiras de realizar ou e maneiras de realizar e , temos:    "
},
{
  "id": "example-27",
  "level": "2",
  "url": "section-inclusao-exclusao.html#example-27",
  "type": "Exemplo",
  "number": "2.1.3",
  "title": "",
  "body": " Numa pesquisa com jovens foram feitas as seguintes perguntas para que respondessem sim ou não. Gosta de exatas? Gosta de humanas? Responderam sim a primeira pergunta 80 jovens, 60 reponderam sim a segunda e 15 responderam sim a ambas. Quantos jovens foram entrevistados?   Defina como o conjunto dos alunos entrevistados que gostam de exatas e defina como o conjunto dos alunos entrevistados que gostam de humanas, assim Dessa forma, calculando o número de alunos que gostam de ambas as áreas é contado duas vezes. Portanto, para determinar o número de alunos entrevistados, retira-se o número de alunos que foi contado duas vezes, ou seja    "
},
{
  "id": "theorem-12",
  "level": "2",
  "url": "section-inclusao-exclusao.html#theorem-12",
  "type": "Teorema",
  "number": "2.1.4",
  "title": "",
  "body": " Sejam e conjuntos finitos, então    Diagrama de Venn para .     Considere como um conjunto, usando o ( ) temos: Usando a igualdade: temos Aplicando o ( ) na união , concluímos a demonstração:    "
},
{
  "id": "teo-inclusao-exclusao-n",
  "level": "2",
  "url": "section-inclusao-exclusao.html#teo-inclusao-exclusao-n",
  "type": "Teorema",
  "number": "2.1.6",
  "title": "",
  "body": " Sejam conjuntos finitos. A cardinalidade de é dada por:      Suponha que o elemento pertence a exatamente ( ) dos conjuntos . Será mostrado que é contado exatamente uma vez pelo lado direito da Expressão .  No somatório: observa-se que é contado vezes, pois pertence a exatamente dos conjuntos. No somatório nota-se que é contado vezes, pois, em cada termo do somatório, para que seja contado, precisa pertencer aos dois conjuntos. Se separarmos os conjuntos que contém , existem interseções contendo . No caso geral, será contado vezes, pelo somatório envolvendo dos conjuntos .   Desta forma, o elemento será contado exatamente vezes pelo lado direito de . Usando a Expansão do Binômio de Newton (veja ), temos Portanto, Isto mostra que o elemento é contado exatamente uma vez pelo lado direito de .  Como o elemento é arbitrário e a quantidade , também é arbitrária, esse argumento serve para cada um dos elementos de , o que prova o teorema.   "
},
{
  "id": "example-28",
  "level": "2",
  "url": "section-inclusao-exclusao.html#example-28",
  "type": "Exemplo",
  "number": "2.1.7",
  "title": "",
  "body": " Quantos são os anagramas da palavra COMPLEXA que tem C em 1º lugar, ou O em 2º lugar, ou M em 3º lugar ou P em 4º lugar?  Sejam  Assim, para .  Observe que é o número de anagramas da palavra COMPLEXA que estão em dois dos conjuntos , logo  Observe que é o número de anagramas da palavra COMPLEXA que estão em três dos conjuntos , logo  Observe que é o número de anagramas da palavra COMPLEXA que tem as letras C, O, M e P nas posições fixas, logo Pelo Princípio da Inclusão-Exclusão ( ), Organizando, temos Substituindo, temos    "
},
{
  "id": "example-29",
  "level": "2",
  "url": "section-inclusao-exclusao.html#example-29",
  "type": "Exemplo",
  "number": "2.1.8",
  "title": "",
  "body": " Determine o número de elementos dos conjuntos:        item a) Sejam  A resposta do item a) é a cardinalidade do conjunto: Pelo Princípio da Inclusão-Exclusão ( ): Para obter a cardinalidade de cada um dos conjuntos , vamos dividir 10000 por , pois se obtermos , na divisão Euclideana, significa que são todos múltiplos de e são menores que 10000. Fazendo as divisões obtemos: Para obter a cardinalidade de cada uma das interseções , vamos dividir 10000 por : Para obter a cardinalidade de , vamos dividir 10000 por : Portanto, pelo Princípio Inclusão-Exclusão temos:   item b) Usando a ideia do item a), queremos calcular a cardinalidade do conjunto: Vamos começar calculando a cardinalidade de cada conjunto: Calculando a cardinalidade de cada uma das interseções : Para obter a cardinalidade de , dividimos pelo , logo: Portanto, pelo Princípio da Inclusão-Exclusão:   item c) Neste caso, não é viável fazer as contas à mão, vamos usar o SageMath para contar a quantidade de elementos da união:   Clique em \"Evaluate (Sage)\" para obter a resposta do problema, depois troque os valores da lista e execute o código novamente, para obter a resposta do item a).    "
},
{
  "id": "exercise-71",
  "level": "2",
  "url": "section-inclusao-exclusao.html#exercise-71",
  "type": "Exercício",
  "number": "2.1.3.1",
  "title": "",
  "body": " (OBM 2011 - 1ª fase do nível 3) Três polı́gonos regulares, de 8, 12 e 18 lados respectivamente, estão inscritos em uma mesma circunferência e têm um vértice em comum. Os vértices dos três polı́gonos são marcados na circunferência. Quantos vértices distintos foram marcados?   Sendo a quantidade de pontos do polı́gono de vértices, queremos calcular . Note que .   28  "
},
{
  "id": "exercise-72",
  "level": "2",
  "url": "section-inclusao-exclusao.html#exercise-72",
  "type": "Exercício",
  "number": "2.1.3.2",
  "title": "",
  "body": " Determine o número de permutações de nas quais nem o 2 ocupa o 2ª lugar nem o 3 ocupa o 3º lugar nem o 4 ocupa o 4º lugar?   27240  "
},
{
  "id": "exercise-73",
  "level": "2",
  "url": "section-inclusao-exclusao.html#exercise-73",
  "type": "Exercício",
  "number": "2.1.3.3",
  "title": "",
  "body": " Quantos são os inteiros de dígitos, que têm todos os dígitos pertencentes ao conjunto ? Em quantos deles os inteiros e figuram todos?   a) , b) .   item a) Temos 3 opções para o primeiro dígito, 3 opções para o segundo dígito e assim sucessivamente, até o -ésimo dígito que também temos 3 opções. Portanto a resposta é .  item b) Agora precisamos subtrair de a quantidade de números de dígitos, na qual, nem todos os três dígitos disponíveis aparecem. Defina como o subconjunto dos números de dígitos formados pelos dígitos e tal que o dígito não aparece. De maneira análoga defina os subconjuntos e . Desta forma, queremos calcular . Pelo Pincípio da Inclusão-Exclusão sabemos que  possui elementos, pois o dígito não pode figurar no número de dígitos, sobrando apenas os dígitos e . Desta forma, temos duas opções para o primeiro dígito, 2 opções para o segundo dígito e assim sucessivamente. Observe que os conjuntos e possuem a mesma quantidade de elementos.  possui apenas elemento, pois os dígitos e não podem figurar, sobrando apenas o dígito 3. Desta forma temos apenas uma opções para o primeiro dígito, uma opção para o segundo dígito e assim sucessivamente. De maneira análoga observamos que e também possuem apenas um elemento.  Finalmente, não possui elementos, pois nenhum dos três dígitos podem figurar. Portanto a resposta é   "
},
{
  "id": "exercise-74",
  "level": "2",
  "url": "section-inclusao-exclusao.html#exercise-74",
  "type": "Exercício",
  "number": "2.1.3.4",
  "title": "",
  "body": " Considere o conjunto , determine o número de funções bijetoras , nas quais , para .   44  "
},
{
  "id": "exercise-75",
  "level": "2",
  "url": "section-inclusao-exclusao.html#exercise-75",
  "type": "Exercício",
  "number": "2.1.3.5",
  "title": "",
  "body": " (IME) Cinco equipes concorrem numa competição automobilı́stica, em que cada equipe possui dois carros. Para a largada são formadas duas colunas de carros lado a lado, de tal forma que cada carro da coluna da direita tenha ao seu lado, na coluna da esquerda, um carro de outra equipe. Determine o número de formações possı́veis para a largada.   2088960   Inicialmente, temos 10! possibilidades de colocarmos esses 10 veículos na posição de largada. Dessas permutações, vamos excluir aquelas que possuem uma equipe com dois carros lado a lado. Para isso, existem maneiras de escolhermos essa equipe que poderá ser colocada em uma das 5 filas na largada . Devemos, ainda, permutar os carros de uma mesma equipe 2! e os demais 8 carros podem ser organizados de 8!. Assim, temos formas distintas de organizarmos esses carros.  Algumas dessas maneiras de organizar os carros apresentam mais de uma equipe com seus carros emparelhados.  Agora, calcularemos em quantos casos teremos ao menos 2 equipes com seus carros emparelhados. Primeiramente, temos formas de escolhermos essas 2 equipes e podemos colocá-las de maneiras diferentes nas 5 filas da largada (a primeira equipe pode entrar em qualquer uma das 5 filas e a segunda em uma das outras 4 que restaram). Mas, ainda, devemos permutar os carros das duas equipes lado a lado e das demais equipes .  Seguindo essa linha de raciocínio, pelo Princípio da Inclusão-Exclusão temos   "
},
{
  "id": "exercise-76",
  "level": "2",
  "url": "section-inclusao-exclusao.html#exercise-76",
  "type": "Exercício",
  "number": "2.1.3.6",
  "title": "",
  "body": " (ITA 2010) Sejam e conjuntos tais que , , e é uma progressão geométrica de razão .   Determine  Determine    a) b) .   item a) Como , temos , logo e . Logo Ou seja,   Usando que é uma PG, obtemos   Por hipótese, , mas , logo  Finalmente, usando o ( ) obtemos Efetuando o calculo obtemos .  item b) Como , temos  "
},
{
  "id": "section-permutacao-caotica",
  "level": "1",
  "url": "section-permutacao-caotica.html",
  "type": "Seção",
  "number": "2.2",
  "title": "Permutações Caóticas",
  "body": " Permutações Caóticas    Nota Histórica  O célebre matemático e físico suiço, Leonhard Paul Euler (1707-1783), empenhou-se em resolver uma questão, um tanto quanto curiosa, proposta por Nicolaus Bernoulli (1687-1759), conhecida como \"O PROBLEMA DAS CARTAS MAL ENDEREÇADAS\" que se fundamenta em esclarecer de quantas formas distintas pode-se colocar cartas em envelopes, endereçados a destinatários diferentes, de modo que nenhuma das cartas seja colocada no envelope correto.  Nessas condições, estamos perante um problema de análise combinatória, intitulado por Permutações Caóticas, também conhecida como Desarranjos ou Desordenamentos, uma Permutação em que nenhum de seus elementos estará presente no seu lugar de origem.   Leonarhd Euler, fonte: https:\/\/www.phylos.net      Exemplos introdutórios  Vamos iniciar este tópico com dois exemplos para facilitar o entendimento do conceito de permutação caótica e também da demonstração.   Determine o número de permutações simples dos elementos , nas quais está na segunda posição ou está em terceira posição.   Definindo como o conjunto das permutações em que está em segunda posição e como o conjunto das permutações em que está em terceira posição, é fácil ver que e que Assim o número procurado nada mais é do que que é igual a:      Dentre as permutações simples dos elementos determine o número daquelas em que não está na segunda posição, não está na terceira posição e nem está na quarta posição.   Definimos , para , como o conjunto das permutações em que está no -ésima posição, para . Queremos encontrar o número de elementos no complementar de .  As cardinalidade dos conjuntos e das interseções dos , dois a dois e três a três são:     Sabendo que o número total de permutações é , a solução para o questionamento é Que é igual a:       Permutações Caóticas   Uma permutação de uma lista de elementos é chamada de permutação caótica , quando nenhum dos elementos da permutação está na posição original, ou seja, uma permutação de é chamada de caótica quando nenhum dos se encontra na -ésima posição.  Notação:    As permutações caóticas dos elementos podem ser geradas no Sage, com o seguinte comando:     Todos os anagramas de AMOR, de forma que nenhuma letra fique na posição original. Troque as informações da lista para obter o número de permutações caóticas e as permutações caóticas da sua lista.      A quantidade de permutações caóticas de uma lista com objetos distintos, pode ser calculada da seguinte maneira:   Considere todas as permutações dos elementos . Indicando por todas as permutações formadas pelos elementos com no -ésimo lugar, calcularemos , usando a ideia do exemplo ( ): Visto que existem termos no primeiro somatório, termos no segundo, termos no terceiro, , no último e temos evidenciando , obtém-se:     Calculando o número de permutações caóticas no Sage:    Escolha um intervalo de variação, para obter uma lista com as permutações caóticas para cada valor do intervalo.       Luiz, Cláudia, Paulo, Rodrigo e Ana brincam entre si de amigo-secreto (ou amigo-oculto). O nome de cada um é escrito em um pedaço de papel, que é colocado em uma urna. Em seguida, cada participante da brincadeira retira da urna um dos pedaços de papel, ao acaso. De quantas formas pode ocorrer a distribuição dos papéis de modo que nenhum dos participantes retire seu próprio nome?   Uma clássica questão de permutação caótica, visto que durante a distribuição dos papéis nenhum dos participantes poderá retirar seu próprio nome. Assim o número de maneiras de ocorrer tal evento, é dado por:      Quantas são as permutações de que têm exatamente 4 elementos no seu lugar primitivo?   O número de modos de escolher os quatro elementos que ocuparão o seu lugar primitivo é .  Com estes elementos em seus lugares, os outros seis elementos devem ser arrumados de forma caótica. o que pode ser feito de formas. A resposta é       Outras formas de calcular   é igual ao inteiro mais próximo de .    Para e a verificação é direta. Para vamos usar a expansão em série de portência de : para temos Calculando Aplicando a fórmula da soma da PG, ficamos com     Calculando o número de permutações caóticas no Sage, usando o :    Se    Pelo temos Isolando a última parcela da soma, ficamos com Cancelando do último termo e reescrevendo como , obtemos Ou seja,     Calculando o número de permutações caóticas no Sage, usando o :    Se    Vamos separar as permutações caóticas de em dois casos.  1º caso: permutações caóticas em que o elemento que ocupa o primeiro lugar tem seu lugar original ocupado pelo 1.  Como temos elementos, diferentes do , para cada um deles podemos colocar o elemento na 1ª posição e o número 1 na posição deste número, ou seja, temos maneiras de fazer isto. Depois disto, os outros elementos podem ser distribuídos de formas.  2º caso: permutações caóticas em que o elemento que ocupa o primeiro lugar não tem seu lugar original ocupado pelo 1.  Temos formas de escolher o elemento que ocupará o primeiro lugar, já que o número 1 não pode ocupar esta posição. Depois disto precisamos contar o número de maneiras de distribuir (de forma caótica) os elementos nos lugares, de forma que o número 1 não fique na posição original do número que está na 1ª posição. Para contar esta quantidade, podemos contar o número de permutações caóticas desses elementos organizados da seguinte maneira: coloque os elementos em suas posições originais e o número 1 na posição do elemento que está na 1ª posição. O número dessas permutações caóticas é  Como os dois casos são excludentes e cobrem todas as possibilidades, pelo princípio aditivo, temos     Calculando o número de permutações caóticas no Sage, usando o :     Exercícios   Suponha que . Quantas são as funções para as quais a equação não possui solução? Quantas são as funções  bijetoras para as quais a equação não possui solução?   a) , b) .    item a) A imagem de cada elemento do domínio pode ser escolhida de maneiras, assim, o total é .   item b) Como é bijetiva, cada elemento do domínio terá uma imagem diferente, e além disso, a imagem precisa ser diferente do argumento da função, então existem funções.    Quantas são as permutações de que têm exatamente 5 elementos no seu lugar primitivo?   1468368   Podemos escolher os 5 elementos que ocuparão seus lugares primitivos de maneiras. Em seguida, podemos escolher as posições dos 7 elementos restantes de maneiras. Logo, o total é     Determine o número de permutações caóticas de nas quais os números ocupam, em alguma ordem, os cinco primeiro lugares.   81576   Podemos escolher a posição dos 5 primeiros elementos de maneiras e a posição dos 7 últimos elementos de maneiras. Portanto, o total é     Uma empresa tem sete estagiárias. Cada uma delas deve cumprir três horas de trabalho semanais, sendo duas horas no turno da manhã e uma no turno da tarde. De quantas maneiras o Recursos Humanos pode montar a agenda de trabalho semanal (segunda a domingo) desses estagiárias, de modo que todas cumpram as três horas semanais, trabalhando diariamente apenas em um turno?   9344160   O horário do turno da manhã pode ser escolhido de maneiras, uma vez feita a escolha, o horário do turno da tarde pode ser feito de maneiras. O total de maneiras é     "
},
{
  "id": "figura-euler",
  "level": "2",
  "url": "section-permutacao-caotica.html#figura-euler",
  "type": "Figura",
  "number": "2.2.1",
  "title": "",
  "body": " Leonarhd Euler, fonte: https:\/\/www.phylos.net   "
},
{
  "id": "example-30",
  "level": "2",
  "url": "section-permutacao-caotica.html#example-30",
  "type": "Exemplo",
  "number": "2.2.2",
  "title": "",
  "body": " Determine o número de permutações simples dos elementos , nas quais está na segunda posição ou está em terceira posição.   Definindo como o conjunto das permutações em que está em segunda posição e como o conjunto das permutações em que está em terceira posição, é fácil ver que e que Assim o número procurado nada mais é do que que é igual a:    "
},
{
  "id": "exem-antes-permut-cao",
  "level": "2",
  "url": "section-permutacao-caotica.html#exem-antes-permut-cao",
  "type": "Exemplo",
  "number": "2.2.3",
  "title": "",
  "body": " Dentre as permutações simples dos elementos determine o número daquelas em que não está na segunda posição, não está na terceira posição e nem está na quarta posição.   Definimos , para , como o conjunto das permutações em que está no -ésima posição, para . Queremos encontrar o número de elementos no complementar de .  As cardinalidade dos conjuntos e das interseções dos , dois a dois e três a três são:     Sabendo que o número total de permutações é , a solução para o questionamento é Que é igual a:    "
},
{
  "id": "def-permutacao-caotica",
  "level": "2",
  "url": "section-permutacao-caotica.html#def-permutacao-caotica",
  "type": "Definição",
  "number": "2.2.4",
  "title": "",
  "body": " Uma permutação de uma lista de elementos é chamada de permutação caótica , quando nenhum dos elementos da permutação está na posição original, ou seja, uma permutação de é chamada de caótica quando nenhum dos se encontra na -ésima posição.  Notação:   "
},
{
  "id": "technology-13",
  "level": "2",
  "url": "section-permutacao-caotica.html#technology-13",
  "type": "Tecnologia",
  "number": "2.2.5",
  "title": "",
  "body": "As permutações caóticas dos elementos podem ser geradas no Sage, com o seguinte comando:  "
},
{
  "id": "tec-caotica-r-sage",
  "level": "2",
  "url": "section-permutacao-caotica.html#tec-caotica-r-sage",
  "type": "Tecnologia",
  "number": "2.2.6",
  "title": "",
  "body": " Todos os anagramas de AMOR, de forma que nenhuma letra fique na posição original. Troque as informações da lista para obter o número de permutações caóticas e as permutações caóticas da sua lista.   "
},
{
  "id": "teo-pcaotica1",
  "level": "2",
  "url": "section-permutacao-caotica.html#teo-pcaotica1",
  "type": "Teorema",
  "number": "2.2.7",
  "title": "",
  "body": " A quantidade de permutações caóticas de uma lista com objetos distintos, pode ser calculada da seguinte maneira:   Considere todas as permutações dos elementos . Indicando por todas as permutações formadas pelos elementos com no -ésimo lugar, calcularemos , usando a ideia do exemplo ( ): Visto que existem termos no primeiro somatório, termos no segundo, termos no terceiro, , no último e temos evidenciando , obtém-se:    "
},
{
  "id": "tec-pcaotica1",
  "level": "2",
  "url": "section-permutacao-caotica.html#tec-pcaotica1",
  "type": "Tecnologia",
  "number": "2.2.8",
  "title": "",
  "body": "Calculando o número de permutações caóticas no Sage:  "
},
{
  "id": "technology-16",
  "level": "2",
  "url": "section-permutacao-caotica.html#technology-16",
  "type": "Tecnologia",
  "number": "2.2.9",
  "title": "",
  "body": " Escolha um intervalo de variação, para obter uma lista com as permutações caóticas para cada valor do intervalo.     "
},
{
  "id": "example-32",
  "level": "2",
  "url": "section-permutacao-caotica.html#example-32",
  "type": "Exemplo",
  "number": "2.2.11",
  "title": "",
  "body": " Luiz, Cláudia, Paulo, Rodrigo e Ana brincam entre si de amigo-secreto (ou amigo-oculto). O nome de cada um é escrito em um pedaço de papel, que é colocado em uma urna. Em seguida, cada participante da brincadeira retira da urna um dos pedaços de papel, ao acaso. De quantas formas pode ocorrer a distribuição dos papéis de modo que nenhum dos participantes retire seu próprio nome?   Uma clássica questão de permutação caótica, visto que durante a distribuição dos papéis nenhum dos participantes poderá retirar seu próprio nome. Assim o número de maneiras de ocorrer tal evento, é dado por:    "
},
{
  "id": "example-33",
  "level": "2",
  "url": "section-permutacao-caotica.html#example-33",
  "type": "Exemplo",
  "number": "2.2.12",
  "title": "",
  "body": " Quantas são as permutações de que têm exatamente 4 elementos no seu lugar primitivo?   O número de modos de escolher os quatro elementos que ocuparão o seu lugar primitivo é .  Com estes elementos em seus lugares, os outros seis elementos devem ser arrumados de forma caótica. o que pode ser feito de formas. A resposta é    "
},
{
  "id": "teo-pcaotica2",
  "level": "2",
  "url": "section-permutacao-caotica.html#teo-pcaotica2",
  "type": "Teorema",
  "number": "2.2.13",
  "title": "",
  "body": " é igual ao inteiro mais próximo de .    Para e a verificação é direta. Para vamos usar a expansão em série de portência de : para temos Calculando Aplicando a fórmula da soma da PG, ficamos com    "
},
{
  "id": "technology-17",
  "level": "2",
  "url": "section-permutacao-caotica.html#technology-17",
  "type": "Tecnologia",
  "number": "2.2.14",
  "title": "",
  "body": "Calculando o número de permutações caóticas no Sage, usando o :  "
},
{
  "id": "teo-pcaotica3",
  "level": "2",
  "url": "section-permutacao-caotica.html#teo-pcaotica3",
  "type": "Teorema",
  "number": "2.2.15",
  "title": "",
  "body": " Se    Pelo temos Isolando a última parcela da soma, ficamos com Cancelando do último termo e reescrevendo como , obtemos Ou seja,    "
},
{
  "id": "technology-18",
  "level": "2",
  "url": "section-permutacao-caotica.html#technology-18",
  "type": "Tecnologia",
  "number": "2.2.16",
  "title": "",
  "body": "Calculando o número de permutações caóticas no Sage, usando o :  "
},
{
  "id": "teo-pcaotica4",
  "level": "2",
  "url": "section-permutacao-caotica.html#teo-pcaotica4",
  "type": "Teorema",
  "number": "2.2.17",
  "title": "",
  "body": " Se    Vamos separar as permutações caóticas de em dois casos.  1º caso: permutações caóticas em que o elemento que ocupa o primeiro lugar tem seu lugar original ocupado pelo 1.  Como temos elementos, diferentes do , para cada um deles podemos colocar o elemento na 1ª posição e o número 1 na posição deste número, ou seja, temos maneiras de fazer isto. Depois disto, os outros elementos podem ser distribuídos de formas.  2º caso: permutações caóticas em que o elemento que ocupa o primeiro lugar não tem seu lugar original ocupado pelo 1.  Temos formas de escolher o elemento que ocupará o primeiro lugar, já que o número 1 não pode ocupar esta posição. Depois disto precisamos contar o número de maneiras de distribuir (de forma caótica) os elementos nos lugares, de forma que o número 1 não fique na posição original do número que está na 1ª posição. Para contar esta quantidade, podemos contar o número de permutações caóticas desses elementos organizados da seguinte maneira: coloque os elementos em suas posições originais e o número 1 na posição do elemento que está na 1ª posição. O número dessas permutações caóticas é  Como os dois casos são excludentes e cobrem todas as possibilidades, pelo princípio aditivo, temos    "
},
{
  "id": "technology-19",
  "level": "2",
  "url": "section-permutacao-caotica.html#technology-19",
  "type": "Tecnologia",
  "number": "2.2.18",
  "title": "",
  "body": "Calculando o número de permutações caóticas no Sage, usando o :  "
},
{
  "id": "exercise-77",
  "level": "2",
  "url": "section-permutacao-caotica.html#exercise-77",
  "type": "Exercício",
  "number": "2.2.5.1",
  "title": "",
  "body": " Suponha que . Quantas são as funções para as quais a equação não possui solução? Quantas são as funções  bijetoras para as quais a equação não possui solução?   a) , b) .    item a) A imagem de cada elemento do domínio pode ser escolhida de maneiras, assim, o total é .   item b) Como é bijetiva, cada elemento do domínio terá uma imagem diferente, e além disso, a imagem precisa ser diferente do argumento da função, então existem funções.  "
},
{
  "id": "exercise-78",
  "level": "2",
  "url": "section-permutacao-caotica.html#exercise-78",
  "type": "Exercício",
  "number": "2.2.5.2",
  "title": "",
  "body": " Quantas são as permutações de que têm exatamente 5 elementos no seu lugar primitivo?   1468368   Podemos escolher os 5 elementos que ocuparão seus lugares primitivos de maneiras. Em seguida, podemos escolher as posições dos 7 elementos restantes de maneiras. Logo, o total é   "
},
{
  "id": "exercise-79",
  "level": "2",
  "url": "section-permutacao-caotica.html#exercise-79",
  "type": "Exercício",
  "number": "2.2.5.3",
  "title": "",
  "body": " Determine o número de permutações caóticas de nas quais os números ocupam, em alguma ordem, os cinco primeiro lugares.   81576   Podemos escolher a posição dos 5 primeiros elementos de maneiras e a posição dos 7 últimos elementos de maneiras. Portanto, o total é   "
},
{
  "id": "exercise-80",
  "level": "2",
  "url": "section-permutacao-caotica.html#exercise-80",
  "type": "Exercício",
  "number": "2.2.5.4",
  "title": "",
  "body": " Uma empresa tem sete estagiárias. Cada uma delas deve cumprir três horas de trabalho semanais, sendo duas horas no turno da manhã e uma no turno da tarde. De quantas maneiras o Recursos Humanos pode montar a agenda de trabalho semanal (segunda a domingo) desses estagiárias, de modo que todas cumpram as três horas semanais, trabalhando diariamente apenas em um turno?   9344160   O horário do turno da manhã pode ser escolhido de maneiras, uma vez feita a escolha, o horário do turno da tarde pode ser feito de maneiras. O total de maneiras é   "
},
{
  "id": "section-permutacao-caotica-repeticoes",
  "level": "1",
  "url": "section-permutacao-caotica-repeticoes.html",
  "type": "Seção",
  "number": "2.3",
  "title": "Permutações Caóticas com Repetições",
  "body": " Permutações Caóticas com Repetições    Permutações Caóticas com Repetições     Uma permutação caótica com repetição é uma permutação, na qual, os elementos nem podem ocupar suas posições originais, nem as posições de seus elementos repetidos.  Por exemplo, MARAAEL é uma permutação caótica (com repetição) das letras da palavra AMARELA. Note que as letras A's não podem ocupar as posições 1, 3 ou 7.     Quantos são os anagramas da palavra AMARELA, sem que as letras fiquem nas posições originais?   Usando o Sage, podemos obter a resposta desse problema sem dificuldade alguma. Com o código abaixo, basta clicar em \"Evaluate (Sage)\" para obter a resposta.   Ao longo dessa seção, esse problema está resolvido sem depender do uso de um computador\/software. Porém, alguns códigos estão disponíveis, apenas para facilitar\/conferir contas que podem ser feitas à mão. A solução foi desenvolvida de forma que a mesma ideia se aplique em casos mais gerais, no qual, mais de uma letra distinta se repete.  Para resolver o , observe que o número de soluções para a palavra AMARELA é o mesmo que o número de soluções para a \"palavra\" AAAMREL, pois uma palavra é um anagrama da outra, então para cada permutação caótica de AAAMREL, podemos obter uma única permutação caótica da palavra AMARELA, apenas aplicando a mesma permutação que leva AAAMREL em AMARELA.  Vamos contar o número de permutações caóticas de AAAMREL para facilitar a explicação. Inicialmente troque AAAMREL por A A A MREL, pois assim todas as letras ficam diferentes, depois resolvemos o problema das permutações das letras A. Em seguida colocamos a palavra em um tabuleiro e usamos torres para representar as permutações. Cada permutação da palavra é representada por uma única forma de colocar torres em um tabuleiro , de forma que uma torre não possa atacar a outra, ou seja, em linhas e colunas diferentes. Por exemplo   Tabela de Permutação.    fica com a seguinte configuração no tabuleiro:   Tabuleiro da permutação MRELA A A .    Para uma permutação simples, as torres podem ocupar qualquer quadrado, desde que uma não possa atacar a outra. No nosso caso, os quadrados cinzas são os lugares que não queremos colocar as torres, pois assim estamos evitando os casos em que alguma letra fica em seu lugar original. Chamaremos de subtabuleiro proibido , o subtabuleiro que não queremos colocar as torres.  Defina colocações de torres, na qual, a torre da linha está em um subtabuleiro proibido.  A resposta do nosso problema será dado por ou seja, o número de elementos do complementar de , dividido pelo número de maneiras de permutar as letras .  Pelo princípio da Inclusão-Exclusão, isso pode ser calculado da seguinte maneira:   A seguir, será mostrado que cada somatório da equação envolvendo interseções de conjuntos, pode ser calculado pelo produto de um valor , a ser determinado, pelo fatorial de . Observe que com , pois se temos 3 opções para colocar a torre na linha , sobrando 6 torres para colocar cada uma em uma linha, logo . Para , , pois temos apenas um lugar para colocar a torre na linha , sobrando 6 torres para colocar cada uma em uma linha. Portanto, o valor do somatório é dado por Seguindo com esse raciocínio, temos   O problema agora é determinar os valores de cada . Uma forma prática de fazer isso é usando o polinômio de torre:   Seja um tabuleiro qualquer. O polinômio de torre de é definido como no qual, é o número de maneiras de colocar torres em , de forma que uma torre não possa atacar a outra e é o número máximo de torres que é possível colocar em , de forma que uma torre não possa atacar a outra. Em inglês esse polinômio é chamado de Rook Polynomial , para mais informações veja .   Note que na , o tabuleiro não precisa ser quadrado nem retangular, pode inclusive ser um tabuleiro formado apenas pela parte cinza do tabuleiro da .   Seja um tabuleiro , sem subtabuleiros proibidos. O polinômio de torre de é dado por:   Precisamos escolher linhas e colunas no tabuleiro , , para colocar as torres, de modo que uma torre não possa atacar a outra, isto pode ser feito de maneiras. Agora precisamos escolher a posição da linha 1 na qual será colocada a primeira torre, isso pode ser feito de maneiras, em seguida, precisamos escolher a posição da linha 2 na qual será colocada a segunda torre, o que pode ser feito de maneiras, e assim por diante, até ficarmos com uma maneira de escolher a -ésima torre.  Assim, pelo princípio multiplicativo, o número de maneiras de colocar torres em , de modo que uma torre não possa atacar a outra é      Sejam , tabuleiros , , então     A seguir, temos os códigos para gerar o polinômio de torre de um tabuleiro . Na linha 1, definimos uma matriz de uns e guardamos na variável B . Para obter o polinômio de torre de um tabuleiro quadrado diferente, troque o número 4 da linha 1 pelo valor desejado e clique em \"Evaluate (Sage)\".     Dizemos que a união de dois tabuleiros e é uma união disjunta, quando nenhum quadrado de está na mesma linha ou mesma coluna de .    Sejam , tabuleiros , , então o polinômio de torre da união disjunta é o produto dos polinômios de torre de e .   O polinômio de torre pode ser obtido fazendo todas as figuras, da seguinte forma:   Polinômio de Torre do tabuleiro .    Calculando o produto dos polinômios de torre de e , obtemos Portanto,      O polinômio de torre da união disjunta de dois tabuleiros é dado pelo produto dos polinômios de torre de cada um dos tabuleiros.   Seja um tabuleiro obtido pela união disjunta de dois tabuleiros e .  Para colocar torres em , de forma que uma torre não possa atacar a outra, podemos colocar , , torres em , de forma que uma não possa atacar a outra, e torres em , de forma que uma não possa atacar a outra. Dessa forma, dados duas torres quaisquer em , na configuração obtida anteriormente, uma não pode atacar a outra. Portanto, o número de maneiras de colocarmos torres em é dado por Logo,      Aqui temos uma implementação para obter o produto de polinômios de torre. Usamos a ideia apresentada na para gerar cada polinômio e definimos a função que multiplica cada um dos polinômios de torre. As entradas da função são os tamanhos dos tabuleiros. Na linha 8 a função está sendo \"chamada\" para gerar a polinômio de torre da união disjunta de um tabuleiro e 4 tabuleiros .    Voltando a solução do . Pela o polinômio de torre do tabuleiro da palavra AAAMREL é dado por Fazendo as contas, obtemos Observe que eram exatamente os coeficientes desse polinômio que estavam faltando para resolvermos o problema pelo princípio da Inclusão-Exclusão dado pela equação . Então a solução do é dada pelo polinômio de torre dado pela equação , com substituído por , dividido por , pois temos que descontar o número de formas de ordenar as três letras A. Fazendo as substituições, obtemos: Calculando e dividido por , resulta em    A implementação de uma função que substitui por em um polinômio de grau . Na linha 14 a função está sendo \"chamada\" com o polinômio: .     Quantos são os anagramas da palavra MATEMÁTICA, sem que as letras fiquem nas posições originais? (Supondo que A e Á são letras iguais)   O polinômio de torre desse caso é dado por Expandindo o polinômio obtemos   Trocando por obtemos: Fazendo esse cálculo e dividindo por chegamos na resposta:      A resposta do junto com o polinômio de torre associado está disponível aqui. Troque as informações da lista para obter o número de permutações caóticas de outra palavra desejada.  Obs. Para que o sistema atualize a resposta, basta clicar fora do campo de preenchimento, depois de atualizar os dados.        Teorema das Permutações Caóticas com Repetições  Na matemática, os polinômios de Laguerre, nomeados em homenagem a Edmond Laguerre (1834-1886), são soluções da equação de Laguerre: que é uma equação diferencial linear de segunda ordem. Esses polinômios surgiram na mecânica quântica, na parte radial da solução da equação de Schrödinger para um átomo de um elétron. Eles também descrevem as funções de Wigner estáticas de sistemas osciladores em mecânica quântica no espaço de fase.  Fonte: en.wikipedia.org\/wiki\/Laguerre_polynomials  Os polinômios de torre, em combinatória, são mais ou menos os mesmos que os polinômios de Laguerre, a menos de mudanças elementares de variáveis. Usaremos os polinômios de Laguerre para enunciar um Teorema com uma fórmula para calcular permutações caóticas com repetições usando integrais.   Usando recursividade é possível chegar na seguinte forma fechada para os polinômios de Laguerre:     Obtendo o polinômio de Laguerre no Sage.     O número de permutações caóticas, , de uma lista com objetos, com um objeto repetido vezes, outro objeto repetido vezes, até o \"último\" objeto repetido vezes, tal que , pode ser calculado da seguinte maneira:    Como o resultado segue.  Mais detalhes em breve.     Usando o para calcular o número de soluções do . Foram usados os métodos abs e integral que calculam o valor absoluto e a integral, respectivamente.     A implementação da função DR (derangement with repetition) usando o . Os parâmetros são as quantidades que cada elemento figura na lista. Por exemplo, para a palavra MATEMATICA usamos a entrada 3, 2, 2, 1, 1, 1, pois são 3 letras A, 2 letras T, 2 letras M, 1 letras E, 1 letra I e 1 letra C.      Exercícios   (PRMO 2019) Diremos que um rearranjo das letras de uma palavra não tem letras fixas, quando o rearranjo é colocado diretamente abaixo da palavra, e nenhuma coluna tem a mesma letra repetida. Por exemplo, HBRATA é um rearranjo sem letras fixas de BHARAT. Quantos rearranjos distinguíveis sem letras fixas que BHARAT tem? (As duas letras A são consideradas idênticas.)   84    "
},
{
  "id": "def-permutacao-caotica-repeticao",
  "level": "2",
  "url": "section-permutacao-caotica-repeticoes.html#def-permutacao-caotica-repeticao",
  "type": "Definição",
  "number": "2.3.1",
  "title": "",
  "body": "  Uma permutação caótica com repetição é uma permutação, na qual, os elementos nem podem ocupar suas posições originais, nem as posições de seus elementos repetidos.  Por exemplo, MARAAEL é uma permutação caótica (com repetição) das letras da palavra AMARELA. Note que as letras A's não podem ocupar as posições 1, 3 ou 7.   "
},
{
  "id": "exem-amarela",
  "level": "2",
  "url": "section-permutacao-caotica-repeticoes.html#exem-amarela",
  "type": "Exemplo",
  "number": "2.3.2",
  "title": "",
  "body": " Quantos são os anagramas da palavra AMARELA, sem que as letras fiquem nas posições originais?  "
},
{
  "id": "technology-20",
  "level": "2",
  "url": "section-permutacao-caotica-repeticoes.html#technology-20",
  "type": "Tecnologia",
  "number": "2.3.3",
  "title": "",
  "body": "Usando o Sage, podemos obter a resposta desse problema sem dificuldade alguma. Com o código abaixo, basta clicar em \"Evaluate (Sage)\" para obter a resposta.  "
},
{
  "id": "fig-permuta",
  "level": "2",
  "url": "section-permutacao-caotica-repeticoes.html#fig-permuta",
  "type": "Figura",
  "number": "2.3.4",
  "title": "",
  "body": " Tabela de Permutação.   "
},
{
  "id": "fig-tabuleiro",
  "level": "2",
  "url": "section-permutacao-caotica-repeticoes.html#fig-tabuleiro",
  "type": "Figura",
  "number": "2.3.5",
  "title": "",
  "body": " Tabuleiro da permutação MRELA A A .   "
},
{
  "id": "def-ptorre",
  "level": "2",
  "url": "section-permutacao-caotica-repeticoes.html#def-ptorre",
  "type": "Definição",
  "number": "2.3.6",
  "title": "",
  "body": " Seja um tabuleiro qualquer. O polinômio de torre de é definido como no qual, é o número de maneiras de colocar torres em , de forma que uma torre não possa atacar a outra e é o número máximo de torres que é possível colocar em , de forma que uma torre não possa atacar a outra. Em inglês esse polinômio é chamado de Rook Polynomial , para mais informações veja .  "
},
{
  "id": "theorem-18",
  "level": "2",
  "url": "section-permutacao-caotica-repeticoes.html#theorem-18",
  "type": "Teorema",
  "number": "2.3.7",
  "title": "",
  "body": " Seja um tabuleiro , sem subtabuleiros proibidos. O polinômio de torre de é dado por:   Precisamos escolher linhas e colunas no tabuleiro , , para colocar as torres, de modo que uma torre não possa atacar a outra, isto pode ser feito de maneiras. Agora precisamos escolher a posição da linha 1 na qual será colocada a primeira torre, isso pode ser feito de maneiras, em seguida, precisamos escolher a posição da linha 2 na qual será colocada a segunda torre, o que pode ser feito de maneiras, e assim por diante, até ficarmos com uma maneira de escolher a -ésima torre.  Assim, pelo princípio multiplicativo, o número de maneiras de colocar torres em , de modo que uma torre não possa atacar a outra é    "
},
{
  "id": "example-35",
  "level": "2",
  "url": "section-permutacao-caotica-repeticoes.html#example-35",
  "type": "Exemplo",
  "number": "2.3.8",
  "title": "",
  "body": " Sejam , tabuleiros , , então   "
},
{
  "id": "tech-politorre01",
  "level": "2",
  "url": "section-permutacao-caotica-repeticoes.html#tech-politorre01",
  "type": "Tecnologia",
  "number": "2.3.9",
  "title": "",
  "body": " A seguir, temos os códigos para gerar o polinômio de torre de um tabuleiro . Na linha 1, definimos uma matriz de uns e guardamos na variável B . Para obter o polinômio de torre de um tabuleiro quadrado diferente, troque o número 4 da linha 1 pelo valor desejado e clique em \"Evaluate (Sage)\".   "
},
{
  "id": "definition-18",
  "level": "2",
  "url": "section-permutacao-caotica-repeticoes.html#definition-18",
  "type": "Definição",
  "number": "2.3.10",
  "title": "",
  "body": " Dizemos que a união de dois tabuleiros e é uma união disjunta, quando nenhum quadrado de está na mesma linha ou mesma coluna de .  "
},
{
  "id": "example-36",
  "level": "2",
  "url": "section-permutacao-caotica-repeticoes.html#example-36",
  "type": "Exemplo",
  "number": "2.3.11",
  "title": "",
  "body": " Sejam , tabuleiros , , então o polinômio de torre da união disjunta é o produto dos polinômios de torre de e .   O polinômio de torre pode ser obtido fazendo todas as figuras, da seguinte forma:   Polinômio de Torre do tabuleiro .    Calculando o produto dos polinômios de torre de e , obtemos Portanto,    "
},
{
  "id": "prop-uniaodis",
  "level": "2",
  "url": "section-permutacao-caotica-repeticoes.html#prop-uniaodis",
  "type": "Proposição",
  "number": "2.3.13",
  "title": "",
  "body": " O polinômio de torre da união disjunta de dois tabuleiros é dado pelo produto dos polinômios de torre de cada um dos tabuleiros.   Seja um tabuleiro obtido pela união disjunta de dois tabuleiros e .  Para colocar torres em , de forma que uma torre não possa atacar a outra, podemos colocar , , torres em , de forma que uma não possa atacar a outra, e torres em , de forma que uma não possa atacar a outra. Dessa forma, dados duas torres quaisquer em , na configuração obtida anteriormente, uma não pode atacar a outra. Portanto, o número de maneiras de colocarmos torres em é dado por Logo,    "
},
{
  "id": "technology-22",
  "level": "2",
  "url": "section-permutacao-caotica-repeticoes.html#technology-22",
  "type": "Tecnologia",
  "number": "2.3.14",
  "title": "",
  "body": " Aqui temos uma implementação para obter o produto de polinômios de torre. Usamos a ideia apresentada na para gerar cada polinômio e definimos a função que multiplica cada um dos polinômios de torre. As entradas da função são os tamanhos dos tabuleiros. Na linha 8 a função está sendo \"chamada\" para gerar a polinômio de torre da união disjunta de um tabuleiro e 4 tabuleiros .   "
},
{
  "id": "technology-23",
  "level": "2",
  "url": "section-permutacao-caotica-repeticoes.html#technology-23",
  "type": "Tecnologia",
  "number": "2.3.15",
  "title": "",
  "body": " A implementação de uma função que substitui por em um polinômio de grau . Na linha 14 a função está sendo \"chamada\" com o polinômio: .   "
},
{
  "id": "exem-perguntainternet",
  "level": "2",
  "url": "section-permutacao-caotica-repeticoes.html#exem-perguntainternet",
  "type": "Exemplo",
  "number": "2.3.16",
  "title": "",
  "body": " Quantos são os anagramas da palavra MATEMÁTICA, sem que as letras fiquem nas posições originais? (Supondo que A e Á são letras iguais)   O polinômio de torre desse caso é dado por Expandindo o polinômio obtemos   Trocando por obtemos: Fazendo esse cálculo e dividindo por chegamos na resposta:    "
},
{
  "id": "tec-caotica-r",
  "level": "2",
  "url": "section-permutacao-caotica-repeticoes.html#tec-caotica-r",
  "type": "Tecnologia",
  "number": "2.3.17",
  "title": "",
  "body": " A resposta do junto com o polinômio de torre associado está disponível aqui. Troque as informações da lista para obter o número de permutações caóticas de outra palavra desejada.  Obs. Para que o sistema atualize a resposta, basta clicar fora do campo de preenchimento, depois de atualizar os dados.     "
},
{
  "id": "p-610",
  "level": "2",
  "url": "section-permutacao-caotica-repeticoes.html#p-610",
  "type": "Parágrafo (with a defined term)",
  "number": "",
  "title": "",
  "body": "en.wikipedia.org\/wiki\/Laguerre_polynomials "
},
{
  "id": "definition-19",
  "level": "2",
  "url": "section-permutacao-caotica-repeticoes.html#definition-19",
  "type": "Definição",
  "number": "2.3.19",
  "title": "",
  "body": " Usando recursividade é possível chegar na seguinte forma fechada para os polinômios de Laguerre:   "
},
{
  "id": "technology-25",
  "level": "2",
  "url": "section-permutacao-caotica-repeticoes.html#technology-25",
  "type": "Tecnologia",
  "number": "2.3.20",
  "title": "",
  "body": " Obtendo o polinômio de Laguerre no Sage.   "
},
{
  "id": "teo-permutacao-caotica-repet",
  "level": "2",
  "url": "section-permutacao-caotica-repeticoes.html#teo-permutacao-caotica-repet",
  "type": "Teorema",
  "number": "2.3.21",
  "title": "",
  "body": " O número de permutações caóticas, , de uma lista com objetos, com um objeto repetido vezes, outro objeto repetido vezes, até o \"último\" objeto repetido vezes, tal que , pode ser calculado da seguinte maneira:    Como o resultado segue.  Mais detalhes em breve.   "
},
{
  "id": "technology-26",
  "level": "2",
  "url": "section-permutacao-caotica-repeticoes.html#technology-26",
  "type": "Tecnologia",
  "number": "2.3.22",
  "title": "",
  "body": " Usando o para calcular o número de soluções do . Foram usados os métodos abs e integral que calculam o valor absoluto e a integral, respectivamente.   "
},
{
  "id": "tec-permutacao-caotica-repet",
  "level": "2",
  "url": "section-permutacao-caotica-repeticoes.html#tec-permutacao-caotica-repet",
  "type": "Tecnologia",
  "number": "2.3.23",
  "title": "",
  "body": " A implementação da função DR (derangement with repetition) usando o . Os parâmetros são as quantidades que cada elemento figura na lista. Por exemplo, para a palavra MATEMATICA usamos a entrada 3, 2, 2, 1, 1, 1, pois são 3 letras A, 2 letras T, 2 letras M, 1 letras E, 1 letra I e 1 letra C.   "
},
{
  "id": "exercise-81",
  "level": "2",
  "url": "section-permutacao-caotica-repeticoes.html#exercise-81",
  "type": "Exercício",
  "number": "2.3.3.1",
  "title": "",
  "body": " (PRMO 2019) Diremos que um rearranjo das letras de uma palavra não tem letras fixas, quando o rearranjo é colocado diretamente abaixo da palavra, e nenhuma coluna tem a mesma letra repetida. Por exemplo, HBRATA é um rearranjo sem letras fixas de BHARAT. Quantos rearranjos distinguíveis sem letras fixas que BHARAT tem? (As duas letras A são consideradas idênticas.)   84  "
},
{
  "id": "section-lemas-kaplansky",
  "level": "1",
  "url": "section-lemas-kaplansky.html",
  "type": "Seção",
  "number": "2.4",
  "title": "Os Lemas de Kaplansky",
  "body": " Os Lemas de Kaplansky    Nota Histórica  Irving Kaplansky, matemático americano, nasceu em 22 de março de 1917 em Toronto e faleceu em 25 de junho de 2006. O talentoso matemático publicou o artigo \"Solution of the problème des ménages\" no Boletim da Sociedade Americana de Matemática em 1943, com uma solução para o afamado Problema de Lucas.  Kaplansky foi para a Universidade de Harvard e recebeu seu Ph.D. lá em 1941, trabalhando com Saunders MacLane. Ele foi instrutor de Benjamin Peirce em Harvard de 1941 a 1944 e, em seguida, ingressou no Grupo de Matemática Aplicada fazendo trabalhos de guerra na Universidade de Columbia de 1944 a 1945.  Seu trabalho foi bastante extenso na matemática, incluindo desde áreas da álgebra até grandes contribuições na Teoria dos Anéis, Teoria dos Grupos e Teoria dos Corpos. Publicou muitos artigos e trabalhou com diversos coautores.   Irving Kaplansky, fonte: www.ams.org      O 1º Lema de Kaplansky   Para mostrar os benefícios dos Lemas de Kaplansky, iniciaremos a seção com o exemplo a seguir:    De quantos maneiras podemos formar um subconjunto com 4 elementos, do conjunto de modo que não possuam duas letras que ocupem posições consecutivas no alfabeto?   Esse problema será resolvido criando uma forma alternativa de representar os subconjuntos onde marcaremos com o sinal os elementos pertencente ao subconjunto e com o sinal os elementos que não pertencentes ao subconjunto.   O terceiro caso não satisfaz as condições do enunciado, pois 2 juntos significa que teremos letras consecutivas (do alfabeto).  Assim, compreendendo o problema observa-se que para soluciona-lo devemos calcular o número de formas distintas de permutar 8 símbolos, onde são e 4 são de modo que não tenha 2 símbolos juntos. Veja que de acordo com o esquema, de círculos e traços, podem-se colocar 4 símbolos em quaisquer dos cinco lugares, ou seja, é possível escolher 4 dos 5 lugares disponíveis (representados pelas circunferências) para por os símbolos o que pode ser realizado de Dessa forma 5 subconjuntos podem ser formados, os quais estão listados abaixo:      (1º Lema de Kaplansky) O número de subconjuntos com elementos de nos quais não há números consecutivos é:    Deseja-se formar subconjuntos formados por elementos não consecutivos de . Da mesma forma que o , os elementos de que figuram nos subconjuntos serão representados com o símbolo e os elementos de que não figuram nos subconjuntos são representados com o símbolo . Desta forma teremos elementos que serão representados com o símbolo . Entre os símbolos existirão espaços vazios disponíveis, pois o espaço antes do primeiro símbolo , assim como o espaço depois do último símbolo estão disponíveis, veja a   Distribuição de símbolos e espaços para os símbolos .    Desta forma, resta escolher entre os espaços vazios aqueles que serão ocupados pelos símbolos . Logo,     Calculando no Sage:      Escolha uma lista de letras ou números e para obter os subconjuntos da lista com elementos, nos quais não há elementos, da lista, consecutivos.   Todos os subconjuntos com elementos.      Um exame vestibular se constitui de 10 questões distintas, 3 das quais da área de Matemática. Determine de quantas formas é possível programar a sequência das 10 questões, de maneira que duas questões da área de Matemática não se sucedam.   São 3 questões de Matemática e 7 questões de outras áreas . Inicialmente, iremos dispor as provas que não sofrem restrições.  Temos 8 lugares para colocar as 3 provas de Matemática e o número de formas de calcular isso, pode ser feito utilizando o 1º Lema de Kaplansky: Devemos, agora, permutar a ordem das 7 provas das outras áreas e as 3 de Matemática. Assim, temos E o total de formas de programar a sequência dessas 10 provas é:      O 2º Lema de Kaplansky   (2º Lema de Kaplansky) O número de subconjuntos com elementos de nos quais não há números consecutivos e, 1 e são consecutivos, é :    O problema será dividido em dois casos:  1º caso: O elemento 1 pertencendo ao subconjunto composto por elementos. Neste caso, será feito a análise de quantos formas poderá serão escolhidos os outros elementos do conjunto , pois os elementos 1 e não podem pertencer ao conjunto. Dessa forma, utilizando o 1º lema de Kaplansky, o número de maneiras que isso pode ocorrer é:  2º caso: O elemento 1 não pertencendo ao subconjunto composto por elementos. Nesse caso a escolha de elementos será realizado entre os elementos do conjunto . No entanto pelo primeiro lema de Kaplansky a escolha será determinada por  Pelo Princípio Aditivo, somando os resultados do 1º e do 2º caso, a solução do problema será dado por: finalmente,     Débora deseja correr 3 vezes por semana durante esse bimestre. De quantas formas ela poderá escolher os dias da corrida, se Débora não deseja correr em dias consecutivos?   Nesta questão observa-se que a disposição dos dias da semana geram um sistema cíclico, ou seja, o início de uma semana dá continuação ao fim da semana anterior a ela e assim sucessivamente, como pode ser verificado na figura abaixo:   Dias da semana.    Desta forma, Débora deve escolher 3 dias entre: domingo, segunda, terça, quarta, quinta, sexta e sábado de maneira que não apareçam dois dias consecutivos. O número de maneiras que Débora pode escolher os 3 dias é:      Dado um decágono, quantos são os triângulos cujos vértices são vértices não consecutivos do decágono?   O resultado esperado corresponde a escolha de 3 elementos não consecutivos de um conjunto de 10 elementos (vértices), como eles estão organizados de forma circular, tem-se:      Calculando no Sage:      Faça você mesmo   Todos os subconjuntos com elementos.  Escolha uma lista de letras ou números e para obter os subconjuntos da lista com elementos, nos quais não há elementos, da lista, consecutivos, considerando o primeiro e o último consecutivos.       Generalizações dos Lemas de Kaplansky   Os Lemas de Kaplansky podem ser generalizado, de modo que entre dois elementos escolhidos para o subconjunto, haja pelo menos elementos do conjunto não escolhidos. No caso do 1º e do 2º Lemas de Kaplansky o valor de é exatamente 1.    (Generalização do 1º Lema de Kaplansky) O número de subconjuntos com elementos de de modo que entre cada dois elementos escolhidos para o subconjunto haja, no conjunto, pelo menos elementos não escolhidos para o subconjunto é:    Representamos com o símbolo os elementos que figuram nos subconjuntos e com o símbolo os elementos que não figuram. Os símbolos e serão organizados de forma que entre dois símbolos haja pelo menos símbolos e antes do primeiro símbolo , assim como depois do último símbolo , podem figurar qualquer quantidade de símbolos . Formando uma fila com os símbolos ficamos com espaços para colocar os símbolos , veja a .   Distribuição de símbolos e espaços para os símbolos .     Observando que a quantidade de símbolos disponíveis é , o número de soluções desse problema é exatamente o número de soluções (em números inteiros) da equação:    Definindo e substituindo na equação anterior, ficamos com Ou seja, O número de soluções dessa equação é      Calculando no Sage:     Um estudante precisa realizar quatro provas referentes à recuperação final em 4 disciplinas. A escola deu um prazo 20 dias (incluindo sábados e domingos) para a realização de tais provas. Sabendo que o aluno pode escolher as datas que irá realizar cada prova e que ele deseja fazer uma prova por dia com um intervalo de três dias entre uma prova e outra (ou seja, 3 dias sem fazer provas), para poder estudar, responda: de quantas formas esse aluno pode escolher os dias para a realização das quatro provas?   Utilizando a Generalização do 1º Lema de Kaplansky, onde e , o número de maneiras de escolher os quatro dias para a realização das provas será dado por       (Generalização do 2º Lema de Kaplansky) O número de subconjuntos com elementos de onde e são \"adjacentes\" e de modo que entre cada dois elementos escolhidos para o subconjunto haja, no conjunto, pelo menos elementos não escolhidos para o subconjunto é:    Vamos separar em dois casos. Observe que um subconjunto satisfazendo as condições do enunciado vai possuir ou não algum dos elementos: .  1º caso: O número de subconjuntos que não possui quais quer dos elementos supracitados é pois, restam elementos, tais que, o primeiro e o último não são adjacentes e os subconjuntos serão formados por elementos satisfazendo as mesmas condição da Generalização do 1º Lema de Kaplansky.  2º caso: O número de subconjuntos que possui um dos elementos supracitados é pois, para cada uns dos elementos: faça o seguinte.  Adicione o elemento , então elementos antes do e elementos depois do não podem figurar. Portanto, do total de elementos, elementos precisam ser subtraidos, restando . Agora, elementos precisam ser escolhidos, satisfazendo as mesmas condição da Generalização do 1º Lema de Kaplansky.   Calculando obtemos:      Calculando no Sage:     Lucas recebeu uma proposta para trabalhar em uma multinacional na China. A empresa lhe prometeu duas férias por ano, sempre nos mesmos meses, com passagem paga pela empresa, para ela poder visitar seus familiares no Brasil. A única restrição que a empresa fez foi que houvesse um intervalo de pelo menos 4 meses entre as duas férias. Quantas são as formas de Lucas escolher os meses das suas férias?   Como a escolha dos meses será mantida pelos anos seguintes, aplicando a Generalização do 2º Lema de Kaplansky obtemos:       Exercícios   Um estacionamento tem 10 vagas, uma ao lado da outra, inicialmente todas livres. Um carro preto, um carro rosa e um carro branco chegam a esse estacionamento. De quantas maneiras diferentes esses carros podem ocupar três vagas de forma que haja pelo menos uma vaga livre entre eles?   336   As vagas que serão ocupadas podem ser escolhidas de maneiras, e a ordem dos carros pode ser escolhida de maneiras. Logo, o número de soluções é     De quantos modos podemos formar uma sequência de 9 elementos iguais a 1 e 6 elementos iguais a 0 se dois elementos iguais a 0 não podem ser adjacentes?   210   No total temos elementos e seis deles não podem ficar lado a lado. Portanto, o número de soluções é     (ITA) 12 cavaleiros estão sentados em torno de uma mesa redonda. Cada um dos 12 cavaleiros considera seus dois vizinhos como rivais. Deseja-se formar um grupo de 5 cavaleiros para libertar uma princesa. Nesse grupo não poderá haver cavaleiros rivais. Determine de quantas maneiras é possível escolher esse grupo.   36   Vamos usar o 2º Lema de Kaplansky. De 12 pessoas em disposição circular, precisamos contar o número de maneiras de escolher 5 dessas pessoas, sem selecionar duas adjacentes. Logo, o número de soluções é     8 pessoas devem se sentar em 25 cadeiras colocadas em torno de uma mesa circular. De quantos modos isso pode ser feito se não deve haver ocupação simultânea de duas cadeiras adjacentes?   1441440000   Primeiro, contamos o número de maneiras de escolher as 8 cadeiras que serão usadas, dentre as 25 disponíveis em disposição circular. Depois, contanos a quantidade de maneiras de ordenas as 8 pessoas que irão sentar nas cadeiras. Isto pode ser feito de maneiras   (OBM 2010 - 2ª fase do nível 3) Diamantino gosta de jogar futebol, mas se jogar dois dias seguidos ele fica com dores musculares. De quantas maneiras Diamantino pode escolher em quais de dez dias seguidos ele vai jogar bola sem ter dores musculares? Uma maneira é não jogar futebol em nenhum dos dias.   144   O número de maneiras de Diamantino escolher os dias que quer jogar futebol, sem ter dores musculares é     Irving gosta de jogar futebol, mas precisa ficar dois dias consecutivos sem jogar para evitar dores musculares. De quantas maneiras Irving pode escolher em quais de 20 dias seguidos ele vai jogar bola sem ter dores musculares? Uma maneira é não jogar futebol em nenhum dos dias.   2737   O número de formas de Irving jogar futebol sem ter dores musculares é      Um determinado atleta quer fazer treinos HIIT para se preparar fisicamente para um campeonato. Sabendo que faltam 28 dias para o campeonato, que ele quer pelo menos 3 dias de intervalo entre dois treinos HIIT e que ele pode escolher 3 tipos desses treinos. De quantas maneiras esse atleta pode escolher fazer os treinos HIIT, se ele quer treinar pelo menos 5 vezes?     O atleta pode escolher treinar ou vezes, pois . Em cada dia que ele resolve treinar, ele têm três opções. Portanto a resposta é  No Sage o cálculo pode ser feito da seguinte maneira:     Seis pessoas devem se sentar em vinte cadeiras colocadas em torno de uma mesa circular. De quantos modos isso pode ser feito se para cada cadeira ocupada devemos ter duas cadeiras livres de cada lado?          "
},
{
  "id": "figura-kaplansky",
  "level": "2",
  "url": "section-lemas-kaplansky.html#figura-kaplansky",
  "type": "Figura",
  "number": "2.4.1",
  "title": "",
  "body": " Irving Kaplansky, fonte: www.ams.org   "
},
{
  "id": "exemplo1-kaplansky",
  "level": "2",
  "url": "section-lemas-kaplansky.html#exemplo1-kaplansky",
  "type": "Exemplo",
  "number": "2.4.2",
  "title": "",
  "body": " De quantos maneiras podemos formar um subconjunto com 4 elementos, do conjunto de modo que não possuam duas letras que ocupem posições consecutivas no alfabeto?   Esse problema será resolvido criando uma forma alternativa de representar os subconjuntos onde marcaremos com o sinal os elementos pertencente ao subconjunto e com o sinal os elementos que não pertencentes ao subconjunto.   O terceiro caso não satisfaz as condições do enunciado, pois 2 juntos significa que teremos letras consecutivas (do alfabeto).  Assim, compreendendo o problema observa-se que para soluciona-lo devemos calcular o número de formas distintas de permutar 8 símbolos, onde são e 4 são de modo que não tenha 2 símbolos juntos. Veja que de acordo com o esquema, de círculos e traços, podem-se colocar 4 símbolos em quaisquer dos cinco lugares, ou seja, é possível escolher 4 dos 5 lugares disponíveis (representados pelas circunferências) para por os símbolos o que pode ser realizado de Dessa forma 5 subconjuntos podem ser formados, os quais estão listados abaixo:    "
},
{
  "id": "teo-kaplansky-1",
  "level": "2",
  "url": "section-lemas-kaplansky.html#teo-kaplansky-1",
  "type": "Teorema",
  "number": "2.4.3",
  "title": "",
  "body": " (1º Lema de Kaplansky) O número de subconjuntos com elementos de nos quais não há números consecutivos é:    Deseja-se formar subconjuntos formados por elementos não consecutivos de . Da mesma forma que o , os elementos de que figuram nos subconjuntos serão representados com o símbolo e os elementos de que não figuram nos subconjuntos são representados com o símbolo . Desta forma teremos elementos que serão representados com o símbolo . Entre os símbolos existirão espaços vazios disponíveis, pois o espaço antes do primeiro símbolo , assim como o espaço depois do último símbolo estão disponíveis, veja a   Distribuição de símbolos e espaços para os símbolos .    Desta forma, resta escolher entre os espaços vazios aqueles que serão ocupados pelos símbolos . Logo,   "
},
{
  "id": "tec-kaplansky-1",
  "level": "2",
  "url": "section-lemas-kaplansky.html#tec-kaplansky-1",
  "type": "Tecnologia",
  "number": "2.4.5",
  "title": "",
  "body": " Calculando no Sage:   "
},
{
  "id": "technology-29",
  "level": "2",
  "url": "section-lemas-kaplansky.html#technology-29",
  "type": "Tecnologia",
  "number": "2.4.6",
  "title": "",
  "body": " Escolha uma lista de letras ou números e para obter os subconjuntos da lista com elementos, nos quais não há elementos, da lista, consecutivos.   Todos os subconjuntos com elementos.    "
},
{
  "id": "example-39",
  "level": "2",
  "url": "section-lemas-kaplansky.html#example-39",
  "type": "Exemplo",
  "number": "2.4.8",
  "title": "",
  "body": " Um exame vestibular se constitui de 10 questões distintas, 3 das quais da área de Matemática. Determine de quantas formas é possível programar a sequência das 10 questões, de maneira que duas questões da área de Matemática não se sucedam.   São 3 questões de Matemática e 7 questões de outras áreas . Inicialmente, iremos dispor as provas que não sofrem restrições.  Temos 8 lugares para colocar as 3 provas de Matemática e o número de formas de calcular isso, pode ser feito utilizando o 1º Lema de Kaplansky: Devemos, agora, permutar a ordem das 7 provas das outras áreas e as 3 de Matemática. Assim, temos E o total de formas de programar a sequência dessas 10 provas é:   "
},
{
  "id": "teo-kaplansky-2",
  "level": "2",
  "url": "section-lemas-kaplansky.html#teo-kaplansky-2",
  "type": "Teorema",
  "number": "2.4.9",
  "title": "",
  "body": " (2º Lema de Kaplansky) O número de subconjuntos com elementos de nos quais não há números consecutivos e, 1 e são consecutivos, é :    O problema será dividido em dois casos:  1º caso: O elemento 1 pertencendo ao subconjunto composto por elementos. Neste caso, será feito a análise de quantos formas poderá serão escolhidos os outros elementos do conjunto , pois os elementos 1 e não podem pertencer ao conjunto. Dessa forma, utilizando o 1º lema de Kaplansky, o número de maneiras que isso pode ocorrer é:  2º caso: O elemento 1 não pertencendo ao subconjunto composto por elementos. Nesse caso a escolha de elementos será realizado entre os elementos do conjunto . No entanto pelo primeiro lema de Kaplansky a escolha será determinada por  Pelo Princípio Aditivo, somando os resultados do 1º e do 2º caso, a solução do problema será dado por: finalmente,   "
},
{
  "id": "example-40",
  "level": "2",
  "url": "section-lemas-kaplansky.html#example-40",
  "type": "Exemplo",
  "number": "2.4.10",
  "title": "",
  "body": " Débora deseja correr 3 vezes por semana durante esse bimestre. De quantas formas ela poderá escolher os dias da corrida, se Débora não deseja correr em dias consecutivos?   Nesta questão observa-se que a disposição dos dias da semana geram um sistema cíclico, ou seja, o início de uma semana dá continuação ao fim da semana anterior a ela e assim sucessivamente, como pode ser verificado na figura abaixo:   Dias da semana.    Desta forma, Débora deve escolher 3 dias entre: domingo, segunda, terça, quarta, quinta, sexta e sábado de maneira que não apareçam dois dias consecutivos. O número de maneiras que Débora pode escolher os 3 dias é:    "
},
{
  "id": "example-41",
  "level": "2",
  "url": "section-lemas-kaplansky.html#example-41",
  "type": "Exemplo",
  "number": "2.4.12",
  "title": "",
  "body": " Dado um decágono, quantos são os triângulos cujos vértices são vértices não consecutivos do decágono?   O resultado esperado corresponde a escolha de 3 elementos não consecutivos de um conjunto de 10 elementos (vértices), como eles estão organizados de forma circular, tem-se:    "
},
{
  "id": "tec-kaplansky-2",
  "level": "2",
  "url": "section-lemas-kaplansky.html#tec-kaplansky-2",
  "type": "Tecnologia",
  "number": "2.4.13",
  "title": "",
  "body": " Calculando no Sage:   "
},
{
  "id": "technology-31",
  "level": "2",
  "url": "section-lemas-kaplansky.html#technology-31",
  "type": "Tecnologia",
  "number": "2.4.14",
  "title": "Faça você mesmo.",
  "body": " Faça você mesmo   Todos os subconjuntos com elementos.  Escolha uma lista de letras ou números e para obter os subconjuntos da lista com elementos, nos quais não há elementos, da lista, consecutivos, considerando o primeiro e o último consecutivos.    "
},
{
  "id": "teo-kaplansky-3",
  "level": "2",
  "url": "section-lemas-kaplansky.html#teo-kaplansky-3",
  "type": "Teorema",
  "number": "2.4.16",
  "title": "",
  "body": " (Generalização do 1º Lema de Kaplansky) O número de subconjuntos com elementos de de modo que entre cada dois elementos escolhidos para o subconjunto haja, no conjunto, pelo menos elementos não escolhidos para o subconjunto é:    Representamos com o símbolo os elementos que figuram nos subconjuntos e com o símbolo os elementos que não figuram. Os símbolos e serão organizados de forma que entre dois símbolos haja pelo menos símbolos e antes do primeiro símbolo , assim como depois do último símbolo , podem figurar qualquer quantidade de símbolos . Formando uma fila com os símbolos ficamos com espaços para colocar os símbolos , veja a .   Distribuição de símbolos e espaços para os símbolos .     Observando que a quantidade de símbolos disponíveis é , o número de soluções desse problema é exatamente o número de soluções (em números inteiros) da equação:    Definindo e substituindo na equação anterior, ficamos com Ou seja, O número de soluções dessa equação é    "
},
{
  "id": "tec-kaplansky-3",
  "level": "2",
  "url": "section-lemas-kaplansky.html#tec-kaplansky-3",
  "type": "Tecnologia",
  "number": "2.4.18",
  "title": "",
  "body": " Calculando no Sage:   "
},
{
  "id": "example-42",
  "level": "2",
  "url": "section-lemas-kaplansky.html#example-42",
  "type": "Exemplo",
  "number": "2.4.19",
  "title": "",
  "body": " Um estudante precisa realizar quatro provas referentes à recuperação final em 4 disciplinas. A escola deu um prazo 20 dias (incluindo sábados e domingos) para a realização de tais provas. Sabendo que o aluno pode escolher as datas que irá realizar cada prova e que ele deseja fazer uma prova por dia com um intervalo de três dias entre uma prova e outra (ou seja, 3 dias sem fazer provas), para poder estudar, responda: de quantas formas esse aluno pode escolher os dias para a realização das quatro provas?   Utilizando a Generalização do 1º Lema de Kaplansky, onde e , o número de maneiras de escolher os quatro dias para a realização das provas será dado por     "
},
{
  "id": "teo-kaplansky-4",
  "level": "2",
  "url": "section-lemas-kaplansky.html#teo-kaplansky-4",
  "type": "Teorema",
  "number": "2.4.20",
  "title": "",
  "body": " (Generalização do 2º Lema de Kaplansky) O número de subconjuntos com elementos de onde e são \"adjacentes\" e de modo que entre cada dois elementos escolhidos para o subconjunto haja, no conjunto, pelo menos elementos não escolhidos para o subconjunto é:    Vamos separar em dois casos. Observe que um subconjunto satisfazendo as condições do enunciado vai possuir ou não algum dos elementos: .  1º caso: O número de subconjuntos que não possui quais quer dos elementos supracitados é pois, restam elementos, tais que, o primeiro e o último não são adjacentes e os subconjuntos serão formados por elementos satisfazendo as mesmas condição da Generalização do 1º Lema de Kaplansky.  2º caso: O número de subconjuntos que possui um dos elementos supracitados é pois, para cada uns dos elementos: faça o seguinte.  Adicione o elemento , então elementos antes do e elementos depois do não podem figurar. Portanto, do total de elementos, elementos precisam ser subtraidos, restando . Agora, elementos precisam ser escolhidos, satisfazendo as mesmas condição da Generalização do 1º Lema de Kaplansky.   Calculando obtemos:    "
},
{
  "id": "tec-kaplansky-4",
  "level": "2",
  "url": "section-lemas-kaplansky.html#tec-kaplansky-4",
  "type": "Tecnologia",
  "number": "2.4.21",
  "title": "",
  "body": " Calculando no Sage:   "
},
{
  "id": "example-43",
  "level": "2",
  "url": "section-lemas-kaplansky.html#example-43",
  "type": "Exemplo",
  "number": "2.4.22",
  "title": "",
  "body": " Lucas recebeu uma proposta para trabalhar em uma multinacional na China. A empresa lhe prometeu duas férias por ano, sempre nos mesmos meses, com passagem paga pela empresa, para ela poder visitar seus familiares no Brasil. A única restrição que a empresa fez foi que houvesse um intervalo de pelo menos 4 meses entre as duas férias. Quantas são as formas de Lucas escolher os meses das suas férias?   Como a escolha dos meses será mantida pelos anos seguintes, aplicando a Generalização do 2º Lema de Kaplansky obtemos:    "
},
{
  "id": "exercise-82",
  "level": "2",
  "url": "section-lemas-kaplansky.html#exercise-82",
  "type": "Exercício",
  "number": "2.4.5.1",
  "title": "",
  "body": " Um estacionamento tem 10 vagas, uma ao lado da outra, inicialmente todas livres. Um carro preto, um carro rosa e um carro branco chegam a esse estacionamento. De quantas maneiras diferentes esses carros podem ocupar três vagas de forma que haja pelo menos uma vaga livre entre eles?   336   As vagas que serão ocupadas podem ser escolhidas de maneiras, e a ordem dos carros pode ser escolhida de maneiras. Logo, o número de soluções é   "
},
{
  "id": "exercise-83",
  "level": "2",
  "url": "section-lemas-kaplansky.html#exercise-83",
  "type": "Exercício",
  "number": "2.4.5.2",
  "title": "",
  "body": " De quantos modos podemos formar uma sequência de 9 elementos iguais a 1 e 6 elementos iguais a 0 se dois elementos iguais a 0 não podem ser adjacentes?   210   No total temos elementos e seis deles não podem ficar lado a lado. Portanto, o número de soluções é   "
},
{
  "id": "exercise-84",
  "level": "2",
  "url": "section-lemas-kaplansky.html#exercise-84",
  "type": "Exercício",
  "number": "2.4.5.3",
  "title": "",
  "body": " (ITA) 12 cavaleiros estão sentados em torno de uma mesa redonda. Cada um dos 12 cavaleiros considera seus dois vizinhos como rivais. Deseja-se formar um grupo de 5 cavaleiros para libertar uma princesa. Nesse grupo não poderá haver cavaleiros rivais. Determine de quantas maneiras é possível escolher esse grupo.   36   Vamos usar o 2º Lema de Kaplansky. De 12 pessoas em disposição circular, precisamos contar o número de maneiras de escolher 5 dessas pessoas, sem selecionar duas adjacentes. Logo, o número de soluções é   "
},
{
  "id": "exercise-85",
  "level": "2",
  "url": "section-lemas-kaplansky.html#exercise-85",
  "type": "Exercício",
  "number": "2.4.5.4",
  "title": "",
  "body": " 8 pessoas devem se sentar em 25 cadeiras colocadas em torno de uma mesa circular. De quantos modos isso pode ser feito se não deve haver ocupação simultânea de duas cadeiras adjacentes?   1441440000   Primeiro, contamos o número de maneiras de escolher as 8 cadeiras que serão usadas, dentre as 25 disponíveis em disposição circular. Depois, contanos a quantidade de maneiras de ordenas as 8 pessoas que irão sentar nas cadeiras. Isto pode ser feito de maneiras  "
},
{
  "id": "exercise-86",
  "level": "2",
  "url": "section-lemas-kaplansky.html#exercise-86",
  "type": "Exercício",
  "number": "2.4.5.5",
  "title": "",
  "body": "(OBM 2010 - 2ª fase do nível 3) Diamantino gosta de jogar futebol, mas se jogar dois dias seguidos ele fica com dores musculares. De quantas maneiras Diamantino pode escolher em quais de dez dias seguidos ele vai jogar bola sem ter dores musculares? Uma maneira é não jogar futebol em nenhum dos dias.   144   O número de maneiras de Diamantino escolher os dias que quer jogar futebol, sem ter dores musculares é   "
},
{
  "id": "exercise-87",
  "level": "2",
  "url": "section-lemas-kaplansky.html#exercise-87",
  "type": "Exercício",
  "number": "2.4.5.6",
  "title": "",
  "body": " Irving gosta de jogar futebol, mas precisa ficar dois dias consecutivos sem jogar para evitar dores musculares. De quantas maneiras Irving pode escolher em quais de 20 dias seguidos ele vai jogar bola sem ter dores musculares? Uma maneira é não jogar futebol em nenhum dos dias.   2737   O número de formas de Irving jogar futebol sem ter dores musculares é    "
},
{
  "id": "exercise-88",
  "level": "2",
  "url": "section-lemas-kaplansky.html#exercise-88",
  "type": "Exercício",
  "number": "2.4.5.7",
  "title": "",
  "body": " Um determinado atleta quer fazer treinos HIIT para se preparar fisicamente para um campeonato. Sabendo que faltam 28 dias para o campeonato, que ele quer pelo menos 3 dias de intervalo entre dois treinos HIIT e que ele pode escolher 3 tipos desses treinos. De quantas maneiras esse atleta pode escolher fazer os treinos HIIT, se ele quer treinar pelo menos 5 vezes?     O atleta pode escolher treinar ou vezes, pois . Em cada dia que ele resolve treinar, ele têm três opções. Portanto a resposta é  No Sage o cálculo pode ser feito da seguinte maneira:   "
},
{
  "id": "exercise-89",
  "level": "2",
  "url": "section-lemas-kaplansky.html#exercise-89",
  "type": "Exercício",
  "number": "2.4.5.8",
  "title": "",
  "body": " Seis pessoas devem se sentar em vinte cadeiras colocadas em torno de uma mesa circular. De quantos modos isso pode ser feito se para cada cadeira ocupada devemos ter duas cadeiras livres de cada lado?        "
},
{
  "id": "section-casa-pombos",
  "level": "1",
  "url": "section-casa-pombos.html",
  "type": "Seção",
  "number": "2.5",
  "title": "Princípio da Casa dos Pombos",
  "body": " Princípio da Casa dos Pombos    Nota Histórica  O Princípio da Casa dos Pombos, também conhecido como O Princípio das Gavetas de Dirichlet, surgiu em 1834, o conceito foi utilizado pelo matemático alemão Johann Peter Gustav Lejeune Dirichlet, estudante da Universidade de Paris, que trabalhou nas Universidades de Breslau e Berlim, posteriormente sendo escolhido como sucessor de Johann Carl Friedrich Gauss na Universidade de Göttingen. Dirichlet foi responsável por grandes avanços na Matemática, especialmente na área de Teoria dos Números.   Johann Peter Gustav Lejeune Dirichlet, fonte: gigantesdamatematica.wordpress.com\/      1ª versão do Princípio da Casa dos Pombos   Se pombos forem colocados em casas, então existe pelo menos uma casa contendo dois ou mais pombos.  Suponha que nenhuma das casas contém mais de um pombo. Então o número total de pombos seria no máximo . Isto é uma contradição, já que existem pelo menos pombos.    Podemos interpretar o princípio usando funções da seguinte forma: Sejam e , dois conjuntos. Se o número de elementos de for maior que o números de elementos de , então não existe uma função injetiva de para , ou seja, pelo menos dois elementos do domínio terão a mesma imagem, independente da função entre e .  Essencialmente, para usar este princípio, precisamos identificar dois conjuntos, que chamaremos sugestivamente de e para representarem o conjunto dos pombos e o conjunto das casas, respectivamente. Em seguida comparamos o número de elementos entre eles.    Mostre que, em um grupo de 367 pessoas, pelo menos duas fazem o aniversário no mesmo dia.   Chame de o conjunto das pessoas e o conjunto dos dias do ano. Desta forma como temos mais elementos em do que em , pelo princípio da casa dos pombos, pelo menos duas pessoas fazem aniversário no mesmo dia.     Mostre que entre nove números que não possuem divisores primos maiores que cinco, existem dois cujo produto é um quadrado.   Inicialmente observe que, qualquer número inteiro que não possui divisor primo maior que cinco, se escreve na forma , com e .  Defina um conjunto com 9 números arbitrários, que satisfaça as hipóteses do enunciado: Como os expoentes e só podem ser pares ou ímpares, seja um conjunto que represente todas as paridades possíveis para os expoentes de 2, 3 e 5 em . Este conjunto possui 8 elementos, pois temos duas possibilidades para a paridade de cada um dos 3 expoentes.  Como o conjunto é formado por nove elementos, pelo princípio da casa dos pombos, teremos dois elementos em , cujos expoentes possuem a mesma paridade, digamos que e .  O produto entre eles é da forma , com , que é um quadrado, pois pode ser escrito na forma .     (IMO 1972) Prove que, de qualquer conjunto de dez números naturais distintos de dois dígitos, podemos escolher dois subconjuntos A e B (disjuntos) cuja a soma dos elementos é a mesma em ambos.   Seja um conjunto com 10 números naturais distintos de dois dígitos. A soma de todos os elementos de pode ser no máximo 945, no caso em que .  Considere o conjunto das partes de , ou seja, o conjunto formado por todos os subconjuntos de . Este conjunto possui elementos, sendo um deles o conjunto vazio, pois para formar um subconjunto de , precisamos decidir se cada elemento de vai pertencer ou não a este subconjunto.  Defina e como o conjunto das partes de , menos o conjunto vazio. Desta forma possui elementos.  Observe que um elemento de é um subconjunto de e que a soma dos elementos de um elemento de será um número que pertence a . Pelo princípio da casa dos pombos, como temos mais elementos em do que em , pelo menos dois elementos possuem a mesma soma.  Se e forem disjuntos, acabou. Se não, considere e . Logo, os conjuntos e são disjuntos e a soma dos seus elementos é a mesma.      2ª versão do Princípio da Casa dos Pombos  Para uma versão mais geral do princípio da casa dos pombos, vamos usar a função teto dada por ou seja, é o menor inteiro que é maior ou igual a . Observe que , para qualquer .         Se pombos forem colocados em casas, então existe pelo menos uma casa contendo pelo menos pombos.   Suponha que nenhuma das caixas contém mais que pombos. Então, o número total de pombos é no máximo na qual a desigualdade foi usada. Esta é uma contradição, pois existem um total de pombos.     Nove pontos são colocados no interior de um triângulo de área 4 , de forma que não tenha 3 pontos colineares. Mostre que podemos escolher três deles para serem os vértices de um triângulo de área no máximo igual a 1 .   Sejam e os vértices do triângulo de área 4 . Considere três pontos e na arestas , de forma que e formem quatro triângulos, cada um com área de 1 .  Desta forma ao colocar os pontos no triâgulo , pelo princípio da casa dos pombos, existem pelo menos pontos em um dos quatro triângulos: e .   Triângulo subdividido.    Logo os três pontos que estão dentro de um destes 4 triângulos, por não serem colineares, formam um triângulo de área no máximo igual a 1 .     Assuma que em um grupo de 6 pessoas, cada par de pessoas consistem em dois amigos ou dois inimigos. Mostre que ou existem 3 amigos mútuos ou 3 inimigos mútuos.   Seja uma das 6 pessoas. Sejam e o conjunto com as outras 5 pessoas.  Pela 2ª versão do princípio da casa dos pombos, dividindo as 5 pessoas de nos 2 conjuntos de , um desses conjuntos possui pelo menos elementos. Então, ou existem 3 ou mais que são amigos de , ou 3 ou mais que são inimigos de .  Suponha sem perda de generalidade que e sejam amigos de . Se quaisquer duas destas 3 pessoas são amigas, então estas duas pessoas e formam um conjunto de 3 amigos mútuos.      Exercícios   Qual é o número mínimo de pessoas que deve haver em um grupo para que possamos garantir que nele haja pelo menos 5 pessoas nascidas no mesmo mês?   49   Pelo basta encontrar o menor número inteiro , tal que . Como , o valor de é 5.     Escolhem-se ao acaso 5 pontos sobre a superfície de um quadrado de lado 2. Mostre que pelo menos um dos segmentos que eles determinam tem comprimento menor ou igual a .   Dividindo o quadrado de lado 2 em 4 quadrados de lado 1 ficamos com quatro regiões, nas quais, a maior distância possível entre dois pontos é determinado pelas diagonais, cujo comprimento mede . Se os segmentos determinados pelos quatro primeiros pontos ainda não satisfazem a condição do enunciado, necessariamente, ao escolher o quinto ponto, ele ficará em um dos quatro quadrados que já possuem um ponto cada um. Portando dentre todos os segmentos determinados pelos cinco pontos, a menor distância será menor ou igual a .    (IMO 1964) 17 pessoas se comunicam por cartas. Em todas a cartas, eles discutem apenas um dos três tópicos possíveis. Cada par de pessoas discute apenas um tópico. Mostre que há pelo menos três pessoas que discutiram apenas um tópico.   Selecione uma pessoa qualquer e chame de . Como se comunica com 16 outras pessoas e são apenas 3 tópicos possíveis, pelo  deve discutir sobre um mesmo tópico com pelo menos 6 pessoas, pois  Suponha que discute o tópico I com 6 pessoas. Se qualquer uma dessas seis pessoas discutir com outra dessas 6 pessoas sobre o tópico I, então há 3 escritores correspondentes no tópico I. (O triângulo verde da representa as 3 pessoas que discutem o mesmo tôpico.)   3 pessoas que discutem o tópico 1.    Portanto, suponha que dentre essas seis pessoas apenas os tópicos II e III são discutidos. Se for um desses seis, então pelo  deve discutir com pelo menos 3 dos outros 5 um dos dois tópicos, digamos II, pois  Ainda, existem duas possibilidades para essas três últimas pessoas.  3 pessoas que discutem o tópico II ou o tópico III.   Se alguém escreve para outra pessoa sobre o tópico II, então encontramos três pessoas discutindo sobre o tópico II. Caso contrário, se nenhum dos três escreve para outro sobre o tópico II, então todos os três devem escrever um para o outro sobre o tópico III. Isso prova o afirmação.    (IMO 1985) Seja um conjunto com 1985 inteiros positivos, de modo que nenhum possui um divisor primo maior que 23. Mostre que em existem 4 inteiros, cujo produto é o quarta potência de um inteiro.   Existem nove primos menores ou iguais a : e . Considere uma lista, com entradas, para cada um dos 1985 números, de modo que cada entrada seja a potência do respectivo primo que aparece na fatoração do número. Por exemplo, se o número estiver entre os 1985 números, a lista dele será: Para que existam 4 interios, cujo produto seja a quarta potência de um inteiro, é suficiente mostrar que é possível encontrar 4 listas, tais que, se forem somadas entrada a entrada, cada uma dessas novas entradas será divisível por 4.  Para cada uma das 1985 listas , considere uma nova lista , na qual, cada entrada será o resto da divisão por 2, da entrada da lista original (ou seja, módulo 2). Por exemplo:  Assim, cada nova lista estará entre as 512 possíveis listas distintas. Dessa forma, pelo Princípio da Casa dos Pombos, para cada 513 listas , haverão duas idênticas. Considere quaiquer 513 listas , separe o par idêntico e repita esse processo até sobrarem 511 listas. No final desse processo, foram separadas 737 pares de listas.  Para cada um dos 737 pares, considere uma lista formada pela soma . Observe que cada entrada das 737 listas é igual a zero ou a dois. Como só existem 512 listas diferentes, com entradas 0 ou 2, pelo Princípio da Casa dos Pombos, pelo menos duas das listas serão idênticas. Digamos que e , então o número é a quarta potência de um inteiro.      (Vietnam 2007) Dado um polígono regular com lados, encontre o menor inteiro positivo tal que entre quaisquer vértices do polígono existam com a propriedade: o quadrilátero convexo que eles formam compartilha lados com o polígono.   Numere os vértices do polígono de a . O que queremos descobir é o menor valor de , tal que, qualquer conjunto com vértices possua pelo menos vértices consecutivos.  Considere o conjunto das -tuplas de vértices consecutivos: Cada vértice do polígono está presente em 4 elementos do conjunto . Desse modo, cada vértice escolhido no polígono correspondem a 4 elementos de . Como possui elementos, escreva uma lista com os números de todas as -tuplas de forma consecutiva, formando uma lista com números. Na lista podemos escolher até números, de forma que não tenham elementos consecutivos. Então, como cada vértice do polígono correspondem a elementos de , se , teremos a condição satisfeita: qualquer conjunto de vértices possui pelo menos vértices consecutivos. Fazendo as contas,   Agora precisamos monstrar que o menor valor de é . Vamos escolher vértices de forma que não tenham vértices consecutivos. Considere todos os vértices do polígono, menos o vértice e os vértices que são múltiplos de . Como , temos múltiplos de , dessa forma temos vértices sem que deles sejam consecutivos.    (OMM 2003) Há meninos e meninas em uma festa. Cada menino gosta de meninas e cada menina gosta de meninos. Encontre todos os pares de forma que sempre deve haver ser um menino e uma menina que gostam um do outro.   Considere os pares , na qual é um menino que gosta da menina . Para cada menino, existem pares, então existem pares. Portanto existe uma menina em desses pares, ou seja, existe uma menina que pelo menos meninos gostam dela. Se essa menina gosta de mais que meninos, então podemos encontrar o par desejado. Portanto, se , podemos encontrar um par.  Se vamos mostar que nem sempre é possível encontrar um par satisfazendo a condição do enunciado. Vamos numerar os meninos e as meninas de a . Dado um par , com a primeira entrada correspondendo a menina e a segunda entrada correspondendo ao menino. Diremos que gosta de , se deixar resto que pertence ao conjunto , na divisão por . Diremos que gosta de , se deixar resto que pertence ao conjunto , na divisão por . Com isso, cada menino gosta de meninas, cada menina gosta de meninos e não existe um par que os dois se gostem.    "
},
{
  "id": "figura-dirichlet",
  "level": "2",
  "url": "section-casa-pombos.html#figura-dirichlet",
  "type": "Figura",
  "number": "2.5.1",
  "title": "",
  "body": " Johann Peter Gustav Lejeune Dirichlet, fonte: gigantesdamatematica.wordpress.com\/   "
},
{
  "id": "teo-casa-pombo",
  "level": "2",
  "url": "section-casa-pombos.html#teo-casa-pombo",
  "type": "Teorema",
  "number": "2.5.2",
  "title": "",
  "body": " Se pombos forem colocados em casas, então existe pelo menos uma casa contendo dois ou mais pombos.  Suponha que nenhuma das casas contém mais de um pombo. Então o número total de pombos seria no máximo . Isto é uma contradição, já que existem pelo menos pombos.  "
},
{
  "id": "remark-5",
  "level": "2",
  "url": "section-casa-pombos.html#remark-5",
  "type": "Nota",
  "number": "2.5.3",
  "title": "",
  "body": " Podemos interpretar o princípio usando funções da seguinte forma: Sejam e , dois conjuntos. Se o número de elementos de for maior que o números de elementos de , então não existe uma função injetiva de para , ou seja, pelo menos dois elementos do domínio terão a mesma imagem, independente da função entre e .  Essencialmente, para usar este princípio, precisamos identificar dois conjuntos, que chamaremos sugestivamente de e para representarem o conjunto dos pombos e o conjunto das casas, respectivamente. Em seguida comparamos o número de elementos entre eles.  "
},
{
  "id": "example-44",
  "level": "2",
  "url": "section-casa-pombos.html#example-44",
  "type": "Exemplo",
  "number": "2.5.4",
  "title": "",
  "body": " Mostre que, em um grupo de 367 pessoas, pelo menos duas fazem o aniversário no mesmo dia.   Chame de o conjunto das pessoas e o conjunto dos dias do ano. Desta forma como temos mais elementos em do que em , pelo princípio da casa dos pombos, pelo menos duas pessoas fazem aniversário no mesmo dia.   "
},
{
  "id": "example-45",
  "level": "2",
  "url": "section-casa-pombos.html#example-45",
  "type": "Exemplo",
  "number": "2.5.5",
  "title": "",
  "body": " Mostre que entre nove números que não possuem divisores primos maiores que cinco, existem dois cujo produto é um quadrado.   Inicialmente observe que, qualquer número inteiro que não possui divisor primo maior que cinco, se escreve na forma , com e .  Defina um conjunto com 9 números arbitrários, que satisfaça as hipóteses do enunciado: Como os expoentes e só podem ser pares ou ímpares, seja um conjunto que represente todas as paridades possíveis para os expoentes de 2, 3 e 5 em . Este conjunto possui 8 elementos, pois temos duas possibilidades para a paridade de cada um dos 3 expoentes.  Como o conjunto é formado por nove elementos, pelo princípio da casa dos pombos, teremos dois elementos em , cujos expoentes possuem a mesma paridade, digamos que e .  O produto entre eles é da forma , com , que é um quadrado, pois pode ser escrito na forma .   "
},
{
  "id": "example-46",
  "level": "2",
  "url": "section-casa-pombos.html#example-46",
  "type": "Exemplo",
  "number": "2.5.6",
  "title": "",
  "body": " (IMO 1972) Prove que, de qualquer conjunto de dez números naturais distintos de dois dígitos, podemos escolher dois subconjuntos A e B (disjuntos) cuja a soma dos elementos é a mesma em ambos.   Seja um conjunto com 10 números naturais distintos de dois dígitos. A soma de todos os elementos de pode ser no máximo 945, no caso em que .  Considere o conjunto das partes de , ou seja, o conjunto formado por todos os subconjuntos de . Este conjunto possui elementos, sendo um deles o conjunto vazio, pois para formar um subconjunto de , precisamos decidir se cada elemento de vai pertencer ou não a este subconjunto.  Defina e como o conjunto das partes de , menos o conjunto vazio. Desta forma possui elementos.  Observe que um elemento de é um subconjunto de e que a soma dos elementos de um elemento de será um número que pertence a . Pelo princípio da casa dos pombos, como temos mais elementos em do que em , pelo menos dois elementos possuem a mesma soma.  Se e forem disjuntos, acabou. Se não, considere e . Logo, os conjuntos e são disjuntos e a soma dos seus elementos é a mesma.   "
},
{
  "id": "remark-6",
  "level": "2",
  "url": "section-casa-pombos.html#remark-6",
  "type": "Nota",
  "number": "2.5.7",
  "title": "",
  "body": "Para uma versão mais geral do princípio da casa dos pombos, vamos usar a função teto dada por ou seja, é o menor inteiro que é maior ou igual a . Observe que , para qualquer .  "
},
{
  "id": "example-47",
  "level": "2",
  "url": "section-casa-pombos.html#example-47",
  "type": "Exemplo",
  "number": "2.5.8",
  "title": "",
  "body": "    "
},
{
  "id": "teo-casa-pombo2",
  "level": "2",
  "url": "section-casa-pombos.html#teo-casa-pombo2",
  "type": "Teorema",
  "number": "2.5.9",
  "title": "",
  "body": " Se pombos forem colocados em casas, então existe pelo menos uma casa contendo pelo menos pombos.   Suponha que nenhuma das caixas contém mais que pombos. Então, o número total de pombos é no máximo na qual a desigualdade foi usada. Esta é uma contradição, pois existem um total de pombos.   "
},
{
  "id": "example-48",
  "level": "2",
  "url": "section-casa-pombos.html#example-48",
  "type": "Exemplo",
  "number": "2.5.10",
  "title": "",
  "body": " Nove pontos são colocados no interior de um triângulo de área 4 , de forma que não tenha 3 pontos colineares. Mostre que podemos escolher três deles para serem os vértices de um triângulo de área no máximo igual a 1 .   Sejam e os vértices do triângulo de área 4 . Considere três pontos e na arestas , de forma que e formem quatro triângulos, cada um com área de 1 .  Desta forma ao colocar os pontos no triâgulo , pelo princípio da casa dos pombos, existem pelo menos pontos em um dos quatro triângulos: e .   Triângulo subdividido.    Logo os três pontos que estão dentro de um destes 4 triângulos, por não serem colineares, formam um triângulo de área no máximo igual a 1 .   "
},
{
  "id": "example-49",
  "level": "2",
  "url": "section-casa-pombos.html#example-49",
  "type": "Exemplo",
  "number": "2.5.12",
  "title": "",
  "body": " Assuma que em um grupo de 6 pessoas, cada par de pessoas consistem em dois amigos ou dois inimigos. Mostre que ou existem 3 amigos mútuos ou 3 inimigos mútuos.   Seja uma das 6 pessoas. Sejam e o conjunto com as outras 5 pessoas.  Pela 2ª versão do princípio da casa dos pombos, dividindo as 5 pessoas de nos 2 conjuntos de , um desses conjuntos possui pelo menos elementos. Então, ou existem 3 ou mais que são amigos de , ou 3 ou mais que são inimigos de .  Suponha sem perda de generalidade que e sejam amigos de . Se quaisquer duas destas 3 pessoas são amigas, então estas duas pessoas e formam um conjunto de 3 amigos mútuos.   "
},
{
  "id": "exercise-90",
  "level": "2",
  "url": "section-casa-pombos.html#exercise-90",
  "type": "Exercício",
  "number": "2.5.4.1",
  "title": "",
  "body": " Qual é o número mínimo de pessoas que deve haver em um grupo para que possamos garantir que nele haja pelo menos 5 pessoas nascidas no mesmo mês?   49   Pelo basta encontrar o menor número inteiro , tal que . Como , o valor de é 5.  "
},
{
  "id": "exercise-91",
  "level": "2",
  "url": "section-casa-pombos.html#exercise-91",
  "type": "Exercício",
  "number": "2.5.4.2",
  "title": "",
  "body": " Escolhem-se ao acaso 5 pontos sobre a superfície de um quadrado de lado 2. Mostre que pelo menos um dos segmentos que eles determinam tem comprimento menor ou igual a .   Dividindo o quadrado de lado 2 em 4 quadrados de lado 1 ficamos com quatro regiões, nas quais, a maior distância possível entre dois pontos é determinado pelas diagonais, cujo comprimento mede . Se os segmentos determinados pelos quatro primeiros pontos ainda não satisfazem a condição do enunciado, necessariamente, ao escolher o quinto ponto, ele ficará em um dos quatro quadrados que já possuem um ponto cada um. Portando dentre todos os segmentos determinados pelos cinco pontos, a menor distância será menor ou igual a .  "
},
{
  "id": "exercise-92",
  "level": "2",
  "url": "section-casa-pombos.html#exercise-92",
  "type": "Exercício",
  "number": "2.5.4.3",
  "title": "",
  "body": " (IMO 1964) 17 pessoas se comunicam por cartas. Em todas a cartas, eles discutem apenas um dos três tópicos possíveis. Cada par de pessoas discute apenas um tópico. Mostre que há pelo menos três pessoas que discutiram apenas um tópico.   Selecione uma pessoa qualquer e chame de . Como se comunica com 16 outras pessoas e são apenas 3 tópicos possíveis, pelo  deve discutir sobre um mesmo tópico com pelo menos 6 pessoas, pois  Suponha que discute o tópico I com 6 pessoas. Se qualquer uma dessas seis pessoas discutir com outra dessas 6 pessoas sobre o tópico I, então há 3 escritores correspondentes no tópico I. (O triângulo verde da representa as 3 pessoas que discutem o mesmo tôpico.)   3 pessoas que discutem o tópico 1.    Portanto, suponha que dentre essas seis pessoas apenas os tópicos II e III são discutidos. Se for um desses seis, então pelo  deve discutir com pelo menos 3 dos outros 5 um dos dois tópicos, digamos II, pois  Ainda, existem duas possibilidades para essas três últimas pessoas.  3 pessoas que discutem o tópico II ou o tópico III.   Se alguém escreve para outra pessoa sobre o tópico II, então encontramos três pessoas discutindo sobre o tópico II. Caso contrário, se nenhum dos três escreve para outro sobre o tópico II, então todos os três devem escrever um para o outro sobre o tópico III. Isso prova o afirmação.  "
},
{
  "id": "exercise-93",
  "level": "2",
  "url": "section-casa-pombos.html#exercise-93",
  "type": "Exercício",
  "number": "2.5.4.4",
  "title": "",
  "body": " (IMO 1985) Seja um conjunto com 1985 inteiros positivos, de modo que nenhum possui um divisor primo maior que 23. Mostre que em existem 4 inteiros, cujo produto é o quarta potência de um inteiro.   Existem nove primos menores ou iguais a : e . Considere uma lista, com entradas, para cada um dos 1985 números, de modo que cada entrada seja a potência do respectivo primo que aparece na fatoração do número. Por exemplo, se o número estiver entre os 1985 números, a lista dele será: Para que existam 4 interios, cujo produto seja a quarta potência de um inteiro, é suficiente mostrar que é possível encontrar 4 listas, tais que, se forem somadas entrada a entrada, cada uma dessas novas entradas será divisível por 4.  Para cada uma das 1985 listas , considere uma nova lista , na qual, cada entrada será o resto da divisão por 2, da entrada da lista original (ou seja, módulo 2). Por exemplo:  Assim, cada nova lista estará entre as 512 possíveis listas distintas. Dessa forma, pelo Princípio da Casa dos Pombos, para cada 513 listas , haverão duas idênticas. Considere quaiquer 513 listas , separe o par idêntico e repita esse processo até sobrarem 511 listas. No final desse processo, foram separadas 737 pares de listas.  Para cada um dos 737 pares, considere uma lista formada pela soma . Observe que cada entrada das 737 listas é igual a zero ou a dois. Como só existem 512 listas diferentes, com entradas 0 ou 2, pelo Princípio da Casa dos Pombos, pelo menos duas das listas serão idênticas. Digamos que e , então o número é a quarta potência de um inteiro.  "
},
{
  "id": "exercise-94",
  "level": "2",
  "url": "section-casa-pombos.html#exercise-94",
  "type": "Exercício",
  "number": "2.5.4.5",
  "title": "",
  "body": " (Vietnam 2007) Dado um polígono regular com lados, encontre o menor inteiro positivo tal que entre quaisquer vértices do polígono existam com a propriedade: o quadrilátero convexo que eles formam compartilha lados com o polígono.   Numere os vértices do polígono de a . O que queremos descobir é o menor valor de , tal que, qualquer conjunto com vértices possua pelo menos vértices consecutivos.  Considere o conjunto das -tuplas de vértices consecutivos: Cada vértice do polígono está presente em 4 elementos do conjunto . Desse modo, cada vértice escolhido no polígono correspondem a 4 elementos de . Como possui elementos, escreva uma lista com os números de todas as -tuplas de forma consecutiva, formando uma lista com números. Na lista podemos escolher até números, de forma que não tenham elementos consecutivos. Então, como cada vértice do polígono correspondem a elementos de , se , teremos a condição satisfeita: qualquer conjunto de vértices possui pelo menos vértices consecutivos. Fazendo as contas,   Agora precisamos monstrar que o menor valor de é . Vamos escolher vértices de forma que não tenham vértices consecutivos. Considere todos os vértices do polígono, menos o vértice e os vértices que são múltiplos de . Como , temos múltiplos de , dessa forma temos vértices sem que deles sejam consecutivos.  "
},
{
  "id": "exercise-95",
  "level": "2",
  "url": "section-casa-pombos.html#exercise-95",
  "type": "Exercício",
  "number": "2.5.4.6",
  "title": "",
  "body": " (OMM 2003) Há meninos e meninas em uma festa. Cada menino gosta de meninas e cada menina gosta de meninos. Encontre todos os pares de forma que sempre deve haver ser um menino e uma menina que gostam um do outro.   Considere os pares , na qual é um menino que gosta da menina . Para cada menino, existem pares, então existem pares. Portanto existe uma menina em desses pares, ou seja, existe uma menina que pelo menos meninos gostam dela. Se essa menina gosta de mais que meninos, então podemos encontrar o par desejado. Portanto, se , podemos encontrar um par.  Se vamos mostar que nem sempre é possível encontrar um par satisfazendo a condição do enunciado. Vamos numerar os meninos e as meninas de a . Dado um par , com a primeira entrada correspondendo a menina e a segunda entrada correspondendo ao menino. Diremos que gosta de , se deixar resto que pertence ao conjunto , na divisão por . Diremos que gosta de , se deixar resto que pertence ao conjunto , na divisão por . Com isso, cada menino gosta de meninas, cada menina gosta de meninos e não existe um par que os dois se gostem.  "
},
{
  "id": "section-13",
  "level": "1",
  "url": "section-13.html",
  "type": "Seção",
  "number": "2.6",
  "title": "O Princípio da Reflexão",
  "body": " O Princípio da Reflexão   Passeios Sobre o Reticulado  Chamaremos o plano de coordenadas inteiras de reticulado.  Um reticulado.     Existe uma classe de problemas em análise combinatória que consiste em determinar a quantidade de caminhos de um ponto até , em um reticulado, sob algumas condições. Como por exemplo:  Uma partícula está sobre o reticulado. Ela só pode fazer dois tipos de movimentos:  Estando sobre o ponto se move para o ponto ;  Estando sobre o ponto se move para o ponto .  Determine o número de caminhos da origem até o ponto .  Chamamos o primeiro tipo de movimento de \"para o Norte\" e o denotaremos com uma letra , e o segundo de \"para o Leste\" e o denotaremos por uma letra . Com esta notação, temos uma bijeção entre os caminhos dessa partícula no reticulado e os anagramas formados por letras e por letras , por meio da seguinte associação: Toda vez que a partícula faz o movimento , escrevemos e toda vez que a partícula faz o movimento , escrevemos .      O Princípio da Reflexão  O princípio da reflexão é uma ideia geométrica aplicada na contagem de caminhos no reticulado com a restrição de não poder ultrapassar uma determinada reta. Dentre as variadas aplicações deste princípio, temos o problema do troco na fila de cinema ( ) e o problema da eleição de André ( ). Outra aplicação notável, é a dedução dos Números de Catalan, por meio de um caso particular deste princípio.    O princípio da reflexão consiste em determinar o número de caminhos da origem até o ponto , de modo que os caminhos fiquem sempre abaixo da diagonal , isto é, eles podem tocar, mas não podem cruzar.    Chamamos de caminho bom no reticulado, se o caminho não cruza a diagonal, e de caminho ruim se o caminho cruza a diagonal. Veja um exemplo de cada tipo na , na e na .   Um exemplo de caminho bom.       Seja a reflexão dos pontos de um reticulado em relação à reta , observe que . Na , veja que a reflexão leva a seta que liga à na seta que liga à .   Exemplo da reflexão .      A quantidade de caminhos ruins de até é igual ao número total de caminhos de até .    Seja o conjunto dos caminhos ruins de até e o conjunto dos caminhos de até . Primeiramente, observe que se , o ponto A estaria acima da diagonal , então não haveria caminhos bons, só os ruins. Logo, vamos supor que .  Seja um caminho ruim de até , isto é, , como ele é um caminho ruim, por definição, esse caminho cruza a reta pelo menos uma vez. Aplicando a reflexão aos pontos de , após o primeiro cruzamento, obtemos um caminho de até . Como é um caminho arbitrário, concluímos que cada caminho de é levado, dessa maneira, em um caminho de , logo .  Veja um exemplo na e na abaixo.   Exemplos de caminhos.    Exemplo de caminho ruim.     Caminho ruim em laranja e sua respectiva reflexão em verde.      Reciprocamente, tomando um caminho de até , isto é , ele necessariamente toca na diagonal , uma vez que a ordenada de é maior que a abscissa. Aplicando a reflexão , a partir do primeiro cruzamento em relação à reta , obtemos um caminho que termina em A. Ou seja, verificamos que todo caminho de é levado em um caminho de . Portanto, .  Da propriedade da tricotomia dos números reais, se e , concluímos que .    A quantidade de caminhos ruins de até é    Pela , o número de caminhos ruins de até é igual à quantidade de caminhos de até , sem restrições, ou seja, é o número de anagramas com os L's repetidos vezes e os N's repetidos vezes, que pode ser calculado por como queríamos demonstrar.     (Princípio da Reflexão)  Sejam com . A quantidade de caminhos da origem até o ponto que ficam abaixo da reta é dada por    Queremos calcular a quantidade de caminhos bons da origem até o ponto . Para tanto, vamos calcular o total e subtrair o número de caminhos ruins. O total de caminhos é dado por . E pela , sabemos que o número de caminhos ruins é dado por . Assim,      Abaixo, definimos uma função, que calcula o número de caminhos bons do ponto até o ponto .     Digite uma sequência de L's e D's e clique no botão \"Update\" para obter um reticulado, o respectivo caminho e caso esse caminho seja ruim, obtenha também a reflexão deste caminho em relação a reta , a partir do primeiro ponto que toca nessa reta.   Reticulado, caminho e reflexão.       Números de Catalan  Os Números de Catalan, que foram nosso fio condutor até aqui, são muitos profícuos em análise combinatória, modelando uma gama enorme de problemas, por exemplo, a referência apresenta 214 tipos diferentes de configurações combinatórias que podem ser contados usando Números de Catalan. Destacamos também, não só a variedade de problemas que são modelados por estes números, mais a versatilidade de temas que podem ser apresentados com eles, como por exemplo as funções geradoras, relações de recorrências, semi-ordem e muito mais. Para o leitor interessado, recomendamos as referências , e .   No (Princípio da Reflexão), o caso particular em que é conhecido como números de Catalan, ou seja, os números são conhecidos como números de Catalan (ou Catalão).    O Sage possui um método específico para calcular os números de Catalan. Basta escolher o valor de e usar o método conforme o código a seguir.     Anteriormente, no , vimos a bijeção entre os caminhos da origem até o ponto , com os anagramas formados por letras e letras . Neste momento, é natural perguntar: Qual é a relação entre estes anagramas e os números de Catalan?   Apresentamos os números de Catalan como a quantidade de caminhos da origem até o ponto de maneira que cada um desses caminhos nunca ultrapasse a diagonal , ou seja, a cada momento a quantidade de movimentos \"para o norte\" deve ser sempre menor ou igual que a quantidade de movimentos \"para o leste\". Assim, por meio da bijeção já apresentada no , concluímos que um caminho que é solução do problema de Catalan para o reticulado está associado aos anagramas com letras e letras de modo que ao lermos da esquerda para a direita a cada momento, a quantidade de letras será maior ou igual a quantidade de letras . Vejamos que para , o anagrama é uma palavra válida para o problema de Catalan, enquanto não é válida.     Um caminho de Dyck é um caminho de comprimento , no plano cartesiano, do ponto ao ponto . No qual, em cada passo, saímos do ponto para ou , com a condição adicional de que o caminho nunca fica abaixo do eixo . Quantos são os caminhos de Dyck?  Observe que se a cada passo de para associarmos uma letra \"L\" e a cada passo de para associarmos uma letra \"N\", temos uma associação dos caminhos de Dyck com os anagramas do que acabamos de ver. O qual tem sua cardinalidade determinada pelos números de Catalan.    Os caminhos de Dyck podem ser plotados no Sage, basta usar o método DyckWord , tendo como entrada uma lista de zeros e uns, na qual cada 1 representa um passo de para e cada 0 representa um passo de para . Além disso, é necessário adicionar o comando .plot() para que o Sage retorne o respectivo caminho de Dyck. No exemplo a seguir o parâmetro aspect_ratio=1 foi adicionado apenas para que os eixos fiquem com a mesma proporção.      Existem valores de e tais que a quantidade de caminhos bons é igual ao número de caminhos ruins?  Refaça o princípio da reflexão no caso em que os caminhos não possam nem tocar a diagonal .  Numa fila de cinema, pessoas têm notas de e pessoas têm notas de , com . A entrada custa .  Quais são as filas possíveis?  Quantas são as filas que terão problemas de troco se a bilheteria começar a trabalhar sem troco?  Quantas são as filas que terão problemas de troco se a bilheteria começar a trabalhar com duas notas de ?     O princípio da reflexão, também é conhecido como \"O princípio da reflexão de André\" (Andre's reflection principle), devido a sua utilização na solução do Problema da Eleição (\"The Ballot Problem\"). O qual enunciamos abaixo. Esse princípio possui várias generalizações e ainda pesquisado atualmente, o que pode ser visto em e .   Em uma eleição há dois candidatos A e B. Se o candidato teve votos e o candidato teve votos com Qual a probabilidade de durante a apuração, cédula a cédula, o candidato sempre esteja à frente, isto é, com mais votos ou empatado, com ?  Mostre que o número de Catalan, , conta o número de expressões contendo pares de parenteses que estão corretamente emparelhados. Por exemplo, para ,  No , mostramos que o número de caminhos de Dyck, de comprimento , é dado por . É suficiente exibir uma correspondência biunívoca entre os caminhos de Dyck e as expressões contendo pares de parenteses que estão corretamente emparelhados.  Para cada caminho de Dyck, cada vez que o passo for de para , abra um parêntese e cada vez que o passo for de para feche um parêntese. Dessa maneira, como os caminhos de Dyck não cruzam o eixo , em cada expressão correspondente, a quantidade de parênteses abrindo será maior ou igual que a quantidade de parênteses fechando. Além disso, o ponto inicial e o ponto final dos caminhos de Dyck estão separados por de passos e estão no eixo , portanto a expressão correspondente conterá pares de parênteses corretamente emparelhados.  Reciprocamente, para cada expressão corretamente emparelhada contendo pares de parênteses, fazendo a leitura da esquerda para a direita da expressão dada, construa o caminho de Dyck correspondente da seguinte maneira: Dê um passo de para , sempre que houver um parêntese abrindo, e dê um passo de para , sempre que houver um parêntese fechando. Assim, como a quantidade de parênteses abrindo é sempre maior ou igual que a quantidade de parênteses fechando, o caminho construído sempre ficará acima do eixo . O primeiro parêntese será do tipo \"(\", garantindo que o primeiro passo seja de para . Como as expressões estão corretamente emparelhadas e contêm pares de parênteses, o último parêntese será do tipo \")\" e o caminho correspondente chegará no ponto .  Observação: No Sage, a lista contendo todas as expressões de pares de parênteses corretamente emparelhados pode ser gerada com o método . Para exibir a representação em parênteses, basta usar o método :    Mostre que o número de maneiras de empilhar moedas no plano de modo que a linha da base consista em moedas consecutivas é . Vejamos como exemplo :  Todos os empilhamentos com 3 moedas na base.       "
},
{
  "id": "definition-20",
  "level": "2",
  "url": "section-13.html#definition-20",
  "type": "Definição",
  "number": "2.6.1",
  "title": "",
  "body": "Chamaremos o plano de coordenadas inteiras de reticulado.  Um reticulado.    "
},
{
  "id": "ticuladoexemplo",
  "level": "2",
  "url": "section-13.html#ticuladoexemplo",
  "type": "Exemplo",
  "number": "2.6.3",
  "title": "",
  "body": "Uma partícula está sobre o reticulado. Ela só pode fazer dois tipos de movimentos:  Estando sobre o ponto se move para o ponto ;  Estando sobre o ponto se move para o ponto .  Determine o número de caminhos da origem até o ponto .  Chamamos o primeiro tipo de movimento de \"para o Norte\" e o denotaremos com uma letra , e o segundo de \"para o Leste\" e o denotaremos por uma letra . Com esta notação, temos uma bijeção entre os caminhos dessa partícula no reticulado e os anagramas formados por letras e por letras , por meio da seguinte associação: Toda vez que a partícula faz o movimento , escrevemos e toda vez que a partícula faz o movimento , escrevemos .   "
},
{
  "id": "definition-21",
  "level": "2",
  "url": "section-13.html#definition-21",
  "type": "Definição",
  "number": "2.6.4",
  "title": "",
  "body": "  O princípio da reflexão consiste em determinar o número de caminhos da origem até o ponto , de modo que os caminhos fiquem sempre abaixo da diagonal , isto é, eles podem tocar, mas não podem cruzar.  "
},
{
  "id": "definition-22",
  "level": "2",
  "url": "section-13.html#definition-22",
  "type": "Definição",
  "number": "2.6.5",
  "title": "",
  "body": " Chamamos de caminho bom no reticulado, se o caminho não cruza a diagonal, e de caminho ruim se o caminho cruza a diagonal. Veja um exemplo de cada tipo na , na e na .   Um exemplo de caminho bom.    "
},
{
  "id": "definition-23",
  "level": "2",
  "url": "section-13.html#definition-23",
  "type": "Definição",
  "number": "2.6.7",
  "title": "",
  "body": " Seja a reflexão dos pontos de um reticulado em relação à reta , observe que . Na , veja que a reflexão leva a seta que liga à na seta que liga à .   Exemplo da reflexão .    "
},
{
  "id": "prop1",
  "level": "2",
  "url": "section-13.html#prop1",
  "type": "Proposição",
  "number": "2.6.9",
  "title": "",
  "body": " A quantidade de caminhos ruins de até é igual ao número total de caminhos de até .  "
},
{
  "id": "proof-28",
  "level": "2",
  "url": "section-13.html#proof-28",
  "type": "Demonstração",
  "number": "2.6.2.1",
  "title": "",
  "body": " Seja o conjunto dos caminhos ruins de até e o conjunto dos caminhos de até . Primeiramente, observe que se , o ponto A estaria acima da diagonal , então não haveria caminhos bons, só os ruins. Logo, vamos supor que .  Seja um caminho ruim de até , isto é, , como ele é um caminho ruim, por definição, esse caminho cruza a reta pelo menos uma vez. Aplicando a reflexão aos pontos de , após o primeiro cruzamento, obtemos um caminho de até . Como é um caminho arbitrário, concluímos que cada caminho de é levado, dessa maneira, em um caminho de , logo .  Veja um exemplo na e na abaixo.   Exemplos de caminhos.    Exemplo de caminho ruim.     Caminho ruim em laranja e sua respectiva reflexão em verde.      Reciprocamente, tomando um caminho de até , isto é , ele necessariamente toca na diagonal , uma vez que a ordenada de é maior que a abscissa. Aplicando a reflexão , a partir do primeiro cruzamento em relação à reta , obtemos um caminho que termina em A. Ou seja, verificamos que todo caminho de é levado em um caminho de . Portanto, .  Da propriedade da tricotomia dos números reais, se e , concluímos que .  "
},
{
  "id": "prop2",
  "level": "2",
  "url": "section-13.html#prop2",
  "type": "Proposição",
  "number": "2.6.11",
  "title": "",
  "body": " A quantidade de caminhos ruins de até é    Pela , o número de caminhos ruins de até é igual à quantidade de caminhos de até , sem restrições, ou seja, é o número de anagramas com os L's repetidos vezes e os N's repetidos vezes, que pode ser calculado por como queríamos demonstrar.   "
},
{
  "id": "teo-reflexao",
  "level": "2",
  "url": "section-13.html#teo-reflexao",
  "type": "Teorema",
  "number": "2.6.12",
  "title": "(Princípio da Reflexão).",
  "body": " (Princípio da Reflexão)  Sejam com . A quantidade de caminhos da origem até o ponto que ficam abaixo da reta é dada por    Queremos calcular a quantidade de caminhos bons da origem até o ponto . Para tanto, vamos calcular o total e subtrair o número de caminhos ruins. O total de caminhos é dado por . E pela , sabemos que o número de caminhos ruins é dado por . Assim,    "
},
{
  "id": "tec-permutacao-circular",
  "level": "2",
  "url": "section-13.html#tec-permutacao-circular",
  "type": "Tecnologia",
  "number": "2.6.13",
  "title": "",
  "body": " Abaixo, definimos uma função, que calcula o número de caminhos bons do ponto até o ponto .   "
},
{
  "id": "technology-35",
  "level": "2",
  "url": "section-13.html#technology-35",
  "type": "Tecnologia",
  "number": "2.6.14",
  "title": "",
  "body": " Digite uma sequência de L's e D's e clique no botão \"Update\" para obter um reticulado, o respectivo caminho e caso esse caminho seja ruim, obtenha também a reflexão deste caminho em relação a reta , a partir do primeiro ponto que toca nessa reta.   Reticulado, caminho e reflexão.    "
},
{
  "id": "definition-24",
  "level": "2",
  "url": "section-13.html#definition-24",
  "type": "Definição",
  "number": "2.6.16",
  "title": "",
  "body": " No (Princípio da Reflexão), o caso particular em que é conhecido como números de Catalan, ou seja, os números são conhecidos como números de Catalan (ou Catalão).  "
},
{
  "id": "tec-permutacao-circular",
  "level": "2",
  "url": "section-13.html#tec-permutacao-circular",
  "type": "Tecnologia",
  "number": "2.6.17",
  "title": "",
  "body": " O Sage possui um método específico para calcular os números de Catalan. Basta escolher o valor de e usar o método conforme o código a seguir.   "
},
{
  "id": "catalanporseqs",
  "level": "2",
  "url": "section-13.html#catalanporseqs",
  "type": "Exemplo",
  "number": "2.6.18",
  "title": "",
  "body": " Anteriormente, no , vimos a bijeção entre os caminhos da origem até o ponto , com os anagramas formados por letras e letras . Neste momento, é natural perguntar: Qual é a relação entre estes anagramas e os números de Catalan?   Apresentamos os números de Catalan como a quantidade de caminhos da origem até o ponto de maneira que cada um desses caminhos nunca ultrapasse a diagonal , ou seja, a cada momento a quantidade de movimentos \"para o norte\" deve ser sempre menor ou igual que a quantidade de movimentos \"para o leste\". Assim, por meio da bijeção já apresentada no , concluímos que um caminho que é solução do problema de Catalan para o reticulado está associado aos anagramas com letras e letras de modo que ao lermos da esquerda para a direita a cada momento, a quantidade de letras será maior ou igual a quantidade de letras . Vejamos que para , o anagrama é uma palavra válida para o problema de Catalan, enquanto não é válida.   "
},
{
  "id": "ex-dyckway",
  "level": "2",
  "url": "section-13.html#ex-dyckway",
  "type": "Exemplo",
  "number": "2.6.19",
  "title": "",
  "body": " Um caminho de Dyck é um caminho de comprimento , no plano cartesiano, do ponto ao ponto . No qual, em cada passo, saímos do ponto para ou , com a condição adicional de que o caminho nunca fica abaixo do eixo . Quantos são os caminhos de Dyck?  Observe que se a cada passo de para associarmos uma letra \"L\" e a cada passo de para associarmos uma letra \"N\", temos uma associação dos caminhos de Dyck com os anagramas do que acabamos de ver. O qual tem sua cardinalidade determinada pelos números de Catalan.  "
},
{
  "id": "tec-permutacao-circular",
  "level": "2",
  "url": "section-13.html#tec-permutacao-circular",
  "type": "Tecnologia",
  "number": "2.6.20",
  "title": "",
  "body": " Os caminhos de Dyck podem ser plotados no Sage, basta usar o método DyckWord , tendo como entrada uma lista de zeros e uns, na qual cada 1 representa um passo de para e cada 0 representa um passo de para . Além disso, é necessário adicionar o comando .plot() para que o Sage retorne o respectivo caminho de Dyck. No exemplo a seguir o parâmetro aspect_ratio=1 foi adicionado apenas para que os eixos fiquem com a mesma proporção.   "
},
{
  "id": "exercise-96",
  "level": "2",
  "url": "section-13.html#exercise-96",
  "type": "Exercício",
  "number": "2.6.4.1",
  "title": "",
  "body": "Existem valores de e tais que a quantidade de caminhos bons é igual ao número de caminhos ruins? "
},
{
  "id": "exercise-97",
  "level": "2",
  "url": "section-13.html#exercise-97",
  "type": "Exercício",
  "number": "2.6.4.2",
  "title": "",
  "body": "Refaça o princípio da reflexão no caso em que os caminhos não possam nem tocar a diagonal . "
},
{
  "id": "ex-troco",
  "level": "2",
  "url": "section-13.html#ex-troco",
  "type": "Exercício",
  "number": "2.6.4.3",
  "title": "",
  "body": "Numa fila de cinema, pessoas têm notas de e pessoas têm notas de , com . A entrada custa .  Quais são as filas possíveis?  Quantas são as filas que terão problemas de troco se a bilheteria começar a trabalhar sem troco?  Quantas são as filas que terão problemas de troco se a bilheteria começar a trabalhar com duas notas de ?   "
},
{
  "id": "remark-7",
  "level": "2",
  "url": "section-13.html#remark-7",
  "type": "Nota",
  "number": "2.6.21",
  "title": "",
  "body": " O princípio da reflexão, também é conhecido como \"O princípio da reflexão de André\" (Andre's reflection principle), devido a sua utilização na solução do Problema da Eleição (\"The Ballot Problem\"). O qual enunciamos abaixo. Esse princípio possui várias generalizações e ainda pesquisado atualmente, o que pode ser visto em e .  "
},
{
  "id": "ex-candidatos",
  "level": "2",
  "url": "section-13.html#ex-candidatos",
  "type": "Exercício",
  "number": "2.6.4.4",
  "title": "",
  "body": "Em uma eleição há dois candidatos A e B. Se o candidato teve votos e o candidato teve votos com Qual a probabilidade de durante a apuração, cédula a cédula, o candidato sempre esteja à frente, isto é, com mais votos ou empatado, com ? "
},
{
  "id": "exercise-100",
  "level": "2",
  "url": "section-13.html#exercise-100",
  "type": "Exercício",
  "number": "2.6.4.5",
  "title": "",
  "body": "Mostre que o número de Catalan, , conta o número de expressões contendo pares de parenteses que estão corretamente emparelhados. Por exemplo, para ,  No , mostramos que o número de caminhos de Dyck, de comprimento , é dado por . É suficiente exibir uma correspondência biunívoca entre os caminhos de Dyck e as expressões contendo pares de parenteses que estão corretamente emparelhados.  Para cada caminho de Dyck, cada vez que o passo for de para , abra um parêntese e cada vez que o passo for de para feche um parêntese. Dessa maneira, como os caminhos de Dyck não cruzam o eixo , em cada expressão correspondente, a quantidade de parênteses abrindo será maior ou igual que a quantidade de parênteses fechando. Além disso, o ponto inicial e o ponto final dos caminhos de Dyck estão separados por de passos e estão no eixo , portanto a expressão correspondente conterá pares de parênteses corretamente emparelhados.  Reciprocamente, para cada expressão corretamente emparelhada contendo pares de parênteses, fazendo a leitura da esquerda para a direita da expressão dada, construa o caminho de Dyck correspondente da seguinte maneira: Dê um passo de para , sempre que houver um parêntese abrindo, e dê um passo de para , sempre que houver um parêntese fechando. Assim, como a quantidade de parênteses abrindo é sempre maior ou igual que a quantidade de parênteses fechando, o caminho construído sempre ficará acima do eixo . O primeiro parêntese será do tipo \"(\", garantindo que o primeiro passo seja de para . Como as expressões estão corretamente emparelhadas e contêm pares de parênteses, o último parêntese será do tipo \")\" e o caminho correspondente chegará no ponto .  Observação: No Sage, a lista contendo todas as expressões de pares de parênteses corretamente emparelhados pode ser gerada com o método . Para exibir a representação em parênteses, basta usar o método :   "
},
{
  "id": "exercise-101",
  "level": "2",
  "url": "section-13.html#exercise-101",
  "type": "Exercício",
  "number": "2.6.4.6",
  "title": "",
  "body": "Mostre que o número de maneiras de empilhar moedas no plano de modo que a linha da base consista em moedas consecutivas é . Vejamos como exemplo :  Todos os empilhamentos com 3 moedas na base.     "
},
{
  "id": "section-triangulo-pascal",
  "level": "1",
  "url": "section-triangulo-pascal.html",
  "type": "Seção",
  "number": "3.1",
  "title": "Triângulo de Pascal",
  "body": " Triângulo de Pascal    O Triângulo de Pascal é um triângulo numérico infinito formado por números binomiais , na qual, representa a linha, e representa a coluna, com . Abaixo temos duas representações do mesmo triângulo, com .    O Triângulo de Pascal.      Obtenha o Triângulo de Pascal referente ao intervalo escolhido.      (Relação de Stifel)       (Relação das Combinações Complementares)       (Teorema das Linhas)    Observe que   Ou seja, a soma conta o número de todos os subconjuntos, de um conjunto com n elementos.  Essa quantidade é , pois para formar um subconjunto, deve-se decidir, para cada elemento do conjunto, se ele pertencerá ou não ao subconjunto. Há dois modos de decidir o que fazer com o primeiro elemento do conjunto, 2 modos com o segundo e assim por diante. Portanto o valor da soma de uma linha do Triângulo de Pascal é     Qual o valor da soma        Vamos resolver o usando o Sage. Primeiramente note que Definimos as variáveis e , definimos a função e usamos o método com a expressão do somatório. No final do código do método foi acrescentado o comando apenas para o resultado ser exibido no formato compilado pelo , ou seja, visualmente mais elegante.    (Teorema das Colunas)   Vamos aplicar a relação de Stifel aos elementos da coluna : Somando tudo, ficamos com Como , obtemos o resultado:     Qual o valor da soma        Vamos resolver o usando o Sage. Primeiramente note que Definimos a variável , usamos o método com a expressão do somatório.     Qual o valor da soma  Note que Para usarmos o Teorema das Colunas, precisamos que no somatório apareca um produto de números consecutivos, pois Então, vamos procurar valores para e , para os quais, vale a igualdade igualando os coeficientes, obtemos Portanto, e . Agora podemos terminar o cálculo da soma     Vamos resolver o usando o Sage. Primeiramente note que Definimos as variáveis e , usamos o método com a expressão do somatório. No final do código do método foi acrescentado o comando apenas para o resultado ser exibido no formato compilado pelo , ou seja, visualmente mais elegante.    (Teorema das Diagonais)    Aplicando o , em cada obtemos  O que mostra o resultado.        Vamos analisar a diferença : Oberve que e são positivos, portanto o sinal de , será determinado pelo sinal de Logo,       Exercícios   Tem-se comprimidos de substâncias distintas, solúveis em água e incapazes de reagir entre si. Quantas soluções distintas podem ser obtidas dissolven-se um ou mais desses comprimidos em um copo com água?      Calcule o valor da soma    746660    Calcule o valor de       Calcule          "
},
{
  "id": "definition-25",
  "level": "2",
  "url": "section-triangulo-pascal.html#definition-25",
  "type": "Definição",
  "number": "3.1.1",
  "title": "",
  "body": " O Triângulo de Pascal é um triângulo numérico infinito formado por números binomiais , na qual, representa a linha, e representa a coluna, com . Abaixo temos duas representações do mesmo triângulo, com .    O Triângulo de Pascal.    "
},
{
  "id": "technology-38",
  "level": "2",
  "url": "section-triangulo-pascal.html#technology-38",
  "type": "Tecnologia",
  "number": "3.1.3",
  "title": "",
  "body": " Obtenha o Triângulo de Pascal referente ao intervalo escolhido.     "
},
{
  "id": "theorem-27",
  "level": "2",
  "url": "section-triangulo-pascal.html#theorem-27",
  "type": "Teorema",
  "number": "3.1.5",
  "title": "",
  "body": "(Relação de Stifel)      "
},
{
  "id": "teo-reolacoes-complementares",
  "level": "2",
  "url": "section-triangulo-pascal.html#teo-reolacoes-complementares",
  "type": "Teorema",
  "number": "3.1.6",
  "title": "",
  "body": "(Relação das Combinações Complementares)      "
},
{
  "id": "theorem-29",
  "level": "2",
  "url": "section-triangulo-pascal.html#theorem-29",
  "type": "Teorema",
  "number": "3.1.7",
  "title": "",
  "body": "(Teorema das Linhas)    Observe que   Ou seja, a soma conta o número de todos os subconjuntos, de um conjunto com n elementos.  Essa quantidade é , pois para formar um subconjunto, deve-se decidir, para cada elemento do conjunto, se ele pertencerá ou não ao subconjunto. Há dois modos de decidir o que fazer com o primeiro elemento do conjunto, 2 modos com o segundo e assim por diante. Portanto o valor da soma de uma linha do Triângulo de Pascal é   "
},
{
  "id": "exem-soma1",
  "level": "2",
  "url": "section-triangulo-pascal.html#exem-soma1",
  "type": "Exemplo",
  "number": "3.1.8",
  "title": "",
  "body": " Qual o valor da soma      "
},
{
  "id": "technology-39",
  "level": "2",
  "url": "section-triangulo-pascal.html#technology-39",
  "type": "Tecnologia",
  "number": "3.1.9",
  "title": "",
  "body": " Vamos resolver o usando o Sage. Primeiramente note que Definimos as variáveis e , definimos a função e usamos o método com a expressão do somatório. No final do código do método foi acrescentado o comando apenas para o resultado ser exibido no formato compilado pelo , ou seja, visualmente mais elegante.   "
},
{
  "id": "teo-colunas",
  "level": "2",
  "url": "section-triangulo-pascal.html#teo-colunas",
  "type": "Teorema",
  "number": "3.1.10",
  "title": "",
  "body": "(Teorema das Colunas)   Vamos aplicar a relação de Stifel aos elementos da coluna : Somando tudo, ficamos com Como , obtemos o resultado:   "
},
{
  "id": "exem-soma2",
  "level": "2",
  "url": "section-triangulo-pascal.html#exem-soma2",
  "type": "Exemplo",
  "number": "3.1.11",
  "title": "",
  "body": " Qual o valor da soma      "
},
{
  "id": "technology-40",
  "level": "2",
  "url": "section-triangulo-pascal.html#technology-40",
  "type": "Tecnologia",
  "number": "3.1.12",
  "title": "",
  "body": " Vamos resolver o usando o Sage. Primeiramente note que Definimos a variável , usamos o método com a expressão do somatório.   "
},
{
  "id": "exem-soma3",
  "level": "2",
  "url": "section-triangulo-pascal.html#exem-soma3",
  "type": "Exemplo",
  "number": "3.1.13",
  "title": "",
  "body": " Qual o valor da soma  Note que Para usarmos o Teorema das Colunas, precisamos que no somatório apareca um produto de números consecutivos, pois Então, vamos procurar valores para e , para os quais, vale a igualdade igualando os coeficientes, obtemos Portanto, e . Agora podemos terminar o cálculo da soma   "
},
{
  "id": "technology-41",
  "level": "2",
  "url": "section-triangulo-pascal.html#technology-41",
  "type": "Tecnologia",
  "number": "3.1.14",
  "title": "",
  "body": " Vamos resolver o usando o Sage. Primeiramente note que Definimos as variáveis e , usamos o método com a expressão do somatório. No final do código do método foi acrescentado o comando apenas para o resultado ser exibido no formato compilado pelo , ou seja, visualmente mais elegante.   "
},
{
  "id": "theorem-31",
  "level": "2",
  "url": "section-triangulo-pascal.html#theorem-31",
  "type": "Teorema",
  "number": "3.1.15",
  "title": "",
  "body": "(Teorema das Diagonais)    Aplicando o , em cada obtemos  O que mostra o resultado.   "
},
{
  "id": "theorem-32",
  "level": "2",
  "url": "section-triangulo-pascal.html#theorem-32",
  "type": "Teorema",
  "number": "3.1.16",
  "title": "",
  "body": "    Vamos analisar a diferença : Oberve que e são positivos, portanto o sinal de , será determinado pelo sinal de Logo,     "
},
{
  "id": "exercise-102",
  "level": "2",
  "url": "section-triangulo-pascal.html#exercise-102",
  "type": "Exercício",
  "number": "3.1.1",
  "title": "",
  "body": " Tem-se comprimidos de substâncias distintas, solúveis em água e incapazes de reagir entre si. Quantas soluções distintas podem ser obtidas dissolven-se um ou mais desses comprimidos em um copo com água?    "
},
{
  "id": "exercise-103",
  "level": "2",
  "url": "section-triangulo-pascal.html#exercise-103",
  "type": "Exercício",
  "number": "3.1.2",
  "title": "",
  "body": " Calcule o valor da soma    746660  "
},
{
  "id": "exercise-104",
  "level": "2",
  "url": "section-triangulo-pascal.html#exercise-104",
  "type": "Exercício",
  "number": "3.1.3",
  "title": "",
  "body": " Calcule o valor de     "
},
{
  "id": "exercise-105",
  "level": "2",
  "url": "section-triangulo-pascal.html#exercise-105",
  "type": "Exercício",
  "number": "3.1.4",
  "title": "",
  "body": " Calcule       "
},
{
  "id": "section-binomio-newton",
  "level": "1",
  "url": "section-binomio-newton.html",
  "type": "Seção",
  "number": "3.2",
  "title": "Binômio de Newton",
  "body": " Binômio de Newton     Se e são número reais e é um inteiro positivo,    Observe que Cada termo, do desenvolvimento, é obtido escolhendo-se em cada parênteses um, ou um e multiplicando-se os escolhidos.  Para cada valor de , se escolhermos em dos parênteses, será escolhido em dos parênteses e o produto será igual a . Isto pode ser feito de modos. Então é uma soma na qual, para cada , existem parcelas iguais a . Portanto      Destacamos o termo geral e o fato de que o desenvolvimento do Binômio de Newton pode ser desenvolvido na ordem inversa:  1) O -ésimo termo do desenvolvimento é dado por: 2) Observe também que: Portanto     Considere o binômio de Newton Determine os coeficientes de  no desenvolvimento do binômio;  no desenvolvimento do binômio;  no desenvolvimento do binômio.     O -ésimo termo do desenvolvimento é   item a) Para que , temos , logo estamos procurando o 5º termo: E portanto o coeficiente é .  item b)  não possui solução no conjunto dos inteiros positivos, portanto o coeficiente de é zero.  item c) Para que , temos , logo estamos procurando o 6º termo: E portanto, o coeficiente é .    No Sage, podemos obter a expanção do polinômio da seguinte forma:   Os coeficientes do polinômio, podem ser obtidos da seguinte forma:     Determine o termo máximo do desenvolvimento de    Como O termo máximo é      Determine o termo máximo do desenvolvimento de    O -ésimo termo é . se Isto é ou seja, e simplificando temos Portanto, , logo .  Assim, temos para e portanto o maior termo é:      O termo máximo do desenvolvimento de Troque os valores de , e , para obter o termo máximo e o termo mínimo do desenvolvimento de   Os termos máximo e mínimo.      Qual é a soma dos coeficientes do desenvolvimento de    Seja , a soma dos coeficientes de é igual a Portando a soma dos coeficientes do desenvolvimento de é           e Portanto,      Exercícios   Determine o coeficiente de no desenvolvimento de    6435    Determine o coeficiente de no desenvolvimento de    -33   O termo geral é dado por Portanto, queremos encontrar valores de e , tais que , ou seja, , logo e . Então, precisamos obter o coeficiente de de :     Calcule o termo máximo do desenvolvimento de       Qual é o maior dos números    a         Portanto, Como mostramos que , logo .    (UFPE - UFRPE 2000) Analise as afirmações seguintes acerca da expansão binomial de    Existem exatamente dois termos com coeficientes que não são divisíveis por 13.  A soma dos coeficientes é   O maior coeficiente é  O menor coeficiente é  A soma dos coeficientes das potências de com expoentes ímpares é .    item a) Na expanção de apenas o primeiro e o último termo possuem coeficientes que não são divisíveis por 13.  item b) Seja . A soma dos coeficientes de é exatamente o valor de .  item c) O maior coeficiente de é exatamente o maior termo no desenvolvimento de . Efetuando esse cálculo segundo o chegamos que o termo máximo é  item d) O menor coeficiente de é exatamente o menor termo no desenvolvimento de . Efetuando esse cálculo segundo o chegamos que o termo máximo é  item e) Os termos de com expoentes ímpares são os termos . Note que portanto Então, basta calcular .   a) V, b) V, c) V, d) V, e) V    "
},
{
  "id": "teo-binomio-newton",
  "level": "2",
  "url": "section-binomio-newton.html#teo-binomio-newton",
  "type": "Teorema",
  "number": "3.2.1",
  "title": "",
  "body": " Se e são número reais e é um inteiro positivo,    Observe que Cada termo, do desenvolvimento, é obtido escolhendo-se em cada parênteses um, ou um e multiplicando-se os escolhidos.  Para cada valor de , se escolhermos em dos parênteses, será escolhido em dos parênteses e o produto será igual a . Isto pode ser feito de modos. Então é uma soma na qual, para cada , existem parcelas iguais a . Portanto    "
},
{
  "id": "remark-8",
  "level": "2",
  "url": "section-binomio-newton.html#remark-8",
  "type": "Nota",
  "number": "3.2.2",
  "title": "",
  "body": " Destacamos o termo geral e o fato de que o desenvolvimento do Binômio de Newton pode ser desenvolvido na ordem inversa:  1) O -ésimo termo do desenvolvimento é dado por: 2) Observe também que: Portanto   "
},
{
  "id": "example-56",
  "level": "2",
  "url": "section-binomio-newton.html#example-56",
  "type": "Exemplo",
  "number": "3.2.3",
  "title": "",
  "body": " Considere o binômio de Newton Determine os coeficientes de  no desenvolvimento do binômio;  no desenvolvimento do binômio;  no desenvolvimento do binômio.     O -ésimo termo do desenvolvimento é   item a) Para que , temos , logo estamos procurando o 5º termo: E portanto o coeficiente é .  item b)  não possui solução no conjunto dos inteiros positivos, portanto o coeficiente de é zero.  item c) Para que , temos , logo estamos procurando o 6º termo: E portanto, o coeficiente é .   "
},
{
  "id": "technology-42",
  "level": "2",
  "url": "section-binomio-newton.html#technology-42",
  "type": "Tecnologia",
  "number": "3.2.4",
  "title": "",
  "body": "No Sage, podemos obter a expanção do polinômio da seguinte forma:   Os coeficientes do polinômio, podem ser obtidos da seguinte forma:   "
},
{
  "id": "example-57",
  "level": "2",
  "url": "section-binomio-newton.html#example-57",
  "type": "Exemplo",
  "number": "3.2.5",
  "title": "",
  "body": " Determine o termo máximo do desenvolvimento de    Como O termo máximo é    "
},
{
  "id": "exem-binomio1",
  "level": "2",
  "url": "section-binomio-newton.html#exem-binomio1",
  "type": "Exemplo",
  "number": "3.2.6",
  "title": "",
  "body": " Determine o termo máximo do desenvolvimento de    O -ésimo termo é . se Isto é ou seja, e simplificando temos Portanto, , logo .  Assim, temos para e portanto o maior termo é:    "
},
{
  "id": "technology-43",
  "level": "2",
  "url": "section-binomio-newton.html#technology-43",
  "type": "Tecnologia",
  "number": "3.2.7",
  "title": "",
  "body": " O termo máximo do desenvolvimento de Troque os valores de , e , para obter o termo máximo e o termo mínimo do desenvolvimento de   Os termos máximo e mínimo.    "
},
{
  "id": "example-59",
  "level": "2",
  "url": "section-binomio-newton.html#example-59",
  "type": "Exemplo",
  "number": "3.2.9",
  "title": "",
  "body": " Qual é a soma dos coeficientes do desenvolvimento de    Seja , a soma dos coeficientes de é igual a Portando a soma dos coeficientes do desenvolvimento de é    "
},
{
  "id": "theorem-34",
  "level": "2",
  "url": "section-binomio-newton.html#theorem-34",
  "type": "Teorema",
  "number": "3.2.10",
  "title": "",
  "body": "      e Portanto,    "
},
{
  "id": "exercise-106",
  "level": "2",
  "url": "section-binomio-newton.html#exercise-106",
  "type": "Exercício",
  "number": "3.2.1",
  "title": "",
  "body": " Determine o coeficiente de no desenvolvimento de    6435  "
},
{
  "id": "exercise-107",
  "level": "2",
  "url": "section-binomio-newton.html#exercise-107",
  "type": "Exercício",
  "number": "3.2.2",
  "title": "",
  "body": " Determine o coeficiente de no desenvolvimento de    -33   O termo geral é dado por Portanto, queremos encontrar valores de e , tais que , ou seja, , logo e . Então, precisamos obter o coeficiente de de :   "
},
{
  "id": "exercise-108",
  "level": "2",
  "url": "section-binomio-newton.html#exercise-108",
  "type": "Exercício",
  "number": "3.2.3",
  "title": "",
  "body": " Calcule o termo máximo do desenvolvimento de     "
},
{
  "id": "exercise-109",
  "level": "2",
  "url": "section-binomio-newton.html#exercise-109",
  "type": "Exercício",
  "number": "3.2.4",
  "title": "",
  "body": " Qual é o maior dos números    a         Portanto, Como mostramos que , logo .  "
},
{
  "id": "exercise-110",
  "level": "2",
  "url": "section-binomio-newton.html#exercise-110",
  "type": "Exercício",
  "number": "3.2.5",
  "title": "",
  "body": " (UFPE - UFRPE 2000) Analise as afirmações seguintes acerca da expansão binomial de    Existem exatamente dois termos com coeficientes que não são divisíveis por 13.  A soma dos coeficientes é   O maior coeficiente é  O menor coeficiente é  A soma dos coeficientes das potências de com expoentes ímpares é .    item a) Na expanção de apenas o primeiro e o último termo possuem coeficientes que não são divisíveis por 13.  item b) Seja . A soma dos coeficientes de é exatamente o valor de .  item c) O maior coeficiente de é exatamente o maior termo no desenvolvimento de . Efetuando esse cálculo segundo o chegamos que o termo máximo é  item d) O menor coeficiente de é exatamente o menor termo no desenvolvimento de . Efetuando esse cálculo segundo o chegamos que o termo máximo é  item e) Os termos de com expoentes ímpares são os termos . Note que portanto Então, basta calcular .   a) V, b) V, c) V, d) V, e) V  "
},
{
  "id": "section-polinomio-leibniz",
  "level": "1",
  "url": "section-polinomio-leibniz.html",
  "type": "Seção",
  "number": "3.3",
  "title": "Polinômio de Leibniz",
  "body": " Polinômio de Leibniz       Na qual, para cada , , ou seja é um inteiro não negativo.   Temos Um termo genérico do produto é obtido escolhendo um em cada parênteses e multiplicando os escolhidos. Se em dos parênteses escolhermos , em dos parênteses escolhermos , , obteremos Agora falta responder quantas vezes o termo aparece no desenvolvimento.  O termo aparece tantas vezes, quantas são as formas de escolher, nos parênteses, deles para escolher o , deles para escolher o , . Isto pode ser feito de maneiras, o que mostra o resultado.     Considere o polinômio: Determine os coeficientes de  no desenvolvimento;  no desenvolvimento.        item a) Para que o expoente de seja 2, devemos ter , juntando com a condição , temos Assim, e E a soma dos termos que possuem é:   item b) Para que o expoente de seja 4, devemos ter , juntando com a condição , temos Temos duas soluções: E a soma dos termos que possuem é:     No Sage, podemos obter a expanção do polinômio da seguinte forma:   Os coeficientes do polinômio, podem ser obtidos da seguinte forma:     Exercícios   Determine o coeficiente de no desenvolvimento de    336    "
},
{
  "id": "theorem-35",
  "level": "2",
  "url": "section-polinomio-leibniz.html#theorem-35",
  "type": "Teorema",
  "number": "3.3.1",
  "title": "",
  "body": "  Na qual, para cada , , ou seja é um inteiro não negativo.   Temos Um termo genérico do produto é obtido escolhendo um em cada parênteses e multiplicando os escolhidos. Se em dos parênteses escolhermos , em dos parênteses escolhermos , , obteremos Agora falta responder quantas vezes o termo aparece no desenvolvimento.  O termo aparece tantas vezes, quantas são as formas de escolher, nos parênteses, deles para escolher o , deles para escolher o , . Isto pode ser feito de maneiras, o que mostra o resultado.   "
},
{
  "id": "example-60",
  "level": "2",
  "url": "section-polinomio-leibniz.html#example-60",
  "type": "Exemplo",
  "number": "3.3.2",
  "title": "",
  "body": " Considere o polinômio: Determine os coeficientes de  no desenvolvimento;  no desenvolvimento.        item a) Para que o expoente de seja 2, devemos ter , juntando com a condição , temos Assim, e E a soma dos termos que possuem é:   item b) Para que o expoente de seja 4, devemos ter , juntando com a condição , temos Temos duas soluções: E a soma dos termos que possuem é:    "
},
{
  "id": "technology-44",
  "level": "2",
  "url": "section-polinomio-leibniz.html#technology-44",
  "type": "Tecnologia",
  "number": "3.3.3",
  "title": "",
  "body": "No Sage, podemos obter a expanção do polinômio da seguinte forma:   Os coeficientes do polinômio, podem ser obtidos da seguinte forma:   "
},
{
  "id": "exercise-111",
  "level": "2",
  "url": "section-polinomio-leibniz.html#exercise-111",
  "type": "Exercício",
  "number": "3.3.1",
  "title": "",
  "body": " Determine o coeficiente de no desenvolvimento de    336  "
},
{
  "id": "section-espacos-probabilidade",
  "level": "1",
  "url": "section-espacos-probabilidade.html",
  "type": "Seção",
  "number": "4.1",
  "title": "Espaços de Probabilidade",
  "body": " Espaços de Probabilidade    Chamaremos de espaço amostral o conjunto de todos os resultados possíveis de uma experiência aleatória. Denotaremos o espaço amostral por e só vamos considerar o caso de ser finito.  Os subconjuntos de serão chamados de eventos . Diremos que um evento ocorre quando o resultado da experiência pertence ao evento.    Seja um espaço amostral. Uma probabilidade sobre é uma função que associa a cada evento um número de forma que:  Para todo evento , ;  ;  Se então .      Ao lançar uma moeda observe a face que cai voltada para cima.  O espaço amostral é os eventos são a) Vamos definir uma probabilidade para , que chamaremos de : b) Vamos definir outra probabilidade para , que chamaremos de : Observe que e satisfazem a definição de probabilidade.   Um modelo de probabilidade muito utilizado é o equiprobabilístico, que é o caso de do exemplo anterior.  O caso geral deste modelo, ou seja para , atribuímos a cada evento unitário a probabilidade Pois, se e . Pelo item c) da , temos Portanto,     Quatro moedas (não viciadas) são jogadas simultâneamente.   Qual é a probabilidade de obter 3 caras?  Qual é a probabilidade de obter pelo menos 3 caras?    Para simplificar a notação, indicaremos 0 para cara e 1 para coroa. O espaço amostral é  item a) Observe que dentre as 16 possibilidades, o subconjunto abaixo: possui todos os casos favoráveis. Portanto a probabilidade de obter 3 caras é    item b) Observe que dentre as 16 possibilidades, o subconjunto abaixo: possui todos os casos favoráveis. Portanto a probabilidade de obter pelo menos 3 caras é      Sejam e .  O conjunto complementar de é denotado por  O conjunto menos o conjunto é denotado por     Sejam e eventos, então:  ;  ;  ;  ;  Se então .      item a)    item b) Como , temos . Portanto   item c) Escrevendo como a união disjunta: temos   item d) Escrevendo como a união disjunta: temos   item e) Pelo item c) temos se , ficamos com pois .     Uma caixa de chocolate contém 40 chocolates, 30 são do tipo ao leite e 10 são do tipo amargo . Ao pegar 8 chocolates aleatoriamente, qual a probabilidade de que ao menos um chocolate seja do tipo amargo ?   Primeiro, vamos calcular a probabilidade de que todos os chocolates sejam do tipo ao leite . Em seguida, vamos usar o item a) do ( ) para chegar na resposta deste problema.  cardinalidade do espaço amostral é dada pelo número de maneiras de pegar 8 chocolates dentre 40 disponívies, portanto Agora queremos contar quantas são as formas de pegar 8 chocolates do tipo ao leite . Como existem 30 disponíveis a resposta é: Usando o item a) do ( ), a probabilidade de que ao menos um seja do tipo amargo é     No próximo exemplo, resolvemos um caso particular do problema conhecido como O Paradoxo dos Gêmeos ou O Problema dos Aniversários . Este problema consiste em calcular a probabilidade de que duas pessoas, de uma amostra aleatória com pessoas, façam aniversário no mesmo dia. Note que, pelo Princípio da Casa dos Pombos, só podemos garantir que pelo menos duas dessas pessoas façam aniversário no mesmo dia, se a amostra aleatória contiver pelo menos pessoas. No entanto, com o cálculo direto, podemos verificar que basta pessoas para que a probabilidade seja maior que e que pessoas são suficientes, para que a probabilidade seja maior que . Essas probabilidades podem ser verificadas na tabela da , cujos parâmetros podem ser ajustados de até .   Em um grupo de 45 pessoas, qual é a probabilidade de que pelo menos duas pessoas façam aniversário no mesmo dia?   Mais uma vez, usaremos o item a) do ( ).  Vamos, inicialmente, calcular a probabilidade de que todas as 45 pessoas façam aniversários em dias diferentes. O número de casos possíveis para os aniversários das 45 pessoas é . O número de casos em que todas as 45 pessoas fazem aniversários em dias diferentes é Então, a probabilidade de que todas as 45 pessoas façam aniversário em dias diferentes é Usando o item a) do ( ), a probabilidade de que pelo menos duas pessoas façam aniversário no mesmo dia é   Este cálculo pode ser verificado no Sage, usando o código abaixo:       Escolha um intervalo, referente a variação de pessoas, para obter uma tabela com a quantidade e a respectiva probabilidade de que pelo menos duas pessoas façam aniversário no mesmo dia, conforme o .     Escolha um intervalo, referente a variação de pessoas, para obter o gráfico do tipo: quantidade versus probabilidade de que pelo menos duas pessoas façam aniversário no mesmo dia, conforme o .       Vinte três pessoas foram fazer uma prova e precisaram deixar seus celulares com o fiscal. No horário previsto de entrega, houve uma emergência e todos precisaram entregar suas provas e pegar seus celulares com pressa, de modo que os celulares foram entregues ao acaso. Qual a probabilidade de que todos os participantes tenha recebido os celulares errados?   O espaço amostral é constituido por todas as formas de ordenar os 23 celulares. Os casos favoráveis é constituído por todas as permutações caóticas com os 23 celulares. Portanto a resposta é      8 bolas de ping-pong são colocadas aleatóriamente em 8 caixas. Qual a probabilidade de que exatamente uma caixa fique vazia?   A cardinalidade do espaço amostral é dado pelo número de formas de colocar as 8 bolas de ping-pong nas 8 caixas pois, temos 8 possibilidades para a primeira bola, 8 para a segunda, etc.  Agora vamos calcular o número de casos favoráveis. Para que, exatamente uma caixa fique vazia, exatamente uma ficará com duas bolas. Logo, precisamos escolher qual caixa fica vazia e qual caixa recebe duas bolas. O número de formas de escolher qual deve ficar vazia é 8. O número de formas de escolher qual caixa recebe duas bolas é 7.  A quantidade de maneiras de escolher duas bolas para a caixa que recebe as duas bolas é . A quantidade de formas de arrumar o restante das bolas é .  Portanto o número de casos favoráveis é . A resposta do problema é      Exercícios   Um número é escolhido ao acaso no conjunto . Determine a probabilidade do número escolhido ser:  múltiplo de 3;  múltiplo de 5;  múltiplo de 3 e múltiplo de 5;  múltiplo de 3 ou múltiplo de 5.     a) , b) , c) , d) .   item a)    item b)    item c)    item d) Pelo princípio da Inclusão-Exclusão:     Em uma caixa existem 6 bolinhas numeradas de 1 a 6. Uma a uma elas são extraı́das, sem reposição. Qual a probabilidade de que a sequência de números observada seja crescente ou seja decrescente?   .   O espaço amostral tem cardinalidade , que é o número de maneiras de ordenar as bolinhas. Como só existe uma sequência seja crescente e uma que seja decrescente, a probabilidade é     Doze pessoas são divididas em três grupos de 4. Qual é a probabilidade de duas determinadas dessas pessoas fiquem no mesmo grupo?      Para a cardinalidade do espaço amostral, a segunda pessoa pode ficar em qualquer lugar de 11 disponíveis. Os casos favoráveis são 3, pois a primeira pessoa vai estar em algum grupo e a segunda pessoa tem 3 opções de lugares para escolher um, no grupo que se encontra a primeira pessoa. Portanto, a probabilidade é     Um armário contém 6 pares de sapatos. Escolhem-se 4 pés de sapatos. Qual é a probabilidade de se formar exatamente um par de sapatos?       A cardinalidade do espaço amostral é , pois essa é a quantidade de maneiras distintas de retirar 4 pés de sapatos, de 12 disponíveis.  Agora, vamos contar o número de casos favoráveis. Temos maneiras de retirar 1 par de sapatos, de 6 pares disponíveis. Depois disso, temos maneiras de escolher dois representantes de 5 tipos de sapatos disponíveis. Em seguida, precisamos decidir se será retirado o pé esquerdo ou o pé direito de cada um desses dois sapatos. Isto pode ser feito de maneiras. Portanto, a probabilidade é     Oito carros estão estacionados em doze vagas em fila. Determine a probabilidade:  das vagas vazias serem consecutivas;  de não haver duas vagas vazias adjacentes.    a) , b) .   item a) Para que as vagas vazias fiquem juntas, juntamos 4 vagas em uma, ficamos com 9 vagas para escolher uma, que será quádrupla. Isto pode ser feito de 9 maneiras. A cardinalidade do espaço amostral é o número de maneiras de escolher 4 lugares para ficarem fazios, dentre 12 disponíveis. Logo, a probabilidade é   item b) Já sabemos que o espaço amostral tem cardinalidade . Para que não haja duas vagas vazias adjacentes, podemos escolher as 4 vagas que ficarão vazias de maneiras. Assim, a probabilidade é    O jogo mais simples da LOTOFÁCIL consiste basicamente na escolha de números de um total de disponíveis, os números vão de à . Outras possibilidades de jogos consistem na escolha de ou números. Feitas as apostas, o jogador é dito premiado se após o sorteio dos números o mesmo tenha acertado ou destes.  Qual a probabilidade do jogador marcar números e acertar números?  Qual a probabilidade do jogador marcar números e acertar números?  Qual a probabilidade do jogador marcar números e acertar números?  Qual a probabilidade do jogador marcar números e acertar números?  Qual a probabilidade do jogador marcar números e acertar pelo menos números?  Qual a probabilidade do jogador marcar números e acertar números? (Supondo e ).             (Plínio , 2007, p. 181) Um palhaço está na ponta do trampolim de uma piscina, carregando uma caixa que contém bolas vermelhas e bolas azuis. Aleatoriamente ele vai retirando bolas da caixa, descartando-as em seguida. Cada vez que ele seleciona uma bola azul, ele dá um passo para trás, e cada vez que ele retira uma bola vermelha ele dá um passo para frente. Encontre a probabilidade de que o palhaço permaneça seco após a retirada das bolas da caixa.    Observe que uma sequência de retiradas na qual o palhaço permanece seco até o fim, quer dizer que, a cada retirada, a quantidade de bolas azuis tem que ser maior ou igual à quantidade de bolas vermelhas.  A cada vez que o palhaço retira uma bola, anotamos um se ela foi azul e um se ela foi vermelha. Com isto, construímos uma sequência formada por  e  . O palhaço ficará seco, se na sequência correspondente às retiradas, a cada momento o número dos é maior ou igual que o dos .  Perceba que se trocarmos por e por esse é o problema do deslocamento de uma partícula de até , sem que ela ultrapasse a reta , ou seja, é o número de Catalan: .  A quantidade de maneiras distintas para retirar as bolas é dada pela permutação com repetição: Assim, como esses eventos são equiprováveis, a probabilidade do palhaço permanecer seco é Concluímos que quanto maior a quantidade de bolas, menor a chance dele ficar seco.   (OPEMAT 2021 - nível 3) Pensando em sua segurança, a mãe de Dafne a proibiu de entrar na cozinha. Certo dia, sua mãe a encontra a um passo de entrar na cozinha. Lembrando que Dafne adora brinquedos, sua mãe pega uma sacola que contém de seus brinquedos favoritos e brinquedos dos quais não se interessa muito. A cada passo que Dafne está prestes a dar, sua mãe pega aleatoriamente um brinquedo na sacola, mostra a Dafne e depois deixa o brinquedo no chão. Se o brinquedo em questão for um dos que ela não se interessa muito, Dafne dá um passo em direção a cozinha, e se for um de seus favoritos, ela dá um passo na direção oposta. Qual a probabilidade de que Dafne entre na cozinha?    Observe que este exercício é equivalente ao exercício anterior ( ). Porém, neste caso ele pergunta pela probabilidade complementar. Portanto,     (ITA 2004) Uma caixa branca contém 5 bolas verdes e 3 azuis, e uma caixa preta contém 3 bolas verdes e 2 azuis. Pretende-se retirar uma bola de uma das caixas. Para tanto, 2 dados são atirados. Se a soma resultante dos dois dados for menor que 4, retira-se uma bola da caixa branca. Nos demais casos, retira-se uma bola da caixa preta. Qual é a probabilidade de se retirar uma bola verde?     No lançamento de dois dados, são possíveis 36 (pares) resultados diferentes, sendo que em apenas 3 deles a soma resultante é menor que 4. São eles: (1;1), (1;2), (2;1). A probabilidade de que uma bola verde seja retirada da urna branca é e da urna preta é . Assim, a probabilidade de se retirar uma bola verde é     (ITA 2005) São dados dois cartões, sendo que um deles tem ambos os lados na cor vermelha, enquanto o outro tem um lado na cor vermelha e o outro na cor azul. Um dos cartões é escolhido ao acaso e colocado sobre uma mesa. Se a cor exposta é vermelha, calcule a probabilidade de o cartão escolhido ter a outra cor também vermelha      O total de faces nos dois cartões é 4, sendo 3 faces vermelhas e 1 azul. Como a cor exposta é vermelha, temos duas chances do verso ser vermelho e uma chance do verso ser azul. Portanto a probabilidade de o cartão escolhido ter a outra cor também vermelha é     (ITA 2008) Considere o conjunto e formado por todos os subconjuntos de com elementos. Escolhendo ao acaso um elemento , a probabilidade de a soma de seus elementos ser 183 é igual a  a) b) c) d) e)   a)   De acordo com o enunciado . O conjunto dos elementos , cuja soma deve ser é   Logo . Então, escolhendo ao acaso um elemento a probabilidade de que a soma dos elementos de seja 183 é     (ITA 2010) Uma urna de sorteio contém bolas numeradas de a , sendo que a retirada de uma bola é equiprovável à retirada de cada uma das demais.   Retira-se aleatoriamente uma das bolas desta urna. Calcule a probabilidade de o número desta bola ser um múltiplo de ou .  Retira-se aleatoriamente uma das bolas desta urna e, sem repôla, retira-se uma segunda bola. Calcule a probabilidade de o número da segunda bola retirada não ser múltiplo de .    a) b)   a) Usaremos o Princípio da Inclusão-Exclusão para calcular o número de bolas com números múltiplos de 5 ou 6.    Note que e que é o conjunto dos múltiplos de entre e , incluindo o . Observe que , e . Portanto a probabilidade é   b) Para que o número da segunda bola retirada não seja múltiplo de 6, temos dois casos. 1º caso: primeira bola é um múltiplo de 6 e a segunda não. Essa probabilidade é dada por: . 2º caso: primeira bola não é um múltiplo de 6 e a segunda também não é. Essa probabilidade é dada por: . Logo a probabilidade de o número da segunda bola retirada não ser múltiplo de é     (ITA 2011) Sobre uma mesa estão dispostos livros de história, de biologia e de espanhol. Determine a probabilidade de os livros serem empilhados sobre a mesa de tal forma que aqueles que tratam do mesmo assunto estejam juntos.   .   No total os livros podem ser organizados de maneiras. Para que os livros de mesmo assunto fiquem juntos, temos maneiras. Portanto a probabilidade é dada por     (FUVEST 2020 - 2ª fase) Um jogo educativo possui 16 peças nos formatos: círculo, triângulo, quadrado e estrela, e cada formato é apresentado em 4 cores: amarelo, branco, laranja e verde. Dois jogadores distribuem entre si quantidades iguais dessas peças, de forma aleatória. O conjunto de 8 peças que cada jogador recebe é chamado de coleção.  a) Qual é a probabilidade de que os dois jogadores recebam a mesma quantidade de peças amarelas?   a)   De acordo com o o espaço amostral é dado por .  Precisamos calcular o número de maneiras de distribuir as 8 peças para cada jogador, de forma que exatamente duas delas sejam amarelas. Vamos calcular o número de maneiras de distribuir as peças para o primeiro jogador, as peças que sobram ficam para o segundo jogador.  Como são 4 peças amarelas distintas duas a duas, temos maneiras de separar duas peças amarelas. Agora precisamos separar 6 peças com cores diferentes de amarelo. Temos um total de maneiras de fazer isto, pois existem exatamente 12 peças com cores diferentes de amarelo. Portanto a probabilidade é    (FUVEST 2018 - 2ª fase) Em um torneio de xadrez, há 2n participantes. Suponha que 12 jogadores participem do torneio, dos quais 6 sejam homens e 6 sejam mulheres. Qual é a probabilidade de que, na primeira rodada, só haja confrontos entre jogadores do mesmo sexo?     De acordo com o o espaço amostral é dado por .  O número de maneiras de emparceirar as mulheres entre si é dado por .  Como o número de maneiras de emparceirar os homens entre si é o mesmo de emparceirar as mulheres entre si, a probabilidade pedida é dada por    (FUVEST 2013 - 2ª fase) Sócrates e Xantipa enfrentam-se em um popular jogo de tabuleiro, que envolve a conquista e ocupação de territórios em um mapa. Sócrates ataca jogando três dados e Xantipa se defende com dois. Depois de lançados os dados, que são honestos, Sócrates terá conquistado um território se e somente se as duas condições seguintes forem satisfeitas:   o maior valor obtido em seus dados for maior que o maior valor obtido por Xantipa;  algum outro dado de Sócrates cair com um valor maior que o menor valor obtido por Xantipa.    No caso em que Xantipa tira 5 e 5, qual é a probabilidade de Sócrates conquistar o território em jogo?  No caso em que Xantipa tira 5 e 4, qual é a probabilidade de Sócrates conquistar o território em jogo?    a) b)   item a) No caso em que Xantipa tira 5 e 5, Sócrates conquista o território se conseguir três vezes a face 6 ou duas vezes a face 6 e uma vez uma face diferente de 6. Como o segundo caso pode ser ordenado de três formas diferentes, a probabilidade de Sócrates conquistar o território é:   item b) No caso em que Xantipa tira 5 e 4, temos 4 possibilidades para Sócrates conquistar o território. 1º Sócrates tira 6, 6 e 6. Neste caso a probabilidade é  2ª Sócrates tira 6, 6 e um número menor que 6. Neste caso a probabilidade é  3º Sócrates tira 6, 5 e 5. Neste caso a probabilidade é  4º Sócrates tira 6, 5 e um número menor que 5. Neste caso a probabilidade é Portanto a resposta é a soma dos 4 casos possíveis:    "
},
{
  "id": "definition-26",
  "level": "2",
  "url": "section-espacos-probabilidade.html#definition-26",
  "type": "Definição",
  "number": "4.1.1",
  "title": "",
  "body": " Chamaremos de espaço amostral o conjunto de todos os resultados possíveis de uma experiência aleatória. Denotaremos o espaço amostral por e só vamos considerar o caso de ser finito.  Os subconjuntos de serão chamados de eventos . Diremos que um evento ocorre quando o resultado da experiência pertence ao evento.  "
},
{
  "id": "def-probabilidade",
  "level": "2",
  "url": "section-espacos-probabilidade.html#def-probabilidade",
  "type": "Definição",
  "number": "4.1.2",
  "title": "",
  "body": " Seja um espaço amostral. Uma probabilidade sobre é uma função que associa a cada evento um número de forma que:  Para todo evento , ;  ;  Se então .    "
},
{
  "id": "example-61",
  "level": "2",
  "url": "section-espacos-probabilidade.html#example-61",
  "type": "Exemplo",
  "number": "4.1.3",
  "title": "",
  "body": " Ao lançar uma moeda observe a face que cai voltada para cima.  O espaço amostral é os eventos são a) Vamos definir uma probabilidade para , que chamaremos de : b) Vamos definir outra probabilidade para , que chamaremos de : Observe que e satisfazem a definição de probabilidade.  "
},
{
  "id": "example-62",
  "level": "2",
  "url": "section-espacos-probabilidade.html#example-62",
  "type": "Exemplo",
  "number": "4.1.4",
  "title": "",
  "body": "Um modelo de probabilidade muito utilizado é o equiprobabilístico, que é o caso de do exemplo anterior.  O caso geral deste modelo, ou seja para , atribuímos a cada evento unitário a probabilidade Pois, se e . Pelo item c) da , temos Portanto,   "
},
{
  "id": "example-63",
  "level": "2",
  "url": "section-espacos-probabilidade.html#example-63",
  "type": "Exemplo",
  "number": "4.1.5",
  "title": "",
  "body": " Quatro moedas (não viciadas) são jogadas simultâneamente.   Qual é a probabilidade de obter 3 caras?  Qual é a probabilidade de obter pelo menos 3 caras?    Para simplificar a notação, indicaremos 0 para cara e 1 para coroa. O espaço amostral é  item a) Observe que dentre as 16 possibilidades, o subconjunto abaixo: possui todos os casos favoráveis. Portanto a probabilidade de obter 3 caras é    item b) Observe que dentre as 16 possibilidades, o subconjunto abaixo: possui todos os casos favoráveis. Portanto a probabilidade de obter pelo menos 3 caras é    "
},
{
  "id": "remark-9",
  "level": "2",
  "url": "section-espacos-probabilidade.html#remark-9",
  "type": "Nota",
  "number": "4.1.6",
  "title": "",
  "body": " Sejam e .  O conjunto complementar de é denotado por  O conjunto menos o conjunto é denotado por   "
},
{
  "id": "teo-probabilidade",
  "level": "2",
  "url": "section-espacos-probabilidade.html#teo-probabilidade",
  "type": "Teorema",
  "number": "4.1.7",
  "title": "",
  "body": " Sejam e eventos, então:  ;  ;  ;  ;  Se então .      item a)    item b) Como , temos . Portanto   item c) Escrevendo como a união disjunta: temos   item d) Escrevendo como a união disjunta: temos   item e) Pelo item c) temos se , ficamos com pois .   "
},
{
  "id": "example-64",
  "level": "2",
  "url": "section-espacos-probabilidade.html#example-64",
  "type": "Exemplo",
  "number": "4.1.8",
  "title": "",
  "body": " Uma caixa de chocolate contém 40 chocolates, 30 são do tipo ao leite e 10 são do tipo amargo . Ao pegar 8 chocolates aleatoriamente, qual a probabilidade de que ao menos um chocolate seja do tipo amargo ?   Primeiro, vamos calcular a probabilidade de que todos os chocolates sejam do tipo ao leite . Em seguida, vamos usar o item a) do ( ) para chegar na resposta deste problema.  cardinalidade do espaço amostral é dada pelo número de maneiras de pegar 8 chocolates dentre 40 disponívies, portanto Agora queremos contar quantas são as formas de pegar 8 chocolates do tipo ao leite . Como existem 30 disponíveis a resposta é: Usando o item a) do ( ), a probabilidade de que ao menos um seja do tipo amargo é    "
},
{
  "id": "exem-aniversario",
  "level": "2",
  "url": "section-espacos-probabilidade.html#exem-aniversario",
  "type": "Exemplo",
  "number": "4.1.9",
  "title": "",
  "body": " Em um grupo de 45 pessoas, qual é a probabilidade de que pelo menos duas pessoas façam aniversário no mesmo dia?   Mais uma vez, usaremos o item a) do ( ).  Vamos, inicialmente, calcular a probabilidade de que todas as 45 pessoas façam aniversários em dias diferentes. O número de casos possíveis para os aniversários das 45 pessoas é . O número de casos em que todas as 45 pessoas fazem aniversários em dias diferentes é Então, a probabilidade de que todas as 45 pessoas façam aniversário em dias diferentes é Usando o item a) do ( ), a probabilidade de que pelo menos duas pessoas façam aniversário no mesmo dia é   Este cálculo pode ser verificado no Sage, usando o código abaixo:    "
},
{
  "id": "tech-aniversario",
  "level": "2",
  "url": "section-espacos-probabilidade.html#tech-aniversario",
  "type": "Tecnologia",
  "number": "4.1.10",
  "title": "",
  "body": "  Escolha um intervalo, referente a variação de pessoas, para obter uma tabela com a quantidade e a respectiva probabilidade de que pelo menos duas pessoas façam aniversário no mesmo dia, conforme o .     Escolha um intervalo, referente a variação de pessoas, para obter o gráfico do tipo: quantidade versus probabilidade de que pelo menos duas pessoas façam aniversário no mesmo dia, conforme o .     "
},
{
  "id": "example-66",
  "level": "2",
  "url": "section-espacos-probabilidade.html#example-66",
  "type": "Exemplo",
  "number": "4.1.13",
  "title": "",
  "body": " Vinte três pessoas foram fazer uma prova e precisaram deixar seus celulares com o fiscal. No horário previsto de entrega, houve uma emergência e todos precisaram entregar suas provas e pegar seus celulares com pressa, de modo que os celulares foram entregues ao acaso. Qual a probabilidade de que todos os participantes tenha recebido os celulares errados?   O espaço amostral é constituido por todas as formas de ordenar os 23 celulares. Os casos favoráveis é constituído por todas as permutações caóticas com os 23 celulares. Portanto a resposta é    "
},
{
  "id": "example-67",
  "level": "2",
  "url": "section-espacos-probabilidade.html#example-67",
  "type": "Exemplo",
  "number": "4.1.14",
  "title": "",
  "body": " 8 bolas de ping-pong são colocadas aleatóriamente em 8 caixas. Qual a probabilidade de que exatamente uma caixa fique vazia?   A cardinalidade do espaço amostral é dado pelo número de formas de colocar as 8 bolas de ping-pong nas 8 caixas pois, temos 8 possibilidades para a primeira bola, 8 para a segunda, etc.  Agora vamos calcular o número de casos favoráveis. Para que, exatamente uma caixa fique vazia, exatamente uma ficará com duas bolas. Logo, precisamos escolher qual caixa fica vazia e qual caixa recebe duas bolas. O número de formas de escolher qual deve ficar vazia é 8. O número de formas de escolher qual caixa recebe duas bolas é 7.  A quantidade de maneiras de escolher duas bolas para a caixa que recebe as duas bolas é . A quantidade de formas de arrumar o restante das bolas é .  Portanto o número de casos favoráveis é . A resposta do problema é    "
},
{
  "id": "exercise-112",
  "level": "2",
  "url": "section-espacos-probabilidade.html#exercise-112",
  "type": "Exercício",
  "number": "4.1.1",
  "title": "",
  "body": " Um número é escolhido ao acaso no conjunto . Determine a probabilidade do número escolhido ser:  múltiplo de 3;  múltiplo de 5;  múltiplo de 3 e múltiplo de 5;  múltiplo de 3 ou múltiplo de 5.     a) , b) , c) , d) .   item a)    item b)    item c)    item d) Pelo princípio da Inclusão-Exclusão:   "
},
{
  "id": "exercise-113",
  "level": "2",
  "url": "section-espacos-probabilidade.html#exercise-113",
  "type": "Exercício",
  "number": "4.1.2",
  "title": "",
  "body": " Em uma caixa existem 6 bolinhas numeradas de 1 a 6. Uma a uma elas são extraı́das, sem reposição. Qual a probabilidade de que a sequência de números observada seja crescente ou seja decrescente?   .   O espaço amostral tem cardinalidade , que é o número de maneiras de ordenar as bolinhas. Como só existe uma sequência seja crescente e uma que seja decrescente, a probabilidade é   "
},
{
  "id": "exercise-114",
  "level": "2",
  "url": "section-espacos-probabilidade.html#exercise-114",
  "type": "Exercício",
  "number": "4.1.3",
  "title": "",
  "body": " Doze pessoas são divididas em três grupos de 4. Qual é a probabilidade de duas determinadas dessas pessoas fiquem no mesmo grupo?      Para a cardinalidade do espaço amostral, a segunda pessoa pode ficar em qualquer lugar de 11 disponíveis. Os casos favoráveis são 3, pois a primeira pessoa vai estar em algum grupo e a segunda pessoa tem 3 opções de lugares para escolher um, no grupo que se encontra a primeira pessoa. Portanto, a probabilidade é   "
},
{
  "id": "exercise-115",
  "level": "2",
  "url": "section-espacos-probabilidade.html#exercise-115",
  "type": "Exercício",
  "number": "4.1.4",
  "title": "",
  "body": " Um armário contém 6 pares de sapatos. Escolhem-se 4 pés de sapatos. Qual é a probabilidade de se formar exatamente um par de sapatos?       A cardinalidade do espaço amostral é , pois essa é a quantidade de maneiras distintas de retirar 4 pés de sapatos, de 12 disponíveis.  Agora, vamos contar o número de casos favoráveis. Temos maneiras de retirar 1 par de sapatos, de 6 pares disponíveis. Depois disso, temos maneiras de escolher dois representantes de 5 tipos de sapatos disponíveis. Em seguida, precisamos decidir se será retirado o pé esquerdo ou o pé direito de cada um desses dois sapatos. Isto pode ser feito de maneiras. Portanto, a probabilidade é   "
},
{
  "id": "exercise-116",
  "level": "2",
  "url": "section-espacos-probabilidade.html#exercise-116",
  "type": "Exercício",
  "number": "4.1.5",
  "title": "",
  "body": " Oito carros estão estacionados em doze vagas em fila. Determine a probabilidade:  das vagas vazias serem consecutivas;  de não haver duas vagas vazias adjacentes.    a) , b) .   item a) Para que as vagas vazias fiquem juntas, juntamos 4 vagas em uma, ficamos com 9 vagas para escolher uma, que será quádrupla. Isto pode ser feito de 9 maneiras. A cardinalidade do espaço amostral é o número de maneiras de escolher 4 lugares para ficarem fazios, dentre 12 disponíveis. Logo, a probabilidade é   item b) Já sabemos que o espaço amostral tem cardinalidade . Para que não haja duas vagas vazias adjacentes, podemos escolher as 4 vagas que ficarão vazias de maneiras. Assim, a probabilidade é   "
},
{
  "id": "exercise-117",
  "level": "2",
  "url": "section-espacos-probabilidade.html#exercise-117",
  "type": "Exercício",
  "number": "4.1.6",
  "title": "",
  "body": "O jogo mais simples da LOTOFÁCIL consiste basicamente na escolha de números de um total de disponíveis, os números vão de à . Outras possibilidades de jogos consistem na escolha de ou números. Feitas as apostas, o jogador é dito premiado se após o sorteio dos números o mesmo tenha acertado ou destes.  Qual a probabilidade do jogador marcar números e acertar números?  Qual a probabilidade do jogador marcar números e acertar números?  Qual a probabilidade do jogador marcar números e acertar números?  Qual a probabilidade do jogador marcar números e acertar números?  Qual a probabilidade do jogador marcar números e acertar pelo menos números?  Qual a probabilidade do jogador marcar números e acertar números? (Supondo e ).            "
},
{
  "id": "ex-palhaco",
  "level": "2",
  "url": "section-espacos-probabilidade.html#ex-palhaco",
  "type": "Exercício",
  "number": "4.1.7",
  "title": "",
  "body": "(Plínio , 2007, p. 181) Um palhaço está na ponta do trampolim de uma piscina, carregando uma caixa que contém bolas vermelhas e bolas azuis. Aleatoriamente ele vai retirando bolas da caixa, descartando-as em seguida. Cada vez que ele seleciona uma bola azul, ele dá um passo para trás, e cada vez que ele retira uma bola vermelha ele dá um passo para frente. Encontre a probabilidade de que o palhaço permaneça seco após a retirada das bolas da caixa.    Observe que uma sequência de retiradas na qual o palhaço permanece seco até o fim, quer dizer que, a cada retirada, a quantidade de bolas azuis tem que ser maior ou igual à quantidade de bolas vermelhas.  A cada vez que o palhaço retira uma bola, anotamos um se ela foi azul e um se ela foi vermelha. Com isto, construímos uma sequência formada por  e  . O palhaço ficará seco, se na sequência correspondente às retiradas, a cada momento o número dos é maior ou igual que o dos .  Perceba que se trocarmos por e por esse é o problema do deslocamento de uma partícula de até , sem que ela ultrapasse a reta , ou seja, é o número de Catalan: .  A quantidade de maneiras distintas para retirar as bolas é dada pela permutação com repetição: Assim, como esses eventos são equiprováveis, a probabilidade do palhaço permanecer seco é Concluímos que quanto maior a quantidade de bolas, menor a chance dele ficar seco.  "
},
{
  "id": "exercise-119",
  "level": "2",
  "url": "section-espacos-probabilidade.html#exercise-119",
  "type": "Exercício",
  "number": "4.1.8",
  "title": "",
  "body": "(OPEMAT 2021 - nível 3) Pensando em sua segurança, a mãe de Dafne a proibiu de entrar na cozinha. Certo dia, sua mãe a encontra a um passo de entrar na cozinha. Lembrando que Dafne adora brinquedos, sua mãe pega uma sacola que contém de seus brinquedos favoritos e brinquedos dos quais não se interessa muito. A cada passo que Dafne está prestes a dar, sua mãe pega aleatoriamente um brinquedo na sacola, mostra a Dafne e depois deixa o brinquedo no chão. Se o brinquedo em questão for um dos que ela não se interessa muito, Dafne dá um passo em direção a cozinha, e se for um de seus favoritos, ela dá um passo na direção oposta. Qual a probabilidade de que Dafne entre na cozinha?    Observe que este exercício é equivalente ao exercício anterior ( ). Porém, neste caso ele pergunta pela probabilidade complementar. Portanto,   "
},
{
  "id": "exercise-120",
  "level": "2",
  "url": "section-espacos-probabilidade.html#exercise-120",
  "type": "Exercício",
  "number": "4.1.9",
  "title": "",
  "body": " (ITA 2004) Uma caixa branca contém 5 bolas verdes e 3 azuis, e uma caixa preta contém 3 bolas verdes e 2 azuis. Pretende-se retirar uma bola de uma das caixas. Para tanto, 2 dados são atirados. Se a soma resultante dos dois dados for menor que 4, retira-se uma bola da caixa branca. Nos demais casos, retira-se uma bola da caixa preta. Qual é a probabilidade de se retirar uma bola verde?     No lançamento de dois dados, são possíveis 36 (pares) resultados diferentes, sendo que em apenas 3 deles a soma resultante é menor que 4. São eles: (1;1), (1;2), (2;1). A probabilidade de que uma bola verde seja retirada da urna branca é e da urna preta é . Assim, a probabilidade de se retirar uma bola verde é   "
},
{
  "id": "exercise-121",
  "level": "2",
  "url": "section-espacos-probabilidade.html#exercise-121",
  "type": "Exercício",
  "number": "4.1.10",
  "title": "",
  "body": " (ITA 2005) São dados dois cartões, sendo que um deles tem ambos os lados na cor vermelha, enquanto o outro tem um lado na cor vermelha e o outro na cor azul. Um dos cartões é escolhido ao acaso e colocado sobre uma mesa. Se a cor exposta é vermelha, calcule a probabilidade de o cartão escolhido ter a outra cor também vermelha      O total de faces nos dois cartões é 4, sendo 3 faces vermelhas e 1 azul. Como a cor exposta é vermelha, temos duas chances do verso ser vermelho e uma chance do verso ser azul. Portanto a probabilidade de o cartão escolhido ter a outra cor também vermelha é   "
},
{
  "id": "exercise-122",
  "level": "2",
  "url": "section-espacos-probabilidade.html#exercise-122",
  "type": "Exercício",
  "number": "4.1.11",
  "title": "",
  "body": " (ITA 2008) Considere o conjunto e formado por todos os subconjuntos de com elementos. Escolhendo ao acaso um elemento , a probabilidade de a soma de seus elementos ser 183 é igual a  a) b) c) d) e)   a)   De acordo com o enunciado . O conjunto dos elementos , cuja soma deve ser é   Logo . Então, escolhendo ao acaso um elemento a probabilidade de que a soma dos elementos de seja 183 é   "
},
{
  "id": "exercise-123",
  "level": "2",
  "url": "section-espacos-probabilidade.html#exercise-123",
  "type": "Exercício",
  "number": "4.1.12",
  "title": "",
  "body": " (ITA 2010) Uma urna de sorteio contém bolas numeradas de a , sendo que a retirada de uma bola é equiprovável à retirada de cada uma das demais.   Retira-se aleatoriamente uma das bolas desta urna. Calcule a probabilidade de o número desta bola ser um múltiplo de ou .  Retira-se aleatoriamente uma das bolas desta urna e, sem repôla, retira-se uma segunda bola. Calcule a probabilidade de o número da segunda bola retirada não ser múltiplo de .    a) b)   a) Usaremos o Princípio da Inclusão-Exclusão para calcular o número de bolas com números múltiplos de 5 ou 6.    Note que e que é o conjunto dos múltiplos de entre e , incluindo o . Observe que , e . Portanto a probabilidade é   b) Para que o número da segunda bola retirada não seja múltiplo de 6, temos dois casos. 1º caso: primeira bola é um múltiplo de 6 e a segunda não. Essa probabilidade é dada por: . 2º caso: primeira bola não é um múltiplo de 6 e a segunda também não é. Essa probabilidade é dada por: . Logo a probabilidade de o número da segunda bola retirada não ser múltiplo de é   "
},
{
  "id": "exercise-124",
  "level": "2",
  "url": "section-espacos-probabilidade.html#exercise-124",
  "type": "Exercício",
  "number": "4.1.13",
  "title": "",
  "body": " (ITA 2011) Sobre uma mesa estão dispostos livros de história, de biologia e de espanhol. Determine a probabilidade de os livros serem empilhados sobre a mesa de tal forma que aqueles que tratam do mesmo assunto estejam juntos.   .   No total os livros podem ser organizados de maneiras. Para que os livros de mesmo assunto fiquem juntos, temos maneiras. Portanto a probabilidade é dada por   "
},
{
  "id": "exercise-125",
  "level": "2",
  "url": "section-espacos-probabilidade.html#exercise-125",
  "type": "Exercício",
  "number": "4.1.14",
  "title": "",
  "body": " (FUVEST 2020 - 2ª fase) Um jogo educativo possui 16 peças nos formatos: círculo, triângulo, quadrado e estrela, e cada formato é apresentado em 4 cores: amarelo, branco, laranja e verde. Dois jogadores distribuem entre si quantidades iguais dessas peças, de forma aleatória. O conjunto de 8 peças que cada jogador recebe é chamado de coleção.  a) Qual é a probabilidade de que os dois jogadores recebam a mesma quantidade de peças amarelas?   a)   De acordo com o o espaço amostral é dado por .  Precisamos calcular o número de maneiras de distribuir as 8 peças para cada jogador, de forma que exatamente duas delas sejam amarelas. Vamos calcular o número de maneiras de distribuir as peças para o primeiro jogador, as peças que sobram ficam para o segundo jogador.  Como são 4 peças amarelas distintas duas a duas, temos maneiras de separar duas peças amarelas. Agora precisamos separar 6 peças com cores diferentes de amarelo. Temos um total de maneiras de fazer isto, pois existem exatamente 12 peças com cores diferentes de amarelo. Portanto a probabilidade é  "
},
{
  "id": "exercise-126",
  "level": "2",
  "url": "section-espacos-probabilidade.html#exercise-126",
  "type": "Exercício",
  "number": "4.1.15",
  "title": "",
  "body": " (FUVEST 2018 - 2ª fase) Em um torneio de xadrez, há 2n participantes. Suponha que 12 jogadores participem do torneio, dos quais 6 sejam homens e 6 sejam mulheres. Qual é a probabilidade de que, na primeira rodada, só haja confrontos entre jogadores do mesmo sexo?     De acordo com o o espaço amostral é dado por .  O número de maneiras de emparceirar as mulheres entre si é dado por .  Como o número de maneiras de emparceirar os homens entre si é o mesmo de emparceirar as mulheres entre si, a probabilidade pedida é dada por  "
},
{
  "id": "exercise-127",
  "level": "2",
  "url": "section-espacos-probabilidade.html#exercise-127",
  "type": "Exercício",
  "number": "4.1.16",
  "title": "",
  "body": " (FUVEST 2013 - 2ª fase) Sócrates e Xantipa enfrentam-se em um popular jogo de tabuleiro, que envolve a conquista e ocupação de territórios em um mapa. Sócrates ataca jogando três dados e Xantipa se defende com dois. Depois de lançados os dados, que são honestos, Sócrates terá conquistado um território se e somente se as duas condições seguintes forem satisfeitas:   o maior valor obtido em seus dados for maior que o maior valor obtido por Xantipa;  algum outro dado de Sócrates cair com um valor maior que o menor valor obtido por Xantipa.    No caso em que Xantipa tira 5 e 5, qual é a probabilidade de Sócrates conquistar o território em jogo?  No caso em que Xantipa tira 5 e 4, qual é a probabilidade de Sócrates conquistar o território em jogo?    a) b)   item a) No caso em que Xantipa tira 5 e 5, Sócrates conquista o território se conseguir três vezes a face 6 ou duas vezes a face 6 e uma vez uma face diferente de 6. Como o segundo caso pode ser ordenado de três formas diferentes, a probabilidade de Sócrates conquistar o território é:   item b) No caso em que Xantipa tira 5 e 4, temos 4 possibilidades para Sócrates conquistar o território. 1º Sócrates tira 6, 6 e 6. Neste caso a probabilidade é  2ª Sócrates tira 6, 6 e um número menor que 6. Neste caso a probabilidade é  3º Sócrates tira 6, 5 e 5. Neste caso a probabilidade é  4º Sócrates tira 6, 5 e um número menor que 5. Neste caso a probabilidade é Portanto a resposta é a soma dos 4 casos possíveis:  "
},
{
  "id": "section-probabilidade-condicional",
  "level": "1",
  "url": "section-probabilidade-condicional.html",
  "type": "Seção",
  "number": "4.2",
  "title": "Probabilidade Condicional",
  "body": " Probabilidade Condicional    Um dado (não viciado) foi lançado. Considere o evento . A probabilidade de ocorrer é Agora, suponha que alguém (que você confia) viu o resultado e falou que a face virada para cima é um número maior que 3.  A nossa opinião sobre a probabilidade modifica, pois agora o espaço amostral foi reduzido para e temos duas chances em três de que o resultado seja par.  Essa é a noção de probabilidade de na certeza de e é denotada por:     Dados dois eventos (conjuntos) e , a probabilidade condicional de dado é dada por    Note que só está definido quando . A igualdade pode ser reescrita das seguintes formas: e, caso :    Refaça a 2ª parte do Exemplo , usando a definição .  Suponha que alguém (que você confia) viu o resultado, do lançamento de um dado, e falou que a face virada para cima é um número maior que 3. Qual a probabilidade de que o resultado tenha sido um número par?   Seja o evento , foi dado que ocorreu , então temos e Pela definição de probabilidade condicional, temos      Seja tal que . Então a probabilidade condicional é outra probabilidade sobre o espaço amostral , ou seja, valem as seguintes propriedades:  ;  ;  Se então .       a) Como temos  b)  e  c)       Em um experimento aleatório é retirado sucessivamente e sem reposição três bolas de uma caixa que comtém 8 bolas pretas e 6 bolas brancas. Qual a probabilidade de que sejam três bolas brancas?   Considere os eventos: Queremos calcular a probabilidade .   Árvore de Probabilidades.    A probabilidade de que a primeira bola seja branca é . Dado que aconteceu , a probabilidade de que a segunda bola seja branca é . Dado que aconteceram e , a probabilidade de que a terceira bola seja branca é . Portanto Na solução deste problema, usamos a      (Regra do Produto de Probabilidades)  Sejam eventos de um espaço amostral e uma probabilidade em . Se então    Para dois conjuntos a fórmula é verdadeira, pois coincide com a definição de probabilidade condicional. Vamos usar o Princípio de Indução para mostrar que o resultado é verdadeiro. Suponha o resultado válido para eventos.  Defina , queremos a probabilidade . Pela definição de probabilidade condicional, temos ou seja,  Pela hipótese de indução, temos Substituindo a igualdade dada pela hipótese de indução em , chegamos no resultado:      Sabe-se que das importações, por pessoas físicas, para o Brasil vem da China. A probabilidade de uma importação chegar na residência do comprador é de se for uma compra da China e caso contrário. Se uma importação for feita agora.   Qual a probabilidade de que a compra ser da China e de chegar na residência do comprador?  Qual a probabilidade de que a compra chegue na residência do comprador?  Uma importação foi feita e o produto se perdeu. Qual a probabilidade de ter sido da china?     item a)  Usaremos as notações: Logo,   item b)  Para uma importação chegar na residência do comprador, ela pode ter sido feita da china ou do complementar da china. Usaremos para dizer que não chegou na residência e para dizer que não é da china. A probabilidade de que a importação chegue é dada por Usando a , temos Nesta solução, usamos o (Teorema da Probabilidade Total).  item c)  Vamos calcular a probabilidade de que a importação seja da China e tenha se perdido, vamos dividir esse valor pela probabilidade de que a importação tenha se perdido.  A probabilidade de que a importação se perdeu e foi da china é de A probabilidade de que a importação tenha se perdido é dada por Portanto a probabilidade de que tenha sido da china a importação que se perdeu é Observe que o cálculo usado foi o seguinte: Este é o Teorema de Bayes.    item b)  Para organizar melhor as ideias, desenhamos uma árvore com todas as possibilidades.   Árvore de Probabilidades.    Observa-se mais facilmente que a probabilidade da importação chegar na residência é dada por   item c)  Usando a árvore de probabilidades, vamos calcular a probabilidade de que a importação seja da China e tenha se perdido, vamos dividir esse valor pela probabilidade de que a importação tenha se perdido.     (Teorema da Probabilidade Total)  Sejam e é um eventos tais que e então    Como vale Temos com a união disjunta, portanto     (Teorema de Bayes)  Sejam e é um eventos tais que e então    Aplicando a definição de probabilidade condicional, temos Usando o e substituindo em , obtemos     No próximo exemplo, temos o Problema de Monty Hall (ou Problema dos Bodes, como é comumente conhecido no Brasil). Esse Problema surgiu a partir de um concurso televisivo dos Estados Unidos chamado Let’s Make a Deal, exibido na década de 1970. (Para mais informações, veja a Monografia ).   Em um programa de auditório, o convidado deve escolher uma dentre três portas. Atrás de uma das portas há um carro e atrás de cada uma das outras duas há um bode. O convidado ganhará o que estiver atrás da porta; devemos supor neste problema que o convidado prefere ganhar o carro. O procedimento para escolha da porta é o seguinte: o convidado escolhe inicialmente, em caráter provisório, uma das três portas. O apresentador do programa, que sabe o que há atrás de cada porta, abre neste momento uma das outras duas portas, sempre revelando um dos dois bodes. O convidado agora tem a opção de ficar com a primeira porta que ele escolheu ou trocar pela outra porta fechada.  Qual a probabilidade do candidato ganhar o carro, se ele permanecer na primeira porta escolhida?  Qual a probabilidade do candidato ganhar o carro, se ele trocar de porta?           Vamos fixar a seguinte situação. As portas serão chamadas de e . Suponha que o candidato escolheu a porta .  Defina os seguintes eventos:  A, B e C são eventos na qual os prêmios estão atrás das portas e , respectivamente.  O é o evento que o apresentador abre a porta , revelendo um bode.  Queremos calcular e .  Pelas condições do problema, assumiremos que o prêmio é aleatoriamente colocado atrás de uma das portas, ou seja Para usar o Teorema de Bayes, precisaremos de e :  . Se o prêmio estiver na porta , o apresentador poderá abrir a porta ou a porta .  . Se o prêmio estiver na porta , o presentador não poderá abrir a porta .  . Se o prêmio estiver na porta , o presentador poderá abrir somente a porta .      item a) Pelo Teorema de Bayes:    item b) Pelo Teorema de Bayes:     Solução apresentada por Marilyn Vos Savant, colunista da revista Parade.  Marylin fez uso de uma tabela para mostrar que o benefício de mudar de porta é facilmente mostrado jogando 6 jogos que contém todas as probabilidades:  item a)   Caso o candidato não troque de porta.     Porta 1  Porta 2  Porta 3  Resultado    Jogo 1  Carro  Bode  Bode  O candidato não troca e ganha    Jogo 2  Bode  Carro  Bode  O candidato não troca e perde    Jogo 3  Bode  Bode  Carro  O candidato não troca e perde      item b)   Caso o candidato troque de porta.     Porta 1  Porta 2  Porta 3  Resultado    Jogo 1  Carro  Bode  Bode  O candidato troca e perde    Jogo 2  Bode  Carro  Bode  O candidato troca e ganha    Jogo 3  Bode  Bode  Carro  O candidato troca e ganha         Eventos Independentes   Sejam e eventos. e são independentes se,   Da , temos     Em um experimento aleatório é retirado sucessivamente, com reposição, duas bolas de uma caixa que comtém 8 bolas pretas e 6 bolas brancas. Qual a probabilidade de que sejam duas bolas brancas?   Considere os eventos: Observe que os eventos são independentes, portanto a probabilidade é      Sejam eventos. são independentes se, para todo , e para quaisquer , tem-se  Consequentemente,      Em um experimento aleatório é retirado sucessivamente, com reposição, três bolas de uma caixa que comtém 8 bolas pretas e 6 bolas brancas. Qual a probabilidade de que sejam três bolas brancas?   Considere os eventos: Observe que os eventos são independentes, portanto a probabilidade é      Um dado (não viciado) é lançado 5 vezes. Qual é a probabilidade de obtermos os resultados , exatamente nessa ordem?   Seja o evento: saiu o valor da posição da lista , no -ésimo lançamento, .  Como os eventos são independentes, temos       Exercícios   Dois dados e são lançados e os resultados nas faces de cima anotados.  Qual a probabilidade da soma dos pontos ser 6, se a face observada em foi 2?  Qual a probabilidade de ter saı́do 2 em , se a soma dos pontos foi 6?  Qual a probablidade da soma dos pontos ser menor do que 7, sabendo que o número 2 saiu pelo menos uma vez?  Qual a probabilidade da soma dos pontos ser menor do que ou igual a 6, se o maior dos números obtidos é menor do que 5?  Qual a probabilidade do maior dos números obtidos ser menor do que 5, sabendo que a soma dos pontos foi menor do que ou igual a 6?     a) , b) , c) , d) , e) .    Três caixas I, II e III contém respectivamente 1 bola branca e 2 pretas; 2 brancas e 1 preta; 3 brancas e 2 pretas. Uma caixa é escolhida ao acaso e dela é retirada uma bola. Determine a probabilidade:   da bola retirada ser branca, sabendo que a caixa escolhida foi a I;  da caixa escolhida ter sido a I e a bola retirada ser branca.    a) , b) .    Uma caixa contém 30 bolas pretas, 20 brancas e 10 vermelhas. Três bolas são retiradas da caixa, uma após a outra, sem reposição. Qual a pobabilidade da terceira bola retirada ser preta?      (ITA 2008) Considere uma população de igual número de homens e mulheres, em que sejam daltônicos dos homens e das mulheres. Indique a probabilidade de que seja mulher uma pessoa daltônica selecionada ao acaso nessa população.  a) b) c) d) e)   a)    (ITA 2009) Uma amostra de estrangeiros, em que 18% são proficientes em inglês, realizou um exame para classificar a sua proficiência nesta língua. Dos estrangeiros que são proficientes em inglês, 75% foram classificados como proficientes. Entre os não proficientes em inglês, 7% foram classificados como proficientes. Um estrangeiro desta amostra, escolhido ao acaso, foi classificado como proficiente em inglês. A probabilidade deste estrangeiro ser efetivamente proficiente nesta língua é de aproximadamente  a) b) c) d) e)   b)   Dos de estrangeiros proficientes em inglês, foram classificados como proficientes: Dos de estrangeiros não-proficientes em inglês, foram classificados como proficientes: A probabilidade do estrangeiro ser efetivamente proficiente em inglês é     (ITA 2008) Em um espaço amostral com uma probabilidade , são dados os eventos e tais que: , com e independentes, , e sabe-se que . Calcule as probabilidades condicionais e .      . Precisamos calcular e .  Para calcular , usaremos a igualdade . Logo Portanto .  Para calcular , usaremos a igualdade . Logo Resta agora calcular .  Pelo item d) do temos   Logo, E   Substituindo os valores obtidos    (ESAF 2004\/MPU – Técnico Administrativo) Luís é prisioneiro do temível imperador Ivan. Ivan coloca Luís à frente de três portas e lhe diz: Atrás de uma destas portas encontra-se uma barra de ouro, atrás de cada uma das outras, um tigre feroz. Eu sei onde cada um deles está. Podes escolher uma porta qualquer. Feita tua escolha, abrirei uma das portas, entre as que não escolheste, atrás da qual sei que se encontra um dos tigres, para que tu mesmo vejas uma das feras. Aí, se quiseres, poderás mudar a tua escolha.  Luís, então, escolhe uma porta e o imperador abre uma das portas não-escolhidas por Luís e lhe mostra um tigre. Luís, após ver a fera, e aproveitando-se do que dissera o imperador, muda sua escolha e diz: Temível imperador, não quero mais a porta que escolhi; quero, entre as duas portas que eu não havia escolhido, aquela que não abriste.  A probabilidade de que, agora, nessa nova escolha, Luís tenha escolhido a porta que conduz à barra de ouro é igual a a) b) c) d) e)  c)    (ITA 2011) Numa caixa com moedas, apresentam duas caras, são normais (cara e coroa) e as demais apresentam duas coroas. Uma moeda é retirada ao acaso e a face observada mostra uma coroa. A probabilidade de a outra face desta moeda também apresentar uma coroa é  a) b) c) d) e)   . Questão anulada, nenhum item estava correto.   Temos 10 moedas comuns, com uma cara e uma coroa, 25 moedas com duas coroas e 5 moedas com duas caras. Desenhando a árvore de probabilidades:   Árvore de Probabilidades.    Podemos calcular a probabilidade da seguinte maneira:     "
},
{
  "id": "exem-prob-condicional",
  "level": "2",
  "url": "section-probabilidade-condicional.html#exem-prob-condicional",
  "type": "Exemplo",
  "number": "4.2.1",
  "title": "",
  "body": " Um dado (não viciado) foi lançado. Considere o evento . A probabilidade de ocorrer é Agora, suponha que alguém (que você confia) viu o resultado e falou que a face virada para cima é um número maior que 3.  A nossa opinião sobre a probabilidade modifica, pois agora o espaço amostral foi reduzido para e temos duas chances em três de que o resultado seja par.  Essa é a noção de probabilidade de na certeza de e é denotada por:   "
},
{
  "id": "def-prob-condicional",
  "level": "2",
  "url": "section-probabilidade-condicional.html#def-prob-condicional",
  "type": "Definição",
  "number": "4.2.2",
  "title": "",
  "body": " Dados dois eventos (conjuntos) e , a probabilidade condicional de dado é dada por   "
},
{
  "id": "def-prob-condicional-p2",
  "level": "2",
  "url": "section-probabilidade-condicional.html#def-prob-condicional-p2",
  "type": "Nota",
  "number": "4.2.3",
  "title": "",
  "body": "Note que só está definido quando . A igualdade pode ser reescrita das seguintes formas: e, caso :  "
},
{
  "id": "example-69",
  "level": "2",
  "url": "section-probabilidade-condicional.html#example-69",
  "type": "Exemplo",
  "number": "4.2.4",
  "title": "",
  "body": " Refaça a 2ª parte do Exemplo , usando a definição .  Suponha que alguém (que você confia) viu o resultado, do lançamento de um dado, e falou que a face virada para cima é um número maior que 3. Qual a probabilidade de que o resultado tenha sido um número par?   Seja o evento , foi dado que ocorreu , então temos e Pela definição de probabilidade condicional, temos    "
},
{
  "id": "theorem-37",
  "level": "2",
  "url": "section-probabilidade-condicional.html#theorem-37",
  "type": "Teorema",
  "number": "4.2.5",
  "title": "",
  "body": " Seja tal que . Então a probabilidade condicional é outra probabilidade sobre o espaço amostral , ou seja, valem as seguintes propriedades:  ;  ;  Se então .       a) Como temos  b)  e  c)     "
},
{
  "id": "example-70",
  "level": "2",
  "url": "section-probabilidade-condicional.html#example-70",
  "type": "Exemplo",
  "number": "4.2.6",
  "title": "",
  "body": " Em um experimento aleatório é retirado sucessivamente e sem reposição três bolas de uma caixa que comtém 8 bolas pretas e 6 bolas brancas. Qual a probabilidade de que sejam três bolas brancas?   Considere os eventos: Queremos calcular a probabilidade .   Árvore de Probabilidades.    A probabilidade de que a primeira bola seja branca é . Dado que aconteceu , a probabilidade de que a segunda bola seja branca é . Dado que aconteceram e , a probabilidade de que a terceira bola seja branca é . Portanto Na solução deste problema, usamos a    "
},
{
  "id": "prop-produto-probabilidade",
  "level": "2",
  "url": "section-probabilidade-condicional.html#prop-produto-probabilidade",
  "type": "Proposição",
  "number": "4.2.8",
  "title": "",
  "body": " (Regra do Produto de Probabilidades)  Sejam eventos de um espaço amostral e uma probabilidade em . Se então    Para dois conjuntos a fórmula é verdadeira, pois coincide com a definição de probabilidade condicional. Vamos usar o Princípio de Indução para mostrar que o resultado é verdadeiro. Suponha o resultado válido para eventos.  Defina , queremos a probabilidade . Pela definição de probabilidade condicional, temos ou seja,  Pela hipótese de indução, temos Substituindo a igualdade dada pela hipótese de indução em , chegamos no resultado:    "
},
{
  "id": "example-71",
  "level": "2",
  "url": "section-probabilidade-condicional.html#example-71",
  "type": "Exemplo",
  "number": "4.2.9",
  "title": "",
  "body": " Sabe-se que das importações, por pessoas físicas, para o Brasil vem da China. A probabilidade de uma importação chegar na residência do comprador é de se for uma compra da China e caso contrário. Se uma importação for feita agora.   Qual a probabilidade de que a compra ser da China e de chegar na residência do comprador?  Qual a probabilidade de que a compra chegue na residência do comprador?  Uma importação foi feita e o produto se perdeu. Qual a probabilidade de ter sido da china?     item a)  Usaremos as notações: Logo,   item b)  Para uma importação chegar na residência do comprador, ela pode ter sido feita da china ou do complementar da china. Usaremos para dizer que não chegou na residência e para dizer que não é da china. A probabilidade de que a importação chegue é dada por Usando a , temos Nesta solução, usamos o (Teorema da Probabilidade Total).  item c)  Vamos calcular a probabilidade de que a importação seja da China e tenha se perdido, vamos dividir esse valor pela probabilidade de que a importação tenha se perdido.  A probabilidade de que a importação se perdeu e foi da china é de A probabilidade de que a importação tenha se perdido é dada por Portanto a probabilidade de que tenha sido da china a importação que se perdeu é Observe que o cálculo usado foi o seguinte: Este é o Teorema de Bayes.    item b)  Para organizar melhor as ideias, desenhamos uma árvore com todas as possibilidades.   Árvore de Probabilidades.    Observa-se mais facilmente que a probabilidade da importação chegar na residência é dada por   item c)  Usando a árvore de probabilidades, vamos calcular a probabilidade de que a importação seja da China e tenha se perdido, vamos dividir esse valor pela probabilidade de que a importação tenha se perdido.    "
},
{
  "id": "teo-probabilidade-total",
  "level": "2",
  "url": "section-probabilidade-condicional.html#teo-probabilidade-total",
  "type": "Teorema",
  "number": "4.2.11",
  "title": "",
  "body": "(Teorema da Probabilidade Total)  Sejam e é um eventos tais que e então    Como vale Temos com a união disjunta, portanto    "
},
{
  "id": "teo-bayes",
  "level": "2",
  "url": "section-probabilidade-condicional.html#teo-bayes",
  "type": "Teorema",
  "number": "4.2.12",
  "title": "",
  "body": "(Teorema de Bayes)  Sejam e é um eventos tais que e então    Aplicando a definição de probabilidade condicional, temos Usando o e substituindo em , obtemos    "
},
{
  "id": "example-72",
  "level": "2",
  "url": "section-probabilidade-condicional.html#example-72",
  "type": "Exemplo",
  "number": "4.2.13",
  "title": "",
  "body": " Em um programa de auditório, o convidado deve escolher uma dentre três portas. Atrás de uma das portas há um carro e atrás de cada uma das outras duas há um bode. O convidado ganhará o que estiver atrás da porta; devemos supor neste problema que o convidado prefere ganhar o carro. O procedimento para escolha da porta é o seguinte: o convidado escolhe inicialmente, em caráter provisório, uma das três portas. O apresentador do programa, que sabe o que há atrás de cada porta, abre neste momento uma das outras duas portas, sempre revelando um dos dois bodes. O convidado agora tem a opção de ficar com a primeira porta que ele escolheu ou trocar pela outra porta fechada.  Qual a probabilidade do candidato ganhar o carro, se ele permanecer na primeira porta escolhida?  Qual a probabilidade do candidato ganhar o carro, se ele trocar de porta?           Vamos fixar a seguinte situação. As portas serão chamadas de e . Suponha que o candidato escolheu a porta .  Defina os seguintes eventos:  A, B e C são eventos na qual os prêmios estão atrás das portas e , respectivamente.  O é o evento que o apresentador abre a porta , revelendo um bode.  Queremos calcular e .  Pelas condições do problema, assumiremos que o prêmio é aleatoriamente colocado atrás de uma das portas, ou seja Para usar o Teorema de Bayes, precisaremos de e :  . Se o prêmio estiver na porta , o apresentador poderá abrir a porta ou a porta .  . Se o prêmio estiver na porta , o presentador não poderá abrir a porta .  . Se o prêmio estiver na porta , o presentador poderá abrir somente a porta .      item a) Pelo Teorema de Bayes:    item b) Pelo Teorema de Bayes:     Solução apresentada por Marilyn Vos Savant, colunista da revista Parade.  Marylin fez uso de uma tabela para mostrar que o benefício de mudar de porta é facilmente mostrado jogando 6 jogos que contém todas as probabilidades:  item a)   Caso o candidato não troque de porta.     Porta 1  Porta 2  Porta 3  Resultado    Jogo 1  Carro  Bode  Bode  O candidato não troca e ganha    Jogo 2  Bode  Carro  Bode  O candidato não troca e perde    Jogo 3  Bode  Bode  Carro  O candidato não troca e perde      item b)   Caso o candidato troque de porta.     Porta 1  Porta 2  Porta 3  Resultado    Jogo 1  Carro  Bode  Bode  O candidato troca e perde    Jogo 2  Bode  Carro  Bode  O candidato troca e ganha    Jogo 3  Bode  Bode  Carro  O candidato troca e ganha       "
},
{
  "id": "definition-29",
  "level": "2",
  "url": "section-probabilidade-condicional.html#definition-29",
  "type": "Definição",
  "number": "4.2.16",
  "title": "",
  "body": " Sejam e eventos. e são independentes se,   Da , temos   "
},
{
  "id": "example-73",
  "level": "2",
  "url": "section-probabilidade-condicional.html#example-73",
  "type": "Exemplo",
  "number": "4.2.17",
  "title": "",
  "body": " Em um experimento aleatório é retirado sucessivamente, com reposição, duas bolas de uma caixa que comtém 8 bolas pretas e 6 bolas brancas. Qual a probabilidade de que sejam duas bolas brancas?   Considere os eventos: Observe que os eventos são independentes, portanto a probabilidade é    "
},
{
  "id": "definition-30",
  "level": "2",
  "url": "section-probabilidade-condicional.html#definition-30",
  "type": "Definição",
  "number": "4.2.18",
  "title": "",
  "body": " Sejam eventos. são independentes se, para todo , e para quaisquer , tem-se  Consequentemente,    "
},
{
  "id": "example-74",
  "level": "2",
  "url": "section-probabilidade-condicional.html#example-74",
  "type": "Exemplo",
  "number": "4.2.19",
  "title": "",
  "body": " Em um experimento aleatório é retirado sucessivamente, com reposição, três bolas de uma caixa que comtém 8 bolas pretas e 6 bolas brancas. Qual a probabilidade de que sejam três bolas brancas?   Considere os eventos: Observe que os eventos são independentes, portanto a probabilidade é    "
},
{
  "id": "example-75",
  "level": "2",
  "url": "section-probabilidade-condicional.html#example-75",
  "type": "Exemplo",
  "number": "4.2.20",
  "title": "",
  "body": " Um dado (não viciado) é lançado 5 vezes. Qual é a probabilidade de obtermos os resultados , exatamente nessa ordem?   Seja o evento: saiu o valor da posição da lista , no -ésimo lançamento, .  Como os eventos são independentes, temos    "
},
{
  "id": "exercise-128",
  "level": "2",
  "url": "section-probabilidade-condicional.html#exercise-128",
  "type": "Exercício",
  "number": "4.2.2.1",
  "title": "",
  "body": " Dois dados e são lançados e os resultados nas faces de cima anotados.  Qual a probabilidade da soma dos pontos ser 6, se a face observada em foi 2?  Qual a probabilidade de ter saı́do 2 em , se a soma dos pontos foi 6?  Qual a probablidade da soma dos pontos ser menor do que 7, sabendo que o número 2 saiu pelo menos uma vez?  Qual a probabilidade da soma dos pontos ser menor do que ou igual a 6, se o maior dos números obtidos é menor do que 5?  Qual a probabilidade do maior dos números obtidos ser menor do que 5, sabendo que a soma dos pontos foi menor do que ou igual a 6?     a) , b) , c) , d) , e) .  "
},
{
  "id": "exercise-129",
  "level": "2",
  "url": "section-probabilidade-condicional.html#exercise-129",
  "type": "Exercício",
  "number": "4.2.2.2",
  "title": "",
  "body": " Três caixas I, II e III contém respectivamente 1 bola branca e 2 pretas; 2 brancas e 1 preta; 3 brancas e 2 pretas. Uma caixa é escolhida ao acaso e dela é retirada uma bola. Determine a probabilidade:   da bola retirada ser branca, sabendo que a caixa escolhida foi a I;  da caixa escolhida ter sido a I e a bola retirada ser branca.    a) , b) .  "
},
{
  "id": "exercise-130",
  "level": "2",
  "url": "section-probabilidade-condicional.html#exercise-130",
  "type": "Exercício",
  "number": "4.2.2.3",
  "title": "",
  "body": " Uma caixa contém 30 bolas pretas, 20 brancas e 10 vermelhas. Três bolas são retiradas da caixa, uma após a outra, sem reposição. Qual a pobabilidade da terceira bola retirada ser preta?    "
},
{
  "id": "exercise-131",
  "level": "2",
  "url": "section-probabilidade-condicional.html#exercise-131",
  "type": "Exercício",
  "number": "4.2.2.4",
  "title": "",
  "body": " (ITA 2008) Considere uma população de igual número de homens e mulheres, em que sejam daltônicos dos homens e das mulheres. Indique a probabilidade de que seja mulher uma pessoa daltônica selecionada ao acaso nessa população.  a) b) c) d) e)   a)  "
},
{
  "id": "exercise-132",
  "level": "2",
  "url": "section-probabilidade-condicional.html#exercise-132",
  "type": "Exercício",
  "number": "4.2.2.5",
  "title": "",
  "body": " (ITA 2009) Uma amostra de estrangeiros, em que 18% são proficientes em inglês, realizou um exame para classificar a sua proficiência nesta língua. Dos estrangeiros que são proficientes em inglês, 75% foram classificados como proficientes. Entre os não proficientes em inglês, 7% foram classificados como proficientes. Um estrangeiro desta amostra, escolhido ao acaso, foi classificado como proficiente em inglês. A probabilidade deste estrangeiro ser efetivamente proficiente nesta língua é de aproximadamente  a) b) c) d) e)   b)   Dos de estrangeiros proficientes em inglês, foram classificados como proficientes: Dos de estrangeiros não-proficientes em inglês, foram classificados como proficientes: A probabilidade do estrangeiro ser efetivamente proficiente em inglês é   "
},
{
  "id": "exercise-133",
  "level": "2",
  "url": "section-probabilidade-condicional.html#exercise-133",
  "type": "Exercício",
  "number": "4.2.2.6",
  "title": "",
  "body": " (ITA 2008) Em um espaço amostral com uma probabilidade , são dados os eventos e tais que: , com e independentes, , e sabe-se que . Calcule as probabilidades condicionais e .      . Precisamos calcular e .  Para calcular , usaremos a igualdade . Logo Portanto .  Para calcular , usaremos a igualdade . Logo Resta agora calcular .  Pelo item d) do temos   Logo, E   Substituindo os valores obtidos   "
},
{
  "id": "exercise-134",
  "level": "2",
  "url": "section-probabilidade-condicional.html#exercise-134",
  "type": "Exercício",
  "number": "4.2.2.7",
  "title": "",
  "body": "(ESAF 2004\/MPU – Técnico Administrativo) Luís é prisioneiro do temível imperador Ivan. Ivan coloca Luís à frente de três portas e lhe diz: Atrás de uma destas portas encontra-se uma barra de ouro, atrás de cada uma das outras, um tigre feroz. Eu sei onde cada um deles está. Podes escolher uma porta qualquer. Feita tua escolha, abrirei uma das portas, entre as que não escolheste, atrás da qual sei que se encontra um dos tigres, para que tu mesmo vejas uma das feras. Aí, se quiseres, poderás mudar a tua escolha.  Luís, então, escolhe uma porta e o imperador abre uma das portas não-escolhidas por Luís e lhe mostra um tigre. Luís, após ver a fera, e aproveitando-se do que dissera o imperador, muda sua escolha e diz: Temível imperador, não quero mais a porta que escolhi; quero, entre as duas portas que eu não havia escolhido, aquela que não abriste.  A probabilidade de que, agora, nessa nova escolha, Luís tenha escolhido a porta que conduz à barra de ouro é igual a a) b) c) d) e)  c)  "
},
{
  "id": "exercise-135",
  "level": "2",
  "url": "section-probabilidade-condicional.html#exercise-135",
  "type": "Exercício",
  "number": "4.2.2.8",
  "title": "",
  "body": " (ITA 2011) Numa caixa com moedas, apresentam duas caras, são normais (cara e coroa) e as demais apresentam duas coroas. Uma moeda é retirada ao acaso e a face observada mostra uma coroa. A probabilidade de a outra face desta moeda também apresentar uma coroa é  a) b) c) d) e)   . Questão anulada, nenhum item estava correto.   Temos 10 moedas comuns, com uma cara e uma coroa, 25 moedas com duas coroas e 5 moedas com duas caras. Desenhando a árvore de probabilidades:   Árvore de Probabilidades.    Podemos calcular a probabilidade da seguinte maneira:   "
},
{
  "id": "section-distribuicao-binomial",
  "level": "1",
  "url": "section-distribuicao-binomial.html",
  "type": "Seção",
  "number": "4.3",
  "title": "Distribuição Binomial",
  "body": " Distribuição Binomial    Distribuição Binomial   Jogando uma moeda não viciada 15 vezes. Qual é a probabilidade de obtermos exatamente 7 caras?   Os eventos são independentes e a probabilidade de obter cara no lançamento da moeda é .  Queremos achar a probabilidade de obtermos 7 caras em 15 lançamentos. Vamos, inicialmente, fixar que queremos os 7 primeiros resultados iguais a cara, assim estamos impondo que os 8 resultados seguintes serão coroa. Desta forma, a probabilidade de que os 7 primeiros resultados sejam cara e de que os 8 resultados seguintes sejam coroa é  mas a pergunta do problema não foi esta, pois a ordem em que apareceram as caras e as coroas não importa.  Observe que o número de formas de ordenar 7 caras e 8 coroas coincide com o número formas de escolher 7 lugares, para colocar as caras, dentre 15 disponíveis, e colocar as coroas nos lugares que sobraram. Isto pode ser feito de maneiras.  Portanto a resposta para nosso problema é      Considere um experimento com apenas dois resultados possíveis, chamados de sucesso e fracasso . Denotaremos por a probabilidade de sucesso.  A probabilidade de ocorrerem exatamente sucessos em uma sequência de provas independentes, na qual a probabilidade de sucesso em cada etapa é , é igual a    A probabilidade de nessas provas obtermos sucessos, e consequentemente, fracassos em uma ordem fixada é pois as provas são independentes. É claro que em outra ordem, a probabilidade seria a mesma, pois apenas a ordem dos fatores se altera. Como o número de formas de alterar esta ordem é , a probabilidade de obtermos sucessos, em provas é       Um dodecaedro (regular, com peso uniforme, ou seja, não viciado) tem 3 faces verdes e 4 faces vermelhas e 5 faces azuis.   Qual é a probabilidade de em 8 lançamentos desse dodecaedro, obtermos 3 vezes a cor verde?  Qual é a probabilidade de em 8 lançamentos desse dodecaedro, obtermos 3 vezes a cor azul?    item a) Vamos considerar os eventos:  S: saiu uma face verde  F: não saiu uma face verde  Pelo a probabilidade é   item b) Vamos considerar os eventos:  S: saiu uma face azul  F: não saiu uma face azul  Pelo a probabilidade é       Exercícios    Uma caixa contém 9 bolas brancas, 6 pretas e 5 vermelhas. Retiram-se, sucessivamente e com reposição, 4 bolas dessa caixa. Determine a probabilidade:  das 4 bolas retiradas serem vermelhas;  de somente 2 bolas retiradas serem vermelhas;  de pelo menos 2 bolas serem vermelhas.     a) , b) , c) .    (ITA 2009) Um determinado concurso é realizado em duas etapas. Ao longo dos últimos anos, 20% dos candidatos do concurso têm conseguido na primeira etapa nota superior ou igual à nota mínima necessária para poder participar da segunda etapa. Se tomarmos 6 candidatos dentre os muitos inscritos, qual é a probabilidade de no mínimo 4 deles conseguirem nota para participar da segunda etapa?   .   Temos três casos que pelo menos 4 candidatos, dentre 6, conseguem a nota mínima:   Aplicando o temos que a probabilidade pedida é dada por:       (ITA 2010) Um palco possui refletores de iluminação. Num certo instante de um espetáculo moderno os refletores são acionados aleatoriamente de modo que, para cada um dos refletores, seja de a probabilidade de ser aceso. Então, a probabilidade de que, este instante, ou refletores sejam acesos simultaneamente, é igual a  a) b) c) d) e)    a)   Aplicando o temos     "
},
{
  "id": "example-76",
  "level": "2",
  "url": "section-distribuicao-binomial.html#example-76",
  "type": "Exemplo",
  "number": "4.3.1",
  "title": "",
  "body": " Jogando uma moeda não viciada 15 vezes. Qual é a probabilidade de obtermos exatamente 7 caras?   Os eventos são independentes e a probabilidade de obter cara no lançamento da moeda é .  Queremos achar a probabilidade de obtermos 7 caras em 15 lançamentos. Vamos, inicialmente, fixar que queremos os 7 primeiros resultados iguais a cara, assim estamos impondo que os 8 resultados seguintes serão coroa. Desta forma, a probabilidade de que os 7 primeiros resultados sejam cara e de que os 8 resultados seguintes sejam coroa é  mas a pergunta do problema não foi esta, pois a ordem em que apareceram as caras e as coroas não importa.  Observe que o número de formas de ordenar 7 caras e 8 coroas coincide com o número formas de escolher 7 lugares, para colocar as caras, dentre 15 disponíveis, e colocar as coroas nos lugares que sobraram. Isto pode ser feito de maneiras.  Portanto a resposta para nosso problema é    "
},
{
  "id": "teo-dist-binomial",
  "level": "2",
  "url": "section-distribuicao-binomial.html#teo-dist-binomial",
  "type": "Teorema",
  "number": "4.3.2",
  "title": "",
  "body": " Considere um experimento com apenas dois resultados possíveis, chamados de sucesso e fracasso . Denotaremos por a probabilidade de sucesso.  A probabilidade de ocorrerem exatamente sucessos em uma sequência de provas independentes, na qual a probabilidade de sucesso em cada etapa é , é igual a    A probabilidade de nessas provas obtermos sucessos, e consequentemente, fracassos em uma ordem fixada é pois as provas são independentes. É claro que em outra ordem, a probabilidade seria a mesma, pois apenas a ordem dos fatores se altera. Como o número de formas de alterar esta ordem é , a probabilidade de obtermos sucessos, em provas é    "
},
{
  "id": "example-77",
  "level": "2",
  "url": "section-distribuicao-binomial.html#example-77",
  "type": "Exemplo",
  "number": "4.3.3",
  "title": "",
  "body": " Um dodecaedro (regular, com peso uniforme, ou seja, não viciado) tem 3 faces verdes e 4 faces vermelhas e 5 faces azuis.   Qual é a probabilidade de em 8 lançamentos desse dodecaedro, obtermos 3 vezes a cor verde?  Qual é a probabilidade de em 8 lançamentos desse dodecaedro, obtermos 3 vezes a cor azul?    item a) Vamos considerar os eventos:  S: saiu uma face verde  F: não saiu uma face verde  Pelo a probabilidade é   item b) Vamos considerar os eventos:  S: saiu uma face azul  F: não saiu uma face azul  Pelo a probabilidade é    "
},
{
  "id": "exercise-136",
  "level": "2",
  "url": "section-distribuicao-binomial.html#exercise-136",
  "type": "Exercício",
  "number": "4.3.2.1",
  "title": "",
  "body": " Uma caixa contém 9 bolas brancas, 6 pretas e 5 vermelhas. Retiram-se, sucessivamente e com reposição, 4 bolas dessa caixa. Determine a probabilidade:  das 4 bolas retiradas serem vermelhas;  de somente 2 bolas retiradas serem vermelhas;  de pelo menos 2 bolas serem vermelhas.     a) , b) , c) .  "
},
{
  "id": "exercise-137",
  "level": "2",
  "url": "section-distribuicao-binomial.html#exercise-137",
  "type": "Exercício",
  "number": "4.3.2.2",
  "title": "",
  "body": " (ITA 2009) Um determinado concurso é realizado em duas etapas. Ao longo dos últimos anos, 20% dos candidatos do concurso têm conseguido na primeira etapa nota superior ou igual à nota mínima necessária para poder participar da segunda etapa. Se tomarmos 6 candidatos dentre os muitos inscritos, qual é a probabilidade de no mínimo 4 deles conseguirem nota para participar da segunda etapa?   .   Temos três casos que pelo menos 4 candidatos, dentre 6, conseguem a nota mínima:   Aplicando o temos que a probabilidade pedida é dada por:     "
},
{
  "id": "exercise-138",
  "level": "2",
  "url": "section-distribuicao-binomial.html#exercise-138",
  "type": "Exercício",
  "number": "4.3.2.3",
  "title": "",
  "body": " (ITA 2010) Um palco possui refletores de iluminação. Num certo instante de um espetáculo moderno os refletores são acionados aleatoriamente de modo que, para cada um dos refletores, seja de a probabilidade de ser aceso. Então, a probabilidade de que, este instante, ou refletores sejam acesos simultaneamente, é igual a  a) b) c) d) e)    a)   Aplicando o temos   "
},
{
  "id": "section-espaco-infinito",
  "level": "1",
  "url": "section-espaco-infinito.html",
  "type": "Seção",
  "number": "4.4",
  "title": "Espaço Amostral Infinito",
  "body": " Espaço Amostral Infinito  Até este momento, somente consideramos situações em que o espaço amostral do experimento aleatório de interesse fosse finito. Mas o ferramental desenvolvido pode ser aplicado também a situações em que o espaço amostral é infinito e, mesmo, não enumerável. O exemplo a seguir é um interessante exemplo de probabilidade geométrica. Quando selecionamos um ponto ao acaso em uma parte do plano é razoável supor que a probabilidade do ponto selecionado permanecer a uma certa região seja proporcional à área dessa região.   Selecionam-se ao acaso dois pontos em um segmento de tamanho 1, dividindo-o em três partes. Determine a probabilidade de que se possa formar um triângulo com essas três partes.   Sejam e os pontos escolhidos, .   Escolhendo dois pontos em um segmento.    Escolher e pertencentes a , com , equivale a escolher um ponto no triângulo da figura abaixo.   Como escolher os pontos e .    Para que exista um triângulo de lados e devemos ter e e , o que dá e e . Em suma, o triângulo existirá se, e somente se, o ponto for selecionado na parte laranja do triângulo .  Sendo o evento \"as três partes formam um triângulo\" e sendo o evento certo, temos que é proporcional a área da parte sombreada e é proporcional à área de . Logo,      A e B lançam sucessivamente um par de dados até que um deles obtenha soma de pontos 7, caso em que a disputa termina e o vencedor é o jogador que obteve soma 7. Se A é o primeiro a jogal, qual é a probabilidade de A ser o vencedor?   A probabilidade de obter 7 é e a de não ser soma 7 é   Para ganhar, ou ganha na primeira mão, ou na segunda, ou na terceira, etc. A probabilidade de ganhar na primeira mão é . Para ganhar na segunda mão, não pode obter soma 7 na primeira mão e não pode obter soma 7 na primeira mão e deve obter soma 7 na segunda mão, o que ocorre com probabilidade   Para ganhar na terceira mão, não pode obter soma 7 nas duas primeiras mãos e não pode obter soma 7 nas duas primeiras mãos e deve obter soma 7 na terceira mão, o que ocorre com probabilidade   Portanto, a probabilidade de ganhar é     Uma solução mais elegante pode ser obtida ignorando as mãos sem vencedores. A probabilidade de ganhar uma mão é de ; de ganhar uma mão é de pois, para ganhar, não pode obter soma 7 e deve obter soma 7; a de ninguem ganhar é de pois, para que ninguém ganhe, não pode obter soma 7 e não pode obter soma 7.  A probabilidade de ganhar é a probabilidade de ganhar em uma mão em que houve vencedor, isto é     "
},
{
  "id": "example-78",
  "level": "2",
  "url": "section-espaco-infinito.html#example-78",
  "type": "Exemplo",
  "number": "4.4.1",
  "title": "",
  "body": " Selecionam-se ao acaso dois pontos em um segmento de tamanho 1, dividindo-o em três partes. Determine a probabilidade de que se possa formar um triângulo com essas três partes.   Sejam e os pontos escolhidos, .   Escolhendo dois pontos em um segmento.    Escolher e pertencentes a , com , equivale a escolher um ponto no triângulo da figura abaixo.   Como escolher os pontos e .    Para que exista um triângulo de lados e devemos ter e e , o que dá e e . Em suma, o triângulo existirá se, e somente se, o ponto for selecionado na parte laranja do triângulo .  Sendo o evento \"as três partes formam um triângulo\" e sendo o evento certo, temos que é proporcional a área da parte sombreada e é proporcional à área de . Logo,    "
},
{
  "id": "example-79",
  "level": "2",
  "url": "section-espaco-infinito.html#example-79",
  "type": "Exemplo",
  "number": "4.4.4",
  "title": "",
  "body": " A e B lançam sucessivamente um par de dados até que um deles obtenha soma de pontos 7, caso em que a disputa termina e o vencedor é o jogador que obteve soma 7. Se A é o primeiro a jogal, qual é a probabilidade de A ser o vencedor?   A probabilidade de obter 7 é e a de não ser soma 7 é   Para ganhar, ou ganha na primeira mão, ou na segunda, ou na terceira, etc. A probabilidade de ganhar na primeira mão é . Para ganhar na segunda mão, não pode obter soma 7 na primeira mão e não pode obter soma 7 na primeira mão e deve obter soma 7 na segunda mão, o que ocorre com probabilidade   Para ganhar na terceira mão, não pode obter soma 7 nas duas primeiras mãos e não pode obter soma 7 nas duas primeiras mãos e deve obter soma 7 na terceira mão, o que ocorre com probabilidade   Portanto, a probabilidade de ganhar é     Uma solução mais elegante pode ser obtida ignorando as mãos sem vencedores. A probabilidade de ganhar uma mão é de ; de ganhar uma mão é de pois, para ganhar, não pode obter soma 7 e deve obter soma 7; a de ninguem ganhar é de pois, para que ninguém ganhe, não pode obter soma 7 e não pode obter soma 7.  A probabilidade de ganhar é a probabilidade de ganhar em uma mão em que houve vencedor, isto é    "
},
{
  "id": "calculadora",
  "level": "1",
  "url": "calculadora.html",
  "type": "Capítulo",
  "number": "5",
  "title": "Calculadora",
  "body": " Calculadora  Ao longo do texto foram definidas funções de contagem no SageMath. Logo abaixo, temos uma tabela com estas funções e uma calculadora com todas essas funções disponíveis.   Funções da calculadora.    Função  Definição  Teorema  Tecnologia    P(n)       C(n,p)       PC(n)       PR(n,r1,...,rk)       CR(n,p)       D(n)       DR(n1,...,nk)       K(n,p)       KC(n,p)       gK(n,p,r)       gKC(n,p,r)         Calculadora com as funções definidas ao longo do texto. Observação: use para calcular e para calcular .    "
},
{
  "id": "table-3",
  "level": "2",
  "url": "calculadora.html#table-3",
  "type": "Tabela",
  "number": "5.0.1",
  "title": "Funções da calculadora.",
  "body": " Funções da calculadora.    Função  Definição  Teorema  Tecnologia    P(n)       C(n,p)       PC(n)       PR(n,r1,...,rk)       CR(n,p)       D(n)       DR(n1,...,nk)       K(n,p)       KC(n,p)       gK(n,p,r)       gKC(n,p,r)       "
},
{
  "id": "technology-46",
  "level": "2",
  "url": "calculadora.html#technology-46",
  "type": "Tecnologia",
  "number": "5.0.2",
  "title": "",
  "body": " Calculadora com as funções definidas ao longo do texto. Observação: use para calcular e para calcular .   "
},
{
  "id": "referencias",
  "level": "1",
  "url": "referencias.html",
  "type": "Referêcias",
  "number": "6",
  "title": "Referências Bibliográficas",
  "body": "    Referências Bibliográficas   Livros    Halmos, P. R., Teoria Ingénua dos Conjuntos, Ciência Moderna , 1ª ed.    Morgado, A. C. O., et al, Análise Combinatória e Probabilidade , SBM. 6ª ed.    Niven, I., Mathematics of Choice: How to Count Without Counting , The Mathematical Associations of America.    Rosen, K. H., Discrete Mathematics and Its Applications , McGraw-Hill.    Silva, L. D. ; Santos, M. P. ; Machado J. R. N., Elementos de Computação Matemática com SageMath , SBM, 1ª ed.    Bezerra, N., Análise Combinatória e Probabilidade , editAedi.    Morgado, A. C. ; Carvalho, P. C. P., Matemática Discreta , SBM: coleção PROFMAT, 2ª ed.    Lovász, L. ; Pelikán, J. ; Vesztergombi, K., Discrete Mathematics: Elementary and Beyond , Springer.    Holton, D., A Second Step to Mathematical Olympiad Problems , Vol. 7, World Scientific.    Koshy, T., Catalan Numbers With Applications. , Oxford University Press, 2008.    Roman, S., An Introduction to Catalan Numbers. , Birkhäuser, 2010.    Stanley, R.P., Catalan numbers. , Cambridge University Press, 2015.    Plínio, J., et all, Problemas Resolvidos de Combinatória. , Ciência Moderna, 2007.  Artigos    Machado, J. R. N., Caos, Repetições e Tabuleiros , Jornal de Matemática Olímpica UFRPE, 2021.    Machado, J. R. N., O Princípio da Casa dos Pombos , Jornal de Matemática Olímpica UFRPE, 2018.    Guedes, A. G., Machado, J. R. N., Princípios Combinatórios: Bijeção, Reflexão e os Números de Catalan , Professor de Matemática Online, 2023.    GOULDEN, I. P., SERRANO, L. G., Maintaining the spirit of the reflection principle when the boundary has arbitrary integer slope. , Journal of Combinatorial Theory, Series A, 104(2), 317-326, 2003.    LOEHR, N. A., Note on André's reflection principle , Discrete mathematics, 280(1-3), 233-236, 2004.  Dissertações    Santana Neto, L. M., Análise Combinatória: Lemas de Kaplansky, Permutações Caóticas, O Princípio da Casa Dos Pombos e suas Aplicações na Matemática do Ensino Médio , Dissertação do ProfMat.    Barbosa Junior C. M., A Porta dos Desesperados: Uma Proposta Didática para a Aprendizagem de Probabilidade no Ensino Médio , Monografia Lic. Mat da UFRPE.   "
},
{
  "id": "p-1083",
  "level": "2",
  "url": "referencias.html#p-1083",
  "type": "Parágrafo (with a defined term)",
  "number": "",
  "title": "",
  "body": "Livros "
},
{
  "id": "p-1084",
  "level": "2",
  "url": "referencias.html#p-1084",
  "type": "Parágrafo (with a defined term)",
  "number": "",
  "title": "",
  "body": "Artigos "
},
{
  "id": "p-1085",
  "level": "2",
  "url": "referencias.html#p-1085",
  "type": "Parágrafo (with a defined term)",
  "number": "",
  "title": "",
  "body": "Dissertações "
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
