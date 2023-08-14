const nome = 'Rebeca'
const concetenacao = 'Olá ' + nome + '!'
const template = `
    Olá  
    ${nome}!`
console.log(concetenacao, template)

//expressoes
console.log(`1 + 1 = ${1 + 1}`)

const up = texto => texto.toUpperCase()
console.log(`Ei... ${up('cuidado')}!`) 