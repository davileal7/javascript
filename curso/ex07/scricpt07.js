var area = document.getElementById('area')    //selecionado area
area.addEventListener('click', clicar)       //ligação entre o html e javascript//
area.addEventListener('mouseenter',entrar)
area.addEventListener('mouseout',sair)


function clicar() {
    area.innerText = 'CLICOU'
    area.style.background = 'red'

    
}

function entrar() {
    area.innerText = 'ENTROU'
    area.style.background = 'orange'
    
}

function sair() {
    area.innerText = 'SAIU'
    area.style.background = 'green'

}