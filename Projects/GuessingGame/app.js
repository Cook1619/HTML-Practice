// create secret number
let secretNumber = 4;
//ask user for guess
let guess = Number(prompt('Guess a number'));
//check if guess is correct
if(guess === secretNumber){
  alert('You guessed correct!!!');
}
//otherwise check if higher
else if(guess > secretNumber){
  alert('You guessed to high, guess again!')
}
//otherwise check if lower
else {
  alert('Too low, guess again.')
}