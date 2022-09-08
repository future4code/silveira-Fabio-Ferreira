const imprimeData =(nome: string, data: string): string =>{
    return `Olá me chamo ${nome}, nasci no dia ${data.split("/")[0]} do mês de ${data.split("/")[1]} do ano de ${data.split("/")[2]}`
}
console.log(imprimeData("Fabio", "02/05/1999"))