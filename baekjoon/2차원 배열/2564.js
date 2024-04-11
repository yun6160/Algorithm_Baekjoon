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
    let answer = 0;
    let paperNumber = input[0];
    const whiteBoard = Array.from(Array(100), () => Array(100).fill(0));
    for (let i = 1; i <= paperNumber; i++) {
        const [x, y] = input[i].split(" ").map(Number);

        for (let j = x; j < x + 10; j++) {
            for (let k = y; k < y + 10; k++) {
                if (whiteBoard[j][k] === 1) continue; //이미 색칠된 부분이면 넘어간다.
                whiteBoard[j][k] = 1;
                answer++;
            }
        }
    }
    return answer;
}
console.log(solution(input));
