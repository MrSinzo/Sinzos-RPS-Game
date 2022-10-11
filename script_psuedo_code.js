// State: what data do we need to keep track of?
/*var wins = 0;
var losses = 0;
var draws = 0;
var userChoice = ["R", "P", "S"];
var computerChoice = userChoice;*/

/*Building my code here
 */

// const playAgain
var wins = 0;
var losses = 0;
var draws = 0;
const userChoices = ["r", "p", "s"];
const computerChoices = ["r", "p", "s"];

// 1. Show prompt asking for R,P,S (UI)
prompt("Hello, Lets play Rock, Paper, Scissors. Type r, p, or s");

// 2. User submits selection (Event)

// console.log(userChoices.includes(userChoices)); //Validation? -not working

// if (!userChoices) --Does not work
// if (userChoices !== "r" || "p"|| "s" ) --Does not work
// if (userChoices.includes == "q") { --Does not work
//   confirm("Not a Valid choice, Try again");
// }

var cpuChose =
  computerChoices[Math.floor(Math.random() * computerChoices.length)];

console.log("The computer chose " + cpuChose);

if (userChoices === "r" && computerChoices === "r") {
  alert("Its a Tie");
} else if (userChoices === "r" && computerChoices === "p") {
  alert("You Lose");
} else if (userChoices === "r" && computerChoices === "s") {
  alert("You win!");
}

if (userChoices === "p" && computerChoices === "p") {
  alert("Its a Tie");
} else if (userChoices === "p" && computerChoices === "s") {
  alert("You Lose");
} else if (userChoices === "p" && computerChoices === "r") {
  alert("You win!");
}

if (userChoices === "s" && computerChoices === "s") {
  alert("Its a Tie");
} else if (userChoices === "s" && computerChoices === "r") {
  alert("You Lose");
} else if (userChoices === "s" && computerChoices === "p") {
  alert("You win!");
}

document.querySelector(computerChoices);

var input = confirm("Did you want to play again?");
