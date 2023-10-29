function solution(s) {
  let pCount = 0;
  let yCount = 0;
  const arr = s.toLowerCase().split("");
  arr.forEach((v) => {
    if (v == "p") {
      pCount++;
    } else if (v == "y") {
      yCount++;
    }
  });
  return pCount == yCount;
}
