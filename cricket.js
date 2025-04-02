let choices=document.querySelectorAll(".choice");

//getting computer choice
getComputerChoice=()=>{
    const choices=["bat","ball","stump"];
    const randomNumber=Math.floor(Math.random()*3);
    return choices[randomNumber];
}

//showing winner
showWinner=(userWin,userChoice,computerChoice)=>{

    document.querySelector("#msg").innerHTML=`User chose ${userChoice} and Computer chose ${computerChoice}`;
    document.querySelector("#msg").style.color="white";

    if(userWin){
        document.querySelector("#user").innerHTML="Win";
        document.querySelector("#computer").innerHTML="Defeat";
        document.querySelector("#draw").innerHTML="User is the winner!";
        document.querySelector("#draw").style.color="green";
    }else{
        document.querySelector("#user").innerHTML="Defeat";
        document.querySelector("#computer").innerHTML="Win";
        document.querySelector("#draw").innerHTML="Computer is the winner!";
        document.querySelector("#draw").style.color="green";
    }
}

//playing the game
const playGame=(userChoice)=>{

    const computerChoice=getComputerChoice();
    //console.log(computerChoice);


    if(userChoice===computerChoice){
        document.querySelector("#user").innerHTML="Same";
        document.querySelector("#computer").innerHTML="same";
        document.querySelector("#draw").innerHTML="It's a Tie!";
        document.querySelector("#draw").style.color="yellow";
        document.querySelector("#draw").style.fontSize="30px";
    }else{
        let userWin=true;
        if(userChoice==="bat"){
            userWin=computerChoice==="stump"?false:true;
        }else if(userChoice==="ball"){
            userWin=computerChoice==="bat"?false:true;
        }else{
            userWin=computerChoice==="ball"?false:true;
        }

        showWinner(userWin,userChoice,computerChoice);
        //console.log(userWin);
    }
}

//getting user choice
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        //console.log(userChoice);
        playGame(userChoice);
    });
});