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
    const numArr = input[1].split(` `).map((a) => +a);
    let answer = 0;
    numArr.forEach((value) => {
        if (isPrime(value)) {
            answer++;
        }
    });
    return answer;
}

// 소수인지 확인하는 함수 1이랑 자기자신 외에 나누어지면 안됨
function isPrime(num) {
    // 2보다 작은 숫자는 소수가 아니므로 false 반환
    if (num < 2) return false;

    // 2부터 num의 제곱근까지의 숫자로 나누어 떨어지는지 확인
    for (let i = 2; i <= Math.sqrt(num); i++) {
        // num이 i로 나누어 떨어지면 소수가 아니므로 false 반환
        console.log("num", num);
        console.log(Math.sqrt(num));
        if (num % i === 0) return false;
    }

    // 위 조건을 모두 통과하면 num은 소수이므로 true 반환
    return true;
}

console.log(solution(input));
