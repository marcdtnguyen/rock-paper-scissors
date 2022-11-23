const options = ['rock', 'paper', 'scissors'];

function playRound(){
    const playerSelection = getPlayerChoice();
    const computerSelection = getComputerChoice();
    if(checkInput(playerSelection)){
        alert(`Human throws ${playerSelection}!`);
        alert(`Computer throws ${computerSelection}!`)
        print(getResults(playerSelection, computerSelection));
    } else {
        alert("Invalid input: Please choose rock, paper or scissors.")
    }
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

function print(results){
    switch(results){
        case 'tie':
            alert('It\'s a tie.');
            break;
        case 'computer':
            alert('Computer wins!');
            break;
        case 'human':
            alert('Human wins!');
            break;
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

function checkInput(playerSelection){
    return options.includes(playerSelection);
}


playRound();