
// return gcd of two numbers
twoNumGcd = (num1, num2) => {
  if (num1 === 0)
    return num2;
  return twoNumGcd(num2 % num1, num1);
}

// gcd of array of numbers
arrGcd = (arr, arrLen) =>{
  // cumumlative gcd, initially number itself
  let cumGcd = arr[0];
  // go number by number thru arr
  // and find the new cumulative gcd
  // by finding gcd of cumgcd and num in arr
  for (let i = 1; i < arrLen; i++) {
    cumGcd = twoNumGcd(arr[i], cumGcd);
    if (cumGcd === 1) 
      return 1;
  }
  return cumGcd;
}


const arr = [120, 300, 95, 425, 625];
const arrLen = arr.length;

document.getElementById('ans').textContent = arrGcd(arr, arrLen);

