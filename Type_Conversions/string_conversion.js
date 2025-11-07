// string_conversion.js

// Converting numbers and booleans to string
let num = 100;
let bool = true;

// Using String()
console.log(String(num));   // "100"
console.log(String(bool));  // "true"

// Using toString()
console.log(num.toString());  // "100"

// Automatic conversion during concatenation
let result = 50 + " apples";
console.log(result);  // "50 apples"
