// imagens e sons do jogo

let imagemEstrada;
let imagemAtor;
let imagemCarroVerde;

let trilha;
let somDaColisao;
let somDoPonto;

function preload(){
  imagemEstrada = loadImage("imagens/estrada.png");
  imagemAtor = loadImage("imagens/ator-1.png");
  imagemCarroVerde = loadImage("imagens/carro-1.png");
  imagemCarroPreto = loadImage("imagens/carro-2.png");
  imagemCarroAmarelo = loadImage("imagens/carro-3.png");
  imagemCarros = [imagemCarroVerde, imagemCarroPreto, imagemCarroAmarelo, imagemCarroVerde, imagemCarroPreto, imagemCarroAmarelo];
  
  trilha = loadSound("sons/trilha.mp3");
  somDaColisao = loadSound("sons/colidiu.mp3");
  somDoPonto = loadSound("sons/pontos.wav");
}