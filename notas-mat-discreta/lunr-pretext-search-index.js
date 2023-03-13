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
  "body": "    Clessius Silva  Ricardo Machado  Recife, 2022   "
},
{
  "id": "section-1",
  "level": "1",
  "url": "section-1.html",
  "type": "Seção",
  "number": "1.1",
  "title": "Números Ordinais",
  "body": " Números Ordinais   Introdução   A primeira experiência que a maior parte de nós tem com a Matemática é por meio do processo de contagem. É importante observar que aprender a contar tem duas etapas bem distintas, com graus de complexidade também distintos:   Na primeira etapa, aprendemos a enunciar uma sequência de palavras (um, dois, três, ...), sem atribuir significado a elas;  Algum tempo depois, aprendemos a usar esta sequência para contar os elementos de um conjunto, ou seja, estabelecer uma correspondência entre os elementos do conjunto e estas palavras que chamamos de números. Algo notável, que não custamos a observar, é que, não importa como façamos a correspondência, o número final é sempre o mesmo -a ele, denominamos o número de elementos do conjunto.    A mesma tarefa em duas etapas deve ser empreendida ao se estabelecer a fundamentação matemática apropriada para os números naturais. Ao olhar os números naturais como uma simples sequência, estamos diante do que chamamos de números ordinais , examinados a seguir, enquanto seu uso como instrumento de contagem remete à noção de número cardinal , estudada no fim deste capítulo.    Números Ordinais  Como descrever matematicamente a estrutura do conjunto dos números naturais, no sentido de números ordinais? Isto é feito por meio de uma lista de propriedades essenciais, chamadas de axiomas, que caracterizam a estrutura da sequência, sem ambiguidades ou propriedades supérfluas. Giuseppe Peano (1858-1932) propôs uma lista de axiomas, baseado na noção de sucessor de um número natural. A construção de Peano caracteriza o conjunto dos números naturais por meio dos seguintes axiomas:   Todo número natural tem um único sucessor, que também é um número natural.  Números naturais diferentes tem sucessores diferentes.  Existe um único número natural, designado por , que não é sucessor de nenhum outro.  Seja um conjunto de números naturais (isto é ). Se e se, além disso, o sucessor de cada elemento de ainda pertence a , então .   A noção de sucessor de um número natural está intimamente relacionada à ideia de adição: tomar o sucessor é equivalente a somar uma unidade, como discutido em mais detalhes na . Os axiomas de Peano podem ser reescritos como se segue, representando como o sucessor de :   Todo número natural tem um sucessor, representado por .  Se , então .  Existe um único número natural, designado por , tal que , para todo .  Seja um conjunto de números naturais (isto é, ). Se e se, além disso, , para cada , então .    O terceiro axioma estabelece como sendo o único número natural que não é o sucessor de nenhum outro e que, portanto, representa o \"ponto de partida\" no conjunto dos números naturais. É comum, também adotar-se o como ponto de partida, levando a . A opção por uma ou outra alternativa é uma questão de gosto ou de conveniência.   Embora todos os quatro axiomas sejam fundamentais para a caracterização dos números naturais, o último, chamado de Axioma de Indução , se destaca. Ele fornece um mecanismo para garantir que um dado subconjunto de inclui, na verdade, todos os elementos de . Por esta razão, é um instrumento fundamental para construir definições e demonstrar teoremas relativos a números naturais.  O Axioma de Indução, que também pode ser chamado de Princípio de Indução Finita ou da Indução Matemática , pode ser reescrito como abaixo  4'. Seja uma propriedade relativa ao número natural . Suponhamos que  seja válida.  Para todo , a validez de implica na validez de .  Então, é válido para todo .   Obtenha uma expressão para a soma    Calculando a soma para os primeiros valores naturais de , obtemos: O exame das igualdades acima sugere que a soma seja sempre igual ao quadrado do número de parcelas, ou seja, que a afirmativa é válida para todo .  O Princípio da Indução permite demonstrar este fato. O primeiro passo é:  verificar a validez de para . Isto já foi feito acima.  verificar a validez de , para um valor arbitrário de , implica a validez de . Ou seja, admitindo que para um certo valor de , devemos mostrar que Para tal, somamos o novo termo a ambos os membros da Equação , obtemos: Portanto, a validez de para um valor arbitrário de implica sua validez para .  Logo, pelo Princípio da Indução, é válida para todo .     A verificação de que é válida costuma ser chamada de caso base de uma demonstração por indução, enquanto a demonstração de que a validez de implica a validez de é chamada de passo de indução .    Considere a igualdade  Suponha que é verdadeira para algum , temos Portanto, a implicação é verdadeira para todo , embora seja falsa para todo (já que, no exemplo anterior, mostramos que a soma é igual a e não ). Isto ilustra o fato de que o passo em que provamos a implicação não estamos usando o resultado que desejamos demonstrar. Naturalmente, a prova por indução falha por não ser possível mostrar o caso base, pois é falsa.    Adição, multiplicação e Ordem  Nesta Seção vamos será definido apropriadamente a adição e a multiplicação. Iremos recorrer novamente ao mecanismo de indução.  Seja um atributo relativo ao número natural . Se definirmos e estabelecemos como pode ser obtido a partir de , para arbitrário, o Axioma da Indução garante que o atributo estará definido para cada . Definições construídas desta forma são chamadas de definições por indução ou recorrência .  Por exemplo, a soma de dois números naturais pode ser definida por recorrência do seguinte modo:    é definido, como fizemos antes, como o sucessor de .  é definido como o sucessor de , ou seja, como .    A definição acima corresponde a ideia intuitiva de que o valor de é obtido acrescentando-se vezes uma unidade a .  Para a multiplicação, podemos definir:        A partir dessas definições, podem ser demonstradas as propriedades usuais da adição e multiplicação. Ilustramos este fato com a demonstração da propriedade distributiva da multiplicação em relação a adição.   Para quaisquer números naturais e , vale .   Vamos utilizar indução em .  A propriedade é válida para , já que e  Suponhamos que a propriedade seja válida para um certo , ou seja, . Temos, pela definição indutiva da multiplicação ( ): . Mas, pela hipótese de indução, . Portanto (aqui, usamos as propriedades comutativa e associativa da adição, que deveriam ter sido provadas previamente). Mas, pela definição de multiplicação ( ), temos e . Logo, Assim, a afirmativa é válida também para .  Portanto, pelo Princípio da Indução, a propriedade é válida para quaisquer e naturais.    A introdução das operações aritméticas permite tornar precisa uma outra noção fundamental para números naturais: a de ordem .   Sejam e números naturais. Dizemos que quando existe um número natural tal que .   Desta definição, podem ser obtidas as propriedades usuais da ordem.    Se e , então .  Dados , vale uma, e somente um, das alternativas:  Se então, para qualquer , tem-se    Além dessas propriedades, a ordem nos números naturais tem uma propriedade característica, conhecida como a Propriedade da Boa Ordenação :   Todo subconjunto não vazio possui um menor elemento. Isto significa que existe um elemento que é menor do que todos os demais elementos de .    A Propriedade da Boa Ordenação não vale para a ordem definida em outros conjuntos numéricos; por exemplo, o conjunto dos números reais e o dos números reais positivos são não vazios, mas não possuem um menor elemento.    A demonstração da Propriedade da Boa Ordenação é feita por indução, mas a demonstração será feita no próximo capítulo.    "
},
{
  "id": "remark-1",
  "level": "2",
  "url": "section-1.html#remark-1",
  "type": "Nota",
  "number": "1.1.1",
  "title": "",
  "body": " O terceiro axioma estabelece como sendo o único número natural que não é o sucessor de nenhum outro e que, portanto, representa o \"ponto de partida\" no conjunto dos números naturais. É comum, também adotar-se o como ponto de partida, levando a . A opção por uma ou outra alternativa é uma questão de gosto ou de conveniência.  "
},
{
  "id": "ex-soma-inducao",
  "level": "2",
  "url": "section-1.html#ex-soma-inducao",
  "type": "Exemplo",
  "number": "1.1.2",
  "title": "",
  "body": " Obtenha uma expressão para a soma    Calculando a soma para os primeiros valores naturais de , obtemos: O exame das igualdades acima sugere que a soma seja sempre igual ao quadrado do número de parcelas, ou seja, que a afirmativa é válida para todo .  O Princípio da Indução permite demonstrar este fato. O primeiro passo é:  verificar a validez de para . Isto já foi feito acima.  verificar a validez de , para um valor arbitrário de , implica a validez de . Ou seja, admitindo que para um certo valor de , devemos mostrar que Para tal, somamos o novo termo a ambos os membros da Equação , obtemos: Portanto, a validez de para um valor arbitrário de implica sua validez para .  Logo, pelo Princípio da Indução, é válida para todo .   "
},
{
  "id": "remark-2",
  "level": "2",
  "url": "section-1.html#remark-2",
  "type": "Nota",
  "number": "1.1.3",
  "title": "",
  "body": " A verificação de que é válida costuma ser chamada de caso base de uma demonstração por indução, enquanto a demonstração de que a validez de implica a validez de é chamada de passo de indução .  "
},
{
  "id": "remark-3",
  "level": "2",
  "url": "section-1.html#remark-3",
  "type": "Nota",
  "number": "1.1.4",
  "title": "",
  "body": " Considere a igualdade  Suponha que é verdadeira para algum , temos Portanto, a implicação é verdadeira para todo , embora seja falsa para todo (já que, no exemplo anterior, mostramos que a soma é igual a e não ). Isto ilustra o fato de que o passo em que provamos a implicação não estamos usando o resultado que desejamos demonstrar. Naturalmente, a prova por indução falha por não ser possível mostrar o caso base, pois é falsa. "
},
{
  "id": "remark-4",
  "level": "2",
  "url": "section-1.html#remark-4",
  "type": "Nota",
  "number": "1.1.5",
  "title": "",
  "body": "Seja um atributo relativo ao número natural . Se definirmos e estabelecemos como pode ser obtido a partir de , para arbitrário, o Axioma da Indução garante que o atributo estará definido para cada . Definições construídas desta forma são chamadas de definições por indução ou recorrência . "
},
{
  "id": "definition-1",
  "level": "2",
  "url": "section-1.html#definition-1",
  "type": "Definição",
  "number": "1.1.6",
  "title": "",
  "body": "  é definido, como fizemos antes, como o sucessor de .  é definido como o sucessor de , ou seja, como .   "
},
{
  "id": "def-multiplicacao",
  "level": "2",
  "url": "section-1.html#def-multiplicacao",
  "type": "Definição",
  "number": "1.1.7",
  "title": "",
  "body": "     "
},
{
  "id": "theorem-1",
  "level": "2",
  "url": "section-1.html#theorem-1",
  "type": "Teorema",
  "number": "1.1.8",
  "title": "",
  "body": " Para quaisquer números naturais e , vale .   Vamos utilizar indução em .  A propriedade é válida para , já que e  Suponhamos que a propriedade seja válida para um certo , ou seja, . Temos, pela definição indutiva da multiplicação ( ): . Mas, pela hipótese de indução, . Portanto (aqui, usamos as propriedades comutativa e associativa da adição, que deveriam ter sido provadas previamente). Mas, pela definição de multiplicação ( ), temos e . Logo, Assim, a afirmativa é válida também para .  Portanto, pelo Princípio da Indução, a propriedade é válida para quaisquer e naturais.   "
},
{
  "id": "definition-3",
  "level": "2",
  "url": "section-1.html#definition-3",
  "type": "Definição",
  "number": "1.1.9",
  "title": "",
  "body": " Sejam e números naturais. Dizemos que quando existe um número natural tal que .  "
},
{
  "id": "theorem-2",
  "level": "2",
  "url": "section-1.html#theorem-2",
  "type": "Teorema",
  "number": "1.1.10",
  "title": "",
  "body": "  Se e , então .  Dados , vale uma, e somente um, das alternativas:  Se então, para qualquer , tem-se   "
},
{
  "id": "theorem-3",
  "level": "2",
  "url": "section-1.html#theorem-3",
  "type": "Teorema",
  "number": "1.1.11",
  "title": "",
  "body": " Todo subconjunto não vazio possui um menor elemento. Isto significa que existe um elemento que é menor do que todos os demais elementos de .  "
},
{
  "id": "remark-5",
  "level": "2",
  "url": "section-1.html#remark-5",
  "type": "Nota",
  "number": "1.1.12",
  "title": "",
  "body": " A Propriedade da Boa Ordenação não vale para a ordem definida em outros conjuntos numéricos; por exemplo, o conjunto dos números reais e o dos números reais positivos são não vazios, mas não possuem um menor elemento.  "
},
{
  "id": "remark-6",
  "level": "2",
  "url": "section-1.html#remark-6",
  "type": "Nota",
  "number": "1.1.13",
  "title": "",
  "body": " A demonstração da Propriedade da Boa Ordenação é feita por indução, mas a demonstração será feita no próximo capítulo.  "
},
{
  "id": "section-2",
  "level": "1",
  "url": "section-2.html",
  "type": "Seção",
  "number": "1.2",
  "title": "Números Naturais e Contagem",
  "body": " Números Naturais e Contagem  A primeira habilidade que dominamos no uso dos números naturais é a de contar, ou seja, a de determinar o número de elementos de um conjunto.   Contar um conjunto significa estabelecer uma correspondência biunívoca entre os elementos de e os de um subconjunto de da forma Quando é possível estabelecer tal correspondência biuívoca, dizemos que é um conjunto finito e que é o número cardinal ou número de elementos de .     Uma correspondência biunívoca entre dois conjuntos e é uma função bijetiva , ou seja, uma regra que associa a cada elemento de um elemento de de modo que cada elemento de seja imagem de exatamente um elemento de (isto equivale a dizer que é uma função simultaneamente injetiva e sobrejetiva).   A partir da definição anterior podemos demonstrar as propriedades básicas da contagem:    O resultado da contagem (ou seja, o número cardinal de ) é sempre o mesmo, não importando a contagem que seja feita.  Todo subconjunto de um conjunto finito é finito e . Tem-se somente quando .     Um conjunto é infinito quando não é finito. Por exemplo, é infinito: dada qualquer função , não importa qual se fixou, pomos e vemos que, para todo , tem-se , logo não existe tal que . Assim, não pode ser uma correspondência biunívoca.    No final do século XIX, Georg Cantor (1845-1918) mostrou como comparar a cardinalidade de conjuntos infinitos: um conjunto pode ser \"mais infinito\" do que outro.    Dizemos que dois conjuntos e têm a mesma cardinalidade quando é possível estabelecer uma correspondência biunívoca entre e (isto é, existe uma função bijetiva ).    O conjunto dos números naturais e dos números pares têm a mesma cardinalidade. Neste caos, a bijeção já está dada na definição de : a função definida por é uma bijeção de em .    O que pode ser surpreendente no exemplo anterior é a constatação de que, para conjuntos infinitos, é perfeitamente possível que dois conjuntos tenham a mesma cardinalidade, embora um deles seja um subconjunto próprio do outro.  A principal contribuição de Cantor foi exibir casos em que não é possível obter uma bijeção entre dois conjuntos infinitos.    Considere o conjunto de todas as sequências infinitas em que todos os termos são iguais a ou . Um exemplo de elemento de é a sequência , que alterna termos e . A cardinalidade de é pelo menos a mesma de , já que é possível estabelecer uma correspondência biunívoca entre e o subconjunto de formado pelas sequências que possuem exatamente um termo igual a (podemos associar o natural à sequência em que o aparece na -ésima posição). Isso não impede, em princípio, que possa haver uma bijeção entre e . Cantor, no entanto, mostrou que não há tal bijeção, fazendo com que seja \"mais infinito\" que .  Seu argumento foi o seguinte. Suponhamos que fosse possível construir uma função , em que cada sequência de aparecesse exatamente uma vez como imagem. Assim, seria possível ordenar as sequências de , por exemplo: Construa uma sequência formada por e do seguinte modo: Se o primeiro termo da sequência é , o primeiro termo de é ; senão, é . Se o -ésimo termo da sequência é , o -ésimo termo de é ; senão, é e assim sucessivamente. A sequência assim contruída difere pelo menos na posição de cada sequência . Logo, não pertence a imagem de . Mas, nossa suposição era de que todos os elementos de aparecessem como imagem!. Temos, assim, uma contradição, que mostra a impossibilidade de construir uma bijeção de em .    O conjunto do exemplo anterior é um exemplo de conjunto infinito não enumerável , isto é, que não pode ser posto em correspondência biunívoca com o conjunto dos números naturais. Outros exemplos de conjuntos não enumeráveis são os conjuntos dos números reais e dos números irracionais. O conjunto dos números racionais, porém, é enumerável.    Uma função de domínio igual a é chamada de uma sequência. É conveniente pensar em uma sequência como uma lista de valores , que muitas vezes preferimos representar por .  Conjuntos infinitos e conjuntos enumeráveis podem ser caracterizados em termos das propriedades das sequências de elementos destes conjuntos, como se segue:  Um conjunto é infinito se, e somente se, é possível construir uma sequência em que os termos são elementos distintos de (ou seja, quando há uma função injetiva de em ).  Um conjunto infinito é enumerável se, e somente se, é possível construir uma sequência incluindo todos os elementos de (ou seja, quando há uma função sobrejetiva de em ).     "
},
{
  "id": "definition-4",
  "level": "2",
  "url": "section-2.html#definition-4",
  "type": "Definição",
  "number": "1.2.1",
  "title": "",
  "body": " Contar um conjunto significa estabelecer uma correspondência biunívoca entre os elementos de e os de um subconjunto de da forma Quando é possível estabelecer tal correspondência biuívoca, dizemos que é um conjunto finito e que é o número cardinal ou número de elementos de .   "
},
{
  "id": "remark-7",
  "level": "2",
  "url": "section-2.html#remark-7",
  "type": "Nota",
  "number": "1.2.2",
  "title": "",
  "body": " Uma correspondência biunívoca entre dois conjuntos e é uma função bijetiva , ou seja, uma regra que associa a cada elemento de um elemento de de modo que cada elemento de seja imagem de exatamente um elemento de (isto equivale a dizer que é uma função simultaneamente injetiva e sobrejetiva).  "
},
{
  "id": "theorem-4",
  "level": "2",
  "url": "section-2.html#theorem-4",
  "type": "Teorema",
  "number": "1.2.3",
  "title": "",
  "body": "  O resultado da contagem (ou seja, o número cardinal de ) é sempre o mesmo, não importando a contagem que seja feita.  Todo subconjunto de um conjunto finito é finito e . Tem-se somente quando .   "
},
{
  "id": "remark-8",
  "level": "2",
  "url": "section-2.html#remark-8",
  "type": "Nota",
  "number": "1.2.4",
  "title": "",
  "body": " Um conjunto é infinito quando não é finito. Por exemplo, é infinito: dada qualquer função , não importa qual se fixou, pomos e vemos que, para todo , tem-se , logo não existe tal que . Assim, não pode ser uma correspondência biunívoca.  "
},
{
  "id": "remark-9",
  "level": "2",
  "url": "section-2.html#remark-9",
  "type": "Nota",
  "number": "1.2.5",
  "title": "",
  "body": " No final do século XIX, Georg Cantor (1845-1918) mostrou como comparar a cardinalidade de conjuntos infinitos: um conjunto pode ser \"mais infinito\" do que outro.  "
},
{
  "id": "definition-5",
  "level": "2",
  "url": "section-2.html#definition-5",
  "type": "Definição",
  "number": "1.2.6",
  "title": "",
  "body": " Dizemos que dois conjuntos e têm a mesma cardinalidade quando é possível estabelecer uma correspondência biunívoca entre e (isto é, existe uma função bijetiva ).  "
},
{
  "id": "example-2",
  "level": "2",
  "url": "section-2.html#example-2",
  "type": "Exemplo",
  "number": "1.2.7",
  "title": "",
  "body": " O conjunto dos números naturais e dos números pares têm a mesma cardinalidade. Neste caos, a bijeção já está dada na definição de : a função definida por é uma bijeção de em .  "
},
{
  "id": "remark-10",
  "level": "2",
  "url": "section-2.html#remark-10",
  "type": "Nota",
  "number": "1.2.8",
  "title": "",
  "body": " O que pode ser surpreendente no exemplo anterior é a constatação de que, para conjuntos infinitos, é perfeitamente possível que dois conjuntos tenham a mesma cardinalidade, embora um deles seja um subconjunto próprio do outro.  A principal contribuição de Cantor foi exibir casos em que não é possível obter uma bijeção entre dois conjuntos infinitos.  "
},
{
  "id": "example-3",
  "level": "2",
  "url": "section-2.html#example-3",
  "type": "Exemplo",
  "number": "1.2.9",
  "title": "",
  "body": " Considere o conjunto de todas as sequências infinitas em que todos os termos são iguais a ou . Um exemplo de elemento de é a sequência , que alterna termos e . A cardinalidade de é pelo menos a mesma de , já que é possível estabelecer uma correspondência biunívoca entre e o subconjunto de formado pelas sequências que possuem exatamente um termo igual a (podemos associar o natural à sequência em que o aparece na -ésima posição). Isso não impede, em princípio, que possa haver uma bijeção entre e . Cantor, no entanto, mostrou que não há tal bijeção, fazendo com que seja \"mais infinito\" que .  Seu argumento foi o seguinte. Suponhamos que fosse possível construir uma função , em que cada sequência de aparecesse exatamente uma vez como imagem. Assim, seria possível ordenar as sequências de , por exemplo: Construa uma sequência formada por e do seguinte modo: Se o primeiro termo da sequência é , o primeiro termo de é ; senão, é . Se o -ésimo termo da sequência é , o -ésimo termo de é ; senão, é e assim sucessivamente. A sequência assim contruída difere pelo menos na posição de cada sequência . Logo, não pertence a imagem de . Mas, nossa suposição era de que todos os elementos de aparecessem como imagem!. Temos, assim, uma contradição, que mostra a impossibilidade de construir uma bijeção de em .  "
},
{
  "id": "remark-11",
  "level": "2",
  "url": "section-2.html#remark-11",
  "type": "Nota",
  "number": "1.2.10",
  "title": "",
  "body": " O conjunto do exemplo anterior é um exemplo de conjunto infinito não enumerável , isto é, que não pode ser posto em correspondência biunívoca com o conjunto dos números naturais. Outros exemplos de conjuntos não enumeráveis são os conjuntos dos números reais e dos números irracionais. O conjunto dos números racionais, porém, é enumerável.  "
},
{
  "id": "remark-12",
  "level": "2",
  "url": "section-2.html#remark-12",
  "type": "Nota",
  "number": "1.2.11",
  "title": "",
  "body": " Uma função de domínio igual a é chamada de uma sequência. É conveniente pensar em uma sequência como uma lista de valores , que muitas vezes preferimos representar por .  Conjuntos infinitos e conjuntos enumeráveis podem ser caracterizados em termos das propriedades das sequências de elementos destes conjuntos, como se segue:  Um conjunto é infinito se, e somente se, é possível construir uma sequência em que os termos são elementos distintos de (ou seja, quando há uma função injetiva de em ).  Um conjunto infinito é enumerável se, e somente se, é possível construir uma sequência incluindo todos os elementos de (ou seja, quando há uma função sobrejetiva de em ).    "
},
{
  "id": "section-3",
  "level": "1",
  "url": "section-3.html",
  "type": "Seção",
  "number": "2.1",
  "title": "Definições por Indução ou Recorrência",
  "body": " Definições por Indução ou Recorrência   Neste capítulo, examinamos diversas situações que usam o método da indução, seja para situações expressas em linguagem matemática, seja para outras de natureza mais lúdica, expressas em uma linguagem não tão obviamente matemática.    Definições por Indução ou Recorrência  Uma sequência real é uma função . Em muitas sequência a definição é feita por meio de uma expressão matemática que permite calcular a partir de . É o caso, por exemplo, da sequência , cujos primeiros termos são , etc. Há casos, porém, em que a forma natural de definir uma sequência é por recorrência.   O fatorial do número natural é definido como o produto dos números naturais menores ou iguais a . Naturalmente, entendemos o significado das reticências na definição acima, mas a definição por ser tornada mais rigorosa usando o mecanismo de indução. Basta definir:   , para todo .  Com isto, estamos definindo, por recorrência, a sequência definida por , para todo .    O método de Newton para calcular a raiz quadrada de um número real positivo fornece aproximações sucessivas desta raiz. Este método é definido recursivamente por   , para todo .      Recorrência é também a forma apropriada para definir o somatório : e o produtório : , na qual é uma sequência real qualquer.     , para todo .       , para todo .      Demonstrando Igualdades  Uma das aplicações mais simples do método de indução é comprovar que a expressão para um somatório (ou produtório), muitas vezes sugerida pelo exame de alguns casos, está correta. Isto já foi feito no .  O que torna o uso de indução nestes casos particularmente fácil é que a passagem de para é quase automática: basta acrescentar o novo termo do somatório a cada membro da igualdade e manipular o lado direito de modo que ele adquira a forma necessária para verificar a veracidade de .   Mostre que    Seja    é verdadeira, já que   Suponhamos que seja verdadeira, para algum . Isto significa que, para este valor de , temos Somando o próximo termo do somatório, , a ambos os membros da igualdade, obtemos: Manipulando o segundo membro da igualdade, Portanto, o que mostra que é verdadeira. Logo, provamos que se é verdadeira para , então também é verdadeira.   O princípio da Indução Finita permite, então, concluir que é verdadeira para todo .      Demonstrando Desigualdades  O emprego de indução para demonstrar desigualdades associadas a somatórios ou produtórios é mais sutil, porque, em geral, a simples inclusão do termo adicional a cada membro não leva de modo automático à forma desejada da desigualdade. Normalmente é necessário demonstrar uma desigualdade adicional para completar a passagem.   Demonstre a desigualdade de Bernulli: para todo natural e todo .   Seja .   Como e são ambos iguais a , é verdadeira.  Suponhamos que , para algum , seja verdadeira, ou seja, Multiplicando ambos os membros por , como , obtemos Logo, Assim, mostramos que implica , para todo    Portanto, pelo Princípio da Indução Finita, , para todo natural e todo .     Mostre que para todo .   Seja    Como é verdadeira.  Suponhamos que , para algum , seja verdadeira, ou seja, É natural multiplicar os dois membros pelo termo seguinte do produtório, , obtendo-se: Agora, precisamos mostrar que a expressão do segundo membro é menor ou igual a . De fato, Assim, mostramos que implica .   Portanto, pelo Princípio da Indução Finita, é verdadeiro para todo .      Aplicações em Aritmética  O método da indução é útil também para demonstrar resultados em aritmética, particularmente envolvendo divisibilidade.   Mostre que, para todo , é divisível por .   Seja a afirmativa: é divisível por .   Como é, de fato, verdadeira.  Suponhamos que seja válida para algum , ou seja, é divisível por . Isto significa que existe um inteiro tal que . Isto é equivalente a . Multiplicando os dois membros da igualdade por , obtemos Logo, Portanto, é divisível por . Assim, provamos que implica , para todo natural.   Logo, pelo Princípio da Indução Finita, é verdadeira para todo .     "
},
{
  "id": "example-4",
  "level": "2",
  "url": "section-3.html#example-4",
  "type": "Exemplo",
  "number": "2.1.1",
  "title": "",
  "body": " O fatorial do número natural é definido como o produto dos números naturais menores ou iguais a . Naturalmente, entendemos o significado das reticências na definição acima, mas a definição por ser tornada mais rigorosa usando o mecanismo de indução. Basta definir:   , para todo .  Com isto, estamos definindo, por recorrência, a sequência definida por , para todo .  "
},
{
  "id": "example-5",
  "level": "2",
  "url": "section-3.html#example-5",
  "type": "Exemplo",
  "number": "2.1.2",
  "title": "",
  "body": " O método de Newton para calcular a raiz quadrada de um número real positivo fornece aproximações sucessivas desta raiz. Este método é definido recursivamente por   , para todo .     "
},
{
  "id": "definition-6",
  "level": "2",
  "url": "section-3.html#definition-6",
  "type": "Definição",
  "number": "2.1.3",
  "title": "",
  "body": "   , para todo .   "
},
{
  "id": "definition-7",
  "level": "2",
  "url": "section-3.html#definition-7",
  "type": "Definição",
  "number": "2.1.4",
  "title": "",
  "body": "   , para todo .   "
},
{
  "id": "example-6",
  "level": "2",
  "url": "section-3.html#example-6",
  "type": "Exemplo",
  "number": "2.1.5",
  "title": "",
  "body": " Mostre que    Seja    é verdadeira, já que   Suponhamos que seja verdadeira, para algum . Isto significa que, para este valor de , temos Somando o próximo termo do somatório, , a ambos os membros da igualdade, obtemos: Manipulando o segundo membro da igualdade, Portanto, o que mostra que é verdadeira. Logo, provamos que se é verdadeira para , então também é verdadeira.   O princípio da Indução Finita permite, então, concluir que é verdadeira para todo .   "
},
{
  "id": "example-7",
  "level": "2",
  "url": "section-3.html#example-7",
  "type": "Exemplo",
  "number": "2.1.6",
  "title": "",
  "body": " Demonstre a desigualdade de Bernulli: para todo natural e todo .   Seja .   Como e são ambos iguais a , é verdadeira.  Suponhamos que , para algum , seja verdadeira, ou seja, Multiplicando ambos os membros por , como , obtemos Logo, Assim, mostramos que implica , para todo    Portanto, pelo Princípio da Indução Finita, , para todo natural e todo .   "
},
{
  "id": "example-8",
  "level": "2",
  "url": "section-3.html#example-8",
  "type": "Exemplo",
  "number": "2.1.7",
  "title": "",
  "body": " Mostre que para todo .   Seja    Como é verdadeira.  Suponhamos que , para algum , seja verdadeira, ou seja, É natural multiplicar os dois membros pelo termo seguinte do produtório, , obtendo-se: Agora, precisamos mostrar que a expressão do segundo membro é menor ou igual a . De fato, Assim, mostramos que implica .   Portanto, pelo Princípio da Indução Finita, é verdadeiro para todo .   "
},
{
  "id": "example-9",
  "level": "2",
  "url": "section-3.html#example-9",
  "type": "Exemplo",
  "number": "2.1.8",
  "title": "",
  "body": " Mostre que, para todo , é divisível por .   Seja a afirmativa: é divisível por .   Como é, de fato, verdadeira.  Suponhamos que seja válida para algum , ou seja, é divisível por . Isto significa que existe um inteiro tal que . Isto é equivalente a . Multiplicando os dois membros da igualdade por , obtemos Logo, Portanto, é divisível por . Assim, provamos que implica , para todo natural.   Logo, pelo Princípio da Indução Finita, é verdadeira para todo .   "
},
{
  "id": "section-4",
  "level": "1",
  "url": "section-4.html",
  "type": "Seção",
  "number": "2.2",
  "title": "Outras Formas do Princípio da Indução",
  "body": " Outras Formas do Princípio da Indução   A partir do Princípio da Indução, podemos obter variantes que são úteis para construir determinadas demonstrações.    Seja uma propriedade relativa ao número natural e seja um número natual. Suponhamos que  é válida.  Para todo , a validez de implica a validez de .  Então é válida para todo .   Tomando . Então, , já que, por i. , é válida. Além disso, por ii. , se , então . Logo, pelo Axioma da Indução, .     Mostre que para todo natural .   Observe a tabela abaixo:           1  1  2    2  4  4    3  9  8    4  16  16    5  25  32    6  36  64     Se é a sentença , temos verdadeira. Suponhamos, agora, que seja verdadeira, ou seja, , para algum . Multiplicando ambos os membros por , obtemos . Agora, precisamos mostrar que .  Analizando a diferença: Se , então Daí, concluímos que , ou seja, que é verdadeira. Logo, pelo , a desigualdade vale para todo .    Outra variante do Princípio da Indução ocorre quando convém, no passo de indução, considerar a validez não somente do antecessor direto, mas de 2 ou mais antecessores.   Considere a sequência em que e , para todo natural . Mostre que o termo geral é .   Se tentarmos proceder como nos casos anteriores e considerarmos a sentença o mecanismo de indução não funciona. Não conseguimos passar de para , pois depende não somente de , mas também de . Para fazer a prova, considere uma sentença que estabeleça a validez da expressão do termo geral para dois valores consecutivos de . Podemos tomar e , ou seja, e .  Agora, temos que é verdadeira, já que ambas e são verdadeiras. Além disso, se supomos que é verdadeira para algum , temos que e são verdadeiras. Daí: Assim é verdadeira e, em consequência, e também o é. Logo, pelo Princípio da Indução, é válida para todo . Em consequência, é também válida para todo .    Podemos generalizar o que fizemos acima enunciando a seguinte forma do Princípio da Indução:   Seja uma sentença aberta relativa ao número natural . Suponhamos que  são verdadeiras.  Para todo , a validez de implicam a validez de .  Então é válida para todo .    Uma outra variante do Princípio da Indução é muitas vezes chamada de Princípio da Indução Completa ou da Indução Forte . Nela, a hipótese de indução é a validez da propriedade para todos os naturais menores que ou iguais a um natural :   Seja uma propriedade relativa ao número natural . Suponhamos que  é válida.  Para todo , a validez de , para todo , implica a validez de .  Então é válida para todo .   Consideremos a sentença aberta é válida, para todo natural . Como, por i. , é válida, também é. Suponhamos agora que seja válida. Isto quer dizer que é válida, para todo . Mas, por ii. , isto implica a validez de , que por sua vez implica que seja válida para todo . Logo, também é válida. Portanto, pela forma original do Princípio da Indução, é válida para todo , de onde decorre a validez de para todo .    Naturalmente, o mecanismo da indução completa pode ser adaptado para demonstrar propriedades que valem a partir de um número natural . Neste caso, a hipótese de indução é a validez de para todo natural tal que .   Seja uma sequência definida por   ,  para cada natural . Qual é o termo geral de ?   Os primeiros termos da sequência são: o que sugere que , para todo , com .  Mostrar que está bem definido, e é dado pela expressão acima, requer o uso de Indução Completa, já que a definição de cada termo é baseada no valor de todos os antecessores. Como , é válida para . Suponhamos, agora, que seja válida (isto é, ) para todo tal que . Usando este fato e o de que , obtemos o que mostra que é verdadeira. Logo, o Princípio da Indução Completa assegura que é válida para todo .    Outra aplicação de indução completa é a prova da Propriedade da Boa Ordenação.   (O Princípio da Boa Ordenação)  Todo subconjunto não vazio possui um menor elemento. Isto significa que existe um elemento que é menor do que todos os demais elementos de .   Seja a propriedade .  é válida. De fato, , já que se pertencesse a seria seu menor elemento. Em consequência .  Suponha que seja válida, para todo . Isto quer dizer que todos os naturais de a estão em , ou seja, que não estão em . Mas isto implica que não pode pertencer a , já que, neste caso, seria seu menor elemento e, por hipótese, não possui menor elemento. Logo, , o que mostra que é válida.  Logo, pelo Princípio da Indução Completa, é válida para todo , isto é, e .    "
},
{
  "id": "teo-inducao-gene",
  "level": "2",
  "url": "section-4.html#teo-inducao-gene",
  "type": "Teorema",
  "number": "2.2.1",
  "title": "",
  "body": " Seja uma propriedade relativa ao número natural e seja um número natual. Suponhamos que  é válida.  Para todo , a validez de implica a validez de .  Então é válida para todo .   Tomando . Então, , já que, por i. , é válida. Além disso, por ii. , se , então . Logo, pelo Axioma da Indução, .   "
},
{
  "id": "example-10",
  "level": "2",
  "url": "section-4.html#example-10",
  "type": "Exemplo",
  "number": "2.2.2",
  "title": "",
  "body": " Mostre que para todo natural .   Observe a tabela abaixo:           1  1  2    2  4  4    3  9  8    4  16  16    5  25  32    6  36  64     Se é a sentença , temos verdadeira. Suponhamos, agora, que seja verdadeira, ou seja, , para algum . Multiplicando ambos os membros por , obtemos . Agora, precisamos mostrar que .  Analizando a diferença: Se , então Daí, concluímos que , ou seja, que é verdadeira. Logo, pelo , a desigualdade vale para todo .   "
},
{
  "id": "example-11",
  "level": "2",
  "url": "section-4.html#example-11",
  "type": "Exemplo",
  "number": "2.2.4",
  "title": "",
  "body": " Considere a sequência em que e , para todo natural . Mostre que o termo geral é .   Se tentarmos proceder como nos casos anteriores e considerarmos a sentença o mecanismo de indução não funciona. Não conseguimos passar de para , pois depende não somente de , mas também de . Para fazer a prova, considere uma sentença que estabeleça a validez da expressão do termo geral para dois valores consecutivos de . Podemos tomar e , ou seja, e .  Agora, temos que é verdadeira, já que ambas e são verdadeiras. Além disso, se supomos que é verdadeira para algum , temos que e são verdadeiras. Daí: Assim é verdadeira e, em consequência, e também o é. Logo, pelo Princípio da Indução, é válida para todo . Em consequência, é também válida para todo .   "
},
{
  "id": "theorem-6",
  "level": "2",
  "url": "section-4.html#theorem-6",
  "type": "Teorema",
  "number": "2.2.5",
  "title": "",
  "body": " Seja uma sentença aberta relativa ao número natural . Suponhamos que  são verdadeiras.  Para todo , a validez de implicam a validez de .  Então é válida para todo .  "
},
{
  "id": "theorem-7",
  "level": "2",
  "url": "section-4.html#theorem-7",
  "type": "Teorema",
  "number": "2.2.6",
  "title": "",
  "body": " Seja uma propriedade relativa ao número natural . Suponhamos que  é válida.  Para todo , a validez de , para todo , implica a validez de .  Então é válida para todo .   Consideremos a sentença aberta é válida, para todo natural . Como, por i. , é válida, também é. Suponhamos agora que seja válida. Isto quer dizer que é válida, para todo . Mas, por ii. , isto implica a validez de , que por sua vez implica que seja válida para todo . Logo, também é válida. Portanto, pela forma original do Princípio da Indução, é válida para todo , de onde decorre a validez de para todo .   "
},
{
  "id": "example-12",
  "level": "2",
  "url": "section-4.html#example-12",
  "type": "Exemplo",
  "number": "2.2.7",
  "title": "",
  "body": " Seja uma sequência definida por   ,  para cada natural . Qual é o termo geral de ?   Os primeiros termos da sequência são: o que sugere que , para todo , com .  Mostrar que está bem definido, e é dado pela expressão acima, requer o uso de Indução Completa, já que a definição de cada termo é baseada no valor de todos os antecessores. Como , é válida para . Suponhamos, agora, que seja válida (isto é, ) para todo tal que . Usando este fato e o de que , obtemos o que mostra que é verdadeira. Logo, o Princípio da Indução Completa assegura que é válida para todo .   "
},
{
  "id": "theorem-8",
  "level": "2",
  "url": "section-4.html#theorem-8",
  "type": "Teorema",
  "number": "2.2.8",
  "title": "(O Princípio da Boa Ordenação).",
  "body": " (O Princípio da Boa Ordenação)  Todo subconjunto não vazio possui um menor elemento. Isto significa que existe um elemento que é menor do que todos os demais elementos de .   Seja a propriedade .  é válida. De fato, , já que se pertencesse a seria seu menor elemento. Em consequência .  Suponha que seja válida, para todo . Isto quer dizer que todos os naturais de a estão em , ou seja, que não estão em . Mas isto implica que não pode pertencer a , já que, neste caso, seria seu menor elemento e, por hipótese, não possui menor elemento. Logo, , o que mostra que é válida.  Logo, pelo Princípio da Indução Completa, é válida para todo , isto é, e .   "
},
{
  "id": "section-5",
  "level": "1",
  "url": "section-5.html",
  "type": "Seção",
  "number": "3.1",
  "title": "Progressões Aritméticas",
  "body": " Progressões Aritméticas    Sequências Numéricas   Progressões Aritméticas são casos particulares de sequências numéricas.  Uma sequência numérica é uma função .  É comum denotar por e usar para representar a sequência.     Progressões Aritméticas    Uma progressão aritmética é uma sequência na qual a diferença entre cada termo e o termo anterior é constante. Essa diferença constante é chamada de razão da progressão e representada pela letra r.  Mais formalmente: é uma progressão aritmética quando existe um número real tal que , para todo .    Em uma progressão aritmética   para avançar um termo, basta somar a razão;  para avançar dois termos, basta somar duas vezes a razão;  e assim por diante;  De modo geral, pois, ao passar de para , avançamos termos.   Em uma progressão aritmética, o quinto termo vale 30 e o vigésimo termo vale 50. Quanto vale o oitavo termo dessa progressão?   Observe que . Logo, , daí . Assim,      Qual é a razão da progressão aritmética que se obtem inserindo 10 termos entre os números 3 e 25?   Temos e . Como , temos , logo .     O cometa Halley visita a Terra a cada 76 anos. Sua última passagem por aqui foi em 1986. Quantas vezes ele visitou a Terra desde o nascimento de Cristo? Em que ano foi sua primeira passagem na era cristã?   Os anos de passagem do cometa foram 1986, 1910, 1834,... e formam uma progressão aritmética de razão −76.  O termo de ordem n dessa progressão é Temos quando Portanto, os termos positivos dessa progressão são os 27 primeiros.  Logo, ele nos visitou 27 vezes na era cristã e sua primeira passagem na era cristã foi no ano .  Na verdade, a primeira passagem do cometa Halley na era cristã ocorreu no ano 12.     O preço de um carro novo é de R$ 15 000,00 e diminui de R$1 000,00 a cada ano de uso. Qual será o preço com 4 anos de uso?   Chamando o preço com anos de uso de , temos e queremos calcular .  Como a desvalorização anual é constante, é uma progressão aritmética.  Logo, , ou seja, o preço será de R$11 000,00.     Determine 4 números em progressão aritmética crescente, conhecendo sua soma 8 e a soma de seus quadrados 36.   Um bom truque, para representar progressões aritméticas com um número par de termos, é chamar os dois termos centrais de e . Isso faz com que a razão seja . A progressão é então Temos Como a progressão é crescente, . Logo, e . Os números são .      Progressões Aritméticas e Funções Afins   Em uma progressão aritmética de razão não nula, o termo geral é dado por um polinômio do primeiro grau em :   Reciprocamente, se em uma sequência o termo de ordem for dado por um polinômio do primeiro grau em ela será uma progressão aritmética de razão não nula. Com efeito, se é uma progressão aritmética na qual e .  Portanto, uma progressão aritmética pode ser vista como uma função afim, restrita ao domı́nio dos números naturais.   Em consequência, o gráfico de uma progressão aritmética é um conjunto de pontos igualmente espaçados sobre uma reta.    Soma dos Termos de uma Progressão Aritmética  Baseado na ideia de Gauss, usada para calcular a soma , podemos calcular a soma dos primeiros termos de uma progressão aritmética qualquer.   A soma dos primeiros termos da progressão aritmética é      Somando as duas igualdades, ficamos com Como , para , obtemos      Qual é o valor da soma dos 20 primeiros termos da progressão aritmética ?   Primeiro, vamos calcular , depois, usamos a fórmula da soma.       Qual é a soma dos primeiros números inteiros positivos?        Observe que no exemplo anterior, é um polinômio do segundo grau em , sem termo independente.   Qual é a soma dos primeiros números ímpares?         Observe que , no exemplo anterior, é também um polinômio do segundo grau em , sem termo indepentente. Isto se generaliza como segue.  A soma dos primeiros termos de um progressão aritmética é   Observe que, se , então é um polinômio do segundo grau em , desprovido de termo independente. Se é um polinômio de grau menor que 2, sem termo independente.  Reciprocamente, todo polinômio do segundo grau em , desprovido de termo independente, é o valor da soma dos primeiros termos de alguma progressão aritmética. Com efeito é a soma dos primeiros termos da progressão aritmética na qual      Progressões Aritméticas de Ordem Superior  Define-se para sequências o operador , chamado de operador diferença, por .  Portanto, da definição segue imediatamente que uma sequência é uma progressão aritmética se e somente se é constante.   Mostre que Este resultado é conhecido como o Teorema Fundamental da Somação .          Uma progressão aritmética de segunda ordem é uma sequência na qual as diferenças , entre cada termo e o termo anterior, formam uma progressão aritmética não-estacionária.   A sequência é uma progressão aritmética de segunda ordem, pois a sequência das diferenças entre cada termo e o anterior, é uma progressão aritmética não-estacionária.    Dada uma progressão aritmética de segunda ordem, o termo pode ser determinado da seguinte maneira    Calculando o somatório, obtemos . A última igualdade segue diretamente do      Determine o termo , da progressão aritmética de segunda ordem .   Já conhecemos e . Para usar o , precisamos calcular . Substituindo os valores na última igualdade do , obtemos     De modo geral, uma progressão aritmética de ordem  é uma sequência na qual as diferenças entre cada termo e o termo anterior formam uma progressão aritmética de ordem .   Moste que é uma progressão aritmética de terceira ordem.   A tabela abaixo mostra as sequências .             0  0  0  6  6    1  0  6  12  6    2  6  18  18  6    3  24  36  24  6    4  60  60  30     5  120  90     6  210     7      Se , como parece, for constante, será uma progressão aritmética, será uma progressão aritmética de segunda ordem e será uma progressão aritmética de terceira ordem. Isso é verdade, pois e realmente é constante.  Observe que, nesse quadro, a soma de dois elementos lado a lado é igual ao elemento que está embaixo do primeiro desses elementos. Isso nos permite calcular os elementos que estão assinalados por na tabela acima. Da direita para a esquerda, eles são iguais a 6 , 30 + 6 = 36 , 90 + 36 = 126 e 210 + 126 = 336. Portanto, e este foi o processo mais exótico que você já viu para calcular .     A sequência cujo termo de ordem é a soma dos primeiros termos de uma progressão aritmética de ordem é uma progressão aritmética de ordem . Basta observar que o operador diferença, aplicado a , fornece e define, portanto, uma progressão aritmética de ordem .    Toda sequência na qual o termo de ordem é um polinômio do segundo grau, é uma progressão aritmética de segunda ordem e, reciprocamente, se é uma progressão aritmética de segunda ordem então é um polinômio de segundo grau em .   Com efeito, se , com , temos  que é do primeiro grau em n. Pela , é uma progressão aritmética não-estacionária.  Por outro lado, se é uma progressão aritmética de segunda ordem, é uma progressão aritmética com razão diferente de zero e  Pela , como é uma progressão aritmética, é um polinômio do segundo grau em . Em consequência, também é um polinômio do segundo grau em .     Toda sequência na qual o termo de ordem é um polinômio em , de grau , é uma progressão aritmética de ordem e, reciprocamente, se é uma progressão aritmética de ordem , então é um polinômio de grau em .   A demonstração está no final da seção e encontra-se no .     Calcule    Pelo , a sequência definida por é uma progressão aritmética de ordem , já que seu termo geral é um polinômio de grau 2. Logo, a soma de seus primeiros termos define uma progressão aritmética de ordem . Portanto, usando agora a volta do , o termo geral de é dado por um polinômios de grau 3 em . Isto é, podemos escrever . Atribuindo valores 1, 2, 3 e 4, obtemos as equações Resolvendo, encontramos Então,       Somas Polinomiais  A pergunta que nos colocamos é como calcular somas do tipo onde é um polinômio em .  Se o polinômio é , temos que pode ser calculado desde que saibamos calcular, para , somas do tipo:    Determine o valor de    Observe que Os dois primeiros somatórios têm várias parcelas em comum, pois e Simplificando as parcelas em comum, obtemos Daí,  Observe que é um polinômio do terceiro grau.       é um polinômio de grau em .   Vamos proceder por indução sobre . Para , o teorema já foi provado no .  Suponhamos agora que seja um polinômio de grau em , para todo , Mostraremos que essa afirmação é verdadeira para , isto é, mostraremos que é um polinômio de grau em . Observe que onde os termos que não foram escritos explicitamente formam um polinômio de grau em . Temos então, na qual, é um polinômio de grau em , pela hipótese de indução. Simplificando os termos comuns aos dois primeiros somatórios, obtemos Daí, que é um polinômio de grau em .     Se é um polinômio de grau então é um polinômio de grau em .    Toda sequência na qual o termo de ordem é um polinômio em , de grau , é uma progressão aritmética de ordem e, reciprocamente, se é uma progressão aritmética de ordem , então é um polinômio de grau em .   Vamos proceder por indução sobre .  Para , o teorema decorre da expressão do termo geral de uma progressão aritmética não estacionária ( ).  Suponhamos que o teorema seja verdadeiro para todo . Mostraremos que essa afirmação é verdadeira para .  Se é uma progressão aritmética de ordem , é uma progressão aritmética de ordem e, pela hipótese de indução, é um polinômio de grau em . Então é, pelo , um polinômio de grau em .  Reciprocamente, se é um polinômio de grau em , é um polinômio de grau em , pois é um polinômio de grau . Assim, pela hipótese de indução, é uma progressão aritmética de ordem , ou seja, é uma progressão aritmética de ordem .      "
},
{
  "id": "definition-8",
  "level": "2",
  "url": "section-5.html#definition-8",
  "type": "Definição",
  "number": "3.1.1",
  "title": "",
  "body": "  Uma progressão aritmética é uma sequência na qual a diferença entre cada termo e o termo anterior é constante. Essa diferença constante é chamada de razão da progressão e representada pela letra r.  Mais formalmente: é uma progressão aritmética quando existe um número real tal que , para todo .   "
},
{
  "id": "example-13",
  "level": "2",
  "url": "section-5.html#example-13",
  "type": "Exemplo",
  "number": "3.1.2",
  "title": "",
  "body": " Em uma progressão aritmética, o quinto termo vale 30 e o vigésimo termo vale 50. Quanto vale o oitavo termo dessa progressão?   Observe que . Logo, , daí . Assim,    "
},
{
  "id": "example-14",
  "level": "2",
  "url": "section-5.html#example-14",
  "type": "Exemplo",
  "number": "3.1.3",
  "title": "",
  "body": " Qual é a razão da progressão aritmética que se obtem inserindo 10 termos entre os números 3 e 25?   Temos e . Como , temos , logo .   "
},
{
  "id": "example-15",
  "level": "2",
  "url": "section-5.html#example-15",
  "type": "Exemplo",
  "number": "3.1.4",
  "title": "",
  "body": " O cometa Halley visita a Terra a cada 76 anos. Sua última passagem por aqui foi em 1986. Quantas vezes ele visitou a Terra desde o nascimento de Cristo? Em que ano foi sua primeira passagem na era cristã?   Os anos de passagem do cometa foram 1986, 1910, 1834,... e formam uma progressão aritmética de razão −76.  O termo de ordem n dessa progressão é Temos quando Portanto, os termos positivos dessa progressão são os 27 primeiros.  Logo, ele nos visitou 27 vezes na era cristã e sua primeira passagem na era cristã foi no ano .  Na verdade, a primeira passagem do cometa Halley na era cristã ocorreu no ano 12.   "
},
{
  "id": "example-16",
  "level": "2",
  "url": "section-5.html#example-16",
  "type": "Exemplo",
  "number": "3.1.6",
  "title": "",
  "body": " O preço de um carro novo é de R$ 15 000,00 e diminui de R$1 000,00 a cada ano de uso. Qual será o preço com 4 anos de uso?   Chamando o preço com anos de uso de , temos e queremos calcular .  Como a desvalorização anual é constante, é uma progressão aritmética.  Logo, , ou seja, o preço será de R$11 000,00.   "
},
{
  "id": "example-17",
  "level": "2",
  "url": "section-5.html#example-17",
  "type": "Exemplo",
  "number": "3.1.7",
  "title": "",
  "body": " Determine 4 números em progressão aritmética crescente, conhecendo sua soma 8 e a soma de seus quadrados 36.   Um bom truque, para representar progressões aritméticas com um número par de termos, é chamar os dois termos centrais de e . Isso faz com que a razão seja . A progressão é então Temos Como a progressão é crescente, . Logo, e . Os números são .   "
},
{
  "id": "rem-pa-polig1",
  "level": "2",
  "url": "section-5.html#rem-pa-polig1",
  "type": "Nota",
  "number": "3.1.8",
  "title": "",
  "body": " Em uma progressão aritmética de razão não nula, o termo geral é dado por um polinômio do primeiro grau em :   Reciprocamente, se em uma sequência o termo de ordem for dado por um polinômio do primeiro grau em ela será uma progressão aritmética de razão não nula. Com efeito, se é uma progressão aritmética na qual e .  Portanto, uma progressão aritmética pode ser vista como uma função afim, restrita ao domı́nio dos números naturais.  "
},
{
  "id": "teo-soma-pa",
  "level": "2",
  "url": "section-5.html#teo-soma-pa",
  "type": "Teorema",
  "number": "3.1.9",
  "title": "",
  "body": " A soma dos primeiros termos da progressão aritmética é      Somando as duas igualdades, ficamos com Como , para , obtemos    "
},
{
  "id": "example-18",
  "level": "2",
  "url": "section-5.html#example-18",
  "type": "Exemplo",
  "number": "3.1.10",
  "title": "",
  "body": " Qual é o valor da soma dos 20 primeiros termos da progressão aritmética ?   Primeiro, vamos calcular , depois, usamos a fórmula da soma.     "
},
{
  "id": "ex-soma-inteiros",
  "level": "2",
  "url": "section-5.html#ex-soma-inteiros",
  "type": "Exemplo",
  "number": "3.1.11",
  "title": "",
  "body": " Qual é a soma dos primeiros números inteiros positivos?       "
},
{
  "id": "example-20",
  "level": "2",
  "url": "section-5.html#example-20",
  "type": "Exemplo",
  "number": "3.1.12",
  "title": "",
  "body": " Qual é a soma dos primeiros números ímpares?       "
},
{
  "id": "ex-soma-poli-grau2",
  "level": "2",
  "url": "section-5.html#ex-soma-poli-grau2",
  "type": "Nota",
  "number": "3.1.13",
  "title": "",
  "body": " Observe que , no exemplo anterior, é também um polinômio do segundo grau em , sem termo indepentente. Isto se generaliza como segue.  A soma dos primeiros termos de um progressão aritmética é   Observe que, se , então é um polinômio do segundo grau em , desprovido de termo independente. Se é um polinômio de grau menor que 2, sem termo independente.  Reciprocamente, todo polinômio do segundo grau em , desprovido de termo independente, é o valor da soma dos primeiros termos de alguma progressão aritmética. Com efeito é a soma dos primeiros termos da progressão aritmética na qual   "
},
{
  "id": "definition-9",
  "level": "2",
  "url": "section-5.html#definition-9",
  "type": "Definição",
  "number": "3.1.14",
  "title": "",
  "body": "Define-se para sequências o operador , chamado de operador diferença, por . "
},
{
  "id": "example-21",
  "level": "2",
  "url": "section-5.html#example-21",
  "type": "Exemplo",
  "number": "3.1.15",
  "title": "",
  "body": " Mostre que Este resultado é conhecido como o Teorema Fundamental da Somação .         "
},
{
  "id": "definition-10",
  "level": "2",
  "url": "section-5.html#definition-10",
  "type": "Definição",
  "number": "3.1.16",
  "title": "",
  "body": "Uma progressão aritmética de segunda ordem é uma sequência na qual as diferenças , entre cada termo e o termo anterior, formam uma progressão aritmética não-estacionária. "
},
{
  "id": "example-22",
  "level": "2",
  "url": "section-5.html#example-22",
  "type": "Exemplo",
  "number": "3.1.17",
  "title": "",
  "body": " A sequência é uma progressão aritmética de segunda ordem, pois a sequência das diferenças entre cada termo e o anterior, é uma progressão aritmética não-estacionária.  "
},
{
  "id": "teo-termo-pa-segundaordem",
  "level": "2",
  "url": "section-5.html#teo-termo-pa-segundaordem",
  "type": "Teorema",
  "number": "3.1.18",
  "title": "",
  "body": " Dada uma progressão aritmética de segunda ordem, o termo pode ser determinado da seguinte maneira    Calculando o somatório, obtemos . A última igualdade segue diretamente do    "
},
{
  "id": "example-23",
  "level": "2",
  "url": "section-5.html#example-23",
  "type": "Exemplo",
  "number": "3.1.19",
  "title": "",
  "body": " Determine o termo , da progressão aritmética de segunda ordem .   Já conhecemos e . Para usar o , precisamos calcular . Substituindo os valores na última igualdade do , obtemos    "
},
{
  "id": "definition-11",
  "level": "2",
  "url": "section-5.html#definition-11",
  "type": "Definição",
  "number": "3.1.20",
  "title": "",
  "body": "De modo geral, uma progressão aritmética de ordem  é uma sequência na qual as diferenças entre cada termo e o termo anterior formam uma progressão aritmética de ordem . "
},
{
  "id": "example-24",
  "level": "2",
  "url": "section-5.html#example-24",
  "type": "Exemplo",
  "number": "3.1.21",
  "title": "",
  "body": " Moste que é uma progressão aritmética de terceira ordem.   A tabela abaixo mostra as sequências .             0  0  0  6  6    1  0  6  12  6    2  6  18  18  6    3  24  36  24  6    4  60  60  30     5  120  90     6  210     7      Se , como parece, for constante, será uma progressão aritmética, será uma progressão aritmética de segunda ordem e será uma progressão aritmética de terceira ordem. Isso é verdade, pois e realmente é constante.  Observe que, nesse quadro, a soma de dois elementos lado a lado é igual ao elemento que está embaixo do primeiro desses elementos. Isso nos permite calcular os elementos que estão assinalados por na tabela acima. Da direita para a esquerda, eles são iguais a 6 , 30 + 6 = 36 , 90 + 36 = 126 e 210 + 126 = 336. Portanto, e este foi o processo mais exótico que você já viu para calcular .   "
},
{
  "id": "remark-16",
  "level": "2",
  "url": "section-5.html#remark-16",
  "type": "Nota",
  "number": "3.1.23",
  "title": "",
  "body": " A sequência cujo termo de ordem é a soma dos primeiros termos de uma progressão aritmética de ordem é uma progressão aritmética de ordem . Basta observar que o operador diferença, aplicado a , fornece e define, portanto, uma progressão aritmética de ordem .  "
},
{
  "id": "theorem-11",
  "level": "2",
  "url": "section-5.html#theorem-11",
  "type": "Teorema",
  "number": "3.1.24",
  "title": "",
  "body": " Toda sequência na qual o termo de ordem é um polinômio do segundo grau, é uma progressão aritmética de segunda ordem e, reciprocamente, se é uma progressão aritmética de segunda ordem então é um polinômio de segundo grau em .   Com efeito, se , com , temos  que é do primeiro grau em n. Pela , é uma progressão aritmética não-estacionária.  Por outro lado, se é uma progressão aritmética de segunda ordem, é uma progressão aritmética com razão diferente de zero e  Pela , como é uma progressão aritmética, é um polinômio do segundo grau em . Em consequência, também é um polinômio do segundo grau em .   "
},
{
  "id": "teo-seqPoliOrdem",
  "level": "2",
  "url": "section-5.html#teo-seqPoliOrdem",
  "type": "Teorema",
  "number": "3.1.25",
  "title": "",
  "body": " Toda sequência na qual o termo de ordem é um polinômio em , de grau , é uma progressão aritmética de ordem e, reciprocamente, se é uma progressão aritmética de ordem , então é um polinômio de grau em .   A demonstração está no final da seção e encontra-se no .   "
},
{
  "id": "example-25",
  "level": "2",
  "url": "section-5.html#example-25",
  "type": "Exemplo",
  "number": "3.1.26",
  "title": "",
  "body": " Calcule    Pelo , a sequência definida por é uma progressão aritmética de ordem , já que seu termo geral é um polinômio de grau 2. Logo, a soma de seus primeiros termos define uma progressão aritmética de ordem . Portanto, usando agora a volta do , o termo geral de é dado por um polinômios de grau 3 em . Isto é, podemos escrever . Atribuindo valores 1, 2, 3 e 4, obtemos as equações Resolvendo, encontramos Então,    "
},
{
  "id": "example-26",
  "level": "2",
  "url": "section-5.html#example-26",
  "type": "Exemplo",
  "number": "3.1.27",
  "title": "",
  "body": " Determine o valor de    Observe que Os dois primeiros somatórios têm várias parcelas em comum, pois e Simplificando as parcelas em comum, obtemos Daí,  Observe que é um polinômio do terceiro grau.   "
},
{
  "id": "theorem-13",
  "level": "2",
  "url": "section-5.html#theorem-13",
  "type": "Teorema",
  "number": "3.1.28",
  "title": "",
  "body": "  é um polinômio de grau em .   Vamos proceder por indução sobre . Para , o teorema já foi provado no .  Suponhamos agora que seja um polinômio de grau em , para todo , Mostraremos que essa afirmação é verdadeira para , isto é, mostraremos que é um polinômio de grau em . Observe que onde os termos que não foram escritos explicitamente formam um polinômio de grau em . Temos então, na qual, é um polinômio de grau em , pela hipótese de indução. Simplificando os termos comuns aos dois primeiros somatórios, obtemos Daí, que é um polinômio de grau em .   "
},
{
  "id": "cor-poligraupmais1",
  "level": "2",
  "url": "section-5.html#cor-poligraupmais1",
  "type": "Corolário",
  "number": "3.1.29",
  "title": "",
  "body": " Se é um polinômio de grau então é um polinômio de grau em .  "
},
{
  "id": "teo-seqPoliOrdemP",
  "level": "2",
  "url": "section-5.html#teo-seqPoliOrdemP",
  "type": "Teorema",
  "number": "3.1.30",
  "title": "",
  "body": " Toda sequência na qual o termo de ordem é um polinômio em , de grau , é uma progressão aritmética de ordem e, reciprocamente, se é uma progressão aritmética de ordem , então é um polinômio de grau em .   Vamos proceder por indução sobre .  Para , o teorema decorre da expressão do termo geral de uma progressão aritmética não estacionária ( ).  Suponhamos que o teorema seja verdadeiro para todo . Mostraremos que essa afirmação é verdadeira para .  Se é uma progressão aritmética de ordem , é uma progressão aritmética de ordem e, pela hipótese de indução, é um polinômio de grau em . Então é, pelo , um polinômio de grau em .  Reciprocamente, se é um polinômio de grau em , é um polinômio de grau em , pois é um polinômio de grau . Assim, pela hipótese de indução, é uma progressão aritmética de ordem , ou seja, é uma progressão aritmética de ordem .   "
},
{
  "id": "section-6",
  "level": "1",
  "url": "section-6.html",
  "type": "Seção",
  "number": "3.2",
  "title": "Progressões Geométricas",
  "body": " Progressões Geométricas   A população de um paı́s é hoje igual a 100.000 habitantes e cresce 2% ao ano. Qual será a população desse paı́s daqui a 10 anos?   Em 10 perı́odos, a população é multiplicada 10 vezes por 1,02. habitantes.     Uma pessoa, começando com R$ 64,00, faz seis apostas consecutivas, em cada uma das quais arrisca perder ou ganhar a metade do que possui na ocasião. Se ela ganha três e perde três dessas apostas, pode-se afirmar que ela:  Ganha dinheiro.  Não ganha dinheiro nem perde dinheiro.  Perde R$ 27,00.  Perde R$ 37,00.  Ganha ou perde dinheiro, dependendo da ordem em que ocorreram suas vitórias e derrotas.     A cada vitória, a quantia é multiplicada por ; a cada derrota, é multiplicada por .  Após três vitórias e três derrotas, os R$ 64,00 são multiplicados três vezes por e três vezes por .  Logo, ao final, independentemente da ordem das vitórias e derrotas, a pessoa terá reais, ou seja, ela perde reais (alternativa d.)     A sequência é um exemplo de uma progressão geométrica. Aqui a taxa de crescimento de cada termo para o seguinte é de 100%, o que faz com que cada termo seja igual a 200% do termo anterior.    A sequência é um exemplo de uma progressão geométrica. Aqui, cada termo é 80% do termo anterior. A taxa de crescimento de cada termo para o seguinte é de -20%.    É claro então que numa progressão geométrica cada termo é igual ao anterior multiplicado por , na qual, é a taxa de crescimento dos termos. Chamamos de razão da progressão e representamos por .    Uma progressão geométrica é uma sequência na qual o quociente entre cada termo e o termo anterior é constante. Esse quociente constante é chamado de razão da progressão e representado pela letra q. A razão de uma progressão geométrica é simplemente o valor de , na qual, é a taxa de crescimento constante de cada termo para o seguinte.     As sequências e são progressões geométricas cujas razões valem, respectivamente, e . Suas taxas de crescimento são respectivamente e , pois .    Termo geral de uma Progressão Geométrica   Em uma progressão geométrica   para avançar um termo, basta multiplicar pela razão;  para avançar dois termos, basta multiplicar duas vezes pela razão;  De modo geral, , pois ao passar de para , avançamos termos.      Em uma progressão geométrica, o quinto termo vale 5 e o oitavo vale 135. Quanto vale o sétimo termo dessa progressão?   Temos . Logo, e . Assim, .     Como em uma progressão geométrica , a função que associa a cada natural o valor de é simplemente a restrição aos naturais da função exponencial .    Qual é a razão da progressão geométrica que se obtem inserindo 3 termos entre os números 30 e 480?   Temos e . Como e .      A Fórmula das Taxas Equivalentes   Se é a taxa de crescimento de uma grandeza relativamente ao período de tempo e é a taxa de crescimento relativamente ao período , e se , então    Seja o valor inicial da grandeza. Após um período de tempo , o valor da grandeza será . Como um período de tempo equivale a períodos de tempo , o valor da grandeza será também igual a . Logo, e .     Se a população de um país cresce 2% ao ano, quanto crescerá em 25 anos?   Temos e . Daí, e .     Uma bomba de vácuo retira, em cada sucção, 2% do gás existente em certo recipiente. Depois de 50 sucções, quanto restará do gás inicialmente existente?   Temos e . Daí, e . A quantidade de gás diminuirá de aproximadamente 63,58%. Restarão aproximadamente 36,42% do gás inicialmente existente.      A Soma dos Termos de uma Progressão Geométrica   A soma dos primeiros termos de uma progressão geométrica de razão , é     . Multiplicando por , obtemos . Subtraindo, temos , isto é, e finalmente,      Diz a lenda que o inventor do xadrez pediu como recompensa 1 grão de trigo pela primeira casa, 2 grão pela segunda casa, 4 pela terceira casa e assim por diante, sempre dobrando a quantidade a cada casa nova. Como o tabuleiro de xadrez tem 64 casas, o número de grãos pedidos pelo inventor do jogo é a soma dos 64 primeiros termos da progressão geométrica O valor dessa soma é Calculando, obtemos o valor:     Nas progressões geométricas em que , a soma dos primeiros termos tem um limite finito quando . Como nesse caso , temos     Calcule o limite da soma da progressão geométrica    Temos      O teorema da somação, , também nos permitiria determinar o valor da soma dos primeiros termos de uma progressão geométrica. Supondo e observando que temos     (Somação por Partes) Sejam e sequências numéricas. Então,    Temos Daí, Somando, obtemos a fórmula.     Calcule    Temos Logo, e Aplicando a fórmula da somação por partes, com e , temos Mas Daí, resulta No Sage, podemos fazer este cálculo da seguinte maneira:      "
},
{
  "id": "example-27",
  "level": "2",
  "url": "section-6.html#example-27",
  "type": "Exemplo",
  "number": "3.2.1",
  "title": "",
  "body": " A população de um paı́s é hoje igual a 100.000 habitantes e cresce 2% ao ano. Qual será a população desse paı́s daqui a 10 anos?   Em 10 perı́odos, a população é multiplicada 10 vezes por 1,02. habitantes.   "
},
{
  "id": "example-28",
  "level": "2",
  "url": "section-6.html#example-28",
  "type": "Exemplo",
  "number": "3.2.2",
  "title": "",
  "body": " Uma pessoa, começando com R$ 64,00, faz seis apostas consecutivas, em cada uma das quais arrisca perder ou ganhar a metade do que possui na ocasião. Se ela ganha três e perde três dessas apostas, pode-se afirmar que ela:  Ganha dinheiro.  Não ganha dinheiro nem perde dinheiro.  Perde R$ 27,00.  Perde R$ 37,00.  Ganha ou perde dinheiro, dependendo da ordem em que ocorreram suas vitórias e derrotas.     A cada vitória, a quantia é multiplicada por ; a cada derrota, é multiplicada por .  Após três vitórias e três derrotas, os R$ 64,00 são multiplicados três vezes por e três vezes por .  Logo, ao final, independentemente da ordem das vitórias e derrotas, a pessoa terá reais, ou seja, ela perde reais (alternativa d.)   "
},
{
  "id": "example-29",
  "level": "2",
  "url": "section-6.html#example-29",
  "type": "Exemplo",
  "number": "3.2.3",
  "title": "",
  "body": " A sequência é um exemplo de uma progressão geométrica. Aqui a taxa de crescimento de cada termo para o seguinte é de 100%, o que faz com que cada termo seja igual a 200% do termo anterior.  "
},
{
  "id": "example-30",
  "level": "2",
  "url": "section-6.html#example-30",
  "type": "Exemplo",
  "number": "3.2.4",
  "title": "",
  "body": " A sequência é um exemplo de uma progressão geométrica. Aqui, cada termo é 80% do termo anterior. A taxa de crescimento de cada termo para o seguinte é de -20%.  "
},
{
  "id": "remark-17",
  "level": "2",
  "url": "section-6.html#remark-17",
  "type": "Nota",
  "number": "3.2.5",
  "title": "",
  "body": " É claro então que numa progressão geométrica cada termo é igual ao anterior multiplicado por , na qual, é a taxa de crescimento dos termos. Chamamos de razão da progressão e representamos por .  "
},
{
  "id": "definition-12",
  "level": "2",
  "url": "section-6.html#definition-12",
  "type": "Definição",
  "number": "3.2.6",
  "title": "",
  "body": " Uma progressão geométrica é uma sequência na qual o quociente entre cada termo e o termo anterior é constante. Esse quociente constante é chamado de razão da progressão e representado pela letra q. A razão de uma progressão geométrica é simplemente o valor de , na qual, é a taxa de crescimento constante de cada termo para o seguinte.   "
},
{
  "id": "example-31",
  "level": "2",
  "url": "section-6.html#example-31",
  "type": "Exemplo",
  "number": "3.2.7",
  "title": "",
  "body": " As sequências e são progressões geométricas cujas razões valem, respectivamente, e . Suas taxas de crescimento são respectivamente e , pois .  "
},
{
  "id": "remark-18",
  "level": "2",
  "url": "section-6.html#remark-18",
  "type": "Nota",
  "number": "3.2.8",
  "title": "",
  "body": " Em uma progressão geométrica   para avançar um termo, basta multiplicar pela razão;  para avançar dois termos, basta multiplicar duas vezes pela razão;  De modo geral, , pois ao passar de para , avançamos termos.    "
},
{
  "id": "example-32",
  "level": "2",
  "url": "section-6.html#example-32",
  "type": "Exemplo",
  "number": "3.2.9",
  "title": "",
  "body": " Em uma progressão geométrica, o quinto termo vale 5 e o oitavo vale 135. Quanto vale o sétimo termo dessa progressão?   Temos . Logo, e . Assim, .   "
},
{
  "id": "remark-19",
  "level": "2",
  "url": "section-6.html#remark-19",
  "type": "Nota",
  "number": "3.2.10",
  "title": "",
  "body": " Como em uma progressão geométrica , a função que associa a cada natural o valor de é simplemente a restrição aos naturais da função exponencial .  "
},
{
  "id": "example-33",
  "level": "2",
  "url": "section-6.html#example-33",
  "type": "Exemplo",
  "number": "3.2.11",
  "title": "",
  "body": " Qual é a razão da progressão geométrica que se obtem inserindo 3 termos entre os números 30 e 480?   Temos e . Como e .   "
},
{
  "id": "lemma-1",
  "level": "2",
  "url": "section-6.html#lemma-1",
  "type": "Lema",
  "number": "3.2.12",
  "title": "",
  "body": " Se é a taxa de crescimento de uma grandeza relativamente ao período de tempo e é a taxa de crescimento relativamente ao período , e se , então    Seja o valor inicial da grandeza. Após um período de tempo , o valor da grandeza será . Como um período de tempo equivale a períodos de tempo , o valor da grandeza será também igual a . Logo, e .   "
},
{
  "id": "example-34",
  "level": "2",
  "url": "section-6.html#example-34",
  "type": "Exemplo",
  "number": "3.2.13",
  "title": "",
  "body": " Se a população de um país cresce 2% ao ano, quanto crescerá em 25 anos?   Temos e . Daí, e .   "
},
{
  "id": "example-35",
  "level": "2",
  "url": "section-6.html#example-35",
  "type": "Exemplo",
  "number": "3.2.14",
  "title": "",
  "body": " Uma bomba de vácuo retira, em cada sucção, 2% do gás existente em certo recipiente. Depois de 50 sucções, quanto restará do gás inicialmente existente?   Temos e . Daí, e . A quantidade de gás diminuirá de aproximadamente 63,58%. Restarão aproximadamente 36,42% do gás inicialmente existente.   "
},
{
  "id": "lemma-2",
  "level": "2",
  "url": "section-6.html#lemma-2",
  "type": "Lema",
  "number": "3.2.15",
  "title": "",
  "body": " A soma dos primeiros termos de uma progressão geométrica de razão , é     . Multiplicando por , obtemos . Subtraindo, temos , isto é, e finalmente,    "
},
{
  "id": "example-36",
  "level": "2",
  "url": "section-6.html#example-36",
  "type": "Exemplo",
  "number": "3.2.16",
  "title": "",
  "body": " Diz a lenda que o inventor do xadrez pediu como recompensa 1 grão de trigo pela primeira casa, 2 grão pela segunda casa, 4 pela terceira casa e assim por diante, sempre dobrando a quantidade a cada casa nova. Como o tabuleiro de xadrez tem 64 casas, o número de grãos pedidos pelo inventor do jogo é a soma dos 64 primeiros termos da progressão geométrica O valor dessa soma é Calculando, obtemos o valor:   "
},
{
  "id": "remark-20",
  "level": "2",
  "url": "section-6.html#remark-20",
  "type": "Nota",
  "number": "3.2.17",
  "title": "",
  "body": " Nas progressões geométricas em que , a soma dos primeiros termos tem um limite finito quando . Como nesse caso , temos   "
},
{
  "id": "example-37",
  "level": "2",
  "url": "section-6.html#example-37",
  "type": "Exemplo",
  "number": "3.2.18",
  "title": "",
  "body": " Calcule o limite da soma da progressão geométrica    Temos    "
},
{
  "id": "remark-21",
  "level": "2",
  "url": "section-6.html#remark-21",
  "type": "Nota",
  "number": "3.2.19",
  "title": "",
  "body": " O teorema da somação, , também nos permitiria determinar o valor da soma dos primeiros termos de uma progressão geométrica. Supondo e observando que temos   "
},
{
  "id": "theorem-15",
  "level": "2",
  "url": "section-6.html#theorem-15",
  "type": "Teorema",
  "number": "3.2.20",
  "title": "",
  "body": " (Somação por Partes) Sejam e sequências numéricas. Então,    Temos Daí, Somando, obtemos a fórmula.   "
},
{
  "id": "example-38",
  "level": "2",
  "url": "section-6.html#example-38",
  "type": "Exemplo",
  "number": "3.2.21",
  "title": "",
  "body": " Calcule    Temos Logo, e Aplicando a fórmula da somação por partes, com e , temos Mas Daí, resulta No Sage, podemos fazer este cálculo da seguinte maneira:    "
},
{
  "id": "section-7",
  "level": "1",
  "url": "section-7.html",
  "type": "Seção",
  "number": "4.1",
  "title": "Introdução",
  "body": " Introdução   Muitas sequências são definidas recursivamente (isto é, por recorrência), ou seja, por intermédio de uma regra que permite calcular qualquer termo em função dos antecessores.   A sequência dos números naturais ímpares pode ser definida por     Qualquer progressão aritmética de razão e o primeiro termo pode ser definida por     Qualquer progressão geométrica de razão e o primeiro termo pode ser definida por     A sequência , dita de Fibonacci, cujos termos são e na qual cada termo é a soma dos dois imediatamente anteriores, é definida por     Observe que uma recorrência por si só, não define uma sequência. Para que a sequência fique perfeitamente determinada é necessário também o conhecimento dos primeiros termos.  Observe que, no , no e no , temos recorrências de primeira ordem , isto é, cada termo é expresso em função do antecessor imediato, e que, no , temos uma recorrência de segunda ordem , ou seja, cada termo é expresso em função dos dois antecessores imediatos.    Quantas são as sequências de 10 termos, pertencentes a , que não possuem dois termos consecutivos iguais a 0?   Chamando de o número de tais sequências com termos, o valor de será a soma das seguintes quantidades:  O número de sequências de termos que começam por 1 e não possuem dois zeros consecutivos. Isto é precisamente igual a , pois se o primeiro termo é 1, para formar a sequência basta determinar os termos a partir do segundo , o que pode ser feito de modos.  O número de sequências de termos que começam por 2 e não possuem dois zeros consecutivos. Analogamente, isto é igual a .  O número de sequências de termos que começam por 0 e não possuem dois zeros consecutivos. Se o primeiro termo é zero, temos dois modos de escolher o segundo termo (1 ou 2) e, escolhido o segundo termo, temos modos de escolher os demais. Há, pois, sequências começadas em 0.  Logo, .  Observe que , pois, as sequências só possuem um termo, e este termo pode ser qualquer valor do conjunto .  Para obter , vamos determinar todas as sequências com dois termos que não possuem dois zeros consecutivos: Portanto .  Agora vamos usar o Sage para mostrar que o valor de é 24960.      Seja o número de permutações caóticas de , isto é, o número de permutações simples de , nas quais nenhum elemento ocupa o seu lugar primitivo. Mostre que, se    Vamos separar as permutações caóticas de em dois casos.  1º caso: permutações caóticas em que o elemento que ocupa o primeiro lugar tem seu lugar original ocupado pelo 1.  Como temos elementos, diferentes do , para cada um deles podemos colocar o elemento na 1ª posição e o número 1 na posição deste número, ou seja, temos maneiras de fazer isto. Depois disto, os outros elementos podem ser distribuídos de formas.  2º caso: permutações caóticas em que o elemento que ocupa o primeiro lugar não tem seu lugar original ocupado pelo 1.  Temos formas de escolher o elemento que ocupará o primeiro lugar, já que o número 1 não pode ocupar esta posição. Depois disto precisamos contar o número de maneiras de distribuir (de forma caótica) os elementos nos lugares, de forma que o número 1 não fique na posição original do número que está na 1ª posição. Para contar esta quantidade, podemos contar o número de permutações caóticas desses elementos organizados da seguinte maneira: coloque os elementos em suas posições originais e o número 1 na posição do elemento que está na 1ª posição. O número dessas permutações caóticas é  Como os dois casos são excludentes e cobrem todas as possibilidades, pelo princípio aditivo, temos     "
},
{
  "id": "exem-1",
  "level": "2",
  "url": "section-7.html#exem-1",
  "type": "Exemplo",
  "number": "4.1.1",
  "title": "",
  "body": " A sequência dos números naturais ímpares pode ser definida por   "
},
{
  "id": "exem-2",
  "level": "2",
  "url": "section-7.html#exem-2",
  "type": "Exemplo",
  "number": "4.1.2",
  "title": "",
  "body": " Qualquer progressão aritmética de razão e o primeiro termo pode ser definida por   "
},
{
  "id": "exem-3",
  "level": "2",
  "url": "section-7.html#exem-3",
  "type": "Exemplo",
  "number": "4.1.3",
  "title": "",
  "body": " Qualquer progressão geométrica de razão e o primeiro termo pode ser definida por   "
},
{
  "id": "exem-4",
  "level": "2",
  "url": "section-7.html#exem-4",
  "type": "Exemplo",
  "number": "4.1.4",
  "title": "",
  "body": " A sequência , dita de Fibonacci, cujos termos são e na qual cada termo é a soma dos dois imediatamente anteriores, é definida por   "
},
{
  "id": "remark-22",
  "level": "2",
  "url": "section-7.html#remark-22",
  "type": "Nota",
  "number": "4.1.5",
  "title": "",
  "body": " Observe que uma recorrência por si só, não define uma sequência. Para que a sequência fique perfeitamente determinada é necessário também o conhecimento dos primeiros termos.  Observe que, no , no e no , temos recorrências de primeira ordem , isto é, cada termo é expresso em função do antecessor imediato, e que, no , temos uma recorrência de segunda ordem , ou seja, cada termo é expresso em função dos dois antecessores imediatos.  "
},
{
  "id": "example-43",
  "level": "2",
  "url": "section-7.html#example-43",
  "type": "Exemplo",
  "number": "4.1.6",
  "title": "",
  "body": " Quantas são as sequências de 10 termos, pertencentes a , que não possuem dois termos consecutivos iguais a 0?   Chamando de o número de tais sequências com termos, o valor de será a soma das seguintes quantidades:  O número de sequências de termos que começam por 1 e não possuem dois zeros consecutivos. Isto é precisamente igual a , pois se o primeiro termo é 1, para formar a sequência basta determinar os termos a partir do segundo , o que pode ser feito de modos.  O número de sequências de termos que começam por 2 e não possuem dois zeros consecutivos. Analogamente, isto é igual a .  O número de sequências de termos que começam por 0 e não possuem dois zeros consecutivos. Se o primeiro termo é zero, temos dois modos de escolher o segundo termo (1 ou 2) e, escolhido o segundo termo, temos modos de escolher os demais. Há, pois, sequências começadas em 0.  Logo, .  Observe que , pois, as sequências só possuem um termo, e este termo pode ser qualquer valor do conjunto .  Para obter , vamos determinar todas as sequências com dois termos que não possuem dois zeros consecutivos: Portanto .  Agora vamos usar o Sage para mostrar que o valor de é 24960.    "
},
{
  "id": "exam-pcaotica4",
  "level": "2",
  "url": "section-7.html#exam-pcaotica4",
  "type": "Exemplo",
  "number": "4.1.7",
  "title": "",
  "body": " Seja o número de permutações caóticas de , isto é, o número de permutações simples de , nas quais nenhum elemento ocupa o seu lugar primitivo. Mostre que, se    Vamos separar as permutações caóticas de em dois casos.  1º caso: permutações caóticas em que o elemento que ocupa o primeiro lugar tem seu lugar original ocupado pelo 1.  Como temos elementos, diferentes do , para cada um deles podemos colocar o elemento na 1ª posição e o número 1 na posição deste número, ou seja, temos maneiras de fazer isto. Depois disto, os outros elementos podem ser distribuídos de formas.  2º caso: permutações caóticas em que o elemento que ocupa o primeiro lugar não tem seu lugar original ocupado pelo 1.  Temos formas de escolher o elemento que ocupará o primeiro lugar, já que o número 1 não pode ocupar esta posição. Depois disto precisamos contar o número de maneiras de distribuir (de forma caótica) os elementos nos lugares, de forma que o número 1 não fique na posição original do número que está na 1ª posição. Para contar esta quantidade, podemos contar o número de permutações caóticas desses elementos organizados da seguinte maneira: coloque os elementos em suas posições originais e o número 1 na posição do elemento que está na 1ª posição. O número dessas permutações caóticas é  Como os dois casos são excludentes e cobrem todas as possibilidades, pelo princípio aditivo, temos    "
},
{
  "id": "section-8",
  "level": "1",
  "url": "section-8.html",
  "type": "Seção",
  "number": "4.2",
  "title": "Recorrências Lineares de Primeira Ordem",
  "body": " Recorrências Lineares de Primeira Ordem  Uma recorrência de primeira ordem expressa em função de . Ela é dita linear se, e somente se, essa função for do primeiro grau.   As recorrências e são lineares e a recorrência não é linear. As duas últimas são ditas homogêneas, por não possuírem termo independente de .   Agora vamos resolver algumas recorrências lineares homogêneas de primeira ordem.   Resolva a recorrência    Temos Daí, multiplicando, obtemos Como , temos      Resolva a recorrência    Temos Daí, multiplicando, obtemos Como não foi definido o valor de , há uma infinidade de soluções para a recorrência, na qual, é uma constante arbitrária.     As recorrências lineares não-homogêneas de primeira ordem que mais facilmente se resolvem são as da forma .  Com efeito, temos Somando, obtemos     Resolva a recorrência    Temos Somando, resulta      Resolva a recorrência    Temos Somando, resulta     O teorema a seguir mostra que qualquer recorrência linear não-homogênea de primeira ordem pode ser transformada em uma da forma .   Se é uma solução não nula da recorrência então a substituição transforma a recorrência em    A substituição transforma Mas, , pois é solução de . Portanto, a equação se transforma em ou seja, .     Resolva a recorrência    Uma solução não nula de é, por exemplo, , conforme vimos no . Fazendo a substituição , obtemos ou seja, Daí, se tem Somando, resulta Como e , temos e . Daí,        Resolva .   Uma solução não nula de é, por exemplo, (ou qualquer outra progressão geométrica de razão 3). Fazendo a substituição . Obtemos , ou seja, . Daí, é uma progressão aritmética de razão 1. Logo, . Como e , temos e . Daí, .    "
},
{
  "id": "definition-13",
  "level": "2",
  "url": "section-8.html#definition-13",
  "type": "Definição",
  "number": "4.2.1",
  "title": "",
  "body": "Uma recorrência de primeira ordem expressa em função de . Ela é dita linear se, e somente se, essa função for do primeiro grau. "
},
{
  "id": "example-45",
  "level": "2",
  "url": "section-8.html#example-45",
  "type": "Exemplo",
  "number": "4.2.2",
  "title": "",
  "body": " As recorrências e são lineares e a recorrência não é linear. As duas últimas são ditas homogêneas, por não possuírem termo independente de .  "
},
{
  "id": "example-46",
  "level": "2",
  "url": "section-8.html#example-46",
  "type": "Exemplo",
  "number": "4.2.3",
  "title": "",
  "body": " Resolva a recorrência    Temos Daí, multiplicando, obtemos Como , temos    "
},
{
  "id": "ex-7",
  "level": "2",
  "url": "section-8.html#ex-7",
  "type": "Exemplo",
  "number": "4.2.4",
  "title": "",
  "body": " Resolva a recorrência    Temos Daí, multiplicando, obtemos Como não foi definido o valor de , há uma infinidade de soluções para a recorrência, na qual, é uma constante arbitrária.   "
},
{
  "id": "remark-23",
  "level": "2",
  "url": "section-8.html#remark-23",
  "type": "Nota",
  "number": "4.2.5",
  "title": "",
  "body": " As recorrências lineares não-homogêneas de primeira ordem que mais facilmente se resolvem são as da forma .  Com efeito, temos Somando, obtemos   "
},
{
  "id": "example-48",
  "level": "2",
  "url": "section-8.html#example-48",
  "type": "Exemplo",
  "number": "4.2.6",
  "title": "",
  "body": " Resolva a recorrência    Temos Somando, resulta    "
},
{
  "id": "example-49",
  "level": "2",
  "url": "section-8.html#example-49",
  "type": "Exemplo",
  "number": "4.2.7",
  "title": "",
  "body": " Resolva a recorrência    Temos Somando, resulta    "
},
{
  "id": "theorem-16",
  "level": "2",
  "url": "section-8.html#theorem-16",
  "type": "Teorema",
  "number": "4.2.8",
  "title": "",
  "body": " Se é uma solução não nula da recorrência então a substituição transforma a recorrência em    A substituição transforma Mas, , pois é solução de . Portanto, a equação se transforma em ou seja, .   "
},
{
  "id": "example-50",
  "level": "2",
  "url": "section-8.html#example-50",
  "type": "Exemplo",
  "number": "4.2.9",
  "title": "",
  "body": " Resolva a recorrência    Uma solução não nula de é, por exemplo, , conforme vimos no . Fazendo a substituição , obtemos ou seja, Daí, se tem Somando, resulta Como e , temos e . Daí,      "
},
{
  "id": "ex-4.13",
  "level": "2",
  "url": "section-8.html#ex-4.13",
  "type": "Exemplo",
  "number": "4.2.10",
  "title": "",
  "body": " Resolva .   Uma solução não nula de é, por exemplo, (ou qualquer outra progressão geométrica de razão 3). Fazendo a substituição . Obtemos , ou seja, . Daí, é uma progressão aritmética de razão 1. Logo, . Como e , temos e . Daí, .   "
},
{
  "id": "section-9",
  "level": "1",
  "url": "section-9.html",
  "type": "Seção",
  "number": "4.3",
  "title": "Recorrências Lineares de Segunda Ordem",
  "body": " Recorrências Lineares de Segunda Ordem  Inicialmente, trataremos das recorrências lineares de segunda ordem homogêneas com coeficientes constantes, isto é, recorrências da forma Suporemos sempre , pois se , a recorrência seria, na realidade, uma recorrência de primeira ordem.  A cada recorrência linear de segunda ordem homogênea, com coeficientes constantes, da forma acima, associaremos uma equação do segundo grau, chamada equação característica. A nossa suposição preliminar de que implica que não é raiz da equação característica.   A recorrência tem equação característica . As raízes da equação característica são:    O teorema a seguir mostra que se as raízes da equação característica são e , com , então qualquer sequência da forma é solução da recorrência, quais que sejam os valores das constantes e .   Se as raízes de são e , com , então é solução da recorrência , quaisquer que sejam os valores das constantes e .   Substituindo na recorrência , obtemos, agrupando convenientemente os termos,      A equação tem como equação característica. As raízes da equação são e . De acordo com o , todas as sequências da forma são soluções da recorrência.    Se as raízes de são e , com , então todas as soluções da recorrência são da forma e constantes.   Seja uma solução qualquer de . Determinemos constantes e que sejam soluções do sistema de equações: isto é, Isso é possível, pois , e .  Afirmamos que para todo natural, o que provará o teorema. Com efeito, seja . Mostraremos que para todo . Temos  O primeiro parênteses é igual a zero porque é solução de ; os dois últimos parênteses são iguais a zero porque e são raízes de . Então . Além disso, como e , temos . Mas, se e , então para todo .     Determine as soluções da recorrência    A equação característica , tem raízes e . De acordo com o e o , as soluções da recorrência são as sequências da forma , isto é, , na qual, e são constantes arbitrárias.     Determine o número de Fibonacci definido por    A equação característica é e suas raízes são dadas por Então, Para determinar e , podemos usar , mas é mais conveniente usar e .  Obtemos o sistema Resolvendo o sistema, encontramos . Daí:      Se as raízes da equação característica forem complexas, a solução  e constantes arbitrárias pode ser escrita de modo a evitar cálculos com números complexos. Pondo as raízes na forma trigonométrica, teremos:  Logo, É claro que e são novas constantes e a solução pode ser escrita como     A recorrência tem equação característica , cujas raízes são que são complexas de módulo e argumento principal .  A solução é    O que acontece se as raízes da equação característica forem iguais? Os teoremas a seguir respondem essa pergunta.   Se as raízes de são iguais, , então, é a solução da recorrência quaisquer que sejam os valores das contantes e .   Se as raízes são iguais, então . Substituindo na recorrência obtemos,       Se as raízes de são iguais, , então todas as soluções da recorrência são da forma , e constantes.   Seja uma solução qualquer de . Determine constantes e que sejam soluções do sistema de equações. isto é possível, pois .  Afirmamos que para todo natural, o que provará o teorema. Com efeito, seja . Mostraremos que para todo . Temos  O primeiro parênteses é igual a zero porque é a solução de ; o segundo e terceiro parênteses são iguais a zero porque é raiz de ; o quarto é igual a zero porque já que, quando , tem-se . Então, .  Além disso, como e , temos . Mas, se e , então para todo .     A recorrência tem equação característica . As raízes são e a solução da recorrência é .   O teorema a seguir mostra um processo para resolver algumas recorrências não homogêneas.   Se é uma solução da equação então a substituição transforma a equação em    Substituindo por na equação, obtemos Mas , pois é a solução da equação original. Logo, a equação se transformou em     De acordo com o , a solução de uma recorrência não homogênea é constituída de duas parcelas: uma solução qualquer da não homogênea e a solução da homogênea. A solução da homogênea, sabemos achar. Uma solução da não homogênea, procuramos por tentativas.   Determine a solução da recorrência:    A recorrência tem equação característica , cujas raízes são e . Portanto, a solução da homogênea, isto é, de é . Tentaremos agora descobrir uma solução particular, , da recorrência Ora, se substituirmos em devemos encontrar . Que tipo de função deve ter ? É bastante razoável imaginar que seja a soma de um polinômio do primeiro grau com uma exponencial de base 3. Tentaremos . Substituindo em obtemos . Logo, será solução se e . Logo, Daí, Portanto, a solução da recorrência não homogênea é      Determine a solução da recorrência:    A recorrência tem equação característica , cujas raízes são e . Portanto, a solução da homogênea, isto é, de é . Tentaremos agora descobrir uma solução particular, da recorrência . Ora, se substituirmos em devemos encontrar . Que tipo de função deve ser ? É bastante razoável imaginar que seja a soma de um polinômio constante com uma exponencial de base 2. Tentaremos . Substituindo em obtemos . Essa igualdade é impossível. A recorrência não admite solução da forma .  Parando para pensar no que aconteceu, verificamos que era óbvio que a nossa tentativa não podia dar certo. O espírito da nossa tentativa era tentar uma constante para que obtivéssemos uma constante que igualaríamos a 1 e tentar para gerar uma exponencial que pudéssemos igualar a . É claro que o termo não poderia cumprir o seu papel. é solução da homogênea (é a solução da homogênea que é obtida pondo e ) e, substituindo na equação daria zero e não uma exponencial que pudéssemos igualar a .  Vamos corrigir a nossa tentativa para . Sempre que na nossa tentativa em algum bloco não cumprir o seu papel, fazemos a correção \"aumentando o grau\", isto é, multiplicando o bloco por . Agora, substituindo na recorrência, obtemos , ou seja, Assim, obtemos a solução A solução da recorrência é a soma de com . Portanto,     Podemos verificar as soluções das recorrências usando o software Maxima da seguinite maneira:    O pode ser utilizado para resolver uma recorrência linear não homogênea de qualquer grau, toda vez que se conheça a solução geral da recorrência homogênea correspondente e uma solução particular : a solução geral da equação não homogênea é dada por . Ilustramos este fato resolvendo, de um outro modo, a recorrência linear de primeira ordem vista no .    Resolva a recorrência , usando o método sugerido pelo .   A equação homogênea correspondente é , cuja solução geral é . Para encontrar uma solução particular da recorrência, poderia parecer natural buscar uma solução da forma . Mas, como no exemplo anterior, isto não funciona, pois soluções deste tipo satisfazem a equação homogênea. Buscamos, então, uma solução da forma . Substituindo na recorrência, obtemos . Daí, obtemos , o que leva a . Logo, a solução geral da recorrência é . Finalmente, usando a condição inicial , obtemos , que fornece . Logo, a solução da recorrência é como encontrado anteriormente.    "
},
{
  "id": "example-52",
  "level": "2",
  "url": "section-9.html#example-52",
  "type": "Exemplo",
  "number": "4.3.1",
  "title": "",
  "body": " A recorrência tem equação característica . As raízes da equação característica são:   "
},
{
  "id": "teo-recorrencia01",
  "level": "2",
  "url": "section-9.html#teo-recorrencia01",
  "type": "Teorema",
  "number": "4.3.2",
  "title": "",
  "body": " Se as raízes de são e , com , então é solução da recorrência , quaisquer que sejam os valores das constantes e .   Substituindo na recorrência , obtemos, agrupando convenientemente os termos,    "
},
{
  "id": "example-53",
  "level": "2",
  "url": "section-9.html#example-53",
  "type": "Exemplo",
  "number": "4.3.3",
  "title": "",
  "body": " A equação tem como equação característica. As raízes da equação são e . De acordo com o , todas as sequências da forma são soluções da recorrência.  "
},
{
  "id": "teo-recorrencia02",
  "level": "2",
  "url": "section-9.html#teo-recorrencia02",
  "type": "Teorema",
  "number": "4.3.4",
  "title": "",
  "body": " Se as raízes de são e , com , então todas as soluções da recorrência são da forma e constantes.   Seja uma solução qualquer de . Determinemos constantes e que sejam soluções do sistema de equações: isto é, Isso é possível, pois , e .  Afirmamos que para todo natural, o que provará o teorema. Com efeito, seja . Mostraremos que para todo . Temos  O primeiro parênteses é igual a zero porque é solução de ; os dois últimos parênteses são iguais a zero porque e são raízes de . Então . Além disso, como e , temos . Mas, se e , então para todo .   "
},
{
  "id": "example-54",
  "level": "2",
  "url": "section-9.html#example-54",
  "type": "Exemplo",
  "number": "4.3.5",
  "title": "",
  "body": " Determine as soluções da recorrência    A equação característica , tem raízes e . De acordo com o e o , as soluções da recorrência são as sequências da forma , isto é, , na qual, e são constantes arbitrárias.   "
},
{
  "id": "example-55",
  "level": "2",
  "url": "section-9.html#example-55",
  "type": "Exemplo",
  "number": "4.3.6",
  "title": "",
  "body": " Determine o número de Fibonacci definido por    A equação característica é e suas raízes são dadas por Então, Para determinar e , podemos usar , mas é mais conveniente usar e .  Obtemos o sistema Resolvendo o sistema, encontramos . Daí:    "
},
{
  "id": "remark-24",
  "level": "2",
  "url": "section-9.html#remark-24",
  "type": "Nota",
  "number": "4.3.7",
  "title": "",
  "body": " Se as raízes da equação característica forem complexas, a solução  e constantes arbitrárias pode ser escrita de modo a evitar cálculos com números complexos. Pondo as raízes na forma trigonométrica, teremos:  Logo, É claro que e são novas constantes e a solução pode ser escrita como   "
},
{
  "id": "example-56",
  "level": "2",
  "url": "section-9.html#example-56",
  "type": "Exemplo",
  "number": "4.3.8",
  "title": "",
  "body": " A recorrência tem equação característica , cujas raízes são que são complexas de módulo e argumento principal .  A solução é   "
},
{
  "id": "theorem-19",
  "level": "2",
  "url": "section-9.html#theorem-19",
  "type": "Teorema",
  "number": "4.3.9",
  "title": "",
  "body": " Se as raízes de são iguais, , então, é a solução da recorrência quaisquer que sejam os valores das contantes e .   Se as raízes são iguais, então . Substituindo na recorrência obtemos,     "
},
{
  "id": "theorem-20",
  "level": "2",
  "url": "section-9.html#theorem-20",
  "type": "Teorema",
  "number": "4.3.10",
  "title": "",
  "body": " Se as raízes de são iguais, , então todas as soluções da recorrência são da forma , e constantes.   Seja uma solução qualquer de . Determine constantes e que sejam soluções do sistema de equações. isto é possível, pois .  Afirmamos que para todo natural, o que provará o teorema. Com efeito, seja . Mostraremos que para todo . Temos  O primeiro parênteses é igual a zero porque é a solução de ; o segundo e terceiro parênteses são iguais a zero porque é raiz de ; o quarto é igual a zero porque já que, quando , tem-se . Então, .  Além disso, como e , temos . Mas, se e , então para todo .   "
},
{
  "id": "example-57",
  "level": "2",
  "url": "section-9.html#example-57",
  "type": "Exemplo",
  "number": "4.3.11",
  "title": "",
  "body": " A recorrência tem equação característica . As raízes são e a solução da recorrência é .  "
},
{
  "id": "teo-4.6",
  "level": "2",
  "url": "section-9.html#teo-4.6",
  "type": "Teorema",
  "number": "4.3.12",
  "title": "",
  "body": " Se é uma solução da equação então a substituição transforma a equação em    Substituindo por na equação, obtemos Mas , pois é a solução da equação original. Logo, a equação se transformou em    "
},
{
  "id": "example-58",
  "level": "2",
  "url": "section-9.html#example-58",
  "type": "Exemplo",
  "number": "4.3.13",
  "title": "",
  "body": " Determine a solução da recorrência:    A recorrência tem equação característica , cujas raízes são e . Portanto, a solução da homogênea, isto é, de é . Tentaremos agora descobrir uma solução particular, , da recorrência Ora, se substituirmos em devemos encontrar . Que tipo de função deve ter ? É bastante razoável imaginar que seja a soma de um polinômio do primeiro grau com uma exponencial de base 3. Tentaremos . Substituindo em obtemos . Logo, será solução se e . Logo, Daí, Portanto, a solução da recorrência não homogênea é    "
},
{
  "id": "example-59",
  "level": "2",
  "url": "section-9.html#example-59",
  "type": "Exemplo",
  "number": "4.3.14",
  "title": "",
  "body": " Determine a solução da recorrência:    A recorrência tem equação característica , cujas raízes são e . Portanto, a solução da homogênea, isto é, de é . Tentaremos agora descobrir uma solução particular, da recorrência . Ora, se substituirmos em devemos encontrar . Que tipo de função deve ser ? É bastante razoável imaginar que seja a soma de um polinômio constante com uma exponencial de base 2. Tentaremos . Substituindo em obtemos . Essa igualdade é impossível. A recorrência não admite solução da forma .  Parando para pensar no que aconteceu, verificamos que era óbvio que a nossa tentativa não podia dar certo. O espírito da nossa tentativa era tentar uma constante para que obtivéssemos uma constante que igualaríamos a 1 e tentar para gerar uma exponencial que pudéssemos igualar a . É claro que o termo não poderia cumprir o seu papel. é solução da homogênea (é a solução da homogênea que é obtida pondo e ) e, substituindo na equação daria zero e não uma exponencial que pudéssemos igualar a .  Vamos corrigir a nossa tentativa para . Sempre que na nossa tentativa em algum bloco não cumprir o seu papel, fazemos a correção \"aumentando o grau\", isto é, multiplicando o bloco por . Agora, substituindo na recorrência, obtemos , ou seja, Assim, obtemos a solução A solução da recorrência é a soma de com . Portanto,    "
},
{
  "id": "remark-25",
  "level": "2",
  "url": "section-9.html#remark-25",
  "type": "Nota",
  "number": "4.3.15",
  "title": "",
  "body": " O pode ser utilizado para resolver uma recorrência linear não homogênea de qualquer grau, toda vez que se conheça a solução geral da recorrência homogênea correspondente e uma solução particular : a solução geral da equação não homogênea é dada por . Ilustramos este fato resolvendo, de um outro modo, a recorrência linear de primeira ordem vista no .  "
},
{
  "id": "example-60",
  "level": "2",
  "url": "section-9.html#example-60",
  "type": "Exemplo",
  "number": "4.3.16",
  "title": "",
  "body": " Resolva a recorrência , usando o método sugerido pelo .   A equação homogênea correspondente é , cuja solução geral é . Para encontrar uma solução particular da recorrência, poderia parecer natural buscar uma solução da forma . Mas, como no exemplo anterior, isto não funciona, pois soluções deste tipo satisfazem a equação homogênea. Buscamos, então, uma solução da forma . Substituindo na recorrência, obtemos . Daí, obtemos , o que leva a . Logo, a solução geral da recorrência é . Finalmente, usando a condição inicial , obtemos , que fornece . Logo, a solução da recorrência é como encontrado anteriormente.   "
},
{
  "id": "section-10",
  "level": "1",
  "url": "section-10.html",
  "type": "Seção",
  "number": "5.1",
  "title": "Juros Compostos",
  "body": " Juros Compostos  Quotidianamente, estamos frente a problemas práticos, tais como se devemos ou não parcelar uma compra e, se for o caso, em quantas parcelas? Se devemos ou não antecipar o pagamento de uma dívida, usando o décimo terceiro salário? Esses são desafios que, se resolvidos corretamente, nos auxiliam a tomar decisões que podem proporcionar uma boa economia.  A ferramenta matemática básica que é utilizada nesse tipo de questões são as progressões geométricas, bastando, para resolvê-las modelar corretamente cada problema.   Alguém que dispõe de um capital (chamado de principal ), empresta-o a outrem por um certo período de tempo, e após esse período, recebe o seu capital de volta, acrescido de uma remuneração pelo empréstimo. Essa remuneração é chamada de juro . A soma é chamada de montante e será representada por . A razão que é a taxa de crescimento do capital, será sempre referida ao período da operação e chamada de taxa de juros .    Lúcia tomou um empréstimo de R$ 100,00. Dois meses após, pagou R$ 140,00. Quais foram os juros pagos, a taxa de juros e o montante pago por Lúcia?   Os juros pagos por Lúcia são de R$ 40,00 e a taxa de juros é de ao bimestre. O montante, que é a dívida na época do pagamento, é de R$ 140,00.     No regime de juros compostos de taxa , um principal transforma-se, depois de períodos de tempo, em um montante .   Basta observar que os valores do capital crescem a uma taxa constante e, portanto, formam uma progressão geométrica de razão .     Pedro investe 150 reais a juros de ao mês. Qual será o montante de Pedro três meses depois? E qual o montante de Pedro 10 anos depois?     reais  reais. Isso pode ser calculado no Sage da seguinte maneira:       É importante perceber que o valor de uma quantia depende da época à qual ela está referida. Se eu consigo fazer com que meu dinheiro renda 10% ao mês, me é indiferente pagar agora R$ 100,00 ou pagar R$ 110,00 daqui a um mês. É mais vantajoso pagar R$ 105,00 daqui a um mês do que pagar R$ 100,00 agora. é mais vantajoso pagar R$ 100,00 agora do que pagar R$ 120,00 daqui a um mês.   No fundo, só há um único problema de Matemática Financeira: deslocar quantias no tempo.  Outro modo de ler o , é que uma quantia, hoje igual a , transforma-se-á, depois de períodos de tempo, em uma quantia igual a . Isto é, uma quantia, cujo valor atual é , equivalerá no futuro, depois de períodos de tempo, a .  Essa é a fórmula fundamental da equivalência de capitais, para obter o valor futuro, basta multiplicar o atual por , e para obter o valor atual, sabendo o valor futuro, basta dividir o valor futuro por , ou seja:  ,       Pedro tomou um emprétimo de reais, a juros de ao mês. Dois meses após, Pedro pagou reais e, um mês após esse pagamento, Pedro liquidou seu débito. Qual o valor desse último pagamento?   Os esquemas de pagamento abaixo são equivalentes. Logo, 300 reais, na data 0, têm o mesmo valor de 150 reais dois meses após, mais um pagamento igual a , na data 3.  Esquemas de pagamento.   Portanto, trazendo todos os valores para o valor atual, ficamos com E resolvendo a equação, obtemos .      Pedro tem duas opções de pagamento na compra de um televisor:  três prestações mensais de R$ 160,00 cada;  sete prestações mensais de R$ 70,00 cada.  Em ambos os casos, a primeira prestação é paga no ato da compra. Se o dinheiro vale 2% ao mês para Pedro, qual a melhor opção que Pedro possui?   Para comparar, determinaremos o valor dos dois conjuntos de pagamentos na mesma época, por exemplo na época 2. Os esquemas de pagamentos são:  Esquemas de pagamento.   Para comparar, determinaremos o valor dos dois conjuntos de pagamentos na mesma época. Por exemplo, na época 0, temos, Pedro deve preferir o pagamento em sete prestações.  É um absurdo que muitas pessoas razoavelmente instruídas achem que o primeiro esquema é melhor pois o total pago é de R$ 480,00 ao passo que no segundo esquema o total pago é de R$ 490,00.  O cálculo dos valores de e podem ser conferidos no Sage da seguinte maneira:      Pedro tem três opções de pagamento na compra de vestuário.  à vista, com 30% de desconto;  em duas prestações mensais iguais, sem desconto, vencendo a primeira um mês após a compra;  em três prestações mensais iguais, sem desconto, vencendo a primeira no ato da compra.  Qual a melhor opção para Pedro, se o dinheiro vale, para ele, 25% ao mês?   Fixando o preço do bem em 30, temos os três esquemas abaixo  Esquemas de pagamento.   Comparando os valores, por exemplo, na época 0, obtemos: A melhor alternativa é a primeira e a pior é a terceira.  O cálculo dos valores de e podem ser conferidos no Sage da seguinte maneira:      Uma loja oferece duas opções de pagamento:  à vista, com 30% de desconto;  em duas prestações mensais iguais, sem desconto, a primeira prestação sendo paga no ato da compra.  Qual a taxa mensal dos juros embutidos nas vendas a prazo?   Fixando o valor do bem em 100, temos os esquemas de pagamentos abaixo:  Esquemas de pagamento.   Igualando os valores, por exemplo, na época 0 (a data usada nessas comparações é chamada de data focal ), obtemos Daí, . A loja cobra 150% ao mês nas vendas a prazo.  O cálculo dos valores de e podem ser conferidos no Sage da seguinte maneira:      Investindo seu capital a juros mensais de 8%, em quanto tempo você dobrará o seu capital inicial?   Temos . Daí     "
},
{
  "id": "definition-14",
  "level": "2",
  "url": "section-10.html#definition-14",
  "type": "Definição",
  "number": "5.1.1",
  "title": "",
  "body": " Alguém que dispõe de um capital (chamado de principal ), empresta-o a outrem por um certo período de tempo, e após esse período, recebe o seu capital de volta, acrescido de uma remuneração pelo empréstimo. Essa remuneração é chamada de juro . A soma é chamada de montante e será representada por . A razão que é a taxa de crescimento do capital, será sempre referida ao período da operação e chamada de taxa de juros .  "
},
{
  "id": "example-61",
  "level": "2",
  "url": "section-10.html#example-61",
  "type": "Exemplo",
  "number": "5.1.2",
  "title": "",
  "body": " Lúcia tomou um empréstimo de R$ 100,00. Dois meses após, pagou R$ 140,00. Quais foram os juros pagos, a taxa de juros e o montante pago por Lúcia?   Os juros pagos por Lúcia são de R$ 40,00 e a taxa de juros é de ao bimestre. O montante, que é a dívida na época do pagamento, é de R$ 140,00.   "
},
{
  "id": "teo-5.1",
  "level": "2",
  "url": "section-10.html#teo-5.1",
  "type": "Teorema",
  "number": "5.1.3",
  "title": "",
  "body": " No regime de juros compostos de taxa , um principal transforma-se, depois de períodos de tempo, em um montante .   Basta observar que os valores do capital crescem a uma taxa constante e, portanto, formam uma progressão geométrica de razão .   "
},
{
  "id": "example-62",
  "level": "2",
  "url": "section-10.html#example-62",
  "type": "Exemplo",
  "number": "5.1.4",
  "title": "",
  "body": " Pedro investe 150 reais a juros de ao mês. Qual será o montante de Pedro três meses depois? E qual o montante de Pedro 10 anos depois?     reais  reais. Isso pode ser calculado no Sage da seguinte maneira:      "
},
{
  "id": "remark-26",
  "level": "2",
  "url": "section-10.html#remark-26",
  "type": "Nota",
  "number": "5.1.5",
  "title": "",
  "body": " No fundo, só há um único problema de Matemática Financeira: deslocar quantias no tempo.  Outro modo de ler o , é que uma quantia, hoje igual a , transforma-se-á, depois de períodos de tempo, em uma quantia igual a . Isto é, uma quantia, cujo valor atual é , equivalerá no futuro, depois de períodos de tempo, a .  Essa é a fórmula fundamental da equivalência de capitais, para obter o valor futuro, basta multiplicar o atual por , e para obter o valor atual, sabendo o valor futuro, basta dividir o valor futuro por , ou seja:  ,     "
},
{
  "id": "example-63",
  "level": "2",
  "url": "section-10.html#example-63",
  "type": "Exemplo",
  "number": "5.1.6",
  "title": "",
  "body": " Pedro tomou um emprétimo de reais, a juros de ao mês. Dois meses após, Pedro pagou reais e, um mês após esse pagamento, Pedro liquidou seu débito. Qual o valor desse último pagamento?   Os esquemas de pagamento abaixo são equivalentes. Logo, 300 reais, na data 0, têm o mesmo valor de 150 reais dois meses após, mais um pagamento igual a , na data 3.  Esquemas de pagamento.   Portanto, trazendo todos os valores para o valor atual, ficamos com E resolvendo a equação, obtemos .    "
},
{
  "id": "example-64",
  "level": "2",
  "url": "section-10.html#example-64",
  "type": "Exemplo",
  "number": "5.1.8",
  "title": "",
  "body": " Pedro tem duas opções de pagamento na compra de um televisor:  três prestações mensais de R$ 160,00 cada;  sete prestações mensais de R$ 70,00 cada.  Em ambos os casos, a primeira prestação é paga no ato da compra. Se o dinheiro vale 2% ao mês para Pedro, qual a melhor opção que Pedro possui?   Para comparar, determinaremos o valor dos dois conjuntos de pagamentos na mesma época, por exemplo na época 2. Os esquemas de pagamentos são:  Esquemas de pagamento.   Para comparar, determinaremos o valor dos dois conjuntos de pagamentos na mesma época. Por exemplo, na época 0, temos, Pedro deve preferir o pagamento em sete prestações.  É um absurdo que muitas pessoas razoavelmente instruídas achem que o primeiro esquema é melhor pois o total pago é de R$ 480,00 ao passo que no segundo esquema o total pago é de R$ 490,00.  O cálculo dos valores de e podem ser conferidos no Sage da seguinte maneira:    "
},
{
  "id": "example-65",
  "level": "2",
  "url": "section-10.html#example-65",
  "type": "Exemplo",
  "number": "5.1.10",
  "title": "",
  "body": " Pedro tem três opções de pagamento na compra de vestuário.  à vista, com 30% de desconto;  em duas prestações mensais iguais, sem desconto, vencendo a primeira um mês após a compra;  em três prestações mensais iguais, sem desconto, vencendo a primeira no ato da compra.  Qual a melhor opção para Pedro, se o dinheiro vale, para ele, 25% ao mês?   Fixando o preço do bem em 30, temos os três esquemas abaixo  Esquemas de pagamento.   Comparando os valores, por exemplo, na época 0, obtemos: A melhor alternativa é a primeira e a pior é a terceira.  O cálculo dos valores de e podem ser conferidos no Sage da seguinte maneira:    "
},
{
  "id": "example-66",
  "level": "2",
  "url": "section-10.html#example-66",
  "type": "Exemplo",
  "number": "5.1.12",
  "title": "",
  "body": " Uma loja oferece duas opções de pagamento:  à vista, com 30% de desconto;  em duas prestações mensais iguais, sem desconto, a primeira prestação sendo paga no ato da compra.  Qual a taxa mensal dos juros embutidos nas vendas a prazo?   Fixando o valor do bem em 100, temos os esquemas de pagamentos abaixo:  Esquemas de pagamento.   Igualando os valores, por exemplo, na época 0 (a data usada nessas comparações é chamada de data focal ), obtemos Daí, . A loja cobra 150% ao mês nas vendas a prazo.  O cálculo dos valores de e podem ser conferidos no Sage da seguinte maneira:    "
},
{
  "id": "example-67",
  "level": "2",
  "url": "section-10.html#example-67",
  "type": "Exemplo",
  "number": "5.1.14",
  "title": "",
  "body": " Investindo seu capital a juros mensais de 8%, em quanto tempo você dobrará o seu capital inicial?   Temos . Daí    "
},
{
  "id": "section-11",
  "level": "1",
  "url": "section-11.html",
  "type": "Seção",
  "number": "5.2",
  "title": "A Fórmula das Taxas Equivalentes",
  "body": " A Fórmula das Taxas Equivalentes   Se a taxa de juros relativamente a um determinado período de tempo é igual a , a taxa de juros relativamente a períodos de tempo é , tal que, .    Se a taxa de juros ao mês é de 4%. Qual a taxa de juros anual?    Daí,     Um erro muito comum é achar que juros de 4% ao mês equivalem a juros anuais de ao ano.   Taxas como 4% ao mês e 48% ao ano são chamadas de taxas proporcionais , pois a razão entre elas é igual à razão dos períodos aos quais elas se referem.  Uma frase como \"48% ao ano, com capitalização mensal \" significa que a taxa usada na operação não é a taxa de 48% anunciada e sim uma taxa mensal que lhe é proporcional, ou seja, 4% ano mês.  A taxa de 48% ao ano é chamada de taxa nominal , enquanto que a taxa de 60% ao ano é chamada de taxa efetiva .    Verônica investe seu dinheiro a juros de 6% ao ano com capitalização mensal. Qual a taxa anual de juros à qual está investido o capital de Verônica?   O dinheiro de Verônica está investido a juros de taxa ao mês. A taxa anual equivalente é , tal que, . Daí, ao ano. A taxa de 6% ao ano é nominal e a taxa de 6,17% ao ano é efetiva.    "
},
{
  "id": "remark-27",
  "level": "2",
  "url": "section-11.html#remark-27",
  "type": "Nota",
  "number": "5.2.1",
  "title": "",
  "body": " Se a taxa de juros relativamente a um determinado período de tempo é igual a , a taxa de juros relativamente a períodos de tempo é , tal que, .  "
},
{
  "id": "example-68",
  "level": "2",
  "url": "section-11.html#example-68",
  "type": "Exemplo",
  "number": "5.2.2",
  "title": "",
  "body": " Se a taxa de juros ao mês é de 4%. Qual a taxa de juros anual?    Daí,    "
},
{
  "id": "definition-15",
  "level": "2",
  "url": "section-11.html#definition-15",
  "type": "Definição",
  "number": "5.2.3",
  "title": "",
  "body": " Taxas como 4% ao mês e 48% ao ano são chamadas de taxas proporcionais , pois a razão entre elas é igual à razão dos períodos aos quais elas se referem.  Uma frase como \"48% ao ano, com capitalização mensal \" significa que a taxa usada na operação não é a taxa de 48% anunciada e sim uma taxa mensal que lhe é proporcional, ou seja, 4% ano mês.  A taxa de 48% ao ano é chamada de taxa nominal , enquanto que a taxa de 60% ao ano é chamada de taxa efetiva .  "
},
{
  "id": "example-69",
  "level": "2",
  "url": "section-11.html#example-69",
  "type": "Exemplo",
  "number": "5.2.4",
  "title": "",
  "body": " Verônica investe seu dinheiro a juros de 6% ao ano com capitalização mensal. Qual a taxa anual de juros à qual está investido o capital de Verônica?   O dinheiro de Verônica está investido a juros de taxa ao mês. A taxa anual equivalente é , tal que, . Daí, ao ano. A taxa de 6% ao ano é nominal e a taxa de 6,17% ao ano é efetiva.   "
},
{
  "id": "section-12",
  "level": "1",
  "url": "section-12.html",
  "type": "Seção",
  "number": "5.3",
  "title": "Renda Perpétua (Séries Uniformes)",
  "body": " Renda Perpétua (Séries Uniformes)  Um conjunto de quantias (chamadas usualmente de pagamentos ou termos), referidas a épocas diversas, é chamada de série, ou de anuidade (apesar do nome, nada a ver com ano) ou, ainda, renda. Se esses pagamentos forem iguais e igualmente espaçados no tempo, a série é dita uniforme.   O valor de uma série uniforme de pagamentos iguais a , um tempo antes do primeiro pagamento, é, sendo a taxa de juros, igual a     Série uniforme.    O valor da série na época é que é a soma de termos de uma progressão geométrica. Logo,     O Corolário seguinte trata do valor de uma renda perpétua. Rendas perpétuas aparecem em locações. Com efeito, quando se aluga um bem, cede-se a posso do mesmo em troca de um aluguel, digamos, mensal. Então, o conjunto dos aluguéis constitui uma renda perpétua ou perpetuidade.   O valor de uma perpetuidade de termos iguais a , um tempo antes do primeiro pagamento, é, sendo a taxa de juros, igual a    Basta fazer tender para infinito no .     Um bem, cujo preço é R$ 120,00, é vendido em 8 prestações mensais iguais, a primeira sendo paga um mês após a compra. Se os juros são de 8% ao mês, determine o valor das prestações.   Um pequeno comentário: essas prestações são ditas postecipadas , pois a primeira prestação só é paga um tempo depois da compra.   Pagamento em 8 parcelas.    Igualando os valores na época (essa é a escolha natural da data de comparação: um tempo antes do primeiro termo da série), obtemos: As prestações são de R$ 20,88.     Um bem, cujo preço à vista é R$ 120,00, é vendido em 6 prestações mensais iguais, antecipadas (isto é, a primeira é paga no ato da compra). Se os juros são de 10% ao mês, determine o valor das prestações.   Igualando os valores na época (essa escolha, que pode parecer exótica, é muito conveniente pois dispomos de uma fórmula que calcula diretamente o valor da série nessa época), obtemos:      Se um imóvel vale 400 mil reais  Se o dinheiro vale 1% ao mês, por quanto deve ser alugado o imóvel?  Se o dinheiro vale 0,5% ao mês, por quanto deve ser alugado o imóvel?     Quando você aluga um imóvel, você cede a posso do imóvel em troca de uma renda perpétua cujos termos são iguais ao valor do aluguel. Então o valor do imóvel deve ser igual ao valor do conjunto dos aluguéis. De acordo com o .   item a)  Portanto,    item b)  Portanto,      Helena tem duas alternativas para obter uma copiadora:  Alugá-la por 35 reais ao ano. Nesse caso, o locador se responsabiliza pelas despesas de manutenção.  Comprá-la por 150 reais. Nesse caso, já que a vida econômica da copiadora é de 5 anos, Helena venderá a copiadora após 5 anos. O valor residual da copiadora após 5 anos é de 20 reais. As despesas de manutenção são de responsabilidade de Helena e são de 5 reais por ano, nos dois primeiros anos e de 8 reais por ano, nos anos seguintes.  Se o dinheiro vale 7% ao ano, qual a melhor opção?   Vamos tomar receitas como positivas e despesas como negativas. O fluxo de caixa de Helena na segunda alternativa é representado na .   Fluxo de caixa na segunda alternativa.    Vamos determinar o fluxo de caixa equivalente, representado na .   Fluxo uniforme equivalente.    Igualando os valores na época , obtemos Daí, . Comprar a copiadora é equivalente a ter um custo anual de 39,78 reais. Como o aluguel corresponde a um custo anual de 35 reais, a melhor alternativa para Helena é alugar.    "
},
{
  "id": "teo-5.2",
  "level": "2",
  "url": "section-12.html#teo-5.2",
  "type": "Teorema",
  "number": "5.3.1",
  "title": "",
  "body": " O valor de uma série uniforme de pagamentos iguais a , um tempo antes do primeiro pagamento, é, sendo a taxa de juros, igual a     Série uniforme.    O valor da série na época é que é a soma de termos de uma progressão geométrica. Logo,    "
},
{
  "id": "cor-5.3",
  "level": "2",
  "url": "section-12.html#cor-5.3",
  "type": "Corolário",
  "number": "5.3.3",
  "title": "",
  "body": " O valor de uma perpetuidade de termos iguais a , um tempo antes do primeiro pagamento, é, sendo a taxa de juros, igual a    Basta fazer tender para infinito no .   "
},
{
  "id": "example-70",
  "level": "2",
  "url": "section-12.html#example-70",
  "type": "Exemplo",
  "number": "5.3.4",
  "title": "",
  "body": " Um bem, cujo preço é R$ 120,00, é vendido em 8 prestações mensais iguais, a primeira sendo paga um mês após a compra. Se os juros são de 8% ao mês, determine o valor das prestações.   Um pequeno comentário: essas prestações são ditas postecipadas , pois a primeira prestação só é paga um tempo depois da compra.   Pagamento em 8 parcelas.    Igualando os valores na época (essa é a escolha natural da data de comparação: um tempo antes do primeiro termo da série), obtemos: As prestações são de R$ 20,88.   "
},
{
  "id": "example-71",
  "level": "2",
  "url": "section-12.html#example-71",
  "type": "Exemplo",
  "number": "5.3.6",
  "title": "",
  "body": " Um bem, cujo preço à vista é R$ 120,00, é vendido em 6 prestações mensais iguais, antecipadas (isto é, a primeira é paga no ato da compra). Se os juros são de 10% ao mês, determine o valor das prestações.   Igualando os valores na época (essa escolha, que pode parecer exótica, é muito conveniente pois dispomos de uma fórmula que calcula diretamente o valor da série nessa época), obtemos:    "
},
{
  "id": "example-72",
  "level": "2",
  "url": "section-12.html#example-72",
  "type": "Exemplo",
  "number": "5.3.7",
  "title": "",
  "body": " Se um imóvel vale 400 mil reais  Se o dinheiro vale 1% ao mês, por quanto deve ser alugado o imóvel?  Se o dinheiro vale 0,5% ao mês, por quanto deve ser alugado o imóvel?     Quando você aluga um imóvel, você cede a posso do imóvel em troca de uma renda perpétua cujos termos são iguais ao valor do aluguel. Então o valor do imóvel deve ser igual ao valor do conjunto dos aluguéis. De acordo com o .   item a)  Portanto,    item b)  Portanto,    "
},
{
  "id": "example-73",
  "level": "2",
  "url": "section-12.html#example-73",
  "type": "Exemplo",
  "number": "5.3.8",
  "title": "",
  "body": " Helena tem duas alternativas para obter uma copiadora:  Alugá-la por 35 reais ao ano. Nesse caso, o locador se responsabiliza pelas despesas de manutenção.  Comprá-la por 150 reais. Nesse caso, já que a vida econômica da copiadora é de 5 anos, Helena venderá a copiadora após 5 anos. O valor residual da copiadora após 5 anos é de 20 reais. As despesas de manutenção são de responsabilidade de Helena e são de 5 reais por ano, nos dois primeiros anos e de 8 reais por ano, nos anos seguintes.  Se o dinheiro vale 7% ao ano, qual a melhor opção?   Vamos tomar receitas como positivas e despesas como negativas. O fluxo de caixa de Helena na segunda alternativa é representado na .   Fluxo de caixa na segunda alternativa.    Vamos determinar o fluxo de caixa equivalente, representado na .   Fluxo uniforme equivalente.    Igualando os valores na época , obtemos Daí, . Comprar a copiadora é equivalente a ter um custo anual de 39,78 reais. Como o aluguel corresponde a um custo anual de 35 reais, a melhor alternativa para Helena é alugar.   "
},
{
  "id": "section-13",
  "level": "1",
  "url": "section-13.html",
  "type": "Seção",
  "number": "5.4",
  "title": "Sistemas de Amortização",
  "body": " Sistemas de Amortização  Quando um banco empresta dinheiro (crédito pessoal ou desconto de duplicatas), o tomador do empréstimo emite uma nota promissória, que é um papel no qual o tomador se compromete a pagar ao banco, em uma data fixada, uma certa quantia, que é chamada de valor de face da promissória.  O banco então desconta a promissória para o cliente, isto é, recebe a promissória de valor de face e entrega ao cliente uma quantia (menor que , naturalmente). A diferença é chamada de desconto.  Os bancos efetuam o desconto de acordo com a fórmula , onde é uma taxa fixada pelo banco e chamada de taxa de desconto bancário (ou taxa de desconto simples por fora) e é o prazo da operação, medido na unidade de tempo a que se refere a taxa.   Pedro desconta uma promissória de valor 100, com vencimento em 60 dias, em um banco cuja taxa de desconto é de 12% ao mês.  Quanto Pedro receberá?  Qual a taxa mensal de juros que Pedro está pagando?     item a) Ora, Logo, Pedro receberá agora 76, para pagar 100 em 60 dias.  item b) Se é a taxa mensal de juros à qual cresce a dívida de Pedro, temos . Daí, .  Observe que anunciar a taxa de desconto e não a taxa de juros é um modo sutil de fazer crer aos mais ingênuos estarem eles pagando juros menores que os que realmente lhes estão sendo cobrados.    Quando se paga parceladamente um débito, cada pagamento efetuado tem dupla finalidade. Uma parte do pagamento quita os juros e outra parte amortiza (abate) a dívida.   Pedro tomou um empréstimo de 100, a juros mensais de taxa 10%. Quitou-o em três meses, pagando a cada mês os juros devidos e amortizando 30% da dívida no primeiro mês e 30% e 40% nos dois meses seguintes.  Na planilha abaixo, e são, respectivamente, a parcela de amortização, a parcela de juros, a prestação e o estado da dívida (isto é, o valor da dívida após o pagamento da prestação) na época .             0  -  -  -  100    1  40  30  10  70    2  37  30  7  40    3  44  40  4  -     Para facilitar a compreensão, olhe cada linha na ordem e .   Os sistemas usuais de amortização são o sistema de amortização constante (SAC) e o sistema francês de amortização, também chamado de Tabela Price (Richard Price foi um economista inglês). O sistema francês é caracterizado por prestações constantes.   Uma dívida de 100 é paga, com juros de 15% ao mês, em 5 meses, pelo SAC. Faça a planilha de amortização.   Como as amortizações são iguais, cada amortização será de da dívida inicial. A planilha é, portanto:          No SAC, sendo o número de pagamentos e a taxa de juros, temos    Se a dívida é amortizada em quotas iguais, cada quota é igual a O estado da dívida, após amortizações, é As duas últimas fórmulas são óbvias.     Uma dívida de 150 é paga, em 4 meses, pelo sistema francês, com juros de 8% ao mês. Faça a planilha de amortização.   No sistema francês, as prestações são constantes. Pelo , cada prestação vale           No sistema francês de amortização, sendo o número de pagamentos e a taxa de juros, temos       A primeira fórmula é simplesmente o e as duas últimas fórmulas são óbvias. Quanto à segunda fórmula, observe que é a dívida que será liquidada, postecipadamente, por pagamentos sucessivos a . Portanto, novamente pelo , temos Substituindo o valor de , obtemos a segunda fórmula.     Em um mês cuja inflação foi de 25%, Paulo Jorge investiu seu capital a juros de 30% ao mês. Evidentemente, isso não significa que Paulo Jorge tenha aumentado seu poder de compra em 30%, pois, embora a quantidade de reais de Paulo Jorge tenha crescido 30%, o valor do real sofreu uma redução. Dizemos nesse caso que 30% ao mês é a taxa nominal de juros mensais de Paulo Jorge.  Suponhamos que, no início do referido mês, o capital de Paulo Jorge pudesse comprar artigos de preço unitário igual a . No fim do mês, o capital 1,3 e o preço unitário passou a ser 1,25 . Logo, Paulo Jorge poderá agora comprar O poder de compra de Paulo Jorge aumentou de 4% nesse mês.  Essa taxa de 4% ao mês, à qual cresceu o poder de compra de Paulo Jorge, é chamada de taxa real de juros .    Em algumas situações (prazos pequenos, juros de mora) são usados juros simples e não juros compostos. No regime de juros simples, os juros em cada época são calculados sobre o principal e não sobre o montante da época anterior. Por exemplo, um principal igual a 100, a juros simples de 10% ao mês evolui de acordo com a tabela abaixo:                         Não há dificuldade em calcular juros simples pois a taxa incide sempre sobre o capital inicial. No nosso exemplo, os juros são sempre de 10% de 100, ou seja, 10.  É claro então que, , o que faz com que os valores de formem uma progressão aritmética.   Comparando Juros.    Olhando para os gráficos de evolução de um mesmo principal a juros de taxa , a juros simples e a juros compostos, observamos que o montante a juros compostos é superior ao montante a juros simples, exceto se o prazo for menor que 1. É por isso que juros simples só são utilizados em cobranças de juros em prazos inferiores ao prazo ao qual se refere a taxa de juros combinada.   "
},
{
  "id": "example-74",
  "level": "2",
  "url": "section-13.html#example-74",
  "type": "Exemplo",
  "number": "5.4.1",
  "title": "",
  "body": " Pedro desconta uma promissória de valor 100, com vencimento em 60 dias, em um banco cuja taxa de desconto é de 12% ao mês.  Quanto Pedro receberá?  Qual a taxa mensal de juros que Pedro está pagando?     item a) Ora, Logo, Pedro receberá agora 76, para pagar 100 em 60 dias.  item b) Se é a taxa mensal de juros à qual cresce a dívida de Pedro, temos . Daí, .  Observe que anunciar a taxa de desconto e não a taxa de juros é um modo sutil de fazer crer aos mais ingênuos estarem eles pagando juros menores que os que realmente lhes estão sendo cobrados.   "
},
{
  "id": "example-75",
  "level": "2",
  "url": "section-13.html#example-75",
  "type": "Exemplo",
  "number": "5.4.2",
  "title": "",
  "body": " Pedro tomou um empréstimo de 100, a juros mensais de taxa 10%. Quitou-o em três meses, pagando a cada mês os juros devidos e amortizando 30% da dívida no primeiro mês e 30% e 40% nos dois meses seguintes.  Na planilha abaixo, e são, respectivamente, a parcela de amortização, a parcela de juros, a prestação e o estado da dívida (isto é, o valor da dívida após o pagamento da prestação) na época .             0  -  -  -  100    1  40  30  10  70    2  37  30  7  40    3  44  40  4  -     Para facilitar a compreensão, olhe cada linha na ordem e .  "
},
{
  "id": "example-76",
  "level": "2",
  "url": "section-13.html#example-76",
  "type": "Exemplo",
  "number": "5.4.4",
  "title": "",
  "body": " Uma dívida de 100 é paga, com juros de 15% ao mês, em 5 meses, pelo SAC. Faça a planilha de amortização.   Como as amortizações são iguais, cada amortização será de da dívida inicial. A planilha é, portanto:        "
},
{
  "id": "theorem-24",
  "level": "2",
  "url": "section-13.html#theorem-24",
  "type": "Teorema",
  "number": "5.4.7",
  "title": "",
  "body": " No SAC, sendo o número de pagamentos e a taxa de juros, temos    Se a dívida é amortizada em quotas iguais, cada quota é igual a O estado da dívida, após amortizações, é As duas últimas fórmulas são óbvias.   "
},
{
  "id": "example-77",
  "level": "2",
  "url": "section-13.html#example-77",
  "type": "Exemplo",
  "number": "5.4.8",
  "title": "",
  "body": " Uma dívida de 150 é paga, em 4 meses, pelo sistema francês, com juros de 8% ao mês. Faça a planilha de amortização.   No sistema francês, as prestações são constantes. Pelo , cada prestação vale         "
},
{
  "id": "theorem-25",
  "level": "2",
  "url": "section-13.html#theorem-25",
  "type": "Teorema",
  "number": "5.4.11",
  "title": "",
  "body": " No sistema francês de amortização, sendo o número de pagamentos e a taxa de juros, temos       A primeira fórmula é simplesmente o e as duas últimas fórmulas são óbvias. Quanto à segunda fórmula, observe que é a dívida que será liquidada, postecipadamente, por pagamentos sucessivos a . Portanto, novamente pelo , temos Substituindo o valor de , obtemos a segunda fórmula.   "
},
{
  "id": "example-78",
  "level": "2",
  "url": "section-13.html#example-78",
  "type": "Exemplo",
  "number": "5.4.12",
  "title": "",
  "body": " Em um mês cuja inflação foi de 25%, Paulo Jorge investiu seu capital a juros de 30% ao mês. Evidentemente, isso não significa que Paulo Jorge tenha aumentado seu poder de compra em 30%, pois, embora a quantidade de reais de Paulo Jorge tenha crescido 30%, o valor do real sofreu uma redução. Dizemos nesse caso que 30% ao mês é a taxa nominal de juros mensais de Paulo Jorge.  Suponhamos que, no início do referido mês, o capital de Paulo Jorge pudesse comprar artigos de preço unitário igual a . No fim do mês, o capital 1,3 e o preço unitário passou a ser 1,25 . Logo, Paulo Jorge poderá agora comprar O poder de compra de Paulo Jorge aumentou de 4% nesse mês.  Essa taxa de 4% ao mês, à qual cresceu o poder de compra de Paulo Jorge, é chamada de taxa real de juros .  "
},
{
  "id": "example-79",
  "level": "2",
  "url": "section-13.html#example-79",
  "type": "Exemplo",
  "number": "5.4.13",
  "title": "",
  "body": " Em algumas situações (prazos pequenos, juros de mora) são usados juros simples e não juros compostos. No regime de juros simples, os juros em cada época são calculados sobre o principal e não sobre o montante da época anterior. Por exemplo, um principal igual a 100, a juros simples de 10% ao mês evolui de acordo com a tabela abaixo:                         Não há dificuldade em calcular juros simples pois a taxa incide sempre sobre o capital inicial. No nosso exemplo, os juros são sempre de 10% de 100, ou seja, 10.  É claro então que, , o que faz com que os valores de formem uma progressão aritmética.   Comparando Juros.    Olhando para os gráficos de evolução de um mesmo principal a juros de taxa , a juros simples e a juros compostos, observamos que o montante a juros compostos é superior ao montante a juros simples, exceto se o prazo for menor que 1. É por isso que juros simples só são utilizados em cobranças de juros em prazos inferiores ao prazo ao qual se refere a taxa de juros combinada.  "
},
{
  "id": "section-14",
  "level": "1",
  "url": "section-14.html",
  "type": "Seção",
  "number": "6.1",
  "title": "Conjuntos",
  "body": " Conjuntos    Mostrar as principais definições da teoria dos conjuntos.  Mostrar os principais resultados da teoria dos conjuntos.     Em combinatória, estamos quase sempre contando o número de elementos de conjuntos ou número de subconjuntos com determinada propriedade. Por isso este material possui uma seção dedicado a este tópico.   Utilizamos o conceito de conjunto, como no ensino médio, como uma ideia de coleção. Uma noção completa com os axiomas da teoria dos conjuntos foge do propósito deste material. Para mais informações sobre a teoria dos conjuntos veja ou Teoria ingênua dos conjuntos .  A seguir há três notações básicas:  letras maiúsculas indicarão conjuntos. Ex.  a letra grega representará o conjunto universo .  letras minúsculas indicarão elementos dos conjuntos. Ex. .    A relação de pertencer será indicada pela letra grega e escrevemos por exemplo, . O conjunto vazio será representado pela letra . Um conjunto com um número reduzido de elementos será indicado simplesmente listando seus elementos. Por exemplo, o conjunto que consiste nos números e será representado por   Um conjunto também pode ser descrito por uma propriedade , comum a todos os seus elementos e escrevemos   Por exemplo, é o conjunto dos números inteiros e pares.   Usamos o símbolo para representar o número de elementos do conjunto , isto é, a cardinalidade de .    Se todo elemento de um conjunto é também elemento de um conjunto , dizemos que é subconjunto de e escrevemos simbolicamente . Se mas existe um elemento tal que , diremos que é um subconjunto próprio de B.    Sejam e dois conjuntos. e são chamados de conjuntos iguais quando todo elemento de pertence a e, reciprocamente, todo elemento de pertence a .  Isto é, e ; portanto, podemos escrever:   Para ilustrar definições, resultados e demonstrações da teoria de conjuntos, é muito comum usar uma representação gráfica chamada de diagrama de Venn .   Os diagramas de Venn consistem em curvas fechadas simples, tais como círculos ou ovais, desenhadas sobre um plano, de forma a simbolizar os conjuntos e permitir a representação das relações de pertinência entre conjuntos e seus elementos (por exemplo, )  Conjunto .   e relações de continência (inclusão) entre os conjuntos (por exemplo, ). Assim, duas curvas que não se tocam e estão uma no espaço interno da outra simbolizam conjuntos que possuem continência;  .       Sejam , ( ) conjuntos e o conjunto universo.   O conjunto união de e é o conjunto dos elementos que pertencem a ou a . Simbolicamente, Mais geralmente,  O conjunto interseção de e é o conjunto dos elementos que pertencem simultaneamente a e a . Simbolicamente, De forma geral,   Dizemos que e são disjuntos se . E dizemos que são disjuntos quando forem disjuntos dois a dois, ou seja,   O conjunto complementar de é o conjunto dos elementos de que não pertencem a . Simbolicamente   O conjunto diferença de e é o conjunto dos elementos que pertencem a e não pertencem a . Simbolicamente,   O produto cartesiano de por é o conjunto de pares ordenados , na qual e . Simbolicamente,   O conjunto das partes ou conjunto potência de é o conjunto de todos os subconjuntos de . Simbolicamente,      Sejam e conjuntos; então, valem as seguintes propriedades:         Demonstração do item 1:   O segundo pode ser demonstrado de forma análoga.    (Leis de Morgan) Sejam e conjuntos. São válidas as seguintes propriedades:          Vamos demonstrar a primeira destas propriedades. A outra é demonstrada de forma análoga. Usamos o fato de que , se, e somente se, e .  Seja , logo . Sendo assim, e . Portanto e , logo . Acabamos de mostrar que .  Considere , então e . Logo , e . Portanto, , sendo assim . Acabamos de mostrar que . Portanto     "
},
{
  "id": "dEf",
  "level": "2",
  "url": "section-14.html#dEf",
  "type": "Objetivos",
  "number": "6.1",
  "title": "",
  "body": "  Mostrar as principais definições da teoria dos conjuntos.  Mostrar os principais resultados da teoria dos conjuntos.   "
},
{
  "id": "p-357",
  "level": "2",
  "url": "section-14.html#p-357",
  "type": "Parágrafo (with a defined term)",
  "number": "",
  "title": "",
  "body": "Teoria ingênua dos conjuntos "
},
{
  "id": "definition-16",
  "level": "2",
  "url": "section-14.html#definition-16",
  "type": "Definição",
  "number": "6.1.1",
  "title": "",
  "body": " Usamos o símbolo para representar o número de elementos do conjunto , isto é, a cardinalidade de .  "
},
{
  "id": "definition-17",
  "level": "2",
  "url": "section-14.html#definition-17",
  "type": "Definição",
  "number": "6.1.2",
  "title": "",
  "body": " Se todo elemento de um conjunto é também elemento de um conjunto , dizemos que é subconjunto de e escrevemos simbolicamente . Se mas existe um elemento tal que , diremos que é um subconjunto próprio de B.  "
},
{
  "id": "definition-18",
  "level": "2",
  "url": "section-14.html#definition-18",
  "type": "Definição",
  "number": "6.1.3",
  "title": "",
  "body": " Sejam e dois conjuntos. e são chamados de conjuntos iguais quando todo elemento de pertence a e, reciprocamente, todo elemento de pertence a .  Isto é, e ; portanto, podemos escrever:  "
},
{
  "id": "venn",
  "level": "2",
  "url": "section-14.html#venn",
  "type": "Definição",
  "number": "6.1.4",
  "title": "",
  "body": " Os diagramas de Venn consistem em curvas fechadas simples, tais como círculos ou ovais, desenhadas sobre um plano, de forma a simbolizar os conjuntos e permitir a representação das relações de pertinência entre conjuntos e seus elementos (por exemplo, )  Conjunto .   e relações de continência (inclusão) entre os conjuntos (por exemplo, ). Assim, duas curvas que não se tocam e estão uma no espaço interno da outra simbolizam conjuntos que possuem continência;  .     "
},
{
  "id": "definition-20",
  "level": "2",
  "url": "section-14.html#definition-20",
  "type": "Definição",
  "number": "6.1.7",
  "title": "",
  "body": " Sejam , ( ) conjuntos e o conjunto universo.   O conjunto união de e é o conjunto dos elementos que pertencem a ou a . Simbolicamente, Mais geralmente,  O conjunto interseção de e é o conjunto dos elementos que pertencem simultaneamente a e a . Simbolicamente, De forma geral,   Dizemos que e são disjuntos se . E dizemos que são disjuntos quando forem disjuntos dois a dois, ou seja,   O conjunto complementar de é o conjunto dos elementos de que não pertencem a . Simbolicamente   O conjunto diferença de e é o conjunto dos elementos que pertencem a e não pertencem a . Simbolicamente,   O produto cartesiano de por é o conjunto de pares ordenados , na qual e . Simbolicamente,   O conjunto das partes ou conjunto potência de é o conjunto de todos os subconjuntos de . Simbolicamente,    "
},
{
  "id": "distributiva",
  "level": "2",
  "url": "section-14.html#distributiva",
  "type": "Teorema",
  "number": "6.1.8",
  "title": "",
  "body": " Sejam e conjuntos; então, valem as seguintes propriedades:       "
},
{
  "id": "proof-26",
  "level": "2",
  "url": "section-14.html#proof-26",
  "type": "Demonstração",
  "number": "6.1.1",
  "title": "",
  "body": " Demonstração do item 1:   O segundo pode ser demonstrado de forma análoga.  "
},
{
  "id": "morgan",
  "level": "2",
  "url": "section-14.html#morgan",
  "type": "Teorema",
  "number": "6.1.9",
  "title": "",
  "body": " (Leis de Morgan) Sejam e conjuntos. São válidas as seguintes propriedades:        "
},
{
  "id": "proof-27",
  "level": "2",
  "url": "section-14.html#proof-27",
  "type": "Demonstração",
  "number": "6.1.2",
  "title": "",
  "body": " Vamos demonstrar a primeira destas propriedades. A outra é demonstrada de forma análoga. Usamos o fato de que , se, e somente se, e .  Seja , logo . Sendo assim, e . Portanto e , logo . Acabamos de mostrar que .  Considere , então e . Logo , e . Portanto, , sendo assim . Acabamos de mostrar que . Portanto   "
},
{
  "id": "section-note-on-proofs",
  "level": "1",
  "url": "section-note-on-proofs.html",
  "type": "Seção",
  "number": "6.2",
  "title": "Princípio Aditivo e Princípio Multiplicativo",
  "body": " Princípio Aditivo e Princípio Multiplicativo    Definir o Princípio Aditivo.  Definir o Princípio Multiplicativo.  Exemplificar.      Princípio Aditivo   Suponha que na disciplina de análise combinatória existem três listas de exercício. A 1ª contém 15 exercícios, a 2ª contém 18 exercícios e a 3ª contém 14 exercícios. De quantas maneiras um estudante pode escolher um exercício para resolver?   O estudante têm 15 opções para escolher um exercício da primeira lista, 18 opções para escolher um exercício da segunda lista e 14 opções para escolher um exercício da terceira lista. Portanto o estudante têm maneiras de escolher um exercício.     (O Princípio Aditivo 1ª versão) Se uma tarefa puder ser feita de maneiras e uma segunda tarefa de maneiras e se essas tarefas não puderem ser feitas ao mesmo tempo; então, existem maneiras de fazer ambas as tarefas.    (O Princípio Aditivo 2ª versão) Sejam e conjuntos finitos e disjuntos, então    Sejam e as tarefas de escolher um elemento em e em , respectivamente. Existem maneiras de escolher um elemento em e maneiras de escolher um elemento em . Pelo Princípio Aditivo 1ª versão, como as tarefas não podem ser feitas ao mesmo tempo, o número de maneiras de escolher um elemento em cada um dos conjuntos é      Abaixo, clique em \"Evaluate (Sage)\" para obter a lista com todos os elementos da união dos conjuntos e .   O comando set(['a', 'b', 'c']) transforma a lista ['a', 'b', 'c'] em conjunto, ou seja, mesmo se tiverem elementos repetidos na lista, o método set remove as repetições e retorna um conjunto. Assim é possível usar métodos específicos para conjuntos, como união, interseção, diferença e diferença simétrica.     Princípio Multiplicativo   Quantos números naturais de três algarismos distintos (na base 10) existem?   O procedimento de escolher um número satisfazendo estas hipóteses pode ser quebrado em três tarefas.  A 1ª tarefa é escolher o primeiro dígito, (da esquerda para a direita) que pode ser feito de 9 maneiras, já que o zero não pode ser escolhido.  A 2ª tarefa é escolher o segundo dígito, que pode ser feito de 9 maneiras, pois não pode ser igual a escolha do primeiro dígito.  A 3ª tarefa é escolher o terceiro dígito, que pode ser feito de 8 maneiras, pois não pode ser igual aos dois primeiros dígitos.  A resposta é .     (O Princípio Multiplicativo 1ª versão) Suponha que um procedimento pode ser quebrado em duas tarefas. Se existem maneiras de executar a primeira tarefa e maneiras de executar a segunda tarefa, depois que a primeira tarefa estiver executada, então existem maneiras de executar o procedimento.     (Princípio Multiplicativo 2ª versão) Sejam e conjuntos finitos; então,   Note que a tarefa de escolher um elemento no produto cartesiano pode ser feita escolhendo um elemento em e um elemento em , do Princípio Multiplicativo 1ª versão temos      Abaixo, clique em \"Evaluate (Sage)\" para obter a lista com todos os elementos do produto cartesiano .     A placa dos automóveis eram formadas por 3 letras (K, Y e W inclusive) seguidas por quatro algarismos. Quantas placas podiam ser formadas?   Cada letra pode ser escolhida de 26 modos e cada algarismo de 10 modos distintos. A resposta é      Sejam e dois conjuntos com e .  Quantas são as funções ?  Quantas são as funções injetoras ?     Solução 1. Devemos escolher a imagem de cada elemento de . Existem modos de escolher a imagem do \"primeiro\" elemento de , modos de escolher a imagem do \"segundo\" elemento de  até modos de escolher a imagem do \"m-ésimo\" elemento de . Pelo princípio multiplicativo, temos 2. Primeiramente, para existir solução precisamos que , pois a função precisa ser injetora. Neste caso, existem modos de escolher a imagem do \"primeiro\" elemento de , modos de escolher a imagem do \"segundo\" elemento de  até modos de escolher a imagem do \"m-ésimo\" elemento de . A resposta é      Quantos são os números naturais pares que se escrevem (na base 10) com três algarismos distintos?   Já sabemos que o número total de números naturais com três algarismos distintos é Podemos contar dentre estes, os que são ímpares, a diferença será a resposta deste problema. O último algarismo pode ser escolhido de 5 maneiras (1, 3, 5, 7 ou 9). O primeiro algarismo pode ser escolhido de 8 maneiras (não pode ser o zero, nem o que foi escolhido para o último algarismo) e o segundo algarismo pode ser escolhido de 8 maneiras (nem pode ser igual ao primeiro nem ao último). Portanto a resposta é        Exercícios   Quantas palavras contendo 5 letras diferentes podem ser formadas com um alfabeto de 26 letras?   26×25×24×23×22=7893600   Para formar uma palavra, temos 26 opções para a primeira letra, 25 opções para a segunda letra, 24 opções para a terceira letra, 23 opções para a quarta letra e 22 opções para quinta e última letra. Pelo Princípio Multiplicativo a resposta é    Quantos são os gabaritos possíveis de um teste de 25 questões de múltipla-escolha, com cinco alternativas por questão?     Para cada questão, temos 5 opções. Como são 25 questões a resposta é    Quantos divisores naturais possui o número 600?     A fatoração em primos de número 600 é Os divisores naturais de 600 são os números da forma: . Portanto, temos quatro opções para o valor de , duas opções para o valor de e três opções para o valor de . Logo, a resposta é     Em uma banca há 7 exemplares iguais da revista A, 4 exemplares iguais da revista B e 15 exemplares igauis da revista C. Quantas coleções não vazias de revistas dessa banca é possível formar?     Vamos inicialmente contar de forma que seja possível obter uma coleção vazia, no final, essa possibilidade será excluída do total para obtermos a resposta.  Como exitem 7 exemplares da revista A, podemos escolher de 0 até 7 exemplares para incluir na coleção, totalizando 8 possibilidades. Como existem 4 exemplares da revista B, podemos escolher de 0 até 4 exemplares para incluir na coleção, totalizando 5 possibilidades. Por último, como existem 15 exemplares da revista C, podemos escolher de 0 até 15 exemplares para incluir na coleção, totalizando 16 possibilidades.  A única maneira de escolher os exemplares, de modo que a coleção fique vazia é escolhendo 0 exemplares de cada revista. Portanto a resposta é     Quantos números inteiros entre 1000 e 9999 são ímpares e possuem quatro dígitos distintos?      Vamos começar escolhendo o dígito das unidades. O dígito das unidades pode ser qualquer um dos elementos do conjunto: , ou seja, temos 5 opções. Agora, vamos escolher o primeiro dígito, da esquerda para a direita. O primeiro dígito nem pode ser igual ao dígito das unidades, nem pode ser zero, portanto, temos 8 opções para escolhe-lo. Para escolher o segundo dígito, temos 8 opções, pois ele nem pode ser igual ao primeiro dígito, nem igual ao último. Finalmente, para escolher o terceiro dígito temos 7 opções, pois 3 dígitos já foram escolhidos. Pelo princípio multiplicativo, a resposta é     Um restaurante apresenta um cardápio popular, onde o cliente escolhe uma salada (dentre salada verde, salada russa ou salpicão), um prato principal (bife com fritas, peixe com purê, frango com legumes ou lasanha) e uma sobremesa (salada de frutas, pudim ou doce de leite). Quantas são as possíveis refeições?      Temos 3 opções para a salada, 4 opções para a prato principal e 3 opções para a sobremesa. Portanto a resposta é     (UPE Seriado 2013 corrigido) Para efetuar saques, pagamentos, transferências e outras movimentações, os clientes do Banco Money precisam digitar uma senha numérica de sete dígitos que corresponde a uma senha formada por quatro algarismos e, em seguida, um código de acesso, também numérico, formado por três algarismos. Os clientes são orientados a não criar senhas iniciadas com zero nem códigos de acesso com algarismos repetidos, como no exemplo a seguir:   Dessa forma, quantas senhas numéricas distintas podem ser criadas pelos clientes do Banco Money?  a) 1,64 milhões b) 3,62 milhões c) 5,16 milhões d) 6,48 milhões e) 9,80 milhões   d)   O primeiro algarismo da Senha pode ser escolhido de 9 maneiras, o segundo, o terceiro e o quarto, podem ser escolhidos de 10 maneiras cada um.  O primeiro algarismo do Código de Acesso pode ser escolhido de 10 maneiras, o segundo de 9 maneiras e o terceiro de 8 maneiras. Portanto a resposta é:     (PROFMAT 2015) De um baralho comum de 52 cartas são retiradas, em sequência e sem reposição, duas cartas. De quantos modos isso pode ser feito de maneira que a primeira carta seja de ouros e a segunda carta não seja uma dama? Informação: Um baralho de 52 cartas tem 4 naipes: copas, espadas, ouros e paus. Cada naipe possui 13 cartas: A(ás), 2, 3, 4, 5, 6, 7, 8, 9, 10, J(valete), Q(dama) e K(rei). Portanto há 4 reis, 4 damas, 4 valetes, 4 ases, etc.  a) 611 b) 612 c) 624 d) 625 e) 637   b)   Vamos separar em dois casos.  1º caso: a primeira carta é uma dama de ouros. Nesse caso, a primeira carta já está determinada. Para a segunda carta sobraram 51 opções, mas não queremos que ela seja uma dama, como ainda retam 3 damas o total de opções é .  2º caso: a primeira carta não é uma dama de ouros. Nesse caso, temos 12 opções para a primeira carta, pois ela precisa ser de ouros, sem ser dama. Para a segunda carta sobraram 51 opções, mas não queremos que seja uma dama, o total de opções é .  Pelos princípios aditivo e multiplicativo a resposta é   (OBM 2004 - 2ª fase do nível 1) De quantos modos podemos sombrear quatro casas do tabuleiro de modo que em cada linha e em cada coluna exista uma única casa sombreada?      Para a primeira linha, temos 4 opções. Para a segunda linha, temos 3 opções, pois não podemos sombrear na mesma coluna que já foi sombrado na linha 1. Na terceira linha, temos 2 opções, e finalmente, na última linha temos apenas uma opções. A resposta é    (OBM 2005 - 2ª fase do nível 1) Lara tem cubos iguais e quer pintá-los de maneiras diferentes, utilizando as cores laranja ou azul para colorir cada uma de suas faces. Para que dois cubos não se confundam, não deve ser possível girar um deles de forma que fique idêntico ao outro. Por exemplo, há uma única maneira de pintar o cubo com uma face laranja e cinco azuis. Quantos cubos pintados de modos diferentes ela consegue obter?      Para 0 faces azuis e 6 laranjas, Lara só tem uma maneira de pintar os cubos.  Para 1 face azul e 5 laranjas, Lara só tem uma maneira de pintar os cubos.  Para 2 faces azuis e 4 laranjas, Lara tem duas maneiras de pintar os cubos, duas faces azuis opostas, ou duas adjacentes.  Para 3 faces azuis e 3 laranjas, Lara tem duas maneiras de pintar os cubos, três faces azuis com um vértice em comum, ou três faces azuis com uma aresta em comum, duas a duas.  Para 4 faces azuis e 2 laranjas, Lara tem duas maneiras de pintar os cubos, duas faces laranjas opostas, ou duas adjacentes.  Para 5 faces azuis e 1 laranja, Lara só tem uma maneira de pintar os cubos.  Para 6 faces azuis e 0 laranjas, Lara só tem uma maneira de pintar os cubos.  Pelo princípio aditivo, a resposta é     (FUVEST 2015 - 2ª fase) Um “alfabeto minimalista” é constituído por apenas dois símbolos, representados por e . Uma palavra de comprimento , é formada por escolhas sucessivas de um desses dois símbolos. Por exemplo, é uma palavra de comprimento e é uma palavra de comprimento . Usando esse alfabeto minimalista,   quantas palavras de comprimento menor do que podem ser formadas?  qual é o menor valor de para o qual é possível formar de palavras de tamanho menor ou igual a ?    a) b) .   item a) O número de palavras de comprimento menor que 6 é   item b) Precisamos descobrir o menor valor de para que Usando a fórmula da soma da PG, temos Como e concluímos que o menor valor de é .    "
},
{
  "id": "dEf",
  "level": "2",
  "url": "section-note-on-proofs.html#dEf",
  "type": "Objetivos",
  "number": "6.2",
  "title": "",
  "body": "  Definir o Princípio Aditivo.  Definir o Princípio Multiplicativo.  Exemplificar.   "
},
{
  "id": "example-80",
  "level": "2",
  "url": "section-note-on-proofs.html#example-80",
  "type": "Exemplo",
  "number": "6.2.1",
  "title": "",
  "body": " Suponha que na disciplina de análise combinatória existem três listas de exercício. A 1ª contém 15 exercícios, a 2ª contém 18 exercícios e a 3ª contém 14 exercícios. De quantas maneiras um estudante pode escolher um exercício para resolver?   O estudante têm 15 opções para escolher um exercício da primeira lista, 18 opções para escolher um exercício da segunda lista e 14 opções para escolher um exercício da terceira lista. Portanto o estudante têm maneiras de escolher um exercício.   "
},
{
  "id": "definition-21",
  "level": "2",
  "url": "section-note-on-proofs.html#definition-21",
  "type": "Definição",
  "number": "6.2.2",
  "title": "",
  "body": " (O Princípio Aditivo 1ª versão) Se uma tarefa puder ser feita de maneiras e uma segunda tarefa de maneiras e se essas tarefas não puderem ser feitas ao mesmo tempo; então, existem maneiras de fazer ambas as tarefas.  "
},
{
  "id": "theorem-28",
  "level": "2",
  "url": "section-note-on-proofs.html#theorem-28",
  "type": "Teorema",
  "number": "6.2.3",
  "title": "",
  "body": " (O Princípio Aditivo 2ª versão) Sejam e conjuntos finitos e disjuntos, então    Sejam e as tarefas de escolher um elemento em e em , respectivamente. Existem maneiras de escolher um elemento em e maneiras de escolher um elemento em . Pelo Princípio Aditivo 1ª versão, como as tarefas não podem ser feitas ao mesmo tempo, o número de maneiras de escolher um elemento em cada um dos conjuntos é    "
},
{
  "id": "technology-3",
  "level": "2",
  "url": "section-note-on-proofs.html#technology-3",
  "type": "Tecnologia",
  "number": "6.2.4",
  "title": "",
  "body": " Abaixo, clique em \"Evaluate (Sage)\" para obter a lista com todos os elementos da união dos conjuntos e .   O comando set(['a', 'b', 'c']) transforma a lista ['a', 'b', 'c'] em conjunto, ou seja, mesmo se tiverem elementos repetidos na lista, o método set remove as repetições e retorna um conjunto. Assim é possível usar métodos específicos para conjuntos, como união, interseção, diferença e diferença simétrica.  "
},
{
  "id": "example-81",
  "level": "2",
  "url": "section-note-on-proofs.html#example-81",
  "type": "Exemplo",
  "number": "6.2.5",
  "title": "",
  "body": " Quantos números naturais de três algarismos distintos (na base 10) existem?   O procedimento de escolher um número satisfazendo estas hipóteses pode ser quebrado em três tarefas.  A 1ª tarefa é escolher o primeiro dígito, (da esquerda para a direita) que pode ser feito de 9 maneiras, já que o zero não pode ser escolhido.  A 2ª tarefa é escolher o segundo dígito, que pode ser feito de 9 maneiras, pois não pode ser igual a escolha do primeiro dígito.  A 3ª tarefa é escolher o terceiro dígito, que pode ser feito de 8 maneiras, pois não pode ser igual aos dois primeiros dígitos.  A resposta é .   "
},
{
  "id": "definition-22",
  "level": "2",
  "url": "section-note-on-proofs.html#definition-22",
  "type": "Definição",
  "number": "6.2.6",
  "title": "",
  "body": " (O Princípio Multiplicativo 1ª versão) Suponha que um procedimento pode ser quebrado em duas tarefas. Se existem maneiras de executar a primeira tarefa e maneiras de executar a segunda tarefa, depois que a primeira tarefa estiver executada, então existem maneiras de executar o procedimento.  "
},
{
  "id": "theorem-29",
  "level": "2",
  "url": "section-note-on-proofs.html#theorem-29",
  "type": "Teorema",
  "number": "6.2.7",
  "title": "",
  "body": "  (Princípio Multiplicativo 2ª versão) Sejam e conjuntos finitos; então,   Note que a tarefa de escolher um elemento no produto cartesiano pode ser feita escolhendo um elemento em e um elemento em , do Princípio Multiplicativo 1ª versão temos    "
},
{
  "id": "technology-4",
  "level": "2",
  "url": "section-note-on-proofs.html#technology-4",
  "type": "Tecnologia",
  "number": "6.2.8",
  "title": "",
  "body": " Abaixo, clique em \"Evaluate (Sage)\" para obter a lista com todos os elementos do produto cartesiano .   "
},
{
  "id": "example-82",
  "level": "2",
  "url": "section-note-on-proofs.html#example-82",
  "type": "Exemplo",
  "number": "6.2.9",
  "title": "",
  "body": " A placa dos automóveis eram formadas por 3 letras (K, Y e W inclusive) seguidas por quatro algarismos. Quantas placas podiam ser formadas?   Cada letra pode ser escolhida de 26 modos e cada algarismo de 10 modos distintos. A resposta é    "
},
{
  "id": "example-83",
  "level": "2",
  "url": "section-note-on-proofs.html#example-83",
  "type": "Exemplo",
  "number": "6.2.10",
  "title": "",
  "body": " Sejam e dois conjuntos com e .  Quantas são as funções ?  Quantas são as funções injetoras ?     Solução 1. Devemos escolher a imagem de cada elemento de . Existem modos de escolher a imagem do \"primeiro\" elemento de , modos de escolher a imagem do \"segundo\" elemento de  até modos de escolher a imagem do \"m-ésimo\" elemento de . Pelo princípio multiplicativo, temos 2. Primeiramente, para existir solução precisamos que , pois a função precisa ser injetora. Neste caso, existem modos de escolher a imagem do \"primeiro\" elemento de , modos de escolher a imagem do \"segundo\" elemento de  até modos de escolher a imagem do \"m-ésimo\" elemento de . A resposta é    "
},
{
  "id": "example-84",
  "level": "2",
  "url": "section-note-on-proofs.html#example-84",
  "type": "Exemplo",
  "number": "6.2.11",
  "title": "",
  "body": " Quantos são os números naturais pares que se escrevem (na base 10) com três algarismos distintos?   Já sabemos que o número total de números naturais com três algarismos distintos é Podemos contar dentre estes, os que são ímpares, a diferença será a resposta deste problema. O último algarismo pode ser escolhido de 5 maneiras (1, 3, 5, 7 ou 9). O primeiro algarismo pode ser escolhido de 8 maneiras (não pode ser o zero, nem o que foi escolhido para o último algarismo) e o segundo algarismo pode ser escolhido de 8 maneiras (nem pode ser igual ao primeiro nem ao último). Portanto a resposta é     "
},
{
  "id": "exercise-1",
  "level": "2",
  "url": "section-note-on-proofs.html#exercise-1",
  "type": "Exercício",
  "number": "6.2.3.1",
  "title": "",
  "body": " Quantas palavras contendo 5 letras diferentes podem ser formadas com um alfabeto de 26 letras?   26×25×24×23×22=7893600   Para formar uma palavra, temos 26 opções para a primeira letra, 25 opções para a segunda letra, 24 opções para a terceira letra, 23 opções para a quarta letra e 22 opções para quinta e última letra. Pelo Princípio Multiplicativo a resposta é  "
},
{
  "id": "exercise-2",
  "level": "2",
  "url": "section-note-on-proofs.html#exercise-2",
  "type": "Exercício",
  "number": "6.2.3.2",
  "title": "",
  "body": " Quantos são os gabaritos possíveis de um teste de 25 questões de múltipla-escolha, com cinco alternativas por questão?     Para cada questão, temos 5 opções. Como são 25 questões a resposta é  "
},
{
  "id": "exercise-3",
  "level": "2",
  "url": "section-note-on-proofs.html#exercise-3",
  "type": "Exercício",
  "number": "6.2.3.3",
  "title": "",
  "body": " Quantos divisores naturais possui o número 600?     A fatoração em primos de número 600 é Os divisores naturais de 600 são os números da forma: . Portanto, temos quatro opções para o valor de , duas opções para o valor de e três opções para o valor de . Logo, a resposta é   "
},
{
  "id": "exercise-4",
  "level": "2",
  "url": "section-note-on-proofs.html#exercise-4",
  "type": "Exercício",
  "number": "6.2.3.4",
  "title": "",
  "body": " Em uma banca há 7 exemplares iguais da revista A, 4 exemplares iguais da revista B e 15 exemplares igauis da revista C. Quantas coleções não vazias de revistas dessa banca é possível formar?     Vamos inicialmente contar de forma que seja possível obter uma coleção vazia, no final, essa possibilidade será excluída do total para obtermos a resposta.  Como exitem 7 exemplares da revista A, podemos escolher de 0 até 7 exemplares para incluir na coleção, totalizando 8 possibilidades. Como existem 4 exemplares da revista B, podemos escolher de 0 até 4 exemplares para incluir na coleção, totalizando 5 possibilidades. Por último, como existem 15 exemplares da revista C, podemos escolher de 0 até 15 exemplares para incluir na coleção, totalizando 16 possibilidades.  A única maneira de escolher os exemplares, de modo que a coleção fique vazia é escolhendo 0 exemplares de cada revista. Portanto a resposta é   "
},
{
  "id": "exercise-5",
  "level": "2",
  "url": "section-note-on-proofs.html#exercise-5",
  "type": "Exercício",
  "number": "6.2.3.5",
  "title": "",
  "body": " Quantos números inteiros entre 1000 e 9999 são ímpares e possuem quatro dígitos distintos?      Vamos começar escolhendo o dígito das unidades. O dígito das unidades pode ser qualquer um dos elementos do conjunto: , ou seja, temos 5 opções. Agora, vamos escolher o primeiro dígito, da esquerda para a direita. O primeiro dígito nem pode ser igual ao dígito das unidades, nem pode ser zero, portanto, temos 8 opções para escolhe-lo. Para escolher o segundo dígito, temos 8 opções, pois ele nem pode ser igual ao primeiro dígito, nem igual ao último. Finalmente, para escolher o terceiro dígito temos 7 opções, pois 3 dígitos já foram escolhidos. Pelo princípio multiplicativo, a resposta é   "
},
{
  "id": "exercise-6",
  "level": "2",
  "url": "section-note-on-proofs.html#exercise-6",
  "type": "Exercício",
  "number": "6.2.3.6",
  "title": "",
  "body": " Um restaurante apresenta um cardápio popular, onde o cliente escolhe uma salada (dentre salada verde, salada russa ou salpicão), um prato principal (bife com fritas, peixe com purê, frango com legumes ou lasanha) e uma sobremesa (salada de frutas, pudim ou doce de leite). Quantas são as possíveis refeições?      Temos 3 opções para a salada, 4 opções para a prato principal e 3 opções para a sobremesa. Portanto a resposta é   "
},
{
  "id": "exercise-7",
  "level": "2",
  "url": "section-note-on-proofs.html#exercise-7",
  "type": "Exercício",
  "number": "6.2.3.7",
  "title": "",
  "body": " (UPE Seriado 2013 corrigido) Para efetuar saques, pagamentos, transferências e outras movimentações, os clientes do Banco Money precisam digitar uma senha numérica de sete dígitos que corresponde a uma senha formada por quatro algarismos e, em seguida, um código de acesso, também numérico, formado por três algarismos. Os clientes são orientados a não criar senhas iniciadas com zero nem códigos de acesso com algarismos repetidos, como no exemplo a seguir:   Dessa forma, quantas senhas numéricas distintas podem ser criadas pelos clientes do Banco Money?  a) 1,64 milhões b) 3,62 milhões c) 5,16 milhões d) 6,48 milhões e) 9,80 milhões   d)   O primeiro algarismo da Senha pode ser escolhido de 9 maneiras, o segundo, o terceiro e o quarto, podem ser escolhidos de 10 maneiras cada um.  O primeiro algarismo do Código de Acesso pode ser escolhido de 10 maneiras, o segundo de 9 maneiras e o terceiro de 8 maneiras. Portanto a resposta é:   "
},
{
  "id": "exercise-8",
  "level": "2",
  "url": "section-note-on-proofs.html#exercise-8",
  "type": "Exercício",
  "number": "6.2.3.8",
  "title": "",
  "body": " (PROFMAT 2015) De um baralho comum de 52 cartas são retiradas, em sequência e sem reposição, duas cartas. De quantos modos isso pode ser feito de maneira que a primeira carta seja de ouros e a segunda carta não seja uma dama? Informação: Um baralho de 52 cartas tem 4 naipes: copas, espadas, ouros e paus. Cada naipe possui 13 cartas: A(ás), 2, 3, 4, 5, 6, 7, 8, 9, 10, J(valete), Q(dama) e K(rei). Portanto há 4 reis, 4 damas, 4 valetes, 4 ases, etc.  a) 611 b) 612 c) 624 d) 625 e) 637   b)   Vamos separar em dois casos.  1º caso: a primeira carta é uma dama de ouros. Nesse caso, a primeira carta já está determinada. Para a segunda carta sobraram 51 opções, mas não queremos que ela seja uma dama, como ainda retam 3 damas o total de opções é .  2º caso: a primeira carta não é uma dama de ouros. Nesse caso, temos 12 opções para a primeira carta, pois ela precisa ser de ouros, sem ser dama. Para a segunda carta sobraram 51 opções, mas não queremos que seja uma dama, o total de opções é .  Pelos princípios aditivo e multiplicativo a resposta é  "
},
{
  "id": "exercise-9",
  "level": "2",
  "url": "section-note-on-proofs.html#exercise-9",
  "type": "Exercício",
  "number": "6.2.3.9",
  "title": "",
  "body": "(OBM 2004 - 2ª fase do nível 1) De quantos modos podemos sombrear quatro casas do tabuleiro de modo que em cada linha e em cada coluna exista uma única casa sombreada?      Para a primeira linha, temos 4 opções. Para a segunda linha, temos 3 opções, pois não podemos sombrear na mesma coluna que já foi sombrado na linha 1. Na terceira linha, temos 2 opções, e finalmente, na última linha temos apenas uma opções. A resposta é   "
},
{
  "id": "exercise-10",
  "level": "2",
  "url": "section-note-on-proofs.html#exercise-10",
  "type": "Exercício",
  "number": "6.2.3.10",
  "title": "",
  "body": "(OBM 2005 - 2ª fase do nível 1) Lara tem cubos iguais e quer pintá-los de maneiras diferentes, utilizando as cores laranja ou azul para colorir cada uma de suas faces. Para que dois cubos não se confundam, não deve ser possível girar um deles de forma que fique idêntico ao outro. Por exemplo, há uma única maneira de pintar o cubo com uma face laranja e cinco azuis. Quantos cubos pintados de modos diferentes ela consegue obter?      Para 0 faces azuis e 6 laranjas, Lara só tem uma maneira de pintar os cubos.  Para 1 face azul e 5 laranjas, Lara só tem uma maneira de pintar os cubos.  Para 2 faces azuis e 4 laranjas, Lara tem duas maneiras de pintar os cubos, duas faces azuis opostas, ou duas adjacentes.  Para 3 faces azuis e 3 laranjas, Lara tem duas maneiras de pintar os cubos, três faces azuis com um vértice em comum, ou três faces azuis com uma aresta em comum, duas a duas.  Para 4 faces azuis e 2 laranjas, Lara tem duas maneiras de pintar os cubos, duas faces laranjas opostas, ou duas adjacentes.  Para 5 faces azuis e 1 laranja, Lara só tem uma maneira de pintar os cubos.  Para 6 faces azuis e 0 laranjas, Lara só tem uma maneira de pintar os cubos.  Pelo princípio aditivo, a resposta é  "
},
{
  "id": "exercise-11",
  "level": "2",
  "url": "section-note-on-proofs.html#exercise-11",
  "type": "Exercício",
  "number": "6.2.3.11",
  "title": "",
  "body": " (FUVEST 2015 - 2ª fase) Um “alfabeto minimalista” é constituído por apenas dois símbolos, representados por e . Uma palavra de comprimento , é formada por escolhas sucessivas de um desses dois símbolos. Por exemplo, é uma palavra de comprimento e é uma palavra de comprimento . Usando esse alfabeto minimalista,   quantas palavras de comprimento menor do que podem ser formadas?  qual é o menor valor de para o qual é possível formar de palavras de tamanho menor ou igual a ?    a) b) .   item a) O número de palavras de comprimento menor que 6 é   item b) Precisamos descobrir o menor valor de para que Usando a fórmula da soma da PG, temos Como e concluímos que o menor valor de é .  "
},
{
  "id": "section-permutacoes-simples",
  "level": "1",
  "url": "section-permutacoes-simples.html",
  "type": "Seção",
  "number": "6.3",
  "title": "Permutações Simples",
  "body": " Permutações Simples    Nota histórica  Definir Permutação Simples.  Mostrar como obter a lista com todas as permutações de elementos distintos no Sage.  Mostrar como calcular o número de permutações com elementos distintos.  Exemplificar.     Nota Histórica  Al-Khalil (717-786), um matemático e criptógrafo árabe, escreveu o Livro de Mensagens Criptográficas. Ele contém o primeiro uso de permutações e combinações, para listar todas as palavras árabes possíveis com e sem vogais.  A regra para determinar o número de permutações de objetos era conhecida na cultura indiana por volta de 1150. O Līlāvatī, do matemático indiano Bhāskarācārya (Bhaskara II), contém uma passagem que se traduz em:  O produto da multiplicação da série aritmética começando e aumentando pela unidade e continuando até o número de casas, serão as variações do número com algarismos específicos.   Fonte: en.wikipedia.org\/wiki\/Permutation .    Permutações Simples   Permutar uma lista de objetos é mudar a ordem em que eles estavam. O número de permutações de objetos distintos , é o número total de maneiras de ordenar estes objetos.  Para descrever, o número de permutações de objetos distintos, usamos as notações:     Todas as permutações dos elementos :   Observe que é uma das permutações possíveis, pois essa é uma das formas de ordenar os elementos . Portanto,    Abaixo, clique em \"Evaluate (Sage)\" para obter a lista com todas as permutações dos elementos: 1, 2, 3, 4.   Os números podem ser alterados, ao executar o código, a lista das permutações será atualizada.     O número de permutações de objetos distintos é    Pelo princípio multiplicativo, temos modos de escolher o elemento que ocupará o primeiro lugar, uma vez tomada essa decisão, teremos modos de escolher o elemento que ocupará o segundo lugar, e assim por diante, até que haja apenas um único modo de escolher o elemento que ocupará o último lugar. Portanto    O fatorial de um número natural é denotado por e consiste na multiplicação desse número por seus antecessores, com exceção do zero. Ou seja    Para calcular no Sage, usamos a função fatorial: . Definimos apenas para abreviar, confira o cálculo de apertando no botão \"Evaluate (Sage)\".   Uma vez definida a função , podemos combiná-la com outras operações já definidas no Sage. Veja na próxima célula o cálculo de :     Um anagrama é uma palavra ou expressão elaborada usando exatamente as mesmas letras que a palavra ou expressão original. Por exemplo, a palavra ROMA é um anagrama da palavra AMOR e vice-versa.  Nos dicionários, um anagrama é a transposição das letras de uma palavra (ou frase) para formar outra palavra (ou frase). Observe que pela definição do dicionário, só seria contado os casos em que a permutação das letras formassem outra palavra (ou frase). No entanto, em matemática, qualquer permutação das letras de uma palavra é considerado como anagrama.    Quantos são os anagramas da palavra SAGE?   A palavra SAGE possui quatro letras distintas, logo, o número de anagramas da palavra SAGE é      Quantos são os anagramas da palavra XADREZ que começam e terminam por consoante?   A consoante inicial pode ser escolhida de maneiras, uma vez feita essa escolha, a consoante final pode ser escolhida de maneiras. Restam quatro letras que podem ser ordenadas de maneiras. Pelo Princípio Multiplicativo, a resposta é       De quantos modos podemos dividir pessoas em três grupos de quatro pessoas cada?   Podemos ordenar as pessoas em uma fila. O primeiro grupo será formado pelas primeiras pessoas, o segundo grupo, pelas pessoas seguintes e o terceiro grupo pelas quatro últimas pessoas. O número de maneiras de ordenar as pessoas é . Dessa forma, cada grupo esta sendo contado vezes, por exemplo, representam o mesmo grupo. Logo, precisamos dividir por , já que são grupos.  Por fim, note que a ordem dos grupos não importa, como são maneiras de ordenar os grupos, dividindo por , obtemos a resposta       Permutam-se de todos os modos possíveis os algarismos e escrevem-se os números assim formados em ordem crescente.   Que lugar ocupa o número ?  Qual o número que ocupa o lugar?    item a.  Como os números foram escritos em ordem crescente, os que começam com e aparecem antes do número . Existem números que começam com cada um destes algarismos, ou seja números.  Existem números que começam com , e a mesma quantidade que começam com , ou seja números.  Existem números que começam com .  O próximo número já que o que queremos. Portanto, a resposta é  item b.  Começando com e temos um total de números. Se considerarmos também, todos que começam com , teremos mais números, ultrapassando a posição .  Já sabemos que o número que ocupa a posição começa com o algarismo e que o primeiro número com o algarismo ocupa a posição . Precisamos encontrar o número que começa com o algarismo e está na posição , dentre estes números que começam com .  Começando com e , são números. Dessa forma, o número seguinte está na posição , dentre os que começam com o algarismo . Assim, o número está na posição e o número está na posição .  (Usando o Sage)  Quando calculamos todas as permutações no Sage, a saída é exibida em ordem crescente. Como as listas no Sage começam a ser contadas a partir do zero , podemos consultar a permutação de posição 500 com o comando abaixo:      Implementação em Sage para verificar respostas de problemas como o .  Escolha os dígitos que serão permutados e escreva como um número, em seguida, escolha outro número para obter o lugar ocupado por ele.      Escolha os dígitos que serão permutados e escreva como um número, em seguida, escolha a posição para obter o número que a ocupa.       Um palíndromo (ou capicua ) é uma sequência de caracteres que pode ser lido da esquerda para a direita ou da direita para a esquerda, mantendo seu sentido. Esses caracteres podem ser número, palavra ou frase.  Por exemplo, , \"osso\" e \"Socorram-me, subi no ônibus em Marrocos\", são palíndromos.     Quantos números palíndromos de algarismos há em nosso sistema de numeração?  Com os algarismos , quantos palíndromos de algarismos conseguimos formar?    item a.  Para formar um número palíndromo com três algarismos, quando o primeiro algarismo for escolhido, o terceiro já está definido como sendo igual ao primeiro. Depois desta escolha, resta apenas o segundo algarismo para ser definido.  Para escolher o primeiro algarismo temos opções, pois o zero não é permitido, para o segundo algarismo, temos opções. Portanto, a resposta é   item b.  Observe que, usando ou algarismos distintos não é possível formar um palíndromo de algarismos.  Usando apenas um dos cinco algarismos distintos, só temos um número que é um palíndromo, por exemplo . Como temos possibilidades de escolha de algarismo, existem palíndromos deste tipo.  Usando dois algarismos distintos, só temos palíndromos, por exemplo e . Com os cinco algarismos disponíveis, podemos escolher dois deles de maneiras, pois o primeiro pode ser escolhido de maneiras e o segundo de maneiras, como a ordem da escolha não importa, precisamos dividir por . Portanto, neste caso temos palíndromos. Pelo Princípio Aditivo, a resposta é      O palíndromo do Chico.   Quando Chico era nosso homem na Itália toda semana a gente publicava matéria dele. Era um correspondente aplicado. Me lembro de umas fotos que mandou, posando ao lado de nosso ancestral, o temível Pasquino.  Agora... Liguei para ele pedindo para escrever alguma coisa para o primeiro número do Pasquim paulista. \"Minha agenda estourou. Tô enlouquecido, ensaiando o show com Bethânia para o dia 2 em Paris.\" \"Pô, Chico, tremenda sacanagem nos deixar na mão!\" \"Fazer matéria nem pensar, mas se vocês quiserem um palíndromo...\" Palíndromo, como talvez só o Houaiss saiba, é uma frase que significa literalmente o mesmo, seja lida de cá pra lá, como de lá pra cá, da direita para a esquerda. \"Levei 5 horas fazendo\", disse Chico. \"Insônia.\" Era pegar ou largar. Peguei. E, outra vez por acaso, eis o Pasquim inovando ao publicar o primeiro palíndromo ilustrado. Por outro Chico. (Jaguar)  Pasquim São Paulo Ano XVIII número 13 a 10 de julho de 1986  O palíndromo que Chico Buarque fez: \"Até reagan sibarita tira bisnaga ereta\"   Fonte: http:\/\/www.chicobuarque.com.br\/sanatorio\/palindromo.htm .     Exercícios   Quantos são os anagramas da palavra SINGULAR:   Que começam por consoante e terminam por vogal?  Que têm as letras S,I,N juntas em qualquer ordem?  Que têm as vogais e as consoantes intercaladas?    a) 5×3×6!=10800, b) , c) 0    Temos 5 consoantes e 3 vogais, então são 5 opções para escolher a primeira letra e 3 opções para escolher a última letra. Depois de fazer essas escolhas sobram 6 letras que podem ocupar as outras 6 posições. Portanto a resposta é  Temos modos de ordenar as letras S,I,N. Considerando cada permutação das letras S,I,N como um elemento, ficamos com 6 elementos no total para serem ordenados, o que pode ser feito de modos. A resposta é  Como temos 5 consoantes e 3 vogais, não é possível deixar as vogais e as consoantes intercaladas, portanto a resposta é     De quantos modos é possível fazer uma fila com pessoas de modo que três determinadas pessoas dessas não fiquem juntas?   457228800   O número total de modos de ordenar as pessoas é . Vamos contar o número de maneiras de ordenar as pessoas de modo que determinadas pessoas fiquem juntas, para subtrair de e obter a resposta.  Temos modos de ordenar as pessoas que vão ficar juntas. Considerando essas pessoas como apenas um elemento, ficamos com elementos no total e podemos ordenar esses elementos de maneiras.  Juntando as ideias obtemos a resposta:    Quantos dados diferentes podemos formar gravando números de a sobre as faces indistinguíveis de um cubo   se os número podem ser gravados em qualquer ordem?  se o valor da soma das faces opostas precisam ser iguais a ?    a. b.     A princípio, temos maneiras de gravar os números nas faces dos cubos. Dessa forma ficaremos com vários cubos repetidos, pois existem várias maneiras de posicionar um cubo, observe que figura que os dois cubos são iguais.   Dois dados equivalentes.    Para posicionar um cubo, temos 6 maneiras de escolher qual a face que ficará para cima, uma vez feita essa escolha, sobram 4 faces para escolher uma que ficará de frente. Portanto existem maneiras de posicionar um cubo. A resposta é  Podemos escolher a face do 1 de 6 maneiras, a face do 6 estará automaticamente determinada. Uma vez que as faces do 1 e do 6 estão definidas, temos 4 maneiras de escolher a face do 2. A face do 5 estará automaticamente definida. Agora temos duas maneiras de escolher a face do 3. A face do 4 também estará automaticamente determinada.  Assim como no item a. precisamos dividir pelo número de maneiras de posicionar os dados. Fazendo a divisão, obtemos o resultado      (UPE 2013 tradicional) Oito amigos entraram em um restaurante para jantar e sentaram-se numa mesa retangular, com oito lugares, como mostra a figura a seguir:   Dentre todas as configurações possíveis, quantas são as possibilidades de dois desses amigos, Amaro e Danilo, ficarem sentados em frente um do outro?  a) 1440 b) 1920 c) 2016 d) 4032 e) 5760   e)   Uma vez que Amaro escolha um lugar, Danilo já está com seu lugar definido. Amaro pode escolher um lugar de 8 modos. Depois que Amaro e Danilo definiram seus lugares, os outros 6 amigos podem escolher quaisquer lugares, portanto restam possibilidades. A resposta é     (UPE 2013 tradicional) Seguindo a etiqueta japonesa, um restaurante tipicamente oriental solicita aos seus clientes que retirem seus calçados na entrada do estabelecimento. Em certa noite, 6 pares de sapatos e 2 pares de sandálias, todos distintos, estavam dispostos na entrada do restaurante, em duas fileiras com quatro pares de calçados cada uma. Se esses pares de calçados forem organizados nessas fileiras de tal forma que as sandálias devam ocupar as extremidades da primeira fila, de quantas formas diferentes podem-se organizar esses calçados nas duas fileiras?  a)  b)  c)  d)  e)   b)   Como as sandálias devem ocupar as extremidades da primeira fileira, temos duas maneiras de escolher onde colocá-las. Uma vez escolhido os lugares das sandálias, temos 6 pares de sapatos e 6 lugares, portanto a resposta é     Considere um tabuleiro de xadrez .   De quantos modos podemos colocar 8 torres iguais, de modo que haja uma única em cada linha e em cada coluna?  De quantos modos podemos colocar 8 torres diferentes, de modo que haja uma única em cada linha e em cada coluna?    a) b)    Na primeira linha, temos 8 opções para colocar a primeira torre, na segunda linha temos opções para colocar a segunda torre, pois ela não pode ficar na mesma coluna que a primeira torre. Seguindo esse raciocínio, na -ésima linha, temos opções para colocar a -ésima torre. Logo, a resposta é  Seguindo com a ideia do item a, temos modos de escolher os lugares onde as torres podem ocupar, depois disso podemos ordenar as torres de modos, portanto a resposta é      Um grupo formado por quatro rapazes e uma senhorita vão visitar uma exposição de arte. À entrada, passa uma pessoa de cada vez pela porta da sala de exposições. Um dos rapazes dando-se ares de perfeito cavalheiro, não passa pela porta sem que a senhorita já o tenha feito. Qual o número de modos, isto é, de quantas maneiras diferentes eles podem entrar no recinto?     Vamos separar em quatro casos.  1º caso: a senhorita será a primeira pessoa a entrar. Nesse caso, os quatro rapazes podem entrar em qualquer ordem, ou seja, possibilidades.  2º caso: a senhorita será a segunda pessoa a entrar. Nesse caso temos 3 possibilidades de escolha o primeiro rapaz, depois temos possíveis ordem para os outros rapazes.  3º caso: a senhorita será a terceira pessoa a entrar. Nesse caso temos possibilidades para os dois primeiros rapazes e ordens possíveis para os dois últimos rapazes.  4º caso: a senhorita será a quarta pessoa a entrar. Nesse caso temos ordens para os três primeiros rapazes.  Portanto, pelo Princípio Aditivo, a resposta é    (UPE 2011 seriado) Uma bibliotecária tenta organizar 4 livros diferentes de matemática, 4 livros diferentes de geografia e 2 livros diferentes de inglês em uma estante. O número de modos distintos de organização deve ser de tal forma que os livros da mesma disciplina estejam sempre juntos e que os de geografia apareçam sempre na mesma ordem. Assim, o número de possibilidades dessa arrumação é de  a)  b)  c)  d)  e)   d)   O número de modos de ordenar as disciplinas é . Os livros de matemática podem ser ordenados de maneiras e os livros de inglês podem ser ordenados de maneiras. Dessa forma, o número de possibilidades dessa arrumação é    Quantas são as permutações das letras A, B, C, D, E, F, G, H, nas quais, a letra B está situada à direita da letra A e à esquerda da letra F, embora, não necessariamente, em lugares consecutivos?     Inicialmente contamos o número de maneiras de ordenar as oito letras que é . Dividindo esse valor pelo número de maneiras de ordenar as letras B, A, F, obtemos o resultado, pois em apenas uma das formas de ordenar as três letras teremos a ordem exigida. A resposta é    (UFPE - UFRPE 2003) Seja a soma dos números formados pelas permutações dos algarismos e . Indique a soma dos dígitos de .     Note que cada número formado possui 5 dígitos. Podemos contar o valor de da seguinte maneira.  Sejam os números formados pelos algarismos disponíveis. Como são 5 algarismos, temos um total de números, então Observe que para cada , pois, cada algarismo estará presente em dos , para cada fixado.  Logo,    Observe que para cada permutação existe exatamente outra que a soma delas é . Por exemplo:  Podemos organizar as permutações de duas em duas, de modo que a soma de cada par seja . Portanto, o valor da soma de todas as permutações é . Somando os dígitos chegamos na resposta que é .  Podemos usar o código abaixo para conferir esta resposta e verificar a resposta de deste mesmo problema, para outros dígitos.     (UFF-RJ) Um garçom anotou os pedidos de três fregueses. Cada freguês pediu um prato principal, um acompanhamento e uma bebida. Posteriormente, o garçom não sabia identificar o autor de cada pedido. Lembrava-se, porém, de que não havia qualquer coincidência entre os pedidos: os pratos principais eram diferentes entre si, o mesmo ocorrendo com os acompanhamentos e as bebidas. O número de maneiras diferentes que o garçom poderia distribuir os pedidos entre os três fregueses é:  a)  b)  c)  d)  e)   a)   O garçom poderia distribuir os pratos principais de maneiras, os acompanhamentos também poderiam ser distribuídos de , assim como as bebidas que também poderiam ser distribuídas de maneiras. Portanto a resposta é     (OPEMAT 2019 - nível 1) Em uma viagem a Recife, o grupo formado pelos números 1, 2, 3, 4 e 5, resolveu tirar fotos próximo ao monumento do Parque das Esculturas do artista Pernambucano Francisco Brennand. Indecisos pela escolha da disposição na foto, eles concordaram em tirar várias fotos em todas as disposições possíveis, permutando os lugares entre si conforme as imagens abaixo:    Por fim, eles colocaram as fotos em ordem crescente de numeração formando a seguinte lista:   Julgue as afirmações a seguir atribuindo (V) se a afirmação for verdadeira e (F) se a afirmação for falsa.   (V) (F) Quem ocupa a última posição da vigésima foto é o 3.  (V) (F) A foto em que os números aparecem na disposição 32541, ocupa o 59º lugar desta lista.  (V) (F) A quantidade de fotos em que os números 1 e 2 aparecem separados é 96.  (V) (F) A quantidade de fotos em que a disposição dos números é maior do que a foto com disposição 25413 é 73.  (V) (F) A soma de todos os números de cinco dígitos representados pelas fotos é 3999960.    A) V, B) F, C) F, D) V, E) V   (OBM 2008 - 2ª fase do nível 3) Quantas permutações de há com a propriedade de que, para todo , os números que aparecem entre e (onde pode aparecer tanto antes como depois de ) são todos menores do que ? Por exemplo, é uma permutação com esta propriedade.   256  Da propriedade, decorre que só pode aparecer ou como primeiro ou como último elemento da permutação e que os elementos de a formam uma permutação com a mesma propriedade. Assim, o número pedido é o dobro do número de permutações de com a mesma propriedade. Da mesma forma, o número de permutações de com a propriedade é o dobro do número de permutações de com a propriedade. Repetindo o raciocínio, concluímos que o número pedido é portanto .  (UPE - SSA 2 - 2014) Depois de explicar à turma do ano o que é um número palíndromo ou capicua, o professor Barreto pediu que os alunos se organizassem em duplas e entregou algumas cartelas numeradas para que formassem capicuas de três, quatro e cinco algarismos, fazendo o registro de cada resultado possível e podendo reutilizar as cartelas.  Números palíndromos ou capicuas são aqueles que são iguais quando lidos nos dois sentidos, isto é, da direita para a esquerda e da esquerda para a direita. Exemplo: ; ; .  A dupla Ian e Júlia recebeu as cartelas seguintes:    No máximo, quantos capicuas de quatro algarismos essa dupla conseguiu formar?  a)  b)  c)  d)  e)   b)   Para uma melhor visualização, ordenando as cartelas disponíveis, ficamos com os seguintes dígitos: .  Para as capicuas com os quatro algarismos iguais, temos apenas e .  Para as capicuas com dois algarismos distintos, nem podemos usar o 5, nem o 8, pois só temos uma cartela de cada. Sobraram os algarismos que estão disponíveis em pelo menos duas cartelas. Usando dois algarismos distintos, podemos formar duas capicuas, por exemplo e . Como são sete opções para escolher estes dois algarismos, temos 21 possibilidades, pois são 7 opções para a primeira escolha e 6 opções para a segunda escolha, dividindo por 2, pois a ordem não importa, ficamos com 21. Portando, temos capicuas com dois algarismos distintos.  Observe que usando três ou mais algarismos distintos, não é possível formar uma capicua de 4 algarismos. A resposta é    "
},
{
  "id": "dEf",
  "level": "2",
  "url": "section-permutacoes-simples.html#dEf",
  "type": "Objetivos",
  "number": "6.3",
  "title": "",
  "body": "  Nota histórica  Definir Permutação Simples.  Mostrar como obter a lista com todas as permutações de elementos distintos no Sage.  Mostrar como calcular o número de permutações com elementos distintos.  Exemplificar.   "
},
{
  "id": "p-453",
  "level": "2",
  "url": "section-permutacoes-simples.html#p-453",
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
  "number": "6.3.1",
  "title": "",
  "body": " Permutar uma lista de objetos é mudar a ordem em que eles estavam. O número de permutações de objetos distintos , é o número total de maneiras de ordenar estes objetos.  Para descrever, o número de permutações de objetos distintos, usamos as notações:   "
},
{
  "id": "example-85",
  "level": "2",
  "url": "section-permutacoes-simples.html#example-85",
  "type": "Exemplo",
  "number": "6.3.2",
  "title": "",
  "body": " Todas as permutações dos elementos :   Observe que é uma das permutações possíveis, pois essa é uma das formas de ordenar os elementos . Portanto,  "
},
{
  "id": "technology-5",
  "level": "2",
  "url": "section-permutacoes-simples.html#technology-5",
  "type": "Tecnologia",
  "number": "6.3.3",
  "title": "",
  "body": " Abaixo, clique em \"Evaluate (Sage)\" para obter a lista com todas as permutações dos elementos: 1, 2, 3, 4.   Os números podem ser alterados, ao executar o código, a lista das permutações será atualizada.  "
},
{
  "id": "teo-permutacao",
  "level": "2",
  "url": "section-permutacoes-simples.html#teo-permutacao",
  "type": "Teorema",
  "number": "6.3.4",
  "title": "",
  "body": " O número de permutações de objetos distintos é    Pelo princípio multiplicativo, temos modos de escolher o elemento que ocupará o primeiro lugar, uma vez tomada essa decisão, teremos modos de escolher o elemento que ocupará o segundo lugar, e assim por diante, até que haja apenas um único modo de escolher o elemento que ocupará o último lugar. Portanto   "
},
{
  "id": "remark-28",
  "level": "2",
  "url": "section-permutacoes-simples.html#remark-28",
  "type": "Nota",
  "number": "6.3.5",
  "title": "",
  "body": "O fatorial de um número natural é denotado por e consiste na multiplicação desse número por seus antecessores, com exceção do zero. Ou seja  "
},
{
  "id": "tec-permutacao",
  "level": "2",
  "url": "section-permutacoes-simples.html#tec-permutacao",
  "type": "Tecnologia",
  "number": "6.3.6",
  "title": "",
  "body": " Para calcular no Sage, usamos a função fatorial: . Definimos apenas para abreviar, confira o cálculo de apertando no botão \"Evaluate (Sage)\".   Uma vez definida a função , podemos combiná-la com outras operações já definidas no Sage. Veja na próxima célula o cálculo de :   "
},
{
  "id": "definition-24",
  "level": "2",
  "url": "section-permutacoes-simples.html#definition-24",
  "type": "Definição",
  "number": "6.3.7",
  "title": "",
  "body": " Um anagrama é uma palavra ou expressão elaborada usando exatamente as mesmas letras que a palavra ou expressão original. Por exemplo, a palavra ROMA é um anagrama da palavra AMOR e vice-versa.  Nos dicionários, um anagrama é a transposição das letras de uma palavra (ou frase) para formar outra palavra (ou frase). Observe que pela definição do dicionário, só seria contado os casos em que a permutação das letras formassem outra palavra (ou frase). No entanto, em matemática, qualquer permutação das letras de uma palavra é considerado como anagrama.  "
},
{
  "id": "example-86",
  "level": "2",
  "url": "section-permutacoes-simples.html#example-86",
  "type": "Exemplo",
  "number": "6.3.8",
  "title": "",
  "body": " Quantos são os anagramas da palavra SAGE?   A palavra SAGE possui quatro letras distintas, logo, o número de anagramas da palavra SAGE é    "
},
{
  "id": "example-87",
  "level": "2",
  "url": "section-permutacoes-simples.html#example-87",
  "type": "Exemplo",
  "number": "6.3.9",
  "title": "",
  "body": " Quantos são os anagramas da palavra XADREZ que começam e terminam por consoante?   A consoante inicial pode ser escolhida de maneiras, uma vez feita essa escolha, a consoante final pode ser escolhida de maneiras. Restam quatro letras que podem ser ordenadas de maneiras. Pelo Princípio Multiplicativo, a resposta é     "
},
{
  "id": "example-88",
  "level": "2",
  "url": "section-permutacoes-simples.html#example-88",
  "type": "Exemplo",
  "number": "6.3.10",
  "title": "",
  "body": " De quantos modos podemos dividir pessoas em três grupos de quatro pessoas cada?   Podemos ordenar as pessoas em uma fila. O primeiro grupo será formado pelas primeiras pessoas, o segundo grupo, pelas pessoas seguintes e o terceiro grupo pelas quatro últimas pessoas. O número de maneiras de ordenar as pessoas é . Dessa forma, cada grupo esta sendo contado vezes, por exemplo, representam o mesmo grupo. Logo, precisamos dividir por , já que são grupos.  Por fim, note que a ordem dos grupos não importa, como são maneiras de ordenar os grupos, dividindo por , obtemos a resposta     "
},
{
  "id": "exem-permutacao-pos",
  "level": "2",
  "url": "section-permutacoes-simples.html#exem-permutacao-pos",
  "type": "Exemplo",
  "number": "6.3.11",
  "title": "",
  "body": " Permutam-se de todos os modos possíveis os algarismos e escrevem-se os números assim formados em ordem crescente.   Que lugar ocupa o número ?  Qual o número que ocupa o lugar?    item a.  Como os números foram escritos em ordem crescente, os que começam com e aparecem antes do número . Existem números que começam com cada um destes algarismos, ou seja números.  Existem números que começam com , e a mesma quantidade que começam com , ou seja números.  Existem números que começam com .  O próximo número já que o que queremos. Portanto, a resposta é  item b.  Começando com e temos um total de números. Se considerarmos também, todos que começam com , teremos mais números, ultrapassando a posição .  Já sabemos que o número que ocupa a posição começa com o algarismo e que o primeiro número com o algarismo ocupa a posição . Precisamos encontrar o número que começa com o algarismo e está na posição , dentre estes números que começam com .  Começando com e , são números. Dessa forma, o número seguinte está na posição , dentre os que começam com o algarismo . Assim, o número está na posição e o número está na posição .  (Usando o Sage)  Quando calculamos todas as permutações no Sage, a saída é exibida em ordem crescente. Como as listas no Sage começam a ser contadas a partir do zero , podemos consultar a permutação de posição 500 com o comando abaixo:    "
},
{
  "id": "technology-7",
  "level": "2",
  "url": "section-permutacoes-simples.html#technology-7",
  "type": "Tecnologia",
  "number": "6.3.12",
  "title": "",
  "body": " Implementação em Sage para verificar respostas de problemas como o .  Escolha os dígitos que serão permutados e escreva como um número, em seguida, escolha outro número para obter o lugar ocupado por ele.      Escolha os dígitos que serão permutados e escreva como um número, em seguida, escolha a posição para obter o número que a ocupa.     "
},
{
  "id": "definition-25",
  "level": "2",
  "url": "section-permutacoes-simples.html#definition-25",
  "type": "Definição",
  "number": "6.3.15",
  "title": "",
  "body": " Um palíndromo (ou capicua ) é uma sequência de caracteres que pode ser lido da esquerda para a direita ou da direita para a esquerda, mantendo seu sentido. Esses caracteres podem ser número, palavra ou frase.  Por exemplo, , \"osso\" e \"Socorram-me, subi no ônibus em Marrocos\", são palíndromos.  "
},
{
  "id": "example-90",
  "level": "2",
  "url": "section-permutacoes-simples.html#example-90",
  "type": "Exemplo",
  "number": "6.3.16",
  "title": "",
  "body": "  Quantos números palíndromos de algarismos há em nosso sistema de numeração?  Com os algarismos , quantos palíndromos de algarismos conseguimos formar?    item a.  Para formar um número palíndromo com três algarismos, quando o primeiro algarismo for escolhido, o terceiro já está definido como sendo igual ao primeiro. Depois desta escolha, resta apenas o segundo algarismo para ser definido.  Para escolher o primeiro algarismo temos opções, pois o zero não é permitido, para o segundo algarismo, temos opções. Portanto, a resposta é   item b.  Observe que, usando ou algarismos distintos não é possível formar um palíndromo de algarismos.  Usando apenas um dos cinco algarismos distintos, só temos um número que é um palíndromo, por exemplo . Como temos possibilidades de escolha de algarismo, existem palíndromos deste tipo.  Usando dois algarismos distintos, só temos palíndromos, por exemplo e . Com os cinco algarismos disponíveis, podemos escolher dois deles de maneiras, pois o primeiro pode ser escolhido de maneiras e o segundo de maneiras, como a ordem da escolha não importa, precisamos dividir por . Portanto, neste caso temos palíndromos. Pelo Princípio Aditivo, a resposta é    "
},
{
  "id": "fact-1",
  "level": "2",
  "url": "section-permutacoes-simples.html#fact-1",
  "type": "Fato",
  "number": "6.3.17",
  "title": "",
  "body": " O palíndromo do Chico.   Quando Chico era nosso homem na Itália toda semana a gente publicava matéria dele. Era um correspondente aplicado. Me lembro de umas fotos que mandou, posando ao lado de nosso ancestral, o temível Pasquino.  Agora... Liguei para ele pedindo para escrever alguma coisa para o primeiro número do Pasquim paulista. \"Minha agenda estourou. Tô enlouquecido, ensaiando o show com Bethânia para o dia 2 em Paris.\" \"Pô, Chico, tremenda sacanagem nos deixar na mão!\" \"Fazer matéria nem pensar, mas se vocês quiserem um palíndromo...\" Palíndromo, como talvez só o Houaiss saiba, é uma frase que significa literalmente o mesmo, seja lida de cá pra lá, como de lá pra cá, da direita para a esquerda. \"Levei 5 horas fazendo\", disse Chico. \"Insônia.\" Era pegar ou largar. Peguei. E, outra vez por acaso, eis o Pasquim inovando ao publicar o primeiro palíndromo ilustrado. Por outro Chico. (Jaguar)  Pasquim São Paulo Ano XVIII número 13 a 10 de julho de 1986  O palíndromo que Chico Buarque fez: \"Até reagan sibarita tira bisnaga ereta\"   Fonte: http:\/\/www.chicobuarque.com.br\/sanatorio\/palindromo.htm .  "
},
{
  "id": "exercise-12",
  "level": "2",
  "url": "section-permutacoes-simples.html#exercise-12",
  "type": "Exercício",
  "number": "6.3.3.1",
  "title": "",
  "body": " Quantos são os anagramas da palavra SINGULAR:   Que começam por consoante e terminam por vogal?  Que têm as letras S,I,N juntas em qualquer ordem?  Que têm as vogais e as consoantes intercaladas?    a) 5×3×6!=10800, b) , c) 0    Temos 5 consoantes e 3 vogais, então são 5 opções para escolher a primeira letra e 3 opções para escolher a última letra. Depois de fazer essas escolhas sobram 6 letras que podem ocupar as outras 6 posições. Portanto a resposta é  Temos modos de ordenar as letras S,I,N. Considerando cada permutação das letras S,I,N como um elemento, ficamos com 6 elementos no total para serem ordenados, o que pode ser feito de modos. A resposta é  Como temos 5 consoantes e 3 vogais, não é possível deixar as vogais e as consoantes intercaladas, portanto a resposta é   "
},
{
  "id": "exercise-13",
  "level": "2",
  "url": "section-permutacoes-simples.html#exercise-13",
  "type": "Exercício",
  "number": "6.3.3.2",
  "title": "",
  "body": " De quantos modos é possível fazer uma fila com pessoas de modo que três determinadas pessoas dessas não fiquem juntas?   457228800   O número total de modos de ordenar as pessoas é . Vamos contar o número de maneiras de ordenar as pessoas de modo que determinadas pessoas fiquem juntas, para subtrair de e obter a resposta.  Temos modos de ordenar as pessoas que vão ficar juntas. Considerando essas pessoas como apenas um elemento, ficamos com elementos no total e podemos ordenar esses elementos de maneiras.  Juntando as ideias obtemos a resposta:  "
},
{
  "id": "exercise-14",
  "level": "2",
  "url": "section-permutacoes-simples.html#exercise-14",
  "type": "Exercício",
  "number": "6.3.3.3",
  "title": "",
  "body": " Quantos dados diferentes podemos formar gravando números de a sobre as faces indistinguíveis de um cubo   se os número podem ser gravados em qualquer ordem?  se o valor da soma das faces opostas precisam ser iguais a ?    a. b.     A princípio, temos maneiras de gravar os números nas faces dos cubos. Dessa forma ficaremos com vários cubos repetidos, pois existem várias maneiras de posicionar um cubo, observe que figura que os dois cubos são iguais.   Dois dados equivalentes.    Para posicionar um cubo, temos 6 maneiras de escolher qual a face que ficará para cima, uma vez feita essa escolha, sobram 4 faces para escolher uma que ficará de frente. Portanto existem maneiras de posicionar um cubo. A resposta é  Podemos escolher a face do 1 de 6 maneiras, a face do 6 estará automaticamente determinada. Uma vez que as faces do 1 e do 6 estão definidas, temos 4 maneiras de escolher a face do 2. A face do 5 estará automaticamente definida. Agora temos duas maneiras de escolher a face do 3. A face do 4 também estará automaticamente determinada.  Assim como no item a. precisamos dividir pelo número de maneiras de posicionar os dados. Fazendo a divisão, obtemos o resultado   "
},
{
  "id": "exercise-15",
  "level": "2",
  "url": "section-permutacoes-simples.html#exercise-15",
  "type": "Exercício",
  "number": "6.3.3.4",
  "title": "",
  "body": " (UPE 2013 tradicional) Oito amigos entraram em um restaurante para jantar e sentaram-se numa mesa retangular, com oito lugares, como mostra a figura a seguir:   Dentre todas as configurações possíveis, quantas são as possibilidades de dois desses amigos, Amaro e Danilo, ficarem sentados em frente um do outro?  a) 1440 b) 1920 c) 2016 d) 4032 e) 5760   e)   Uma vez que Amaro escolha um lugar, Danilo já está com seu lugar definido. Amaro pode escolher um lugar de 8 modos. Depois que Amaro e Danilo definiram seus lugares, os outros 6 amigos podem escolher quaisquer lugares, portanto restam possibilidades. A resposta é   "
},
{
  "id": "exercise-16",
  "level": "2",
  "url": "section-permutacoes-simples.html#exercise-16",
  "type": "Exercício",
  "number": "6.3.3.5",
  "title": "",
  "body": " (UPE 2013 tradicional) Seguindo a etiqueta japonesa, um restaurante tipicamente oriental solicita aos seus clientes que retirem seus calçados na entrada do estabelecimento. Em certa noite, 6 pares de sapatos e 2 pares de sandálias, todos distintos, estavam dispostos na entrada do restaurante, em duas fileiras com quatro pares de calçados cada uma. Se esses pares de calçados forem organizados nessas fileiras de tal forma que as sandálias devam ocupar as extremidades da primeira fila, de quantas formas diferentes podem-se organizar esses calçados nas duas fileiras?  a)  b)  c)  d)  e)   b)   Como as sandálias devem ocupar as extremidades da primeira fileira, temos duas maneiras de escolher onde colocá-las. Uma vez escolhido os lugares das sandálias, temos 6 pares de sapatos e 6 lugares, portanto a resposta é   "
},
{
  "id": "exercise-17",
  "level": "2",
  "url": "section-permutacoes-simples.html#exercise-17",
  "type": "Exercício",
  "number": "6.3.3.6",
  "title": "",
  "body": " Considere um tabuleiro de xadrez .   De quantos modos podemos colocar 8 torres iguais, de modo que haja uma única em cada linha e em cada coluna?  De quantos modos podemos colocar 8 torres diferentes, de modo que haja uma única em cada linha e em cada coluna?    a) b)    Na primeira linha, temos 8 opções para colocar a primeira torre, na segunda linha temos opções para colocar a segunda torre, pois ela não pode ficar na mesma coluna que a primeira torre. Seguindo esse raciocínio, na -ésima linha, temos opções para colocar a -ésima torre. Logo, a resposta é  Seguindo com a ideia do item a, temos modos de escolher os lugares onde as torres podem ocupar, depois disso podemos ordenar as torres de modos, portanto a resposta é    "
},
{
  "id": "exercise-18",
  "level": "2",
  "url": "section-permutacoes-simples.html#exercise-18",
  "type": "Exercício",
  "number": "6.3.3.7",
  "title": "",
  "body": " Um grupo formado por quatro rapazes e uma senhorita vão visitar uma exposição de arte. À entrada, passa uma pessoa de cada vez pela porta da sala de exposições. Um dos rapazes dando-se ares de perfeito cavalheiro, não passa pela porta sem que a senhorita já o tenha feito. Qual o número de modos, isto é, de quantas maneiras diferentes eles podem entrar no recinto?     Vamos separar em quatro casos.  1º caso: a senhorita será a primeira pessoa a entrar. Nesse caso, os quatro rapazes podem entrar em qualquer ordem, ou seja, possibilidades.  2º caso: a senhorita será a segunda pessoa a entrar. Nesse caso temos 3 possibilidades de escolha o primeiro rapaz, depois temos possíveis ordem para os outros rapazes.  3º caso: a senhorita será a terceira pessoa a entrar. Nesse caso temos possibilidades para os dois primeiros rapazes e ordens possíveis para os dois últimos rapazes.  4º caso: a senhorita será a quarta pessoa a entrar. Nesse caso temos ordens para os três primeiros rapazes.  Portanto, pelo Princípio Aditivo, a resposta é  "
},
{
  "id": "exercise-19",
  "level": "2",
  "url": "section-permutacoes-simples.html#exercise-19",
  "type": "Exercício",
  "number": "6.3.3.8",
  "title": "",
  "body": " (UPE 2011 seriado) Uma bibliotecária tenta organizar 4 livros diferentes de matemática, 4 livros diferentes de geografia e 2 livros diferentes de inglês em uma estante. O número de modos distintos de organização deve ser de tal forma que os livros da mesma disciplina estejam sempre juntos e que os de geografia apareçam sempre na mesma ordem. Assim, o número de possibilidades dessa arrumação é de  a)  b)  c)  d)  e)   d)   O número de modos de ordenar as disciplinas é . Os livros de matemática podem ser ordenados de maneiras e os livros de inglês podem ser ordenados de maneiras. Dessa forma, o número de possibilidades dessa arrumação é  "
},
{
  "id": "exercise-20",
  "level": "2",
  "url": "section-permutacoes-simples.html#exercise-20",
  "type": "Exercício",
  "number": "6.3.3.9",
  "title": "",
  "body": " Quantas são as permutações das letras A, B, C, D, E, F, G, H, nas quais, a letra B está situada à direita da letra A e à esquerda da letra F, embora, não necessariamente, em lugares consecutivos?     Inicialmente contamos o número de maneiras de ordenar as oito letras que é . Dividindo esse valor pelo número de maneiras de ordenar as letras B, A, F, obtemos o resultado, pois em apenas uma das formas de ordenar as três letras teremos a ordem exigida. A resposta é  "
},
{
  "id": "exercise-21",
  "level": "2",
  "url": "section-permutacoes-simples.html#exercise-21",
  "type": "Exercício",
  "number": "6.3.3.10",
  "title": "",
  "body": " (UFPE - UFRPE 2003) Seja a soma dos números formados pelas permutações dos algarismos e . Indique a soma dos dígitos de .     Note que cada número formado possui 5 dígitos. Podemos contar o valor de da seguinte maneira.  Sejam os números formados pelos algarismos disponíveis. Como são 5 algarismos, temos um total de números, então Observe que para cada , pois, cada algarismo estará presente em dos , para cada fixado.  Logo,    Observe que para cada permutação existe exatamente outra que a soma delas é . Por exemplo:  Podemos organizar as permutações de duas em duas, de modo que a soma de cada par seja . Portanto, o valor da soma de todas as permutações é . Somando os dígitos chegamos na resposta que é .  Podemos usar o código abaixo para conferir esta resposta e verificar a resposta de deste mesmo problema, para outros dígitos.   "
},
{
  "id": "exercise-22",
  "level": "2",
  "url": "section-permutacoes-simples.html#exercise-22",
  "type": "Exercício",
  "number": "6.3.3.11",
  "title": "",
  "body": " (UFF-RJ) Um garçom anotou os pedidos de três fregueses. Cada freguês pediu um prato principal, um acompanhamento e uma bebida. Posteriormente, o garçom não sabia identificar o autor de cada pedido. Lembrava-se, porém, de que não havia qualquer coincidência entre os pedidos: os pratos principais eram diferentes entre si, o mesmo ocorrendo com os acompanhamentos e as bebidas. O número de maneiras diferentes que o garçom poderia distribuir os pedidos entre os três fregueses é:  a)  b)  c)  d)  e)   a)   O garçom poderia distribuir os pratos principais de maneiras, os acompanhamentos também poderiam ser distribuídos de , assim como as bebidas que também poderiam ser distribuídas de maneiras. Portanto a resposta é   "
},
{
  "id": "exercise-23",
  "level": "2",
  "url": "section-permutacoes-simples.html#exercise-23",
  "type": "Exercício",
  "number": "6.3.3.12",
  "title": "",
  "body": " (OPEMAT 2019 - nível 1) Em uma viagem a Recife, o grupo formado pelos números 1, 2, 3, 4 e 5, resolveu tirar fotos próximo ao monumento do Parque das Esculturas do artista Pernambucano Francisco Brennand. Indecisos pela escolha da disposição na foto, eles concordaram em tirar várias fotos em todas as disposições possíveis, permutando os lugares entre si conforme as imagens abaixo:    Por fim, eles colocaram as fotos em ordem crescente de numeração formando a seguinte lista:   Julgue as afirmações a seguir atribuindo (V) se a afirmação for verdadeira e (F) se a afirmação for falsa.   (V) (F) Quem ocupa a última posição da vigésima foto é o 3.  (V) (F) A foto em que os números aparecem na disposição 32541, ocupa o 59º lugar desta lista.  (V) (F) A quantidade de fotos em que os números 1 e 2 aparecem separados é 96.  (V) (F) A quantidade de fotos em que a disposição dos números é maior do que a foto com disposição 25413 é 73.  (V) (F) A soma de todos os números de cinco dígitos representados pelas fotos é 3999960.    A) V, B) F, C) F, D) V, E) V  "
},
{
  "id": "exercise-24",
  "level": "2",
  "url": "section-permutacoes-simples.html#exercise-24",
  "type": "Exercício",
  "number": "6.3.3.13",
  "title": "",
  "body": "(OBM 2008 - 2ª fase do nível 3) Quantas permutações de há com a propriedade de que, para todo , os números que aparecem entre e (onde pode aparecer tanto antes como depois de ) são todos menores do que ? Por exemplo, é uma permutação com esta propriedade.   256  Da propriedade, decorre que só pode aparecer ou como primeiro ou como último elemento da permutação e que os elementos de a formam uma permutação com a mesma propriedade. Assim, o número pedido é o dobro do número de permutações de com a mesma propriedade. Da mesma forma, o número de permutações de com a propriedade é o dobro do número de permutações de com a propriedade. Repetindo o raciocínio, concluímos que o número pedido é portanto . "
},
{
  "id": "exercise-25",
  "level": "2",
  "url": "section-permutacoes-simples.html#exercise-25",
  "type": "Exercício",
  "number": "6.3.3.14",
  "title": "",
  "body": "(UPE - SSA 2 - 2014) Depois de explicar à turma do ano o que é um número palíndromo ou capicua, o professor Barreto pediu que os alunos se organizassem em duplas e entregou algumas cartelas numeradas para que formassem capicuas de três, quatro e cinco algarismos, fazendo o registro de cada resultado possível e podendo reutilizar as cartelas.  Números palíndromos ou capicuas são aqueles que são iguais quando lidos nos dois sentidos, isto é, da direita para a esquerda e da esquerda para a direita. Exemplo: ; ; .  A dupla Ian e Júlia recebeu as cartelas seguintes:    No máximo, quantos capicuas de quatro algarismos essa dupla conseguiu formar?  a)  b)  c)  d)  e)   b)   Para uma melhor visualização, ordenando as cartelas disponíveis, ficamos com os seguintes dígitos: .  Para as capicuas com os quatro algarismos iguais, temos apenas e .  Para as capicuas com dois algarismos distintos, nem podemos usar o 5, nem o 8, pois só temos uma cartela de cada. Sobraram os algarismos que estão disponíveis em pelo menos duas cartelas. Usando dois algarismos distintos, podemos formar duas capicuas, por exemplo e . Como são sete opções para escolher estes dois algarismos, temos 21 possibilidades, pois são 7 opções para a primeira escolha e 6 opções para a segunda escolha, dividindo por 2, pois a ordem não importa, ficamos com 21. Portando, temos capicuas com dois algarismos distintos.  Observe que usando três ou mais algarismos distintos, não é possível formar uma capicua de 4 algarismos. A resposta é  "
},
{
  "id": "section-combinacoes-simples",
  "level": "1",
  "url": "section-combinacoes-simples.html",
  "type": "Seção",
  "number": "6.4",
  "title": "Combinações Simples",
  "body": " Combinações Simples    Definir combinação simples.  Mostrar como obter a lista com todas as combinações simples de elementos distintos, tomados a no Sage.  Mostrar como calcular o número de combinações simples de elementos distintos, tomados a .  Exemplificar.     Nota Histórica  A primeira descrição conhecida sobre coeficientes binomiais (equivalente a combinações simples) está em um dos livros do matemático indiano do século X, Halayudha. O livro possui o título Mṛta-Sañjīvanī e é conhecido como um comentário do livro Chandaḥśāstra do poeta e matemático indiano, Pingala (dos séculos III\/II A.C.). O comentário de Halayudha inclui uma apresentação do triângulo de Pascal (chamado meruprastāra).  Fonte: https:\/\/en.wikipedia.org\/wiki\/Binomial_coefficient .  Por volta de 1150, o matemático indiano Bhāskarācārya (Bhaskara II) fez uma exposição dos coeficientes binomiais em seu livro Līlāvatī.   Līlāvatī de Bhāskarācārya, traduzido para inglês por Patwardhan, Naimpally e Shyam Lal Singh.      Combinações Simples  Em determinadas situações, precisamos escolher algumas opções, sem que a ordem seja importante. Confira o exemplo a seguir.   De quantas maneiras é possível fazer uma salada de frutas, usando quatro frutas distintas, se temos disponíveis as frutas: abacaxi, banana, maçã, mamão, manga e uva?   São 6 opções para a primeira fruta, 5 opções para a segunda fruta, 4 opções para a terceira fruta, e finalmente, 3 opções para a última fruta.  Note que, dessa maneira a ordem está sendo levada em consideração. Como cada escolha de frutas pode ser ordenada de maneiras, dividindo por passamos a contar cada salada exatamente uma vez. A resposta é dada por       No Sage, podemos obter uma lista com todos os subconjuntos de {1, 2, 3, 4, 5, 6}, tomados 4 a 4. Basta usar o seguinte código:     O número de formas de escolher elementos, dentre elementos disponíveis, sem que a ordem importe, é chamado de número de combinações de elementos, tomados a .  Observe que, o número de subconjuntos com elementos, de um conjunto com elementos é exatamente o número de combinações de , tomados a . As notações para o número de combinações de , a são dadas por:     O número de combinações de objetos distintos, tomados a é    Temos modos de escolher o primeiro elemento, modos de escolher o segundo elemento, e assim sucessivamente, até modos de escolher o -ésimo elemento.  Agora observe que contamos muito mais agrupamentos do que deveríamos, pois para conjuntos, a ordem não importa, portanto precisamos dividir pelo número de formas de ordenar estes elementos que escolhemos de forma ordenada, ou seja, por . Assim:    Fazendo as contas concluímos que      pode ser calculado no Sage com o código binomial(n, p). Para abreviar vamos usar C(n, p) = binomial(n, p). Teste o código abaixo, para o caso , .      Uma criança possui 5 figurinhas distintas e outra criança possui 7 figurinhas distintas. Se as figurinhas da primeira criança são todas diferentes das figurinhas da segunda criança, de quantas maneiras é possível trocar 4 figurinhas pertencentes a primeira criança com 4 pertencentes a segunda?   A primeira criança pode escolher suas 4 figurinhas de maneiras e a segunda criança pode escolher suas 4 figurinhas de maneiras. Portanto, o número de maneiras de realizar a troca é      Um Juiz dispõe de 11 mulheres, das quais somente 4 são advogadas.   Para formar um único júri com 9 juradas. Qual é o número de formas de compor o júri, com pelo menos 2 advogadas?  Para formar um único júri com 6 juradas. Qual é o número de formas de compor o júri, com pelo menos 2 advogadas?    item a) Basta escolher 9 juradas, pois pelo menos duas serão advogadas. Isto pode ser feito de maneiras.  item b) Se escolhermos diretamente 6 juradas, dentre as 11 mulheres disponíveis, estaremos contando os casos em que não temos pelo menos duas advogadas. Precisamos contornar este problema.  Para garantir que estamos contando todos os casos em que pelo menos duas advogadas foram selecionadas, vamos separar em três casos. 1º vamos contar o número de maneiras de selecionar 2 advogadas e 4 não advogadas. 2º vamos contar o número de maneiras de selecionar 3 advogadas e 3 não advogadas. 3º vamos contar o número de maneiras de selecionar 4 advogadas e 2 não advogadas. Como os casos são disjuntos, pelo Princípio aditivo a resposta é   No Sage, esse cálculo pode ser feito da seguinte maneira:      De quantos modos podemos dividir 12 pessoas em três grupos de quatro pessoas cada?   Para o primeiro grupo, temos um total de maneiras de selecionar as 4 pessoas.  Para o segundo grupo temos um total de maneiras de selecionar as 4 pessoas.  Para o terceiro grupo temos um total de maneiras de selecionar as 4 pessoas.  Como a ordem dos grupos não importa, precisamos dividir por Portanto a resposta é       Exercícios   Quantas diagonais possuem um polígono de lados?     Cada vértice pode ser ligado a outros vértices por meio uma diagonal, pois o vértice nem pode ser ligado a ele mesmo, nem aos seus dois vértices adjacentes, usando diagonais. Como são vértices ficamos com diagonais, mas elas foram contadas duas vezes, portanto a resposta é     Quantas são as pedras de um dominó comum?   28   As pedras de um dominó possuem dois números que podem ter valores de 0 até 6. Dessas pedras, 7 possuem os dois números iguais. Para formar uma pedra com dois números diferentes, temos modos de escolher os números. Portanto o número de pedras de um dominó comum é     (UFPE 2012) As pedras de um dominó usual são compostas por dois quadrados, com 7 possíveis marcas (de zero pontos até 6 pontos). Quantas pedras terá um dominó se cada quadrado puder ter até 9 pontos? Veja no desenho abaixo um exemplo de uma nova pedra do dominó.    55   As pedras desse dominó possuem dois números que podem ter valores de 0 até 9. Dessas pedras, 10 possuem os dois números iguais. Para formar uma pedra com dois números diferentes, temos modos de escolher os números. Portanto o número de pedros desse dominó é     (UFPE 2001) Quantos são os paralelogramos com lados sobre os segmentos da figura seguinte, onde os segmentos que não se interceptam são paralelos.    90   Podemos prolongar os segmentos que definem os lados dos paralelogramos conforme a figura abaixo:   Paralelogramos com prolongamento de segmentos.    Observe que escolher dois segmentos em cima e dois segmentos do lado esquerdo define um único paralelogramo. Observe também que cada paralelogramo da figura corresponde a dois segmentos na parte de cima e dois segmentos do lado esquerdo. Portanto, a resposta é o número de maneiras de escolher 2 dentre 6 segmentos na parte de cima, multiplicado pelo número de maneiras de escolher 2 dentre 4 segmentos no lado esquerdo:      (PROFMAT 2015) Uma escola de educação básica possui 12 professores de matemática, sendo que 8 atuam exclusivamente no Ensino Fundamental e 4 atuam exclusivamente no Ensino Médio. Para a organização da 1ª Olimpíada de Matemática da escola, será formada uma comissão de 5 professores de matemática, de modo que pelo menos um deles seja professor do Ensino Médio. De quantas maneiras essa comissão poderá ser formada?     Vamos contar o total de modos de escolher 5 professores dentre os 12, depois subtraímos o número de casos em que nenhum professor do ensino médio foi selecionado. O número de soluções é     (UFBA 2006) Durante uma reunião, ocorreu uma divergência quanto à formação de uma comissão gestora, a ser escolhida entre os presentes. Um grupo defendia uma comissão com três membros, sendo um presidente, um vice-presidente e um secretário. Outro grupo queria uma comissão com três membros sem cargos definidos. A primeira alternativa oferece 280 possibilidades de escolha a mais que a segunda. Determine o número de pessoas presentes à reunião, sabendo-se que esse número é maior que 5.   8   Seja a quantidade de pessoas na reunião. No primeiro caso temos modos de escolher a comissão. No segundo caso temos modos de escolher a comissão. Como a primeira alternativa oferece possibilidades de escolha a mais que a segunda, temos Logo e Observe que no lado esquerdo da equação temos o produto de três números naturais consecutivos, e do outro lado, temos o número . Fatorando e reescrevendo como produto de três números naturais consecutivos obtemos: Portanto, e .    (OBM 2004 - 2ª fase do nível 3) Os doze alunos de uma turma de olimpíada saíam para jogar futebol todos os dias após a aula de matemática, formando dois times de 6 jogadores cada e jogando entre si. A cada dia eles formavam dois times diferentes dos times formados em dias anteriores. Ao final do ano, eles verificaram que cada 5 alunos haviam jogado juntos num mesmo time exatamente uma vez. Quantos times diferentes foram formados ao longo do ano?   Temos maneiras de escolher 6 dentre 12 alunos. Note que para cada 5 alunos fixados, temos 7 times possíveis.     (OBM 2006 - 2ª fase do nível 3) Seja inteiro positivo. De quantas maneiras podemos distribuir brinquedos distintos para crianças de modo que toda criança receba pelo menos um brinquedo?   Escolha uma criança para receber dois brinquedos, em seguida escolha os dois brinquedos dessa criança. Agora distribua um brinquedo para cada criança que restou.     (OBM 2013 - 2ª fase do nível 3) Para cobrir um tabuleiro de dimensões , podemos utilizar heptaminós amarelos, de dimensões , e octaminós vermelhos, de dimensões . De quantos modos podemos cobrir completamente o tabuleiro?     Suponha que vamos usar heptaminós e octaminós. Para cobrir tudo, temos .  Observe que é múltiplo de e de . Assim, é múltiplo de 8, pois . Analogamente, é múltiplo de 7, pois . Como e são primos entre si, é múltiplo de e é múltiplo de .  Sendo e , temos . Assim, os valores de são e , que correspondem a sendo e .  Analisando os três casos:  1º: , apenas uma maneira de cobrir, pois todas as peças são octaminós.  2º: , temos no total peças que colocaremos no tabuleiro. Como as peças de tamanho diferente possuem cores distintas e o tabuleiro ficará sem ''buracos'', precisamos escolher as posições que serão colocados os heptaminós, ou as posições que serão colocados os octaminós, pois estes dois valores são iguais. O número de maneiras de fazer isto é   3º: , análogo ao primeiro caso, apenas uma maneira.  No total temos maneiras de cobrir completamente o tabuleiro.   (OBM 2015 - 2ª fase do nível 3) Um subconjunto de elementos do conjunto é dito largo se ao colocar os seus elementos em ordem crescente tivermos a propriedade de que a diferença do segundo menos o primeiro é maior que , do terceiro para o segundo é maior que , do quarto para o terceiro é maior que e do quinto para o quarto é maior que . Existem quantos subconjuntos largos?     Sejam os elementos de um conjunto largo. Assim, e , ou seja, .  Desta forma, é um subconjunto de . Reciprocamente, se é um subconjunto de com então é um conjunto largo, pois e .  Com isso, a quantidade de subconjuntos largos é igual à quantidade de subconjuntos de elementos de , que é     (FUVEST 2020 - 2ª fase) Um jogo educativo possui 16 peças nos formatos: círculo, triângulo, quadrado e estrela, e cada formato é apresentado em 4 cores: amarelo, branco, laranja e verde. Dois jogadores distribuem entre si quantidades iguais dessas peças, de forma aleatória. O conjunto de 8 peças que cada jogador recebe é chamado de coleção.   Quantas são as possíveis coleções que um jogador pode receber?  A regra do jogo estabelece pontuações para as peças, da seguinte forma: círculo = 1 ponto, triângulo = 2 pontos, quadrado = 3 pontos e estrela = 4 pontos. Quantas são as possíveis coleções que valem 26 pontos ou mais?    a) b)   item a) O número de possíveis coleções é dado por:   item b) As coleções possíveis são:  1) 4 estrelas e 4 quadrados totalizando 28 pontos:  2) 4 estrelas, 3 quadrados e 1 triângulo totalizando 27 pontos:  3) 4 estrelas, 3 quadrados e 1 círculo totalizando 26 pontos:  4) 4 estrelas, 2 quadrados e 2 triângulos totalizando 26 pontos:  5) 3 estrelas, 4 quadrados e 1 triângulo totalizando 26 pontos: Portanto existem coleções possíveis.    (FUVEST 2018 - 2ª fase) Em um torneio de xadrez, há participantes. Na primeira rodada, há jogos. Calcule, em função de , o número de possibilidades para se fazer o emparceiramento da primeira rodada, sem levar em conta a cor das peças.      Para o primeiro jogo, temos um total de maneiras de escolher os participantes. Para o segundo jogo, temos um total de maneiras de escolher os participantes e assim sucessivamente, até que para o último jogo ficamos com maneiras de escolher os participantes.  Observe que a ordem os jogos não importa. Portanto, precisamos dividir pela quantidade de maneiras de ordenar esses jogos. A resposta é dada por:     "
},
{
  "id": "dEf",
  "level": "2",
  "url": "section-combinacoes-simples.html#dEf",
  "type": "Objetivos",
  "number": "6.4",
  "title": "",
  "body": "  Definir combinação simples.  Mostrar como obter a lista com todas as combinações simples de elementos distintos, tomados a no Sage.  Mostrar como calcular o número de combinações simples de elementos distintos, tomados a .  Exemplificar.   "
},
{
  "id": "p-575",
  "level": "2",
  "url": "section-combinacoes-simples.html#p-575",
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
  "number": "6.4.1",
  "title": "",
  "body": " Līlāvatī de Bhāskarācārya, traduzido para inglês por Patwardhan, Naimpally e Shyam Lal Singh.   "
},
{
  "id": "example-91",
  "level": "2",
  "url": "section-combinacoes-simples.html#example-91",
  "type": "Exemplo",
  "number": "6.4.2",
  "title": "",
  "body": " De quantas maneiras é possível fazer uma salada de frutas, usando quatro frutas distintas, se temos disponíveis as frutas: abacaxi, banana, maçã, mamão, manga e uva?   São 6 opções para a primeira fruta, 5 opções para a segunda fruta, 4 opções para a terceira fruta, e finalmente, 3 opções para a última fruta.  Note que, dessa maneira a ordem está sendo levada em consideração. Como cada escolha de frutas pode ser ordenada de maneiras, dividindo por passamos a contar cada salada exatamente uma vez. A resposta é dada por    "
},
{
  "id": "technology-8",
  "level": "2",
  "url": "section-combinacoes-simples.html#technology-8",
  "type": "Tecnologia",
  "number": "6.4.3",
  "title": "",
  "body": " No Sage, podemos obter uma lista com todos os subconjuntos de {1, 2, 3, 4, 5, 6}, tomados 4 a 4. Basta usar o seguinte código:   "
},
{
  "id": "def-combinacao",
  "level": "2",
  "url": "section-combinacoes-simples.html#def-combinacao",
  "type": "Definição",
  "number": "6.4.4",
  "title": "",
  "body": " O número de formas de escolher elementos, dentre elementos disponíveis, sem que a ordem importe, é chamado de número de combinações de elementos, tomados a .  Observe que, o número de subconjuntos com elementos, de um conjunto com elementos é exatamente o número de combinações de , tomados a . As notações para o número de combinações de , a são dadas por:   "
},
{
  "id": "teo-combinacao",
  "level": "2",
  "url": "section-combinacoes-simples.html#teo-combinacao",
  "type": "Teorema",
  "number": "6.4.5",
  "title": "",
  "body": " O número de combinações de objetos distintos, tomados a é    Temos modos de escolher o primeiro elemento, modos de escolher o segundo elemento, e assim sucessivamente, até modos de escolher o -ésimo elemento.  Agora observe que contamos muito mais agrupamentos do que deveríamos, pois para conjuntos, a ordem não importa, portanto precisamos dividir pelo número de formas de ordenar estes elementos que escolhemos de forma ordenada, ou seja, por . Assim:    Fazendo as contas concluímos que    "
},
{
  "id": "tec-combinacao",
  "level": "2",
  "url": "section-combinacoes-simples.html#tec-combinacao",
  "type": "Tecnologia",
  "number": "6.4.6",
  "title": "",
  "body": " pode ser calculado no Sage com o código binomial(n, p). Para abreviar vamos usar C(n, p) = binomial(n, p). Teste o código abaixo, para o caso , .   "
},
{
  "id": "example-92",
  "level": "2",
  "url": "section-combinacoes-simples.html#example-92",
  "type": "Exemplo",
  "number": "6.4.7",
  "title": "",
  "body": " Uma criança possui 5 figurinhas distintas e outra criança possui 7 figurinhas distintas. Se as figurinhas da primeira criança são todas diferentes das figurinhas da segunda criança, de quantas maneiras é possível trocar 4 figurinhas pertencentes a primeira criança com 4 pertencentes a segunda?   A primeira criança pode escolher suas 4 figurinhas de maneiras e a segunda criança pode escolher suas 4 figurinhas de maneiras. Portanto, o número de maneiras de realizar a troca é    "
},
{
  "id": "example-93",
  "level": "2",
  "url": "section-combinacoes-simples.html#example-93",
  "type": "Exemplo",
  "number": "6.4.8",
  "title": "",
  "body": " Um Juiz dispõe de 11 mulheres, das quais somente 4 são advogadas.   Para formar um único júri com 9 juradas. Qual é o número de formas de compor o júri, com pelo menos 2 advogadas?  Para formar um único júri com 6 juradas. Qual é o número de formas de compor o júri, com pelo menos 2 advogadas?    item a) Basta escolher 9 juradas, pois pelo menos duas serão advogadas. Isto pode ser feito de maneiras.  item b) Se escolhermos diretamente 6 juradas, dentre as 11 mulheres disponíveis, estaremos contando os casos em que não temos pelo menos duas advogadas. Precisamos contornar este problema.  Para garantir que estamos contando todos os casos em que pelo menos duas advogadas foram selecionadas, vamos separar em três casos. 1º vamos contar o número de maneiras de selecionar 2 advogadas e 4 não advogadas. 2º vamos contar o número de maneiras de selecionar 3 advogadas e 3 não advogadas. 3º vamos contar o número de maneiras de selecionar 4 advogadas e 2 não advogadas. Como os casos são disjuntos, pelo Princípio aditivo a resposta é   No Sage, esse cálculo pode ser feito da seguinte maneira:    "
},
{
  "id": "example-94",
  "level": "2",
  "url": "section-combinacoes-simples.html#example-94",
  "type": "Exemplo",
  "number": "6.4.9",
  "title": "",
  "body": " De quantos modos podemos dividir 12 pessoas em três grupos de quatro pessoas cada?   Para o primeiro grupo, temos um total de maneiras de selecionar as 4 pessoas.  Para o segundo grupo temos um total de maneiras de selecionar as 4 pessoas.  Para o terceiro grupo temos um total de maneiras de selecionar as 4 pessoas.  Como a ordem dos grupos não importa, precisamos dividir por Portanto a resposta é    "
},
{
  "id": "exercise-26",
  "level": "2",
  "url": "section-combinacoes-simples.html#exercise-26",
  "type": "Exercício",
  "number": "6.4.3.1",
  "title": "",
  "body": " Quantas diagonais possuem um polígono de lados?     Cada vértice pode ser ligado a outros vértices por meio uma diagonal, pois o vértice nem pode ser ligado a ele mesmo, nem aos seus dois vértices adjacentes, usando diagonais. Como são vértices ficamos com diagonais, mas elas foram contadas duas vezes, portanto a resposta é   "
},
{
  "id": "exercise-27",
  "level": "2",
  "url": "section-combinacoes-simples.html#exercise-27",
  "type": "Exercício",
  "number": "6.4.3.2",
  "title": "",
  "body": " Quantas são as pedras de um dominó comum?   28   As pedras de um dominó possuem dois números que podem ter valores de 0 até 6. Dessas pedras, 7 possuem os dois números iguais. Para formar uma pedra com dois números diferentes, temos modos de escolher os números. Portanto o número de pedras de um dominó comum é   "
},
{
  "id": "exercise-28",
  "level": "2",
  "url": "section-combinacoes-simples.html#exercise-28",
  "type": "Exercício",
  "number": "6.4.3.3",
  "title": "",
  "body": " (UFPE 2012) As pedras de um dominó usual são compostas por dois quadrados, com 7 possíveis marcas (de zero pontos até 6 pontos). Quantas pedras terá um dominó se cada quadrado puder ter até 9 pontos? Veja no desenho abaixo um exemplo de uma nova pedra do dominó.    55   As pedras desse dominó possuem dois números que podem ter valores de 0 até 9. Dessas pedras, 10 possuem os dois números iguais. Para formar uma pedra com dois números diferentes, temos modos de escolher os números. Portanto o número de pedros desse dominó é   "
},
{
  "id": "exercise-29",
  "level": "2",
  "url": "section-combinacoes-simples.html#exercise-29",
  "type": "Exercício",
  "number": "6.4.3.4",
  "title": "",
  "body": " (UFPE 2001) Quantos são os paralelogramos com lados sobre os segmentos da figura seguinte, onde os segmentos que não se interceptam são paralelos.    90   Podemos prolongar os segmentos que definem os lados dos paralelogramos conforme a figura abaixo:   Paralelogramos com prolongamento de segmentos.    Observe que escolher dois segmentos em cima e dois segmentos do lado esquerdo define um único paralelogramo. Observe também que cada paralelogramo da figura corresponde a dois segmentos na parte de cima e dois segmentos do lado esquerdo. Portanto, a resposta é o número de maneiras de escolher 2 dentre 6 segmentos na parte de cima, multiplicado pelo número de maneiras de escolher 2 dentre 4 segmentos no lado esquerdo:   "
},
{
  "id": "exercise-30",
  "level": "2",
  "url": "section-combinacoes-simples.html#exercise-30",
  "type": "Exercício",
  "number": "6.4.3.5",
  "title": "",
  "body": " (PROFMAT 2015) Uma escola de educação básica possui 12 professores de matemática, sendo que 8 atuam exclusivamente no Ensino Fundamental e 4 atuam exclusivamente no Ensino Médio. Para a organização da 1ª Olimpíada de Matemática da escola, será formada uma comissão de 5 professores de matemática, de modo que pelo menos um deles seja professor do Ensino Médio. De quantas maneiras essa comissão poderá ser formada?     Vamos contar o total de modos de escolher 5 professores dentre os 12, depois subtraímos o número de casos em que nenhum professor do ensino médio foi selecionado. O número de soluções é   "
},
{
  "id": "exercise-31",
  "level": "2",
  "url": "section-combinacoes-simples.html#exercise-31",
  "type": "Exercício",
  "number": "6.4.3.6",
  "title": "",
  "body": " (UFBA 2006) Durante uma reunião, ocorreu uma divergência quanto à formação de uma comissão gestora, a ser escolhida entre os presentes. Um grupo defendia uma comissão com três membros, sendo um presidente, um vice-presidente e um secretário. Outro grupo queria uma comissão com três membros sem cargos definidos. A primeira alternativa oferece 280 possibilidades de escolha a mais que a segunda. Determine o número de pessoas presentes à reunião, sabendo-se que esse número é maior que 5.   8   Seja a quantidade de pessoas na reunião. No primeiro caso temos modos de escolher a comissão. No segundo caso temos modos de escolher a comissão. Como a primeira alternativa oferece possibilidades de escolha a mais que a segunda, temos Logo e Observe que no lado esquerdo da equação temos o produto de três números naturais consecutivos, e do outro lado, temos o número . Fatorando e reescrevendo como produto de três números naturais consecutivos obtemos: Portanto, e .  "
},
{
  "id": "exercise-32",
  "level": "2",
  "url": "section-combinacoes-simples.html#exercise-32",
  "type": "Exercício",
  "number": "6.4.3.7",
  "title": "",
  "body": "(OBM 2004 - 2ª fase do nível 3) Os doze alunos de uma turma de olimpíada saíam para jogar futebol todos os dias após a aula de matemática, formando dois times de 6 jogadores cada e jogando entre si. A cada dia eles formavam dois times diferentes dos times formados em dias anteriores. Ao final do ano, eles verificaram que cada 5 alunos haviam jogado juntos num mesmo time exatamente uma vez. Quantos times diferentes foram formados ao longo do ano?   Temos maneiras de escolher 6 dentre 12 alunos. Note que para cada 5 alunos fixados, temos 7 times possíveis.    "
},
{
  "id": "exercise-33",
  "level": "2",
  "url": "section-combinacoes-simples.html#exercise-33",
  "type": "Exercício",
  "number": "6.4.3.8",
  "title": "",
  "body": "(OBM 2006 - 2ª fase do nível 3) Seja inteiro positivo. De quantas maneiras podemos distribuir brinquedos distintos para crianças de modo que toda criança receba pelo menos um brinquedo?   Escolha uma criança para receber dois brinquedos, em seguida escolha os dois brinquedos dessa criança. Agora distribua um brinquedo para cada criança que restou.    "
},
{
  "id": "exercise-34",
  "level": "2",
  "url": "section-combinacoes-simples.html#exercise-34",
  "type": "Exercício",
  "number": "6.4.3.9",
  "title": "",
  "body": "(OBM 2013 - 2ª fase do nível 3) Para cobrir um tabuleiro de dimensões , podemos utilizar heptaminós amarelos, de dimensões , e octaminós vermelhos, de dimensões . De quantos modos podemos cobrir completamente o tabuleiro?     Suponha que vamos usar heptaminós e octaminós. Para cobrir tudo, temos .  Observe que é múltiplo de e de . Assim, é múltiplo de 8, pois . Analogamente, é múltiplo de 7, pois . Como e são primos entre si, é múltiplo de e é múltiplo de .  Sendo e , temos . Assim, os valores de são e , que correspondem a sendo e .  Analisando os três casos:  1º: , apenas uma maneira de cobrir, pois todas as peças são octaminós.  2º: , temos no total peças que colocaremos no tabuleiro. Como as peças de tamanho diferente possuem cores distintas e o tabuleiro ficará sem ''buracos'', precisamos escolher as posições que serão colocados os heptaminós, ou as posições que serão colocados os octaminós, pois estes dois valores são iguais. O número de maneiras de fazer isto é   3º: , análogo ao primeiro caso, apenas uma maneira.  No total temos maneiras de cobrir completamente o tabuleiro.  "
},
{
  "id": "exercise-35",
  "level": "2",
  "url": "section-combinacoes-simples.html#exercise-35",
  "type": "Exercício",
  "number": "6.4.3.10",
  "title": "",
  "body": "(OBM 2015 - 2ª fase do nível 3) Um subconjunto de elementos do conjunto é dito largo se ao colocar os seus elementos em ordem crescente tivermos a propriedade de que a diferença do segundo menos o primeiro é maior que , do terceiro para o segundo é maior que , do quarto para o terceiro é maior que e do quinto para o quarto é maior que . Existem quantos subconjuntos largos?     Sejam os elementos de um conjunto largo. Assim, e , ou seja, .  Desta forma, é um subconjunto de . Reciprocamente, se é um subconjunto de com então é um conjunto largo, pois e .  Com isso, a quantidade de subconjuntos largos é igual à quantidade de subconjuntos de elementos de , que é   "
},
{
  "id": "quest-fuvest2020comb",
  "level": "2",
  "url": "section-combinacoes-simples.html#quest-fuvest2020comb",
  "type": "Exercício",
  "number": "6.4.3.11",
  "title": "",
  "body": " (FUVEST 2020 - 2ª fase) Um jogo educativo possui 16 peças nos formatos: círculo, triângulo, quadrado e estrela, e cada formato é apresentado em 4 cores: amarelo, branco, laranja e verde. Dois jogadores distribuem entre si quantidades iguais dessas peças, de forma aleatória. O conjunto de 8 peças que cada jogador recebe é chamado de coleção.   Quantas são as possíveis coleções que um jogador pode receber?  A regra do jogo estabelece pontuações para as peças, da seguinte forma: círculo = 1 ponto, triângulo = 2 pontos, quadrado = 3 pontos e estrela = 4 pontos. Quantas são as possíveis coleções que valem 26 pontos ou mais?    a) b)   item a) O número de possíveis coleções é dado por:   item b) As coleções possíveis são:  1) 4 estrelas e 4 quadrados totalizando 28 pontos:  2) 4 estrelas, 3 quadrados e 1 triângulo totalizando 27 pontos:  3) 4 estrelas, 3 quadrados e 1 círculo totalizando 26 pontos:  4) 4 estrelas, 2 quadrados e 2 triângulos totalizando 26 pontos:  5) 3 estrelas, 4 quadrados e 1 triângulo totalizando 26 pontos: Portanto existem coleções possíveis.  "
},
{
  "id": "quest-fuvest2018comb",
  "level": "2",
  "url": "section-combinacoes-simples.html#quest-fuvest2018comb",
  "type": "Exercício",
  "number": "6.4.3.12",
  "title": "",
  "body": " (FUVEST 2018 - 2ª fase) Em um torneio de xadrez, há participantes. Na primeira rodada, há jogos. Calcule, em função de , o número de possibilidades para se fazer o emparceiramento da primeira rodada, sem levar em conta a cor das peças.      Para o primeiro jogo, temos um total de maneiras de escolher os participantes. Para o segundo jogo, temos um total de maneiras de escolher os participantes e assim sucessivamente, até que para o último jogo ficamos com maneiras de escolher os participantes.  Observe que a ordem os jogos não importa. Portanto, precisamos dividir pela quantidade de maneiras de ordenar esses jogos. A resposta é dada por:   "
},
{
  "id": "section-permutacoes-circulares",
  "level": "1",
  "url": "section-permutacoes-circulares.html",
  "type": "Seção",
  "number": "6.5",
  "title": "Permutações Circulares",
  "body": " Permutações Circulares    Definir Permutação Circular.  Mostrar como obter a lista com todas as permutações circulares com elementos distintos no Sage.  Mostrar como calcular o número de permutações circulares de elementos distintos.  Exemplificar.     O número de permutações circulares de elementos, é o número de maneiras de organizar objetos distintos ao longo de um círculo fixo (isto é, não pode ser retirado do plano e virado). Notação:     Observe que os três círculos da ( ) são equivalentes, ou seja, representam a mesma permutação circular, pois o segundo círculo pode ser obtido a partir do primeiro por uma rotação de e o terceiro círculo pode ser obtido a partir do primeiro por uma rotação de .   Três círculos que representam a mesma permutação circular.      O número total de permutações circulares com 3 elementos distintos é 2.   Observe que as permutações simples (1, 2, 3), (3, 1, 2) e (2, 3 ,1) podem ser identificadas com os círculos da ( ), colocando o primeiro elemento na parte mais alta do círculo, o segundo elemento do lado direito e o terceiro elemento do lado esquerdo. Portanto essas três permutações simples, correspondem a apenas uma permutação circular.  Observe que as permutações simples (1, 3, 2), (2, 1, 3) e (3, 2 ,1) podem ser identificadas com os círculos da ( ), da mesma forma que foi feito no caso anterior. Portanto essas três permutações simples, correspondem a apenas uma permutação circular.   Três circulos que representam a mesma permutação circular.   Como não temos mais casos, o número total de permutações circulares com três elementos é 2.   > O número de permutações circulares com elementos distintos é   Se não considerássemos equivalentes disposições que possam coincidir por rotação, teríamos disposições.  Como para cada disposição, temos disposições equivalentes, dividindo o total de permutações por , obtemos     A lista com todas as permutações circulares, pode ser obtida com o seguinte comando:    O número de permutações circulares com 10 elementos pode ser calculado da seguinte forma:     Quantas rodas de ciranda podem ser formadas com 8 pessoas?  Basta calcular o número de permutações circulares de 8 elementos.      Quantas rodas de ciranda podem ser formadas com 8 pessoas, se duas determinadas pessoas não podem ficar juntas?   Calculamos o número de permutações circulares com 8 elementos, . Agora, subtraímos desse total, o número de permutações de 8 elementos, na qual, dois deles estão juntos.   Duas formas de organizar os elementos 1 e 2.    O que dá um total de permutações circulares, pois temos duas formas de permutar os dois elementos que estão juntos, depois disso, olhamos para a roda de ciranda como se tivesse apenas 7 elementos. Portanto a resposta é       Exercícios   De quantos modos 7 meninos e 7 meninas podem formar uma roda de ciranda de modo que pessoas de mesmo sexo não fiquem juntas?   3628800    De quantos modos 18 casais podem formar uma roda de ciranda de modo que cada homem permaneça ao lado de sua mulher?   93241325150797824000   (VESTIBULAR UFPE – UFRPE \/ 1998 2ª ETAPA) Semelhante ao dominó, mas feito de pedras triangulares equiláteras, o jogo de trominó apresenta na face triangular superior um certo número de pontos com repetições, escolhidos de 1 a n, dispostos ao longo de cada aresta (ver figura).   Uma das peças com os valores 1, 2 e 4.    Quantas peças há no trominó, supondo ?  76   Observe que os números estão em disposição circular, então vamos separar as peças em três tipos:   Todos os lados com o mesmo valor. Cada peça pode ser formada de uma única forma, assim temos 6 peças desse tipo.  Dois lados possuem um valor e o terceiro lado possui um valor diferente. Uma vez decidido qual valor será usado duas vezes, cada peça pode ser formada de uma única forma, pois o número de permutações circulares com 3 elementos é 2, mas duas entradas são iguais, logo precisamos dividir por 2. Nesse caso temos modos de formar as peças.  Cada lado possui um valor diferente. Neste caso, cada peça pode ser formada de duas formas, pois o número de permutações circulares com 3 elementos é 2. Nesse caso temos modos de formar as peças.   Portanto, o número de soluções é:    "
},
{
  "id": "dEf",
  "level": "2",
  "url": "section-permutacoes-circulares.html#dEf",
  "type": "Objetivos",
  "number": "6.5",
  "title": "",
  "body": "  Definir Permutação Circular.  Mostrar como obter a lista com todas as permutações circulares com elementos distintos no Sage.  Mostrar como calcular o número de permutações circulares de elementos distintos.  Exemplificar.   "
},
{
  "id": "def-permutacao-circular",
  "level": "2",
  "url": "section-permutacoes-circulares.html#def-permutacao-circular",
  "type": "Definição",
  "number": "6.5.1",
  "title": "",
  "body": " O número de permutações circulares de elementos, é o número de maneiras de organizar objetos distintos ao longo de um círculo fixo (isto é, não pode ser retirado do plano e virado). Notação:   "
},
{
  "id": "remark-29",
  "level": "2",
  "url": "section-permutacoes-circulares.html#remark-29",
  "type": "Nota",
  "number": "6.5.2",
  "title": "",
  "body": " Observe que os três círculos da ( ) são equivalentes, ou seja, representam a mesma permutação circular, pois o segundo círculo pode ser obtido a partir do primeiro por uma rotação de e o terceiro círculo pode ser obtido a partir do primeiro por uma rotação de .   Três círculos que representam a mesma permutação circular.    "
},
{
  "id": "claim-1",
  "level": "2",
  "url": "section-permutacoes-circulares.html#claim-1",
  "type": "Afirmação",
  "number": "6.5.4",
  "title": "",
  "body": " O número total de permutações circulares com 3 elementos distintos é 2.   Observe que as permutações simples (1, 2, 3), (3, 1, 2) e (2, 3 ,1) podem ser identificadas com os círculos da ( ), colocando o primeiro elemento na parte mais alta do círculo, o segundo elemento do lado direito e o terceiro elemento do lado esquerdo. Portanto essas três permutações simples, correspondem a apenas uma permutação circular.  Observe que as permutações simples (1, 3, 2), (2, 1, 3) e (3, 2 ,1) podem ser identificadas com os círculos da ( ), da mesma forma que foi feito no caso anterior. Portanto essas três permutações simples, correspondem a apenas uma permutação circular.   Três circulos que representam a mesma permutação circular.   Como não temos mais casos, o número total de permutações circulares com três elementos é 2.  "
},
{
  "id": "teo-permutacao-circular",
  "level": "2",
  "url": "section-permutacoes-circulares.html#teo-permutacao-circular",
  "type": "Teorema",
  "number": "6.5.6",
  "title": "",
  "body": "> O número de permutações circulares com elementos distintos é   Se não considerássemos equivalentes disposições que possam coincidir por rotação, teríamos disposições.  Como para cada disposição, temos disposições equivalentes, dividindo o total de permutações por , obtemos   "
},
{
  "id": "tec-permutacao-circular",
  "level": "2",
  "url": "section-permutacoes-circulares.html#tec-permutacao-circular",
  "type": "Tecnologia",
  "number": "6.5.7",
  "title": "",
  "body": " A lista com todas as permutações circulares, pode ser obtida com o seguinte comando:    O número de permutações circulares com 10 elementos pode ser calculado da seguinte forma:   "
},
{
  "id": "example-95",
  "level": "2",
  "url": "section-permutacoes-circulares.html#example-95",
  "type": "Exemplo",
  "number": "6.5.8",
  "title": "",
  "body": " Quantas rodas de ciranda podem ser formadas com 8 pessoas?  Basta calcular o número de permutações circulares de 8 elementos.    "
},
{
  "id": "example-96",
  "level": "2",
  "url": "section-permutacoes-circulares.html#example-96",
  "type": "Exemplo",
  "number": "6.5.9",
  "title": "",
  "body": " Quantas rodas de ciranda podem ser formadas com 8 pessoas, se duas determinadas pessoas não podem ficar juntas?   Calculamos o número de permutações circulares com 8 elementos, . Agora, subtraímos desse total, o número de permutações de 8 elementos, na qual, dois deles estão juntos.   Duas formas de organizar os elementos 1 e 2.    O que dá um total de permutações circulares, pois temos duas formas de permutar os dois elementos que estão juntos, depois disso, olhamos para a roda de ciranda como se tivesse apenas 7 elementos. Portanto a resposta é    "
},
{
  "id": "exercise-38",
  "level": "2",
  "url": "section-permutacoes-circulares.html#exercise-38",
  "type": "Exercício",
  "number": "6.5.1",
  "title": "",
  "body": " De quantos modos 7 meninos e 7 meninas podem formar uma roda de ciranda de modo que pessoas de mesmo sexo não fiquem juntas?   3628800  "
},
{
  "id": "exercise-39",
  "level": "2",
  "url": "section-permutacoes-circulares.html#exercise-39",
  "type": "Exercício",
  "number": "6.5.2",
  "title": "",
  "body": " De quantos modos 18 casais podem formar uma roda de ciranda de modo que cada homem permaneça ao lado de sua mulher?   93241325150797824000  "
},
{
  "id": "exercise-40",
  "level": "2",
  "url": "section-permutacoes-circulares.html#exercise-40",
  "type": "Exercício",
  "number": "6.5.3",
  "title": "",
  "body": "(VESTIBULAR UFPE – UFRPE \/ 1998 2ª ETAPA) Semelhante ao dominó, mas feito de pedras triangulares equiláteras, o jogo de trominó apresenta na face triangular superior um certo número de pontos com repetições, escolhidos de 1 a n, dispostos ao longo de cada aresta (ver figura).   Uma das peças com os valores 1, 2 e 4.    Quantas peças há no trominó, supondo ?  76   Observe que os números estão em disposição circular, então vamos separar as peças em três tipos:   Todos os lados com o mesmo valor. Cada peça pode ser formada de uma única forma, assim temos 6 peças desse tipo.  Dois lados possuem um valor e o terceiro lado possui um valor diferente. Uma vez decidido qual valor será usado duas vezes, cada peça pode ser formada de uma única forma, pois o número de permutações circulares com 3 elementos é 2, mas duas entradas são iguais, logo precisamos dividir por 2. Nesse caso temos modos de formar as peças.  Cada lado possui um valor diferente. Neste caso, cada peça pode ser formada de duas formas, pois o número de permutações circulares com 3 elementos é 2. Nesse caso temos modos de formar as peças.   Portanto, o número de soluções é:  "
},
{
  "id": "section-permutacoes-com-repeticoes",
  "level": "1",
  "url": "section-permutacoes-com-repeticoes.html",
  "type": "Seção",
  "number": "6.6",
  "title": "Permutações com Repetições",
  "body": " Permutações com Repetições    Definir Permutação com Repetição.  Mostrar como obter a lista com todas as permutações com repetições de elementos no Sage.  Mostrar como calcular o número de permutações com repetições de elementos.  Exemplificar.    Quando estamos contando o número de permutações, precisamos levar em consideração se todos os elementos são distintos ou não, pois a permutação de dois elementos idênticos não gera uma nova permutação. Veja o exemplo a seguir.   Quantos são os anagramas da palavra SAGEMATH?   Observe que a palavra SAGEMATH possui 8 letras, mas a letra A aparece duas vezes, o restante aparece apenas uma vez. Podemos imaginar, por enquanto, que a palavra é assim com , nesse caso teríamos um total de permutações.  Agora vamos resolver o problema das repetições. Observe que para cada permutação, trocar os A's de lugar não muda o anagrama. Portanto, precisamos dividir do total de permutações, o número de maneiras de ordenar os A's, como se fossem elementos distintos. Dessa forma, a resposta é     Quando permutamos uma lista de objetos, na qual, nem todos os elementos são distintos, precisamos considerar que permutar dois elementos idênticos não gera uma nova permutação. Este tipo de permutação é chamado de permutação com repetição .   Obtendo a lista com todas as permutações com repetições dos elementos :   O número de permutações de objetos, com um objeto repetido vezes, outro objeto repetido vezes, até o \"último\" objeto repetido vezes, com é denotado por:     Considere os objetos da seguinte forma: observe que Para encontrar o número de formas de permutar esses elementos, vamos quebrar em etapas. Na primeira etapa, vamos escolher posições, dentre , para colocar . Na segunda etapa, vamos escolher posições, dentre , para colocar . Na -ésima etapa, vamos escolher posições, dentre , para colocar . Portanto, Calculando cada  E cancelando os , obtemos     Obtendo o número de permutações com repetições no Sage. Da linha 1 até a linha 5 temos uma implementação de uma função para efetuar esse cálculo. Na linha 6, a função está sendo usada para o caso e .   Para entender essa implementação e aprender mais sobre o SageMath veja a referência .    Quantos são os anagramas da palavra MATEMATICA?   Temos uma palavra com 10 letras. Das 10 letras, temos 3 A's, 2 M's e 2 T's e as outras aparecem uma única vez, portanto o número de anagramas desta palavra é      Quantos são os anagramas da palavra MATEMATICA que começam por vogal?   Se o anagrama começa por vogal, temos as possibilidades, A ou E ou I.  Começando com A, temos um total de anagramas, começando com E, temos um total de anagramas e começando com I, temos um total de anagramas. Portanto a resposta é Este cálculo pode ser efetuado no Sage da seguinte maneira:      De quantos modos podemos dividir 12 pessoas em três grupos de quatro pessoas cada?   Use os números de 1 à 12 para representar as pessoas. Desta forma, a posição de cada permutação dos dígitos: serve para representar quem está no grupo 1, no grupo 2 e no grupo 3, respectivamente. Assim pela ordem que está escrito, os números que estão no grupo 1 são: , no grupo 2 são e no grupo 3 são .  Desta forma, usando permutação com repetição para , o número de maneiras de dividir 12 pessoas em três grupos, levando em consideração a ordem dos grupos é  Como a ordem dos grupos não é importante, estamos contando a mais. Assim, precisamos dividir tudo pelo número de maneiras de ordenar os 3 grupos que é 3!. Portanto a resposta é      Exercícios   (OPEMAT 2016 - nível 2) A figura abaixo representa o mapa de uma cidade. Cada aresta representa uma rua e cada vértice representa um cruzamento. Quantos são os trajetos de comprimento mínimo ligando o ponto A ao ponto B?    1743    Quantos números de 8 dígitos, maiores que 50.000.000, podem ser formados usando apenas os algarismos 1, 2, 5, 5, 5, 7, 7, 7?   840    De quantos modos podemos colocar em fila 6 letras A, 6 letras B, 5 letras C e 4 letras D, de modo que não haja duas letras C juntas?   10406235840    De quantos modos podem ser pintados 15 objetos iguais usando 6 cores diferentes?   15504    Quantas são as opções que temos de colocar 10 bolinhas e 7 barras em sequência?   19448   (OBM 2011 - 2ª fase do nível 3) Uma sequência de letras, com ou sem sentido, é dita alternada quando é formada alternadamente por consoantes e vogais. Por exemplo, EZEQAF, MATEMÁTICA, LEGAL e ANIMADA são palavras alternadas, mas DSOIUF, DINHEIRO e ORDINÁRIO não são. Quantos anagramas da palavra FELICIDADE (incluindo a palavra FELICIDADE) são sequências alternadas?   3600   As consoantes de FELICIDADE são F, L, C, D, D e as vogais são E, I, I, A, E. Como são 5 vogais e 5 consoantes, cada anagrama alternado terá cada consoante em posição ímpar ou em posição par. Organizando as consoantes em posições ímpares, ficamos com a seguinte organização   Na qual, os espaços serão ocupados por vogais. Assim, temos um total de maneiras de ordenar essas consoantes. Para ordenar as vogais, temos maneiras, pois temos no total 5 letras, sendo duas letras E, duas letras I e uma letra A.  Como podemos alterar as vogais com as consoantes, o número de anagramas alternados de FELICIDADE é     Um bar vende três tipos de cerveja: Antártica, Brahma e Devassa. De quantos modos uma pessoa pode comprar 7 garrafas de cerveja?   36   O número de soluções deste problema é o mesmo que o número de solução inteiras, não negativas da equação: Portanto a resposta é     De quantos formas 12 estudantes podem ser divididos e colocados em 3 salas, sendo 4 na primeira, 5 na segunda e 3 na terceira?   27720   Pense na seguinte lista: Para cada permutação da lista , podemos distribuir os estudantes nas salas da seguinte maneira. Use a posição do número para indicar a pessoa e o número para indicar a sala. Desta forma, a resposta é:   Por exemplo, a permutação identidade, que é a apresentada na lista indica que a 1ª, a 2ª a 3ª e a 4ª pessoa deve ficar na sala 1. A 4ª, a 5ª, a 6ª, a 7ª, e a 8ª pessoa deve ficar na sala 2 e assim por diante.    De quantos modos 8 pessoas podem ocupar duas salas distintas, devendo cada sala conter pelo menos 3 pessoas?   182   Observe que temos 3 casos para distribuir as pessoas nas duas salas.  1º caso: 3 pessoas na sala 1 e 5 pessoas na sala 2. Neste caso temos um total de soluções.  2º caso: 4 pessoas na sala 1 e 4 pessoas na sala 2. Neste caso temos um total de soluções.  3º caso: 5 pessoas na sala 1 e 3 pessoas na sala 2. Neste caso temos um total de soluções.  Portanto a resposta é     Um baralho tem 52 cartas. De quantos modos podemos distribuí-las entre 4 jogadores, de modo que cada um receba 13 cartas?   53644737765488792839237440000   Pense em uma lista composta por 13 números 1, 13 números 2, 13 números 3 e 13 números 4. O número de permutações com repetições desta lista é o número de modos de distribuir as 52 duas cartas entre os 4 jogadores, com cada um recebendo 13 cartas.  A justificativa é a seguinte. Para cada elemento da lista permutada, use a posição do elemento para pegar a carta que deve estar em uma pilha ou ordenada, e use o número para indicar a pessoa, sendo o número 1 indicando a primeira pessoa e assim por diante. A resposta é:     No mapa abaixo estão esboçadas as ruas de um bairro. As ruas verticais são paralelas entre si e é igual a distância entre ruas consecutivas; o mesmo acontece com as ruas horizontais. Calcule o número de formas de sair de A e chegar até B percorrendo a menor distância possível.    735   Podemos separar os caminhos que saem de A e chegam em B em tipos disjuntos.   Mapa da solução.    1º tipo: De A para X e de X para B. Nesse caso temos caminhos de A para X e caminhos de X para B. No total temos caminhos do 1º tipo.  2º tipo: De A para Y e de Y para B. Nesse caso temos caminhos de A para Y e caminhos de Y para B. No total temos caminhos do 2º tipo.  Como os caminhos do 1º e 2º tipos são disjuntos a resposta é     João vai comprar algo que custa centavos em uma máquina automática e dispõe de moedas de centavos do mesmo modelo e moedas de centavos também do mesmo modelo. Assim, sendo o número de diferentes sequências de moedas que ele pode inserir de modo a totalizar os 55 centavos, determine o valor de .     João pode escolher os valores das moedas de maneiras, em cada caso, existem várias maneiras de ordenar as moedas escolhida:  moedas de centavos e de centavos, totalizando ordens possíveis;  moedas de centavos e de centavos, totalizando ordens possíveis;  moedas de centavos e de centavos, totalizando ordens possíveis;  moedas de centavos e de centavos, totalizando ordens possíveis.  Portanto, a resposta é     "
},
{
  "id": "dEf",
  "level": "2",
  "url": "section-permutacoes-com-repeticoes.html#dEf",
  "type": "Objetivos",
  "number": "6.6",
  "title": "",
  "body": "  Definir Permutação com Repetição.  Mostrar como obter a lista com todas as permutações com repetições de elementos no Sage.  Mostrar como calcular o número de permutações com repetições de elementos.  Exemplificar.   "
},
{
  "id": "example-97",
  "level": "2",
  "url": "section-permutacoes-com-repeticoes.html#example-97",
  "type": "Exemplo",
  "number": "6.6.1",
  "title": "",
  "body": " Quantos são os anagramas da palavra SAGEMATH?   Observe que a palavra SAGEMATH possui 8 letras, mas a letra A aparece duas vezes, o restante aparece apenas uma vez. Podemos imaginar, por enquanto, que a palavra é assim com , nesse caso teríamos um total de permutações.  Agora vamos resolver o problema das repetições. Observe que para cada permutação, trocar os A's de lugar não muda o anagrama. Portanto, precisamos dividir do total de permutações, o número de maneiras de ordenar os A's, como se fossem elementos distintos. Dessa forma, a resposta é   "
},
{
  "id": "definition-28",
  "level": "2",
  "url": "section-permutacoes-com-repeticoes.html#definition-28",
  "type": "Definição",
  "number": "6.6.2",
  "title": "",
  "body": " Quando permutamos uma lista de objetos, na qual, nem todos os elementos são distintos, precisamos considerar que permutar dois elementos idênticos não gera uma nova permutação. Este tipo de permutação é chamado de permutação com repetição .  "
},
{
  "id": "technology-11",
  "level": "2",
  "url": "section-permutacoes-com-repeticoes.html#technology-11",
  "type": "Tecnologia",
  "number": "6.6.3",
  "title": "",
  "body": "Obtendo a lista com todas as permutações com repetições dos elementos :  "
},
{
  "id": "def-permutacao-repeticao",
  "level": "2",
  "url": "section-permutacoes-com-repeticoes.html#def-permutacao-repeticao",
  "type": "Definição",
  "number": "6.6.4",
  "title": "",
  "body": "O número de permutações de objetos, com um objeto repetido vezes, outro objeto repetido vezes, até o \"último\" objeto repetido vezes, com é denotado por:  "
},
{
  "id": "teo-permutacao-repeticao",
  "level": "2",
  "url": "section-permutacoes-com-repeticoes.html#teo-permutacao-repeticao",
  "type": "Teorema",
  "number": "6.6.5",
  "title": "",
  "body": "  Considere os objetos da seguinte forma: observe que Para encontrar o número de formas de permutar esses elementos, vamos quebrar em etapas. Na primeira etapa, vamos escolher posições, dentre , para colocar . Na segunda etapa, vamos escolher posições, dentre , para colocar . Na -ésima etapa, vamos escolher posições, dentre , para colocar . Portanto, Calculando cada  E cancelando os , obtemos   "
},
{
  "id": "tec-permutacao-repeticao",
  "level": "2",
  "url": "section-permutacoes-com-repeticoes.html#tec-permutacao-repeticao",
  "type": "Tecnologia",
  "number": "6.6.6",
  "title": "",
  "body": " Obtendo o número de permutações com repetições no Sage. Da linha 1 até a linha 5 temos uma implementação de uma função para efetuar esse cálculo. Na linha 6, a função está sendo usada para o caso e .   Para entender essa implementação e aprender mais sobre o SageMath veja a referência .  "
},
{
  "id": "example-98",
  "level": "2",
  "url": "section-permutacoes-com-repeticoes.html#example-98",
  "type": "Exemplo",
  "number": "6.6.7",
  "title": "",
  "body": " Quantos são os anagramas da palavra MATEMATICA?   Temos uma palavra com 10 letras. Das 10 letras, temos 3 A's, 2 M's e 2 T's e as outras aparecem uma única vez, portanto o número de anagramas desta palavra é    "
},
{
  "id": "example-99",
  "level": "2",
  "url": "section-permutacoes-com-repeticoes.html#example-99",
  "type": "Exemplo",
  "number": "6.6.8",
  "title": "",
  "body": " Quantos são os anagramas da palavra MATEMATICA que começam por vogal?   Se o anagrama começa por vogal, temos as possibilidades, A ou E ou I.  Começando com A, temos um total de anagramas, começando com E, temos um total de anagramas e começando com I, temos um total de anagramas. Portanto a resposta é Este cálculo pode ser efetuado no Sage da seguinte maneira:    "
},
{
  "id": "exemplo_permut_repet",
  "level": "2",
  "url": "section-permutacoes-com-repeticoes.html#exemplo_permut_repet",
  "type": "Exemplo",
  "number": "6.6.9",
  "title": "",
  "body": " De quantos modos podemos dividir 12 pessoas em três grupos de quatro pessoas cada?   Use os números de 1 à 12 para representar as pessoas. Desta forma, a posição de cada permutação dos dígitos: serve para representar quem está no grupo 1, no grupo 2 e no grupo 3, respectivamente. Assim pela ordem que está escrito, os números que estão no grupo 1 são: , no grupo 2 são e no grupo 3 são .  Desta forma, usando permutação com repetição para , o número de maneiras de dividir 12 pessoas em três grupos, levando em consideração a ordem dos grupos é  Como a ordem dos grupos não é importante, estamos contando a mais. Assim, precisamos dividir tudo pelo número de maneiras de ordenar os 3 grupos que é 3!. Portanto a resposta é    "
},
{
  "id": "exercise-41",
  "level": "2",
  "url": "section-permutacoes-com-repeticoes.html#exercise-41",
  "type": "Exercício",
  "number": "6.6.1",
  "title": "",
  "body": " (OPEMAT 2016 - nível 2) A figura abaixo representa o mapa de uma cidade. Cada aresta representa uma rua e cada vértice representa um cruzamento. Quantos são os trajetos de comprimento mínimo ligando o ponto A ao ponto B?    1743  "
},
{
  "id": "exercise-42",
  "level": "2",
  "url": "section-permutacoes-com-repeticoes.html#exercise-42",
  "type": "Exercício",
  "number": "6.6.2",
  "title": "",
  "body": " Quantos números de 8 dígitos, maiores que 50.000.000, podem ser formados usando apenas os algarismos 1, 2, 5, 5, 5, 7, 7, 7?   840  "
},
{
  "id": "exercise-43",
  "level": "2",
  "url": "section-permutacoes-com-repeticoes.html#exercise-43",
  "type": "Exercício",
  "number": "6.6.3",
  "title": "",
  "body": " De quantos modos podemos colocar em fila 6 letras A, 6 letras B, 5 letras C e 4 letras D, de modo que não haja duas letras C juntas?   10406235840  "
},
{
  "id": "exercise-44",
  "level": "2",
  "url": "section-permutacoes-com-repeticoes.html#exercise-44",
  "type": "Exercício",
  "number": "6.6.4",
  "title": "",
  "body": " De quantos modos podem ser pintados 15 objetos iguais usando 6 cores diferentes?   15504  "
},
{
  "id": "exercise-45",
  "level": "2",
  "url": "section-permutacoes-com-repeticoes.html#exercise-45",
  "type": "Exercício",
  "number": "6.6.5",
  "title": "",
  "body": " Quantas são as opções que temos de colocar 10 bolinhas e 7 barras em sequência?   19448  "
},
{
  "id": "exercise-46",
  "level": "2",
  "url": "section-permutacoes-com-repeticoes.html#exercise-46",
  "type": "Exercício",
  "number": "6.6.6",
  "title": "",
  "body": "(OBM 2011 - 2ª fase do nível 3) Uma sequência de letras, com ou sem sentido, é dita alternada quando é formada alternadamente por consoantes e vogais. Por exemplo, EZEQAF, MATEMÁTICA, LEGAL e ANIMADA são palavras alternadas, mas DSOIUF, DINHEIRO e ORDINÁRIO não são. Quantos anagramas da palavra FELICIDADE (incluindo a palavra FELICIDADE) são sequências alternadas?   3600   As consoantes de FELICIDADE são F, L, C, D, D e as vogais são E, I, I, A, E. Como são 5 vogais e 5 consoantes, cada anagrama alternado terá cada consoante em posição ímpar ou em posição par. Organizando as consoantes em posições ímpares, ficamos com a seguinte organização   Na qual, os espaços serão ocupados por vogais. Assim, temos um total de maneiras de ordenar essas consoantes. Para ordenar as vogais, temos maneiras, pois temos no total 5 letras, sendo duas letras E, duas letras I e uma letra A.  Como podemos alterar as vogais com as consoantes, o número de anagramas alternados de FELICIDADE é   "
},
{
  "id": "exercise-47",
  "level": "2",
  "url": "section-permutacoes-com-repeticoes.html#exercise-47",
  "type": "Exercício",
  "number": "6.6.7",
  "title": "",
  "body": " Um bar vende três tipos de cerveja: Antártica, Brahma e Devassa. De quantos modos uma pessoa pode comprar 7 garrafas de cerveja?   36   O número de soluções deste problema é o mesmo que o número de solução inteiras, não negativas da equação: Portanto a resposta é   "
},
{
  "id": "exercise-48",
  "level": "2",
  "url": "section-permutacoes-com-repeticoes.html#exercise-48",
  "type": "Exercício",
  "number": "6.6.8",
  "title": "",
  "body": " De quantos formas 12 estudantes podem ser divididos e colocados em 3 salas, sendo 4 na primeira, 5 na segunda e 3 na terceira?   27720   Pense na seguinte lista: Para cada permutação da lista , podemos distribuir os estudantes nas salas da seguinte maneira. Use a posição do número para indicar a pessoa e o número para indicar a sala. Desta forma, a resposta é:   Por exemplo, a permutação identidade, que é a apresentada na lista indica que a 1ª, a 2ª a 3ª e a 4ª pessoa deve ficar na sala 1. A 4ª, a 5ª, a 6ª, a 7ª, e a 8ª pessoa deve ficar na sala 2 e assim por diante.  "
},
{
  "id": "exercise-49",
  "level": "2",
  "url": "section-permutacoes-com-repeticoes.html#exercise-49",
  "type": "Exercício",
  "number": "6.6.9",
  "title": "",
  "body": " De quantos modos 8 pessoas podem ocupar duas salas distintas, devendo cada sala conter pelo menos 3 pessoas?   182   Observe que temos 3 casos para distribuir as pessoas nas duas salas.  1º caso: 3 pessoas na sala 1 e 5 pessoas na sala 2. Neste caso temos um total de soluções.  2º caso: 4 pessoas na sala 1 e 4 pessoas na sala 2. Neste caso temos um total de soluções.  3º caso: 5 pessoas na sala 1 e 3 pessoas na sala 2. Neste caso temos um total de soluções.  Portanto a resposta é   "
},
{
  "id": "exercise-50",
  "level": "2",
  "url": "section-permutacoes-com-repeticoes.html#exercise-50",
  "type": "Exercício",
  "number": "6.6.10",
  "title": "",
  "body": " Um baralho tem 52 cartas. De quantos modos podemos distribuí-las entre 4 jogadores, de modo que cada um receba 13 cartas?   53644737765488792839237440000   Pense em uma lista composta por 13 números 1, 13 números 2, 13 números 3 e 13 números 4. O número de permutações com repetições desta lista é o número de modos de distribuir as 52 duas cartas entre os 4 jogadores, com cada um recebendo 13 cartas.  A justificativa é a seguinte. Para cada elemento da lista permutada, use a posição do elemento para pegar a carta que deve estar em uma pilha ou ordenada, e use o número para indicar a pessoa, sendo o número 1 indicando a primeira pessoa e assim por diante. A resposta é:   "
},
{
  "id": "exercise-51",
  "level": "2",
  "url": "section-permutacoes-com-repeticoes.html#exercise-51",
  "type": "Exercício",
  "number": "6.6.11",
  "title": "",
  "body": " No mapa abaixo estão esboçadas as ruas de um bairro. As ruas verticais são paralelas entre si e é igual a distância entre ruas consecutivas; o mesmo acontece com as ruas horizontais. Calcule o número de formas de sair de A e chegar até B percorrendo a menor distância possível.    735   Podemos separar os caminhos que saem de A e chegam em B em tipos disjuntos.   Mapa da solução.    1º tipo: De A para X e de X para B. Nesse caso temos caminhos de A para X e caminhos de X para B. No total temos caminhos do 1º tipo.  2º tipo: De A para Y e de Y para B. Nesse caso temos caminhos de A para Y e caminhos de Y para B. No total temos caminhos do 2º tipo.  Como os caminhos do 1º e 2º tipos são disjuntos a resposta é   "
},
{
  "id": "exercise-52",
  "level": "2",
  "url": "section-permutacoes-com-repeticoes.html#exercise-52",
  "type": "Exercício",
  "number": "6.6.12",
  "title": "",
  "body": " João vai comprar algo que custa centavos em uma máquina automática e dispõe de moedas de centavos do mesmo modelo e moedas de centavos também do mesmo modelo. Assim, sendo o número de diferentes sequências de moedas que ele pode inserir de modo a totalizar os 55 centavos, determine o valor de .     João pode escolher os valores das moedas de maneiras, em cada caso, existem várias maneiras de ordenar as moedas escolhida:  moedas de centavos e de centavos, totalizando ordens possíveis;  moedas de centavos e de centavos, totalizando ordens possíveis;  moedas de centavos e de centavos, totalizando ordens possíveis;  moedas de centavos e de centavos, totalizando ordens possíveis.  Portanto, a resposta é   "
},
{
  "id": "section-combinacoes-completas",
  "level": "1",
  "url": "section-combinacoes-completas.html",
  "type": "Seção",
  "number": "6.7",
  "title": "Combinações Completas",
  "body": " Combinações Completas    Definir combinação completa.  Mostrar como obter a lista com todas as permutações com repetições de elementos.  Mostrar como calcular o número de permutações com repetições de elementos.  Exemplificar.    Na combinação completa (ou combinação com repetição ), contamos o número de maneiras de escolher elementos de um conjunto, sendo permitido escolher um elemento repetidamente. Antes de formalizar o conceito, começamos com um exemplo que ilustra bem essa noção.   Em uma determinada sorveteria há 6 sabores disponíveis, de quantos modos pode ser feito um pedido de uma taça com 3 bolas de sorvete?   Denote cada sabor por um número entre e . Note que este problema é equivalente ao de encontrar o número de soluções inteiras da equação: na qual, cada representa a quantidade de bolas de sorvete com sabor . Claramente, temos a restrição , pois não podemos pegar uma quantidade negativa de bolas de sorvete.  Vamos mostrar que o problema de encontrar o número de soluções é equivalente a encontrar o número de permutações com repetições de uma sequência com elementos de um tipo e elementos de outro tipo.  Escreva de até , entre uma incógnita e outra coloque na linha de baixo um traço vertical. Para representar a quantidade bolas de sorvete com sabor ou , coloque a respectiva quantidade de bolas antes do primeiro traço ou depois do último traço, respectivamente. Para representar a quantidade de bolas de sorvete com sabor , com , coloque a quantidade de bolas abaixo de , entre dois traços consecutivos. Assim, a solução é representada por:   Observe que cada permutação dessa representação de traços e bolas é uma solução da Equação e que cada solução da Equação pode ser representada com traços de bolas (Existe uma bijeção entre as duas coisas).  Portanto, para encontrar o número de soluções da Equação , basta calcular pois, temos 5 traços e 3 bolas, então estamos permutando um total de 8 elementos, sendo 5 de um tipo e 3 de outro tipo.      O número de combinações completas de elementos, tomados a é o número de formas de escolher elementos dentre disponíveis, podendo escolher repetidamente os objetos, até obter a quantidade .  O número de combinações completas de elementos, tomados a é denotado por:   As combinações completas dos objetos tomados 3 a 3 são:     Calcular é o mesmo que encontrar o número de soluções da equação: Usando a ideia da representação de \"bolas e traços\" da Solução do ( ) vamos ficar com bolas e traços. O cálculo do número de permutações destes objetos com objetos de um tipo e objetos de outro tipo é dado por:     Para obter o número de combinações completas de ,tomados a , usamos o código binomial(p+n-1, p).     Quantas são as soluções inteiras e não negativas de   O número de soluções desta equação, com é o número de combinações completas de 10 elementos, tomados 20 a 20:      Quantas são as soluções inteiras da equação com , e ?   Defina   Substituindo, temos ou seja Desta forma, o número de soluções de será a solução do problema, pois, quando teremos , quando teremos e quando teremos . Portanto a resposta é      Quantas são as soluções inteiras e não negativas de   Observe que uma possibilidade seria calcular o número de soluções de cada um dos casos: A soma do número de soluções de cada um dos casos é a resposta, no entanto, é inviável fazer tal cálculo. Felizmente temos outra forma de resolver este problema.  Observe que existe uma bijeção entre o conjunto das soluções de com o conjunto das soluções da equação :   Para entender a bijeção, observe o seguinte. Somando , nos dois lados da igualdade, na linha de , não mudamos absolutamente nada e ficamos com:   Cada solução da linha , é uma solução de com o valor de igual a . E para cada a solução de vai ser a solução da linha de .  Portanto a resposta é o número de solução da equação que é dado por:     (VESTIBULAR UFPE – UFRPE \/ 1998 2ª ETAPA) Semelhante ao dominó, mas feito de pedras triangulares equiláteras, o jogo de trominó apresenta na face triangular superior um certo número de pontos com repetições, escolhidos de 1 a n, dispostos ao longo de cada aresta (ver figura).   Uma das peças com os valores 1, 2 e 4.    Quantas peças há no trominó, supondo n = 6?   Observe que os números estão em disposição circular, então vamos separar as peças em três tipos:   Todos os lados com o mesmo valor. Cada peça pode ser formada de uma única forma.  Dois lados possuem um valor e o terceiro lado possui um valor diferente. Cada peça pode ser formada de uma única forma, pois o número de permutações circulares com 3 elementos é 2, mas como temos duas entradas iguais, precisamos dividir por 2.  Cada lado possui um valor diferente. Cada peça pode ser formada de duas formas, pois o número de permutações circulares com 3 elementos é 2.   Inicialmente, vamos contar como se em cada tipo, as peças só pudessem ser formadas de uma forma, depois vamos acrescentar a quantidade de peças do terceiro tipo, que fica faltando nessa contagem inicial.  Temos que escolher os valores de cada um dos 3 lados de cada peça do trominó. Como os valores vão de 1 até 6 e são 3 lados, o número de peças do trominó (sem contar as permutações circulares) para é o número de soluções inteiras não negativas da equação: que é dado por .  Agora precisamos contar as peças, do terceiro tipo, que estão faltando. Como os três valores são diferentes, temos 6 opções de valores para escolher 3 e para cada escolha, temos duas formas de organizar na peça do trominó, portanto o número de peças desse tipo é: Já que, a metade das peças do terceiro tipo foram contadas uma vez pela combinação completa, , a quantidade total de peças é:     Exercícios   Quantas são as soluções inteiras positivas de ?      Quantas são as peças de um dominó comum?   28   Sejam variáveis. Cada solução não negativa da equação: representa uma pedra do dominó. Portanto, o número de pedras do dominó é    (UFPE 2012) As pedras de um dominó usual são compostas por dois quadrados, com 7 possíveis marcas (de zero pontos até 6 pontos). Quantas pedras terá um dominó se cada quadrado puder ter até 9 pontos? Veja no desenho abaixo um exemplo de uma nova pedra do dominó.    55   Sejam variáveis. Cada solução não negativa da equação: representa uma pedra do dominó. Portanto, o número de pedras do dominó é    Quantas são as soluções inteiras não-negativas de nas quais ?   200    Quantos inteiros entre e , inclusive, possui a propriedade: \"cada dígito é menor ou igual ao seu sucessor\"?   24309    De quantas maneiras é possível colocar 10 anéis diferentes em 8 dedos?   70572902400    "
},
{
  "id": "dEf",
  "level": "2",
  "url": "section-combinacoes-completas.html#dEf",
  "type": "Objetivos",
  "number": "6.7",
  "title": "",
  "body": "  Definir combinação completa.  Mostrar como obter a lista com todas as permutações com repetições de elementos.  Mostrar como calcular o número de permutações com repetições de elementos.  Exemplificar.   "
},
{
  "id": "exem-com-completa",
  "level": "2",
  "url": "section-combinacoes-completas.html#exem-com-completa",
  "type": "Exemplo",
  "number": "6.7.1",
  "title": "",
  "body": " Em uma determinada sorveteria há 6 sabores disponíveis, de quantos modos pode ser feito um pedido de uma taça com 3 bolas de sorvete?   Denote cada sabor por um número entre e . Note que este problema é equivalente ao de encontrar o número de soluções inteiras da equação: na qual, cada representa a quantidade de bolas de sorvete com sabor . Claramente, temos a restrição , pois não podemos pegar uma quantidade negativa de bolas de sorvete.  Vamos mostrar que o problema de encontrar o número de soluções é equivalente a encontrar o número de permutações com repetições de uma sequência com elementos de um tipo e elementos de outro tipo.  Escreva de até , entre uma incógnita e outra coloque na linha de baixo um traço vertical. Para representar a quantidade bolas de sorvete com sabor ou , coloque a respectiva quantidade de bolas antes do primeiro traço ou depois do último traço, respectivamente. Para representar a quantidade de bolas de sorvete com sabor , com , coloque a quantidade de bolas abaixo de , entre dois traços consecutivos. Assim, a solução é representada por:   Observe que cada permutação dessa representação de traços e bolas é uma solução da Equação e que cada solução da Equação pode ser representada com traços de bolas (Existe uma bijeção entre as duas coisas).  Portanto, para encontrar o número de soluções da Equação , basta calcular pois, temos 5 traços e 3 bolas, então estamos permutando um total de 8 elementos, sendo 5 de um tipo e 3 de outro tipo.   "
},
{
  "id": "def-combinacao-completa",
  "level": "2",
  "url": "section-combinacoes-completas.html#def-combinacao-completa",
  "type": "Definição",
  "number": "6.7.2",
  "title": "",
  "body": " O número de combinações completas de elementos, tomados a é o número de formas de escolher elementos dentre disponíveis, podendo escolher repetidamente os objetos, até obter a quantidade .  O número de combinações completas de elementos, tomados a é denotado por:  "
},
{
  "id": "remark-30",
  "level": "2",
  "url": "section-combinacoes-completas.html#remark-30",
  "type": "Nota",
  "number": "6.7.3",
  "title": "",
  "body": "As combinações completas dos objetos tomados 3 a 3 são:  "
},
{
  "id": "teo-combinacao-completa",
  "level": "2",
  "url": "section-combinacoes-completas.html#teo-combinacao-completa",
  "type": "Teorema",
  "number": "6.7.4",
  "title": "",
  "body": "  Calcular é o mesmo que encontrar o número de soluções da equação: Usando a ideia da representação de \"bolas e traços\" da Solução do ( ) vamos ficar com bolas e traços. O cálculo do número de permutações destes objetos com objetos de um tipo e objetos de outro tipo é dado por:   "
},
{
  "id": "tec-combinacao-completa",
  "level": "2",
  "url": "section-combinacoes-completas.html#tec-combinacao-completa",
  "type": "Tecnologia",
  "number": "6.7.5",
  "title": "",
  "body": " Para obter o número de combinações completas de ,tomados a , usamos o código binomial(p+n-1, p).   "
},
{
  "id": "example-102",
  "level": "2",
  "url": "section-combinacoes-completas.html#example-102",
  "type": "Exemplo",
  "number": "6.7.6",
  "title": "",
  "body": " Quantas são as soluções inteiras e não negativas de   O número de soluções desta equação, com é o número de combinações completas de 10 elementos, tomados 20 a 20:    "
},
{
  "id": "example-103",
  "level": "2",
  "url": "section-combinacoes-completas.html#example-103",
  "type": "Exemplo",
  "number": "6.7.7",
  "title": "",
  "body": " Quantas são as soluções inteiras da equação com , e ?   Defina   Substituindo, temos ou seja Desta forma, o número de soluções de será a solução do problema, pois, quando teremos , quando teremos e quando teremos . Portanto a resposta é    "
},
{
  "id": "example-104",
  "level": "2",
  "url": "section-combinacoes-completas.html#example-104",
  "type": "Exemplo",
  "number": "6.7.8",
  "title": "",
  "body": " Quantas são as soluções inteiras e não negativas de   Observe que uma possibilidade seria calcular o número de soluções de cada um dos casos: A soma do número de soluções de cada um dos casos é a resposta, no entanto, é inviável fazer tal cálculo. Felizmente temos outra forma de resolver este problema.  Observe que existe uma bijeção entre o conjunto das soluções de com o conjunto das soluções da equação :   Para entender a bijeção, observe o seguinte. Somando , nos dois lados da igualdade, na linha de , não mudamos absolutamente nada e ficamos com:   Cada solução da linha , é uma solução de com o valor de igual a . E para cada a solução de vai ser a solução da linha de .  Portanto a resposta é o número de solução da equação que é dado por:    "
},
{
  "id": "example-105",
  "level": "2",
  "url": "section-combinacoes-completas.html#example-105",
  "type": "Exemplo",
  "number": "6.7.9",
  "title": "",
  "body": "(VESTIBULAR UFPE – UFRPE \/ 1998 2ª ETAPA) Semelhante ao dominó, mas feito de pedras triangulares equiláteras, o jogo de trominó apresenta na face triangular superior um certo número de pontos com repetições, escolhidos de 1 a n, dispostos ao longo de cada aresta (ver figura).   Uma das peças com os valores 1, 2 e 4.    Quantas peças há no trominó, supondo n = 6?   Observe que os números estão em disposição circular, então vamos separar as peças em três tipos:   Todos os lados com o mesmo valor. Cada peça pode ser formada de uma única forma.  Dois lados possuem um valor e o terceiro lado possui um valor diferente. Cada peça pode ser formada de uma única forma, pois o número de permutações circulares com 3 elementos é 2, mas como temos duas entradas iguais, precisamos dividir por 2.  Cada lado possui um valor diferente. Cada peça pode ser formada de duas formas, pois o número de permutações circulares com 3 elementos é 2.   Inicialmente, vamos contar como se em cada tipo, as peças só pudessem ser formadas de uma forma, depois vamos acrescentar a quantidade de peças do terceiro tipo, que fica faltando nessa contagem inicial.  Temos que escolher os valores de cada um dos 3 lados de cada peça do trominó. Como os valores vão de 1 até 6 e são 3 lados, o número de peças do trominó (sem contar as permutações circulares) para é o número de soluções inteiras não negativas da equação: que é dado por .  Agora precisamos contar as peças, do terceiro tipo, que estão faltando. Como os três valores são diferentes, temos 6 opções de valores para escolher 3 e para cada escolha, temos duas formas de organizar na peça do trominó, portanto o número de peças desse tipo é: Já que, a metade das peças do terceiro tipo foram contadas uma vez pela combinação completa, , a quantidade total de peças é:   "
},
{
  "id": "exercise-53",
  "level": "2",
  "url": "section-combinacoes-completas.html#exercise-53",
  "type": "Exercício",
  "number": "6.7.1",
  "title": "",
  "body": " Quantas são as soluções inteiras positivas de ?    "
},
{
  "id": "exercise-54",
  "level": "2",
  "url": "section-combinacoes-completas.html#exercise-54",
  "type": "Exercício",
  "number": "6.7.2",
  "title": "",
  "body": " Quantas são as peças de um dominó comum?   28   Sejam variáveis. Cada solução não negativa da equação: representa uma pedra do dominó. Portanto, o número de pedras do dominó é  "
},
{
  "id": "exercise-55",
  "level": "2",
  "url": "section-combinacoes-completas.html#exercise-55",
  "type": "Exercício",
  "number": "6.7.3",
  "title": "",
  "body": " (UFPE 2012) As pedras de um dominó usual são compostas por dois quadrados, com 7 possíveis marcas (de zero pontos até 6 pontos). Quantas pedras terá um dominó se cada quadrado puder ter até 9 pontos? Veja no desenho abaixo um exemplo de uma nova pedra do dominó.    55   Sejam variáveis. Cada solução não negativa da equação: representa uma pedra do dominó. Portanto, o número de pedras do dominó é  "
},
{
  "id": "exercise-56",
  "level": "2",
  "url": "section-combinacoes-completas.html#exercise-56",
  "type": "Exercício",
  "number": "6.7.4",
  "title": "",
  "body": " Quantas são as soluções inteiras não-negativas de nas quais ?   200  "
},
{
  "id": "exercise-57",
  "level": "2",
  "url": "section-combinacoes-completas.html#exercise-57",
  "type": "Exercício",
  "number": "6.7.5",
  "title": "",
  "body": " Quantos inteiros entre e , inclusive, possui a propriedade: \"cada dígito é menor ou igual ao seu sucessor\"?   24309  "
},
{
  "id": "exercise-58",
  "level": "2",
  "url": "section-combinacoes-completas.html#exercise-58",
  "type": "Exercício",
  "number": "6.7.6",
  "title": "",
  "body": " De quantas maneiras é possível colocar 10 anéis diferentes em 8 dedos?   70572902400  "
},
{
  "id": "section-triangulo-pascal",
  "level": "1",
  "url": "section-triangulo-pascal.html",
  "type": "Seção",
  "number": "7.1",
  "title": "Triângulo de Pascal",
  "body": " Triângulo de Pascal    Definir o Triângulo de Pascal.  Mostrar várias propriedades do Triângulo de Pascal.  Exemplificar.     O Triângulo de Pascal é um triângulo numérico infinito formado por números binomiais , na qual, representa a linha, e representa a coluna, com . Abaixo temos duas representações do mesmo triângulo, com .    O Triângulo de Pascal.      Obtenha o Triângulo de Pascal referente ao intervalo escolhido.      (Relação de Stifel)       (Relação das Combinações Complementares)       (Teorema das Linhas)    Observe que   Ou seja, a soma conta o número de todos os subconjuntos, de um conjunto com n elementos.  Essa quantidade é , pois para formar um subconjunto, deve-se decidir, para cada elemento do conjunto, se ele pertencerá ou não ao subconjunto. Há dois modos de decidir o que fazer com o primeiro elemento do conjunto, 2 modos com o segundo e assim por diante. Portanto o valor da soma de uma linha do Triângulo de Pascal é     Qual o valor da soma        Vamos resolver o usando o Sage. Primeiramente note que Definimos as variáveis e , definimos a função e usamos o método com a expressão do somatório. No final do código do método foi acrescentado o comando apenas para o resultado ser exibido no formato compilado pelo , ou seja, visualmente mais elegante.    (Teorema das Colunas)   Vamos aplicar a relação de Stifel aos elementos da coluna : Somando tudo, ficamos com Como , obtemos o resultado:     Qual o valor da soma        Vamos resolver o usando o Sage. Primeiramente note que Definimos a variável , usamos o método com a expressão do somatório.     Qual o valor da soma  Note que Para usarmos o Teorema das Colunas, precisamos que no somatório apareca um produto de números consecutivos, pois Então, vamos procurar valores para e , para os quais, vale a igualdade igualando os coeficientes, obtemos Portanto, e . Agora podemos terminar o cálculo da soma     Vamos resolver o usando o Sage. Primeiramente note que Definimos as variáveis e , usamos o método com a expressão do somatório. No final do código do método foi acrescentado o comando apenas para o resultado ser exibido no formato compilado pelo , ou seja, visualmente mais elegante.    (Teorema das Diagonais)    Aplicando o , em cada obtemos  O que mostra o resultado.        Vamos analisar a diferença : Oberve que e são positivos, portanto o sinal de , será determinado pelo sinal de Logo,       Exercícios   Tem-se comprimidos de substâncias distintas, solúveis em água e incapazes de reagir entre si. Quantas soluções distintas podem ser obtidas dissolven-se um ou mais desses comprimidos em um copo com água?      Calcule o valor da soma    746660    Calcule o valor de       Calcule          "
},
{
  "id": "dEf",
  "level": "2",
  "url": "section-triangulo-pascal.html#dEf",
  "type": "Objetivos",
  "number": "7.1",
  "title": "",
  "body": "  Definir o Triângulo de Pascal.  Mostrar várias propriedades do Triângulo de Pascal.  Exemplificar.   "
},
{
  "id": "definition-31",
  "level": "2",
  "url": "section-triangulo-pascal.html#definition-31",
  "type": "Definição",
  "number": "7.1.1",
  "title": "",
  "body": " O Triângulo de Pascal é um triângulo numérico infinito formado por números binomiais , na qual, representa a linha, e representa a coluna, com . Abaixo temos duas representações do mesmo triângulo, com .    O Triângulo de Pascal.    "
},
{
  "id": "technology-14",
  "level": "2",
  "url": "section-triangulo-pascal.html#technology-14",
  "type": "Tecnologia",
  "number": "7.1.3",
  "title": "",
  "body": " Obtenha o Triângulo de Pascal referente ao intervalo escolhido.     "
},
{
  "id": "theorem-35",
  "level": "2",
  "url": "section-triangulo-pascal.html#theorem-35",
  "type": "Teorema",
  "number": "7.1.5",
  "title": "",
  "body": "(Relação de Stifel)      "
},
{
  "id": "teo-reolacoes-complementares",
  "level": "2",
  "url": "section-triangulo-pascal.html#teo-reolacoes-complementares",
  "type": "Teorema",
  "number": "7.1.6",
  "title": "",
  "body": "(Relação das Combinações Complementares)      "
},
{
  "id": "theorem-37",
  "level": "2",
  "url": "section-triangulo-pascal.html#theorem-37",
  "type": "Teorema",
  "number": "7.1.7",
  "title": "",
  "body": "(Teorema das Linhas)    Observe que   Ou seja, a soma conta o número de todos os subconjuntos, de um conjunto com n elementos.  Essa quantidade é , pois para formar um subconjunto, deve-se decidir, para cada elemento do conjunto, se ele pertencerá ou não ao subconjunto. Há dois modos de decidir o que fazer com o primeiro elemento do conjunto, 2 modos com o segundo e assim por diante. Portanto o valor da soma de uma linha do Triângulo de Pascal é   "
},
{
  "id": "exem-soma1",
  "level": "2",
  "url": "section-triangulo-pascal.html#exem-soma1",
  "type": "Exemplo",
  "number": "7.1.8",
  "title": "",
  "body": " Qual o valor da soma      "
},
{
  "id": "technology-15",
  "level": "2",
  "url": "section-triangulo-pascal.html#technology-15",
  "type": "Tecnologia",
  "number": "7.1.9",
  "title": "",
  "body": " Vamos resolver o usando o Sage. Primeiramente note que Definimos as variáveis e , definimos a função e usamos o método com a expressão do somatório. No final do código do método foi acrescentado o comando apenas para o resultado ser exibido no formato compilado pelo , ou seja, visualmente mais elegante.   "
},
{
  "id": "teo-colunas",
  "level": "2",
  "url": "section-triangulo-pascal.html#teo-colunas",
  "type": "Teorema",
  "number": "7.1.10",
  "title": "",
  "body": "(Teorema das Colunas)   Vamos aplicar a relação de Stifel aos elementos da coluna : Somando tudo, ficamos com Como , obtemos o resultado:   "
},
{
  "id": "exem-soma2",
  "level": "2",
  "url": "section-triangulo-pascal.html#exem-soma2",
  "type": "Exemplo",
  "number": "7.1.11",
  "title": "",
  "body": " Qual o valor da soma      "
},
{
  "id": "technology-16",
  "level": "2",
  "url": "section-triangulo-pascal.html#technology-16",
  "type": "Tecnologia",
  "number": "7.1.12",
  "title": "",
  "body": " Vamos resolver o usando o Sage. Primeiramente note que Definimos a variável , usamos o método com a expressão do somatório.   "
},
{
  "id": "exem-soma3",
  "level": "2",
  "url": "section-triangulo-pascal.html#exem-soma3",
  "type": "Exemplo",
  "number": "7.1.13",
  "title": "",
  "body": " Qual o valor da soma  Note que Para usarmos o Teorema das Colunas, precisamos que no somatório apareca um produto de números consecutivos, pois Então, vamos procurar valores para e , para os quais, vale a igualdade igualando os coeficientes, obtemos Portanto, e . Agora podemos terminar o cálculo da soma   "
},
{
  "id": "technology-17",
  "level": "2",
  "url": "section-triangulo-pascal.html#technology-17",
  "type": "Tecnologia",
  "number": "7.1.14",
  "title": "",
  "body": " Vamos resolver o usando o Sage. Primeiramente note que Definimos as variáveis e , usamos o método com a expressão do somatório. No final do código do método foi acrescentado o comando apenas para o resultado ser exibido no formato compilado pelo , ou seja, visualmente mais elegante.   "
},
{
  "id": "theorem-39",
  "level": "2",
  "url": "section-triangulo-pascal.html#theorem-39",
  "type": "Teorema",
  "number": "7.1.15",
  "title": "",
  "body": "(Teorema das Diagonais)    Aplicando o , em cada obtemos  O que mostra o resultado.   "
},
{
  "id": "theorem-40",
  "level": "2",
  "url": "section-triangulo-pascal.html#theorem-40",
  "type": "Teorema",
  "number": "7.1.16",
  "title": "",
  "body": "    Vamos analisar a diferença : Oberve que e são positivos, portanto o sinal de , será determinado pelo sinal de Logo,     "
},
{
  "id": "exercise-59",
  "level": "2",
  "url": "section-triangulo-pascal.html#exercise-59",
  "type": "Exercício",
  "number": "7.1.1",
  "title": "",
  "body": " Tem-se comprimidos de substâncias distintas, solúveis em água e incapazes de reagir entre si. Quantas soluções distintas podem ser obtidas dissolven-se um ou mais desses comprimidos em um copo com água?    "
},
{
  "id": "exercise-60",
  "level": "2",
  "url": "section-triangulo-pascal.html#exercise-60",
  "type": "Exercício",
  "number": "7.1.2",
  "title": "",
  "body": " Calcule o valor da soma    746660  "
},
{
  "id": "exercise-61",
  "level": "2",
  "url": "section-triangulo-pascal.html#exercise-61",
  "type": "Exercício",
  "number": "7.1.3",
  "title": "",
  "body": " Calcule o valor de     "
},
{
  "id": "exercise-62",
  "level": "2",
  "url": "section-triangulo-pascal.html#exercise-62",
  "type": "Exercício",
  "number": "7.1.4",
  "title": "",
  "body": " Calcule       "
},
{
  "id": "section-binomio-newton",
  "level": "1",
  "url": "section-binomio-newton.html",
  "type": "Seção",
  "number": "7.2",
  "title": "Binômio de Newton",
  "body": " Binômio de Newton    Enunciar e demonstrar o Teorema do Binômio de Newton  Exemplificar.  Resolver exemplos no Sage.      Se e são número reais e é um inteiro positivo,    Observe que Cada termo, do desenvolvimento, é obtido escolhendo-se em cada parênteses um, ou um e multiplicando-se os escolhidos.  Para cada valor de , se escolhermos em dos parênteses, será escolhido em dos parênteses e o produto será igual a . Isto pode ser feito de modos. Então é uma soma na qual, para cada , existem parcelas iguais a . Portanto      Destacamos o termo geral e o fato de que o desenvolvimento do Binômio de Newton pode ser desenvolvido na ordem inversa:  1) O -ésimo termo do desenvolvimento é dado por: 2) Observe também que: Portanto     Considere o binômio de Newton Determine os coeficientes de  no desenvolvimento do binômio;  no desenvolvimento do binômio;  no desenvolvimento do binômio.     O -ésimo termo do desenvolvimento é   item a) Para que , temos , logo estamos procurando o 5º termo: E portanto o coeficiente é .  item b)  não possui solução no conjunto dos inteiros positivos, portanto o coeficiente de é zero.  item c) Para que , temos , logo estamos procurando o 6º termo: E portanto, o coeficiente é .    No Sage, podemos obter a expanção do polinômio da seguinte forma:   Os coeficientes do polinômio, podem ser obtidos da seguinte forma:     Determine o termo máximo do desenvolvimento de    Como O termo máximo é      Determine o termo máximo do desenvolvimento de    O -ésimo termo é . se Isto é ou seja, e simplificando temos Portanto, , logo .  Assim, temos para e portanto o maior termo é:      O termo máximo do desenvolvimento de Troque os valores de , e , para obter o termo máximo e o termo mínimo do desenvolvimento de   Os termos máximo e mínimo.      Qual é a soma dos coeficientes do desenvolvimento de    Seja , a soma dos coeficientes de é igual a Portando a soma dos coeficientes do desenvolvimento de é           e Portanto,      Exercícios   Determine o coeficiente de no desenvolvimento de    6435    Determine o coeficiente de no desenvolvimento de    -33   O termo geral é dado por Portanto, queremos encontrar valores de e , tais que , ou seja, , logo e . Então, precisamos obter o coeficiente de de :     Calcule o termo máximo do desenvolvimento de       Qual é o maior dos números    a         Portanto, Como mostramos que , logo .    (UFPE - UFRPE 2000) Analise as afirmações seguintes acerca da expansão binomial de    Existem exatamente dois termos com coeficientes que não são divisíveis por 13.  A soma dos coeficientes é   O maior coeficiente é  O menor coeficiente é  A soma dos coeficientes das potências de com expoentes ímpares é .    item a) Na expanção de apenas o primeiro e o último termo possuem coeficientes que não são divisíveis por 13.  item b) Seja . A soma dos coeficientes de é exatamente o valor de .  item c) O maior coeficiente de é exatamente o maior termo no desenvolvimento de . Efetuando esse cálculo segundo o chegamos que o termo máximo é  item d) O menor coeficiente de é exatamente o menor termo no desenvolvimento de . Efetuando esse cálculo segundo o chegamos que o termo máximo é  item e) Os termos de com expoentes ímpares são os termos . Note que portanto Então, basta calcular .   a) V, b) V, c) V, d) V, e) V    "
},
{
  "id": "dEf",
  "level": "2",
  "url": "section-binomio-newton.html#dEf",
  "type": "Objetivos",
  "number": "7.2",
  "title": "",
  "body": "  Enunciar e demonstrar o Teorema do Binômio de Newton  Exemplificar.  Resolver exemplos no Sage.   "
},
{
  "id": "teo-binomio-newton",
  "level": "2",
  "url": "section-binomio-newton.html#teo-binomio-newton",
  "type": "Teorema",
  "number": "7.2.1",
  "title": "",
  "body": " Se e são número reais e é um inteiro positivo,    Observe que Cada termo, do desenvolvimento, é obtido escolhendo-se em cada parênteses um, ou um e multiplicando-se os escolhidos.  Para cada valor de , se escolhermos em dos parênteses, será escolhido em dos parênteses e o produto será igual a . Isto pode ser feito de modos. Então é uma soma na qual, para cada , existem parcelas iguais a . Portanto    "
},
{
  "id": "remark-31",
  "level": "2",
  "url": "section-binomio-newton.html#remark-31",
  "type": "Nota",
  "number": "7.2.2",
  "title": "",
  "body": " Destacamos o termo geral e o fato de que o desenvolvimento do Binômio de Newton pode ser desenvolvido na ordem inversa:  1) O -ésimo termo do desenvolvimento é dado por: 2) Observe também que: Portanto   "
},
{
  "id": "example-109",
  "level": "2",
  "url": "section-binomio-newton.html#example-109",
  "type": "Exemplo",
  "number": "7.2.3",
  "title": "",
  "body": " Considere o binômio de Newton Determine os coeficientes de  no desenvolvimento do binômio;  no desenvolvimento do binômio;  no desenvolvimento do binômio.     O -ésimo termo do desenvolvimento é   item a) Para que , temos , logo estamos procurando o 5º termo: E portanto o coeficiente é .  item b)  não possui solução no conjunto dos inteiros positivos, portanto o coeficiente de é zero.  item c) Para que , temos , logo estamos procurando o 6º termo: E portanto, o coeficiente é .   "
},
{
  "id": "technology-18",
  "level": "2",
  "url": "section-binomio-newton.html#technology-18",
  "type": "Tecnologia",
  "number": "7.2.4",
  "title": "",
  "body": "No Sage, podemos obter a expanção do polinômio da seguinte forma:   Os coeficientes do polinômio, podem ser obtidos da seguinte forma:   "
},
{
  "id": "example-110",
  "level": "2",
  "url": "section-binomio-newton.html#example-110",
  "type": "Exemplo",
  "number": "7.2.5",
  "title": "",
  "body": " Determine o termo máximo do desenvolvimento de    Como O termo máximo é    "
},
{
  "id": "exem-binomio1",
  "level": "2",
  "url": "section-binomio-newton.html#exem-binomio1",
  "type": "Exemplo",
  "number": "7.2.6",
  "title": "",
  "body": " Determine o termo máximo do desenvolvimento de    O -ésimo termo é . se Isto é ou seja, e simplificando temos Portanto, , logo .  Assim, temos para e portanto o maior termo é:    "
},
{
  "id": "technology-19",
  "level": "2",
  "url": "section-binomio-newton.html#technology-19",
  "type": "Tecnologia",
  "number": "7.2.7",
  "title": "",
  "body": " O termo máximo do desenvolvimento de Troque os valores de , e , para obter o termo máximo e o termo mínimo do desenvolvimento de   Os termos máximo e mínimo.    "
},
{
  "id": "example-112",
  "level": "2",
  "url": "section-binomio-newton.html#example-112",
  "type": "Exemplo",
  "number": "7.2.9",
  "title": "",
  "body": " Qual é a soma dos coeficientes do desenvolvimento de    Seja , a soma dos coeficientes de é igual a Portando a soma dos coeficientes do desenvolvimento de é    "
},
{
  "id": "theorem-42",
  "level": "2",
  "url": "section-binomio-newton.html#theorem-42",
  "type": "Teorema",
  "number": "7.2.10",
  "title": "",
  "body": "      e Portanto,    "
},
{
  "id": "exercise-63",
  "level": "2",
  "url": "section-binomio-newton.html#exercise-63",
  "type": "Exercício",
  "number": "7.2.1",
  "title": "",
  "body": " Determine o coeficiente de no desenvolvimento de    6435  "
},
{
  "id": "exercise-64",
  "level": "2",
  "url": "section-binomio-newton.html#exercise-64",
  "type": "Exercício",
  "number": "7.2.2",
  "title": "",
  "body": " Determine o coeficiente de no desenvolvimento de    -33   O termo geral é dado por Portanto, queremos encontrar valores de e , tais que , ou seja, , logo e . Então, precisamos obter o coeficiente de de :   "
},
{
  "id": "exercise-65",
  "level": "2",
  "url": "section-binomio-newton.html#exercise-65",
  "type": "Exercício",
  "number": "7.2.3",
  "title": "",
  "body": " Calcule o termo máximo do desenvolvimento de     "
},
{
  "id": "exercise-66",
  "level": "2",
  "url": "section-binomio-newton.html#exercise-66",
  "type": "Exercício",
  "number": "7.2.4",
  "title": "",
  "body": " Qual é o maior dos números    a         Portanto, Como mostramos que , logo .  "
},
{
  "id": "exercise-67",
  "level": "2",
  "url": "section-binomio-newton.html#exercise-67",
  "type": "Exercício",
  "number": "7.2.5",
  "title": "",
  "body": " (UFPE - UFRPE 2000) Analise as afirmações seguintes acerca da expansão binomial de    Existem exatamente dois termos com coeficientes que não são divisíveis por 13.  A soma dos coeficientes é   O maior coeficiente é  O menor coeficiente é  A soma dos coeficientes das potências de com expoentes ímpares é .    item a) Na expanção de apenas o primeiro e o último termo possuem coeficientes que não são divisíveis por 13.  item b) Seja . A soma dos coeficientes de é exatamente o valor de .  item c) O maior coeficiente de é exatamente o maior termo no desenvolvimento de . Efetuando esse cálculo segundo o chegamos que o termo máximo é  item d) O menor coeficiente de é exatamente o menor termo no desenvolvimento de . Efetuando esse cálculo segundo o chegamos que o termo máximo é  item e) Os termos de com expoentes ímpares são os termos . Note que portanto Então, basta calcular .   a) V, b) V, c) V, d) V, e) V  "
},
{
  "id": "section-polinomio-leibniz",
  "level": "1",
  "url": "section-polinomio-leibniz.html",
  "type": "Seção",
  "number": "7.3",
  "title": "Polinômio de Leibniz",
  "body": " Polinômio de Leibniz    Enunciar e demonstrar o Teorema do Polinômio de Leibniz  Exemplificar.  Resolver um exemplo no Sage.        Na qual, para cada , , ou seja é um inteiro não negativo.   Temos Um termo genérico do produto é obtido escolhendo um em cada parênteses e multiplicando os escolhidos. Se em dos parênteses escolhermos , em dos parênteses escolhermos , , obteremos Agora falta responder quantas vezes o termo aparece no desenvolvimento.  O termo aparece tantas vezes, quantas são as formas de escolher, nos parênteses, deles para escolher o , deles para escolher o , . Isto pode ser feito de maneiras, o que mostra o resultado.     Considere o polinômio: Determine os coeficientes de  no desenvolvimento;  no desenvolvimento.        item a) Para que o expoente de seja 2, devemos ter , juntando com a condição , temos Assim, e E a soma dos termos que possuem é:   item b) Para que o expoente de seja 4, devemos ter , juntando com a condição , temos Temos duas soluções: E a soma dos termos que possuem é:     No Sage, podemos obter a expanção do polinômio da seguinte forma:   Os coeficientes do polinômio, podem ser obtidos da seguinte forma:     Exercícios   Determine o coeficiente de no desenvolvimento de    336    "
},
{
  "id": "dEf",
  "level": "2",
  "url": "section-polinomio-leibniz.html#dEf",
  "type": "Objetivos",
  "number": "7.3",
  "title": "",
  "body": "  Enunciar e demonstrar o Teorema do Polinômio de Leibniz  Exemplificar.  Resolver um exemplo no Sage.   "
},
{
  "id": "theorem-43",
  "level": "2",
  "url": "section-polinomio-leibniz.html#theorem-43",
  "type": "Teorema",
  "number": "7.3.1",
  "title": "",
  "body": "  Na qual, para cada , , ou seja é um inteiro não negativo.   Temos Um termo genérico do produto é obtido escolhendo um em cada parênteses e multiplicando os escolhidos. Se em dos parênteses escolhermos , em dos parênteses escolhermos , , obteremos Agora falta responder quantas vezes o termo aparece no desenvolvimento.  O termo aparece tantas vezes, quantas são as formas de escolher, nos parênteses, deles para escolher o , deles para escolher o , . Isto pode ser feito de maneiras, o que mostra o resultado.   "
},
{
  "id": "example-113",
  "level": "2",
  "url": "section-polinomio-leibniz.html#example-113",
  "type": "Exemplo",
  "number": "7.3.2",
  "title": "",
  "body": " Considere o polinômio: Determine os coeficientes de  no desenvolvimento;  no desenvolvimento.        item a) Para que o expoente de seja 2, devemos ter , juntando com a condição , temos Assim, e E a soma dos termos que possuem é:   item b) Para que o expoente de seja 4, devemos ter , juntando com a condição , temos Temos duas soluções: E a soma dos termos que possuem é:    "
},
{
  "id": "technology-20",
  "level": "2",
  "url": "section-polinomio-leibniz.html#technology-20",
  "type": "Tecnologia",
  "number": "7.3.3",
  "title": "",
  "body": "No Sage, podemos obter a expanção do polinômio da seguinte forma:   Os coeficientes do polinômio, podem ser obtidos da seguinte forma:   "
},
{
  "id": "exercise-68",
  "level": "2",
  "url": "section-polinomio-leibniz.html#exercise-68",
  "type": "Exercício",
  "number": "7.3.1",
  "title": "",
  "body": " Determine o coeficiente de no desenvolvimento de    336  "
},
{
  "id": "section-espacos-probabilidade",
  "level": "1",
  "url": "section-espacos-probabilidade.html",
  "type": "Seção",
  "number": "8.1",
  "title": "Espaços de Probabilidade",
  "body": " Espaços de Probabilidade    Definir Espaço Amostral e Evento.  Definir Probabilidade.  Demonstrar um teorema com propriedades de probabilidade.  Exemplificar.     Chamaremos de espaço amostral o conjunto de todos os resultados possíveis de uma experiência aleatória. Denotaremos o espaço amostral por e só vamos considerar o caso de ser finito.  Os subconjuntos de serão chamados de eventos . Diremos que um evento ocorre quando o resultado da experiência pertence ao evento.    Seja um espaço amostral. Uma probabilidade sobre é uma função que associa a cada evento um número de forma que:  Para todo evento , ;  ;  Se então .      Ao lançar uma moeda observe a face que cai voltada para cima.  O espaço amostral é os eventos são a) Vamos definir uma probabilidade para , que chamaremos de : b) Vamos definir outra probabilidade para , que chamaremos de : Observe que e satisfazem a definição de probabilidade.   Um modelo de probabilidade muito utilizado é o equiprobabilístico, que é o caso de do exemplo anterior.  O caso geral deste modelo, ou seja para , atribuímos a cada evento unitário a probabilidade Pois, se e . Pelo item c) da , temos Portanto,     Quatro moedas (não viciadas) são jogadas simultâneamente.   Qual é a probabilidade de obter 3 caras?  Qual é a probabilidade de obter pelo menos 3 caras?    Para simplificar a notação, indicaremos 0 para cara e 1 para coroa. O espaço amostral é  item a) Observe que dentre as 16 possibilidades, o subconjunto abaixo: possui todos os casos favoráveis. Portanto a probabilidade de obter 3 caras é    item b) Observe que dentre as 16 possibilidades, o subconjunto abaixo: possui todos os casos favoráveis. Portanto a probabilidade de obter pelo menos 3 caras é      Sejam e .  O conjunto complementar de é denotado por  O conjunto menos o conjunto é denotado por     Sejam e eventos, então:  ;  ;  ;  ;  Se então .      item a)    item b) Como , temos . Portanto   item c) Escrevendo como a união disjunta: temos   item d) Escrevendo como a união disjunta: temos   item e) Pelo item c) temos se , ficamos com pois .     Uma caixa de chocolate contém 40 chocolates, 30 são do tipo ao leite e 10 são do tipo amargo . Ao pegar 8 chocolates aleatoriamente, qual a probabilidade de que ao menos um chocolate seja do tipo amargo ?   Primeiro, vamos calcular a probabilidade de que todos os chocolates sejam do tipo ao leite . Em seguida, vamos usar o item a) do ( ) para chegar na resposta deste problema.  cardinalidade do espaço amostral é dada pelo número de maneiras de pegar 8 chocolates dentre 40 disponívies, portanto Agora queremos contar quantas são as formas de pegar 8 chocolates do tipo ao leite . Como existem 30 disponíveis a resposta é: Usando o item a) do ( ), a probabilidade de que ao menos um seja do tipo amargo é     No próximo exemplo, resolvemos um caso particular do problema conhecido como O Paradoxo dos Gêmeos ou O Problema dos Aniversários . Este problema consiste em calcular a probabilidade de que duas pessoas, de uma amostra aleatória com pessoas, façam aniversário no mesmo dia. Note que, pelo Princípio da Casa dos Pombos, só podemos garantir que pelo menos duas dessas pessoas façam aniversário no mesmo dia, se a amostra aleatória contiver pelo menos pessoas. No entanto, com o cálculo direto, podemos verificar que basta pessoas para que a probabilidade seja maior que e que pessoas são suficientes, para que a probabilidade seja maior que . Essas probabilidades podem ser verificadas na tabela da , cujos parâmetros podem ser ajustados de até .   Em um grupo de 45 pessoas, qual é a probabilidade de que pelo menos duas pessoas façam aniversário no mesmo dia?   Mais uma vez, usaremos o item a) do ( ).  Vamos, inicialmente, calcular a probabilidade de que todas as 45 pessoas façam aniversários em dias diferentes. O número de casos possíveis para os aniversários das 45 pessoas é . O número de casos em que todas as 45 pessoas fazem aniversários em dias diferentes é Então, a probabilidade de que todas as 45 pessoas façam aniversário em dias diferentes é Usando o item a) do ( ), a probabilidade de que pelo menos duas pessoas façam aniversário no mesmo dia é   Este cálculo pode ser verificado no Sage, usando o código abaixo:       Escolha um intervalo, referente a variação de pessoas, para obter uma tabela com a quantidade e a respectiva probabilidade de que pelo menos duas pessoas façam aniversário no mesmo dia, conforme o .     Escolha um intervalo, referente a variação de pessoas, para obter o gráfico do tipo: quantidade versus probabilidade de que pelo menos duas pessoas façam aniversário no mesmo dia, conforme o .       Vinte três pessoas foram fazer uma prova e precisaram deixar seus celulares com o fiscal. No horário previsto de entrega, houve uma emergência e todos precisaram entregar suas provas e pegar seus celulares com pressa, de modo que os celulares foram entregues ao acaso. Qual a probabilidade de que todos os participantes tenha recebido os celulares errados?   O espaço amostral é constituido por todas as formas de ordenar os 23 celulares. Os casos favoráveis é constituído por todas as permutações caóticas com os 23 celulares. Portanto a resposta é      8 bolas de ping-pong são colocadas aleatóriamente em 8 caixas. Qual a probabilidade de que exatamente uma caixa fique vazia?   A cardinalidade do espaço amostral é dado pelo número de formas de colocar as 8 bolas de ping-pong nas 8 caixas pois, temos 8 possibilidades para a primeira bola, 8 para a segunda, etc.  Agora vamos calcular o número de casos favoráveis. Para que, exatamente uma caixa fique vazia, exatamente uma ficará com duas bolas. Logo, precisamos escolher qual caixa fica vazia e qual caixa recebe duas bolas. O número de formas de escolher qual deve ficar vazia é 8. O número de formas de escolher qual caixa recebe duas bolas é 7.  A quantidade de maneiras de escolher duas bolas para a caixa que recebe as duas bolas é . A quantidade de formas de arrumar o restante das bolas é .  Portanto o número de casos favoráveis é . A resposta do problema é      Exercícios   Um número é escolhido ao acaso no conjunto . Determine a probabilidade do número escolhido ser:  múltiplo de 3;  múltiplo de 5;  múltiplo de 3 e múltiplo de 5;  múltiplo de 3 ou múltiplo de 5.     a) , b) , c) , d) .   item a)    item b)    item c)    item d) Pelo princípio da Inclusão-Exclusão:     Em uma caixa existem 6 bolinhas numeradas de 1 a 6. Uma a uma elas são extraı́das, sem reposição. Qual a probabilidade de que a sequência de números observada seja crescente ou seja decrescente?   .   O espaço amostral tem cardinalidade , que é o número de maneiras de ordenar as bolinhas. Como só existe uma sequência seja crescente e uma que seja decrescente, a probabilidade é     Doze pessoas são divididas em três grupos de 4. Qual é a probabilidade de duas determinadas dessas pessoas fiquem no mesmo grupo?      Para a cardinalidade do espaço amostral, a segunda pessoa pode ficar em qualquer lugar de 11 disponíveis. Os casos favoráveis são 3, pois a primeira pessoa vai estar em algum grupo e a segunda pessoa tem 3 opções de lugares para escolher um, no grupo que se encontra a primeira pessoa. Portanto, a probabilidade é     Um armário contém 6 pares de sapatos. Escolhem-se 4 pés de sapatos. Qual é a probabilidade de se formar exatamente um par de sapatos?       A cardinalidade do espaço amostral é , pois essa é a quantidade de maneiras distintas de retirar 4 pés de sapatos, de 12 disponíveis.  Agora, vamos contar o número de casos favoráveis. Temos maneiras de retirar 1 par de sapatos, de 6 pares disponíveis. Depois disso, temos maneiras de escolher dois representantes de 5 tipos de sapatos disponíveis. Em seguida, precisamos decidir se será retirado o pé esquerdo ou o pé direito de cada um desses dois sapatos. Isto pode ser feito de maneiras. Portanto, a probabilidade é     Oito carros estão estacionados em doze vagas em fila. Determine a probabilidade:  das vagas vazias serem consecutivas;  de não haver duas vagas vazias adjacentes.    a) , b) .   item a) Para que as vagas vazias fiquem juntas, juntamos 4 vagas em uma, ficamos com 9 vagas para escolher uma, que será quádrupla. Isto pode ser feito de 9 maneiras. A cardinalidade do espaço amostral é o número de maneiras de escolher 4 lugares para ficarem fazios, dentre 12 disponíveis. Logo, a probabilidade é   item b) Já sabemos que o espaço amostral tem cardinalidade . Para que não haja duas vagas vazias adjacentes, podemos escolher as 4 vagas que ficarão vazias de maneiras. Assim, a probabilidade é     (ITA 2004) Uma caixa branca contém 5 bolas verdes e 3 azuis, e uma caixa preta contém 3 bolas verdes e 2 azuis. Pretende-se retirar uma bola de uma das caixas. Para tanto, 2 dados são atirados. Se a soma resultante dos dois dados for menor que 4, retira-se uma bola da caixa branca. Nos demais casos, retira-se uma bola da caixa preta. Qual é a probabilidade de se retirar uma bola verde?     No lançamento de dois dados, são possíveis 36 (pares) resultados diferentes, sendo que em apenas 3 deles a soma resultante é menor que 4. São eles: (1;1), (1;2), (2;1). A probabilidade de que uma bola verde seja retirada da urna branca é e da urna preta é . Assim, a probabilidade de se retirar uma bola verde é     (ITA 2005) São dados dois cartões, sendo que um deles tem ambos os lados na cor vermelha, enquanto o outro tem um lado na cor vermelha e o outro na cor azul. Um dos cartões é escolhido ao acaso e colocado sobre uma mesa. Se a cor exposta é vermelha, calcule a probabilidade de o cartão escolhido ter a outra cor também vermelha      O total de faces nos dois cartões é 4, sendo 3 faces vermelhas e 1 azul. Como a cor exposta é vermelha, temos duas chances do verso ser vermelho e uma chance do verso ser azul. Portanto a probabilidade de o cartão escolhido ter a outra cor também vermelha é     (ITA 2008) Considere o conjunto e formado por todos os subconjuntos de com elementos. Escolhendo ao acaso um elemento , a probabilidade de a soma de seus elementos ser 183 é igual a  a) b) c) d) e)   a)   De acordo com o enunciado . O conjunto dos elementos , cuja soma deve ser é   Logo . Então, escolhendo ao acaso um elemento a probabilidade de que a soma dos elementos de seja 183 é     (ITA 2010) Uma urna de sorteio contém bolas numeradas de a , sendo que a retirada de uma bola é equiprovável à retirada de cada uma das demais.   Retira-se aleatoriamente uma das bolas desta urna. Calcule a probabilidade de o número desta bola ser um múltiplo de ou .  Retira-se aleatoriamente uma das bolas desta urna e, sem repôla, retira-se uma segunda bola. Calcule a probabilidade de o número da segunda bola retirada não ser múltiplo de .    a) b)   a) Usaremos o Princípio da Inclusão-Exclusão para calcular o número de bolas com números múltiplos de 5 ou 6.    Note que e que é o conjunto dos múltiplos de entre e , incluindo o . Observe que , e . Portanto a probabilidade é   b) Para que o número da segunda bola retirada não seja múltiplo de 6, temos dois casos. 1º caso: primeira bola é um múltiplo de 6 e a segunda não. Essa probabilidade é dada por: . 2º caso: primeira bola não é um múltiplo de 6 e a segunda também não é. Essa probabilidade é dada por: . Logo a probabilidade de o número da segunda bola retirada não ser múltiplo de é     (ITA 2011) Sobre uma mesa estão dispostos livros de história, de biologia e de espanhol. Determine a probabilidade de os livros serem empilhados sobre a mesa de tal forma que aqueles que tratam do mesmo assunto estejam juntos.   .   No total os livros podem ser organizados de maneiras. Para que os livros de mesmo assunto fiquem juntos, temos maneiras. Portanto a probabilidade é dada por     (FUVEST 2020 - 2ª fase) Um jogo educativo possui 16 peças nos formatos: círculo, triângulo, quadrado e estrela, e cada formato é apresentado em 4 cores: amarelo, branco, laranja e verde. Dois jogadores distribuem entre si quantidades iguais dessas peças, de forma aleatória. O conjunto de 8 peças que cada jogador recebe é chamado de coleção.  a) Qual é a probabilidade de que os dois jogadores recebam a mesma quantidade de peças amarelas?   a)   De acordo com o o espaço amostral é dado por .  Precisamos calcular o número de maneiras de distribuir as 8 peças para cada jogador, de forma que exatamente duas delas sejam amarelas. Vamos calcular o número de maneiras de distribuir as peças para o primeiro jogador, as peças que sobram ficam para o segundo jogador.  Como são 4 peças amarelas distintas duas a duas, temos maneiras de separar duas peças amarelas. Agora precisamos separar 6 peças com cores diferentes de amarelo. Temos um total de maneiras de fazer isto, pois existem exatamente 12 peças com cores diferentes de amarelo. Portanto a probabilidade é    (FUVEST 2018 - 2ª fase) Em um torneio de xadrez, há 2n participantes. Suponha que 12 jogadores participem do torneio, dos quais 6 sejam homens e 6 sejam mulheres. Qual é a probabilidade de que, na primeira rodada, só haja confrontos entre jogadores do mesmo sexo?     De acordo com o o espaço amostral é dado por .  O número de maneiras de emparceirar as mulheres entre si é dado por .  Como o número de maneiras de emparceirar os homens entre si é o mesmo de emparceirar as mulheres entre si, a probabilidade pedida é dada por    (FUVEST 2013 - 2ª fase) Sócrates e Xantipa enfrentam-se em um popular jogo de tabuleiro, que envolve a conquista e ocupação de territórios em um mapa. Sócrates ataca jogando três dados e Xantipa se defende com dois. Depois de lançados os dados, que são honestos, Sócrates terá conquistado um território se e somente se as duas condições seguintes forem satisfeitas:   o maior valor obtido em seus dados for maior que o maior valor obtido por Xantipa;  algum outro dado de Sócrates cair com um valor maior que o menor valor obtido por Xantipa.    No caso em que Xantipa tira 5 e 5, qual é a probabilidade de Sócrates conquistar o território em jogo?  No caso em que Xantipa tira 5 e 4, qual é a probabilidade de Sócrates conquistar o território em jogo?    a) b)   item a) No caso em que Xantipa tira 5 e 5, Sócrates conquista o território se conseguir três vezes a face 6 ou duas vezes a face 6 e uma vez uma face diferente de 6. Como o segundo caso pode ser ordenado de três formas diferentes, a probabilidade de Sócrates conquistar o território é:   item b) No caso em que Xantipa tira 5 e 4, temos 4 possibilidades para Sócrates conquistar o território. 1º Sócrates tira 6, 6 e 6. Neste caso a probabilidade é  2ª Sócrates tira 6, 6 e um número menor que 6. Neste caso a probabilidade é  3º Sócrates tira 6, 5 e 5. Neste caso a probabilidade é  4º Sócrates tira 6, 5 e um número menor que 5. Neste caso a probabilidade é Portanto a resposta é a soma dos 4 casos possíveis:    "
},
{
  "id": "dEf",
  "level": "2",
  "url": "section-espacos-probabilidade.html#dEf",
  "type": "Objetivos",
  "number": "8.1",
  "title": "",
  "body": "  Definir Espaço Amostral e Evento.  Definir Probabilidade.  Demonstrar um teorema com propriedades de probabilidade.  Exemplificar.   "
},
{
  "id": "definition-32",
  "level": "2",
  "url": "section-espacos-probabilidade.html#definition-32",
  "type": "Definição",
  "number": "8.1.1",
  "title": "",
  "body": " Chamaremos de espaço amostral o conjunto de todos os resultados possíveis de uma experiência aleatória. Denotaremos o espaço amostral por e só vamos considerar o caso de ser finito.  Os subconjuntos de serão chamados de eventos . Diremos que um evento ocorre quando o resultado da experiência pertence ao evento.  "
},
{
  "id": "def-probabilidade",
  "level": "2",
  "url": "section-espacos-probabilidade.html#def-probabilidade",
  "type": "Definição",
  "number": "8.1.2",
  "title": "",
  "body": " Seja um espaço amostral. Uma probabilidade sobre é uma função que associa a cada evento um número de forma que:  Para todo evento , ;  ;  Se então .    "
},
{
  "id": "example-114",
  "level": "2",
  "url": "section-espacos-probabilidade.html#example-114",
  "type": "Exemplo",
  "number": "8.1.3",
  "title": "",
  "body": " Ao lançar uma moeda observe a face que cai voltada para cima.  O espaço amostral é os eventos são a) Vamos definir uma probabilidade para , que chamaremos de : b) Vamos definir outra probabilidade para , que chamaremos de : Observe que e satisfazem a definição de probabilidade.  "
},
{
  "id": "example-115",
  "level": "2",
  "url": "section-espacos-probabilidade.html#example-115",
  "type": "Exemplo",
  "number": "8.1.4",
  "title": "",
  "body": "Um modelo de probabilidade muito utilizado é o equiprobabilístico, que é o caso de do exemplo anterior.  O caso geral deste modelo, ou seja para , atribuímos a cada evento unitário a probabilidade Pois, se e . Pelo item c) da , temos Portanto,   "
},
{
  "id": "example-116",
  "level": "2",
  "url": "section-espacos-probabilidade.html#example-116",
  "type": "Exemplo",
  "number": "8.1.5",
  "title": "",
  "body": " Quatro moedas (não viciadas) são jogadas simultâneamente.   Qual é a probabilidade de obter 3 caras?  Qual é a probabilidade de obter pelo menos 3 caras?    Para simplificar a notação, indicaremos 0 para cara e 1 para coroa. O espaço amostral é  item a) Observe que dentre as 16 possibilidades, o subconjunto abaixo: possui todos os casos favoráveis. Portanto a probabilidade de obter 3 caras é    item b) Observe que dentre as 16 possibilidades, o subconjunto abaixo: possui todos os casos favoráveis. Portanto a probabilidade de obter pelo menos 3 caras é    "
},
{
  "id": "remark-32",
  "level": "2",
  "url": "section-espacos-probabilidade.html#remark-32",
  "type": "Nota",
  "number": "8.1.6",
  "title": "",
  "body": " Sejam e .  O conjunto complementar de é denotado por  O conjunto menos o conjunto é denotado por   "
},
{
  "id": "teo-probabilidade",
  "level": "2",
  "url": "section-espacos-probabilidade.html#teo-probabilidade",
  "type": "Teorema",
  "number": "8.1.7",
  "title": "",
  "body": " Sejam e eventos, então:  ;  ;  ;  ;  Se então .      item a)    item b) Como , temos . Portanto   item c) Escrevendo como a união disjunta: temos   item d) Escrevendo como a união disjunta: temos   item e) Pelo item c) temos se , ficamos com pois .   "
},
{
  "id": "example-117",
  "level": "2",
  "url": "section-espacos-probabilidade.html#example-117",
  "type": "Exemplo",
  "number": "8.1.8",
  "title": "",
  "body": " Uma caixa de chocolate contém 40 chocolates, 30 são do tipo ao leite e 10 são do tipo amargo . Ao pegar 8 chocolates aleatoriamente, qual a probabilidade de que ao menos um chocolate seja do tipo amargo ?   Primeiro, vamos calcular a probabilidade de que todos os chocolates sejam do tipo ao leite . Em seguida, vamos usar o item a) do ( ) para chegar na resposta deste problema.  cardinalidade do espaço amostral é dada pelo número de maneiras de pegar 8 chocolates dentre 40 disponívies, portanto Agora queremos contar quantas são as formas de pegar 8 chocolates do tipo ao leite . Como existem 30 disponíveis a resposta é: Usando o item a) do ( ), a probabilidade de que ao menos um seja do tipo amargo é    "
},
{
  "id": "exem-aniversario",
  "level": "2",
  "url": "section-espacos-probabilidade.html#exem-aniversario",
  "type": "Exemplo",
  "number": "8.1.9",
  "title": "",
  "body": " Em um grupo de 45 pessoas, qual é a probabilidade de que pelo menos duas pessoas façam aniversário no mesmo dia?   Mais uma vez, usaremos o item a) do ( ).  Vamos, inicialmente, calcular a probabilidade de que todas as 45 pessoas façam aniversários em dias diferentes. O número de casos possíveis para os aniversários das 45 pessoas é . O número de casos em que todas as 45 pessoas fazem aniversários em dias diferentes é Então, a probabilidade de que todas as 45 pessoas façam aniversário em dias diferentes é Usando o item a) do ( ), a probabilidade de que pelo menos duas pessoas façam aniversário no mesmo dia é   Este cálculo pode ser verificado no Sage, usando o código abaixo:    "
},
{
  "id": "tech-aniversario",
  "level": "2",
  "url": "section-espacos-probabilidade.html#tech-aniversario",
  "type": "Tecnologia",
  "number": "8.1.10",
  "title": "",
  "body": "  Escolha um intervalo, referente a variação de pessoas, para obter uma tabela com a quantidade e a respectiva probabilidade de que pelo menos duas pessoas façam aniversário no mesmo dia, conforme o .     Escolha um intervalo, referente a variação de pessoas, para obter o gráfico do tipo: quantidade versus probabilidade de que pelo menos duas pessoas façam aniversário no mesmo dia, conforme o .     "
},
{
  "id": "example-119",
  "level": "2",
  "url": "section-espacos-probabilidade.html#example-119",
  "type": "Exemplo",
  "number": "8.1.13",
  "title": "",
  "body": " Vinte três pessoas foram fazer uma prova e precisaram deixar seus celulares com o fiscal. No horário previsto de entrega, houve uma emergência e todos precisaram entregar suas provas e pegar seus celulares com pressa, de modo que os celulares foram entregues ao acaso. Qual a probabilidade de que todos os participantes tenha recebido os celulares errados?   O espaço amostral é constituido por todas as formas de ordenar os 23 celulares. Os casos favoráveis é constituído por todas as permutações caóticas com os 23 celulares. Portanto a resposta é    "
},
{
  "id": "example-120",
  "level": "2",
  "url": "section-espacos-probabilidade.html#example-120",
  "type": "Exemplo",
  "number": "8.1.14",
  "title": "",
  "body": " 8 bolas de ping-pong são colocadas aleatóriamente em 8 caixas. Qual a probabilidade de que exatamente uma caixa fique vazia?   A cardinalidade do espaço amostral é dado pelo número de formas de colocar as 8 bolas de ping-pong nas 8 caixas pois, temos 8 possibilidades para a primeira bola, 8 para a segunda, etc.  Agora vamos calcular o número de casos favoráveis. Para que, exatamente uma caixa fique vazia, exatamente uma ficará com duas bolas. Logo, precisamos escolher qual caixa fica vazia e qual caixa recebe duas bolas. O número de formas de escolher qual deve ficar vazia é 8. O número de formas de escolher qual caixa recebe duas bolas é 7.  A quantidade de maneiras de escolher duas bolas para a caixa que recebe as duas bolas é . A quantidade de formas de arrumar o restante das bolas é .  Portanto o número de casos favoráveis é . A resposta do problema é    "
},
{
  "id": "exercise-69",
  "level": "2",
  "url": "section-espacos-probabilidade.html#exercise-69",
  "type": "Exercício",
  "number": "8.1.1",
  "title": "",
  "body": " Um número é escolhido ao acaso no conjunto . Determine a probabilidade do número escolhido ser:  múltiplo de 3;  múltiplo de 5;  múltiplo de 3 e múltiplo de 5;  múltiplo de 3 ou múltiplo de 5.     a) , b) , c) , d) .   item a)    item b)    item c)    item d) Pelo princípio da Inclusão-Exclusão:   "
},
{
  "id": "exercise-70",
  "level": "2",
  "url": "section-espacos-probabilidade.html#exercise-70",
  "type": "Exercício",
  "number": "8.1.2",
  "title": "",
  "body": " Em uma caixa existem 6 bolinhas numeradas de 1 a 6. Uma a uma elas são extraı́das, sem reposição. Qual a probabilidade de que a sequência de números observada seja crescente ou seja decrescente?   .   O espaço amostral tem cardinalidade , que é o número de maneiras de ordenar as bolinhas. Como só existe uma sequência seja crescente e uma que seja decrescente, a probabilidade é   "
},
{
  "id": "exercise-71",
  "level": "2",
  "url": "section-espacos-probabilidade.html#exercise-71",
  "type": "Exercício",
  "number": "8.1.3",
  "title": "",
  "body": " Doze pessoas são divididas em três grupos de 4. Qual é a probabilidade de duas determinadas dessas pessoas fiquem no mesmo grupo?      Para a cardinalidade do espaço amostral, a segunda pessoa pode ficar em qualquer lugar de 11 disponíveis. Os casos favoráveis são 3, pois a primeira pessoa vai estar em algum grupo e a segunda pessoa tem 3 opções de lugares para escolher um, no grupo que se encontra a primeira pessoa. Portanto, a probabilidade é   "
},
{
  "id": "exercise-72",
  "level": "2",
  "url": "section-espacos-probabilidade.html#exercise-72",
  "type": "Exercício",
  "number": "8.1.4",
  "title": "",
  "body": " Um armário contém 6 pares de sapatos. Escolhem-se 4 pés de sapatos. Qual é a probabilidade de se formar exatamente um par de sapatos?       A cardinalidade do espaço amostral é , pois essa é a quantidade de maneiras distintas de retirar 4 pés de sapatos, de 12 disponíveis.  Agora, vamos contar o número de casos favoráveis. Temos maneiras de retirar 1 par de sapatos, de 6 pares disponíveis. Depois disso, temos maneiras de escolher dois representantes de 5 tipos de sapatos disponíveis. Em seguida, precisamos decidir se será retirado o pé esquerdo ou o pé direito de cada um desses dois sapatos. Isto pode ser feito de maneiras. Portanto, a probabilidade é   "
},
{
  "id": "exercise-73",
  "level": "2",
  "url": "section-espacos-probabilidade.html#exercise-73",
  "type": "Exercício",
  "number": "8.1.5",
  "title": "",
  "body": " Oito carros estão estacionados em doze vagas em fila. Determine a probabilidade:  das vagas vazias serem consecutivas;  de não haver duas vagas vazias adjacentes.    a) , b) .   item a) Para que as vagas vazias fiquem juntas, juntamos 4 vagas em uma, ficamos com 9 vagas para escolher uma, que será quádrupla. Isto pode ser feito de 9 maneiras. A cardinalidade do espaço amostral é o número de maneiras de escolher 4 lugares para ficarem fazios, dentre 12 disponíveis. Logo, a probabilidade é   item b) Já sabemos que o espaço amostral tem cardinalidade . Para que não haja duas vagas vazias adjacentes, podemos escolher as 4 vagas que ficarão vazias de maneiras. Assim, a probabilidade é   "
},
{
  "id": "exercise-74",
  "level": "2",
  "url": "section-espacos-probabilidade.html#exercise-74",
  "type": "Exercício",
  "number": "8.1.6",
  "title": "",
  "body": " (ITA 2004) Uma caixa branca contém 5 bolas verdes e 3 azuis, e uma caixa preta contém 3 bolas verdes e 2 azuis. Pretende-se retirar uma bola de uma das caixas. Para tanto, 2 dados são atirados. Se a soma resultante dos dois dados for menor que 4, retira-se uma bola da caixa branca. Nos demais casos, retira-se uma bola da caixa preta. Qual é a probabilidade de se retirar uma bola verde?     No lançamento de dois dados, são possíveis 36 (pares) resultados diferentes, sendo que em apenas 3 deles a soma resultante é menor que 4. São eles: (1;1), (1;2), (2;1). A probabilidade de que uma bola verde seja retirada da urna branca é e da urna preta é . Assim, a probabilidade de se retirar uma bola verde é   "
},
{
  "id": "exercise-75",
  "level": "2",
  "url": "section-espacos-probabilidade.html#exercise-75",
  "type": "Exercício",
  "number": "8.1.7",
  "title": "",
  "body": " (ITA 2005) São dados dois cartões, sendo que um deles tem ambos os lados na cor vermelha, enquanto o outro tem um lado na cor vermelha e o outro na cor azul. Um dos cartões é escolhido ao acaso e colocado sobre uma mesa. Se a cor exposta é vermelha, calcule a probabilidade de o cartão escolhido ter a outra cor também vermelha      O total de faces nos dois cartões é 4, sendo 3 faces vermelhas e 1 azul. Como a cor exposta é vermelha, temos duas chances do verso ser vermelho e uma chance do verso ser azul. Portanto a probabilidade de o cartão escolhido ter a outra cor também vermelha é   "
},
{
  "id": "exercise-76",
  "level": "2",
  "url": "section-espacos-probabilidade.html#exercise-76",
  "type": "Exercício",
  "number": "8.1.8",
  "title": "",
  "body": " (ITA 2008) Considere o conjunto e formado por todos os subconjuntos de com elementos. Escolhendo ao acaso um elemento , a probabilidade de a soma de seus elementos ser 183 é igual a  a) b) c) d) e)   a)   De acordo com o enunciado . O conjunto dos elementos , cuja soma deve ser é   Logo . Então, escolhendo ao acaso um elemento a probabilidade de que a soma dos elementos de seja 183 é   "
},
{
  "id": "exercise-77",
  "level": "2",
  "url": "section-espacos-probabilidade.html#exercise-77",
  "type": "Exercício",
  "number": "8.1.9",
  "title": "",
  "body": " (ITA 2010) Uma urna de sorteio contém bolas numeradas de a , sendo que a retirada de uma bola é equiprovável à retirada de cada uma das demais.   Retira-se aleatoriamente uma das bolas desta urna. Calcule a probabilidade de o número desta bola ser um múltiplo de ou .  Retira-se aleatoriamente uma das bolas desta urna e, sem repôla, retira-se uma segunda bola. Calcule a probabilidade de o número da segunda bola retirada não ser múltiplo de .    a) b)   a) Usaremos o Princípio da Inclusão-Exclusão para calcular o número de bolas com números múltiplos de 5 ou 6.    Note que e que é o conjunto dos múltiplos de entre e , incluindo o . Observe que , e . Portanto a probabilidade é   b) Para que o número da segunda bola retirada não seja múltiplo de 6, temos dois casos. 1º caso: primeira bola é um múltiplo de 6 e a segunda não. Essa probabilidade é dada por: . 2º caso: primeira bola não é um múltiplo de 6 e a segunda também não é. Essa probabilidade é dada por: . Logo a probabilidade de o número da segunda bola retirada não ser múltiplo de é   "
},
{
  "id": "exercise-78",
  "level": "2",
  "url": "section-espacos-probabilidade.html#exercise-78",
  "type": "Exercício",
  "number": "8.1.10",
  "title": "",
  "body": " (ITA 2011) Sobre uma mesa estão dispostos livros de história, de biologia e de espanhol. Determine a probabilidade de os livros serem empilhados sobre a mesa de tal forma que aqueles que tratam do mesmo assunto estejam juntos.   .   No total os livros podem ser organizados de maneiras. Para que os livros de mesmo assunto fiquem juntos, temos maneiras. Portanto a probabilidade é dada por   "
},
{
  "id": "exercise-79",
  "level": "2",
  "url": "section-espacos-probabilidade.html#exercise-79",
  "type": "Exercício",
  "number": "8.1.11",
  "title": "",
  "body": " (FUVEST 2020 - 2ª fase) Um jogo educativo possui 16 peças nos formatos: círculo, triângulo, quadrado e estrela, e cada formato é apresentado em 4 cores: amarelo, branco, laranja e verde. Dois jogadores distribuem entre si quantidades iguais dessas peças, de forma aleatória. O conjunto de 8 peças que cada jogador recebe é chamado de coleção.  a) Qual é a probabilidade de que os dois jogadores recebam a mesma quantidade de peças amarelas?   a)   De acordo com o o espaço amostral é dado por .  Precisamos calcular o número de maneiras de distribuir as 8 peças para cada jogador, de forma que exatamente duas delas sejam amarelas. Vamos calcular o número de maneiras de distribuir as peças para o primeiro jogador, as peças que sobram ficam para o segundo jogador.  Como são 4 peças amarelas distintas duas a duas, temos maneiras de separar duas peças amarelas. Agora precisamos separar 6 peças com cores diferentes de amarelo. Temos um total de maneiras de fazer isto, pois existem exatamente 12 peças com cores diferentes de amarelo. Portanto a probabilidade é  "
},
{
  "id": "exercise-80",
  "level": "2",
  "url": "section-espacos-probabilidade.html#exercise-80",
  "type": "Exercício",
  "number": "8.1.12",
  "title": "",
  "body": " (FUVEST 2018 - 2ª fase) Em um torneio de xadrez, há 2n participantes. Suponha que 12 jogadores participem do torneio, dos quais 6 sejam homens e 6 sejam mulheres. Qual é a probabilidade de que, na primeira rodada, só haja confrontos entre jogadores do mesmo sexo?     De acordo com o o espaço amostral é dado por .  O número de maneiras de emparceirar as mulheres entre si é dado por .  Como o número de maneiras de emparceirar os homens entre si é o mesmo de emparceirar as mulheres entre si, a probabilidade pedida é dada por  "
},
{
  "id": "exercise-81",
  "level": "2",
  "url": "section-espacos-probabilidade.html#exercise-81",
  "type": "Exercício",
  "number": "8.1.13",
  "title": "",
  "body": " (FUVEST 2013 - 2ª fase) Sócrates e Xantipa enfrentam-se em um popular jogo de tabuleiro, que envolve a conquista e ocupação de territórios em um mapa. Sócrates ataca jogando três dados e Xantipa se defende com dois. Depois de lançados os dados, que são honestos, Sócrates terá conquistado um território se e somente se as duas condições seguintes forem satisfeitas:   o maior valor obtido em seus dados for maior que o maior valor obtido por Xantipa;  algum outro dado de Sócrates cair com um valor maior que o menor valor obtido por Xantipa.    No caso em que Xantipa tira 5 e 5, qual é a probabilidade de Sócrates conquistar o território em jogo?  No caso em que Xantipa tira 5 e 4, qual é a probabilidade de Sócrates conquistar o território em jogo?    a) b)   item a) No caso em que Xantipa tira 5 e 5, Sócrates conquista o território se conseguir três vezes a face 6 ou duas vezes a face 6 e uma vez uma face diferente de 6. Como o segundo caso pode ser ordenado de três formas diferentes, a probabilidade de Sócrates conquistar o território é:   item b) No caso em que Xantipa tira 5 e 4, temos 4 possibilidades para Sócrates conquistar o território. 1º Sócrates tira 6, 6 e 6. Neste caso a probabilidade é  2ª Sócrates tira 6, 6 e um número menor que 6. Neste caso a probabilidade é  3º Sócrates tira 6, 5 e 5. Neste caso a probabilidade é  4º Sócrates tira 6, 5 e um número menor que 5. Neste caso a probabilidade é Portanto a resposta é a soma dos 4 casos possíveis:  "
},
{
  "id": "section-probabilidade-condicional",
  "level": "1",
  "url": "section-probabilidade-condicional.html",
  "type": "Seção",
  "number": "8.2",
  "title": "Probabilidade Condicional",
  "body": " Probabilidade Condicional    Definir Probabilidade Condicional.  Mostrar que a Probabilidade Condicional também é uma probabilidade.  Exemplificar.  Enunciar e demonstrar os resultados: Regra do Produto de Probabilidades, Teorema da Probabilidade Total e o Teorema de Bayes.  Definir Eventos Independentes e Exemplificar.     Um dado (não viciado) foi lançado. Considere o evento . A probabilidade de ocorrer é Agora, suponha que alguém (que você confia) viu o resultado e falou que a face virada para cima é um número maior que 3.  A nossa opinião sobre a probabilidade modifica, pois agora o espaço amostral foi reduzido para e temos duas chances em três de que o resultado seja par.  Essa é a noção de probabilidade de na certeza de e é denotada por:     Dados dois eventos (conjuntos) e , a probabilidade condicional de dado é dada por    Note que só está definido quando . A igualdade pode ser reescrita das seguintes formas: e, caso :    Refaça a 2ª parte do Exemplo , usando a definição .  Suponha que alguém (que você confia) viu o resultado, do lançamento de um dado, e falou que a face virada para cima é um número maior que 3. Qual a probabilidade de que o resultado tenha sido um número par?   Seja o evento , foi dado que ocorreu , então temos e Pela definição de probabilidade condicional, temos      Seja tal que . Então a probabilidade condicional é outra probabilidade sobre o espaço amostral , ou seja, valem as seguintes propriedades:  ;  ;  Se então .       a) Como temos  b)  e  c)       Em um experimento aleatório é retirado sucessivamente e sem reposição três bolas de uma caixa que comtém 8 bolas pretas e 6 bolas brancas. Qual a probabilidade de que sejam três bolas brancas?   Considere os eventos: Queremos calcular a probabilidade .   Árvore de Probabilidades.    A probabilidade de que a primeira bola seja branca é . Dado que aconteceu , a probabilidade de que a segunda bola seja branca é . Dado que aconteceram e , a probabilidade de que a terceira bola seja branca é . Portanto Na solução deste problema, usamos a      (Regra do Produto de Probabilidades)  Sejam eventos de um espaço amostral e uma probabilidade em . Se então    Para dois conjuntos a fórmula é verdadeira, pois coincide com a definição de probabilidade condicional. Vamos usar o Princípio de Indução para mostrar que o resultado é verdadeiro. Suponha o resultado válido para eventos.  Defina , queremos a probabilidade . Pela definição de probabilidade condicional, temos ou seja,  Pela hipótese de indução, temos Substituindo a igualdade dada pela hipótese de indução em , chegamos no resultado:      Sabe-se que das importações, por pessoas físicas, para o Brasil vem da China. A probabilidade de uma importação chegar na residência do comprador é de se for uma compra da China e caso contrário. Se uma importação for feita agora.   Qual a probabilidade de que a compra ser da China e de chegar na residência do comprador?  Qual a probabilidade de que a compra chegue na residência do comprador?  Uma importação foi feita e o produto se perdeu. Qual a probabilidade de ter sido da china?     item a)  Usaremos as notações: Logo,   item b)  Para uma importação chegar na residência do comprador, ela pode ter sido feita da china ou do complementar da china. Usaremos para dizer que não chegou na residência e para dizer que não é da china. A probabilidade de que a importação chegue é dada por Usando a , temos Nesta solução, usamos o (Teorema da Probabilidade Total).  item c)  Vamos calcular a probabilidade de que a importação seja da China e tenha se perdido, vamos dividir esse valor pela probabilidade de que a importação tenha se perdido.  A probabilidade de que a importação se perdeu e foi da china é de A probabilidade de que a importação tenha se perdido é dada por Portanto a probabilidade de que tenha sido da china a importação que se perdeu é Observe que o cálculo usado foi o seguinte: Este é o Teorema de Bayes.    item b)  Para organizar melhor as ideias, desenhamos uma árvore com todas as possibilidades.   Árvore de Probabilidades.    Observa-se mais facilmente que a probabilidade da importação chegar na residência é dada por   item c)  Usando a árvore de probabilidades, vamos calcular a probabilidade de que a importação seja da China e tenha se perdido, vamos dividir esse valor pela probabilidade de que a importação tenha se perdido.     (Teorema da Probabilidade Total)  Sejam e é um eventos tais que e então    Como vale Temos com a união disjunta, portanto     (Teorema de Bayes)  Sejam e é um eventos tais que e então    Aplicando a definição de probabilidade condicional, temos Usando o e substituindo em , obtemos      Eventos Independentes   Sejam e eventos. e são independentes se,   Da , temos     Em um experimento aleatório é retirado sucessivamente, com reposição, duas bolas de uma caixa que comtém 8 bolas pretas e 6 bolas brancas. Qual a probabilidade de que sejam duas bolas brancas?   Considere os eventos: Observe que os eventos são independentes, portanto a probabilidade é      Sejam eventos. são independentes se, para todo , e para quaisquer , tem-se  Consequentemente,      Em um experimento aleatório é retirado sucessivamente, com reposição, três bolas de uma caixa que comtém 8 bolas pretas e 6 bolas brancas. Qual a probabilidade de que sejam três bolas brancas?   Considere os eventos: Observe que os eventos são independentes, portanto a probabilidade é      Um dado (não viciado) é lançado 5 vezes. Qual é a probabilidade de obtermos os resultados , exatamente nessa ordem?   Seja o evento: saiu o valor da posição da lista , no -ésimo lançamento, .  Como os eventos são independentes, temos       Exercícios   Dois dados e são lançados e os resultados nas faces de cima anotados.  Qual a probabilidade da soma dos pontos ser 6, se a face observada em foi 2?  Qual a probabilidade de ter saı́do 2 em , se a soma dos pontos foi 6?  Qual a probablidade da soma dos pontos ser menor do que 7, sabendo que o número 2 saiu pelo menos uma vez?  Qual a probabilidade da soma dos pontos ser menor do que ou igual a 6, se o maior dos números obtidos é menor do que 5?  Qual a probabilidade do maior dos números obtidos ser menor do que 5, sabendo que a soma dos pontos foi menor do que ou igual a 6?     a) , b) , c) , d) , e) .    Três caixas I, II e III contém respectivamente 1 bola branca e 2 pretas; 2 brancas e 1 preta; 3 brancas e 2 pretas. Uma caixa é escolhida ao acaso e dela é retirada uma bola. Determine a probabilidade:   da bola retirada ser branca, sabendo que a caixa escolhida foi a I;  da caixa escolhida ter sido a I e a bola retirada ser branca.    a) , b) .    Uma caixa contém 30 bolas pretas, 20 brancas e 10 vermelhas. Três bolas são retiradas da caixa, uma após a outra, sem reposição. Qual a pobabilidade da terceira bola retirada ser preta?      (ITA 2008) Considere uma população de igual número de homens e mulheres, em que sejam daltônicos dos homens e das mulheres. Indique a probabilidade de que seja mulher uma pessoa daltônica selecionada ao acaso nessa população.  a) b) c) d) e)   a)    (ITA 2009) Uma amostra de estrangeiros, em que 18% são proficientes em inglês, realizou um exame para classificar a sua proficiência nesta língua. Dos estrangeiros que são proficientes em inglês, 75% foram classificados como proficientes. Entre os não proficientes em inglês, 7% foram classificados como proficientes. Um estrangeiro desta amostra, escolhido ao acaso, foi classificado como proficiente em inglês. A probabilidade deste estrangeiro ser efetivamente proficiente nesta língua é de aproximadamente  a) b) c) d) e)   b)   Dos de estrangeiros proficientes em inglês, foram classificados como proficientes: Dos de estrangeiros não-proficientes em inglês, foram classificados como proficientes: A probabilidade do estrangeiro ser efetivamente proficiente em inglês é     (ITA 2008) Em um espaço amostral com uma probabilidade , são dados os eventos e tais que: , com e independentes, , e sabe-se que . Calcule as probabilidades condicionais e .      . Precisamos calcular e .  Para calcular , usaremos a igualdade . Logo Portanto .  Para calcular , usaremos a igualdade . Logo Resta agora calcular .  Pelo item d) do temos   Logo, E   Substituindo os valores obtidos     (ITA 2011) Numa caixa com moedas, apresentam duas caras, são normais (cara e coroa) e as demais apresentam duas coroas. Uma moeda é retirada ao acaso e a face observada mostra uma coroa. A probabilidade de a outra face desta moeda também apresentar uma coroa é  a) b) c) d) e)   . Questão anulada, nenhum item estava correto.   Temos 10 moedas comuns, com uma cara e uma coroa, 25 moedas com duas coroas e 5 moedas com duas caras. Desenhando a árvore de probabilidades:   Árvore de Probabilidades.    Podemos calcular a probabilidade da seguinte maneira:     "
},
{
  "id": "dEf",
  "level": "2",
  "url": "section-probabilidade-condicional.html#dEf",
  "type": "Objetivos",
  "number": "8.2",
  "title": "",
  "body": "  Definir Probabilidade Condicional.  Mostrar que a Probabilidade Condicional também é uma probabilidade.  Exemplificar.  Enunciar e demonstrar os resultados: Regra do Produto de Probabilidades, Teorema da Probabilidade Total e o Teorema de Bayes.  Definir Eventos Independentes e Exemplificar.   "
},
{
  "id": "exem-prob-condicional",
  "level": "2",
  "url": "section-probabilidade-condicional.html#exem-prob-condicional",
  "type": "Exemplo",
  "number": "8.2.1",
  "title": "",
  "body": " Um dado (não viciado) foi lançado. Considere o evento . A probabilidade de ocorrer é Agora, suponha que alguém (que você confia) viu o resultado e falou que a face virada para cima é um número maior que 3.  A nossa opinião sobre a probabilidade modifica, pois agora o espaço amostral foi reduzido para e temos duas chances em três de que o resultado seja par.  Essa é a noção de probabilidade de na certeza de e é denotada por:   "
},
{
  "id": "def-prob-condicional",
  "level": "2",
  "url": "section-probabilidade-condicional.html#def-prob-condicional",
  "type": "Definição",
  "number": "8.2.2",
  "title": "",
  "body": " Dados dois eventos (conjuntos) e , a probabilidade condicional de dado é dada por   "
},
{
  "id": "def-prob-condicional-p2",
  "level": "2",
  "url": "section-probabilidade-condicional.html#def-prob-condicional-p2",
  "type": "Nota",
  "number": "8.2.3",
  "title": "",
  "body": "Note que só está definido quando . A igualdade pode ser reescrita das seguintes formas: e, caso :  "
},
{
  "id": "example-122",
  "level": "2",
  "url": "section-probabilidade-condicional.html#example-122",
  "type": "Exemplo",
  "number": "8.2.4",
  "title": "",
  "body": " Refaça a 2ª parte do Exemplo , usando a definição .  Suponha que alguém (que você confia) viu o resultado, do lançamento de um dado, e falou que a face virada para cima é um número maior que 3. Qual a probabilidade de que o resultado tenha sido um número par?   Seja o evento , foi dado que ocorreu , então temos e Pela definição de probabilidade condicional, temos    "
},
{
  "id": "theorem-45",
  "level": "2",
  "url": "section-probabilidade-condicional.html#theorem-45",
  "type": "Teorema",
  "number": "8.2.5",
  "title": "",
  "body": " Seja tal que . Então a probabilidade condicional é outra probabilidade sobre o espaço amostral , ou seja, valem as seguintes propriedades:  ;  ;  Se então .       a) Como temos  b)  e  c)     "
},
{
  "id": "example-123",
  "level": "2",
  "url": "section-probabilidade-condicional.html#example-123",
  "type": "Exemplo",
  "number": "8.2.6",
  "title": "",
  "body": " Em um experimento aleatório é retirado sucessivamente e sem reposição três bolas de uma caixa que comtém 8 bolas pretas e 6 bolas brancas. Qual a probabilidade de que sejam três bolas brancas?   Considere os eventos: Queremos calcular a probabilidade .   Árvore de Probabilidades.    A probabilidade de que a primeira bola seja branca é . Dado que aconteceu , a probabilidade de que a segunda bola seja branca é . Dado que aconteceram e , a probabilidade de que a terceira bola seja branca é . Portanto Na solução deste problema, usamos a    "
},
{
  "id": "prop-produto-probabilidade",
  "level": "2",
  "url": "section-probabilidade-condicional.html#prop-produto-probabilidade",
  "type": "Proposição",
  "number": "8.2.8",
  "title": "",
  "body": " (Regra do Produto de Probabilidades)  Sejam eventos de um espaço amostral e uma probabilidade em . Se então    Para dois conjuntos a fórmula é verdadeira, pois coincide com a definição de probabilidade condicional. Vamos usar o Princípio de Indução para mostrar que o resultado é verdadeiro. Suponha o resultado válido para eventos.  Defina , queremos a probabilidade . Pela definição de probabilidade condicional, temos ou seja,  Pela hipótese de indução, temos Substituindo a igualdade dada pela hipótese de indução em , chegamos no resultado:    "
},
{
  "id": "example-124",
  "level": "2",
  "url": "section-probabilidade-condicional.html#example-124",
  "type": "Exemplo",
  "number": "8.2.9",
  "title": "",
  "body": " Sabe-se que das importações, por pessoas físicas, para o Brasil vem da China. A probabilidade de uma importação chegar na residência do comprador é de se for uma compra da China e caso contrário. Se uma importação for feita agora.   Qual a probabilidade de que a compra ser da China e de chegar na residência do comprador?  Qual a probabilidade de que a compra chegue na residência do comprador?  Uma importação foi feita e o produto se perdeu. Qual a probabilidade de ter sido da china?     item a)  Usaremos as notações: Logo,   item b)  Para uma importação chegar na residência do comprador, ela pode ter sido feita da china ou do complementar da china. Usaremos para dizer que não chegou na residência e para dizer que não é da china. A probabilidade de que a importação chegue é dada por Usando a , temos Nesta solução, usamos o (Teorema da Probabilidade Total).  item c)  Vamos calcular a probabilidade de que a importação seja da China e tenha se perdido, vamos dividir esse valor pela probabilidade de que a importação tenha se perdido.  A probabilidade de que a importação se perdeu e foi da china é de A probabilidade de que a importação tenha se perdido é dada por Portanto a probabilidade de que tenha sido da china a importação que se perdeu é Observe que o cálculo usado foi o seguinte: Este é o Teorema de Bayes.    item b)  Para organizar melhor as ideias, desenhamos uma árvore com todas as possibilidades.   Árvore de Probabilidades.    Observa-se mais facilmente que a probabilidade da importação chegar na residência é dada por   item c)  Usando a árvore de probabilidades, vamos calcular a probabilidade de que a importação seja da China e tenha se perdido, vamos dividir esse valor pela probabilidade de que a importação tenha se perdido.    "
},
{
  "id": "teo-probabilidade-total",
  "level": "2",
  "url": "section-probabilidade-condicional.html#teo-probabilidade-total",
  "type": "Teorema",
  "number": "8.2.11",
  "title": "",
  "body": "(Teorema da Probabilidade Total)  Sejam e é um eventos tais que e então    Como vale Temos com a união disjunta, portanto    "
},
{
  "id": "teo-bayes",
  "level": "2",
  "url": "section-probabilidade-condicional.html#teo-bayes",
  "type": "Teorema",
  "number": "8.2.12",
  "title": "",
  "body": "(Teorema de Bayes)  Sejam e é um eventos tais que e então    Aplicando a definição de probabilidade condicional, temos Usando o e substituindo em , obtemos    "
},
{
  "id": "definition-35",
  "level": "2",
  "url": "section-probabilidade-condicional.html#definition-35",
  "type": "Definição",
  "number": "8.2.13",
  "title": "",
  "body": " Sejam e eventos. e são independentes se,   Da , temos   "
},
{
  "id": "example-125",
  "level": "2",
  "url": "section-probabilidade-condicional.html#example-125",
  "type": "Exemplo",
  "number": "8.2.14",
  "title": "",
  "body": " Em um experimento aleatório é retirado sucessivamente, com reposição, duas bolas de uma caixa que comtém 8 bolas pretas e 6 bolas brancas. Qual a probabilidade de que sejam duas bolas brancas?   Considere os eventos: Observe que os eventos são independentes, portanto a probabilidade é    "
},
{
  "id": "definition-36",
  "level": "2",
  "url": "section-probabilidade-condicional.html#definition-36",
  "type": "Definição",
  "number": "8.2.15",
  "title": "",
  "body": " Sejam eventos. são independentes se, para todo , e para quaisquer , tem-se  Consequentemente,    "
},
{
  "id": "example-126",
  "level": "2",
  "url": "section-probabilidade-condicional.html#example-126",
  "type": "Exemplo",
  "number": "8.2.16",
  "title": "",
  "body": " Em um experimento aleatório é retirado sucessivamente, com reposição, três bolas de uma caixa que comtém 8 bolas pretas e 6 bolas brancas. Qual a probabilidade de que sejam três bolas brancas?   Considere os eventos: Observe que os eventos são independentes, portanto a probabilidade é    "
},
{
  "id": "example-127",
  "level": "2",
  "url": "section-probabilidade-condicional.html#example-127",
  "type": "Exemplo",
  "number": "8.2.17",
  "title": "",
  "body": " Um dado (não viciado) é lançado 5 vezes. Qual é a probabilidade de obtermos os resultados , exatamente nessa ordem?   Seja o evento: saiu o valor da posição da lista , no -ésimo lançamento, .  Como os eventos são independentes, temos    "
},
{
  "id": "exercise-82",
  "level": "2",
  "url": "section-probabilidade-condicional.html#exercise-82",
  "type": "Exercício",
  "number": "8.2.2.1",
  "title": "",
  "body": " Dois dados e são lançados e os resultados nas faces de cima anotados.  Qual a probabilidade da soma dos pontos ser 6, se a face observada em foi 2?  Qual a probabilidade de ter saı́do 2 em , se a soma dos pontos foi 6?  Qual a probablidade da soma dos pontos ser menor do que 7, sabendo que o número 2 saiu pelo menos uma vez?  Qual a probabilidade da soma dos pontos ser menor do que ou igual a 6, se o maior dos números obtidos é menor do que 5?  Qual a probabilidade do maior dos números obtidos ser menor do que 5, sabendo que a soma dos pontos foi menor do que ou igual a 6?     a) , b) , c) , d) , e) .  "
},
{
  "id": "exercise-83",
  "level": "2",
  "url": "section-probabilidade-condicional.html#exercise-83",
  "type": "Exercício",
  "number": "8.2.2.2",
  "title": "",
  "body": " Três caixas I, II e III contém respectivamente 1 bola branca e 2 pretas; 2 brancas e 1 preta; 3 brancas e 2 pretas. Uma caixa é escolhida ao acaso e dela é retirada uma bola. Determine a probabilidade:   da bola retirada ser branca, sabendo que a caixa escolhida foi a I;  da caixa escolhida ter sido a I e a bola retirada ser branca.    a) , b) .  "
},
{
  "id": "exercise-84",
  "level": "2",
  "url": "section-probabilidade-condicional.html#exercise-84",
  "type": "Exercício",
  "number": "8.2.2.3",
  "title": "",
  "body": " Uma caixa contém 30 bolas pretas, 20 brancas e 10 vermelhas. Três bolas são retiradas da caixa, uma após a outra, sem reposição. Qual a pobabilidade da terceira bola retirada ser preta?    "
},
{
  "id": "exercise-85",
  "level": "2",
  "url": "section-probabilidade-condicional.html#exercise-85",
  "type": "Exercício",
  "number": "8.2.2.4",
  "title": "",
  "body": " (ITA 2008) Considere uma população de igual número de homens e mulheres, em que sejam daltônicos dos homens e das mulheres. Indique a probabilidade de que seja mulher uma pessoa daltônica selecionada ao acaso nessa população.  a) b) c) d) e)   a)  "
},
{
  "id": "exercise-86",
  "level": "2",
  "url": "section-probabilidade-condicional.html#exercise-86",
  "type": "Exercício",
  "number": "8.2.2.5",
  "title": "",
  "body": " (ITA 2009) Uma amostra de estrangeiros, em que 18% são proficientes em inglês, realizou um exame para classificar a sua proficiência nesta língua. Dos estrangeiros que são proficientes em inglês, 75% foram classificados como proficientes. Entre os não proficientes em inglês, 7% foram classificados como proficientes. Um estrangeiro desta amostra, escolhido ao acaso, foi classificado como proficiente em inglês. A probabilidade deste estrangeiro ser efetivamente proficiente nesta língua é de aproximadamente  a) b) c) d) e)   b)   Dos de estrangeiros proficientes em inglês, foram classificados como proficientes: Dos de estrangeiros não-proficientes em inglês, foram classificados como proficientes: A probabilidade do estrangeiro ser efetivamente proficiente em inglês é   "
},
{
  "id": "exercise-87",
  "level": "2",
  "url": "section-probabilidade-condicional.html#exercise-87",
  "type": "Exercício",
  "number": "8.2.2.6",
  "title": "",
  "body": " (ITA 2008) Em um espaço amostral com uma probabilidade , são dados os eventos e tais que: , com e independentes, , e sabe-se que . Calcule as probabilidades condicionais e .      . Precisamos calcular e .  Para calcular , usaremos a igualdade . Logo Portanto .  Para calcular , usaremos a igualdade . Logo Resta agora calcular .  Pelo item d) do temos   Logo, E   Substituindo os valores obtidos   "
},
{
  "id": "exercise-88",
  "level": "2",
  "url": "section-probabilidade-condicional.html#exercise-88",
  "type": "Exercício",
  "number": "8.2.2.7",
  "title": "",
  "body": " (ITA 2011) Numa caixa com moedas, apresentam duas caras, são normais (cara e coroa) e as demais apresentam duas coroas. Uma moeda é retirada ao acaso e a face observada mostra uma coroa. A probabilidade de a outra face desta moeda também apresentar uma coroa é  a) b) c) d) e)   . Questão anulada, nenhum item estava correto.   Temos 10 moedas comuns, com uma cara e uma coroa, 25 moedas com duas coroas e 5 moedas com duas caras. Desenhando a árvore de probabilidades:   Árvore de Probabilidades.    Podemos calcular a probabilidade da seguinte maneira:   "
},
{
  "id": "section-distribuicao-binomial",
  "level": "1",
  "url": "section-distribuicao-binomial.html",
  "type": "Seção",
  "number": "8.3",
  "title": "Distribuição Binomial",
  "body": " Distribuição Binomial    Enunciar e demonstrar o Teorema da Distribuição Binomial.  Exemplificar.     Distribuição Binomial   Jogando uma moeda não viciada 15 vezes. Qual é a probabilidade de obtermos exatamente 7 caras?   Os eventos são independentes e a probabilidade de obter cara no lançamento da moeda é .  Queremos achar a probabilidade de obtermos 7 caras em 15 lançamentos. Vamos, inicialmente, fixar que queremos os 7 primeiros resultados iguais a cara, assim estamos impondo que os 8 resultados seguintes serão coroa. Desta forma, a probabilidade de que os 7 primeiros resultados sejam cara e de que os 8 resultados seguintes sejam coroa é  mas a pergunta do problema não foi esta, pois a ordem em que apareceram as caras e as coroas não importa.  Observe que o número de formas de ordenar 7 caras e 8 coroas coincide com o número formas de escolher 7 lugares, para colocar as caras, dentre 15 disponíveis, e colocar as coroas nos lugares que sobraram. Isto pode ser feito de maneiras.  Portanto a resposta para nosso problema é      Considere um experimento com apenas dois resultados possíveis, chamados de sucesso e fracasso . Denotaremos por a probabilidade de sucesso.  A probabilidade de ocorrerem exatamente sucessos em uma sequência de provas independentes, na qual a probabilidade de sucesso em cada etapa é , é igual a    A probabilidade de nessas provas obtermos sucessos, e consequentemente, fracassos em uma ordem fixada é pois as provas são independentes. É claro que em outra ordem, a probabilidade seria a mesma, pois apenas a ordem dos fatores se altera. Como o número de formas de alterar esta ordem é , a probabilidade de obtermos sucessos, em provas é       Um dodecaedro (regular, com peso uniforme, ou seja, não viciado) tem 3 faces verdes e 4 faces vermelhas e 5 faces azuis.   Qual é a probabilidade de em 8 lançamentos desse dodecaedro, obtermos 3 vezes a cor verde?  Qual é a probabilidade de em 8 lançamentos desse dodecaedro, obtermos 3 vezes a cor azul?    item a) Vamos considerar os eventos:  S: saiu uma face verde  F: não saiu uma face verde  Pelo a probabilidade é   item b) Vamos considerar os eventos:  S: saiu uma face azul  F: não saiu uma face azul  Pelo a probabilidade é       Exercícios    Uma caixa contém 9 bolas brancas, 6 pretas e 5 vermelhas. Retiram-se, sucessivamente e com reposição, 4 bolas dessa caixa. Determine a probabilidade:  das 4 bolas retiradas serem vermelhas;  de somente 2 bolas retiradas serem vermelhas;  de pelo menos 2 bolas serem vermelhas.     a) , b) , c) .    (ITA 2009) Um determinado concurso é realizado em duas etapas. Ao longo dos últimos anos, 20% dos candidatos do concurso têm conseguido na primeira etapa nota superior ou igual à nota mínima necessária para poder participar da segunda etapa. Se tomarmos 6 candidatos dentre os muitos inscritos, qual é a probabilidade de no mínimo 4 deles conseguirem nota para participar da segunda etapa?   .   Temos três casos que pelo menos 4 candidatos, dentre 6, conseguem a nota mínima:   Aplicando o temos que a probabilidade pedida é dada por:       (ITA 2010) Um palco possui refletores de iluminação. Num certo instante de um espetáculo moderno os refletores são acionados aleatoriamente de modo que, para cada um dos refletores, seja de a probabilidade de ser aceso. Então, a probabilidade de que, este instante, ou refletores sejam acesos simultaneamente, é igual a  a) b) c) d) e)    a)   Aplicando o temos     "
},
{
  "id": "dEf",
  "level": "2",
  "url": "section-distribuicao-binomial.html#dEf",
  "type": "Objetivos",
  "number": "8.3",
  "title": "",
  "body": "  Enunciar e demonstrar o Teorema da Distribuição Binomial.  Exemplificar.   "
},
{
  "id": "example-128",
  "level": "2",
  "url": "section-distribuicao-binomial.html#example-128",
  "type": "Exemplo",
  "number": "8.3.1",
  "title": "",
  "body": " Jogando uma moeda não viciada 15 vezes. Qual é a probabilidade de obtermos exatamente 7 caras?   Os eventos são independentes e a probabilidade de obter cara no lançamento da moeda é .  Queremos achar a probabilidade de obtermos 7 caras em 15 lançamentos. Vamos, inicialmente, fixar que queremos os 7 primeiros resultados iguais a cara, assim estamos impondo que os 8 resultados seguintes serão coroa. Desta forma, a probabilidade de que os 7 primeiros resultados sejam cara e de que os 8 resultados seguintes sejam coroa é  mas a pergunta do problema não foi esta, pois a ordem em que apareceram as caras e as coroas não importa.  Observe que o número de formas de ordenar 7 caras e 8 coroas coincide com o número formas de escolher 7 lugares, para colocar as caras, dentre 15 disponíveis, e colocar as coroas nos lugares que sobraram. Isto pode ser feito de maneiras.  Portanto a resposta para nosso problema é    "
},
{
  "id": "teo-dist-binomial",
  "level": "2",
  "url": "section-distribuicao-binomial.html#teo-dist-binomial",
  "type": "Teorema",
  "number": "8.3.2",
  "title": "",
  "body": " Considere um experimento com apenas dois resultados possíveis, chamados de sucesso e fracasso . Denotaremos por a probabilidade de sucesso.  A probabilidade de ocorrerem exatamente sucessos em uma sequência de provas independentes, na qual a probabilidade de sucesso em cada etapa é , é igual a    A probabilidade de nessas provas obtermos sucessos, e consequentemente, fracassos em uma ordem fixada é pois as provas são independentes. É claro que em outra ordem, a probabilidade seria a mesma, pois apenas a ordem dos fatores se altera. Como o número de formas de alterar esta ordem é , a probabilidade de obtermos sucessos, em provas é    "
},
{
  "id": "example-129",
  "level": "2",
  "url": "section-distribuicao-binomial.html#example-129",
  "type": "Exemplo",
  "number": "8.3.3",
  "title": "",
  "body": " Um dodecaedro (regular, com peso uniforme, ou seja, não viciado) tem 3 faces verdes e 4 faces vermelhas e 5 faces azuis.   Qual é a probabilidade de em 8 lançamentos desse dodecaedro, obtermos 3 vezes a cor verde?  Qual é a probabilidade de em 8 lançamentos desse dodecaedro, obtermos 3 vezes a cor azul?    item a) Vamos considerar os eventos:  S: saiu uma face verde  F: não saiu uma face verde  Pelo a probabilidade é   item b) Vamos considerar os eventos:  S: saiu uma face azul  F: não saiu uma face azul  Pelo a probabilidade é    "
},
{
  "id": "exercise-89",
  "level": "2",
  "url": "section-distribuicao-binomial.html#exercise-89",
  "type": "Exercício",
  "number": "8.3.2.1",
  "title": "",
  "body": " Uma caixa contém 9 bolas brancas, 6 pretas e 5 vermelhas. Retiram-se, sucessivamente e com reposição, 4 bolas dessa caixa. Determine a probabilidade:  das 4 bolas retiradas serem vermelhas;  de somente 2 bolas retiradas serem vermelhas;  de pelo menos 2 bolas serem vermelhas.     a) , b) , c) .  "
},
{
  "id": "exercise-90",
  "level": "2",
  "url": "section-distribuicao-binomial.html#exercise-90",
  "type": "Exercício",
  "number": "8.3.2.2",
  "title": "",
  "body": " (ITA 2009) Um determinado concurso é realizado em duas etapas. Ao longo dos últimos anos, 20% dos candidatos do concurso têm conseguido na primeira etapa nota superior ou igual à nota mínima necessária para poder participar da segunda etapa. Se tomarmos 6 candidatos dentre os muitos inscritos, qual é a probabilidade de no mínimo 4 deles conseguirem nota para participar da segunda etapa?   .   Temos três casos que pelo menos 4 candidatos, dentre 6, conseguem a nota mínima:   Aplicando o temos que a probabilidade pedida é dada por:     "
},
{
  "id": "exercise-91",
  "level": "2",
  "url": "section-distribuicao-binomial.html#exercise-91",
  "type": "Exercício",
  "number": "8.3.2.3",
  "title": "",
  "body": " (ITA 2010) Um palco possui refletores de iluminação. Num certo instante de um espetáculo moderno os refletores são acionados aleatoriamente de modo que, para cada um dos refletores, seja de a probabilidade de ser aceso. Então, a probabilidade de que, este instante, ou refletores sejam acesos simultaneamente, é igual a  a) b) c) d) e)    a)   Aplicando o temos   "
},
{
  "id": "section-espaco-infinito",
  "level": "1",
  "url": "section-espaco-infinito.html",
  "type": "Seção",
  "number": "8.4",
  "title": "Espaço Amostral Infinito",
  "body": " Espaço Amostral Infinito  Até este momento, somente consideramos situações em que o espaço amostral do experimento aleatório de interesse fosse finito. Mas o ferramental desenvolvido pode ser aplicado também a situações em que o espaço amostral é infinito e, mesmo, não enumerável. O exemplo a seguir é um interessante exemplo de probabilidade geométrica. Quando selecionamos um ponto ao acaso em uma parte do plano é razoável supor que a probabilidade do ponto selecionado permanecer a uma certa região seja proporcional à área dessa região.   Selecionam-se ao acaso dois pontos em um segmento de tamanho 1, dividindo-o em três partes. Determine a probabilidade de que se possa formar um triângulo com essas três partes.   Sejam e os pontos escolhidos, .   Escolhendo dois pontos em um segmento.    Escolher e pertencentes a , com , equivale a escolher um ponto no triângulo da figura abaixo.   Como escolher os pontos e .    Para que exista um triângulo de lados e devemos ter e e , o que dá e e . Em suma, o triângulo existirá se, e somente se, o ponto for selecionado na parte laranja do triângulo .  Sendo o evento \"as três partes formam um triângulo\" e sendo o evento certo, temos que é proporcional a área da parte sombreada e é proporcional à área de . Logo,      A e B lançam sucessivamente um par de dados até que um deles obtenha soma de pontos 7, caso em que a disputa termina e o vencedor é o jogador que obteve soma 7. Se A é o primeiro a jogal, qual é a probabilidade de A ser o vencedor?   A probabilidade de obter 7 é e a de não ser soma 7 é   Para ganhar, ou ganha na primeira mão, ou na segunda, ou na terceira, etc. A probabilidade de ganhar na primeira mão é . Para ganhar na segunda mão, não pode obter soma 7 na primeira mão e não pode obter soma 7 na primeira mão e deve obter soma 7 na segunda mão, o que ocorre com probabilidade   Para ganhar na terceira mão, não pode obter soma 7 nas duas primeiras mãos e não pode obter soma 7 nas duas primeiras mãos e deve obter soma 7 na terceira mão, o que ocorre com probabilidade   Portanto, a probabilidade de ganhar é     Uma solução mais elegante pode ser obtida ignorando as mãos sem vencedores. A probabilidade de ganhar uma mão é de ; de ganhar uma mão é de pois, para ganhar, não pode obter soma 7 e deve obter soma 7; a de ninguem ganhar é de pois, para que ninguém ganhe, não pode obter soma 7 e não pode obter soma 7.  A probabilidade de ganhar é a probabilidade de ganhar em uma mão em que houve vencedor, isto é     "
},
{
  "id": "example-130",
  "level": "2",
  "url": "section-espaco-infinito.html#example-130",
  "type": "Exemplo",
  "number": "8.4.1",
  "title": "",
  "body": " Selecionam-se ao acaso dois pontos em um segmento de tamanho 1, dividindo-o em três partes. Determine a probabilidade de que se possa formar um triângulo com essas três partes.   Sejam e os pontos escolhidos, .   Escolhendo dois pontos em um segmento.    Escolher e pertencentes a , com , equivale a escolher um ponto no triângulo da figura abaixo.   Como escolher os pontos e .    Para que exista um triângulo de lados e devemos ter e e , o que dá e e . Em suma, o triângulo existirá se, e somente se, o ponto for selecionado na parte laranja do triângulo .  Sendo o evento \"as três partes formam um triângulo\" e sendo o evento certo, temos que é proporcional a área da parte sombreada e é proporcional à área de . Logo,    "
},
{
  "id": "example-131",
  "level": "2",
  "url": "section-espaco-infinito.html#example-131",
  "type": "Exemplo",
  "number": "8.4.4",
  "title": "",
  "body": " A e B lançam sucessivamente um par de dados até que um deles obtenha soma de pontos 7, caso em que a disputa termina e o vencedor é o jogador que obteve soma 7. Se A é o primeiro a jogal, qual é a probabilidade de A ser o vencedor?   A probabilidade de obter 7 é e a de não ser soma 7 é   Para ganhar, ou ganha na primeira mão, ou na segunda, ou na terceira, etc. A probabilidade de ganhar na primeira mão é . Para ganhar na segunda mão, não pode obter soma 7 na primeira mão e não pode obter soma 7 na primeira mão e deve obter soma 7 na segunda mão, o que ocorre com probabilidade   Para ganhar na terceira mão, não pode obter soma 7 nas duas primeiras mãos e não pode obter soma 7 nas duas primeiras mãos e deve obter soma 7 na terceira mão, o que ocorre com probabilidade   Portanto, a probabilidade de ganhar é     Uma solução mais elegante pode ser obtida ignorando as mãos sem vencedores. A probabilidade de ganhar uma mão é de ; de ganhar uma mão é de pois, para ganhar, não pode obter soma 7 e deve obter soma 7; a de ninguem ganhar é de pois, para que ninguém ganhe, não pode obter soma 7 e não pode obter soma 7.  A probabilidade de ganhar é a probabilidade de ganhar em uma mão em que houve vencedor, isto é    "
},
{
  "id": "section-28",
  "level": "1",
  "url": "section-28.html",
  "type": "Seção",
  "number": "9.1",
  "title": "Médias",
  "body": " Médias  Uma ideia bastante importante é a ideia de média. Uma média de uma lista de números é um valor que pode substituir todos os elementos da lista sem alterar uma certa característica da lista. Se essa característica é a soma dos elementos da lista, obtemos a mais simples de todas as médias, a média aritmética. A média aritmética (simples) da lista de números é um valor tal que Portanto, temos a seguinte definição:   A média aritmética (simples) da lista de números é definida por     A média aritmética dos números 3, 36, 54 é    Se a característica a ser considerada for o produto dos elementos da lista, obtemos a média geométrica. A média geométrica (simples) dos números positivos é um valor positivo tal que Portanto, temos a seguinite definição:   A média geométrica (simples) dos números positivos é definida por    Observe que só definimos a média geométrica para números positivos. Assim, evitamos a possibilidade da média não existir.   A média geométrica dos números 3, 36, 54 é    Se a característica for a soma dos inversos dos elementos da lista, obteremos a média harmônica. A média harmônica (simples) dos números positivos é um valor tal que Portanto, temos a seguinte definição:   A média harmônica (simples) dos números positivos é definida por     A média harmônica é, pois, o inverso da média aritmética dos inversos dos números. A média harmônica dos números 3, 36, 54 é     Uma empresa produziu, durante o primeiro trimestre do ano passado, 500, 200 e 200 unidades, em janeiro, fevereiro e março, respectivamente. Qual foi a produção média mensal nesse trimestre?   Que média é essa que queremos? Queremos uma média tal que, se a produção mensal fosse sempre igual a , a produção trimestral seria a mesma. A produção trimestral foi de . Se em todos os meses a produção fosse igual a , a produção trimestral seria igual a . Logo, e A média desejada era a média aritmética. Resposta: .     Uma empresa aumentou sua produção durante o primeiro bimestre do ano passado. Em janeiro e em fevereiro, as taxas de aumento foram de 21% e 8%, respectivamente. Qual foi a taxa média de aumento mensal nesse bimetre?    Comentário. A resposta não é .  Que média queremos? Queremos uma taxa média tal que, se em todos os meses a taxa de aumento fosse igual a , o aumento bimetral seria o mesmo. O aumento bimestral foi de 30,68%, conforme mostra o esquema Se em todos os meses tivéssemos um aumento de taxa , teríamos Então, A média procurada era uma média geométrica. Mais precisamente: a taxa média, aumentada de uma unidade, é a média geométrica das taxas mensais aumentadas de uma unidade.     Um concurso anual distribui igualmente entre os vencedores um prêmio total de R$ 1800,00. Nos últimos três anos houve 2, 1 e 3 premiados, respectivamente. Qual foi o prêmio médio desses ganhadores?    Comentário. Embora o número médio de ganhadores tenha sido igual a 2, o prêmio médio não foi de R$ R$ .  Queremos uma média tal que, se todos os prêmios fossem iguais a essa média, o total distribuído seria o mesmo. Essa é precisamente a média aritmética. Os prêmios foram de . O prêmio médio foi de reais.  Observe que a média aritmética dos rateios é igual a e que é a média harmônica dos números de ganhadores.  O rateio médio é o rateio que corresponderia a uma quantidade de ganhadores igual à média harmônica dos números de ganhadores.    Outra média importante é a média quadrática.   A média quadrática dos números é definida por isto é, a média quadrática é a raiz quadrada da média aritmética dos quadrados dos números.    A média quadrática dos números 1 e 7 é     A qualidade de uma aproximação é medida pelo seu erro, que é a diferença entre o valor da aproximação e o valor real da grandeza. Por exemplo, 4 é uma aproximação de 3,8 com erro 0,2 (também se diz uma aproximação de 3,8 por excesso, com erro 0,2) e 5,5 é uma aproximação de 5,7 com erro -0,2 (ou uma aproximação de 5,7 por falta, com erro de 0,2). Evidentemente, quanto mais próximo de zero estiver o erro, tanto melhor será a aproximação. Assim, por exemplo, 39 é uma aproximação de 40 (erro igual a -1) que é melhor do que a aproximação 42 (erro igual a 2).  Mede-se a qualidade de uma lista de aproximações pela média quadrática dos seus erros. Também se usa o erro médio quadrático , que é o quadrado dessa média quadrática, ou seja, é a média aritmética dos quadrados dos erros. Abaixo temos duas listas de aproximações do número 4. Os erros médios quadráticos são respectivamente iguais a  é uma lista de aproximações de melhor do que .    Se a média aritmética dos números é igual a , pelo menos um dos números é maior que ou igual a .   Com efeito, se fosse , , teríamos Logo, E portanto, o que é um absurdo.     Mostre que em um grupo de 50 pessoas, há sempre pelo menos 5 que nasceram no mesmo mês.   O número médio de pessoas por mês é . Logo, em algum mês o número de nascidos nesse mês é maior que ou igual a , ou seja, é maior que ou igual a 5.    Uma consequência imediata do é o Princípio das Casas dos Pombos (ou Princípio das Gavetas de Dirichlet).   Se ou mais objetos são colocados em ou menos gavetas, então pelo menos uma gaveta recebe mais de um objeto.   O número médio de objetos por gaveta é maior que ou igual a , que é maior que 1. Logo, em alguma gaveta haverá um número de objetos maior que 1.     Mostre que todo inteiro positivo tem um múltiplo que se escreve apenas com os algarismos 0 e 1.   Considere os primeiros números da sequência . Divida-os por e considere os restos dessas divisões. Esses restos só podem ser iguais a .  Pensando nos números como objetos e nos restos como gavetas, temos mais objetos do que gavetas. O Princípio das Gavetas assegura que alguma gaveta receberá mais de um objeto, isto é, há dois números na sequência que dão o mesmo resto quando divididos por , digamos ( algarismos) e ( algarismos), . A diferença desses números é um múltiplo de e se escreve , com algarismos e algarismos .     Cinco pontos são tomados sobre a superfície de um quadrado de lado 2. Mostre que há dois desses pontos tais que a distância entre eles é menor que ou igual a .   Divida o quadrado de lado 2 em quatro quadrados de lado 1, ligando os pontos médios dos lados opostos. Pensando nos pontos como objetos e nos quadrados como gavetas, temos mais objetos que gavetas. O Princípio das Gavetas assegura que alguma gaveta receberá mais de um objeto, isto é, haverá dois pontos no mesmo quadrado de lado 1. A distância entre esses pontos é no máximo igual ao comprimento da diagonal do quadrado, que é .     Um enxadrista, durante 11 semanas, joga pelo menos uma partida por dia mas não joga mais de 12 partidas por semana. Mostre que é possível achar um conjunto de dias consecutivos durante os quais ele jogou exatamente 20 partidas.   Em 11 semanas temos 77 dias. Chamaremos de , o número de partidas jogadas desde o primeiro até o -ésimo dia, inclusive. Como ele joga pelo menos uma partida por dia, temos . Além disso, pois ele não joga mais de 12 partidas por semana.  Definindo , a quantidade de partidas jogadas do dia ao dia , inclusive, é igual a . Queremos mostrar que é possível determinar e de modo que .  Considere os 154 números   Eles pertencem a . O Princípio das Gavetas assegura que dois desses números são iguais. Como , os números iguais devem estar em metades diferentes dessa lista de 154 números. Então, existem e tais que . O enxadrista joga 20 partidas entre os dias e , inclusive.    Finalmente, definimos médias ponderadas.   A média aritmética ponderada dos números com pesos respectivamente iguais a é definida por     Embora a ideia primitiva seja que a média aritmética ponderada é uma média aritmética simples de uma lista de números dos quais são iguais a , são iguais a , ..., são iguais a não há problema em considerar pesos não inteiros.  Aliás, é bastante útil trabalhar com pesos relativos e considerar a média aritmética ponderada dos números , com pesos iguais a , respectivamente, como sendo Assim, uma média aritmética ponderada dos números é uma expressão da forma     Em um grupo de pessoas, 70% das pessoas são adultos e 30% são crianças. O peso médio dos adultos é 70kg e o peso médio das crianças é de 40kg. Qual o peso médio do grupo?   É a média aritmética ponderada dos dois subgrupos, com pesos relativos de 0,7 e 0,3. A resposta é     "
},
{
  "id": "definition-37",
  "level": "2",
  "url": "section-28.html#definition-37",
  "type": "Definição",
  "number": "9.1.1",
  "title": "",
  "body": " A média aritmética (simples) da lista de números é definida por   "
},
{
  "id": "example-132",
  "level": "2",
  "url": "section-28.html#example-132",
  "type": "Exemplo",
  "number": "9.1.2",
  "title": "",
  "body": " A média aritmética dos números 3, 36, 54 é   "
},
{
  "id": "definition-38",
  "level": "2",
  "url": "section-28.html#definition-38",
  "type": "Definição",
  "number": "9.1.3",
  "title": "",
  "body": " A média geométrica (simples) dos números positivos é definida por   "
},
{
  "id": "example-133",
  "level": "2",
  "url": "section-28.html#example-133",
  "type": "Exemplo",
  "number": "9.1.4",
  "title": "",
  "body": " A média geométrica dos números 3, 36, 54 é   "
},
{
  "id": "definition-39",
  "level": "2",
  "url": "section-28.html#definition-39",
  "type": "Definição",
  "number": "9.1.5",
  "title": "",
  "body": " A média harmônica (simples) dos números positivos é definida por   "
},
{
  "id": "example-134",
  "level": "2",
  "url": "section-28.html#example-134",
  "type": "Exemplo",
  "number": "9.1.6",
  "title": "",
  "body": " A média harmônica é, pois, o inverso da média aritmética dos inversos dos números. A média harmônica dos números 3, 36, 54 é   "
},
{
  "id": "example-135",
  "level": "2",
  "url": "section-28.html#example-135",
  "type": "Exemplo",
  "number": "9.1.7",
  "title": "",
  "body": " Uma empresa produziu, durante o primeiro trimestre do ano passado, 500, 200 e 200 unidades, em janeiro, fevereiro e março, respectivamente. Qual foi a produção média mensal nesse trimestre?   Que média é essa que queremos? Queremos uma média tal que, se a produção mensal fosse sempre igual a , a produção trimestral seria a mesma. A produção trimestral foi de . Se em todos os meses a produção fosse igual a , a produção trimestral seria igual a . Logo, e A média desejada era a média aritmética. Resposta: .   "
},
{
  "id": "example-136",
  "level": "2",
  "url": "section-28.html#example-136",
  "type": "Exemplo",
  "number": "9.1.8",
  "title": "",
  "body": " Uma empresa aumentou sua produção durante o primeiro bimestre do ano passado. Em janeiro e em fevereiro, as taxas de aumento foram de 21% e 8%, respectivamente. Qual foi a taxa média de aumento mensal nesse bimetre?    Comentário. A resposta não é .  Que média queremos? Queremos uma taxa média tal que, se em todos os meses a taxa de aumento fosse igual a , o aumento bimetral seria o mesmo. O aumento bimestral foi de 30,68%, conforme mostra o esquema Se em todos os meses tivéssemos um aumento de taxa , teríamos Então, A média procurada era uma média geométrica. Mais precisamente: a taxa média, aumentada de uma unidade, é a média geométrica das taxas mensais aumentadas de uma unidade.   "
},
{
  "id": "example-137",
  "level": "2",
  "url": "section-28.html#example-137",
  "type": "Exemplo",
  "number": "9.1.9",
  "title": "",
  "body": " Um concurso anual distribui igualmente entre os vencedores um prêmio total de R$ 1800,00. Nos últimos três anos houve 2, 1 e 3 premiados, respectivamente. Qual foi o prêmio médio desses ganhadores?    Comentário. Embora o número médio de ganhadores tenha sido igual a 2, o prêmio médio não foi de R$ R$ .  Queremos uma média tal que, se todos os prêmios fossem iguais a essa média, o total distribuído seria o mesmo. Essa é precisamente a média aritmética. Os prêmios foram de . O prêmio médio foi de reais.  Observe que a média aritmética dos rateios é igual a e que é a média harmônica dos números de ganhadores.  O rateio médio é o rateio que corresponderia a uma quantidade de ganhadores igual à média harmônica dos números de ganhadores.   "
},
{
  "id": "definition-40",
  "level": "2",
  "url": "section-28.html#definition-40",
  "type": "Definição",
  "number": "9.1.10",
  "title": "",
  "body": " A média quadrática dos números é definida por isto é, a média quadrática é a raiz quadrada da média aritmética dos quadrados dos números.  "
},
{
  "id": "example-138",
  "level": "2",
  "url": "section-28.html#example-138",
  "type": "Exemplo",
  "number": "9.1.11",
  "title": "",
  "body": " A média quadrática dos números 1 e 7 é   "
},
{
  "id": "example-139",
  "level": "2",
  "url": "section-28.html#example-139",
  "type": "Exemplo",
  "number": "9.1.12",
  "title": "",
  "body": " A qualidade de uma aproximação é medida pelo seu erro, que é a diferença entre o valor da aproximação e o valor real da grandeza. Por exemplo, 4 é uma aproximação de 3,8 com erro 0,2 (também se diz uma aproximação de 3,8 por excesso, com erro 0,2) e 5,5 é uma aproximação de 5,7 com erro -0,2 (ou uma aproximação de 5,7 por falta, com erro de 0,2). Evidentemente, quanto mais próximo de zero estiver o erro, tanto melhor será a aproximação. Assim, por exemplo, 39 é uma aproximação de 40 (erro igual a -1) que é melhor do que a aproximação 42 (erro igual a 2).  Mede-se a qualidade de uma lista de aproximações pela média quadrática dos seus erros. Também se usa o erro médio quadrático , que é o quadrado dessa média quadrática, ou seja, é a média aritmética dos quadrados dos erros. Abaixo temos duas listas de aproximações do número 4. Os erros médios quadráticos são respectivamente iguais a  é uma lista de aproximações de melhor do que .  "
},
{
  "id": "teo-pre-casa-pombos",
  "level": "2",
  "url": "section-28.html#teo-pre-casa-pombos",
  "type": "Teorema",
  "number": "9.1.13",
  "title": "",
  "body": " Se a média aritmética dos números é igual a , pelo menos um dos números é maior que ou igual a .   Com efeito, se fosse , , teríamos Logo, E portanto, o que é um absurdo.   "
},
{
  "id": "example-140",
  "level": "2",
  "url": "section-28.html#example-140",
  "type": "Exemplo",
  "number": "9.1.14",
  "title": "",
  "body": " Mostre que em um grupo de 50 pessoas, há sempre pelo menos 5 que nasceram no mesmo mês.   O número médio de pessoas por mês é . Logo, em algum mês o número de nascidos nesse mês é maior que ou igual a , ou seja, é maior que ou igual a 5.   "
},
{
  "id": "theorem-50",
  "level": "2",
  "url": "section-28.html#theorem-50",
  "type": "Teorema",
  "number": "9.1.15",
  "title": "",
  "body": " Se ou mais objetos são colocados em ou menos gavetas, então pelo menos uma gaveta recebe mais de um objeto.   O número médio de objetos por gaveta é maior que ou igual a , que é maior que 1. Logo, em alguma gaveta haverá um número de objetos maior que 1.   "
},
{
  "id": "example-141",
  "level": "2",
  "url": "section-28.html#example-141",
  "type": "Exemplo",
  "number": "9.1.16",
  "title": "",
  "body": " Mostre que todo inteiro positivo tem um múltiplo que se escreve apenas com os algarismos 0 e 1.   Considere os primeiros números da sequência . Divida-os por e considere os restos dessas divisões. Esses restos só podem ser iguais a .  Pensando nos números como objetos e nos restos como gavetas, temos mais objetos do que gavetas. O Princípio das Gavetas assegura que alguma gaveta receberá mais de um objeto, isto é, há dois números na sequência que dão o mesmo resto quando divididos por , digamos ( algarismos) e ( algarismos), . A diferença desses números é um múltiplo de e se escreve , com algarismos e algarismos .   "
},
{
  "id": "example-142",
  "level": "2",
  "url": "section-28.html#example-142",
  "type": "Exemplo",
  "number": "9.1.17",
  "title": "",
  "body": " Cinco pontos são tomados sobre a superfície de um quadrado de lado 2. Mostre que há dois desses pontos tais que a distância entre eles é menor que ou igual a .   Divida o quadrado de lado 2 em quatro quadrados de lado 1, ligando os pontos médios dos lados opostos. Pensando nos pontos como objetos e nos quadrados como gavetas, temos mais objetos que gavetas. O Princípio das Gavetas assegura que alguma gaveta receberá mais de um objeto, isto é, haverá dois pontos no mesmo quadrado de lado 1. A distância entre esses pontos é no máximo igual ao comprimento da diagonal do quadrado, que é .   "
},
{
  "id": "example-143",
  "level": "2",
  "url": "section-28.html#example-143",
  "type": "Exemplo",
  "number": "9.1.18",
  "title": "",
  "body": " Um enxadrista, durante 11 semanas, joga pelo menos uma partida por dia mas não joga mais de 12 partidas por semana. Mostre que é possível achar um conjunto de dias consecutivos durante os quais ele jogou exatamente 20 partidas.   Em 11 semanas temos 77 dias. Chamaremos de , o número de partidas jogadas desde o primeiro até o -ésimo dia, inclusive. Como ele joga pelo menos uma partida por dia, temos . Além disso, pois ele não joga mais de 12 partidas por semana.  Definindo , a quantidade de partidas jogadas do dia ao dia , inclusive, é igual a . Queremos mostrar que é possível determinar e de modo que .  Considere os 154 números   Eles pertencem a . O Princípio das Gavetas assegura que dois desses números são iguais. Como , os números iguais devem estar em metades diferentes dessa lista de 154 números. Então, existem e tais que . O enxadrista joga 20 partidas entre os dias e , inclusive.   "
},
{
  "id": "definition-41",
  "level": "2",
  "url": "section-28.html#definition-41",
  "type": "Definição",
  "number": "9.1.19",
  "title": "",
  "body": " A média aritmética ponderada dos números com pesos respectivamente iguais a é definida por   "
},
{
  "id": "remark-34",
  "level": "2",
  "url": "section-28.html#remark-34",
  "type": "Nota",
  "number": "9.1.20",
  "title": "",
  "body": " Embora a ideia primitiva seja que a média aritmética ponderada é uma média aritmética simples de uma lista de números dos quais são iguais a , são iguais a , ..., são iguais a não há problema em considerar pesos não inteiros.  Aliás, é bastante útil trabalhar com pesos relativos e considerar a média aritmética ponderada dos números , com pesos iguais a , respectivamente, como sendo Assim, uma média aritmética ponderada dos números é uma expressão da forma   "
},
{
  "id": "example-144",
  "level": "2",
  "url": "section-28.html#example-144",
  "type": "Exemplo",
  "number": "9.1.21",
  "title": "",
  "body": " Em um grupo de pessoas, 70% das pessoas são adultos e 30% são crianças. O peso médio dos adultos é 70kg e o peso médio das crianças é de 40kg. Qual o peso médio do grupo?   É a média aritmética ponderada dos dois subgrupos, com pesos relativos de 0,7 e 0,3. A resposta é    "
},
{
  "id": "section-29",
  "level": "1",
  "url": "section-29.html",
  "type": "Seção",
  "number": "9.2",
  "title": "A Desigualdade das Médias",
  "body": " A Desigualdade das Médias   A média aritmética de números positivos é maior que ou igual a sua média geométrica e só é igual se os números forem todos iguais. Isto é, se são números positivos, então Além disso, se, e somente se,    Provaremos primeiramente a desigualdade no caso . Sendo a média aritmética dos números positivos e e sendo sua média geométrica, temos e só é igual a quando , o que prova a desigualdade no caso .  Para prová-lo no caso , aplicamos o resultado anterior aos números obtendo ou seja, a igualdade só sendo obtida quando forem iguas. Aplicando agora duas vezes a desigualdade no caso , primeiramente para e , e posteriormente para e , obtemos a igualdade sendo obtida apenas quando e .  Portanto, a igualdade só sendo obtida quando e e isto é, quando   É claro que, repetindo esse argumento, provaríamos a desigualdade das médias para números positivos.  Esse argumento permite provar, por indução, a desigualdade para números positivos.  Provaremos agora a desigualdade para três números positivos.  Sejam e números positivos e sejam a sua média aritmética e a sua média geométrica. É claro que Aplicando a desigualdade das médias no caso aos números e , obtemos  a igualdade só se verifica quando , isto é, quando . Se desejássemos provar a desigualdade para cinco números positivos e , aplicaríamos a desigualdade para 8 números e , , e , onde é a média aritmética dos números e .  O mesmo raciocínio pode mostrar que, se a desigualdade é verdadeira para , então ela é também verdadeira para todo .     Mostre que, entre todos os retângulos de perímetro , o quadrado é o de maior área.   Se os lados do retângulo são e , temos isto é, a média aritmética e é igual a . A área do retângulo é . Temos Portanto, e a igualdade só é obtida quando . Portanto, o retângulo de maior área é o quadrado de área .     Mostre que, entre todos os retângulos de área , o quadrado é o de menor perímetro.   Se os lados do retângulo são e , temos , isto é, a média geométrica de e é igual a . O perímetro do retângulo é . Temos Portanto, e a igualdade só é obtida quando . Portanto, o retângulo de menor perímetro é o quadrado de perímetro .       (Desigualdade das Médias) A desigualdade das médias pode ser generalizada como segue: Dados números reais positivos. Então, Além disso, em cada caso, a igualdade vale se, e somente se, .   Os próximos exemplos são da dissertação do Profmat de André Costa da Fonte: .   Qual o maior valor possível para , com ?   Pela desigualdade das médias, como : Portanto, e a igualdade só é atingida quando , ou seja, quando .     Suponha que , com . Determine reais positivos e tais que seja máximo.   Pela desigualdade das médias, como : A igualdada é obtida apenas quando , portanto      Um triângulo isósceles tem seu vértice na origem, sua base é paralela ao eixo acima dele e os vértices da base estão na parábola . Calcule a maior área de um triângulo nessas condições.     Parábola e triângulo.    A área do triângulo é dada por . Pela desigualdade das médias, como , logo Portanto, E a igualdade será obtida quando . Como , substituindo o valor de , ficamos com , portanto e .     Um fazendeiro deseja delimitar uma área retangular utilizando 40m de cerca e aproveitando um muro (de mais de 40m) que já está construído. Determine as dimensões do retângulo de maior área que o fazendeiro consegue delimitar.     Muro e cerca.   Observe que . Usando que , obtemos Portanto, e a igualdade é obtida apenas quando .     Sejam e números reais positivos e suponha que determine e reais positivos, tais que seja máximo.   Vamos usar a desigualdade : Portanto E a igualdade só é obtida quando , dessa maneira      Numa folha de cartolina quadrada de lados retiramos quadrados de lado de cada vértice, dobrando em seguida as abas restantes para formar uma caixa cuja base é um quadrado de lado e altura . Qual deve ser o valor de para que o volume da caixa seja máximo?     Cartolina e caixa.   O volume da caixa é dado por . Para descobrir o volume máximo, usaremos a desigualdade , dessa maneira obtemos Portanto, A igualdade será obtida apenas quando , ou seja, quando .     Qual deve ser o formato de uma lata cilíndrica de volume (cilindro circular reto) para minimizar o gasto de material para confeccioná-la?     Cilindro.   Sabemos que o volume é fixo e é dado por . A área é dada por . Usando que : Então, a área será mínima quando .     Sejam e catetos de um triângulo retângulo de hipotenusa . Prove que .   Sabemos que . Usando que : Portanto,     "
},
{
  "id": "theorem-51",
  "level": "2",
  "url": "section-29.html#theorem-51",
  "type": "Teorema",
  "number": "9.2.1",
  "title": "",
  "body": " A média aritmética de números positivos é maior que ou igual a sua média geométrica e só é igual se os números forem todos iguais. Isto é, se são números positivos, então Além disso, se, e somente se,    Provaremos primeiramente a desigualdade no caso . Sendo a média aritmética dos números positivos e e sendo sua média geométrica, temos e só é igual a quando , o que prova a desigualdade no caso .  Para prová-lo no caso , aplicamos o resultado anterior aos números obtendo ou seja, a igualdade só sendo obtida quando forem iguas. Aplicando agora duas vezes a desigualdade no caso , primeiramente para e , e posteriormente para e , obtemos a igualdade sendo obtida apenas quando e .  Portanto, a igualdade só sendo obtida quando e e isto é, quando   É claro que, repetindo esse argumento, provaríamos a desigualdade das médias para números positivos.  Esse argumento permite provar, por indução, a desigualdade para números positivos.  Provaremos agora a desigualdade para três números positivos.  Sejam e números positivos e sejam a sua média aritmética e a sua média geométrica. É claro que Aplicando a desigualdade das médias no caso aos números e , obtemos  a igualdade só se verifica quando , isto é, quando . Se desejássemos provar a desigualdade para cinco números positivos e , aplicaríamos a desigualdade para 8 números e , , e , onde é a média aritmética dos números e .  O mesmo raciocínio pode mostrar que, se a desigualdade é verdadeira para , então ela é também verdadeira para todo .   "
},
{
  "id": "example-145",
  "level": "2",
  "url": "section-29.html#example-145",
  "type": "Exemplo",
  "number": "9.2.2",
  "title": "",
  "body": " Mostre que, entre todos os retângulos de perímetro , o quadrado é o de maior área.   Se os lados do retângulo são e , temos isto é, a média aritmética e é igual a . A área do retângulo é . Temos Portanto, e a igualdade só é obtida quando . Portanto, o retângulo de maior área é o quadrado de área .   "
},
{
  "id": "example-146",
  "level": "2",
  "url": "section-29.html#example-146",
  "type": "Exemplo",
  "number": "9.2.3",
  "title": "",
  "body": " Mostre que, entre todos os retângulos de área , o quadrado é o de menor perímetro.   Se os lados do retângulo são e , temos , isto é, a média geométrica de e é igual a . O perímetro do retângulo é . Temos Portanto, e a igualdade só é obtida quando . Portanto, o retângulo de menor perímetro é o quadrado de perímetro .   "
},
{
  "id": "remark-35",
  "level": "2",
  "url": "section-29.html#remark-35",
  "type": "Nota",
  "number": "9.2.4",
  "title": "",
  "body": "  (Desigualdade das Médias) A desigualdade das médias pode ser generalizada como segue: Dados números reais positivos. Então, Além disso, em cada caso, a igualdade vale se, e somente se, .  "
},
{
  "id": "example-147",
  "level": "2",
  "url": "section-29.html#example-147",
  "type": "Exemplo",
  "number": "9.2.5",
  "title": "",
  "body": " Qual o maior valor possível para , com ?   Pela desigualdade das médias, como : Portanto, e a igualdade só é atingida quando , ou seja, quando .   "
},
{
  "id": "example-148",
  "level": "2",
  "url": "section-29.html#example-148",
  "type": "Exemplo",
  "number": "9.2.6",
  "title": "",
  "body": " Suponha que , com . Determine reais positivos e tais que seja máximo.   Pela desigualdade das médias, como : A igualdada é obtida apenas quando , portanto    "
},
{
  "id": "example-149",
  "level": "2",
  "url": "section-29.html#example-149",
  "type": "Exemplo",
  "number": "9.2.7",
  "title": "",
  "body": " Um triângulo isósceles tem seu vértice na origem, sua base é paralela ao eixo acima dele e os vértices da base estão na parábola . Calcule a maior área de um triângulo nessas condições.     Parábola e triângulo.    A área do triângulo é dada por . Pela desigualdade das médias, como , logo Portanto, E a igualdade será obtida quando . Como , substituindo o valor de , ficamos com , portanto e .   "
},
{
  "id": "example-150",
  "level": "2",
  "url": "section-29.html#example-150",
  "type": "Exemplo",
  "number": "9.2.9",
  "title": "",
  "body": " Um fazendeiro deseja delimitar uma área retangular utilizando 40m de cerca e aproveitando um muro (de mais de 40m) que já está construído. Determine as dimensões do retângulo de maior área que o fazendeiro consegue delimitar.     Muro e cerca.   Observe que . Usando que , obtemos Portanto, e a igualdade é obtida apenas quando .   "
},
{
  "id": "example-151",
  "level": "2",
  "url": "section-29.html#example-151",
  "type": "Exemplo",
  "number": "9.2.11",
  "title": "",
  "body": " Sejam e números reais positivos e suponha que determine e reais positivos, tais que seja máximo.   Vamos usar a desigualdade : Portanto E a igualdade só é obtida quando , dessa maneira    "
},
{
  "id": "example-152",
  "level": "2",
  "url": "section-29.html#example-152",
  "type": "Exemplo",
  "number": "9.2.12",
  "title": "",
  "body": " Numa folha de cartolina quadrada de lados retiramos quadrados de lado de cada vértice, dobrando em seguida as abas restantes para formar uma caixa cuja base é um quadrado de lado e altura . Qual deve ser o valor de para que o volume da caixa seja máximo?     Cartolina e caixa.   O volume da caixa é dado por . Para descobrir o volume máximo, usaremos a desigualdade , dessa maneira obtemos Portanto, A igualdade será obtida apenas quando , ou seja, quando .   "
},
{
  "id": "example-153",
  "level": "2",
  "url": "section-29.html#example-153",
  "type": "Exemplo",
  "number": "9.2.14",
  "title": "",
  "body": " Qual deve ser o formato de uma lata cilíndrica de volume (cilindro circular reto) para minimizar o gasto de material para confeccioná-la?     Cilindro.   Sabemos que o volume é fixo e é dado por . A área é dada por . Usando que : Então, a área será mínima quando .   "
},
{
  "id": "example-154",
  "level": "2",
  "url": "section-29.html#example-154",
  "type": "Exemplo",
  "number": "9.2.16",
  "title": "",
  "body": " Sejam e catetos de um triângulo retângulo de hipotenusa . Prove que .   Sabemos que . Usando que : Portanto,    "
},
{
  "id": "referencias",
  "level": "1",
  "url": "referencias.html",
  "type": "Referêcias",
  "number": "10",
  "title": "Referências Bibliográficas",
  "body": "    Referências Bibliográficas   Livros    Halmos, P. R., Teoria Ingénua dos Conjuntos, Ciência Moderna , 1ª ed.    Morgado, A. C. O., et al, Análise Combinatória e Probabilidade , SBM. 6ª ed.    Niven, I., Mathematics of Choice: How to Count Without Counting , The Mathematical Associations of America.    Rosen, K. H., Discrete Mathematics and Its Applications , McGraw-Hill.    Silva, L. D. ; Santos, M. P. ; Machado J. R. N., Elementos de Computação Matemática com SageMath , SBM, 1ª ed.    Bezerra, N., Análise Combinatória e Probabilidade , editAedi.    Morgado, A. C. ; Carvalho, P. C. P., Matemática Discreta , SBM: coleção PROFMAT, 2ª ed.    Lovász, L. ; Pelikán, J. ; Vesztergombi, K., Discrete Mathematics: Elementary and Beyond , Springer.    Holton, D., A Second Step to Mathematical Olympiad Problems , Vol. 7, World Scientific.  Artigos    Machado J. R. N., Caos, Repetições e Tabuleiros , Jornal de Matemática Olímpica UFRPE, 2021.    Machado J. R. N., O Princípio da Casa dos Pombos , Jornal de Matemática Olímpica UFRPE, 2018.  Dissertações    Santana Neto, L. M., Análise Combinatória: Lemas de Kaplansky, Permutações Caóticas, O Princípio da Casa Dos Pombos e suas Aplicações na Matemática do Ensino Médio , Dissertação do ProfMat.    Fonte, A. C., Médias, desigualdades e problemas de otimização , Dissertação do ProfMat.   "
},
{
  "id": "p-1140",
  "level": "2",
  "url": "referencias.html#p-1140",
  "type": "Parágrafo (with a defined term)",
  "number": "",
  "title": "",
  "body": "Livros "
},
{
  "id": "p-1141",
  "level": "2",
  "url": "referencias.html#p-1141",
  "type": "Parágrafo (with a defined term)",
  "number": "",
  "title": "",
  "body": "Artigos "
},
{
  "id": "p-1142",
  "level": "2",
  "url": "referencias.html#p-1142",
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
