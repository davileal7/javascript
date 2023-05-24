// Arrow function
const somaB = (a, b) => a + b;
console.log(somaB(3, 3));

const numeros = [1, 2, 3, 4, 5]
const numerosPares = numeros.filter((numero) => numero % 2 === 0);
console.log(numerosPares)

let a = 12;
let b = 6;

let c = (n1,n2) => n1 + n2;

console.log(c(a,b))

let d = (x, y) => {
    let op;

    if (x > 20) {
        op = x * y;
    } else {
        op = x / y;
    }
    return op;
}

console.log(d(a,b))

///Casos de Uso

let roupas = [
    {produto: 'camisa', preco: 25, cor: 'verde'},
    {produto: 'calça', preco: 55, cor: 'azul'},
    {produto: 'blusa', preco: 70, cor: 'marron'},
    {produto: 'tenis', preco: 110, cor: 'preto'}
];

let maior50 = roupas.filter((roupa) => {
    return roupa.preco >= 50
});

console.log(maior50)


