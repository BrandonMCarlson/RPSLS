const Player = require('./player');
const Human = require('./Human');
const prompt = require("prompt-sync")()
const Ai = require('./ai');



class Game {
  constructor() {
    this.playerOne = new Human("playerOne");
    this.playerTwo = new Human("Brandon");
  }

  runMain() {
    console.log("welcome to some good ole fashioned rpsls.");
    this.whoPlays();
    this.gameRules();
  }
  whoPlays() {
    console.log("Please select 1 for single player.  please select 2 for multiplayer.");
    let gameForm = prompt();
    switch (gameForm) {
      case "1":
        this.playerTwo = new Ai("Steve the PC");
        break;
      case "2":
        this.playerOne = new Human("P1");
        this.playerTwo = new Human("P2");
        break;
      default:
        console.log("invalid choice");
        return this.whoPlays;
    }

  }
  gameRules() {
    let Player1 = this.playerOne;
    let Player2 = this.playerTwo;


    while (Player1.score < 2 && Player2.score < 2) {
      Player1.gestureChoice();
      Player2.gestureChoice();
      this.showWep();
    
      if (Player1.gesture === Player2.gesture) {
        console.log(`You both chose ${this.gesture}, try again`);

      }
      else if ((Player1.gesture === "rock" || Player1.gesture === "paper") && (Player2.gesture === "rock" || Player2.gesture === "paper")) {
        console.log("Paper beats rock!");
        if (Player1.gesture === "paper") {
          Player1.score++
          console.log(`${Player1.name} score a point. total points for each team are P1: ${Player1.score} P2: ${Player2.score}`);
        }
        else if (Player2.gesture === "paper") {
          Player2.score++
          console.log(`${Player2.name} scores a point. total points for each team are P1: ${Player1.score} P2: ${Player2.score} `);
        }
      }

      else if ((Player1.gesture === "scissors" || Player1.gesture === "paper") && (Player2.gesture === "scissors" || Player2.gesture === "paper")) {
        console.log("Scissors cuts paper!");
        if (Player1.gesture === "scissors") {
          Player1.score++
          console.log(`${Player1.name} score a point. total points for each team are P1: ${Player1.score} P2: ${Player2.score}`);
        }
        else if (Player2.gesture === "scissors") {
          Player2.score++
          console.log(`${Player2.name} scores a point. total points for each team are P1: ${Player1.score} P2: ${Player2.score} `);
        }
      }

      else if ((Player1.gesture === "lizard" || Player1.gesture === "rock") && (Player2.gesture === "lizard"|| Player2.gesture === "rock")) {
        console.log("Rock crushes lizard!");
        if (Player1.gesture === "rock") {
          Player1.score++
          console.log(`${Player1.name} score a point. total points for each team are P1: ${Player1.score} P2: ${Player2.score}`);
        }
        else if (Player2.gesture === "rock") {
          Player2.score++
          console.log(`${Player2.name} scores a point. total points for each team are P1: ${Player1.score} P2: ${Player2.score} `);
        }
      }

      else if ((Player1.gesture === "scissors" || Player1.gesture === "lizard") && (Player2.gesture === "scissors" || Player2.gesture === "lizard")) {
        console.log("Scissors cchops lizard!");
        if (Player1.gesture === "scissors") {
          Player1.score++
          console.log(`${Player1.name} score a point. total points for each team are P1: ${Player1.score} P2: ${Player2.score}`);
        }
        else if (Player2.gesture === "scissors") {
          Player2.score++
          console.log(`${Player2.name} scores a point. total points for each team are P1: ${Player1.score} P2: ${Player2.score} `);
        }
      }

      else if ((Player1.gesture === "lizard" || Player1.gesture === "spock") && (Player2.gesture === "lizard" || Player2.gesture === "spock")) {
        console.log("Lizard poisons spock!");
        if (Player1.gesture === "lizard") {
          Player1.score++
          console.log(`${Player1.name} score a point. total points for each team are P1: ${Player1.score} P2: ${Player2.score}`);
        }
        else if (Player2.gesture === "lizard") {
          Player2.score++
          console.log(`${Player2.name} scores a point. total points for each team are P1: ${Player1.score} P2: ${Player2.score} `);
        }
      }

      else if ((Player1.gesture === "spock" || Player1.gesture === "scissors") && (Player2.gesture === "spock" || Player2.gesture === "scissors")) {
        console.log("Spock smashes scissors");
        if (Player1.gesture === "spock") {
          Player1.score++
          console.log(`${Player1.name} score a point. total points for each team are P1: ${Player1.score} P2: ${Player2.score}`);
        }
        else if (Player2.gesture === "spock") {
          Player2.score++
          console.log(`${Player2.name} scores a point. total points for each team are P1: ${Player1.score} P2: ${Player2.score} `);
        }
      }

      else if ((Player1.gesture === "paper" || Player1.gesture === "lizard") && (Player2.gesture === "paper" || Player2.gesture === "lizard")) {
        console.log("Lizard eats Paper");
        if (Player1.gesture === "lizard") {
          Player1.score++
          console.log(`${Player1.name} score a point. total points for each team are P1: ${Player1.score} P2: ${Player2.score}`);
        }
        else if (Player2.gesture === "lizard") {
          Player2.score++
          console.log(`${Player2.name} scores a point. total points for each team are P1: ${Player1.score} P2: ${Player2.score} `);
        }
      }

      else if ((Player1.gesture === "paper" || Player1.gesture === "spock") && (Player2.gesture === "paper" || Player2.gesture === "spock")) {
        console.log("Paper disproves Spock!");
        if (Player1.gesture === "paper") {
          Player1.score++
          console.log(`${Player1.name} score a point. total points for each team are P1: ${Player1.score} P2: ${Player2.score}`);
        }
        else if (Player2.gesture === "paper") {
          Player2.score++
          console.log(`${Player2.name} scores a point. total points for each team are P1: ${Player1.score} P2: ${Player2.score} `);
        }
      }

      else if ((Player1.gesture === "spock" || Player1.gesture === "rock") && (Player2.gesture === "rock" || Player2.gesture === "spock")) {
        console.log("Spock vaprizes Rock!");
        if (Player1.gesture === "spock") {
          Player1.score++
          console.log(`${Player1.name} score a point. total points for each team are P1: ${Player1.score} P2: ${Player2.score}`);
        }
        else if (Player2.gesture === "spock") {
          Player2.score++
          console.log(`${Player2.name} scores a point. total points for each team are P1: ${Player1.score} P2: ${Player2.score} `);
        }
        else if ((Player1.gesture === "rock" || Player1.gesture === "scissors") && (Player2.gesture === "rock" || Player2.gesture === "scissors")) {
          console.log("Rock beats scissors!");
          if (Player1.gesture === "rock") {
            Player1.score++
            console.log(`${Player1.name} score a point. total points for each team are P1: ${Player1.score} P2: ${Player2.score}`);
          }
          else if (Player2.gesture === "rock") {
            Player2.score++
            console.log(`${Player2.name} scores a point. total points for each team are P1: ${Player1.score} P2: ${Player2.score} `);
          }
        }
      }
    }
}
  showWep() {
    console.log(`${this.playerOne.name} selected: ${this.playerOne.gesture}`);
    console.log(`${this.playerTwo.name} selected: ${this.playerTwo.gesture}`);
  }


  gameWinner() {
    if (Player.points === 3) {
      console.log(`${Player.name} is the winner!`);
    }

  }

}




module.exports = Game