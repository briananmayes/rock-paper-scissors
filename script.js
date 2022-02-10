/* Rock, Paper, Scissors game with the computer */

function computerPlay() {
    values = ["rock", "paper", "scissors"]
    random = Math.floor(Math.random() * values.length)
    return values[random]
}

function playRound (userPlay, computerPlay) {
    console.log("You chose: ", userPlay)
    console.log("The computer chose: ", computerPlay)

    userPlay = userPlay.toLowerCase()
    computerPlay = computerPlay.toLowerCase()

    if((userPlay === "rock" && computerPlay === "paper") || (userPlay === "paper" && computerPlay === "scissors") || (userPlay == "scissors" && computerPlay === "rock")) {
        return 0
    }
    else if((userPlay === "paper" && computerPlay === "rock") || (userPlay === "scissors" && computerPlay === "paper") || (userPlay == "rock" && computerPlay === "scissors")) {
        return 1
    }
    else {
        return 2
    }
}
user = "rock"
cpu = computerPlay()


function game() {
    let userCounter = 0;
    let cpuCounter = 0;
    for(let i = 1; i <= 5; i++) {
        let answer = prompt("Rock, paper, scissors?: ")
        console.log("Round ", i, ": ")
        let round = playRound(answer, computerPlay())
        if (round === 0) {
            console.log("You lose")
            cpuCounter++
        }
        else if (round === 1) {
            console.log("You win!")
            userCounter++
        }
        else {
            console.log("Tie!")
        }
    }
    console.log("The final score is: \nYou: ", userCounter, "\nCPU: ", cpuCounter)
}

game()