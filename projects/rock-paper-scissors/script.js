const score =
{
    userWins: 0,
    computerWins: 0,
    ties: 0
}

const choices = ['rock', 'paper', 'scissors'];


const getUserInput = () => {
}


const getComputerChoice = () => {
    return choices[Math.floor(Math.random() * choices.length)];
}

const displayChoices = (userChoice, computerChoice) => {
    const userChoiceElement = document.getElementsByClassName('user-choice')[0];
    const computerChoiceElement = document.getElementsByClassName('computer-choice')[0];

    userChoiceElement.textContent = userChoice;
    computerChoiceElement.textContent = computerChoice;

}

const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
        return 'tie';
    }
    if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
        return 'user';
    }
    return 'computer';
}

const updateScore = (winner) => {
    if (winner === 'user') {
        score.userWins++;
    } else if (winner === 'computer') {
        score.computerWins++;
    } else {
        score.ties++;
    }
}

const displayRoundWinner = (winner) => {
    const roundWinnerElement = document.querySelector('#round-message');
    if (winner === 'tie') {
        roundWinnerElement.textContent = "It's a tie!";
    } else if (winner === 'user') {
        roundWinnerElement.textContent = "You won!";
    } else {
        roundWinnerElement.textContent = "Computer won!";
    }
}

const displayScore = () => {
    const userScoreElement = document.querySelector('#user-score');
    const computerScoreElement = document.querySelector('#computer-score');
    const tiesScoreElement = document.querySelector('#ties-score');

    userScoreElement.textContent = score.userWins;
    computerScoreElement.textContent = score.computerWins;
    tiesScoreElement.textContent = score.ties;
}

const determineOverallWinner = () => {
    const roundNumber = document.querySelector('#rounds').value;
    const totalRounds = parseInt(roundNumber, 10);

    if (score.userWins >= Math.ceil(totalRounds / 2)) {
        return 'user';
    } else if (score.computerWins >=Math.ceil(totalRounds / 2)) {
        return 'computer';
    } else {
        return null;
    }


}

const displayOverallWinner = (winner) => {
    const overallWinnerElement = document.querySelector('#game-winner');
    if (winner === 'user') {
        overallWinnerElement.textContent = "Congratulations! You are the overall winner!";
    } else if (winner === 'computer') {
        overallWinnerElement.textContent = "Computer is the overall winner! Better luck next time!";
    } else {
        overallWinnerElement.textContent = "";
    }
}   


const playRound = (userChoice) => {
    const computerChoice = getComputerChoice();
    displayChoices(userChoice, computerChoice);
    const winner = determineWinner(userChoice, computerChoice);
    updateScore(winner);
    displayRoundWinner(winner);
    displayScore();
    const overallWinner = determineOverallWinner();
    displayOverallWinner(overallWinner);

    if (overallWinner !== null) {
    document.querySelector('#rock').disabled = true;
    document.querySelector('#paper').disabled = true;
    document.querySelector('#scissors').disabled = true;
}
}


document.querySelector('#rock').addEventListener('click', () => {
    playRound('rock');
});

document.querySelector('#paper').addEventListener('click', () => {
    playRound('paper');
});

document.querySelector('#scissors').addEventListener('click', () => {
    playRound('scissors');
});

document.querySelector('#start-game').addEventListener('click', () => {
    const rounds = document.querySelector('#rounds').value;
    if (rounds && rounds > 0) {
        document.querySelector('#rock').disabled = false;
        document.querySelector('#paper').disabled = false;
        document.querySelector('#scissors').disabled = false;
    } else {
    }        alert('Please enter a valid number of rounds');

});