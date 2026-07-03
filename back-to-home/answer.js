backToHome = directions => {
  let horizontal = 0;
  let vertical = 0;
  for (let i = 0; i < directions.length; i++) {
    if (directions[i] === 'E') {
      horizontal++;
    }
    if (directions[i] === 'W') {
      horizontal--;
    }
    if (directions[i] === 'N') {
      vertical++;
    }
    if (directions[i] === 'S') {
      vertical--;
    }
  }
  if (horizontal === 0 && vertical === 0) {
    return true;
  }
  return false;
}

const directions = "NEESSW";

document.getElementById('ans').textContent = backToHome(directions);