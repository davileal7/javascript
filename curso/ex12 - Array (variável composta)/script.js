var num = [5,8,2,9,3]     //array []
console.log(num)
console.log(`O vetor tem ${num.length} posições.`)
console.log(`o primeiro valor do vetor é ${num[0]}`)
var pos = num.indexOf(8)
console.log(`O valor 8 está na ${pos}`)


num[3] = 9 //acrescentar em 3°
num.push(7) //acrescentar em último
num.sort() //arrumar em crescente
console.log(num)