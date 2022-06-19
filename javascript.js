function computerPlay(){
    const rps = ["rock", "paper", "scissors"]
    let rand = Math.floor(Math.random()*3)
    return rps[rand]

}


function playRound(playerSelection, computerSelection) {
    choice = playerSelection.toLowerCase()
    if (playerSelection == computerSelection){
        return "Draw"
    }

    else if (playerSelection == "rock") {
        if (computerSelection == "paper") {
            return "Computer wins"
        }
        else {
            return "Player wins"
        }
    }
    else if (playerSelection == "paper") {
        if (computerSelection == "scissors") {
            return "Computer wins"
        }
        else {
            return "Player wins"
        }
    }
    else if (playerSelection == "scissors") {
        if (computerSelection == "rock") {
            return "Computer wins"
        }
        else {
            return "Player wins"
        }
    }
}

function game(){
    let scoreplayer = 0;
    let scorecomp = 0;
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Rock, paper, or scissors?")
        let computerSelection = computerPlay();
        console.log(playerSelection, computerSelection);
        let result = playRound(playerSelection, computerSelection);
        console.log(result)
        if (result == "Computer wins"){
            scorecomp++;
        }
        else if (result == "Player wins"){
            scoreplayer++; 
        }
        console.log("score: ")
        console.log(scoreplayer, scorecomp)
    }
}
