var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "prof-clessius-silva",
  "level": "1",
  "url": "prof-clessius-silva.html",
  "type": "Biografia do autor",
  "number": "",
  "title": "Sobre Clessus Silva",
  "body": " Sobre Clessus Silva  Doutor em Matemática pela Universidade Federal de Pernambuco (2015).  Mestre em Matemática pela Universidade Federal de Pernambuco (2012).  Licenciado em Matemática pela Universidade Federal de Sergipe (2009).  "
},
{
  "id": "prof-leon-silva",
  "level": "1",
  "url": "prof-leon-silva.html",
  "type": "Biografia do autor",
  "number": "",
  "title": "Sobre Leon Silva",
  "body": " Sobre Leon Silva  Doutor em Ciência da Computação pela Universidade Federal de Pernambuco (2019).  Mestre em Matemática pela Universidade Federal do Ceará.  Licenciado em Matemática pela Universidade Federal Rural de Pernambuco.  "
},
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
  "title": "Números Reais e Propriedades",
  "body": " Números Reais e Propriedades   Números Reais   Um conjunto não-vazio sobre o qual estão definidas duas operações, soma (denotada por ) e produto (denotada por ) é chamado de anel comutativo com unidade se as seguintes condições são satisfeitas para quaisquer .  Associatividade da soma:  Existência de Elemento Neutro da soma: existe um (único) elemento tal que ;  Existência de inverso aditivo: para cada existe um (único) , denotado por , tal que ;  Comutatividade da soma:  Associatividade do produto: ;  Distributividade: ;  Existência de Elemento Neutro do produto: existe um (único) elemento , com , tal que ;  Comutatividade do Produto: .      Um anel , com soma e produto , é chamado Domínio de Integridade se além das 8 condições listadas acima, ele também satisfaz a seguinte condição:  Anel sem divisores de zero: dados ; implica que ou .      Finalmente, um anel , com soma e produto , é chamado Corpo se além das condições 1 a 8, do , ele também satisfaz a condição abaixo  Existência de inverso multiplicativo: para cada , com , existe um (único) , denotado por , tal que .     Tomaremos como postulado básico que munido com soma e produto usuais é um corpo. Enfatizando:   O conjunto dos números reais , munido com soma e produto usuais, é um corpo.   Além disso, consideraremos como verdade, e como fatos conhecidos, que:  O conjunto dos números inteiros , munido com soma e produto usuais, é um domínio de integridade.  O conjunto dos números racionais , munido com soma e produto usuais, é um corpo.    Pense um pouco: O conjunto dos números naturais , munido com soma e produto usais, é um anel? Em caso negativo, quais as condições da definição de anel que não são satisfeitas por ?  Pense um pouco: O domínio dos números inteiros é um corpo?    Desigualdades   Assumiremos como verdadeiro que existe um subconjunto de que satisfaz duas condições importantes, como veremos agora.     é um corpo ordenado , isto é, existe um subconjunto , chamado o conjunto dos números reais positivos , que cumpre as seguintes condições:  A soma e o produto de números reais positivos são positivos. Isto é, se , então e .  Dado , vale uma, e somente uma, das três alternativas seguintes: ou , ou , ou .      Notação. Denotaremos por o conjunto dos números reais em que . A condição 2 do garante que e que não existe nenhum número que pertença a dois desses conjuntos (ao mesmo tempo).  A seguinte proposição garante que todo número real não nulo tem quadrado positivo.   Seja . Se , então .   Como , pelo item 2 do , precisamos analisar dois casos.  (1º caso) Se , então , pelo item 1 do .  (2º caso) Se , então , pelo item 1 do .     O número 1 é um número real positivo, pois pela , Por conseguinte, é um número real negativo. Uma vez que, pela e pelo item 2 do , não existe número real cujo quadrado é negativo, logo a equação não possui solução em . Veremos mais a frente que essa equação possui solução no corpo , mas isso implica diretamente que em não podemos definir um conjunto de números complexos positivos que cumpra os dos itens do .   Agora podemos definir a relação de ordem em .   Dados , dizemos que é menor que , e escrevemos , quando . Neste caso, dizemos ainda que é maior que e escrevemos .    Notação. A notação significa que ou . De maneira similar, a notação significa que ou .   Observe que se, e somente se, . De fato, por definição da relação de ordem, \\[x>0 \\Leftrightarrow x=x-0\\in\\mathbb{R}^+.\\] De maneira similar, se, e somente se, . Sendo assim, significa que é positivo, enquanto significa que é negativo.    As seguintes propriedades são válidas em .  Transitividade: se e , então .  Tricotomia: dados , vale uma, e somente uma, das três alternativas seguintes: ou , ou , ou .  Monotonicidade da adição: se , então para todo .  Monotonicidade da multiplicação: se e , então . Se, porém, e , então .      item 1. Se e então e . Segue que . Portanto, , ou seja , pois    item 2. Pelo item 2 do , vale uma, e somente uma, das três alternativas: Observe que e, pela , e .   item 3. Basta observar que    item 4. Como , temos . Supondo , segue que mas . Então .  Supondo , temos . Portanto, Mas Então,      As seguintes propriedades são válidas em .  Se e , então .  Se e , então .  Se , então .  Se , então .     item 1. Pelo monotonicidade da adição (item 3 da ), e Pela transitividade (item 1 da ),   item 2. Pelo monotonicidade da multiplicação (item 4 da ), e Pela transitividade (item 1 da ),   item 3. Como , , logo, pela , . Pelo item do , o produto de depois elemento de pertence a . Então, como e , temos   item 4. Pelo item anterior, e . Logo, pela monotonicidade da multiplicação, fazendo as contas obtemos,       Valor Absoluto   Dado definimos o módulo (ou valor absoluto ) de como     Note que .    Calcule os seguintes números:          Para quaisquer ,  ;  ;  ;  ;  ;  ;  Desigualdade triangular: .     item 1. Pelo item 2 do , ou ou ou . Como , claramente .  item 2.  .  item 3. Claramente . Como , multiplicando por obtemos, . Logo,   item 4. Existem 3 casos:  Se , , então .  Se , , então .  Se , então .    item 5. Basta mostar que , já que são maiores ou iguais a zero. Note que   item 6.    item 7. Inicialmente temos, e . Somando membro a membro obtemos, Analogamente, de e resulta . Logo,     O próximo resultado é simples, porém muito útil quando queremos resolver equações que envolvem módulos.   Sendo , então \\[|x| = a ~ \\Leftrightarrow ~ x=a ~ \\mbox{ou} ~ x=-a. \\]   Lembrando que .  Se e , então .  Se e , então .       Resolva as equações modulares  ;  ;     item 1. Pela proposição anterior,    .  Ou seja, o conjunto solução é dado por .  item 2. Inicialmente, note que, o valor absoluto sempre é maior ou igual a zero. Portanto , logo . Pela proposição anterior,    ou .  ou .  Ou seja, o conjunto solução é dado por , já que .     Seja , então  ;  ;  ;  .      Sejam com . Então    Pela , Somando , obtemos o resultado.     Resolva as inequações modulares   ;  .      Intervalos   É muito conveniente imaginar o conjunto como uma reta, chamada a reta real , e os números reais como pontos dessa reta.   Olhando para o conjunto , como uma reta, a relação significa que o ponto está à esquerda do ponto . O número é a distância do ponto ao ponto , assim, é a distância do ponto ao ponto . Ademais, consideremos os seguintes subconjuntos de , chamados intervalos :             Os quatro primeiros intervalos são limitados , com extremos : é um intervalo fechado , é aberto , é fechado à esquerda e aberto à direita e é fechado à direita e aberto à esquerda. Os cinco últimos intervalos são ilimitados : é a semirreta esquerda fechada de origem , demais têm denominações análogas. Quando , o intervalo fechado reduz-se a um único ponto e chama-se um intervalo degenerado .  Em termos de intervalos, o nos diz que se, e somente se, pertence ao intervalo aberto . Além disso, significa que a distância de para é menor que .  Essas interpretações geométricas nos auxiliam a compreensão dos conceitos e teoremas da Análise.   "
},
{
  "id": "def-anel",
  "level": "2",
  "url": "section-1.html#def-anel",
  "type": "Definição",
  "number": "1.1.1",
  "title": "",
  "body": " Um conjunto não-vazio sobre o qual estão definidas duas operações, soma (denotada por ) e produto (denotada por ) é chamado de anel comutativo com unidade se as seguintes condições são satisfeitas para quaisquer .  Associatividade da soma:  Existência de Elemento Neutro da soma: existe um (único) elemento tal que ;  Existência de inverso aditivo: para cada existe um (único) , denotado por , tal que ;  Comutatividade da soma:  Associatividade do produto: ;  Distributividade: ;  Existência de Elemento Neutro do produto: existe um (único) elemento , com , tal que ;  Comutatividade do Produto: .    "
},
{
  "id": "definition-2",
  "level": "2",
  "url": "section-1.html#definition-2",
  "type": "Definição",
  "number": "1.1.2",
  "title": "",
  "body": " Um anel , com soma e produto , é chamado Domínio de Integridade se além das 8 condições listadas acima, ele também satisfaz a seguinte condição:  Anel sem divisores de zero: dados ; implica que ou .    "
},
{
  "id": "def-anel-inv",
  "level": "2",
  "url": "section-1.html#def-anel-inv",
  "type": "Definição",
  "number": "1.1.3",
  "title": "",
  "body": " Finalmente, um anel , com soma e produto , é chamado Corpo se além das condições 1 a 8, do , ele também satisfaz a condição abaixo  Existência de inverso multiplicativo: para cada , com , existe um (único) , denotado por , tal que .    "
},
{
  "id": "axiom-1",
  "level": "2",
  "url": "section-1.html#axiom-1",
  "type": "Axioma",
  "number": "1.1.4",
  "title": "",
  "body": " O conjunto dos números reais , munido com soma e produto usuais, é um corpo.  "
},
{
  "id": "p-18",
  "level": "2",
  "url": "section-1.html#p-18",
  "type": "Parágrafo (with a defined term)",
  "number": "",
  "title": "",
  "body": "Pense um pouco: "
},
{
  "id": "p-19",
  "level": "2",
  "url": "section-1.html#p-19",
  "type": "Parágrafo (with a defined term)",
  "number": "",
  "title": "",
  "body": "Pense um pouco: "
},
{
  "id": "ax-corpoord",
  "level": "2",
  "url": "section-1.html#ax-corpoord",
  "type": "Axioma",
  "number": "1.1.5",
  "title": "",
  "body": "  é um corpo ordenado , isto é, existe um subconjunto , chamado o conjunto dos números reais positivos , que cumpre as seguintes condições:  A soma e o produto de números reais positivos são positivos. Isto é, se , então e .  Dado , vale uma, e somente uma, das três alternativas seguintes: ou , ou , ou .    "
},
{
  "id": "p-22",
  "level": "2",
  "url": "section-1.html#p-22",
  "type": "Parágrafo (with a defined term)",
  "number": "",
  "title": "",
  "body": "Notação. "
},
{
  "id": "prop-3.1",
  "level": "2",
  "url": "section-1.html#prop-3.1",
  "type": "Proposição",
  "number": "1.1.6",
  "title": "",
  "body": " Seja . Se , então .   Como , pelo item 2 do , precisamos analisar dois casos.  (1º caso) Se , então , pelo item 1 do .  (2º caso) Se , então , pelo item 1 do .   "
},
{
  "id": "rem-xquadmenos1",
  "level": "2",
  "url": "section-1.html#rem-xquadmenos1",
  "type": "Nota",
  "number": "1.1.7",
  "title": "",
  "body": " O número 1 é um número real positivo, pois pela , Por conseguinte, é um número real negativo. Uma vez que, pela e pelo item 2 do , não existe número real cujo quadrado é negativo, logo a equação não possui solução em . Veremos mais a frente que essa equação possui solução no corpo , mas isso implica diretamente que em não podemos definir um conjunto de números complexos positivos que cumpra os dos itens do .  "
},
{
  "id": "def-ordem-r",
  "level": "2",
  "url": "section-1.html#def-ordem-r",
  "type": "Definição",
  "number": "1.1.8",
  "title": "",
  "body": " Dados , dizemos que é menor que , e escrevemos , quando . Neste caso, dizemos ainda que é maior que e escrevemos .  "
},
{
  "id": "p-31",
  "level": "2",
  "url": "section-1.html#p-31",
  "type": "Parágrafo (with a defined term)",
  "number": "",
  "title": "",
  "body": "Notação. "
},
{
  "id": "remark-2",
  "level": "2",
  "url": "section-1.html#remark-2",
  "type": "Nota",
  "number": "1.1.9",
  "title": "",
  "body": " Observe que se, e somente se, . De fato, por definição da relação de ordem, \\[x>0 \\Leftrightarrow x=x-0\\in\\mathbb{R}^+.\\] De maneira similar, se, e somente se, . Sendo assim, significa que é positivo, enquanto significa que é negativo.  "
},
{
  "id": "prop-trans-tric-mon",
  "level": "2",
  "url": "section-1.html#prop-trans-tric-mon",
  "type": "Proposição",
  "number": "1.1.10",
  "title": "",
  "body": " As seguintes propriedades são válidas em .  Transitividade: se e , então .  Tricotomia: dados , vale uma, e somente uma, das três alternativas seguintes: ou , ou , ou .  Monotonicidade da adição: se , então para todo .  Monotonicidade da multiplicação: se e , então . Se, porém, e , então .      item 1. Se e então e . Segue que . Portanto, , ou seja , pois    item 2. Pelo item 2 do , vale uma, e somente uma, das três alternativas: Observe que e, pela , e .   item 3. Basta observar que    item 4. Como , temos . Supondo , segue que mas . Então .  Supondo , temos . Portanto, Mas Então,    "
},
{
  "id": "prop-valid-r-2",
  "level": "2",
  "url": "section-1.html#prop-valid-r-2",
  "type": "Proposição",
  "number": "1.1.11",
  "title": "",
  "body": " As seguintes propriedades são válidas em .  Se e , então .  Se e , então .  Se , então .  Se , então .     item 1. Pelo monotonicidade da adição (item 3 da ), e Pela transitividade (item 1 da ),   item 2. Pelo monotonicidade da multiplicação (item 4 da ), e Pela transitividade (item 1 da ),   item 3. Como , , logo, pela , . Pelo item do , o produto de depois elemento de pertence a . Então, como e , temos   item 4. Pelo item anterior, e . Logo, pela monotonicidade da multiplicação, fazendo as contas obtemos,    "
},
{
  "id": "definition-5",
  "level": "2",
  "url": "section-1.html#definition-5",
  "type": "Definição",
  "number": "1.1.12",
  "title": "",
  "body": " Dado definimos o módulo (ou valor absoluto ) de como   "
},
{
  "id": "remark-3",
  "level": "2",
  "url": "section-1.html#remark-3",
  "type": "Nota",
  "number": "1.1.13",
  "title": "",
  "body": " Note que .  "
},
{
  "id": "example-1",
  "level": "2",
  "url": "section-1.html#example-1",
  "type": "Exemplo",
  "number": "1.1.14",
  "title": "",
  "body": " Calcule os seguintes números:        "
},
{
  "id": "proposition-4",
  "level": "2",
  "url": "section-1.html#proposition-4",
  "type": "Proposição",
  "number": "1.1.15",
  "title": "",
  "body": " Para quaisquer ,  ;  ;  ;  ;  ;  ;  Desigualdade triangular: .     item 1. Pelo item 2 do , ou ou ou . Como , claramente .  item 2.  .  item 3. Claramente . Como , multiplicando por obtemos, . Logo,   item 4. Existem 3 casos:  Se , , então .  Se , , então .  Se , então .    item 5. Basta mostar que , já que são maiores ou iguais a zero. Note que   item 6.    item 7. Inicialmente temos, e . Somando membro a membro obtemos, Analogamente, de e resulta . Logo,    "
},
{
  "id": "proposition-5",
  "level": "2",
  "url": "section-1.html#proposition-5",
  "type": "Proposição",
  "number": "1.1.16",
  "title": "",
  "body": " Sendo , então \\[|x| = a ~ \\Leftrightarrow ~ x=a ~ \\mbox{ou} ~ x=-a. \\]   Lembrando que .  Se e , então .  Se e , então .     "
},
{
  "id": "example-2",
  "level": "2",
  "url": "section-1.html#example-2",
  "type": "Exemplo",
  "number": "1.1.17",
  "title": "",
  "body": " Resolva as equações modulares  ;  ;     item 1. Pela proposição anterior,    .  Ou seja, o conjunto solução é dado por .  item 2. Inicialmente, note que, o valor absoluto sempre é maior ou igual a zero. Portanto , logo . Pela proposição anterior,    ou .  ou .  Ou seja, o conjunto solução é dado por , já que .   "
},
{
  "id": "prop-abs-desi",
  "level": "2",
  "url": "section-1.html#prop-abs-desi",
  "type": "Proposição",
  "number": "1.1.18",
  "title": "",
  "body": " Seja , então  ;  ;  ;  .    "
},
{
  "id": "cor-delta",
  "level": "2",
  "url": "section-1.html#cor-delta",
  "type": "Corolário",
  "number": "1.1.19",
  "title": "",
  "body": " Sejam com . Então    Pela , Somando , obtemos o resultado.   "
},
{
  "id": "example-3",
  "level": "2",
  "url": "section-1.html#example-3",
  "type": "Exemplo",
  "number": "1.1.20",
  "title": "",
  "body": " Resolva as inequações modulares   ;  .   "
},
{
  "id": "section-2",
  "level": "1",
  "url": "section-2.html",
  "type": "Seção",
  "number": "1.2",
  "title": "Conceito de Funções",
  "body": " Conceito de Funções   Uma função  é uma lei que associa, a cada elemento em um conjunto , exatamente um elemento, chamado , em um conjunto . Ou seja, uma função é uma terna na qual, e são conjuntos e é uma regra que nos permite associar a cada elemento de um único elemento de .  O conjunto é o domínio de e é usualmente indicado por . O conjunto é o contradomínio de . O único elemento de associado ao elemento de , pela função , é indicado por .    Uma função de domínio e contradomínio é usualmente indicada por .    Uma função de uma variável real a valores reais é uma função , na qual, e são subconjuntos de . Nosso foco em cálculo é trabalhar com funções de uma variável real a valores reais.    O conjunto é chamado de imagem da função . O conjunto é um subconjunto do contradomínio formado por todos os elementos correspondentes de algum elemento do domínio.    Por simplificação, deixamos muitas vezes de explicitar o domínio e o contra domínio de uma função. Quando isto ocorrer, ficará implícito que o contradomínio é e o domínio o \"maior\" subconjunto de para o qual faz sentido a regra em questão.   "
},
{
  "id": "definition-6",
  "level": "2",
  "url": "section-2.html#definition-6",
  "type": "Definição",
  "number": "1.2.1",
  "title": "",
  "body": " Uma função  é uma lei que associa, a cada elemento em um conjunto , exatamente um elemento, chamado , em um conjunto . Ou seja, uma função é uma terna na qual, e são conjuntos e é uma regra que nos permite associar a cada elemento de um único elemento de .  O conjunto é o domínio de e é usualmente indicado por . O conjunto é o contradomínio de . O único elemento de associado ao elemento de , pela função , é indicado por .  "
},
{
  "id": "remark-4",
  "level": "2",
  "url": "section-2.html#remark-4",
  "type": "Nota",
  "number": "1.2.2",
  "title": "",
  "body": " Uma função de domínio e contradomínio é usualmente indicada por .  "
},
{
  "id": "definition-7",
  "level": "2",
  "url": "section-2.html#definition-7",
  "type": "Definição",
  "number": "1.2.3",
  "title": "",
  "body": " Uma função de uma variável real a valores reais é uma função , na qual, e são subconjuntos de . Nosso foco em cálculo é trabalhar com funções de uma variável real a valores reais.  "
},
{
  "id": "definition-8",
  "level": "2",
  "url": "section-2.html#definition-8",
  "type": "Definição",
  "number": "1.2.4",
  "title": "",
  "body": " O conjunto é chamado de imagem da função . O conjunto é um subconjunto do contradomínio formado por todos os elementos correspondentes de algum elemento do domínio.  "
},
{
  "id": "remark-5",
  "level": "2",
  "url": "section-2.html#remark-5",
  "type": "Nota",
  "number": "1.2.5",
  "title": "",
  "body": " Por simplificação, deixamos muitas vezes de explicitar o domínio e o contra domínio de uma função. Quando isto ocorrer, ficará implícito que o contradomínio é e o domínio o \"maior\" subconjunto de para o qual faz sentido a regra em questão.  "
},
{
  "id": "section-3",
  "level": "1",
  "url": "section-3.html",
  "type": "Seção",
  "number": "1.3",
  "title": "Funções Elementares e Gráficos",
  "body": " Funções Elementares e Gráficos   Gráfico de uma função real   Seja uma função. O conjunto denomina-se gráfico de . Note que é um subconjunto do plano , ou seja, é um subconjunto de todos os pares ordenados de número reais.     Função Constante e Função Definida por Partes   (Função constante) Uma função , com constante, denomina-se função constante.  a) é uma função constante, tem-se e .   b) dada por é uma função constante e seu gráfico é     (Função definida por partes) Seja        Função Afim   (Função afim) Uma função real da forma , com e constantes, denomina-se função afim .  Se , a função assume o formato e é conhecida como função linear .   Determine as raízes e faça o estudo do sinal das seguintes funções:            Função Polinomial   (Função polinomial) Uma função dada por na qual, , são números reais fixos, denomina-se função polinomial de grau .  a) é uma função polinomial de grau 2 e seu gráfico é a parábola.   a) é uma função polinomial de grau 3 e seu gráfico é obtido do gráfico de , transladando-o uma unidade para a direita.     Uma função real é chamada de função quadrática se existem números reais , com , tais que O domínio de uma função quadrática é .     (Zeros de uma função quadrática) Sendo , com , o número é chamado discriminante da função quadrática .   Caso 1: Se , então as raízes de são Note que: se , então .   Caso 2: Se , então não possui raízes reais.     (Fatoração) Se , então podemos \"fatorar\" o trinômio da seguinte forma:      (O gráfico de uma função quadrática) O gráfico de uma função quadrática é uma \"parábola\". Abaixo segue algumas informações importantes:   Se , a concavidade da parábola é para cima.  Se , a concavidade da parábola é para baixo.    Se , possui uma raiz real dupla (a parábola intersecta o eixo uma vez só no ponto)  Se , possui duas raízes reais distintas (a parábola intersecta o eixo em dois pontos)  Se , não possui raiz real(a parábola não intersecta o eixo .    O vértice da parábola é o ponto , com        Esboce o gráfico das funções. Além disso, se for possível, faça a fatoração:          Abaixo, podemos usar o SageMath para obter a fatoração de funções quadráticas, conforme a .  Abaixo, podemos usar o SageMath para obter o gráfico de funções quadráticas.   Estude o sinal de :            Função Racional   (Função racional) Uma função racional é uma função dada por na qual, e são funções polinomiais. O domínio de é o conjunto .    a) é uma função racional com e . .   b) é uma função racional com e . .     Determine o domínio das seguintes funções racionais:          Função Algébrica   Uma função real é chamada função algébrica se puder ser construída usando-se operações algébricas (adição, subtração, multiplicação, divisão e extração de raízes) começando com os polinômios.    Determine o domínio das seguintes funções algébricas:              Função Modular   A função modular é a função real definida por Abaixo segue o gráfico da função .     Esboce o gráfico de .   O módulo pode ser reescrito da seguinte maneira: Portanto, a funçao pode ser reescrita assim: ou       Considere   Mostre que   Esboce o gráfico de .       Determine o domínio e determine se a função é crescente, decrescente ou constante.        Estude a variação do sinal de .           Determine o domínio           Determine o domínio, esboce o gráfico e determine em quais intervalos a função é crescente, decrescente ou constante.         Considere a função .  Mostre que  Esboce o gráfico de  Determine em quais intervalos é crescente, decrescente ou constante.    Esboce o gráfico.        "
},
{
  "id": "definition-9",
  "level": "2",
  "url": "section-3.html#definition-9",
  "type": "Definição",
  "number": "1.3.1",
  "title": "",
  "body": " Seja uma função. O conjunto denomina-se gráfico de . Note que é um subconjunto do plano , ou seja, é um subconjunto de todos os pares ordenados de número reais.  "
},
{
  "id": "example-4",
  "level": "2",
  "url": "section-3.html#example-4",
  "type": "Exemplo",
  "number": "1.3.2",
  "title": "",
  "body": " (Função constante) Uma função , com constante, denomina-se função constante.  a) é uma função constante, tem-se e .   b) dada por é uma função constante e seu gráfico é   "
},
{
  "id": "example-5",
  "level": "2",
  "url": "section-3.html#example-5",
  "type": "Exemplo",
  "number": "1.3.3",
  "title": "",
  "body": " (Função definida por partes) Seja     "
},
{
  "id": "example-6",
  "level": "2",
  "url": "section-3.html#example-6",
  "type": "Exemplo",
  "number": "1.3.4",
  "title": "",
  "body": " (Função afim) Uma função real da forma , com e constantes, denomina-se função afim .  Se , a função assume o formato e é conhecida como função linear . "
},
{
  "id": "example-7",
  "level": "2",
  "url": "section-3.html#example-7",
  "type": "Exemplo",
  "number": "1.3.5",
  "title": "",
  "body": " Determine as raízes e faça o estudo do sinal das seguintes funções:         "
},
{
  "id": "example-8",
  "level": "2",
  "url": "section-3.html#example-8",
  "type": "Exemplo",
  "number": "1.3.6",
  "title": "",
  "body": " (Função polinomial) Uma função dada por na qual, , são números reais fixos, denomina-se função polinomial de grau .  a) é uma função polinomial de grau 2 e seu gráfico é a parábola.   a) é uma função polinomial de grau 3 e seu gráfico é obtido do gráfico de , transladando-o uma unidade para a direita.   "
},
{
  "id": "definition-10",
  "level": "2",
  "url": "section-3.html#definition-10",
  "type": "Definição",
  "number": "1.3.7",
  "title": "",
  "body": " Uma função real é chamada de função quadrática se existem números reais , com , tais que O domínio de uma função quadrática é .  "
},
{
  "id": "remark-6",
  "level": "2",
  "url": "section-3.html#remark-6",
  "type": "Nota",
  "number": "1.3.8",
  "title": "",
  "body": "  (Zeros de uma função quadrática) Sendo , com , o número é chamado discriminante da função quadrática .   Caso 1: Se , então as raízes de são Note que: se , então .   Caso 2: Se , então não possui raízes reais.  "
},
{
  "id": "obs-fatoracao",
  "level": "2",
  "url": "section-3.html#obs-fatoracao",
  "type": "Nota",
  "number": "1.3.9",
  "title": "",
  "body": "  (Fatoração) Se , então podemos \"fatorar\" o trinômio da seguinte forma:   "
},
{
  "id": "remark-8",
  "level": "2",
  "url": "section-3.html#remark-8",
  "type": "Nota",
  "number": "1.3.10",
  "title": "",
  "body": "  (O gráfico de uma função quadrática) O gráfico de uma função quadrática é uma \"parábola\". Abaixo segue algumas informações importantes:   Se , a concavidade da parábola é para cima.  Se , a concavidade da parábola é para baixo.    Se , possui uma raiz real dupla (a parábola intersecta o eixo uma vez só no ponto)  Se , possui duas raízes reais distintas (a parábola intersecta o eixo em dois pontos)  Se , não possui raiz real(a parábola não intersecta o eixo .    O vértice da parábola é o ponto , com      "
},
{
  "id": "example-9",
  "level": "2",
  "url": "section-3.html#example-9",
  "type": "Exemplo",
  "number": "1.3.11",
  "title": "",
  "body": " Esboce o gráfico das funções. Além disso, se for possível, faça a fatoração:         "
},
{
  "id": "example-10",
  "level": "2",
  "url": "section-3.html#example-10",
  "type": "Exemplo",
  "number": "1.3.12",
  "title": "",
  "body": " Estude o sinal de :         "
},
{
  "id": "definition-11",
  "level": "2",
  "url": "section-3.html#definition-11",
  "type": "Definição",
  "number": "1.3.13",
  "title": "",
  "body": " (Função racional) Uma função racional é uma função dada por na qual, e são funções polinomiais. O domínio de é o conjunto .  "
},
{
  "id": "example-11",
  "level": "2",
  "url": "section-3.html#example-11",
  "type": "Exemplo",
  "number": "1.3.14",
  "title": "",
  "body": " a) é uma função racional com e . .   b) é uma função racional com e . .   "
},
{
  "id": "example-12",
  "level": "2",
  "url": "section-3.html#example-12",
  "type": "Exemplo",
  "number": "1.3.15",
  "title": "",
  "body": " Determine o domínio das seguintes funções racionais:       "
},
{
  "id": "definition-12",
  "level": "2",
  "url": "section-3.html#definition-12",
  "type": "Definição",
  "number": "1.3.16",
  "title": "",
  "body": " Uma função real é chamada função algébrica se puder ser construída usando-se operações algébricas (adição, subtração, multiplicação, divisão e extração de raízes) começando com os polinômios.  "
},
{
  "id": "example-13",
  "level": "2",
  "url": "section-3.html#example-13",
  "type": "Exemplo",
  "number": "1.3.17",
  "title": "",
  "body": " Determine o domínio das seguintes funções algébricas:           "
},
{
  "id": "definition-13",
  "level": "2",
  "url": "section-3.html#definition-13",
  "type": "Definição",
  "number": "1.3.18",
  "title": "",
  "body": " A função modular é a função real definida por Abaixo segue o gráfico da função .   "
},
{
  "id": "example-14",
  "level": "2",
  "url": "section-3.html#example-14",
  "type": "Exemplo",
  "number": "1.3.19",
  "title": "",
  "body": " Esboce o gráfico de .   O módulo pode ser reescrito da seguinte maneira: Portanto, a funçao pode ser reescrita assim: ou     "
},
{
  "id": "example-15",
  "level": "2",
  "url": "section-3.html#example-15",
  "type": "Exemplo",
  "number": "1.3.20",
  "title": "",
  "body": " Considere   Mostre que   Esboce o gráfico de .    "
},
{
  "id": "exercise-1",
  "level": "2",
  "url": "section-3.html#exercise-1",
  "type": "Exercício",
  "number": "1.3.8.1",
  "title": "",
  "body": "Determine o domínio e determine se a função é crescente, decrescente ou constante.       "
},
{
  "id": "exercise-2",
  "level": "2",
  "url": "section-3.html#exercise-2",
  "type": "Exercício",
  "number": "1.3.8.2",
  "title": "",
  "body": "Estude a variação do sinal de .          "
},
{
  "id": "exercise-3",
  "level": "2",
  "url": "section-3.html#exercise-3",
  "type": "Exercício",
  "number": "1.3.8.3",
  "title": "",
  "body": "Determine o domínio          "
},
{
  "id": "exercise-4",
  "level": "2",
  "url": "section-3.html#exercise-4",
  "type": "Exercício",
  "number": "1.3.8.4",
  "title": "",
  "body": "Determine o domínio, esboce o gráfico e determine em quais intervalos a função é crescente, decrescente ou constante.        "
},
{
  "id": "exercise-5",
  "level": "2",
  "url": "section-3.html#exercise-5",
  "type": "Exercício",
  "number": "1.3.8.5",
  "title": "",
  "body": "Considere a função .  Mostre que  Esboce o gráfico de  Determine em quais intervalos é crescente, decrescente ou constante.   "
},
{
  "id": "exercise-6",
  "level": "2",
  "url": "section-3.html#exercise-6",
  "type": "Exercício",
  "number": "1.3.8.6",
  "title": "",
  "body": "Esboce o gráfico.      "
},
{
  "id": "section-4",
  "level": "1",
  "url": "section-4.html",
  "type": "Seção",
  "number": "1.4",
  "title": "Funções Injetoras, Sobrejetoras e Bijetoras",
  "body": " Funções Injetoras, Sobrejetoras e Bijetoras   Uma função injetiva (ou injetora) é uma função que cada elemento do contradomínio da função é a imagem de no máximo um elemento de seu domínio. Ou seja, Uma função diz-se injetiva (ou injetora) se e somente se quaisquer que sejam e (pertencentes ao domínio da função), implica que .    a) não é injetora, pois , porém .  b) é injetora. De fato, sejam , com . mas por hipótese. Portanto, é injetiva.    Uma função é sobrejetiva (ou sobrejetora) , se para todo elemento houver pelo menos um elemento tal que . Ou seja, quando o conjunto imagem coincide com o contradomínio da função.    a) , na qual, não é sobrejetiva, pois dado , não existe tal que .  b) , na qual, é sobrejetiva.    Uma função é chamada de bijetora se for injetiva e sobrejetiva.    Sejam e funções tais que o domínio de é igual ao contradomínio de . Neste caso podemos definir a função composta  , que consiste em aplicar primeiro e depois . Mais precisamente,    Função .      Sejam e dadas por e . Determine e .     Dadas as funções e , diremos que é uma inversa à esquerda para quando , ou seja, quando para todo .    Uma função possui inversa à esquerda se, e somente se, é injetiva.    Seja dada por , que é injetiva e não é sobrejetiva. A inversa à esquerda da função é a função , pois para todo .    Dadas as funções e , diremos que é uma inversa à direita para quando , ou seja, quando para todo .    Uma função possui inversa à direita se, e somente se, é sobrejetiva.    Seja , dada por . A inversa à direita de é a função , dada por .    Uma função chama-se inversa da função , quando e , isto é, quando é inversa à esquerda e à direita para .    Seja , dada por . A inversa é a função , dada por .    Podemos utilizar o SageMath para calcular a inversa de funções. Para calcular a inversa da função , use o código a seguir. E para trocar a função, modifique o valor atribuído a f na linha 5.    Encontre as funções e seus domínios.        Encontre        Expresse na forma .        Encontre a inversa das funções.          "
},
{
  "id": "definition-14",
  "level": "2",
  "url": "section-4.html#definition-14",
  "type": "Definição",
  "number": "1.4.1",
  "title": "",
  "body": " Uma função injetiva (ou injetora) é uma função que cada elemento do contradomínio da função é a imagem de no máximo um elemento de seu domínio. Ou seja, Uma função diz-se injetiva (ou injetora) se e somente se quaisquer que sejam e (pertencentes ao domínio da função), implica que .  "
},
{
  "id": "example-16",
  "level": "2",
  "url": "section-4.html#example-16",
  "type": "Exemplo",
  "number": "1.4.2",
  "title": "",
  "body": " a) não é injetora, pois , porém .  b) é injetora. De fato, sejam , com . mas por hipótese. Portanto, é injetiva.  "
},
{
  "id": "definition-15",
  "level": "2",
  "url": "section-4.html#definition-15",
  "type": "Definição",
  "number": "1.4.3",
  "title": "",
  "body": " Uma função é sobrejetiva (ou sobrejetora) , se para todo elemento houver pelo menos um elemento tal que . Ou seja, quando o conjunto imagem coincide com o contradomínio da função.  "
},
{
  "id": "example-17",
  "level": "2",
  "url": "section-4.html#example-17",
  "type": "Exemplo",
  "number": "1.4.4",
  "title": "",
  "body": " a) , na qual, não é sobrejetiva, pois dado , não existe tal que .  b) , na qual, é sobrejetiva.  "
},
{
  "id": "definition-16",
  "level": "2",
  "url": "section-4.html#definition-16",
  "type": "Definição",
  "number": "1.4.5",
  "title": "",
  "body": " Uma função é chamada de bijetora se for injetiva e sobrejetiva.  "
},
{
  "id": "definition-17",
  "level": "2",
  "url": "section-4.html#definition-17",
  "type": "Definição",
  "number": "1.4.6",
  "title": "",
  "body": " Sejam e funções tais que o domínio de é igual ao contradomínio de . Neste caso podemos definir a função composta  , que consiste em aplicar primeiro e depois . Mais precisamente,    Função .    "
},
{
  "id": "example-18",
  "level": "2",
  "url": "section-4.html#example-18",
  "type": "Exemplo",
  "number": "1.4.8",
  "title": "",
  "body": " Sejam e dadas por e . Determine e .   "
},
{
  "id": "definition-18",
  "level": "2",
  "url": "section-4.html#definition-18",
  "type": "Definição",
  "number": "1.4.9",
  "title": "",
  "body": " Dadas as funções e , diremos que é uma inversa à esquerda para quando , ou seja, quando para todo .  "
},
{
  "id": "theorem-1",
  "level": "2",
  "url": "section-4.html#theorem-1",
  "type": "Teorema",
  "number": "1.4.10",
  "title": "",
  "body": " Uma função possui inversa à esquerda se, e somente se, é injetiva.  "
},
{
  "id": "example-19",
  "level": "2",
  "url": "section-4.html#example-19",
  "type": "Exemplo",
  "number": "1.4.11",
  "title": "",
  "body": " Seja dada por , que é injetiva e não é sobrejetiva. A inversa à esquerda da função é a função , pois para todo .  "
},
{
  "id": "definition-19",
  "level": "2",
  "url": "section-4.html#definition-19",
  "type": "Definição",
  "number": "1.4.12",
  "title": "",
  "body": " Dadas as funções e , diremos que é uma inversa à direita para quando , ou seja, quando para todo .  "
},
{
  "id": "theorem-2",
  "level": "2",
  "url": "section-4.html#theorem-2",
  "type": "Teorema",
  "number": "1.4.13",
  "title": "",
  "body": " Uma função possui inversa à direita se, e somente se, é sobrejetiva.  "
},
{
  "id": "example-20",
  "level": "2",
  "url": "section-4.html#example-20",
  "type": "Exemplo",
  "number": "1.4.14",
  "title": "",
  "body": " Seja , dada por . A inversa à direita de é a função , dada por .  "
},
{
  "id": "definition-20",
  "level": "2",
  "url": "section-4.html#definition-20",
  "type": "Definição",
  "number": "1.4.15",
  "title": "",
  "body": " Uma função chama-se inversa da função , quando e , isto é, quando é inversa à esquerda e à direita para .  "
},
{
  "id": "example-21",
  "level": "2",
  "url": "section-4.html#example-21",
  "type": "Exemplo",
  "number": "1.4.16",
  "title": "",
  "body": " Seja , dada por . A inversa é a função , dada por .   "
},
{
  "id": "technology-1",
  "level": "2",
  "url": "section-4.html#technology-1",
  "type": "Tecnologia",
  "number": "1.4.17",
  "title": "",
  "body": "Podemos utilizar o SageMath para calcular a inversa de funções. Para calcular a inversa da função , use o código a seguir. E para trocar a função, modifique o valor atribuído a f na linha 5.  "
},
{
  "id": "exercise-7",
  "level": "2",
  "url": "section-4.html#exercise-7",
  "type": "Exercício",
  "number": "1.4.1",
  "title": "",
  "body": "Encontre as funções e seus domínios.       "
},
{
  "id": "exercise-8",
  "level": "2",
  "url": "section-4.html#exercise-8",
  "type": "Exercício",
  "number": "1.4.2",
  "title": "",
  "body": "Encontre       "
},
{
  "id": "exercise-9",
  "level": "2",
  "url": "section-4.html#exercise-9",
  "type": "Exercício",
  "number": "1.4.3",
  "title": "",
  "body": "Expresse na forma .       "
},
{
  "id": "exercise-10",
  "level": "2",
  "url": "section-4.html#exercise-10",
  "type": "Exercício",
  "number": "1.4.4",
  "title": "",
  "body": "Encontre a inversa das funções.       "
},
{
  "id": "section-5",
  "level": "1",
  "url": "section-5.html",
  "type": "Seção",
  "number": "1.5",
  "title": "Funções Exponenciais e Funções Logarítmicas",
  "body": " Funções Exponenciais e Funções Logarítmicas   Funções Exponenciais   Uma função exponencial é uma função da forma em que e .    Lembre que: sendo , se e , então          A função exponencial , em que e , tem domínio e imagem . O gráfico de tem uma das seguintes formas:      (Propriedades dos expoentes) Sejam e numeros positivos e números reais quaisquer, então:      , se       Funções Logarítmicas  Toda função exponencial , com e , é uma função injetiva, portanto possui uma função inversa. A função inversa é chamada de função logarítmica com base e é denotada por .   Seja um número real positivo com . A função logarítmica com base , é definida por     Calcule:         Propriedades básicas dos logarítmos          Determine o valor de :            A função exponencial , em que e , tem domínio e imagem , logo sua função inversa, é obtido refletindo o gráfico de em relação a reta . O gráfico da função logarítmica tem uma das seguintes formas:      Esboce o gráfico, determine o domínio e a assíntota de     Determine o domínio das seguintes funções        item a) Como o domínio de é o conjunto . O domínio de é dado pelo conjunto Fazendo o estudo do sinal para a função , obtemos . Portanto, o domínio solicitado é dado pelo conjunto , que também pode ser expresso pela união dos intervalos: .  De fato, podemos plotar o gráfico da função na união de intervalos dos tipos , como pode ser verificado a seguir:       (Leis dos Logarítmos)      , para      Encontre o valor exato de cada expressão.            Resolva cada equação em .                 "
},
{
  "id": "definition-21",
  "level": "2",
  "url": "section-5.html#definition-21",
  "type": "Definição",
  "number": "1.5.1",
  "title": "",
  "body": " Uma função exponencial é uma função da forma em que e .  "
},
{
  "id": "remark-9",
  "level": "2",
  "url": "section-5.html#remark-9",
  "type": "Nota",
  "number": "1.5.2",
  "title": "",
  "body": " Lembre que: sendo , se e , então        "
},
{
  "id": "remark-10",
  "level": "2",
  "url": "section-5.html#remark-10",
  "type": "Nota",
  "number": "1.5.3",
  "title": "",
  "body": " A função exponencial , em que e , tem domínio e imagem . O gráfico de tem uma das seguintes formas:    "
},
{
  "id": "remark-11",
  "level": "2",
  "url": "section-5.html#remark-11",
  "type": "Nota",
  "number": "1.5.4",
  "title": "",
  "body": " (Propriedades dos expoentes) Sejam e numeros positivos e números reais quaisquer, então:      , se    "
},
{
  "id": "definition-22",
  "level": "2",
  "url": "section-5.html#definition-22",
  "type": "Definição",
  "number": "1.5.5",
  "title": "",
  "body": " Seja um número real positivo com . A função logarítmica com base , é definida por   "
},
{
  "id": "example-22",
  "level": "2",
  "url": "section-5.html#example-22",
  "type": "Exemplo",
  "number": "1.5.6",
  "title": "",
  "body": " Calcule:       "
},
{
  "id": "proposition-7",
  "level": "2",
  "url": "section-5.html#proposition-7",
  "type": "Proposição",
  "number": "1.5.7",
  "title": "",
  "body": " Propriedades básicas dos logarítmos        "
},
{
  "id": "example-23",
  "level": "2",
  "url": "section-5.html#example-23",
  "type": "Exemplo",
  "number": "1.5.8",
  "title": "",
  "body": " Determine o valor de :          "
},
{
  "id": "remark-12",
  "level": "2",
  "url": "section-5.html#remark-12",
  "type": "Nota",
  "number": "1.5.9",
  "title": "",
  "body": " A função exponencial , em que e , tem domínio e imagem , logo sua função inversa, é obtido refletindo o gráfico de em relação a reta . O gráfico da função logarítmica tem uma das seguintes formas:    "
},
{
  "id": "example-24",
  "level": "2",
  "url": "section-5.html#example-24",
  "type": "Exemplo",
  "number": "1.5.10",
  "title": "",
  "body": " Esboce o gráfico, determine o domínio e a assíntota de   "
},
{
  "id": "example-25",
  "level": "2",
  "url": "section-5.html#example-25",
  "type": "Exemplo",
  "number": "1.5.11",
  "title": "",
  "body": " Determine o domínio das seguintes funções        item a) Como o domínio de é o conjunto . O domínio de é dado pelo conjunto Fazendo o estudo do sinal para a função , obtemos . Portanto, o domínio solicitado é dado pelo conjunto , que também pode ser expresso pela união dos intervalos: .  De fato, podemos plotar o gráfico da função na união de intervalos dos tipos , como pode ser verificado a seguir:    "
},
{
  "id": "remark-13",
  "level": "2",
  "url": "section-5.html#remark-13",
  "type": "Nota",
  "number": "1.5.12",
  "title": "",
  "body": "  (Leis dos Logarítmos)      , para    "
},
{
  "id": "exercise-11",
  "level": "2",
  "url": "section-5.html#exercise-11",
  "type": "Exercício",
  "number": "1.5.2.1",
  "title": "",
  "body": "Encontre o valor exato de cada expressão.           "
},
{
  "id": "exercise-12",
  "level": "2",
  "url": "section-5.html#exercise-12",
  "type": "Exercício",
  "number": "1.5.2.2",
  "title": "",
  "body": "Resolva cada equação em .              "
},
{
  "id": "section-6",
  "level": "1",
  "url": "section-6.html",
  "type": "Seção",
  "number": "1.6",
  "title": "Funções Trigonométricas",
  "body": " Funções Trigonométricas   O círculo unitário é o círculo de raio centrado na origem do plano . Sua equação é .   Vamos associar cada número real a um ponto do círculo unitário da seguinte forma: se for positivo, iniciando no ponto , movemos sobre o círculo no sentido anti-horário uma distância ; se for negativo, iniciando no ponto , movemos sobre o círculo no sentido horário uma distância :  Círculo unitário e o ponto .      Definimos e como as coordenadas dos ponto , mais precisamente:   Círculo unitário e as coordenadas do ponto .       Propriedades imediatas:  Como está no círculo unitário, então  Além disso,  Lembrando que:   Os quatro quadrantes.      1º Quad.  2º Quad.  3º Quad.  4º Quad.       Então                                Quanto ao sinal dessas funções nos quadrantes:      1º Quad.  2º Quad.  3º Quad.  4º Quad.    seno:        cosseno:          As funções seno e cosseno são periódicas com período , ou seja, e .       Funções pares e funções ímpares são funções que satisfazem relações de simetria particulares, com respeito a tomar inversas aditivas. Seja f uma função real.  Dizemos é par se a seguinte equação vale para todo x tal que x e −x estão no domínio de :  Dizemos é ímpar se a seguinte equação vale para todo x tal que x e −x estão no domínio de :      Gráfico da função .   Gráfico da função , com .     Podemos observar que seno é uma função ímpar, ou seja,  O domínio da função seno é .  A imagem da função seno é .     Gráfico da função .   Gráfico da função , com .     Podemos observar que cosseno é uma função par, ou seja,  O domínio da função cosseno é .  A imagem da função cosseno é .       Valores Especiais                         A função Tangente   A função tangente é definida da seguinite forma:     Gráfico da função .   Gráfico da função , com .     Considerando   .  .  A função tangente é periódica de período , isto é, .  A função tangente é ímpar, isto é,      A função Cotangente   A função cotangente é definida da seguinite forma:     Gráfico da função .   Gráfico da função , com .     Considerando   .  .  A função cotangente é periódica de período , isto é, .  A função cotangente é ímpar, isto é,      A função Secante   A função secante é definida da seguinite forma:     Gráfico da função .   Gráfico da função , com .     Considerando   .  .  A função secante é periódica de período , isto é, .  A função secante é par, isto é,      A função Cossecante   A função cossecante é definida da seguinite forma:     Gráfico da função .   Gráfico da função , com .     Considerando   .  .  A função cossecante é periódica de período , isto é, .  A função secante é ímpar, isto é,     Determine o valor exato de cada expressão.              Se e determine:          Resolva as equações:  , para .      , para .     , para .    , para .        "
},
{
  "id": "definition-23",
  "level": "2",
  "url": "section-6.html#definition-23",
  "type": "Definição",
  "number": "1.6.1",
  "title": "",
  "body": " O círculo unitário é o círculo de raio centrado na origem do plano . Sua equação é .  "
},
{
  "id": "fig-circ-antih-h",
  "level": "2",
  "url": "section-6.html#fig-circ-antih-h",
  "type": "Figura",
  "number": "1.6.2",
  "title": "",
  "body": " Círculo unitário e o ponto .   "
},
{
  "id": "definition-24",
  "level": "2",
  "url": "section-6.html#definition-24",
  "type": "Definição",
  "number": "1.6.3",
  "title": "",
  "body": " Definimos e como as coordenadas dos ponto , mais precisamente:   Círculo unitário e as coordenadas do ponto .     "
},
{
  "id": "proposition-8",
  "level": "2",
  "url": "section-6.html#proposition-8",
  "type": "Proposição",
  "number": "1.6.5",
  "title": "",
  "body": " Propriedades imediatas:  Como está no círculo unitário, então  Além disso,  Lembrando que:   Os quatro quadrantes.      1º Quad.  2º Quad.  3º Quad.  4º Quad.       Então                                Quanto ao sinal dessas funções nos quadrantes:      1º Quad.  2º Quad.  3º Quad.  4º Quad.    seno:        cosseno:          As funções seno e cosseno são periódicas com período , ou seja, e .    "
},
{
  "id": "definition-25",
  "level": "2",
  "url": "section-6.html#definition-25",
  "type": "Definição",
  "number": "1.6.9",
  "title": "",
  "body": "  Funções pares e funções ímpares são funções que satisfazem relações de simetria particulares, com respeito a tomar inversas aditivas. Seja f uma função real.  Dizemos é par se a seguinte equação vale para todo x tal que x e −x estão no domínio de :  Dizemos é ímpar se a seguinte equação vale para todo x tal que x e −x estão no domínio de :    "
},
{
  "id": "p-157",
  "level": "2",
  "url": "section-6.html#p-157",
  "type": "Parágrafo (with a defined term)",
  "number": "",
  "title": "",
  "body": "Gráfico da função . "
},
{
  "id": "p-158",
  "level": "2",
  "url": "section-6.html#p-158",
  "type": "Parágrafo (with a defined term)",
  "number": "",
  "title": "",
  "body": "Gráfico da função . "
},
{
  "id": "table-3",
  "level": "2",
  "url": "section-6.html#table-3",
  "type": "Tabela",
  "number": "1.6.12",
  "title": "",
  "body": "  Valores Especiais                      "
},
{
  "id": "definition-26",
  "level": "2",
  "url": "section-6.html#definition-26",
  "type": "Definição",
  "number": "1.6.13",
  "title": "",
  "body": " A função tangente é definida da seguinite forma:   "
},
{
  "id": "p-161",
  "level": "2",
  "url": "section-6.html#p-161",
  "type": "Parágrafo (with a defined term)",
  "number": "",
  "title": "",
  "body": "Gráfico da função . "
},
{
  "id": "definition-27",
  "level": "2",
  "url": "section-6.html#definition-27",
  "type": "Definição",
  "number": "1.6.15",
  "title": "",
  "body": " A função cotangente é definida da seguinite forma:   "
},
{
  "id": "p-164",
  "level": "2",
  "url": "section-6.html#p-164",
  "type": "Parágrafo (with a defined term)",
  "number": "",
  "title": "",
  "body": "Gráfico da função . "
},
{
  "id": "definition-28",
  "level": "2",
  "url": "section-6.html#definition-28",
  "type": "Definição",
  "number": "1.6.17",
  "title": "",
  "body": " A função secante é definida da seguinite forma:   "
},
{
  "id": "p-167",
  "level": "2",
  "url": "section-6.html#p-167",
  "type": "Parágrafo (with a defined term)",
  "number": "",
  "title": "",
  "body": "Gráfico da função . "
},
{
  "id": "definition-29",
  "level": "2",
  "url": "section-6.html#definition-29",
  "type": "Definição",
  "number": "1.6.19",
  "title": "",
  "body": " A função cossecante é definida da seguinite forma:   "
},
{
  "id": "p-170",
  "level": "2",
  "url": "section-6.html#p-170",
  "type": "Parágrafo (with a defined term)",
  "number": "",
  "title": "",
  "body": "Gráfico da função . "
},
{
  "id": "exercise-13",
  "level": "2",
  "url": "section-6.html#exercise-13",
  "type": "Exercício",
  "number": "1.6.4.1",
  "title": "",
  "body": "Determine o valor exato de cada expressão.             "
},
{
  "id": "exercise-14",
  "level": "2",
  "url": "section-6.html#exercise-14",
  "type": "Exercício",
  "number": "1.6.4.2",
  "title": "",
  "body": "Se e determine:        "
},
{
  "id": "exercise-15",
  "level": "2",
  "url": "section-6.html#exercise-15",
  "type": "Exercício",
  "number": "1.6.4.3",
  "title": "",
  "body": "Resolva as equações:  , para .      , para .     , para .    , para .     "
},
{
  "id": "section-7",
  "level": "1",
  "url": "section-7.html",
  "type": "Seção",
  "number": "1.7",
  "title": "Identidades Trigonométricas",
  "body": " Identidades Trigonométricas  Já sabemos que Para , se dividirmos a Equação por , obteremos a seguinte equação: Agora, para , se dividirmos a Equação por , obteremos a seguinte equação :    São válidas as seguintes identidades:            item 1. Sejam e arcos trigonométricos de medidas e , respectivamente.  Arcos e .   As coordenadas dos pontos e :      Lembrando que a distância entre dois pontos e , do plano cartesiano, é dado por . Vamos usar que a distância de até é igual a distância de até . Assim, , implica em Elevando ambos os membros ao quadrado obtemos Calculando os quadrados, Reorganizando, ficamos com Ou seja, Cancelando o de ambos os membros e em seguida multiplicando tudo por obtemos a igualdade:    itens 2., 3., 4., 5. e 6. Exercício.     Use as identidades fundamentais para simplificar cada expressão.        Resolva as inequações:  , para .      , para .        Calcule:  .     .    .    .    .    .      Mostre que   Sabendo que e que , calcule       Sabendo que e que , calcule       Resolva a seguinte equação em :       Resolva a seguinte equação em :        "
},
{
  "id": "theorem-3",
  "level": "2",
  "url": "section-7.html#theorem-3",
  "type": "Teorema",
  "number": "1.7.1",
  "title": "",
  "body": " São válidas as seguintes identidades:            item 1. Sejam e arcos trigonométricos de medidas e , respectivamente.  Arcos e .   As coordenadas dos pontos e :      Lembrando que a distância entre dois pontos e , do plano cartesiano, é dado por . Vamos usar que a distância de até é igual a distância de até . Assim, , implica em Elevando ambos os membros ao quadrado obtemos Calculando os quadrados, Reorganizando, ficamos com Ou seja, Cancelando o de ambos os membros e em seguida multiplicando tudo por obtemos a igualdade:    itens 2., 3., 4., 5. e 6. Exercício.   "
},
{
  "id": "exercise-16",
  "level": "2",
  "url": "section-7.html#exercise-16",
  "type": "Exercício",
  "number": "1.7.1",
  "title": "",
  "body": "Use as identidades fundamentais para simplificar cada expressão.       "
},
{
  "id": "exercise-17",
  "level": "2",
  "url": "section-7.html#exercise-17",
  "type": "Exercício",
  "number": "1.7.2",
  "title": "",
  "body": "Resolva as inequações:  , para .      , para .       "
},
{
  "id": "exercise-18",
  "level": "2",
  "url": "section-7.html#exercise-18",
  "type": "Exercício",
  "number": "1.7.3",
  "title": "",
  "body": "Calcule:  .     .    .    .    .    .     "
},
{
  "id": "exercise-19",
  "level": "2",
  "url": "section-7.html#exercise-19",
  "type": "Exercício",
  "number": "1.7.4",
  "title": "",
  "body": "Mostre que  "
},
{
  "id": "exercise-20",
  "level": "2",
  "url": "section-7.html#exercise-20",
  "type": "Exercício",
  "number": "1.7.5",
  "title": "",
  "body": "Sabendo que e que , calcule      "
},
{
  "id": "exercise-21",
  "level": "2",
  "url": "section-7.html#exercise-21",
  "type": "Exercício",
  "number": "1.7.6",
  "title": "",
  "body": "Sabendo que e que , calcule      "
},
{
  "id": "exercise-22",
  "level": "2",
  "url": "section-7.html#exercise-22",
  "type": "Exercício",
  "number": "1.7.7",
  "title": "",
  "body": "Resolva a seguinte equação em :      "
},
{
  "id": "exercise-23",
  "level": "2",
  "url": "section-7.html#exercise-23",
  "type": "Exercício",
  "number": "1.7.8",
  "title": "",
  "body": "Resolva a seguinte equação em :      "
},
{
  "id": "section-8",
  "level": "1",
  "url": "section-8.html",
  "type": "Seção",
  "number": "1.8",
  "title": "Funções Trigonométricas Inversas",
  "body": " Funções Trigonométricas Inversas   Função Arco-Seno   A função seno, isto é, tal que é evidentemente não injetiva, por exemplo, . Observe o gráfico da função seno abaixo.  Gráfico da função , com .   Observando que se considerarmos a função seno restrita ao intervalo , isto é, tal que , então é uma função injetiva. Veja o gráfico de abaixo:  Gráfico da função , com .   Sendo uma função injetiva com domínio e imagem , podemos definir a inversa de . A função é denominada arco-seno e é denotada por       O domínio de é  A imagem de é  e        Gráfico da função arco-seno   Gráfico da função , com .       Função Arco-Cosseno   A função cosseno, isto é, tal que não injetiva. Porém, se considerarmos a função cosseno restrita ao intervalo , isto é, tal que , notamos que é uma função injetiva. Observe o gráfico de na figura abaixo:  Gráfico da função , com .   Como é uma função injetiva com domínio e imagem , podemos definir sua inversa que é denominada função arco-cosseno e é denotada por:       O domínio de é  A imagem de é  e        Gráfico da função arco-cosseno   Gráfico da função , com .       Função Arco-Tangente   A função tangente, isto é, tal que não injetiva. Porém, se considerarmos a função tangente restrita ao intervalo , isto é, tal que , notamos que é uma função injetiva. Observe o gráfico de na figura abaixo:  Gráfico da função , com .   Como é uma função injetiva com domínio e imagem , podemos definir sua inversa que é denominada função arco-tangente e é denotada por:       O domínio de é  A imagem de é  e        Gráfico da função arco-tangente   Gráfico da função , com .       Função Arco-Cotangente   Se restringirmos o domínio da função cotangente ao intervalo , isto é, tal que , então é uma função injetiva. Sendo assim, admit uma inversa, , denominada arco-cotangente e denotada por       O domínio de é  A imagem de é  e         Funções Arco-Secante e Arco-Cossecante  Definimos o arco-secante como segue:   Definimos o arco-cossecante como segue:     Determine o valor exato de cada expressão, se estiver definido.                 "
},
{
  "id": "definition-30",
  "level": "2",
  "url": "section-8.html#definition-30",
  "type": "Definição",
  "number": "1.8.1",
  "title": "",
  "body": " A função seno, isto é, tal que é evidentemente não injetiva, por exemplo, . Observe o gráfico da função seno abaixo.  Gráfico da função , com .   Observando que se considerarmos a função seno restrita ao intervalo , isto é, tal que , então é uma função injetiva. Veja o gráfico de abaixo:  Gráfico da função , com .   Sendo uma função injetiva com domínio e imagem , podemos definir a inversa de . A função é denominada arco-seno e é denotada por   "
},
{
  "id": "remark-14",
  "level": "2",
  "url": "section-8.html#remark-14",
  "type": "Nota",
  "number": "1.8.4",
  "title": "",
  "body": "   O domínio de é  A imagem de é  e      "
},
{
  "id": "p-199",
  "level": "2",
  "url": "section-8.html#p-199",
  "type": "Parágrafo (with a defined term)",
  "number": "",
  "title": "",
  "body": "Gráfico da função arco-seno "
},
{
  "id": "definition-31",
  "level": "2",
  "url": "section-8.html#definition-31",
  "type": "Definição",
  "number": "1.8.6",
  "title": "",
  "body": " A função cosseno, isto é, tal que não injetiva. Porém, se considerarmos a função cosseno restrita ao intervalo , isto é, tal que , notamos que é uma função injetiva. Observe o gráfico de na figura abaixo:  Gráfico da função , com .   Como é uma função injetiva com domínio e imagem , podemos definir sua inversa que é denominada função arco-cosseno e é denotada por:   "
},
{
  "id": "remark-15",
  "level": "2",
  "url": "section-8.html#remark-15",
  "type": "Nota",
  "number": "1.8.8",
  "title": "",
  "body": "   O domínio de é  A imagem de é  e      "
},
{
  "id": "p-202",
  "level": "2",
  "url": "section-8.html#p-202",
  "type": "Parágrafo (with a defined term)",
  "number": "",
  "title": "",
  "body": "Gráfico da função arco-cosseno "
},
{
  "id": "definition-32",
  "level": "2",
  "url": "section-8.html#definition-32",
  "type": "Definição",
  "number": "1.8.10",
  "title": "",
  "body": " A função tangente, isto é, tal que não injetiva. Porém, se considerarmos a função tangente restrita ao intervalo , isto é, tal que , notamos que é uma função injetiva. Observe o gráfico de na figura abaixo:  Gráfico da função , com .   Como é uma função injetiva com domínio e imagem , podemos definir sua inversa que é denominada função arco-tangente e é denotada por:   "
},
{
  "id": "remark-16",
  "level": "2",
  "url": "section-8.html#remark-16",
  "type": "Nota",
  "number": "1.8.12",
  "title": "",
  "body": "   O domínio de é  A imagem de é  e      "
},
{
  "id": "p-205",
  "level": "2",
  "url": "section-8.html#p-205",
  "type": "Parágrafo (with a defined term)",
  "number": "",
  "title": "",
  "body": "Gráfico da função arco-tangente "
},
{
  "id": "definition-33",
  "level": "2",
  "url": "section-8.html#definition-33",
  "type": "Definição",
  "number": "1.8.14",
  "title": "",
  "body": " Se restringirmos o domínio da função cotangente ao intervalo , isto é, tal que , então é uma função injetiva. Sendo assim, admit uma inversa, , denominada arco-cotangente e denotada por   "
},
{
  "id": "remark-17",
  "level": "2",
  "url": "section-8.html#remark-17",
  "type": "Nota",
  "number": "1.8.15",
  "title": "",
  "body": "   O domínio de é  A imagem de é  e      "
},
{
  "id": "exercise-24",
  "level": "2",
  "url": "section-8.html#exercise-24",
  "type": "Exercício",
  "number": "1.8.6.1",
  "title": "",
  "body": "Determine o valor exato de cada expressão, se estiver definido.               "
},
{
  "id": "section-9",
  "level": "1",
  "url": "section-9.html",
  "type": "Seção",
  "number": "2.1",
  "title": "Limite: Conceito e Noção Intuitiva",
  "body": " Limite: Conceito e Noção Intuitiva   Função Contínua  Intuitivamente, uma função contínua em um ponto de seu domínio é uma função cujo gráfico não apresenta \"salto\" em .      Observe que à medida que se aproxima de , seja pela direita ou pela esquerda, os valores de se aproximam do valor de . Diferente da função , isso não acontece para a função em , pois neste ponto a função apresenta um \"salto\", não é contínua em .   Sejam uma função real e . Dizemos que é contínua em se, e somente se, para todo dado, existe tal que, para todo em ,         Dizemos que é contínua em se for contínua em cada ponto de . Dizemos que é uma função contínua, se for contínua em cada ponto de seu domínio.     Limite  Intuitivamente, dizer que o limite de , quando tende a , é igual a que, simbolicamente, se escreve significa que quando tende a , f(x) tende a .  Utilizando a idéia intuitiva de limite, calcule .     Utilizando a idéia intuitiva de limite, calcule .   Sejam uma função e um ponto do domínio de ou extremidade de um dos intervalos que compõem o domínio de . Dizemos que tem limite , em , se, para todo dado, existir um tal que, para todo , Tal número , quando existe é único e será indicado por     Sejam uma funçaõ real e um ponto do domínio de . Então, é contínua em se, e somente se,     Calcule     Calcule     Calcule , na qual     Sejam e funções reais tais que, e uma constante, então      , desde que     Calcule          Esboce o gráfico da função Considerando o gráfico de , determine o valor de cada quantidade indicada, se ela existir. Se não existir, explique por quê.       Dado que determine, usando as propriedades de limites, o limite.        Calcule o limite, se existir.                     "
},
{
  "id": "fig-fun-cont",
  "level": "2",
  "url": "section-9.html#fig-fun-cont",
  "type": "Figura",
  "number": "2.1.1",
  "title": "",
  "body": "   "
},
{
  "id": "definition-34",
  "level": "2",
  "url": "section-9.html#definition-34",
  "type": "Definição",
  "number": "2.1.2",
  "title": "",
  "body": " Sejam uma função real e . Dizemos que é contínua em se, e somente se, para todo dado, existe tal que, para todo em ,   "
},
{
  "id": "fig-fun-cont2",
  "level": "2",
  "url": "section-9.html#fig-fun-cont2",
  "type": "Figura",
  "number": "2.1.3",
  "title": "",
  "body": "   "
},
{
  "id": "remark-18",
  "level": "2",
  "url": "section-9.html#remark-18",
  "type": "Nota",
  "number": "2.1.4",
  "title": "",
  "body": " Dizemos que é contínua em se for contínua em cada ponto de . Dizemos que é uma função contínua, se for contínua em cada ponto de seu domínio.  "
},
{
  "id": "example-26",
  "level": "2",
  "url": "section-9.html#example-26",
  "type": "Exemplo",
  "number": "2.1.5",
  "title": "",
  "body": "Utilizando a idéia intuitiva de limite, calcule .    "
},
{
  "id": "example-27",
  "level": "2",
  "url": "section-9.html#example-27",
  "type": "Exemplo",
  "number": "2.1.7",
  "title": "",
  "body": "Utilizando a idéia intuitiva de limite, calcule . "
},
{
  "id": "definition-35",
  "level": "2",
  "url": "section-9.html#definition-35",
  "type": "Definição",
  "number": "2.1.8",
  "title": "",
  "body": " Sejam uma função e um ponto do domínio de ou extremidade de um dos intervalos que compõem o domínio de . Dizemos que tem limite , em , se, para todo dado, existir um tal que, para todo , Tal número , quando existe é único e será indicado por   "
},
{
  "id": "remark-19",
  "level": "2",
  "url": "section-9.html#remark-19",
  "type": "Nota",
  "number": "2.1.9",
  "title": "",
  "body": " Sejam uma funçaõ real e um ponto do domínio de . Então, é contínua em se, e somente se,   "
},
{
  "id": "example-28",
  "level": "2",
  "url": "section-9.html#example-28",
  "type": "Exemplo",
  "number": "2.1.10",
  "title": "",
  "body": " Calcule   "
},
{
  "id": "example-29",
  "level": "2",
  "url": "section-9.html#example-29",
  "type": "Exemplo",
  "number": "2.1.11",
  "title": "",
  "body": " Calcule   "
},
{
  "id": "example-30",
  "level": "2",
  "url": "section-9.html#example-30",
  "type": "Exemplo",
  "number": "2.1.12",
  "title": "",
  "body": " Calcule , na qual   "
},
{
  "id": "theorem-4",
  "level": "2",
  "url": "section-9.html#theorem-4",
  "type": "Teorema",
  "number": "2.1.13",
  "title": "",
  "body": " Sejam e funções reais tais que, e uma constante, então      , desde que   "
},
{
  "id": "example-31",
  "level": "2",
  "url": "section-9.html#example-31",
  "type": "Exemplo",
  "number": "2.1.14",
  "title": "",
  "body": " Calcule      "
},
{
  "id": "exercise-25",
  "level": "2",
  "url": "section-9.html#exercise-25",
  "type": "Exercício",
  "number": "2.1.3.1",
  "title": "",
  "body": "Esboce o gráfico da função Considerando o gráfico de , determine o valor de cada quantidade indicada, se ela existir. Se não existir, explique por quê.      "
},
{
  "id": "exercise-26",
  "level": "2",
  "url": "section-9.html#exercise-26",
  "type": "Exercício",
  "number": "2.1.3.2",
  "title": "",
  "body": "Dado que determine, usando as propriedades de limites, o limite.       "
},
{
  "id": "exercise-27",
  "level": "2",
  "url": "section-9.html#exercise-27",
  "type": "Exercício",
  "number": "2.1.3.3",
  "title": "",
  "body": "Calcule o limite, se existir.                   "
},
{
  "id": "section-10",
  "level": "1",
  "url": "section-10.html",
  "type": "Seção",
  "number": "2.2",
  "title": "Limites Laterais",
  "body": " Limites Laterais   Limites Laterais    Seja uma função real. Quando for possível aproximar de arbitrariamente de , os valores de , à medida que tende a por valores menores que , dizemos que o limite de pela esquerda , quando tende a é e indicamos por Similarmente, dizemos que o limite de pela direita , quando tende a é e denotamos por quando for possível aproximar de arbitrariamente de , os valores de , à medida que tende a por valores maiores que .     Dada a função determine:       Nota-se no gráfico de (ver ) que quando tende a pela esquerda, os valores de tendem a . Portanto, o limite pela esquerda é               Nota-se no gráfico de (ver ) que quando tende a pela direita, os valores de tendem a . Portanto, o limite pela direita é        se, e somente se, e .    Podemos reformular o escrevendo:  Existência de um Limite      Se qualquer um dos limites laterais não existir quando tende a , ou se ambos existem, mas forem diferentes, então o limite quando tende a não existe.    Se o limite quando tende a não existe, então os limites laterais são diferentes ou pelo menos um deles não existe.        Para determine:       Por definição, se , temos . Na observa-se que tende a quando tende a 1 pela esquerda. Portanto,               Por definição, se , temos . Na observa-se que tende a 0 quando tende a 1 pela direita. Portanto,      existe?   Os limites à esquerda e à direita de 1 são diferentes. Isso contraria regra de . Portanto, o limite de quando tende a 1 por ambos os lados não existe.      Seja . Encontre .    Observe que a formação de envolve módulo. Então, podemos transformar-lá em uma função definida em duas sentenças. Para isso, note que quando , daí . Por outro lado, quando , daí . Portanto, podemos escrever Dessa forma, quando , assume e quando , assume . Na observa-se que e que . Logo, segue do que             Limite de Função Composta   Sejam e duas funções tais que . Se e contínua em , então,     Calcule    Seja , para , então Como e é contínua em . Assim,      Calcule    Defina , logo com .  Quando , . Então,        Calcule o limite, se existir. Se o limite não existir, explique porquê.          Seja   Calcule e  Existe  Esboce o gráfico de    Seja   Calcule e  Existe  Esboce o gráfico de    Calcule         "
},
{
  "id": "def-laterais",
  "level": "2",
  "url": "section-10.html#def-laterais",
  "type": "Definição",
  "number": "2.2.1",
  "title": "",
  "body": "  Seja uma função real. Quando for possível aproximar de arbitrariamente de , os valores de , à medida que tende a por valores menores que , dizemos que o limite de pela esquerda , quando tende a é e indicamos por Similarmente, dizemos que o limite de pela direita , quando tende a é e denotamos por quando for possível aproximar de arbitrariamente de , os valores de , à medida que tende a por valores maiores que .   "
},
{
  "id": "ex-6",
  "level": "2",
  "url": "section-10.html#ex-6",
  "type": "Exemplo",
  "number": "2.2.2",
  "title": "",
  "body": " Dada a função determine:       Nota-se no gráfico de (ver ) que quando tende a pela esquerda, os valores de tendem a . Portanto, o limite pela esquerda é               Nota-se no gráfico de (ver ) que quando tende a pela direita, os valores de tendem a . Portanto, o limite pela direita é    "
},
{
  "id": "thm-laterais",
  "level": "2",
  "url": "section-10.html#thm-laterais",
  "type": "Teorema",
  "number": "2.2.4",
  "title": "",
  "body": "   se, e somente se, e .   "
},
{
  "id": "ex-7",
  "level": "2",
  "url": "section-10.html#ex-7",
  "type": "Exemplo",
  "number": "2.2.5",
  "title": "",
  "body": " Para determine:       Por definição, se , temos . Na observa-se que tende a quando tende a 1 pela esquerda. Portanto,               Por definição, se , temos . Na observa-se que tende a 0 quando tende a 1 pela direita. Portanto,      existe?   Os limites à esquerda e à direita de 1 são diferentes. Isso contraria regra de . Portanto, o limite de quando tende a 1 por ambos os lados não existe.   "
},
{
  "id": "ex-8",
  "level": "2",
  "url": "section-10.html#ex-8",
  "type": "Exemplo",
  "number": "2.2.7",
  "title": "",
  "body": "  Seja . Encontre .    Observe que a formação de envolve módulo. Então, podemos transformar-lá em uma função definida em duas sentenças. Para isso, note que quando , daí . Por outro lado, quando , daí . Portanto, podemos escrever Dessa forma, quando , assume e quando , assume . Na observa-se que e que . Logo, segue do que          "
},
{
  "id": "theorem-6",
  "level": "2",
  "url": "section-10.html#theorem-6",
  "type": "Teorema",
  "number": "2.2.9",
  "title": "",
  "body": " Sejam e duas funções tais que . Se e contínua em , então,   "
},
{
  "id": "example-35",
  "level": "2",
  "url": "section-10.html#example-35",
  "type": "Exemplo",
  "number": "2.2.10",
  "title": "",
  "body": " Calcule    Seja , para , então Como e é contínua em . Assim,    "
},
{
  "id": "example-36",
  "level": "2",
  "url": "section-10.html#example-36",
  "type": "Exemplo",
  "number": "2.2.11",
  "title": "",
  "body": " Calcule    Defina , logo com .  Quando , . Então,    "
},
{
  "id": "exercise-28",
  "level": "2",
  "url": "section-10.html#exercise-28",
  "type": "Exercício",
  "number": "2.2.3.1",
  "title": "",
  "body": "Calcule o limite, se existir. Se o limite não existir, explique porquê.         "
},
{
  "id": "exercise-29",
  "level": "2",
  "url": "section-10.html#exercise-29",
  "type": "Exercício",
  "number": "2.2.3.2",
  "title": "",
  "body": "Seja   Calcule e  Existe  Esboce o gráfico de   "
},
{
  "id": "exercise-30",
  "level": "2",
  "url": "section-10.html#exercise-30",
  "type": "Exercício",
  "number": "2.2.3.3",
  "title": "",
  "body": "Seja   Calcule e  Existe  Esboce o gráfico de   "
},
{
  "id": "exercise-31",
  "level": "2",
  "url": "section-10.html#exercise-31",
  "type": "Exercício",
  "number": "2.2.3.4",
  "title": "",
  "body": "Calcule       "
},
{
  "id": "section-11",
  "level": "1",
  "url": "section-11.html",
  "type": "Seção",
  "number": "2.3",
  "title": "O Teorema do Confronto",
  "body": " O Teorema do Confronto   O Teorema do Confronto    Seja um número real e funções tais que para todo próximo de , exceto possivelmente em , então     Teorema do Confronto  Seja um número real e funções tais que para todo próximo de , exceto possivelmente em . Então se teremos    Usando o teorema acima, podemos calcular o limite de funções com expressões complicadas.    Determine .    Já que para todo número , temos multiplicando por veremos que Como o  fornece     Outro exemplo com o teorema do confronto   Suponha que é função que satisfaz . Determine .    Já estamos supridos com uma desigualdade, então é provável que ela nos ajude. Devemos examinar os limites de cada lado para ver se eles são os mesmos: Então observamos que a função limitada entre duas funções que tende para quando . Portanto, pelo teorema do confronto teremos       Determine            Se para todo , encontre            O limite fundamental  O limite , é conhecido como o limite fundamental.    para .   Justificativa geométrica.      Note que as áreas dos triângulos e são Portanto, ou seja,          Pelo , para valem as desigualdades: . Dividindo por , obtemos Por outro lado, para , temos e aplicando o novamente, obtemos Assim, para todo , com , temos E pelo Teorema do Confronto, concluímos que      Calcule     Calcule            Se para todo calcule   Calcule os seguintes limites:      Calcule os seguintes limites:              "
},
{
  "id": "theorem-7",
  "level": "2",
  "url": "section-11.html#theorem-7",
  "type": "Teorema",
  "number": "2.3.1",
  "title": "",
  "body": "  Seja um número real e funções tais que para todo próximo de , exceto possivelmente em , então    "
},
{
  "id": "thm_squeeze",
  "level": "2",
  "url": "section-11.html#thm_squeeze",
  "type": "Teorema",
  "number": "2.3.2",
  "title": "Teorema do Confronto.",
  "body": "Teorema do Confronto  Seja um número real e funções tais que para todo próximo de , exceto possivelmente em . Então se teremos   "
},
{
  "id": "eg_1_4_8",
  "level": "2",
  "url": "section-11.html#eg_1_4_8",
  "type": "Exemplo",
  "number": "2.3.3",
  "title": "<span class=\"process-math\">\\(\\lim\\limits_{x \\to 0} x^2 \\sin(\\pi\/x) \\)<\/span>.",
  "body": "  Determine .    Já que para todo número , temos multiplicando por veremos que Como o  fornece    "
},
{
  "id": "eg_1_4_9",
  "level": "2",
  "url": "section-11.html#eg_1_4_9",
  "type": "Exemplo",
  "number": "2.3.4",
  "title": "Outro exemplo com o teorema do confronto.",
  "body": "Outro exemplo com o teorema do confronto   Suponha que é função que satisfaz . Determine .    Já estamos supridos com uma desigualdade, então é provável que ela nos ajude. Devemos examinar os limites de cada lado para ver se eles são os mesmos: Então observamos que a função limitada entre duas funções que tende para quando . Portanto, pelo teorema do confronto teremos    "
},
{
  "id": "example-39",
  "level": "2",
  "url": "section-11.html#example-39",
  "type": "Exemplo",
  "number": "2.3.5",
  "title": "",
  "body": "  Determine         "
},
{
  "id": "example-40",
  "level": "2",
  "url": "section-11.html#example-40",
  "type": "Exemplo",
  "number": "2.3.6",
  "title": "",
  "body": "  Se para todo , encontre         "
},
{
  "id": "teo-geo",
  "level": "2",
  "url": "section-11.html#teo-geo",
  "type": "Teorema",
  "number": "2.3.7",
  "title": "",
  "body": "  para .   Justificativa geométrica.      Note que as áreas dos triângulos e são Portanto, ou seja,    "
},
{
  "id": "theorem-10",
  "level": "2",
  "url": "section-11.html#theorem-10",
  "type": "Teorema",
  "number": "2.3.9",
  "title": "",
  "body": "     Pelo , para valem as desigualdades: . Dividindo por , obtemos Por outro lado, para , temos e aplicando o novamente, obtemos Assim, para todo , com , temos E pelo Teorema do Confronto, concluímos que    "
},
{
  "id": "example-41",
  "level": "2",
  "url": "section-11.html#example-41",
  "type": "Exemplo",
  "number": "2.3.10",
  "title": "",
  "body": " Calcule   "
},
{
  "id": "example-42",
  "level": "2",
  "url": "section-11.html#example-42",
  "type": "Exemplo",
  "number": "2.3.11",
  "title": "",
  "body": " Calcule        "
},
{
  "id": "exercise-32",
  "level": "2",
  "url": "section-11.html#exercise-32",
  "type": "Exercício",
  "number": "2.3.3.1",
  "title": "",
  "body": "Se para todo calcule  "
},
{
  "id": "exercise-33",
  "level": "2",
  "url": "section-11.html#exercise-33",
  "type": "Exercício",
  "number": "2.3.3.2",
  "title": "",
  "body": "Calcule os seguintes limites:     "
},
{
  "id": "exercise-34",
  "level": "2",
  "url": "section-11.html#exercise-34",
  "type": "Exercício",
  "number": "2.3.3.3",
  "title": "",
  "body": "Calcule os seguintes limites:            "
},
{
  "id": "section-12",
  "level": "1",
  "url": "section-12.html",
  "type": "Seção",
  "number": "2.4",
  "title": "Limites no Infinito",
  "body": " Limites no Infinito   Limites no Infinito  A definição de um limite no infinito tem uma certa semelhança com a definição de limites em um número real que vimos anteriormente, mas os detalhes são um pouco diferentes. Aqui vamos discutir sobre a distinção entre infinito positivo e negativo. À medida que se torna muito grande e positivo, ele se move em direção a , mas quando se torna muito grande e negativo, ele se move em direção a .  Limites no infinito (informal)  Escrevemos quando o valor da função se aproxima cada vez mais de à medida que tornamos cada vez maior e positivo.  Analogamente, escrevemos quando o valor da função se aproxima cada vez mais de à medida que tornamos cada vez maior e negativo.     Limites para e   Considere os gráficos de duas funções a seguir:     As linhas horizontais pontilhadas indicam o comportamento quando se torna muito grande. A função à esquerda tem limite quando e quando desde que a função se estabeleça para um determinado valor. Por outro lado, a função à direita não tem um limite quando já que a função fica cada vez maior.  Da mesma forma quando apresentamos limites com , vamos iniciar nosso estudo de limites infinitos apresentando alguns resultados bem simples.   Seja uma constante então os seguintes limites são verdadeiros    Novamente, esses limites interagem bem com a aritmética:  Aritmética dos limites infinitos  Sejam ser duas funções para as quais os limites exitem. Então os seguintes limites são verdadeiros   e para números reais  desde que e são definidas para todos . Os resultados análogos valem para os limites de .     Se for um número racional, então Se for um número racional tal que seja definida para todo , então      Observe que toma cuidado em evitar raízes quadradas de números negativos ou mesmo qualquer raiz par de um número negativo. Por isso precisamos que seja definida para todo , quando precisamos fazer . Por exemplo,   , mas não existe, pois não está definida para .  Por outro lado, está definida para valores negativos de e .     Nossa primeira aplicação de limites no infinito será examinar o comportamento de uma função racional para muito grande.    Determine o limite:     À medida que se torna muito grande, é o termo que dominará tanto no numerador quanto no denominador e os outros termos se tornam irrelevantes. Ou seja, para muito grande, é muito maior que ou qualquer constante. Então, retiramos essas partes dominantes colocando esses termos em evidência:        Determine .         A exemplo a seguir é um pouco mais complicado.  Limite envolvendo radicais   Encontre .    Vamos iniciar identificando o termo dominante no numerador e denominador e então colocá-lo em evidência. Veja que o denominador é dominado por . A maior contribuição para o numerador vem do termo dentro da raiz quadrada. Quando extraímos para fora da raiz quadrada, ele se torna , então o numerador é dominado por . Para mostrar isso mais explicitamente, reescrevemos o numerador Portanto, o limite quando é     Agora vamos pensar também no limite da mesma função do , mas agora com . Há algo sutil acontecendo por causa da raiz quadrada. Primeiro considere a função Apenas para mudar as coisas, vamos usar e em vez dos onipresentes e .    Avaliando isso em temos Teremos a mesma coisa para qualquer . Para qualquer , retorna exatamente . No entanto, agora considere a função em  ou seja, a função está retornando vezes o valor de entrada da função .  Isso ocorre porque quando definimos , definimos como a raiz quadrada positiva , ou seja, a função nunca pode retornar um número negativo. Assim, sendo mais cuidadoso Onde o é o valor absoluto de . Você talvez esteja acostumado a pensar em valor absoluto como remover o sinal de menos , mas isso não é muito correto. A apresenta o gráfico de uma função por partes definida por Portanto nossa função é de fato Então, quando avaliamos vale Agora estamos prontos para examinar o limite como em nosso exemplo anterior.          Outro limite envolvendo radicais continuação   Encontre .    Novamente vamos tentar descobrir qual é o maior termo no numerador e no denominador e evidenciá-lo. Como estamos tomando o limite como , devemos pensar em como um grande número negativo. O denominador é dominado por . A maior contribuição para o numerador vem do dentro da raiz quadrada. Quando movemos o para fora de uma raiz quadrada, ele se torna (já que estamos tomando o limite como ), então o numerador é dominado por . Assim, o numerador fica Assim o limite com é    Portanto, o limite como é quase o mesmo, mas ganhamos um sinal de menos. Este definitivamente não é o caso em geral você tem que pensar em cada exemplo separadamente.  A colabora com a afirmação acima.           Examine o limite quando e .     e .    Não tente adicionar e subtrair infinito   Determine o seguinte limite:     Neste caso, não podemos usar a aritmética dos limites para escrever isso como pois o limite não existe. Só podemos usar as regras de limite quando os limites existem. Ao invés disso, devemos fazer uma análise cuidadosa dos termos envolvidos.  Note que quando for muito grande, será muito maior que , então o termo dominará o termo . Então fatore e reescreva como Considere o que acontece com cada um dos fatores com :  Para grande, (isso é verdade para qualquer ). No limite com , se torna arbitrariamente grande e positivo, e deve ser maior ainda assim, segue que   Por outro lado, se aproxima cada vez mais de  podemos usar a aritmética dos limites para escrever isso como   Assim, o produto desses dois fatores será cada vez maior (e positivo) à medida que se move para o infinito. Daí temos .    Mas lembre-se que e não são números; a última equação no é uma abreviação (atalho) para não escrever a função se torna arbitrariamente grande .  Na seção anterior vimos que limites finitos e aritmética interagem funcionam bem. Isso nos permitiu calcular os limites de funções mais complicadas em termos de funções mais simples. Quando os limites das funções vão para mais ou menos infinito, ficamos um pouco mais restritos no que podemos deduzir. O próximo teorema apresenta alguns resultados referentes à soma, diferença, razão e produto de limites infinitos infelizmente em muitos casos não podemos fazer afirmações gerais e os resultados dependerão dos detalhes do problema em questão.  Aritmética de limites infinitos  Sejam constantes e funções definidas em um intervalo que contém (mas não precisam ser definidas em ), de modo que          indeterminado         .      indeterminado              Observe que por indeterminado queremos dizer que o limite pode ou não existir, mas não pode ser determinado a partir das informações fornecidas no teorema. Considere o exemplo a seguir.  Atenção com a aritmética de limites infinitos   Considere as funções a seguir: Tente calcular os limites com para , e .   O não pode nos ajudar a calcular essas diferenças, porque a diferença de dois limites infinitos pode ser mais infinito, menos infinito ou algum número finito, dependendo dos detalhes do problema. Para se convencer veja os casos a seguir:        Determine           Limites da diferença envolvendo radicais   Determine .    Com ambos os termos, e , se tornam arbitrariamente grandes. Logo, é difícil afirmar o que acontece com a diferença; nesta caso, vamos fazer algumas manipulações algébricas para reescrever a função. Iniciamos multiplicando o numerador e o denominador pelo conjugado radical:  Alguns chamas esta estratégia de multiplicação do conjugado radical tanto no numerado quanto no denominador de Multiplicação da expressão por 1    Agora note que o denominador da ultima expressão acima é positivamente grande à medida que . Logo, A figura abaixo ilustra este resultado.       Determine .    0       Calcule.                   Calcule.         Calcule.                "
},
{
  "id": "def_1_5_1",
  "level": "2",
  "url": "section-12.html#def_1_5_1",
  "type": "Definição",
  "number": "2.4.1",
  "title": "Limites no infinito (informal).",
  "body": "Limites no infinito (informal)  Escrevemos quando o valor da função se aproxima cada vez mais de à medida que tornamos cada vez maior e positivo.  Analogamente, escrevemos quando o valor da função se aproxima cada vez mais de à medida que tornamos cada vez maior e negativo.   "
},
{
  "id": "thm_basic_lim_inf",
  "level": "2",
  "url": "section-12.html#thm_basic_lim_inf",
  "type": "Teorema",
  "number": "2.4.2",
  "title": "",
  "body": " Seja uma constante então os seguintes limites são verdadeiros   "
},
{
  "id": "theorem-12",
  "level": "2",
  "url": "section-12.html#theorem-12",
  "type": "Teorema",
  "number": "2.4.3",
  "title": "Aritmética dos limites infinitos.",
  "body": "Aritmética dos limites infinitos  Sejam ser duas funções para as quais os limites exitem. Então os seguintes limites são verdadeiros   e para números reais  desde que e são definidas para todos . Os resultados análogos valem para os limites de .  "
},
{
  "id": "thm-limi-inf-potencia",
  "level": "2",
  "url": "section-12.html#thm-limi-inf-potencia",
  "type": "Teorema",
  "number": "2.4.4",
  "title": "",
  "body": "  Se for um número racional, então Se for um número racional tal que seja definida para todo , então    "
},
{
  "id": "observation-1",
  "level": "2",
  "url": "section-12.html#observation-1",
  "type": "Observação",
  "number": "2.4.5",
  "title": "",
  "body": " Observe que toma cuidado em evitar raízes quadradas de números negativos ou mesmo qualquer raiz par de um número negativo. Por isso precisamos que seja definida para todo , quando precisamos fazer . Por exemplo,   , mas não existe, pois não está definida para .  Por outro lado, está definida para valores negativos de e .    "
},
{
  "id": "eg_1_5_2",
  "level": "2",
  "url": "section-12.html#eg_1_5_2",
  "type": "Exemplo",
  "number": "2.4.6",
  "title": "<span class=\"process-math\">\\(\\displaystyle \\lim_{x \\to \\infty} \\frac{x^2-3x+4}{3x^2+8x+1}\\)<\/span>.",
  "body": "  Determine o limite:     À medida que se torna muito grande, é o termo que dominará tanto no numerador quanto no denominador e os outros termos se tornam irrelevantes. Ou seja, para muito grande, é muito maior que ou qualquer constante. Então, retiramos essas partes dominantes colocando esses termos em evidência:     "
},
{
  "id": "example-44",
  "level": "2",
  "url": "section-12.html#example-44",
  "type": "Exemplo",
  "number": "2.4.7",
  "title": "",
  "body": "  Determine .        "
},
{
  "id": "ex-2",
  "level": "2",
  "url": "section-12.html#ex-2",
  "type": "Exemplo",
  "number": "2.4.8",
  "title": "Limite envolvendo radicais.",
  "body": "Limite envolvendo radicais   Encontre .    Vamos iniciar identificando o termo dominante no numerador e denominador e então colocá-lo em evidência. Veja que o denominador é dominado por . A maior contribuição para o numerador vem do termo dentro da raiz quadrada. Quando extraímos para fora da raiz quadrada, ele se torna , então o numerador é dominado por . Para mostrar isso mais explicitamente, reescrevemos o numerador Portanto, o limite quando é    "
},
{
  "id": "fig-2",
  "level": "2",
  "url": "section-12.html#fig-2",
  "type": "Figura",
  "number": "2.4.9",
  "title": "",
  "body": "      "
},
{
  "id": "ex-3",
  "level": "2",
  "url": "section-12.html#ex-3",
  "type": "Exemplo",
  "number": "2.4.10",
  "title": "Outro limite envolvendo radicais — continuação.",
  "body": "Outro limite envolvendo radicais continuação   Encontre .    Novamente vamos tentar descobrir qual é o maior termo no numerador e no denominador e evidenciá-lo. Como estamos tomando o limite como , devemos pensar em como um grande número negativo. O denominador é dominado por . A maior contribuição para o numerador vem do dentro da raiz quadrada. Quando movemos o para fora de uma raiz quadrada, ele se torna (já que estamos tomando o limite como ), então o numerador é dominado por . Assim, o numerador fica Assim o limite com é   "
},
{
  "id": "fig-3",
  "level": "2",
  "url": "section-12.html#fig-3",
  "type": "Figura",
  "number": "2.4.11",
  "title": "",
  "body": "      "
},
{
  "id": "example-47",
  "level": "2",
  "url": "section-12.html#example-47",
  "type": "Exemplo",
  "number": "2.4.12",
  "title": "",
  "body": "  Examine o limite quando e .     e .   "
},
{
  "id": "ex-4",
  "level": "2",
  "url": "section-12.html#ex-4",
  "type": "Exemplo",
  "number": "2.4.13",
  "title": "Não tente adicionar e subtrair infinito.",
  "body": "Não tente adicionar e subtrair infinito   Determine o seguinte limite:     Neste caso, não podemos usar a aritmética dos limites para escrever isso como pois o limite não existe. Só podemos usar as regras de limite quando os limites existem. Ao invés disso, devemos fazer uma análise cuidadosa dos termos envolvidos.  Note que quando for muito grande, será muito maior que , então o termo dominará o termo . Então fatore e reescreva como Considere o que acontece com cada um dos fatores com :  Para grande, (isso é verdade para qualquer ). No limite com , se torna arbitrariamente grande e positivo, e deve ser maior ainda assim, segue que   Por outro lado, se aproxima cada vez mais de  podemos usar a aritmética dos limites para escrever isso como   Assim, o produto desses dois fatores será cada vez maior (e positivo) à medida que se move para o infinito. Daí temos .   "
},
{
  "id": "thm_arith_inf_lim",
  "level": "2",
  "url": "section-12.html#thm_arith_inf_lim",
  "type": "Teorema",
  "number": "2.4.14",
  "title": "Aritmética de limites infinitos.",
  "body": "Aritmética de limites infinitos  Sejam constantes e funções definidas em um intervalo que contém (mas não precisam ser definidas em ), de modo que          indeterminado         .      indeterminado             "
},
{
  "id": "ex-5",
  "level": "2",
  "url": "section-12.html#ex-5",
  "type": "Exemplo",
  "number": "2.4.15",
  "title": "Atenção com a aritmética de limites infinitos.",
  "body": "Atenção com a aritmética de limites infinitos   Considere as funções a seguir: Tente calcular os limites com para , e .   O não pode nos ajudar a calcular essas diferenças, porque a diferença de dois limites infinitos pode ser mais infinito, menos infinito ou algum número finito, dependendo dos detalhes do problema. Para se convencer veja os casos a seguir:     "
},
{
  "id": "example-50",
  "level": "2",
  "url": "section-12.html#example-50",
  "type": "Exemplo",
  "number": "2.4.16",
  "title": "",
  "body": "  Determine         "
},
{
  "id": "example-51",
  "level": "2",
  "url": "section-12.html#example-51",
  "type": "Exemplo",
  "number": "2.4.17",
  "title": "Limites da diferença envolvendo radicais.",
  "body": " Limites da diferença envolvendo radicais   Determine .    Com ambos os termos, e , se tornam arbitrariamente grandes. Logo, é difícil afirmar o que acontece com a diferença; nesta caso, vamos fazer algumas manipulações algébricas para reescrever a função. Iniciamos multiplicando o numerador e o denominador pelo conjugado radical:  Alguns chamas esta estratégia de multiplicação do conjugado radical tanto no numerado quanto no denominador de Multiplicação da expressão por 1    Agora note que o denominador da ultima expressão acima é positivamente grande à medida que . Logo, A figura abaixo ilustra este resultado.    "
},
{
  "id": "example-52",
  "level": "2",
  "url": "section-12.html#example-52",
  "type": "Exemplo",
  "number": "2.4.18",
  "title": "",
  "body": "  Determine .    0   "
},
{
  "id": "exercise-35",
  "level": "2",
  "url": "section-12.html#exercise-35",
  "type": "Exercício",
  "number": "2.4.2.1",
  "title": "",
  "body": "Calcule.                  "
},
{
  "id": "exercise-36",
  "level": "2",
  "url": "section-12.html#exercise-36",
  "type": "Exercício",
  "number": "2.4.2.2",
  "title": "",
  "body": "Calcule.        "
},
{
  "id": "exercise-37",
  "level": "2",
  "url": "section-12.html#exercise-37",
  "type": "Exercício",
  "number": "2.4.2.3",
  "title": "",
  "body": "Calcule.              "
},
{
  "id": "section-13",
  "level": "1",
  "url": "section-13.html",
  "type": "Seção",
  "number": "2.5",
  "title": "O número <span class=\"process-math\">\\(e\\)<\/span>",
  "body": " O número   A sequência com , é convergente e o número é definido como    A demonstração consiste em provar que a sequência é crescente e que é limitada, ou seja, ela converge para um valor maior que 2 e menor que 3.  Para ver uma demonstração veja a página de           Para mostrar este resultado, usaremos o , ou seja, vamos usar que Note que, para cada , existe , tal que . Observe que Portanto, Como e A equação é equivalente a Pelo Teorema do Confronto, como concluímos que      Mostre que    Defina , daí Note que . Portanto,      Mostre que        item a) Defina . Assim, . Portanto,    item b) Defina . Assim, . Portanto,      Mostre que    Defina , logo . Portanto Note que . Assim, pelo ,       Calcule            "
},
{
  "id": "teo-exp01",
  "level": "2",
  "url": "section-13.html#teo-exp01",
  "type": "Teorema",
  "number": "2.5.1",
  "title": "",
  "body": " A sequência com , é convergente e o número é definido como    A demonstração consiste em provar que a sequência é crescente e que é limitada, ou seja, ela converge para um valor maior que 2 e menor que 3.  Para ver uma demonstração veja a página de    "
},
{
  "id": "theorem-16",
  "level": "2",
  "url": "section-13.html#theorem-16",
  "type": "Teorema",
  "number": "2.5.2",
  "title": "",
  "body": "     Para mostrar este resultado, usaremos o , ou seja, vamos usar que Note que, para cada , existe , tal que . Observe que Portanto, Como e A equação é equivalente a Pelo Teorema do Confronto, como concluímos que    "
},
{
  "id": "example-53",
  "level": "2",
  "url": "section-13.html#example-53",
  "type": "Exemplo",
  "number": "2.5.3",
  "title": "",
  "body": " Mostre que    Defina , daí Note que . Portanto,    "
},
{
  "id": "ex-exp",
  "level": "2",
  "url": "section-13.html#ex-exp",
  "type": "Exemplo",
  "number": "2.5.4",
  "title": "",
  "body": " Mostre que        item a) Defina . Assim, . Portanto,    item b) Defina . Assim, . Portanto,    "
},
{
  "id": "example-55",
  "level": "2",
  "url": "section-13.html#example-55",
  "type": "Exemplo",
  "number": "2.5.5",
  "title": "",
  "body": " Mostre que    Defina , logo . Portanto Note que . Assim, pelo ,    "
},
{
  "id": "exercise-38",
  "level": "2",
  "url": "section-13.html#exercise-38",
  "type": "Exercício",
  "number": "2.5.1",
  "title": "",
  "body": "Calcule          "
},
{
  "id": "section-14",
  "level": "1",
  "url": "section-14.html",
  "type": "Seção",
  "number": "3.1",
  "title": "Derivadas: Conceito e Interpretação Geométrica",
  "body": " Derivadas: Conceito e Interpretação Geométrica   O conceito de derivada está relacionado ao conceito de reta tangente ao gráfico de uma função .   Antes de definir a reta tangente ao gráfico de uma função no ponto , vamos escrever a equação da reta , que passa pelos pontos e .       Chama-se coeficiente angular de uma reta  de inclinação , o número tal que .    Se é uma reta não-vertical que passa pelo ponto e tem coeficiente angular , então uma equação de é Tal equação é denominada equação fundamental da reta .     O coeficiente angular da reta , que passa pelos pontos e é dado por:       E a equação da reta que passa por e é dada por     A reta tangente ao gráfico de é obtida fazendo tender a , na equação da reta :        Sejam uma função e um ponto do domínio de . O limite quando existe e é finito, denomina-se derivada de em e é indicada por . Assim,   Se admite derivada em , então diremos que é diferenciável em . A função é diferenciável em um intervalo aberto (ou ou ou ) se for diferenciável em cada ponto do intervalo.     Segue da definição de limites que    A reta tangente ao gráfico de , no ponto , é dada por      Seja .  Calcule a derivada de no ponto  Encontre a equação da reta tangente ao gráfico de no ponto .       Mostre que não é derivável em .   Calcule         A Derivada como uma Função   Seja , calcule .       Seja , calcule .       Seja , encontre uma fórmula para .      Calcule pela definição (através do limite), nos seguintes casos;         Para cada item da questão 1, determine a equação da reta tangente ao gráfico de no ponto .   "
},
{
  "id": "fig-permuta",
  "level": "2",
  "url": "section-14.html#fig-permuta",
  "type": "Figura",
  "number": "3.1.1",
  "title": "",
  "body": "   "
},
{
  "id": "definition-38",
  "level": "2",
  "url": "section-14.html#definition-38",
  "type": "Definição",
  "number": "3.1.2",
  "title": "",
  "body": " Chama-se coeficiente angular de uma reta  de inclinação , o número tal que .  "
},
{
  "id": "theorem-17",
  "level": "2",
  "url": "section-14.html#theorem-17",
  "type": "Teorema",
  "number": "3.1.3",
  "title": "",
  "body": " Se é uma reta não-vertical que passa pelo ponto e tem coeficiente angular , então uma equação de é Tal equação é denominada equação fundamental da reta .  "
},
{
  "id": "remark-20",
  "level": "2",
  "url": "section-14.html#remark-20",
  "type": "Nota",
  "number": "3.1.4",
  "title": "",
  "body": " O coeficiente angular da reta , que passa pelos pontos e é dado por:       E a equação da reta que passa por e é dada por   "
},
{
  "id": "definition-39",
  "level": "2",
  "url": "section-14.html#definition-39",
  "type": "Definição",
  "number": "3.1.6",
  "title": "",
  "body": " A reta tangente ao gráfico de é obtida fazendo tender a , na equação da reta :      "
},
{
  "id": "definition-40",
  "level": "2",
  "url": "section-14.html#definition-40",
  "type": "Definição",
  "number": "3.1.8",
  "title": "",
  "body": " Sejam uma função e um ponto do domínio de . O limite quando existe e é finito, denomina-se derivada de em e é indicada por . Assim,   Se admite derivada em , então diremos que é diferenciável em . A função é diferenciável em um intervalo aberto (ou ou ou ) se for diferenciável em cada ponto do intervalo.  "
},
{
  "id": "remark-21",
  "level": "2",
  "url": "section-14.html#remark-21",
  "type": "Nota",
  "number": "3.1.9",
  "title": "",
  "body": " Segue da definição de limites que    A reta tangente ao gráfico de , no ponto , é dada por    "
},
{
  "id": "example-56",
  "level": "2",
  "url": "section-14.html#example-56",
  "type": "Exemplo",
  "number": "3.1.10",
  "title": "",
  "body": " Seja .  Calcule a derivada de no ponto  Encontre a equação da reta tangente ao gráfico de no ponto .    "
},
{
  "id": "example-57",
  "level": "2",
  "url": "section-14.html#example-57",
  "type": "Exemplo",
  "number": "3.1.11",
  "title": "",
  "body": " Mostre que não é derivável em .   Calcule       "
},
{
  "id": "example-58",
  "level": "2",
  "url": "section-14.html#example-58",
  "type": "Exemplo",
  "number": "3.1.12",
  "title": "",
  "body": " Seja , calcule .     "
},
{
  "id": "example-59",
  "level": "2",
  "url": "section-14.html#example-59",
  "type": "Exemplo",
  "number": "3.1.13",
  "title": "",
  "body": " Seja , calcule .     "
},
{
  "id": "example-60",
  "level": "2",
  "url": "section-14.html#example-60",
  "type": "Exemplo",
  "number": "3.1.14",
  "title": "",
  "body": " Seja , encontre uma fórmula para .  "
},
{
  "id": "exercise-39",
  "level": "2",
  "url": "section-14.html#exercise-39",
  "type": "Exercício",
  "number": "3.1.2.1",
  "title": "",
  "body": "Calcule pela definição (através do limite), nos seguintes casos;        "
},
{
  "id": "exercise-40",
  "level": "2",
  "url": "section-14.html#exercise-40",
  "type": "Exercício",
  "number": "3.1.2.2",
  "title": "",
  "body": "Para cada item da questão 1, determine a equação da reta tangente ao gráfico de no ponto . "
},
{
  "id": "section-15",
  "level": "1",
  "url": "section-15.html",
  "type": "Seção",
  "number": "3.2",
  "title": "Derivadas das Funções Elementares",
  "body": " Derivadas das Funções Elementares   Derivadas das Funções e   Seja um natural. São válidas as fórmulas de derivação:  .  , .  , na qual se for par e se for ímpar .     item a)  (faça a mudança de variável ). Logo,   item b)    item c)  Fazendo e obtemos: Assim, para e no domínio de , temos      Seja , calcule.  ;  .          Seja .  Calcule ;  Determine a equação da reta tangente ao gráfico de no ponto de abscissa . (ou seja, )          Calcule sendo.  ;  ;  .            Derivadas das Funções e   São válidas as fórmulas de derivação.  .  .      item a)     item b)  Fazendo a mudança , ficamos com      Seja , na qual e é um número real. Mostre que .    Calcule .          Seja , na qual e é um número real. Mostre que .    Calcule .           Derivadas das Funções Trigonométricas   São válidas as fórmulas de derivação.            item a)     item b)    Os itens c), d), e), f) ficam como exercício, depois que for visto o Teorema da derivada da soma , do produto e do quociente de funções .     Determine a equação da reta tangente ao gráfico de no ponto de abscissa .       Determine a equação da reta tangente ao gráfico de no ponto de abscissa .         Usando que , calcule a derivada das funções, nos seguintes casos;          Dica: Observe que e use isso nos casos , , etc.   "
},
{
  "id": "theorem-18",
  "level": "2",
  "url": "section-15.html#theorem-18",
  "type": "Teorema",
  "number": "3.2.1",
  "title": "",
  "body": " Seja um natural. São válidas as fórmulas de derivação:  .  , .  , na qual se for par e se for ímpar .     item a)  (faça a mudança de variável ). Logo,   item b)    item c)  Fazendo e obtemos: Assim, para e no domínio de , temos    "
},
{
  "id": "example-61",
  "level": "2",
  "url": "section-15.html#example-61",
  "type": "Exemplo",
  "number": "3.2.2",
  "title": "",
  "body": " Seja , calcule.  ;  .        "
},
{
  "id": "example-62",
  "level": "2",
  "url": "section-15.html#example-62",
  "type": "Exemplo",
  "number": "3.2.3",
  "title": "",
  "body": " Seja .  Calcule ;  Determine a equação da reta tangente ao gráfico de no ponto de abscissa . (ou seja, )        "
},
{
  "id": "example-63",
  "level": "2",
  "url": "section-15.html#example-63",
  "type": "Exemplo",
  "number": "3.2.4",
  "title": "",
  "body": " Calcule sendo.  ;  ;  .         "
},
{
  "id": "theorem-19",
  "level": "2",
  "url": "section-15.html#theorem-19",
  "type": "Teorema",
  "number": "3.2.5",
  "title": "",
  "body": " São válidas as fórmulas de derivação.  .  .      item a)     item b)  Fazendo a mudança , ficamos com    "
},
{
  "id": "example-64",
  "level": "2",
  "url": "section-15.html#example-64",
  "type": "Exemplo",
  "number": "3.2.6",
  "title": "",
  "body": " Seja , na qual e é um número real. Mostre que .  "
},
{
  "id": "example-65",
  "level": "2",
  "url": "section-15.html#example-65",
  "type": "Exemplo",
  "number": "3.2.7",
  "title": "",
  "body": " Calcule .        "
},
{
  "id": "example-66",
  "level": "2",
  "url": "section-15.html#example-66",
  "type": "Exemplo",
  "number": "3.2.8",
  "title": "",
  "body": " Seja , na qual e é um número real. Mostre que .  "
},
{
  "id": "example-67",
  "level": "2",
  "url": "section-15.html#example-67",
  "type": "Exemplo",
  "number": "3.2.9",
  "title": "",
  "body": " Calcule .        "
},
{
  "id": "theorem-20",
  "level": "2",
  "url": "section-15.html#theorem-20",
  "type": "Teorema",
  "number": "3.2.10",
  "title": "",
  "body": " São válidas as fórmulas de derivação.            item a)     item b)    Os itens c), d), e), f) ficam como exercício, depois que for visto o Teorema da derivada da soma , do produto e do quociente de funções .   "
},
{
  "id": "example-68",
  "level": "2",
  "url": "section-15.html#example-68",
  "type": "Exemplo",
  "number": "3.2.11",
  "title": "",
  "body": " Determine a equação da reta tangente ao gráfico de no ponto de abscissa .     "
},
{
  "id": "example-69",
  "level": "2",
  "url": "section-15.html#example-69",
  "type": "Exemplo",
  "number": "3.2.12",
  "title": "",
  "body": " Determine a equação da reta tangente ao gráfico de no ponto de abscissa .     "
},
{
  "id": "exercise-41",
  "level": "2",
  "url": "section-15.html#exercise-41",
  "type": "Exercício",
  "number": "3.2.4.1",
  "title": "",
  "body": "Usando que , calcule a derivada das funções, nos seguintes casos;          Dica: Observe que e use isso nos casos , , etc. "
},
{
  "id": "section-16",
  "level": "1",
  "url": "section-16.html",
  "type": "Seção",
  "number": "3.3",
  "title": "Derivabilidade e Continuidade, Regras de Derivação",
  "body": " Derivabilidade e Continuidade, Regras de Derivação   Derivabilidade e Continuidade   Já vimos que a função não é derivável em , entretanto esta função é contínua em , o que nos mostra que uma função pode ser contínua em um ponto sem ser derivável neste ponto.  Desse modo, continuidade não implica diferenciabilidade. Entretanto, diferenciabilidade implica continuidade.    Se for diferenciável em , então é contínua em .   Para demonstrar o teorema, basta mostrar que  Observe que      Segue do Teorema que, se não for contínua em , então não poderá ser derivável em .    A função, é derivável em ? Por quê?       Considere a função,   é diferenciável em ?  é contínua em ?          Regras de Derivação   Sejam e deriváveis em e seja uma constante. Então     Se , então      item a)     item b)     item c)     item d)       Calcule .               Mostre as regras de derivação:        Considere a função definida por partes dada por:   é contínua no ponto  é diferenciável no ponto    Considere a função definida por partes dada por:   é contínua no ponto  é diferenciável no ponto    Considere a função definida por partes dada por:   é contínua no ponto  é diferenciável no ponto    Use as regras de derivação para calcular nos seguinte casos:                    "
},
{
  "id": "remark-22",
  "level": "2",
  "url": "section-16.html#remark-22",
  "type": "Nota",
  "number": "3.3.1",
  "title": "",
  "body": " Já vimos que a função não é derivável em , entretanto esta função é contínua em , o que nos mostra que uma função pode ser contínua em um ponto sem ser derivável neste ponto.  Desse modo, continuidade não implica diferenciabilidade. Entretanto, diferenciabilidade implica continuidade.  "
},
{
  "id": "theorem-21",
  "level": "2",
  "url": "section-16.html#theorem-21",
  "type": "Teorema",
  "number": "3.3.2",
  "title": "",
  "body": " Se for diferenciável em , então é contínua em .   Para demonstrar o teorema, basta mostrar que  Observe que    "
},
{
  "id": "remark-23",
  "level": "2",
  "url": "section-16.html#remark-23",
  "type": "Nota",
  "number": "3.3.3",
  "title": "",
  "body": " Segue do Teorema que, se não for contínua em , então não poderá ser derivável em .  "
},
{
  "id": "example-70",
  "level": "2",
  "url": "section-16.html#example-70",
  "type": "Exemplo",
  "number": "3.3.4",
  "title": "",
  "body": " A função, é derivável em ? Por quê?     "
},
{
  "id": "example-71",
  "level": "2",
  "url": "section-16.html#example-71",
  "type": "Exemplo",
  "number": "3.3.5",
  "title": "",
  "body": " Considere a função,   é diferenciável em ?  é contínua em ?       "
},
{
  "id": "theorem-22",
  "level": "2",
  "url": "section-16.html#theorem-22",
  "type": "Teorema",
  "number": "3.3.6",
  "title": "",
  "body": " Sejam e deriváveis em e seja uma constante. Então     Se , então      item a)     item b)     item c)     item d)     "
},
{
  "id": "example-72",
  "level": "2",
  "url": "section-16.html#example-72",
  "type": "Exemplo",
  "number": "3.3.7",
  "title": "",
  "body": " Calcule .           "
},
{
  "id": "exercise-42",
  "level": "2",
  "url": "section-16.html#exercise-42",
  "type": "Exercício",
  "number": "3.3.3.1",
  "title": "",
  "body": "Mostre as regras de derivação:       "
},
{
  "id": "exercise-43",
  "level": "2",
  "url": "section-16.html#exercise-43",
  "type": "Exercício",
  "number": "3.3.3.2",
  "title": "",
  "body": "Considere a função definida por partes dada por:   é contínua no ponto  é diferenciável no ponto   "
},
{
  "id": "exercise-44",
  "level": "2",
  "url": "section-16.html#exercise-44",
  "type": "Exercício",
  "number": "3.3.3.3",
  "title": "",
  "body": "Considere a função definida por partes dada por:   é contínua no ponto  é diferenciável no ponto   "
},
{
  "id": "exercise-45",
  "level": "2",
  "url": "section-16.html#exercise-45",
  "type": "Exercício",
  "number": "3.3.3.4",
  "title": "",
  "body": "Considere a função definida por partes dada por:   é contínua no ponto  é diferenciável no ponto   "
},
{
  "id": "exercise-46",
  "level": "2",
  "url": "section-16.html#exercise-46",
  "type": "Exercício",
  "number": "3.3.3.5",
  "title": "",
  "body": "Use as regras de derivação para calcular nos seguinte casos:                  "
},
{
  "id": "section-17",
  "level": "1",
  "url": "section-17.html",
  "type": "Seção",
  "number": "3.4",
  "title": "Derivada da Função Composta, Derivada de Função Implícita e Inversa",
  "body": " Derivada da Função Composta, Derivada de Função Implícita e Inversa   Notação de Leibniz   Seja . Fazendo , temos       A notação é usada para indicar .  Na notação de Leibniz, a derivada de , em é indicada por .     Derivada da Função Composta   (Regra da Cadeia) Sejam e duas funções deriváveis, com , então a composta é derivável e vale a regra da cadeia:    Supondo . Por hipótese e são deriváveis, e portanto contínuas, quando , e a igualdade implica na existência de . Portanto é derivável. Além disso,      Calcule , sendo          Seja uma função derivável e seja . Calcule supondo .    Seja . Verifique que      Derivada de Função Dada Implicitamente   Uma função está escrita na forma explícita quando a variável está de uma lado da igualdade e do outro lado os termos em . Caso contrário, a função está escrita na forma implícita .    Função na forma explícita. , com , dada por: Forma implícita da função:     Calcule a derivada da função .    .     Calcule a função na forma implícita: .   Para derivar a função na forma implícita, a função deve ser vista como função de , ou seja, como , assim: E aplicamos as regras da soma e do produto:       Como , substituindo em , temos:      Expresse em termos de e de , na qual é uma função diferenciável dada implicitamente pela equação        a)    b)    c)      Podemos utilizar o SageMath para calcular derivada de função dada implicitamente. Para a equação , use o código a seguir     Derivada da Função Inversa   Seja uma função inversível com inversa . Se é derivável em um ponto e , então sua inversa é também derivável em . Além disso:    Como é inversível e derivável em , com , sabemos que e Como derivando esta última identidade em relação a e usando a regra da cadeia, obtemos: Portanto,      Seja uma função definida por Encontre a derivada de no ponto .   Como , temos que é uma função crescente, portanto é sobrejetiva. Dessa forma, como , temos      Calcule , com .   Observe que é contínua e é a inversa de , . Então e Derivando a igualdade: , obtemos Usando a Igualdade , obtemos Sabemos que Para , temos Portanto, Substituindo em temos      Determine a derivada.          Para cada função determine e tais que . Depois use a regra da cadeia para calcular a derivada de .             Encontre a derivada das seguintes funções.                        Expresse em termos de e , onde é uma função diferenciável dada implicitamente pela equação                           Encontre a derivada da função. Simplifique onde possível.             "
},
{
  "id": "remark-24",
  "level": "2",
  "url": "section-17.html#remark-24",
  "type": "Nota",
  "number": "3.4.1",
  "title": "",
  "body": " Seja . Fazendo , temos       A notação é usada para indicar .  Na notação de Leibniz, a derivada de , em é indicada por .  "
},
{
  "id": "theorem-23",
  "level": "2",
  "url": "section-17.html#theorem-23",
  "type": "Teorema",
  "number": "3.4.3",
  "title": "",
  "body": " (Regra da Cadeia) Sejam e duas funções deriváveis, com , então a composta é derivável e vale a regra da cadeia:    Supondo . Por hipótese e são deriváveis, e portanto contínuas, quando , e a igualdade implica na existência de . Portanto é derivável. Além disso,    "
},
{
  "id": "example-73",
  "level": "2",
  "url": "section-17.html#example-73",
  "type": "Exemplo",
  "number": "3.4.4",
  "title": "",
  "body": " Calcule , sendo        "
},
{
  "id": "example-74",
  "level": "2",
  "url": "section-17.html#example-74",
  "type": "Exemplo",
  "number": "3.4.5",
  "title": "",
  "body": " Seja uma função derivável e seja . Calcule supondo .  "
},
{
  "id": "example-75",
  "level": "2",
  "url": "section-17.html#example-75",
  "type": "Exemplo",
  "number": "3.4.6",
  "title": "",
  "body": " Seja . Verifique que   "
},
{
  "id": "definition-41",
  "level": "2",
  "url": "section-17.html#definition-41",
  "type": "Definição",
  "number": "3.4.7",
  "title": "",
  "body": " Uma função está escrita na forma explícita quando a variável está de uma lado da igualdade e do outro lado os termos em . Caso contrário, a função está escrita na forma implícita .  "
},
{
  "id": "example-76",
  "level": "2",
  "url": "section-17.html#example-76",
  "type": "Exemplo",
  "number": "3.4.8",
  "title": "",
  "body": " Função na forma explícita. , com , dada por: Forma implícita da função:   "
},
{
  "id": "example-77",
  "level": "2",
  "url": "section-17.html#example-77",
  "type": "Exemplo",
  "number": "3.4.9",
  "title": "",
  "body": " Calcule a derivada da função .    .   "
},
{
  "id": "example-78",
  "level": "2",
  "url": "section-17.html#example-78",
  "type": "Exemplo",
  "number": "3.4.10",
  "title": "",
  "body": " Calcule a função na forma implícita: .   Para derivar a função na forma implícita, a função deve ser vista como função de , ou seja, como , assim: E aplicamos as regras da soma e do produto:       Como , substituindo em , temos:    "
},
{
  "id": "example-79",
  "level": "2",
  "url": "section-17.html#example-79",
  "type": "Exemplo",
  "number": "3.4.11",
  "title": "",
  "body": " Expresse em termos de e de , na qual é uma função diferenciável dada implicitamente pela equação        a)    b)    c)     "
},
{
  "id": "technology-2",
  "level": "2",
  "url": "section-17.html#technology-2",
  "type": "Tecnologia",
  "number": "3.4.12",
  "title": "",
  "body": "Podemos utilizar o SageMath para calcular derivada de função dada implicitamente. Para a equação , use o código a seguir  "
},
{
  "id": "theorem-24",
  "level": "2",
  "url": "section-17.html#theorem-24",
  "type": "Teorema",
  "number": "3.4.13",
  "title": "",
  "body": " Seja uma função inversível com inversa . Se é derivável em um ponto e , então sua inversa é também derivável em . Além disso:    Como é inversível e derivável em , com , sabemos que e Como derivando esta última identidade em relação a e usando a regra da cadeia, obtemos: Portanto,    "
},
{
  "id": "example-80",
  "level": "2",
  "url": "section-17.html#example-80",
  "type": "Exemplo",
  "number": "3.4.14",
  "title": "",
  "body": " Seja uma função definida por Encontre a derivada de no ponto .   Como , temos que é uma função crescente, portanto é sobrejetiva. Dessa forma, como , temos    "
},
{
  "id": "example-81",
  "level": "2",
  "url": "section-17.html#example-81",
  "type": "Exemplo",
  "number": "3.4.15",
  "title": "",
  "body": " Calcule , com .   Observe que é contínua e é a inversa de , . Então e Derivando a igualdade: , obtemos Usando a Igualdade , obtemos Sabemos que Para , temos Portanto, Substituindo em temos    "
},
{
  "id": "example-82",
  "level": "2",
  "url": "section-17.html#example-82",
  "type": "Exemplo",
  "number": "3.4.16",
  "title": "",
  "body": " Determine a derivada.      "
},
{
  "id": "exercise-47",
  "level": "2",
  "url": "section-17.html#exercise-47",
  "type": "Exercício",
  "number": "3.4.5.1",
  "title": "",
  "body": "Para cada função determine e tais que . Depois use a regra da cadeia para calcular a derivada de .            "
},
{
  "id": "exercise-48",
  "level": "2",
  "url": "section-17.html#exercise-48",
  "type": "Exercício",
  "number": "3.4.5.2",
  "title": "",
  "body": "Encontre a derivada das seguintes funções.                       "
},
{
  "id": "exercise-49",
  "level": "2",
  "url": "section-17.html#exercise-49",
  "type": "Exercício",
  "number": "3.4.5.3",
  "title": "",
  "body": "Expresse em termos de e , onde é uma função diferenciável dada implicitamente pela equação                          "
},
{
  "id": "exercise-50",
  "level": "2",
  "url": "section-17.html#exercise-50",
  "type": "Exercício",
  "number": "3.4.5.4",
  "title": "",
  "body": "Encontre a derivada da função. Simplifique onde possível.           "
},
{
  "id": "section-18",
  "level": "1",
  "url": "section-18.html",
  "type": "Seção",
  "number": "4.1",
  "title": "Problemas de Taxa de Variação",
  "body": " Problemas de Taxa de Variação   Seja a função . A razão é a taxa média de variação de entre e . A derivada de , em é também denominada de taxa de variação de em .    O raio de uma esfera está variando, com o tempo, a uma taxa constante de (m\/s). Com que taxa está variando o volume da esfera no instante em que (m)?   Seja o instante em que . Queremos calcular . Sabemos que . Pela regra da cadeia Como , temos Para , , logo     Seja o instante em que . Queremos calcular . Sabemos que . Pela regra da cadeia Como e , temos Para , , logo      Suponhamos que uma partícula se desloca sobre o eixo de acordo com uma função de posição . A velocidade média da partícula entre os instantes e é definida pelo quociente é o deslocamento da partícula entre os instantes e .  A velocidade da partícula no instante é definida como sendo a derivada (caso exista) de em . Assim,   A aceleração no instante é definida como sendo a derivada em da função ; Assim,     Uma partícula move-se (de acordo com a animação abaixo) sobre o eixo de modo que no instante a posição é dada por , . Suponha dado em metros e em segundos.       Determine as posições ocupadas pela partícula nos instantes , , , , .  Qual a velocidade no instante ?  Qual a aceleração no instante ?  Esboce o gráfico da função de posição.          Uma partícula move-se sobre o eixo (de acordo com a animação abaixo) de modo que no instante a posição é dada por , .       Qual a velocidade no instante ?  Qual a aceleração no instante ?  Estude a variação de sinal de .  Esboce o gráfico da função de posição.          Um ponto move-se sobre a parábola (conforme a animação abaixo). Suponha que as coordenadas e de são deriváveis e que . Pergunta-se: em que ponto da parábola a velocidade da ordenada de é o triplo da velocidade da abscissa de ?       Como a velocidade da ordenada de é o triplo da velocidade da abscissa de , temos Usando derivação implícita em , obtemos: Substituindo em temos     Como a velocidade da ordenada de é o triplo da velocidade da abscissa de , temos Usando derivação implícita: Substituindo em temos      Uma partícula desloca-se sobre o eixo com função de posição .  Determine a velocidade no instante .  Qual a aceleração no instante ?  Esboce o gráfico da função de posição.   A posição de uma partícula que se desloca ao longo do eixo depende do tempo de acordo com a equação .  Determine a velocidade no instante .  Determine a aceleração no instante .    "
},
{
  "id": "definition-42",
  "level": "2",
  "url": "section-18.html#definition-42",
  "type": "Definição",
  "number": "4.1.1",
  "title": "",
  "body": " Seja a função . A razão é a taxa média de variação de entre e . A derivada de , em é também denominada de taxa de variação de em .  "
},
{
  "id": "example-83",
  "level": "2",
  "url": "section-18.html#example-83",
  "type": "Exemplo",
  "number": "4.1.2",
  "title": "",
  "body": " O raio de uma esfera está variando, com o tempo, a uma taxa constante de (m\/s). Com que taxa está variando o volume da esfera no instante em que (m)?   Seja o instante em que . Queremos calcular . Sabemos que . Pela regra da cadeia Como , temos Para , , logo     Seja o instante em que . Queremos calcular . Sabemos que . Pela regra da cadeia Como e , temos Para , , logo    "
},
{
  "id": "definition-43",
  "level": "2",
  "url": "section-18.html#definition-43",
  "type": "Definição",
  "number": "4.1.3",
  "title": "",
  "body": " Suponhamos que uma partícula se desloca sobre o eixo de acordo com uma função de posição . A velocidade média da partícula entre os instantes e é definida pelo quociente é o deslocamento da partícula entre os instantes e .  A velocidade da partícula no instante é definida como sendo a derivada (caso exista) de em . Assim,   A aceleração no instante é definida como sendo a derivada em da função ; Assim,   "
},
{
  "id": "example-84",
  "level": "2",
  "url": "section-18.html#example-84",
  "type": "Exemplo",
  "number": "4.1.4",
  "title": "",
  "body": " Uma partícula move-se (de acordo com a animação abaixo) sobre o eixo de modo que no instante a posição é dada por , . Suponha dado em metros e em segundos.       Determine as posições ocupadas pela partícula nos instantes , , , , .  Qual a velocidade no instante ?  Qual a aceleração no instante ?  Esboce o gráfico da função de posição.        "
},
{
  "id": "example-85",
  "level": "2",
  "url": "section-18.html#example-85",
  "type": "Exemplo",
  "number": "4.1.6",
  "title": "",
  "body": " Uma partícula move-se sobre o eixo (de acordo com a animação abaixo) de modo que no instante a posição é dada por , .       Qual a velocidade no instante ?  Qual a aceleração no instante ?  Estude a variação de sinal de .  Esboce o gráfico da função de posição.        "
},
{
  "id": "example-86",
  "level": "2",
  "url": "section-18.html#example-86",
  "type": "Exemplo",
  "number": "4.1.8",
  "title": "",
  "body": " Um ponto move-se sobre a parábola (conforme a animação abaixo). Suponha que as coordenadas e de são deriváveis e que . Pergunta-se: em que ponto da parábola a velocidade da ordenada de é o triplo da velocidade da abscissa de ?       Como a velocidade da ordenada de é o triplo da velocidade da abscissa de , temos Usando derivação implícita em , obtemos: Substituindo em temos     Como a velocidade da ordenada de é o triplo da velocidade da abscissa de , temos Usando derivação implícita: Substituindo em temos    "
},
{
  "id": "exercise-51",
  "level": "2",
  "url": "section-18.html#exercise-51",
  "type": "Exercício",
  "number": "4.1.1",
  "title": "",
  "body": "Uma partícula desloca-se sobre o eixo com função de posição .  Determine a velocidade no instante .  Qual a aceleração no instante ?  Esboce o gráfico da função de posição.  "
},
{
  "id": "exercise-52",
  "level": "2",
  "url": "section-18.html#exercise-52",
  "type": "Exercício",
  "number": "4.1.2",
  "title": "",
  "body": "A posição de uma partícula que se desloca ao longo do eixo depende do tempo de acordo com a equação .  Determine a velocidade no instante .  Determine a aceleração no instante .  "
},
{
  "id": "section-19",
  "level": "1",
  "url": "section-19.html",
  "type": "Seção",
  "number": "4.2",
  "title": "Regras de L'Hospital",
  "body": " Regras de L'Hospital    1ª Regra de L'Hospital: indeterminações do tipo .  Sejam e funções deriváveis em com . Se e se existir, então          Calcule    Defina e , como e são diferenciáveis em e , vamos verificar as outras hipóteses da 1ª Regra de L'Hospital. Como  Logo, Pela 1ª Regra de L'Hospital      Calcule    R. .       2ª Regra de L'Hospital: indeterminações do tipo .  Sejam e deriváveis em com . Se e se existir, então     Calcule    Defina e , como e são diferenciáveis em e , vamos verificar as outras hipóteses da 2ª Regra de L'Hospital. Como e Pela 2ª Regra de L'Hospital      Calcule    R. .      Calcule    O limite é da forma: podemos fazer uma modificação para adequar a forma do limite: Agora podemos tentar usar a 2ª Regra de L'Hospital.       Encontre o limite. Use a Regra de L'Hôspital onde for apropriado.                      "
},
{
  "id": "theorem-25",
  "level": "2",
  "url": "section-19.html#theorem-25",
  "type": "Teorema",
  "number": "4.2.1",
  "title": "",
  "body": "  1ª Regra de L'Hospital: indeterminações do tipo .  Sejam e funções deriváveis em com . Se e se existir, então        "
},
{
  "id": "example-87",
  "level": "2",
  "url": "section-19.html#example-87",
  "type": "Exemplo",
  "number": "4.2.2",
  "title": "",
  "body": " Calcule    Defina e , como e são diferenciáveis em e , vamos verificar as outras hipóteses da 1ª Regra de L'Hospital. Como  Logo, Pela 1ª Regra de L'Hospital    "
},
{
  "id": "example-88",
  "level": "2",
  "url": "section-19.html#example-88",
  "type": "Exemplo",
  "number": "4.2.3",
  "title": "",
  "body": " Calcule    R. .    "
},
{
  "id": "theorem-26",
  "level": "2",
  "url": "section-19.html#theorem-26",
  "type": "Teorema",
  "number": "4.2.4",
  "title": "",
  "body": "  2ª Regra de L'Hospital: indeterminações do tipo .  Sejam e deriváveis em com . Se e se existir, então   "
},
{
  "id": "example-89",
  "level": "2",
  "url": "section-19.html#example-89",
  "type": "Exemplo",
  "number": "4.2.5",
  "title": "",
  "body": " Calcule    Defina e , como e são diferenciáveis em e , vamos verificar as outras hipóteses da 2ª Regra de L'Hospital. Como e Pela 2ª Regra de L'Hospital    "
},
{
  "id": "example-90",
  "level": "2",
  "url": "section-19.html#example-90",
  "type": "Exemplo",
  "number": "4.2.6",
  "title": "",
  "body": " Calcule    R. .    "
},
{
  "id": "example-91",
  "level": "2",
  "url": "section-19.html#example-91",
  "type": "Exemplo",
  "number": "4.2.7",
  "title": "",
  "body": " Calcule    O limite é da forma: podemos fazer uma modificação para adequar a forma do limite: Agora podemos tentar usar a 2ª Regra de L'Hospital.    "
},
{
  "id": "exercise-53",
  "level": "2",
  "url": "section-19.html#exercise-53",
  "type": "Exercício",
  "number": "4.2.1",
  "title": "",
  "body": "Encontre o limite. Use a Regra de L'Hôspital onde for apropriado.                    "
},
{
  "id": "section-20",
  "level": "1",
  "url": "section-20.html",
  "type": "Seção",
  "number": "4.3",
  "title": "Teorema de Rolle e do Valor Médio",
  "body": " Teorema de Rolle e do Valor Médio   Teorema do Valor Médio    (Teorema de Weierstrass)  Seja uma função contínua no intervalo , então existem e em tais que    Veja págino 81 do livro .     Seja .         (Teorema de Rolle)  Seja uma função contínua no intervalo , derivável em com , então existirá pelo menos um tal que .        Caso 1:  é constante em . Neste caso em , logo, para qualquer , temos .   Caso 2:  não é constante em . Como é contínua em , pelo Teorema de Weierstrass ( ), existem e em , tais que e são, respectivamente, os valores mínimo e máximo de em . Como não é constante, temos e como , necessariamente ou pertence a . Daí, como a derivada nos pontos de mínimo e máximo são iguais a zero, temos ou . Portanto, existe em tal que .     Teorema do Valor Médio (TVM).  Se for contínua no intervalo e derivável em , então existirá pelo menos um em tal que    Considere a função , com , dada por Observe que e que Pelo Teorema de Rolle ( ), existe tal que Ou seja,      Seja . No intervalo , existem dois pontos e , nos quais,          Aplicações do Teorema do Valor Médio  Como consequência do Teorema do Valor Médio (TVM), temos o seguinte teorema:   Seja contínua no intervalo .  Se para todo , então será estritamente crescente em .  Se para todo , então será estritamente decrescente em .      item a) Já que , , sejam, , com . Vamos mostrar que Como satisfaz as hipóteses do TVM, existe tal que Como , pois e segue Portando, como a escolha de , foi arbitrária, o resultado segue.  item b) Este item é análogo ao anterior.     Determine os intervalos de crescimento e de decrescimento de .    e Como o gráfico de é uma parábola, sabemos que Como é contínua, pelo , temos      Determine os intervalos de crescimento e de decrescimento de          Sejam uma função derivável no intervalo e a reta tangente em ao gráfico de , .   Dizemos que tem concavidade para cima em se para quaisquer e em , com .      Dizemos que tem concavidade para baixo em se para quaisquer e em , com         Sejam uma função e , com contínua em . Dizemos que é ponto de inflexão de se existem , com , tal que as concavidades de em e em sejam opostas.    Seja uma função que admite derivada até 2ª ordem no intervalo .  Se para , então terá concavidade para cima em .  Se para , então terá concavidade para baixo em .     item a) Sejam para e arbitrário. Vamos mostrar que para todo , com , na qual, . Considere , logo pois . Como em , pelo , é estritamente crescente em . Então, Mais uma vez pelo , Como , temos para todo , . E como , temos      Estude a função com relação à concavidade e pontos de inflexão.           Estude a função com relação à concavidade e pontos de inflexão.        Determine os intervalos de crescimento e de decrescimento das funções e esboce o gráfico das funções:             Estude a função dada com relação à concavidade e pontos de inflexão.              "
},
{
  "id": "teo-weie",
  "level": "2",
  "url": "section-20.html#teo-weie",
  "type": "Teorema",
  "number": "4.3.1",
  "title": "",
  "body": "  (Teorema de Weierstrass)  Seja uma função contínua no intervalo , então existem e em tais que    Veja págino 81 do livro .   "
},
{
  "id": "example-92",
  "level": "2",
  "url": "section-20.html#example-92",
  "type": "Exemplo",
  "number": "4.3.2",
  "title": "",
  "body": " Seja .      "
},
{
  "id": "teo-rolle",
  "level": "2",
  "url": "section-20.html#teo-rolle",
  "type": "Teorema",
  "number": "4.3.4",
  "title": "",
  "body": "  (Teorema de Rolle)  Seja uma função contínua no intervalo , derivável em com , então existirá pelo menos um tal que .        Caso 1:  é constante em . Neste caso em , logo, para qualquer , temos .   Caso 2:  não é constante em . Como é contínua em , pelo Teorema de Weierstrass ( ), existem e em , tais que e são, respectivamente, os valores mínimo e máximo de em . Como não é constante, temos e como , necessariamente ou pertence a . Daí, como a derivada nos pontos de mínimo e máximo são iguais a zero, temos ou . Portanto, existe em tal que .   "
},
{
  "id": "theorem-29",
  "level": "2",
  "url": "section-20.html#theorem-29",
  "type": "Teorema",
  "number": "4.3.6",
  "title": "",
  "body": " Teorema do Valor Médio (TVM).  Se for contínua no intervalo e derivável em , então existirá pelo menos um em tal que    Considere a função , com , dada por Observe que e que Pelo Teorema de Rolle ( ), existe tal que Ou seja,    "
},
{
  "id": "example-93",
  "level": "2",
  "url": "section-20.html#example-93",
  "type": "Exemplo",
  "number": "4.3.7",
  "title": "",
  "body": " Seja . No intervalo , existem dois pontos e , nos quais,       "
},
{
  "id": "teo-aplica-tvm",
  "level": "2",
  "url": "section-20.html#teo-aplica-tvm",
  "type": "Teorema",
  "number": "4.3.9",
  "title": "",
  "body": " Seja contínua no intervalo .  Se para todo , então será estritamente crescente em .  Se para todo , então será estritamente decrescente em .      item a) Já que , , sejam, , com . Vamos mostrar que Como satisfaz as hipóteses do TVM, existe tal que Como , pois e segue Portando, como a escolha de , foi arbitrária, o resultado segue.  item b) Este item é análogo ao anterior.   "
},
{
  "id": "example-94",
  "level": "2",
  "url": "section-20.html#example-94",
  "type": "Exemplo",
  "number": "4.3.10",
  "title": "",
  "body": " Determine os intervalos de crescimento e de decrescimento de .    e Como o gráfico de é uma parábola, sabemos que Como é contínua, pelo , temos    "
},
{
  "id": "example-95",
  "level": "2",
  "url": "section-20.html#example-95",
  "type": "Exemplo",
  "number": "4.3.11",
  "title": "",
  "body": " Determine os intervalos de crescimento e de decrescimento de        "
},
{
  "id": "definition-44",
  "level": "2",
  "url": "section-20.html#definition-44",
  "type": "Definição",
  "number": "4.3.12",
  "title": "",
  "body": " Sejam uma função derivável no intervalo e a reta tangente em ao gráfico de , .   Dizemos que tem concavidade para cima em se para quaisquer e em , com .      Dizemos que tem concavidade para baixo em se para quaisquer e em , com       "
},
{
  "id": "definition-45",
  "level": "2",
  "url": "section-20.html#definition-45",
  "type": "Definição",
  "number": "4.3.13",
  "title": "",
  "body": " Sejam uma função e , com contínua em . Dizemos que é ponto de inflexão de se existem , com , tal que as concavidades de em e em sejam opostas.  "
},
{
  "id": "theorem-31",
  "level": "2",
  "url": "section-20.html#theorem-31",
  "type": "Teorema",
  "number": "4.3.14",
  "title": "",
  "body": " Seja uma função que admite derivada até 2ª ordem no intervalo .  Se para , então terá concavidade para cima em .  Se para , então terá concavidade para baixo em .     item a) Sejam para e arbitrário. Vamos mostrar que para todo , com , na qual, . Considere , logo pois . Como em , pelo , é estritamente crescente em . Então, Mais uma vez pelo , Como , temos para todo , . E como , temos    "
},
{
  "id": "example-96",
  "level": "2",
  "url": "section-20.html#example-96",
  "type": "Exemplo",
  "number": "4.3.15",
  "title": "",
  "body": " Estude a função com relação à concavidade e pontos de inflexão.         "
},
{
  "id": "example-97",
  "level": "2",
  "url": "section-20.html#example-97",
  "type": "Exemplo",
  "number": "4.3.16",
  "title": "",
  "body": " Estude a função com relação à concavidade e pontos de inflexão.     "
},
{
  "id": "exercise-54",
  "level": "2",
  "url": "section-20.html#exercise-54",
  "type": "Exercício",
  "number": "4.3.3.1",
  "title": "",
  "body": "Determine os intervalos de crescimento e de decrescimento das funções e esboce o gráfico das funções:            "
},
{
  "id": "exercise-55",
  "level": "2",
  "url": "section-20.html#exercise-55",
  "type": "Exercício",
  "number": "4.3.3.2",
  "title": "",
  "body": "Estude a função dada com relação à concavidade e pontos de inflexão.            "
},
{
  "id": "section-21",
  "level": "1",
  "url": "section-21.html",
  "type": "Seção",
  "number": "4.4",
  "title": "Esboço de Gráficos",
  "body": " Esboço de Gráficos   Roteiro Base para Esboço de Gráficos  Juntando todo o conteúdo do curso, elaboramos um roteiro para ajudar no esboço do gráfico de funções reais. Além desse roteiro, podemos adicionar o estudo de assíntotas ( ) e de máximos e mínimos ( ) para obter um esboço de melhor qualidade.   Roteiro para o esboço do gráfico de uma função    Verificar o domínio (maior subconjunto de que a função está bem definida)  Determinar os intervalos de crescimento e de decrescimento  Estudar a concavidade e encontrar os pontos de inflexão  Calcular os limites laterais de nos seguintes casos:   , mas é extremo de um dos intervalos que compõem .  , mas não é contínua em .    Calcular os limites para e  Determinar ou ter uma aproximação das raízes de .      Esboce o gráfico de    a) b) Intervalos de crescimento e de decrescimento. Logo c) Concavidade e pontos de inflexão Portanto, 1 é ponto de inflexão e d) Como é contínua em nós pulamos este item. e) Calcular os limites para e . e f) Determinar as raízes de . As raízes de são e .       Assíntotas  Seja uma função. Se existir uma reta tal que ou então diremos que é uma assíntota para . Se , temos uma assíntota horizontal, e se temos uma assíntota oblíqua.   Verifique que e são assíntotas oblíquias da função    Basta calcular os limites e Veja o gráfico usando o código a seguir.      Verifique que é assíntota horizontal da função    Basta calcular o limite Veja o gráfico usando o código a seguir.      Determine a assíntota e esboce o gráfico de    Observe que Como quando tende a ou , o gráfico de vai encostando na assíntota a) .  b) Intervalos de crescimento e de decrescimento.  e , obtendo a igualdade apenas em . Logo , para e portanto é estritamente crescente em . c) Concavidade e pontos de inflexão.  , portanto basta analisar . As raízes de são e . d) e) zero é a única raiz de .  f) é a única assíntota.  Veja o gráfico usando o código a seguir.       Máximos e Mínimos   Sejam uma função e    Dizemos que é o valor máximo local de ou que é um ponto de máximo local de se, existe um intervalo , tal que, para todo , temos .  Dizemos que é o valor mínimo local de ou que é um ponto de mínimo local de se, existe um intervalo , tal que, para todo , temos .     Seja uma função derivável em , na qual é um ponto interior do . Para que seja um ponto de máximo ou de mínimo local, é necessário que    Suponha, sem perda de generalidade, que é ponto de máximo local. Como é ponto interior do , existe , tal que Para , temos e , logo Para , temos e , logo Como é derivável, os limites laterais são iguais, portanto, .     Seja uma função real, dizemos que é um ponto crítico de se .    Sejam uma função que admite derivada de 2ª ordem contínua num intervalo aberto com .   e é ponto de mínimo local  e é ponto de máximo local     item a) Como é contínua em existe tal que e Portanto, é estritamente crescente neste intervalo, como , temos Assim, é estritamente crescente em e estritamente decrescente em . Portanto, é ponto de mínimo local.  O item b) é análogo.     Seja dada por . Determine os pontos críticos de e classifique-os.    Portanto Ou seja, Agora, vamos analisar os pontos críticos e .  Veja o gráfico usando o código a seguir.       Encontre os valores máximo e mínimo absolutos de no intervalo dado.  , em  , em  , em  , em  , em  , em  , em  , em  , em  , em   Construa o gráfico das funções dadas.                         Construa o gráfico das funções dadas.      "
},
{
  "id": "example-98",
  "level": "2",
  "url": "section-21.html#example-98",
  "type": "Exemplo",
  "number": "4.4.1",
  "title": "",
  "body": " Esboce o gráfico de    a) b) Intervalos de crescimento e de decrescimento. Logo c) Concavidade e pontos de inflexão Portanto, 1 é ponto de inflexão e d) Como é contínua em nós pulamos este item. e) Calcular os limites para e . e f) Determinar as raízes de . As raízes de são e .    "
},
{
  "id": "definition-46",
  "level": "2",
  "url": "section-21.html#definition-46",
  "type": "Definição",
  "number": "4.4.2",
  "title": "",
  "body": "Seja uma função. Se existir uma reta tal que ou então diremos que é uma assíntota para . Se , temos uma assíntota horizontal, e se temos uma assíntota oblíqua. "
},
{
  "id": "example-99",
  "level": "2",
  "url": "section-21.html#example-99",
  "type": "Exemplo",
  "number": "4.4.3",
  "title": "",
  "body": " Verifique que e são assíntotas oblíquias da função    Basta calcular os limites e Veja o gráfico usando o código a seguir.    "
},
{
  "id": "example-100",
  "level": "2",
  "url": "section-21.html#example-100",
  "type": "Exemplo",
  "number": "4.4.4",
  "title": "",
  "body": " Verifique que é assíntota horizontal da função    Basta calcular o limite Veja o gráfico usando o código a seguir.    "
},
{
  "id": "example-101",
  "level": "2",
  "url": "section-21.html#example-101",
  "type": "Exemplo",
  "number": "4.4.5",
  "title": "",
  "body": " Determine a assíntota e esboce o gráfico de    Observe que Como quando tende a ou , o gráfico de vai encostando na assíntota a) .  b) Intervalos de crescimento e de decrescimento.  e , obtendo a igualdade apenas em . Logo , para e portanto é estritamente crescente em . c) Concavidade e pontos de inflexão.  , portanto basta analisar . As raízes de são e . d) e) zero é a única raiz de .  f) é a única assíntota.  Veja o gráfico usando o código a seguir.    "
},
{
  "id": "definition-47",
  "level": "2",
  "url": "section-21.html#definition-47",
  "type": "Definição",
  "number": "4.4.6",
  "title": "",
  "body": " Sejam uma função e    Dizemos que é o valor máximo local de ou que é um ponto de máximo local de se, existe um intervalo , tal que, para todo , temos .  Dizemos que é o valor mínimo local de ou que é um ponto de mínimo local de se, existe um intervalo , tal que, para todo , temos .   "
},
{
  "id": "theorem-32",
  "level": "2",
  "url": "section-21.html#theorem-32",
  "type": "Teorema",
  "number": "4.4.7",
  "title": "",
  "body": " Seja uma função derivável em , na qual é um ponto interior do . Para que seja um ponto de máximo ou de mínimo local, é necessário que    Suponha, sem perda de generalidade, que é ponto de máximo local. Como é ponto interior do , existe , tal que Para , temos e , logo Para , temos e , logo Como é derivável, os limites laterais são iguais, portanto, .   "
},
{
  "id": "definition-48",
  "level": "2",
  "url": "section-21.html#definition-48",
  "type": "Definição",
  "number": "4.4.8",
  "title": "",
  "body": " Seja uma função real, dizemos que é um ponto crítico de se .  "
},
{
  "id": "theorem-33",
  "level": "2",
  "url": "section-21.html#theorem-33",
  "type": "Teorema",
  "number": "4.4.9",
  "title": "",
  "body": " Sejam uma função que admite derivada de 2ª ordem contínua num intervalo aberto com .   e é ponto de mínimo local  e é ponto de máximo local     item a) Como é contínua em existe tal que e Portanto, é estritamente crescente neste intervalo, como , temos Assim, é estritamente crescente em e estritamente decrescente em . Portanto, é ponto de mínimo local.  O item b) é análogo.   "
},
{
  "id": "example-102",
  "level": "2",
  "url": "section-21.html#example-102",
  "type": "Exemplo",
  "number": "4.4.10",
  "title": "",
  "body": " Seja dada por . Determine os pontos críticos de e classifique-os.    Portanto Ou seja, Agora, vamos analisar os pontos críticos e .  Veja o gráfico usando o código a seguir.    "
},
{
  "id": "exercise-56",
  "level": "2",
  "url": "section-21.html#exercise-56",
  "type": "Exercício",
  "number": "4.4.4.1",
  "title": "",
  "body": "Encontre os valores máximo e mínimo absolutos de no intervalo dado.  , em  , em  , em  , em  , em  , em  , em  , em  , em  , em  "
},
{
  "id": "exercise-57",
  "level": "2",
  "url": "section-21.html#exercise-57",
  "type": "Exercício",
  "number": "4.4.4.2",
  "title": "",
  "body": "Construa o gráfico das funções dadas.                        "
},
{
  "id": "exercise-58",
  "level": "2",
  "url": "section-21.html#exercise-58",
  "type": "Exercício",
  "number": "4.4.4.3",
  "title": "",
  "body": "Construa o gráfico das funções dadas.    "
},
{
  "id": "referencias",
  "level": "1",
  "url": "referencias.html",
  "type": "Referêcias",
  "number": "5",
  "title": "Referências Bibliográficas",
  "body": "    Referências Bibliográficas   Livros    Guidorizzi, Hamilton Luiz, Cálculo , volume 1, LTC, 5ª edição, 2001.    Lima, Elon Lages, Análise Real , volume 1, Projeto Euclides, 2008.    LIMA, Elon Lages et al., A matemática do ensino médio , volume 3, Coleção do Professor de Matemática, SBM, 7ª ed, 2016.    WAGNER, Eduardo; MORGADO, Augusto Cesar de O.; CARMO, M., Trigonometria e números complexos , Coleção do Professor de Matemática, SBM, 1992.  Artigos  "
},
{
  "id": "p-513",
  "level": "2",
  "url": "referencias.html#p-513",
  "type": "Parágrafo (with a defined term)",
  "number": "",
  "title": "",
  "body": "Livros "
},
{
  "id": "p-514",
  "level": "2",
  "url": "referencias.html#p-514",
  "type": "Parágrafo (with a defined term)",
  "number": "",
  "title": "",
  "body": "Artigos "
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
