//Function let you wrap bits of code up into REUSABLE packages, they are the building blocks of JS
//Declare function first
// function doSomething(){
//   console.log('Hello world!')
// }
// //Then call it as many times as you need
// doSomething();

//Arguments!!!!
//The arguement iin this function is num
function square(num) {
  console.log(num * num);
}
//When you call the function the 10 is a parameter
square(10)//prints 100
//Functions can have any many arguements as needed

//The return keyword, we often want our functions ot send back an output value
//Once there is a returned value, execution of the function is over
//Two main types of functions, declarations and expressions

//Declaration
function add(num1, num2) {
  return num1 + num2;
}
//Expression
//The weird thing about expression is that can be reassigned a value, add2 = 10; it would then store 10 as its value
let add2 = function (num1, num2) {
  return num1 + num2;
}
//Arrow functon
let add3 = (num1, num2) => {
  return num1 + num2;
}

//isEven()
function isEven(num) {
  if (num % 2 === 0) {
    return true;
  }
  return false;
}

console.log(isEven(4));
console.log(isEven(21));
console.log(isEven(68))
console.log(isEven(333));

//Factorial

function factorial(num) {
  let result = 1;
  for (let i = 2; i <= num; i++) {
    result *= i;
  }
  return result;
}

//kebabToSnake
function kebabToSnake(str) {
  let newStr = str.replace(/-/g, "_");
  return newStr;
}
console.log(kebabToSnake("Hello-World"));
console.log(kebabToSnake("Hello-World-How-are-you"));

