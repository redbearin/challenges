inkLevels = obj => {
  let lowest = Infinity;
  for (let key in obj) {
    if (obj[key] < lowest) {
      lowest = obj[key];
    }
  }
  return lowest;
}

const obj = {
  "cyan": 23,
  "magenta": 12,
  "yellow": 10
};

document.getElementById('ans').textContent = inkLevels(obj);