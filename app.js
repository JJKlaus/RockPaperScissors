let compWins = 0;
let userWins = 0;
let userChoice = 'none';

function getComputerChoice(){
    //random value 0-2
    //convert int to string
    //0-rock
    //1-paper
    //2-scissors
    let compChoice = Math.floor(Math.random()*3);
    console.log(compChoice);
    if(compChoice == 0){
        return 'rock';
    }
    else if(compChoice == 1){
        return 'paper';
    }
    else if(compChoice == 2){
        return 'scissors';
    }
    else{
        return 'error';
    }
}

function getUserChoice(userChoice,hasPicked){
    //get user choice as a string 
    //ensure not case sensitive
    //let user = prompt('Choose rock, paper, or scissors')
    //return user;

    //for ui based user choice
    //listen for alert maybe 
    //send alerts from btn press functions
    if(hasPicked == 1){
        let user = userChoice;
        return user;
    }
}

function compare(comp, user){
    //determines if user or computer won the round
    //return 0 on comp win
    //return 1 on user win
    //return 2 on tie
    console.log('comp value ' + comp + '     user value ' + user)
    if(comp == 'scissors'){
        curCpu.src = 'images/scissors.png';
        if(user == 'scissors'){
            return 2;
        }
        else if(user == 'rock'){
            return 1;
        }
        else if(user == 'paper'){
            return 0;
        }
    }
    else if(comp == 'rock'){
        curCpu.src = 'images/rock.png';
        if(user == 'scissors'){
            return 0;
        }
        else if(user == 'rock'){
            return 2;
        }
        else if(user == 'paper'){
            return 1;
        }
    }
    else if(comp == 'paper'){
        curCpu.src = 'images/paper.png';
        if(user == 'scissors'){
            return 1;
        }
        else if(user == 'rock'){
            return 0;
        }
        else if(user == 'paper'){
            return 2;
        }
    }
}

function round(userChoice){
    //plays one round of rock paper scissors
    hasPicked = 0;
    let comp = getComputerChoice();
    //let user = getUserChoice(userChoice);
    let winner = compare(comp, userChoice);
    return winner;

}



function game(winner){
    /*let roundNum = 0;
    let compWins = 0;
    let userWins = 0;
    for(roundNum; roundNum<5; roundNum++){
        let winner = round();
        if(winner == 2){
            roundNum--;
            console.log('its a tie');
        }
        else if(winner == 1){
            userWins++;
            console.log('User wins!');
        }
        else if(winner == 0){
            compWins++;
            console.log('Computer Wins!');
        }
        else{
            console.log('error');
        }
    }
    if(compWins > userWins){
        console.log('The Computer won the match!');
    }
    else{
        console.log('The User won the match!');
    }*/

    if(winner == 2){
        console.log('its a tie');
    }
    else if(winner == 1){
        userWins++;
        console.log('User wins!');
        scoreUser.textContent = userWins;
    }
    else if(winner == 0){
        compWins++;
        console.log('Computer Wins!');
        scoreCpu.textContent = compWins;
    }
    else{
        console.log('error');
     }
    if(userWins==3){
        console.log('The User won the match!');
        alert('The User Won the Match!');
        scoreCpu.textContent = '0';
        scoreUser.textContent = '0';
        userWins = 0;
        compWins = 0;
    }
    else if(compWins==3){
        console.log('The Computer won the match!');
        alert('The Computer Won the Match!');
        scoreCpu.textContent = '0';
        scoreUser.textContent = '0';
    }
}

function rockPicked(){
    userChoice = 'rock';
    curUser.src= 'images/rock.png';
    let winner = round(userChoice);
    game(winner);
}

function paperPicked(){
    userChoice = 'paper';
    curUser.src= 'images/paper.png';
    let winner = round(userChoice);
    game(winner);
}

function scissorsPicked(){
    userChoice = 'scissors';
    curUser.src= 'images/scissors.png';
    let winner = round(userChoice);
    game(winner);
}

window.onload = function(){
    var btnR = document.querySelectorAll('#btnR');
    var btnP = document.querySelectorAll('#btnP');
    var btnS = document.querySelectorAll('#btnS');
    var curUser = document.querySelectorAll('#curUser');
    var curCpu = document.querySelectorAll('#curCpu');
    var scoreUser = document.querySelectorAll('#scoreUser');
    var scoreCpu = document.querySelectorAll('#scoreCpu');

    
    btnR[0].addEventListener("click", rockPicked);
    btnP[0].addEventListener("click", paperPicked);
    btnS[0].addEventListener("click", scissorsPicked)

    scoreUser[0].textContent = '0';
    scoreCpu[0].textContent = '0';

}
