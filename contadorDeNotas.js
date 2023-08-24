let valor = parseInt(prompt("Digite um valor em reais (R$)"))

let notas500 = Math.floor(valor / 500);
valor %= 500;

let notas400 = Math.floor(valor / 400);
valor %= 400;

let notas300 = Math.floor(valor / 300);
valor %= 300;

let notas200 = Math.floor(valor / 200);
valor %= 200;

let notas100 = Math.floor(valor / 100);
valor %= 100;

let notas50 = Math.floor(valor / 50);
valor %= 50;

let notas25 = Math.floor(valor / 25);
valor %= 25;

let notas1 = valor;

console.log(valor + ' // ' + notas500 + ' nota(s) de 500, ' + notas400 + ' nota(s) de 400, ' + notas300 + ' nota(s) de 300, ' + notas200 + ' nota(s) de 200, ' + notas100 + ' nota(s) de 100, ' + notas50 + ' nota(s) de 50, ' + notas25 + ' nota(s) de 25 e ' + notas1 + ' notas de 1.')