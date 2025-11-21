const urlRegex = /^(https?:\/\/)?([\w-]+\.)+[\w-]{2,}(\/\S*)?$/;

console.log(urlRegex.test("https://google.com")); // true
console.log(urlRegex.test("http:/invalid"));      // false
