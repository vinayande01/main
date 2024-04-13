'use strict'
var Score=20;
var Highscore=0
var SecretNumber=(Math.floor(Math.random() *20)+1)
document.querySelector(".number").value=SecretNumber

document.querySelector(".check").addEventListener('click', function(){
    var Guessnumber=Number(document.querySelector('.guess').value)
// Condections...
    if (Guessnumber !== 0){
        if (Score>1){
            if (Guessnumber === SecretNumber){
                document.querySelector('.message').textContent="🎉 Great You Won The Game";
                document.querySelector(".highscore").textContent=Score;
                document.querySelector(".number").textContent=SecretNumber;
                Highscore= Highscore < Score ? Score : Highscore;
                document.querySelector('.highscore').textContent=Highscore
                document.querySelector('body').style.backgroundColor="Purple"
                document.querySelector('.number').style.width="30rem"
            }
            else if (Guessnumber !== SecretNumber){
                var res=Guessnumber > SecretNumber ? "📈To High" : "📉To Low";
                Score=Score-1
                document.querySelector(".score").textContent=Score
                document.querySelector(".message").textContent=res
                
            }
        }
        else{
            document.querySelector(".score").textContent=0
            document.querySelector(".message").textContent="You Fucker Lost The Game😂"
        }

    }
    else {
        document.querySelector(".message").textContent="Look☝️Top-Right-Cornor You Fucker👉"
    }
})
document.querySelector(".again").addEventListener("click", function(){
    SecretNumber=(Math.floor(Math.random() *20)+1)
    Score=20
    document.querySelector(".number").textContent=SecretNumber
    document.querySelector('.message').textContent="Start guessing...🕹️";
    document.querySelector('.guess').value="";
    document.querySelector('.score').textContent=Score;
    document.querySelector(".number").textContent="?"
    document.querySelector('.number').style.width="15rem";
    document.querySelector('body').style.backgroundColor=" #222"
})
// Enter button configrartion

document.addEventListener('downkey',function(e){
    if (e.key === "Enter") {
        var Guessnumber=Number(document.querySelector('.guess').value)
// Condections...
    if (Guessnumber !== 0){
        if (Score>1){
            if (Guessnumber === SecretNumber){
                document.querySelector('.message').textContent="🎉 Great You Won The Game";
                document.querySelector(".highscore").textContent=Score;
                document.querySelector(".number").textContent=SecretNumber;
                Highscore= Highscore < Score ? Score : Highscore;
                document.querySelector('.highscore').textContent=Highscore
                document.querySelector('body').style.backgroundColor="Purple"
                document.querySelector('.number').style.width="30rem"
            }
            else if (Guessnumber !== SecretNumber){
                var res=Guessnumber > SecretNumber ? "📈To High" : "📉To Low";
                Score=Score-1
                document.querySelector(".score").textContent=Score
                document.querySelector(".message").textContent=res
                
            }
        }
        else{
            document.querySelector(".score").textContent=0
            document.querySelector(".message").textContent="You Fucker Lost The Game😂"
        }

    }
    else {
        document.querySelector(".message").textContent="Look☝️Top-Right-Cornor You Fucker👉"
    }

    }

})