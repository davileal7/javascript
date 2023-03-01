//parseFloat
console.log(parseFloat("10.999"));
console.log(Number.parseFloat("10.999"));

//parseInt
console.log(parseInt('10'));
console.log(parseInt(10.50));

//toFixed
console.log(30.4855555.toFixed(1));

//isNan
//console.log(isNaN("teste"));
//consoloe.log(isNaN(12));
//consoloe.log(isNaN("27"));

let nome = "Davi"
console.log(nome.length)

// indexOf
console.log(nome[2])

//replace
var nome_replace = nome.replace("davi", "leal")
console.log(nome_replace)

//slice 
var teste_slice = nome.slice(1,3)
console.log(teste_slice)

let frase = "Vai Corinthians"
console.log(frase.toUpperCase())
console.log(frase.toLowerCase())

//trim
let teste_trim = "        Moreira   "
var novo_trim = teste_trim.trim()
console.log(teste_trim)
console.log(novo_trim)

//split
console.log(nome.split(" "))

// JOIN
var x1 = ["Olá","Mundo"]
console.log(x1.join(","))