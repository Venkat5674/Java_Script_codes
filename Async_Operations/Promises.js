//Example: Simple Promise
let p = new Promise(function (resolve, reject) {
    let success = true;

    if (success) {
        resolve("Task completed successfully");
    } else {
        reject("Something went wrong");
    }
});

p.then(function (msg) {
    console.log("Success:", msg);
}).catch(function (err) {
    console.log("Error:", err);
});

//Using fetch() with .then() and .catch()
function getData() {
    let API = "https://jsonplaceholder.typicode.com/todos/1";

    // fetch() returns a Promise
    let p = fetch(API);

    p.then(function (res) {
        // res.json() also returns a Promise
        return res.json();
    }).then(function (data) {
        console.log("Data:", data);
    }).catch(function (err) {
        console.log("Error:", err);
    });
}

getData();

//Using async / await (Modern & Clean)
async function getData() {
    try {
        let API = "https://jsonplaceholder.typicode.com/todos";

        // fetch() returns a Promise
        let res = await fetch(API);

        // res.json() also returns a Promise
        let data = await res.json();

        console.log("Data:", data);
    } catch (err) {
        console.log("Error:", err);
    }
}

getData();


//async Function Returning Promise with .then()
async function getData() {
    let API = "https://jsonplaceholder.typicode.com/todos";

    let res = fetch(API)
        .then(res => res.json())
        .then(data => console.log("Data:", data))
        .catch(err => console.log("Error:", err));
}

getData();
