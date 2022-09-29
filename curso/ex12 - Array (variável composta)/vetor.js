var valores = [8,14,7,4,2,9]
valores.sort()
console.log(valores[3])

/*for(var pos=0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)

} */

for( pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}