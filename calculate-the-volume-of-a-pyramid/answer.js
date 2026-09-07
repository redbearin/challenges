pyramidVolume = (length, width, height, units) => {
  const volMtrs = length * width * height / 3;
  switch (units) {
    case 'millimeters':
      return (volMtrs * 1000000000).toFixed(3) + ' cubic ' + units;
    case 'centimeters':
      return (volMtrs * 1000000).toFixed(3) + ' cubic '  + units;
    case 'kilometers':
      return (volMtrs / 1000000000).toFixed(3) + ' cubic ' + units;
    default:
      return volMtrs.toFixed(3) + ' cubic ' + units;
  }
}

const length = 4;
const width = 6;
const height = 20;
const units = 'centimeters';

document.getElementById('ans').textContent = pyramidVolume(length, width, height, units);