let computerscore = 0;
let playerscore = 0;
let gameCount = 0;

function computerPlay() {
	let playRand = Math.floor(Math.random() * 3);
	if (playRand == 1) {
		return 'rock';
	} else if (playRand == 2) {
		return 'paper';
	} else {
		return 'scissors';
	}
}

function playRound(playerSelection = 'rock') {
	playerSelection = prompt();
	playerSelection = playerSelection.toLowerCase();
	computerSelection = computerPlay().toLowerCase();
	const msgLose = `You lose.${computerSelection} beats ${playerSelection}.Your score is ${playerscore}.The computer score is ${computerscore}`;
	const msgWin = `You win.${playerSelection} beats ${computerSelection}.Your score is ${playerscore}.The computer score is ${computerscore} `;
	const msgDraw = `Draw. Your score is ${playerscore}.The computer score is ${computerscore}`;
	if (playerSelection == 'rock') {
		if (computerSelection == 'paper') {
			console.log(msgLose);
			computerscore++;
		} else if (computerSelection == 'scissors') {
			console.log(msgWin);
			playerscore++;
		} else {
			console.log(msgDraw);
			computerscore++;
			playerscore++;
		}
	}
	if (playerSelection == 'paper') {
		if (computerSelection == 'scissors') {
			console.log(msgLose);
			computerscore++;
		} else if (computerSelection == 'rock') {
			console.log(msgWin);
			playerscore++;
		} else {
			console.log(msgDraw);
			computerscore++;
			playerscore++;
		}
	}
	if (playerSelection == 'scissors') {
		if (computerSelection == 'rock') {
			console.log(msgLose);
			computerscore++;
		} else if (computerSelection == 'paper') {
			console.log(msgWin);
			playerscore++;
		} else {
			console.log(msgDraw);
			computerscore++;
			playerscore++;
		}
	}
	return playerscore, computerscore;
}

function game() {
	for (let i = 0; i < 5; i++) {
		playRound();
	}
}
