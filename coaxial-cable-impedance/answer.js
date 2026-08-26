impedanceCalculator = (Dd, Dc, er) => {
  return Math.round((138 * Math.log10(Dd/Dc))/Math.sqrt(er) * 10)/10;
}

const Dd = 20.7
const Dc = 2
const er = 4

document.getElementById('ans').textContent = impedanceCalculator(Dd, Dc, er);