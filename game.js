const Player = require('./player');
const Die = require('./die');
let prompt = require('prompt-sync');
const Ai = require('./ai');
let userInput = prompt();

let RPSLS = ["rock", "paper", "scissors", "lizard", "spock"]

class Game {
    constructor(gesture, score) {
    this.gesture = gesture;
    this.score = score;  
    }
    runMain() {
      if(this.whoPlays() === 1){
        let ai = new Ai("Bob the PC");
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
    
    
}
  module.exports = Game