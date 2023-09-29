/*13) Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado o número referente ao
dia. Considere que domingo é o dia 1 e sábado é o dia 7. Utilize a estrutura Switch. */

let dia = '5'

switch (dia) {
    case '1':
        console.log('Domingo');
        break;

    case '2':
    case '3':
    case '4':
    case '5':
    case '6':
        console.log('Dia útil');
        break;

    case '7':
        console.log('Sabado');
        break;

    default:
        console.log('Dia invalido');
}