//This is a game of Rock_Paper_Scissors that you play in console

//Get the computer choice by using random numbers and converting them to rock paper and scissors
function getComputerChoice(){
    let computerChoice;
   let preComputerChoice= Math.floor(Math.random() *3);
if(preComputerChoice==0) computerChoice=`scissors`;
if(preComputerChoice==1) computerChoice = `paper`;
if(preComputerChoice==2) computerChoice = `rock`;
return computerChoice
}
// Get the user choice by using prompt and saving it to a variable
function getUserChoice(){
   let userChoice = prompt(`Choose Between Rock-Paper-scissors😒`, ).toLowerCase();
   return userChoice;
}
// declaring scores to save the score of the human and computer
let humanScore = 0;
let computerScore = 0;
// The logic of the single round of the game is done here within this function
function playRound (humanChoice , computerChoice){
    if (humanChoice==`rock` && computerChoice == `scissors`)
return `you won!`
	else if(humanChoice == `scissors` && computerChoice ==`rock`)
		return `you lose!`
else if (humanChoice ==`paper` && computerChoice == `rock`)
return `you won!`
else if (humanChoice==`rock` && computerChoice == `paper`)
return `you lose!`
else if (humanChoice == `paper` && computerChoice == `scissors`)
return  `you lose!`
else if (humanChoice == `scissors` && computerChoice ==`paper`)
return `you won!`
else if (humanChoice==computerChoice)
    return `play again!`;
}
// the game logic for the score keeping is in this function 
function playGame(){
    
const humanSelection = getUserChoice();
const computerSelection = getComputerChoice();


    let round = playRound ( humanSelection ,computerSelection );

if (round ==`you won!`){
    humanScore++;
    
}
else if (round==`you lose!`){
    computerScore++;
}
else if(round==`play again!`){
    humanScore+=0;
    computerScore+=0;
}

return round;
}
// playing the game 5 rounds using the for loop
for(let i =0; i<5;i++){

   console.log(playGame()); 
}
// Declaring the winner after 5 ROUNDS
if(humanScore>computerScore){
       console.log(`YOU ARE THE WINNER BY ${humanScore} TO ${computerScore}`);
}
else if(computerScore>humanScore){
       console.log(`COMPUTER IS THE WINNER BY ${computerScore} TO ${humanScore}`);
}