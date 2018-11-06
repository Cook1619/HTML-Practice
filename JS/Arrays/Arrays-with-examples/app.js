//Arrays are 0 indexed
let colors = ['red', 'blue', 'green'];
colors[0] //red
//not to be confused with length
colors.length // 3, so remember the highest index in an array is 1 less than the length of the array

//Arrays most used built in methods
// - push / pop, use push to add to the end of an array, use pop to remove the last item in an array

// - shift / unshift, use unshift to add to the front of the array, use shift to remove the first item of the array

//when you remove elements that can  be stored in a variable for later user example:
let color1 =  colors.pop();//console.log(color1) == 'green'

// - indexOf, takes an arguement, and tries to find it in the array, if its found, it will return the index of that item, if it returns -1 its not present in the array, if there is multiple of the same value it will return the fist instance of the value

// slice, slice is used to copy part of an array, and store is in a variable, slice takes 2 arguments, the first specifies the index where you want to start, and the second number is where it ends, and the ending number is non inclusive, so its always 1 index higher than the value you want example:
let fruits = ['apple', 'orange', 'lemon', 'blueberry', 'mango'];
let citrus = fruits.slice(1,3);
console.log(citrus)//returns an array with [orange, lemon]
//If you want to copy the whole array just don't give it arguements and store it to another variable