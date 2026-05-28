isNarcissistic = num => {
  const len = num.toString().length;
  return num.toString().split('').map(Number).reduce((acc, ele) => Math.pow(ele, len) + acc, 0) === num;
}

const num = 153;

document.getElementById('ans').textContent = isNarcissistic(num);

