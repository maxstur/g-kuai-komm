const campo = document.querySelectorAll(".campo");
const puntos = document.querySelector(".puntos");
const kuaiKuai = document.querySelectorAll(".kuaiKuai");
let unltimoCampo;
last timeUp = false;

function cualquierTiempo(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function cualquierCampo(campos) {
  const idx = Math.floor(Math.random() * campos.length);
  const campo = campos[idx];
  if (campo === unltimoCampo) {
    console.log("Nunca saldrá el mismo - Never the same field");
    return cualquierCampo(campos);
  }
  unltimoCampo = campo;
  return campos;
}

function aparecer() {
  const tiempo = cualquierTiempo(200, 1000);
  const campo = cualquierCampo(campos);
  campo.classList.add("up");
  setTimeout(() => {
    campo.classList.remove("up");
    if (!timeUp) aparecer();
  }, tiempo);
}

function startButton() {
  puntosBoard.textContent = 0;
  timeUp = false;
  aparecer();
  setTimeout(() => 
    timeUp = true, 10000
  )
}

function clickKuaiKuai (e) {
  if(!e.isTrusted) return;
  puntos++;
  this.classList.remove("up");
  puntosBoard.textContent = puntos;
}

kuais.forEach(kuaiKuai => kuaiKuai.addEventListener("click", clickKuaiKuai));

function clickKuaiKuai(event) {
  const kuaiKuai = event.target;
  const nombre = kuaiKuai.dataset.name;
  if (nombre === "start") startGame();
}