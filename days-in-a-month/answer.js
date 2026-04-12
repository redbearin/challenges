days = (month, year) => {
  return new Date(year, month, 0).getDate();
}

const month = 2;
const year = 2018;

document.getElementById('ans').textContent = days(month, year);