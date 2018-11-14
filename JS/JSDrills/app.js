name = "Matt";
var name;
console.log(name);

setName();
function setName() {
    var name = 'Covalence';
    console.log(name);
}

console.log('Before average function call');
let avg = average(5, 3);
console.log(`Some text ${avg}`)
function average(num1, num2){
    console.log('Inside the average function');
    return num1 + num2 / 2;
}

let fruits = ['apples', 'banana','orange'];
let leastFav = 'mango';
function printFirstFruit(){
    let favFruit = fruits[1];
    console.log(fruits[0]);
    function printFavFruit(){
        console.log(favFruit);
    }
    printFavFruit();
    console.log(leastFav);
}

printFirstFruit();
sayHello();
function sayHello(){
    console.log('Hello');
}

let sayHi = function(){
    console.log('Hi again');
}
sayHi();