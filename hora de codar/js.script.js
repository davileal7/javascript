var teste = 5

console.log(this)
console.log(teste)

var objeto = {
    nome: "Davi",
    idade: 36,
    falar: function () {
        console.log("Oiiiii")
    },
    aniversario: function(){
        this.idade += 1
    },
    saudacao: function () {
         return "Oi, tudo bem? " + this.nome
    }
};

objeto.aniversario()

console.log(objeto.idade)

var sdc = objeto.saudacao()

console.log("Olá " + sdc)
