let userscore=0;
let compscore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const usersco=document.querySelector("#user");
const compsco=document.querySelector("#comp");

const gencompchoice=()=>{
    const options = ["stone","paper","scissors"];
    const randidx=Math.floor(Math.random()*3);
    return options[randidx];
};

const drawgame=()=>{
    msg.innerText=`Game was Draw as your ${userChoice} cannot beat ${compchoice}`;
    msg.style.backgroundColor="blue";
};

const showWinner=(userwin,userChoice,compchoice)=>{
    if(userwin){
        msg.innerText=`You Win! your ${userChoice} beats ${compchoice}`;
        msg.style.backgroundColor="green";
        userscore++;
        usersco.innerText=userscore;
    }else{
        msg.innerText=`Computer Wins! ${compchoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";
        compscore++;
        compsco.innerText=compscore;
    }
};

const playgame=(userChoice)=>{
    const compchoice=gencompchoice();
    if(userChoice==compchoice)
    {
        drawgame();
    }else{
        let userwin=true;
        if(userChoice==="stone"){
            userwin=compchoice==="paper"?false:true;
        }else if(userChoice==="paper"){
            userwin=compchoice==="scissors"?false:true;
        }else{
            userwin=compchoice==="stone"?false:true;
        }
        showWinner(userwin,userChoice,compchoice);
    
}};

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playgame(userChoice);
    })
});