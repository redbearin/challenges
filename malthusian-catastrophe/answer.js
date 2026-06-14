malthusian = (foodGrowth, popMult) => {
  let food = 100;
  let pop = 100;
  let years = 0;
  while (food >= pop) {
    years++;
    food += foodGrowth;
    pop *= popMult;
  }
  return years;
}

const foodGrowth = 4255;
const popMult = 1.41;

document.getElementById('ans').textContent = malthusian(foodGrowth, popMult);