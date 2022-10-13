var wins = 0;
var losses = 0;
var draws = 0;
var cpuPickOuts = ["r", "p", "s"];
/*Note the whole game is in a function but the intialization of the game
begins AT THE BOTTOM OF THE SCRIPT, outside the function*/
//************** 1. Show prompt asking for R,P,S (UI) **************\\
var theGame = function () {
  userInput = prompt(
    "Hello, Lets play a game of Rock-Paper-Scissors! Type r, p, or s to get started!"
  );

  if (!userInput) {
    return;
  }
  //************** 2. User submits selection (Event) **************\\
  // (User supplies value dependant on input ( expected outcome of "r", "p,", "s"))

  //************** 3. Store value in userChoice (Update state) **************\\
  //(the inputed value of "r", "p,", or "s" is stored in the declared variable userInput)

  //************** 4. Generate a random computer selection (Update state) **************\\
  /*notes on math.floor and math random
  math.floor will round the number down
  math.random picks a number (with deciaml) between 0 and 1 {E.G 0.555555565451}*/
  var cpuChoice = cpuPickOuts[Math.floor(Math.random() * cpuPickOuts.length)];

  //**************  5. Alert with computer choice (UI) **************\\
  console.log("The computer chose " + cpuChoice);
  alert("The Computer Chose " + cpuChoice + " !");

  //************** 6. Compare (Update State) **************\\
//Dez's logic setup
  if (userInput === "r") {
    if (cpuChoice === "r") {
      draws++;
      alert("Player tied with the Machine!!!! Next Round!");
    } else if (cpuChoice === "p") {
      losses++;
      alert("Oh no, the Machine has won, can you delay their uprising? Try again!");
    } else {
      wins++;
      alert("Player is da Winner!");
    }
  } else if (userInput === "p") {
    if (cpuChoice === "r") {
      wins++;
      alert("Player is da Winner!");
    } else if (cpuChoice === "p") {
      draws++;
      alert("Player tied with the Machine!!!! Next Round!");
    } else {
      losses++;
      alert("Oh no, the Machine has won, can you delay their uprising? Try again!");
    }
  } else if (userInput === "s") {
    if (cpuChoice === "r") {
      losses++;
      alert("Oh no, the Machine has won, can you delay their uprising? Try again!");
    } else if (cpuChoice === "p") {
      wins++;
      alert("Player is da Winner!");
    } else {
      draws++;
      alert("Player tied with the Machine!!!! Next Round!");
    }
  }
  //**************  7. Alert user of outcome (UI) **************\\

  //************** 8. Alert user of scoreboard (UI) **************\\
  alert(
    "Current Score: " +
      "\nWINS!!!= " +
      wins +
      "   " +
      "\nlosses :( = " +
      losses +
      "   " +
      "\nTIED = " +
      draws
  );
//************** 9. Confirm play again (Event) **************\\
  var playAnotherRound = confirm("Would you like to play again??");

  if(playAnotherRound) {
    theGame();
  }
};

theGame();
