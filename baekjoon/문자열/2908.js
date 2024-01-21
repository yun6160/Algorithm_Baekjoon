let fs = require(`fs`);
const filePath = process.platform === `linux` ? `/dev/stdin` : `./input.txt`;
// 문자 하나만 입력받을 경우
// let input = fs.readFileSync(filePath).toString().trim();
// 한칸 띄어쓰기로 구분 input[0], input[1] 배열에서 꺼내쓰면 된다.
let input = fs.readFileSync(filePath).toString().split(` `);
// 줄바꿈으로 구분
//let input = fs.readFileSync(filePath).toString().trim().split(`/n`)
// 만약 인풋값이 숫자라면
//let input = fs.readFileSync(filePath).toString().split(` `).map(function(a) {return +a})
function solution(input) {
    let [a, b] = input;
    let reverseA = parseInt(a.split("").reverse().join(""));
    let reverseB = parseInt(b.split("").reverse().join(""));
    let arr = [reverseA, reverseB].sort();
    return arr[1];
}
console.log(solution(input));
