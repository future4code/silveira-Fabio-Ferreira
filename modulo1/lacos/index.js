// - **Exercícios de interpretação de código**
    
//     Tente responder os exercícios dessa seção sem executar o código.
// Se ficar muito difícil, pode rodar no seu computador **para analisar
// e pensar sobre o resultado.** 
    
//     1. O que o código abaixo está fazendo? Qual o resultado impresso no console?4

// let valor = 0
// for(let i = 0; i < 5; i++) {
//   valor += i
// }
// console.log(valor)

//R: um loop de repetição somando 1 numero ao anterior até que o resultado seja 4 o valor mais
//proximo e ainda assim não maior que 5.

// 2. Leia o código abaixo:
    

//     const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
//     for (let numero of lista) {
//       if (numero > 18) {
//     		console.log(numero)
//     	}
//     }
  
    
//     a) O que vai ser impresso no console?

// R:19, 21, 23, 25, 27, 30
    
//     b) Se eu quisesse acessar o **índice** de cada elemento dessa lista, o `for...of...` é suficiente?
//      Se sim, o que poderia ser usado para fazer isso?

// R: se for pra acessar o indice de cada elemento da lista só seria necessario um for of e depois colocar um lista.length no final

// Qual seria o resultado impresso no console, se o usuário digitasse o número 4 ?

// const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
// let quantidadeAtual = 0
// while(quantidadeAtual < quantidadeTotal){
//   let linha = ""
//   for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
//     linha += "*"
//   }
//   console.log(linha)
//  quantidadeAtual++
// }

//R: acredito que 10


// - **Exercícios de escrita de código**
//1. Pergunte ao usuário quantos bichinhos de estimação ele tem e guarde esse dado em uma variável. 

const numeroPets = Number(prompt(" Quantos pets você tem?"))
nomePet = []
// a) Se a quantidade for 0, imprima no console "Que pena! Você pode adotar um pet!"

if (numeroPets == 0){
    console.log("você pode adotar um pet!")
}

// b) Se a quantidade for maior que 0, solicite que o usuário digite os nomes deles, um por um, e guarde esses nomes em um array
else{

for(let i = 1; i <= numeroPets; i++ ){
    let nomes = prompt("Qual nome do pet?")
    nomePet.push(nomes)
}
}
console.log(nomePet)


// 2. Considere que você tenha acesso a um `array`  (chamado de 'array original') que é composto somente de números. Baseando-se nisso, crie uma função para cada um dos itens abaixo, realizando as operações pedidas:
    let arrayOriginal = [10, 20, 30, 40, 50]
//a) Escreva um programa que **imprime** cada um dos valores do array original.

for(let i = 0; i < arrayOriginal.length; i++){
    let item = arrayOriginal[i]
    console.log(item)
}

// b) Escreva um programa que imprime cada um dos valores do array original divididos por 10

for(let i = 0; i < arrayOriginal.length; i++){
    let itemDividido = arrayOriginal[i] / 10
    console.log(itemDividido)
}

// c) Escreva um programa que crie um novo array contendo, somente, os números pares do array original e imprima esse novo array

for(let i = 0; i < arrayOriginal.length; i++){
    let itemPar = arrayOriginal[i] % 2
    let arrayPar = []
    if(itemPar === 0){
        arrayPar.push(itemPar)
    }
    console.log(arrayPar)
}