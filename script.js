function getComputerChoice() {
    let randChoice = Math.random() * 3;
    if (randChoice <= 1) return "rock";
    else if (randChoice <= 2) return "paper";
    else return "scissors";

}

function getHumanChoice() {
    let choice = prompt("Choose \"rock\", \"paper\", or \"scissors\"! \n");
    choice = choice.toLowerCase();

    choice = choice.slice(0, 1);

    switch (choice){
        case "r":
            console.log("You chose rock!");
            break;
        case "p":
            console.log("You chose paper!");
            break;
        case "s":
            console.log("You chose scissors!");
            break;
        default:
            console.log("You made an invalid choice!");
            choice = undefined;

    }

    return choice;
}

let choice = undefined;

while (choice === undefined){
    choice = getHumanChoice();
}