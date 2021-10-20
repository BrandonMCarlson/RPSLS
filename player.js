//'superclass
const prompt = require('prompt-sync');
const userInput = prompt();

class Player {
    constructor(name) {
      this.score = 0;
      this.name = name;
      this.gestures = ["rock", "paper", "scissors", "lizard", "spock"];
      this.gesture;
    }
    
    gestureChoice(){

      }
    }
  


  module.exports = Player