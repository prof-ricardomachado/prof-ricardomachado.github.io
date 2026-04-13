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
