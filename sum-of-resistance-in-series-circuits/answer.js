seriesResistance = arr => {
  const sum = arr.reduce((acc, val) => acc + val);
  return sum <= 1 ?
  sum + ' ohm':
  sum + ' ohms';
}

const arr = [1, 5, 6, 3];

document.getElementById('ans').textContent = seriesResistance(arr);