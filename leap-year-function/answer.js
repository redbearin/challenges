leapYear = yr => yr % 4 === 0 && yr % 100 !== 0 || yr % 400 === 0;

const yr = 1990;

document.getElementById('ans').textContent = leapYear(yr);