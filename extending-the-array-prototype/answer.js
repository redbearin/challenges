Array.prototype.square = () => {
  const modArr = [...arr];
  for (let i = 0; i < modArr.length; i++) {
    modArr[i] = Math.pow(modArr[i], 2);
  }
}

const arr = [1, 2, 3];
arr.square();
document.getElementById('ans').textContent = arr;