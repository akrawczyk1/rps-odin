function getComputerChoice() {
    let randChoice = Math.random() * 3;
    if (randChoice <= 1) return "rock";
    else if (randChoice <= 2) return "paper";
    else return "scissors";

}

// // returns the first lower case letter of choice
// function sanitizeChoice(choice) {
//     choice = choice.toLowerCase();

//     return choice.slice(0, 1);
// }

// function unsanitizeChoice(choice){
//     switch (choice){
//         case "r": return "Rock";
//         case "p": return "Paper";
//         case "s": return "Scissors";
//         default: throw new Error("Attempted to unsanitize an invalid choice!");
//     }
// }

// function getHumanChoice() {
//     let choice = prompt("Choose \"rock\", \"paper\", or \"scissors\"! Or type \"q\" to quit! \n");
    
//     choice = sanitizeChoice(choice);

//     switch (choice){
//         case "r":
//             console.log("You chose rock!");
//             break;
//         case "p":
//             console.log("You chose paper!");
//             break;
//         case "s":
//             console.log("You chose scissors!");
//             break;
//         case "q":
//             break;
//         default:
//             throw new Error("Player made an invalid choice!");

//     }

//     return choice;
// }

// Encodes "rock" to 0, "paper" to 1, and "scissors" to 2.
// function encodeChoice(choice){
//     if (choice === 0 || choice === 1 || choice === 2){
//         return choice;
//     }

//     choice = sanitizeChoice(choice);

//     switch(choice){
//         case "r": return 0;
//         case "p": return 1;
//         case "s": return 2;
//         case "q": return -1;
//         default: throw new Error("An invalid choice was attempted to be encoded!");
//     }
// }

// function unencodeChoice(choice){
//     switch(choice){
//         case 0: return "Rock";
//         case 1: return "Paper";
//         case 2: return "Scissors";
//         default: throw new Error("Attempted to unencode invalid choice!");
//     }
// }

function playRound(playerChoice, cpuChoice){
    
    try{
        playerChoice = encodeChoice(playerChoice);
        cpuChoice = encodeChoice(cpuChoice);

        if (playerChoice === -1){
            return -99;
        }
    

        if (playerChoice == cpuChoice){
            console.log("It's a draw! " + unencodeChoice(playerChoice) + " was chosen by both players!\n");
            return 0;
        }

        else if ((playerChoice + 1) % 3 == cpuChoice){
            console.log("You lose! Your opponent chose " + unencodeChoice(cpuChoice) + " and you chose " + unencodeChoice(playerChoice) + "!\n");
            return -1;
        }

        else{
            console.log("You win! Your opponent chose " + unencodeChoice(cpuChoice) + " and you chose " + unencodeChoice(playerChoice) + "!\n");
            return 1;
        }

    } catch(e){
        throw new Error(e.message);
    }
    

}

console.log("Let's play a game of rock, paper, scissors! Best 3 out of 5!");

let playerScore = 0;
let cpuScore = 0;
let result;
while (playerScore < 3 && cpuScore < 3){
    

    try{
        let cpuChoice = getComputerChoice();
        let playerChoice = getHumanChoice();
        result = playRound(playerChoice, cpuChoice);
    } 
    catch(e){
        console.error(e.message);
        console.log("Let's try again!\n");
        result = 0;
        continue;
    }
    if (result === 0){
        console.log("The game was a draw! Play again!\n");
        continue;
    }
    else if (result === 1){
        console.log("The overall score is now: \nPlayer -  " + ++playerScore + "\nComputer - " + cpuScore);
    }
    else if (result === -99){
        console.log("Quitting the game!");
        break;
    }
    else {
        console.log("The overall score is now: \nPlayer -  " + playerScore + "\nComputer - " + ++cpuScore);
    }
}

if (playerScore > cpuScore){
    console.log("You win the match! The final score was " + playerScore + " to " + cpuScore);
}
else if (playerScore < cpuScore){
    console.log("You lose the match... The final score was " + cpuScore + " to " + playerScore);
}
else{
    console.log("The match was a draw! The final score is tied at " + playerScore);
}

