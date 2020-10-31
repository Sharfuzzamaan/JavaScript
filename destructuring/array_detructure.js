

// array destructuring

var numbers = [1, 2, [3, 100, 500], 4, 6];


//var [a, b] = numbers;
/* 
    আচ্ছা এখন যদি 2 কে a এর মাঝে এবং 6 কে b এর মাঝে এসাইন করতে চাই। কিভাবে করতে পারি আমরা।  নিচের উদহারন
*/

var [,a,,,b] = numbers; // সিংগেল এরে।
var [,,[,c,d]] = numbers; // নেস্টেড এ্যারে। 
console.log(a, b);
console.log(c, d);


/* ভ্যালু সোয়াপিং টাও ডিসট্রাকচারের মাধ্যমে খুবই সহজে করা সম্ভব */

var a =1; 
var b = 2;

// the old way

/* var temp = a;
a = b;
b = temp;

console.log(a, b); */

// New way

[b, a] = [a, b]

console.log(a, b)