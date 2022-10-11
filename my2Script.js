/*ATTENTION VIEWER
Some of the declared variables for the "FAILED" section have changed a minor bit and i am aware of that,
however, i cannot for the life of me understand this project or the terminology used to help me understand ( and yes i have googled nearly all of them )
I CANNOT FIND OR UNDERTSAND WHY I CANNOT GET CERTAIN ALERTS TO COME UP EVEN UPON CORRECT CONDITIONS.
If you have answers or advice please help me. I'm not looking to steal your code or anything of the sort, i just need help understanding the correct 
execution for this supposedly super simple project. I have literally spent more then 20hrs on this project alone and im sick of F#@*ING LOOKING AT IT!!!!!!!!!!!
Anyone willing to help me has my utmost permission to manipulate this code with the idea of assisting me in understanding my mistakes. 
FYI Any console.logs found in if-statements in some of the code would generally be placed with "alert"
*/

var wins = 0;
var losses = 0;
var draws = 0;
var cpuPickOuts= ["r", "p", "s"]; // main code
var userChoice = ["r", "p", "s"]; // main code

/*
Paper > Rock
Scissors > Paper
Rock > Scissors 
*/

// 1. Show prompt asking for R,P,S (UI)**************************************************************************************************
// Just implemented this idk if it works correctly
function anotherRound(){
  prompt("Hello, Lets play a game of Rock-Paper-Scissors! Type r, p, or s to get started!")
}
// 2. User submits selection (Event)**************************************************************************************************

// In prompt?

// 3. Store value in userChoice (Update state)???**************************************************************************************************

// sessionStorage.getitem(input.userChoice);

// 4. Generate a random computer selection (Update state)**************************************************************************************************

/*notes on math.floor and math random
math.floor will round the number down
math.random picks a number (with deciaml) between 0 and 1 {E.G 0.555555565451}*/
var cpuChoice = cpuPickOuts[Math.floor(Math.random() * cpuPickOuts.length)]; //working as intended (i think)

// 5. Alert with computer choice (UI)**************************************************************************************************
console.log("The computer chose " + cpuChoice);
// alert("The Computer Chose " + cpuChoice + " !");
// 6. Compare (Update State)**************************************************************************************************

/*  Reference 
if (condition1) {
  //  block of code to be executed if condition1 is true
} else if (condition2) {
  //  block of code to be executed if the condition1 is false and condition2 is true
} else {
  //  block of code to be executed if the condition1 is false and condition2 is false
}
*/





/*/////////////////////////////////FAILED\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// Winning Criteria
if (userChoice === "r" && cpuChoice === "s")
  console.log("you win");

if (userChoice === "p" && cpuChoice === "r") 
  console.log("you win");

if (userChoice === "s" && cpuChoice === "p") 
  console.log("you win");

// Losing Criteria
if (userChoice === "r" && cpuChoice === "p");
  console.log("you lost")
if (userChoice === "p" && cpuChoice === "s");
  console.log("you lost");
if (userChoice === "s" && cpuChoice === "r");
  console.log("you lost");
// Draw Criteria
if (userChoice === cpuChoice) 
  alert("It's a draw");
*/


/*/////////////////////////////////FAILED\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ 
if (userChoice === "r" && cpuChoice === "s") //doesnt work
  console.log("you win");
 else (userChoice === "r" && cpuChoice === "p");
  console.log("you lost");

if (userChoice === "p" && cpuChoice === "r") 
  console.log("you win");
 else (userChoice === "p" && cpuChoice === "s");
  console.log("you lost");

if (userChoice === "s" && cpuChoice === "p") 
  console.log("you win");
 else (userChoice === "s" && cpuChoice === "r");
  console.log("you lost");

if (userChoice === cpuChoice) 
  alert("It's a draw");
*/


/*/////////////////////////////////FAILED\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ ---DOES NOT WORK AS INTENDED
// if (userChoice === "r" && cpuChoice === "r") {
//   alert("Player tied with the Machine!!!! Next Round!");
//   ties++;
// } else if (userChoice === "p" && cpuChoice === "p") {
//   alert("Player tied with the Machine!!!! Next Round!");
//   ties++;
// } else if (userChoice === "s" && cpuChoice === "s") {
//   alert("Player tied with the Machine!!!! Next Round!");
//   ties++;
// } else if (userChoice === "r" && cpuChoice === "s") {
//   alert("Player is da Winner!");
//   wins++;
// } else if (userChoice === "s" && cpuChoice === "p") {
//   alert("Player is da Winner!");
//   wins++;
// } else if (userChoice === "p" && cpuChoice === "r") {
//   alert("Player is da Winner!");
//   wins++;
// } else {
//   alert("Oh no, the Machine has won, can you delay their uprising? Try again!");
//   losses++;
// }
*/


/*/////////////////////////////////FAILED\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
semi working if-statement code below
if (userChoice === "r" && cpuChose === "r") {
  alert("its a tie")  //This alert not working when conditions are met... WWWWWWWHHHHHHHHYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYY
} if (cpuChose === "s") {
  alert("its a win")
} if (cpuChose === "p") {
  alert("You lose!")
};
*/

/*/////////////////////////////////FAILED\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
Dez's logic setup ---does not work as intended (for me)
if (userChoice === "Rock") {
  if (cpuChoice === "Rock") {
    alert("It's a tie");
  } else if (cpuChoice === "Paper") {
    alert("It's a loss");
  } else {
    alert("It's a win");
  }
} else if (userChoice === "Paper") {
  if (cpuChoice === "Rock") {
    alert("It's a win");
  } else if (cpuChoice === "Paper") {
    alert("It's tie");
  } else {
    alert("It's a loss");
  }
} else if (userChoice === "Scissors") {
  if (cpuChoice === "Rock") {
    alert("It's a loss");
  } else if (cpuChoice === "Paper") {
    alert("It's a win");
  } else {
    alert("It's a tie");
  }
}
*/

// Holding this block out for now
// alert(
//   "Current Score: " + 
//     "WINS!!! " +
//     wins + "   " +
//     "losses :( : " +
//     losses + "   " +
//     "TIED: " +
//     draws
// );

//use for-loop for wins loses and ties?


anotherRound();  //// ?