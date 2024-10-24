let fs = require(`fs`);
const filePath = process.platform === `linux` ? `/dev/stdin` : `./input.txt`;
// 문자 하나만 입력받을 경우
// let input = fs.readFileSync(filePath).toString().trim();
// 한칸 띄어쓰기로 구분 input[0], input[1] 배열에서 꺼내쓰면 된다.
// let input = fs.readFileSync(filePath).toString().split(` `)
// 줄바꿈으로 구분
//let input = fs.readFileSync(filePath).toString().trim().split(`\n`)
// 만약 인풋값이 숫자라면
let input = fs
    .readFileSync(filePath)
    .toString()
    .split(` `)
    .map(function (a) {
        return +a;
    });
function solution(input) {
    const [x, y, w, h] = input;
    const arr = [x, y, w - x, h - y];
    return Math.min(...arr);
}
console.log(solution(input));
