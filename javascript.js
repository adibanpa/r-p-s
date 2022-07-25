function computerPlay(){
    const rps = ["rock", "paper", "scissor"]
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
        if (computerSelection == "scissor") {
            return "Computer wins"
        }
        else {
            return "Player wins"
        }
    }
    else if (playerSelection == "scissor") {
        if (computerSelection == "rock") {
            return "Computer wins"
        }
        else {
            return "Player wins"
        }
    }
}

//function game(){
let scoreplayer = 0;
let scorecomp = 0;


// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll('button');

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {

    // and for each one we add a 'click' listener
    button.addEventListener('click', () => {
        console.log(button.id);
        let playerSelection = button.id;
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
        if (button.id == "rst"){
            scoreplayer = 0;
            scorecomp = 0;
        }
    });
});

    //while (scorecomp+scoreplayer<5) {
        //let playerSelection = prompt("Rock, paper, or scissors?")
        
  //  }
//}

//game()
