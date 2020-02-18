/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer, gamePlaying;

start();

//function button roll-dice

  document.querySelector(".btn-roll").addEventListener("click", function(){
   if(gamePlaying){
     var dice = Math.floor(Math.random()*6 + 1);
  var diceDom =  document.querySelector(".dice");
  diceDom.style.display = "block";
  diceDom.src = "dice-" + dice + ".png";
  
  
  
  if(dice !== 1){
    roundScore += dice;
    document.querySelector("#current-" + activeplayer).textContent = roundScore ;
    
  }else{
   nextplayer();
  }
   }
  

});




//function button to hold the dice and add it in the score



document.querySelector(".btn-hold").addEventListener("click", function(){
if(gamePlaying){
  scores[activeplayer] += roundScore;

document.querySelector("#score-" + activeplayer).textContent = scores[activeplayer];

if(scores[activeplayer] >= 100){
  document.querySelector("#name-" + activeplayer).textContent = "Winner!!";
  document.querySelector(".dice").style.display = "none";
  document.querySelector(".player-" + activeplayer + "-panel").classList.add("Winner");
  document.querySelector(".player-" + activeplayer + "-panel").classList.remove("active");
  gamePlaying = false;
}else {
  nextplayer();
}
}
});


// function button new game




document.querySelector(".btn-new").addEventListener("click", start);
  
  function start(){
 gamePlaying = true;
    scores = [0,0];
    roundScore = 0;
    activeplayer = 0;

    document.getElementById("score-0").textContent = '0';
    document.getElementById("score-1").textContent = '0';
    document.getElementById("current-0").textContent = '0';
    document.getElementById("current-1").textContent = '0';
    document.querySelector(".dice").style.display = "none";
    document.querySelector("#name-0").textContent = "Player 1";
    document.querySelector("#name-1").textContent = "Player 2";
    document.querySelector(".player-0-panel").classList.remove("Winner");
    document.querySelector(".player-1-panel").classList.remove("Winner");
    document.querySelector(".player-0-panel").classList.remove("active");
    document.querySelector(".player-1-panel").classList.remove("active");
    document.querySelector(".player-0-panel").classList.add("active");
  }
  




  function nextplayer(){
    /*the Ternary operator */ activeplayer === 0 ? activeplayer = 1 : activeplayer = 0;
    roundScore = 0;
  
    document.getElementById("current-0").textContent = 0;
    document.getElementById("current-1").textContent = 0;
    
    document.querySelector(".player-0-panel").classList.toggle("active");
    document.querySelector(".player-1-panel").classList.toggle("active");
    
    document.querySelector(".dice").style.display = "none";
  }