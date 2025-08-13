let userScore=0;
let compScore=0;
let msg=document.querySelector("#msg");

const userScorepara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");

const genCompchoice=()=>{
    const options=["rock","paper","scissors"];
    const rnIdx=Math.floor(Math.random()*3);
    const compChoice=options[rnIdx];
    return compChoice;
}
function drawGame(){
    console.log("Game was draw");
    msg.innerText="Draw.Play Again.";
    msg.style.backgroundColor="#081b31";
}
const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userScorepara.innerText=userScore;
        console.log("You win");
        msg.innerText=`You Win. Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }else{
        compScore++;
        compScorePara.innerText=compScore;
        console.log("You lose");
        msg.innerText=`You Lose. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="Red";
    }
}
const playGame=(userChoice)=>{
    console.log("user choice ",userChoice);
    //generate computer choice ->modular
    const compChoice=genCompchoice();
    console.log("comp choice ", compChoice);
    if(userChoice==compChoice){
        drawGame();
    }else{
        let userWin=true;
        if(userChoice==="rock"){
            //paper,scissor
            userWin=compChoice==="paper"?false:true;
        }else if(userChoice==="paper"){
            //rock,scissors
            userWin=compChoice==="scissors"? false:true;
        }else{
            //paper,rock
            userWin=compChoice==="rock"? false:true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
}
const choices=document.querySelectorAll(".choice");
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);


    });

});