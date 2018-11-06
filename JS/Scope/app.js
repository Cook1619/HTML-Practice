var x = 50;
// Global scope x is equal to 50, once doMath is ran it changes the value because your not re-initilializing the variable with var or let again inside the fucntion scope, if you do re-initialized the variable in the function, x has a different value in global scope and fucntion scope
function doMath(){
  //By putting the word var in there your creating another variable inside the scope which is different from the one on the outside
  // var x = 70;
   x = 40;
  console.log(x);
}

//How will this evaluate??? First num gets assigned a value, then you have a fucntion declared, then adding 1 to the number, then the function is called, inside the function you add 1 again making it 10, which makes it divisble with no remainder, so we end up with TRUE!!!
// var num = 8;
// function doMoreMath() {
//   num += 1;
//   if(num % 5 == 0){
//     return true;
//   }else {
//     return false;
//   }
// }

// num += 1;
// doMath();

//Higher order functions are functions that take in a another function as an arguement, or a function that returns another function
//setInterval is a built in JS function which takes a function as a arguement, and and interval, here is an example

function singSong() {
  console.log('Twinkle, twinkle ...');
  console.log('how I wonder ..');
}
//You dont need () to call singSing because setInterval is calling it every 2000 milliseconds
// setInterval(singSong, 2000);
//setInterval in this case will return a number before it starts logging to the console, that number is used to stop the code. You use that number in  conjunction with clearIntervl(numberReturned) to stop the code

//Another thing we can do with setInterval is pass in an anonymous function, a function were never goign to use again and it looks like this
// setInterval(function(){
//   console.log('Im an anonymous function');
// }, 3000);
//This is purly a way to pass in some code to set interval and your not able to retrieve it anywhere else