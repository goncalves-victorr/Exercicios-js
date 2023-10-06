/*23) Escreva um algoritmo que leia o código de um aluno e suas três notas. Calcule a média ponderada do
aluno, considerando que o peso para a maior nota seja 4 e para as duas restantes, 3. Mostre o código do
aluno, suas três notas, a média calculada e uma mensagem "APROVADO" se a média for maior ou igual a 5 e
"REPROVADO" se a média for menor que 5. Repita a operação até que o código lido seja negativo.*/

function aluno(nota1, nota2, nota3){
    do{

        nota = (nota1 * 0.4) + (nota2 * 0.3) + (nota3 * 0.3)

        if(nota >= 5){
            console.log('APROVADO');
            console.log(`\nN1:${nota1} \nN2:${nota2} \nN3:${nota3} \n\nMedia:${nota}`);
        }else if(nota < 5 ) {
            console.log('REPROVADO');
            console.log(`\nN1:${nota1} \nN2:${nota2} \nN3:${nota3} \n\nMedia:${nota}`);
        }

    }while(nota1 == 0 && nota2 == 0 && nota3 == 0)
    
}
aluno(10,10,10)