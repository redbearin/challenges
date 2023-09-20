isAutomorphic = num => {
  const numLen = num.toString().length;
  // square the number and take the last num of digits that
  // math length of number
  const lastDig = Math.pow(num, 2).toString().slice(-numLen);
  // last digits are the same as num
  if (lastDig === num.toString())
    return true;
  return false;
}

const num = 5;

document.getElementById('ans').textContent = isAutomorphic(num);
