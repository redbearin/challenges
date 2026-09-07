resistanceCalculator = (resistors) => {
  let par = 0;
  let series = 0;
  for (let i = 0; i < resistors.length; i++) {
    par += 1/resistors[i];
    series += resistors[i];
  }
  return JSON.stringify([Math.round(1/par * 100)/100, Math.round(series * 100)/100]);
}

const resistors = [10, 20, 30, 40, 50]

document.getElementById('ans').textContent = resistanceCalculator(resistors);