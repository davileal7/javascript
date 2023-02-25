class Pessoa {
    constructor(nome, idade) {
        this.nome = nome
        this.idade = idade
    }

    apresenta() {
        console.log(`My name is ${this.nome} and my age this ${this.idade}.`)
    }
}

const pessoa1 = new Pessoa("Rafael", 15)
const pessoa2 = new Pessoa("Laura", 2)

pessoa1.apresenta()
pessoa2.apresenta()

class Funcionario extends Pessoa {
    constructor(nome, idade, salario) {
        super(nome, idade)
        this.salario = salario;
    }

    apresentaFuncionario() {
        console.log(`My name is ${this.nome}, age ${this.idade} and ${this.wage}`)
    }
}

const funcionario1 = new Funcionario("Flavio", 34, 5000)

funcionario1.apresenta()

funcionario1.apresentaFuncionario()
