var canvas, backgroundImage;
var car1
var car2 
var car3
var car4

var cars = []
 var allPlayers
var gameState = 0;
var playerCount;

var database;

var form, player, game;


function setup(){
  canvas = createCanvas(displayWidth -20,displayHeight -30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
}
