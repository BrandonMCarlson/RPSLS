const Player = require('./player');
const Human = require('./player');
let prompt = require('prompt-sync');
const Ai = require('./ai');
const userInput = prompt();


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
      console.log("Please select 1 for single player. /n please select 2 for multiplayer.");
      let gameForm = prompt();
      switch(gameForm) {
        case "1":
          this.playerTwo = new Ai();
          break;
        case"2":
        this.playerTwo = new Human("P2");
          break;
        default:
          console.log("invalid choice");
          return this.whoPlays;
      }
      
    }
    gameRules(){
      let Player1 = this.playerOne;
      let Player2 = this.playerTwo;

      while(Player1.wins < 2 && Player2.wins < 2){
        Player1.gestureChoice();
        Player2.gestureChoice();
        this.showWep();
      }
      if(Player1.userInput === Player2.userInput){
        console.log(`You both chose ${this.gestureChoice}, try again`);
      
      }
      else if((Player1.userInput === 0 || Player1.userInput === 1) && (Player2.userInput === 0 || Player2.userInput === 1)) {
        console.log("Paper beats rock!");
        if(Player1.userInput === 1){
          Player1.score ++
          console.log(`${player.name} score a point. total points for each team are /n ${Player1.points} /n ${Player2.points}`);
        }
        else if(Player2.userInput === 1) {
          Player2.points ++
          console.log(`${Player2.name} scores a point. total points for each team are /n ${Player1.points} /n ${Player2.points} `);
        }
      }

      else if((Player1.userInput === 1 || Player1.userInput === 2) && (Player2.userInput === 2 || Player2.userInput === 1)) {
        console.log("Scissors cuts paper!");
        if(Player1.userInput === 2){
          Player1.score ++
          console.log(`${Player1.name} score a point. total points for each team are /n ${Player1.points} /n ${Player2.points}`);
        }
        else if(Player2.userInput === 2) {
          Player2.points ++
          console.log(`${Player2.name} scores a point. total points for each team are /n ${Player1.points} /n ${Player2.points} `);
        }
      }

    else if((Player1.userInput === 2 || Player1.userInput === 3) && (Player2.userInput=== 3 || Player2.userInput === 2)) {
      console.log("Paper covers rock!");
      if(Player1.userInput === 3){
        Player1.score ++
        console.log(`${Player1.name} score a point. total points for each team are /n ${Player1.points} /n ${Player2.points}`);
      }
      else if(Player2.userInput === 3) {
        Player2.points ++
        console.log(`${Player2.name} scores a point. total points for each team are /n ${Player1.points} /n ${Player2.points} `);
      }
    }
    
    else if((Player1.userInput === 2 || Player1.userInput === 3) && (Player2.userInput === 3 || Player2.userInput === 2)) {
      console.log("Scissors cchops lizard!");
      if(Player1.userInput === 3){
        Player1.score ++
        console.log(`${Player1.name} score a point. total points for each team are /n ${Player1.points} /n ${Player2.points}`);
      }
      else if(Player2.userInput === 3) {
        Player2.points ++
        console.log(`${Player2.name} scores a point. total points for each team are /n ${Player1.points} /n ${Player2.points} `);
      }
    }
    
    else if((Player1.userInput === 4 || Player1.userInput === 5) && (Player2.userInput === 5 || Player2.userInput === 4)) {
      console.log("Lizard poisons spock!");
      if(Player1.userInput === 4){
        Player1.score ++
        console.log(`${Player1.name} score a point. total points for each team are /n ${Player1.points} /n ${Player2.points}`);
      }
      else if(Player2.userInput === 4) {
        Player2.points ++
        console.log(`${Player2.name} scores a point. total points for each team are /n ${Player1.points} /n ${Player2.points} `);
      }
    }
    
    else if((Player1.userInput === 2 || Player1.userInput=== 4) && (Player2.userInput === 4 || Player2.userInput === 2)) {
      console.log("Spock smashes scissors");
      if(Player1.userInput === 2){
        Player1.score ++
        console.log(`${Player1.name} score a point. total points for each team are /n ${Player1.points} /n ${Player2.points}`);
      }
      else if(playerInputTwo === 2) {
        Player2.userInput ++
        console.log(`${Player2.name} scores a point. total points for each team are /n ${Player1.points} /n ${Player2.points} `);
      }
    }
   
    else if((Player1.userInput === 3 || Player1.userInput === 1) && (Player2.userInput === 3 || Player2.userInput === 1)) {
      console.log("Lizard eats Paper");
      if(Player1.userInput === 3){
        Player1.score ++
        console.log(`${Player1.name} score a point. total points for each team are /n ${Player1.points} /n ${Player2.points}`);
      }
      else if(Player2.userInput === 3) {
        Player2.points ++
        console.log(`${Player2.name} scores a point. total points for each team are /n ${Player1.points} /n ${Player2.points} `);
      }
    }
   
    else if((Player1.userInput === 1 || Player1.userInput === 4) && (Player2.userInput === 1 || Player2.userInput === 4)) {
      console.log("Paper disproves Spock!");
      if(Player1.userInput === 1){
        Player1.score ++
        console.log(`${Player1.name} score a point. total points for each team are /n ${Player1.points} /n ${Player2.points}`);
      }
      else if(Player2.userInput === 1) {
        Player2.points ++
        console.log(`${Player2.name} scores a point. total points for each team are /n ${Player1.points} /n ${Player2.points} `);
      }
    }
    
    else if((Player1.userInput === 0 || Player1.userInput === 4) && (Player2.userInput === 0 || Player2.userInput === 4)) {
      console.log("Spock vaprizes Rock!");
      if(Player1.userInput === 4){
        Player1.score ++
        console.log(`${Player1.name} score a point. total points for each team are /n ${Player1.points} /n ${Player2.points}`);
      }
      else if(Player2.userInput === 4) {
        Player2.points ++
        console.log(`${Player2.name} scores a point. total points for each team are /n ${Player1.points} /n ${Player2.points} `);
      }
    }
    
    showWep();{
      let Player1 = this.playerOne;
      let Player2 = this.playerTwo;
      console.log(`${Player1.name} selected: ${Player1.gestureChoice}`);
      console.log(`${Player2.name} selected: ${Player2.gestureChoice}`);
    }
    
    
    gameWinner();{
      if(Player.points === 3){
        console.log(`${player.name} is the winner!`);
      }
      aiRandomRolls(object);{
        let aiRoll = Math.round(Math.random() * 3);
        console.log(object.gesture[aiRoll]);
        return aiRoll;
      }
    }

  }
   
}  
    

  module.exports = Game