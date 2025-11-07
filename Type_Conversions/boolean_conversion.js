// boolean_conversion.js

// Truthy values → true
console.log(Boolean(1));        // true
console.log(Boolean("Hello"));  // true
console.log(Boolean(5.5));      // true
console.log(Boolean([]));       // true
console.log(Boolean({}));       // true

// Falsy values → false
console.log(Boolean(0));        // false
console.log(Boolean(""));       // false
console.log(Boolean(null));     // false
console.log(Boolean(undefined));// false
console.log(Boolean(NaN));      // false
