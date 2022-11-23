const options = ['rock', 'paper', 'scissors'];

const result = document.querySelector('.result p');

const buttons = document.querySelectorAll('.weapon button');
buttons.forEach(btn=> btn.addEventListener('click', setInput));

function setInput(e){
    playRound(e.target.innerHTML);
}

function playGame(){
    let human = 0,
    cmp = 0;
    for(let i = 0; i < 5; i++){
        const result = playRound();
        if(result == 'human') human++;
        if(result == 'computer') cmp++;
    }

    console.log('Human: ', human + '\nComputer: ', cmp)
}

function playRound(playerSelection){
    const computerSelection = getComputerChoice();
    printChoices(playerSelection.toLowerCase(), computerSelection);
    const results = getResults(playerSelection.toLowerCase(), computerSelection);
    result.innerText = format(results);
}

function printChoices(playerSelection, computerSelection){
    alert(`Human throws ${playerSelection}!`);
    alert(`Computer throws ${computerSelection}!`);
}

function getPlayerChoice(){
    return prompt('Rock || Paper || Scissors:', '').toLowerCase();
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

function isValidInput(playerSelection){

    if(options.includes(playerSelection)){
        return true;
    }
    alert("Invalid input: Please choose rock, paper or scissors.")
}