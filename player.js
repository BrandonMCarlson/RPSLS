//'superclass
let prompt = require('prompt-sync');
class PlayerOne {
    constructor(name) {
      this.score = 0;
      this.name = name;
      this.gesture = ["rock", "paper", "scissors", "lizard", "spock"];
    }
    setName(){
      console.log(`${this.name}, enter you name please: `);
      newName = prompt();
      return this.newName;
    }
    gestureChoice(){
      let userInput = prompt(`${this.name}, 0 for rock. 1 for paper. 2 for scissors. 3 for lizard. 4 for spock.`);
      switch(userInput) {
        case "0":
          return "rock"
        case "1":
          return "paper"
        case "2":
          return "scissors"
        case "3":
          return "lizard"
        case "4":
          return "spock"
          
        default:
          console.log("That is not a valid input. restart please.");
          this.gestureChoice();
          break;
      }
    }
  
  }

  module.exports = PlayerOne