cars = (wheels, bodies, figures) => {
  const sortArr = [wheels/4, bodies, figures/2].sort((a,b) => a-b);
  return sortArr[0] >=1 ? sortArr[0] : 0;
}

const wheels = 2;
const bodies = 48;
const figures = 76;

document.getElementById('ans').textContent = cars(wheels, bodies, figures);