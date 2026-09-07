tempConversion = tempC => {
  const tempF = Math.round((tempC * 9 / 5 + 32)*100)/100;
  const tempK = Math.round((tempC + 273.15)*100)/100;
  if (tempK < 0) {
    return 'Invalid';
  }
  return JSON.stringify([tempF, tempK]);
}

const tempC = 100;

document.getElementById('ans').textContent = tempConversion(tempC);