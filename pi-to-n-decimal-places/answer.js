myPi = n => {
  return Math.round(Math.PI * Math.pow(10, n))/ Math.pow(10, n)
}

const n = 15;

document.getElementById('ans').textContent = myPi(n);