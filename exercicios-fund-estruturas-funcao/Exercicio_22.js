/*22) Criar uma função para calcular o valor a ser pago de anuidade de uma associação. A função recebe como
parâmetro um inteiro que representa o mês (1 - janeiro, 2 - fevereiro…) que foi paga e o valor da anuidade. A
anuidade deve ser paga no mês de janeiro. Por mês, é cobrado 5% de juros (sob o regime de juros
compostos). O retorno deve ser o valor a ser pago para o respectivo mês escolhido. */

function anuidade(mes, valor) {

    switch (mes) {

        case '1':

            console.log(`${valor + (valor * 0.05)}`);
            break;

        case '2':

            console.log(`${valor + (valor * 0.10)}`);
            break;

        case '3':

            console.log(`${valor + (valor * 0.15)}`);
            break;

        case '4':

            console.log(`${valor + (valor * 0.20)}`);
            break;

        case '5':

            console.log(`${valor + (valor * 0.25)}`);
            break;

        case '6':

            console.log(`${valor + (valor * 0.30)}`);
            break;

        case '7':

            console.log(`${valor + (valor * 0.35)}`);
            break;

        case '8':

            console.log(`${valor + (valor * 0.40)}`);
            break;

        case '9':

            console.log(`${valor + (valor * 0.45)}`);
            break;

        case '10':

            console.log(`${valor + (valor * 0.50)}`);
            break;

        case '11':

            console.log(`${valor + (valor * 0.55)}`);
            break;

        case '12':
            
            console.log(`${valor + (valor * 0.60)}`);
            break;

    }
}

anuidade('12', 2000)