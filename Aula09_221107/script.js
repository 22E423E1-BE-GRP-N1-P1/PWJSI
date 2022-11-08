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
  console.log("Informe um número entre 0 e 11");

console.log("Fim do programa."); */

// Switch
/* const perfil = 5;
switch (perfil) {
  case 0: 
    console.log("Perfil Admin");
    break;
  case 1: 
    console.log("Perfil VIP"); 
    break;
  case 2: 
    console.log("Perfil convidado");
} */

/* const perfil = 5;
switch (perfil) {
  case 0: 
    console.log("Perfil Admin.");
    break;
  case 1: 
    console.log("Perfil VIP."); 
    break;
  case 2: 
    console.log("Perfil convidado.");
    break;
  default:
    console.log("Perfil desconhecido.");
} */

/* const msg = "Informe um número de 0 a 11.";
const mes = +prompt(msg);

switch (mes) {
  case 0: console.log("Jan"); break;
  case 1: console.log("Fev"); break;
  case 2: console.log("Mar"); break;
  case 3: console.log("Abr"); break;
  case 4: console.log("Mai"); break;
  case 5: console.log("Jun"); break;
  case 6: console.log("Jul"); break;
  case 7: console.log("Ago"); break;
  case 8: console.log("Set"); break;
  case 9: console.log("Out"); break;
  case 10: console.log("Nov"); break;
  case 11: console.log("Dez"); break;
  default: console.log("Informe um número entre 0 e 11");
}

console.log("Fim do programa."); */

/* const passo = +prompt("Informe o passo de execução.");

switch (passo){
  case 1: console.log("Esquentar a água");
  case 2: console.log("Colocar o filtro");
  case 3: console.log("Colocar o café");
  case 4: console.log("Colocar a água");
}

console.log("Fim do programa."); */



// Perguntar para o usuário 5 questões
// usuário vai responder sim ou não (confirm)
// Cada resposta verdadeira, acumula 1 ponto

/* const telefonou = confirm("Telefonou para a vítima?");
const local = confirm("Esteve no local do crime?");
const mora = confirm("Mora perto da vítima?");
const devia = confirm("Devia para a vítima?");
const trabalhou = confirm("Já trabalhou com a vítima?");
let classificacao = 0;

if (telefonou) classificacao++;
if (local) classificacao++;
if (mora) classificacao++;
if (devia) classificacao++;
if (trabalhou) classificacao++;

switch (classificacao) {
  case 0: 
    console.log("Inocente."); 
    break;
  case 1:
  case 2: 
    console.log("Suspeito."); 
    break;
  case 3: 
  case 4: 
    console.log("Cúmplice."); 
    break;
  case 5: 
    console.log("Assassino."); 
    break;
  default: 
    console.log("Estudar o caso.");
} */

// 0. Inocente
// 1 a 2. Suspeito.
// 3 a 4. Cúmplice.
// 5. Assassino.
// Estudar o caso.


// Operadores Lógicos
// Conjunção / And (e)
// &&
// t && t -> t
// t && f -> f
// f && t -> f
// f && f -> f

/* const op1 = 4;
const op2 = 8;

if (op1 < 10 && op2 > 5){
  console.log("Passou.");
}

if (op1 > 10 && op2 > 5){
  console.log("Passou.");
} else {
  console.log("Não Passou.");
}

if (op1 < 10 && op2 > 5 && op1 != 90){
  console.log("Passou.");
} */

// Disjunção / Or (ou)
// ||
// t || t -> t
// t || f -> t
// f || t -> t
// f || f -> f

/* const op1 = 4;
const op2 = 8;

if (op1 < 10 || op2 > 5){
  console.log("Passou.");
}

if (op1 == 10 || op2 > 5){
  console.log("Passou.");
}

if (op1 == 10 || op2 == 5){
  console.log("Passou.");
}

if (op1 == 10 || op2 == 5 && op1 < 6){
  console.log("Passou.");
} */

// Negação / Not (não)
// !
// !t -> f
// !f -> t

// const op1 = 4;

// if (op1 !== 5) 

let ehAdmin = true;

// if (!ehAdmin) {
// if (ehAdmin !== true) {
//   console.log("Acesso negado!");
// }

ehAdmin = !ehAdmin;

