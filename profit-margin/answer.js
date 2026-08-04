profitMargin = (base, sales) => Number.parseFloat(((sales - base) / base * 1000)/10).toFixed(1) + "%";

const base = 33;
const sales = 33;

document.getElementById('ans').textContent = profitMargin(base, sales);