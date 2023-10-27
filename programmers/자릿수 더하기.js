function solution(n) {
  return n
    .toString()
    .split("")
    .reduce((a, b) => Number(a) + Number(b), 0);
  //n+"" 은 .toString()과 같다. 묵시적 형 변환
  //0을 문자열로 변환시 undefined가 뜬다. 그래서 초기값 0을 지정해줌.
}
