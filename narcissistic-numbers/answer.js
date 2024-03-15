const isNarcissistic = num => {
  // convert number to string
  const numStr = num.toString();
  let total = 0;
  // take each digit and raise it to power of length
  // and add it to the sum
  for (let i = 0; i < numStr.length; i++) {
    total += Math.pow(+numStr[i], numStr.length);
  }
  if (total === num)
    return true;
  return false;
};

const num = 9;
document.getElementById('ans').textContent = isNarcissistic(num);