numLayers = layers => {
  return .5/1000 * Math.pow(2, layers) + 'm';
}

const layers = 21;

document.getElementById('ans').textContent = numLayers(layers);