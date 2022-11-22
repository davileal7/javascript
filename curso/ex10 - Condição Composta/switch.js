// SWITCH
var agora = new Date
var diaSem = agora.getDay()

console.log(`Hoje é ${agora}`)
switch(diaSem) {
    case 0:
        console.log('Domingo/Sunday')
        break
    case 1:
        console.log('Segunda/Monday')
        break
    case 2:
        console.log('Terça/Third')
        break
    case 3:
        console.log('Quarta/Fourth')
        break
    case 4:
        console.log('Quinta/Thursday')
        break
    case 5:
        console.log('Sexta/Friday')
        break
    case 6:
        console.log('Sábado/Saturday')
        break
    default:
        console.log('ERRO')
        break

}