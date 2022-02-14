const buttons = document.querySelectorAll('button');
let roundResult = document.querySelector('.results');
let player = document.querySelector('.pScore');
let computer = document.querySelector('.cScore');
let scoreAllocation = document.querySelector('.alocate-score');
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

function displayHandIcon(bet) {
    let display;

    if (bet == 'Paper') {
        display = "./images/paper.svg";
        return display;
    } else if (bet == 'Rock') {
        display = "./images/rock.svg";
        return display;
    } else {
        display = "./images/scissors.svg"
        return display;
    }
}

function playRound() {

    let playerBet = this.value;
    console.log(`Player chose ${playerBet}`);
    let computerBet = computerPlay();

    let playerHand = document.querySelector('#player-img');
    let computerHand = document.querySelector('#computer-img');

    //set the approriate src icon according to the player/computer bet
    playerHand.src = displayHandIcon(playerBet);
    computerHand.src = displayHandIcon(computerBet);
    
    let message;

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
    
    if (playerScore == 5 || computerScore == 5) {
        if (playerScore > computerScore) {
            alert("Congratulations! You won the game!");
    
        } else {
            alert("Computer wins the game, Try again!");
    
        }

        //When a player won 5 matches, reset the game automatically
        location.reload();
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