const person = {
  name: "alessandro",
  lastName: "farias"
}




//Object.keys cria um array com todos as chaves do objeto

//console.log(Object.keys(person))

//Object.values  cria um array com todos os valores do objeto

//console.log(Object.values(person))

//Object.entries cria um array com todos os valores e chaves  do objeto

//console.log(Object.entries(person))


const livro = {
  "livro A" : 19.90,
  "livro B": 97.00,
  "livro C": 20.00
}

const values = Object.values(livro)
const sum = values.reduce((val,acc)=>{
  return val + acc
},0)

console.log(sum)