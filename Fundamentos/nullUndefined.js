let valor // não incializado
console.log(valor)

valor = null// ausência de valor
console.log(valor)
// console.log(valor.toString()) // Erro! Pois está tentando aplicar um to.String na variável null

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto.preco)

produto.preco = undefined // evite atribuir undefined
console.log(!!produto.preco)
// delete produto.preco (caso queira deletar o atributo)
console.log(produto)

produto.preco = null // sem preco
console.log(!!produto.preco)
console.log(produto)