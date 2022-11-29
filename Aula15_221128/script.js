// Sortear uma posição aleatória para o jogadorA - 1 a 20
let playerA = Math.ceil(Math.random() * 20);
// Sortear uma posição aleatória para o jogadorB - 1 a 20
let playerB = Math.ceil(Math.random() * 20);
// Jogador da Vez
let playerTurno = "B";
// Situação do jogo (rodando ou parado)
let situacao = true; // T - rodando, F - parado
// Elemento para exibir o placar
// h2Placar
let placar = document.getElementById("h2Placar");

// Uma função para atualizar o placar com o jogador da vez
// Vez do Jogador A
function informarPlacar() {
  placar.innerText = `Vez do Jogador ${playerTurno}`;
}

// Uma função para Alterna o turno
function alterarTurno() {
  if (playerTurno === "A")  playerTurno = "B";
  else  playerTurno = "A";
  informarPlacar();
}

function atualizarTile(elTile, img) {
  elTile.innerHTML += `<img
    style='
      position: relative;
      top: 15px;
      left: 15px;
      width: 15px;
    '
    src='${img}' />`; 
}

function selecionarCasa(event, numCasa) {
  if (situacao) {
    const elTile = event.currentTarget;
    const turnoA = playerTurno === "A";
    const turnoB = playerTurno === "B";
    const numCasaB = numCasa === playerB;
    const numCasaA = numCasa === playerA;
    const aAcertou = turnoA && numCasaB;
    const bAcertou = turnoB && numCasaA;
    if (aAcertou) {
      placar.innerText = "Player A ganhou!";
      atualizarTile(elTile, "img/playerB.png");
      situacao = false;
    } else if (bAcertou) {
      placar.innerText = "Player B ganhou!";
      atualizarTile(elTile, "img/playerA.png");
      situacao = false;
    } else {
      alterarTurno();
    }
  }
}

informarPlacar();