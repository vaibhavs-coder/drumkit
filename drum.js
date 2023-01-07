let btn1=document.getElementById("btn1");
let btn2=document.getElementById("btn2");
let btn3=document.getElementById("btn3");
let btn4=document.getElementById("btn4");
let btn5=document.getElementById("btn5");
let btn6=document.getElementById("btn6");
btn1.addEventListener("click",function(){
    var audio=new Audio("crash.mp3");
    audio.play();
});
btn2.addEventListener("click",function(){
    var audio=new Audio("snare.mp3");
    audio.play();
});
btn3.addEventListener("click",function(){
    var audio=new Audio("tom-1.mp3");
    audio.play();
});
btn4.addEventListener("click",function(){
    var audio=new Audio("tom-2.mp3");
    audio.play();
});
btn5.addEventListener("click",function(){
    var audio=new Audio("tom-3.mp3");
    audio.play();
});
btn6.addEventListener("click",function(){
    var audio=new Audio("tom-4.mp3");
    audio.play();
});