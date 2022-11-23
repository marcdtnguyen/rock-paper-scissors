const options = ['rock', 'paper', 'scissors'];

const result = document.querySelector('.result p');

let humanScore = document.querySelector('.human .score');
let computerScore = document.querySelector('.computer .score');

const buttons = document.querySelectorAll('.weapon button');
buttons.forEach(btn=> btn.addEventListener('click', setInput));

function setInput(e){
    playRound(e.target.innerHTML);
}

function playRound(playerSelection){
    const computerSelection = getComputerChoice();
    printChoices(playerSelection.toLowerCase(), computerSelection);
    const results = getResults(playerSelection.toLowerCase(), computerSelection);
    increment(results)

    result.innerText = format(results);
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