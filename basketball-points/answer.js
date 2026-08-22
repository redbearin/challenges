points = (twoPt, threePt) => {
  return twoPt * 2 + threePt * 3;
}
const twoPt = 7;
const threePt = 5;

document.getElementById('ans').textContent = points(twoPt, threePt);