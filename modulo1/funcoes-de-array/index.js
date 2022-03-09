// - **Exercícios de interpretação de código**
    
// Tente responder os exercícios dessa seção sem executar o código. Se ficar muito difícil, pode rodar no seu computador **para analisar e pensar sobre o resultado.**

//1. Leia o código abaixo
    

    // const usuarios = [
    //   { nome: "Amanda Rangel", apelido: "Mandi" },
    //   { nome: "Laís Petra", apelido: "Laura" },
    //   { nome: "Letícia Chijo", apelido: "Chijo" }
    // ]
    
    // const novoArrayA = usuarios.map((item, index, array) => {
    //    console.log(item, index, array)
    // })

    
 //   a) O que vai ser impresso no console?

//  { nome: "Amanda Rangel", apelido: "Mandi" },
//  { nome: "Laís Petra", apelido: "Laura" },
//  { nome: "Letícia Chijo", apelido: "Chijo" }


// 2. Leia o código abaixo
    

    // const usuarios = [
    //   { nome: "Amanda Rangel", apelido: "Mandi" },
    //   { nome: "Laís Petra", apelido: "Laura" },
    //   { nome: "Letícia Chijo", apelido: "Chijo" },
    // ]
    
    // const novoArrayB = usuarios.map((item, index, array) => {
    //    return item.nome
    // })
    
    // console.log(novoArrayB)
   
    // a) O que vai ser impresso no console?

    // 0 Amanda Rangel
    // 1 Laís Petra
    // 2 Letícia Chijo
    //length 3

    // 3. Leia o código abaixo
    

    // const usuarios = [
    //   { nome: "Amanda Rangel", apelido: "Mandi" },
    //   { nome: "Laís Petra", apelido: "Laura" },
    //   { nome: "Letícia Chijo", apelido: "Chijo" },
    // ]
    
    // const novoArrayC = usuarios.filter((item, index, array) => {
    //    return item.apelido !== "Chijo"
    // })
    
    // console.log(novoArrayC)
        
    // a) O que vai ser impresso no console?

    //  { nome: "Amanda Rangel", apelido: "Mandi" },
    //  { nome: "Laís Petra", apelido: "Laura" },

    // Dado o seguinte array de cachorrinhos que são clientes de um pet shop, realize as operações pedidas nos itens abaixo utilizando as funções de array map e filter:
    
const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poolde"},
    { nome: "Caramelo", raca: "Vira-Lata"},
]

// a) Crie um novo array que contenha apenas o nome dos doguinhos

const nomesDoguinhos = pets.map((item, index,array) => {
    return item.nome
})
console.log(nomesDoguinhos)

//b) Crie um novo array apenas com os cachorros salsicha

const doguinhosSalsicha = pets.filter((item, index, array) => {
    return item.raca == "Salsicha"
})
console.log(doguinhosSalsicha)

//c) Crie um novo array que possuirá mensagens para enviar para todos os clientes que são poodles. A mensagem deve ser: "Você ganhou um cupom de desconto de 10% para tosar o/a [NOME]!"
// const nomePoodle = pets.filter((item, index, array) => {
//         item.raca == "Poodle"
        
})

const callback = pets.map((item, indice, array) => {
    if (item.raca === "Poodle") {
        return item.nome
      
    }
    return item.nome
})