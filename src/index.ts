console.log('test')
// Homework Exercises

// 1. For each of these values, what type will the TypeScript compiler infer?
let a = 118;
// A: number

let b = 'Thieves';
// A: string

let c = [true, false, false];
// A: boolean[]

let d = {age: 3};
// A: { age: number }

let e = [3]
// A: number[]

let f;
// A: any

let g = []
// A: any[]



// 2. What are the compilation errors in each of the following code snippets?
let song: {
    title: string,
    releaseYear?: number,
} = {
    title: 'Lose Yourself'
};
// A: a type was defined for the releaseYear value but releaseYear wasn't defined or instantiated in the object itself.
// I made releaseYear optional by adding a "?" after the key name. You could also add a key-value pair to the actual
// object like this => releaseYear: 2020

let prices = [100, 200, 300];
prices[0] = 150;
// A: The problem here is that the array prices was initialized with numbers as its values so when we try to change the
// value of the first value from a number (100) to a string ('$100'), we get an error because '$100' is not a number.
// My solution was to change '$100' to a number.

function myFunc(a: number, b: number): number {
    let sum = a + b
    sum += 2
    return 3
}
// A: When you specify the type of return value for a function, it has to return a value of that type. So here, when
// we put number as our return type but don't actually have a return statement returning a number, we get an error. To
// solve this, I added a return statement returning a number. I added lines 47 and 48 because I have noUnusedParameters
// turned on in my tsconfig.json file, therefore, I have to use parameters that are defined for my functions.





// CodeWars

// Problem #1 - Building a Calculator
// https://www.codewars.com/kata/529f2d1c403a58f660000656

// Solution:
// var Calculator = {
//     add(num1, num2){
//       return num1 + num2
//     },
    
//     subtract(num1, num2){
//       return num1 - num2
//     },
  
//     multiply(num1, num2){
//       return num1 * num2
//     },
  
//     divide(num1, num2){
//       if (num2 == 0) {
//         return false
//       }
//       return num1 / num2
//     }
//   };



// Problem #2 - Mumbling
// https://www.codewars.com/kata/5667e8f4e3f572a8f2000039

// Solution:
// function accum(s) {
// 	let char_arr = [];
  
//   for (let char of s) {
//     char_arr.push(char.toUpperCase());
//   }
//   console.log(char_arr)
//   for (let i = 0; i < char_arr.length; i++) {
//     char_arr[i] += char_arr[i].toLowerCase().repeat(i)
//   }

//   return char_arr.join("-")
// }