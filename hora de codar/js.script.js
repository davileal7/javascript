var div1 = document.querySelector(".lanche")
var newParagrafo = document.createElement("h5")
var texto = document.createTextNode("X-bacon")
newParagrafo.appendChild(texto)
div1.appendChild(newParagrafo) 


var lanche = document.querySelector(".lanche")
var newSpan = document.createElement("span")
var palavra = document.createTextNode("palavra no span")
newSpan.appendChild(palavra)
lanche.appendChild(newSpan)

var container = document.querySelector('#container')
var elemento = document.createElement("span")
var textoSpan = document.createTextNode("TEXTO do Span")
elemento.appendChild(textoSpan)
container.appendChild(elemento)