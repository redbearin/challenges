bugger = num => {
  // convert num to string
  let strNum = num.toString();
  let product = 1;
  let count = 0;
  // num is more than one digit
  while (strNum.length > 1) {
    count++;
    // find the new product of the digits
    for (let i = 0; i < strNum.length; i++) {
      product *= +strNum[i];
    }
    // reinitialize
    strNum = product.toString();
    product = 1;
  }
  return count;
}

const num = 4;

document.getElementById('ans').textContent = bugger(num);