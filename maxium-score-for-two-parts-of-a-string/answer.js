maxScore = str => {
  let n = 0
  let bigSum;
  for (let i = 0; i < str.length; i++) {
    console.log('i: ', i)
    sum = 0;
    for (let j = i; j < n; j++) {
      console.log('j: ', j)
      if (str[j] === '0') {
        sum++;
      }
    }
    for (let k = n ; k < str.length; k++) {
      console.log('k: ', k)
      console.log('str[k]: ',  str[k])
      if (str[k] === '1') {
        sum++;
      }
    }
    console.log('sum: ', sum)
    if (sum > bigSum) {
      bigSum = sum;
    }
    console.log()
    n++;
  }
  return bigSum;
}

const str = "00111";

document.getElementById('ans').textContent = maxScore(str);
