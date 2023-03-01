var objeto = {
    nome: "Davi",
    idade: 36,
    profissao: "programador",
    estaTrabalhando: false
};

console.log(objeto)
console.log(objeto.nome)
console.log(typeof objeto)

//Criando Objetos com métodos
let jogos = {
    game: "Resident Evil 7",
    video_game: "Ps4",
    genero: function() {
        console.log("Terror")
    },
    soma: function (a,b) {
        return a + b;
    }
}

jogos.genero()

var soma = jogos.soma(5,5)
console.log(soma)