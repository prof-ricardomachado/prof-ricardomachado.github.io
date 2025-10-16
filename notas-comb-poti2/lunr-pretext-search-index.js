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
  "body": " Aula 6 - Jogos  Prof. Bruno Holanda  Polos Olímpicos de Treinamento - Curso de Combinatória - Nível 2   Quando falamos em jogos, pensamos em vários conhecidos como: xadrez, as damas e os jogos com baralho. Porém, não são desses jogos que iremos falar neste material. Imagine que exista algum tipo de jogo em que você pudesse ganhar sempre, independente de como seu adversário jogasse? Seria uma boa, não?! Pois esses jogos existem e são um dos assuntos mais abordados em provas de olimpíada. Nesta aula vamos mostrar vários destes jogos e as principais estratégias vencedoras: a simetria e o uso das posições vencedoras.    1. Simetria  Uma das estratégias mais simples é o uso de alguma simetria que pode ocorrer durante o jogo em vantagem de um dos jogadores, forçando sempre uma nova rodada para o jogador \"destinado à derrota\". Para entender melhor veja o seguinte exemplo:    Pedro e Mônica jogam em um tabuleiro . Cada um, em sua vez, pode pintar um dos quadrados (que não foram pintados anteriormente), ou dois quadrados consecutivos (se ambos estiverem brancos). Quem não puder mais jogar perde. Sabe-se que Pedro será o primeiro a jogar. Quem pode sempre garantir a vitória?    Pedro sempre poderá ganhar se seguir a seguinte estratégia:    Inicialmente, Pedro deve pintar o quadrado do meio.       Agora, depois que Mônica fizer sua jogada, Pedro deve jogar sempre simetricamente em relação ao centro do tabuleiro (i.e. sempre deixando o tabuleiro simétrico). Por exemplo, se Mônica jogar nas casas 9 e 10, Pedro deve jogar nas casas 2 e 3.       Assim, Mônica nunca poderá ganhar, pois na sua jogada ela \"quebra a simetria\" e a configuração final do jogo todas as casas estarão pintadas, ou seja, a configuração é simétrica.      O próximo exemplo é um dos problemas que apareceu na prova da OBM de 2004. Vamos apresentar uma solução diferente da solução proposta na Eureka! 22, usando simetria:    Arnaldo e Bernardo disputam um jogo em um tabuleiro :   As peças do jogo são dominós . Inicialmente Arnaldo coloca um dominó cobrindo exatamente duas casas do tabuleiro, na horizontal ou na vertical. Os jogadores se revezam colocando uma peça no tabuleiro, na horizontal ou na vertical, sempre cobrindo exatamente duas casas do tabuleiro. Não é permitido colocar uma peça sobre outra já colocada anteriormente. Quem não conseguir colocar uma peça no tabuleiro perde. Qual dos dois jogadores tem uma estratégia vencedora, ou seja, uma estratégia que o leva à vitória quaisquer que sejam as jogadas de seu adversário, para:    ?    ?      Quando o primeiro jogador garante a vitória. Ele pode fazer isto colocando um dominó na vertical no meio do tabuleiro e, em seguida, jogar simetricamente ao segundo jogador. Quando o tabuleiro possui um número par de colunas. Desse modo, o segundo ganha jogando simetricamente ao primeiro jogador.    Como você deve ter visto, usar a simetria é realmente uma técnica muito eficiente. Porém, às vezes, usar apenas a simetria não é suficiente para resolver o problema. Observe o próximo exemplo retirado da olímpiada da Bielorússia de 2000.    Tom e Jerry jogam o seguinte jogo. Eles colocam alternadamente pinos idênticos em casas vazias de um tabuleiro (um pino de cada vez). Tom é o primeiro a jogar. Vence quem, em sua jogada, formar um bloco de quatro pinos vizinhos. Dois pinos são vizinhos se estiverem em casas com um lado em comum. Determine quem possui a estratégia vencedora.    Observe que os pinos são idênticos, não há distinção entre os pinos. Jerry deve jogar simetricamente em relação ao centro do tabuleiro. Assim que Tom formar um bloco de três pinos vizinhos, Jerry deve abandonar a estratégia simétrica e completar o bloco de quatro pinos vizinhos, garantindo a vitória.      2. Posições Vencedoras  Alguns tipos de jogos possuem certas configurações que sempre levam um jogador à vitória. Essas configurações são chamadas de posições vencedoras. O próximo exemplo é um jogo bastante simples em que essa estratégia aparece facilmente.    Na primeira casa de um tabuleiro está uma moeda. Tiago e Maria movem a moeda alternadamente. Em cada turno é permitido avançar 1, 2, 3, 4 ou 5 casas. Quem colocar a moeda na última casa é o vencedor. Se Maria começar jogando, ela pode ter certeza da vitória?    Como em muitos problemas de olimpíada, vamos analisar alguns casos pequenos. Vamos supor que em vez de 13 casas o tabuleiro tivesse apenas quatro. Neste caso, fica fácil ver que quem começa ganha basta avançar três casas. O mesmo iria ocorrer se o tabuleiro tivesse 2, 3, 4, 5 ou 6 casas. Porém, em um tabuleiro o primeiro jogador perde. Veja que após a primeira jogada a moeda estará em uma das casas 2, 3, 4, 5 ou 6. E já sabemos que essas casas levam o jogador à vitória.     Desse modo, vamos dizer que 7 é uma posição perdedora e 6,5,4,3 e 2 são posições vencedoras. Assim, se um jogador estiver em uma das casas 8,9,10,11 ou 12, ele pode garantir a vitória movendo a moeda para a casa 7, deixando o seu adversário em uma posição perdedora. Com isso, podemos afirmar que as posições 8, 9, 10, 11 e 12 também são posições vencedoras. Resta analisar a casa. Observe que a partir desta casa podemos mover a moeda apenas para uma das casas 8, 9, 10, 11 ou 12 que são vencedoras. Daí, quem começar perde pelo simples fato de iniciar em uma posição perdedora.    A grande dificuldade para a maioria dos alunos é descobrir quais são as posições vencedoras de um jogo. Para evitar esse tipo de problema, tenha sempre em mente as seguintes definições:     Posição vencedora: A partir dela, podemos escolher um movimento e repassar uma posição perdedora para o adversário.  Posição perdedora: A partir dela, é impossível escolher um movimento e repassar uma posição perdedora para o adversário. Ou seja, não importa o movimento escolhido, o adversário irá receber uma posição vencedora.       Em um tabuleiro uma torre está na casa a1. Dois jogadores movem a torre com objetivo de colocar a torre na casa h8. Sabendo que a torre pode mover-se apenas para cima ou para direita (quantas casas o jogador desejar) e que não pode-se passar a vez, determine qual jogador tem a estratégia vencedora.    Primeiramente note que todas as casas da última linha e da última coluna (exceto a h8) são vencedoras pois, a partir delas podemos escolher um movimento que nos leve à vitória. Com isso, a casa g7 se torna perdedora pois, a partir dela qualquer movimento leva o outro jogador a uma posição vencedora (veja a figura 1).     Agora, como g7 é perdedora, as demais casas da sétima linha e da sétima coluna são vencedoras, pois basta levar a torre para a casa g7. Mais ainda, a casa f6 também deve ser perdedora (figura 2). Continuando de maneira análoga, obtemos que a casa a1 é perdedora (figura 3). Logo, quem começar, perde.      Problemas Propostos   Sobre uma mesa existem duas pilhas (uma com 15 e outra com 16 pedras). Em um jogo cada jogador pode, em sua vez, retirar qualquer quantidade de pedras de apenas uma pilha. Quem não puder mais jogar perde. Quem possui a estratégia vencedora?   O jogador 1 deve retirar uma pedra da pilha com 16. Em seguida, deve jogar simetricamente em relação ao jogador 2.    Dois jogadores colocam alternadamente bispos (da mesma cor) em um tabuleiro , de forma que nenhum bispo ataque outro. Quem não puder mais jogar perde.   Divida o tabuleiro em duas partes, uma formada pelas 4 linhas de cima e a outra parte com as 4 linhas de baixo. O jogador 2 deve jogar então simetricamente.    Dois jogadores colocam alternadamente reis (da mesma cor) em um tabuleiro , de forma que nenhum rei ataque outro. Quem não puder mais jogar perde.   O primeiro jogador deve colocar um rei no centro, e depois jogar simetricamente em relação ao centro do tabuleiro.    São dados um tabuleiro de xadrez ( ) e palitinhos do tamanho dos lados das casas do tabuleiro. Dois jogadores jogam alternadamente e, em cada rodada, um dos jogadores coloca um palitinho sobre um lado de uma das casas do tabuleiro, sendo proibido sobrepor os palitinhos. Vence o jogador que conseguir completar primeiro um quadrado de palitinhos. Supondo que nenhum dos jogadores cometa erros, qual dos dois tem a estratégia vencedora?    (Rússia 1997) Os números são escritos no quadro. Dois jogadores apagam alternadamente um dos números da lista até que só restem dois números. Se a soma desses números for divisível por , o primeiro jogador vence, caso contrário vence o segundo. Quem tem a estratégia vencedora?   Observe que a soma de dois elementos opostos sempre é 1001, que deixa resto 2 na divisão por 3.   O Jogador 2 tem a seguinte estratégia vencedora. Para cada número apagado pelo Jogador 1, o Jogador 2 apaga o número que falta para que a soma seja 1001. Assim, no final, os dois últimos número terão soma igual a 1001, garantindo a vitória para o Jogador 2.     Uma pilha de 500 pedras é dada. Dois jogadores jogam o seguinte jogo: Em cada turno, o jogador pode retirar (qualquer potência de 2) pedras da pilha. O jogador que não puder mais jogar perde.   Pense nos múltiplos de 3. Nenhuma potência de 2 é múltiplo de 3.   A estratégia do primeiro jogador é sempre deixar para o segundo jogador um número de pedras que seja múltiplo de 3.  Primeira Jogada: A pilha tem pedras . Para deixar um múltiplo de 3, o Jogador 1 deve subtrair um número com resto 2. Ele deve retirar 2 pedras. A pilha fica com 498 pedras (4+9+8=21, que é divisível por 3).  Jogadas Subsequentes: O Jogador 2 agora tem 498 pedras (uma Posição Perdedora). Qualquer jogada que ele faça (subtraindo 1, 2, 4, 8, etc.) deixará um número de pedras que não é mais divisível por 3.  O Jogador 1, em sua vez, receberá uma pilha que não é múltiplo de 3. Ele então retira 1 ou 2 pedras para novamente deixar um múltiplo de 3 para o Jogador 2.  Este ciclo continua até que a pilha chegue a 0. Como o Jogador 1 sempre deixa um múltiplo de 3 para o oponente, o Jogador 2 nunca poderá deixar 0 (que é um múltiplo de 3). Portanto, o Jogador 1 fará a jogada final.    Em uma caixa existem 300 bolinhas. Cada jogador pode retirar não mais do que a metade das bolinhas que estão na caixa. O jogador que não puder mais jogar perde.   Pense nas potências de 2.   O Jogador 1 deve retirar uma quantidade de modo que o que sobre seja a maior potencia de 2 menos 1. Assim, o Jogador 2 receberá as Posições Perderoras: . No final o Jogador 2 ficará com apenas uma bolinha, perdendo o jogo.  Vamos verificar algumas Posições e separar entre Perderoras e Vencedoras.  n = 1: O máximo de bolinhas que se pode retirar é n\/2 = 0.5. Como é preciso retirar pelo menos 1, não há movimentos possíveis. O jogador que enfrenta 1 bolinha perde. 1 é uma Posição Perdedora .  n = 2: Pode-se retirar no máximo 2\/2 = 1 bolinha. A única jogada é retirar 1, deixando 1. Como se pode mover para a Posição (1), 2 é uma Posição Vencedora .  n = 3: Pode-se retirar no máximo 3\/2 = 1.5, ou seja, 1 bolinha. A única jogada é deixar 2. A posição 2 é P. Como todos os movimentos levam a uma Posição P, 3 é uma Posição Perdedora .  n = 4: Pode-se retirar no máximo 4\/2 = 2 bolinhas. Pode-se retirar 1 (deixando 3) ou 2 (deixando 2). Como é possível mover para 3 (uma Posição L), 4 é uma Posição Vencedora .  n = 5: Pode-se retirar 1 ou 2. Deixando 4 ou 3. Como se pode mover para 3, 5 é uma Posição Vencedora .  n = 6: Pode-se retirar 1, 2 ou 3. Deixando 5, 4 ou 3. Como se pode mover para 3, 6 é uma Posição Vencedora   n = 7: Pode-se retirar 1, 2 ou 3. Deixando 6, 5 ou 4. Todos os movimentos levam a Posições Vencedoras. 7 é uma Posição Perdedora .  As Posições Perdedoras que encontramos são 1, 3, 7... O padrão é claro: as posições perdedoras são números da forma .     "
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
  "body": " Dois jogadores colocam alternadamente bispos (da mesma cor) em um tabuleiro , de forma que nenhum bispo ataque outro. Quem não puder mais jogar perde.   Divida o tabuleiro em duas partes, uma formada pelas 4 linhas de cima e a outra parte com as 4 linhas de baixo. O jogador 2 deve jogar então simetricamente.  "
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
  "body": " (Rússia 1997) Os números são escritos no quadro. Dois jogadores apagam alternadamente um dos números da lista até que só restem dois números. Se a soma desses números for divisível por , o primeiro jogador vence, caso contrário vence o segundo. Quem tem a estratégia vencedora?   Observe que a soma de dois elementos opostos sempre é 1001, que deixa resto 2 na divisão por 3.   O Jogador 2 tem a seguinte estratégia vencedora. Para cada número apagado pelo Jogador 1, o Jogador 2 apaga o número que falta para que a soma seja 1001. Assim, no final, os dois últimos número terão soma igual a 1001, garantindo a vitória para o Jogador 2.  "
},
{
  "id": "exercise-6",
  "level": "2",
  "url": "section-1.html#exercise-6",
  "type": "Exercício",
  "number": "1.1.3.6",
  "title": "",
  "body": " Uma pilha de 500 pedras é dada. Dois jogadores jogam o seguinte jogo: Em cada turno, o jogador pode retirar (qualquer potência de 2) pedras da pilha. O jogador que não puder mais jogar perde.   Pense nos múltiplos de 3. Nenhuma potência de 2 é múltiplo de 3.   A estratégia do primeiro jogador é sempre deixar para o segundo jogador um número de pedras que seja múltiplo de 3.  Primeira Jogada: A pilha tem pedras . Para deixar um múltiplo de 3, o Jogador 1 deve subtrair um número com resto 2. Ele deve retirar 2 pedras. A pilha fica com 498 pedras (4+9+8=21, que é divisível por 3).  Jogadas Subsequentes: O Jogador 2 agora tem 498 pedras (uma Posição Perdedora). Qualquer jogada que ele faça (subtraindo 1, 2, 4, 8, etc.) deixará um número de pedras que não é mais divisível por 3.  O Jogador 1, em sua vez, receberá uma pilha que não é múltiplo de 3. Ele então retira 1 ou 2 pedras para novamente deixar um múltiplo de 3 para o Jogador 2.  Este ciclo continua até que a pilha chegue a 0. Como o Jogador 1 sempre deixa um múltiplo de 3 para o oponente, o Jogador 2 nunca poderá deixar 0 (que é um múltiplo de 3). Portanto, o Jogador 1 fará a jogada final.  "
},
{
  "id": "exercise-7",
  "level": "2",
  "url": "section-1.html#exercise-7",
  "type": "Exercício",
  "number": "1.1.3.7",
  "title": "",
  "body": " Em uma caixa existem 300 bolinhas. Cada jogador pode retirar não mais do que a metade das bolinhas que estão na caixa. O jogador que não puder mais jogar perde.   Pense nas potências de 2.   O Jogador 1 deve retirar uma quantidade de modo que o que sobre seja a maior potencia de 2 menos 1. Assim, o Jogador 2 receberá as Posições Perderoras: . No final o Jogador 2 ficará com apenas uma bolinha, perdendo o jogo.  Vamos verificar algumas Posições e separar entre Perderoras e Vencedoras.  n = 1: O máximo de bolinhas que se pode retirar é n\/2 = 0.5. Como é preciso retirar pelo menos 1, não há movimentos possíveis. O jogador que enfrenta 1 bolinha perde. 1 é uma Posição Perdedora .  n = 2: Pode-se retirar no máximo 2\/2 = 1 bolinha. A única jogada é retirar 1, deixando 1. Como se pode mover para a Posição (1), 2 é uma Posição Vencedora .  n = 3: Pode-se retirar no máximo 3\/2 = 1.5, ou seja, 1 bolinha. A única jogada é deixar 2. A posição 2 é P. Como todos os movimentos levam a uma Posição P, 3 é uma Posição Perdedora .  n = 4: Pode-se retirar no máximo 4\/2 = 2 bolinhas. Pode-se retirar 1 (deixando 3) ou 2 (deixando 2). Como é possível mover para 3 (uma Posição L), 4 é uma Posição Vencedora .  n = 5: Pode-se retirar 1 ou 2. Deixando 4 ou 3. Como se pode mover para 3, 5 é uma Posição Vencedora .  n = 6: Pode-se retirar 1, 2 ou 3. Deixando 5, 4 ou 3. Como se pode mover para 3, 6 é uma Posição Vencedora   n = 7: Pode-se retirar 1, 2 ou 3. Deixando 6, 5 ou 4. Todos os movimentos levam a Posições Vencedoras. 7 é uma Posição Perdedora .  As Posições Perdedoras que encontramos são 1, 3, 7... O padrão é claro: as posições perdedoras são números da forma .  "
},
{
  "id": "section-4",
  "level": "1",
  "url": "section-4.html",
  "type": "Seção",
  "number": "2.1",
  "title": "Aula 9: Tabuleiros",
  "body": " Aula 9: Tabuleiros  Prof. Bruno Holanda  Polos Olímpicos de Treinamento - Curso de Combinatória - Nível 2   Quem nunca brincou de quebra-cabeça? Temos várias \"pecinhas\" e temos que encontrar uma maneira de unir todas elas para formar uma figura maior. O que costumava ser apenas um passa-tempo, ganhou uma irmã que é estudada por muitos matemáticos sérios pelo mundo: a \"Tiling Theory\" (traduzindo: Teoria da Cobertura). E por se tratar de um tema muito atrativo, logo ganhou força nas principais competições de matemática.    Exemplos Resolvidos    Determine se é possível cobrir ou não o tabuleiro abaixo (sem sobreposições) usando apenas dominós?        Pinte as casas do tabuleiro acima alternadamente de branco e preto (como no tabuleiro de xadrez). Note que, não importa como colocamos o dominó no tabuleiro, ele sempre cobre uma casa branca e outra preta. Desse modo, se fosse possível cobrir o tabuleiro usando apenas dominós, deveríamos ter o tabuleiro com a quantidade de casas pretas igual à quantidade de casas brancas. Mas no tabuleiro \"quebrado\" existem 18 casas brancas e 16 pretas. Logo, não é possível fazer tal cobertura.      Podemos cobrir um tabuleiro usando apenas T-tetraminós como abaixo?       Pinte o tabuleiro de branco e preto da maneira usual (como no xadrez). Note que ao colocarmos um T-tetraminó no tabuleiro ele pode assumir colorações do tipo 1 (1 casa branca e 3 pretas) ou tipo 2 (3 casas brancas e 1 preta).     Suponha que ao cobrir o tabuleiro usamos A peças do tipo 1 e B do tipo 2. Sabemos que devemos usar 25 peças no total, ou seja, .  Cada peça do tipo 1 possui uma casa branca e cada peça do tipo 2 possui 3 casas brancas, e como temos ao todo 50 casas brancas no tabuleiro, temos a equação: . De modo análogo, para as 50 casas pretas, obtemos .  Porém, o sistema: não possui solução inteira. Logo, não é possível cobrir o tabuleiro.      (Seletiva Fortaleza – Rioplatense\/2012 – Nível A) Benjamim tem 25 peças A e 25 peças B, cujos formatos estão mostrados na figura     Com as 50 peças, Benjamim pretende cobrir um tabuleiro completamente, sem deixar buracos e nem fazer sobreposições. Ele sabe que cada quadradinho da peça A e que cada quadradinho da peça B tem 1cm² de área. Sabendo que ele pode girar as peças do jeito que ele quiser, podendo inclusive \"inverter\" qualquer peça, pergunta-se:  Se o tabuleiro for (ou seja, ele tiver 8 cm de comprimento por 8 cm de largura), é possível que ele consiga cobrir todo o tabuleiro?  Se o tabuleiro for , é possível que ele consiga cobrir todo o tabuleiro?  Se o tabuleiro for , é possível que ele consiga cobrir todo o tabuleiro?  Se todas as casas acima de uma diagonal do tabuleiro forem retiradas (veja figura), é possível que ele consiga cobrir todo o tabuleiro?          Note que os dois tipos de peças possuem área 4 e o tabuleiro possui área que é múltiplo de 4. Vamos tentar mostrar que é possível.       Note que os dois tipos de peças possuem área 4 e o tabuleiro possui área que é múltiplo de 4. Vamos tentar mostrar que é possível.      Note que o tabuleiro possui área que não é múltiplo de 4. Portanto, não é possível cobrir o tabuleiro.  A área do tabuleiro é que é múltiplo de 4. Porém, vamos mostrar que não é possível cobrir o tabuleiro.  Observe que na coloração do tabuleiro de xadrez, os dois tipos de peças cobrem duas casas brancas e duas casas pretas. Como o que sobrou do tabuleiro possui 20 casas brancas e 16 casas pretas, não é possível cobrir o que sobrou do tabuleiro.        (Coreia - 2000) Sendo e inteiros positivos maiores que 1, prove que podemos cobrir um tabuleiro , sem sobreposições nem buracos, usando apenas L-tetraminós se, e somente se, é múltiplo de .       Vamos mostrar que se os L-tetraminós cobrem o tabuleiro , então é múltiplo de 8.  Observe que precisa ser múltiplo de 4, pois as peças possuem 4 casas. Sem perda de generalidade, suponha que é par e pinte o tabuleiro da seguinte maneira:     Teremos dois tipos de peças:  3 casas cinzas e 1 braca;  1 casa cinza e 3 brancas.  Sejam e a quantidade de peças do primeiro e do segundo tipo, respectivamente. Então, cobre todas as casas cinzas e cobre todas as casas brancas. Considere o sistema Podemos concluir que , logo . Ou seja, o número de peças de um tipo será igual o número de peças do outro tipo.  Como , Então, é um múltiplo de 8.  Falta mostrar que se é um múltiplo de , então podemos cobrir o tabuleiro com L-tetraminós.      É possível que um cavalo do xadrez passe por todas as casas de um tabuleiro exatamente uma vez e, em seguida retorne para o quadrado original?    Vamos supor que existe tal caminho. Pinte o tabuleiro da seguinte maneira:   Observe que quando o cavalo sai da posição ele sai de uma casa vermelha e vai para uma casa azul.  Saindo de uma casa azul é possível ir para uma casa azul e também é possível ir para uma casa vermelha.  No entanto, para conseguirmos passar por todas as 40 casas, será necessário alternar as cores, pois são 20 de cada cor.  Começando da casa percebemos que na ordem das casas , as casas de índice ímpar serão de cor vermelha.  Olhando para a coloração padrão do xadrez, observa-se que todas as casas de índice ímpar serão brancas.     Supondo que exista um caminho que passe por todas as casas e retorne para a casa original, seria necessário que toda casa vermelha seja uma casa branca na coloração do xadrez, isto é uma contradição.      (Estônia 1993) Para quais naturais é posível cobrir um retângulo de tamanho com as peças mostradas na figura (L-triminós e Z-tetraminós)?       Pinte o tabuleiro com números da seguinte forma: as linhas 1 e 3 com o número 1, e a linha 2 com o número -1. A soma de todos os números no tabuleiro é .     Veja que a soma dos números cobertos por um Z-tetraminó é sempre zero. A soma dos números cobertos por um L-triminó é sempre 1 ou -1. Para cobrir o tabuleiro, a soma total dos números cobertos pelas peças deve ser .  Se colocarmos as peças do tipo L de modo que a soma das casas seja 1, tem como completar o tabuleiro de 2 em 2, de modo que a soma seja 2 a cada duas colunas. No final chegaremos em n, se n for par.  Para cada peça do tipo Z colocada no tabuleiro a soma dela será zero e não caberá nem (n-1) peças do tipo L. Isto significa que as peças do tipo Z não podem ser utilizadas, pois a soma de todas as casas será menor que n, caso alguma peça do tipo Z seja utilizada.  Então para qualquer n par, podemos completar o tabuleiro apenas com peças do tipo L.  Se n for ímpar, não é possível. Se colocarmos uma peça do tipo L de forma que a soma seja -1, a soma de todas as peças será menor que n.       Problemas Propostos   Sobre uma das casas de um tabuleiro infinito, existe um cubo que cobre a casa perfeitamente. A face no topo do cubo é branca, enquanto as demais faces são pretas. A cada passo, podemos tombar o cubo para um dos lados. É possível que:  Após 2004 passos o cubo volte ao mesmo quadrado com a face branca para baixo?  Após 2005 passos?      Sim. Vire o cubo duas vezes para a direita, uma para baixo, duas para a esquerda e uma para cima (figura 4). Após estes seis passos, a face branca estará virada para baixo. Sobram 1998 passos, basta tombar repetidamente o cudo para direira e para esquerda.     Não. Pinte o tabuleiro na maneira usual. Note que, a cada movimento, o cubo muda de uma casa preta para uma casa branca e vice-versa. Logo, após um número ı́mpar de movimentos não poderá estar na casa inicial.     É possível cobrir o tabuleiro a seguir usando apenas dominós?        (OBM\/2012 – N2 – 2ª fase – Q1) João gosta de verificar propriedades do jogo de xadrez em um tabuleiro . Num de seus experimentos, João coloca um cavalo na casa inferior esquerda do tabuleiro . Qual o número mínimo de movimentos do cavalo para que ele possa chegar a qualquer casa do tabuleiro ?  Observação: O cavalo movimenta-se em L, isto é, anda duas casas em uma direção e, logo em seguida, uma casa na direção perpendicular, como ilustrado na figura.       Vamos colorir cada casa do tabuleiro com o número quando o cavalo precisar de no mínimo movimentos para chegar a tal casa do tabuleiro. Comecemos, então, pelo :   Portanto, a resposta é .    É possível cobrir um tabuleiro usando apenas peças como abaixo?    Sim, é possível.   .   (Rússia 1997) Podemos cobrir um tabuleiro usando dominós e cruzes (peça de 5 quadrados)?   A resposta é não. A impossibilidade pode ser demonstrada de forma elegante atribuindo-se valores numéricos às casas do tabuleiro, o que transforma o problema de cobertura em uma simples equação algébrica.  (Passo 1: Atribuição de Valores) Definimos um valor para cada casa do tabuleiro com base em sua cor em um padrão de xadrez:    Uma casa branca recebe o valor .    Uma casa preta recebe o valor .    Com base nisso, calculamos o valor total do tabuleiro e o valor de cada peça individualmente.     Valor Total do Tabuleiro: Um tabuleiro 75 × 75 possui 2813 casas brancas e 2812 casas pretas. A soma total dos valores é: Qualquer cobertura completa deve, portanto, ter uma soma de valores igual a 1.     Valor de um Dominó: Cobre uma casa branca (+1) e uma preta (-1). Seu valor é .     Valor de uma Cruz com centro preto: Cobre 4 casas brancas e 1 preta. Seu valor é .     Valor de uma Cruz com centro branco: Cobre 1 casa branca e 4 pretas. Seu valor é .    (Passo 2: A Equação da Cobertura) Seja o número de dominós, o número de cruzes com centro preto e o número de cruzes com centro branco. Para que a cobertura seja possível, a soma dos valores de todas as peças deve ser igual ao valor total do tabuleiro.  Isso nos leva à equação: Simplificando, obtemos:   (Passo 3: A Contradição) A equação final revela a impossibilidade da tarefa. Fatorando o lado esquerdo, temos: Esta equação representa uma contradição matemática, pois é um valor inteiro, mas precisar ser igual a para existir a solução.   Conclusão: Como a premissa de que o tabuleiro pode ser coberto leva a uma equação sem solução inteira, a premissa é falsa. Portanto, é impossível cobrir um tabuleiro 75 × 75 com as peças dadas.      (Maio\/2005) Sobre o tabuleiro , aterrissou a nave inimiga que cobre exatamente 5 casas do tabuleiro, conforme mostrado na figura. A nave é invisível.     Cada míssil defensivo cobre exatamente uma casa, e destrói a nave se bater numa das 5 casas que esta ocupa. Determine o número mínimo de mísseis que são necessários para destruir com certeza a nave inimiga.    Para encontrar uma coloração adequada, usamos uma fórmula geral com coeficientes e , que podemos escolher posteriormente. A fórmula é definida como:   Vamos testar o comportamento desta fórmula em uma cruz centrada na casa . Definimos como a cor da casa central:   As cores das 5 casas da cruz em relação a são:   Centro:  Cima:   Baixo:   Esquerda:   Direita:    Portanto, o conjunto das 5 cores cobertas pela cruz é sempre , com todos os cálculos realizados módulo 5. Podemos utilizar e e ficamos com a seguinte fórmula para escolher a cor de cada casa do tabuleiro:   O tabuleiro fica com a seguinte coloração:   Dessa maneira, não importa onde a nave pouse no tabuleiro, as 5 casas que ela ocupa terão sempre uma casa de cada uma das 5 cores (uma casa de cor 0, uma de cor 1, uma de cor 2, uma de cor 3 e uma de cor 4).  As 4 casas de canto que podemnos remover têm as seguintes cores: Cor 1, Cor 2, Cor 3 e Cor 4. Portanto, o número de casas atingíveis para cada cor é:  Cor 0: 17  Cor 1: 16 - 1 = 15  Cor 2: 16 - 1 = 15  Cor 3: 16 - 1 = 15  Cor 4: 16 - 1 = 15  Logo, no mínimo precisamos de 15 mísseis.   [cite_start] (Rioplatense 1999) É possível cobrir um tabuleiro com quadrados de lados inteiros maiores que 35 e menores que 1999? Os quadrados podem ser de tamanhos distintos.  (Rússia 2007) As faces de um cubo são particionadas em quadradinhos da forma usual. Sua superfície é coberta por 243 tiras de papel sem sobreposição. Uma tira é dita dobrada se não está apenas sobre uma face. Prove que o número de tiras dobradas é ímpar.      (Romênia 2000) Determine todos os tabuleiros que podem ser cobertos usando L-triminós.   (Estônia 2004) Um tabuleiro é coberto por oito L-triminós e um monominó. Determine todas as possíveis posições que o monominó pode ocupar.   (IMO 2004) Um gancho é uma figura de seis casas como na figura ou qualquer uma das figuras obtidas desta aplicando rotações ou reflexões. [cite_start]Determine todos os tabuleiros que podem ser cobertos usando esses ganchos.  (Rússia 1996) Podemos cobrir um tabuleiro com L-triminós de tal forma que cada casa do tabuleiro seja coberta por um mesmo número de peças? Pinte o tabuleiro usando -2's e 1's. A soma total das casas é -1, enquanto cada peça cobre uma soma de 3 ou 0. Como a soma total não é um múltiplo de 3, é impossível.    "
},
{
  "id": "problem-1",
  "level": "2",
  "url": "section-4.html#problem-1",
  "type": "Problema",
  "number": "2.1.1",
  "title": "",
  "body": "  Determine se é possível cobrir ou não o tabuleiro abaixo (sem sobreposições) usando apenas dominós?        Pinte as casas do tabuleiro acima alternadamente de branco e preto (como no tabuleiro de xadrez). Note que, não importa como colocamos o dominó no tabuleiro, ele sempre cobre uma casa branca e outra preta. Desse modo, se fosse possível cobrir o tabuleiro usando apenas dominós, deveríamos ter o tabuleiro com a quantidade de casas pretas igual à quantidade de casas brancas. Mas no tabuleiro \"quebrado\" existem 18 casas brancas e 16 pretas. Logo, não é possível fazer tal cobertura.   "
},
{
  "id": "problem-2",
  "level": "2",
  "url": "section-4.html#problem-2",
  "type": "Problema",
  "number": "2.1.3",
  "title": "",
  "body": "  Podemos cobrir um tabuleiro usando apenas T-tetraminós como abaixo?       Pinte o tabuleiro de branco e preto da maneira usual (como no xadrez). Note que ao colocarmos um T-tetraminó no tabuleiro ele pode assumir colorações do tipo 1 (1 casa branca e 3 pretas) ou tipo 2 (3 casas brancas e 1 preta).     Suponha que ao cobrir o tabuleiro usamos A peças do tipo 1 e B do tipo 2. Sabemos que devemos usar 25 peças no total, ou seja, .  Cada peça do tipo 1 possui uma casa branca e cada peça do tipo 2 possui 3 casas brancas, e como temos ao todo 50 casas brancas no tabuleiro, temos a equação: . De modo análogo, para as 50 casas pretas, obtemos .  Porém, o sistema: não possui solução inteira. Logo, não é possível cobrir o tabuleiro.   "
},
{
  "id": "problem-3",
  "level": "2",
  "url": "section-4.html#problem-3",
  "type": "Problema",
  "number": "2.1.6",
  "title": "",
  "body": "  (Seletiva Fortaleza – Rioplatense\/2012 – Nível A) Benjamim tem 25 peças A e 25 peças B, cujos formatos estão mostrados na figura     Com as 50 peças, Benjamim pretende cobrir um tabuleiro completamente, sem deixar buracos e nem fazer sobreposições. Ele sabe que cada quadradinho da peça A e que cada quadradinho da peça B tem 1cm² de área. Sabendo que ele pode girar as peças do jeito que ele quiser, podendo inclusive \"inverter\" qualquer peça, pergunta-se:  Se o tabuleiro for (ou seja, ele tiver 8 cm de comprimento por 8 cm de largura), é possível que ele consiga cobrir todo o tabuleiro?  Se o tabuleiro for , é possível que ele consiga cobrir todo o tabuleiro?  Se o tabuleiro for , é possível que ele consiga cobrir todo o tabuleiro?  Se todas as casas acima de uma diagonal do tabuleiro forem retiradas (veja figura), é possível que ele consiga cobrir todo o tabuleiro?          Note que os dois tipos de peças possuem área 4 e o tabuleiro possui área que é múltiplo de 4. Vamos tentar mostrar que é possível.       Note que os dois tipos de peças possuem área 4 e o tabuleiro possui área que é múltiplo de 4. Vamos tentar mostrar que é possível.      Note que o tabuleiro possui área que não é múltiplo de 4. Portanto, não é possível cobrir o tabuleiro.  A área do tabuleiro é que é múltiplo de 4. Porém, vamos mostrar que não é possível cobrir o tabuleiro.  Observe que na coloração do tabuleiro de xadrez, os dois tipos de peças cobrem duas casas brancas e duas casas pretas. Como o que sobrou do tabuleiro possui 20 casas brancas e 16 casas pretas, não é possível cobrir o que sobrou do tabuleiro.    "
},
{
  "id": "problem-4",
  "level": "2",
  "url": "section-4.html#problem-4",
  "type": "Problema",
  "number": "2.1.11",
  "title": "",
  "body": "   (Coreia - 2000) Sendo e inteiros positivos maiores que 1, prove que podemos cobrir um tabuleiro , sem sobreposições nem buracos, usando apenas L-tetraminós se, e somente se, é múltiplo de .       Vamos mostrar que se os L-tetraminós cobrem o tabuleiro , então é múltiplo de 8.  Observe que precisa ser múltiplo de 4, pois as peças possuem 4 casas. Sem perda de generalidade, suponha que é par e pinte o tabuleiro da seguinte maneira:     Teremos dois tipos de peças:  3 casas cinzas e 1 braca;  1 casa cinza e 3 brancas.  Sejam e a quantidade de peças do primeiro e do segundo tipo, respectivamente. Então, cobre todas as casas cinzas e cobre todas as casas brancas. Considere o sistema Podemos concluir que , logo . Ou seja, o número de peças de um tipo será igual o número de peças do outro tipo.  Como , Então, é um múltiplo de 8.  Falta mostrar que se é um múltiplo de , então podemos cobrir o tabuleiro com L-tetraminós.   "
},
{
  "id": "problem-5",
  "level": "2",
  "url": "section-4.html#problem-5",
  "type": "Problema",
  "number": "2.1.14",
  "title": "",
  "body": "  É possível que um cavalo do xadrez passe por todas as casas de um tabuleiro exatamente uma vez e, em seguida retorne para o quadrado original?    Vamos supor que existe tal caminho. Pinte o tabuleiro da seguinte maneira:   Observe que quando o cavalo sai da posição ele sai de uma casa vermelha e vai para uma casa azul.  Saindo de uma casa azul é possível ir para uma casa azul e também é possível ir para uma casa vermelha.  No entanto, para conseguirmos passar por todas as 40 casas, será necessário alternar as cores, pois são 20 de cada cor.  Começando da casa percebemos que na ordem das casas , as casas de índice ímpar serão de cor vermelha.  Olhando para a coloração padrão do xadrez, observa-se que todas as casas de índice ímpar serão brancas.     Supondo que exista um caminho que passe por todas as casas e retorne para a casa original, seria necessário que toda casa vermelha seja uma casa branca na coloração do xadrez, isto é uma contradição.   "
},
{
  "id": "problem-6",
  "level": "2",
  "url": "section-4.html#problem-6",
  "type": "Problema",
  "number": "2.1.17",
  "title": "",
  "body": "  (Estônia 1993) Para quais naturais é posível cobrir um retângulo de tamanho com as peças mostradas na figura (L-triminós e Z-tetraminós)?       Pinte o tabuleiro com números da seguinte forma: as linhas 1 e 3 com o número 1, e a linha 2 com o número -1. A soma de todos os números no tabuleiro é .     Veja que a soma dos números cobertos por um Z-tetraminó é sempre zero. A soma dos números cobertos por um L-triminó é sempre 1 ou -1. Para cobrir o tabuleiro, a soma total dos números cobertos pelas peças deve ser .  Se colocarmos as peças do tipo L de modo que a soma das casas seja 1, tem como completar o tabuleiro de 2 em 2, de modo que a soma seja 2 a cada duas colunas. No final chegaremos em n, se n for par.  Para cada peça do tipo Z colocada no tabuleiro a soma dela será zero e não caberá nem (n-1) peças do tipo L. Isto significa que as peças do tipo Z não podem ser utilizadas, pois a soma de todas as casas será menor que n, caso alguma peça do tipo Z seja utilizada.  Então para qualquer n par, podemos completar o tabuleiro apenas com peças do tipo L.  Se n for ímpar, não é possível. Se colocarmos uma peça do tipo L de forma que a soma seja -1, a soma de todas as peças será menor que n.    "
},
{
  "id": "problem-7",
  "level": "2",
  "url": "section-4.html#problem-7",
  "type": "Problema",
  "number": "2.1.20",
  "title": "",
  "body": "Sobre uma das casas de um tabuleiro infinito, existe um cubo que cobre a casa perfeitamente. A face no topo do cubo é branca, enquanto as demais faces são pretas. A cada passo, podemos tombar o cubo para um dos lados. É possível que:  Após 2004 passos o cubo volte ao mesmo quadrado com a face branca para baixo?  Após 2005 passos?      Sim. Vire o cubo duas vezes para a direita, uma para baixo, duas para a esquerda e uma para cima (figura 4). Após estes seis passos, a face branca estará virada para baixo. Sobram 1998 passos, basta tombar repetidamente o cudo para direira e para esquerda.     Não. Pinte o tabuleiro na maneira usual. Note que, a cada movimento, o cubo muda de uma casa preta para uma casa branca e vice-versa. Logo, após um número ı́mpar de movimentos não poderá estar na casa inicial.    "
},
{
  "id": "problem-8",
  "level": "2",
  "url": "section-4.html#problem-8",
  "type": "Problema",
  "number": "2.1.22",
  "title": "",
  "body": "É possível cobrir o tabuleiro a seguir usando apenas dominós?     "
},
{
  "id": "problem-9",
  "level": "2",
  "url": "section-4.html#problem-9",
  "type": "Problema",
  "number": "2.1.24",
  "title": "",
  "body": "  (OBM\/2012 – N2 – 2ª fase – Q1) João gosta de verificar propriedades do jogo de xadrez em um tabuleiro . Num de seus experimentos, João coloca um cavalo na casa inferior esquerda do tabuleiro . Qual o número mínimo de movimentos do cavalo para que ele possa chegar a qualquer casa do tabuleiro ?  Observação: O cavalo movimenta-se em L, isto é, anda duas casas em uma direção e, logo em seguida, uma casa na direção perpendicular, como ilustrado na figura.       Vamos colorir cada casa do tabuleiro com o número quando o cavalo precisar de no mínimo movimentos para chegar a tal casa do tabuleiro. Comecemos, então, pelo :   Portanto, a resposta é .   "
},
{
  "id": "problem-10",
  "level": "2",
  "url": "section-4.html#problem-10",
  "type": "Problema",
  "number": "2.1.27",
  "title": "",
  "body": "É possível cobrir um tabuleiro usando apenas peças como abaixo?    Sim, é possível.   . "
},
{
  "id": "problem-11",
  "level": "2",
  "url": "section-4.html#problem-11",
  "type": "Problema",
  "number": "2.1.30",
  "title": "",
  "body": "(Rússia 1997) Podemos cobrir um tabuleiro usando dominós e cruzes (peça de 5 quadrados)?   A resposta é não. A impossibilidade pode ser demonstrada de forma elegante atribuindo-se valores numéricos às casas do tabuleiro, o que transforma o problema de cobertura em uma simples equação algébrica.  (Passo 1: Atribuição de Valores) Definimos um valor para cada casa do tabuleiro com base em sua cor em um padrão de xadrez:    Uma casa branca recebe o valor .    Uma casa preta recebe o valor .    Com base nisso, calculamos o valor total do tabuleiro e o valor de cada peça individualmente.     Valor Total do Tabuleiro: Um tabuleiro 75 × 75 possui 2813 casas brancas e 2812 casas pretas. A soma total dos valores é: Qualquer cobertura completa deve, portanto, ter uma soma de valores igual a 1.     Valor de um Dominó: Cobre uma casa branca (+1) e uma preta (-1). Seu valor é .     Valor de uma Cruz com centro preto: Cobre 4 casas brancas e 1 preta. Seu valor é .     Valor de uma Cruz com centro branco: Cobre 1 casa branca e 4 pretas. Seu valor é .    (Passo 2: A Equação da Cobertura) Seja o número de dominós, o número de cruzes com centro preto e o número de cruzes com centro branco. Para que a cobertura seja possível, a soma dos valores de todas as peças deve ser igual ao valor total do tabuleiro.  Isso nos leva à equação: Simplificando, obtemos:   (Passo 3: A Contradição) A equação final revela a impossibilidade da tarefa. Fatorando o lado esquerdo, temos: Esta equação representa uma contradição matemática, pois é um valor inteiro, mas precisar ser igual a para existir a solução.   Conclusão: Como a premissa de que o tabuleiro pode ser coberto leva a uma equação sem solução inteira, a premissa é falsa. Portanto, é impossível cobrir um tabuleiro 75 × 75 com as peças dadas.   "
},
{
  "id": "problem-12",
  "level": "2",
  "url": "section-4.html#problem-12",
  "type": "Problema",
  "number": "2.1.31",
  "title": "",
  "body": "  (Maio\/2005) Sobre o tabuleiro , aterrissou a nave inimiga que cobre exatamente 5 casas do tabuleiro, conforme mostrado na figura. A nave é invisível.     Cada míssil defensivo cobre exatamente uma casa, e destrói a nave se bater numa das 5 casas que esta ocupa. Determine o número mínimo de mísseis que são necessários para destruir com certeza a nave inimiga.    Para encontrar uma coloração adequada, usamos uma fórmula geral com coeficientes e , que podemos escolher posteriormente. A fórmula é definida como:   Vamos testar o comportamento desta fórmula em uma cruz centrada na casa . Definimos como a cor da casa central:   As cores das 5 casas da cruz em relação a são:   Centro:  Cima:   Baixo:   Esquerda:   Direita:    Portanto, o conjunto das 5 cores cobertas pela cruz é sempre , com todos os cálculos realizados módulo 5. Podemos utilizar e e ficamos com a seguinte fórmula para escolher a cor de cada casa do tabuleiro:   O tabuleiro fica com a seguinte coloração:   Dessa maneira, não importa onde a nave pouse no tabuleiro, as 5 casas que ela ocupa terão sempre uma casa de cada uma das 5 cores (uma casa de cor 0, uma de cor 1, uma de cor 2, uma de cor 3 e uma de cor 4).  As 4 casas de canto que podemnos remover têm as seguintes cores: Cor 1, Cor 2, Cor 3 e Cor 4. Portanto, o número de casas atingíveis para cada cor é:  Cor 0: 17  Cor 1: 16 - 1 = 15  Cor 2: 16 - 1 = 15  Cor 3: 16 - 1 = 15  Cor 4: 16 - 1 = 15  Logo, no mínimo precisamos de 15 mísseis.   "
},
{
  "id": "problem-13",
  "level": "2",
  "url": "section-4.html#problem-13",
  "type": "Problema",
  "number": "2.1.34",
  "title": "",
  "body": "(Rioplatense 1999) É possível cobrir um tabuleiro com quadrados de lados inteiros maiores que 35 e menores que 1999? Os quadrados podem ser de tamanhos distintos. "
},
{
  "id": "problem-14",
  "level": "2",
  "url": "section-4.html#problem-14",
  "type": "Problema",
  "number": "2.1.35",
  "title": "",
  "body": "(Rússia 2007) As faces de um cubo são particionadas em quadradinhos da forma usual. Sua superfície é coberta por 243 tiras de papel sem sobreposição. Uma tira é dita dobrada se não está apenas sobre uma face. Prove que o número de tiras dobradas é ímpar. "
},
{
  "id": "problem-15",
  "level": "2",
  "url": "section-4.html#problem-15",
  "type": "Problema",
  "number": "2.1.36",
  "title": "",
  "body": "(Romênia 2000) Determine todos os tabuleiros que podem ser cobertos usando L-triminós. "
},
{
  "id": "problem-16",
  "level": "2",
  "url": "section-4.html#problem-16",
  "type": "Problema",
  "number": "2.1.37",
  "title": "",
  "body": "(Estônia 2004) Um tabuleiro é coberto por oito L-triminós e um monominó. Determine todas as possíveis posições que o monominó pode ocupar. "
},
{
  "id": "problem-17",
  "level": "2",
  "url": "section-4.html#problem-17",
  "type": "Problema",
  "number": "2.1.38",
  "title": "",
  "body": "(IMO 2004) Um gancho é uma figura de seis casas como na figura ou qualquer uma das figuras obtidas desta aplicando rotações ou reflexões. [cite_start]Determine todos os tabuleiros que podem ser cobertos usando esses ganchos. "
},
{
  "id": "problem-18",
  "level": "2",
  "url": "section-4.html#problem-18",
  "type": "Problema",
  "number": "2.1.39",
  "title": "",
  "body": "(Rússia 1996) Podemos cobrir um tabuleiro com L-triminós de tal forma que cada casa do tabuleiro seja coberta por um mesmo número de peças? Pinte o tabuleiro usando -2's e 1's. A soma total das casas é -1, enquanto cada peça cobre uma soma de 3 ou 0. Como a soma total não é um múltiplo de 3, é impossível. "
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
