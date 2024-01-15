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
        x = 'rock';
    } else if (x === 2) {
        x = 'paper';
    } else {
        x = 'scissors';
    }
    return String(x);
}

// Get a choice from the player
function getPlayerChoice() {
    let playerInput = prompt('Let\'s play a game! Type rock, paper, or scissors and try to beat the computer: "','');
    let playerChoice = playerInput.toLowerCase();

    if ((playerChoice == 'rock') || 
        (playerChoice == 'paper') || 
        (playerChoice == 'scissors')) {  
        return playerChoice;
    } else {
        alert('Please select either Rock, Paper, or Scissors.');
        return getPlayerChoice();
    } 
}

// Assign player and computer choices to new variables
let playerSelection = getPlayerChoice();
let computerSelection = getComputerChoice(); 

// Assign starting score for beginning of game
let playerScore = 0;
let computerScore = 0;
let draws = 0;

//Compare choices and run the game
function playRound(playerSelection, computerSelection) {

    let response = '';

    if (playerSelection === 'paper' && computerSelection === 'rock'){
        return response += 'You win! Paper beats Rock!';
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        return response += 'You win! Rock beats Scissors!';
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        return response += 'You win! Scissors beat Paper!';
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        return response += 'You lose. Scissors beat paper.';
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        return response += 'You lose. Paper beats Rock.';
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        return response += 'You lose. Rock beats Scissors.';
    } else if (playerSelection === computerSelection) {
        return response += 'It\'s a tie.';
    } 
}

console.log(computerSelection);
console.log(playerSelection);
console.log(playRound(playerSelection, computerSelection));


// Figure out game function here

function game() {
    //code goes here
}

console.log(playerScore);
console.log(computerScore);
console.log(draws);

