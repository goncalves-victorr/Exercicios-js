/* 29) Utilizando a estrutura de repetição for, faça uma função que percorra um vetor e conte quantos números
deste vetor estão no intervalo [10,20] (repare que o intervalo é fechado, ou seja, inclui o 10 e o 20) e quantos
deles estão fora do intervalo, escrevendo estas informações.*/

function valor(numero) {

    for (let i = 0; i <= numero; i++) {

        if (i >= 10 && i <= 20) {
            console.log(`Dentro: ${i}`);
        } else {
            console.log(`Fora: ${i}`);
        }
    }

}
valor(30)