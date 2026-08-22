persistence = num => {
  let strNum = num.toString();
  let steps = 0;
  let product;
  while (strNum.length > 1) {
    steps++;
    product = 1;
    for (let i = 0; i < strNum.length; i++) {
      product *= +strNum[i];
    }
    strNum = product.toString();
  }
  return steps;
}
const num = 678852;

document.getElementById('ans').textContent = persistence(num);