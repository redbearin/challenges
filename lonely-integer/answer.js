lonelyInteger = arr => {
  for (let i = 0; i < arr.length; i++) {
    if (arr.includes(-arr[i])) {
      continue;
    }
    else {
      return arr[i];
    }
  }
 
}

const arr = [1, -1, 2, -2, 3, 3];

document.getElementById('ans').textContent = lonelyInteger(arr);