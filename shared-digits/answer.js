sharedDigits = arr => {
  const arrSub = [];
  for (let i = 0; i < arr.length; i++) {
    arrSub.push(arr[i].toString().split(''));
  }
  let match;
  for (let i = 1; i < arrSub.length; i++) {
    match = false;
    for (let j = 0; j < arrSub[i - 1].length; j++) {
      if (arrSub[i].includes(arrSub[i - 1][j])) {
        match = true;
        break;
      }
    }
    if (!match)
      return false;
  }
  return true;
}
const arr = [1, 12, 123, 1234, 1235, 6789];

document.getElementById('ans').textContent = sharedDigits(arr);