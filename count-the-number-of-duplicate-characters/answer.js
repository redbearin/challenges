duplicateCount = str => {
  let num = 0;
  const counts = {};
  for (let i = 0; i < str.length; i++) {
    counts[str[i]] ?
    counts[str[i]] += 1 :
    counts[str[i]] = 1;
  }
  const countsArr = Object.entries(counts);
  countsArr.sort((a,b) => b[1] - a[1]);
  for (let i = 0; i < countsArr.length; i++) {
    if (countsArr[i][1] === 1) {
      break;
    }
    num++;
  }
  return num;
}

const str = "Indivisibilities";

document.getElementById('ans').textContent = duplicateCount(str);