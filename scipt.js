function  calcular() {
    var numeros = document.getElementsByClassName(input1).value;
    var numeros2 = document.getElementsByClassName(input2).value;

    var soma = numeros + numeros2;
    var substraçao = numeros -numeros2;
    var divisao = numeros / numeros2;
    var multiplicacao = numeros * numeros2; 

document.getElementById(soma).innerHTML = soma;

document.getElementById(substraçao).innerHTML = substraçao;

document.getElementById(divisao).innerHTML = divisao;

document.getElementById(multiplicacao).innerHTML = multiplicacao;



}