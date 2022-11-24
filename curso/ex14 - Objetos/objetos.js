let pessoa = {
nome:'Davi',
sexo:'M',
peso: 84.4,

engordar(p=0){
    console.log('Engordou')
    this.peso += p
}

}

pessoa.engordar(4)
console.log(`${pessoa.nome} pesa ${pessoa.peso} Kg`)