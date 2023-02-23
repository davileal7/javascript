//Operador Lógico

var nome = "Davi";
var idade = 18;

//E - &&

if (nome == 'Davi' && idade > 10) {
    console.log('Verdadeiro')
} else {
    console.log("Falso")
}

// Ou - ||

if (2 === 5 || nome == "Rafa") {
    console.log("Verdadeiro")
} else {
    console.log("Falso")
}

// Not - ! inverte o valor
if (!false) {
    console.log("Verdadeiro")   
}


if (!(nome == "Rafa")) {
    console.log("Verdadeiro")   
}