let count = 1;
count = 2; // ✅ allowed
console.log(count); // 2

if (true) {
    let msg = "Inside block";
    console.log(msg); // "Inside block"
}
// console.log(msg); // ❌ Error: msg is not defined
