//'superclass

class PlayerOne {
    constructor(name) {
      this.score = score;
      this.name = name;
      this.gesture = ["rock", "paper", "scissors", "lizard", "spock"];
    }
    setName(){
      console.log(`${this.name}, enter you name please: `);
      this.name = prompt();
      return this.name;
    }
  
  }

  module.exports = PlayerOne