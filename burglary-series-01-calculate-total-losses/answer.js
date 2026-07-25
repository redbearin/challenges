calculateLosses = obj => {
  let sum = 0;
  for (key in obj) {
    sum += obj[key];
  }
  if (sum === 0) {
    return "Lucky you!";
  }
  return sum;
}

const obj = {
  tv: 30,
  skate: 20,
  stereo: 50,
};

document.getElementById('ans').textContent = calculateLosses(obj);