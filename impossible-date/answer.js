isValidDate = (day, month, year) => {
  const date = new Date('2022-06-31')
  return date instanceof Date && !isNaN(date);
}

const day = 31;
const month = 6;
const year = 1980;

document.getElementById('ans').textContent = isValidDate(day, month, year);