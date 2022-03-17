function calculaPrecoTotal(quantidade) {
  // Escreva seu código aqui
  if (quantidade < 12){
    quantidadeTotal = quantidade * 1.30
    return quantidadeTotal
  } else {
    return quantidade
  }
}