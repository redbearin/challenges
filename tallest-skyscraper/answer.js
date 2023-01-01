const tallestSkyscraper = arr => {
  let maxFloors = 0;
  let floors;
  // go col by col thru arr
  for (let col = 0; col < arr.length; col++) {
    floors = 0;
    // go row by row thru that col
    for (let row = arr.length - 1; row >= 0; row--) {
      if (arr[row][col] === 1) 
        floors++;
      else
        break;
    }
    // skyscraper is taller
    if (floors > maxFloors)
      // change maxHeight to reflect new
      maxFloors = floors;
  }
  return maxFloors;
};

const arr = [
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [1, 1, 1, 0],
  [1, 1, 1, 1]
];

document.getElementById('ans').textContent = tallestSkyscraper(arr);