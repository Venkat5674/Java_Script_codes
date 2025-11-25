//Promise = object representing future result (success or failure).
// Create a promise
const myPromise = new Promise((resolve, reject) => {
    let success = true;

    setTimeout(() => {
        if (success) {
            resolve("Task completed!");
        } else {
            reject("Something went wrong!");
        }
    }, 1000);
});

// Use the promise
myPromise
    .then(result => {
        console.log("Success:", result);
    })
    .catch(error => {
        console.log("Error:", error);
    });

//Using async / await

function getData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data loaded");
        }, 1000);
    });
}

async function showData() {
    console.log("Waiting for data...");
    const data = await getData();
    console.log(data); // "Data loaded"
}

showData();
