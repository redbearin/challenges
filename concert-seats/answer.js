const canSeeStage = seatMap => {
  console.log('inside')
  // column
  for (let i = 0; i < seatMap[0].length; i++) {
    // between rows in that column
    for (let j = 1; j < seatMap.length; j++) {
      // the element in the row in front is >= element
      if (seatMap[j][i] <= seatMap[j - 1][i])
        return false;
    }
  }
  return true;
};

const seatMap = [
  [1, 0, 0],
  [1, 1, 1],
  [2, 2, 2]
];

document.getElementById('ans').textContent = canSeeStage(seatMap);