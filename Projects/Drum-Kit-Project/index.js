let button = document.querySelectorAll('.drum');
for (let i = 0; i < button.length; i++) {
    button[i].addEventListener('click', function () {
        let buttonHTML = this.innerHTML;
        switch (buttonHTML) {
            case "w":
                let audio = new Audio('sounds/tom-1.mp3');
                audio.play();
                break;
            case "a":
                let audio = new Audio('sounds/tom-2.mp3');
                audio.play();
                break;
            case "s":
                let audio = new Audio('sounds/tom-3.mp3');
                audio.play();
                break;
            case "d":
                let audio = new Audio('sounds/tom-4.mp3');
                audio.play();
                break;
            case "j":
                let audio = new Audio('sounds/kick-bass.mp3');
                audio.play();
                break;
            case "k":
                let audio = new Audio('sounds/crash.mp3');
                audio.play();
                break;
            case "l":
                let audio = new Audio('sounds/snare.mp3');
                audio.play();
                break
        }
    })
}