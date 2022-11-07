/*
let array = [true,false,0,1,2,"string aqui","sejadev"]

array.pop()
array.push(1000,"string")


let newarray = [10,20,30]
let i = 0
while (i < newarray.length) {
  console.log(i)
  console.log(newarray[i])
  i++
}

for (let pos = 0; pos < newarray.length ; pos ++) {
  console.log(newarray[pos])
 

}

for (const pos in newarray) {
  console.log(pos)
  console.log(newarray[pos])
  
}*/

const numero = [10,20,30]
let soma = 0

for (let num of numero) {
  soma = soma + num
}
const media = soma / numero.length
 console.log(media)
  console.log(soma)
  




