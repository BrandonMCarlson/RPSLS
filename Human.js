const Player = require("./player");



class Human extends Player {
    constructor(name) {
      super(name);
      
    }
    gestureChoice(){
      let userInput = prompt(`${this.name}, 0 for rock. 1 for paper. 2 for scissors. 3 for lizard. 4 for spock.`);
      switch(userInput) {
        case "0":
          this.gesture = "rock"
        case "1":
          this.gesture = "paper"
        case "2":
          this.gesture = "scissors"
        case "3":
          this.gesture = "lizard"
        case "4":
          this.gesture = "spock"
          
        default:
          console.log("That is not a valid input. restart please.");
          this.gestureChoice();
          break;

    }
}
}
module.exports = Human