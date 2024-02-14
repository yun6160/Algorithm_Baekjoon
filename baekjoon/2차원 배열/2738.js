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
    const [N, M] = input[0].split(" ");
    const arrA = [];
    const arrB = [];

    for (let i = 1; i < input.length; i++) {
        if (i <= parseInt(N)) {
            arrA.push(input[i].split(" ").map(Number));
        } else {
            arrB.push(input[i].split(" ").map(Number));
        }
    }

    let answer = "";

    for (let i = 0; i < parseInt(N); i++) {
        let newArr = "";
        for (let j = 0; j < parseInt(M); j++) {
            const index = arrA[i][j] + arrB[i][j];
            newArr += index + " ";
        }
        answer += newArr + "\n";
    }
    return answer;
}
console.log(solution(input));
