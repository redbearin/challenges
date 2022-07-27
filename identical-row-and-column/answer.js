hasIdentical = arr => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length !== arr.length) {
      return false;
    }
  }
  let match;
  for (let i = 0; i < arr.length; i++) {
    match = true;
    for (let j = 0; j < arr[i].length; j++) {
      for (let k = 0; k < arr[i].length; k++) {
        console.log('arr[i][k]: ', arr[i][k])
        console.log('arr[k][j]: ', arr[k][j])
        if (arr[i][k] !== arr[k][j]) {
          match = false;
          break;
        } 
      }
      console.log('*')
    }
    if (match) {
      return true;
    }
  }
  return false;
}

const arr =  [
	[4, 4, 4, 4], 
	[2, 4, 9, 8], 
	[5, 4, 7, 7], 
	[6, 4, 1, 0]
];

document.getElementById('ans').textContent = hasIdentical(arr);