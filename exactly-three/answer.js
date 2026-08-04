isExactlyThree = num => { 
  if (num === 4) {
    return true;
  }
  if (num % 2 === 0 || num === 1) {
    return false;
  }
  else {
    let count = 2; 
    for (let i = 2; i < num; i++) {
      if (num / i < i) {
        if (count === 3) {
          return true;
        }
        return false;
      }
      if (num % i === 0) {
        count++;
      }
      if (count > 3) {
        return false;
      }
    }
  }
}
const num = 27550356289;

document.getElementById('ans').textContent = isExactlyThree(num);