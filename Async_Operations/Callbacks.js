// Example: using a callback
function fetchData(callback) {
    setTimeout(function () {
        const data = { message: "Hello from callback!" };
        callback(data);
    }, 1000);
}

fetchData(function (result) {
    console.log(result.message); // Hello from callback!
});
