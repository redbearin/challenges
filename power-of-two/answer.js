powerOfTwo = num => {
  for (let i = 0; i < Infinity; i++) {
    if (Math.pow(2, i) > num)
      return false;
    if (Math.pow(2, i) === num) 
      return true;
  }
}

const num = 18;

document.getElementById('ans').textContent = powerOfTwo(num);