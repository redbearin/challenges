societyName = arr => {
  let newName = [];
  for (let i = 0; i < arr.length; i++) {
    newName.push(arr[i][0]);
  }
  return newName.sort().join('');
}

const arr = ["Adam", "Sarah", "Malcolm"];

document.getElementById('ans').textContent = societyName(arr);