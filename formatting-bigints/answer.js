formatBigInt = (bigNumber, decimals) => {
  const strNum = bigNumber.toString();
  return strNum.slice (0, strNum.length - decimals) + "." + strNum.slice(strNum.length - decimals);
}

const bigNumber = 13902183984901849081284n;
const decimals = 12;

document.getElementById('ans').textContent = formatBigInt(bigNumber, decimals);