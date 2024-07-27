reversedBinaryInteger = num => {
  return parseInt(num.toString(2).split('').reverse().join(''), 2);
}

const num = 10;

document.getElementById('ans').textContent = reversedBinaryInteger(num);