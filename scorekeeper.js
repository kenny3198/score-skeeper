var p1button = document.querySelector("#p1");
var p2button = document.getElementById("p2");
var resetButton = document.getElementById("reset");
var numInput = document.querySelector("input");
var winningScoreDisplay = document.querySelector("p span");
var p1score = 0;
var p2score = 0;
var gameOver = false;
var winningScore = 5;
var p1display = document.querySelector("#p1display")
p1button.addEventListener("click", function(){
    if(!gameOver){
        p1score++;
        if(p1score === winningScore){
            p1display.classList.add("winner");
            gameOver = true
        }
    p1display.textContent = p1score;
    }
});
var p2display = document.querySelector("#p2display")
p2button.addEventListener("click", function(){
    if(!gameOver){
        p2score++;
        if(winningScore === p2score){
            p2display.classList.add("winner");
            gameOver = true
        }
        p2display.textContent = p2score;
    }

});
resetButton.addEventListener("click", function(){
    reset();
});
function reset(){
    p1score = 0;
    p2score = 0;
    p1display.textContent = p1score;
    p2display.textContent = p2score;
    p1display.classList.remove("winner");
    p2display.classList.remove("winner");
    gameOver = false;
}

numInput.addEventListener("change", function(){
winningScoreDisplay.textContent = this.value;
winningScore = Number(this.value);
reset();
});





// var lis = document.querySelectorAll("li");
// for(i = 0; i < lis.length; i++){
//     lis[i].addEventListener("mouseover", function(){
//         this.style.color = "green";
//         this.classList.add("selected");

//     });
// lis[i].addEventListener("mouseout", function(){
//     // this.style.colour = "black"
//     this.classList.remove("selected");
// });
// lis[i].addEventListener("click", function(){
//     this.classList.toggle("done")

// });
// }

