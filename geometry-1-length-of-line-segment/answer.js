lineLength = (pt1, pt2) => {
  const len = Math.sqrt(Math.pow(pt1[0] - pt2[0], 2) + Math.pow(pt1[1] - pt2[1], 2));
  if (Number.isInteger(len)) 
    return len;
  return len.toFixed(2);
}

const pt1 = [0, 0]; 
const pt2 = [1, 1];

document.getElementById('ans').textContent = lineLength(pt1, pt2);