factFact = num => {
  let outProd = 1;
  let prod
  for (let i = num; i > 1; i--) {
    prod = 1;
    for (let j = i; j > 1; j--) {
      prod *= j;
    }
    outProd *= prod;
  }
  return outProd;
}

const num = 4;

document.getElementById('ans').textContent = factFact(num);