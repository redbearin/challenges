robotPath = path => {
  const d1 = '32';
  const d2 = '-43';
  let end = [0,0];
  for (let i = 0; i < path.length; i++) {
    if (path[i] === 'n') {
      end[1]++;
    }
    if (path[i] === 's') {
      end[1]--;
    }
    if (path[i] === 'e') {
      end[0]++;
    }
    if (path[i] === 'w') {
      end[0]--;
    }
  }
  if (end.join('') === d1 || end.join('') === d2) {
    return true;
  }
  return false;
}

const path = ["s", "e", "e", "n", "n", "e", "n"];

document.getElementById('ans').textContent = robotPath(path);