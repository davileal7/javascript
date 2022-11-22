//CONDIÇÃO COMPOSTA


var idade = 70

if (idade < 16) {
    console.log('Não vota')
} else   if (idade < 18 || idade > 65) {
    console.log('voto opcional')    
} else {
    console.log('voto obrigatório')
}

var agora = new Date()

var hora = agora.getHours()
var min = agora.getMinutes()
var seg = agora.getSeconds()
var ano = agora.getFullYear()

if (hora < 12) {
    console.log('Bom Dia!')
} else if (hora <= 18) {
    console.log('Boa Tarde!')
} else  {
    console.log('Boa Noite!')
} console.log(`Agora são ${hora}:${min}:${seg} ano ${ano}`)



