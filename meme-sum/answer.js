memeSum = (num1, num2) => {
  //convert numbers to strings and reverse
  const strNum1Arr = num1.toString().split('').reverse();
  const strNum2Arr = num2.toString().split('').reverse();

  // set longest length
  let longest;
  if (strNum1Arr.length > strNum2Arr.length)
    longest = strNum1Arr.length;
  else
    longest = strNum2Arr.length;
  
  // add digits from back of numbers
  let first, second;
  let memeSum = [];
  for (let i = 0; i < longest; i++) {
    first = strNum1Arr[i];
    second = strNum2Arr[i];
    if (first === undefined)
      first = '0';
    if (second === undefined) 
      second = '0';
    memeSum.unshift(+first + +second)
  }
  // return the joined number
  return memeSum.join('');
}
const num1 = 1222;
const num2 = 30277;

document.getElementById('ans').textContent = memeSum(num1, num2);