// 1 Criar uma função que exibe "Olá, mundo!" no console.

function olaMundo() {
  console.log("Olá, mundo!");
}

olaMundo();

// 2 Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.

function olaNome(nome) {
  console.log(`Olá, ${nome}!`);
}

olaNome("John");

// 3 Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.

function dobroDoNumero(numero) {
  return numero * 2;
}

let resultadoDobro = dobroDoNumero(5);
console.log(resultadoDobro);

// 4 Criar uma função que recebe três números como parâmetros e retorna a média deles.

function calcularMedia(numero1, numero2, numero3) {
  return (numero1 + numero2 + numero3) / 3;
}

let media = calcularMedia(10, 10, 10);
console.log(media);

// 5 Criar uma função que recebe dois números como parâmetros e retorna o maior deles.

// Com if-else
// function maiorNumero(numero1, numero2) {
//   if (numero1 > numero2) {
//     return numero1;
//   } else {
//     return numero2;
//   }
// }
// let resultadoMaior = maiorNumero(10, 20);
// console.log(resultadoMaior);

// Com operador ternário
function maiorNumero(numero1, numero2) {
  return numero1 > numero2 ? numero1 : numero2;
}

let resultadoMaior = maiorNumero(10, 20);
console.log(resultadoMaior);

// 6 Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo

function quadrado(numero) {
  return numero * numero;
}

let resultado = quadrado(50);
console.log(resultado);
