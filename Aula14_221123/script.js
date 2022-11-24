/* function selecinarBotao(event) {
  const element = event.target;
  console.log(element.innerText);
} */

// Gerar um número aleatório que corresponda a alguma casa
const tesouro = Math.ceil(Math.random() * 9);
let jogoEmAndamento = true;

function selecinarCasa(acao, numCasa) {
  if (jogoEmAndamento) {
    const element = acao.target;
    if (tesouro === numCasa){
      // Add uma tag img no span clicado
      element.style.background = 'blue';
      element.innerHTML = "<img src='tesouro.png'>";
      jogoEmAndamento = false;
    } else {
      element.style.background = 'black';
      element.innerHTML = "<img src='osso.png'>";
    }
  }
}