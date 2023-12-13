getTriangleType = sideLengths => {
  if(sideLengths.length !== 3)
    return "not a triangle";
  const noRepeats = [...new Set(sideLengths)];
  if (noRepeats.length === 3)
    return "scalene";
  if (noRepeats.length === 2)
    return "isosceles";
  return "equilateral";
}

const sideLengths = [3, 5, 5, 2];

document.getElementById('ans').textContent = getTriangleType(sideLengths);
