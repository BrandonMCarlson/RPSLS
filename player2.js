const Player = require("./player");

class PlayerTwo extends Player {
    constructor(name) {
      super(name);
      this.score = 0;
      this.name = name;
    }
 }

module.exports = PlayerTwo