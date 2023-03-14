//tag
var titulo = document.getElementsByTagName('h1')[0]
console.log(titulo)

var lis = document.getElementsByTagName('li')
console.log(lis[3])

//id
var paragrafo = document.getElementById('paragrafo')
console.log(paragrafo)

//class
var itens = document.getElementsByClassName("item")
console.log(itens)

//querySectorAll
var itensQuery = document.querySelectorAll('#lista1 .item')
console.log(itensQuery)

//querySelector
var itenQuery3 = document.querySelector('#lista1');
console.log(itenQuery3)

//ALTERAR conteúdo
var titulo = document.querySelector('#title');
titulo.innerHTML = "mudei AQUI"

var subTitulo = document.querySelector(".sub2")
subTitulo.textContent = "Mudei o SUB"