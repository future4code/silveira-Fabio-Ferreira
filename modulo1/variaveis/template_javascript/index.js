//Entrega do exercicio de interpretação de código.

//Resposta da primeira pergunta:
/*no caso do codigo:
let a = 10
let b = 10

console.log(b)

b = 5
console.log(a, b)

o primeiro console.log irá imprimir 10 pois é o valor atribuido à variável
o segundo console.log irá imprimir 10 e 5 pois a variavel "let" pode ser sobrepósta por outra
e nesse caso foi sobreposta pelo 5 */

//Resposta da segunda pergunta:
/*no caso do codigo:
let a = 10
let b = 20
c = a
b = c
a = b

console.log(a, b, c)

o console.log ira imprimir 10 10 e 10 pois os valores foram sobrepostos antes de terem seus 
valores lidos*/

//Resposta da terceira pergunta:
/*no caso do codigo:

let p = prompt("Quantas horas você trabalha por dia?")
let t = prompt("Quanto você recebe por dia?")
alert(`Voce recebe ${t/p} por hora`)

poderia ser escrito:

let horasTrabalhadas = prompt("Quantas horas você trabalha por dia?");
let salarioPorDia = prompt("Quanto você recebe por dia?");
alert(`Voce recebe ${t/p} por hora`);
*/ 




//Resposta do exercicio de escrita de código.
//questão 1

let nome =undefined
let idade = undefined

console.log(typeof nome);
console.log(typeof idade);

//o código acima foi lido como não definido pois não foi atribuido nenhum valor para as variáveis.

let nome = prompt("Qual é o seu nome ?");
let idade = prompt("Qual é sua idade?");

console.log(typeof nome);
console.log(typeof idade);

//o código acima está funcional e o typeof declarou-os como string.

//questão 2:

let jogos = prompt("você gosta de jogos?")
let animais = prompt("você gosta de animais?")
let doces = prompt("você gosta de doces?")

alert (jogos)
alert (animais)
alert (doces)

//o código acima está funcional e mostrou todas as atribuições porém só consegui mostrá-las como strig com o Alert.

//questão 3

let a = 10
let b = 25
let c = 10
let d = 25

// Aqui faremos uma lógica para trocar os valores

b = c
a = d


// Depois de trocados, teremos o seguinte resultado:
console.log("O novo valor de a é", a) // O novo valor de a é 25
console.log("O novo valor de b é", b) // O novo valor de b é 10

/*duvido que tenha sido a melhor escolha, mas foi a solução mais simples e lógica que encontrei, criar duas novas
variáveis para que pudesse trocar os valores das primeiras variáveis sem alterar o dos mesmos.*/

//ps. para funcionar cada código separadamente coloquei os outros como comentário retirei as barras de comentário para que ficasse melhor para correção xD