function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var forano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    // caso não preencha
    if (forano.value.length == 0 || forano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var forsexo = document.getElementsByName('radsex')
        var idade = ano - Number(forano.value)
        var gênero = ''
        var img = document.createElement('img')//criando imagem em JS
        if (forsexo[0].checked) {
            gênero = 'Homem'
            if (idade >=0 && idade < 10) {
                img.setAttribute('src','imagens/H criança.png') //criança
            } else if (idade < 21) { 
                img.setAttribute('src','imagens/H jovem.png') //jovem
            } else if (idade < 50) {
                img.setAttribute('src','imagens/H adulto.png')  //adulto
            } else {
                img.setAttribute('src','imagens/H idoso.png')  //idoso

            }

        } else if (forsexo[1].checked) {
            gênero = 'Mulher'
            if (idade >=0 && idade < 10) { 
                img.setAttribute('src','imagens/F criança.png')//criança
            } else if (idade < 31) {  //jovem
                img.setAttribute('src','imagens/F jovem.png')
            } else if (idade < 50) {  //adulta
                img.setAttribute('src','imagens/F adulta.png')
            } else {  //idosa
                img.setAttribute('src','imagens/F idosa.png')

            }
        }
        res.style.textAllign = 'center' //texto centralizado em JS
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)  //adciona img
        
    }

}