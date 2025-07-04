let humanScore=0
let computerScore=0
function getComputerChoice(){
    choice=Math.floor(Math.random()*100)
    choice <= 33
    ? choice="Rock"
    : choice <=66
    ? choice = "Paper"
    : choice = "Scissors"
    return choice
}
function getPlayerChoice(){
    choice=prompt("Choose rock, paper, or scissors")
    while (true){
    if (choice.toLowerCase()==="rock"){
        choice="Rock"
        break
    }
    else if (choice.toLowerCase()==="paper"){
        choice = "Paper"
        break
    }
    else if (choice.toLowerCase()==="scissors") {
        choice = "Scissors"
        break
    }
    else {
        choice=prompt("Invalid, try again")
    }
    }
    return choice
}
function playRound(getComputerChoice,getPlayerChoice){
    if (getComputerChoice===getPlayerChoice){
        console.log("It's a tie!")
    }
    else if (getComputerChoice === "Paper" && getPlayerChoice==="Rock" || getComputerChoice === "Rock" && getPlayerChoice==="Scissors" || getComputerChoice === "Scissors" && getPlayerChoice==="Paper") {
        console.log("Computer wins!")
        ++computerScore
    }
    else{
        console.log("You win!")
        ++humanScore
    }
    console.log(`${humanScore} - ${computerScore}`)
}
function playGame(){
for (let i =1; i<=5; i++){
playRound(getComputerChoice(),getPlayerChoice())
}
}
playGame()
if (humanScore===computerScore){
    console.log("No one wins, but no one loses either")
}
else if (humanScore>computerScore){
    console.log("Nice job! You won the whole tournament!")
}
else{
    console.log("The computer won, oh well, better luck next time!")
}