//Exercícios de interpretação de código:

//1

//let array
//console.log('a. ', array) ====> Undefined
//
//array = null
//console.log('b. ', array) =======> null
//
//array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
//console.log('c. ', array.length) =======> 11
//
//let i = 0
//console.log('d. ', array[i]) =====> 3
//
//array[i+1] = 19
//console.log('e. ', array) =====> 3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13
//
//const valor = array[i+6]
//console.log('f. ', valor) ======> 9


//2

//const frase = prompt("Digite uma frase")

//console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length) ====> SUBI NUM ÔNIBUS EM MIRROCOS 27


//Exercícios de escrita de código

//1 1. Faça um programa que pergunte ao usuário seu nome e seu e-mail. Em seguida, Imprima no console a seguinte mensagem:
    //O e-mail `emailDoUsuario` foi cadastrado com sucesso. Seja bem-vinda(o), `nomeDoUsuario`!

//const emailDoUsuario = prompt('Digite seu Email')
//const nomeDoUsuario = prompt('Digite seu nome')

//console.log(`O e-mail ${emailDoUsuario} foi cadastrado com sucesso. Seja bem-vinda(o), ${nomeDoUsuario}!`)


//2 Faça um programa que contenha um array com 5 das suas comidas preferidas, armazenado em uma variável. Em seguida, siga os passos:

const comidasFavoritas = ["abacate", "banana", "Pizza", "uva", "Lasanha"];

//a) Imprima no console o array completo

console.log(comidasFavoritas);

//b) Imprima no console a mensagem "Essas são as minhas comidas preferidas: ", seguida por cada uma das comidas, uma embaixo da outra.

console.log('comidas', comidasFavoritas[0]);
console.log(comidasFavoritas[1]);
console.log(comidasFavoritas[2]);
console.log(comidasFavoritas[3]);
console.log(comidasFavoritas[4]);

//c) Aqui vai um desafio: pergunte ao usuário uma comida preferida. Troque a segunda comida da sua lista pela inserida pelo usuário. Imprima no console a nova lista.

const outraComida = prompt("Digite sua comida Favorita");
console.log("abacate", outraComida, "Pizza", "uva", "Lasanha");

//Faça um programa, seguindo os passos

//a) Crie um array vazio e guarde-o em uma variável, chamada listaDeTarefas
const listaDeTarefas = [];

//b) Pergunte ao usuário 3 tarefas que ele precise realizar no dia e armazene-as, uma por uma, no array

const Tarefa1 = prompt("Vamos organizar suas tarefas do dia em 3 digite a primeira");
const Tarefa2 = prompt("Digite a segunda");
const Tarefa3 = prompt("Digite a terceira");

//c) Imprima o array no console

listaDeTarefas.push(Tarefa1, Tarefa2, Tarefa3);
console.log(listaDeTarefas);

//d) Peça ao usuário que digite o índice de uma tarefa que ele já realizou: 0, 1 ou 2 

let TarefaRealizada = prompt("Agora, digite a primeira tarefa que você realizou");

//e) Remova da lista o item de índice que o usuário escolheu.

listaDeTarefas.splice(TarefaRealizada, 1);

//f) Imprima o array no console

console.log(listaDeTarefas);