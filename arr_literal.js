

// Array Literal 
 

const arr = [];

arr[0] = 1;
arr[1] = 2;
arr[2] = 3;
arr[99] = 100;
console.log(arr.length);
console.log(arr);


// Lenth = LastIndex + 1
// LastIndex = Length - 1


const names = [
    'Wakil',
    'Sajeeb',
    'Sharfuzzaman',
    'Mr. Late',
    'Akhlas'
];

// names[4] = "Rustam Ali"
names[names.length] = 'Rustam Ali'
console.log(names);

console.log(names.length)