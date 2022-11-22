// console.log(document.body.children[1]);

/* const par = document
  .body
  .children[1]
  .children[0]
  .children[1]
  .children[1]; */

// var pTexto = document.getElementById("pTexto");

// const par = document.getElementById("pTexto");
// const par = pTexto;
// console.log(par);
// console.log(pTexto);

/* const pTexto = document.getElementById("pTexto");
console.log(pTexto); */

// innerText
/* const pTexto = document.getElementById("pTexto");
console.log(pTexto);
console.log(pTexto.innerText);

pTexto.innerText = "Outro texto (21/11 20:09)"; */

// Dado
/* const pTexto = document.getElementById("pTexto");

function lancarDado() {
  const resultado = Math.ceil(Math.random() * 6);
  pTexto.innerText = resultado;
} */

// pHistorico
/* const pTexto = document.getElementById("pTexto");
const pHistorico = document.getElementById("pHistorico");

function lancarDado() {
  const resultado = Math.ceil(Math.random() * 6);
  pTexto.innerText = resultado;
  const historico = pHistorico.innerText;
  pHistorico.innerText = resultado + "<br> " + historico;
} */

// innerHTML
/* const pTexto = document.getElementById("pTexto");
const pHistorico = document.getElementById("pHistorico");

function lancarDado() {
  const resultado = Math.ceil(Math.random() * 6);
  pTexto.innerText = resultado;
  const historico = pHistorico.innerHTML;
  pHistorico.innerHTML = resultado + "<br> " + historico;
} */


// pTexto.innerHTML = document.body.innerHTML;


// Cores
let r = 255;
let g = 255;
let b = 255;

const corR = document.getElementById("corR");
const corG = document.getElementById("corG");
const corB = document.getElementById("corB");
const body = document.body;

atualizarUI();

function mudarCor(cor, acao) {
  if (acao === "+") addCor(cor, 10);
  else subCor(cor, 10);
  atualizarUI();
}

function atualizarUI(){
  corR.innerText = r;
  corG.innerText = g;
  corB.innerText = b;
  body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}

function addCor(cor, valor) {
  switch(cor){
    case "r": r += valor; break;
    case "g": g += valor; break;
    case "b": b += valor;
  }
}

function subCor(cor, valor) {
  switch(cor){
    case "r": r -= valor; break;
    case "g": g -= valor; break;
    case "b": b -= valor;
  }
}