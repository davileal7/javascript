
function clicar(){
    var res = document.getElementById('res')
    var op1 = document.getElementById('op1') 

    res.innerHTML = `${op1.value}.`
    
    if (op1.value == 'Resident Evil 1') {
        res.innerHTML += 'O melhor da série'

    } else if (op1.value == 'Dino Crises') {
        res.innerHTML += 'Bom também!!!'

    } else if (op1 == 'Resident Evil 5') { 
        res.innerHTML += 'jogo ruim'
    } else {
        res.innerHTML += 'fala um jogo aeeee'
    } 

    op1.value = ''

}