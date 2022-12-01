const FATOR = 3;
function marcarCasa(event, numCasa) {
  // HTMLElement
  // const tile = document.getElementById(`tile${numCasa}`);
  const tile = event.target;
  // bloqueando a peça
  tile.disabled = true;
  /* tile.classList = 'tile_disabled'; */
  if (verificarBordaEsquerda(numCasa)) {
    alert("Esquerda.");
  }
}

function verificarBordaEsquerda(numCasa) {
  const ehCasa1 = numCasa == 1;
  const temModulo1 = numCasa % FATOR == 1;
  if (ehCasa1 || temModulo1) {
    return true;
  }
  return false;
}