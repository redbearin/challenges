const pyramidVolume = (length, width, height, units) => {
  let baseVol = length * width * height / 3;
  console.log(units)
  switch(units) {
    case 'millimeters':
      return (baseVol * Math.pow(1000, 3).toFixed(3)) + ' cubic millimeters';
    case 'centimeters': 
      return (baseVol * Math.pow(100, 3)).toFixed(3) + ' cubic centimeters';
    case 'meters':
      return baseVol.toFixed(3)+ ' cubic meters';
    case 'kilometers':
      return (baseVol/Math.pow(1000, 3)).toFixed(3) + ' cubic kilometers';
  }
};

const length = 18;
const width = 412;
const height = 93;

const units = "millimeters";

document.getElementById('ans').textContent = pyramidVolume(length, width, height, units);