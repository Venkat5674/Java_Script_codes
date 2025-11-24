// Normal function
function add(a, b) {
    return a + b;
}

// Arrow function
const addArrow = (a, b) => {
    return a + b;
};

console.log(addArrow(10, 20)); // 30

// One line arrow function (implicit return)
const square = n => n * n;
console.log(square(5)); // 25
