// let answer = prompt('Are we there yet?');

// while(answer !== "yes" && answer !== "yeah"){
//    answer = prompt('Are we there yet?');
// }
// alert('Yay we made it!!');

//Version 2

let answer = prompt('Are we there yet?');

while(answer.indexOf('yes') === -1){
   answer = prompt('Are we there yet?');
}
alert('Yay we made it!!');