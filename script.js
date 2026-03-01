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

// Get the user choice by click event listener
const div =document.querySelector(`div`)

const BTN1 = document.createElement(`button`)
BTN1.textContent = `Rock`;
div.appendChild(BTN1)
const BTN2 = document.createElement(`button`);
BTN2.textContent = `Paper`;
div.appendChild(BTN2)
const BTN3 = document.createElement(`button`);
BTN3.textContent = `Scissors`;
div.appendChild(BTN3)
const resultDev= document.createElement(`div`);
div.appendChild(resultDev);
const score = document.createElement(`div`);
div.appendChild(score);
const winnerAnouncer = document.createElement(`div`);
div.appendChild(winnerAnouncer)
BTN1.addEventListener(`click` , () =>{
   let hChoice= BTN1.textContent.toLocaleLowerCase();
   const computerSelection = getComputerChoice();
   playRound(hChoice,computerSelection);

});
BTN2.addEventListener(`click`, ()=>{
    const computerSelection = getComputerChoice();
    let hChoice = BTN2.textContent.toLowerCase();
    playRound(hChoice,computerSelection);
    
});
BTN3.addEventListener(`click`,()=>{
    const computerSelection = getComputerChoice();
  let hChoice = BTN3.textContent.toLocaleLowerCase();
    playRound(hChoice,computerSelection);
    
} )
// function getUserChoice(){
//    let userChoice = prompt(`Choose Between Rock-Paper-scissors😒`, );
//    return userChoice;
// }
// declaring scores to save the score of the human and computer
let humanScore = 0;
let computerScore = 0;
// The logic of the single round of the game is done here within this function
function playRound (humanChoice, computerChoice){
    if (humanChoice==`rock` && computerChoice == `scissors`||humanChoice ==`paper` && computerChoice == `rock`||humanChoice == `scissors` && computerChoice ==`paper`){
        humanScore++;

resultDev.textContent=`you won!`}
	else if(humanChoice == `scissors` && computerChoice ==`rock`||humanChoice==`rock` && computerChoice == `paper`||humanChoice == `paper` && computerChoice == `scissors`){
        computerScore++;
		resultDev.textContent= `you lose!`}

    else if (humanChoice==computerChoice)
   resultDev.textContent= `play again!`;
console.log(computerScore,humanScore);

score.textContent=`You Scored${humanScore} and the computer scored ${computerScore}`
if(computerScore==5&&humanScore<5){
    score.textContent=`SORRY😔 YOU LOSE!!!`;
}
if(humanScore==5&&computerScore<5){
   score.textContentn=`HUREY YO WON THE MATCH🏆!!!`
}
if(humanScore>5||computerScore>5){
  score.textContent==`the Game has already ended`;
}


}
// div.style = `display: flex; justify-content: center; font-style:Segoe UI , sans-serif; gap: 5rem;margin-top: 20rem ; flex-direction: column`;

BTN1.style= `padding :30px; margin: 10px ; background-color:red ; border-radius: 20px;`;
BTN2.style =`padding :30px; margin: 10px ; background-color:red ; border-radius: 20px`;
BTN3.style =`padding :30px; margin: 10px ; background-color:red ; border-radius: 20px`;

// the game logic for the score keeping is in this function 
// function playGame(Event){

// const computerSelection = getComputerChoice();


//     let round = playRound ( humanSelection ,computerSelection );

// if (round ==`you won!`){
//     humanScore++;
    
// }
// else if (round==`you lose!`){
//     computerScore++;
// }
// else if(round==`play again!`){
//     humanScore+=0;
//     computerScore+=0;
// }

// return round;
// }
// playing the game 5 rounds using the for loop
// for(let i =0; i<5;i++){

//    console.log(playGame()); 
// }
// Declaring the winner after 5 ROUNDS
if(humanScore>computerScore){
       console.log(`YOU ARE THE WINNER BY ${humanScore} TO ${computerScore}`);
}
else if(computerScore>humanScore){
       console.log(`COMPUTER IS THE WINNER BY ${computerScore} TO ${humanScore}`);
}