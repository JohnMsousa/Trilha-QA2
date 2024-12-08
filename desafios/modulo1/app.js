// 1 Faça o download de outro projeto clicando neste link e abra no Visual Studio Code.
// Donwload realizado.

// 2 Altere o conteúdo da tag h1 com document.querySelector e atribua o seguinte texto: Hora do Desafio.
let h1 = document.querySelector("h1");
h1.textContent = "Hora do Desafio.";

// 3 Crie uma função que exiba no console a mensagem O botão foi clicado sempre que o botão Console for pressionado.
function clickConsole() {
  console.log("O botão foi clicado.");
}

// 4 Crie uma função que exiba um alerta com a mensagem: Eu amo JS, sempre que o botão Alerta for pressionado.
function clickAlerta() {
  alert("Eu amo JS!");
}
// 5 Crie uma função que é executada quando o botão prompt é clicado, perguntando o nome de uma cidade do Brasil. Em seguida, exiba um alerta com a mensagem concatenando a resposta com o texto: Estive em {cidade} e lembrei de você.
function clickPrompt() {
  let cidade = prompt("Informe o nome de uma cidade do Brasil.");
  alert(`Estive em ${cidade} e lembrei de você!`);
}
// 6 Ao clicar no botão soma, peça 2 números inteiros e exiba o resultado da soma em um alerta
function clickSoma() {
  let num1 = parseInt(prompt("Qual o primeiro número?"));
  let num2 = parseInt(prompt("Qual o segundo número?"));
  alert(num1 + num2);
}
