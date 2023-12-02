let fs = require(`fs`);
const filePath = process.platform === `linux` ? `/dev/stdin` : `./input.txt`;
// 문자 하나만 입력받을 경우
let input = fs.readFileSync(filePath).toString().trim();
// 한칸 띄어쓰기로 구분
// input[0], input[1] 배열에서 꺼내쓰면 된다.
// let input = fs.readFileSync(filePath).toString().split(` `)
// 줄바꿈으로 구분
//let input = fs.readFileSync(filePath).toString().split(`/n`)
// 만약 인풋값이 숫자라면
//let input = fs.readFileSync(filePath).toString().split(` `).map(function(a) {return +a})
function solution(input) {
    let answer = '';
    let sameNum = 0;
    let cnt = 0;
    input.forEach((v, index) => {
        if (index < 2) {
            if (v == input[index + 1]) {
                cnt++;
                sameNum = v;
            }
        } else {
            if (v == input[0]) {
                cnt++;
                sameNum = v;
            }
        }
    });
    if (cnt == 3) {
        answer = 10000 + sameNum * 1000;
    } else if (cnt == 1) {
        answer = 1000 + sameNum * 100;
    } else {
        answer = Math.max(...input) * 100;
    }
    return answer;
}
console.log(solution(input.split(` `)));
