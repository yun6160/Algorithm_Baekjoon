let fs = require(`fs`);
const filePath = process.platform === `linux` ? `/dev/stdin` : `./input.txt`;
// 문자 하나만 입력받을 경우
// let input = fs.readFileSync(filePath).toString().trim()
// 한칸 띄어쓰기로 구분 input[0], input[1] 배열에서 꺼내쓰면 된다.
// let input = fs.readFileSync(filePath).toString().split(` `)
// 줄바꿈으로 구분
let input = fs.readFileSync(filePath).toString().trim().split(`\n`);
// 만약 인풋값이 숫자라면
//let input = fs.readFileSync(filePath).toString().split(` `).map(function(a) {return +a})
function solution(input) {
    let maxNum = 0;
    let maxIdx = [1, 1];
    for (let i = 0; i < input.length; i++) {
        let arr = input[i].split(" ").map(Number);
        if (maxNum < parseInt(Math.max(...arr))) {
            maxIdx = [];
            maxNum = Math.max(...arr);
            maxIdx.push(i + 1);
            maxIdx.push(arr.indexOf(maxNum) + 1);
        }
    }
    let answer = maxNum + "\n" + maxIdx.join(" ");
    return answer;
}
console.log(solution(input));
