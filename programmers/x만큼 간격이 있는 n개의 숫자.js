// 문제 설명
// 함수 solution은 정수 x와 자연수 n을 입력 받아, x부터 시작해 x씩 증가하는 숫자를 n개 지니는 리스트를 리턴해야 합니다. 다음 제한 조건을 보고, 조건을 만족하는 함수, solution을 완성해주세요.

// 제한 조건
// x는 -10000000 이상, 10000000 이하인 정수입니다.
// n은 1000 이하인 자연수입니다.

// 입출력 예
// x	n	answer
// 2	5	[2,4,6,8,10]
// 4	3	[4,8,12]
// -4	2	[-4, -8]

function solution(x, n) {
  let num = x;
  var answer = [num];
  for (let count = 1; count < n; count++) {
    num += x;
    answer.push(num);
  }
  return answer;
}

//다른 사람의 풀이
//n길이의 배열을 만들어주고 fill을 사용해서 길이만큼 x를 채워준다... 그다음 인덱스+1과 x를 곱해서 값을 만들어준다...
function solution(x, n) {
  return Array(n)
    .fill(x)
    .map((v, i) => (i + 1) * v);
}
