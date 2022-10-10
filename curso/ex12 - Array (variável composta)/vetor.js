var valores = [8,14,8,4,2,9]
valores.sort()
console.log(`${valores[3]} terceiro número`)

for(var pos=0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)

} 

console.log('---------------')

for( pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}