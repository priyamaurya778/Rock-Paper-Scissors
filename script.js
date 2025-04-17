let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#message");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {                                      // it will select a random choice each time. 
const options = ["rock", "paper", "scissor"];                       // generating random string is not possible but generating number in random is possible we use array to genrate it's index.
const randIdx = Math.floor(Math.random() * 3);
return options[randIdx];
};

const drawGame = () => {
    msg.innerText = "Game was Draw. Play again.";
    msg.style.backgroundColor = "black";

};

const showWinner = (userWin, userChoice, computerChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You win! Your ${userChoice} beats ${computerChoice}`;
        msg.style.backgroundColor = "green";
    }else{
        computerScore++;
        compScorePara.innerText = computerScore;
        msg.innerText = `You lost. ${computerChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};

const playGame = (userChoice) => {;
    const computerChoice = genCompChoice();

    if(userChoice === computerChoice){
        //Draw Game.
        drawGame();
    }else {
        let userWin = true;
        if(userChoice === "rock"){
            //computerChoice will be paper, scissor.
            userWin = computerChoice === "paper" ? false : true;
        } else if(userChoice === "paper"){
            //computerChoice will be rock,scissor.
            userWin = computerChoice === "scissor" ? false : true;
        }else{
            //computerChoice will be rock,paper.
            userWin = computerChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, computerChoice);
    }
};

choices.forEach((choice) => {                                      //arrow function to access each choice.
    choice.addEventListener("click", () => {                       // adding click event on the choice made by the user out of the three rock,paper and scissor.
        const userChoice = choice.getAttribute("id");              // calling the id of the selected choice made by the user.
        playGame(userChoice);                                      // passing user choice to the playGame function.
    });
});
