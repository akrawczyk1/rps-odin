function getComputerChoice() {
    let randChoice = Math.random() * 3;
    if (randChoice <= 1) return "rock";
    else if (randChoice <= 2) return "paper";
    else return "scissors";

}

function playRound(playerChoice, cpuChoice, messageDisplay, playerScoreDisplay, cpuScoreDisplay){

    playerScore = parseInt(playerScoreDisplay.textContent);
    cpuScore = parseInt(cpuScoreDisplay.textContent);

    if (playerScore >= 3 || cpuScore >= 3) return;
    

    if (playerChoice == cpuChoice){
        messageDisplay.textContent = "It's a draw! Both players chose " + playerChoice + "!" ;
    }

    else if (playerChoice == "paper" && cpuChoice == "scissors" ||
            playerChoice == "rock" && cpuChoice == "paper" ||
            playerChoice == "scissors" && cpuChoice == "rock"
            )
    {
        messageDisplay.textContent = "You lose! Your opponent chose " + cpuChoice + " and you chose " + playerChoice + "...";
        cpuScoreDisplay.textContent = ++cpuScore;

    }

    else{
        messageDisplay.textContent = "You win! Your opponent chose " + cpuChoice + " and you chose " + playerChoice + "!";
        playerScoreDisplay.textContent = ++playerScore;
    }

    if (playerScore >= 3 || cpuScore >= 3){
        const finalMessage = document.querySelector(".messagefinal");
        result = playerScore > cpuScore ? 'won' : 'lost';
        finalMessage.textContent = "You " + result + " with a score of " + playerScore + " to " + cpuScore + ". Please refresh the page to play again!";
    }

    
    

}

const messageDisplay = document.querySelector(".messagebox");
const playerScoreDisplay = document.querySelector(".score.player .dynamicscore");
const cpuScoreDisplay = document.querySelector(".score.cpu .dynamicscore");

document.querySelectorAll(".buttonbox button").forEach(button => {
    button.addEventListener("click", function() {
        let cpuChoice = getComputerChoice();
        let playerChoice = button.textContent.toLowerCase();
        playRound(playerChoice, cpuChoice, messageDisplay, playerScoreDisplay, cpuScoreDisplay);
    })
})

