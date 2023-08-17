var num1;
num1 = Math.random();
num1 = (num1 * 6)+1;
num1 = Math.floor(num1);

document.querySelector(".img1").setAttribute("src","./dice"+num1+".png");
var num2;
num2 = Math.random();
num2 = (num2 * 6)+1;
num2 = Math.floor(num2);

document.querySelector(".img2").setAttribute("src","./dice"+num2+".png");

if(num1 > num2){
    document.querySelector("h1").textContent = "🚩Player 1 Wins";
}
else if(num2 > num1){
    document.querySelector("h1").textContent = "Player 2 Wins🚩";
}
else{
    document.querySelector("h1").textContent = "Math Tied😑";
}