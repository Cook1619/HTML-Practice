//For loops!!
// for(initializer, condition, step){
//   run some code
// }
// Printing each character in a string using a for loop
// let str =  "hello";
// for(let i = 0; i < str.length; i++){
//   console.log(str[i]);
// }
console.log('Print all number between -10 and 19');
for(let i = -10; i <= 19; i++){
  console.log(i);
}
console.log('Print all evens numbers between 10 and 40');
for(let i = 10; i <= 40; i += 2){
  console.log(i);
}
console.log('Print all odd numbers between 300 and 333');
for(let i = 300; i <= 333; i++){
  if(i % 2 !== 0){
    console.log(i);
  }
}
console.log('Print all numbers divisble by 5 and 3 between 5 and 50');
for(let i = 5; i <= 50; i ++){
  if(i % 5 === 0 && i % 3 === 0){
    console.log(i);
  }
}