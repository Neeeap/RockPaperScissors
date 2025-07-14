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
            playRound(getComputerChoice(),"Paper");
            break;
        case "paper":
            playRound(getComputerChoice(),"Rock");
            break;
        case "scissors":
            playRound(getComputerChoice(),"Scissors");
            break;
    }
})
let res=document.querySelector("#results")
function playRound(getComputerChoice,getPlayerChoice) {
    if (getComputerChoice===getPlayerChoice) {
        console.log("It's a tie!")
    }
    else if (getComputerChoice === "Paper" && getPlayerChoice==="Rock" ||
        getComputerChoice === "Rock" && getPlayerChoice==="Scissors" ||
        getComputerChoice === "Scissors" && getPlayerChoice==="Paper") {
        console.log("Computer wins!")
        ++computerScore
    }
    else {
        console.log("You win!")
        ++humanScore
    }
    console.log(`${humanScore} - ${computerScore}`)
}
if (humanScore===computerScore) {
    console.log("No one wins, but no one loses either")
}
else if (humanScore>computerScore) {
    console.log("Nice job! You won the whole tournament!")
}
else {
    console.log("The computer won, oh well, better luck next time!")
}