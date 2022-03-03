//1 Leia o código abaixo

// const filme = {
// 	nome: "Auto da Compadecida", 
// 	ano: 2000, 
// 	elenco: [
// 		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
// 		"Virginia Cavendish"
// 		], 
// 	transmissoesHoje: [
// 		{canal: "Telecine", horario: "21h"}, 
// 		{canal: "Canal Brasil", horario: "19h"}, 
// 		{canal: "Globo", horario: "14h"}
// 		]
// }

// console.log(filme.elenco[0])
// console.log(filme.elenco[filme.elenco.length - 1])
// console.log(filme.transmissoesHoje[2])

// a) O que vai ser impresso no console?

// console.log(filme.elenco[0]) ===> Matheus Nachtergaele
// console.log(filme.elenco[filme.elenco.length - 1]) ===> Virginia Cavendish
// console.log(filme.transmissoesHoje[2]) ===> {canal: "Globo", horario: "14h"}

//2 Leia o Código abaixo

// const cachorro = {
// 	nome: "Juca", 
// 	idade: 3, 
// 	raca: "SRD"
// }

// const gato = {...cachorro, nome: "Juba"} 

// const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

// console.log(cachorro)
// console.log(gato)
// console.log(tartaruga)

// a) O que vai ser impresso no console?

// console.log(cachorro) ===> {nome: "Juca", idade: 3, raca "SRD"}
// console.log(gato) ===> {nome: "Juba", idade: 3, raca "SRD"}
// console.log(tartaruga) ===> {nome: "Jubo", idade: 3, raca "SRD"}


// b) O que faz a sintaxe dos três pontos antes do nome de um objeto?

// copia um objeto para se possam fazer alterações sem alterar o objeto original

// 3. Leia o código abaixo
    

    // function minhaFuncao(objeto, propriedade) {
    // 	return objeto[propriedade]
    // }
    
    // const pessoa = {
    //   nome: "Caio", 
    //   idade: 23, 
    //   backender: false
    // }
    
    // console.log(minhaFuncao(pessoa, "backender"))
    // console.log(minhaFuncao(pessoa, "altura"))

    
// a) O que vai ser impresso no console?

//false
//undefined

// b) Explique o valor impresso no console. Você sabe por que isso aconteceu?

//O primeiro foi impresso false pois a função pega um objeto e lê sua propriedade, logo quando foi lido backender que estava programado como false deu false e altura como não havia sido definida deu undefined

// - **xercícios de escrita de código**
//     1. Resolva os passos a seguir: 
        
//         a) Crie um objeto. Ele deve conter duas propriedades: nome (string) e apelidos (um array que sempre terá exatamente **três apelidos**). Depois, escreva uma função que recebe como entrada um objeto e imprime uma mensagem no modelo abaixo**:**

const pessoa = {
    nome: "Fabio", 
    apelidos: ["Popozão", "Chuchu", "Gigante"]
}

function imprimirPessoa (pessoa){
    let mensagem = `Eu sou ${pessoa.nome}, mas pode me chamar de: ${pessoa.apelidos[0]}, ${pessoa.apelidos[1]} ou ${pessoa.apelidos[2]}`
    return mensagem
}
console.log(imprimirPessoa(pessoa))


// b) Agora, usando o operador spread, crie um novo objeto mantendo o valor da propriedade nome, mas com uma nova lista de três apelidos. Depois, chame a função feita no item anterior passando como argumento o novo objeto

const novaPessoa ={
    ...pessoa,
    apelidos: ["dengo", "lengo", "tengo"]
}



function imprimirNovaPessoa (novaPessoa){
    let mensagem = `Eu sou ${novaPessoa.nome}, mas pode me chamar de: ${novaPessoa.apelidos[0]}, ${novaPessoa.apelidos[1]} ou ${novaPessoa.apelidos[2]}`
    return mensagem
}

console.log(imprimirPessoa(novaPessoa))

// 2. Resolva os passos a seguir: 



// a) Crie dois objetos diferentes com as seguintes propriedades: nome, idade e profissão. 

const pessoa1 = {
	nome: "Fabio", 
    idade: 22, 
	profissao: "Estudante"
}

//b) Escreva uma função que receba esses objetos e retorne um array com as seguintes informações:
//     1. O valor de `nome`
//     2. O numero de caracteres do valor `nome`
//     3. O valor de `idade`
//     4. O valor de `profissão`
//     5. O numero de caracteres do valor `profissão`
function leitor(pessoa1){
    let isso = [pessoa1.nome, pessoa1.nome.length, pessoa1.idade, pessoa1.profissao, pessoa1.profissao.length]
    return isso
}

console.log(leitor(pessoa1))

// 3. Resolva os passos a seguir: 
    
//     a) Crie uma variável de escopo global que guarde um `array` vazio chamada `carrinho`

let carrinho = []

// b) Crie três novos objetos que representem frutas de um sacolão. Eles devem ter as seguintes propriedades: nome (string) e disponibilidade (boolean - devem começar como true)

let fruta1 = {nome: "Banana", disponibilidade: true}
let fruta2 = {nome: "Maçã", disponibilidade: true}
let fruta3 = {nome: "Abacate", disponibilidade: true}

// c) Crie uma função que receba um objeto fruta por parâmetro e coloque-a dentro do array de carrinho. Invoque essa função passando os três objetos criados.

function qualquerFruta(fruta){
    carrinho.push(fruta)
}
carrinho.push(fruta1)
carrinho.push(fruta2)
carrinho.push(fruta3)

console.log(carrinho) 