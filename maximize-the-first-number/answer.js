maxPossible = (num1, num2) => {
  const strNum1Arr = num1.toString().split('');
  const strNum2ArrSorted = num2.toString().split('').sort((a,b) => b-a);
  let num2Idx = 0;
  for (let i = 0; i < strNum2ArrSorted.length; i++) {
    if (strNum2ArrSorted[num2Idx] > strNum1Arr[i]) {
      strNum1Arr[i] = strNum2ArrSorted[num2Idx];
      num2Idx++;
    }
    if (num2Idx === strNum2ArrSorted.length) {
      break;
    }
  }
  return +strNum1Arr.join('');
}

const num1 = 523;
const num2 = 76;

document.getElementById('ans').textContent = maxPossible(num1, num2);