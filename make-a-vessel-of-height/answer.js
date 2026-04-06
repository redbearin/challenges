heightNeeded = vol => {
  return Math.round(vol * 1000 /(1/3 * Math.pow(5, 2) * Math.PI) * 100) / 100;
}

const vol = 0.5;

document.getElementById('ans').textContent = heightNeeded(vol);