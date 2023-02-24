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
  "body": " Aula 01 - Divisibilidade I    (Algoritmo da Divisão)  Para quaisquer inteiros positivos e , existe um único par de inteiros não negativos tais que e . Os números e são chamados de quociente e resto, respectivamente, da divisão de por .          O teorema anterior admite um enunciado mais geral: Para quaisquer inteiros e , com , existe um único par de inteiros tais que . Por exemplo,     Abaixo temos um código em SageMath, no qual podemos trocar os valores de e nas linhas e , respectivamente. Ao clicar em Executar (Sage) obtemos o quociente e o resto na divisão de por .    (PTOM)  De modo geral, fixado um número natural , pode-se sempre escrever um número qualquer , de modo único, na forma , na qual são inteiros e .  Por exemplo, fixado um valor para , qualquer inteiro pode ser escrito em apenas uma das seguintes formas    (PTOM)  Dados dois números primos , dizemos que ele são primos gêmeos se . Prove que para cada par de primos gêmeos com , se , então deixa resto zero na divisão por .   Pela , só pode assumir uma das três formas: . Podemos analizar cada um dos casos.   Caso 1 ( ). Neste caso o número não seria primo, então este caso está descartado.   Caso 2 ( ). Neste caso, e não seria primo, o que é uma contradição.   Caso 3 ( ). Neste caso, que é múltiplo de e . Portanto, este é o único caso possível e o número sempre deixa resto zero na divisão por .     Encontre um número natural que, ao ser dividido por , deixa resto , ao ser dividido por deixa resto , e ao ser dividido por deixa resto .   Pelos dados do enunciado, Somando em cada igualdade, obtemos Portanto, é múltiplo de , e . Uma solução é , logo .  Outra resposta pode ser obtida calculando o menor múltiplo comum: . Outro valor válido para é .      Verifique que  Calcule o resto da Divisão de por 3.    item a)    item b)  Portanto, Ou seja, o resto é igual a .     No SageMath, o resto da divisão de por pode ser calculado da seguinte maneira:     Seja um número natural maior que zero. Qual o resto de na divisão por ?         Quantos números entre e (inclusive) são divisíveis por ? Ou seja, quando deixam resto zero na divisão por ?   Aplicando a divisão euclidiana, Isto significa que existem números divisíveis por entre e , pois ao escrever todos os números neste intervalo, o último que deixa resto zero será no número . Observe,     (Teorema dos Restos)  Se e deixam restos e na divisão por , respectivamente, então:   deixa o mesmo resto que na divisão por  deixa o mesmo resto que na divisão por .    Por hipótese   item a)    Aplicando a divisão euclidiana obtemos Substituindo em obtemos   item b)    Aplicando a divisão euclidiana, podemos escrever Substituindo em obtemos Como queríamos.     Qual o resto que o número deixa quando dividido por ?   Aplicando a divisão euclidiana, obtemos Aplicando o , o resto de na divisão por é o mesmo que o resto de na divisão por . Como Temos,      Qual o resto que o número deixa quando dividido por ?   Como o número deixa resto na divisão por , deixa o mesmo resto que na divisão por .     Qual o resto que o número deixa quando dividido por ?   Note que    deixa resto na divisão por , logo também deixa resto na divisão por 3;  deixa resto na divisão por .   Pelo , deixa o mesmo resto que na divisão por , ou seja, o resto é o mesmo que o resto de na divisão por .     Qual o resto de na divisão por ?   Dado um número , ele pode ser escrito em apenas uma das três formas: ou . Pelo , basta analisar os três possíveis restos na divisão de por .  Caso 1: :   Caso 2: :   Caso 3: :      Prove que, para cada natural, é divisível por .   Observe que Para cada número escrito no denominador, existe o número no numerador. Agrupando as frações com , sobrará todos os números ímpares de até . Ou seja,      Encontre todos os pares de inteiros positivos e tais que .   Note que quase pode ser escrito como um produto, pois no produto \"sobra\" uma constante: Como ao somar em ambos os membros da igualdade anterior, obtemos Como é o produto de dois primos ( ), então Temos apenas dois casos: e      (OBMEP 2013). Lucas pensou em um número, dividiu-o por e obteve resto . Se ele dividir o número em que pensou por , qual o resto que ele vai encontrar?   Note que e que , logo Portanto, o resto na divisão por é .     Encontre os inteiros que, na divisão por deixam um quociente igual ao resto.   Estamos procurando os números que podem ser escritos da seguinte maneira São apenas restos possíveis, podemos substituir esses valores em para obter os valores de .      Ao dividir o número inteiro por obtemos resto . Qual é o menor valor inteiro positivo de ?    Como é positivo, . Substituindo , obtemos      (OBM). O número de seis dígitos é um múltiplo de . Determine o valor do dígito .   Note que . Podemos escrever o número da seguinte maneira: Portanto, divide se, e somente se, divide . Ou seja, como possui dois diígitos e é menor que , temos a seguinte igualdade Então, .     Determinar os números que divididos por dão um resto igual ao quadrado do quociente correspondente.  Estamos procurando os valores de que satisfazem Assim, e portanto, precisamos substituir os valores de .    (OCM 1985) Encontre o quociente da divisão de por   Fatorando , obtemos  Seguindo assim, obtemos que é igual a consequentemente é igual a Portanto, o quociente é e o resto é zero.  (OCM 1994) Seja um número onde o dígito \" \" aparece vezes. Determine o quociente e o resto da divisão de por .  Observe que , e que . Como Sabemos que é um número inteiro. Assim, Dividindo ambos os membros da igualdade por e em seguida multiplicando por , obtemos Afirmação: é inteiro e portanto   Para concluir, vamos provar a afirmação acima. Observe que . Então, como não possuem fatores primos em comum, para mostrar que divide , basta mostrar que cada um dos números e divide .    ( divide ). Note que deixa resto na divisão por e que deixa resto , na divisão por . Assim, Pelo Teorema dos Restos, deixa o mesmo resto que na divisão por , ou seja, o resto é zero.  ( divide ). Como deixa resto na divisão por e deixa resto na divisão por . Pelo Teorema dos restos, deixa o mesmo resto que , na divisão por . Portanto o resto é zero.  ( divide ). De fato, deixa resto na divisão por e deixa resto , na divisão por . Logo, pelo Teorema dos Restos ) deixa o mesmo resto que . Assim, o resto também é zero.     Prove que, o número é múltiplo de .  Vamos usar a seguinte igualdade:    é múltiplo de e portanto deixa resto zero.   , deixa resto zero na divisão por .   , também deixa resto zero na divisão por .  Portanto, o número é múltiplo de .   Mostre que o número é múltiplo de .  Para mostrar que o número é mútiplo de , basta mostrar que e dividem o número.  Como e são ímpares, a soma é par, assim, divide .  Para mostrar divide , vamos usar as seguintes fatorações: Assim, e são divisíveis por e portanto a soma também é.   Simulados Antigos  (2013) O algarismo das unidades do número é:   Todo múltiplo de ímpar termina em .   (2015) Paula iniciou um programa de ginástica no qual os dias de treino são separados por dois dias de descanso. Se o primeiro treino foi em uma segunda-feira, em qual dia da semana cairá o centésimo treino?   Como os treinos ocorrem de em dias, o segundo treino ocorrerá dias após o primeiro. O terceiro treino ocorrerá dias após o primeiro e assim sucessivamente. O -ésimo treino ocorrerá dias após o primeiro. Assim, o centésimo treino ocorrerá dias após o primeiro.  A cada dias repete-se o dia da semana. Como deixa resto na divisão por , o centésimo treino ocorrerá dias após uma segunda-feira, ou seja, em uma quinta-feira.     Realização e Apoio  Realização:   Apoio:    "
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
  "number": "1.1.1.1",
  "title": "",
  "body": "Determinar os números que divididos por dão um resto igual ao quadrado do quociente correspondente.  Estamos procurando os valores de que satisfazem Assim, e portanto, precisamos substituir os valores de .   "
},
{
  "id": "exercise-2",
  "level": "2",
  "url": "section-1.html#exercise-2",
  "type": "Exercício",
  "number": "1.1.1.2",
  "title": "(OCM 1985).",
  "body": "(OCM 1985) Encontre o quociente da divisão de por   Fatorando , obtemos  Seguindo assim, obtemos que é igual a consequentemente é igual a Portanto, o quociente é e o resto é zero. "
},
{
  "id": "exercise-3",
  "level": "2",
  "url": "section-1.html#exercise-3",
  "type": "Exercício",
  "number": "1.1.1.3",
  "title": "(OCM 1994).",
  "body": "(OCM 1994) Seja um número onde o dígito \" \" aparece vezes. Determine o quociente e o resto da divisão de por .  Observe que , e que . Como Sabemos que é um número inteiro. Assim, Dividindo ambos os membros da igualdade por e em seguida multiplicando por , obtemos Afirmação: é inteiro e portanto   Para concluir, vamos provar a afirmação acima. Observe que . Então, como não possuem fatores primos em comum, para mostrar que divide , basta mostrar que cada um dos números e divide .    ( divide ). Note que deixa resto na divisão por e que deixa resto , na divisão por . Assim, Pelo Teorema dos Restos, deixa o mesmo resto que na divisão por , ou seja, o resto é zero.  ( divide ). Como deixa resto na divisão por e deixa resto na divisão por . Pelo Teorema dos restos, deixa o mesmo resto que , na divisão por . Portanto o resto é zero.  ( divide ). De fato, deixa resto na divisão por e deixa resto , na divisão por . Logo, pelo Teorema dos Restos ) deixa o mesmo resto que . Assim, o resto também é zero.    "
},
{
  "id": "exercise-4",
  "level": "2",
  "url": "section-1.html#exercise-4",
  "type": "Exercício",
  "number": "1.1.1.4",
  "title": "",
  "body": "Prove que, o número é múltiplo de .  Vamos usar a seguinte igualdade:    é múltiplo de e portanto deixa resto zero.   , deixa resto zero na divisão por .   , também deixa resto zero na divisão por .  Portanto, o número é múltiplo de .  "
},
{
  "id": "exercise-5",
  "level": "2",
  "url": "section-1.html#exercise-5",
  "type": "Exercício",
  "number": "1.1.1.5",
  "title": "",
  "body": "Mostre que o número é múltiplo de .  Para mostrar que o número é mútiplo de , basta mostrar que e dividem o número.  Como e são ímpares, a soma é par, assim, divide .  Para mostrar divide , vamos usar as seguintes fatorações: Assim, e são divisíveis por e portanto a soma também é.  "
},
{
  "id": "p-75",
  "level": "2",
  "url": "section-1.html#p-75",
  "type": "Parágrafo (with a defined term)",
  "number": "",
  "title": "",
  "body": "Simulados Antigos "
},
{
  "id": "exercise-6",
  "level": "2",
  "url": "section-1.html#exercise-6",
  "type": "Exercício",
  "number": "1.1.1.6",
  "title": "",
  "body": "(2013) O algarismo das unidades do número é:   Todo múltiplo de ímpar termina em .  "
},
{
  "id": "exercise-7",
  "level": "2",
  "url": "section-1.html#exercise-7",
  "type": "Exercício",
  "number": "1.1.1.7",
  "title": "",
  "body": "(2015) Paula iniciou um programa de ginástica no qual os dias de treino são separados por dois dias de descanso. Se o primeiro treino foi em uma segunda-feira, em qual dia da semana cairá o centésimo treino?   Como os treinos ocorrem de em dias, o segundo treino ocorrerá dias após o primeiro. O terceiro treino ocorrerá dias após o primeiro e assim sucessivamente. O -ésimo treino ocorrerá dias após o primeiro. Assim, o centésimo treino ocorrerá dias após o primeiro.  A cada dias repete-se o dia da semana. Como deixa resto na divisão por , o centésimo treino ocorrerá dias após uma segunda-feira, ou seja, em uma quinta-feira.  "
},
{
  "id": "p-81",
  "level": "2",
  "url": "section-1.html#p-81",
  "type": "Parágrafo (with a defined term)",
  "number": "",
  "title": "",
  "body": "Realização: "
},
{
  "id": "p-82",
  "level": "2",
  "url": "section-1.html#p-82",
  "type": "Parágrafo (with a defined term)",
  "number": "",
  "title": "",
  "body": "Apoio: "
},
{
  "id": "section-2",
  "level": "1",
  "url": "section-2.html",
  "type": "Seção",
  "number": "1.2",
  "title": "Aula 02 - Divisibilidade II",
  "body": " Aula 02 - Divisibilidade II   Dados dois inteiros e , com , dizemos que divide ou que é um divisor de ou ainda que é um múltiplo de e escrevemos se o obtido pelo algoritmo de divisão aplicado à e é , ou seja, se para algum inteiro .    Sejam inteiros. Temos   (\" divide\") Se e , então para quaisquer e inteiros.  (\"Limitação\") Se , então ou .  (\"Transitividade\") Se e , então .     (Olimpíada de Maio 2006). Encontre todos os naturais e tais que e .   Pelo (\"Limitação\"), Ou seja, então temos três possibilidades: ou ou .  Se , então Pelo item i do , escolhendo e temos Então, ou . Se e se .   Se , então Logo, Portanto, e consequentemente e .   Se , isto significa que . Assim, logo Portanto, , então ou .  O conjunto de todas as soluções:      (PTOM)(Critério de divisibilidade por 2)  Seja um número inteiro com dígitos na base : então se, e somente se, .   "
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
  "body": " (PTOM)(Critério de divisibilidade por 2)  Seja um número inteiro com dígitos na base : então se, e somente se, .  "
},
{
  "id": "referencias",
  "level": "1",
  "url": "referencias.html",
  "type": "Referêcias",
  "number": "2",
  "title": "Referências Bibliográficas",
  "body": "    Referências Bibliográficas     Notas de aula de Teoria dos Números do POTI  "
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
