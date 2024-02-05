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
    let allSum = 0;
    let allAvg = 0;
    input.forEach((v) => {
        let [title, score, grade] = v.split(" ");
        const floatScore = parseFloat(score);
        allSum += floatScore;
        if (grade == "A+") {
            allAvg += 4.5 * floatScore;
        } else if (grade == "A0") {
            allAvg += 4.0 * floatScore;
        } else if (grade == "B+") {
            allAvg += 3.5 * floatScore;
        } else if (grade == "B0") {
            allAvg += 3.0 * floatScore;
        } else if (grade == "C+") {
            allAvg += 2.5 * floatScore;
        } else if (grade == "C0") {
            allAvg += 2.0 * floatScore;
        } else if (grade == "D+") {
            allAvg += 1.5 * floatScore;
        } else if (grade == "D0") {
            allAvg += 1.0 * floatScore;
        } else if (grade == "F") {
            allAvg += 0;
        } else {
            allSum -= score;
        }
    });

    let answer = allAvg / allSum;
    return answer;
}
console.log(solution(input));
