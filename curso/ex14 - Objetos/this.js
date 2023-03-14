//fora dos escopos locais o this sempre se refere ao objeto
//em objetos o this vai se referir a instância e pode acessar suas propriedades
var teste = 5
console.log(this)

var pessoa = {
    nome: "Davi",
    idade: 36,

    falar: function () {
        console.log("Olá, tudo bem?")
    },
    aniversario: function(){
        this.idade += 1
    },
    saudacao: function () {
         console.log(`Seja bem-vindo ${this.nome}!`)
    },
    hobby: function () {
        return "Video Game"
    }
};

pessoa.falar()
pessoa.saudacao()
console.log(`gosto de jogar ${pessoa.hobby()}`)
pessoa.aniversario()
console.log(`Este ano faço ${pessoa.idade} anos`)


