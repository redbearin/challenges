const swapXY = str => {
  let num = '';
  const arr = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '-' || str[i] !== ' ' && Number.isInteger(+str[i]))
      num += str[i];
    else {
      if (num !== '') {
        arr.push(num);
        num = '';
      }
    }
  }
  return '(' + arr[1] + ', ' + arr[0] + '), ' + '(' + arr[3] + ', ' + arr[2] + ')';
};

const str = "(-5, -3), (7, 4)";

document.getElementById('ans').textContent = swapXY(str);