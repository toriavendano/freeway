function setup() {
  createCanvas(500, 400);
  trilha.loop();
}

function draw() {
  background(imagemEstrada);
  mostraAtor();
  mostraCarro();
  movimentoCarro();
  movimentaAtor();
  voltarPosicaoInicialCarro();
  verificaColisao();
  incluirPlacar();
  marcarPonto()
}