let color = ["green","red","yellow","blue"];
let user = [];
let gamepattern = [];
let started = false;
let level = 0 ;
$(document).keypress(function(){
    if(!started)
    {
        $("#level-title").text("Level " + level);
        number();
        started = true;
    }
});
$(".btn").click(function(){
    let v = $(this).attr("id");
    user.push(v);
    playsound(v);
    animatepress(v);
    checkpattern(user.length-1);
});
function checkpattern(currentlevel){
    if(gamepattern[currentlevel] === user[currentlevel]){
       
        if(user.length === gamepattern.length){
        setTimeout(function(){
            number();
            },1000);
        }
    }
    else
    {
        playsound("wrong");

        $("body").addClass("game-over");
        $("#level-title").text("Game-Over, Press Any Key To Restart");
        setTimeout(function(){
            $("body").removeClass("game-over")
        },200);
        
        startOver();
    }
}
function number()
{
    user = [];
    level++;
    $("#level-title").text("Level " + level);
    let rand = Math.floor((Math.random()*4));
    
    let chose = color[rand];
    gamepattern.push(chose);

    $("#" + chose).fadeIn(100).fadeOut(100).fadeIn(100);
    playsound(chose);
}
function playsound(name){
    let audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}
function animatepress(currentcolor){
    $("#" + currentcolor).addClass("pressed");
    setTimeout(function(){
        $("#" + currentcolor).removeClass("pressed");
    },100);
}
function startOver()
{
    level = 0 ;
    gamepattern = [];
    started = false;
}