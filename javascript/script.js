// Algorithm 
// Goal: Create a Rock Paper Scissors game against a computer
// Scope: Will need a player input and will need to return a result in an alert
// A computer will randomly return rock, paper, or Scissors
// The player can select from rock, paper, or Scissors
// Define which selections win 

// Pseudocode
// get Computer selection
// get player Selection
// Define the winning combintations
// Compare the result of the player and the computer
// Return result to the player
// Run a randomizer for a computer that returns rock, paper, or scissor
// Store the computer result


function getComputerChoice() {
    let x =  Math.floor((Math.random() * 3) + 1);
    if (x === 1) {
        x = 'Rock';
    } else if (x === 2) {
        x = 'Paper';
    } else {
        x = 'Scissors';
    }
    return x;
}

// Investigate this function because it's not working
function playRound(playerSelection, computerSelection) {
    if ((playerSelection = 'rock') && (computerSelection == 'Scissors')) {
        alert('Rock beats Scissors. You win!'); 
    } else if ((playerSelection = 'rock') && (computerSelection == 'Paper')) {
        alert('Paper beats Rock. You Lose!');
    } else if ((playerSelection = 'paper') && (computerSelection == 'Rock')) {
        alert('Paper beats Rock. You win!'); 
    } else if ((playerSelection = 'paper') && (computerSelection == 'Scissors')) {
        alert('Scissors beats Paper. You lose!');
    } else if ((playerSelection = 'scissors') && (computerSelection == 'Paper')) {
        alert('Scissors beats Paper. You win!'); 
    } else if ((playerSelection = 'scissors') && (computerSelection == 'Rock')) {
        alert('Rock beats Scissors. You lose!');
    } else if (playerSelection == computerSelection) {
        alert('It\'s a tie! Start over!');
    } else {
        alert('Hey Bitch It\'s Not Working')
    }
}

    
    const playerSelection = 'rock';
    const computerSelection = getComputerChoice;   

console.log(computerSelection());
console.log(playerSelection);
console.log(playRound(playerSelection, computerSelection));


