let fs = require(`fs`);
const filePath = process.platform === `linux` ? `/dev/stdin` : `./input.txt`;
// 문자 하나만 입력받을 경우
// let input = fs.readFileSync(filePath).toString().trim();
// 한칸 띄어쓰기로 구분
// input[0], input[1] 배열에서 꺼내쓰면 된다.
// let input = fs.readFileSync(filePath).toString().split(` `)
// 줄바꿈으로 구분
let input = fs.readFileSync(filePath).toString().trim().split(`\n`);
// 만약 인풋값이 숫자라면
// let input = fs
//     .readFileSync(filePath)
//     .toString()
//     .split(` `)
//     .map(function (a) {
//         return +a;
//     });
function solution(input) {
    const [n, m] = input[0].split(" ");
    const arr = [];
    //1차 배열 만들기
    for (let i = 0; i < n; i++) {
        arr.push(i + 1);
    }
    //잘라서 뒤집기
    for (let i = 1; i <= m; i++) {
        const [a, b] = input[i].split(" ");
        let newArr = [];
        for (let j = a - 1; j < b; j++) {
            newArr.push(arr[j]);
        }
        newArr.reverse();
        arr.splice(a - 1, b - a + 1, ...newArr); //전개연산자를 사용하게 되면 [a,b,c] 배열 내부의 요소 하나하나가 삽입이 된다.
    }
    return arr.join(" ");
}
console.log(solution(input));
