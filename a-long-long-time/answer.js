longestTime = (hr, min, sec) => {
  let largestAmt = hr;
  let largestInput = hr;
  if (min / 60 > largestAmt) {
    largestAmt = min / 60;
    largestInput = min;
  }
  if (sec / 60 / 60 > largestAmt)
    return sec;
  return largestInput;
}

const hr = 15;
const min = 955;
const sec = 59400;

document.getElementById('ans').textContent = longestTime(hr, min, sec);