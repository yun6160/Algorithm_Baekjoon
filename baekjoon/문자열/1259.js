let input = require(`fs`)
  .readFileSync(`./input.txt`)
  .toString()
  .trim()
  .split("\n");
//let input = require(`fs`).readFileSync(`/dev/stdin`).toString().trim().split(`n`);
input.forEach((v) => {
  if (v !== "0") {
    const reversStr = v.split("").reverse().join("");
    console.log(v == reversStr ? "yes" : "no");
  }
});
