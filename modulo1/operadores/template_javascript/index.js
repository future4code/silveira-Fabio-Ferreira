//Exercícios de interpretação de código

//Ex 1:

//const bool1 = true
//const bool2 = false
//const bool3 = !bool2
//
//let resultado = bool1 && bool2 
//console.log("a. ", resultado)====> false
//
//resultado = bool1 && bool2 && bool3 ====> false
//console.log("b. ", resultado) 
//
//resultado = !resultado && (bool1 || bool2) ====> true
//console.log("c. ", resultado)
//
//console.log("d. ", typeof resultado) ====> false


//Ex 2:

//let primeiroNumero = prompt("Digite um numero!")
//let segundoNumero = prompt("Digite outro numero!")
//
//const soma = primeiroNumero + segundoNumero
//
//console.log(soma)

//Os valores obtidos estão em string e precisam ser 
//convertidos para number


//Ex 3:

//Os valores obtidos no prompt estão em string 
//só precisa converter para number pode ser assim:
//let primeiroNumero = +prompt("Digite um numero!")
//let segundoNumero = +prompt("Digite outro numero!")
//fazendo isso a variavel de soma vai somar como numero não como string


//Exercícios de escrita de código:

//1

const idade = +prompt("Qual sua idade?")
const idadeDoMelhorAmigo = +prompt("Qual a idade do seu melhor amigo(a)")
const diferenca = (idade - idadeDoMelhorAmigo)

console.log("Sua idade é maior que a do seu melhor amigo?", idade > idadeDoMelhorAmigo)
console.log("A diferença de idade entre vocês é:", diferenca)

//2 
//a)
//b)
const numeroPar = +prompt("Digite um numero par")
console.log("O resto da divisão do seu numero por 2 é", numeroPar % 2)

//c) O resultado do resto sempre é 0 porquê um numero par dividido poelo numero 2 sempre tem resto 0

//d) O resto muda pois numeros impares divididos por dois acabam em numeros decimais


//3 Faça um programa que pergunte ao usuário sua idade em anos. Depois, imprima no console 

const idade1 = +prompt("Qual sua idade?")

//a)
console.log("Sua idade em meses é", idade1 * 12)
//b)
console.log("Sua idade em dias é", idade1 * 365)
//c)
console.log("Sua idade em horas é", idade1 * 8760) //8760 é a média de horas que tem 1 ano


//4

const num1 = +prompt("Digite um numero")
const num2 = +prompt("Digite outro numero")

//a)

console.log(num1 > num2)

//b)

console.log(num1 === num2)

//c)

console.log(num1 % num2 == 0)

//d)

console.log(num2 % num1 ==0)