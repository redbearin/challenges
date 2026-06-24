equation = str => {
  let total = 0;
  for (let i = 0; i < str.length; i += 2) {
    if (i === 0 || str[i - 1] === '+') {
      total += +str[i];
    }
    else if (str[i - 1] === '*') {
      total *= +str[i];
    }
    else {
      total -= +str[i];
    }
  }
  return total;
}

const str = "7*4-2";

document.getElementById('ans').textContent = equation(str);