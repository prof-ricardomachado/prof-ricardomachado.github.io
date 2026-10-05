var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "section-1",
  "level": "1",
  "url": "section-1.html",
  "type": "Seção",
  "number": "1.1",
  "title": "Demonstração",
  "body": " Demonstração    Visualização Espacial e Geometria Intuitiva  Problemas desta categoria exigem a decomposição de figuras e a comparação visual de comprimentos sem o uso de fórmulas complexas.   O Enigma dos Azulejos Idênticos   Um retângulo grande foi construído juntando retângulos pequenos e idênticos, como mostra a figura a seguir:   Retângulo composto por cinco peças idênticas.   Retângulo maior dividido em três retângulos verticais na parte superior e dois horizontais na parte inferior.    Sabendo que o perímetro de cada retângulo pequeno é igual a , qual é o perímetro do retângulo grande?  (A)  (B)  (C)  (D)  (E)      Pista 1: Chame o lado menor de cada retângulo pequeno de (largura) e o lado maior de (comprimento). Olhe para a largura total da figura: ela é formada por larguras em cima e por comprimento embaixo. O que isso revela sobre a relação entre e ?     Pista 2: Como , o perímetro de cada peça pequena é . Descubra o valor de e use-o para calcular a altura e a largura do retângulo completo.     Resposta Correta: (C) 80 cm   1. Pela figura, a largura total do retângulo grande pode ser medida de duas formas:   No topo: larguras dos retângulos em pé ( ).  Na base: o comprimento de um retângulo deitado ( ).   Logo, .  2. O perímetro de uma peça pequena é: Consequentemente, o comprimento de cada peça é .  3. As dimensões do retângulo grande são:   Largura: .  Altura: .   Portanto, o perímetro do retângulo grande é .       Aritmética Estrutural e Relações de Equivalência  Exercita a capacidade de substituição e transitividade lógica sem exigir manipulação algébrica abstrata formal.   O Peso das Formas Geométricas   Observe as três situações de equilíbrio com blocos de madeira e pesos:   Balanças de pratos em equilíbrio.   Primeira balança com 3 círculos equilibrando 2 triângulos. Segunda com 1 quadrado equilibrando 3 círculos. Terceira com 1 triângulo e 1 quadrado equilibrando 210 gramas.    Com base nessas pesagens, quantos gramas pesa exatamente um Quadrado ?  (A)  (B)  (C)  (D)  (E)      Pista 1: Olhe para a Balança 1 e para a Balança 2. Ambas se relacionam com \"3 Círculos\". Quantos Triângulos equivalem a 1 Quadrado?     Pista 2: Se 1 Quadrado pesa o mesmo que 2 Triângulos, substitua o Quadrado na Balança 3 por 2 Triângulos. Quantos Triângulos você terá no total equilibrando os ?     Resposta Correta: (D) 140 g   1. Pela Balança 2, sabemos que .  2. Pela Balança 1, sabemos que . Substituindo, concluímos que:   3. Na Balança 3, temos . Trocando o Quadrado por :   Como , seu peso é .       Lógica Dedutiva e Contagem Global  Esta técnica envolve o raciocínio sobre a soma de elementos que pertencem a mais de um grupo simultaneamente.   O Triângulo das Somas Iguais   Nos seis círculos posicionados nos vértices e nos lados de um triângulo, devem ser colocados os números de a , sem repetição:   Triângulo com seis círculos para alocação dos números de 1 a 6.   Triângulo equilátero com círculos nos três vértices marcados com A, B e C, e círculos intermediários em cada lado. Cada lado soma 12.    A soma dos três números em cada um dos lados do triângulo é sempre igual a . Se os números colocados nos vértices são representados por , e , qual é o valor da soma ?  (A)  (B)  (C)  (D)  (E)      Pista 1: Some o valor de todos os números disponíveis de a :      Pista 2: Se somarmos os três lados do triângulo ( ), quantas vezes cada número dos vértices ( ) foi contado nessa soma total?     Resposta Correta: (D) 15   1. A soma de todos os números que preenchem os seis círculos é:   2. Ao somarmos os três números de cada um dos três lados, obtemos:   3. Observe que os números nos pontos médios dos lados pertencem a apenas um lado (são contados uma vez). Já os números nos três vértices ( , e ) fazem parte de dois lados ao mesmo tempo e, portanto, foram somados duas vezes:         Otimização e Escolha em Malha  Desafios de decisão sequencial em que o aluno deve analisar rotas possíveis e planejar o melhor caminho.   A Trilha da Maior Pontuação   O Ualabi entra no tabuleiro pela casa superior esquerda (valor ) e quer chegar à saída na casa inferior direita (valor ):   Tabuleiro 3x3 com valores numéricos em cada casa.   Grade 3x3 com números 3, 8, 2 na primeira linha, 5, 1, 9 na segunda, e 4, 7, 6 na terceira linha.    Ele só pode andar para a direita ( ) ou para baixo ( ). Somando todos os números das casas por onde passa (incluindo o início e o fim), qual é a maior soma possível que ele pode atingir?  (A)  (B)  (C)  (D)  (E)      Pista 1: Qualquer caminho que parta do canto superior esquerdo e chegue ao canto inferior direito movendo-se apenas para a direita ou para baixo passará por exatamente casas.     Pista 2: Em vez de testar caminhos aleatórios, compare as escolhas nas bifurcações: vale mais a pena descer pelo número ou seguir pela casa ?     Resposta Correta: (D) 28   Para ir do canto ao canto , são necessários exatamente passos para a direita e passos para baixo, visitando casas.  Avaliando as rotas pelo topo (passando por ):   .  .  .   Avaliando as rotas pela esquerda (passando por ):   .  .   Portanto, o valor máximo obtido é , percorrendo o caminho pelo topo e contornando a direita.     "
},
{
  "id": "ex-retangulos-congruentes",
  "level": "2",
  "url": "section-1.html#ex-retangulos-congruentes",
  "type": "Exemplo",
  "number": "1.1.1",
  "title": "O Enigma dos Azulejos Idênticos.",
  "body": " O Enigma dos Azulejos Idênticos   Um retângulo grande foi construído juntando retângulos pequenos e idênticos, como mostra a figura a seguir:   Retângulo composto por cinco peças idênticas.   Retângulo maior dividido em três retângulos verticais na parte superior e dois horizontais na parte inferior.    Sabendo que o perímetro de cada retângulo pequeno é igual a , qual é o perímetro do retângulo grande?  (A)  (B)  (C)  (D)  (E)      Pista 1: Chame o lado menor de cada retângulo pequeno de (largura) e o lado maior de (comprimento). Olhe para a largura total da figura: ela é formada por larguras em cima e por comprimento embaixo. O que isso revela sobre a relação entre e ?     Pista 2: Como , o perímetro de cada peça pequena é . Descubra o valor de e use-o para calcular a altura e a largura do retângulo completo.     Resposta Correta: (C) 80 cm   1. Pela figura, a largura total do retângulo grande pode ser medida de duas formas:   No topo: larguras dos retângulos em pé ( ).  Na base: o comprimento de um retângulo deitado ( ).   Logo, .  2. O perímetro de uma peça pequena é: Consequentemente, o comprimento de cada peça é .  3. As dimensões do retângulo grande são:   Largura: .  Altura: .   Portanto, o perímetro do retângulo grande é .   "
},
{
  "id": "ex-balancas-equivalencia",
  "level": "2",
  "url": "section-1.html#ex-balancas-equivalencia",
  "type": "Exemplo",
  "number": "1.1.3",
  "title": "O Peso das Formas Geométricas.",
  "body": " O Peso das Formas Geométricas   Observe as três situações de equilíbrio com blocos de madeira e pesos:   Balanças de pratos em equilíbrio.   Primeira balança com 3 círculos equilibrando 2 triângulos. Segunda com 1 quadrado equilibrando 3 círculos. Terceira com 1 triângulo e 1 quadrado equilibrando 210 gramas.    Com base nessas pesagens, quantos gramas pesa exatamente um Quadrado ?  (A)  (B)  (C)  (D)  (E)      Pista 1: Olhe para a Balança 1 e para a Balança 2. Ambas se relacionam com \"3 Círculos\". Quantos Triângulos equivalem a 1 Quadrado?     Pista 2: Se 1 Quadrado pesa o mesmo que 2 Triângulos, substitua o Quadrado na Balança 3 por 2 Triângulos. Quantos Triângulos você terá no total equilibrando os ?     Resposta Correta: (D) 140 g   1. Pela Balança 2, sabemos que .  2. Pela Balança 1, sabemos que . Substituindo, concluímos que:   3. Na Balança 3, temos . Trocando o Quadrado por :   Como , seu peso é .   "
},
{
  "id": "ex-triangulo-magico",
  "level": "2",
  "url": "section-1.html#ex-triangulo-magico",
  "type": "Exemplo",
  "number": "1.1.5",
  "title": "O Triângulo das Somas Iguais.",
  "body": " O Triângulo das Somas Iguais   Nos seis círculos posicionados nos vértices e nos lados de um triângulo, devem ser colocados os números de a , sem repetição:   Triângulo com seis círculos para alocação dos números de 1 a 6.   Triângulo equilátero com círculos nos três vértices marcados com A, B e C, e círculos intermediários em cada lado. Cada lado soma 12.    A soma dos três números em cada um dos lados do triângulo é sempre igual a . Se os números colocados nos vértices são representados por , e , qual é o valor da soma ?  (A)  (B)  (C)  (D)  (E)      Pista 1: Some o valor de todos os números disponíveis de a :      Pista 2: Se somarmos os três lados do triângulo ( ), quantas vezes cada número dos vértices ( ) foi contado nessa soma total?     Resposta Correta: (D) 15   1. A soma de todos os números que preenchem os seis círculos é:   2. Ao somarmos os três números de cada um dos três lados, obtemos:   3. Observe que os números nos pontos médios dos lados pertencem a apenas um lado (são contados uma vez). Já os números nos três vértices ( , e ) fazem parte de dois lados ao mesmo tempo e, portanto, foram somados duas vezes:     "
},
{
  "id": "ex-caminho-maximo",
  "level": "2",
  "url": "section-1.html#ex-caminho-maximo",
  "type": "Exemplo",
  "number": "1.1.7",
  "title": "A Trilha da Maior Pontuação.",
  "body": " A Trilha da Maior Pontuação   O Ualabi entra no tabuleiro pela casa superior esquerda (valor ) e quer chegar à saída na casa inferior direita (valor ):   Tabuleiro 3x3 com valores numéricos em cada casa.   Grade 3x3 com números 3, 8, 2 na primeira linha, 5, 1, 9 na segunda, e 4, 7, 6 na terceira linha.    Ele só pode andar para a direita ( ) ou para baixo ( ). Somando todos os números das casas por onde passa (incluindo o início e o fim), qual é a maior soma possível que ele pode atingir?  (A)  (B)  (C)  (D)  (E)      Pista 1: Qualquer caminho que parta do canto superior esquerdo e chegue ao canto inferior direito movendo-se apenas para a direita ou para baixo passará por exatamente casas.     Pista 2: Em vez de testar caminhos aleatórios, compare as escolhas nas bifurcações: vale mais a pena descer pelo número ou seguir pela casa ?     Resposta Correta: (D) 28   Para ir do canto ao canto , são necessários exatamente passos para a direita e passos para baixo, visitando casas.  Avaliando as rotas pelo topo (passando por ):   .  .  .   Avaliando as rotas pela esquerda (passando por ):   .  .   Portanto, o valor máximo obtido é , percorrendo o caminho pelo topo e contornando a direita.   "
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
