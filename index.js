var rndomNumber1 = Math.floor(Math.random() * 6)+1; //1-6

var randomDiceImage= "images/dice" + rndomNumber1 + ".png";

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src" ,randomDiceImage);

var randomNumber2=Math.floor(Math.random()*6)+1;

var randomDiceImage2= "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src",randomDiceImage2);

// if player 1 wins

if (rndomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML="💃 PLayer 1 won";

}
// if player 2 wins
else if (randomNumber2 > rndomNumber1){
    document.querySelector("h1").innerHTML="💃 PLayer 2 won";

}
// if match draw
else {
    document.querySelector("h1").innerHTML="Draw😒";
}