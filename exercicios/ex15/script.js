let num = document.getElementById('fnum')
let lista = document.querySelector('select#flista')
let res = document.getElementById('res')
let valores = []

function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }

}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }

}

function adicionar() {
    if(isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `valor ${num.value} adcionado.`
        lista.appendChild(item)
        res.innerHTML = ''

    } else {
        window.alert('Valor inválido ou já encontrado na lista.')

    }
    num.value = '' //apagar após escrever
    num.focus()
    
}

function finalizar () {
    if (valores.length == 0) {
        window.alert('Adcione valores antes de finalizar.')
    } else {
        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for(let pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior)
                maior = valores[pos]
            if (valores[pos] < menor)
                menor = valores[pos]
        }
        media = soma / total        
        
        //print na tela
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${total} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor é ${maior}</p>`
        res.innerHTML += `<p>O menor valor é ${menor}</p>`
        res.innerHTML += `<p>A soma de todos valores é ${soma}</p>`
        res.innerHTML += `<p>A média de todos valores é ${media}</p>`
    }
}

