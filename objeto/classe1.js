class Lancamento {
    constructor(nome = 'Genérico', valor = 0){
        this.nome = nome
        this.valor = valor
    }
}

class CicloFinanceiro {
    constructor(mes, ano) {
        this.mes = mes
        this.ano = ano
        this.lancamentos = []
    }
    
    addLancamento(...lancementos) {
        this.lancamentos.forEach(i => this.lancamentos.push(i))
    }

    sumario() {
        let valorConsolidado = 0
        this.lancamentos.forEach(i => {
            valorConsolidado += i.valor
        })
        return valorConsolidado
    }
}

const salario = new Lancamento('Salario', 45000)
const contaDeLuz = new Lancamento('Luz', -220)

const contas = new CicloFinanceiro(1, 2021)
contas.addLancamento(salario, contaDeLuz)
console.log(contas.sumario());