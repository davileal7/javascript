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
         console.log("Oi, tudo bem? " + this.nome)
    },
    hobby: function () {
        return "Video Game"
    }
};

objeto.aniversario()

console.log(objeto.idade)

var sdc = objeto.saudacao()

objeto.falar()

var lazer = objeto.hobby()

console.log("Este é meu hobby: " + lazer)
