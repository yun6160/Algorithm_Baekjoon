let fs = require(`fs`);
const filePath = process.platform === `linux` ? `/dev/stdin` : `./input.txt`;
// 문자 하나만 입력받을 경우
// let input = fs.readFileSync(filePath).toString()
// 한칸 띄어쓰기로 구분
// input[0], input[1] 배열에서 꺼내쓰면 된다.
// let input = fs.toString().readFileSync(filePath).split(` `)
// 줄바꿈으로 구분
let input = fs.readFileSync(filePath).toString().split(`\n`);
// 만약 인풋값이 숫자라면
// let input = fs.readFileSync(filePath).toString().split(` `).map(function(a) {return +a})

function solution(input) {
  input.pop();
  let answer = "";
  input.forEach((v) => {
    let count = 0;
    if (v !== "#") {
      v.toLowerCase()
        .split("")
        .forEach((i) => {
          ["a", "e", "i", "o", "u"].includes(i) ? count++ : null;
        });
      answer += count + "\n";
    }
  });
  return answer;
}
console.log(solution(input));
