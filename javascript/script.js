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


// Get a random result from the computer and store it in a variable
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
const playerSelection = getPlayerChoice();
const computerSelection = getComputerChoice();   

//Compare choices and run the game
function playRound(playerSelection, computerSelection) {
    
    let response = '';
    
    if ((playerSelection === 'paper' && computerSelection === 'rock') ||
       (playerSelection === 'rock' && computerSelection === 'scissors') ||
       (playerSelection === 'scissors' && computerSelection === 'paper')) {
        return response += `You win! ${playerSelection} beats ${computerSelection}!`;
       } else if ((playerSelection === 'paper' && computerSelection === 'scissors') ||
                  (playerSelection === 'rock' && computerSelection === 'paper') ||
                  (playerSelection === 'scissors' && computerSelection === 'rock')) {
        return response += `You lose. :( - ${computerSelection} beats ${playerSelection}.`;
       } else if (playerSelection === computerSelection) {
        return response += 'It\'s a tie. Play again?';
       } else {
        return response += 'Error. Sorry John.';
       }
    }
  

console.log(computerSelection);
console.log(playerSelection);
console.log(playRound(playerSelection, computerSelection));
