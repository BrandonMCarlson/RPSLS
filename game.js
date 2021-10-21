const Player = require('./player');
const Human = require('./player');
const prompt = require("prompt-sync")()
const Ai = require('./ai');



class Game {
  constructor(gestures, score, gesture) {
    this.gestures = gestures;
    this.score = score;
    this.playerOne = new Player("playerOne");
    this.playerTwo = new Human("Brandon");
    this.gesture;
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
      console.log(`You both chose ${this.gestureChoice}, try again`);

    }
    else if ((Player1.gesture === 0 || Player1.gesture === 1) && (Player2.gesture === 0 || Player2.gesture === 1)) {
      console.log("Paper beats rock!");
      if (Player1.gesture === 1) {
        Player1.score++
        console.log(`${Player1.name} score a point. total points for each team are /n ${Player1.points} /n ${Player2.points}`);
      }
      else if (Player2.gesture === 1) {
        Player2.points++
        console.log(`${Player2.name} scores a point. total points for each team are /n ${Player1.points} /n ${Player2.points} `);
      }
    }

    else if ((Player1.gesture === 1 || Player1.gesture === 2) && (Player2.gesture === 2 || Player2.gesture === 1)) {
      console.log("Scissors cuts paper!");
      if (Player1.gesture === 2) {
        Player1.score++
        console.log(`${Player1.name} score a point. total points for each team are /n ${Player1.points} /n ${Player2.points}`);
      }
      else if (Player2.gesture === 2) {
        Player2.points++
        console.log(`${Player2.name} scores a point. total points for each team are /n ${Player1.points} /n ${Player2.points} `);
      }
    }

    else if ((Player1.gesture === 2 || Player1.gesture === 3) && (Player2.gesture === 3 || Player2.gesture === 2)) {
      console.log("Paper covers rock!");
      if (Player1.gesture === 3) {
        Player1.score++
        console.log(`${Player1.name} score a point. total points for each team are /n ${Player1.points} /n ${Player2.points}`);
      }
      else if (Player2.gesture === 3) {
        Player2.points++
        console.log(`${Player2.name} scores a point. total points for each team are /n ${Player1.points} /n ${Player2.points} `);
      }
    }

    else if ((Player1.gesture === 2 || Player1.gesture === 3) && (Player2.gesture === 3 || Player2.gesture === 2)) {
      console.log("Scissors cchops lizard!");
      if (Player1.gesture === 3) {
        Player1.score++
        console.log(`${Player1.name} score a point. total points for each team are /n ${Player1.points} /n ${Player2.points}`);
      }
      else if (Player2.gesture === 3) {
        Player2.points++
        console.log(`${Player2.name} scores a point. total points for each team are /n ${Player1.points} /n ${Player2.points} `);
      }
    }

    else if ((Player1.gesture === 4 || Player1.gesture === 5) && (Player2.gesture === 5 || Player2.gesture === 4)) {
      console.log("Lizard poisons spock!");
      if (Player1.gesture === 4) {
        Player1.score++
        console.log(`${Player1.name} score a point. total points for each team are /n ${Player1.points} /n ${Player2.points}`);
      }
      else if (Player2.gesture === 4) {
        Player2.points++
        console.log(`${Player2.name} scores a point. total points for each team are /n ${Player1.points} /n ${Player2.points} `);
      }
    }

    else if ((Player1.gesture === 2 || Player1.gesture === 4) && (Player2.gesture === 4 || Player2.gesture === 2)) {
      console.log("Spock smashes scissors");
      if (Player1.gesture === 2) {
        Player1.score++
        console.log(`${Player1.name} score a point. total points for each team are /n ${Player1.points} /n ${Player2.points}`);
      }
      else if (Player2.gesture === 2) {
        Player2.gesture++
        console.log(`${Player2.name} scores a point. total points for each team are /n ${Player1.points} /n ${Player2.points} `);
      }
    }

    else if ((Player1.gesture === 3 || Player1.gesture === 1) && (Player2.gesture === 3 || Player2.gesture === 1)) {
      console.log("Lizard eats Paper");
      if (Player1.gesture === 3) {
        Player1.score++
        console.log(`${Player1.name} score a point. total points for each team are /n ${Player1.points} /n ${Player2.points}`);
      }
      else if (Player2.gesture === 3) {
        Player2.points++
        console.log(`${Player2.name} scores a point. total points for each team are /n ${Player1.points} /n ${Player2.points} `);
      }
    }

    else if ((Player1.gesture === 1 || Player1.gesture === 4) && (Player2.gesture === 1 || Player2.gesture === 4)) {
      console.log("Paper disproves Spock!");
      if (Player1.gesture === 1) {
        Player1.score++
        console.log(`${Player1.name} score a point. total points for each team are /n ${Player1.points} /n ${Player2.points}`);
      }
      else if (Player2.gesture === 1) {
        Player2.points++
        console.log(`${Player2.name} scores a point. total points for each team are /n ${Player1.points} /n ${Player2.points} `);
      }
    }

    else if ((Player1.gesture === 0 || Player1.gesture === 4) && (Player2.gesture === 0 || Player2.gesture === 4)) {
      console.log("Spock vaprizes Rock!");
      if (Player1.gesture === 4) {
        Player1.score++
        console.log(`${Player1.name} score a point. total points for each team are /n ${Player1.points} /n ${Player2.points}`);
      }
      else if (Player2.gesture === 4) {
        Player2.points++
        console.log(`${Player2.name} scores a point. total points for each team are /n ${Player1.points} /n ${Player2.points} `);
      }
    }
  }
}
  showWep() {
    let Player1 = this.playerOne;
    let Player2 = this.playerTwo;
    console.log(`${Player1.name} selected: ${Player1.gesture}`);
    console.log(`${Player2.name} selected: ${Player2.gesture}`);
  }


  gameWinner() {
    if (Player.points === 3) {
      console.log(`${Player.name} is the winner!`);
    }

  }

}




module.exports = Game