let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0
};

updateScoreElem();

JSON.parse(localStorage.getItem('score'));

function resetScore() {
  score.wins = 0;
  score.losses = 0;
  score.ties = 0;
  localStorage.removeItem('score');
  updateScoreElem();
}

function pickComputerMove() {
    randomNumber = Math.random();
    let computerMove = '';
  if (randomNumber > 0 && randomNumber < 1/3) {
    computerMove = 'Rock';
  } else if (randomNumber >= 1/3 && randomNumber < 2/3) {
    computerMove = 'Paper';
  } else if (randomNumber >= 2/3 && randomNumber < 1) {
    computerMove = 'Scissors';
  }

  return computerMove;
}

function playGame(playerMove) {
  computerMove = pickComputerMove();

  let result = '';

  if (playerMove === 'rock') {
    if (computerMove === 'rock') {
      result = 'Tie';
    } else if (computerMove === 'paper') {
      result = 'You lose';
    } else if (computerMove === 'scissors') {
      result = 'You win';
    }

  } else if (playerMove === 'paper') {
    if (computerMove === 'rock') {
      result = 'You win';
    } else if (computerMove === 'paper') {
      result = 'Tie';
    } else if (computerMove === 'scissors') {
      result = 'You lose';
    }

  } else if (playerMove === 'scissors') {
    if (computerMove === 'rock') {
      result = 'You lose';
    } else if (computerMove === 'paper') {
      result = 'You win';
    } else if (computerMove === 'scissors') {
      result = 'Tie';
    }
  }

  if (result === 'You win') {
    score.wins += 1;
  } else if (result === 'You lose') {
    score.losses += 1;
  } else if (result === 'Tie') {
    score.ties += 1;
  }
  
  localStorage.setItem('score', JSON.stringify(score));

  updateScoreElem();

  document.querySelector('.js-result').innerHTML = result;

  document.querySelector('.js-moves').innerHTML = `You <img src="./images/${playerMove}-emoji.png" class="icon"> <img src="./images/${computerMove}-emoji.png" class="icon"> Computer`;

}



function updateScoreElem() {
  document.querySelector('.js-score')
    .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}
