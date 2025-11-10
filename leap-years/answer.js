isLeap = year => year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)

const year = 2000;

document.getElementById("ans").textContent = isLeap(year);