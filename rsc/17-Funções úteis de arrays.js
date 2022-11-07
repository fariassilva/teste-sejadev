const array = [1,5,4,3,10,7,8,20,12]

array.forEach((elemento, posicao) => {

 // console.log(elemento)
  //console.log(posicao)

})

//find   retorna o elemento

const valor = array.find((elemento) => {
if( elemento === 13) return true
 return false
})

//console.log(valor)

// findindex   retorna a posição
const index = array.findIndex((elemento) => {
  if( elemento === 12) return true
   return false
  })
  
  console.log(index)

  // some  retorna truee se pelo menos um numero satisfazer sua condição

  const some = array.some((elemento) => {
    if( elemento === 10) return true
     return false
    })
    
    console.log(some)


 // every   retorna truee se todos os numero satisfazer sua condição
    const every = array.every((elemento) => {
      if( elemento >= 1) return true
       return false
      })
      
      console.log(every)


      const newarray = [1,2,3,4,5]

      //splice corta um array o primeiro é o inicio  e o segundo a quantidade 

      console.log(newarray.splice(1,2))

      //map  alterar  os valores de um array seguindo uma regra

      console.log(newarray.map((elemento) =>{
      return elemento * 2

      }))

      // filtrar  vsi filtra os elemento dentro da array

      console.log(newarray.filter((elemento) => {
        return elemento % 2 === 0

      }))

      //reduce  reduz o array para outro elemento

      console.log(newarray.reduce((acumulado,elemento) => {
        return acumulado - elemento
      },100))