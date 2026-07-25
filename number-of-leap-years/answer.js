numLeapYears = range => {
  let count = 0;
  const dates = Array.from(range.split('-'), Number);

  for (let i = dates[0]; i <= dates[1]; i++) {
    if (+i % 4 === 0 && +i % 100 !== 0 || i % 400 === 0) {
      count++;
    }
  }
  return count;
}

const range = "1600-2000";

document.getElementById('ans').textContent = numLeapYears(range);