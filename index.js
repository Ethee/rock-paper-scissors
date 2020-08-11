function computerPlay(){
    let play = Math.floor(Math.random() * 3);
    const compPlay = document.querySelector("#compPlayOut");
    if(play == 0){
        compPlay.textContent = "Rock"
        return "ROCK"; 
    }
    else if(play == 1){ 
        compPlay.textContent = "Paper";
        return "PAPER"; 
    }
    else { 
        compPlay.textContent = "Scissors";
        return "SCISSORS"; 
    }
}
function initPlay(){
    const rock = document.querySelector("#rock");
    const paper = document.querySelector("#paper");
    const scissors = document.querySelector("#scissors");
    rock.addEventListener('click', () => playRound("ROCK", computerPlay()));
    paper.addEventListener('click', () => playRound("PAPER", computerPlay()));
    scissors.addEventListener('click', () => playRound("SCISSORS", computerPlay()));
}
function scoreRound(score){
    const playerScore = document.querySelector("#playerScore");
    const compScore = document.querySelector("#compScore");
    let player = parseInt(playerScore.textContent);
    let comp = parseInt(compScore.textContent);
    if(score == 1){ 
        player += 1;
        playerScore.textContent = player;
        if(player == 5){ 
            alert("You Win!");
            playerScore.textContent = 0;
            compScore.textContent = 0;
        return;
        }
    }
    else{ 
        comp += 1;
        compScore.textContent = comp;
        if(comp == 5){ 
            alert("You Lose.");
            playerScore.textContent = 0;
            compScore.textContent = 0;
        return;
        }
    }
}

function playRound(gamer, computer){
    if(gamer == computer){
        return -1;
    }
    if(gamer == "ROCK" && computer == "SCISSORS"){
        scoreRound(1);
        return;
    }
    if(gamer == "PAPER" && computer == "SCISSORS"){
        scoreRound(0);
        return;
    }
    if(gamer == "PAPER" && computer == "ROCK"){
        scoreRound(1);
        return;
    }
    if(gamer == "SCISSORS" && computer == "PAPER"){
        scoreRound(1);
        return;
    }
    if(gamer == "SCISSORS" && computer == "ROCK"){
        scoreRound(0);
        return;
    }
    if(gamer == "ROCK" && computer == "PAPER"){
        scoreRound(0);
        return;
    }
}
initPlay();
