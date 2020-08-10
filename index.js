function computerPlay(){
    let play = Math.floor(Math.random() * 3);

    //test computer play
    console.log(play);

    if(play == 0){ return "ROCK"; }
    else if(play == 1){ return "PAPER"; }
    else { return "SCISSORS"; }
}
function playerPlay(){
    const rock = document.querySelector("#rock");
    const paper = document.querySelector("#paper");
    const scissors = document.querySelector("#scissors");
    rock.addEventListener('click', playRound("ROCK", computerPlay());
    paper.addEventListener('click', playRound("PAPER", computerPlay());
    scissors.addEventListener('click', playRound("SCISSORS", computerPlay());
}
function playRound(gamer, computer){
    if(gamer == computer){
        console.log("It's a tie!");
        return -1;
    }
    if(gamer == "ROCK" && computer == "SCISSORS"){
        console.log("You Win!");
        return 1;
    }
    if(gamer == "PAPER" && computer == "SCISSORS"){
        console.log("You Lose.");
        return 0;
    }
    if(gamer == "PAPER" && computer == "ROCK"){
        console.log("You Win!");
        return 1;
    }
    if(gamer == "SCISSORS" && computer == "PAPER"){
        console.log("You Win!");
        return 1;
    }
    if(gamer == "SCISSORS" && computer == "ROCK"){
        console.log("You Lose.");
        return 0;
    }
    if(gamer == "ROCK" && computer == "PAPER"){
        console.log("You Lose.");
        return 0;
    }
}
/*
func that makes you play 5 rounds and scores it

function game(){
    let playerScore = 0;
    let computerScore = 0;
    let gameRound = 0;
    for(let i = 0; i < 5; i++){
        gameRound = playRound(playerPlay(), computerPlay());
        if(gameRound == 1){ playerScore++; }
        else if(gameRound == 0){ computerScore++; }
    }
    if(playerScore > computerScore) { console.log("You won the game!"); }
    else if(playerScore < computerScore) { console.log("You lost the game."); }
    else { console.log("The game was a tie."); }
}
*/

