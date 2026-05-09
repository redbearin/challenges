calcAge = yrs => {
  return yrs * 365;
}

const yrs = 65;

document.getElementById('ans').textContent = calcAge(yrs);