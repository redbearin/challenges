highLow = str => {
  const strArr = str.split(' ');
  const sorted = strArr.sort((a,b) => a-b);
  return sorted[sorted.length - 1] + ' ' + sorted[0];
}

const str = "1 2 3 4 -5";

document.getElementById('ans').textContent = highLow(str);