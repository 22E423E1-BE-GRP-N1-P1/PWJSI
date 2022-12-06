const FATOR = 4;
function marcarCasa(event, numCasa) {
  // HTMLElement
  // const tile = document.getElementById(`tile${numCasa}`);
  const tile = event.target;
  // bloqueando a peça
  revelarCasa(tile);
  /* tile.classList = 'tile_disabled'; */
  verificarVizinhos(numCasa);
}

function revelarCasa(tile) {
  tile.disabled = true;
}

function verificarVizinhos(numCasa) {
  if (verificarEsquerdaTopo(numCasa)) {
    casa1 = numCasa + 1;
    const tile = document.getElementById(`tile${casa1}`);
    revelarCasa(tile);
  } else if (verificarEsquerdaBase(numCasa)) {
  } else if (verificarDireitaTopo(numCasa)) {
  } else if (verificarDireitaBase(numCasa)) {
  } else if (verificarBordaEsquerda(numCasa)) {
  } else if (verificarBordaDireita(numCasa)) {
  } else if (verificarBordaTopo(numCasa)) {
  } else if (verificarBordaBase(numCasa)) {
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