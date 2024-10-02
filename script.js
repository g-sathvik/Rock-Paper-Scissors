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

function playRound()
{
    const humanChoice = getHumanChoice();
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
    console.log(message);
}

function playGame()
{
    for(let i = 0;i < 5;i++)
    {
        playRound();
    }
    console.log(`You won ${humanScore} times. Computer won ${computerScore} number of times.`)
}

playGame();