ˋˋˋ
function calculaNota(ex, p1, p2) {
  // Escreva seu código aqui
  let pesoMP = 1+2+3
  let dividendoMP = (ex * 1) + (p1 * 2) + (p2 * 3)
  let resultadoMP = dividendoMP / pesoMP;
  
  if (resultadoMP >= 9) {
    return "A"
  } else if (resultadoMP < 7.5 && resultadoMP >= 6){
    return "C"
  } else if (resultadoMP < 6) {
    return "D"
  } else if (resultadoMP < 9 && resultadoMP < 8){
    return "B"
  }
}
ˋˋˋ