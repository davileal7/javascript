var valores = [8,14,8,4,2,9]

console.log(`${valores[3]} é o terceiro número`)


/*1° opção para FOR*/
for(var ordem=0; ordem < valores.length; ordem++) {
    console.log(`A posição ${ordem} tem o valor ${valores[ordem]}`)

} 

console.log('---------------')

/*2° opção para FOR*/
for( ordem in valores) {
    console.log(`A posição ${ordem}° tem o valor ${valores[ordem]}`)
}