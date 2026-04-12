willHit = (line, point) => {
  const lineArr = line.split(' ');
  let m;
  if (lineArr[2][0] === '-') {
    m = - (lineArr[2].slice(1,-1));
  }
  else {
    m = (lineArr[2].slice(0,-1));
  }
  
  if (lineArr[3] === '-') {
    if (point[1] - m * point[0] === -lineArr[4]) {
      return true;
    }
  }
  else {
    if (point[1] - m *point[0] === +lineArr[4]) {
      return true;
    }
  }
  return false;
}

const line = "y = 2x + 6";
const point = [3,2];

document.getElementById('ans').textContent = willHit(line, point);