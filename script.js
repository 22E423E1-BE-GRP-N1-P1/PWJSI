const FATOR = 5;
function marcarCasa(event, numCasa) {
  // HTMLElement
  // const tile = document.getElementById(`tile${numCasa}`);
  const tile = event.target;
  // bloqueando a peça
  revelarCasa(tile);
  /* tile.classList = 'tile_disabled'; */
  verificarVizinhos(numCasa);
}
// const jogo1 = [9, 10, 6, 2];
function verificarParede(numCasa) {
  // return jogo1.includes(numCasa);
  const jogo1 = numCasa === 2 || 
          numCasa === 7 || 
          numCasa === 8 || 
          numCasa === 9 || 
          numCasa === 10 || 
          numCasa === 16 || 
          numCasa === 17 || 
          numCasa === 18 || 
          numCasa === 19;

  return false;
  // return jogo1;
}

function revelarCasa(tile) {
  tile.disabled = false;
}

function revelarVizinho(numVizinho) {
  if (!verificarParede(numVizinho)){
    const tile = document.getElementById(`tile${numVizinho}`);
    revelarCasa(tile);
  }
}

function verificarVizinhos(numCasa) {
  if (verificarEsquerdaTopo(numCasa)) {
    revelarVizinho(numCasa + 1);
    revelarVizinho(numCasa + 1 + FATOR);
    revelarVizinho(numCasa + FATOR);
  } else if (verificarEsquerdaBase(numCasa)) {
    revelarVizinho(numCasa - FATOR);
    revelarVizinho(numCasa + 1 - FATOR);
    revelarVizinho(numCasa + 1);
  } else if (verificarDireitaTopo(numCasa)) {
    revelarVizinho(numCasa - 1);
    revelarVizinho(numCasa - 1 + FATOR);
    revelarVizinho(numCasa + FATOR);
  } else if (verificarDireitaBase(numCasa)) {
    revelarVizinho(numCasa - 1);
    revelarVizinho(numCasa - 1 - FATOR);
    revelarVizinho(numCasa - FATOR);
  } else if (verificarBordaEsquerda(numCasa)) {
    revelarVizinho(numCasa - FATOR);
    revelarVizinho(numCasa + 1 - FATOR);
    revelarVizinho(numCasa + 1);
    revelarVizinho(numCasa + 1 + FATOR);
    revelarVizinho(numCasa + FATOR);
  } else if (verificarBordaDireita(numCasa)) {
    revelarVizinho(numCasa - FATOR);
    revelarVizinho(numCasa - 1 - FATOR);
    revelarVizinho(numCasa - 1);
    revelarVizinho(numCasa - 1 + FATOR);
    revelarVizinho(numCasa + FATOR);
  } else if (verificarBordaTopo(numCasa)) {
    revelarVizinho(numCasa - 1);
    revelarVizinho(numCasa - 1 + FATOR);
    revelarVizinho(numCasa + FATOR);
    revelarVizinho(numCasa + 1 + FATOR);
    revelarVizinho(numCasa + 1);
  } else if (verificarBordaBase(numCasa)) {
    revelarVizinho(numCasa - 1);
    revelarVizinho(numCasa - 1 - FATOR);
    revelarVizinho(numCasa - FATOR);
    revelarVizinho(numCasa + 1 - FATOR);
    revelarVizinho(numCasa + 1);
  } else {
    revelarVizinho(numCasa - 1 - FATOR);
    revelarVizinho(numCasa - FATOR);
    revelarVizinho(numCasa + 1 - FATOR);
    revelarVizinho(numCasa + 1);
    revelarVizinho(numCasa - 1);
    revelarVizinho(numCasa + FATOR);
    revelarVizinho(numCasa - FATOR);
    revelarVizinho(numCasa - 1 + FATOR);
    revelarVizinho(numCasa + FATOR);
    revelarVizinho(numCasa + 1 + FATOR);
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
function verificarBordaDireita(numCasa) {
  const ehCasaFator = numCasa == FATOR;
  const temModulo0 = numCasa % FATOR == 0;
  if (ehCasaFator || temModulo0) {
    return true;
  }
  return false;
}
function verificarBordaTopo(numCasa) {
  const ehCasaTopo = numCasa <= FATOR;
  if (ehCasaTopo) {
    return true;
  }
  return false;
}
function verificarBordaBase(numCasa) {
  const ehCasaBase = numCasa > FATOR * (FATOR - 1);
  if (ehCasaBase) {
    return true;
  }
  return false;
}
function verificarEsquerdaTopo(numCasa) {
  if (
    verificarBordaEsquerda(numCasa)
    && verificarBordaTopo(numCasa)
  ) 
    return true;
  else return false;
}
function verificarDireitaTopo(numCasa) {
  if (
    verificarBordaDireita(numCasa)
    && verificarBordaTopo(numCasa)
  ) 
    return true;
  else return false;
}
function verificarEsquerdaBase(numCasa) {
  if (
    verificarBordaEsquerda(numCasa)
    && verificarBordaBase(numCasa)
  ) 
    return true;
  else return false;
}
function verificarDireitaBase(numCasa) {
  if (
    verificarBordaDireita(numCasa)
    && verificarBordaBase(numCasa)
  ) 
    return true;
  else return false;
}