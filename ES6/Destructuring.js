//Array Destructuring

let arr = ["balayya", 16];

// Traditional:
// let name = arr[0];
// let age = arr[1];

// Destructuring:
let [name, age] = arr;

console.log(name, age); // balayya 16


//Object Destructuring
let obj = {
    name: "balayya",
    age: 16
};

let { name: studentName, age: studentAge } = obj;
// Renamed variables: studentName, studentAge

console.log(studentName, studentAge); // balayya 16

// Or same names:
let { name, age } = obj;
console.log(name, age); // balayya 16
