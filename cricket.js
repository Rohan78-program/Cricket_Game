let choices=document.querySelectorAll(".choice");

let score={
    uwon:0,
    ulost:0,
    tied:0,
    cwon:0,
    clost:0,
};

//getting computer choice
getComputerChoice=()=>{
    const choices=["bat","ball","stump"];
    const randomNumber=Math.floor(Math.random()*3);
    return choices[randomNumber];
}

//showing winner
showWinner=(userWin,userChoice,computerChoice)=>{

    document.querySelector("#msg").innerHTML=`User chosen ${userChoice} and Computer chosen ${computerChoice}`;
    document.querySelector("#msg").style.color="white";

    if(userWin){
        score.uwon++;
        score.clost++;
        document.querySelector("#user").innerHTML=`Win (${score.uwon} times)`;
        document.querySelector("#computer").innerHTML=`Defeat (${score.clost} times)`;
        document.querySelector("#draw").innerHTML="User is the winner!";
        document.querySelector("#draw").style.color="green";
    }else{
        score.ulost++;
        score.cwon++;
        document.querySelector("#user").innerHTML=`Defeat (${score.ulost} times)`;
        document.querySelector("#computer").innerHTML=`Win (${score.cwon} times)`;
        document.querySelector("#draw").innerHTML="Computer is the winner!";
        document.querySelector("#draw").style.color="green";
    }
}

//playing the game
const playGame=(userChoice)=>{

    const computerChoice=getComputerChoice();
    //console.log(computerChoice);


    if(userChoice===computerChoice){
        score.tied++;
        document.querySelector("#user").innerHTML="Same";
        document.querySelector("#computer").innerHTML="same";
        document.querySelector("#draw").innerHTML=`It's a Tie! (${score.tied} times)`;
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