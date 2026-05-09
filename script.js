const choices = document.querySelectorAll(".choice");
const result = document.querySelector("#result-para");

const userScore = document.querySelector("#user-score");
const compScore = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["rock","paper","scissor"];
    const randomIdx = Math.floor(Math.random()*3);
    return options[randomIdx];
};

const drawGame = () => {
    result.innerText = "Game was a Draw! Try Again."
    result.style.backgroundColor = "#081b31";
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.id;
        return playGame(userChoice);
    });
});

const playGame = (userChoice) => {
    const compChoice = genCompChoice();

    if(userChoice === compChoice){
        drawGame();
    }

    else{
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true;
        }
        else if(userChoice === "paper"){
            userWin = compChoice === "scissor" ? false : true;
        }
        else{
            userWin = compChoice === "rock" ? false :true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
};

let userPoints = 0;
let comPoints = 0;
const showWinner = (userWin,userChoice,compChoice) => {
    if(userWin){
        userPoints++;
        userScore.innerText = userPoints;
        result.innerText = `You win! your ${userChoice} beats computer's ${compChoice}`;
        result.style.backgroundColor = "green";
    }else{
        comPoints++;
        compScore.innerText = comPoints
        result.innerText = `You lose! computr's ${compChoice} beats ypur ${userChoice}`;
        result.style.backgroundColor = "red";
    }
}