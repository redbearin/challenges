combinations = (k, n) => {
  if (n === k) 
    return 1;
  let nMinusK = n - k;
  let kFactorial = k;
  let nFactorial = n;
  let nMinusKFactorial = nMinusK;
  while (nMinusK > 1) { 
    nMinusK--; 
    nMinusKFactorial = nMinusKFactorial * nMinusK; 
  }
  while (k > 1) { 
    k--; 
    kFactorial = kFactorial * k; 
  }
  while (n > 1) { 
    n--; 
    nFactorial = nFactorial * n; 
  }

  return Math.round(nFactorial/(nMinusKFactorial * kFactorial));
}

const k = 10;
const n = 52;

document.getElementById('ans').textContent = combinations(k, n);