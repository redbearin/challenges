getTriangleType = arr => {
  if (arr.length !== 3) {
    return "not a triangle";
  }
  arr.sort((a,b) => a - b);
  if (arr[0] === arr[1]) {
    if (arr[1] === arr[2]) {
      return "equilateral";
    }
    return 'isosceles';
  }
  if (arr[1] === arr[2]) {
    return 'isosceles';
  }
  return 'scalene';
}

const arr = [2, 6, 5];

document.getElementById('ans').textContent = getTriangleType(arr);