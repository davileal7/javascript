const usuario = {
    nome: "Davi",
    age: 36,
    email: "davi_m_leal@hotmail.com"
};

const {nome, email} = usuario
console.log(nome);
console.log(email)


const numerosB = [1, 2, 3]
const [a, b, c] = numerosB

console.log("A: ", a)
console.log("B: ", b)
console.log("C: ", c)

function exibirDadosUsuario({nome, email}) {
    console.log(`Nome: ${nome}`);
    console.log(`email: ${email}`);
}

exibirDadosUsuario(usuario)