lineLength = (pt1, pt2) => {
  return Math.round(Math.sqrt((pt2[1] - pt1[1]) ** 2 + (pt2[0] - pt1[0]) ** 2) * 100)/100;
}

const pt1 = [15, 7]; 
const pt2 = [22, 11];

document.getElementById('ans').textContent = lineLength(pt1, pt2); 