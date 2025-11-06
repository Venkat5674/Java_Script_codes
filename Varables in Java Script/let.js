// ---------------------------
// LET - BLOCK SCOPED
// ---------------------------

// Example 1: Basic let usage
let count = 10;
console.log("Count:", count); // 10

// We can reassign, but not redeclare in same block
count = 20; // ✅ allowed
console.log("Updated Count:", count); // 20

// let count = 30; // ❌ Error: redeclaration not allowed

// Example 2: Block scope
if (true) {
    let number = 50;
    console.log("Inside block:", number); // 50
}
// console.log(number); // ❌ Error: number is not defined (block scoped)

// Example 3: Hoisting difference
// console.log(a); // ❌ Error: Cannot access before initialization
let a = 5;
console.log(a); // 5

// Example 4: Using let in loops
for (let i = 1; i <= 3; i++) {
    console.log("Loop:", i);
}
// console.log(i); // ❌ Error: i is block scoped, not available here
