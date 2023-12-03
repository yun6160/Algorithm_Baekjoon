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
//let input = fs.readFileSync(filePath).toString().split(` `).map(function(a) {return +a})
function solution(input) {
    const allSum = input[0];
    let sum = 0;
    for (let i = 2; i < input.length; i++) {
        let [cost, ...ea] = input[i].split(' ');
        sum += cost * ea;
    }
    return Number(allSum) == sum ? 'Yes' : 'No';
}
console.log(solution(input));

//중간에 console.log(sum)하나 있다고 틀렸다고 난리를 쳤다. ㅡㅡ
