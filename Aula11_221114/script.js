/* function nomeFunc() {
  console.log("Função chamada!");
}
console.log("Fim da função.");
nomeFunc();
console.log("Fim");

const outraFunc = nomeFunc;
outraFunc();

alert("Texto");
console.log("Texto");
confirm("Texto");
prompt("Texto");

alert();
console.log();
confirm();
prompt(); */

/* let contador = 1000;
function decrementar(){
  let contador = 0;
  console.log(contador);
  contador--;
}
// contador = contador - 1;

decrementar();          // 1000
console.log(contador);  // 999
decrementar();
console.log(contador);
decrementar();
console.log(contador); */

/* function rotulo() {
  
} */
// const valor = 6.78;
/* function somar(opA, opB, operacao) {
  console.log(operacao, opA + opB);
}

const opX = +prompt("Operando A.");
const opY = +prompt("Operando B."); 
somar(opX, opY, `${opX} + ${opY}`);
somar(`${opX} + ${opY}`, opX, opY); */

/* const opB = +prompt("Operando A."); // 15
const opA = +prompt("Operando B."); // 67
somar(opA, opB); */
/* let soma = 0;
function somar(opA, opB) {
  const resultado = opA + opB;
  return resultado;
}

soma = somar(15, 67);
console.log(soma); */

// pegar um número e retorna se le é
// par ou ímpar.

/* function verificarParOuImpar(numero) {
  if (numero % 2 == 0) {
    return "É par.";
  } else {
    return "É ímpar.";
  }
} */

/* function verificarParOuImpar(numero) {
  if (numero % 2 == 0){ 
    return "É par.";
  }
  return "É ímpar.";
}

console.log(verificarParOuImpar(2));
console.log(verificarParOuImpar(3)); */

/* function qualquerFunc(){
  // ...
  // ...
  // ...
  // ...
  // ...
  return "algo";
  console.log("Teste");
} */

// Funções Anônimas
/* function somar(opA, opB) {
  const resultado = opA + opB;
  return resultado;
}

const somar = function (opA, opB) {
  const resultado = opA + opB;
  return resultado;
} */

function operar(valA, valB, operacao){
  operacao(valA, valB);
}

/* const opr = function (a, b) {
  console.log(a + b);
}

operar(13, 15, opr); */

operar(13, 15, function (a, b) {
  console.log(a + b)
});