freeThrows = (percentage, timesInRow) => {
  return (Math.round(Math.pow(+(percentage.slice(0, -1))/100, timesInRow) * 100)).toString() + '%';
}

const percentage = "75%";
const timesInRow = 5;

document.getElementById('ans').textContent = freeThrows(percentage, timesInRow);