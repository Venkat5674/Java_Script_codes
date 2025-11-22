const onlyNumbersRegex = /^\d+$/;

console.log(onlyNumbersRegex.test("123456")); // true
console.log(onlyNumbersRegex.test("123abc")); // false
