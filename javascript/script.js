// Algorithm 

// Goal: Create a Rock Paper Scissors game against a computer

// Scope: Will need a player input and will need to return a result in an alert
// A computer will randomly return rock, paper, or Scissors
// The player can select from rock, paper, or Scissors
// Define which selections win 

// Pseudocode

// Give player three options, rock, paper, scissor
// Get text input from user and store it
// Run a randomizer for a computer that returns rock, paper, or scissor
// Store the computer result
// Define the winning combintations
// Compare the result of the player and the computer
// Return result to the player


function getComputerChoice() {
    let x =  Math.floor((Math.random() * 3) + 1);
    return x;

}

console.log(getComputerChoice());


