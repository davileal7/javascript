//Criando elemento n°38
var novoParagrafo = document.createElement('p')
var texto = document.createTextNode("Criando um texto")
novoParagrafo.appendChild(texto)
var body = document.querySelector("body")
body.appendChild(novoParagrafo)

var container = document.querySelector('#container')
var elemento = document.createElement("span")
var textoSpan = document.createTextNode("TEXTO do Span")
elemento.appendChild(textoSpan)

elemento.appendChild(document.createTextNode("texto do span"))
container.appendChild(elemento)

// Removendo elementos
var container = document.querySelector("#container")
var p = document.querySelector("#container p")
container.removeChild(p)

var sub = document.querySelector(".sub")
sub.remove()

// Adcionar Elemento
var div = document.createElement("div")
div.classList = "div-criada"
var container = document.querySelector('#container')
container.appendChild(div)

var div2 = document.querySelector("div");
div2.classList = "div-before";
var div3 = document.querySelector("#container .div-criada");
console.log(div3);

container.insertBefore(div2,div3)
