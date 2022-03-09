// - **Exercícios de interpretação de código**
    
//     Tente responder os exercícios dessa seção sem executar o código. Se ficar muito difícil, pode rodar no seu computador **para analisar e pensar sobre o resultado.** 
    
//     1. Leia o código abaixo:

//     const respostaDoUsuario = prompt("Digite o número que você quer testar")
//     const numero = Number(respostaDoUsuario)

// if (numero % 2 === 0) {
//   console.log("Passou no teste.")
// } else {
//   console.log("Não passou no teste.")
//}

// a) Explique o que o código faz. Qual o teste que ele realiza? 

// R: pede ao usuario que veja se o numero é divisivel por dois para ver se o resto é zero (provavelmente parar verificar se o numero é par)
//depois se o numero for divisivel por dois e o resto for 0 retornará um valor true e dirá que o numero passou no teste

// b) Para que tipos de números ele imprime no console "Passou no teste"? 

// R: Para numeros pares, divisiveis por 2 cujo resto seja 0

// c) Para que tipos de números a mensagem é "Não passou no teste"?

// R:Para numeros impares cujo resto da divisão por 2 seja diferente de zero


// 2. O código abaixo foi feito por uma pessoa desenvolvedora, contratada para automatizar algumas tarefas de um supermercado:  


// let fruta = prompt("Escolha uma fruta")
// let preco
// switch (fruta) {
//   case "Laranja":
//     preco = 3.5
//     break;
//   case "Maçã":
//     preco = 2.25
//     break;
//   case "Uva":
//     preco = 0.30
//     break;
//   case "Pêra":
//     preco = 5.5
//     break; // BREAK PARA O ITEM c.
//   default:
//     preco = 5
//     break;
// }
// console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

    
//     a) Para que serve o código acima?

// R: Diferenciar o preço de cada fruta digitada nas opções
    
//     b) Qual será a mensagem impressa no console, se o valor de fruta for `"Maçã"`?
    
// R: O preço da fruta maçã  é  R$  2.25

//     c) Considere que um usuário queira comprar uma `Pêra`, qual seria a mensagem impressa no console se retirássemos o `break` que está logo acima do `default` (o `break` indicado pelo comentário "BREAK PARA O ITEM c.")?

// R: O preço da fruta Pêra  é  R$  5.5


// 3. Leia o código abaixo:
    

    // const numero = Number(prompt("Digite o primeiro número."))
    
    // if(numero > 0) {
    //   console.log("Esse número passou no teste")
    // 	let mensagem = "Essa mensagem é secreta!!!"
    // }
    
    // console.log(mensagem)

    
// a) O que a primeira linha está fazendo?

// R: Pedindo ao úsuario um numero e convertendo de String para Number
    
// b) Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10?

// R: Se o numero fosse 10 apareceria "Esse número passou no teste". Caso fosse -10 seria undefined
    
// c) Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.

// R: haverá um erro pois a mensagem está no escopo da função que não pode ser acessado pelo console.log



   // - **Exercícios de escrita de código**
// 1. Faça um programa que pergunta ao usuário qual a idade dele e imprima no console se ele/ela pode dirigir (apenas maiores de idade).
        
//     a) Faça um `prompt` para receber a idade do usuário e guarde em uma variável.

    let idadeUsuario = prompt("Digite sua idade")
  
        
//     b) Garanta que essa variável é do tipo `Number`, você deve usar o cast para number para isso.
        
    let idade = Number(idadeUsuario)

//     c) Agora veja se essa idade do usuário corresponde à idade mínima que permite dirigir. Se sim, imprima no console `"Você pode dirigir"`, caso contrário, imprima `"Você não pode dirigir."`

 if (idade >= 18){
   console.log("Você pode Dirigir.")
 } else {
   console.log("Você não pode dirigir.")
 }


// 2  Agora faça um programa que verifica que turno do dia um aluno estuda. Peça para digitar M (matutino) ou V (Vespertino) ou N (Noturno). Imprima no console a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!". Utilize o bloco if/else

const turno = prompt("Digite o turno que você estuda, sendo: M = Matutino V = Vespertino e N = Noturno.")
if (turno.toLocaleUpperCase() == "M"){
    console.log("Bom dia!")
} else if (turno.toLocaleUpperCase() == "V") {
    console.log("Boa Tarde!")
} else if (turno.toLocaleUpperCase()  == "N") {
    console.log("Boa noite!")
} else {
    console.log("Não entendi, tente novamente recarregando a página!")
}

// 3  Repita o exercício anterior, mas utilizando a estrutura de switch case agora.

let turno1 = prompt("Digite o turno que você estuda, sendo: M = Matutino V = Vespertino e N = Noturno.")
let saudacao
switch (turno1) {
  case "M":
    saudacao = "Bom dia!"
    break;
  case "V":
      saudacao = "Boa tarde!"
      break;
  case "N":
    saudacao = "Boa noite!"
    break;
}
console.log(saudacao)

// 4 Considere a situação: você vai ao cinema com um amigo ou amiga, porém ele/ela só assistirá a um filme com você se ele for do gênero fantasia e se o ingresso está abaixo de 15 reais. Faça um código que pergunta ao usuário qual o gênero de filme que vão assistir e outra pergunta sobre o preço do ingresso, então verifique se seu amigo ou amiga vai topar assistir o filme. Caso positivo, imprima no console a mensagem: "Bom filme!", caso contrário, imprima "Escolha outro filme :("

let generoFilme = prompt("Digite o genero do filme que pretende assistir.");
let precoIngresso = prompt("Digite o valor do ingresso.");
if (generoFilme == "fantasia" && precoIngresso < 15){
  console.log("Bom filme!")
} else {
  console.log("Escolha outro filme :(")
}

