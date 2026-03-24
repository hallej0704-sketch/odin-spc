let playerName = prompt("Enter your name:");
console.log("Welcome " + playerName + "! Let's play Rock Paper Scissors!");
function getComputerChoice() {
    let num = Math.floor(Math.random() * 3);
    if (num === 0) {
        return "rock";
    } else if (num === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}
function getHumanChoice() {
    let choice = prompt("Choose rock, paper or scissors:");
    return choice.toLowerCase();
}
function playRound(humanChoice, computerChoice) {

    console.log("You chose: " + humanChoice);
    console.log("Computer chose: " + computerChoice);

    if (humanChoice === computerChoice) {
        console.log("It's a tie!");
        return 0;
    }

    if (humanChoice === "rock") {
        if (computerChoice === "scissors") {
            console.log("Nice! Rock smashes Scissors");
            return 1;
        } else {
            console.log("Oops! Paper beats Rock");
            return -1;
        }
    }

    if (humanChoice === "paper") {
        if (computerChoice === "rock") {
            console.log("Great! Paper beats Rock");
            return 1;
        } else {
            console.log("Oh no! Scissors beats Paper");
            return -1;
        }
    }

    if (humanChoice === "scissors") {
        if (computerChoice === "paper") {
            console.log("Awesome! Scissors beats Paper");
            return 1;
        } else {
            console.log("Bad luck! Rock beats Scissors");
            return -1;
        }
    }
}
function playGame() {

    let humanScore = 0;
    let computerScore = 0;

    let i = 1;

    while (i <= 5) {

        console.log("----------------------");
        console.log("Round " + i);

        let human = getHumanChoice();
        let computer = getComputerChoice();

        let result = playRound(human, computer);

        if (result === 1) {
            humanScore = humanScore + 1;
        } else if (result === -1) {
            computerScore = computerScore + 1;
        }

        console.log("Score: " + playerName + " " + humanScore + " - Computer " + computerScore);

        i = i + 1;
    }

    console.log("----------------------");
    console.log("Final Score: " + playerName + " " + humanScore + " - Computer " + computerScore);

    if (humanScore > computerScore) {
        console.log(playerName + " wins the game!");
    } else if (computerScore > humanScore) {
        console.log("Computer wins the game!");
    } else {
        console.log("The game is a tie!");
    }
}
playGame();
