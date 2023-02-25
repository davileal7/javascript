const nomeUsuario = "Davi"
const idade = 40
const mensagem = `Olá, meu nome é ${nomeUsuario} e tenho ${idade}`;

console.log(mensagem)

const saldo = -1000
const mensagemB = `O seu saldo atual é: ${
    // if ternário
    saldo > 0 ? `R$${saldo}` : "negativo"
}.`;

console.log(mensagemB);
    
