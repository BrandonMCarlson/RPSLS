const Player = require('./player');
let prompt = require('prompt-sync');
const Ai = require('./ai');
let userInput = prompt();


class Game {
    constructor(gesture, score) {
    this.gesture = gesture;
    this.score = score;  
    this.playerOne = new Player("PlayerOne");
    this.playerTwo = new Player("PlayerTwo");
    this.ai = new Ai("Bob the PC");
    }
    
    runMain() {
      if(this.whoPlays() === 1){
        console.log (`${ai.name} usually dominates their opponent.`);
        this.aiRandomRolls(ai);
      }
    }
    whoPlays(){
      let playerOne = new Player("Player One");
      playerOne.name = playerOne.setName();

      if(this.playerNumber > 1){
        let playerTwo = new Player("Player Two")
        playerTwo.name  = playerTwo.setName();
        console.log(`Welcome ${playerOne.name} and ${playerTwo.name}.`)
        return 2;
    }
      else{
        console.log(`Welcome ${playerOne.name}`);
        return 1;
      }
    }
    aiRandomRolls(object){
      let aiRoll = Math.round(Math.random() * 3);
      console.log(object.gesture[aiRoll]);
      return aiRoll;
    }
    gameRules(player, playerInputOne, playerInputTwo, aiRoll){
      if(playerInputOne === playerInputTwo){
        console.log(`You both chose ${player.gestureChoice}, try again`);
      this.gameRules(this.playerOne, this.playerOne.gestureChoice(), this.playerTwo, this.playerTwo.gestureChoice());
      }
      else if((playerInputOne === 0 || playerInputOne === 1) && (playerInputTwo === 0 || playerInputTwo === 1)) {
        console.log("Paper beats rock!");
        if(playerInputOne === 1){
          player.score ++
          console.log(`${player.name} score a point. total points for each team are /n ${player.points} /n ${otherPlayer.points}`);
        }
        else if(playerInputTwo === 1) {
          otherPlayer.points ++
          console.log(`${otherPlayer.name} scores a point. total points for each team are /n ${player.points} /n ${otherPlayer.points} `);
        }
      }
      if(player.points >= 1 || otherPlayer.points  >= 1) {
        this.gameRules(this.playerOne, this.playerOne.gestureChoice(), this.playerTwo, this.playerTwo.gestureChoice());
      }
      else if((playerInputOne === 1 || playerInputOne === 2) && (playerInputTwo === 2 || playerInputTwo === 1)) {
        console.log("Scissors cuts paper!");
        if(playerInputOne === 2){
          player.score ++
          console.log(`${player.name} score a point. total points for each team are /n ${player.points} /n ${otherPlayer.points}`);
        }
        else if(playerInputTwo === 2) {
          otherPlayer.points ++
          console.log(`${otherPlayer.name} scores a point. total points for each team are /n ${player.points} /n ${otherPlayer.points} `);
        }
      }
      if(player.points <= 2 || otherPlayer.points  <= 2) {
        this.gameRules(this.playerOne, this.playerOne.gestureChoice(), this.playerTwo, this.playerTwo.gestureChoice());
    }
    else if((playerInputOne === 2 || playerInputOne === 3) && (playerInputTwo === 3 || playerInputTwo === 2)) {
      console.log("Paper covers rock!");
      if(playerInputOne === 3){
        player.score ++
        console.log(`${player.name} score a point. total points for each team are /n ${player.points} /n ${otherPlayer.points}`);
      }
      else if(playerInputTwo === 3) {
        otherPlayer.points ++
        console.log(`${otherPlayer.name} scores a point. total points for each team are /n ${player.points} /n ${otherPlayer.points} `);
      }
    }
    if(player.points >= 1 || otherPlayer.points  >= 1) {
      this.gameRules(this.playerOne, this.playerOne.gestureChoice(), this.playerTwo, this.playerTwo.gestureChoice());
    }
    else if((playerInputOne === 2 || playerInputOne === 3) && (playerInputTwo === 3 || playerInputTwo === 2)) {
      console.log("Scissors cchops lizard!");
      if(playerInputOne === 3){
        player.score ++
        console.log(`${player.name} score a point. total points for each team are /n ${player.points} /n ${otherPlayer.points}`);
      }
      else if(playerInputTwo === 3) {
        otherPlayer.points ++
        console.log(`${otherPlayer.name} scores a point. total points for each team are /n ${player.points} /n ${otherPlayer.points} `);
      }
    }
    if(player.points >= 1 || otherPlayer.points  >= 1) {
      this.gameRules(this.playerOne, this.playerOne.gestureChoice(), this.playerTwo, this.playerTwo.gestureChoice());  
    }
    else if((playerInputOne === 4 || playerInputOne === 5) && (playerInputTwo === 5 || playerInputTwo === 4)) {
      console.log("Lizard poisons spock!");
      if(playerInputOne === 4){
        player.score ++
        console.log(`${player.name} score a point. total points for each team are /n ${player.points} /n ${otherPlayer.points}`);
      }
      else if(playerInputTwo === 4) {
        otherPlayer.points ++
        console.log(`${otherPlayer.name} scores a point. total points for each team are /n ${player.points} /n ${otherPlayer.points} `);
      }
    }
    if(player.points >= 1 || otherPlayer.points  >= 1) {
      this.gameRules(this.playerOne, this.playerOne.gestureChoice(), this.playerTwo, this.playerTwo.gestureChoice());  
    }
    else if((playerInputOne === 2 || playerInputOne === 4) && (playerInputTwo === 4 || playerInputTwo === 2)) {
      console.log("Spock smashes scissors");
      if(playerInputOne === 2){
        player.score ++
        console.log(`${player.name} score a point. total points for each team are /n ${player.points} /n ${otherPlayer.points}`);
      }
      else if(playerInputTwo === 2) {
        otherPlayer.points ++
        console.log(`${otherPlayer.name} scores a point. total points for each team are /n ${player.points} /n ${otherPlayer.points} `);
      }
    }
    if(player.points >= 1 || otherPlayer.points  >= 1) {
      this.gameRules(this.playerOne, this.playerOne.gestureChoice(), this.playerTwo, this.playerTwo.gestureChoice());  
    }
    else if((playerInputOne === 3 || playerInputOne === 1) && (playerInputTwo === 3 || playerInputTwo === 1)) {
      console.log("Lizard eats Paper");
      if(playerInputOne === 3){
        player.score ++
        console.log(`${player.name} score a point. total points for each team are /n ${player.points} /n ${otherPlayer.points}`);
      }
      else if(playerInputTwo === 3) {
        otherPlayer.points ++
        console.log(`${otherPlayer.name} scores a point. total points for each team are /n ${player.points} /n ${otherPlayer.points} `);
      }
    }
    if(player.points >= 1 || otherPlayer.points  >= 1) {
      this.gameRules(this.playerOne, this.playerOne.gestureChoice(), this.playerTwo, this.playerTwo.gestureChoice());  
    }
    else if((playerInputOne === 1 || playerInputOne === 4) && (playerInputTwo === 1 || playerInputTwo === 4)) {
      console.log("Paper disproves Spock!");
      if(playerInputOne === 1){
        player.score ++
        console.log(`${player.name} score a point. total points for each team are /n ${player.points} /n ${otherPlayer.points}`);
      }
      else if(playerInputTwo === 1) {
        otherPlayer.points ++
        console.log(`${otherPlayer.name} scores a point. total points for each team are /n ${player.points} /n ${otherPlayer.points} `);
      }
    }
    if(player.points >= 1 || otherPlayer.points  >= 1) {
      this.gameRules(this.playerOne, this.playerOne.gestureChoice(), this.playerTwo, this.playerTwo.gestureChoice());  
    } 
    else if((playerInputOne === 0 || playerInputOne === 4) && (playerInputTwo === 0 || playerInputTwo === 4)) {
      console.log("Spock vaprizes Rock!");
      if(playerInputOne === 4){
        player.score ++
        console.log(`${player.name} score a point. total points for each team are /n ${player.points} /n ${otherPlayer.points}`);
      }
      else if(playerInputTwo === 4) {
        otherPlayer.points ++
        console.log(`${otherPlayer.name} scores a point. total points for each team are /n ${player.points} /n ${otherPlayer.points} `);
      }
    }
    if(player.points <= 3 || otherPlayer.points  <= 3) {
      this.gameRules(this.playerOne, this.playerOne.gestureChoice(), this.playerTwo, this.playerTwo.gestureChoice());  
    }
    gameWinner();{
      if(player.points === 3){
        console.log(`${player.name} is the winner!`);
      }

    }
     
  }
   
}  
    

  module.exports = Game