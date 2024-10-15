let fs = require(`fs`);
const filePath = process.platform === `linux` ? `/dev/stdin` : `./input.txt`;
// 문자 하나만 입력받을 경우
// let input = fs.readFileSync(filePath).toString().trim();
// 한칸 띄어쓰기로 구분 input[0], input[1] 배열에서 꺼내쓰면 된다.
// let input = fs.readFileSync(filePath).toString().split(` `)
// 줄바꿈으로 구분
let input = fs.readFileSync(filePath).toString().trim().split(`\n`);
// 만약 인풋값이 숫자라면
//let input = fs.readFileSync(filePath).toString().split(` `).map(function(a) {return +a})
function solution(input) {
    const [a, b] = input.map(Number);
    // 1. 소수 배열 구하기
    let arr = [];
    for (let i = a; i <= b; i++) {
        if (isPrime(i)) arr.push(i);
    }

    if (arr.length) {
        // 2. 소수 합 구하기
        const c = arr.reduce((pre, curr) => pre + curr);
        // 3. 소수 최솟값 구하기
        const d = Math.min(...arr);

        return `${c}\n${d}`;
    } else {
        return -1;
    }
}

function isPrime(num) {
    if (num < 2) return false;

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }

    return true;
}

console.log(solution(input));
