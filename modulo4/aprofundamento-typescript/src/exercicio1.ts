//a) Crie uma variável minhaString do tipo string e atribua um valor a ela. Tente atribuir um número a esta variável. O que acontece?

// let minhaString: string = "Fabio"

// minhaString = 1

//o tipo number não pode ser atribuido a uma variavel tipada como string

//b) Crie uma variável meuNumero do tipo number e atribua um valor numérico. Como fazer para que essa variável também aceite strings? Ou seja, como criamos no typescript uma variável que aceite mais de um tipo de valor?

let meuNumero: number = 1

//Para que a variavel "meuNumero" aceite string devemos usar | para dizer ao programa que a variavel
//poderá receber outro tipo além de number, assim:

let meuNumero1: number | string = 1

// c) Agora crie um novo objeto. Este objeto é uma pessoa, e deve possuir três propriedades:

type Pessoa = {
    nome:string,
    idade:number,
    corFavorita: Cor
}

//d) Modifique a propriedade corFavorita para que apenas seja possível escolher entre as cores do arco-íris. Utilize um enum para isso.


enum Cor{
    VERMELHO = 'vermelho',
    LARANJA = 'laranja',
    AMARELO = 'amarelo',
    VERDE = 'verde',
    AZUL = 'azul',
    ANIL = 'anil',
    VIOLETA = 'violeta'
}

const pessoa1: Pessoa = {
    nome:"Fabio",
    idade:23,
    corFavorita: Cor.VIOLETA
}
const pessoa2: Pessoa = {
    nome:"Noelly",
    idade:22,
    corFavorita:Cor.ANIL
}
const pessoa3: Pessoa = {
    nome:"Athos",
    idade:1,
    corFavorita: Cor.AZUL
}
const pessoa4: Pessoa = {
    nome:"Esther",
    idade:7,
    corFavorita: Cor.VERMELHO
}