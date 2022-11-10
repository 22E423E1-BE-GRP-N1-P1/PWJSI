/* Exercício 1 */
// Retornar o nome do dia
// Seg, Ter, Qua, Qui, Sex, Sab, Dom
/* const hoje = new Date(); // Instância de Objeto
const dia = hoje.getDay(); */
// const dia = new Date().getDay();
// console.log(dia);

/* switch(dia) {
  case 1: console.log("Segunda"); break;
  case 2: console.log("Terça"); break;
  case 3: console.log("Quarta"); break;
  case 4: console.log("Quinta"); break;
  case 5: console.log("Sexta"); break;
  case 6: console.log("Sábado"); break;
  case 7: console.log("Domingo"); break;
  default: console.log("Desconhecido");
} */

/* if (dia == 1) console.log("Segunda");
else if (dia == 2) console.log("Terça");
else if (dia == 3) console.log("Quarta");
else if (dia == 4) console.log("Quinta");
else if (dia == 5) console.log("Sexta");
else if (dia == 6) console.log("Sábado");
else if (dia == 7) console.log("Domingo");
else console.log("Desconhecido"); */

/* Exercício 2 */
// Pedir para o usuário
// se o valor de cada parcela for até
// 30% do salário, ele pode fazer o financiamento.
// caso contrário, não pode.

/* const valor = +prompt("Informe o valor do imóvel.");
const salario = +prompt("Informe o seu salário.");
const quntPars = +prompt("Informe a quant. parcs.");

const prestacao = valor / quntPars;
const porcento = prestacao * 100 / salario;

// Cada uma das entrada.
console.log("Valor\tR$ ", valor.toFixed(2));
console.log("Sal.\tR$ ", salario.toFixed(2));
console.log("Perst.\tR$ ", prestacao.toFixed(2));
console.log("Porc.\t ", porcento.toFixed(0));
// Se ele pode pegar ou não.
if (porcento <= 30){ console.log("Financiamento Liberado.");}
else{ console.log("Financiamento negado.");} */


/* Exercício 3 */
const alvoX = Math.ceil(Math.random() * 2); // 0..2
const alvoY = Math.ceil(Math.random() * 2); // 0..2

function jogar() {
  const tiroX = +prompt("Tiro em X.");
  const tiroY = +prompt("Tiro em Y.");

  const acertouX = alvoX == tiroX;
  const acertouY = alvoY == tiroY;
  const acertou = acertouX && acertouY;
  if (acertou) {
    console.log("Acertou.");
  } else {
    console.log("Errou, tente novamente.");
    jogar();
  }
}

jogar();