const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

// 입력 파일을 읽고, 각 줄을 공백으로 분리하여 숫자로 변환
const input = fs
    .readFileSync(filePath, "utf-8")
    .trim()
    .split("\n")
    .map((line) => line.split(" ").map(Number));

function solution(input) {
    const xSet = new Set();
    const ySet = new Set();

    input.forEach(([x, y]) => {
        xSet.has(x) ? xSet.delete(x) : xSet.add(x);
        ySet.has(y) ? ySet.delete(y) : ySet.add(y);
    });

    const [answerX] = xSet;
    const [answerY] = ySet;

    return `${answerX} ${answerY}`;
}

console.log(solution(input));
