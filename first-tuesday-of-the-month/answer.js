firstTuesdayOfTheMonth = (yr, mo) => {
  mo = mo - 1;
  const date = new Date(yr, mo, 1);
  const daysTilTues = (9 - date.getDay()) % 7;
  date.setDate(1 + daysTilTues);
  return date.toISOString().split('T')[0];
}

const yr = 1997;
const mo = 1;

document.getElementById('ans').textContent = firstTuesdayOfTheMonth(yr, mo);