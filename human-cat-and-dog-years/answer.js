calculateYears = humYr => {
  const yrs = [1, 15, 15];
  for (let i = 2; i <= humYr; i++) {
    if (i === 2) {
      yrs[0] = 2;
      yrs[1] = 24;
      yrs[2] = 24;
    }
    else {
      yrs[0] = yrs[0] + 1;
      yrs[1] = yrs[1] + 4;
      yrs[2] = yrs[2] + 5;
    }
  }
  return JSON.stringify(yrs);
}
const humYr = 10;

document.getElementById('ans').textContent = calculateYears(humYr);