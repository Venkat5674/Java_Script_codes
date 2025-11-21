// Indian Mobile Number: Starts with 6-9 and has 10 digits
const mobileRegex = /^[6-9]\d{9}$/;

console.log(mobileRegex.test("9876543210")); // true
console.log(mobileRegex.test("1234567890")); // false
