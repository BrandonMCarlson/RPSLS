const Player = require('./player');
const Die = require('./die');
let prompt = require('prompt-sync');
const Ai = require('./ai');
let userInput = prompt();


class Game {
    constructor(gesture, score) {
    this.gesture = gesture;
    this.score = score;  
    this.playerOne = new Player("PlayerOne");
    this.playerTwo = new Player("PlayerTwo");
    this.ai = new Ai("Bob the PC");
    }
    
    runMain() {
      if(this.whoPlays() === 1){
        console.log (`${ai.name} usually dominates their opponent.`);
        this.aiRandomRolls(ai);
      }
    }
    whoPlays(){
      let playerOne = new Player("Player One");
      playerOne.name = playerOne.setName();

      if(this.playerNumber > 1){
        let playerTwo = new Player("Player Two")
        playerTwo.name  = playerTwo.setName();
        console.log(`Welcome ${playerOne.name} and ${playerTwo.name}.`)
        return 2;
    }
      else{
        console.log(`Welcome ${playerOne.name}`);
        return 1;
      }
    }
    aiRandomRolls(object){
      let aiRoll = Math.round(Math.random() * 3);
      console.log(object.gesture[aiRoll]);
      return aiRoll;
    }
    gameRules(player, playerInputOne, playerInputTwo, aiRoll){
      if(playerInputOne === playerInputTwo){
        console.log(`You both chose ${player.gestureChoice}, try again`);      }
    }
    
  }
   
   
    

  module.exports = Game