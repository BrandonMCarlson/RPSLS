const Player = require("./player");

class Ai extends Player {

  constructor(name) {
    super(name);

  }
  gestureChoice() {
    let gest = this.gestures;
    let gestChoice = Math.floor(Math.random() * gest.length)
    this.gesture = gest[gestChoice];
  }
}



module.exports = Ai
