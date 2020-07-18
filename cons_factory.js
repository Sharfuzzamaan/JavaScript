


/* 
    * @Title: Initialize Array - Constructor VS Factory
*/

// Constructor Pattern
const a1 = new Array();
console.log(a1, a1.length);

const a2 = new Array(5);
console.log(a2, a2.length);

const a3 = new Array(1, 2, 3, 4, 5);
console.log(a3, a3.length);



// Factory Pattern

const b1 = new Array();
console.log(b1, b1.length);

const b2 = new Array(5);
console.log(b2, b2.length);

const b3 = new Array(1, 2, 3, 4, 5);
console.log(b3, b3.length);

// কনস্ট্রাক্টর এবং ফ্যাক্টরি প্যাটার্ন একই রকম তার প্রমাণ 
console.log(a1.__proto__.constructor); // প্রডাকশন পারপাস অনলি। 
console.log(b1.__proto__.constructor); // প্রডাকশন পারপাস অনলি। 