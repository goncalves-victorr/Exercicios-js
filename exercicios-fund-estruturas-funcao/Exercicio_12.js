/*12) Faça um algoritmo que calcule o fatorial de um número. */

function fatorial(numero) {

    if (numero > 1) {
        return numero * fatorial(numero - 1)
    }

    return numero

}

console.log(fatorial(5))