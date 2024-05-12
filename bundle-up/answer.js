calcBundledTemp = (layers, temp) => {
  let numTemp = +temp.slice(0, -2);
  for (let i = 0; i < layers; i++) {
    numTemp = numTemp * 0.1 + numTemp;
  }
  return numTemp.toFixed(1) + temp.slice(-2);
}

const layers = 4;
const temp = "6*C"

document.getElementById('ans').textContent = calcBundledTemp(layers, temp);