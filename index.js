//document.querySelector("button",".drum").addEventListener("click", handleClick); Posibilidad para hacer sonar si el for loop


//Detecting click button press

var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function () {

        var buttonInnerHTML = this.innerHTML;
        sound(buttonInnerHTML);
        animation(buttonInnerHTML);
    });



}

//detecting key press

document.addEventListener("keydown", function (event) {

    var buttonInnerHTML = (event.key);
    sound(buttonInnerHTML);
    animation(event.key);

})

// Función evalúa el caso y reproduce el sonido correspondiente.
function sound(key) {
    switch (key) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "k":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "l":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;

        default:
            console.log (key);
    }
}

function animation (buttonpress){
    var element = document.querySelector("."+buttonpress);

    element.classList.toggle("pressed");

    setTimeout(function(){
        element.classList.toggle("pressed");
    }, 100);
    
}
