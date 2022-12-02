convert = temp => {
  const tempArr = temp.split('°');
  if (tempArr.length === 1 || tempArr[1]=== '')
    return 'Error'
  // convert °F to °C
  if (tempArr[1] === 'F')
    return Math.round((tempArr[0] - 32) * 5/9) + '°C';
  // convert °C to °F
  if (tempArr[1] === 'C') 
    return Math.round(((tempArr[0] * 9/5) + 32)) + '°F';
}

const temp = "33";

document.getElementById('ans').textContent = convert(temp);

