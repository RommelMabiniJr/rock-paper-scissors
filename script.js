function computerPlay() {
    const arr = ['Rock', 'Paper', 'Scissors'];
    let ran = Math.floor(Math.random() * 3);
    let bet = arr[ran];

    console.log(`Computer chose ${bet}`);
    return bet;
}

function playerSelection() {
    let playerInput = prompt("Choose either Rock, Paper or Scissors");
    let bet = playerInput.charAt(0).toUpperCase() + playerInput.slice(1).toLowerCase();

    console.log(`Player chose ${bet}`);
    return bet;
}

function playRound(playerBet, computerBet) {
    let message;
    
    if (playerBet == computerBet) {
        message = `It's a tie, both player & computer chose ${playerBet}`;
        return message;

    } else if (playerBet == 'Scissors') {

        if (computerBet == 'Paper') {
            message = `Player wins, ${playerBet} beat ${computerBet}`;
            return message;
        } else {
            message = `Player lose, ${computerBet} beat ${playerBet}`;
            return message;
        }

    } else if (playerBet == 'Paper') {

        if (computerBet == 'Rock') {
            message = `Player wins, ${playerBet} beat ${computerBet}`;
            return message;
        } else {
            message = `Player lose, ${computerBet} beat ${playerBet}`;
            return message;
        }

    } else {
        if (computerBet == 'Scissors') {
            message = `Player wins, ${playerBet} beat ${computerBet}`;
            return message;
        } else {
            message = `Player lose, ${computerBet} beat ${playerBet}`;
            return message;
        }
    }
}

function game () {
    let playerScore = 0;
    let computerScore = 0;

    for(let x = 0; x<5 ; x++) {
        let result = playRound(playerSelection(), computerPlay());
        let gameTie = result.includes('tie');
        let playerWins = result.includes('wins');

        if(gameTie) {
            console.log("No score is added")

        } else if(playerWins) {
            console.log("Score goes to Player")
            playerScore++;
        } else {
            console.log("Score goes to Computer")
            computerScore++;
        }

        console.log(`Player score is: ${playerScore} || Computer score is: ${computerScore}`);
        console.log("");
    }

    if (playerScore > computerScore) {
        console.log("Congratulations! You won the game!");

    } else if(playerScore < computerScore){
        console.log("Computer wins the game, Try again!");

    } else {
        console.log("It's a tie, both players have equal scores!");
    }
}