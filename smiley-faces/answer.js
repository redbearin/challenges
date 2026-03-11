happinessNumber = (s) => {
  let sum = 0
  for (let i = 1; i < s.length; i++) {
    if (s[i - 1] === ":" && s[i] === ')' ||
        s[i - 1] === "(" && s[i] === ':') {
      sum++;
    }
    if (s[i - 1] === ":" && s[i] === '(' ||
      s[i - 1] === ")" && s[i] === ':') {
        sum--;
    }
  }
  return sum;
}

const s = "::::";

document.getElementById('ans').textContent = happinessNumber(s) 