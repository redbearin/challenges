isCurzon = num => {
  num = BigInt(num);
  const first = Math.pow(BigInt(2), num) + BigInt(1);
  const second = BigInt(2) * 5 + BigInt(1)
  if (first % second === 0) {
    return true;
  }
  return false;
}

const num = 5;

document.getElementById('ans').textContent = isCurzon(num);