let button = document.querySelectorAll('.drum');
for (let i = 0; i < button.length; i++) {
    button[i].addEventListener('click', function () {
        if (this.innerHTML === "w") {
            let audio = new Audio('sounds/tom-1.mp3');
            audio.play();
        } else if (this.innerHTML === "a") {
            let audio = new Audio('sounds/tom-2.mp3');
            audio.play();
        }else if (this.innerHTML === "s") {
            let audio = new Audio('sounds/tom-3.mp3');
            audio.play();
        }else if (this.innerHTML === "s") {
            let audio = new Audio('sounds/tom-3.mp3');
            audio.play();
        }
        else if (this.innerHTML === "d") {
            let audio = new Audio('sounds/tom-4.mp3');
            audio.play();
        }
        else if (this.innerHTML === "j") {
            let audio = new Audio('sounds/kick-bass.mp3');
            audio.play();
        }
        else if (this.innerHTML === "k") {
            let audio = new Audio('sounds/crash.mp3');
            audio.play();
        }
        else if (this.innerHTML === "l") {
            let audio = new Audio('sounds/snare.mp3');
            audio.play();
        }
    })
}
