perimeter = pts => {
  const side1 = Math.sqrt(Math.pow(pts[0][0] - pts[1][0], 2) +
                Math.pow(pts[0][1] - pts[1][1], 2));
  const side2 = Math.sqrt(Math.pow(pts[1][0] - pts[2][0], 2) +
                Math.pow(pts[1][1] - pts[2][1], 2));
  const side3 = Math.sqrt(Math.pow(pts[2][0] - pts[0][0], 2) +
                Math.pow(pts[2][1] - pts[0][1], 2));
  return Math.round((side1 + side2 + side3) * 100)/100;
}

const pts = [[15, 7], [5, 22], [11, 1]]

document.getElementById('ans').textContent = perimeter(pts);