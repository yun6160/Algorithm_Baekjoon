let fs = require(`fs`);
const filePath = process.platform === `linux` ? `/dev/stdin` : `./input.txt`;
// 문자 하나만 입력받을 경우
// let input = fs.readFileSync(filePath).toString().trim();
// 한칸 띄어쓰기로 구분 input[0], input[1] 배열에서 꺼내쓰면 된다.
// let input = fs.readFileSync(filePath).toString().split(` `)
// 줄바꿈으로 구분
let input = fs.readFileSync(filePath).toString().trim().split(`\n`);
// 만약 인풋값이 숫자라면
// let input = fs.readFileSync(filePath).toString().split(` `).map(function(a) {return +a})
function solution(input) {
    const numberArr = input.map((a) => +a);
    const quarter = 25;
    const dime = 10;
    const nickel = 5;
    const penny = 1;
    let answer = "";
    for (let i = 1; i < numberArr.length; i++) {
        let change = numberArr[i];
        let changeQuarter = Math.floor(change / quarter);
        change %= quarter;
        let changeDime = Math.floor(change / dime);
        change %= dime;
        let changeNickel = Math.floor(change / nickel);
        change %= nickel;
        let changePenny = Math.floor(change / penny);
        answer += `${changeQuarter} ${changeDime} ${changeNickel} ${changePenny}\n`;
    }
    return answer;
}
console.log(solution(input));
