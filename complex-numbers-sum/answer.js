sumComplex = arr => {
  let op;
  let num = '';
  let iNumsSum = 0;
  let stdNumsSum = 0;
  for (let j = 0; j < arr.length; j++) {
    for (let k = 0; k < arr[j].length; k++) {
      // operator or end of number
      if (arr[j][k] === "+" || 
          arr[j][k] === "-" || 
          k === arr[j].length - 1 ) {  
        // there is a number
        if (num.length) {
          // imaginary num
          if (num[num.length] === 'i') {
            console.log('inside imaginary')
            if (op === 'plus') {
              if (num.length > 1)
                iNumsSum += +num.slice(0, -1);
              else {
                iNumsSum += 1;
              }
            }
            else {
              if (num.length > 1)
                iNumsSum -= +num.slice(0, -1);
              else {
                iNumsSum -= 1;
              }
            }
          }
          // standard num
          else {
            if (op === 'plus')
              stdNumsSum += +num;
            else 
              stdNumsSum -= +num; 
          }
          num = '';
        }
        if (arr[j][k] === "+") {
          op = 'plus';
        }
        else {
          op = 'minus';
        }
      }
      // number or i
      else {
        num += arr[j][k];  
      }
      if (k === 0 && arr[j][k] !== '+' && arr[j][k] !== '-')
        op = 'plus';
      console.log('num: ', num)
      console.log('op: ', op)
      console.log('stdNumsSum: ', stdNumsSum)
      console.log('iNumsSum: ', iNumsSum)
    }
  }
  // create the summed number
  if (iNumsSum === 0) {
    return "" + stdNumsSum;
  }
  else if (stdNumsSum === 0) {
    if (iNumsSum === 1)
      return '+i';
    if (iNumsSum === -1) 
      return '-i'; 
    else 
      return "" + iNumsSum ; 
  }
  else {
    if (iNumsSum === 1)
      return "" + stdNumsSum + '+i';
    if (iNumsSum === -1) 
      return "" + stdNumsSum + '-i'; 
    else 
      return "" + stdNumsSum + iNumsSum ;
  }
}
const arr = ["2+3i", "3-i"];

document.getElementById('ans').textContent = sumComplex(arr);