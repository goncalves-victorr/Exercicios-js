/*28) Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares.*/

let vetor = 10
let par = 0
let impar = 0

for (let i = 1; i <= vetor; i++) {
    if (i % 2 == 0) {
        par = par + 1
        console.log(`${par}`);
    } else {
        impar = impar + 1
        console.log(`${impar}`);
    }
}