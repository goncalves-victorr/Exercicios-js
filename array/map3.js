Array.prototype.map2 = function(callback) {
    const newArray = []
    for( let i = 0; i < this.length; i++){
        newArray.push(callback(this[i], i, this))
    }
    return newArray
}

const carrinho = [
    '{ "nome: ": "Borracha", "preco": 3.45}',
    '{ "nome: ": "Caderno", "preco": 3.45}',
    '{ "nome: ": "Kit de Lapis", "preco": 3.45}',
    '{ "nome: ": "Caneta", "preco": 3.45}'
]

// Retornar um array apenas com os preços

const  paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

const resulltado = carrinho.map2(paraObjeto).map2(apenasPreco)
console.log(resulltado);