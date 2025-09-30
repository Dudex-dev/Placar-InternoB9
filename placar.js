let pontos = [0, 0];
let vantagens = [0, 0];
let faltas = [0, 0];
let tempo = 5 * 60; // 5 minutos padrão
let timer = null;

function atualizarPlacar() {
  document.getElementById("pontos1").innerText = pontos[0];
  document.getElementById("pontos2").innerText = pontos[1];
  document.getElementById("vantagens1").innerText = vantagens[0];
  document.getElementById("vantagens2").innerText = vantagens[1];
  document.getElementById("faltas1").innerText = faltas[0];
  document.getElementById("faltas2").innerText = faltas[1];
}

function addPontos(lutador, valor) {
  pontos[lutador - 1] += valor;
  atualizarPlacar();
}

function remPontos(lutador, valor) {
  if (pontos[lutador - 1] >= valor) {
    pontos[lutador - 1] -= valor;
    atualizarPlacar();
  }
}

function addVantagem(lutador) {
  vantagens[lutador - 1]++;
  atualizarPlacar();
}

function remVantagem(lutador) {
  if (vantagens[lutador - 1] > 0) {
    vantagens[lutador - 1]--;
    atualizarPlacar();
  }
}

function addFalta(lutador) {
  faltas[lutador - 1]++;
  atualizarPlacar();
}

function remFalta(lutador) {
  if (faltas[lutador - 1] > 0) {
    faltas[lutador - 1]--;
    atualizarPlacar();
  }
}

function iniciar() {
  if (timer) return;
  timer = setInterval(() => {
    if (tempo > 0) {
      tempo--;
      atualizarCronometro();
    } else {
      clearInterval(timer);
      timer = null;
      alert("Tempo encerrado!");
    }
  }, 1000);
}

function pausar() {
  clearInterval(timer);
  timer = null;
}

function resetar() {
  pausar();
  tempo = 5 * 60; // reseta para 5 minutos
  pontos = [0, 0];
  vantagens = [0, 0];
  faltas = [0, 0];
  atualizarPlacar();
  atualizarCronometro();
}

function alterarTempo() {
  let minutos = parseInt(document.getElementById("tempoInput").value);
  if (!isNaN(minutos) && minutos > 0) {
    tempo = minutos * 60;
    atualizarCronometro();
  } else {
    alert("Digite um valor válido de minutos!");
  }
}

function atualizarCronometro() {
  let min = String(Math.floor(tempo / 60)).padStart(2, "0");
  let seg = String(tempo % 60).padStart(2, "0");
  document.getElementById("cronometro").innerText = `${min}:${seg}`;
}

// Inicializa
atualizarPlacar();
atualizarCronometro();
