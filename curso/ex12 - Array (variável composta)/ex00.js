//1° modo MAP
//passar por cada item do seu array e retorna alguma coisa em cada um deles
let meuArray = [1, 2, 3, 4, 5]
let novoArray = meuArray.map((item) => {
    return item *2
})
console.log(novoArray)

//2° modo FOR EACH
let meuArray2 = [1, 2, 3, 4, 5]
let novoArray2 = []
meuArray2.forEach((item) => {
    novoArray2.push(item * 2)
})
console.log(novoArray2)


//3° modo FILTER
//filtra os valores de dentro array e com uma regra retorna um novo array
let meuArray3 = [1, 2, 3, 4, 5]
let novoArray3 = meuArray3.filter((item) => {
    return item > 2
})
console.log(novoArray3)

//4° modo FIND
//busca o primeiro item que passe na regra
let meuArray4 = [1, 2, 3, 4, 5]
let novoArray4 = meuArray4.find((item) => {
    return item > 4
})
console.log(novoArray4)

//5° modo SOME
//verifica se pelo menos um item passa na regra do Array
let meuArray5 = [1, 2, 3, 4, 5]
let novoArray5 = meuArray5.some((item) => {
    return item == 2
})
console.log(novoArray5)

//6° modo INCLUDES
//verifica se o valor existe dentro do Array se sim true e não false
let meuArray6 = [1, 2, 3, 4, 5]
let novoArray6 = meuArray6.includes(3)
console.log(novoArray6)

//7° modo REVERSE
let meuArray7 = [1, 2, 3, 4, 5]
let novoArray7 = meuArray7.reverse()
console.log(novoArray7)