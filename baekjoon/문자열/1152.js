let input = require(`fs`)
  .readFileSync(`input.txt`)
  .toString()
  .trim()
  .split(` `);
// let input = require(`fs`).readFileSync(`/dev/stdin`).toString().split(` `);
function solution(input) {
  let answer = 0;
  input == "" ? (answer = 0) : (answer = input.length);
  return answer;
}
console.log(solution(input));
