let computerGuess = Math.floor(Math.random() * 100) + 1;
let scoreValue = 0
let chanceNum = 0

function gameAlgorithm(){
    let playerGuess = document.getElementById('input-box').value;
    let comment = document.getElementById('comment');
    let score = document.getElementById('score');
    let regex = /^[0-9]*$/;

    console.log(computerGuess, playerGuess);

    
    function validateInput(){
        if(playerGuess.match(regex)){
            chanceNum = chanceNum;
        }else{
            comment.innerText = 'input a valid number';
            chanceNum = chanceNum; 
        }
    }

    function lifeline(){
            if(playerGuess === '' || playerGuess == computerGuess){
                chanceNum = chanceNum;
            }else if(playerGuess !== computerGuess && playerGuess.match(regex)){
                if(chanceNum < 3){
                     chanceNum ++ ;
                     console.log(chanceNum);
                }    
            } 
    } 

    function checkResult(){
        if(computerGuess == playerGuess){
            comment.innerText = 'CONGRAT!! you guessed the correct number click new game to continue';
            scoreValue = scoreValue + 10
            score.innerText = scoreValue;
            document.getElementById('submit-btn1').style.display = 'none';
            document.getElementById('submit-btn2').style.display = 'block';

        }else if(playerGuess === ''){
            comment.innerText = 'Please input a number';
        }else if(computerGuess > playerGuess){
            comment.innerText = 'Your guess is too low !!';
        }else if(computerGuess < playerGuess){
            comment.innerText = 'Your guess is too high !!';
        }
    }

    function lifelineActive(){
        if(chanceNum === 1){
            document.getElementById('heart3').style.display = 'none';
            document.getElementById('empty-heart3').style.display = 'block';
        }else if(chanceNum === 2){
            document.getElementById('heart3').style.display = 'none';
            document.getElementById('heart2').style.display = 'none';
            document.getElementById('empty-heart3').style.display = 'block';
            document.getElementById('empty-heart2').style.display = 'block';
        }else if(chanceNum === 3 && playerGuess !== computerGuess){
            document.getElementById('heart3').style.display = 'none';
            document.getElementById('heart2').style.display = 'none';
            document.getElementById('heart1').style.display = 'none';
            document.getElementById('empty-heart3').style.display = 'block';
            document.getElementById('empty-heart2').style.display = 'block';
            document.getElementById('empty-heart1').style.display = 'block';
            document.getElementById('submit-btn1').style.display = 'none';
            document.getElementById('submit-btn2').style.display = 'block';
            document.getElementById('start-btn1').style.display = 'none';
            document.getElementById('start-btn2').style.display = 'block';
            comment.innerText = 'GAME OVER !!! start a new game.';
        }
    }

    return checkResult(),lifeline(), lifelineActive(), validateInput();

}

function newGame(){
    let score = document.getElementById('score');

    if(comment.innerText == 'GAME OVER !!! start a new game.'){
        document.getElementById('heart3').style.display = 'block';
        document.getElementById('heart2').style.display = 'block';
        document.getElementById('heart1').style.display = 'block';
        document.getElementById('empty-heart3').style.display = 'none';
        document.getElementById('empty-heart2').style.display = 'none';
        document.getElementById('empty-heart1').style.display = 'none'; 
        document.getElementById('submit-btn1').style.display = 'block';
        document.getElementById('submit-btn2').style.display = 'none';
        document.getElementById('input-box').value = '';
        chanceNum = 0;
        comment.innerText = 'Input your guess';
        computerGuess = Math.floor(Math.random() * 100) + 1;
        scoreValue = 0;
        score.innerText = scoreValue
        console.log(scoreValue)
    }else{
        document.getElementById('heart3').style.display = 'block';
        document.getElementById('heart2').style.display = 'block';
        document.getElementById('heart1').style.display = 'block';
        document.getElementById('empty-heart3').style.display = 'none';
        document.getElementById('empty-heart2').style.display = 'none';
        document.getElementById('empty-heart1').style.display = 'none'; 
        document.getElementById('submit-btn1').style.display = 'block';
        document.getElementById('submit-btn2').style.display = 'none';
        document.getElementById('input-box').value = '';
        chanceNum = 0;
        comment.innerText = 'Input your guess';
        computerGuess = Math.floor(Math.random() * 100) + 1;
        scoreValue = scoreValue
    }
}

function startGame(){
    document.getElementById('submit-btn1').style.display = 'block';
    document.getElementById('submit-btn2').style.display = 'none';
    document.getElementById('new-game-btn1').style.display = 'block';
    document.getElementById('new-game-btn2').style.display = 'none';
    comment.innerText = 'Input your guess';
}


