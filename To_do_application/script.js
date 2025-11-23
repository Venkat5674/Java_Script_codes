// ---------- REGEX PATTERNS ----------

// Phone: must start with 6-9 and have total 10 digits
const phonePattern = /^[6-9][0-9]{9}$/;

// Email
const emailPattern = /^[a-z][a-z0-9.]{3,64}@[a-z]{1,10}[.][a-z]{2,5}$/;

// Password: at least 1 upper, 1 lower, 1 digit, 1 special, length 6–100
const passwordPattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,100}$/;


// Wait for DOM to load
window.addEventListener("DOMContentLoaded", function () {
    const registerForm = document.getElementById("registerForm");
    const todoForm = document.getElementById("todoForm");
    const taskList = document.getElementById("taskList");

    registerForm.addEventListener("submit", handleRegister);
    todoForm.addEventListener("submit", handleAddTask);

    // Event delegation for Complete / Edit / Delete buttons
    taskList.addEventListener("click", handleTaskActions);
});


// --------------- FORM VALIDATION ---------------

function handleRegister(e) {
    e.preventDefault();

    const allForms = document.forms;
    const myForm = allForms.registerForm || document.getElementById("registerForm");

    const inputs = document.getElementsByTagName("input");

    // Clear old error styles
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].classList.remove("error");
    }
    clearErrorTexts();

    let nameElem = myForm.name;
    let emailElem = myForm.email;
    let phNoElem = myForm.phno;
    let passwordElem = myForm.password;

    let isValid = true;

    // Name validation
    if (!nameElem.value.trim() || nameElem.value.trim().length < 3) {
        showError(nameElem, "nameError", "Name must be at least 3 characters");
        isValid = false;
    }

    // Email validation
    if (!emailPattern.test(emailElem.value.trim())) {
        showError(emailElem, "emailError", "Enter a valid email like abc.123@abc.com");
        isValid = false;
    }

    // Phone validation
    if (!phonePattern.test(phNoElem.value.trim())) {
        showError(phNoElem, "phnoError", "Enter valid phone (10 digits, start with 6-9)");
        isValid = false;
    }

    // Password validation
    if (!passwordPattern.test(passwordElem.value.trim())) {
        showError(
            passwordElem,
            "passwordError",
            "Password must have A-Z, a-z, 0-9, special (!@#$%^&*), min 6 chars"
        );
        isValid = false;
    }

    if (!isValid) {
        return;
    }

    const userObj = {
        name: nameElem.value.trim(),
        email: emailElem.value.trim(),
        phno: phNoElem.value.trim()
    };

    console.log("Registration success:", userObj);

    // Show todo section
    document.getElementById("register-section").classList.add("hidden");
    document.getElementById("todo-section").classList.remove("hidden");
}


// Show error helper
function showError(inputElem, errorId, message) {
    inputElem.classList.add("error");
    const errorSpan = document.getElementById(errorId);
    errorSpan.textContent = message;
}

// Clear all small error texts
function clearErrorTexts() {
    const errorTexts = document.getElementsByClassName("error-text");
    for (let i = 0; i < errorTexts.length; i++) {
        errorTexts[i].textContent = "";
    }
}

// Called from HTML: oninput="removeError(event)"
function removeError(event) {
    event.target.classList.remove("error");
    const id = event.target.id + "Error";
    const small = document.getElementById(id);
    if (small) small.textContent = "";
}


// --------------- TODO LIST LOGIC ---------------

function handleAddTask(e) {
    e.preventDefault();

    // Task text
    const taskInput = document.querySelector('.todo-form input[name="task"]');
    const hourSelect = document.getElementById("taskHour");
    const minuteSelect = document.getElementById("taskMinute");
    const periodSelect = document.getElementById("taskPeriod");

    const taskText = taskInput.value.trim();
    const hour = hourSelect.value;
    const minute = minuteSelect.value;
    const period = periodSelect.value;

    if (!taskText) {
        alert("Please enter a task");
        return;
    }

    if (!hour || !minute || !period) {
        alert("Please select time (hour, minute, AM/PM)");
        return;
    }

    const displayTime = `${hour.padStart(2, "0")}:${minute.padStart(2, "0")} ${period}`;

    addTaskToList(taskText, displayTime);

    // Clear fields
    taskInput.value = "";
    hourSelect.value = "";
    minuteSelect.value = "";
    periodSelect.value = "AM";

    updateTaskCount();
}

function addTaskToList(taskText, displayTime) {
    const taskList = document.getElementById("taskList");

    const li = document.createElement("li");
    li.classList.add("task-item");

    // Top row: text + time
    const mainDiv = document.createElement("div");
    mainDiv.classList.add("task-main");

    const spanText = document.createElement("span");
    spanText.classList.add("task-text");
    spanText.textContent = taskText;

    const spanTime = document.createElement("span");
    spanTime.classList.add("task-time");
    spanTime.textContent = `⏰ ${displayTime}`;

    mainDiv.appendChild(spanText);
    mainDiv.appendChild(spanTime);

    // Buttons
    const btnContainer = document.createElement("div");
    btnContainer.classList.add("task-buttons");

    const completeBtn = document.createElement("button");
    completeBtn.textContent = "Complete";
    completeBtn.setAttribute("data-action", "complete");

    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.setAttribute("data-action", "edit");

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.setAttribute("data-action", "delete");

    btnContainer.appendChild(completeBtn);
    btnContainer.appendChild(editBtn);
    btnContainer.appendChild(deleteBtn);

    li.appendChild(mainDiv);
    li.appendChild(btnContainer);

    taskList.appendChild(li);
}

// Handle click on Complete / Edit / Delete using event delegation
function handleTaskActions(e) {
    const action = e.target.getAttribute("data-action");
    if (!action) return;

    const li = e.target.closest(".task-item");
    if (!li) return;

    if (action === "complete") {
        li.classList.toggle("completed");
    } else if (action === "delete") {
        li.remove();
    } else if (action === "edit") {
        editTask(li);
    }

    updateTaskCount();
}

function editTask(li) {
    const textSpan = li.querySelector(".task-text");
    const timeSpan = li.querySelector(".task-time");

    const currentText = textSpan.textContent;
    const currentTime = timeSpan
        ? timeSpan.textContent.replace("⏰ ", "")
        : "";

    const newText = prompt("Edit task text:", currentText);
    if (newText === null || newText.trim() === "") {
        return; // user cancelled or empty
    }

    const newTime = prompt("Edit time (e.g. 10:30 AM):", currentTime);
    if (newTime === null || newTime.trim() === "") {
        return;
    }

    textSpan.textContent = newText.trim();
    timeSpan.textContent = `⏰ ${newTime.trim()}`;
}

function updateTaskCount() {
    const totalTasks = document.getElementsByClassName("task-item").length;
    const completedTasks = document.querySelectorAll(".task-item.completed").length;

    document.getElementById("taskCount").textContent = totalTasks;
    document.getElementById("completedCount").textContent = completedTasks;
}
