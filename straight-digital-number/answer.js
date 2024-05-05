straightDigital = num => {
  if (num < 100) {
    return "Not Straight";
  }
  const numStr = num.toString();
  let inc = +numStr[1] - +numStr[0];
  let diff;
  for (let i = 2; i < numStr.length; i++) {
    diff = +numStr[i] - numStr[i - 1];
    if (diff !== inc) {
      return "Not Straight";
    }
  }
  if (inc === 0) {
    return "Trivial Straight";
  }
  return inc;
}

const num = 123;

document.getElementById('ans').textContent = straightDigital(num);