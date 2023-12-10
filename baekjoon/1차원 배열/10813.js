let fs = require(`fs`);
const filePath = process.platform === `linux` ? `/dev/stdin` : `./input.txt`;
// 문자 하나만 입력받을 경우
// let input = fs.readFileSync(filePath).toString().trim()
// 한칸 띄어쓰기로 구분
// input[0], input[1] 배열에서 꺼내쓰면 된다.
// let input = fs.readFileSync(filePath).toString().split(` `)
// 줄바꿈으로 구분
let input = fs.readFileSync(filePath).toString().trim().split(`\n`);
// 만약 인풋값이 숫자라면
//let input = fs.readFileSync(filePath).toString().split(` `).map(function(a) {return +a})
function solution(input) {
    const [n, m] = input[0].split(" ");
    const arr = [];
    //1. 배열 생성 및 초기화
    for (let i = 1; i <= n; i++) {
        arr.push(i);
    }
    //2. 배열 순서 바꿔주기
    for (let i = 1; i < input.length; i++) {
        const [a, b] = input[i].split(" ");
        const oriA = arr[a - 1];
        const oriB = arr[b - 1];
        arr[a - 1] = oriB;
        arr[b - 1] = oriA;
    }

    return arr.join(" ");
}
console.log(solution(input));
