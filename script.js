const options = ['rock', 'paper', 'scissors'];

const result = document.querySelector('.result p');

let humanScore = document.querySelector('.human .score');
let computerScore = document.querySelector('.computer .score');

const buttons = document.querySelectorAll('.weapon button');
buttons.forEach(btn=> btn.addEventListener('click', setInput));

const restartPage = document.querySelector('.restart');

const restartBtn = document.querySelector('.restart button');
restartBtn.addEventListener('click', restart);

function setInput(e){
    playRound(e.target.innerHTML);
}

function playRound(playerSelection){
    const computerSelection = getComputerChoice();
    printChoices(playerSelection.toLowerCase(), computerSelection);
    const results = getResults(playerSelection.toLowerCase(), computerSelection);
    increment(results)
    if(isWinner()){
        result.innerText = format(results);
        disableBtn();
        enableRestart();
    }
}

function restart(){
    humanScore.innerText = 0;
    computerScore.innerHTML = 0;
    restartPage.style.visibility = 'hidden';
    enableBtn();
}

function enableRestart(){
    restartPage.style.visibility = 'visible';
}

function disableBtn(){
    buttons.forEach(btn=> btn.setAttribute('disabled', true))
}

function enableBtn(){
    buttons.forEach(btn=> btn.removeAttribute('disabled'))
}

function isWinner(){
    return humanScore.innerText == 3 || computerScore.innerText == 3;
}

function increment(result){
    switch(result){
        case 'computer':
            computerScore.innerText++;
            break;
        case 'human':
            humanScore.innerText++;
            break;
        default: 
            console.log('tie')
            break;
    }
}

function printChoices(playerSelection, computerSelection){
    console.log(`Human throws ${playerSelection}!`);
    console.log(`Computer throws ${computerSelection}!`);
}

function getComputerChoice(){
    return options[getRandomNumber()];
};

function getRandomNumber(){
    return Math.floor(Math.random() * 3);
}

function format(results){
    switch(results){
        case 'tie':
            return 'It\'s a tie.';
        case 'computer':
            return 'Computer wins!';
        case 'human':
            return 'Human wins!';
    }
}

function getResults(playerSelection, computerSelection){
    if(playerSelection === computerSelection){
        return 'tie';
    } 

    if(playerSelection === 'rock'){
        if(computerSelection === 'paper') 
            return 'computer';
        if(computerSelection === 'scissors')
            return 'human';
    }

    if(playerSelection === 'paper'){
        if(computerSelection === 'scissors')
            return 'computer';
        if(computerSelection === 'rock')
            return 'human';
    }

    if(playerSelection === 'scissors'){
        if(computerSelection === 'rock')
            return 'computer';
        if(computerSelection === 'paper')
            return 'human';
    }

};