birdCode = arr => {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].split(/[- ]/);
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length === 1) {
      arr[i] = arr[i][0][0].toUpperCase() + arr[i][0][1].toUpperCase() + arr[i][0][2].toUpperCase() + arr[i][0][3].toUpperCase();
    }
    else if (arr[i].length === 2) {
      arr[i] = arr[i][0][0].toUpperCase() + arr[i][0][1].toUpperCase() + arr[i][1][0].toUpperCase() + arr[i][1][1].toUpperCase();
    }
    else if (arr[i].length === 3) {
      arr[i] = arr[i][0][0].toUpperCase() + arr[i][1][0].toUpperCase() + arr[i][2][0].toUpperCase() + arr[i][2][1].toUpperCase();
    }
    else {
      arr[i] = arr[i][0][0].toUpperCase() + arr[i][1][0].toUpperCase() + arr[i][2][0].toUpperCase() + arr[i][3][0].toUpperCase();
    }
  }
  return JSON.stringify(arr);
}

const arr = ["American Redstart", "Northern Cardinal", "Pine Grosbeak", "Barred Owl", "Starling", "Cooper's Hawk", "Pigeon"];

document.getElementById('ans').textContent = birdCode(arr);