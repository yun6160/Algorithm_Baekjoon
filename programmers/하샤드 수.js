function solution(x) {
  const xSum = x
    .toString()
    .split("")
    .reduce((a, b) => Number(a) + Number(b));
  return x % xSum == 0;
}
