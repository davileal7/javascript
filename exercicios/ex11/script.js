function carregar(){
var msg = document.getElementById('msg')
var img = document.getElementById('imagem')
var data = new Date
var hora = data.getHours()
var min = data.getMinutes()

if (hora >= 0 && hora < 12) {
    //Bom Dia
    msg.innerHTML = `Agora são ${hora}:${min} horas, Boa dia!`
    img.src = 'imagens/manhã.png'
    document.body.style.background = 'rgb(236, 170, 90)'

} else if (hora >= 12 && hora < 18) {
    //Boa Tarde
    msg.innerHTML = `Agora são ${hora}:${min}horas, Boa tarde!`
    img.src = 'imagens/tarde.png'
    document.body.style.background = 'rgb(143, 185, 233)'

} else {
    //Boa Noite
    msg.innerHTML = `Agora são ${hora}:${min} - Boa noite!`
    img.src = 'imagens/noite.png'
    document.body.style.background = 'black'

}

}