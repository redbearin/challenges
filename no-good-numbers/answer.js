howBad = num => {
  const numBin = num.toString(2);
  let sumBinDigits = 0;
  for (let i = 0; i < numBin.length; i++) {
    sumBinDigits += +numBin[i];
  }

  const characteristics = [];
  if (sumBinDigits % 2 === 0) {
    characteristics.push("Evil");
  }
  if (sumBinDigits % 2) {
    characteristics.push("Odious");
    if (sumBinDigits === 1) {
      return JSON.stringify(characteristics);
    }
  }
  for (let i = 2; i <= Math.sqrt(sumBinDigits); i++) {
      if (sumBinDigits % i === 0) {
        return JSON.stringify(characteristics);
      }
    }
  characteristics.push("Pernicious");
  return JSON.stringify(characteristics);
}

const num = 128;

document.getElementById('ans').textContent = howBad(num);