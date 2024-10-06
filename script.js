let humanScore = 0;
let computerScore = 0;


function getComputerChoice()
{
    let x = Math.random()*3;
    if(x < 1)
    {
        return "rock";
    }
    else if(x < 2)
    {
        return "paper"
    }
    else
    {
        return "scissors";
    }
}

function getHumanChoice()
{
    let x = prompt("Enter your choice", "Rock");
    if(x.toUpperCase() === "ROCK")
    {
        return "rock";
    }
    else if(x.toUpperCase() === "PAPER")
    {
        return "paper";
    }
    else if(x.toUpperCase() === "SCISSORS")
    {
        return "scissors";
    }
    else 
    {
        alert("You entered wrong input. Reload the page to play again.");
    }
}

function playRound(humanChoice)
{
    if(computerScore < 5 && humanScore < 5)
    {
        const computerChoice = getComputerChoice();
        let message = "";
        if(humanChoice === computerChoice)
        {
            message+=(`You both chose ${humanChoice}!. Nobody won.`)
        }
        else
        {
            if(humanChoice == "rock")
            {
                if(computerChoice == "paper")
                {
                    message+=(`You lost! Paper beats Rock`);
                    computerScore++;
                }
                else
                {
                    message+=(`You won! Rock beats Scissors`);
                    humanScore++;
                }
            }
            else if(humanChoice == "paper")
            {
                if(computerChoice == "scissors")
                {
                    message+=(`You lost! Scissors beats Paper`);
                    computerScore++;
                }
                else
                {
                    message+=(`You won! Paper beats Rock`);
                    humanScore++;
                }
            }
            else
            {
                if(computerChoice == "rock")
                {
                    message+=(`You lost! Rock beats Scissors`);
                    computerScore++;
                }
                else
                {
                    message+=(`You won! Scissors beats Paper`);
                    humanScore++;
                }           
            }

        }
        let messageHTML = document.createElement("p");
        messageHTML.textContent = message;
        let results = document.querySelector("#results");
        results.appendChild(messageHTML);
        let humanScoreHTML = document.querySelector("#hs");
        let computerScoreHTML = document.querySelector("#cs");
        humanScoreHTML.textContent = String(humanScore);
        computerScoreHTML.textContent = String(computerScore);
        if(humanScore === 5)
        {
            let announceHTML = document.createElement("h1");
            announceHTML.textContent = `You won!!`;
            let announce = document.querySelector('#announce');
            announce.appendChild(announceHTML);
        }
        if(computerScore === 5)
            {
                let announceHTML = document.createElement("h1");
                announceHTML.textContent = `You lost!!`;
                let announce = document.querySelector('#announce');
                announce.appendChild(announceHTML);
            }
    }
}

let userInput = document.querySelector(".input");
userInput.addEventListener('click', (event) => {
    let tar = event.target;
    switch(tar.className) {
        case 'rock':
            playRound('rock');
            break;
        case 'paper':
            playRound('paper');
            break;
        default:
            playRound('scissors');
            break;
    }
})