sortDescending = num => {
  return +num.toString().split('').sort((a, b) => b - a).join('');
}

const num = 1254859723;

document.getElementById('ans').textContent = sortDescending(num);