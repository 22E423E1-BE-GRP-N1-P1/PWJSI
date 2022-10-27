// Tipos de Variáveis 
// Number (número: inteiro, real)
// String (texto)
// Boolean (true ou false)

let ehAdmin = true;
console.log(ehAdmin); // true
console.log(!ehAdmin); // false


/* const ehAdmin = true;
const ehVip = 0; // "sim"
const temCreditos = false;

// null
const nulo = null; */

/* console.log(typeof ehAdmin);
console.log(typeof nulo); */

// Operadores

// +, -, /, *
// %, **

// Incremento e decremento
/* let numero = 0;
numero = numero + 3;

console.log(numero); // 3

//numero++; //numero = numero + 1;
console.log(numero++); // 3
console.log(numero);  // 4

++numero;
numero++; */

//
/* ++numero;
console.log(numero); // 3

console.log(numero); // 3
numero++; */

/* let numero = 0;
numero = numero + 3;
console.log(--numero); */

// Operadores de atribuição
/* let numero = 0;
const numB = 76
numero += numB; //numero = numero + 3;
numero -= numB; //numero = numero - 3;
numero *= numB; //numero = numero * 3;
numero /= numB; //numero = numero / 3;
numero %= numB; //numero = numero % 3;
numero **= numB; //numero = numero ** 3;
console.log(numero); */

// Booleanos
// true ou false
// Operadores de Comparação
/* let numA = 10;
let numB = "10";
let numC = 20;
let numD = 5; */
// Igualdade
/* let ehIgual = numA == numB;
console.log(ehIgual);

ehIgual = numA === numB;
console.log(ehIgual);

ehIgual = numA == numC; 
// console.log(ehIgual);*/
// Diferente
/* let ehDiferente = numA != numB;
console.log(ehDiferente);

ehDiferente = numA !== numB;
console.log(ehDiferente); */
/* / Maior que
// Maior ou igual a
let ehMaior = numA > numC;
let ehMaiorOuIgual = numA >= numB;
console.log(ehMaior);
console.log(ehMaiorOuIgual); */

/* // Menor que
// Menor ou igual a
let ehMenor = numA < numC;
let ehMenorOuIgual = numA <= numB;
console.log(ehMenor);
console.log(ehMenorOuIgual); */

// Aposta
/* const aposta = prompt("Aposte em um número (1 a 6).");
let resultado = Math.random();
resultado *= 6; // resultado = resultado * 6;
resultado = Math.ceil(resultado);

const acertou = aposta == resultado;

console.log("Aposta:   \t", aposta);
console.log("Resultado:\t", resultado);
console.log("Acertou:  \t", acertou); */

// Pegar quatro notas e verficar se a média é maior ou igual que 7
/* let nota1 = +prompt("Nota 1");
let nota2 = +prompt("Nota 2");
let nota3 = +prompt("Nota 3");
let nota4 = +prompt("Nota 4");

let resultado = nota1 + nota2 + nota3 + nota4;
resultado /= 4;

let passou = resultado >= 7;
console.log("Média:\t", resultado);
console.log("O aluno passou:\t", passou); */

// Estrutura de Controle Condicional
// if / se
/* let numA = 10;
let numB = "10";
let numC = 20;
let numD = 5;

if (numA == numB) {
  console.log("numA é igual a numB.");
}

if (numA > numC) {
  console.log("numA é maior que numC.");
} */


/* const salario = +prompt("Salário.");
const quantDep = +prompt("Quant. Dep.");
let novoSalario = 0;

// se salario for menor que 3k, aplicar + 10%
if (salario <= 3_000) {
  novoSalario = salario * 1.1;
}
// se quantDep for maior que 0, aplicar + 300
if (quantDep > 0) {
  novoSalario += 300;
} */
// console.log(novoSalario);

let numA = 10;
let numB = "10";
let numC = 20;
let numD = 5;

console.log(numA != numB);// false
console.log(numA !== numB);// true