// ---------------------------
// VAR - FUNCTION SCOPED
// ---------------------------

// Example 1: Simple var declaration
var name = "Venkatesh";
console.log("Name:", name); // Venkatesh

// We can redeclare var (not recommended in modern JS)
var name = "Krishna";
console.log("New Name:", name); // Krishna

// Example 2: var is function scoped, not block scoped
if (true) {
    var age = 25;
}
console.log("Age:", age); // ✅ 25 (accessible outside block)

// Example 3: Hoisting with var
console.log(city); // ✅ undefined (hoisted)
var city = "Hyderabad";
console.log(city); // Hyderabad

// Example 4: var inside a function
function showVar() {
    var x = 100;
    console.log("Inside function:", x); // 100
}
showVar();
// console.log(x); // ❌ Error: x is not defined (works only inside function)
