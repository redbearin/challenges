bugger = num => {
  let numStr = num.toString();
  let product;
  let count = 0;
  while (numStr.length > 1) {
    product = 1;
    count++;
    for (let i = 0; i < numStr.length; i++) {
      product *= +numStr[i];
    }
    if (product < 10) {
      return count;
    }
    else {
      numStr = product.toString();
    }
  } 
  return count;
}

const num = 4;

document.getElementById('ans').textContent = bugger(num);