rootDigit = num => {
  let value = BigInt(num);
  console.log(value)
  let numStr = BigInt(num).toString();
  console.log(BigInt(num))
  let total;
  while(numStr.length > 1) {
    total = 0;
    for (let i = 0; i < numStr.length; i++) {
      total += +numStr[i];
    }
    strTotal = total.toString();
    console.log(strTotal)
    if(strTotal.length === 1) {
      return strTotal;
    }
    else
      numStr = strTotal;
  }
}

const num = 1238763636555555555555);

document.getElementById('ans').textContent = rootDigit(num);