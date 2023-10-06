/**20) Crie um programa para informar quais e quantas notas são necessárias para entregar o mínimo de cédulas
para um determinado valor informado pelo usuário considerando notas de R$ 100, R$ 50, R$ 10 e R$ 5 e R$ 1.
Seu programa deve mostrar apenas as notas utilizadas. Por exemplo, ao solicitar R$18, o programa deve
informar apenas a seguinte informação (note que não foram exibidas informações sobre as demais cédulas): 1
nota(s) de R$ 10. 1 nota(s) de R$ 5. 3 nota(s) de R$ 1. */

function notas(valor) {

    let notas100 = 0;
    let notas50 = 0;
    let notas10 = 0;
    let notas5 = 0;
    let notas1 = 0;

    if (valor > 0) {
        notas100 = valor / 100;
        valor = valor % 100;

        notas50 = valor / 50;
        valor = valor % 50;

        notas10 = valor / 10;
        valor = valor % 10;

        notas5 = valor / 5;
        valor = valor % 5;

        notas1 = valor / 1;
        valor = valor % 1;

    } else {
        console.log('Valor inválido');
    }
    if (notas100 > 0) {
        console.log(`Notas de 100: ${notas100}`);
    }
    if (notas50 > 0) {
        console.log(`Notas de 50: ${notas50}`);
    }
    if (notas10 > 0) {
        console.log(`Notas de 10: ${notas10}`);
    }
    if (notas5 > 0) {
        console.log(`Notas de 5: ${notas5}`);
    }
    if (notas1 > 0) {
        console.log(`Notas de 1: ${notas1}`);
    }
}
notas(18)
/**
 * import java.util.Scanner;

public class Exemplo {

    public static void main(String[] args) {
        Exemplo programa = new Exemplo();
        programa.executar();
    }

    private final Scanner entrada = new Scanner(System.in);

    private void executar() {
        System.out.print('Digite qual valor deseja sacar: ');
        int valor = entrada.nextInt();

        int notas100 = 0;
        int notas50 = 0;
        int notas10 = 0;
        int notas5 = 0;
        int notas1 = 0;

        if (valor > 0) {
            notas100 = valor / 100;
            valor = valor % 100;

            notas50 = valor / 50;
            valor = valor % 50;

            notas10 = valor / 10;
            valor = valor % 10;

            notas5 = valor / 5;
            valor = valor % 5;

            notas1 = valor / 1;
            valor = valor % 1;
        } else {
            console.log('Valor inválido');
        }

        if (notas100 > 0) {
            console.log('Notas de 100: ' + notas100);
        }
        if (notas50 > 0) {
            console.log('Notas de 50: ' + notas50);
        }
        if (notas10 > 0) {
            console.log('Notas de 10: ' + notas10);
        }
        if (notas5 > 0) {
            console.log('Notas de 5: ' + notas5);
        }
        if (notas1 > 0) {
            console.log('Notas de 1: ' + notas1);
        }
    }
}
 */