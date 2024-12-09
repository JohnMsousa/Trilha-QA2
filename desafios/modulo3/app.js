// 1 Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.

function calculaIMC(altura, peso) {
  let imc = peso / (altura * altura);
  return imc;
}
let imc = calculaIMC(1.75, 100);
console.log(`O IMC é: ${imc.toFixed(2)}!`); // toFixed(2) para exibir 2 casas decimais após o ponto

// 2 Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.

function calcularFatorial(numero) {
  if (numero === 0 || numero === 1) {
    return 1;
  }

  let fatorial = 1;
  for (let i = 2; i <= numero; i++) {
    fatorial *= i;
  }
  return fatorial;
}

let numero = 5;
let resultado = calcularFatorial(numero);
console.log(`O fatorial de ${numero} é ${resultado}!`);

// 3 Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$4,80.

function converterDolarParaReal(valorDola) {
  let dolarHoje = 4.8;
  let valorEmReais = valorDola * dolarHoje;
  return valorEmReais.toFixed(2);
}

let valorEmDolar = 20;
let valorEmReais = converterDolarParaReal(valorEmDolar);
console.log(`${valorEmDolar} dólares equivalem a R$ ${valorEmReais}.`);

// 4 Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro.
function calculaAreaPerimetro(altura, largura) {
  let area = altura * largura;
  let perimetro = 2 * (altura + largura);

  console.log(`Área da sala: ${area} metros quadrados.`);
  console.log(`Perímetro da sala: ${perimetro} metros.`);
}

let altura = 5;
let largura = 10;
calculaAreaPerimetro(altura, largura);

// 5 Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14.

function calculaAreaPerimetroCircular(raio) {
  let area = Math.PI * raio * raio;
  let perimetro = 2 * Math.PI * raio;

  console.log(`Área da sala circular: ${area.toFixed(2)} metros quadrados.`);
  console.log(`Perímetro da sala circular: ${perimetro.toFixed(2)} metros.`);
}

let raio = 8;
calculaAreaPerimetroCircular(raio);

// 6 Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.

function tabuada(valor) {
  for (let i = 1; i <= 10; i++) {
    let resultado = valor * i;
    console.log(`${valor} x ${i} = ${resultado}.`);
  }
}

let valor = 10;
tabuada(valor);
