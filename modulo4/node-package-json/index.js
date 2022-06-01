//a)module.export = "nome do que quer exportar"

//b)

let nome = process.argv[2]
let idade = Number(process.argv[3])

//c)

let idadeDepois = idade+7


console.log(`seu nome é ${nome} e você tem ${idade} anos daqui 7 anos você terá ${idadeDepois}`)
