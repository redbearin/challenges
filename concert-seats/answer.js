canSeeStage = seats => {
  //column
  for (let i = 0; i < seats[0].length; i++) {
    // row
    for (let j = 1; j < seats.length; j++) {
      if (seats[j][i] <= seats[j - 1][i]) {
	        return false;			
			}
    }
  }
  return true;
}

const seats = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

document.getElementById('ans').textContent = canSeeStage(seats);

