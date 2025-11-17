function counter() {
    let count = 0;

    function increment() {
        count++;
    }

    function decrement() {
        count--;
    }

    function getCount() {
        return count;
    }

    return { increment, decrement, getCount };
}

// Create counter object
const myCounter = counter();

// DOM Elements
const counterDisplay = document.getElementById("counter");
const plusBtn = document.getElementById("plus");
const minusBtn = document.getElementById("minus");

// Update the UI
function updateUI() {
    counterDisplay.textContent = myCounter.getCount();
}

// Event Listeners
plusBtn.addEventListener("click", () => {
    myCounter.increment();
    updateUI();
});

minusBtn.addEventListener("click", () => {
    myCounter.decrement();
    updateUI();
});
