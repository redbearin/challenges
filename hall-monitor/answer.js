possiblePath = path => {
  for (let i = 1; i < path.length; i++) {
    if (path[i] === 'H' && !Number.isInteger(path[i - 1]) || Number.isInteger(path[i]) && path[i - 1] !== 'H') {
      return false;
    }
  }
  return true;
}

const path = [1, "H", 2, "H", 3, "H", 4];

document.getElementById('ans').textContent = possiblePath(path);