function contar() {
    var ini = document.getElementById('txi')
    var fim = document.getElementById('txf')
    let passo = document.getElementById('txp')
    let res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert('[ERRO] faltam dados')
        res.innerHTML('Impossivel contar')
    } else {
        res.innerHTML = 'Contando: <br>'
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        if (p <= 0) {
            window.alert('Passo inválidado! considerando passo 1')
            p = 1
        }
        //contagem CRESCENTE
        if(i < f) {
            for(var c = i;c <= f;c += p) {
                res.innerHTML += ` ${c} `
            } 
        //contagem DECRESCENTE
        } else {
            for(var c = i;c >= f;c -= p) {
                res.innerHTML += ` ${c} `
            }

        }
        res.innerHTML += `...\u{1F3C1}`

  
    }
}