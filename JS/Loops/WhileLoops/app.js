// //While Loops, printing numbers from 1-5
// let count =  1;
// while(count < 6){
//   console.log(`The count is ${count}`)
//   count++;
// }
// //How to use a while loop, to loop through a string and print out each letter separate
// let str =  "hello";
// //first character is at index 0
// let count1 = 0;
// while(count1 < str.length){
//   console.log(str[count1]);
//   count1++;
// }
//Print all numbers between -10 and 19
// let count = -10;
// while(count <= 19){
//   console.log(count);
//   count++;
// }
//Print all even numbers between 10 and 40
// let count = 10;
// while(count <= 40){
//   if(count % 2 === 0){
//     console.log(count);
//   }
//   count++;
// }
//Print all odd numbers between 300 and 333
// let count = 300;
// while(count <= 333){
//   if(count % 2 !== 0){
//     console.log(count);
//   }
//   count++;
// }
//Print all number divisble by 5 and 3 between 5 and 50
let count =  5;
while(count <= 50){
  if(count % 3 === 0 && count % 5 === 0){
    console.log(count);
  }
  count++;
}