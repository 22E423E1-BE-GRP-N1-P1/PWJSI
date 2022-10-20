idade = 90;
console.log(idade);

// alert();

/* numero = 30;
idade = prompt("Informe a sua idade."); // Texto
console.log(numero + idade); */

/* numeroA = 30;
numeroUsuario = prompt("Informe um número."); 
numeroB = +numeroUsuario; // Converter um texto em número
console.log(numeroA + numeroB); */

// Pedindo para o usuário informar um número;
/* numeroUsuario = prompt("Informe um número de 1 a 6:");

// Sorteando um número entre 1 e 6
numeroSorteado = Math.random(); // [0 .. 1[
numeroSorteado = numeroSorteado * 6; // [0 .. 6[
numeroSorteado = Math.ceil(numeroSorteado); // [1 .. 6]

// Verificar se o usuário acertou o número.
console.log("Número escolhido: ", numeroUsuario);
console.log("Número sorteado: ", numeroSorteado); */
// numA + numB = resultado


/* function alertar() {
  alert("Você clicou no botão!");
}

function pegarCorVermelha() {
  document.body.style.background = "red";
}

function pegarCorVerde() {
  document.body.style.background = "green";
}

function pegarCorAzul() {
  document.body.style.background = "blue"; 
} */


function somar() {
  numA = +prompt("Número A.");
  numB = +prompt("Número B.");
  resultado = numA + numB
  // console.log(numA + numB);
  // alert(numA + numB);
  alert(resultado);
  // alert(+prompt("Número A.") + +prompt("Número B."));
}