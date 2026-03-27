charAppears = (str, ltr) => {
  const strArr = str.toLowerCase().split(' ');
  const counts = [];
  let count;
  for (let i = 0; i < strArr.length; i++) {
    count = 0;
    if (strArr[i].includes(ltr)) {
      for (let j = 0; j < strArr[i].length; j++) {
        if (strArr[i][j] === ltr) {
          count++;
        }
      }
    }
    counts.push(count);
  }
  return JSON.stringify(counts);
}

const str = "She sells sea shells by the seashore.";
const ltr = "s";

document.getElementById('ans').textContent = charAppears(str, ltr);