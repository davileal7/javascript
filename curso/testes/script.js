var paragrafo = document.createElement('h1')

var texto = document.createTextNode("Oiii")

paragrafo.appendChild(texto)

var body = document.querySelector("body")

body.appendChild(paragrafo)



var remove = document.querySelector("h1")
remove.addEventListener("click", function () {
    this.remove()
    
})

var add = document.querySelector("#item3")
add.addEventListener("click", function () {
    add.append("TESTE")
    
})

const novaLista = document.querySelector("#item2");
novaLista.addEventListener("click", function () {
    var lista = document.createElement("li")
    var frase = document.createTextNode("frase criada")
    lista.appendChild(frase)
    body.appendChild(lista)
    const cor = document.querySelector("#item2")
    cor.style.background = "red"
    
})


const cor = document.querySelector("#item1")
cor.addEventListener("click", function () {
    const verde = document.querySelector("#item2")
    verde.style.background = "green"
    
})

const remover = document.querySelector("#item3")
remover.addEventListener("click", function () {
    var del = document.querySelector("h1")
    del.remove()
    
})


 const criarImg = document.querySelector("#btn")
 criarImg.addEventListener("click", function () {
    var imagem = document.createElement("img")
    var corpo = document.querySelector("#imagem")
    corpo.appendChild(imagem)
    imagem.src="brisela.jpg"
    
 })



 const del = document.querySelector("#deletar")
 del.addEventListener("click",function () {
   var apagar = document.querySelector("img")
   apagar.remove()
 })

 var mouse = document.querySelector("h1")
 mouse.addEventListener("mouseover", function () {
    this.style.background = "pink"
 mouse.addEventListener("mouseout", function () {
    this.style.background = ''    
 })   
 })

 const mouseSair = document.querySelector("body")
 mouseSair.addEventListener("mouseover", function () {
    var limpar = document.querySelector("body")
    limpar.style.background = 'white'
    
 })




