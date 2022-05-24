fractionHalf = str => {
  const primes = [2,3,5,7,11,13,17,19,23,29];
  const strArr= str.split('/');
  strArr[0] = +strArr[0];
  strArr[1] = +strArr[1] * 2;
  // numerator a 1
  // denominator - numerator = 1
  if (strArr[0] === 1 || strArr[1] - strArr[0] === 1)
    return "" + strArr[0] + "/"  + strArr[1];
  // numerator can be divided into denominator evenly
  if (Number.isInteger(strArr[1]/strArr[0])) 
    return "" + 1 + "/" + strArr[1]/strArr[0];
  // check to see if both num and denom and be divided
  // by a prime
  else {
    for (let i = 0; i < primes.length; i++) {
      if (primes[i] > strArr[0]) 
        return "" + strArr[0] + "/"  + strArr[1];
      if (Number.isInteger(strArr[0]/primes[i]) && 
          Number.isInteger(strArr[1]/primes[i])) {
        strArr[0] = strArr[0]/primes[i];
        strArr[1] = strArr[1]/primes[i];
      }
    }
  }
}
const str = "3/8";
document.getElementById('ans').textContent = fractionHalf(str);