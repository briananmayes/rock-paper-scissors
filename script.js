/* Manipulating the DOM */
const container = document.querySelector('#container');
container.style.display = 'flex';
container.style.flexDirection = 'column';
container.style.justifyContent = 'center';
container.style.alignItems = 'center';
container.style.color = 'white';
//const button = document.querySelector('#rock');
const h1 = document.createElement('h1');
h1.textContent = "Rock, Paper, Scissors";
h1.style.color = 'white';
h1.style.textAlign = 'center';
h1.style.margin = '0px';
h1.style.fontSize = '32px';
container.appendChild(h1);

/* resolving: TypeError: Failed to execute 'addEventListener' on 'EventTarget': parameter 2 is not of type 'Object'. 

needed to add "() =>" to make the addEventListener param 2 an actual *function* */

/* Creating buttons to play */
// Button container
const btnContainer = document.createElement('div');
container.appendChild(btnContainer);

// Rock Button
const rockBtn = document.createElement('button');
rockBtn.textContent = "Rock";
rockBtn.style.backgroundColor = 'pink';
btnContainer.appendChild(rockBtn);

// Paper Button
const paperBtn = document.createElement('button');
paperBtn.textContent = "Paper";
paperBtn.style.backgroundColor = 'lightpink';
btnContainer.appendChild(paperBtn);

// Scissors Button
const scissorBtn = document.createElement('button');
scissorBtn.textContent = 'Scissors';
scissorBtn.style.backgroundColor = 'lavenderblush';
btnContainer.appendChild(scissorBtn);

//const paperBtn = document.querySelector('#paper');
// Event Listeners for the rock, paper, scissors buttons
paperBtn.addEventListener('click', () => playRound('paper', computerPlay()));

rockBtn.addEventListener('click', () => playRound('rock', computerPlay()));

scissorBtn.addEventListener('click', () => playRound('scissors', computerPlay()));

/* Creating the Scoreboard */
// Scoreboard
const scoreboard = document.createElement('div');
scoreboard.style.border = '2px solid pink';
scoreboard.style.borderRadius = '5px';
scoreboard.style.width = '300px';
scoreboard.style.display = 'flex';
scoreboard.style.flexDirection = 'column';
scoreboard.style.justifyContent = 'center';
scoreboard.style.alignItems = 'center';
container.appendChild(scoreboard);

// Scoreboard title
const scoreTitle = document.createElement('h3');
scoreTitle.textContent = 'Scoreboard';
scoreTitle.style.fontSize = '24px';
scoreTitle.style.margin = '0px';
scoreTitle.style.padding = '8px';
scoreboard.appendChild(scoreTitle);

// Scores
const userScore = document.createElement('p');
const cpuScore = document.createElement('p');

const selections = document.createElement('p');
const winner = document.createElement('h2');

const replay = document.createElement('button');
replay.textContent = 'Play Again';
replay.style.visibility = 'hidden';
container.appendChild(replay);

replay.addEventListener('click', () => reset());

const buttons = document.querySelectorAll('button');
buttons.forEach((btn) => {
    btn.style.padding = '8px';
    btn.style.margin = '8px';
    btn.style.border = '1px solid white';
    btn.style.borderRadius = '5px';
    btn.style.boxShadow = '2px 2px 5px gray';
    btn.style.fontSize = '24px';
    
    //Adding another 'click' event listener to each button to add a "shake" effect
    btn.addEventListener('click', () => {btn.classList.add("shake");
    let delay = setTimeout(() => btn.classList.remove("shake"),300);
    });
});

const ps = document.querySelectorAll('p');
ps.forEach((p) => {
    p.style.fontSize = '20px';
    p.style.margin = '0px';
    p.style.padding = '4px';
});


/* Rock, Paper, Scissors game with the computer */

function computerPlay() {
    values = ["rock", "paper", "scissors"]
    random = Math.floor(Math.random() * values.length)
    return values[random]
}

let uS = 0;
let cS = 0;

function game() {
    winner.style.color = 'pink';
        if(uS === 5) {
            winner.textContent = `You Win!!!`;
            scoreboard.appendChild(winner);
            replay.style.visibility = 'visible';
            rockBtn.disabled = 'true';
            paperBtn.disabled = 'true';
            scissorBtn.disabled = 'true';
            
        }
        if(cS === 5) {
            winner.textContent = 'The CPU Wins :('
            scoreboard.appendChild(winner);
            replay.style.visibility = 'visible';
            rockBtn.disabled = true;
            paperBtn.disabled = true;
            scissorBtn.disabled = true;
            
        }
}


function playRound (userPlay, computerPlay) {
    container.appendChild(selections);
    selections.textContent = `You chose ${userPlay} & the CPU chose ${computerPlay}`;
    selections.style.fontSize = '20px'
    scoreboard.appendChild(userScore);  
    scoreboard.appendChild(cpuScore);
    container.insertBefore(selections, scoreboard);

    userPlay = userPlay.toLowerCase()
    computerPlay = computerPlay.toLowerCase()


    if((userPlay === "rock" && computerPlay === "paper") || (userPlay === "paper" && computerPlay === "scissors") || (userPlay == "scissors" && computerPlay === "rock")) {
        cS += 1;
        userScore.textContent = `You: ${uS}`;
        cpuScore.textContent = `CPU: ${cS}`;
    }
    else if((userPlay === "paper" && computerPlay === "rock") || (userPlay === "scissors" && computerPlay === "paper") || (userPlay == "rock" && computerPlay === "scissors")) {
        uS += 1;
        userScore.textContent = `You: ${uS}`;
        cpuScore.textContent = `CPU: ${cS}`;
    }
    else {
        uS += 1;
        cS += 1;
        userScore.textContent = `You: ${uS}`;
        cpuScore.textContent = `CPU: ${cS}`;
    }
    game();
}

const reset = () => {
    uS = 0;
    cS = 0;
    container.removeChild(selections);
    scoreboard.removeChild(userScore);
    scoreboard.removeChild(cpuScore);
    scoreboard.removeChild(winner);
    rockBtn.disabled = false;
    paperBtn.disabled = false;
    scissorBtn.disabled = false;
    replay.style.visibility = 'hidden';
}


