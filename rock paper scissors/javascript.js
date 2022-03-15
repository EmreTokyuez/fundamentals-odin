let result;

function computerPlay() {
	let playRand = Math.floor(Math.random() * 3);
	switch (playRand) {
		case (playRand = 0):
			return 'rock';
		case (playRand = 1):
			return 'paper';
		case (playRand = 2):
			return 'scissors';
	}
}

const computerSelection = computerPlay();

function PlayRound(playerSelection, computerSelection) {
	computerSelection = computerSelection.toLowerCase;
	playerSelection = playerSelection.toLowerCase();
	if (playerSelection == computerSelection) {
		return (result = 'Tie');
	}
	if (playerSelection == 'rock' && computerSelection == 'paper') {
		return (result = 'You lose');
	}
	if ((playerSelection = 'paper' && computerSelection == 'rock')) {
		return (result = 'You win');
	}
	if ((playerSelection = 'scissors' && computerSelection == 'paper')) {
		return (result = 'You win');
	}
	if ((playerSelection = 'paper' && computerSelection == 'scissors')) {
		return (result = 'You lose');
	}
}
