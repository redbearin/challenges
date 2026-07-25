areaShape = (base, height, shape) => 
  shape === "triangle" ? 
  base * height / 2 :
  base * height;

const base = 2.9;
const height = 1.3;
const shape = "parallelogram";

document.getElementById('ans').textContent = areaShape(base, height, shape);