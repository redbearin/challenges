filterPrimes = num => {
  return num.filter(element => {
    if (element < 2)
      return false;
    if (element === 2 || element === 3)
      return true;
    for (let i = 2; i <= Math.sqrt(element); i++) {
      if (element % i === 0)
        return false;
    }
    return true;
  });
}

const num = [1009, 10, 10, 10, 3, 33, 9, 4, 1, 61, 63, 69, 1087, 1091, 1093, 1097];

document.getElementById('ans').textContent = filterPrimes(num);