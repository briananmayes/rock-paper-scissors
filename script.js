/* Manipulating the DOM */
const container = document.querySelector('#container');
container.style.display = 'flex';
container.style.flexDirection = 'column';
container.style.justifyContent = 'center';
container.style.alignItems = 'center';
//const button = document.querySelector('#rock');
const h1 = document.createElement('h1');
h1.textContent = "Rock, Paper, Scissors";
h1.style.color = 'white';
h1.style.textAlign = 'center';
h1.style.margin = '0px';
container.appendChild(h1);

/* resolving: TypeError: Failed to execute 'addEventListener' on 'EventTarget': parameter 2 is not of type 'Object'. 

needed to add "() =>" to make the addEventListener param 2 an actual *function* */

//creating buttons to play
const btnContainer = document.createElement('div');
container.appendChild(btnContainer);
const rockBtn = document.createElement('button');
rockBtn.textContent = "Rock";
rockBtn.style.backgroundColor = 'pink';
btnContainer.appendChild(rockBtn);

const paperBtn = document.createElement('button');
paperBtn.textContent = "Paper";
paperBtn.style.backgroundColor = 'lightpink';
btnContainer.appendChild(paperBtn);

const scissorBtn = document.createElement('button');
scissorBtn.textContent = 'Scissors';
scissorBtn.style.backgroundColor = 'lavender';
btnContainer.appendChild(scissorBtn);

//const paperBtn = document.querySelector('#paper');
paperBtn.addEventListener('click', () => playRound('paper', computerPlay()));

rockBtn.addEventListener('click', () => playRound('rock', computerPlay()));

scissorBtn.addEventListener('click', () => playRound('scissors', computerPlay()));

const buttons = document.querySelectorAll('button');
buttons.forEach((btn) => {
    btn.style.padding = '8px';
    btn.style.margin = '8px';
    btn.style.border = '1px solid white';
    btn.style.borderRadius = '5px';
    btn.style.boxShadow = '2px 2px 5px lightgray';
});

// create the scoreboard
const scoreboard = document.createElement('div');
scoreboard.style.border = '2px solid pink';
scoreboard.style.width = '300px';
scoreboard.style.display = 'flex';
scoreboard.style.flexDirection = 'column';
scoreboard.style.justifyContent = 'center';
scoreboard.style.alignItems = 'center';
container.appendChild(scoreboard);

const scoreTitle = document.createElement('h3');
scoreTitle.textContent = 'Scoreboard';
scoreboard.appendChild(scoreTitle);

const userScore = document.createElement('p');
scoreboard.appendChild(userScore);
const cpuScore = document.createElement('p');
scoreboard.appendChild(cpuScore);

/* Rock, Paper, Scissors game with the computer */

function computerPlay() {
    values = ["rock", "paper", "scissors"]
    random = Math.floor(Math.random() * values.length)
    return values[random]
}

let uS = 0;
let cS = 0;

function game() {
    const winner = document.createElement('h2');
        if(uS === 5) {
            winner.textContent = `You Win!!!`;
            scoreboard.appendChild(winner);
        }
        if(cS === 5) {
            winner.textContent = 'The CPU Wins :('
            scoreboard.appendChild(winner);
        }
}

const selections = document.createElement('p');

function playRound (userPlay, computerPlay) {
    selections.textContent = `You chose ${userPlay} & the CPU chose ${computerPlay}`;
    container.insertBefore(selections, scoreboard);

    userPlay = userPlay.toLowerCase()
    computerPlay = computerPlay.toLowerCase()


    if((userPlay === "rock" && computerPlay === "paper") || (userPlay === "paper" && computerPlay === "scissors") || (userPlay == "scissors" && computerPlay === "rock")) {
        cS += 1;
        userScore.textContent = `Your Score: ${uS}`;
        cpuScore.textContent = `CPU Score: ${cS}`;
    }
    else if((userPlay === "paper" && computerPlay === "rock") || (userPlay === "scissors" && computerPlay === "paper") || (userPlay == "rock" && computerPlay === "scissors")) {
        uS += 1;
        userScore.textContent = `Your Score: ${uS}`;
        cpuScore.textContent = `CPU Score: ${cS}`;
    }
    else {
        uS += 1;
        cS += 1;
        userScore.textContent = `Your Score: ${uS}`;
        cpuScore.textContent = `CPU Score: ${cS}`;
    }
    game();
}


