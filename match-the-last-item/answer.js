matchLastItem = arr => {
  let str = '';
  for (let i = 0; i < arr.length - 1; i++) {
    str += arr[i];
  }
  return str === arr[arr.length - 1] ?
  true :
  false;
}

const arr = ["rsq", "6hi", "g", "rsq6hig"];

document.getElementById('ans').textContent = matchLastItem(arr);