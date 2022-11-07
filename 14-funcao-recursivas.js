function fatorial(n) {
  if ( n <= 2) return n

  return(n - 1)  * n
  
}

const numero = 5
const resposta = fatorial(numero)
console.log(resposta)