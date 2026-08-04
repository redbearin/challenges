trueEquations = arr => {
  const correct = [];
  let op, equal, aftOp, num1, num2, ans;
  for (let i = 0; i < arr.length; i++) {
    op = '';
    equal = false;
    aftOp = false;
    num1 = '';
    num2 = '';
    ans = '';
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] === '+' ||
          arr[i][j] === '-' || 
          arr[i][j] === '*' || 
          arr[i][j] === '/' || 
          arr[i][j] === '=') {
        if (arr[i][j] === '=') {
          equal = true;
        }
        else {
          op = arr[i][j];
          aftOp = true;
        }
      }
      else {
        if(aftOp) { 
          if (equal) {
            ans += arr[i][j];
          }
          else {
            num2 += arr[i][j];
          }
        }
        else {
          num1 += arr[i][j]
        }
      }
    }
    if (op === "+") {
      if (+num1 + +num2 === +ans) {
        correct.push(arr[i]);
      }
    }
    if (op === "-") {
      if (+num1 - +num2 === +ans) {
        correct.push(arr[i]);
      }
    }
    if (op === "*") {
      if (+num1 * +num2 === +ans) {
        correct.push(arr[i]);
      }
    }
    if (op === "/") {
      if (+num1 / +num2 === +ans) {
        correct.push(arr[i]);
      }
    }
  }
  return JSON.stringify(correct);
}

const arr = ["1+1=2", "2+2=3", "5*5=10", "3/3=1"];

document.getElementById('ans').textContent = trueEquations(arr);