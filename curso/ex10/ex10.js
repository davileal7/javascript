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
if (hora < 12) {
    console.log('Bom Dia!')
} else if (hora <= 18) {
    console.log('Boa Tarde!')
} else  {
    console.log('Boa Noite!')
} console.log(`Agora são ${hora}`)

var agora = new Date
var diaSem = agora.getDay()
console.log(`Hoje é ${agora}`)

switch(diaSem) {
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('Segunda')
        break
    case 2:
        console.log('Terça')
        break
    case 3:
        console.log('Quarta')
        break
    case 4:
        console.log('Quinta')
        break
    case 5:
        console.log('Sexta')
        break
    case 6:
        console.log('Sábado')
        break
    default:
        console.log('ERRO')
        break

}
