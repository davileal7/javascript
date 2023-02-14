function adição() {
    var tn1 = document.getElementById('txtn1')
    var tn2 = document.querySelector('input#txtn2')
    var res = document.getElementById('res')
    var n1 = Number(tn1.value)
    var n2 = Number(tn2.value)
    var s = n1 + n2
    res.innerHTML = ` ${n1} + ${n2} = <strong>${s}</strong> `
    
}
function subtração(){
    var tn3 = document.getElementById('txtn3')
    var tn4 = document.querySelector('input#txtn4')
    var res = document.getElementById('res')
    var n3 = Number(tn3.value)
    var n4 = Number(tn4.value)
    var s = n3 - n4
    res.innerHTML = ` ${n3} - ${n4} = <strong>${s}</strong> `
    
}
function multiplicação() {
    var tn5 = document.getElementById('txtn5')
    var tn6 = document.querySelector('input#txtn6')
    var res = document.getElementById('res')
    var n5 = Number(tn5.value)
    var n6 = Number(tn6.value)
    var s = n5 * n6
    res.innerHTML = `${n5} x ${n6} = <strong>${s}</strong>`
    
}
function divisão() {
    var tn7 = document.getElementById('txtn7')
    var tn8 = document.querySelector('input#txtn8')
    var res = document.getElementById('res')
    var n7 = Number(tn7.value)
    var n8 = Number(tn8.value)
    var s = n7 / n8
    res.innerHTML = `${n7} / ${n8} = <strong>${s}</strong> `
}
