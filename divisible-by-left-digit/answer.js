divisibleByLeft = num => {
  const strNum = num.toString();
  const arr = [false];
  for (let i = 1; i < strNum.length; i++) {
    strNum[i] % strNum[i - 1] === 0 ?
    arr.push(true) :
    arr.push(false);
  }
  return JSON.stringify(arr);
}

const num = 73312;

document.getElementById('ans').textContent = divisibleByLeft(num);