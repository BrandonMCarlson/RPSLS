const Player = require('./player');
const Die = require('./die');
let prompt = require('prompt-sync');
let userInput = prompt();

let RPSLS = ["rock", "paper", "scissors", "lizard", "spock"]

class Game {
    constructor(gesture) {
    this.gesture = gesture;

    }
    runMain() {
      this.playerSelect();
      this.war();
    }
    playerSelect(){
      prompt("You will now select a number between 1 and 5. 1 = rock /n 2 = paper /n 3 = scissors /n 4 = lizard /n 5 = spock");
    }
    
}
  module.exports = Game