mean = num => {
  const numStr = num.toString();
  let sum = 0;
  // go digit by digit
  for (let i =0; i < numStr.length; i++) {
    // add digit to sum
    sum += +numStr[i];
  }
  return sum / numStr.length;
}

const num = 12345;

document.getElementById('ans').textContent = mean(num);