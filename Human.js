const Player = require("./player");
const prompt = require("prompt-sync")()
const Ai = require('./ai');

class Human extends Player {
  constructor(name) {
    super(name);

  }

  gestureChoice() {
    

  }
}

module.exports = Human