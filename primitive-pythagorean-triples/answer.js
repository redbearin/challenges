isPrimPythTriple = arr => {
  arr.sort((a, b) => a - b);
  if (Math.pow(arr[0], 2) + 
      Math.pow(arr[1], 2) === 
      Math.pow(arr[2], 2)) {
    for (let i = 2; i <= arr[0]; i++) {
      if (arr[0] % i === 0 && 
          arr[1] % i === 0) {
        return false;
      }
    }
    for (let i = 2; i <= arr[1]; i++) {
      if (arr[1] % i === 0 && 
          arr[2] % i === 0) {
        return false;
      }
    }
    for (let i = 2; i <= arr[0]; i++) {
      if (arr[0] % i === 0 && 
          arr[2] % i === 0) {
        return false;
      }
    }
    return true;
  }
  return false;
}

const arr = [35,28,21];
document.getElementById('ans').textContent = isPrimPythTriple(arr);

