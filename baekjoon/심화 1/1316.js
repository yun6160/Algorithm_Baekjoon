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
    let answer = 0;
    let arrStr = input.splice(1, input[0]);
    arrStr.forEach((v) => {
        let isTrue = true;
        for (let i = 0; i < v.length; i++) {
            let lastIndex = v.lastIndexOf(v[i]);
            // 여러번 나온 문자
            if (i !== lastIndex) {
                // 잘라서 이 사이에 다른 문자가 있는지
                let str = v.substring(i + 1, lastIndex);
                if (str.length > 0) {
                    str.split("").forEach((valueStr) => {
                        if (valueStr !== v[i]) {
                            isTrue = false;
                        }
                    });
                }
            }
        }
        isTrue ? answer++ : null;
    });
    return answer;
}
console.log(solution(input));
