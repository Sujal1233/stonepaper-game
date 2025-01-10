let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userscorepara = document.querySelector("#user-score");
const compscorepara = document.querySelector("#comp-score");


const gencompchoice =() => {
    const options = ["rock", "paper", "scissors"];
    const randix = Math.floor(Math.random() * 3);
    return options[randix];
}

const drawgame =() =>{
    console.log("game was draw");
    msg.innerHTML = "game draw. play again";
    msg.style.backgroundColor = "rgb(13, 8, 64)";
}

const showwinner = (userwin) => {
    if(userwin){
        
        msg.innerText = "you win!";
        msg.style.backgroundColor = "green";
        userscore++;
        userscorepara.innerText = userscore;
    }
    else{
        
        msg.innerText = "you lost";
        msg.style.backgroundColor = "red";
        compscore++;
        compscorepara.innerText = compscore;
    }
}
const playgame =(userchoice) => {
    console.log("user choice = ", userchoice);
    const compchoice = gencompchoice();
    console.log("comp choice = ", compchoice);

    if(userchoice == compchoice){
        drawgame();

    }
    else{
        let userwin = true;
        if(userchoice == "rock"){
           userwin = compchoice == "paper" ? false : true;
        }
        else if(userchoice == "paper"){
          userwin = compchoice == "scissors" ? false : true;  
        }
        else{
           userwin = compchoice == "rock" ? false : true;
        }
        showwinner(userwin);


    }


};

choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        console.log("choice was clicked", userchoice);
          playgame(userchoice);
    });

});