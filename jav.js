let humanScore=0
let computerScore=0
function getComputerChoice() {
    choice=Math.floor(Math.random()*100)
    choice <= 33
    ? choice="Rock"
    : choice <=66
    ? choice = "Paper"
    : choice = "Scissors"
    return choice
}
let choices=document.querySelector("#choice");
choices.addEventListener("click", (a) =>{
    let chose=a.target;
    switch(chose.id){
        case "rock":
            playRound(getComputerChoice(),"Rock");
            break;
        case "paper":
            playRound(getComputerChoice(),"Paper");
            break;
        case "scissors":
            playRound(getComputerChoice(),"Scissors");
            break;
    }
})
let res=document.querySelector("#results")
let updateScore=document.querySelector("#score")
let ann=document.querySelector("#announce")
let play=document.querySelector("#player")
let computer=document.querySelector("#comp")
function playRound(getComputerChoice,getPlayerChoice) {
    play.textContent=`You chose: ${getPlayerChoice}`
    computer.textContent=`Computer chose: ${getComputerChoice}`
    if (getComputerChoice===getPlayerChoice) {
        ann.textContent="It's a tie!"
    }
    else if (getComputerChoice === "Paper" && getPlayerChoice==="Rock" ||
        getComputerChoice === "Rock" && getPlayerChoice==="Scissors" ||
        getComputerChoice === "Scissors" && getPlayerChoice==="Paper") {
        ann.textContent="Computer wins!"
        ++computerScore
    }
    else {
        ann.textContent="You win!"
        ++humanScore
    }
    updateScore.textContent=`${humanScore} - ${computerScore}`
    let won=document.querySelector("#winner")
if (humanScore==5) {
    won.textContent="Nice job! You won the whole tournament!"
}
else if (computerScore==5) {
    won.textContent="The computer won, oh well, better luck next time!"
}
}