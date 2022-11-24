var valores = [8,14,8,4,2,9]

/*1° opção para FOR*/
for(var ordem=0; ordem < valores.length; ordem++) {
    console.log(`A posição ${ordem}° tem o valor ${valores[ordem]}`)
} 

console.log('---------------------------')

/*2° opção para FOR*/
for( ordem in valores) {
    console.log(`A posição ${ordem}° tem o valor ${valores[ordem]}`)
}


var times = ["Palmeiras","Internacional","Fluminense","Corinthians"]


for(colocação in times){
    console.log(`${colocação} ${times[colocação]}`)
}