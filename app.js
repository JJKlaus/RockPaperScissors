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

function getUserChoice(){
    //get user choice as a string 
    //ensure not case sensitive
    let user = prompt('Choose rock, paper, or scissors')
    return user;
}

function compare(comp, user){
    //determines if user or computer won the round
    //return 0 on comp win
    //return 1 on user win
    //return 2 on tie
    console.log('comp value ' + comp + '     user value ' + user)
    if(comp == 'scissors'){
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

function round(){
    //plays one round of rock paper scissors
    let comp = getComputerChoice();
    let user = getUserChoice();
    let winner = compare(comp, user);
    return winner;

}

function game(){
    let roundNum = 0;
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
    }
}

//game();