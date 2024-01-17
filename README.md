# The Odin Project - Rock Paper Scissors Project

This is my solution to the Rock Paper Scissors Project from [The Odin Project](https://www.theodinproject.com/).

## Table of contents

- [Overview](#overview)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### Links

- Solution URL: [Github](https://github.com/Mirthaar/rock-paper-scissors-project)
- Live Site URL: [Solution (Hosted on Github Pages)](https://mirthaar.github.io/blog-preview-card/)

## My process

### Built with

- Javascript basics

### What I learned

This was such a fun project for me and the first time I really hit a roadblock in The Odin Project course. Learning the fundamentals of problem solving were pivotal to my success. I followed the steps of creating an algorithm, converting to pseudocode, and then breaking down the problem into smaller, subproblems.

My first hiccup came when I was struggling to get the following code to work:

```js
function getPlayerChoice() {
  let playerInput = prompt(
    'Let\'s play a game! Type rock, paper, or scissors and try to beat the computer: "',
    ''
  );
  let playerChoice = playerInput.toLowerCase();

  if (
    playerChoice == 'rock' ||
    playerChoice == 'paper' ||
    playerChoice == 'scissors'
  ) {
    return playerChoice;
  } else {
    alert('Please select either Rock, Paper, or Scissors.');
    // return getPlayerChoice();  (1)
  }
}
```

On the highlighted Line 1, I was not calling getPlayerChoice() when the player input the incorrect value. This was a VERY valuable lesson in understanding how function calls work. Many thanks to TOP user '@@name = thane' for assisting me with this.

My second hiccup, which took a long time to figure out, came in getting five rounds to be played. Having completed the project, I realized that I made this much more difficult by making a decision to include scoring. For future projects, I will focus just on assigment - solve that first, then go back later to expand the concept further. By attempting to register a computer and player score, I became sidetracked by making a small problem a larger one. However, this ended up being a valuable lesson as I finally resorted to the debugger in DevTools, which enabled me to clearly see the issue while stepping through each individual line of code.

All in all, my big takeaways from this assignment:

- Having a better understanding of function calls
- Learning that scope matters
- How to use the debugger to step through the code, line by line to find errors

### Continued development

I'll be continuing along with The Odin Project exercises and look forward to the next projects.

### Useful resources

- [mdn web docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript) - A great resource to quickly research Javascript concepts.

## Author

- Personal Website - [Mirthaar](https://mirthaar.github.io/website/)
- Github - [@Mirthaar](https://github.com/Mirthaar)
- Frontend Mentor - [@Mirthaar](https://www.frontendmentor.io/profile/yourusername)

## Acknowledgments

My acknowledgements go to [The Odin Project] (https://www.theodinproject.com/) and TOP mentors on Discord for getting me this far along!
