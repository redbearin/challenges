findLetters = str => {
  const counts = {};
  for (let i = 0; i < str.length; i++) {
    counts[str[i]] ?
    counts[str[i]] += 1:
    counts[str[i]] = 1;
  }
  const countArr = Object.entries(counts);
  countArr.sort((a,b) => a[1] - b[1]);
  const singleLtrs = [];
  for (let i = 0; i < countArr.length; i++) {
    if (countArr[i][1] > 1) {
      break;
    }
    singleLtrs.push(countArr[i][0]);
  }
  return JSON.stringify(singleLtrs);
}

const str = "balloon";

document.getElementById('ans').textContent = findLetters(str);