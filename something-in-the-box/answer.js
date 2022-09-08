const inBox = arr => {
  // make into an array
  // if first or last row has '*'
  if (arr[0].split('').includes('*') ||
      arr[arr.length - 1].split('').includes('*'))
    return false;
  // go thru remaining rows
  for (let i = 1; i < arr.length - 1; i++) {
    // '*' at one of the ends of row
    if (arr[i][0] === '*' || 
        arr[i][arr.length - 1] === '*') 
      return false;
    // '*' is somewhere else in row
    if (arr[i].split('').includes('*'))
      return true;
  }
  // no '*'
  return false;
}

const arr = [
  "#####",
  "#   #",
  "#   #",
  "#   #",
  "#####"
];

document.getElementById('ans').textContent = inBox(arr)