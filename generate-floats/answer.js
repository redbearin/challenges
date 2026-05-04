const genValues = (end, inc) => {
  // array of numbers
  const arr = [];
  // FORMATTING
  // string of the increment
  const incStr = inc.toString();
  // places after the decimal
  let decPlaces = 0;
  // increment is a float
  if (/./.test(incStr)) {
    // count number of digits after decimal
    for (let i = incStr.length - 1; i >= 0; i--) {
      if (incStr[i] === '.')
        break;
      decPlaces++;
    }
  }
  // CALCULATION
  // go increment by increment 
  // until end is reached
  for (let num = 0; num <= end; num += inc) {
    arr.push(num.toFixed(decPlaces));
  }
  return JSON.stringify(arr);
}

const end = 2;
const inc = .25;
document.getElementById('ans').textContent = genValues(end, inc);
