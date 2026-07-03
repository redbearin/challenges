calculateScores = str => {
  const result = [0,0,0];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "A") {
      result[0]++;
    }
    if (str[i] === "B") {
      result[1]++;
    }
    if (str[i] === "C") {
      result[2]++;
    }
  }
  return JSON.stringify(result);
}

const str = "ABCBACC";

document.getElementById('ans').textContent = calculateScores(str);