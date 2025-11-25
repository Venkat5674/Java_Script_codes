//Merge Arrays

let arr1 = [1, 2, 3, 4, 5];
let arr2 = [6, 7, 8, 9];

let arr3 = [...arr1, ...arr2];

console.log(arr3); // [1, 2, 3, 4, 5, 6, 7, 8, 9]

//Shallow cloning (copy array)
let a1 = [1, 2, 3, 4, 5];
let a2 = [...a1]; // new array copy

a2[0] = 10;

console.log(a1); // [1, 2, 3, 4, 5]
console.log(a2); // [10, 2, 3, 4, 5]

//Deep Cloning (basic way using JSON)
// Deep cloning
let obj1 = {
    name: "balayya",
    age: 16,
    marks: {
        phy: 100,
        chem: 99
    }
};

let str = JSON.stringify(obj1); // convert object to string
let obj2 = JSON.parse(str);     // convert string back to new object

obj2.marks.phy = 80;
obj2.name = "chiru";

console.log(obj1);
// { name: 'balayya', age: 16, marks: { phy: 100, chem: 99 } }

console.log(obj2);
// { name: 'chiru', age: 16, marks: { phy: 80, chem: 99 } }

//Rest Operator – Function Parameters
function add(...nums) {
    console.log(nums);
    let sum = nums.reduce((acc, val) => acc + val, 0);
    console.log("Sum:", sum);
}

add(10, 20, 30, 10, 45, 6, 4, 3, 5, 6);
// [10, 20, 30, 10, 45, 6, 4, 3, 5, 6]
// Sum: 139
