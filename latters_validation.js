const onlyLettersRegex = /^[A-Za-z]+$/;

console.log(onlyLettersRegex.test("Venkatesh")); // true
console.log(onlyLettersRegex.test("Venkatesh123")); // false
