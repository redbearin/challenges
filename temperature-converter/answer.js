convert = temp => {
  const tempArr = temp.split('°');
  if (tempArr.length === 2 ) {
    return tempArr[1] === 'C' ?
      Math.round(+tempArr[0] * 9 / 5 + 32) + "°F" :
      Math.round((+tempArr[0] - 32) * 5 / 9) + "°C";
  }
  return "Error";
}

const temp = "35°C";

document.getElementById('ans').textContent = convert(temp);
