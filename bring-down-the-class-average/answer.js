takeDownAverage = scores => {
  const sumScores = scores.reduce((acc, val) => acc + +(val.slice(0,-1)), 0);
  const numScores = scores.length;
  return Math.round((sumScores/numScores - 5) *(numScores + 1) - sumScores) + "%";
}
const scores = ["95%", "83%", "90%", "87%", "88%", "93%"];

document.getElementById('ans').textContent = takeDownAverage(scores);