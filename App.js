let userScore=0;
let compScore=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScorepara=document.querySelector("#user-Score");
const compScorepara=document.querySelector("#comp-Score");
//for draw game
const drawGame=()=>{
    msg.innerText="Game Was Draw,Play again!";
    msg.style.backgroundColor="#081b31";
}
//Generet computer choice
const genCompChoice=()=>{
    const options=["rock","paper","scissor"];
    const randomIdx=Math.floor(Math.random()*3);
    return options[randomIdx];
};

const showWinner=(userWin,userChoice,compChoice)=>{
     if(userWin){
        userScore++;
        userScorepara.innerText=userScore;
        msg.innerText=`You Win Your ${userChoice} beates ${compChoice}`;
        msg.style.backgroundColor="green";
     }
     else{
        
        compScore++;
        compScorepara.innerText=compScore;
        msg.innerText=`You loss ${compChoice} beates your ${userChoice}`;
        msg.style.backgroundColor="red";
     }
} 
const playgame=(userChoice)=>{
     const compChoice=genCompChoice();
     if(userChoice === compChoice){
        //draw
        drawGame();
     }
     else{
        let userWin=true;
        if(userChoice === "rock"){
            //scissor,paper
            userWin=compChoice === "paper"?false:true;
        }
        else if(userChoice === "paper"){
            //rock,scissor
            userWin=compChoice === "scissor"?false:true;
        }
        else{
            //paper,rock
            userWin=compChoice === "rock"?false:true;
        }
        showWinner(userWin,userChoice,compChoice);
     }
}
//for user choice
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        let userChoice=choice.getAttribute("id");
     playgame(userChoice);
    })
})