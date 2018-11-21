if(age > 30){
    if(name === "Matt"){
        console.log('You are older than 30, and your name is Matt!')
    }
}

if(age > 30 && name === "Matt"){
    console.log('You are older than 30, and your name is Matt!')
}

let answer;
let favTeam = prompt("What is your favorite team?");

switch(favTeam){
    case "Packers":
        answer = 'They are the best team!';
        break;
    case "Vikings":
        answer = 'Thats the worst choice!';
        break;
    case "Bears":
        answer = "Nothing wrong with liking the wrong team";
        break;
    case "Lions":
        answer = "Are your sure??"
        break;
    default:
        answer = "Go home!!";

}

let age = 30;

age > 50 ? console.log('No way! Im not that old!!!'):console.log("I'm way younger than 50!!");