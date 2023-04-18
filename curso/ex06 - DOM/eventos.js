//EVENTOS onLoad (48)
window.onload = function () {
    console.log("Carregou o DOM");
    var title2 = document.querySelector("#title");
    console.log(title2);
}
console.log("Carregou o JS")
var title = document.querySelector("#title");
console.log(title);

//EVENTO CLICK (49)
 var botao = document.querySelector("#btn")

 botao.addEventListener("click", function () {
    console.log("clicou");
    this.style.color = "red";

    var lista = document.querySelector("#lista1");
    lista.style.display = "none"
    
 });

var title = document.querySelector("#title");
title.addEventListener("click", function() {
    this.style.background = 'blue'
    this.style.color = 'white'
    var sub = document.querySelector(".sub2");
    sub.style.display = "none";
 })
 var duplo = document.querySelector("#teste");
    duplo.addEventListener("dblclick", function () {
    console.log("click duplo")

    var volta = document.querySelector("#lista1");
    volta.style.display = "block"
 })

 //MOUSE EVENTOS (50)

 var titulo = document.querySelector("#title");
 titulo.addEventListener("mouseover", function () {
    this.style.background = "yellow"
 titulo.addEventListener("mouseout", function () {
    this.style.background = "pink"
    
 })   
 })

 var sub = document.querySelector(".sub2");
 sub.addEventListener("mouseover", function () {
    var legenda = document.querySelector("#legenda")
    legenda.classList.remove("hide")
 })

 sub.addEventListener("mouseout", function () {
    var legenda = document.querySelector("#legenda")
    legenda.classList.add("hide")
 })

 // KEYDOWN (51)
document.addEventListener("keydown", function (e) {

    if (e.key === 'Enter') {
        console.log("Apertou ENTER")
    }
})

document.addEventListener("keyup", function (e) {

    if (e.key === "Enter") {
        console.log("Soltou o Enter");
        
    }
    
})

