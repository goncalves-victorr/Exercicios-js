/*10) Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 e retorne true
ou false*/

function verificacaoNumero(numero) {

    calculo = numero % 3
    
    if(calculo === 0)
    {
        console.log(`true`);
    }
    else{
        console.log('false');
    }
}
verificacaoNumero(3)