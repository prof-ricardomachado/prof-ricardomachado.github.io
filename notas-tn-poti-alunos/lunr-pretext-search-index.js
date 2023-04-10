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
  "title": "Aula 01 - Divisibilidade I",
  "body": " Aula 01 - Divisibilidade I    (Algoritmo da Divisão)  Para quaisquer inteiros positivos e , existe um único par de inteiros não negativos tais que e . Os números e são chamados de quociente e resto, respectivamente, da divisão de por .          O teorema anterior admite um enunciado mais geral: Para quaisquer inteiros e , com , existe um único par de inteiros tais que . Por exemplo,     Abaixo temos um código em SageMath, no qual podemos trocar os valores de e nas linhas e , respectivamente. Ao clicar em Executar (Sage) obtemos o quociente e o resto na divisão de por .    (PTOM)  De modo geral, fixado um número natural , pode-se sempre escrever um número qualquer , de modo único, na forma , na qual são inteiros e .  Por exemplo, fixado um valor para , qualquer inteiro pode ser escrito em apenas uma das seguintes formas    (PTOM)  Dados dois números primos , dizemos que ele são primos gêmeos se . Prove que para cada par de primos gêmeos com , se , então deixa resto zero na divisão por .   Pela , só pode assumir uma das três formas: . Podemos analizar cada um dos casos.   Caso 1 ( ). Neste caso o número não seria primo, então este caso está descartado.   Caso 2 ( ). Neste caso, e não seria primo, o que é uma contradição.   Caso 3 ( ). Neste caso, que é múltiplo de e . Portanto, este é o único caso possível e o número sempre deixa resto zero na divisão por .     Encontre um número natural que, ao ser dividido por , deixa resto , ao ser dividido por deixa resto , e ao ser dividido por deixa resto .   Pelos dados do enunciado, Somando em cada igualdade, obtemos Portanto, é múltiplo de , e . Uma solução é , logo .  Outra resposta pode ser obtida calculando o menor múltiplo comum: . Outro valor válido para é .      Verifique que  Calcule o resto da Divisão de por 3.    item a)    item b)  Portanto, Ou seja, o resto é igual a .     No SageMath, o resto da divisão de por pode ser calculado da seguinte maneira:     Seja um número natural maior que zero. Qual o resto de na divisão por ?         Quantos números entre e (inclusive) são divisíveis por ? Ou seja, quando deixam resto zero na divisão por ?   Aplicando a divisão euclidiana, Isto significa que existem números divisíveis por entre e , pois ao escrever todos os números neste intervalo, o último que deixa resto zero será no número . Observe,     (Teorema dos Restos)  Se e deixam restos e na divisão por , respectivamente, então:   deixa o mesmo resto que na divisão por  deixa o mesmo resto que na divisão por .    Por hipótese   item a)    Aplicando a divisão euclidiana obtemos Substituindo em obtemos   item b)    Aplicando a divisão euclidiana, podemos escrever Substituindo em obtemos Como queríamos.     Qual o resto que o número deixa quando dividido por ?   Aplicando a divisão euclidiana, obtemos Aplicando o , o resto de na divisão por é o mesmo que o resto de na divisão por . Como Temos,      Qual o resto que o número deixa quando dividido por ?   Como o número deixa resto na divisão por , deixa o mesmo resto que na divisão por .     Qual o resto que o número deixa quando dividido por ?   Note que    deixa resto na divisão por , logo também deixa resto na divisão por 3;  deixa resto na divisão por .   Pelo , deixa o mesmo resto que na divisão por , ou seja, o resto é o mesmo que o resto de na divisão por .     Qual o resto de na divisão por ?   Dado um número , ele pode ser escrito em apenas uma das três formas: ou . Pelo , basta analisar os três possíveis restos na divisão de por .  Caso 1: :   Caso 2: :   Caso 3: :      Prove que, para cada natural, é divisível por .   Observe que Para cada número escrito no denominador, existe o número no numerador. Agrupando as frações com , sobrará todos os números ímpares de até . Ou seja,      Encontre todos os pares de inteiros positivos e tais que .   Note que quase pode ser escrito como um produto, pois no produto \"sobra\" uma constante: Como ao somar em ambos os membros da igualdade anterior, obtemos Como é o produto de dois primos ( ), então Temos apenas dois casos: e      (OBMEP 2013). Lucas pensou em um número, dividiu-o por e obteve resto . Se ele dividir o número em que pensou por , qual o resto que ele vai encontrar?   Note que e que , logo Portanto, o resto na divisão por é .     Encontre os inteiros que, na divisão por deixam um quociente igual ao resto.   Estamos procurando os números que podem ser escritos da seguinte maneira São apenas restos possíveis, podemos substituir esses valores em para obter os valores de .      Ao dividir o número inteiro por obtemos resto . Qual é o menor valor inteiro positivo de ?    Como é positivo, . Substituindo , obtemos      (OBM). O número de seis dígitos é um múltiplo de . Determine o valor do dígito .   Note que . Podemos escrever o número da seguinte maneira: Portanto, divide se, e somente se, divide . Ou seja, como possui dois diígitos e é menor que , temos a seguinte igualdade Então, .     Determinar os números que divididos por dão um resto igual ao quadrado do quociente correspondente.  (OCM 1985) Encontre o quociente da divisão de por   (OCM 1994) Seja um número onde o dígito \" \" aparece vezes. Determine o quociente e o resto da divisão de por .  Prove que, o número é múltiplo de .  Mostre que o número é múltiplo de .   Simulados Antigos  (2013) O algarismo das unidades do número é:   (2015) Paula iniciou um programa de ginástica no qual os dias de treino são separados por dois dias de descanso. Se o primeiro treino foi em uma segunda-feira, em qual dia da semana cairá o centésimo treino?   (2014 - Problema 2) No Pentágono abaixo, metros e metros. Uma formiguinha parte do vértice e caminha com velocidade constante de um metro por segundo ao longo de seus lados sempre no mesmo sentido. Em que ponto estará no segundo?     (2015 - Problema 2) Esmeralda rasgou uma folha em pedaços e, em seguida, pegou uma dessas partes e rasgou-a também em pedaços. Não satisfeita, pegou uma dessas últimas partes e rasgou também em pedaços. Qual dos números a seguir poderia ser o total de pedaços obtidos por Esmeralda no final?         "
},
{
  "id": "theorem-1",
  "level": "2",
  "url": "section-1.html#theorem-1",
  "type": "Teorema",
  "number": "1.1.1",
  "title": "(Algoritmo da Divisão).",
  "body": "(Algoritmo da Divisão)  Para quaisquer inteiros positivos e , existe um único par de inteiros não negativos tais que e . Os números e são chamados de quociente e resto, respectivamente, da divisão de por .  "
},
{
  "id": "example-1",
  "level": "2",
  "url": "section-1.html#example-1",
  "type": "Exemplo",
  "number": "1.1.2",
  "title": "",
  "body": "     "
},
{
  "id": "remark-1",
  "level": "2",
  "url": "section-1.html#remark-1",
  "type": "Nota",
  "number": "1.1.3",
  "title": "",
  "body": " O teorema anterior admite um enunciado mais geral: Para quaisquer inteiros e , com , existe um único par de inteiros tais que . Por exemplo,   "
},
{
  "id": "technology-1",
  "level": "2",
  "url": "section-1.html#technology-1",
  "type": "Tecnologia",
  "number": "1.1.4",
  "title": "",
  "body": " Abaixo temos um código em SageMath, no qual podemos trocar os valores de e nas linhas e , respectivamente. Ao clicar em Executar (Sage) obtemos o quociente e o resto na divisão de por .   "
},
{
  "id": "rem-001",
  "level": "2",
  "url": "section-1.html#rem-001",
  "type": "Nota",
  "number": "1.1.5",
  "title": "(PTOM).",
  "body": "(PTOM)  De modo geral, fixado um número natural , pode-se sempre escrever um número qualquer , de modo único, na forma , na qual são inteiros e .  Por exemplo, fixado um valor para , qualquer inteiro pode ser escrito em apenas uma das seguintes formas   "
},
{
  "id": "example-2",
  "level": "2",
  "url": "section-1.html#example-2",
  "type": "Exemplo",
  "number": "1.1.6",
  "title": "(PTOM).",
  "body": "(PTOM)  Dados dois números primos , dizemos que ele são primos gêmeos se . Prove que para cada par de primos gêmeos com , se , então deixa resto zero na divisão por .   Pela , só pode assumir uma das três formas: . Podemos analizar cada um dos casos.   Caso 1 ( ). Neste caso o número não seria primo, então este caso está descartado.   Caso 2 ( ). Neste caso, e não seria primo, o que é uma contradição.   Caso 3 ( ). Neste caso, que é múltiplo de e . Portanto, este é o único caso possível e o número sempre deixa resto zero na divisão por .   "
},
{
  "id": "example-3",
  "level": "2",
  "url": "section-1.html#example-3",
  "type": "Exemplo",
  "number": "1.1.7",
  "title": "",
  "body": " Encontre um número natural que, ao ser dividido por , deixa resto , ao ser dividido por deixa resto , e ao ser dividido por deixa resto .   Pelos dados do enunciado, Somando em cada igualdade, obtemos Portanto, é múltiplo de , e . Uma solução é , logo .  Outra resposta pode ser obtida calculando o menor múltiplo comum: . Outro valor válido para é .   "
},
{
  "id": "example-4",
  "level": "2",
  "url": "section-1.html#example-4",
  "type": "Exemplo",
  "number": "1.1.8",
  "title": "",
  "body": "  Verifique que  Calcule o resto da Divisão de por 3.    item a)    item b)  Portanto, Ou seja, o resto é igual a .   "
},
{
  "id": "technology-2",
  "level": "2",
  "url": "section-1.html#technology-2",
  "type": "Tecnologia",
  "number": "1.1.9",
  "title": "",
  "body": " No SageMath, o resto da divisão de por pode ser calculado da seguinte maneira:   "
},
{
  "id": "example-5",
  "level": "2",
  "url": "section-1.html#example-5",
  "type": "Exemplo",
  "number": "1.1.10",
  "title": "",
  "body": " Seja um número natural maior que zero. Qual o resto de na divisão por ?       "
},
{
  "id": "example-6",
  "level": "2",
  "url": "section-1.html#example-6",
  "type": "Exemplo",
  "number": "1.1.11",
  "title": "",
  "body": " Quantos números entre e (inclusive) são divisíveis por ? Ou seja, quando deixam resto zero na divisão por ?   Aplicando a divisão euclidiana, Isto significa que existem números divisíveis por entre e , pois ao escrever todos os números neste intervalo, o último que deixa resto zero será no número . Observe,    "
},
{
  "id": "teo-restos",
  "level": "2",
  "url": "section-1.html#teo-restos",
  "type": "Teorema",
  "number": "1.1.12",
  "title": "(Teorema dos Restos).",
  "body": "(Teorema dos Restos)  Se e deixam restos e na divisão por , respectivamente, então:   deixa o mesmo resto que na divisão por  deixa o mesmo resto que na divisão por .    Por hipótese   item a)    Aplicando a divisão euclidiana obtemos Substituindo em obtemos   item b)    Aplicando a divisão euclidiana, podemos escrever Substituindo em obtemos Como queríamos.   "
},
{
  "id": "example-7",
  "level": "2",
  "url": "section-1.html#example-7",
  "type": "Exemplo",
  "number": "1.1.13",
  "title": "",
  "body": " Qual o resto que o número deixa quando dividido por ?   Aplicando a divisão euclidiana, obtemos Aplicando o , o resto de na divisão por é o mesmo que o resto de na divisão por . Como Temos,    "
},
{
  "id": "example-8",
  "level": "2",
  "url": "section-1.html#example-8",
  "type": "Exemplo",
  "number": "1.1.14",
  "title": "",
  "body": " Qual o resto que o número deixa quando dividido por ?   Como o número deixa resto na divisão por , deixa o mesmo resto que na divisão por .   "
},
{
  "id": "example-9",
  "level": "2",
  "url": "section-1.html#example-9",
  "type": "Exemplo",
  "number": "1.1.15",
  "title": "",
  "body": " Qual o resto que o número deixa quando dividido por ?   Note que    deixa resto na divisão por , logo também deixa resto na divisão por 3;  deixa resto na divisão por .   Pelo , deixa o mesmo resto que na divisão por , ou seja, o resto é o mesmo que o resto de na divisão por .   "
},
{
  "id": "example-10",
  "level": "2",
  "url": "section-1.html#example-10",
  "type": "Exemplo",
  "number": "1.1.16",
  "title": "",
  "body": " Qual o resto de na divisão por ?   Dado um número , ele pode ser escrito em apenas uma das três formas: ou . Pelo , basta analisar os três possíveis restos na divisão de por .  Caso 1: :   Caso 2: :   Caso 3: :    "
},
{
  "id": "example-11",
  "level": "2",
  "url": "section-1.html#example-11",
  "type": "Exemplo",
  "number": "1.1.17",
  "title": "",
  "body": " Prove que, para cada natural, é divisível por .   Observe que Para cada número escrito no denominador, existe o número no numerador. Agrupando as frações com , sobrará todos os números ímpares de até . Ou seja,    "
},
{
  "id": "example-12",
  "level": "2",
  "url": "section-1.html#example-12",
  "type": "Exemplo",
  "number": "1.1.18",
  "title": "",
  "body": " Encontre todos os pares de inteiros positivos e tais que .   Note que quase pode ser escrito como um produto, pois no produto \"sobra\" uma constante: Como ao somar em ambos os membros da igualdade anterior, obtemos Como é o produto de dois primos ( ), então Temos apenas dois casos: e    "
},
{
  "id": "example-13",
  "level": "2",
  "url": "section-1.html#example-13",
  "type": "Exemplo",
  "number": "1.1.19",
  "title": "",
  "body": " (OBMEP 2013). Lucas pensou em um número, dividiu-o por e obteve resto . Se ele dividir o número em que pensou por , qual o resto que ele vai encontrar?   Note que e que , logo Portanto, o resto na divisão por é .   "
},
{
  "id": "example-14",
  "level": "2",
  "url": "section-1.html#example-14",
  "type": "Exemplo",
  "number": "1.1.20",
  "title": "",
  "body": " Encontre os inteiros que, na divisão por deixam um quociente igual ao resto.   Estamos procurando os números que podem ser escritos da seguinte maneira São apenas restos possíveis, podemos substituir esses valores em para obter os valores de .    "
},
{
  "id": "example-15",
  "level": "2",
  "url": "section-1.html#example-15",
  "type": "Exemplo",
  "number": "1.1.21",
  "title": "",
  "body": " Ao dividir o número inteiro por obtemos resto . Qual é o menor valor inteiro positivo de ?    Como é positivo, . Substituindo , obtemos    "
},
{
  "id": "example-16",
  "level": "2",
  "url": "section-1.html#example-16",
  "type": "Exemplo",
  "number": "1.1.22",
  "title": "",
  "body": " (OBM). O número de seis dígitos é um múltiplo de . Determine o valor do dígito .   Note que . Podemos escrever o número da seguinte maneira: Portanto, divide se, e somente se, divide . Ou seja, como possui dois diígitos e é menor que , temos a seguinte igualdade Então, .   "
},
{
  "id": "exercise-1",
  "level": "2",
  "url": "section-1.html#exercise-1",
  "type": "Exercício",
  "number": "1.1.1",
  "title": "",
  "body": "Determinar os números que divididos por dão um resto igual ao quadrado do quociente correspondente. "
},
{
  "id": "exercise-2",
  "level": "2",
  "url": "section-1.html#exercise-2",
  "type": "Exercício",
  "number": "1.1.2",
  "title": "(OCM 1985).",
  "body": "(OCM 1985) Encontre o quociente da divisão de por  "
},
{
  "id": "exercise-3",
  "level": "2",
  "url": "section-1.html#exercise-3",
  "type": "Exercício",
  "number": "1.1.3",
  "title": "(OCM 1994).",
  "body": "(OCM 1994) Seja um número onde o dígito \" \" aparece vezes. Determine o quociente e o resto da divisão de por . "
},
{
  "id": "exercise-4",
  "level": "2",
  "url": "section-1.html#exercise-4",
  "type": "Exercício",
  "number": "1.1.4",
  "title": "",
  "body": "Prove que, o número é múltiplo de . "
},
{
  "id": "exercise-5",
  "level": "2",
  "url": "section-1.html#exercise-5",
  "type": "Exercício",
  "number": "1.1.5",
  "title": "",
  "body": "Mostre que o número é múltiplo de . "
},
{
  "id": "exercise-6",
  "level": "2",
  "url": "section-1.html#exercise-6",
  "type": "Exercício",
  "number": "1.1.6",
  "title": "",
  "body": "(2013) O algarismo das unidades do número é:  "
},
{
  "id": "exercise-7",
  "level": "2",
  "url": "section-1.html#exercise-7",
  "type": "Exercício",
  "number": "1.1.7",
  "title": "",
  "body": "(2015) Paula iniciou um programa de ginástica no qual os dias de treino são separados por dois dias de descanso. Se o primeiro treino foi em uma segunda-feira, em qual dia da semana cairá o centésimo treino?  "
},
{
  "id": "exercise-8",
  "level": "2",
  "url": "section-1.html#exercise-8",
  "type": "Exercício",
  "number": "1.1.8",
  "title": "(2014 - Problema 2).",
  "body": "(2014 - Problema 2) No Pentágono abaixo, metros e metros. Uma formiguinha parte do vértice e caminha com velocidade constante de um metro por segundo ao longo de seus lados sempre no mesmo sentido. Em que ponto estará no segundo?   "
},
{
  "id": "exercise-9",
  "level": "2",
  "url": "section-1.html#exercise-9",
  "type": "Exercício",
  "number": "1.1.9",
  "title": "(2015 - Problema 2).",
  "body": "(2015 - Problema 2) Esmeralda rasgou uma folha em pedaços e, em seguida, pegou uma dessas partes e rasgou-a também em pedaços. Não satisfeita, pegou uma dessas últimas partes e rasgou também em pedaços. Qual dos números a seguir poderia ser o total de pedaços obtidos por Esmeralda no final?     "
},
{
  "id": "section-2",
  "level": "1",
  "url": "section-2.html",
  "type": "Seção",
  "number": "1.2",
  "title": "Aula 02 - Divisibilidade II",
  "body": " Aula 02 - Divisibilidade II   Dados dois inteiros e , com , dizemos que divide ou que é um divisor de ou ainda que é um múltiplo de e escrevemos se o obtido pelo algoritmo de divisão aplicado à e é , ou seja, se para algum inteiro .    Sejam inteiros. Temos   (\" divide\") Se e , então para quaisquer e inteiros.  (\"Limitação\") Se , então ou .  (\"Transitividade\") Se e , então .     (Olimpíada de Maio 2006). Encontre todos os naturais e tais que e .   Pelo (\"Limitação\"), Ou seja, então temos três possibilidades: ou ou .  Se , então Pelo item i do , escolhendo e temos Então, ou . Se e se .   Se , então Logo, Portanto, e consequentemente e .   Se , isto significa que . Assim, logo Portanto, , então ou .  O conjunto de todas as soluções:      (PTOM)(Critério de divisibilidade por 2)  Seja um número inteiro com dígitos na base : então se, e somente se, .   Podemos escrever da seguinte maneira: Assim, logo, se, e somente se, .     (PTOM)(Critério de divisibilidade por 4)  Seja um número inteiro com dígitos na base : então se, e somente se, .   Podemos escrever da seguinte maneira: Assim, logo, se, e somente se, .     (PTOM)(Critério de divisibilidade por 3 e por 9)  Seja um número inteiro com dígitos na base : então  se, e somente se, ;  se, e somente se, .      Portanto, ou seja, Então,  se, e somente se, .  se, e somente se, .       (PTOM)(Critério de divisibilidade por 7)  Para saber se um inteiro é multiplo de , basta apagar seu último dı́gito, multiplicá-lo por e o subtrair do número que restou. Se o resultado é múltiplo de , então o número original também é múltiplo de .    Se nosso número original está escrito na forma , então o número obtido após a operação descrita é . Basta mostrar que se , então .  Se , , ou seja, Como , pela propriedade i. do , concluímos que ou seja, .     Mostre que se , então .    . Pela propriedade i. do , , ou seja,      Usando os dígitos , construímos vários números de sete dígitos distintos. Existem dois deles, distintos, tais que um divide o outro?   Suponha, por absurdo, que sejam dois desses números, com . Vamos usar o critério de divisibilidade por . Note que e possuem a mesma soma dos dígitos: , consequentemente e . Portanto, Assim, existem e inteiros, tais que . Logo, e como , concluímos que . Portanto, . Pelo item ii. do , . Assim, possui um dígito a mais que , mas isto é um absurdo. Portanto, não existem dois números distintos usando os dígitos , tais que um divide o outro.     (AIME 1986)  Qual é o maior inteiro para o qual é divisível por ?   Fazendo a divisão de por , obtemos: para que divida basta que . O maior que satisfaz a condição é .     (Leningrado 1989)  Seja um número natural maior que , e seja um número natural que é um divisor de . Prove que se , então .     Se é um divisor de , então .  Se , então , com .  Então, e pelo item a. vale . Como , temos . Pelo item i. do , usando e , temos ou seja, Pelo item ii. do , . Se , , mas por hipótese .  Se , então . Portanto,       (Extraído de ). Encontre todos os inteiros positivos tais que .   Como , usando o item i. do  Pelo item ii. do , ou , ou Como a função no lado esquerdo da desigualdade é quadrática (dentro do módulo) e a função do lado direito é linear (dentro do módulo), precisamos testar apenas alguns valores para , pois a partir de um determinado valor, a função quadrática sempre assume valores maiores que a linear. Agora, precisamos testar se para e . Portanto, todas as soluções são e .     (Leningrado 1990)  Sejam e números naturais tais que divide . Prove que .   Por hipótese, Pelo item ii. do , Como divide ele mesmo, podemos usar o item i. do para escrever: simplificando, ficamos com Como , . Temos dois casos para analisar.  Caso 1: , então Chegamos em um absurdo.  Caso 2: . Então, .     Mostre que se , então .  Mostre que se , então .  Mostre que se , então .  Mostre que se , então .  O número de seis dígitos satisfaz a propriedade de que é divisível por . Prove que também é divisível por .  Encontre todos os inteiros positivos tais que divide e divide .  Sejam e um inteiro positivo qualquer. Prove que se, e somente se, .  (Bielorússia 1996) Inteiros e , satisfazem a igualdade   Prove que é um quadrado perfeito.  Encontre todos os pares satisfazendo a equação acima.     "
},
{
  "id": "definition-1",
  "level": "2",
  "url": "section-2.html#definition-1",
  "type": "Definição",
  "number": "1.2.1",
  "title": "",
  "body": " Dados dois inteiros e , com , dizemos que divide ou que é um divisor de ou ainda que é um múltiplo de e escrevemos se o obtido pelo algoritmo de divisão aplicado à e é , ou seja, se para algum inteiro .  "
},
{
  "id": "lema-01",
  "level": "2",
  "url": "section-2.html#lema-01",
  "type": "Lema",
  "number": "1.2.2",
  "title": "",
  "body": " Sejam inteiros. Temos   (\" divide\") Se e , então para quaisquer e inteiros.  (\"Limitação\") Se , então ou .  (\"Transitividade\") Se e , então .   "
},
{
  "id": "example-17",
  "level": "2",
  "url": "section-2.html#example-17",
  "type": "Exemplo",
  "number": "1.2.3",
  "title": "",
  "body": " (Olimpíada de Maio 2006). Encontre todos os naturais e tais que e .   Pelo (\"Limitação\"), Ou seja, então temos três possibilidades: ou ou .  Se , então Pelo item i do , escolhendo e temos Então, ou . Se e se .   Se , então Logo, Portanto, e consequentemente e .   Se , isto significa que . Assim, logo Portanto, , então ou .  O conjunto de todas as soluções:    "
},
{
  "id": "proposition-1",
  "level": "2",
  "url": "section-2.html#proposition-1",
  "type": "Proposição",
  "number": "1.2.4",
  "title": "(PTOM)(Critério de divisibilidade por 2).",
  "body": " (PTOM)(Critério de divisibilidade por 2)  Seja um número inteiro com dígitos na base : então se, e somente se, .   Podemos escrever da seguinte maneira: Assim, logo, se, e somente se, .   "
},
{
  "id": "proposition-2",
  "level": "2",
  "url": "section-2.html#proposition-2",
  "type": "Proposição",
  "number": "1.2.5",
  "title": "(PTOM)(Critério de divisibilidade por 4).",
  "body": " (PTOM)(Critério de divisibilidade por 4)  Seja um número inteiro com dígitos na base : então se, e somente se, .   Podemos escrever da seguinte maneira: Assim, logo, se, e somente se, .   "
},
{
  "id": "proposition-3",
  "level": "2",
  "url": "section-2.html#proposition-3",
  "type": "Proposição",
  "number": "1.2.6",
  "title": "(PTOM)(Critério de divisibilidade por 3 e por 9).",
  "body": " (PTOM)(Critério de divisibilidade por 3 e por 9)  Seja um número inteiro com dígitos na base : então  se, e somente se, ;  se, e somente se, .      Portanto, ou seja, Então,  se, e somente se, .  se, e somente se, .     "
},
{
  "id": "proposition-4",
  "level": "2",
  "url": "section-2.html#proposition-4",
  "type": "Proposição",
  "number": "1.2.7",
  "title": "(PTOM)(Critério de divisibilidade por 7).",
  "body": " (PTOM)(Critério de divisibilidade por 7)  Para saber se um inteiro é multiplo de , basta apagar seu último dı́gito, multiplicá-lo por e o subtrair do número que restou. Se o resultado é múltiplo de , então o número original também é múltiplo de .    Se nosso número original está escrito na forma , então o número obtido após a operação descrita é . Basta mostrar que se , então .  Se , , ou seja, Como , pela propriedade i. do , concluímos que ou seja, .   "
},
{
  "id": "example-18",
  "level": "2",
  "url": "section-2.html#example-18",
  "type": "Exemplo",
  "number": "1.2.8",
  "title": "",
  "body": " Mostre que se , então .    . Pela propriedade i. do , , ou seja,    "
},
{
  "id": "example-19",
  "level": "2",
  "url": "section-2.html#example-19",
  "type": "Exemplo",
  "number": "1.2.9",
  "title": "",
  "body": " Usando os dígitos , construímos vários números de sete dígitos distintos. Existem dois deles, distintos, tais que um divide o outro?   Suponha, por absurdo, que sejam dois desses números, com . Vamos usar o critério de divisibilidade por . Note que e possuem a mesma soma dos dígitos: , consequentemente e . Portanto, Assim, existem e inteiros, tais que . Logo, e como , concluímos que . Portanto, . Pelo item ii. do , . Assim, possui um dígito a mais que , mas isto é um absurdo. Portanto, não existem dois números distintos usando os dígitos , tais que um divide o outro.   "
},
{
  "id": "example-20",
  "level": "2",
  "url": "section-2.html#example-20",
  "type": "Exemplo",
  "number": "1.2.10",
  "title": "(AIME 1986).",
  "body": " (AIME 1986)  Qual é o maior inteiro para o qual é divisível por ?   Fazendo a divisão de por , obtemos: para que divida basta que . O maior que satisfaz a condição é .   "
},
{
  "id": "example-21",
  "level": "2",
  "url": "section-2.html#example-21",
  "type": "Exemplo",
  "number": "1.2.11",
  "title": "(Leningrado 1989).",
  "body": " (Leningrado 1989)  Seja um número natural maior que , e seja um número natural que é um divisor de . Prove que se , então .     Se é um divisor de , então .  Se , então , com .  Então, e pelo item a. vale . Como , temos . Pelo item i. do , usando e , temos ou seja, Pelo item ii. do , . Se , , mas por hipótese .  Se , então . Portanto,    "
},
{
  "id": "example-22",
  "level": "2",
  "url": "section-2.html#example-22",
  "type": "Exemplo",
  "number": "1.2.12",
  "title": "",
  "body": "  (Extraído de ). Encontre todos os inteiros positivos tais que .   Como , usando o item i. do  Pelo item ii. do , ou , ou Como a função no lado esquerdo da desigualdade é quadrática (dentro do módulo) e a função do lado direito é linear (dentro do módulo), precisamos testar apenas alguns valores para , pois a partir de um determinado valor, a função quadrática sempre assume valores maiores que a linear. Agora, precisamos testar se para e . Portanto, todas as soluções são e .   "
},
{
  "id": "example-23",
  "level": "2",
  "url": "section-2.html#example-23",
  "type": "Exemplo",
  "number": "1.2.13",
  "title": "(Leningrado 1990).",
  "body": " (Leningrado 1990)  Sejam e números naturais tais que divide . Prove que .   Por hipótese, Pelo item ii. do , Como divide ele mesmo, podemos usar o item i. do para escrever: simplificando, ficamos com Como , . Temos dois casos para analisar.  Caso 1: , então Chegamos em um absurdo.  Caso 2: . Então, .   "
},
{
  "id": "exercise-10",
  "level": "2",
  "url": "section-2.html#exercise-10",
  "type": "Exercício",
  "number": "1.2.1",
  "title": "",
  "body": "Mostre que se , então . "
},
{
  "id": "exercise-11",
  "level": "2",
  "url": "section-2.html#exercise-11",
  "type": "Exercício",
  "number": "1.2.2",
  "title": "",
  "body": "Mostre que se , então . "
},
{
  "id": "exercise-12",
  "level": "2",
  "url": "section-2.html#exercise-12",
  "type": "Exercício",
  "number": "1.2.3",
  "title": "",
  "body": "Mostre que se , então . "
},
{
  "id": "exercise-13",
  "level": "2",
  "url": "section-2.html#exercise-13",
  "type": "Exercício",
  "number": "1.2.4",
  "title": "",
  "body": "Mostre que se , então . "
},
{
  "id": "exercise-14",
  "level": "2",
  "url": "section-2.html#exercise-14",
  "type": "Exercício",
  "number": "1.2.5",
  "title": "",
  "body": "O número de seis dígitos satisfaz a propriedade de que é divisível por . Prove que também é divisível por . "
},
{
  "id": "exercise-15",
  "level": "2",
  "url": "section-2.html#exercise-15",
  "type": "Exercício",
  "number": "1.2.6",
  "title": "",
  "body": "Encontre todos os inteiros positivos tais que divide e divide . "
},
{
  "id": "exercise-16",
  "level": "2",
  "url": "section-2.html#exercise-16",
  "type": "Exercício",
  "number": "1.2.7",
  "title": "",
  "body": "Sejam e um inteiro positivo qualquer. Prove que se, e somente se, . "
},
{
  "id": "exercise-17",
  "level": "2",
  "url": "section-2.html#exercise-17",
  "type": "Exercício",
  "number": "1.2.8",
  "title": "(Bielorússia 1996).",
  "body": "(Bielorússia 1996) Inteiros e , satisfazem a igualdade   Prove que é um quadrado perfeito.  Encontre todos os pares satisfazendo a equação acima.   "
},
{
  "id": "referencias",
  "level": "1",
  "url": "referencias.html",
  "type": "Referêcias",
  "number": "2",
  "title": "Referências Bibliográficas",
  "body": "    Referências Bibliográficas     Notas de aula de Teoria dos Números do POTI    F. E. Brochero Martinez, C. G. Moreira, N. C. Saldanha, E. Tengan - Teoria dos Números um passeio com primos e outros números familiares pelo mundo inteiro, Projeto Euclides, IMPA, 2010.  "
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
