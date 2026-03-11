jazzify = arr => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][arr[i].length - 1] !== '7') {
      arr[i] = arr[i] + '7';
    }
  }
  return JSON.stringify(arr);
}

const arr = ["Dm", "G", "E", "A"]

document.getElementById('ans').textContent = jazzify(arr);