
var c = 1
while (c <= 3){
    console.log(`teste lógico no ÍNICIO ${c}`)
    c++ //c = c +1//
} 

var c = 1
do {
    console.log(`teste lógico no FIM ${c}`)
    c++   

} while  (c <= 3)

console.log('REPETIÇÕES, For')
console.log('Vai começar...')


let index = 0
const array = [1,2,3,4,]

while (index < array.length) {
    console.log(array[index])
    index++
    
}

console.log(index)

//Break
var x = 10;
while (x < 100) {
   
    x += 10

if (x === 50 || x == 30) {
    console.log('CONTINUE')
    continue;
}

console.log("Testando continue " + x)

}
