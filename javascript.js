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

const container = document.querySelector('#container');
const psel = document.createElement('div');
psel.classList.add('psel');
container.appendChild(psel);

const csel = document.createElement('div');
csel.classList.add('csel');
container.appendChild(csel);

const res = document.createElement('div');
res.classList.add('res');
container.appendChild(res);

const scores = document.createElement('div');
scores.classList.add('scores');
container.appendChild(scores);

// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll('button');

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {

    // and for each one we add a 'click' listener
    button.addEventListener('click', () => {
        if (button.id == "rst"){
            scoreplayer = 0;
            scorecomp = 0;
            scores.textContent = "Scores: Player: 0 Computer: 0"        
        }

        else {
            console.log(button.id);
            let playerSelection = button.id;
            let computerSelection = computerPlay();
            let result = playRound(playerSelection, computerSelection);
            if (result == "Computer wins"){
                scorecomp++;
            }
            else if (result == "Player wins"){
                scoreplayer++; 
            }

            
            psel.textContent = `Player Selection: ${button.id.toUpperCase()}`         
            csel.textContent = `Computer Selection: ${computerSelection.toUpperCase()}`
            res.textContent = `Result: ${result}`
            scores.textContent = `Scores: Player ${scoreplayer} Computer: ${scorecomp}`
        }
    });
});
//game()
