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
  
const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(playerSelection, computerSelection)
console.log(playRound(playerSelection, computerSelection));