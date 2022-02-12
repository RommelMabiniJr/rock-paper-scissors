const buttons = document.querySelectorAll('button');
let roundResult = document.querySelector('.results');
let player = document.querySelector('.pScore')
let computer = document.querySelector('.cScore')
let scoreAllocation = document.querySelector('.alocate-score')
let gameResult;

let playerScore = 0;
let computerScore = 0;

roundResult.textContent = "Waiting for match to start...";

buttons.forEach(btn => {
    
    btn.addEventListener('click', playRound);
});


function computerPlay() {
    const arr = ['Rock', 'Paper', 'Scissors'];
    let ran = Math.floor(Math.random() * 3);
    let bet = arr[ran];

    console.log(`Computer chose ${bet}`);
    return bet;
}

// function playerSelection() {
//     let playerInput = prompt("Choose either Rock, Paper or Scissors");
//     let bet = playerInput.charAt(0).toUpperCase() + playerInput.slice(1).toLowerCase();

//     console.log(`Player chose ${bet}`);
//     return bet;
// }

function playRound() {

    let playerBet = this.value;

    console.log(`Player chose ${playerBet}`);

    let computerBet = computerPlay();
    let message;
    

    //next task: to handle return messages to be displayed within the div of our html file.
    if (playerBet == computerBet) {
        message = `It's a tie, both player & computer chose ${playerBet}`;
        roundResult.textContent = message;

    } else if (playerBet == 'Scissors') {

        if (computerBet == 'Paper') {
            message = `Player wins, ${playerBet} beat ${computerBet}`;
            roundResult.textContent = message;
        } else {
            message = `Player lose, ${computerBet} beat ${playerBet}`;
            roundResult.textContent = message;
        }

    } else if (playerBet == 'Paper') {

        if (computerBet == 'Rock') {
            message = `Player wins, ${playerBet} beat ${computerBet}`;
            roundResult.textContent = message;
        } else {
            message = `Player lose, ${computerBet} beat ${playerBet}`;
            roundResult.textContent = message;
        }

    } else {
        if (computerBet == 'Scissors') {
            message = `Player wins, ${playerBet} beat ${computerBet}`;
            roundResult.textContent = message;
        } else {
            message = `Player lose, ${computerBet} beat ${playerBet}`;
            roundResult.textContent = message;
        }
    }


    //call the scoreChecker function for every click event or whenever a round is commenced
    scoreChecker(message);
    
    if ((playerScore||computerScore) == 5) {
        if (playerScore > computerScore) {
            alert("Congratulations! You won the game!");
    
        } else if(playerScore < computerScore){
            alert("Computer wins the game, Try again!");
    
        } else {
            alert("It's a tie, both players have equal scores!");
        }
    }
}

function scoreChecker(message) {
    if ((playerScore && computerScore) < 5) {

        let gameTie = message.includes('tie');
        let playerWins = message.includes('wins');

        if(gameTie) {
            scoreAllocation.textContent = "No score is added";

        } else if(playerWins) {
            scoreAllocation.textContent = "Score goes to Player";
            playerScore++;

        } else {
            scoreAllocation.textContent = "Score goes to Computer";
            computerScore++;
        }

        player.textContent = playerScore;
        computer.textContent = computerScore;

    }
}