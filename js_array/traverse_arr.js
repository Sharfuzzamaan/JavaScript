/* 
@Title: Traverse Array Elements
*/

const arr = [56,99, 72, 37, 42, 59, 56];

const n = arr[3];
const m = arr[2];
const x = 1, y = 0;

// console.log(m, n, arr[x], arr[x] + arr[y], arr[x + y + 1]);

// Simple Traverse
/* for(let i = 0; i < arr.length; i++){
    console.log(arr[i]);
} */

// Array Sum & Avg
let sum = 0;
for(let i = 0; i < arr.length; i++){
    sum += arr[i];
}
console.log(sum);
console.log(sum / arr.length);



// Find Large Number

let largestNumber = arr[0];
for (let i = 1; i < arr.length; i++){
    if(arr[i] > largestNumber){
        largestNumber = arr[i];
    }
}
console.log(largestNumber);

// Find Small Number

let smallestNumber = arr[0];
for (let i = 1; i < arr.length; i++){
    if(arr[i] < smallestNumber){
        smallestNumber = arr[i];
    }
}
console.log(smallestNumber);