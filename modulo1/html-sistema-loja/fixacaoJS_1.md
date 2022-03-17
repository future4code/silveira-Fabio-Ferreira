´´´
function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {
 // Escreva seu código aqui
 let porcentagem = valorTotalVendas * 0.05
 let comissao = qtdeCarrosVendidos * 100
 let salario = 2000 + comissao + porcentagem
 return salario
}
´´´