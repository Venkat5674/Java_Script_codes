// ---------------------------
// CONST - BLOCK SCOPED & FIXED VALUE
// ---------------------------

// Example 1: Basic const usage
const country = "India";
console.log(country); // India

// country = "USA"; // ❌ Error: cannot reassign

// Example 2: Block scope
{
    const code = 123;
    console.log("Inside block:", code); // 123
}
// console.log(code); // ❌ Error: code not defined outside block

// Example 3: Must be initialized
// const x; // ❌ Error: missing initializer

// Example 4: Const with objects (allowed to change values)
const student = {
    name: "Venkatesh",
    age: 21
};

student.age = 22;  // ✅ allowed (modifying property)
console.log(student);

// student = {}; // ❌ Error: reassignment not allowed

// Example 5: Const with arrays (values can change)
const numbers = [1, 2, 3];
numbers.push(4); // ✅ allowed
console.log(numbers); // [1, 2, 3, 4]

// numbers = [10, 20]; // ❌ Error: not allowed
