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

// Assign starting score at beginning of game
let playerScore = 0;
let computerScore = 0;
let draws = 0;
let rounds = 0;

// // Assign player and computer choices to new variables
// let playerSelection = getPlayerChoice();
// let computerSelection = getComputerChoice(); 

// Logic for scoring and five rounds
function game() {

    while (rounds < 5) {
        
        let playerSelection = getPlayerChoice();
        console.log(`The player selected ${playerSelection}.`);
        let computerSelection = getComputerChoice();
        console.log(`The computer selected ${computerSelection}`);
        let roundResult = playRound(playerSelection, computerSelection);
        
        if ((roundResult == 'You win! Paper beats Rock!') ||
            (roundResult == 'You win! Rock beats Scissors!') ||
            (roundResult == 'You win! Scissors beat Paper!')) {
            playerScore++;
        } else if ((roundResult == 'You lose. Scissors beat Paper.') ||
            (roundResult == 'You lose. Paper beats Rock.') ||
            (roundResult == 'You lose. Rock beats Scissors.')) {
            computerScore++;
            } else {
            draws++;
        } 
        
        rounds++;
        alert(`Round: ${rounds}\n------------\nThe current score is:\nYou: ${playerScore}\nComputer: ${computerScore}`);
        console.log(`Round: ${rounds}\n----\nThe current score is -\nYou: ${playerScore}\nComputer: ${computerScore}`);
        
    }

    if (playerScore > computerScore) {
        alert(`Game Over! You win!\nFinal Score:\nYou: ${playerScore}\nComputer: ${computerScore}`);
        console.log(`Game Over! You win!\nFinal Score:\nYou: ${playerScore}\nComputer: ${computerScore}`);
    } else if (playerScore < computerScore) {
        alert(`Game Over! You lose!\nFinal Score:\nYou: ${playerScore}\nComputer: ${computerScore}`);
        console.log(`Game Over! You lose!\nFinal Score:\nYou: ${playerScore}\nComputer: ${computerScore}`);
    } else if (playerScore === computerScore) {
        alert(`Game Over! It's a tie!\nFinal Score:\nYou: ${playerScore}\nComputer: ${computerScore}`);
        console.log(`Game Over! It's a tie!\nFinal Score:\nYou: ${playerScore}\nComputer: ${computerScore}`);
    }
}

// Get a random choice from the computer
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
        // return getPlayerChoice();
    } 
}

//Compare choices and run the game
function playRound(playerSelection, computerSelection) {

    let response = '';

    if (playerSelection === 'paper' && computerSelection === 'rock'){
        alert('You win! Paper Beats Rock!');
        return response += 'You win! Paper beats Rock!';
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        alert('You win! Rock beats Scissors!');
        return response += 'You win! Rock beats Scissors!';
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        alert('You win! Scissors beat Paper!');
        return response += 'You win! Scissors beat Paper!';
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        alert('You lose. Scissors beat Paper!');
        return response += 'You lose. Scissors beat Paper.';
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        alert('You lose. Paper beats Rock.');
        return response += 'You lose. Paper beats Rock.';
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        alert('You lose. Rock beats Scissors.');
        return response += 'You lose. Rock beats Scissors.';
    } else if (playerSelection === computerSelection) {
        alert('It\'s a tie.');
        return response += 'It\'s a tie.';
    } 
}

game();

// console.log(computerSelection);
// console.log(playerSelection);
// console.log(playRound(playerSelection, computerSelection))
console.log(`Your current score is ${playerScore}.`);
console.log(`The computer's current score is ${computerScore}.`);
console.log(`Current draws = ${draws}.`);
console.log(`The current round is ${rounds}.`);




