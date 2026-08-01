numberSplit = num => {
  return JSON.stringify([Math.floor(num/2), num - Math.floor(num/2)]);
}

const num = 9;

document.getElementById('ans').textContent = numberSplit(num);