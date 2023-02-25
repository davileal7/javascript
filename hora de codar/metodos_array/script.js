const numeros = [2, 3, 5, 77, 10]
const numerosDobrados = numeros.map((numero) => numero * 2);
console.log(numerosDobrados)


let meuArray = [10, 20, 30, 40]
let novoArray = meuArray.map((item) => {
    return item * 2
})
console.log(novoArray)

const numerosA = [1, 2, 3, 4, 6 ,8]
const numerosImpares = numerosA.filter((numero) => numero % 2 === 1);
console.log(numerosImpares)

const numerosB = [2, 3, 4, 5, 6]
const somaNumeros = numerosB.reduce((total, numero) => total + numero, 0)
console.log(somaNumeros)

const numerosC = [1, 2, 3, 4, 5]
const encontrar = numerosC.find((numero) => numero === 3)
console.log(encontrar)

const nomes = ["Davi", "Pedro", "Sara"]
nomes.forEach((nomes) => console.log(nomes))