
// Synchronous Programming Example one complete then go for another
// Javascript is single threaded
// JavaScript is single threded and asynchronous in nature

// console.log(1);
setTimeout(() => {
    // console.log(2)
}, 2000);

// console.log(getNumber([2, 3, 4, 5]));
getNumber([3, 32, 35], function(numbers) {
    // console.log(numbers);
})
// console.log(3);

//callback function
//Promise API
//Async await -behind the scene works with promise

//Callback Function
function getNumber(numbers, callback) {
    setTimeout(() => {
        callback(numbers);
    }, 2000);
    
}