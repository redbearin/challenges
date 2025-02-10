isGoalScored = arr => {
  for (let i = 0; i < 3; i++) {
    if (arr[i][0].indexOf('0') > 2 && arr[i][0].indexOf('0') < 8) {
      return true;
     }
  }
  return false;
}

const arr = [
	["  #     #  "],
	["  #     #  "],
	["  #     # 0"],
	["  #######  "],
	["     #     "],
	["     #     "],
	["     #     "]
];

document.getElementById('ans').textContent = isGoalScored(arr);
