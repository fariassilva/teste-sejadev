const limite =50
const valor_da_multa = 4
const peso_do_peixes = 60



if (peso_do_peixes > limite) {

excesso= peso_do_peixes - limite
  
} else{
  excesso = 0
}

multa = excesso * valor_da_multa

console.log("excesso:" , excesso)
console.log("multa: R$" , multa)