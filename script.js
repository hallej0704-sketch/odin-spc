// ask player name
let playerName = prompt("Enter your name:");
alert("Welcome " + playerName + "! Let's play!");

// computer choice
function getComputerChoice() {
    let num = Math.floor(Math.random() * 3);

    if (num === 0) return "rock";
    else if (num === 1) return "paper";
    else return "scissors";
}

// human choice
function getHumanChoice() {
    let choice = prompt("Choose rock, paper or scissors:");
    return choice.toLowerCase();
}

// play one round
function playRound(humanChoice, computerChoice) {

    let message = "You chose: " + humanChoice +
                  "\nComputer chose: " + computerChoice + "\n";

    if (humanChoice === computerChoice) {
        message += "It's a tie!";
        alert(message);
        return 0;
    }

    if (humanChoice === "rock") {
        if (computerChoice === "scissors") {
            message += "You win! Rock beats Scissors";
            alert(message);
            return 1;
        } else {
            message += "You lose! Paper beats Rock";
            alert(message);
            return -1;
        }
    }

    if (humanChoice === "paper") {
        if (computerChoice === "rock") {
            message += "You win! Paper beats Rock";
            alert(message);
            return 1;
        } else {
            message += "You lose! Scissors beats Paper";
            alert(message);
            return -1;
        }
    }

    if (humanChoice === "scissors") {
        if (computerChoice === "paper") {
            message += "You win! Scissors beats Paper";
            alert(message);
            return 1;
        } else {
            message += "You lose! Rock beats Scissors";
            alert(message);
            return -1;
        }
    }
}

// full game
function playGame() {

    let humanScore = 0;
    let computerScore = 0;

    let i = 1;

    while (i <= 5) {

        alert("Round " + i);

        let human = getHumanChoice();
        let computer = getComputerChoice();

        let result = playRound(human, computer);

        if (result === 1) {
            humanScore++;
        } else if (result === -1) {
            computerScore++;
        }

        alert("Score: " + playerName + " " + humanScore + 
              " - Computer " + computerScore);

        i++;
    }

    // final result
    let finalMessage = "Final Score: " + playerName + " " + humanScore + 
                       " - Computer " + computerScore + "\n";

    if (humanScore > computerScore) {
        finalMessage += playerName + " wins the game!";
    } else if (computerScore > humanScore) {
        finalMessage += "Computer wins the game!";
    } else {
        finalMessage += "It's a tie!";
    }

    alert(finalMessage);
}

// start game
playGame();
