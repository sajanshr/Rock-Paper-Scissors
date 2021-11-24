function rpsGame(yourChoice){

    

    var humanChoice, botChoice, results, message; 
    humanChoice = yourChoice.id;
    botChoice= numberToChoice(randToRpsInt());

   results =  decideWinner(humanChoice, botChoice);
   message = finalMessage(results);
   rpsFrontEnd(yourChoice.id, botChoice, message);



}


function randToRpsInt(){
    return Math.floor(Math.random()*3);

}

function numberToChoice(number){
    return ["rock", "paper", "scissors"][number];
}

function decideWinner(yourChoice, computerChoice){
    var rpsObject = {
        'rock': {'scissors':1, 'rock': 0.5, 'paper':0},
        'paper': {'rock':1, 'paper': 0.5, 'scissors':0},
        'scissors': {'paper':1, 'scissors': 0.5, 'rock':0}



    };

    

    var yourScore = rpsObject[yourChoice] [computerChoice];
    var computerScore = rpsObject[computerChoice] [yourChoice];

    return [yourScore, computerScore];
}



function finalMessage([yourScore, computerScore]){
    if(yourScore === 0){
        return {'message': 'You Lost!', 'color': 'red'};
    }else if(yourScore ===0.5){
        return {'message': 'You Tied!', 'color': 'brown'};
        
    }else{
        return {'message': 'You Won!', 'color': 'green'};
    }
}


function rpsFrontEnd(yourChoiceImg, botChoiceImg, message ){
    var imgDatabase = {
        'rock' : document.getElementById('rock').src,
        'paper' : document.getElementById('paper').src,
        'scissors' : document.getElementById('scissors').src

    };


    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    var rpsDiv = document.querySelector('.rps');

    rpsDiv.innerHTML = `

    <img src="${imgDatabase[yourChoiceImg]}" height=150px width=150px style = 'box-shadow: 0px 10px 50px rgba(37,50,233,1)'>
    <h2 style='color:${message['color']}'> ${message['message']}</h2>
    <img src="${imgDatabase[botChoiceImg]}" height=150px width=150px style = 'box-shadow: 0px 10px 50px rgba(37,50,233,1)'>
    
    
    
    
    
    `



}