impedanceCalculator = (Dd, Dc, er) => {
  return Math.round((138 * Math.log10(Dd/Dc))/Math.sqrt(er) * 10)/10;
}

const Dd = 4.48
const Dc = 1.33
const er = 2.2

document.getElementById('ans').textContent = impedanceCalculator(Dd, Dc, er);