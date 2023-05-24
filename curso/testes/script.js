var n = document.querySelector("#valor1")
var res01 = document.querySelector(".res01")
var res02 = document.querySelector(".res02")

function enter() {
    if (n.value >= 10) {
        res01.innerHTML = "MAIOR"
    }  else {
        res02.innerHTML = "menorr"
    }
}