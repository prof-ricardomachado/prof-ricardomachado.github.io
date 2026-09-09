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
  "title": "Motivação",
  "body": " Motivação    Aplicação: Permutações Caóticas   Uma permutação de uma lista de elementos é chamada de permutação caótica , quando nenhum dos elementos da permutação está na posição original, ou seja, uma permutação de é chamada de caótica quando nenhum dos se encontra na -ésima posição.  Notação:    As permutações caóticas dos elementos podem ser geradas no Sage, com o seguinte comando:    A quantidade de permutações caóticas de uma lista com objetos distintos, pode ser calculada da seguinte maneira:   Considere todas as permutações dos elementos . Indicando por todas as permutações formadas pelos elementos com no -ésimo lugar, calcularemos : Visto que existem termos no primeiro somatório, termos no segundo, termos no terceiro, , no último e temos evidenciando , obtém-se:     Calculando o número de permutações caóticas no Sage:         Sejam e conjuntos finitos, então    Diagrama de Venn para .      Sejam um conjunto, subconjuntos de . Definimos os números da seguinte maneira:     Sejam conjuntos finitos. A cardinalidade de é dada por:      Suponha que o elemento pertence a exatamente ( ) dos conjuntos . Será mostrado que é contado exatamente uma vez pelo lado direito da Expressão .  No somatório: observa-se que é contado vezes, pois pertence a exatamente dos conjuntos. No somatório nota-se que é contado vezes, pois, em cada termo do somatório, para que seja contado, precisa pertencer aos dois conjuntos. Se separarmos os conjuntos que contém , existem interseções contendo . No caso geral, será contado vezes, pelo somatório envolvendo dos conjuntos .   Desta forma, o elemento será contado exatamente vezes pelo lado direito de . Usando a Expansão do Binômio de Newton (veja ), temos Portanto, Isto mostra que o elemento é contado exatamente uma vez pelo lado direito de .  Como o elemento é arbitrário e a quantidade , também é arbitrária, esse argumento serve para cada um dos elementos de , o que prova o teorema.     Quantos são os anagramas da palavra MATEMATICA, na qual, nenhuma letra está em sua posição original?    Quantos são os anagramas da palavra SAGAZ, na qual, nenhuma letra está em sua posição original?   Vamos contar o total de permutações e subtrair o número de permutações que possuem alguma letra na posição original. O total de permutações é A resposta será dada por Na qual, o conjunto é o conjunto das permutações com a letra na posição original.  Neste caso, vamos contar separadamente o número de permutações que tem alguma letra na posição original. Primeiro vamos contar 1 a 1, ou seja, fixamos a letra na posição original e calculamos o número de permutações das outras letras:  S:  A:  G:  A:  Z:  Assim,   Interseções 2 a 2, fixamos as letras nas posições originais e calculamos o número de permutações das outras letras:  SA:  SG:  SA:  SZ:  AG:  AA:  AZ:  GA:  GZ:  AZ:  Logo,   Interseções 3 a 3:  SAG:  SAA:  SAZ:  SGA:  SGZ:  SAZ:  AGA:  AGZ:  AAZ:  GAZ:  Logo,   Interseções 4 a 4:  AGAZ:  SGAZ:  SAAZ:  SAGZ:  SAGA:  Logo,   No caso 5 a 5, só temos uma maneira.   A resposta é      "
},
{
  "id": "def-permutacao-caotica",
  "level": "2",
  "url": "sec_introducao.html#def-permutacao-caotica",
  "type": "Definição",
  "number": "1.1",
  "title": "",
  "body": " Uma permutação de uma lista de elementos é chamada de permutação caótica , quando nenhum dos elementos da permutação está na posição original, ou seja, uma permutação de é chamada de caótica quando nenhum dos se encontra na -ésima posição.  Notação:   "
},
{
  "id": "technology-1",
  "level": "2",
  "url": "sec_introducao.html#technology-1",
  "type": "Tecnologia",
  "number": "1.2",
  "title": "",
  "body": "As permutações caóticas dos elementos podem ser geradas no Sage, com o seguinte comando:  "
},
{
  "id": "teo-pcaotica1",
  "level": "2",
  "url": "sec_introducao.html#teo-pcaotica1",
  "type": "Teorema",
  "number": "1.3",
  "title": "",
  "body": " A quantidade de permutações caóticas de uma lista com objetos distintos, pode ser calculada da seguinte maneira:   Considere todas as permutações dos elementos . Indicando por todas as permutações formadas pelos elementos com no -ésimo lugar, calcularemos : Visto que existem termos no primeiro somatório, termos no segundo, termos no terceiro, , no último e temos evidenciando , obtém-se:    "
},
{
  "id": "tec-pcaotica1",
  "level": "2",
  "url": "sec_introducao.html#tec-pcaotica1",
  "type": "Tecnologia",
  "number": "1.4",
  "title": "",
  "body": "Calculando o número de permutações caóticas no Sage:  "
},
{
  "id": "theorem-2",
  "level": "2",
  "url": "sec_introducao.html#theorem-2",
  "type": "Teorema",
  "number": "1.5",
  "title": "",
  "body": " Sejam e conjuntos finitos, então    Diagrama de Venn para .    "
},
{
  "id": "definition-2",
  "level": "2",
  "url": "sec_introducao.html#definition-2",
  "type": "Definição",
  "number": "1.7",
  "title": "",
  "body": " Sejam um conjunto, subconjuntos de . Definimos os números da seguinte maneira:   "
},
{
  "id": "teo-inclusao-exclusao-n",
  "level": "2",
  "url": "sec_introducao.html#teo-inclusao-exclusao-n",
  "type": "Teorema",
  "number": "1.8",
  "title": "",
  "body": " Sejam conjuntos finitos. A cardinalidade de é dada por:      Suponha que o elemento pertence a exatamente ( ) dos conjuntos . Será mostrado que é contado exatamente uma vez pelo lado direito da Expressão .  No somatório: observa-se que é contado vezes, pois pertence a exatamente dos conjuntos. No somatório nota-se que é contado vezes, pois, em cada termo do somatório, para que seja contado, precisa pertencer aos dois conjuntos. Se separarmos os conjuntos que contém , existem interseções contendo . No caso geral, será contado vezes, pelo somatório envolvendo dos conjuntos .   Desta forma, o elemento será contado exatamente vezes pelo lado direito de . Usando a Expansão do Binômio de Newton (veja ), temos Portanto, Isto mostra que o elemento é contado exatamente uma vez pelo lado direito de .  Como o elemento é arbitrário e a quantidade , também é arbitrária, esse argumento serve para cada um dos elementos de , o que prova o teorema.   "
},
{
  "id": "example-1",
  "level": "2",
  "url": "sec_introducao.html#example-1",
  "type": "Exemplo",
  "number": "1.9",
  "title": "",
  "body": " Quantos são os anagramas da palavra SAGAZ, na qual, nenhuma letra está em sua posição original?   Vamos contar o total de permutações e subtrair o número de permutações que possuem alguma letra na posição original. O total de permutações é A resposta será dada por Na qual, o conjunto é o conjunto das permutações com a letra na posição original.  Neste caso, vamos contar separadamente o número de permutações que tem alguma letra na posição original. Primeiro vamos contar 1 a 1, ou seja, fixamos a letra na posição original e calculamos o número de permutações das outras letras:  S:  A:  G:  A:  Z:  Assim,   Interseções 2 a 2, fixamos as letras nas posições originais e calculamos o número de permutações das outras letras:  SA:  SG:  SA:  SZ:  AG:  AA:  AZ:  GA:  GZ:  AZ:  Logo,   Interseções 3 a 3:  SAG:  SAA:  SAZ:  SGA:  SGZ:  SAZ:  AGA:  AGZ:  AAZ:  GAZ:  Logo,   Interseções 4 a 4:  AGAZ:  SGAZ:  SAAZ:  SAGZ:  SAGA:  Logo,   No caso 5 a 5, só temos uma maneira.   A resposta é    "
},
{
  "id": "section-2",
  "level": "1",
  "url": "section-2.html",
  "type": "Seção",
  "number": "2",
  "title": "Polinômios de Torre",
  "body": " Polinômios de Torre   Um polinômio de torre é um polinômio gerador do número de maneiras de colocar torres não atacantes em um tabuleiro, ou seja, quaisquer duas torres não podem estar na mesma linha ou coluna.   Na Figura , temos um tabuleiro com algumas posições proibidas e todas as formas de distribuir de zero a três torres não atacantes no tabuleiro.   Tabuleiro e todas as formas de colocar torres não atacantes.      Seja um tabuleiro , o polinômio de torre de é definido como no qual, é o número de maneiras de colocar torres não atacantes em .      Determine o polinômio de torre do tabuleiro , da .    Para estabelecer o polinômio de torre de vamos obter os coeficientes , com . Note que não é possível colocar mais que 3 torres não atacantes em . De acordo com a , , , e . Logo,      Resultados Principais   Esta seção possui definições e resultados que facilitam o cálculo de polinômios de torre, bem como, exemplos da aplicação destes resultados. Por fim, apresentamos o , que é essencial na aplicação dessa teoria para resolução de problemas de permutações com restrições, o que é abordado na próxima seção.    Seja um tabuleiro , sem restrições. O polinômio de torre de é dado por:     Para determinar os coeficientes dos termos de , começamos contando o número de maneiras de selecionar linhas e colunas em . Temos maneiras de escolher linhas e maneiras de escolher colunas. Para cada escolha das linhas e colunas, temos uma equivalência com um tabuleiro , no qual, vamos contar o número de maneiras de colocar as torres não atacantes. Temos maneiras de fazer isto, e portanto, o polinômio de torre de é       Seja um tabuleiro.   Um subtabuleiro de é qualquer subconjunto retangular de quadrados de .    Os subtabuleiros , de , são disjuntos , se nenhum quadrado de está na mesma linha ou coluna que os quadrados de , para , com .    O tabuleiro pode ser dividido em subtabuleiros disjuntos  , se os subtabuleiros são disjuntos e se todos os quadrados de que não estão nos subtabuleiros , com , são quadrados proibidos.         Na temos um tabuleiro e uma subdivisão em subtabuleiros disjuntos e . Note que todos os quadrados de que não estão em ou são quadrados proibidos.   Tabuleiro e divisão de nos subtabuleiros disjuntos e .        O polinômio de torre de um tabuleiro , dividido nos subtabuleiros disjuntos , é dado pelo produto dos polinômios de torre dos subtabuleiros , ou seja:     Vamos mostrar o caso , os demais casos podem ser obtidos tomando indução em .  Seja um tabuleiro dividido nos subtabuleiros disjuntos e . Para colocar torres não atacantes em , podemos colocar , com , torres não atacantes em e torres não atacantes em . Isto posto, dados duas torres quaisquer em , uma não pode atacar a outra. Portanto, o número de maneiras de colocar torres não atacantes em é dado por Logo,       Determine o polinômio de torre do tabuleiro , do .    Para encontrar o polinômio de torre de , obtemos individualmente os polinômios de torre dos tabuleiros e e depois usamos o . Pelo , O coeficiente de do tabuleiro é 4, pois, colocando uma torre na posição , temos duas maneiras de colocar uma torre na primeira linha (posições e ). Colocando uma torre na posição , também temos duas maneiras de colocar uma torre na primeira linha (posições e ). Assim, no total são 4 possibilidades.   Tabuleiro e as indicações das 4 possibilidades de colocar duas torres.    O coeficiente de é claramente 5, pois existem cinco quadrados permitidos e consequentemente 5 formas de colocar uma torre neste tabuleiro. Por fim, o coeficiente de é 1, pois existe uma única maneira de deixar o tabuleiro vazio. Logo, O polinômio de torre de é claramente Portanto, pelo , temos       Sejam e tabuleiros , tais que um pode ser obtido do outro permutando linhas ou colunas. Então e possuem o mesmo polinômio de torre.    Permutando linhas e colunas, dados dois quadrados que estão inicialmente em linhas e colunas diferentes, eles ficarão em linhas e colunas diferentes e vice-versa. Portanto, existe uma bijeção entre as maneiras de colocar um determinado número de torres não atacantes no tabuleiro inicial e as formas de colocá-las no tabuleiro final. Logo, ambos tabuleiros têm os mesmos polinômios de torre.      Determine o polinômio de torre do tabuleiro , definido pela .   Tabuleiro B.      Pelo , os polinômios de torre de todos os tabuleiros da são iguais, pois, um pode ser obtido do outro permutando linhas ou colunas.   Do tabuleiro ao tabuleiro da .    No entanto, o polinômio de torre do tabuleiro , o mais à direita da já foi calculado no . Portanto,       Sejam um tabuleiro e um quadrado permitido de .   Considere , obtido por mudar a cor do quadrado no tabuleiro ;    Considere , obtido por deletar a linha e a coluna do quadrado no tabuleiro .   Então,     Precisamos mostrar que para qualquer , o coeficiente de é igual para os dois lados da igualdade.  O coeficiente de em é igual ao número de maneiras de colocar torres não atacantes em , sem usar o quadrado , mais o número de maneiras de colocar torres não atacantes em , usando todas as vezes. Como o quadrado será usado todas as vezes, essa parte é igual ao número de maneiras de colocar torres não atacantes em . Portanto, Como foi arbitrário, obtivemos o resultado.      Seja um tabuleiro com posições proibidas , definimos o tabuleiro complementar de , como o tabuleiro que tem as posições permitidas . Isto é, o que era permitido será proibido e vice-versa. De outra forma, os quadrados vermelhos ficarão azuis e os que são azuis ficarão vermelhos. Denotaremos o tabuleiro complementar de por . Observe que .      Seja um tabuleiro , então, o número de maneiras de colocar torres não atacantes em é dado por:     Considere , com , o conjunto das distribuições de torres não atacantes em , na qual, a torre da linha está em uma posição proibida. Observe que pois é o número de maneiras de colocar torres não atacantes em de modo que pelo menos uma torre ocupe uma posição proibida. Então, o valor do conjunto complementar é o número que procuramos, .  A cardinalidade do conjunto é igual ao número total de maneiras de colocar torres não atacantes em , ignorando as posições proibidas, menos , ou seja, Pelo Princípio da Inclusão-Exclusão Precisamos calcular as cardinalidades dos conjuntos acima. A quantidade de elementos de é o número de maneiras de colocar uma torre em uma posição proibida na linha vezes . O total de maneiras de colocar uma torre em uma posição proibida em é , logo Analogamente, na interseção de conjuntos, , ficamos com vezes . Portanto, Fazendo as substituições na , como , concluímos a demonstração.    "
},
{
  "id": "definition-3",
  "level": "2",
  "url": "section-2.html#definition-3",
  "type": "Definição",
  "number": "2.1",
  "title": "",
  "body": " Um polinômio de torre é um polinômio gerador do número de maneiras de colocar torres não atacantes em um tabuleiro, ou seja, quaisquer duas torres não podem estar na mesma linha ou coluna.  "
},
{
  "id": "fig-tab01",
  "level": "2",
  "url": "section-2.html#fig-tab01",
  "type": "Figura",
  "number": "2.2",
  "title": "",
  "body": " Tabuleiro e todas as formas de colocar torres não atacantes.   "
},
{
  "id": "def-polinomio-torre",
  "level": "2",
  "url": "section-2.html#def-polinomio-torre",
  "type": "Definição",
  "number": "2.3",
  "title": "",
  "body": "  Seja um tabuleiro , o polinômio de torre de é definido como no qual, é o número de maneiras de colocar torres não atacantes em .   "
},
{
  "id": "ex-polinomio-tab01",
  "level": "2",
  "url": "section-2.html#ex-polinomio-tab01",
  "type": "Exemplo",
  "number": "2.4",
  "title": "",
  "body": "  Determine o polinômio de torre do tabuleiro , da .    Para estabelecer o polinômio de torre de vamos obter os coeficientes , com . Note que não é possível colocar mais que 3 torres não atacantes em . De acordo com a , , , e . Logo,    "
},
{
  "id": "corolario-quadrado",
  "level": "2",
  "url": "section-2.html#corolario-quadrado",
  "type": "Teorema",
  "number": "2.5",
  "title": "",
  "body": "  Seja um tabuleiro , sem restrições. O polinômio de torre de é dado por:     Para determinar os coeficientes dos termos de , começamos contando o número de maneiras de selecionar linhas e colunas em . Temos maneiras de escolher linhas e maneiras de escolher colunas. Para cada escolha das linhas e colunas, temos uma equivalência com um tabuleiro , no qual, vamos contar o número de maneiras de colocar as torres não atacantes. Temos maneiras de fazer isto, e portanto, o polinômio de torre de é    "
},
{
  "id": "def-subtabuleiros",
  "level": "2",
  "url": "section-2.html#def-subtabuleiros",
  "type": "Definição",
  "number": "2.6",
  "title": "",
  "body": "  Seja um tabuleiro.   Um subtabuleiro de é qualquer subconjunto retangular de quadrados de .    Os subtabuleiros , de , são disjuntos , se nenhum quadrado de está na mesma linha ou coluna que os quadrados de , para , com .    O tabuleiro pode ser dividido em subtabuleiros disjuntos  , se os subtabuleiros são disjuntos e se todos os quadrados de que não estão nos subtabuleiros , com , são quadrados proibidos.      "
},
{
  "id": "ex-t1t2t3",
  "level": "2",
  "url": "section-2.html#ex-t1t2t3",
  "type": "Exemplo",
  "number": "2.7",
  "title": "",
  "body": "  Na temos um tabuleiro e uma subdivisão em subtabuleiros disjuntos e . Note que todos os quadrados de que não estão em ou são quadrados proibidos.   Tabuleiro e divisão de nos subtabuleiros disjuntos e .     "
},
{
  "id": "teoproddossubsdisjuntos",
  "level": "2",
  "url": "section-2.html#teoproddossubsdisjuntos",
  "type": "Teorema",
  "number": "2.9",
  "title": "",
  "body": "  O polinômio de torre de um tabuleiro , dividido nos subtabuleiros disjuntos , é dado pelo produto dos polinômios de torre dos subtabuleiros , ou seja:     Vamos mostrar o caso , os demais casos podem ser obtidos tomando indução em .  Seja um tabuleiro dividido nos subtabuleiros disjuntos e . Para colocar torres não atacantes em , podemos colocar , com , torres não atacantes em e torres não atacantes em . Isto posto, dados duas torres quaisquer em , uma não pode atacar a outra. Portanto, o número de maneiras de colocar torres não atacantes em é dado por Logo,    "
},
{
  "id": "ex-poliexant",
  "level": "2",
  "url": "section-2.html#ex-poliexant",
  "type": "Exemplo",
  "number": "2.10",
  "title": "",
  "body": "  Determine o polinômio de torre do tabuleiro , do .    Para encontrar o polinômio de torre de , obtemos individualmente os polinômios de torre dos tabuleiros e e depois usamos o . Pelo , O coeficiente de do tabuleiro é 4, pois, colocando uma torre na posição , temos duas maneiras de colocar uma torre na primeira linha (posições e ). Colocando uma torre na posição , também temos duas maneiras de colocar uma torre na primeira linha (posições e ). Assim, no total são 4 possibilidades.   Tabuleiro e as indicações das 4 possibilidades de colocar duas torres.    O coeficiente de é claramente 5, pois existem cinco quadrados permitidos e consequentemente 5 formas de colocar uma torre neste tabuleiro. Por fim, o coeficiente de é 1, pois existe uma única maneira de deixar o tabuleiro vazio. Logo, O polinômio de torre de é claramente Portanto, pelo , temos    "
},
{
  "id": "teo-permutacao",
  "level": "2",
  "url": "section-2.html#teo-permutacao",
  "type": "Teorema",
  "number": "2.12",
  "title": "",
  "body": "  Sejam e tabuleiros , tais que um pode ser obtido do outro permutando linhas ou colunas. Então e possuem o mesmo polinômio de torre.    Permutando linhas e colunas, dados dois quadrados que estão inicialmente em linhas e colunas diferentes, eles ficarão em linhas e colunas diferentes e vice-versa. Portanto, existe uma bijeção entre as maneiras de colocar um determinado número de torres não atacantes no tabuleiro inicial e as formas de colocá-las no tabuleiro final. Logo, ambos tabuleiros têm os mesmos polinômios de torre.   "
},
{
  "id": "ex-t_linha",
  "level": "2",
  "url": "section-2.html#ex-t_linha",
  "type": "Exemplo",
  "number": "2.13",
  "title": "",
  "body": "  Determine o polinômio de torre do tabuleiro , definido pela .   Tabuleiro B.      Pelo , os polinômios de torre de todos os tabuleiros da são iguais, pois, um pode ser obtido do outro permutando linhas ou colunas.   Do tabuleiro ao tabuleiro da .    No entanto, o polinômio de torre do tabuleiro , o mais à direita da já foi calculado no . Portanto,    "
},
{
  "id": "teoquadradors",
  "level": "2",
  "url": "section-2.html#teoquadradors",
  "type": "Teorema",
  "number": "2.16",
  "title": "",
  "body": "  Sejam um tabuleiro e um quadrado permitido de .   Considere , obtido por mudar a cor do quadrado no tabuleiro ;    Considere , obtido por deletar a linha e a coluna do quadrado no tabuleiro .   Então,     Precisamos mostrar que para qualquer , o coeficiente de é igual para os dois lados da igualdade.  O coeficiente de em é igual ao número de maneiras de colocar torres não atacantes em , sem usar o quadrado , mais o número de maneiras de colocar torres não atacantes em , usando todas as vezes. Como o quadrado será usado todas as vezes, essa parte é igual ao número de maneiras de colocar torres não atacantes em . Portanto, Como foi arbitrário, obtivemos o resultado.   "
},
{
  "id": "def-tabuleiro-complementar",
  "level": "2",
  "url": "section-2.html#def-tabuleiro-complementar",
  "type": "Definição",
  "number": "2.17",
  "title": "",
  "body": "  Seja um tabuleiro com posições proibidas , definimos o tabuleiro complementar de , como o tabuleiro que tem as posições permitidas . Isto é, o que era permitido será proibido e vice-versa. De outra forma, os quadrados vermelhos ficarão azuis e os que são azuis ficarão vermelhos. Denotaremos o tabuleiro complementar de por . Observe que .   "
},
{
  "id": "teocomplemetar",
  "level": "2",
  "url": "section-2.html#teocomplemetar",
  "type": "Teorema",
  "number": "2.18",
  "title": "",
  "body": "  Seja um tabuleiro , então, o número de maneiras de colocar torres não atacantes em é dado por:     Considere , com , o conjunto das distribuições de torres não atacantes em , na qual, a torre da linha está em uma posição proibida. Observe que pois é o número de maneiras de colocar torres não atacantes em de modo que pelo menos uma torre ocupe uma posição proibida. Então, o valor do conjunto complementar é o número que procuramos, .  A cardinalidade do conjunto é igual ao número total de maneiras de colocar torres não atacantes em , ignorando as posições proibidas, menos , ou seja, Pelo Princípio da Inclusão-Exclusão Precisamos calcular as cardinalidades dos conjuntos acima. A quantidade de elementos de é o número de maneiras de colocar uma torre em uma posição proibida na linha vezes . O total de maneiras de colocar uma torre em uma posição proibida em é , logo Analogamente, na interseção de conjuntos, , ficamos com vezes . Portanto, Fazendo as substituições na , como , concluímos a demonstração.   "
},
{
  "id": "sec-aplicacoes",
  "level": "1",
  "url": "sec-aplicacoes.html",
  "type": "Seção",
  "number": "3",
  "title": "Aplicações",
  "body": " Aplicações  Nesta seção, iremos exibir as aplicações do método dos polinômios de torre. Começamos com o caso mais simples, que consiste na bijeção entre o número de permutações simples e o número de maneiras de colocar torres não atacantes em um tabuleiro. Usando essa ideia na construção dos tabuleiros, aumentando gradativamente a complexidade dos problemas, mostramos como calcular o número de permutações caóticas, -posicionadas, caóticas com elementos repetidos e discordantes. Também resolvemos o problema das coincidências e o problema dos encontros. Além disso, exibimos a pujança da técnica a partir da inter-relação da parte teórica, computacional e a interativa online. Esta última pode ser acessada no QR Code:      Permutações e Polinômios de Torre    Existe uma bijeção entre as permutações de e as maneiras de colocar torres não atacantes em um tabuleiro , sem restrições.    Dada uma permutação de , para cada elemento , com , coloque uma torre na posição do tabuleiro . Assim, dados dois elementos distintos, e , da permutação , as torres correspondentes no tabuleiro ocupam linhas e colunas distintas, pois e .  Reciprocamente, dada uma distribuição de torres não atacantes em , para cada torre na posição , defina uma permutação colocando o elemento na posição . Observe que ao analisar todas as torres, tanto os valores de como os valores de vão assumir cada um dos valores de até . Assim, podemos ordenar as posições das torres pelas colunas da seguinte maneira: . É claro que , se , pois as torres estão em linhas distintas. Escrevendo as primeiras coordenadas sucessivamente, obtemos a permutação , que é constituída pelos números de até em alguma ordem. Veja a .   Distribuição de 4 torres não atacantes e a permutação correspondente.       Visto em   Qual o número de permutações de na qual, o número 1 não pode ocupar o segundo lugar, o número 2 não pode ocupar o quarto lugar e o número 3 não pode ocupar nem o primeiro nem o quarto lugar?    Como este problema envolve permutações, a ideia é usar a bijeção exibida na . Porém, precisamos adicionar no tabuleiro as restrições impostas pelo problema. Como o elemento 1 não pode ocupar o segundo lugar, vamos deixar proibida a posição e assim sucessivamente, até obtermos o tabuleiro , o mais à esquerda da . Assim, a resposta deste problema é dado pelo coeficiente líder do polinômio de torre deste tabuleiro. Pelo , o polinômio de torre de é igual ao polinômio de torre de todos os tabuleiros da .   Tabuleiro e permutações até o tabuleiro .    Pelos resultados apresentados anteriormente, é mais fácil calcular o polinômio de torre do tabuleiro , o mais à direita da . De fato, usando o , o coeficiente líder do polinômio de torre deste tabuleiro é dado por Falta calcular os coeficientes do polinômio de torre de .   Tabuleiro .    Pelo , Substituindo os coeficientes de em obtemos a solução:   Usando o SageMath, com o bloco de códigos a seguir, obtemos o polinômio de torre do tabuleiro , cujo coeficiente líder é a resposta do problema:   Com o polinômio obtido, além de descobrirmos que 7 é o número de maneiras de colocar 4 torres no tabuleiro , o polinômio também informa que 39, 40, 12 e 1 são os números de maneiras de colocar 3, 2, 1 e 0 torres no tabuleiro .      Permutações Caóticas  O primeiro problema famoso associado à permutações caóticas é O Problema das Cartas Mal Endereçadas que está relacionado a matemáticos ilustres, tanto na proposição quanto na resolução, como Pierre Raymond de Montmort (1678-1719) e Nicholas Bernoulli (1687-1759). Outro grande matemático que se deparou com este problema foi Leonhard Euler (1707-1783), que publicou a solução em seu artigo intitulado Calcul de la probabilité dans le jeu de rencontre  , cuja tradução para inglês pode ser encontrada em .    Uma permutação caótica , ou desarranjo , dos elementos , é uma permutação, na qual, o elemento não pode ocupar a posição, o elemento não pode ocupar a posição e assim por diante, até que o elemento não possa ocupar a posição. Por exemplo, para , e são permutações caóticas.    Existem várias maneiras, bem conhecidas, de encontrar o número de permutações caóticas para um determinado valor de . Usando o princípio da Inclusão-Exclusão e relações de recorrências são os mais comuns. Podemos também determiná-las, com polinômios de torre, utilizando o que desenvolvemos até aqui.    Quantas são as permutações caóticas dos elementos ?    Fixando , perceba que calcular a quantidade de permutações caóticas neste caso é o mesmo que calcular o coeficiente de do tabuleiro , a seguir:   Tabuleiro , relacionado à permutação caótica para .    Esse é um bom exemplo de aplicação do , pois é difícil calcular diretamente o polinômio de torre de , mas o polinômio de torre do seu tabuleiro complementar conseguimos calcular da seguinte forma:   Tabuleiro , complementar ao tabuleiro da .    O polinômio de torre de é: E utilizando o temos: De forma totalmente análoga ao que foi feito acima, podemos fazer o caso geral.      O tabuleiro , que tem casas permitidas apenas na diagonal principal e as demais são todas proibidas, tem polinômio de torre igual a     Observe que pode ser dividido em subtabuleiros disjuntos. Cada subtabuleiro possui o seguinte polinômio de torre , pelo temos:      Convidamos o leitor a redemonstrar a afirmação acima usando o .     A quantidade de permutações caóticas de elementos é     Perceba que , no qual, é um tabuleiro com os quadrados da diagonal principal na cor vermelha e os demais quadrados na cor azul, assim como na , para o caso . pode ser calculado utilizando o , pois . Pelo temos , então Como queríamos.    O bloco de código a seguir possui uma função implementada em Sage para calcular . Essa função calcula o coeficiente líder do polinômio de torre da matriz complementar à matriz identidade. Abaixo, calculamos ; para calcular para qualquer inteiro , substitua o valor 5 da linha 5 do bloco de código:    Valores de                                   As permutações dos elementos , na qual, elementos estão em suas posições originais são chamadas de permutações com pontos fixos . O número de permutações com pontos fixos é denotado por e pode ser calculado usando a expressão de da seguinte maneira:     Observe que os elementos, que ficarão em suas posições originais, podem ser escolhidos de maneiras. Uma vez que essas escolhas foram feitas, os elementos precisam ocupar posições diferentes de suas posições originais, isto pode ser feito de maneiras. Portanto, .     O Problema das Coincidências   Considere uma urna contendo bolas numeradas de até e suponha que todas as bolas são sucessivamente retiradas uma após a outra, sem reposição. Quando a -ésima bola é sorteada na -ésima retirada, , dizemos que houve uma coincidência . Calcule o número de maneiras de retirar bolas sem reposição, que resultam em coincidências.    Ao anotar os números obtidos pela remoção sucessiva das 20 bolas, um após o outro, separando-os por vírgula, obtemos uma permutação dos elementos . Observe que para cada coincidência do sorteio, temos um ponto fixo na permutação. Portanto, o número de sorteios de 20 bolas que possuem 14 coincidências é:     Devido ao exemplo anterior, o número também é conhecido como o número de coincidências. No bloco de código a seguir, temos uma implementação em Sage para calcular . A função está predefinida com e na linha 7 calculamos :    Valores de                                                                                                                               Permutações -Posicionadas  No artigo , Leonard Euler está interessando em achar a solução do problema Cálculo da Probabilidade no Jogo do Duelo ; ao longo do mesmo, ele encontra a solução das permutações caóticas e das permutações -posicionadas. Na página 6 do artigo pode ser encontrada uma tabela nomeada NUMBER OF CARDS , cujos valores estão contidos na , contendo o número de soluções das permutações -posicionadas para alguns valores de e . Apesar desse tipo de permutação não ser muito difundido, podemos resolver problemas interessantes de permutações, na qual, apenas algumas posições originais são proibidas, veja o .    Uma permutação dos elementos é chamada de permutação -posicionada se o -ésimo elemento está na posição , os elementos anteriores não estão em suas posições originais e os demais elementos podem ocupar qualquer posição. O número de permutações -posicionadas é denotado por (ver ). Por convenção, chamamos de permutação -posicionada quando nenhum elemento está em sua posição original.      O número de permutações -posicionadas de elementos é dado por:     Para , podemos ver que . Para , o tabuleiro , relacionado ao problema, será . Pela definição de permutação -posicionada, as posições , com são proibidas e a posição deve conter uma torre. Portanto, é o número de maneiras de colocar torres não atacantes no tabuleiro , localizado no lado esquerdo da , com uma torre na posição . Seja o tabuleiro localizado no lado direito da , obtido por deletar a linha e a coluna do tabuleiro .   Tabuleiros e .    Pela construção de , também pode ser calculado como o número de maneiras de colocar torres não atacantes no tabuleiro . Usando o , isto pode ser calculado da seguinte maneira: O polinômio de torre de é dado por: Como os coeficientes de são iguais a zero para , com , substituindo os coeficientes da na obtemos: Como queríamos.      Quantas são as permutações dos elementos , na qual, nenhum número ímpar ocupa o seu lugar primitivo?    Observe que o tabuleiro relacionado ao problema será com as posições proibidas , tais que, . Essas posições podem ser reorganizadas para ficarmos com um tabuleiro como o do lado direito da , com e . Portanto, a resposta é dada por:     O código Sage a seguir calcula usando polinômios de torre:   O código Sage a seguir calcula usando o :    Valores de                                                                                                                   Permutações Caóticas com Elementos Repetidos  Apesar das permutações caóticas serem um tópico bastante comum em disciplinas de combinatória, este tipo de permutação com elementos repetidos é bem pouco difundido. Acreditamos que seja devido ao aumento na dificuldade para resolvê-lo. Usando polinômios de torre, a resolução desse tipo de problema fica fácil de ser compreendida e apesar das contas ficarem grandes é possível fazer uma implementação simples em SageMath. Para outra referência que trata desse tópico em português veja .    Uma permutação caótica com elementos repetidos é uma permutação na qual, os elementos nem podem ocupar suas posições originais, nem as posições dos seus elementos repetidos.      Quantos são as permutações caóticas com repetições da palavra POLINÔMIO? Estamos supondo que O e Ô são letras iguais.    O tabuleiro correspondente à palavra POLINOMIO é dado pelo tabuleiro , o mais à esquerda da . Permutando as linhas e colunas indicadas na , obtemos o tabuleiro , o mais à direita da figura, o qual possui o mesmo polinômio de torre, pelo .   Tabuleiros da palavra POLINOMIO até a palavra IILPNMOOO.    O número de maneiras de ordenar as letras da palavra POLINOMIO, sem que as letras fiquem em suas posições originais, pensando como se todas as letras fossem distintas, é . Como existem letras repetidas, para contornar este problema de contagem, dividimos pelo número de maneiras de permutar as letras I e as letras O. Portanto, o número de permutações caóticas com repetição da palavra POLINOMIO é dado por . Para obter a resposta, ainda precisamos calcular , pelo , temos: e Substituindo os coeficientes de na obtemos . Assim, o número de permutações caóticas das letras da palavra POLINOMIO é:     A função permutacao_caotica_r , definida no bloco de códigos a seguir, calcula o número de permutações caóticas com repetições de um texto. Para usar a função é necessário informar o texto em formato de string , ou seja, entre aspas, conforme a linha 23 do código:     Para cada inteiro não negativo , o polinômio de Laguerre de ordem , denotado por , é definido explicitamente pela expressão:        Seja um tabuleiro quadrado de ordem e o seu respectivo polinômio de torre. A seguinte identidade é válida:     Sabemos que o polinômio de torre de um tabuleiro quadrado sem restrições é dado por:   Substituindo por e multiplicando por , obtemos:   Fazendo a mudança de variável (de modo que ), os limites do somatório continuam variando de a :   Podemos reescrever os coeficientes fatoriais utilizando a definição de combinação:   Além disso, o termo de sinal pode ser fatorado como . Substituindo essas simplificações de volta no somatório: Pela , o somatório restante é precisamente . Logo: o que conclui a demonstração.        O número de permutações caóticas de uma lista com objetos, onde as frequências dos elementos repetidos são (com ), pode ser calculado por meio de integração.  Seja o tabuleiro de posições proibidas formado pela união disjunta dos blocos quadrados (de tamanho ). A fórmula pode ser expressa em função do polinômio de torre :   Ou, de forma equivalente e mais compacta, em função dos polinômios de Laguerre:     Inicialmente, vamos considerar que todos os objetos são distintos (por exemplo, adicionando índices a eles). Após encontrar o total de permutações restritas válidas ( ), dividiremos o resultado por , visto que a troca de posições entre elementos idênticos não gera novos anagramas.  Considerando os elementos como distintos, a proibição de que nenhum deles ocupe sua posição original (ou a posição de um elemento idêntico) equivale a colocar torres que não se atacam em um tabuleiro , evitando um subtabuleiro proibido . Esse tabuleiro é exatamente a união disjunta dos blocos quadrados de dimensões .   Seja o coeficiente de no polinômio de torre total . Pelo Princípio da Inclusão-Exclusão (a demonstração formal que relaciona os coeficientes de torre à fórmula de permutações restritas pode ser encontrada em ), o número de permutações válidas para os elementos distintos é:   Utilizamos a identidade da função Gama, que afirma que , e substituímos no somatório:   A expressão algébrica dentro dos parênteses pode ser reescrita colocando em evidência e invertendo a variável do polinômio de torre:   Isso demonstra a primeira fórmula do teorema. Para chegar à forma de Laguerre, lembramos que o polinômio é o produto dos polinômios dos blocos disjuntos. Como , podemos distribuir o fator para cada bloco:   Aplicando a em cada um dos fatores, sabemos que . Substituindo no produto:   Retornando à integral que calcula :   Para obtermos o número final de permutações caóticas com repetição ( ), dividimos por . Os fatoriais do produto cancelam-se perfeitamente com os fatoriais da divisão!  Como a contagem deve ser estritamente positiva, aplicamos o valor absoluto para absorver a constante de sinal , resultando na belíssima fórmula final: O que conclui a demonstração.      Usando o para calcular o número de soluções do . Foram usados os métodos abs e integral que calculam o valor absoluto e a integral, respectivamente.     A implementação da função DR (derangement with repetition) usando o . Os parâmetros são as quantidades que cada elemento figura na lista. Por exemplo, para a palavra MATEMATICA usamos a entrada 3, 2, 2, 1, 1, 1, pois são 3 letras A, 2 letras T, 2 letras M, 1 letras E, 1 letra I e 1 letra C.      Permutações Discordantes  Vamos agora apresentar as permutações discordantes, que são uma generalização de permutações caóticas e que têm várias aplicações como: Enumeração de quadrados latinos , problema dos encontros ( Problème des Ménages ), matrizes unimodulares, dentre outros. Para mais informações veja .    As permutações discordantes são as permutações de tamanho nas quais a -ésima posição tem como elementos proibidos e . E para a -ésima posição tem como elementos proibidos o e o .    A expressão permutação discordante vem da ideia de que ela discorda das permutações e . Assim, também é comum na literatura encontrarmos a expressão permutações -discordantes para permutações caóticas; o que aqui chamamos de permutações discordantes seriam permutações -discordantes.    O número de permutações 2-discordantes de elementos distintos é:     Observe que o tabuleiro , associado às permutações -discordantes de elementos, é dado por:   Tabuleiro .    A quantidade de permutações discordantes será determinada pelo coeficiente líder do polinômio de torre do tabuleiro . Todavia, não procederemos com o cálculo direto do polinômio de torre desse tabuleiro. Calcularemos o polinômio do tabuleiro complementar e depois usaremos o para obter . O tabuleiro complementar a é o tabuleiro que possui como conjunto de posições permitidas o conjunto . Como podemos observar na figura:   Tabuleiro .    Para calcular o polinômio de torre do tabuleiro , iremos aplicar o sobre o quadrado mais deslocado à esquerda, o de posição . Portanto , no qual, é o tabuleiro obtido trocando a cor do quadrado do tabuleiro e é o tabuleiro obtido por deletar a linha e a coluna do tabuleiro , ou seja, o tabuleiro do lado direito da .   Tabuleiro , obtido por deletar a linha e a coluna do tabuleiro .    Precisamos determinar os polinômios de torre dos tabuleiros e . Começamos calculando o polinômio de , dado pela .   Tabuleiro .    Note que podemos associar (exibir uma bijeção) entre essa faixa diagonal das posições permitidas de e uma fila com a mesma quantidade de quadrados:   Fila com quadrados, associada às posições permitidas de .    Com essa associação, o problema de distribuir torres em , com , blocos na diagonal principal e na diagonal exatamente acima da principal, é equivalente ao problema de distribuir pessoas em cadeiras em fila, de modo que duas pessoas não sentem lado a lado.  Essa associação reduz drasticamente a dificuldade do nosso problema. Para tanto, das cadeiras, retiramos , para em seguida recolocá-las com as pessoas. Se foram retiradas cadeiras, de um total de , ficaram cadeiras e espaços entre as cadeiras. Como as cadeiras com as pessoas podem ser colocadas antes da primeira cadeira vazia, ou depois da última cadeira vazia, ficamos com possíveis lugares para escolher . Isto pode ser feito de maneiras.  Concluímos que o polinômio do tabuleiro é: na qual significa o teto de . Observe que o cálculo do polinômio de torre de pode ser feito de maneira análoga ao que foi feito para , porém para o caso de , . Pelo exposto acima: Consequentemente: Assim, aplicando o , temos: Como queríamos.    Perceba que podemos ter uma generalização natural do que acabamos de fazer. Por exemplo, as permutações -discordantes são as permutações que não têm como imagem nenhum elemento com a mesma imagem das permutações , e de . De modo análogo, podemos definir permutações -discordantes, -discordantes etc. Abaixo, listamos as expressões das permutações -discordantes para alguns valores de :    Permutação -discordantes ;    Permutação -discordante ;    Permutação -discordante ;    Permutação -discordante , no qual: para e , com .    Podemos observar o crescimento da complexidade das fórmulas para o número de permutações -discordantes, conforme o aumento do valor de . Convidamos o leitor a pensar nos benefícios e dificuldades em exibir uma fórmula fechada em termos de e , em vez de sua implementação computacional. Sugerimos como ponto de partida para essa atividade os questionamentos suscitados nos Exemplos 1.1.3 e 1.1.4 em .  Abaixo, deixamos nossa implementação em Sage para e arbitrários:    Número de permutações -discordantes                                                                                                                               O Problema dos Encontros  O Problema dos Encontros, também conhecido como Problème des Ménages , é um problema clássico da combinatória enumerativa. Proposto pelo matemático francês Edouard Lucas em 1891, ele foi estudado (e redescoberto) por nomes de peso, como Cayley, Muir e Tait, os quais deram soluções parciais (ver ). Sendo completamente resolvido, mais de 50 anos depois, pelo matemático canadense Irving Kaplansky, em 1943. Ao longo dos anos, diversas soluções foram apresentadas, via relações de recorrência, princípio da Inclusão-Exclusão dentre outras; uma das mais elegantes que conhecemos é a que utiliza polinômios de torres. Nesta seção, mostramos como resolvê-lo usando as técnicas já apresentadas.   O Problema dos Encontros   Tem-se casais que devem se sentar em cadeiras diferentes, em torno de um círculo, de modo que pessoas do mesmo sexo não sentem juntas e que nenhum homem sente ao lado de sua mulher. De quantos modos isso pode ser feito?    Para resolver esse problema, iniciamos colorindo as cadeiras com duas cores de forma alternada, ou seja, a cor de cada cadeira deve ser diferente da cor dos dois vizinhos, assim como na . Isto sempre é possível, pois a quantidade de cadeiras é par.   Colorindo as cadeiras.    Para que pessoas do mesmo sexo não sentem juntas, basta escolher uma cor para as cadeiras de cada sexo, isto pode ser feito de dois modos. Feita essa escolha, podemos distribuir as mulheres de maneiras, isto é, livremente, nas cadeiras reservadas a elas. Resta apenas contar o número de maneiras de distribuir os homens de modo que nenhum deles sente ao lado da sua esposa. Ou seja, o que fizemos até aqui nos diz que a solução do problema dos encontros é dado por: no qual, é a quantidade de modos de distribuir os homens sem que nenhum deles sente ao lado da sua respectiva esposa.  Sem perda de generalidade, colocamos as mulheres nos lugares verdes. Supondo que as pessoas sentam de frente à mesa, vamos considerar os lados esquerdo e direito em relação a posição de cada pessoa. Observe que fixada uma mulher dessa distribuição, podemos chamá-la de mulher , e a mulher seguinte à sua esquerda, de mulher e assim por diante, até a mulher .   Mulheres sentadas nos lugares verdes.    Vamos nomear os lugares vazios da seguinte forma: a primeira cadeira vazia à direita da mulher , chamaremos de posição , e a da esquerda, de posição e assim sucessivamente, até que a mulher tenha a sua direita a posição e a sua esquerda a posição , como na figura a seguir:   Distribuições das Mulheres 's e as relativas posições 's.    Dessa forma, o homem , esposo da mulher , não pode sentar nas cadeiras de posições e , o homem não pode sentar nas cadeiras de posições e e assim sucessivamente até que o homem não possa sentar nas cadeiras de posições e , pois estamos num círculo.  Existe uma bijeção entre as posições permitidas\/proibidas na mesa e o tabuleiro relativo às permutações 2-discordantes, visto na . Para ilustrar essa bijeção escrevemos as posições nas colunas e nas linhas do tabuleiro. Para cada ; observamos as cadeiras proibidas e pintamos de vermelho as respectivas posições proibidas na linha de , conforme a .   Bijeção entre tabuleiro e mesa.    Assim, é o número de permutações 2-discordantes para elementos, ou seja, pelo temos: Com isso, substituindo em , a solução do problema dos encontros é:   Observe que a solução apresentada acima considera que duas soluções, nas quais uma pode ser obtida a partir da rotação da outra, são distintas.    Usando a função i_discordante definida anteriormente, podemos definir uma nova função menages da seguinte maneira:   Podemos escrever uma outra função que faz o cálculo diretamente pela fórmula da , conforme o código a seguir:    Valores de                            "
},
{
  "id": "af-bijecaopermuttab",
  "level": "2",
  "url": "sec-aplicacoes.html#af-bijecaopermuttab",
  "type": "Afirmação",
  "number": "3.1",
  "title": "",
  "body": "  Existe uma bijeção entre as permutações de e as maneiras de colocar torres não atacantes em um tabuleiro , sem restrições.    Dada uma permutação de , para cada elemento , com , coloque uma torre na posição do tabuleiro . Assim, dados dois elementos distintos, e , da permutação , as torres correspondentes no tabuleiro ocupam linhas e colunas distintas, pois e .  Reciprocamente, dada uma distribuição de torres não atacantes em , para cada torre na posição , defina uma permutação colocando o elemento na posição . Observe que ao analisar todas as torres, tanto os valores de como os valores de vão assumir cada um dos valores de até . Assim, podemos ordenar as posições das torres pelas colunas da seguinte maneira: . É claro que , se , pois as torres estão em linhas distintas. Escrevendo as primeiras coordenadas sucessivamente, obtemos a permutação , que é constituída pelos números de até em alguma ordem. Veja a .   Distribuição de 4 torres não atacantes e a permutação correspondente.     "
},
{
  "id": "exe-stack02",
  "level": "2",
  "url": "sec-aplicacoes.html#exe-stack02",
  "type": "Exemplo",
  "number": "3.3",
  "title": "Visto em [4.11].",
  "body": " Visto em   Qual o número de permutações de na qual, o número 1 não pode ocupar o segundo lugar, o número 2 não pode ocupar o quarto lugar e o número 3 não pode ocupar nem o primeiro nem o quarto lugar?    Como este problema envolve permutações, a ideia é usar a bijeção exibida na . Porém, precisamos adicionar no tabuleiro as restrições impostas pelo problema. Como o elemento 1 não pode ocupar o segundo lugar, vamos deixar proibida a posição e assim sucessivamente, até obtermos o tabuleiro , o mais à esquerda da . Assim, a resposta deste problema é dado pelo coeficiente líder do polinômio de torre deste tabuleiro. Pelo , o polinômio de torre de é igual ao polinômio de torre de todos os tabuleiros da .   Tabuleiro e permutações até o tabuleiro .    Pelos resultados apresentados anteriormente, é mais fácil calcular o polinômio de torre do tabuleiro , o mais à direita da . De fato, usando o , o coeficiente líder do polinômio de torre deste tabuleiro é dado por Falta calcular os coeficientes do polinômio de torre de .   Tabuleiro .    Pelo , Substituindo os coeficientes de em obtemos a solução:   Usando o SageMath, com o bloco de códigos a seguir, obtemos o polinômio de torre do tabuleiro , cujo coeficiente líder é a resposta do problema:   Com o polinômio obtido, além de descobrirmos que 7 é o número de maneiras de colocar 4 torres no tabuleiro , o polinômio também informa que 39, 40, 12 e 1 são os números de maneiras de colocar 3, 2, 1 e 0 torres no tabuleiro .   "
},
{
  "id": "def-permutacao-caotica",
  "level": "2",
  "url": "sec-aplicacoes.html#def-permutacao-caotica",
  "type": "Definição",
  "number": "3.6",
  "title": "",
  "body": "  Uma permutação caótica , ou desarranjo , dos elementos , é uma permutação, na qual, o elemento não pode ocupar a posição, o elemento não pode ocupar a posição e assim por diante, até que o elemento não possa ocupar a posição. Por exemplo, para , e são permutações caóticas.   "
},
{
  "id": "ex-caoticas-5",
  "level": "2",
  "url": "sec-aplicacoes.html#ex-caoticas-5",
  "type": "Exemplo",
  "number": "3.7",
  "title": "",
  "body": "  Quantas são as permutações caóticas dos elementos ?    Fixando , perceba que calcular a quantidade de permutações caóticas neste caso é o mesmo que calcular o coeficiente de do tabuleiro , a seguir:   Tabuleiro , relacionado à permutação caótica para .    Esse é um bom exemplo de aplicação do , pois é difícil calcular diretamente o polinômio de torre de , mas o polinômio de torre do seu tabuleiro complementar conseguimos calcular da seguinte forma:   Tabuleiro , complementar ao tabuleiro da .    O polinômio de torre de é: E utilizando o temos: De forma totalmente análoga ao que foi feito acima, podemos fazer o caso geral.   "
},
{
  "id": "lemacaotica",
  "level": "2",
  "url": "sec-aplicacoes.html#lemacaotica",
  "type": "Lema",
  "number": "3.10",
  "title": "",
  "body": "  O tabuleiro , que tem casas permitidas apenas na diagonal principal e as demais são todas proibidas, tem polinômio de torre igual a     Observe que pode ser dividido em subtabuleiros disjuntos. Cada subtabuleiro possui o seguinte polinômio de torre , pelo temos:    "
},
{
  "id": "remark-1",
  "level": "2",
  "url": "sec-aplicacoes.html#remark-1",
  "type": "Nota",
  "number": "3.11",
  "title": "",
  "body": " Convidamos o leitor a redemonstrar a afirmação acima usando o .  "
},
{
  "id": "af-dn",
  "level": "2",
  "url": "sec-aplicacoes.html#af-dn",
  "type": "Teorema",
  "number": "3.12",
  "title": "",
  "body": "  A quantidade de permutações caóticas de elementos é     Perceba que , no qual, é um tabuleiro com os quadrados da diagonal principal na cor vermelha e os demais quadrados na cor azul, assim como na , para o caso . pode ser calculado utilizando o , pois . Pelo temos , então Como queríamos.   "
},
{
  "id": "tab-dn",
  "level": "2",
  "url": "sec-aplicacoes.html#tab-dn",
  "type": "Tabela",
  "number": "3.13",
  "title": "Valores de <span class=\"process-math\">\\(D_{n}\\)<\/span>",
  "body": " Valores de                                "
},
{
  "id": "cor-pontos-fixos",
  "level": "2",
  "url": "sec-aplicacoes.html#cor-pontos-fixos",
  "type": "Corolário",
  "number": "3.14",
  "title": "",
  "body": "  As permutações dos elementos , na qual, elementos estão em suas posições originais são chamadas de permutações com pontos fixos . O número de permutações com pontos fixos é denotado por e pode ser calculado usando a expressão de da seguinte maneira:     Observe que os elementos, que ficarão em suas posições originais, podem ser escolhidos de maneiras. Uma vez que essas escolhas foram feitas, os elementos precisam ocupar posições diferentes de suas posições originais, isto pode ser feito de maneiras. Portanto, .   "
},
{
  "id": "ex-problema-coincidencias",
  "level": "2",
  "url": "sec-aplicacoes.html#ex-problema-coincidencias",
  "type": "Exemplo",
  "number": "3.15",
  "title": "O Problema das Coincidências.",
  "body": " O Problema das Coincidências   Considere uma urna contendo bolas numeradas de até e suponha que todas as bolas são sucessivamente retiradas uma após a outra, sem reposição. Quando a -ésima bola é sorteada na -ésima retirada, , dizemos que houve uma coincidência . Calcule o número de maneiras de retirar bolas sem reposição, que resultam em coincidências.    Ao anotar os números obtidos pela remoção sucessiva das 20 bolas, um após o outro, separando-os por vírgula, obtemos uma permutação dos elementos . Observe que para cada coincidência do sorteio, temos um ponto fixo na permutação. Portanto, o número de sorteios de 20 bolas que possuem 14 coincidências é:    "
},
{
  "id": "tab-dnk",
  "level": "2",
  "url": "sec-aplicacoes.html#tab-dnk",
  "type": "Tabela",
  "number": "3.16",
  "title": "Valores de <span class=\"process-math\">\\(D_{n,k}\\)<\/span>",
  "body": " Valores de                                                                                                                            "
},
{
  "id": "def-k-posicionada",
  "level": "2",
  "url": "sec-aplicacoes.html#def-k-posicionada",
  "type": "Definição",
  "number": "3.17",
  "title": "",
  "body": "  Uma permutação dos elementos é chamada de permutação -posicionada se o -ésimo elemento está na posição , os elementos anteriores não estão em suas posições originais e os demais elementos podem ocupar qualquer posição. O número de permutações -posicionadas é denotado por (ver ). Por convenção, chamamos de permutação -posicionada quando nenhum elemento está em sua posição original.   "
},
{
  "id": "af-dp",
  "level": "2",
  "url": "sec-aplicacoes.html#af-dp",
  "type": "Teorema",
  "number": "3.18",
  "title": "",
  "body": "  O número de permutações -posicionadas de elementos é dado por:     Para , podemos ver que . Para , o tabuleiro , relacionado ao problema, será . Pela definição de permutação -posicionada, as posições , com são proibidas e a posição deve conter uma torre. Portanto, é o número de maneiras de colocar torres não atacantes no tabuleiro , localizado no lado esquerdo da , com uma torre na posição . Seja o tabuleiro localizado no lado direito da , obtido por deletar a linha e a coluna do tabuleiro .   Tabuleiros e .    Pela construção de , também pode ser calculado como o número de maneiras de colocar torres não atacantes no tabuleiro . Usando o , isto pode ser calculado da seguinte maneira: O polinômio de torre de é dado por: Como os coeficientes de são iguais a zero para , com , substituindo os coeficientes da na obtemos: Como queríamos.   "
},
{
  "id": "ex-parc-caotica",
  "level": "2",
  "url": "sec-aplicacoes.html#ex-parc-caotica",
  "type": "Exemplo",
  "number": "3.20",
  "title": "",
  "body": "  Quantas são as permutações dos elementos , na qual, nenhum número ímpar ocupa o seu lugar primitivo?    Observe que o tabuleiro relacionado ao problema será com as posições proibidas , tais que, . Essas posições podem ser reorganizadas para ficarmos com um tabuleiro como o do lado direito da , com e . Portanto, a resposta é dada por:    "
},
{
  "id": "tab-rnk",
  "level": "2",
  "url": "sec-aplicacoes.html#tab-rnk",
  "type": "Tabela",
  "number": "3.21",
  "title": "Valores de <span class=\"process-math\">\\(R_{n,k}\\)<\/span>",
  "body": " Valores de                                                                                                                "
},
{
  "id": "def-caotica-repetidos",
  "level": "2",
  "url": "sec-aplicacoes.html#def-caotica-repetidos",
  "type": "Definição",
  "number": "3.22",
  "title": "",
  "body": "  Uma permutação caótica com elementos repetidos é uma permutação na qual, os elementos nem podem ocupar suas posições originais, nem as posições dos seus elementos repetidos.   "
},
{
  "id": "ex-polinomio-repeticoes",
  "level": "2",
  "url": "sec-aplicacoes.html#ex-polinomio-repeticoes",
  "type": "Exemplo",
  "number": "3.23",
  "title": "",
  "body": "  Quantos são as permutações caóticas com repetições da palavra POLINÔMIO? Estamos supondo que O e Ô são letras iguais.    O tabuleiro correspondente à palavra POLINOMIO é dado pelo tabuleiro , o mais à esquerda da . Permutando as linhas e colunas indicadas na , obtemos o tabuleiro , o mais à direita da figura, o qual possui o mesmo polinômio de torre, pelo .   Tabuleiros da palavra POLINOMIO até a palavra IILPNMOOO.    O número de maneiras de ordenar as letras da palavra POLINOMIO, sem que as letras fiquem em suas posições originais, pensando como se todas as letras fossem distintas, é . Como existem letras repetidas, para contornar este problema de contagem, dividimos pelo número de maneiras de permutar as letras I e as letras O. Portanto, o número de permutações caóticas com repetição da palavra POLINOMIO é dado por . Para obter a resposta, ainda precisamos calcular , pelo , temos: e Substituindo os coeficientes de na obtemos . Assim, o número de permutações caóticas das letras da palavra POLINOMIO é:    "
},
{
  "id": "def-polinomio-laguerre",
  "level": "2",
  "url": "sec-aplicacoes.html#def-polinomio-laguerre",
  "type": "Definição",
  "number": "3.25",
  "title": "",
  "body": "  Para cada inteiro não negativo , o polinômio de Laguerre de ordem , denotado por , é definido explicitamente pela expressão:    "
},
{
  "id": "prop-torre-laguerre",
  "level": "2",
  "url": "sec-aplicacoes.html#prop-torre-laguerre",
  "type": "Proposição",
  "number": "3.26",
  "title": "",
  "body": "   Seja um tabuleiro quadrado de ordem e o seu respectivo polinômio de torre. A seguinte identidade é válida:     Sabemos que o polinômio de torre de um tabuleiro quadrado sem restrições é dado por:   Substituindo por e multiplicando por , obtemos:   Fazendo a mudança de variável (de modo que ), os limites do somatório continuam variando de a :   Podemos reescrever os coeficientes fatoriais utilizando a definição de combinação:   Além disso, o termo de sinal pode ser fatorado como . Substituindo essas simplificações de volta no somatório: Pela , o somatório restante é precisamente . Logo: o que conclui a demonstração.   "
},
{
  "id": "teo-permutacao-caotica-repet",
  "level": "2",
  "url": "sec-aplicacoes.html#teo-permutacao-caotica-repet",
  "type": "Teorema",
  "number": "3.27",
  "title": "",
  "body": "  O número de permutações caóticas de uma lista com objetos, onde as frequências dos elementos repetidos são (com ), pode ser calculado por meio de integração.  Seja o tabuleiro de posições proibidas formado pela união disjunta dos blocos quadrados (de tamanho ). A fórmula pode ser expressa em função do polinômio de torre :   Ou, de forma equivalente e mais compacta, em função dos polinômios de Laguerre:     Inicialmente, vamos considerar que todos os objetos são distintos (por exemplo, adicionando índices a eles). Após encontrar o total de permutações restritas válidas ( ), dividiremos o resultado por , visto que a troca de posições entre elementos idênticos não gera novos anagramas.  Considerando os elementos como distintos, a proibição de que nenhum deles ocupe sua posição original (ou a posição de um elemento idêntico) equivale a colocar torres que não se atacam em um tabuleiro , evitando um subtabuleiro proibido . Esse tabuleiro é exatamente a união disjunta dos blocos quadrados de dimensões .   Seja o coeficiente de no polinômio de torre total . Pelo Princípio da Inclusão-Exclusão (a demonstração formal que relaciona os coeficientes de torre à fórmula de permutações restritas pode ser encontrada em ), o número de permutações válidas para os elementos distintos é:   Utilizamos a identidade da função Gama, que afirma que , e substituímos no somatório:   A expressão algébrica dentro dos parênteses pode ser reescrita colocando em evidência e invertendo a variável do polinômio de torre:   Isso demonstra a primeira fórmula do teorema. Para chegar à forma de Laguerre, lembramos que o polinômio é o produto dos polinômios dos blocos disjuntos. Como , podemos distribuir o fator para cada bloco:   Aplicando a em cada um dos fatores, sabemos que . Substituindo no produto:   Retornando à integral que calcula :   Para obtermos o número final de permutações caóticas com repetição ( ), dividimos por . Os fatoriais do produto cancelam-se perfeitamente com os fatoriais da divisão!  Como a contagem deve ser estritamente positiva, aplicamos o valor absoluto para absorver a constante de sinal , resultando na belíssima fórmula final: O que conclui a demonstração.   "
},
{
  "id": "technology-3",
  "level": "2",
  "url": "sec-aplicacoes.html#technology-3",
  "type": "Tecnologia",
  "number": "3.28",
  "title": "",
  "body": " Usando o para calcular o número de soluções do . Foram usados os métodos abs e integral que calculam o valor absoluto e a integral, respectivamente.   "
},
{
  "id": "tec-permutacao-caotica-repet",
  "level": "2",
  "url": "sec-aplicacoes.html#tec-permutacao-caotica-repet",
  "type": "Tecnologia",
  "number": "3.29",
  "title": "",
  "body": " A implementação da função DR (derangement with repetition) usando o . Os parâmetros são as quantidades que cada elemento figura na lista. Por exemplo, para a palavra MATEMATICA usamos a entrada 3, 2, 2, 1, 1, 1, pois são 3 letras A, 2 letras T, 2 letras M, 1 letras E, 1 letra I e 1 letra C.   "
},
{
  "id": "def-discordantes",
  "level": "2",
  "url": "sec-aplicacoes.html#def-discordantes",
  "type": "Definição",
  "number": "3.30",
  "title": "",
  "body": "  As permutações discordantes são as permutações de tamanho nas quais a -ésima posição tem como elementos proibidos e . E para a -ésima posição tem como elementos proibidos o e o .   "
},
{
  "id": "teo-2discord",
  "level": "2",
  "url": "sec-aplicacoes.html#teo-2discord",
  "type": "Teorema",
  "number": "3.31",
  "title": "",
  "body": "  O número de permutações 2-discordantes de elementos distintos é:     Observe que o tabuleiro , associado às permutações -discordantes de elementos, é dado por:   Tabuleiro .    A quantidade de permutações discordantes será determinada pelo coeficiente líder do polinômio de torre do tabuleiro . Todavia, não procederemos com o cálculo direto do polinômio de torre desse tabuleiro. Calcularemos o polinômio do tabuleiro complementar e depois usaremos o para obter . O tabuleiro complementar a é o tabuleiro que possui como conjunto de posições permitidas o conjunto . Como podemos observar na figura:   Tabuleiro .    Para calcular o polinômio de torre do tabuleiro , iremos aplicar o sobre o quadrado mais deslocado à esquerda, o de posição . Portanto , no qual, é o tabuleiro obtido trocando a cor do quadrado do tabuleiro e é o tabuleiro obtido por deletar a linha e a coluna do tabuleiro , ou seja, o tabuleiro do lado direito da .   Tabuleiro , obtido por deletar a linha e a coluna do tabuleiro .    Precisamos determinar os polinômios de torre dos tabuleiros e . Começamos calculando o polinômio de , dado pela .   Tabuleiro .    Note que podemos associar (exibir uma bijeção) entre essa faixa diagonal das posições permitidas de e uma fila com a mesma quantidade de quadrados:   Fila com quadrados, associada às posições permitidas de .    Com essa associação, o problema de distribuir torres em , com , blocos na diagonal principal e na diagonal exatamente acima da principal, é equivalente ao problema de distribuir pessoas em cadeiras em fila, de modo que duas pessoas não sentem lado a lado.  Essa associação reduz drasticamente a dificuldade do nosso problema. Para tanto, das cadeiras, retiramos , para em seguida recolocá-las com as pessoas. Se foram retiradas cadeiras, de um total de , ficaram cadeiras e espaços entre as cadeiras. Como as cadeiras com as pessoas podem ser colocadas antes da primeira cadeira vazia, ou depois da última cadeira vazia, ficamos com possíveis lugares para escolher . Isto pode ser feito de maneiras.  Concluímos que o polinômio do tabuleiro é: na qual significa o teto de . Observe que o cálculo do polinômio de torre de pode ser feito de maneira análoga ao que foi feito para , porém para o caso de , . Pelo exposto acima: Consequentemente: Assim, aplicando o , temos: Como queríamos.   "
},
{
  "id": "tab-i-discordantes",
  "level": "2",
  "url": "sec-aplicacoes.html#tab-i-discordantes",
  "type": "Tabela",
  "number": "3.37",
  "title": "Número de permutações <span class=\"process-math\">\\(i\\)<\/span>-discordantes",
  "body": " Número de permutações -discordantes                                                                                                                            "
},
{
  "id": "ex-problema-encontros",
  "level": "2",
  "url": "sec-aplicacoes.html#ex-problema-encontros",
  "type": "Exemplo",
  "number": "3.38",
  "title": "O Problema dos Encontros.",
  "body": " O Problema dos Encontros   Tem-se casais que devem se sentar em cadeiras diferentes, em torno de um círculo, de modo que pessoas do mesmo sexo não sentem juntas e que nenhum homem sente ao lado de sua mulher. De quantos modos isso pode ser feito?    Para resolver esse problema, iniciamos colorindo as cadeiras com duas cores de forma alternada, ou seja, a cor de cada cadeira deve ser diferente da cor dos dois vizinhos, assim como na . Isto sempre é possível, pois a quantidade de cadeiras é par.   Colorindo as cadeiras.    Para que pessoas do mesmo sexo não sentem juntas, basta escolher uma cor para as cadeiras de cada sexo, isto pode ser feito de dois modos. Feita essa escolha, podemos distribuir as mulheres de maneiras, isto é, livremente, nas cadeiras reservadas a elas. Resta apenas contar o número de maneiras de distribuir os homens de modo que nenhum deles sente ao lado da sua esposa. Ou seja, o que fizemos até aqui nos diz que a solução do problema dos encontros é dado por: no qual, é a quantidade de modos de distribuir os homens sem que nenhum deles sente ao lado da sua respectiva esposa.  Sem perda de generalidade, colocamos as mulheres nos lugares verdes. Supondo que as pessoas sentam de frente à mesa, vamos considerar os lados esquerdo e direito em relação a posição de cada pessoa. Observe que fixada uma mulher dessa distribuição, podemos chamá-la de mulher , e a mulher seguinte à sua esquerda, de mulher e assim por diante, até a mulher .   Mulheres sentadas nos lugares verdes.    Vamos nomear os lugares vazios da seguinte forma: a primeira cadeira vazia à direita da mulher , chamaremos de posição , e a da esquerda, de posição e assim sucessivamente, até que a mulher tenha a sua direita a posição e a sua esquerda a posição , como na figura a seguir:   Distribuições das Mulheres 's e as relativas posições 's.    Dessa forma, o homem , esposo da mulher , não pode sentar nas cadeiras de posições e , o homem não pode sentar nas cadeiras de posições e e assim sucessivamente até que o homem não possa sentar nas cadeiras de posições e , pois estamos num círculo.  Existe uma bijeção entre as posições permitidas\/proibidas na mesa e o tabuleiro relativo às permutações 2-discordantes, visto na . Para ilustrar essa bijeção escrevemos as posições nas colunas e nas linhas do tabuleiro. Para cada ; observamos as cadeiras proibidas e pintamos de vermelho as respectivas posições proibidas na linha de , conforme a .   Bijeção entre tabuleiro e mesa.    Assim, é o número de permutações 2-discordantes para elementos, ou seja, pelo temos: Com isso, substituindo em , a solução do problema dos encontros é:   Observe que a solução apresentada acima considera que duas soluções, nas quais uma pode ser obtida a partir da rotação da outra, são distintas.   "
},
{
  "id": "tab-menages",
  "level": "2",
  "url": "sec-aplicacoes.html#tab-menages",
  "type": "Tabela",
  "number": "3.43",
  "title": "Valores de <span class=\"process-math\">\\(M_n\\)<\/span>",
  "body": " Valores de                          "
},
{
  "id": "sec-referencias",
  "level": "1",
  "url": "sec-referencias.html",
  "type": "Referêcias",
  "number": "4",
  "title": "Referências",
  "body": " Referências  Allenby, Reginald BJT; Slomson, Alan. How to count: An introduction to combinatorics . Chapman and Hall\/CRC, 2010.  Bryant, Victor. Aspects of Combinatorics: A wide-ranging introduction. Cambridge University Press, 1993.  Charalambos, A. C. Enumerative combinatorics. Chapman & Hall\/CRC, 2002.  Holton, Derek Allan. A second step to mathematical olympiad problems . World scientific, 2011.  Kilkelly, Thomas. The ARML Power Contest . American Mathematical Soc., 2015.  Machado, Ricardo N. Jr. Caos, Repetições e Tabuleiros. É matemática, Oxente! o jornal de matemática olímpica, Nº18, vol. 1, 2021, pp 1 - 7.  Riordan, John. An introduction to combinatorial analysis . Princeton University Press, 2014.  Silva, L. D.; Santos, M. P.; Machado J. R. N., Elementos de Computação Matemática com SageMath , SBM, 2019.  Stanley, Richard P,. Enumerative Combinatorics, Vol. 1 , second edition. Cambridge studies in advanced mathematics, 2011.  Stanley, Richard P.; FOMIN, S. Enumerative combinatorics. Vol. 2 , volume 62 of Cambridge Studies in Advanced Mathematics, 1999.  StackExchange. Use of rook polynomials.  . Acessado em 23\/11\/2021.  Boelkins, M.; Nordstrom, J.F., PreTeXt - The Future Of Textbooks. Disponível em . Acessado em 23\/11\/2021.  Oeis, Number of discordant permutations of length n. Disponível em . Acessado em 22\/02\/2022.  Euler, L.: Calcul de la probabilité dans le jeu de rencontre. Euler Archive - All Works, University of the Pacific Scholarly Commons. Disponível em . Acessado em 13\/04\/2022.  Euler, L.: Calculus of the probability in the game of Rencontre. Disponível em . Acessado em 13\/04\/2022.  "
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
