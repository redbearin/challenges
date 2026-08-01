addNums = str => {
  const strArr = str.split(', ');
  let sum = 0;
  for (let i = 0; i < strArr.length; i++) {
    sum += +strArr[i];
  }
  return sum;
}

const str = "2, 5, 1, 8, 4";

document.getElementById('ans').textContent = addNums(str);