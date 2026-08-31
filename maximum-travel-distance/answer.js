totalDistance = (fuel, fuelUsage, pass, ac) => {
  fuelUsage = fuelUsage * (1 + (.05 * pass));
  if (ac === true) {
    fuelUsage = fuelUsage * 1.10;
  }
  return Number((fuel * 100 / fuelUsage).toFixed(1));
}

const fuel = 36.1;
const fuelUsage = 8.6;
const pass = 3;
const ac = true;


document.getElementById('ans').textContent = totalDistance(fuel, fuelUsage, pass, ac);