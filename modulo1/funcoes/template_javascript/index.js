//      Exercícios de interpretação de código

//Tente responder os exercícios dessa seção sem executar o código. Se ficar muito difícil, pode rodar no seu computador **para analisar e pensar sobre o resultado.** 

//1. Leia o código abaixo


//  function minhaFuncao(variavel) {
//  return variavel * 5
//}

//console.log(minhaFuncao(2))
//console.log(minhaFuncao(10))


//a) O que vai ser impresso no console?

//Resposta: console.log(minhaFuncao(2)) ====> 10
//Resposta: console.log(minhaFuncao(10)) ====> 50

//b) O que aconteceria se retirasse os dois `console.log` e simplesmente invocasse a função `minhaFuncao(2)` e `minhaFuncao(10)`? O que apareceria no console?

//Resposta: console.log(minhaFuncao(2)) ====> 2
//Resposta: console.log(minhaFuncao(10)) ====> 10

//2. Leia o código abaixo

//let textoDoUsuario = prompt("Insira um texto");
//const outraFuncao = function(texto) {
//	return texto.toLowerCase().includes("cenoura")
//}

//const resposta = outraFuncao(textoDoUsuario)
//console.log(resposta)


//a. Explique o que essa função faz e qual é sua utilidade

//Resposta: ede ao usuario para inserir um texto, coloca ele em letras minusculas e procura a palavra cenoura declarando se há ou não a palavra cenoura

//b. Determine qual será a saída no console para cada uma das 3 entradas do usuário:


//i.   `Eu gosto de cenoura`

//Resposta: eu gosto de cenoura
//          true

//ii.  `CENOURA é bom pra vista`

//Resposta: cenoura é bom pra vista
//          true

//iii. `Cenouras crescem na terra

//Resposta: cenouras crescem na terra
//          false


//      Exercícios de escrita de código

//1. Escreva as funções explicadas abaixo:

//a) A função não deve receber nenhum parâmetro e deve imprimir uma mensagem falando algumas informações sobre você, como: 

function souEu(){
    console.log(`Eu sou Fabio, tenho 22 anos, moro em Alagoas e sou estudante`)
}

const mostrar = souEu();

//Troque o nome, idade, cidade e se é estudante ou não por informações sobre você. Lembrando que a função não possui entradas, apenas imprime essa mensagem.

//b)  Agora escreva uma função que receba 4 parâmetros que correspondem às informações de uma pessoa: o nome (string), a idade (number), a cidade (string) e uma profissão (string). Ela deve retornar uma string que unifique todas as informações da pessoa em uma só mensagem com o template:

const nome = prompt("Qual seu nome?");
const idade = prompt("Qual sua idade?");
const endereco = prompt("Qual seu endereço?");
const profissao = prompt("Qual sua profissão?");

function imprimirInformacoes(){
    console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${endereco} e sou ${profissao}`)
}

const imprimir = imprimirInformacoes();

//2. Escreva as funções explicadas abaixo:

//a) Escreva uma função que receba 2 números como parâmetros, e, dentro da função, faça a soma das duas entradas e retorne o resultado. Invoque a função e imprima no console o resultado.


function somaNumeros (soma1) {
        return num1 + num2
}

const num1 = (10)
const num2 = (5)
const resultado = somaNumeros();
console.log(`O resultado da soma dos numeros 10 e 5 é: ${resultado}`)

//b) Faça uma função que recebe 2 números e retorne um booleano que informa se o primeiro número é maior ou igual ao segundo.

function somaUsuario (soma){
    return num3 + num4
}

const num3 = +prompt("Digite um numero");
const num4 = +prompt("Digite outro numero");
const resultado1 = somaUsuario()
console.log(`O resultado da soma dos numeros inseridos é: ${resultado1}`)

//c) Escreva uma função que receba um número e devolva um booleano indicando se ele é par ou não

function parOuNao(sera){
    sera = num5 % 2 === 0
    return sera
}

const num5 = +prompt("Digite um numero qualquer")
const resultado2 = parOuNao()
console.log("O numero que você digitou é par?", resultado2)

//d) Faça uma função que recebe uma mensagem (string) como parâmetro e imprima o tamanho dessa mensagem, juntamente com uma versão dela em letras maiúsculas.


function formatar(nome){
    nome = nome.toUpperCase()
    numero = nome.length
    return `${nome}  ${numero}`
}

const formatada = formatar("dificuldade");

console.log(formatada);


//3 Crie uma função para cada uma das operações básicas (soma, subtração, multiplicação e divisão). Em seguida, peça para o usuário inserir dois números e chame essas 4 funções com esses valores imputados pelo usuário sendo o argumento. Por fim, mostre no console o resultado das operações:

function matematica(equacao){
    const soma = n1 + n2
    const diferenca = n1 - n2
    const multiplicacao = n1 * n2
    const divisao = n1 / n2
    return `O resultado da soma dos seus numeros é: ${soma}
            O resultado da subtração dos seus numeros é: ${diferenca}
            O resultado da multiplicação dos seus numeros é: ${multiplicacao}
            O resultado da divisão dos seus numeros é: ${divisao}`

}

const n1 = +prompt("Digite um numero para uma equação")
const n2 = +prompt("Digite outro numero")

const resultadoGeral = matematica()
console.log(resultadoGeral)
