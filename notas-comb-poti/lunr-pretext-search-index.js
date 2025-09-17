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
  "title": "Aula 6 - Jogos",
  "body": " Aula 6 - Jogos  Prof. Bruno Holanda  Polos Olímpicos de Treinamento - Curso de Combinatória - Nível 2   Quando falamos em jogos, pensamos em vários conhecidos como: xadrez, as damas e os jogos com baralho. Porém, não são desses jogos que iremos falar neste material. Imagine que exista algum tipo de jogo em que você pudesse ganhar sempre, independente de como seu adversário jogasse? Seria uma boa, não?! Pois esses jogos existem e são um dos assuntos mais abordados em provas de olimpíada. Nesta aula vamos mostrar vários destes jogos e as principais estratégias vencedoras: a simetria e o uso das posições vencedoras.    1. Simetria  Uma das estratégias mais simples é o uso de alguma simetria que pode ocorrer durante o jogo em vantagem de um dos jogadores, forçando sempre uma nova rodada para o jogador \"destinado à derrota\". Para entender melhor veja o seguinte exemplo:    Pedro e Mônica jogam em um tabuleiro . Cada um, em sua vez, pode pintar um dos quadrados (que não foram pintados anteriormente), ou dois quadrados consecutivos (se ambos estiverem brancos). Quem não puder mais jogar perde. Sabe-se que Pedro será o primeiro a jogar. Quem pode sempre garantir a vitória?    Pedro sempre poderá ganhar se seguir a seguinte estratégia:    Inicialmente, Pedro deve pintar o quadrado do meio.       Agora, depois que Mônica fizer sua jogada, Pedro deve jogar sempre simetricamente em relação ao centro do tabuleiro (i.e. sempre deixando o tabuleiro simétrico). Por exemplo, se Mônica jogar nas casas 9 e 10, Pedro deve jogar nas casas 2 e 3.       Assim, Mônica nunca poderá ganhar, pois na sua jogada ela \"quebra a simetria\" e a configuração final do jogo todas as casas estarão pintadas, ou seja, a configuração é simétrica.      O próximo exemplo é um dos problemas que apareceu na prova da OBM de 2004. Vamos apresentar uma solução diferente da solução proposta na Eureka! 22, usando simetria:    Arnaldo e Bernardo disputam um jogo em um tabuleiro :   As peças do jogo são dominós . Inicialmente Arnaldo coloca um dominó cobrindo exatamente duas casas do tabuleiro, na horizontal ou na vertical. Os jogadores se revezam colocando uma peça no tabuleiro, na horizontal ou na vertical, sempre cobrindo exatamente duas casas do tabuleiro. Não é permitido colocar uma peça sobre outra já colocada anteriormente. Quem não conseguir colocar uma peça no tabuleiro perde. Qual dos dois jogadores tem uma estratégia vencedora, ou seja, uma estratégia que o leva à vitória quaisquer que sejam as jogadas de seu adversário, para:    ?    ?      Quando o primeiro jogador garante a vitória. Ele pode fazer isto colocando um dominó na vertical no meio do tabuleiro e, em seguida, jogar simetricamente ao segundo jogador. Quando o tabuleiro possui um número par de colunas. Desse modo, o segundo ganha jogando simetricamente ao primeiro jogador.    Como você deve ter visto, usar a simetria é realmente uma técnica muito eficiente. Porém, às vezes, usar apenas a simetria não é suficiente para resolver o problema. Observe o próximo exemplo retirado da olímpiada da Bielorússia de 2000.    Tom e Jerry jogam o seguinte jogo. Eles colocam alternadamente pinos idênticos em casas vazias de um tabuleiro (um pino de cada vez). Tom é o primeiro a jogar. Vence quem, em sua jogada, formar um bloco de quatro pinos vizinhos. Dois pinos são vizinhos se estiverem em casas com um lado em comum. Determine quem possui a estratégia vencedora.    Observe que os pinos são idênticos, não há distinção entre os pinos. Jerry deve jogar simetricamente em relação ao centro do tabuleiro. Assim que Tom formar um bloco de três pinos vizinhos, Jerry deve abandonar a estratégia simétrica e completar o bloco de quatro pinos vizinhos, garantindo a vitória.      2. Posições Vencedoras  Alguns tipos de jogos possuem certas configurações que sempre levam um jogador à vitória. Essas configurações são chamadas de posições vencedoras. O próximo exemplo é um jogo bastante simples em que essa estratégia aparece facilmente.    Na primeira casa de um tabuleiro está uma moeda. Tiago e Maria movem a moeda alternadamente. Em cada turno é permitido avançar 1, 2, 3, 4 ou 5 casas. Quem colocar a moeda na última casa é o vencedor. Se Maria começar jogando, ela pode ter certeza da vitória?    Como em muitos problemas de olimpíada, vamos analisar alguns casos pequenos. Vamos supor que em vez de 13 casas o tabuleiro tivesse apenas quatro. Neste caso, fica fácil ver que quem começa ganha basta avançar três casas. O mesmo iria ocorrer se o tabuleiro tivesse 2, 3, 4, 5 ou 6 casas. Porém, em um tabuleiro o primeiro jogador perde. Veja que após a primeira jogada a moeda estará em uma das casas 2, 3, 4, 5 ou 6. E já sabemos que essas casas levam o jogador à vitória.     Desse modo, vamos dizer que 7 é uma posição perdedora e 6,5,4,3 e 2 são posições vencedoras. Assim, se um jogador estiver em uma das casas 8,9,10,11 ou 12, ele pode garantir a vitória movendo a moeda para a casa 7, deixando o seu adversário em uma posição perdedora. Com isso, podemos afirmar que as posições 8, 9, 10, 11 e 12 também são posições vencedoras. Resta analisar a casa. Observe que a partir desta casa podemos mover a moeda apenas para uma das casas 8, 9, 10, 11 ou 12 que são vencedoras. Daí, quem começar perde pelo simples fato de iniciar em uma posição perdedora.    A grande dificuldade para a maioria dos alunos é descobrir quais são as posições vencedoras de um jogo. Para evitar esse tipo de problema, tenha sempre em mente as seguintes definições:     Posição vencedora: A partir dela, podemos escolher um movimento e repassar uma posição perdedora para o adversário.  Posição perdedora: A partir dela, é impossível escolher um movimento e repassar uma posição perdedora para o adversário. Ou seja, não importa o movimento escolhido, o adversário irá receber uma posição vencedora.       Em um tabuleiro uma torre está na casa a1. Dois jogadores movem a torre com objetivo de colocar a torre na casa h8. Sabendo que a torre pode mover-se apenas para cima ou para direita (quantas casas o jogador desejar) e que não pode-se passar a vez, determine qual jogador tem a estratégia vencedora.    Primeiramente note que todas as casas da última linha e da última coluna (exceto a h8) são vencedoras pois, a partir delas podemos escolher um movimento que nos leve à vitória. Com isso, a casa g7 se torna perdedora pois, a partir dela qualquer movimento leva o outro jogador a uma posição vencedora (veja a figura 1).     Agora, como g7 é perdedora, as demais casas da sétima linha e da sétima coluna são vencedoras, pois basta levar a torre para a casa g7. Mais ainda, a casa f6 também deve ser perdedora (figura 2). Continuando de maneira análoga, obtemos que a casa a1 é perdedora (figura 3). Logo, quem começar, perde.      Problemas Propostos   Sobre uma mesa existem duas pilhas (uma com 15 e outra com 16 pedras). Em um jogo cada jogador pode, em sua vez, retirar qualquer quantidade de pedras de apenas uma pilha. Quem não puder mais jogar perde. Quem possui a estratégia vencedora?   O jogador 1 deve retirar uma pedra da pilha com 16. Em seguida, deve jogar simetricamente em relação ao jogador 2.    Dois jogadores colocam alternadamente bispos (da mesma cor) em um tabuleiro , de forma que nenhum bispo ataque outro. Quem não puder mais jogar perde.   Divida o tabuleiro em duas partes, cada uma formada por 4 linhas. O jogador 1 deve jogar então simetricamente.    Dois jogadores colocam alternadamente reis (da mesma cor) em um tabuleiro , de forma que nenhum rei ataque outro. Quem não puder mais jogar perde.   O primeiro jogador deve colocar um rei no centro, e depois jogar simetricamente em relação ao centro do tabuleiro.    São dados um tabuleiro de xadrez ( ) e palitinhos do tamanho dos lados das casas do tabuleiro. Dois jogadores jogam alternadamente e, em cada rodada, um dos jogadores coloca um palitinho sobre um lado de uma das casas do tabuleiro, sendo proibido sobrepor os palitinhos. Vence o jogador que conseguir completar primeiro um quadrado de palitinhos. Supondo que nenhum dos jogadores cometa erros, qual dos dois tem a estratégia vencedora?    (Rússia 1997) Os números 1, 2, 3, ..., 1000 são escritos no quadro. Dois jogadores apagam alternadamente um dos números da lista até que só restem dois números. Se a soma desses números for divisível por 3, o primeiro jogador vence, caso contrário vence o segundo. Quem tem a estratégia vencedora?   Observe que a soma de dois elementos opostos sempre é 1002, que é um múltiplo de 3.    Sobre uma mesa existem duas pilhas de moedas com 11 moedas cada. Em cada turno, um jogador pode retirar duas moedas de uma das pilhas ou retirar uma moeda de cada pilha. O jogador que não puder mais fazer movimentos perde.   Construa um tabuleiro , onde a casa (i, j) represente quantidade de pedras em cada pilha. Observe que o movimento do jogo original é equivalente ao movimento do cavalo no tabuleiro. Termine o problema descobrindo as posições vencedoras e perdedoras através de indução retroativa.    Uma pilha de 500 pedras é dada. Dois jogadores jogam o seguinte jogo: Em cada turno, o jogador pode retirar 1, 2, 4, 8,... (qualquer potência de 2) pedras da pilha. O jogador que não puder mais jogar perde.   Pense nos múltiplos de 3. Nenhuma potência de 2 é múltiplo de 3.    Em uma caixa existem 300 bolinhas. Cada jogador pode retirar não mais do que a metade das bolinhas que estão na caixa. O jogador que não puder mais jogar perde.   Pense nas potências de 2.    Sobre uma mesa existem duas pilhas (uma com 7 e outra com 15 pedras). Em um jogo cada jogador pode, em sua vez, retirar qualquer quantidade de pedras de apenas uma pilha ou a mesma quantidade de ambas as pinhas. Quem não puder mais jogar perde. Quem possui a estratégia vencedora?   Novamente, use a idéia do tabuleiro que foi usada para resolver o Exercício 6 ( ).    "
},
{
  "id": "example-1",
  "level": "2",
  "url": "section-1.html#example-1",
  "type": "Exemplo",
  "number": "1.1.1",
  "title": "",
  "body": "  Pedro e Mônica jogam em um tabuleiro . Cada um, em sua vez, pode pintar um dos quadrados (que não foram pintados anteriormente), ou dois quadrados consecutivos (se ambos estiverem brancos). Quem não puder mais jogar perde. Sabe-se que Pedro será o primeiro a jogar. Quem pode sempre garantir a vitória?    Pedro sempre poderá ganhar se seguir a seguinte estratégia:    Inicialmente, Pedro deve pintar o quadrado do meio.       Agora, depois que Mônica fizer sua jogada, Pedro deve jogar sempre simetricamente em relação ao centro do tabuleiro (i.e. sempre deixando o tabuleiro simétrico). Por exemplo, se Mônica jogar nas casas 9 e 10, Pedro deve jogar nas casas 2 e 3.       Assim, Mônica nunca poderá ganhar, pois na sua jogada ela \"quebra a simetria\" e a configuração final do jogo todas as casas estarão pintadas, ou seja, a configuração é simétrica.     "
},
{
  "id": "example-2",
  "level": "2",
  "url": "section-1.html#example-2",
  "type": "Exemplo",
  "number": "1.1.4",
  "title": "",
  "body": "  Arnaldo e Bernardo disputam um jogo em um tabuleiro :   As peças do jogo são dominós . Inicialmente Arnaldo coloca um dominó cobrindo exatamente duas casas do tabuleiro, na horizontal ou na vertical. Os jogadores se revezam colocando uma peça no tabuleiro, na horizontal ou na vertical, sempre cobrindo exatamente duas casas do tabuleiro. Não é permitido colocar uma peça sobre outra já colocada anteriormente. Quem não conseguir colocar uma peça no tabuleiro perde. Qual dos dois jogadores tem uma estratégia vencedora, ou seja, uma estratégia que o leva à vitória quaisquer que sejam as jogadas de seu adversário, para:    ?    ?      Quando o primeiro jogador garante a vitória. Ele pode fazer isto colocando um dominó na vertical no meio do tabuleiro e, em seguida, jogar simetricamente ao segundo jogador. Quando o tabuleiro possui um número par de colunas. Desse modo, o segundo ganha jogando simetricamente ao primeiro jogador.   "
},
{
  "id": "example-3",
  "level": "2",
  "url": "section-1.html#example-3",
  "type": "Exemplo",
  "number": "1.1.6",
  "title": "",
  "body": "  Tom e Jerry jogam o seguinte jogo. Eles colocam alternadamente pinos idênticos em casas vazias de um tabuleiro (um pino de cada vez). Tom é o primeiro a jogar. Vence quem, em sua jogada, formar um bloco de quatro pinos vizinhos. Dois pinos são vizinhos se estiverem em casas com um lado em comum. Determine quem possui a estratégia vencedora.    Observe que os pinos são idênticos, não há distinção entre os pinos. Jerry deve jogar simetricamente em relação ao centro do tabuleiro. Assim que Tom formar um bloco de três pinos vizinhos, Jerry deve abandonar a estratégia simétrica e completar o bloco de quatro pinos vizinhos, garantindo a vitória.   "
},
{
  "id": "example-4",
  "level": "2",
  "url": "section-1.html#example-4",
  "type": "Exemplo",
  "number": "1.1.1",
  "title": "",
  "body": "  Na primeira casa de um tabuleiro está uma moeda. Tiago e Maria movem a moeda alternadamente. Em cada turno é permitido avançar 1, 2, 3, 4 ou 5 casas. Quem colocar a moeda na última casa é o vencedor. Se Maria começar jogando, ela pode ter certeza da vitória?    Como em muitos problemas de olimpíada, vamos analisar alguns casos pequenos. Vamos supor que em vez de 13 casas o tabuleiro tivesse apenas quatro. Neste caso, fica fácil ver que quem começa ganha basta avançar três casas. O mesmo iria ocorrer se o tabuleiro tivesse 2, 3, 4, 5 ou 6 casas. Porém, em um tabuleiro o primeiro jogador perde. Veja que após a primeira jogada a moeda estará em uma das casas 2, 3, 4, 5 ou 6. E já sabemos que essas casas levam o jogador à vitória.     Desse modo, vamos dizer que 7 é uma posição perdedora e 6,5,4,3 e 2 são posições vencedoras. Assim, se um jogador estiver em uma das casas 8,9,10,11 ou 12, ele pode garantir a vitória movendo a moeda para a casa 7, deixando o seu adversário em uma posição perdedora. Com isso, podemos afirmar que as posições 8, 9, 10, 11 e 12 também são posições vencedoras. Resta analisar a casa. Observe que a partir desta casa podemos mover a moeda apenas para uma das casas 8, 9, 10, 11 ou 12 que são vencedoras. Daí, quem começar perde pelo simples fato de iniciar em uma posição perdedora.   "
},
{
  "id": "definition-1",
  "level": "2",
  "url": "section-1.html#definition-1",
  "type": "Definição",
  "number": "1.1.3",
  "title": "",
  "body": "   Posição vencedora: A partir dela, podemos escolher um movimento e repassar uma posição perdedora para o adversário.  Posição perdedora: A partir dela, é impossível escolher um movimento e repassar uma posição perdedora para o adversário. Ou seja, não importa o movimento escolhido, o adversário irá receber uma posição vencedora.    "
},
{
  "id": "example-5",
  "level": "2",
  "url": "section-1.html#example-5",
  "type": "Exemplo",
  "number": "1.1.4",
  "title": "",
  "body": "  Em um tabuleiro uma torre está na casa a1. Dois jogadores movem a torre com objetivo de colocar a torre na casa h8. Sabendo que a torre pode mover-se apenas para cima ou para direita (quantas casas o jogador desejar) e que não pode-se passar a vez, determine qual jogador tem a estratégia vencedora.    Primeiramente note que todas as casas da última linha e da última coluna (exceto a h8) são vencedoras pois, a partir delas podemos escolher um movimento que nos leve à vitória. Com isso, a casa g7 se torna perdedora pois, a partir dela qualquer movimento leva o outro jogador a uma posição vencedora (veja a figura 1).     Agora, como g7 é perdedora, as demais casas da sétima linha e da sétima coluna são vencedoras, pois basta levar a torre para a casa g7. Mais ainda, a casa f6 também deve ser perdedora (figura 2). Continuando de maneira análoga, obtemos que a casa a1 é perdedora (figura 3). Logo, quem começar, perde.   "
},
{
  "id": "exercise-1",
  "level": "2",
  "url": "section-1.html#exercise-1",
  "type": "Exercício",
  "number": "1.1.3.1",
  "title": "",
  "body": " Sobre uma mesa existem duas pilhas (uma com 15 e outra com 16 pedras). Em um jogo cada jogador pode, em sua vez, retirar qualquer quantidade de pedras de apenas uma pilha. Quem não puder mais jogar perde. Quem possui a estratégia vencedora?   O jogador 1 deve retirar uma pedra da pilha com 16. Em seguida, deve jogar simetricamente em relação ao jogador 2.  "
},
{
  "id": "exercise-2",
  "level": "2",
  "url": "section-1.html#exercise-2",
  "type": "Exercício",
  "number": "1.1.3.2",
  "title": "",
  "body": " Dois jogadores colocam alternadamente bispos (da mesma cor) em um tabuleiro , de forma que nenhum bispo ataque outro. Quem não puder mais jogar perde.   Divida o tabuleiro em duas partes, cada uma formada por 4 linhas. O jogador 1 deve jogar então simetricamente.  "
},
{
  "id": "exercise-3",
  "level": "2",
  "url": "section-1.html#exercise-3",
  "type": "Exercício",
  "number": "1.1.3.3",
  "title": "",
  "body": " Dois jogadores colocam alternadamente reis (da mesma cor) em um tabuleiro , de forma que nenhum rei ataque outro. Quem não puder mais jogar perde.   O primeiro jogador deve colocar um rei no centro, e depois jogar simetricamente em relação ao centro do tabuleiro.  "
},
{
  "id": "exercise-4",
  "level": "2",
  "url": "section-1.html#exercise-4",
  "type": "Exercício",
  "number": "1.1.3.4",
  "title": "",
  "body": " São dados um tabuleiro de xadrez ( ) e palitinhos do tamanho dos lados das casas do tabuleiro. Dois jogadores jogam alternadamente e, em cada rodada, um dos jogadores coloca um palitinho sobre um lado de uma das casas do tabuleiro, sendo proibido sobrepor os palitinhos. Vence o jogador que conseguir completar primeiro um quadrado de palitinhos. Supondo que nenhum dos jogadores cometa erros, qual dos dois tem a estratégia vencedora?  "
},
{
  "id": "exercise-5",
  "level": "2",
  "url": "section-1.html#exercise-5",
  "type": "Exercício",
  "number": "1.1.3.5",
  "title": "",
  "body": " (Rússia 1997) Os números 1, 2, 3, ..., 1000 são escritos no quadro. Dois jogadores apagam alternadamente um dos números da lista até que só restem dois números. Se a soma desses números for divisível por 3, o primeiro jogador vence, caso contrário vence o segundo. Quem tem a estratégia vencedora?   Observe que a soma de dois elementos opostos sempre é 1002, que é um múltiplo de 3.  "
},
{
  "id": "prob_15",
  "level": "2",
  "url": "section-1.html#prob_15",
  "type": "Exercício",
  "number": "1.1.3.6",
  "title": "",
  "body": " Sobre uma mesa existem duas pilhas de moedas com 11 moedas cada. Em cada turno, um jogador pode retirar duas moedas de uma das pilhas ou retirar uma moeda de cada pilha. O jogador que não puder mais fazer movimentos perde.   Construa um tabuleiro , onde a casa (i, j) represente quantidade de pedras em cada pilha. Observe que o movimento do jogo original é equivalente ao movimento do cavalo no tabuleiro. Termine o problema descobrindo as posições vencedoras e perdedoras através de indução retroativa.  "
},
{
  "id": "exercise-7",
  "level": "2",
  "url": "section-1.html#exercise-7",
  "type": "Exercício",
  "number": "1.1.3.7",
  "title": "",
  "body": " Uma pilha de 500 pedras é dada. Dois jogadores jogam o seguinte jogo: Em cada turno, o jogador pode retirar 1, 2, 4, 8,... (qualquer potência de 2) pedras da pilha. O jogador que não puder mais jogar perde.   Pense nos múltiplos de 3. Nenhuma potência de 2 é múltiplo de 3.  "
},
{
  "id": "exercise-8",
  "level": "2",
  "url": "section-1.html#exercise-8",
  "type": "Exercício",
  "number": "1.1.3.8",
  "title": "",
  "body": " Em uma caixa existem 300 bolinhas. Cada jogador pode retirar não mais do que a metade das bolinhas que estão na caixa. O jogador que não puder mais jogar perde.   Pense nas potências de 2.  "
},
{
  "id": "exercise-9",
  "level": "2",
  "url": "section-1.html#exercise-9",
  "type": "Exercício",
  "number": "1.1.3.9",
  "title": "",
  "body": " Sobre uma mesa existem duas pilhas (uma com 7 e outra com 15 pedras). Em um jogo cada jogador pode, em sua vez, retirar qualquer quantidade de pedras de apenas uma pilha ou a mesma quantidade de ambas as pinhas. Quem não puder mais jogar perde. Quem possui a estratégia vencedora?   Novamente, use a idéia do tabuleiro que foi usada para resolver o Exercício 6 ( ).  "
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
