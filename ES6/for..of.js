const arr = ["balayya", "ka paul", "uppal balu"];

for (const item of arr) {
    console.log(item);
}
// balayya
// ka paul
// uppal balu

//for...in → keys/index (objects, arrays)

const obj = { name: "balayya", age: 16 };

for (const key in obj) {
    console.log(key, "=>", obj[key]);
}
// name => balayya
// age => 16
