let button = document.querySelectorAll('.drum');
//Adds an event listener on all the buttons, and calls the make soundMake function if one of the buttons is clicks
for (let i = 0; i < button.length; i++) {
    button[i].addEventListener('click', function () {
        let buttonHTML = this.innerHTML;
        makeSound(buttonHTML)
    })
}
//Keeps track of which key was pressed and will call the makeSound function if its matches one of the cases
document.addEventListener("keydown", function (event) {
    makeSound(event.key);
});
//The heavy lifter of the project assigns the proper sound to the proper key and button
function makeSound(key) {
    switch (key) {
        case "w":
            let tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;
        case "a":
            let tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;
        case "s":
            let tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;
        case "d":
            let tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;
        case "j":
            let kickbass = new Audio('sounds/kick-bass.mp3');
            kickbass.play();
            break;
        case "k":
            let crash = new Audio('sounds/crash.mp3');
            crash.play();
            break;
        case "l":
            let snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;

        default:
            console.log(buttonHTML);
    }
}


