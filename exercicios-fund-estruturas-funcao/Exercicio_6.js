/* 06) Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos.*/

function funcao(capitalInicial, taxaJuros, tempoAplicado) {
    console.log(`Retorno de juros simples: ${capitalInicial * taxaJuros}`);
    console.log(`Retorno de juros composto: ${capitalInicial * taxaJuros * tempoAplicado}`);

}
funcao(1000, 0.2, 5)