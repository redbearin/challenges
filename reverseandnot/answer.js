reverseAndNot = num => {
  const revNum = num.toString().split('').reverse().join('');
  return +(revNum + num);
}

const num = 123;

document.getElementById('ans').textContent = reverseAndNot(num);