//We’ll use this array:
let arr = ["balayya", "ka paul", "uppal balu", "macha"];

//And this employees array:
let emps = [
    { id: 101, name: "balayya",    sal: 30000 },
    { id: 201, name: "uppal balu", sal: 40000 },
    { id: 301, name: "Aggi Petta macha",      sal: 50000 },
    { id: 401, name: "dhurga",     sal: 60000 },
    { id: 501, name: "ka paul",    sal: 70000 },
    { id: 601, name: "chiru",      sal: 90000 }
];

//forEach – just loop, returns nothing
arr.forEach(function (item, ind, arrayRef) {
    console.log(ind, "=>", item);
});
// 0 => balayya
// 1 => ka paul
// 2 => uppal balu
// 3 => macha

//map – returns a new array
//Example: add 1000 to all employee salaries.
let updatedEmps = emps.map(emp => {
    return {
        ...emp,
        sal: emp.sal + 1000
    };
});

console.log(updatedEmps);

//filter – returns new array with conditions
//Example: find all employees with salary ≥ 50000.
let richEmps = emps.filter(emp => emp.sal >= 50000);
console.log(richEmps);

//find – returns first matching element
//Example: find employee with id = 401.
let emp401 = emps.find(emp => emp.id === 401);
console.log(emp401);
// { id: 401, name: 'dhurga', sal: 60000 }

//reduce – reduce array to single value
//Example: total salary of all employees.
let totalSalary = emps.reduce((acc, emp) => acc + emp.sal, 0);
console.log(totalSalary); // sum of all salaries

