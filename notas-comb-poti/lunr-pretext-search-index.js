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
  "id": "section-1",
  "level": "1",
  "url": "section-1.html",
  "type": "Seção",
  "number": "1.1",
  "title": "Contagem I",
  "body": " Contagem I  Curso de Combinatória - Nível 2     Prof. Bruno Holanda      Introdução  De quantos modos podemos nos vestir? Quantos números menores que 1000 possuem todos os algarismos pares?  Contar coisas é algo tão antigo quanto a própria humanidade. Porém, ao longo do tempo as ideias evoluíram e novas técnicas surgiram. Existem várias formas de contar coisas, a mais simples delas é a contagem caso a caso. Este é o processo que mais usamos em nosso cotidiano. Mas, é uma forma primitiva de resolver os problemas.  Vamos aprender uma técnica mais prática pensando no seguinte exemplo:    Exemplos Resolvidos    Uma porta só é aberta quando usamos simultaneamente a chave e o cartão corretos. Se você possui duas chaves e três cartões, quantos testes devemos fazer para garantir que a porta irá abrir?    Podemos montar um diagrama para auxiliar na solução do problema. No diagrama, podemos ver todas as combinações possíveis de uma chave com um cartão. Assim, a solução é visual e igual a 6.     Por outro lado, poderíamos ter resolvido o problema da seguinte forma: Note que para cada escolha de chave existem três maneiras para escolher o cartão. Como temos duas chaves, o total de combinações é . Nesse caso, seriam necessários 6 testes para achar a combinação correta.  Assim, se houvesse 30 chaves e 5 cartões não seria necessário fazer um diagrama para contar as combinações uma por uma, o resultado seria simplesmente . O método que acabamos de usar é conhecido como princípio multiplicativo. Nos próximos problemas vamos usá-lo de uma forma mais geral.      Teddy possui 5 blusas, 3 calções e 2 pares de sapatos. De quantas maneiras diferentes ele pode se vestir?    Vamos primeiro contar o número de maneiras que Teddy pode escolher a blusa e a calça. Bem, para cada calça que Teddy escolhe, ele tem ainda cinco maneiras de escolher a blusa. Como ele possui três calças, o número total de modos de escolher o par (calça e blusa) é . Agora, para cada maneira de escolher esse par, ele ainda tem duas maneiras de escolher os sapatos. Daí, é fácil concluir que Teddy pode se vestir de maneiras diferentes.      De quantos modos podemos pintar um tabuleiro usando apenas três cores, sem pintar casas vizinhas da mesma cor?    Podemos pintar a primeira casa de três maneiras diferentes, a segunda de duas maneiras (não podemos usar a cor da primeira casa), a terceira casa pode ser pintada de duas maneiras (não podemos usar a cor da segunda casa), o mesmo ocorre com a quarta casa. Assim, o total de maneiras de pintar o tabuleiro é .    Suponha que Carlos, Felipe, Marina e Ana estejam em uma fila. Se trocarmos a posição de alguns deles dizemos que fizemos uma permutação. A pergunta é: Quantas permutações podemos ter usando quatro pessoas?  Antes de resolver o problema vamos introduzir uma notação muito usada em problemas de contagem por simplificar algumas contas.   Notação Fatorial   Dado um número natural , seja (leia fatorial) o produto .    Observe que o conceito de fatorial está fortemente ligado à noção de permutação. Para fixar essa notação, resolva alguns exercícios simples:     Calcule , e  Calcule e  Resolva a equação  Prove que:            De quantas maneiras podemos formar uma fila com Carlos, Felipe, Marina e Ana?    Podemos escolher o primeiro da fila de quatro maneiras, a segunda de três, a terceira de duas e a última de apenas uma maneira (a pessoa que sobrar). Desse modo temos permutações.      (OBM 2005) Num relógio digital, as horas são exibidas por meio de quatro algarismos. O relógio varia das 00:00 às 23:00 horas. Quantas vezes por dia os quatro algarismos mostrados são todos pares?    Neste problema existe uma restrição nos dígitos que marcam as horas e no primeiro dígito que marca os minutos.  Dessa forma, em vez de pensar em cada dígito separadamente, vamos pensar em três blocos de algarismos. O primeiro, que é formado pelos dois primeiros algarismos, pode assumir 7 valores diferentes (00, 02, 04, 06, 08, 20 ou 22); o segundo é formado apenas pelo terceiro dígito e pode assumir 3 valores (0, 2 ou 4); e o último dígito pode assumir 5 valores (0, 2, 4, 6 ou 8). Logo, o total de vezes em que todos aparecem pares é .    Agora vamos nos preocupar com alguns problemas mais \"clássicos\". Apesar de serem problemas bem conhecidos por todos, vamos abordá-los aqui, pois empregam ideias que são constantemente usadas em vários problemas.   Quantidade de Subconjuntos   Quantos subconjuntos possui o conjunto ?    A cada subconjunto de vamos associar uma sequência de 10 dígitos que podem ser 0 ou 1. Essa associação será dada através da seguinte regra: O primeiro termo dessa sequência será 1 se o elemento 1 estiver no subconjunto e 0 caso contrário; O segundo termo dessa sequência será 1 se o elemento 2 estiver no subconjunto e 0 caso contrário; O terceiro termo dessa sequência será 1 se o elemento 3 estiver no subconjunto e 0 caso contrário; e assim por diante.  Por exemplo, o subconjunto está associado à sequência 1100100101, o subconjunto está associado à sequência 0110100100, enquanto o subconjunto vazio é representado por 0000000000. Note que a quantidade de subconjuntos de é igual à quantidade destas sequências. Por outro lado, podemos escolher cada dígito de duas formas e, consequentemente, temos sequências (que é a mesma quantidade de subconjuntos).     Quantidade de Divisores   Seja um número natural na sua forma fatorada. Então, possui exatamente divisores inteiros positivos. Incluindo 1 e .    Note que cada divisor positivo de é da forma onde cada expoente é um número entre e (inclusive). Dessa forma, temos maneiras de escolher o expoente de ; maneiras de escolher o expoente de ; e assim por diante. Logo, segue o resultado do princípio multiplicativo.      Problemas Propostos    Cada casa de um tabuleiro pode ser pintado de verde ou amarelo. De quantas maneiras podemos pintar o tabuleiro todo?   O tabuleiro tem 4 casas ao todo e cada uma pode ser pintada de duas maneiras. O número de maneiras de pintar é . (Obs.: Se considerarmos as rotações do tabuleiro a resposta é 4).    (OBM 2004) De quantos modos diferentes podemos pintar (usando apenas uma cor) as casas de um tabuleiro de modo que cada linha e cada coluna possua exatamente uma casa pintada?   Para a primeira linha temos 4 casas disponíveis, na segunda linha só temos 3 já que não podemos ocupar a mesma coluna da casa pintada anteriormente. Para a 3ª linha temos 2 possibilidades e para a 4ª linha só há 1 possibilidade. Logo, a resposta é .    Quantos números naturais de três algarismos distintos existem?   Seja esse número. Então pode ser 1, 2, ..., 9 e , podem ser 0, 1, ..., 9. Inicialmente escolhendo temos 9 opções. Para também temos 9 já que ele não pode ser igual a mas pode ser 0. Para temos 8 possibilidades. A resposta é .    De quantos modos podemos pôr três torres de três cores diferentes em um tabuleiro de modo que nenhuma delas ataque a outra?   Temos 64 maneiras de escolher a posição da primeira torre, 49 para a segunda e 36 para a terceira. Total de maneiras é .    Uma embarcação deve ser tripulada por oito homens, dois dos quais só remam do lado direito e um apenas do lado esquerdo. Determine de quantos modos esta tripulação pode ser formada, se de cada lado deve haver quatro homens. Obs: A ordem dos homens deve ser considerada.   Do lado direito já estão definidos 2 homens e do lado esquerdo já está definido 1 homem. Sobraram 5 homens. Desses, devemos escolher 2 para o lado direito e o resto vai para o esquerdo. Temos maneiras de escolher esses homens sem se preocupar, por enquanto, com a ordem (dividimos por para retirar a ordenação). Uma vez definido quem vai ficar do lado direito e esquerdo, temos maneiras de permutá-los em cada lado. Portanto a resposta é .    De quantas maneiras podemos ir de A até B sobre uma grade sem passar duas vezes pelo mesmo local e sem mover-se para a esquerda? A figura abaixo mostra um caminho possı́vel.      A formiga deve ir para a direita exatamente 5 vezes. Ao escolhermos esses movimentos, o resto do caminho estará bem definido. Como podemos escolher cada um destes cinco movimentos de seis maneiras, o total de caminhos será .    Ache a quantidade de números de quatro dígitos tais que toda sequência de três algarismos consecutivos é formada por elementos distintos.   Considere o número com representação decimal . As únicas sequências de algarismos consecutivos são e . Como não pode ser 0 temos para ele 9 possíveis valores. Para temos também 9 possíveis valores, já que pode ser igual a 0 mas não a . Para temos 8 possíveis valores, pois não pode ser igual a nem a . Agora, não pode ser igual nem a nem a . Portanto tem 8 possíveis valores. A quantidade de números é .    (OBM 2005) Num tabuleiro quadrado , serão colocados três botões idênticos, cada um no centro de uma casa, determinando um triângulo. De quantas maneiras podemos colocar os botões formando um triângulo retângulo com catetos paralelos às bordas do tabuleiro?   Vamos primeiramente escolher o vértice oposto à hipotenusa do triângulo. Temos 25 maneiras de fazer isso. Escolhido o primeiro vértice devemos escolher uma casa na mesma coluna e outra na mesma linha, determinando o triângulo. Podemos fazer isso de maneiras. Logo, o número de triângulos é .    Dizemos que a palavra algoritmo é um anagrama da palavra logaritmo pois é uma permutação das letras de logaritmo. Sabendo disso, calcule a quantidade de anagramas da palavra vetor.   Como não há letras repetidas, o número de anagramas é o número de permutações das letras. Logo, é .    Quantos anagramas da palavra vetor terminam em uma vogal?   Imagine que o anagrama seja da forma , então só podemos ter igual a e ou o. Além disso, todas as letras são diferentes. Temos 2 escolhas para , sobram 4 escolhas para , 3 para , 2 para e fica determinado. A resposta é .    De quantas maneiras é possível colocar em uma prateleira 5 livros de matemática, 3 de física e 2 de biologia, de modo que livros de um mesmo assunto permaneçam juntos?   Considere os três blocos formados por livros da mesma matéria. Podemos organizar esses blocos de maneiras. Agora, em cada bloco ainda podemos permutar seus livros. Assim, o número correto de maneiras é .    Quantos anagramas da palavra vetor possuem as vogais separadas?   A palavra vetor possui anagramas. Usando a mesma ideia do problema 19 (separar em blocos), podemos achar que a quantidade destes anagramas com vogais juntas é . Logo, temos anagramas com as vogais separadas.    De quantas formas podemos colocar 4 bolas verdes e 4 bolas amarelas em um tabuleiro de modo que cada coluna e cada linha possua exatamente uma bola de cada cor?   Existem maneiras de colocar as bolas verdes. Depois disso, escolha uma das bolas verdes. Ponha uma bola amarela na sua linha e uma na sua coluna. Note que, ao fazermos isto, as posições das outras duas bolas amarelas estarão bem definidas. Dessa maneira, temos um total de configurações.    Responda os itens a seguir:   Ache a quantidade de divisores positivos de 3600.  Quantos desses divisores são pares?  Quantos são quadrados perfeitos?     Veja que . Seus divisores são da forma , onde , e . Logo, temos 5 valores para e 3 para e . Portanto, o número de divisores deve ser .  Para que um divisor seja par não pode ocorrer . O número de possibilidades para se reduz a 4. O número de divisores pares é .  Para que um divisor seja quadrado perfeito, , e devem ser pares. Logo, só poderão assumir os valores para e para e . O número de divisores satisfazendo isso é .     (Maio 2006) Um calendário digital exibe a data: dia, mês e ano, com 2 dígitos para o dia, 2 dígitos para o mês e 2 dígitos para o ano. Por exemplo, 01-01-01 corresponde a primeiro de janeiro de 2001 e 25-05-23 corresponde a 25 de maio de 2023. Em frente ao calendário há um espelho. Os dı́gitos do calendário são como os da figura abaixo.   Se 0, 1, 2, 5 e 8 se refletem, respectivamente, em 0, 1, 5, 2 e 8, e os outros dígitos perdem sentido ao se refletirem, determine quantos dias do século, ao se refletirem no espelho, correspondem também a uma data.   Como não podemos usar os dígitos 3, 4, 6, 7, 9 para formar uma data, os únicos valores possíveis para os dois primeiros dígitos (os que marcam o dia) são: 01, 02, 05, 08, 10, 11, 12, 15, 18, 20, 21, 22, 25, 28. Para os dois próximos dígitos temos as seguintes possibilidades: 01, 02, 05, 08, 10, 11, 12. Por outro lado, apenas os pares 01, 10 e 11 também correspondem a um mês quando são refletidos. Para os dois últimos as possibilidades são: 10, 20, 50, 80, 01, 11, 21, 51, 81, 02, 12, 22, 52, 82. Pois seus reflexos devem corresponder a um dia. Logo, o total de datas pedidas é .    (Rússia) Um número natural é dito elegante se pode ser escrito como soma de cubo com um quadrado ( , onde ). Entre 1 e 1000000 existem mais números que são elegantes ou que não são?   A quantidade de números elegantes deve ser menor ou igual ao número de soluções da inequação . Note que e . O número de soluções é menor do que . Logo, a quantidade de números elegantes é menor do que a metade da quantidade de números entre 1 e 1000000. Isto é, existem mais números que não são elegantes.    Quantos são os números de cinco dígitos que são múltiplos de 3 e possuem 6 como um de seus dígitos?      "
},
{
  "id": "example-1",
  "level": "2",
  "url": "section-1.html#example-1",
  "type": "Exemplo",
  "number": "1.1.1",
  "title": "",
  "body": "  Uma porta só é aberta quando usamos simultaneamente a chave e o cartão corretos. Se você possui duas chaves e três cartões, quantos testes devemos fazer para garantir que a porta irá abrir?    Podemos montar um diagrama para auxiliar na solução do problema. No diagrama, podemos ver todas as combinações possíveis de uma chave com um cartão. Assim, a solução é visual e igual a 6.     Por outro lado, poderíamos ter resolvido o problema da seguinte forma: Note que para cada escolha de chave existem três maneiras para escolher o cartão. Como temos duas chaves, o total de combinações é . Nesse caso, seriam necessários 6 testes para achar a combinação correta.  Assim, se houvesse 30 chaves e 5 cartões não seria necessário fazer um diagrama para contar as combinações uma por uma, o resultado seria simplesmente . O método que acabamos de usar é conhecido como princípio multiplicativo. Nos próximos problemas vamos usá-lo de uma forma mais geral.   "
},
{
  "id": "example-2",
  "level": "2",
  "url": "section-1.html#example-2",
  "type": "Exemplo",
  "number": "1.1.3",
  "title": "",
  "body": "  Teddy possui 5 blusas, 3 calções e 2 pares de sapatos. De quantas maneiras diferentes ele pode se vestir?    Vamos primeiro contar o número de maneiras que Teddy pode escolher a blusa e a calça. Bem, para cada calça que Teddy escolhe, ele tem ainda cinco maneiras de escolher a blusa. Como ele possui três calças, o número total de modos de escolher o par (calça e blusa) é . Agora, para cada maneira de escolher esse par, ele ainda tem duas maneiras de escolher os sapatos. Daí, é fácil concluir que Teddy pode se vestir de maneiras diferentes.   "
},
{
  "id": "example-3",
  "level": "2",
  "url": "section-1.html#example-3",
  "type": "Exemplo",
  "number": "1.1.4",
  "title": "",
  "body": "  De quantos modos podemos pintar um tabuleiro usando apenas três cores, sem pintar casas vizinhas da mesma cor?    Podemos pintar a primeira casa de três maneiras diferentes, a segunda de duas maneiras (não podemos usar a cor da primeira casa), a terceira casa pode ser pintada de duas maneiras (não podemos usar a cor da segunda casa), o mesmo ocorre com a quarta casa. Assim, o total de maneiras de pintar o tabuleiro é .   "
},
{
  "id": "definition-1",
  "level": "2",
  "url": "section-1.html#definition-1",
  "type": "Definição",
  "number": "1.1.5",
  "title": "Notação Fatorial.",
  "body": " Notação Fatorial   Dado um número natural , seja (leia fatorial) o produto .   "
},
{
  "id": "example-4",
  "level": "2",
  "url": "section-1.html#example-4",
  "type": "Exemplo",
  "number": "1.1.6",
  "title": "",
  "body": "   Calcule , e  Calcule e  Resolva a equação  Prove que:         "
},
{
  "id": "example-5",
  "level": "2",
  "url": "section-1.html#example-5",
  "type": "Exemplo",
  "number": "1.1.7",
  "title": "",
  "body": "  De quantas maneiras podemos formar uma fila com Carlos, Felipe, Marina e Ana?    Podemos escolher o primeiro da fila de quatro maneiras, a segunda de três, a terceira de duas e a última de apenas uma maneira (a pessoa que sobrar). Desse modo temos permutações.   "
},
{
  "id": "example-6",
  "level": "2",
  "url": "section-1.html#example-6",
  "type": "Exemplo",
  "number": "1.1.8",
  "title": "",
  "body": "  (OBM 2005) Num relógio digital, as horas são exibidas por meio de quatro algarismos. O relógio varia das 00:00 às 23:00 horas. Quantas vezes por dia os quatro algarismos mostrados são todos pares?    Neste problema existe uma restrição nos dígitos que marcam as horas e no primeiro dígito que marca os minutos.  Dessa forma, em vez de pensar em cada dígito separadamente, vamos pensar em três blocos de algarismos. O primeiro, que é formado pelos dois primeiros algarismos, pode assumir 7 valores diferentes (00, 02, 04, 06, 08, 20 ou 22); o segundo é formado apenas pelo terceiro dígito e pode assumir 3 valores (0, 2 ou 4); e o último dígito pode assumir 5 valores (0, 2, 4, 6 ou 8). Logo, o total de vezes em que todos aparecem pares é .   "
},
{
  "id": "example-7",
  "level": "2",
  "url": "section-1.html#example-7",
  "type": "Exemplo",
  "number": "1.1.9",
  "title": "Quantidade de Subconjuntos.",
  "body": " Quantidade de Subconjuntos   Quantos subconjuntos possui o conjunto ?    A cada subconjunto de vamos associar uma sequência de 10 dígitos que podem ser 0 ou 1. Essa associação será dada através da seguinte regra: O primeiro termo dessa sequência será 1 se o elemento 1 estiver no subconjunto e 0 caso contrário; O segundo termo dessa sequência será 1 se o elemento 2 estiver no subconjunto e 0 caso contrário; O terceiro termo dessa sequência será 1 se o elemento 3 estiver no subconjunto e 0 caso contrário; e assim por diante.  Por exemplo, o subconjunto está associado à sequência 1100100101, o subconjunto está associado à sequência 0110100100, enquanto o subconjunto vazio é representado por 0000000000. Note que a quantidade de subconjuntos de é igual à quantidade destas sequências. Por outro lado, podemos escolher cada dígito de duas formas e, consequentemente, temos sequências (que é a mesma quantidade de subconjuntos).   "
},
{
  "id": "example-8",
  "level": "2",
  "url": "section-1.html#example-8",
  "type": "Exemplo",
  "number": "1.1.10",
  "title": "Quantidade de Divisores.",
  "body": " Quantidade de Divisores   Seja um número natural na sua forma fatorada. Então, possui exatamente divisores inteiros positivos. Incluindo 1 e .    Note que cada divisor positivo de é da forma onde cada expoente é um número entre e (inclusive). Dessa forma, temos maneiras de escolher o expoente de ; maneiras de escolher o expoente de ; e assim por diante. Logo, segue o resultado do princípio multiplicativo.   "
},
{
  "id": "exercise-1",
  "level": "2",
  "url": "section-1.html#exercise-1",
  "type": "Exercício",
  "number": "1.1.3.1",
  "title": "",
  "body": " Cada casa de um tabuleiro pode ser pintado de verde ou amarelo. De quantas maneiras podemos pintar o tabuleiro todo?   O tabuleiro tem 4 casas ao todo e cada uma pode ser pintada de duas maneiras. O número de maneiras de pintar é . (Obs.: Se considerarmos as rotações do tabuleiro a resposta é 4).  "
},
{
  "id": "exercise-2",
  "level": "2",
  "url": "section-1.html#exercise-2",
  "type": "Exercício",
  "number": "1.1.3.2",
  "title": "",
  "body": " (OBM 2004) De quantos modos diferentes podemos pintar (usando apenas uma cor) as casas de um tabuleiro de modo que cada linha e cada coluna possua exatamente uma casa pintada?   Para a primeira linha temos 4 casas disponíveis, na segunda linha só temos 3 já que não podemos ocupar a mesma coluna da casa pintada anteriormente. Para a 3ª linha temos 2 possibilidades e para a 4ª linha só há 1 possibilidade. Logo, a resposta é .  "
},
{
  "id": "exercise-3",
  "level": "2",
  "url": "section-1.html#exercise-3",
  "type": "Exercício",
  "number": "1.1.3.3",
  "title": "",
  "body": " Quantos números naturais de três algarismos distintos existem?   Seja esse número. Então pode ser 1, 2, ..., 9 e , podem ser 0, 1, ..., 9. Inicialmente escolhendo temos 9 opções. Para também temos 9 já que ele não pode ser igual a mas pode ser 0. Para temos 8 possibilidades. A resposta é .  "
},
{
  "id": "exercise-4",
  "level": "2",
  "url": "section-1.html#exercise-4",
  "type": "Exercício",
  "number": "1.1.3.4",
  "title": "",
  "body": " De quantos modos podemos pôr três torres de três cores diferentes em um tabuleiro de modo que nenhuma delas ataque a outra?   Temos 64 maneiras de escolher a posição da primeira torre, 49 para a segunda e 36 para a terceira. Total de maneiras é .  "
},
{
  "id": "exercise-5",
  "level": "2",
  "url": "section-1.html#exercise-5",
  "type": "Exercício",
  "number": "1.1.3.5",
  "title": "",
  "body": " Uma embarcação deve ser tripulada por oito homens, dois dos quais só remam do lado direito e um apenas do lado esquerdo. Determine de quantos modos esta tripulação pode ser formada, se de cada lado deve haver quatro homens. Obs: A ordem dos homens deve ser considerada.   Do lado direito já estão definidos 2 homens e do lado esquerdo já está definido 1 homem. Sobraram 5 homens. Desses, devemos escolher 2 para o lado direito e o resto vai para o esquerdo. Temos maneiras de escolher esses homens sem se preocupar, por enquanto, com a ordem (dividimos por para retirar a ordenação). Uma vez definido quem vai ficar do lado direito e esquerdo, temos maneiras de permutá-los em cada lado. Portanto a resposta é .  "
},
{
  "id": "exercise-6",
  "level": "2",
  "url": "section-1.html#exercise-6",
  "type": "Exercício",
  "number": "1.1.3.6",
  "title": "",
  "body": " De quantas maneiras podemos ir de A até B sobre uma grade sem passar duas vezes pelo mesmo local e sem mover-se para a esquerda? A figura abaixo mostra um caminho possı́vel.      A formiga deve ir para a direita exatamente 5 vezes. Ao escolhermos esses movimentos, o resto do caminho estará bem definido. Como podemos escolher cada um destes cinco movimentos de seis maneiras, o total de caminhos será .  "
},
{
  "id": "exercise-7",
  "level": "2",
  "url": "section-1.html#exercise-7",
  "type": "Exercício",
  "number": "1.1.3.7",
  "title": "",
  "body": " Ache a quantidade de números de quatro dígitos tais que toda sequência de três algarismos consecutivos é formada por elementos distintos.   Considere o número com representação decimal . As únicas sequências de algarismos consecutivos são e . Como não pode ser 0 temos para ele 9 possíveis valores. Para temos também 9 possíveis valores, já que pode ser igual a 0 mas não a . Para temos 8 possíveis valores, pois não pode ser igual a nem a . Agora, não pode ser igual nem a nem a . Portanto tem 8 possíveis valores. A quantidade de números é .  "
},
{
  "id": "exercise-8",
  "level": "2",
  "url": "section-1.html#exercise-8",
  "type": "Exercício",
  "number": "1.1.3.8",
  "title": "",
  "body": " (OBM 2005) Num tabuleiro quadrado , serão colocados três botões idênticos, cada um no centro de uma casa, determinando um triângulo. De quantas maneiras podemos colocar os botões formando um triângulo retângulo com catetos paralelos às bordas do tabuleiro?   Vamos primeiramente escolher o vértice oposto à hipotenusa do triângulo. Temos 25 maneiras de fazer isso. Escolhido o primeiro vértice devemos escolher uma casa na mesma coluna e outra na mesma linha, determinando o triângulo. Podemos fazer isso de maneiras. Logo, o número de triângulos é .  "
},
{
  "id": "exercise-9",
  "level": "2",
  "url": "section-1.html#exercise-9",
  "type": "Exercício",
  "number": "1.1.3.9",
  "title": "",
  "body": " Dizemos que a palavra algoritmo é um anagrama da palavra logaritmo pois é uma permutação das letras de logaritmo. Sabendo disso, calcule a quantidade de anagramas da palavra vetor.   Como não há letras repetidas, o número de anagramas é o número de permutações das letras. Logo, é .  "
},
{
  "id": "exercise-10",
  "level": "2",
  "url": "section-1.html#exercise-10",
  "type": "Exercício",
  "number": "1.1.3.10",
  "title": "",
  "body": " Quantos anagramas da palavra vetor terminam em uma vogal?   Imagine que o anagrama seja da forma , então só podemos ter igual a e ou o. Além disso, todas as letras são diferentes. Temos 2 escolhas para , sobram 4 escolhas para , 3 para , 2 para e fica determinado. A resposta é .  "
},
{
  "id": "exercise-11",
  "level": "2",
  "url": "section-1.html#exercise-11",
  "type": "Exercício",
  "number": "1.1.3.11",
  "title": "",
  "body": " De quantas maneiras é possível colocar em uma prateleira 5 livros de matemática, 3 de física e 2 de biologia, de modo que livros de um mesmo assunto permaneçam juntos?   Considere os três blocos formados por livros da mesma matéria. Podemos organizar esses blocos de maneiras. Agora, em cada bloco ainda podemos permutar seus livros. Assim, o número correto de maneiras é .  "
},
{
  "id": "exercise-12",
  "level": "2",
  "url": "section-1.html#exercise-12",
  "type": "Exercício",
  "number": "1.1.3.12",
  "title": "",
  "body": " Quantos anagramas da palavra vetor possuem as vogais separadas?   A palavra vetor possui anagramas. Usando a mesma ideia do problema 19 (separar em blocos), podemos achar que a quantidade destes anagramas com vogais juntas é . Logo, temos anagramas com as vogais separadas.  "
},
{
  "id": "exercise-13",
  "level": "2",
  "url": "section-1.html#exercise-13",
  "type": "Exercício",
  "number": "1.1.3.13",
  "title": "",
  "body": " De quantas formas podemos colocar 4 bolas verdes e 4 bolas amarelas em um tabuleiro de modo que cada coluna e cada linha possua exatamente uma bola de cada cor?   Existem maneiras de colocar as bolas verdes. Depois disso, escolha uma das bolas verdes. Ponha uma bola amarela na sua linha e uma na sua coluna. Note que, ao fazermos isto, as posições das outras duas bolas amarelas estarão bem definidas. Dessa maneira, temos um total de configurações.  "
},
{
  "id": "exercise-14",
  "level": "2",
  "url": "section-1.html#exercise-14",
  "type": "Exercício",
  "number": "1.1.3.14",
  "title": "",
  "body": " Responda os itens a seguir:   Ache a quantidade de divisores positivos de 3600.  Quantos desses divisores são pares?  Quantos são quadrados perfeitos?     Veja que . Seus divisores são da forma , onde , e . Logo, temos 5 valores para e 3 para e . Portanto, o número de divisores deve ser .  Para que um divisor seja par não pode ocorrer . O número de possibilidades para se reduz a 4. O número de divisores pares é .  Para que um divisor seja quadrado perfeito, , e devem ser pares. Logo, só poderão assumir os valores para e para e . O número de divisores satisfazendo isso é .   "
},
{
  "id": "exercise-15",
  "level": "2",
  "url": "section-1.html#exercise-15",
  "type": "Exercício",
  "number": "1.1.3.15",
  "title": "",
  "body": " (Maio 2006) Um calendário digital exibe a data: dia, mês e ano, com 2 dígitos para o dia, 2 dígitos para o mês e 2 dígitos para o ano. Por exemplo, 01-01-01 corresponde a primeiro de janeiro de 2001 e 25-05-23 corresponde a 25 de maio de 2023. Em frente ao calendário há um espelho. Os dı́gitos do calendário são como os da figura abaixo.   Se 0, 1, 2, 5 e 8 se refletem, respectivamente, em 0, 1, 5, 2 e 8, e os outros dígitos perdem sentido ao se refletirem, determine quantos dias do século, ao se refletirem no espelho, correspondem também a uma data.   Como não podemos usar os dígitos 3, 4, 6, 7, 9 para formar uma data, os únicos valores possíveis para os dois primeiros dígitos (os que marcam o dia) são: 01, 02, 05, 08, 10, 11, 12, 15, 18, 20, 21, 22, 25, 28. Para os dois próximos dígitos temos as seguintes possibilidades: 01, 02, 05, 08, 10, 11, 12. Por outro lado, apenas os pares 01, 10 e 11 também correspondem a um mês quando são refletidos. Para os dois últimos as possibilidades são: 10, 20, 50, 80, 01, 11, 21, 51, 81, 02, 12, 22, 52, 82. Pois seus reflexos devem corresponder a um dia. Logo, o total de datas pedidas é .  "
},
{
  "id": "exercise-16",
  "level": "2",
  "url": "section-1.html#exercise-16",
  "type": "Exercício",
  "number": "1.1.3.16",
  "title": "",
  "body": " (Rússia) Um número natural é dito elegante se pode ser escrito como soma de cubo com um quadrado ( , onde ). Entre 1 e 1000000 existem mais números que são elegantes ou que não são?   A quantidade de números elegantes deve ser menor ou igual ao número de soluções da inequação . Note que e . O número de soluções é menor do que . Logo, a quantidade de números elegantes é menor do que a metade da quantidade de números entre 1 e 1000000. Isto é, existem mais números que não são elegantes.  "
},
{
  "id": "exercise-17",
  "level": "2",
  "url": "section-1.html#exercise-17",
  "type": "Exercício",
  "number": "1.1.3.17",
  "title": "",
  "body": " Quantos são os números de cinco dígitos que são múltiplos de 3 e possuem 6 como um de seus dígitos?    "
},
{
  "id": "section-4",
  "level": "1",
  "url": "section-4.html",
  "type": "Seção",
  "number": "1.2",
  "title": "Contagem II",
  "body": " Contagem II  Curso de Combinatória - Nível 2     Prof. Bruno Holanda      Neste material vamos aprender novas técnicas relacionadas a problemas de contagem.    Separando em casos  Quando encontramos dificuldades em resolver um problema, uma estratégia útil é separá-lo em casos menores em que essas dificuldades diminuam. Essa ideia é tão significativa que os especialistas da ciência da computação nomearam-na de divide and conquer algorithm , em analogia às estratégias político-militares.    O alfabeto da Tanzunlândia é formado por apenas três letras: A, B e C. Uma palavra na Tanzunlândia é uma sequência com no máximo 4 letras. Quantas palavras existem neste país?    Existem 3 palavras com uma letra, com duas letras, com três letras, e com quatro letras. Logo, o total de palavras é .      De quantos modos podemos pintar (usando uma de quatro cores) as casas da figura abaixo de modo que as casas vizinhas tenham cores diferentes?       Vamos separar o problema em dois casos:   Se as casas 1 e 3 tiverem a mesma cor, temos quatro maneiras de escolher essa cor. Podemos escolher a cor da casa 2 de três maneiras (basta não ser a cor usada nas casas 1 e 3), o mesmo vale para a casa 4. Logo, temos maneiras de pintar dessa forma.  Agora, se 1 e 3 têm cores diferentes, podemos escolher a cor da casa 1 de quatro maneiras, da casa 3 de três maneiras e, das casas 2 e 4, podemos escolher de duas maneiras cada. Assim, temos maneiras de pintar desta outra forma.   Desse modo, podemos concluir que existem maneiras de pintar a rosquinha.      Quantos são os números de quatro dígitos que não possuem dois algarismos consecutivos com a mesma paridade?    Vamos separar o problema em dois casos:   Quando o primeiro algarismo for par, temos 4 possibilidades para o primeiro dígito, 5 para o segundo, 5 para o terceiro e 5 para o último. Totalizando números.  Quando o primeiro algarismo for ímpar, temos 5 possibilidades para cada um dos dígitos. Logo, a quantidade de números dessa forma é .   Portanto, temos um total de números de quatro dígitos que não possuem dois algarismos consecutivos com a mesma paridade.      Contagens Múltiplas  Os problemas que abordamos até agora tinham algo em comum: o papel da ordenação na diferenciação das possibilidades. Porém, há casos em que a ordem dos elementos não é relevante para a contagem. Isso fica claro quando analisamos as seguintes situações:  Situação 1. De um grupo de 7 pessoas, devemos escolher 3 delas para formar um pódio (primeiro, segundo e terceiro lugares). De quantas formas podemos fazer isso?  Situação 2. De um grupo de 7 pessoas, devemos escolher 3 delas para formar um comitê (sem hierarquias). De quantas formas podemos fazer isso?  Perceba que, apesar de serem semelhantes, são problemas diferentes, com respostas também diferentes. O primeiro sabemos resolver. A resposta é . Agora, sabendo essa resposta, podemos dar uma solução para o segundo problema. Note que, para cada comitê formado, podemos montar pódios distintos. Logo, o número de pódios é seis vezes o número de comitês. Portanto, a resposta para o segundo problema é .  Podemos usar essa estratégia para resolver problemas de anagramas em que as palavras possuem letras repetidas.    Quantos anagramas possui a palavra matematica (desconsidere o acento)?    Se imaginarmos por um momento uma palavra de 10 letras diferentes:   o número total de anagramas será . Porém, ao trocarmos letras que na realidade são iguais (como e ) o anagrama continua o mesmo. Dessa forma, cada anagrama foi contado vezes. Portanto, a resposta é .      De quantas formas podemos pôr oito pessoas em uma fila se Alice e Bob devem estar juntos, e Carol deve estar em algum lugar atrás de Daniel?    Vamos imaginar Alice e Bob como uma única pessoa. Existirão possibilidades. Alice pode estar na frente de Bob ou vice versa. Então devemos multiplicar o número de possibilidades por 2. Por outro lado, Carol está atrás de Daniel em exatamente metade dessas permutações, então a resposta é apenas .      Problemas Propostos   Escrevem-se todos os inteiros de 1 a 9999. Quantos números têm pelo menos um zero?   Ache a quantidade de números de 0 a 9999 sem nenhum dígito zero. Faça essa contagem separando em quatro casos (de acordo com a quantidade de algarismos).    Quantos números de três dígitos possuem todos os seus algarismos com a mesma paridade?   Separe em dois casos: 1) quando todos os dígitos são pares; 2) quando todos os dígitos são ímpares. Não se esqueça que zero não pode ser o primeiro dígito!    Quantos são os números de quatro algarismos que possuem pelo menos um dígito repetido?    Quantos são os números de quatro dígitos distintos que não possuem dois algarismos consecutivos com a mesma paridade?    De quantas maneiras podemos colocar um rei preto e um rei branco em um tabuleiro de xadrez ( ) sem que nenhum deles ataque o outro?   Podemos dividir o tabuleiro em três regiões: A primeira é formada pelas quatro casas nos cantos do tabuleiro; a segunda pelas 24 casas da borda (que não estão nos cantos); e a terceira pelo tabuleiro no interior do tabuleiro. Se o primeiro rei for posto na primeira região, temos 60 maneiras de colocar o segundo rei; se ele for posto na segunda, temos 58 maneiras; e se for posto na terceira, temos 55 maneiras. Logo, temos um total de modos diferentes de colocar os dois reis.    Quantos são os naturais pares que se escrevem com três algarismos distintos?    Na cidade Gótica as placas das motos consistem de três letras. A primeira letra deve estar no conjunto , a segunda letra no conjunto , e a terceira letra no conjunto . Certo dia, decidiu-se aumentar o número de placas usando duas novas letras J e K. O intendente dos transportes ordenou que as novas letras fossem postas em conjuntos diferentes. Determine com qual opção podemos obter o maior número de placas.   Inicialmente temos placas. De acordo com o problema, temos as seguintes opções para o novo número de placas: ou . Logo, o número máximo é 100.    (Maio 1998) Cada um dos seis segmentos da figura abaixo deve ser pintado de uma de quatro cores de modo que segmentos vizinhos não tenham a mesma cor. De quantas maneiras podemos fazer isso?       Em uma festa havia 6 homens e 4 mulheres. De quantos modos podemos formar 3 pares com essas pessoas?      De quantas maneiras podemos pôr três torres de mesma cor em um tabuleiro de modo que nenhuma delas ataque a outra?      (AIME 1996) Duas casas de um tabuleiro são pintadas de amarelo e as outras são pintadas de verde. Duas pinturas são ditas equivalentes se uma é obtida a partir de uma rotação aplicada no plano do tabuleiro. Quantas pinturas inequivalentes existem?   Separe o problema em dois casos. Quando as casas amarelas são simétricas em relação ao centro do tabuleiro e quando não são. Conte o número de pinturas equivalentes em cada caso.    Em uma sala de aula existem meninas e meninos. De quantas formas eles podem ficar em uma fila, se as meninas devem ficar em ordem crescente de peso, e os meninos também? (Suponha que 2 pessoas quaisquer não tenham o mesmo peso.)   Temos maneiras de permutar todas as crianças. Porém apenas uma das permutações das meninas está na ordem correta e apenas das permutações dos meninos está correta. Logo, a resposta é .    Considere um torneio de xadrez com 10 participantes. Na primeira rodada cada participante joga somente uma vez, de modo que há 5 jogos realizados simultaneamente. De quantas maneiras esta primeira rodada pode ser realizada?    Doze cavaleiros estão sentados em torno de uma mesa redonda. Cada um dos 12 cavaleiros considera seus dois vizinhos como rivais. Deseja-se formar um grupo de 5 cavaleiros para salvar uma princesa. Nesse grupo não poderá haver cavaleiros rivais. Determine de quantas maneiras é possível escolher esse grupo.    "
},
{
  "id": "example-9",
  "level": "2",
  "url": "section-4.html#example-9",
  "type": "Exemplo",
  "number": "1.2.1",
  "title": "",
  "body": "  O alfabeto da Tanzunlândia é formado por apenas três letras: A, B e C. Uma palavra na Tanzunlândia é uma sequência com no máximo 4 letras. Quantas palavras existem neste país?    Existem 3 palavras com uma letra, com duas letras, com três letras, e com quatro letras. Logo, o total de palavras é .   "
},
{
  "id": "example-10",
  "level": "2",
  "url": "section-4.html#example-10",
  "type": "Exemplo",
  "number": "1.2.2",
  "title": "",
  "body": "  De quantos modos podemos pintar (usando uma de quatro cores) as casas da figura abaixo de modo que as casas vizinhas tenham cores diferentes?       Vamos separar o problema em dois casos:   Se as casas 1 e 3 tiverem a mesma cor, temos quatro maneiras de escolher essa cor. Podemos escolher a cor da casa 2 de três maneiras (basta não ser a cor usada nas casas 1 e 3), o mesmo vale para a casa 4. Logo, temos maneiras de pintar dessa forma.  Agora, se 1 e 3 têm cores diferentes, podemos escolher a cor da casa 1 de quatro maneiras, da casa 3 de três maneiras e, das casas 2 e 4, podemos escolher de duas maneiras cada. Assim, temos maneiras de pintar desta outra forma.   Desse modo, podemos concluir que existem maneiras de pintar a rosquinha.   "
},
{
  "id": "example-11",
  "level": "2",
  "url": "section-4.html#example-11",
  "type": "Exemplo",
  "number": "1.2.4",
  "title": "",
  "body": "  Quantos são os números de quatro dígitos que não possuem dois algarismos consecutivos com a mesma paridade?    Vamos separar o problema em dois casos:   Quando o primeiro algarismo for par, temos 4 possibilidades para o primeiro dígito, 5 para o segundo, 5 para o terceiro e 5 para o último. Totalizando números.  Quando o primeiro algarismo for ímpar, temos 5 possibilidades para cada um dos dígitos. Logo, a quantidade de números dessa forma é .   Portanto, temos um total de números de quatro dígitos que não possuem dois algarismos consecutivos com a mesma paridade.   "
},
{
  "id": "example-12",
  "level": "2",
  "url": "section-4.html#example-12",
  "type": "Exemplo",
  "number": "1.2.1",
  "title": "",
  "body": "  Quantos anagramas possui a palavra matematica (desconsidere o acento)?    Se imaginarmos por um momento uma palavra de 10 letras diferentes:   o número total de anagramas será . Porém, ao trocarmos letras que na realidade são iguais (como e ) o anagrama continua o mesmo. Dessa forma, cada anagrama foi contado vezes. Portanto, a resposta é .   "
},
{
  "id": "example-13",
  "level": "2",
  "url": "section-4.html#example-13",
  "type": "Exemplo",
  "number": "1.2.2",
  "title": "",
  "body": "  De quantas formas podemos pôr oito pessoas em uma fila se Alice e Bob devem estar juntos, e Carol deve estar em algum lugar atrás de Daniel?    Vamos imaginar Alice e Bob como uma única pessoa. Existirão possibilidades. Alice pode estar na frente de Bob ou vice versa. Então devemos multiplicar o número de possibilidades por 2. Por outro lado, Carol está atrás de Daniel em exatamente metade dessas permutações, então a resposta é apenas .   "
},
{
  "id": "exercise-18",
  "level": "2",
  "url": "section-4.html#exercise-18",
  "type": "Exercício",
  "number": "1.2.3.1",
  "title": "",
  "body": " Escrevem-se todos os inteiros de 1 a 9999. Quantos números têm pelo menos um zero?   Ache a quantidade de números de 0 a 9999 sem nenhum dígito zero. Faça essa contagem separando em quatro casos (de acordo com a quantidade de algarismos).  "
},
{
  "id": "exercise-19",
  "level": "2",
  "url": "section-4.html#exercise-19",
  "type": "Exercício",
  "number": "1.2.3.2",
  "title": "",
  "body": " Quantos números de três dígitos possuem todos os seus algarismos com a mesma paridade?   Separe em dois casos: 1) quando todos os dígitos são pares; 2) quando todos os dígitos são ímpares. Não se esqueça que zero não pode ser o primeiro dígito!  "
},
{
  "id": "exercise-20",
  "level": "2",
  "url": "section-4.html#exercise-20",
  "type": "Exercício",
  "number": "1.2.3.3",
  "title": "",
  "body": " Quantos são os números de quatro algarismos que possuem pelo menos um dígito repetido?  "
},
{
  "id": "exercise-21",
  "level": "2",
  "url": "section-4.html#exercise-21",
  "type": "Exercício",
  "number": "1.2.3.4",
  "title": "",
  "body": " Quantos são os números de quatro dígitos distintos que não possuem dois algarismos consecutivos com a mesma paridade?  "
},
{
  "id": "exercise-22",
  "level": "2",
  "url": "section-4.html#exercise-22",
  "type": "Exercício",
  "number": "1.2.3.5",
  "title": "",
  "body": " De quantas maneiras podemos colocar um rei preto e um rei branco em um tabuleiro de xadrez ( ) sem que nenhum deles ataque o outro?   Podemos dividir o tabuleiro em três regiões: A primeira é formada pelas quatro casas nos cantos do tabuleiro; a segunda pelas 24 casas da borda (que não estão nos cantos); e a terceira pelo tabuleiro no interior do tabuleiro. Se o primeiro rei for posto na primeira região, temos 60 maneiras de colocar o segundo rei; se ele for posto na segunda, temos 58 maneiras; e se for posto na terceira, temos 55 maneiras. Logo, temos um total de modos diferentes de colocar os dois reis.  "
},
{
  "id": "exercise-23",
  "level": "2",
  "url": "section-4.html#exercise-23",
  "type": "Exercício",
  "number": "1.2.3.6",
  "title": "",
  "body": " Quantos são os naturais pares que se escrevem com três algarismos distintos?  "
},
{
  "id": "exercise-24",
  "level": "2",
  "url": "section-4.html#exercise-24",
  "type": "Exercício",
  "number": "1.2.3.7",
  "title": "",
  "body": " Na cidade Gótica as placas das motos consistem de três letras. A primeira letra deve estar no conjunto , a segunda letra no conjunto , e a terceira letra no conjunto . Certo dia, decidiu-se aumentar o número de placas usando duas novas letras J e K. O intendente dos transportes ordenou que as novas letras fossem postas em conjuntos diferentes. Determine com qual opção podemos obter o maior número de placas.   Inicialmente temos placas. De acordo com o problema, temos as seguintes opções para o novo número de placas: ou . Logo, o número máximo é 100.  "
},
{
  "id": "exercise-25",
  "level": "2",
  "url": "section-4.html#exercise-25",
  "type": "Exercício",
  "number": "1.2.3.8",
  "title": "",
  "body": " (Maio 1998) Cada um dos seis segmentos da figura abaixo deve ser pintado de uma de quatro cores de modo que segmentos vizinhos não tenham a mesma cor. De quantas maneiras podemos fazer isso?     "
},
{
  "id": "exercise-26",
  "level": "2",
  "url": "section-4.html#exercise-26",
  "type": "Exercício",
  "number": "1.2.3.9",
  "title": "",
  "body": " Em uma festa havia 6 homens e 4 mulheres. De quantos modos podemos formar 3 pares com essas pessoas?    "
},
{
  "id": "exercise-27",
  "level": "2",
  "url": "section-4.html#exercise-27",
  "type": "Exercício",
  "number": "1.2.3.10",
  "title": "",
  "body": " De quantas maneiras podemos pôr três torres de mesma cor em um tabuleiro de modo que nenhuma delas ataque a outra?    "
},
{
  "id": "exercise-28",
  "level": "2",
  "url": "section-4.html#exercise-28",
  "type": "Exercício",
  "number": "1.2.3.11",
  "title": "",
  "body": " (AIME 1996) Duas casas de um tabuleiro são pintadas de amarelo e as outras são pintadas de verde. Duas pinturas são ditas equivalentes se uma é obtida a partir de uma rotação aplicada no plano do tabuleiro. Quantas pinturas inequivalentes existem?   Separe o problema em dois casos. Quando as casas amarelas são simétricas em relação ao centro do tabuleiro e quando não são. Conte o número de pinturas equivalentes em cada caso.  "
},
{
  "id": "exercise-29",
  "level": "2",
  "url": "section-4.html#exercise-29",
  "type": "Exercício",
  "number": "1.2.3.12",
  "title": "",
  "body": " Em uma sala de aula existem meninas e meninos. De quantas formas eles podem ficar em uma fila, se as meninas devem ficar em ordem crescente de peso, e os meninos também? (Suponha que 2 pessoas quaisquer não tenham o mesmo peso.)   Temos maneiras de permutar todas as crianças. Porém apenas uma das permutações das meninas está na ordem correta e apenas das permutações dos meninos está correta. Logo, a resposta é .  "
},
{
  "id": "exercise-30",
  "level": "2",
  "url": "section-4.html#exercise-30",
  "type": "Exercício",
  "number": "1.2.3.13",
  "title": "",
  "body": " Considere um torneio de xadrez com 10 participantes. Na primeira rodada cada participante joga somente uma vez, de modo que há 5 jogos realizados simultaneamente. De quantas maneiras esta primeira rodada pode ser realizada?  "
},
{
  "id": "exercise-31",
  "level": "2",
  "url": "section-4.html#exercise-31",
  "type": "Exercício",
  "number": "1.2.3.14",
  "title": "",
  "body": " Doze cavaleiros estão sentados em torno de uma mesa redonda. Cada um dos 12 cavaleiros considera seus dois vizinhos como rivais. Deseja-se formar um grupo de 5 cavaleiros para salvar uma princesa. Nesse grupo não poderá haver cavaleiros rivais. Determine de quantas maneiras é possível escolher esse grupo.  "
},
{
  "id": "section-7",
  "level": "1",
  "url": "section-7.html",
  "type": "Seção",
  "number": "2.1",
  "title": "O Pincípio da Casa dos Pombos I",
  "body": " O Pincípio da Casa dos Pombos I   Introdução  O princípio da casa dos pombos também é conhecido em alguns países (na Rússia, por exemplo) como Princípio de Dirichlet pois, foi o matemático Lejeune Dirichlet o primeiro matemático a usar este método para resolver problemas não triviais. Outros matemáticos que se destacaram por usarem essa ideia para resolver diversos problemas foram os húngaros Erdős e Szekeres.  Vamos abordar este princípio da seguinte maneira:   \"Se em caixas são postos pombos, então pelo menos uma caixa terá mais de um pombo.\"   Alguns Exemplos:   Em um grupo de 13 pessoas, pelo menos duas delas têm o mesmo signo.  Em um grupo de 5 cartas de baralho, pelo menos duas são do mesmo naipe.  Na cidade de Recife, existem pelo menos duas pessoas com o mesmo número de fios de cabelo.   Agora vamos ver como algo tão simples pode resolver problemas aparentemente difíceis:    Escolhem-se 5 pontos ao acaso sobre a superfície de um quadrado de lado 2. Mostre que pelo menos dois deste pontos estão em um distância menor que ou igual a .    Divida o quadrado em quatro quadrados menores como na figura ao lado. Como temos cinco pontos e quatro quadrados, teremos pelo menos dois pontos no mesmo quadradinho. Como a maior distância entre dois pontos do mesmo quadradinho não supera a medida de sua diagonal, o resultado segue de imediato.      Passo de Mágica?  Para o aluno iniciante a solução do problema anterior pode ter parecido um pouco mágica. Vamos mostrar que não é bem assim, que existe um método na solução de alguns problemas simples que usam a ideia da casa dos pombos.  A primeira coisa que devemos aprender a reconhecer é quando um problema se trata de um problema sobre casa dos pombos. Isso pode ser ganho com experiência, mas vamos dar um empurrãozinho para você. Um problema de PCP tem quase sempre a seguinte cara:   Dado um conjunto de objetos, prove que podemos escolher deles satisfazendo uma propriedade.   Bem, depois de identificar que o enunciado do problema nos traz a ideia de usar PCP, devemos nos concentrar em responder as seguintes perguntas:   Quem são os pombos?  Quantas são as casas?  Quem são as casas?   Quase sempre as duas primeiras perguntas são as mais fáceis de serem respondidas. Para responder a terceira pergunta devemos pensar no conceito dual de espaço amostral. Por um lado, o espaço amostral é o conjunto das possíveis posições dos pombos. Por outro, é a união de todas as casas.  Para finalizar, devemos separar o espaço amostral no número de casas já descoberto. Nessa hora é importante lembrar que as casas devem refletir a propriedade desejada. Como acabamos de ver, usar o princípio da casa dos pombos não é difícil. O difícil está em achar o que serão nossos \"pombos\" e \"caixas\".    Exemplos Resolvidos    Prove que dados sete inteiros positivos, existem dois cuja soma ou a diferença é um múltiplo de 10.    Vamos montar seis caixas onde um inteiro está na caixa se é congruente a ou módulo 10. Sabemos que existirão dois inteiros na mesma caixa. Dessa forma, se eles forem incongruentes módulo 10, basta somá-los. Caso contrário, faça a sua diferença.      Dados 5 pontos no plano com coordenadas inteiras, prove que pelo menos um dos dez pontos médio gerados por eles também possui coordenadas inteiras.    Podemos separar os pontos de coordenadas inteiras (que é representado por ) em quatro grupos como a seguir:   são ambos pares .  são ambos ímpares .  é par e é ímpar .  é ímpar e é par .   Observe que pontos que pertencem ao mesmo grupo possuem pontos médios com coordenadas inteiras. Como temos 5 pontos, o princípio da casa dos pombos nos garante que há pelo menos dois pontos no mesmo grupo.     Mostre que entre nove números que não possuem divisores primos maiores que cinco, existem dois cujo produto é um quadrado.   Inicialmente observe que, qualquer número inteiro que não possui divisor primo maior que cinco, se escreve na forma , com e inteiros não negativos.  Defina um conjunto com 9 números arbitrários que satisfaçam as hipóteses do enunciado: Como os expoentes e só podem ser pares ou ímpares, seja um conjunto que represente todas as paridades possíveis para os expoentes de 2, 3 e 5 em . Este conjunto possui 8 elementos, pois temos duas possibilidades para a paridade de cada um dos 3 expoentes.  Como o conjunto é formado por nove elementos, pelo princípio da casa dos pombos, teremos dois elementos em , cujos expoentes possuem a mesma paridade, digamos que e .  O produto entre eles é da forma , com , que é um quadrado, pois pode ser escrito na forma .     (IMO 1972) Prove que, de qualquer conjunto de dez números naturais distintos de dois dígitos, podemos escolher dois subconjuntos A e B (disjuntos) cuja a soma dos elementos é a mesma em ambos.   Seja um conjunto com 10 números naturais distintos de dois dígitos. A soma de todos os elementos de pode ser no máximo 945, no caso em que .  Considere o conjunto das partes de , ou seja, o conjunto formado por todos os subconjuntos de . Este conjunto possui elementos, sendo um deles o conjunto vazio, pois para formar um subconjunto de , precisamos decidir se cada elemento de vai pertencer ou não a este subconjunto.  Defina e como o conjunto das partes de , menos o conjunto vazio. Desta forma possui elementos.  Observe que um elemento de é um subconjunto de e que a soma dos elementos de um elemento de será um número que pertence a . Pelo princípio da casa dos pombos, como temos mais elementos em do que em , pelo menos dois elementos possuem a mesma soma.  Se e forem disjuntos, acabou. Se não, considere e . Logo, os conjuntos e são disjuntos e a soma dos seus elementos é a mesma.      Nove pontos são postos sobre a superfície de um tetraedro regular com 1cm de aresta. Prove que dentre esses pontos é possível achar dois com distância (espacial) não maior que 0.5cm.    Vamos particionar a superfície do tetraedro em 16 triângulos equiláteros congruentes, dividindo cada face em quatro partes usando suas bases médias. Agora vamos criar 8 regiões pintando esses triângulos de acordo com a seguinte regra: os triângulos que possuem um mesmo vértice do tetraedro serão pintados da mesma cor; dessa forma já usamos quatro cores diferentes para 12 triângulos e os outros quatro vamos pintar usando as demais cores.  De acordo com o Princípio da Casa dos Pombos, pelo menos dois dos nove pontos estarão na mesma região. Fica apenas faltando constatar que a distância máxima entre dois pontos da mesma região é no máximo 0.5cm.       Outra Versão do Princípio da Casa dos Pombos  Para uma versão mais geral do princípio da casa dos pombos, vamos usar a função teto, dada por:    Ou seja, é o menor inteiro que é maior ou igual a . Observe que para qualquer .  , , .    Se pombos forem colocados em casas, então existe pelo menos uma casa contendo pelo menos pombos.      Nove pontos são colocados no interior de um triângulo de área de forma que não tenha 3 pontos colineares. Mostre que podemos escolher três deles para serem os vértices de um triângulo de área no máximo igual a .    Sejam e os vértices do triângulo de área 4 . Considere três pontos e na arestas , de forma que e formem quatro triângulos, cada um com área de 1 .  Desta forma ao colocar os pontos no triâgulo , pelo princípio da casa dos pombos, existem pelo menos pontos em um dos quatro triângulos: e .   Triângulo subdividido.    Logo os três pontos que estão dentro de um destes 4 triângulos, por não serem colineares, formam um triângulo de área no máximo igual a 1 .      Problemas   Qual é o número mínimo de pessoas que deve haver em um grupo para que possamos garantir que nele haja pelo menos 5 pessoas nascidas no mesmo mês?   49   Pelo PCP basta encontrar o menor número inteiro , tal que . Como , o valor de é 5.    Cinquenta e um pontos são postos no interior de um quadrado de lado 1 metro. Prove que existe um conjunto de três desses pontos que podem ser cobertos por um quadrado de lado 20 centímetros.   Particione o quadrado de em 25 quadrados menores de . Como (pois ) pelo PCP, pelo menos 1 quadrado de contém 3 pontos.    Em cada casa de um tabuleiro é colocado um dos números . Prove que, dentre as oito somas ao longo de uma mesma linha, coluna ou diagonal, existem duas iguais.   O valor máximo possível para uma soma é 3 (se houver três números 1) e o mínimo possível é -3. No total, as somas possíveis pertencem ao conjunto , ou seja, são 7 valores possíveis. Como no total são 8 somas (3 linhas + 3 colunas + 2 diagonais), pelo Princípio da Casa dos Pombos, pelo menos duas somas são iguais.    Prove que de qualquer conjunto de dez inteiros podemos escolher um subconjunto cuja soma é um múltiplo de 10.   Seja um conjunto com 10 inteiros. Defina as somas parciais: Se algum (Ou o resto da divisão dealgum por 10 for igual a zero), o problema acabou.  Caso contrário, os restos dessas 10 somas na divisão por 10 estão entre 1 e 9. Como são 10 somas e 9 restos possíveis, pelo PCP, pelo menos duas somas deixam o mesmo resto, ou seja, com . Subtraindo, temos .    Prove que existe uma potência de 3 terminada nos dígitos 001 (na base decimal).   Considere as 1001 potências de 3: . Existem 1000 restos possíveis na divisão por 1000 (de 0 a 999). Pelo PCP, existem duas potências com o mesmo resto, ou seja, com .  Portanto, , o que implica . Como o MDC de 3 e 1000 é 1, não é divisível por 1000, logo , ou seja, . Isso significa que essa potência termina em 001.     (Longlist IMO 1977 - Romênia) Dados 37 pontos no espaço com coordenadas inteiras, prove que pelo menos um dos triângulos formado por três destes pontos possui o baricentro com coordenadas inteiras.   O baricentro é dado por . Temos 37 pontos, como , há pelo menos 13 pontos com o mesmo resto na divisão por 3 na primeira coordenada. Ou seja, quaisquer 3 desses, a soma será múltiplo de 3, na primeira coordenada.  Olhando para a 2ª coordenada, dos 13 pontos temos pelo menos com a 2ª coordenada com mesmo resto na divisão por 3. Sejam esses 5 pontos. Quaisquer 3 desses pontos geram um triângulo cujo baricentro possui as 2 primeiras coordenadas inteiras.  Agora, precisamos mostrar que dos 5 inteiros que estão na 3ª coordenada dos pontos , sempre há 3 cuja soma é um múltiplo de 3.  1º caso: os 3 restos possíveis na divisão por 3 (0, 1 e 2) aparecem. Neste caso, basta usar esses 3 pontos ( ).  2º caso: Um dos restos não aparece. Então, temos 5 números e 2 restos possíveis. Como , pelo menos 3 possuem o mesmo resto. Logo, usando esses três pontos, o baricentro terá coordenadas inteiras.        Em cada casa de um tabuleiro é posto um inteiro de modo que a diferença positiva entre dois os inteiros de duas casas vizinhas (lado em comum) é no máximo 5. Prove que dois destes inteiros devem ser iguais.   Seja o menor valor do tabuleiro.  De para um vizinho o valor máximo é ;  A distância máxima entre dois quadrados do tabuleiro pode ser dada quando um dos quadrados está no canto inferior esquerdo e o outro no canto superior direito. Logo, a distância máxima é .  Portanto, o valor máximo possível é Assim, os números do tabuleiro podem variar de até . No total são números possíveis e são quadrados. Pelo PCP, pelo menos dois quadrados vão ter o mesmo número.    Trinta e três torres são postas em um tabuleiro 8x8. Prove que podemos escolher cinco delas sem que nenhuma ataque a outra.   Ordene as linhas de forma decrescente pela quantidade de torres: . A linha com mais torres possui pelo menos .  Considere apenas as outras linhas (são 7), e pelo menos torres. é o número mínimo de torres na linha .  Considere apenas as linhas . São 6 linhas e pelo menos torres. é o mínimo de torres na linha .  Para são 5 linhas e pelo menos 12 torres. na linha .  Para são 4 linhas e pelo menos 4 torres. Então pelo menos 1 linha possui 1 torre.  Olhando apenas para as linhas , vamos selecionar 5 torres que não se atacam. Selecione a única torre da linha . Na linha selecione a única torre que não está na coluna da torre de . Seguindo assim, selecionamos as 5 torres que não se atacam.    (Longlist IMO 1979 Bulgária) Colocamos reis em um tabuleiro infinito. Prove que podemos escolher deles de modo que não existam dois que se ataquem.   Um rei na casa pode atacar as casas com coordenadas que diferem no máximo por 1. Ou seja, se outro rei está na casa , um pode atacar o outro se e . Além disso, se dois reis estão em casas com mesma paridade, eles não podem atacar um ao outro, pois ou .  Considere as casas divididas em 4 grupos: Casa 1 (PAR, PAR); Casa 2 (PAR, ÍMPAR); Casa 3 (ÍMPAR, PAR); Casa 4 (ÍMPAR, ÍMPAR). Como temos , pelo PCP, pelo menos reis estão na mesma classe (casa), logo não se atacam.    Prove que de qualquer subconjunto de elementos do conjunto é possível escolher dois que sejam primos entre si.   Observe que o MDC de dois números consecutivos é igual a 1: . Dos números consecutivos serão selecionados . Se selecionarmos 2 consecutivos eles serão primos entre si.  Só existem duas maneiras de selecionar números dentre sem selecionar dois consecutivos. Selecione todos os pares ou todos os ímpares. Ao selecionar o -ésimo elemento ele terá paridade diferente dos demais elementos e ficará entre dois números previamente selecionados. Logo, teremos 3 números consecutivos. Quaisquer 2 consecutivos, desses 3, serão primos entre si.     Quarenta estudantes participaram de uma olimpíada de matemática. A prova consistia de cinco problemas ao todo. Sabe-se que cada problema foi resolvido corretamente por pelo menos 23 participantes. Prove que deve existir dois participantes tais que todo problema foi resolvido por pelo menos um deles dois.   Existem soluções corretas. Como , pelo PCP, pelo menos 1 estudante acertou pelo menos 3 problemas. Chamaremos ele de A.  Digamos que A não resolveu dois problemas. Então, cada um deles foi resolvido por pelo menos 22 estudantes. São 44 soluções corretas e 39 estudantes. Como , pelo PCP, pelo menos 1 estudante acertou pelo menos esses dois problemas. Chame ele de B. Assim, todo problema da prova foi resolvido por A ou B.     Prove que todo número natural tem um múltiplo que se escreve, na base 10, apenas com os algarismos 0 e 1.   Seja um número natural qualquer. Considere os números (com dígitos). São mais números que restos possíveis na divisão por . Pelo PCP, pelo menos 2 possuem o mesmo resto: digamos (com dígitos) e (com dígitos, ). A diferença entre eles é , que é um múltiplo desejado.    Mostre que se escolhemos 800 pontos de um cubo de aresta 10, pelo menos um dos segmentos determinados por esses pontos tem comprimento menor que 2.   Divida as arestas em segmentos de tamanho . Assim, cada aresta tem 9 segmentos e podemos subdividir o cubo em cubos menores. Como são 800 pontos e 729 cubos, pelo PCP, pelo menos 1 cubo vai possuir pelo menos 2 pontos. A distância máxima dentro de um cubo desses é a sua diagonal: .    Um mestre de xadrez, preparando-se para um torneio, joga, durante onze semanas, pelo menos uma partida por dia mas não mais que doze partidas por semana. Prove que existe um conjunto de dias consecutivos durante os quais ele joga exatamente 20 partidas.   11 semanas são 77 dias. Seja a soma do número de jogos do dia 1 até o dia . Temos (pois o total de jogos ). Defina . Assim, .  São 154 valores (os e os ) e 152 números possíveis. Pelo PCP, pelo menos 2 valores precisam ser iguais. Como e são estritamente crescentes, os dois valores que são iguais precisam ser para algum e algum . Logo, . Entre os dias e foram jogadas 20 partidas.    Escolha, dentre os elementos do conjunto , 101 números ao acaso. Mostre que, entre os números escolhidos, há dois números tais que um deles divide o outro.   Reescreva os elementos do conjunto da seguinte maneira: , de maneira que seja a maior potência de 2 possível e seja ímpar. Como são 200 números (100 pares e 100 ímpares), no máximo 100 's serão distintos. No conjunto, como serão escolhidos 101 números, pelo menos dois 's serão iguais: . Os números serão da forma e . Se , então o menor número divide o maior.     "
},
{
  "id": "example-14",
  "level": "2",
  "url": "section-7.html#example-14",
  "type": "Exemplo",
  "number": "2.1.1",
  "title": "",
  "body": "  Escolhem-se 5 pontos ao acaso sobre a superfície de um quadrado de lado 2. Mostre que pelo menos dois deste pontos estão em um distância menor que ou igual a .    Divida o quadrado em quatro quadrados menores como na figura ao lado. Como temos cinco pontos e quatro quadrados, teremos pelo menos dois pontos no mesmo quadradinho. Como a maior distância entre dois pontos do mesmo quadradinho não supera a medida de sua diagonal, o resultado segue de imediato.   "
},
{
  "id": "example-15",
  "level": "2",
  "url": "section-7.html#example-15",
  "type": "Exemplo",
  "number": "2.1.2",
  "title": "",
  "body": "  Prove que dados sete inteiros positivos, existem dois cuja soma ou a diferença é um múltiplo de 10.    Vamos montar seis caixas onde um inteiro está na caixa se é congruente a ou módulo 10. Sabemos que existirão dois inteiros na mesma caixa. Dessa forma, se eles forem incongruentes módulo 10, basta somá-los. Caso contrário, faça a sua diferença.   "
},
{
  "id": "example-16",
  "level": "2",
  "url": "section-7.html#example-16",
  "type": "Exemplo",
  "number": "2.1.3",
  "title": "",
  "body": "  Dados 5 pontos no plano com coordenadas inteiras, prove que pelo menos um dos dez pontos médio gerados por eles também possui coordenadas inteiras.    Podemos separar os pontos de coordenadas inteiras (que é representado por ) em quatro grupos como a seguir:   são ambos pares .  são ambos ímpares .  é par e é ímpar .  é ímpar e é par .   Observe que pontos que pertencem ao mesmo grupo possuem pontos médios com coordenadas inteiras. Como temos 5 pontos, o princípio da casa dos pombos nos garante que há pelo menos dois pontos no mesmo grupo.   "
},
{
  "id": "example-17",
  "level": "2",
  "url": "section-7.html#example-17",
  "type": "Exemplo",
  "number": "2.1.4",
  "title": "",
  "body": " Mostre que entre nove números que não possuem divisores primos maiores que cinco, existem dois cujo produto é um quadrado.   Inicialmente observe que, qualquer número inteiro que não possui divisor primo maior que cinco, se escreve na forma , com e inteiros não negativos.  Defina um conjunto com 9 números arbitrários que satisfaçam as hipóteses do enunciado: Como os expoentes e só podem ser pares ou ímpares, seja um conjunto que represente todas as paridades possíveis para os expoentes de 2, 3 e 5 em . Este conjunto possui 8 elementos, pois temos duas possibilidades para a paridade de cada um dos 3 expoentes.  Como o conjunto é formado por nove elementos, pelo princípio da casa dos pombos, teremos dois elementos em , cujos expoentes possuem a mesma paridade, digamos que e .  O produto entre eles é da forma , com , que é um quadrado, pois pode ser escrito na forma .   "
},
{
  "id": "example-18",
  "level": "2",
  "url": "section-7.html#example-18",
  "type": "Exemplo",
  "number": "2.1.5",
  "title": "",
  "body": " (IMO 1972) Prove que, de qualquer conjunto de dez números naturais distintos de dois dígitos, podemos escolher dois subconjuntos A e B (disjuntos) cuja a soma dos elementos é a mesma em ambos.   Seja um conjunto com 10 números naturais distintos de dois dígitos. A soma de todos os elementos de pode ser no máximo 945, no caso em que .  Considere o conjunto das partes de , ou seja, o conjunto formado por todos os subconjuntos de . Este conjunto possui elementos, sendo um deles o conjunto vazio, pois para formar um subconjunto de , precisamos decidir se cada elemento de vai pertencer ou não a este subconjunto.  Defina e como o conjunto das partes de , menos o conjunto vazio. Desta forma possui elementos.  Observe que um elemento de é um subconjunto de e que a soma dos elementos de um elemento de será um número que pertence a . Pelo princípio da casa dos pombos, como temos mais elementos em do que em , pelo menos dois elementos possuem a mesma soma.  Se e forem disjuntos, acabou. Se não, considere e . Logo, os conjuntos e são disjuntos e a soma dos seus elementos é a mesma.   "
},
{
  "id": "example-19",
  "level": "2",
  "url": "section-7.html#example-19",
  "type": "Exemplo",
  "number": "2.1.6",
  "title": "",
  "body": "  Nove pontos são postos sobre a superfície de um tetraedro regular com 1cm de aresta. Prove que dentre esses pontos é possível achar dois com distância (espacial) não maior que 0.5cm.    Vamos particionar a superfície do tetraedro em 16 triângulos equiláteros congruentes, dividindo cada face em quatro partes usando suas bases médias. Agora vamos criar 8 regiões pintando esses triângulos de acordo com a seguinte regra: os triângulos que possuem um mesmo vértice do tetraedro serão pintados da mesma cor; dessa forma já usamos quatro cores diferentes para 12 triângulos e os outros quatro vamos pintar usando as demais cores.  De acordo com o Princípio da Casa dos Pombos, pelo menos dois dos nove pontos estarão na mesma região. Fica apenas faltando constatar que a distância máxima entre dois pontos da mesma região é no máximo 0.5cm.    "
},
{
  "id": "teorema-pcp-geral",
  "level": "2",
  "url": "section-7.html#teorema-pcp-geral",
  "type": "Teorema",
  "number": "2.1.7",
  "title": "",
  "body": "  Se pombos forem colocados em casas, então existe pelo menos uma casa contendo pelo menos pombos.   "
},
{
  "id": "example-20",
  "level": "2",
  "url": "section-7.html#example-20",
  "type": "Exemplo",
  "number": "2.1.8",
  "title": "",
  "body": "  Nove pontos são colocados no interior de um triângulo de área de forma que não tenha 3 pontos colineares. Mostre que podemos escolher três deles para serem os vértices de um triângulo de área no máximo igual a .    Sejam e os vértices do triângulo de área 4 . Considere três pontos e na arestas , de forma que e formem quatro triângulos, cada um com área de 1 .  Desta forma ao colocar os pontos no triâgulo , pelo princípio da casa dos pombos, existem pelo menos pontos em um dos quatro triângulos: e .   Triângulo subdividido.    Logo os três pontos que estão dentro de um destes 4 triângulos, por não serem colineares, formam um triângulo de área no máximo igual a 1 .   "
},
{
  "id": "exercise-32",
  "level": "2",
  "url": "section-7.html#exercise-32",
  "type": "Exercício",
  "number": "2.1.5.1",
  "title": "",
  "body": " Qual é o número mínimo de pessoas que deve haver em um grupo para que possamos garantir que nele haja pelo menos 5 pessoas nascidas no mesmo mês?   49   Pelo PCP basta encontrar o menor número inteiro , tal que . Como , o valor de é 5.  "
},
{
  "id": "exercise-33",
  "level": "2",
  "url": "section-7.html#exercise-33",
  "type": "Exercício",
  "number": "2.1.5.2",
  "title": "",
  "body": " Cinquenta e um pontos são postos no interior de um quadrado de lado 1 metro. Prove que existe um conjunto de três desses pontos que podem ser cobertos por um quadrado de lado 20 centímetros.   Particione o quadrado de em 25 quadrados menores de . Como (pois ) pelo PCP, pelo menos 1 quadrado de contém 3 pontos.  "
},
{
  "id": "exercise-34",
  "level": "2",
  "url": "section-7.html#exercise-34",
  "type": "Exercício",
  "number": "2.1.5.3",
  "title": "",
  "body": " Em cada casa de um tabuleiro é colocado um dos números . Prove que, dentre as oito somas ao longo de uma mesma linha, coluna ou diagonal, existem duas iguais.   O valor máximo possível para uma soma é 3 (se houver três números 1) e o mínimo possível é -3. No total, as somas possíveis pertencem ao conjunto , ou seja, são 7 valores possíveis. Como no total são 8 somas (3 linhas + 3 colunas + 2 diagonais), pelo Princípio da Casa dos Pombos, pelo menos duas somas são iguais.  "
},
{
  "id": "exercise-35",
  "level": "2",
  "url": "section-7.html#exercise-35",
  "type": "Exercício",
  "number": "2.1.5.4",
  "title": "",
  "body": " Prove que de qualquer conjunto de dez inteiros podemos escolher um subconjunto cuja soma é um múltiplo de 10.   Seja um conjunto com 10 inteiros. Defina as somas parciais: Se algum (Ou o resto da divisão dealgum por 10 for igual a zero), o problema acabou.  Caso contrário, os restos dessas 10 somas na divisão por 10 estão entre 1 e 9. Como são 10 somas e 9 restos possíveis, pelo PCP, pelo menos duas somas deixam o mesmo resto, ou seja, com . Subtraindo, temos .  "
},
{
  "id": "exercise-36",
  "level": "2",
  "url": "section-7.html#exercise-36",
  "type": "Exercício",
  "number": "2.1.5.5",
  "title": "",
  "body": " Prove que existe uma potência de 3 terminada nos dígitos 001 (na base decimal).   Considere as 1001 potências de 3: . Existem 1000 restos possíveis na divisão por 1000 (de 0 a 999). Pelo PCP, existem duas potências com o mesmo resto, ou seja, com .  Portanto, , o que implica . Como o MDC de 3 e 1000 é 1, não é divisível por 1000, logo , ou seja, . Isso significa que essa potência termina em 001.  "
},
{
  "id": "exercise-37",
  "level": "2",
  "url": "section-7.html#exercise-37",
  "type": "Exercício",
  "number": "2.1.5.6",
  "title": "",
  "body": " (Longlist IMO 1977 - Romênia) Dados 37 pontos no espaço com coordenadas inteiras, prove que pelo menos um dos triângulos formado por três destes pontos possui o baricentro com coordenadas inteiras.   O baricentro é dado por . Temos 37 pontos, como , há pelo menos 13 pontos com o mesmo resto na divisão por 3 na primeira coordenada. Ou seja, quaisquer 3 desses, a soma será múltiplo de 3, na primeira coordenada.  Olhando para a 2ª coordenada, dos 13 pontos temos pelo menos com a 2ª coordenada com mesmo resto na divisão por 3. Sejam esses 5 pontos. Quaisquer 3 desses pontos geram um triângulo cujo baricentro possui as 2 primeiras coordenadas inteiras.  Agora, precisamos mostrar que dos 5 inteiros que estão na 3ª coordenada dos pontos , sempre há 3 cuja soma é um múltiplo de 3.  1º caso: os 3 restos possíveis na divisão por 3 (0, 1 e 2) aparecem. Neste caso, basta usar esses 3 pontos ( ).  2º caso: Um dos restos não aparece. Então, temos 5 números e 2 restos possíveis. Como , pelo menos 3 possuem o mesmo resto. Logo, usando esses três pontos, o baricentro terá coordenadas inteiras.    "
},
{
  "id": "exercise-38",
  "level": "2",
  "url": "section-7.html#exercise-38",
  "type": "Exercício",
  "number": "2.1.5.7",
  "title": "",
  "body": " Em cada casa de um tabuleiro é posto um inteiro de modo que a diferença positiva entre dois os inteiros de duas casas vizinhas (lado em comum) é no máximo 5. Prove que dois destes inteiros devem ser iguais.   Seja o menor valor do tabuleiro.  De para um vizinho o valor máximo é ;  A distância máxima entre dois quadrados do tabuleiro pode ser dada quando um dos quadrados está no canto inferior esquerdo e o outro no canto superior direito. Logo, a distância máxima é .  Portanto, o valor máximo possível é Assim, os números do tabuleiro podem variar de até . No total são números possíveis e são quadrados. Pelo PCP, pelo menos dois quadrados vão ter o mesmo número.  "
},
{
  "id": "exercise-39",
  "level": "2",
  "url": "section-7.html#exercise-39",
  "type": "Exercício",
  "number": "2.1.5.8",
  "title": "",
  "body": " Trinta e três torres são postas em um tabuleiro 8x8. Prove que podemos escolher cinco delas sem que nenhuma ataque a outra.   Ordene as linhas de forma decrescente pela quantidade de torres: . A linha com mais torres possui pelo menos .  Considere apenas as outras linhas (são 7), e pelo menos torres. é o número mínimo de torres na linha .  Considere apenas as linhas . São 6 linhas e pelo menos torres. é o mínimo de torres na linha .  Para são 5 linhas e pelo menos 12 torres. na linha .  Para são 4 linhas e pelo menos 4 torres. Então pelo menos 1 linha possui 1 torre.  Olhando apenas para as linhas , vamos selecionar 5 torres que não se atacam. Selecione a única torre da linha . Na linha selecione a única torre que não está na coluna da torre de . Seguindo assim, selecionamos as 5 torres que não se atacam.  "
},
{
  "id": "exercise-40",
  "level": "2",
  "url": "section-7.html#exercise-40",
  "type": "Exercício",
  "number": "2.1.5.9",
  "title": "",
  "body": " (Longlist IMO 1979 Bulgária) Colocamos reis em um tabuleiro infinito. Prove que podemos escolher deles de modo que não existam dois que se ataquem.   Um rei na casa pode atacar as casas com coordenadas que diferem no máximo por 1. Ou seja, se outro rei está na casa , um pode atacar o outro se e . Além disso, se dois reis estão em casas com mesma paridade, eles não podem atacar um ao outro, pois ou .  Considere as casas divididas em 4 grupos: Casa 1 (PAR, PAR); Casa 2 (PAR, ÍMPAR); Casa 3 (ÍMPAR, PAR); Casa 4 (ÍMPAR, ÍMPAR). Como temos , pelo PCP, pelo menos reis estão na mesma classe (casa), logo não se atacam.  "
},
{
  "id": "exercise-41",
  "level": "2",
  "url": "section-7.html#exercise-41",
  "type": "Exercício",
  "number": "2.1.5.10",
  "title": "",
  "body": " Prove que de qualquer subconjunto de elementos do conjunto é possível escolher dois que sejam primos entre si.   Observe que o MDC de dois números consecutivos é igual a 1: . Dos números consecutivos serão selecionados . Se selecionarmos 2 consecutivos eles serão primos entre si.  Só existem duas maneiras de selecionar números dentre sem selecionar dois consecutivos. Selecione todos os pares ou todos os ímpares. Ao selecionar o -ésimo elemento ele terá paridade diferente dos demais elementos e ficará entre dois números previamente selecionados. Logo, teremos 3 números consecutivos. Quaisquer 2 consecutivos, desses 3, serão primos entre si.  "
},
{
  "id": "exercise-42",
  "level": "2",
  "url": "section-7.html#exercise-42",
  "type": "Exercício",
  "number": "2.1.5.11",
  "title": "",
  "body": " Quarenta estudantes participaram de uma olimpíada de matemática. A prova consistia de cinco problemas ao todo. Sabe-se que cada problema foi resolvido corretamente por pelo menos 23 participantes. Prove que deve existir dois participantes tais que todo problema foi resolvido por pelo menos um deles dois.   Existem soluções corretas. Como , pelo PCP, pelo menos 1 estudante acertou pelo menos 3 problemas. Chamaremos ele de A.  Digamos que A não resolveu dois problemas. Então, cada um deles foi resolvido por pelo menos 22 estudantes. São 44 soluções corretas e 39 estudantes. Como , pelo PCP, pelo menos 1 estudante acertou pelo menos esses dois problemas. Chame ele de B. Assim, todo problema da prova foi resolvido por A ou B.  "
},
{
  "id": "exercise-43",
  "level": "2",
  "url": "section-7.html#exercise-43",
  "type": "Exercício",
  "number": "2.1.5.12",
  "title": "",
  "body": " Prove que todo número natural tem um múltiplo que se escreve, na base 10, apenas com os algarismos 0 e 1.   Seja um número natural qualquer. Considere os números (com dígitos). São mais números que restos possíveis na divisão por . Pelo PCP, pelo menos 2 possuem o mesmo resto: digamos (com dígitos) e (com dígitos, ). A diferença entre eles é , que é um múltiplo desejado.  "
},
{
  "id": "exercise-44",
  "level": "2",
  "url": "section-7.html#exercise-44",
  "type": "Exercício",
  "number": "2.1.5.13",
  "title": "",
  "body": " Mostre que se escolhemos 800 pontos de um cubo de aresta 10, pelo menos um dos segmentos determinados por esses pontos tem comprimento menor que 2.   Divida as arestas em segmentos de tamanho . Assim, cada aresta tem 9 segmentos e podemos subdividir o cubo em cubos menores. Como são 800 pontos e 729 cubos, pelo PCP, pelo menos 1 cubo vai possuir pelo menos 2 pontos. A distância máxima dentro de um cubo desses é a sua diagonal: .  "
},
{
  "id": "exercise-45",
  "level": "2",
  "url": "section-7.html#exercise-45",
  "type": "Exercício",
  "number": "2.1.5.14",
  "title": "",
  "body": " Um mestre de xadrez, preparando-se para um torneio, joga, durante onze semanas, pelo menos uma partida por dia mas não mais que doze partidas por semana. Prove que existe um conjunto de dias consecutivos durante os quais ele joga exatamente 20 partidas.   11 semanas são 77 dias. Seja a soma do número de jogos do dia 1 até o dia . Temos (pois o total de jogos ). Defina . Assim, .  São 154 valores (os e os ) e 152 números possíveis. Pelo PCP, pelo menos 2 valores precisam ser iguais. Como e são estritamente crescentes, os dois valores que são iguais precisam ser para algum e algum . Logo, . Entre os dias e foram jogadas 20 partidas.  "
},
{
  "id": "exercise-46",
  "level": "2",
  "url": "section-7.html#exercise-46",
  "type": "Exercício",
  "number": "2.1.5.15",
  "title": "",
  "body": " Escolha, dentre os elementos do conjunto , 101 números ao acaso. Mostre que, entre os números escolhidos, há dois números tais que um deles divide o outro.   Reescreva os elementos do conjunto da seguinte maneira: , de maneira que seja a maior potência de 2 possível e seja ímpar. Como são 200 números (100 pares e 100 ímpares), no máximo 100 's serão distintos. No conjunto, como serão escolhidos 101 números, pelo menos dois 's serão iguais: . Os números serão da forma e . Se , então o menor número divide o maior.  "
},
{
  "id": "section-8",
  "level": "1",
  "url": "section-8.html",
  "type": "Seção",
  "number": "2.2",
  "title": "O Pincípio da Casa dos Pombos II",
  "body": " O Pincípio da Casa dos Pombos II   Introdução  Nesta aula vamos continuar praticando as ideias da aula anterior, aplicando o princípio da casa dos pombos em problemas mais sofisticados e em alguns tipos de problemas que chamaremos de problemas de coloração.    Problemas Resolvidos    Cada casa de um tabuleiro é pintada de preto ou de branco. Mostre que é possível encontrar um retângulo, formado por casas do tabuleiro e com lados paralelos aos do tabuleiro original, cujas quatro casas localizadas em seus vértices tenham a mesma cor.    Cada coluna deste tabuleiro tem 3 casas e, portanto, pode ser pintada de formas distintas (tipos 1 a 8).     Observe que, se uma coluna totalmente branca (tipo 1) for escolhida, bastaria qualquer outra coluna que tenha pelo menos duas casas brancas (tipos 2, 3 ou 4) para formar um retângulo com vértices da mesma cor. Com isso, para evitar a formação do retângulo, nos restariam apenas quatro outros tipos de pinturas para preencher as sete colunas do tabuleiro. Daí, pelo princípio da casa dos pombos, teríamos obrigatoriamente duas colunas iguais, formando o retângulo. O mesmo raciocínio ocorre se tivermos uma coluna totalmente preta (tipo 8).  Agora suponha que nenhuma das colunas seja do tipo 1 (todas brancas) ou 8 (todas pretas). Dessa forma, restariam apenas 6 tipos possíveis de pinturas para as colunas. Como o tabuleiro possui 7 colunas, pelo princípio da casa dos pombos, pelo menos duas delas seriam exatamente iguais, o que garante a existência de um retângulo com os quatro vértices da mesma cor.      (Belarus 2007 adaptado) Os pontos de um plano são pintados usando três cores. Prove que existe um triângulo isósceles monocromático.    Construa um círculo com centro na cor verde. Se o círculo possuir pelo menos 2 pontos verdes, o centro e esses dois pontos formam um triângulo isósceles. Se o círculo não possui 2 pontos verdes, ele possui no máximo 1 ponto verde.  No círculo que possui no máximo 1 ponto verde, podemos selecionar 5 pontos (não verdes) que formam os vértices de um pentágono regular.  Cada ponto, dentre os cinco, só pode ser azul ou vermelho. Portanto, pelo menos 3 serão da mesma cor. Esses 3 pontos da mesma cor formam os vértices de um triângulo isósceles.  Triângulo subdividido.          (Leningrado) Considere 70 inteiros positivos distintos menores ou iguais a 200. Prove que existem dois deles cuja diferença é 4, 5 ou 9.    Sejam esses inteiros positivos. Considere as seguintes listas:       Temos um total de 210 números distribuídos nessas três listas. Como o maior número original é no máximo 200, o maior número gerado será . Todos os 210 números estão compreendidos entre 1 e 209 (inclusive). Portanto, pelo princípio da casa dos pombos, existirão pelo menos dois valores iguais.  Como os números dentro de uma mesma lista são sempre diferentes entre si, esses dois valores iguais devem pertencer a listas diferentes. Ao igualarmos dois termos de listas distintas, a diferença entre os elementos originais corresponderá exatamente às constantes somadas (4, 9 ou ), satisfazendo a condição do problema.       (Teste Cone Sul) Os inteiros 1, 2, ..., 200 são divididos em 50 conjuntos. Mostre que pelo menos um desses 50 conjuntos contém três números distintos que podem ser medidas dos lados de um mesmo triângulo.    Pelo Princípio da Casa dos Pombos, dentre os 101 inteiros (que estão distribuídos em 50 conjuntos), pelo menos três deles devem pertencer a um mesmo conjunto, uma vez que .  Sejam tais inteiros encontrados no mesmo conjunto. Temos que a soma dos dois menores satisfaz a desigualdade do triângulo: . Como o maior elemento possível do conjunto é 200, temos , implicando que . Portanto, , e podem ser medidas dos lados de um mesmo triângulo.      Problemas Propostos  Mostre que para todo de qualquer subconjunto de elementos do conjunto podemos escolher dois cuja diferença é maior que e menor que .  Vamos provar por absurdo. Seja o subconjunto escolhido, com seus elementos ordenados de forma crescente. Suponha que não existam dois elementos em com diferença estritamente entre e . Ou seja, nenhuma diferença pertence ao intervalo .  A diferença máxima possível entre o maior e o menor elemento de é (ocorre se escolhermos as extremidades e ). Isso implica que a diferença entre dois elementos consecutivos de (os \"saltos\" ) deve ser sempre menor ou igual a . Se houvesse um salto consecutivo , a distância total ultrapassaria (já que os outros saltos medem pelo menos ), o que é impossível.  Agora, considere a diferença de todos os elementos em relação ao primeiro: . Temos uma sequência crescente de distâncias: . Como nossa premissa exige evitar absolutamente o intervalo , cada valor da sequência deve ficar obrigatoriamente na região ou na região .  Se todos os ficassem na região , teríamos elementos (contando com o próprio ) espremidos num intervalo numérico de tamanho máximo . Pelo Princípio da Casa dos Pombos, pelo menos dois elementos teriam que possuir o mesmo valor, o que é um absurdo pois o conjunto exige elementos distintos. Logo, a sequência precisa, em algum momento, \"pular\" da região para a região .  Como vimos que o salto máximo permitido entre elementos é , a única maneira matemática de atravessar o \"buraco\" proibido de é partindo exatamente do valor e dando um salto exato de tamanho , chegando cravado em . Isso significa que obrigatoriamente contém os elementos , e . Porém, ao fixarmos esses três elementos, as opções para os demais elementos ficam tão restritas para não quebrar a regra da diferença em relação a eles, que se torna impossível escolher elementos distintos sem violar o intervalo proibido. Logo, a nossa suposição inicial colapsa e sempre haverá uma diferença dentro do intervalo desejado.   Em uma sapataria existem 200 botas de tamanho 41, 200 botas de tamanho 42, e 200 botas de tamanho 43. Dessas 600 botas, 300 são para o pé esquerdo e 300 para o direito. Prove que existem pelo menos 100 pares de botas usáveis.  Onze estudantes formaram cinco grupos de estudo. Prove que existem dois alunos A e B, tais que em todo grupo que inclui A também inclui B.  Prove que se escolhermos mais do que números do conjunto , então um deles será múltiplo de outro. Isso pode ser evitado com números?  Dado um inteiro positivo , podemos escrevê-lo de modo único na forma , em que e é ímpar. Chamaremos de parte ímpar do número . No conjunto só podem existir possíveis partes ímpares, a saber: . Se escolhermos mais do que números, pelo princípio da casa dos pombos, existem dois números e que têm a mesma parte ímpar, ou seja, e . Mas então, supondo sem perda de generalidade , concluímos que .  O resultado pode ser evitado escolhendo-se exatamente números. Um exemplo é escolhermos os números .   (Torneio das Cidades 1994) Existem 20 alunos em uma escola. Quaisquer dois deles possuem um avô em comum. Prove que pelo menos 14 deles possuem um avô em comum.  (Rússia 1997) Uma sala de aula possui 33 alunos. Cada aluno tem uma música e um cantor favorito. Certo dia, cada um deles perguntou aos demais suas músicas e cantores favoritos. Em seguida, cada um falou dois números: o primeiro era a quantidade de alunos que gostavam da mesma música e o segundo, a quantidade de alunos que tinham o mesmo cantor favorito. Sabe-se que cada um dos números de 0 a 10 apareceu entre as respostas. Mostre que existem dois alunos que gostam do mesmo cantor e da mesma música.  Suponha que para algum inteiro a soma de inteiros positivos distintos é menor que . Mostre que existem dois deles cuja soma é .  Existe algum conjunto A formado por sete inteiros positivos, nenhum dos quais maior que 24, tal que as somas dos elementos de cada um dos seus 127 subconjuntos não-vazios sejam distintas duas a duas?  Não existe. Por absurdo, suponha satisfazendo a condição do enunciado. Note que a soma máxima é estritamente menor que . De fato, os inteiros 24, 23, 22 e 21 não podem estar simultaneamente em A (pois ), bem como 24, 23, 19 e 18 também não podem (pois ). Como a soma mínima dos elementos de um subconjunto não vazio é e a soma máxima é menor que , existem no máximo 126 valores possíveis para a soma dos elementos de cada subconjunto. Como o conjunto A possui subconjuntos não-vazios, o Princípio da Casa dos Pombos garante que existem dois subconjuntos distintos com a mesma soma, o que gera um absurdo.   (USAMO 1985) Em uma festa há pessoas. Prove que existem duas pessoas tais que, das pessoas restantes, é possível achar onde cada uma delas conhece ou não conhece ambas.  O plano é pintado usando duas cores. Prove que existem dois pontos de mesma cor distando exatamente um metro.  Considere um triângulo equilátero desenhado no plano com lado de exatamente metro. Este triângulo possui vértices. Como o plano inteiro foi pintado utilizando apenas cores, pelo Princípio da Casa dos Pombos, pelo menos dois desses três vértices deverão compartilhar obrigatoriamente a mesma cor. Como a distância entre quaisquer dois vértices desse triângulo equilátero é de metro, a afirmação está provada.   (Putnam) O plano é pintado usando três cores. Prove que existem dois pontos de mesma cor distando exatamente um metro.  Vamos utilizar novamente uma prova por absurdo. Suponha que não existam dois pontos com a mesma cor a uma distância de metro.  Considere dois triângulos equiláteros de lado metro unidos por um lado em comum, formando a figura de um losango. Para evitar que dois pontos a metro de distância tenham a mesma cor, os três vértices de cada um desses triângulos devem ter cores totalmente distintas entre si. Como os triângulos compartilham a aresta central (que já consome duas cores), os dois vértices mais afastados do losango precisarão obrigatoriamente repetir a terceira cor.  A distância euclidiana entre esses vértices opostos do losango (a sua diagonal maior) é exatamente metros. Isso gera uma nova regra em nosso plano hipotético: qualquer par de pontos distando metros deve compartilhar a mesma cor.  Se fixarmos um ponto central e o rotacionarmos em torno de seu próprio eixo, concluímos que todo círculo centrado nesse ponto e possuindo um raio exato de metros será inteiramente formado por pontos da mesma cor do centro. Como o raio é maior que ( ), esse círculo monocromático é largo o suficiente para conter, desenhada dentro de sua própria circunferência, uma corda medindo exatamente metro. As extremidades dessa corda formariam dois pontos da mesma cor localizados a exatos metro de distância, quebrando a nossa suposição e demonstrando a veracidade do teorema original.   O plano é totalmente pintado usando duas cores. Prove que existe um retângulo cujos vértices são todos da mesma cor.  (IMO 1983) Cada ponto do perímetro de um triângulo equilátero é pintado de uma de duas cores. Mostre que é possível escolher três pontos da mesma cor formando um triângulo retângulo.  Nove pontos de um icoságono regular são pintados de vermelho. Prove que podemos encontrar três deles formando um triângulo isósceles.  (Rússia 2004) Cada ponto de coordenadas inteiras é pintado de uma de três cores, sendo cada cor usada pelo menos uma vez. Prove que podemos encontrar um triângulo retângulo cujos vértices são de cores distintas.  O plano é pintado usando três cores. Prove que podemos encontrar um triângulo retângulo isósceles com os três vértices da mesma cor.    "
},
{
  "id": "prob-1-retangulo",
  "level": "2",
  "url": "section-8.html#prob-1-retangulo",
  "type": "Exemplo",
  "number": "2.2.1",
  "title": "",
  "body": "  Cada casa de um tabuleiro é pintada de preto ou de branco. Mostre que é possível encontrar um retângulo, formado por casas do tabuleiro e com lados paralelos aos do tabuleiro original, cujas quatro casas localizadas em seus vértices tenham a mesma cor.    Cada coluna deste tabuleiro tem 3 casas e, portanto, pode ser pintada de formas distintas (tipos 1 a 8).     Observe que, se uma coluna totalmente branca (tipo 1) for escolhida, bastaria qualquer outra coluna que tenha pelo menos duas casas brancas (tipos 2, 3 ou 4) para formar um retângulo com vértices da mesma cor. Com isso, para evitar a formação do retângulo, nos restariam apenas quatro outros tipos de pinturas para preencher as sete colunas do tabuleiro. Daí, pelo princípio da casa dos pombos, teríamos obrigatoriamente duas colunas iguais, formando o retângulo. O mesmo raciocínio ocorre se tivermos uma coluna totalmente preta (tipo 8).  Agora suponha que nenhuma das colunas seja do tipo 1 (todas brancas) ou 8 (todas pretas). Dessa forma, restariam apenas 6 tipos possíveis de pinturas para as colunas. Como o tabuleiro possui 7 colunas, pelo princípio da casa dos pombos, pelo menos duas delas seriam exatamente iguais, o que garante a existência de um retângulo com os quatro vértices da mesma cor.   "
},
{
  "id": "prob-2-triangulo-isoceles",
  "level": "2",
  "url": "section-8.html#prob-2-triangulo-isoceles",
  "type": "Exemplo",
  "number": "2.2.3",
  "title": "",
  "body": "  (Belarus 2007 adaptado) Os pontos de um plano são pintados usando três cores. Prove que existe um triângulo isósceles monocromático.    Construa um círculo com centro na cor verde. Se o círculo possuir pelo menos 2 pontos verdes, o centro e esses dois pontos formam um triângulo isósceles. Se o círculo não possui 2 pontos verdes, ele possui no máximo 1 ponto verde.  No círculo que possui no máximo 1 ponto verde, podemos selecionar 5 pontos (não verdes) que formam os vértices de um pentágono regular.  Cada ponto, dentre os cinco, só pode ser azul ou vermelho. Portanto, pelo menos 3 serão da mesma cor. Esses 3 pontos da mesma cor formam os vértices de um triângulo isósceles.  Triângulo subdividido.       "
},
{
  "id": "prob-3-diferenca",
  "level": "2",
  "url": "section-8.html#prob-3-diferenca",
  "type": "Exemplo",
  "number": "2.2.5",
  "title": "",
  "body": "  (Leningrado) Considere 70 inteiros positivos distintos menores ou iguais a 200. Prove que existem dois deles cuja diferença é 4, 5 ou 9.    Sejam esses inteiros positivos. Considere as seguintes listas:       Temos um total de 210 números distribuídos nessas três listas. Como o maior número original é no máximo 200, o maior número gerado será . Todos os 210 números estão compreendidos entre 1 e 209 (inclusive). Portanto, pelo princípio da casa dos pombos, existirão pelo menos dois valores iguais.  Como os números dentro de uma mesma lista são sempre diferentes entre si, esses dois valores iguais devem pertencer a listas diferentes. Ao igualarmos dois termos de listas distintas, a diferença entre os elementos originais corresponderá exatamente às constantes somadas (4, 9 ou ), satisfazendo a condição do problema.   "
},
{
  "id": "prob-5-triangulo-lados",
  "level": "2",
  "url": "section-8.html#prob-5-triangulo-lados",
  "type": "Exemplo",
  "number": "2.2.6",
  "title": "",
  "body": "  (Teste Cone Sul) Os inteiros 1, 2, ..., 200 são divididos em 50 conjuntos. Mostre que pelo menos um desses 50 conjuntos contém três números distintos que podem ser medidas dos lados de um mesmo triângulo.    Pelo Princípio da Casa dos Pombos, dentre os 101 inteiros (que estão distribuídos em 50 conjuntos), pelo menos três deles devem pertencer a um mesmo conjunto, uma vez que .  Sejam tais inteiros encontrados no mesmo conjunto. Temos que a soma dos dois menores satisfaz a desigualdade do triângulo: . Como o maior elemento possível do conjunto é 200, temos , implicando que . Portanto, , e podem ser medidas dos lados de um mesmo triângulo.   "
},
{
  "id": "exercise-47",
  "level": "2",
  "url": "section-8.html#exercise-47",
  "type": "Exercício",
  "number": "2.2.3.1",
  "title": "",
  "body": "Mostre que para todo de qualquer subconjunto de elementos do conjunto podemos escolher dois cuja diferença é maior que e menor que .  Vamos provar por absurdo. Seja o subconjunto escolhido, com seus elementos ordenados de forma crescente. Suponha que não existam dois elementos em com diferença estritamente entre e . Ou seja, nenhuma diferença pertence ao intervalo .  A diferença máxima possível entre o maior e o menor elemento de é (ocorre se escolhermos as extremidades e ). Isso implica que a diferença entre dois elementos consecutivos de (os \"saltos\" ) deve ser sempre menor ou igual a . Se houvesse um salto consecutivo , a distância total ultrapassaria (já que os outros saltos medem pelo menos ), o que é impossível.  Agora, considere a diferença de todos os elementos em relação ao primeiro: . Temos uma sequência crescente de distâncias: . Como nossa premissa exige evitar absolutamente o intervalo , cada valor da sequência deve ficar obrigatoriamente na região ou na região .  Se todos os ficassem na região , teríamos elementos (contando com o próprio ) espremidos num intervalo numérico de tamanho máximo . Pelo Princípio da Casa dos Pombos, pelo menos dois elementos teriam que possuir o mesmo valor, o que é um absurdo pois o conjunto exige elementos distintos. Logo, a sequência precisa, em algum momento, \"pular\" da região para a região .  Como vimos que o salto máximo permitido entre elementos é , a única maneira matemática de atravessar o \"buraco\" proibido de é partindo exatamente do valor e dando um salto exato de tamanho , chegando cravado em . Isso significa que obrigatoriamente contém os elementos , e . Porém, ao fixarmos esses três elementos, as opções para os demais elementos ficam tão restritas para não quebrar a regra da diferença em relação a eles, que se torna impossível escolher elementos distintos sem violar o intervalo proibido. Logo, a nossa suposição inicial colapsa e sempre haverá uma diferença dentro do intervalo desejado.  "
},
{
  "id": "exercise-48",
  "level": "2",
  "url": "section-8.html#exercise-48",
  "type": "Exercício",
  "number": "2.2.3.2",
  "title": "",
  "body": "Em uma sapataria existem 200 botas de tamanho 41, 200 botas de tamanho 42, e 200 botas de tamanho 43. Dessas 600 botas, 300 são para o pé esquerdo e 300 para o direito. Prove que existem pelo menos 100 pares de botas usáveis. "
},
{
  "id": "exercise-49",
  "level": "2",
  "url": "section-8.html#exercise-49",
  "type": "Exercício",
  "number": "2.2.3.3",
  "title": "",
  "body": "Onze estudantes formaram cinco grupos de estudo. Prove que existem dois alunos A e B, tais que em todo grupo que inclui A também inclui B. "
},
{
  "id": "exercise-50",
  "level": "2",
  "url": "section-8.html#exercise-50",
  "type": "Exercício",
  "number": "2.2.3.4",
  "title": "",
  "body": "Prove que se escolhermos mais do que números do conjunto , então um deles será múltiplo de outro. Isso pode ser evitado com números?  Dado um inteiro positivo , podemos escrevê-lo de modo único na forma , em que e é ímpar. Chamaremos de parte ímpar do número . No conjunto só podem existir possíveis partes ímpares, a saber: . Se escolhermos mais do que números, pelo princípio da casa dos pombos, existem dois números e que têm a mesma parte ímpar, ou seja, e . Mas então, supondo sem perda de generalidade , concluímos que .  O resultado pode ser evitado escolhendo-se exatamente números. Um exemplo é escolhermos os números .  "
},
{
  "id": "exercise-51",
  "level": "2",
  "url": "section-8.html#exercise-51",
  "type": "Exercício",
  "number": "2.2.3.5",
  "title": "",
  "body": "(Torneio das Cidades 1994) Existem 20 alunos em uma escola. Quaisquer dois deles possuem um avô em comum. Prove que pelo menos 14 deles possuem um avô em comum. "
},
{
  "id": "exercise-52",
  "level": "2",
  "url": "section-8.html#exercise-52",
  "type": "Exercício",
  "number": "2.2.3.6",
  "title": "",
  "body": "(Rússia 1997) Uma sala de aula possui 33 alunos. Cada aluno tem uma música e um cantor favorito. Certo dia, cada um deles perguntou aos demais suas músicas e cantores favoritos. Em seguida, cada um falou dois números: o primeiro era a quantidade de alunos que gostavam da mesma música e o segundo, a quantidade de alunos que tinham o mesmo cantor favorito. Sabe-se que cada um dos números de 0 a 10 apareceu entre as respostas. Mostre que existem dois alunos que gostam do mesmo cantor e da mesma música. "
},
{
  "id": "exercise-53",
  "level": "2",
  "url": "section-8.html#exercise-53",
  "type": "Exercício",
  "number": "2.2.3.7",
  "title": "",
  "body": "Suponha que para algum inteiro a soma de inteiros positivos distintos é menor que . Mostre que existem dois deles cuja soma é . "
},
{
  "id": "exercise-54",
  "level": "2",
  "url": "section-8.html#exercise-54",
  "type": "Exercício",
  "number": "2.2.3.8",
  "title": "",
  "body": "Existe algum conjunto A formado por sete inteiros positivos, nenhum dos quais maior que 24, tal que as somas dos elementos de cada um dos seus 127 subconjuntos não-vazios sejam distintas duas a duas?  Não existe. Por absurdo, suponha satisfazendo a condição do enunciado. Note que a soma máxima é estritamente menor que . De fato, os inteiros 24, 23, 22 e 21 não podem estar simultaneamente em A (pois ), bem como 24, 23, 19 e 18 também não podem (pois ). Como a soma mínima dos elementos de um subconjunto não vazio é e a soma máxima é menor que , existem no máximo 126 valores possíveis para a soma dos elementos de cada subconjunto. Como o conjunto A possui subconjuntos não-vazios, o Princípio da Casa dos Pombos garante que existem dois subconjuntos distintos com a mesma soma, o que gera um absurdo.  "
},
{
  "id": "exercise-55",
  "level": "2",
  "url": "section-8.html#exercise-55",
  "type": "Exercício",
  "number": "2.2.3.9",
  "title": "",
  "body": "(USAMO 1985) Em uma festa há pessoas. Prove que existem duas pessoas tais que, das pessoas restantes, é possível achar onde cada uma delas conhece ou não conhece ambas. "
},
{
  "id": "exercise-56",
  "level": "2",
  "url": "section-8.html#exercise-56",
  "type": "Exercício",
  "number": "2.2.3.10",
  "title": "",
  "body": "O plano é pintado usando duas cores. Prove que existem dois pontos de mesma cor distando exatamente um metro.  Considere um triângulo equilátero desenhado no plano com lado de exatamente metro. Este triângulo possui vértices. Como o plano inteiro foi pintado utilizando apenas cores, pelo Princípio da Casa dos Pombos, pelo menos dois desses três vértices deverão compartilhar obrigatoriamente a mesma cor. Como a distância entre quaisquer dois vértices desse triângulo equilátero é de metro, a afirmação está provada.  "
},
{
  "id": "exercise-57",
  "level": "2",
  "url": "section-8.html#exercise-57",
  "type": "Exercício",
  "number": "2.2.3.11",
  "title": "",
  "body": "(Putnam) O plano é pintado usando três cores. Prove que existem dois pontos de mesma cor distando exatamente um metro.  Vamos utilizar novamente uma prova por absurdo. Suponha que não existam dois pontos com a mesma cor a uma distância de metro.  Considere dois triângulos equiláteros de lado metro unidos por um lado em comum, formando a figura de um losango. Para evitar que dois pontos a metro de distância tenham a mesma cor, os três vértices de cada um desses triângulos devem ter cores totalmente distintas entre si. Como os triângulos compartilham a aresta central (que já consome duas cores), os dois vértices mais afastados do losango precisarão obrigatoriamente repetir a terceira cor.  A distância euclidiana entre esses vértices opostos do losango (a sua diagonal maior) é exatamente metros. Isso gera uma nova regra em nosso plano hipotético: qualquer par de pontos distando metros deve compartilhar a mesma cor.  Se fixarmos um ponto central e o rotacionarmos em torno de seu próprio eixo, concluímos que todo círculo centrado nesse ponto e possuindo um raio exato de metros será inteiramente formado por pontos da mesma cor do centro. Como o raio é maior que ( ), esse círculo monocromático é largo o suficiente para conter, desenhada dentro de sua própria circunferência, uma corda medindo exatamente metro. As extremidades dessa corda formariam dois pontos da mesma cor localizados a exatos metro de distância, quebrando a nossa suposição e demonstrando a veracidade do teorema original.  "
},
{
  "id": "exercise-58",
  "level": "2",
  "url": "section-8.html#exercise-58",
  "type": "Exercício",
  "number": "2.2.3.12",
  "title": "",
  "body": "O plano é totalmente pintado usando duas cores. Prove que existe um retângulo cujos vértices são todos da mesma cor. "
},
{
  "id": "exercise-59",
  "level": "2",
  "url": "section-8.html#exercise-59",
  "type": "Exercício",
  "number": "2.2.3.13",
  "title": "",
  "body": "(IMO 1983) Cada ponto do perímetro de um triângulo equilátero é pintado de uma de duas cores. Mostre que é possível escolher três pontos da mesma cor formando um triângulo retângulo. "
},
{
  "id": "exercise-60",
  "level": "2",
  "url": "section-8.html#exercise-60",
  "type": "Exercício",
  "number": "2.2.3.14",
  "title": "",
  "body": "Nove pontos de um icoságono regular são pintados de vermelho. Prove que podemos encontrar três deles formando um triângulo isósceles. "
},
{
  "id": "exercise-61",
  "level": "2",
  "url": "section-8.html#exercise-61",
  "type": "Exercício",
  "number": "2.2.3.15",
  "title": "",
  "body": "(Rússia 2004) Cada ponto de coordenadas inteiras é pintado de uma de três cores, sendo cada cor usada pelo menos uma vez. Prove que podemos encontrar um triângulo retângulo cujos vértices são de cores distintas. "
},
{
  "id": "exercise-62",
  "level": "2",
  "url": "section-8.html#exercise-62",
  "type": "Exercício",
  "number": "2.2.3.16",
  "title": "",
  "body": "O plano é pintado usando três cores. Prove que podemos encontrar um triângulo retângulo isósceles com os três vértices da mesma cor. "
},
{
  "id": "problemas-resolvidos",
  "level": "1",
  "url": "problemas-resolvidos.html",
  "type": "Seção",
  "number": "3.1",
  "title": "Paridade",
  "body": " Paridade  Todo número é par ou ímpar. Óbvio, não? Pois é com essa simples afirmação que vamos resolver os problemas deste capítulo.    Existe alguma solução inteira para a equação ?    Analise as quatro possibilidades de paridade do par (a, b).    Não. Se e tiverem paridades diferentes então um dos dois é par, de forma que par. Mas isso é uma contradição já que é ímpar. Agora, se e tiverem a mesma paridade então deve ser par e do mesmo modo chegamos a uma contradição. Logo, não há solução inteira.      (Leningrado 1990)   Paula comprou um caderno com 96 folhas, com páginas enumeradas de 1 a 192. Nicolas arrancou 25 folhas aleatórias e somou todos os 50 números escritos nestas folhas. É possível que esta soma seja 1990?    Observe que a soma dos números escritos em uma mesma folha sempre é ímpar. Dessa forma, se Nicolas arrancou 25 folhas, a soma de todos os números será ímpar. Pois é a soma de uma quantidade ímpar de números ímpares. Logo, esta soma não pode ser 1990.      Um gafanhoto vive na reta coordenada. Inicialmente, ele se encontra no ponto 1. Ele pode pular 1 ou 5 unidades, tanto para direita quanto para esquerda. Porém, a reta coordenada possui buracos em todos os pontos que são múltiplos de 4 (i.e. existem buracos nos pontos -4, 0, 4, 8 etc), então ele não pode pular para estes pontos. Pode o gafanhoto chegar ao ponto 3 após 2003 saltos?    Note que a cada salto, muda a paridade do ponto em que o gafanhoto se encontra. Logo, após 2003 saltos, ele estará em uma coordenada par. Portanto, não pode ser 3.      No reino da Frutilândia existe uma árvore mágica que possui 2005 maçãs e 2006 tomates. Todo dia um garoto sobe na árvore e come duas frutas. Quando ele come duas frutas iguais, nasce um tomate na árvore; quando ele come duas frutas diferentes, nasce uma maçã. Após alguns dias restará apenas uma fruta na árvore. Que fruta será?       Sempre que o garoto como dois tomates, o número de tomates diminui 1. Quando ele come duas maçãs, o número de tomates aumenta 1. E quando ele come uma fruta de cada tipo, o número de tomates diminui 1. Assim, a paridade do número de tomates sempre muda em cada etapa.  Quando o garoto pega duas frutas da árvore, o número de maçãs diminuirá de 2 ou permanecerá constante. Dessa forma a paridade do número de maçãs será sempre o mesmo. Como inicialmente tínhamos um número ímpar de maçãs, a quantidade delas continuará ímpar até o final. Logo, a última fruta deve ser uma maçã.      Um jogo consiste de 9 botões luminosos (de cor verde ou amarelo) dispostos da seguinte forma:      Apertando um botão do bordo do retângulo, trocam de cor ele e os seus vizinhos (do lado ou em diagonal). Apertando o botão do centro, trocam de cor todos os seus oito vizinhos, porém ele não. Inicialmente todos os botões estão verdes. É possível, apertando sucessivamente alguns botões, torná-los todos amarelos?    Note que ao apertar um dos botões 1, 3, 7 ou 9 trocamos de cor 4 botões. Apertando um dos botões 2, 4, 6 ou 8 trocamos a cor de 6 botões. Apertando o botão do centro trocamos a cor de 8 botões. Como 4, 6 e 8 são números pares a quantidade total de botões verdes é sempre um número ímpar e para ter os 9 botões amarelos, deveríamos ter zero botões verdes. Absurdo, já que 0 é um número par.     (Leningrado 1989)   Um grupo de K físicos e K químicos está sentado ao redor de uma mesa. Alguns deles sempre falam a verdade e outros sempre mentem. Sabe-se que o número de mentirosos entre os físicos e químicos é o mesmo. Quando foi perguntado: \"Qual é a profissão de seu vizinho da direita?\", todos responderam \"Químico.\" Mostre que K é par.     A única forma de alguém ter um Físico à sua direita é sendo um mentiroso. Como as pessoas estão sentadas em círculo, todo Físico tem exatamente uma pessoa sentada imediatamente à sua esquerda. Pela nossa regra, essa pessoa à esquerda precisa ser mentirosa.  Isso cria uma correspondência exata (uma bijeção): para cada Físico na roda, existe de forma única e exclusiva um mentiroso sentado à sua esquerda. Consequentemente, o número total de Físicos é igual ao número total de mentirosos na mesa. Como o problema define que existem Físicos no total, concluímos que:   Definindo os mentirosos físicos como e os mentirosos químicos como , temos a igualdade:   O total de mentirosos na mesa é   Então, é par.       Problemas Propostos   Os números estão escritos em sequência. É permitido permutar quaisquer dois elementos. É possível retornar à posição inicial após 2001 permutações?   Dizemos que uma sequência tem uma inversão quando um número maior vem antes de um número menor. O número de inversões de uma sequência é o número de pares com que podemos encontrar na sequência tais que aparece antes de . Por exemplo, o número de inversões da sequência é 2.  Note que ao permutarmos 2 números, a paridade do número de inversões muda.  No problema, a sequência inicial tem 0 inversões. Como são feitas 2001 permutações, temos 2001 mudanças de paridade do número de inversões. Dessa forma, o número de inversões final deve ser ímpar. Então não podemos ter, ao fim, a sequência inicial.    Um círculo está dividido em seis setores que estão marcados com os números no sentido horário. É permitido somar a dois setores vizinhos. É possível, repetindo esta operação várias vezes, fazer com que todos os números se tornem iguais?   Suponha que os números nos setores sejam e no sentido horário. Vamos chamar de o módulo do número . Note que ao somar 1 a dois setores vizinhos o valor de não se altera. Então . Desse modo, é impossível que todos os números sejam iguais pois teríamos .    É possível que as seis diferenças entre dois elementos de um conjunto de quatro números inteiros serem iguais a e ?   Se e são números inteiros, e possuem a mesma paridade.   Não. Imagine que o conjunto seja . Então podemos supor . Mas e e são diferenças de dois elementos do conjunto. Porém, todas as diferenças, com exceção de 3, são pares. Logo, é par. Isso é uma contradição já que esse valor é igual a 3 que é ímpar. Concluímos que não é possível que as diferenças sejam essas.    Raul falou que tinha dois anos a mais que Kátia. Kátia falou que tinha o dobro da idade de Pedro. Pedro falou que Raul tinha 17 anos. Mostre que um deles mentiu.   Suponha que ninguém mentiu. Então Raul tem 17 anos e portanto Kátia tem 15 anos. Mas Kátia tem o dobro da idade de Pedro e, portanto, sua idade deve ser par, contradição. Logo, alguém deve ter mentido.    (Torneio das Cidades 1987) Uma máquina dá cinco fichas vermelhas quando alguém insere uma ficha azul e dá cinco fichas azuis quando alguém insere uma ficha vermelha. Pedro possui apenas uma ficha azul e deseja obter a mesma quantidade de fichas azuis e vermelhas usando essa máquina. É possível fazer isto?   Não. Observe que quando Pedro insere uma ficha e recebe cinco seu número de fichas aumenta 4 unidades. Logo, a paridade do número de fichas não muda. Para ter a mesma quantidade de fichas azuis e vermelhas Pedro deve ter um número par de fichas, mas isso não é possível já que ele inicialmente só possui 1 ficha e 1 é ímpar.    (China 1986) Considere uma permutação dos números tal que entre dois números k existem k números. É ou não possível fazer isto?   Contados da esquerda para a direita, denotemos por e as posições do primeiro e segundo número , respectivamente. Note que . Como existem números entre dois números 's, devemos ter . Se é possível escrever os números em linha como no enunciado, obtemos: Somando as duas linhas, . Logo, a fração deve ser um inteiro par. Para , é ímpar e consequentemente não é possível dispormos esses números em linha.    (Rússia 2004) É possível colocarmos números inteiros positivos nas casas de um tabuleiro de modo que a soma dos números de cada linha e a soma dos números de cada coluna sejam primos? Justifique sua resposta.   Suponha que seja possível fazer tal construção. Sejam as somas dos números de cada uma das 9 linhas, e as somas dos números de cada uma das 2004 colunas. Como cada e são primos, estes devem ser números ímpares (já que são soma de pelo menos nove inteiros positivos e portanto são maiores que 2). Seja S a soma de todos os números do tabuleiro. Por um lado teríamos: donde concluímos que S é ímpar, pois é soma de 9 ímpares. Por outro lado: e daqui concluímos que S é par, pois é uma soma de uma quantidade par de ímpares, o que é um absurdo. Logo, tal construção não é possível.    O número A possui 17 dígitos. O número B possui os mesmos dígitos de A, porém em ordem inversa. É possível que todos os dígitos de sejam ímpares?   Não. Vamos mostrar que algum dos dígitos deve ser par. Considere a seguinte soma e se for par (teríamos ) então o problema acaba. Suponha então que isso não ocorre. A única possibilidade é a de que a soma anterior ficou maior do que ou igual a 10 e 1 foi adicionado a soma dos . Temos dois casos:   e a soma deles (acima de ) recebeu um 1 da soma anterior, isso implicaria que e o problema acabaria aqui;  o segundo caso é .   Vamos então supor que . Repare que se então . Se e tiverem paridades diferentes, um dos dois será par e então o problema acaba. Vamos supor que isso não ocorre. Para que isso não ocorra, a soma acima de também deve receber um 1 da soma anterior. Dessa forma, analogamente como fizermos com , podemos supor que . Usando o mesmo argumento de paridades diferentes entre e chegamos a suposição de que . Repetindo mais uma vez esse processo nós chegamos em . Com isso, nós concluímos que a soma acima de receberá um 1 da soma anterior que é a de . Isso quer dizer que . Porém, como não há soma antes de , devemos ter . Note que e têm paridades diferentes e então algum dos dois é par. Isso conclui a demonstração. Repare que esses argumentos valem para qualquer natural com um número ímpar de dígitos, basta que exista o dígito do meio nesse caso é o .    *Considere um tabuleiro pintado alternadamente de preto e branco da maneira usual. Em cada casa do tabuleiro, escrevemos 0 ou 1, de modo que a quantidade de 1's em cada linha e em cada coluna do tabuleiro é ímpar. Prove que a quantidade de 1's escritos nas casas brancas é par.   Seja o número escrito na casa da i-ésima linha e da j-ésima coluna, e . A casa (i, j) é branca se e somente se i e j possuem a mesma paridade. é a soma dos números nas 999 linhas de ordem ímpar. Como a soma dos números de cada linha é ímpar, L é ímpar. De maneira análoga, a soma dos números nas 1001 colunas de ordem par também é ímpar. Seja P o conjunto de todas as casas pretas que estão em colunas de ordem par, e a soma de todos os números escritos nas casas de P. Cada número escrito em uma casa de P aparece exatamente uma vez na soma L e exatamente uma vez na soma C. Ademais, cada número escrito em uma casa branca aparece exatamente uma vez na soma . Assim, a soma dos números escritos nas casas brancas é igual a que é par.    *(Ucrânia 1997) Considere um tabuleiro pintado de preto e branco da maneira usual e, em cada casa do tabuleiro, escreva um número inteiro, de modo que a soma dos números em cada coluna e em cada linha é par. Mostre que a soma dos números nas casas pretas é par.   A solução é análoga à do problema anterior. A casa é a casa da i-ésima linha e j-ésima coluna. A casa é preta se e somente se i e j têm paridades diferentes. Seja e a soma dos números nas k-ésima linha e coluna respectivamente. Então, é a soma das linhas de ordem ímpar e é a soma das colunas também de ordem ímpar. Como a soma dos números em cada coluna e em cada linha é par, e devem ser pares. Seja B o conjunto de todas as casas brancas em colunas de ordem ímpar, e a somas dos números escritos nas casas de B. Cada casa de B é contada uma vez em C e uma vez em L. Além disso, cada casa preta é contada exatamente uma vez na soma . Logo, a soma dos números nas casas pretas é que é par.    "
},
{
  "id": "prob-06",
  "level": "2",
  "url": "problemas-resolvidos.html#prob-06",
  "type": "Exemplo",
  "number": "3.1.1",
  "title": "",
  "body": "  Existe alguma solução inteira para a equação ?    Analise as quatro possibilidades de paridade do par (a, b).    Não. Se e tiverem paridades diferentes então um dos dois é par, de forma que par. Mas isso é uma contradição já que é ímpar. Agora, se e tiverem a mesma paridade então deve ser par e do mesmo modo chegamos a uma contradição. Logo, não há solução inteira.   "
},
{
  "id": "prob-03",
  "level": "2",
  "url": "problemas-resolvidos.html#prob-03",
  "type": "Exemplo",
  "number": "3.1.2",
  "title": "(Leningrado 1990).",
  "body": " (Leningrado 1990)   Paula comprou um caderno com 96 folhas, com páginas enumeradas de 1 a 192. Nicolas arrancou 25 folhas aleatórias e somou todos os 50 números escritos nestas folhas. É possível que esta soma seja 1990?    Observe que a soma dos números escritos em uma mesma folha sempre é ímpar. Dessa forma, se Nicolas arrancou 25 folhas, a soma de todos os números será ímpar. Pois é a soma de uma quantidade ímpar de números ímpares. Logo, esta soma não pode ser 1990.   "
},
{
  "id": "prob-05",
  "level": "2",
  "url": "problemas-resolvidos.html#prob-05",
  "type": "Exemplo",
  "number": "3.1.3",
  "title": "",
  "body": "  Um gafanhoto vive na reta coordenada. Inicialmente, ele se encontra no ponto 1. Ele pode pular 1 ou 5 unidades, tanto para direita quanto para esquerda. Porém, a reta coordenada possui buracos em todos os pontos que são múltiplos de 4 (i.e. existem buracos nos pontos -4, 0, 4, 8 etc), então ele não pode pular para estes pontos. Pode o gafanhoto chegar ao ponto 3 após 2003 saltos?    Note que a cada salto, muda a paridade do ponto em que o gafanhoto se encontra. Logo, após 2003 saltos, ele estará em uma coordenada par. Portanto, não pode ser 3.   "
},
{
  "id": "prob-01",
  "level": "2",
  "url": "problemas-resolvidos.html#prob-01",
  "type": "Exemplo",
  "number": "3.1.4",
  "title": "",
  "body": "  No reino da Frutilândia existe uma árvore mágica que possui 2005 maçãs e 2006 tomates. Todo dia um garoto sobe na árvore e come duas frutas. Quando ele come duas frutas iguais, nasce um tomate na árvore; quando ele come duas frutas diferentes, nasce uma maçã. Após alguns dias restará apenas uma fruta na árvore. Que fruta será?       Sempre que o garoto como dois tomates, o número de tomates diminui 1. Quando ele come duas maçãs, o número de tomates aumenta 1. E quando ele come uma fruta de cada tipo, o número de tomates diminui 1. Assim, a paridade do número de tomates sempre muda em cada etapa.  Quando o garoto pega duas frutas da árvore, o número de maçãs diminuirá de 2 ou permanecerá constante. Dessa forma a paridade do número de maçãs será sempre o mesmo. Como inicialmente tínhamos um número ímpar de maçãs, a quantidade delas continuará ímpar até o final. Logo, a última fruta deve ser uma maçã.   "
},
{
  "id": "prob-02",
  "level": "2",
  "url": "problemas-resolvidos.html#prob-02",
  "type": "Exemplo",
  "number": "3.1.6",
  "title": "",
  "body": "  Um jogo consiste de 9 botões luminosos (de cor verde ou amarelo) dispostos da seguinte forma:      Apertando um botão do bordo do retângulo, trocam de cor ele e os seus vizinhos (do lado ou em diagonal). Apertando o botão do centro, trocam de cor todos os seus oito vizinhos, porém ele não. Inicialmente todos os botões estão verdes. É possível, apertando sucessivamente alguns botões, torná-los todos amarelos?    Note que ao apertar um dos botões 1, 3, 7 ou 9 trocamos de cor 4 botões. Apertando um dos botões 2, 4, 6 ou 8 trocamos a cor de 6 botões. Apertando o botão do centro trocamos a cor de 8 botões. Como 4, 6 e 8 são números pares a quantidade total de botões verdes é sempre um número ímpar e para ter os 9 botões amarelos, deveríamos ter zero botões verdes. Absurdo, já que 0 é um número par.   "
},
{
  "id": "prob-04",
  "level": "2",
  "url": "problemas-resolvidos.html#prob-04",
  "type": "Exemplo",
  "number": "3.1.8",
  "title": "(Leningrado 1989).",
  "body": " (Leningrado 1989)   Um grupo de K físicos e K químicos está sentado ao redor de uma mesa. Alguns deles sempre falam a verdade e outros sempre mentem. Sabe-se que o número de mentirosos entre os físicos e químicos é o mesmo. Quando foi perguntado: \"Qual é a profissão de seu vizinho da direita?\", todos responderam \"Químico.\" Mostre que K é par.     A única forma de alguém ter um Físico à sua direita é sendo um mentiroso. Como as pessoas estão sentadas em círculo, todo Físico tem exatamente uma pessoa sentada imediatamente à sua esquerda. Pela nossa regra, essa pessoa à esquerda precisa ser mentirosa.  Isso cria uma correspondência exata (uma bijeção): para cada Físico na roda, existe de forma única e exclusiva um mentiroso sentado à sua esquerda. Consequentemente, o número total de Físicos é igual ao número total de mentirosos na mesa. Como o problema define que existem Físicos no total, concluímos que:   Definindo os mentirosos físicos como e os mentirosos químicos como , temos a igualdade:   O total de mentirosos na mesa é   Então, é par.   "
},
{
  "id": "prob-07",
  "level": "2",
  "url": "problemas-resolvidos.html#prob-07",
  "type": "Exercício",
  "number": "3.1.1",
  "title": "",
  "body": " Os números estão escritos em sequência. É permitido permutar quaisquer dois elementos. É possível retornar à posição inicial após 2001 permutações?   Dizemos que uma sequência tem uma inversão quando um número maior vem antes de um número menor. O número de inversões de uma sequência é o número de pares com que podemos encontrar na sequência tais que aparece antes de . Por exemplo, o número de inversões da sequência é 2.  Note que ao permutarmos 2 números, a paridade do número de inversões muda.  No problema, a sequência inicial tem 0 inversões. Como são feitas 2001 permutações, temos 2001 mudanças de paridade do número de inversões. Dessa forma, o número de inversões final deve ser ímpar. Então não podemos ter, ao fim, a sequência inicial.  "
},
{
  "id": "prob-08",
  "level": "2",
  "url": "problemas-resolvidos.html#prob-08",
  "type": "Exercício",
  "number": "3.1.2",
  "title": "",
  "body": " Um círculo está dividido em seis setores que estão marcados com os números no sentido horário. É permitido somar a dois setores vizinhos. É possível, repetindo esta operação várias vezes, fazer com que todos os números se tornem iguais?   Suponha que os números nos setores sejam e no sentido horário. Vamos chamar de o módulo do número . Note que ao somar 1 a dois setores vizinhos o valor de não se altera. Então . Desse modo, é impossível que todos os números sejam iguais pois teríamos .  "
},
{
  "id": "prob-09",
  "level": "2",
  "url": "problemas-resolvidos.html#prob-09",
  "type": "Exercício",
  "number": "3.1.3",
  "title": "",
  "body": " É possível que as seis diferenças entre dois elementos de um conjunto de quatro números inteiros serem iguais a e ?   Se e são números inteiros, e possuem a mesma paridade.   Não. Imagine que o conjunto seja . Então podemos supor . Mas e e são diferenças de dois elementos do conjunto. Porém, todas as diferenças, com exceção de 3, são pares. Logo, é par. Isso é uma contradição já que esse valor é igual a 3 que é ímpar. Concluímos que não é possível que as diferenças sejam essas.  "
},
{
  "id": "prob-10",
  "level": "2",
  "url": "problemas-resolvidos.html#prob-10",
  "type": "Exercício",
  "number": "3.1.4",
  "title": "",
  "body": " Raul falou que tinha dois anos a mais que Kátia. Kátia falou que tinha o dobro da idade de Pedro. Pedro falou que Raul tinha 17 anos. Mostre que um deles mentiu.   Suponha que ninguém mentiu. Então Raul tem 17 anos e portanto Kátia tem 15 anos. Mas Kátia tem o dobro da idade de Pedro e, portanto, sua idade deve ser par, contradição. Logo, alguém deve ter mentido.  "
},
{
  "id": "prob-11",
  "level": "2",
  "url": "problemas-resolvidos.html#prob-11",
  "type": "Exercício",
  "number": "3.1.5",
  "title": "",
  "body": " (Torneio das Cidades 1987) Uma máquina dá cinco fichas vermelhas quando alguém insere uma ficha azul e dá cinco fichas azuis quando alguém insere uma ficha vermelha. Pedro possui apenas uma ficha azul e deseja obter a mesma quantidade de fichas azuis e vermelhas usando essa máquina. É possível fazer isto?   Não. Observe que quando Pedro insere uma ficha e recebe cinco seu número de fichas aumenta 4 unidades. Logo, a paridade do número de fichas não muda. Para ter a mesma quantidade de fichas azuis e vermelhas Pedro deve ter um número par de fichas, mas isso não é possível já que ele inicialmente só possui 1 ficha e 1 é ímpar.  "
},
{
  "id": "prob-12",
  "level": "2",
  "url": "problemas-resolvidos.html#prob-12",
  "type": "Exercício",
  "number": "3.1.6",
  "title": "",
  "body": " (China 1986) Considere uma permutação dos números tal que entre dois números k existem k números. É ou não possível fazer isto?   Contados da esquerda para a direita, denotemos por e as posições do primeiro e segundo número , respectivamente. Note que . Como existem números entre dois números 's, devemos ter . Se é possível escrever os números em linha como no enunciado, obtemos: Somando as duas linhas, . Logo, a fração deve ser um inteiro par. Para , é ímpar e consequentemente não é possível dispormos esses números em linha.  "
},
{
  "id": "prob-13",
  "level": "2",
  "url": "problemas-resolvidos.html#prob-13",
  "type": "Exercício",
  "number": "3.1.7",
  "title": "",
  "body": " (Rússia 2004) É possível colocarmos números inteiros positivos nas casas de um tabuleiro de modo que a soma dos números de cada linha e a soma dos números de cada coluna sejam primos? Justifique sua resposta.   Suponha que seja possível fazer tal construção. Sejam as somas dos números de cada uma das 9 linhas, e as somas dos números de cada uma das 2004 colunas. Como cada e são primos, estes devem ser números ímpares (já que são soma de pelo menos nove inteiros positivos e portanto são maiores que 2). Seja S a soma de todos os números do tabuleiro. Por um lado teríamos: donde concluímos que S é ímpar, pois é soma de 9 ímpares. Por outro lado: e daqui concluímos que S é par, pois é uma soma de uma quantidade par de ímpares, o que é um absurdo. Logo, tal construção não é possível.  "
},
{
  "id": "prob-14",
  "level": "2",
  "url": "problemas-resolvidos.html#prob-14",
  "type": "Exercício",
  "number": "3.1.8",
  "title": "",
  "body": " O número A possui 17 dígitos. O número B possui os mesmos dígitos de A, porém em ordem inversa. É possível que todos os dígitos de sejam ímpares?   Não. Vamos mostrar que algum dos dígitos deve ser par. Considere a seguinte soma e se for par (teríamos ) então o problema acaba. Suponha então que isso não ocorre. A única possibilidade é a de que a soma anterior ficou maior do que ou igual a 10 e 1 foi adicionado a soma dos . Temos dois casos:   e a soma deles (acima de ) recebeu um 1 da soma anterior, isso implicaria que e o problema acabaria aqui;  o segundo caso é .   Vamos então supor que . Repare que se então . Se e tiverem paridades diferentes, um dos dois será par e então o problema acaba. Vamos supor que isso não ocorre. Para que isso não ocorra, a soma acima de também deve receber um 1 da soma anterior. Dessa forma, analogamente como fizermos com , podemos supor que . Usando o mesmo argumento de paridades diferentes entre e chegamos a suposição de que . Repetindo mais uma vez esse processo nós chegamos em . Com isso, nós concluímos que a soma acima de receberá um 1 da soma anterior que é a de . Isso quer dizer que . Porém, como não há soma antes de , devemos ter . Note que e têm paridades diferentes e então algum dos dois é par. Isso conclui a demonstração. Repare que esses argumentos valem para qualquer natural com um número ímpar de dígitos, basta que exista o dígito do meio nesse caso é o .  "
},
{
  "id": "prob-15",
  "level": "2",
  "url": "problemas-resolvidos.html#prob-15",
  "type": "Exercício",
  "number": "3.1.9",
  "title": "",
  "body": " *Considere um tabuleiro pintado alternadamente de preto e branco da maneira usual. Em cada casa do tabuleiro, escrevemos 0 ou 1, de modo que a quantidade de 1's em cada linha e em cada coluna do tabuleiro é ímpar. Prove que a quantidade de 1's escritos nas casas brancas é par.   Seja o número escrito na casa da i-ésima linha e da j-ésima coluna, e . A casa (i, j) é branca se e somente se i e j possuem a mesma paridade. é a soma dos números nas 999 linhas de ordem ímpar. Como a soma dos números de cada linha é ímpar, L é ímpar. De maneira análoga, a soma dos números nas 1001 colunas de ordem par também é ímpar. Seja P o conjunto de todas as casas pretas que estão em colunas de ordem par, e a soma de todos os números escritos nas casas de P. Cada número escrito em uma casa de P aparece exatamente uma vez na soma L e exatamente uma vez na soma C. Ademais, cada número escrito em uma casa branca aparece exatamente uma vez na soma . Assim, a soma dos números escritos nas casas brancas é igual a que é par.  "
},
{
  "id": "prob-16",
  "level": "2",
  "url": "problemas-resolvidos.html#prob-16",
  "type": "Exercício",
  "number": "3.1.10",
  "title": "",
  "body": " *(Ucrânia 1997) Considere um tabuleiro pintado de preto e branco da maneira usual e, em cada casa do tabuleiro, escreva um número inteiro, de modo que a soma dos números em cada coluna e em cada linha é par. Mostre que a soma dos números nas casas pretas é par.   A solução é análoga à do problema anterior. A casa é a casa da i-ésima linha e j-ésima coluna. A casa é preta se e somente se i e j têm paridades diferentes. Seja e a soma dos números nas k-ésima linha e coluna respectivamente. Então, é a soma das linhas de ordem ímpar e é a soma das colunas também de ordem ímpar. Como a soma dos números em cada coluna e em cada linha é par, e devem ser pares. Seja B o conjunto de todas as casas brancas em colunas de ordem ímpar, e a somas dos números escritos nas casas de B. Cada casa de B é contada uma vez em C e uma vez em L. Além disso, cada casa preta é contada exatamente uma vez na soma . Logo, a soma dos números nas casas pretas é que é par.  "
},
{
  "id": "section-10",
  "level": "1",
  "url": "section-10.html",
  "type": "Seção",
  "number": "4.1",
  "title": "Jogos",
  "body": " Jogos    Quando falamos em jogos, pensamos em vários conhecidos como: xadrez, as damas e os jogos com baralho. Porém, não são desses jogos que iremos falar neste material. Imagine que exista algum tipo de jogo em que você pudesse ganhar sempre, independente de como seu adversário jogasse? Seria uma boa, não?! Pois esses jogos existem e são um dos assuntos mais abordados em provas de olimpíada. Nesta aula vamos mostrar vários destes jogos e as principais estratégias vencedoras: a simetria e o uso das posições vencedoras.    1. Simetria  Uma das estratégias mais simples é o uso de alguma simetria que pode ocorrer durante o jogo em vantagem de um dos jogadores, forçando sempre uma nova rodada para o jogador \"destinado à derrota\". Para entender melhor veja o seguinte exemplo:    Pedro e Mônica jogam em um tabuleiro . Cada um, em sua vez, pode pintar um dos quadrados (que não foram pintados anteriormente), ou dois quadrados consecutivos (se ambos estiverem brancos). Quem não puder mais jogar perde. Sabe-se que Pedro será o primeiro a jogar. Quem pode sempre garantir a vitória?    Pedro sempre poderá ganhar se seguir a seguinte estratégia:    Inicialmente, Pedro deve pintar o quadrado do meio.       Agora, depois que Mônica fizer sua jogada, Pedro deve jogar sempre simetricamente em relação ao centro do tabuleiro (i.e. sempre deixando o tabuleiro simétrico). Por exemplo, se Mônica jogar nas casas 9 e 10, Pedro deve jogar nas casas 2 e 3.       Assim, Mônica nunca poderá ganhar, pois na sua jogada ela \"quebra a simetria\" e a configuração final do jogo todas as casas estarão pintadas, ou seja, a configuração é simétrica.      O próximo exemplo é um dos problemas que apareceu na prova da OBM de 2004. Vamos apresentar uma solução diferente da solução proposta na Eureka! 22, usando simetria:    Arnaldo e Bernardo disputam um jogo em um tabuleiro :   As peças do jogo são dominós . Inicialmente Arnaldo coloca um dominó cobrindo exatamente duas casas do tabuleiro, na horizontal ou na vertical. Os jogadores se revezam colocando uma peça no tabuleiro, na horizontal ou na vertical, sempre cobrindo exatamente duas casas do tabuleiro. Não é permitido colocar uma peça sobre outra já colocada anteriormente. Quem não conseguir colocar uma peça no tabuleiro perde. Qual dos dois jogadores tem uma estratégia vencedora, ou seja, uma estratégia que o leva à vitória quaisquer que sejam as jogadas de seu adversário, para:    ?    ?      Quando o primeiro jogador garante a vitória. Ele pode fazer isto colocando um dominó na vertical no meio do tabuleiro e, em seguida, jogar simetricamente ao segundo jogador. Quando o tabuleiro possui um número par de colunas. Desse modo, o segundo ganha jogando simetricamente ao primeiro jogador.    Como você deve ter visto, usar a simetria é realmente uma técnica muito eficiente. Porém, às vezes, usar apenas a simetria não é suficiente para resolver o problema. Observe o próximo exemplo retirado da olímpiada da Bielorússia de 2000.    Tom e Jerry jogam o seguinte jogo. Eles colocam alternadamente pinos idênticos em casas vazias de um tabuleiro (um pino de cada vez). Tom é o primeiro a jogar. Vence quem, em sua jogada, formar um bloco de quatro pinos vizinhos. Dois pinos são vizinhos se estiverem em casas com um lado em comum. Determine quem possui a estratégia vencedora.    Observe que os pinos são idênticos, não há distinção entre os pinos. Jerry deve jogar simetricamente em relação ao centro do tabuleiro. Assim que Tom formar um bloco de três pinos vizinhos, Jerry deve abandonar a estratégia simétrica e completar o bloco de quatro pinos vizinhos, garantindo a vitória.      2. Posições Vencedoras  Alguns tipos de jogos possuem certas configurações que sempre levam um jogador à vitória. Essas configurações são chamadas de posições vencedoras. O próximo exemplo é um jogo bastante simples em que essa estratégia aparece facilmente.    Na primeira casa de um tabuleiro está uma moeda. Tiago e Maria movem a moeda alternadamente. Em cada turno é permitido avançar 1, 2, 3, 4 ou 5 casas. Quem colocar a moeda na última casa é o vencedor. Se Maria começar jogando, ela pode ter certeza da vitória?    Como em muitos problemas de olimpíada, vamos analisar alguns casos pequenos. Vamos supor que em vez de 13 casas o tabuleiro tivesse apenas quatro. Neste caso, fica fácil ver que quem começa ganha basta avançar três casas. O mesmo iria ocorrer se o tabuleiro tivesse 2, 3, 4, 5 ou 6 casas. Porém, em um tabuleiro o primeiro jogador perde. Veja que após a primeira jogada a moeda estará em uma das casas 2, 3, 4, 5 ou 6. E já sabemos que essas casas levam o jogador à vitória.     Desse modo, vamos dizer que 7 é uma posição perdedora e 6,5,4,3 e 2 são posições vencedoras. Assim, se um jogador estiver em uma das casas 8,9,10,11 ou 12, ele pode garantir a vitória movendo a moeda para a casa 7, deixando o seu adversário em uma posição perdedora. Com isso, podemos afirmar que as posições 8, 9, 10, 11 e 12 também são posições vencedoras. Resta analisar a casa. Observe que a partir desta casa podemos mover a moeda apenas para uma das casas 8, 9, 10, 11 ou 12 que são vencedoras. Daí, quem começar perde pelo simples fato de iniciar em uma posição perdedora.    A grande dificuldade para a maioria dos alunos é descobrir quais são as posições vencedoras de um jogo. Para evitar esse tipo de problema, tenha sempre em mente as seguintes definições:     Posição vencedora: A partir dela, podemos escolher um movimento e repassar uma posição perdedora para o adversário.  Posição perdedora: A partir dela, é impossível escolher um movimento e repassar uma posição perdedora para o adversário. Ou seja, não importa o movimento escolhido, o adversário irá receber uma posição vencedora.       Em um tabuleiro uma torre está na casa a1. Dois jogadores movem a torre com objetivo de colocar a torre na casa h8. Sabendo que a torre pode mover-se apenas para cima ou para direita (quantas casas o jogador desejar) e que não pode-se passar a vez, determine qual jogador tem a estratégia vencedora.    Primeiramente note que todas as casas da última linha e da última coluna (exceto a h8) são vencedoras pois, a partir delas podemos escolher um movimento que nos leve à vitória. Com isso, a casa g7 se torna perdedora pois, a partir dela qualquer movimento leva o outro jogador a uma posição vencedora (veja a figura 1).     Agora, como g7 é perdedora, as demais casas da sétima linha e da sétima coluna são vencedoras, pois basta levar a torre para a casa g7. Mais ainda, a casa f6 também deve ser perdedora (figura 2). Continuando de maneira análoga, obtemos que a casa a1 é perdedora (figura 3). Logo, quem começar, perde.      Problemas Propostos   Sobre uma mesa existem duas pilhas (uma com 15 e outra com 16 pedras). Em um jogo cada jogador pode, em sua vez, retirar qualquer quantidade de pedras de apenas uma pilha. Quem não puder mais jogar perde. Quem possui a estratégia vencedora?   O jogador 1 deve retirar uma pedra da pilha com 16. Em seguida, deve jogar simetricamente em relação ao jogador 2.    Dois jogadores colocam alternadamente bispos (da mesma cor) em um tabuleiro , de forma que nenhum bispo ataque outro. Quem não puder mais jogar perde.   Divida o tabuleiro em duas partes, uma formada pelas 4 linhas de cima e a outra parte com as 4 linhas de baixo. O jogador 2 deve jogar então simetricamente.    Dois jogadores colocam alternadamente reis (da mesma cor) em um tabuleiro , de forma que nenhum rei ataque outro. Quem não puder mais jogar perde.   O primeiro jogador deve colocar um rei no centro, e depois jogar simetricamente em relação ao centro do tabuleiro.    São dados um tabuleiro de xadrez ( ) e palitinhos do tamanho dos lados das casas do tabuleiro. Dois jogadores jogam alternadamente e, em cada rodada, um dos jogadores coloca um palitinho sobre um lado de uma das casas do tabuleiro, sendo proibido sobrepor os palitinhos. Vence o jogador que conseguir completar primeiro um quadrado de palitinhos. Supondo que nenhum dos jogadores cometa erros, qual dos dois tem a estratégia vencedora?    (Rússia 1997) Os números são escritos no quadro. Dois jogadores apagam alternadamente um dos números da lista até que só restem dois números. Se a soma desses números for divisível por , o primeiro jogador vence, caso contrário vence o segundo. Quem tem a estratégia vencedora?   Observe que a soma de dois elementos opostos sempre é 1001, que deixa resto 2 na divisão por 3.   O Jogador 2 tem a seguinte estratégia vencedora. Para cada número apagado pelo Jogador 1, o Jogador 2 apaga o número que falta para que a soma seja 1001. Assim, no final, os dois últimos número terão soma igual a 1001, garantindo a vitória para o Jogador 2.     Uma pilha de 500 pedras é dada. Dois jogadores jogam o seguinte jogo: Em cada turno, o jogador pode retirar (qualquer potência de 2) pedras da pilha. O jogador que não puder mais jogar perde.   Pense nos múltiplos de 3. Nenhuma potência de 2 é múltiplo de 3.   A estratégia do primeiro jogador é sempre deixar para o segundo jogador um número de pedras que seja múltiplo de 3.  Primeira Jogada: A pilha tem pedras . Para deixar um múltiplo de 3, o Jogador 1 deve subtrair um número com resto 2. Ele deve retirar 2 pedras. A pilha fica com 498 pedras (4+9+8=21, que é divisível por 3).  Jogadas Subsequentes: O Jogador 2 agora tem 498 pedras (uma Posição Perdedora). Qualquer jogada que ele faça (subtraindo 1, 2, 4, 8, etc.) deixará um número de pedras que não é mais divisível por 3.  O Jogador 1, em sua vez, receberá uma pilha que não é múltiplo de 3. Ele então retira 1 ou 2 pedras para novamente deixar um múltiplo de 3 para o Jogador 2.  Este ciclo continua até que a pilha chegue a 0. Como o Jogador 1 sempre deixa um múltiplo de 3 para o oponente, o Jogador 2 nunca poderá deixar 0 (que é um múltiplo de 3). Portanto, o Jogador 1 fará a jogada final.    Em uma caixa existem 300 bolinhas. Cada jogador pode retirar não mais do que a metade das bolinhas que estão na caixa. O jogador que não puder mais jogar perde.   Pense nas potências de 2.   O Jogador 1 deve retirar uma quantidade de modo que o que sobre seja a maior potencia de 2 menos 1. Assim, o Jogador 2 receberá as Posições Perderoras: . No final o Jogador 2 ficará com apenas uma bolinha, perdendo o jogo.  Vamos verificar algumas Posições e separar entre Perderoras e Vencedoras.  n = 1: O máximo de bolinhas que se pode retirar é n\/2 = 0.5. Como é preciso retirar pelo menos 1, não há movimentos possíveis. O jogador que enfrenta 1 bolinha perde. 1 é uma Posição Perdedora .  n = 2: Pode-se retirar no máximo 2\/2 = 1 bolinha. A única jogada é retirar 1, deixando 1. Como se pode mover para a Posição (1), 2 é uma Posição Vencedora .  n = 3: Pode-se retirar no máximo 3\/2 = 1.5, ou seja, 1 bolinha. A única jogada é deixar 2. A posição 2 é P. Como todos os movimentos levam a uma Posição P, 3 é uma Posição Perdedora .  n = 4: Pode-se retirar no máximo 4\/2 = 2 bolinhas. Pode-se retirar 1 (deixando 3) ou 2 (deixando 2). Como é possível mover para 3 (uma Posição L), 4 é uma Posição Vencedora .  n = 5: Pode-se retirar 1 ou 2. Deixando 4 ou 3. Como se pode mover para 3, 5 é uma Posição Vencedora .  n = 6: Pode-se retirar 1, 2 ou 3. Deixando 5, 4 ou 3. Como se pode mover para 3, 6 é uma Posição Vencedora   n = 7: Pode-se retirar 1, 2 ou 3. Deixando 6, 5 ou 4. Todos os movimentos levam a Posições Vencedoras. 7 é uma Posição Perdedora .  As Posições Perdedoras que encontramos são 1, 3, 7... O padrão é claro: as posições perdedoras são números da forma .     "
},
{
  "id": "example-31",
  "level": "2",
  "url": "section-10.html#example-31",
  "type": "Exemplo",
  "number": "4.1.1",
  "title": "",
  "body": "  Pedro e Mônica jogam em um tabuleiro . Cada um, em sua vez, pode pintar um dos quadrados (que não foram pintados anteriormente), ou dois quadrados consecutivos (se ambos estiverem brancos). Quem não puder mais jogar perde. Sabe-se que Pedro será o primeiro a jogar. Quem pode sempre garantir a vitória?    Pedro sempre poderá ganhar se seguir a seguinte estratégia:    Inicialmente, Pedro deve pintar o quadrado do meio.       Agora, depois que Mônica fizer sua jogada, Pedro deve jogar sempre simetricamente em relação ao centro do tabuleiro (i.e. sempre deixando o tabuleiro simétrico). Por exemplo, se Mônica jogar nas casas 9 e 10, Pedro deve jogar nas casas 2 e 3.       Assim, Mônica nunca poderá ganhar, pois na sua jogada ela \"quebra a simetria\" e a configuração final do jogo todas as casas estarão pintadas, ou seja, a configuração é simétrica.     "
},
{
  "id": "example-32",
  "level": "2",
  "url": "section-10.html#example-32",
  "type": "Exemplo",
  "number": "4.1.4",
  "title": "",
  "body": "  Arnaldo e Bernardo disputam um jogo em um tabuleiro :   As peças do jogo são dominós . Inicialmente Arnaldo coloca um dominó cobrindo exatamente duas casas do tabuleiro, na horizontal ou na vertical. Os jogadores se revezam colocando uma peça no tabuleiro, na horizontal ou na vertical, sempre cobrindo exatamente duas casas do tabuleiro. Não é permitido colocar uma peça sobre outra já colocada anteriormente. Quem não conseguir colocar uma peça no tabuleiro perde. Qual dos dois jogadores tem uma estratégia vencedora, ou seja, uma estratégia que o leva à vitória quaisquer que sejam as jogadas de seu adversário, para:    ?    ?      Quando o primeiro jogador garante a vitória. Ele pode fazer isto colocando um dominó na vertical no meio do tabuleiro e, em seguida, jogar simetricamente ao segundo jogador. Quando o tabuleiro possui um número par de colunas. Desse modo, o segundo ganha jogando simetricamente ao primeiro jogador.   "
},
{
  "id": "example-33",
  "level": "2",
  "url": "section-10.html#example-33",
  "type": "Exemplo",
  "number": "4.1.6",
  "title": "",
  "body": "  Tom e Jerry jogam o seguinte jogo. Eles colocam alternadamente pinos idênticos em casas vazias de um tabuleiro (um pino de cada vez). Tom é o primeiro a jogar. Vence quem, em sua jogada, formar um bloco de quatro pinos vizinhos. Dois pinos são vizinhos se estiverem em casas com um lado em comum. Determine quem possui a estratégia vencedora.    Observe que os pinos são idênticos, não há distinção entre os pinos. Jerry deve jogar simetricamente em relação ao centro do tabuleiro. Assim que Tom formar um bloco de três pinos vizinhos, Jerry deve abandonar a estratégia simétrica e completar o bloco de quatro pinos vizinhos, garantindo a vitória.   "
},
{
  "id": "example-34",
  "level": "2",
  "url": "section-10.html#example-34",
  "type": "Exemplo",
  "number": "4.1.1",
  "title": "",
  "body": "  Na primeira casa de um tabuleiro está uma moeda. Tiago e Maria movem a moeda alternadamente. Em cada turno é permitido avançar 1, 2, 3, 4 ou 5 casas. Quem colocar a moeda na última casa é o vencedor. Se Maria começar jogando, ela pode ter certeza da vitória?    Como em muitos problemas de olimpíada, vamos analisar alguns casos pequenos. Vamos supor que em vez de 13 casas o tabuleiro tivesse apenas quatro. Neste caso, fica fácil ver que quem começa ganha basta avançar três casas. O mesmo iria ocorrer se o tabuleiro tivesse 2, 3, 4, 5 ou 6 casas. Porém, em um tabuleiro o primeiro jogador perde. Veja que após a primeira jogada a moeda estará em uma das casas 2, 3, 4, 5 ou 6. E já sabemos que essas casas levam o jogador à vitória.     Desse modo, vamos dizer que 7 é uma posição perdedora e 6,5,4,3 e 2 são posições vencedoras. Assim, se um jogador estiver em uma das casas 8,9,10,11 ou 12, ele pode garantir a vitória movendo a moeda para a casa 7, deixando o seu adversário em uma posição perdedora. Com isso, podemos afirmar que as posições 8, 9, 10, 11 e 12 também são posições vencedoras. Resta analisar a casa. Observe que a partir desta casa podemos mover a moeda apenas para uma das casas 8, 9, 10, 11 ou 12 que são vencedoras. Daí, quem começar perde pelo simples fato de iniciar em uma posição perdedora.   "
},
{
  "id": "definition-2",
  "level": "2",
  "url": "section-10.html#definition-2",
  "type": "Definição",
  "number": "4.1.3",
  "title": "",
  "body": "   Posição vencedora: A partir dela, podemos escolher um movimento e repassar uma posição perdedora para o adversário.  Posição perdedora: A partir dela, é impossível escolher um movimento e repassar uma posição perdedora para o adversário. Ou seja, não importa o movimento escolhido, o adversário irá receber uma posição vencedora.    "
},
{
  "id": "example-35",
  "level": "2",
  "url": "section-10.html#example-35",
  "type": "Exemplo",
  "number": "4.1.4",
  "title": "",
  "body": "  Em um tabuleiro uma torre está na casa a1. Dois jogadores movem a torre com objetivo de colocar a torre na casa h8. Sabendo que a torre pode mover-se apenas para cima ou para direita (quantas casas o jogador desejar) e que não pode-se passar a vez, determine qual jogador tem a estratégia vencedora.    Primeiramente note que todas as casas da última linha e da última coluna (exceto a h8) são vencedoras pois, a partir delas podemos escolher um movimento que nos leve à vitória. Com isso, a casa g7 se torna perdedora pois, a partir dela qualquer movimento leva o outro jogador a uma posição vencedora (veja a figura 1).     Agora, como g7 é perdedora, as demais casas da sétima linha e da sétima coluna são vencedoras, pois basta levar a torre para a casa g7. Mais ainda, a casa f6 também deve ser perdedora (figura 2). Continuando de maneira análoga, obtemos que a casa a1 é perdedora (figura 3). Logo, quem começar, perde.   "
},
{
  "id": "exercise-73",
  "level": "2",
  "url": "section-10.html#exercise-73",
  "type": "Exercício",
  "number": "4.1.3.1",
  "title": "",
  "body": " Sobre uma mesa existem duas pilhas (uma com 15 e outra com 16 pedras). Em um jogo cada jogador pode, em sua vez, retirar qualquer quantidade de pedras de apenas uma pilha. Quem não puder mais jogar perde. Quem possui a estratégia vencedora?   O jogador 1 deve retirar uma pedra da pilha com 16. Em seguida, deve jogar simetricamente em relação ao jogador 2.  "
},
{
  "id": "exercise-74",
  "level": "2",
  "url": "section-10.html#exercise-74",
  "type": "Exercício",
  "number": "4.1.3.2",
  "title": "",
  "body": " Dois jogadores colocam alternadamente bispos (da mesma cor) em um tabuleiro , de forma que nenhum bispo ataque outro. Quem não puder mais jogar perde.   Divida o tabuleiro em duas partes, uma formada pelas 4 linhas de cima e a outra parte com as 4 linhas de baixo. O jogador 2 deve jogar então simetricamente.  "
},
{
  "id": "exercise-75",
  "level": "2",
  "url": "section-10.html#exercise-75",
  "type": "Exercício",
  "number": "4.1.3.3",
  "title": "",
  "body": " Dois jogadores colocam alternadamente reis (da mesma cor) em um tabuleiro , de forma que nenhum rei ataque outro. Quem não puder mais jogar perde.   O primeiro jogador deve colocar um rei no centro, e depois jogar simetricamente em relação ao centro do tabuleiro.  "
},
{
  "id": "exercise-76",
  "level": "2",
  "url": "section-10.html#exercise-76",
  "type": "Exercício",
  "number": "4.1.3.4",
  "title": "",
  "body": " São dados um tabuleiro de xadrez ( ) e palitinhos do tamanho dos lados das casas do tabuleiro. Dois jogadores jogam alternadamente e, em cada rodada, um dos jogadores coloca um palitinho sobre um lado de uma das casas do tabuleiro, sendo proibido sobrepor os palitinhos. Vence o jogador que conseguir completar primeiro um quadrado de palitinhos. Supondo que nenhum dos jogadores cometa erros, qual dos dois tem a estratégia vencedora?  "
},
{
  "id": "exercise-77",
  "level": "2",
  "url": "section-10.html#exercise-77",
  "type": "Exercício",
  "number": "4.1.3.5",
  "title": "",
  "body": " (Rússia 1997) Os números são escritos no quadro. Dois jogadores apagam alternadamente um dos números da lista até que só restem dois números. Se a soma desses números for divisível por , o primeiro jogador vence, caso contrário vence o segundo. Quem tem a estratégia vencedora?   Observe que a soma de dois elementos opostos sempre é 1001, que deixa resto 2 na divisão por 3.   O Jogador 2 tem a seguinte estratégia vencedora. Para cada número apagado pelo Jogador 1, o Jogador 2 apaga o número que falta para que a soma seja 1001. Assim, no final, os dois últimos número terão soma igual a 1001, garantindo a vitória para o Jogador 2.  "
},
{
  "id": "exercise-78",
  "level": "2",
  "url": "section-10.html#exercise-78",
  "type": "Exercício",
  "number": "4.1.3.6",
  "title": "",
  "body": " Uma pilha de 500 pedras é dada. Dois jogadores jogam o seguinte jogo: Em cada turno, o jogador pode retirar (qualquer potência de 2) pedras da pilha. O jogador que não puder mais jogar perde.   Pense nos múltiplos de 3. Nenhuma potência de 2 é múltiplo de 3.   A estratégia do primeiro jogador é sempre deixar para o segundo jogador um número de pedras que seja múltiplo de 3.  Primeira Jogada: A pilha tem pedras . Para deixar um múltiplo de 3, o Jogador 1 deve subtrair um número com resto 2. Ele deve retirar 2 pedras. A pilha fica com 498 pedras (4+9+8=21, que é divisível por 3).  Jogadas Subsequentes: O Jogador 2 agora tem 498 pedras (uma Posição Perdedora). Qualquer jogada que ele faça (subtraindo 1, 2, 4, 8, etc.) deixará um número de pedras que não é mais divisível por 3.  O Jogador 1, em sua vez, receberá uma pilha que não é múltiplo de 3. Ele então retira 1 ou 2 pedras para novamente deixar um múltiplo de 3 para o Jogador 2.  Este ciclo continua até que a pilha chegue a 0. Como o Jogador 1 sempre deixa um múltiplo de 3 para o oponente, o Jogador 2 nunca poderá deixar 0 (que é um múltiplo de 3). Portanto, o Jogador 1 fará a jogada final.  "
},
{
  "id": "exercise-79",
  "level": "2",
  "url": "section-10.html#exercise-79",
  "type": "Exercício",
  "number": "4.1.3.7",
  "title": "",
  "body": " Em uma caixa existem 300 bolinhas. Cada jogador pode retirar não mais do que a metade das bolinhas que estão na caixa. O jogador que não puder mais jogar perde.   Pense nas potências de 2.   O Jogador 1 deve retirar uma quantidade de modo que o que sobre seja a maior potencia de 2 menos 1. Assim, o Jogador 2 receberá as Posições Perderoras: . No final o Jogador 2 ficará com apenas uma bolinha, perdendo o jogo.  Vamos verificar algumas Posições e separar entre Perderoras e Vencedoras.  n = 1: O máximo de bolinhas que se pode retirar é n\/2 = 0.5. Como é preciso retirar pelo menos 1, não há movimentos possíveis. O jogador que enfrenta 1 bolinha perde. 1 é uma Posição Perdedora .  n = 2: Pode-se retirar no máximo 2\/2 = 1 bolinha. A única jogada é retirar 1, deixando 1. Como se pode mover para a Posição (1), 2 é uma Posição Vencedora .  n = 3: Pode-se retirar no máximo 3\/2 = 1.5, ou seja, 1 bolinha. A única jogada é deixar 2. A posição 2 é P. Como todos os movimentos levam a uma Posição P, 3 é uma Posição Perdedora .  n = 4: Pode-se retirar no máximo 4\/2 = 2 bolinhas. Pode-se retirar 1 (deixando 3) ou 2 (deixando 2). Como é possível mover para 3 (uma Posição L), 4 é uma Posição Vencedora .  n = 5: Pode-se retirar 1 ou 2. Deixando 4 ou 3. Como se pode mover para 3, 5 é uma Posição Vencedora .  n = 6: Pode-se retirar 1, 2 ou 3. Deixando 5, 4 ou 3. Como se pode mover para 3, 6 é uma Posição Vencedora   n = 7: Pode-se retirar 1, 2 ou 3. Deixando 6, 5 ou 4. Todos os movimentos levam a Posições Vencedoras. 7 é uma Posição Perdedora .  As Posições Perdedoras que encontramos são 1, 3, 7... O padrão é claro: as posições perdedoras são números da forma .  "
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
