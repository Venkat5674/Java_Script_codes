// Example testing API (fake data):
//https://jsonplaceholder.typicode.com/todos/3

async function getTodo() {
    const API = "https://jsonplaceholder.typicode.com/todos/3";
    const res = await fetch(API);
    const data_1 = await res.json();
    console.log(data_1);
}

getTodo();
