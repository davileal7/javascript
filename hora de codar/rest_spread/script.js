// rest
function somaC(...numeros) {
    return numeros.reduce((total, numero) => total + numero)
}

console.log(somaC(1, 2, 3, 4, 5))
console.log(somaC(4, 12, 22, 50, 3, 7, 10, 20))


// spread
const n1 = [1, 2, 3]
const n2 = [5, 10, 30]

const n1_n2 = [...n1,...n2]
console.log(n1_n2)

const usuario = {
    nome: "Davi",
    idade: 30
}

const usuarioComEndereco = {...usuario, endereco: "Rua nadim, n° 400"}

console.log(usuarioComEndereco)