/*09) Construa uma função para um sistema de notas de uma instituição que possui a seguinte política de
classificação: Todo aluno recebe uma nota de 0 a 100. Alunos com nota abaixo de 40 são reprovados. As notas
possuem a seguinte regra de arredondamento: Se a diferença entre a nota e o próximo múltiplo de 5 for menor
que 3, arredondar a nota para esse próximo múltiplo de 5. Se a nota for abaixo de 38, não é feito nenhum
arredondamento pois esta nota resulta na reprovação do aluno. Por exemplo, a nota 84 será arredondada para
85, mas a nota 29 não será arredondada por ser abaixo de 40 e não ser possível arredondamento eficiente, ou
seja, que evite a reprovação do aluno. No caso de a nota ser 38, o arredondamento é possível pois atingirá 40
e o aluno será aprovado.*/

function notaObtida(nota) {

    if (nota > 0 && nota <= 100) {

        if (nota >= 38) {

            console.log('Aprovado');

            arredondamento = nota % 5

            if (arredondamento === 4) {

                console.log(`Nota: ${nota}`);
                nota += 1
                console.log(`Nota arredondada: ${nota}`);   

            }else if(arredondamento === 3) {

                console.log(`Nota: ${nota}`);
                nota += 2
                console.log(`Nota arredondada: ${nota}`);  

            }else if(arredondada <= 2){

                console.log(`Nota: ${nota}`);

            }
        } else {

            console.log('Reprovado');
        }

    } else {
        console.log('Não é uma nota válida');
    }
}
notaObtida(83)