let score = JSON.parse(localStorage.getItem('score')) || {
    Wins: 0,
    Losses: 0,
    Ties: 0
}

updateScoreElemenst();

function playGame(playerMove) {
    let compMove = pickComputerMove();

    let result = '';

    if (playerMove === 'rock') {
        if (compMove === 'rock') {
            result = 'tie';
        } else if (compMove === 'paper') {
            result = 'you loose';
        } else if(compMove === 'scissors'){
            result = 'you win';
        }

    } else if (playerMove === 'paper') {
        if (compMove === 'rock') {
            result = 'you win';
        } else if (compMove === 'paper') {
            result = 'tie';
        } else if(compMove === 'scissors') {
            result = 'you loose';
        }

    } else if (playerMove === 'scissors'){
        if (compMove === 'rock') {
            result = 'you loose';
        } else if (compMove === 'paper') {
            result = 'you win';
        } else if(compMove === 'scissors') {
            result = 'tie';
        }
    }

    if (result == 'you win') {
        score.Wins += 1;
    } else if (result == 'you loose') {
        score.Losses += 1;
    } else {
        score.Ties += 1;
    }

    localStorage.setItem('score', JSON.stringify(score));

    updateScoreElemenst();

    document.querySelector(".js-result").innerHTML = result;

    document.querySelector(".js-moves").innerHTML = `You <img class="images" src="image/${playerMove}-emoji.png" alt=""> <img class="images" src="image/${compMove}-emoji.png" alt=""> computer`;

}

function pickComputerMove() {
    const randomNumber = Math.random();
    let computermove = "";

    if (randomNumber >= 0 && randomNumber < 1 / 3) {
        computermove = "rock";
    } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
        computermove = "paper";
    } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
        computermove = "scissors";
    }

    return computermove;
}

function resetGame() {
    score.Wins = 0;
    score.Losses = 0;
    score.Ties = 0;

    localStorage.removeItem('score');

    updateScoreElemenst();

    document.querySelector(".js-result").innerHTML = "Game is reset";
    document.querySelector(".js-moves").innerHTML = "";


}

function updateScoreElemenst() {
    document.querySelector(".js-score").innerHTML = `Wins: ${score.Wins}, Losses: ${score.Losses} , Ties: ${score.Ties}`
}