// If .. else if .. else ..
// se (condA == true) { 
//  então faça A 
// } se (condA == true) { 
//  então faça B 
// } se { 
//  não faça C
// }
// fim do programa

// Pedir do usuário, o tamanhos dos três lados
// de um triângulo e verificar se eles
// formam mesmo um triângulo.
// A soma dos dois menores tem que 
// ser maior que outro

let maiorLado = +prompt("Informe o lado A.");

let ladoB = +prompt("Informe o lado B.");
if (maiorLado < ladoB) {
  let ladoAux = maiorLado;
  maiorLado = ladoB;
  ladoB = ladoAux;
};

let ladoC = +prompt("Informe o lado C.");
if (maiorLado < ladoC) {
  let ladoAux = maiorLado;
  maiorLado = ladoC;
  ladoC = ladoAux;
};

console.log(maiorLado, ladoB, ladoC);
// 1. Pegar os três lados

// 2. Verificar o maior

// 3. Somar os outros dois

// 4. Verificar se a soma é maior que o lado maior
















// Pedir para o usuário
// informar um número de 0 a 11,
// e imprimir o mês correspondente
// Sendo 0 - Jan e 11 - Dez

// 0 == "0" -> true
// 0 === "0" -> false
/* const msg = "Informe um número de 0 a 11.";
const mes = +prompt(msg);

if (mes === 0) console.log("Jan");
else if (mes === 1) { console.log("Fev"); }
else if (mes === 2) console.log("Mar");
else if (mes === 3) console.log("Abr");
else if (mes === 4) console.log("Mai");
else if (mes === 5) console.log("Jun");
else if (mes === 6) console.log("Jul");
else if (mes === 7) console.log("Ago");
else if (mes === 8) console.log("Set");
else if (mes === 9) console.log("Out");
else if (mes === 10) console.log("Nov");
else if (mes === 11) console.log("Dez");
else
  console.log("Informe um número entre 0 e 11"); */

/* if (mes === 0){
  console.log("Jan");
} else if (mes === 1){
  console.log("Fev");
} else if (mes === 2){
  console.log("Mar");
} else if (mes === 3){
  console.log("Abr");
} else if (mes === 4){
  console.log("Mai");
} else if (mes === 5){
  console.log("Jun");
} else if (mes === 6){
  console.log("Jul");
} else if (mes === 7){
  console.log("Ago");
} else if (mes === 8){
  console.log("Set");
} else if (mes === 9){
  console.log("Out");
} else if (mes === 10){
  console.log("Nov");
} else if (mes === 11){
  console.log("Dez");
} else {
  console.log("Informe um número entre 0 e 11");
} */











/* let nota1 = +prompt("Nota 1");
let nota2 = +prompt("Nota 2");
let nota3 = +prompt("Nota 3");
let nota4 = +prompt("Nota 4");

let resultado = nota1 + nota2 + nota3 + nota4;
resultado /= 4;

if (resultado == 10) {
  console.log("Parabéns.");
} else if (resultado >= 7) {
  console.log("Aprovado.");
} else if (resultado >= 5) {
  console.log("Recuperação.");
} else {
  console.log("Reprovado.");
} */


/* let temNivel = 3;
if (temNivel == 1) {
  console.log("Nível 1.");
} else if (temNivel == 2) {
  console.log("Nível 2.");
} else if (temNivel == 3) {
  console.log("Nível 3.");
} else {
  console.log("Nível Desconhecido.");
} */
// Valor ou por Referência
/* const idade = +prompt("Informe a sua idade");

if (idade < 16) {
  console.log("não pode votar.");
} else if (idade < 18) {
    console.log("Pode votar.");
} else if (idade < 70) {
  console.log("tem que votar.");
} else {
  console.log("Pode votar.");
} */















// If .. else
// se (cond == true) { 
//  então faça A 
// } se { 
//  não faça B
// }
// fim do programa

/* let nota1 = +prompt("Nota 1");
let nota2 = +prompt("Nota 2");
let nota3 = +prompt("Nota 3");
let nota4 = +prompt("Nota 4");

let resultado = nota1 + nota2 + nota3 + nota4;
resultado /= 4;

// Se tirou mais que 7, passou
// se não, recuperação
if (resultado >= 7) {
  console.log("Passou");
} else {
  console.log("Recuperação");
} */

/* if (10 == 4){
  console.log("10 é igual a 4.");
} else {
  console.log("10 não é igual a 4.");
} */

/* const idade = +prompt("Informe a sua idade");
// let msg = "Pode votar.";
// se menor de 16, não pode votar
// se menor de 18, pode votar
// se menor de 70, tem que votar
// se maior que 70, pode votar
if (idade < 16) {
  console.log("não pode votar.");
} else {
  if (idade < 18) {
    console.log("Pode votar.");
  } else {
    if (idade < 70) {
    console.log("tem que votar.");
    } else {
      console.log("Pode votar.");
    }
  }
} */

/* if (idade > 70) {
  console.log("Pode votar.");
} else {
  if (idade > 18) {
    console.log("Tem que votar.");
  } else {
    if (idade > 16) {
    console.log("Pode votar.");
    } else {
      console.log("Não pode votar.");
    }
  }
} */
// if (idade < 70) msg = "Tem que votar.";
// if (idade < 18) msg = "Pode votar.";
// if (idade < 16) msg = "Não pode votar.";

/* console.log(msg); */

// if (cond == true) {
//  // executa
// }
// Segue o fluxo

/* const idade = +prompt("Informe a sua idade");
let msg = "Pode votar.";
// se menor de 16, não pode votar
// se menor de 18, pode votar
// se menor de 70, tem que votar
// se maior que 70, pode votar

if (idade < 70) msg = "Tem que votar.";
if (idade < 18) msg = "Pode votar.";
if (idade < 16) msg = "Não pode votar.";

console.log(msg); */


/* const idade = +prompt("Informe a sua idade");

if (idade >= 18) {
  console.log("Maior de idade.");
}

if (idade < 18) {
  console.log("Menor de idade.");
} */