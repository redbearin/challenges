rev = num => {
  return Math.abs(num).toString().split('').reverse().join('');
}

const num = -122157;

document.getElementById('ans').textContent = rev(num);