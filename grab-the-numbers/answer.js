grabNumberSum = str => {
  let flag = false;
  let num = "";
  let sum = 0;
  for (let i = 0; i < str.length; i++) {
    if (isNaN(str[i])) {
      if (flag) {
        flag = false;
        sum += +num;
        num = "";
      }
    }
    else {
      if (flag) {
        num += str[i];
        if (i === str.length - 1) {
          sum += +num;
        }
      }
      else {
        flag = true;
        num += str[i];
      }
    }
  }
  return sum;
}

const str = "aeiou250abc10";

document.getElementById('ans').textContent = grabNumberSum(str);