function carregar(){
var msg = document.getElementById('msg')
var img = document.getElementById('imagem')
var data = new Date
var hora = data.getHours()
msg.innerHTML = `Agora são ${hora} horas.`
if (hora >= 0 && hora < 12) {
    //Bom Dia
    img.src = 'imagens/01manhã.jpg'
    document.body.style.background = 'rgb(236, 170, 90)'

} else if (hora >= 12 && hora < 18) {
    //Boa Tarde
    img.src = 'imagens/02tarde.jpg'
    document.body.style.background = 'rgb(143, 185, 233)'

} else {
    //Boa Noite
    img.src = 'imagens/03noite.jpg'
    document.body.style.background = 'black'

}

}