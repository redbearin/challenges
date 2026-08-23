lemonade = bills => {
  let fiveCount = 0;
  let tenCount = 0;
  for (let i = 0; i < bills.length; i++) {
    if (bills[i] === 5) {
      fiveCount++;
    }
    if (bills[i] === 10) {
      tenCount++;
      fiveCount--;
      if (fiveCount < 0)
        return false;
    }
    if (bills[i] === 20) {
      if (tenCount) {
        tenCount--;
        fiveCount--;
      }
      else {
        fiveCount -= 2;
      }
      if (fiveCount < 0)
        return false;
    }

  }
  return true;
}

const bills = [5, 5, 10, 10, 20];

document.getElementById('ans').textContent = lemonade(bills);