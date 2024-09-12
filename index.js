'use strict'
// selecting score
const score0P1 = document.getElementById('score--0');
const score0P2 = document.getElementById('score--1');
//selecting current score
const currentP1= document.getElementById('current--0');
const currentP2= document.getElementById('current--1');
//selecting buttons
const diceEl=document.querySelector('.dice-surface');
const btnRoll=document.querySelector('.play');
const btnHold=document.querySelector('.hold');
const btnNew=document.querySelector('.new-game');
//selecting players 
const player1=document.querySelector('.player--0');
const player2=document.querySelector('.player--1');
//reseting score
let currentScore = 0 ;
let activePlayer =0;
let score=[0,0];
let playing=true;
const winningScore = 35;
const switchPlayer=function(){
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    activePlayer=activePlayer===0?1:0;
    player1.classList.toggle('player--active');
    player2.classList.toggle('player--active');
};
//rolling dice functionality
btnRoll.addEventListener('click',function(){
    if(playing){
    //1- generating random dice roll
    const dice = (Math.trunc(Math.random()*6)+1);
    //2- display dice image   
    diceEl.classList.remove('hidden');
    diceEl.src=`/images/dice-${dice}.png`;
    //3- check for rolled 
    if(dice!==1){
        currentScore += dice;
        document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    }else{
        switchPlayer(); 
    }
    }
    
});
//hold functionality
btnHold.addEventListener('click', function () {
    if (playing) {
        // Add the current score to the active player's total score
        score[activePlayer] += currentScore;
        document.getElementById(`score--${activePlayer}`).textContent = score[activePlayer];

        // Check if the active player has won
        if (score[activePlayer] >= winningScore) {
            // Finish the game
            playing = false;
            diceEl.classList.add('hidden');
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
            document.querySelector(`.player--${activePlayer}`).style.background = '#78ffd6';
        } else {
            // Switch to the other player and reset current score
            switchPlayer();
            currentScore = 0; // Reset current score for the new active player
        }
    }
});
// new game functionality
'use strict';

// ... (your existing code)

const newGame = btnNew.addEventListener('click', function () {
    score = [0, 0];
    currentScore = 0;
    activePlayer = 0;
    playing = true;
    score0P1.textContent = '0';
    score0P2.textContent = '0';
    currentP1.textContent = '0';
    currentP2.textContent = '0';
    // Remove winner styles
    player1.classList.remove('player--winner', 'player--active');
    player2.classList.remove('player--winner', 'player--active');
    document.querySelector(`.player--${activePlayer}`).style.background ='';
    // Set initial active player
    player1.classList.add('player--active');
});







