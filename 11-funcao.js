function par (num){
  return num %2 === 0
}


const epar = par(3)
console.log(epar)



for( let i= 0;i<=100;i++ ){


if(par(i)) console.log(i)

}