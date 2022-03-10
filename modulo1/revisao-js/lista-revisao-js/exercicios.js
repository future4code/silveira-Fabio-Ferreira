// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
    return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
  return array.reverse()
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
  return array.sort((a, b) => a - b);
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
  let arrayPar = []
  for(let i = 0; i < array.length; i++){
      if (array[i] % 2 === 0){
          arrayPar.push(array[i])
      }
    }
    return arrayPar;
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
  let arrayPar1 = []
  let arrayQuadrado = []
  for(let i = 0; i < array.length; i++){
      if (array[i] % 2 === 0){
          arrayPar1.push(array[i])
      }
    }
  for(let x = 0; x < arrayPar1.length; x++){
      arrayQuadrado.push(arrayPar1[x] ** 2)
      
  }
  return arrayQuadrado
}


// EXERCÍCIO 06
function retornaMaiorNumero(array) {
  let i = 0
  let maiorNumero = -Infinity
  while(i < array.length){
      if(array[i] > maiorNumero){
          maiorNumero = array[i]
      }
      i++
  }
  return maiorNumero
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    let maiorNumero;
    let menorNumero;

    if (num1<num2){
        maiorNumero = num2;
        menorNumero = num1} 
    else {
        maiorNumero = num1;
        menorNumero = num2}   

    maiorDivisivelPorMenor = (maiorNumero % menorNumero == 0);
    diferenca = maiorNumero - menorNumero;

    var objeto = {maiorNumero, maiorDivisivelPorMenor, diferenca}

    return objeto
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
   
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {

}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}