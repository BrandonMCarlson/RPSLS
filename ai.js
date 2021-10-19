const Player = require("./player");

class Ai extends Player {
  
    constructor(name) {
      super(name);

      this.score = 0;
    }
}

module.exports = Ai
