const PlayerOne = require("./player");

class Ai extends Player {
  
    constructor(name) {
      super(name);
      this.player2 = new Ai("Steve");
    }
}

module.exports = Ai
