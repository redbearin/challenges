takeDownAverage = scores => {
  let sum = 0;
  let len = scores.length;
  for (let i = 0; i < scores.length; i++) {
    sum += +scores[i].slice(0, -1);
  }
  let avg = sum/len;
  return Math.round(((avg - 5) * (len + 1)) - sum) + '%';
}

const scores = ["95%", "83%", "90%", "87%", "88%", "93%"];

document.getElementById('ans').textContent = takeDownAverage(scores);