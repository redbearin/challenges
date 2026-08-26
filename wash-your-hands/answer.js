washHands = (timesPerDay, months) => {
  const minutes = Math.floor(timesPerDay * 21 * 30 * months / 60);
  const seconds = timesPerDay * 21 * 30 * months % 60;
  return minutes + " minutes and " + seconds + " seconds"
}

const timesPerDay = 7;
const months = 9;

document.getElementById('ans').textContent = washHands(timesPerDay, months);

