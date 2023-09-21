let ran1 = Math.floor(Math.random() * 6 ) + 1  ;
let ran2 = Math.floor(Math.random()*6 )+ 1 ;
let s1 = "dice" + ran1 + ".png";
let s2 = "dice" + ran2 + ".png";
let ss1 = "./images/" + s1 ;
let ss2 ="./images/" +s2;
document.querySelector(".img1").setAttribute("src",ss1);
document.querySelector(".img2").setAttribute("src",ss2);

if(ran1>ran2)
{
    document.querySelector("h1").innerHTML="🚩 Player 1 wins";
}
else if(ran2>ran1)
{
    document.querySelector("h1").innerHTML="Player 2 wins 🚩";
}
else
{
    document.querySelector("h1").innerHTML = "Draw!";
}