function computerPlay(){
    const rps = ["rock", "paper", "scissors"]
    let rand = Math.floor(Math.random()*3)
    return rps[rand]

}
console.log(computerPlay())

function playRound(playerSelection, computerSelection) {
    choice = playerSelection.toLowerCase()
    if (playerSelection == computerSelection){
        return "Draw"
    }

    else if (playerSelection == "rock") {
        if (computerSelection == "paper") {
            
        }
    }
  }
  
  const playerSelection = "rock";
  const computerSelection = computerPlay();
  console.log(playRound(playerSelection, computerSelection));