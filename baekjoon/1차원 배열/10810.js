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
    let arr = new Array(parseInt(n)).fill(0);

    for (let i = 1; i <= m; i++) {
        const [a, b, c] = input[i].split(" ").map(Number);
        arr.fill(c, a - 1, b);
    }

    return arr.join(" ");
}
console.log(solution(input));
