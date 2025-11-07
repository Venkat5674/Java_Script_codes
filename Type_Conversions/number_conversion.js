// number_conversion.js

// Converting string to number
let str1 = "50";
let str2 = "10.5";
let str3 = "Hello";

// Using Number()
console.log(Number(str1));  // 50
console.log(Number(str2));  // 10.5
console.log(Number(str3));  // NaN

// Using parseInt() & parseFloat()
console.log(parseInt(str1));   // 50
console.log(parseFloat(str2)); // 10.5

// Boolean to number
console.log(Number(true));  // 1
console.log(Number(false)); // 0
