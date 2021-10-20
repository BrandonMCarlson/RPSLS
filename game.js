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
      if(this.whoPlays() === 1){
        console.log (`${Ai.name} usually dominates their opponent.`);
        this.aiRandomRolls(Ai);
      }
    }
    whoPlays(){
     
      playerOne.name = playerOne.setName();

      if(this.playerNumber > 1){
        
        playerTwo.name  = playerTwo.setName();
        console.log(`Welcome ${playerOne.name} and ${playerTwo.name}.`)
        return 2;
    }
      else{
        console.log(`Welcome ${playerOne.name}`);
        return 1;
      }
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
      if(player.points <= 3 || otherPlayer.points  <= 3) {
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
      if(player.points <= 3 || otherPlayer.points  <= 3) {
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
    if(player.points <= 3 || otherPlayer.points  <= 3) {
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
    if(player.points <= 3 || otherPlayer.points  <= 3) {
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
    if(player.points <= 3 || otherPlayer.points  <= 3) {
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
    if(player.points <= 3 || otherPlayer.points  <= 3) {
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
    if(player.points <= 3 || otherPlayer.points  <= 3) {
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
    if(player.points <= 3 || otherPlayer.points  <= 3) {
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
      aiRandomRolls(object);{
        let aiRoll = Math.round(Math.random() * 3);
        console.log(object.gesture[aiRoll]);
        return aiRoll;
      }
    }

  }
   
}  
    

  module.exports = Game