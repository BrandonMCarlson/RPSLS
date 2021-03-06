const Player = require("./player");
const prompt = require("prompt-sync")()


class Human extends Player {
  constructor(name) {
    super(name);
  
  }

  gestureChoice() {

      let userInput = prompt(`${this.name}, 0 for rock. 1 for paper. 1 for scissors. 3 for lizard. 4 for spock.`);
      switch (userInput) {
        case "0":
          this.gesture = "rock"
          return this.gesture;
        case "1":
          this.gesture = "paper"
          return this.gesture;
        case "2":
          this.gesture = "scissors"
          return this.gesture;
        case "3":
          this.gesture = "lizard"
          return this.gesture;
        case "4":
          this.gesture = "spock"
          return this.gesture;
  
        default:
          console.log("That is not a valid input. restart please.");
          return this.gestureChoice();
  
      }

  }
}

module.exports = Human