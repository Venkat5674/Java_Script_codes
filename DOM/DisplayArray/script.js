let users = [
    { name: "venkatesh", age: 16 },
    { name: "Lakshmi seshasai", age: 30 },
    { name: "kushyanth", age: 16 },
    { name: "satish", age: 40 },
    { name: "akshay", age: 14 }
];

// Function that runs on button click
function showList() {
    let olItems = "";

    users.forEach((user, index) => {
        olItems += `
            <li>
                <strong>Name:</strong> ${user.name} <br>
                <strong>Age:</strong> ${user.age}
            </li>
        `;
    });

    let orderedList = `
        <ol>
            ${olItems}
        </ol>
    `;

    document.getElementById("ref").innerHTML = orderedList;
}
