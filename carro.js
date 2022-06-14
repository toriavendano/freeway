// código do carro

let yCarros = [40, 96, 152, 208, 264, 320];
let xCarros = [600, 600, 600, 600, 600, 600];
let velocidadeCarros = [2, 4, 3, 2, 4, 3];

// tamanho dos carros
let larguraCarro = 60;
let alturaCarro = 40;

function mostraCarro(){
  // ii++ é o mesmo que "i = i + 1"
  for (let i = 0; i < imagemCarros.length; i++){
    image(imagemCarros[i], xCarros[i], yCarros[i], larguraCarro, alturaCarro);
  }
}

function movimentoCarro(){
  for (let i = 0; i < imagemCarros.length; i++){
    xCarros[i] -= velocidadeCarros[i];
  }
}

function voltarPosicaoInicialCarro(){
  for (let i = 0; i < imagemCarros.length; i++){
    if(passouTodaTela (xCarros[i])){
      xCarros[i] = 600;
    }
  }
}

function passouTodaTela(xCarros){
  return xCarros < -50
}