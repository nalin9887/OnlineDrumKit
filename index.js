for(var i=0;i<document.querySelectorAll(".drum").length;i++){
document.querySelectorAll("button")[i].addEventListener("click",clickhandler);
}
function clickhandler(){
   var whichbutton = this.innerHTML;
   buttonflash(whichbutton);
   makesound(whichbutton);
   document.addEventListener("keydown",function(event){
    makesound(event.key);
    buttonflash(event.key);
   });
   
    function makesound(key){
        switch(key){
            case "w":
                var audio = new Audio("sounds/crash.mp3");
                audio.play();
                break;
            case "a":
                var audio = new Audio("sounds/kick-bass.mp3");
                audio.play();
                break;
            case "s":
                var audio = new Audio("sounds/snare.mp3");
                audio.play();
                break;         
           case "d":
                var audio = new Audio("sounds/tom-1.mp3");
                audio.play();
                break;
           case "j":
                var audio = new Audio("sounds/tom-2.mp3");
                audio.play();
                break;
           case "k":
                var audio = new Audio("sounds/tom-3.mp3");
                audio.play();
                break;
           case "l":
                var audio = new Audio("sounds/tom-4.mp3");
                audio.play();
                break;
            default:
                console.log(whichbutton);
           
            }

    }

}
function buttonflash(currentkey){
   var activebutton= document.querySelector("."+currentkey);
   activebutton.classList.add("pressed");
   setTimeout(function(){activebutton.classList.remove("pressed");},100);
}