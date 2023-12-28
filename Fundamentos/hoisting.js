// nesse caso acontece o hoisting com a variável var
console.log('a =', a)
var a = 2
console.log('a =', a)

// a variável let não aceita o conceito de hoisting
console.log('b =', b)
let b = 2
console.log('b =', b)