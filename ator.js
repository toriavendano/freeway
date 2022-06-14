//código da vaquinha

let xAtor = 85;
let yAtor = 368; 
let larguraAtor = 28;
let alturaAtor = 28;

let meusPontos = 0;
let pontosOponente = 0; 
    
function mostraAtor(){
  image(imagemAtor, xAtor, yAtor, larguraAtor, alturaAtor);
}

function movimentaAtor(){
  if (keyIsDown(UP_ARROW)){
    yAtor -= 3;
  }
  
  if (keyIsDown(DOWN_ARROW)){
    if(podeSeMover()){
      yAtor += 3;
    }
  }
}

function podeSeMover(){
  return yAtor < 366;
}

function verificaColisao(){
  //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
  for (let i = 0; i < imagemCarros.length; i++){
    colisao = collideRectCircle(xCarros[i], yCarros[i], larguraCarro, alturaCarro, xAtor, yAtor, 14)
    if (colisao){
      voltaAtorParaPontoInicial();
      somDaColisao.play();
    if(meusPontos > 0){
      meusPontos -= 1;
      print(meusPontos)
      }
    }
  }
}

function voltaAtorParaPontoInicial(){
  yAtor = 368;
}

function incluirPlacar(){
  text(meusPontos, width / 5, 26);
  textSize(25);
  textAlign(CENTER);
  fill(color(255,250,0));
}

function marcarPonto(){
  if (yAtor < 15){
    meusPontos += 1;
    somDoPonto.play();
    voltaAtorParaPontoInicial();  
  }
}