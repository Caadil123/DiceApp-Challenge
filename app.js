// select the two player dice images

let player1 = document.querySelector('.img1');
let player2 = document.querySelector('.img2');


// generate random number that starts 1 and ends 6;
let randomDice = Math.floor((Math.random()*6)) +1;
let randomDice2 = Math.floor((Math.random()*6)) +1;

//prapre the images's src and assign the random number 

let player1ImageSrc = "images/dice"+randomDice+".png",
 player2ImageSrc = "images/dice"+randomDice2+".png";

//  then change it their src

player1.setAttribute('src', player1ImageSrc)
player2.setAttribute('src', player2ImageSrc)


if(randomDice > randomDice2){
    document.querySelector('.winner').innerHTML = "Player one win"
}else if(randomDice === randomDice2){
     document.querySelector('.winner').innerHTML = "Draw!"
}else{
     document.querySelector('.winner').innerHTML = "Player two win"
}

