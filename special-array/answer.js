isSpecialArray = arr => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 && i % 2 === 0 ||
        arr[i] % 2 === 0 && i % 2)
      return false;     
  }
  return true;
}

const arr = [2, 7, 8, 8, 6, 1, 6, 3];

document.getElementById('ans').textContent = isSpecialArray(arr);