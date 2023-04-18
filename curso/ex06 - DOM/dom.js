//tag
var titulo = document.getElementsByTagName('h1')[0]
console.log(titulo)

var lis = document.getElementsByTagName('li')
console.log(lis[3])

//querySectorAll
var itensQuery = document.querySelectorAll('#lista1 .item')
console.log(itensQuery)

//ALTERAR conteúdo
//var titulo = document.querySelector('#title');
//titulo.innerHTML = "mudei AQUI"
//var subTitulo = document.querySelector(".sub2")
//subTitulo.textContent = "Mudei o SUB"

//TROCAR ELEMENTO (41°)
//var elemento = document.createElement("h3")
//elemento.classList = "testando-classe"
//var texto = document.createTextNode("Texto que foi trocado")
//elemento.appendChild(texto)
//console.log(elemento)
//var title = document.querySelector("#title")
//var pai = title.parentNode;
//pai.replaceChild(elemento, title)

//ALTERAR ATRIBUTO(42)
//var title = document.querySelector("#title");
//title.setAttribute("class", "testando-atributo");

//var botao = document.querySelector("#boi");
//botao.setAttribute("disabled", "disabled");

//ADCIONANDO CSS (43)
var title = document.querySelector("#title")
title.style.color = "red"
title.style.backgroundColor = "blue"
var subTitulo = document.querySelector(".sub2")
subTitulo.style.cssText = "color: yellow; background-color: black; font-size:3em;"

//PROPRIEDADES DO DOCUMENT (44)
console.log(document.head)
console.log(document.links[2])
document.links[2].textContent = "Facebook"

//CALL BACK FUNCTIONS (45)
function exibir(num) {
    console.log(`O resultado da soma é = ${num}`)
}

function soma(a, b, callback) {
    var op = a + b;
    callback(op)
}
soma(4, 4, exibir)

//setTimeOut (46) callBack Functions
setTimeout(function () {
    console.log("Testando o setTimeOut");
}, 5000);
console.log("Depois do setTimeOut")
//setInterval
//setInterval(function () {
   // console.log("setInterval")
    
//},1000);

//clearTimeOut (47)
var x = 0;
timer = setTimeout(function () {
    console.log("0 x 0");
}, 2000);
x = 5
if (x > 0) {
    clearTimeout(timer);
    console.log("O x passo de 0");
}

//clearInterval
interval = setInterval(function () {
    console.log("Imprimindo interval");
}, 500);
setTimeout(function () {
    console.log("NÃO precisa mais repetir");
    clearInterval(interval);
},1500)

