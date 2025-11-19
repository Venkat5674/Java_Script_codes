function SumSort(arr, n) {
    function digitSum(num) {
        let sum1 = 0;
        while (num > 0) {
            sum += num % 10;
            num = Math.floor(num / 10);
        }
        return sum;
    }

    arr.sort((a, b) => {
        const sumA = digitSum(a);
        const sumB = digitSum(b);
        if (sumA === sumB) {
            return a - b;
        } else {
            return sumA - sumB;
        }
    });

    console.log(arr.join(""));
}

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];
rl.on("line", function (line) {
    input.push(line.trim());
});

rl.on("close", function () {
    let t = Number(input[0]);
    let line = 1;
    for (let i = 0; i < t; i++) {
        let n = Number(input[line++]);
        let arr = input[line++].split(" ").map(Number);
        SumSort(arr, n);
    }
});
