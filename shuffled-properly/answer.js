isShuffledWell = arr => {
  for (let i = 2; i < arr.length; i++) {
    if ((arr[i] - 1 === arr[i - 1] && 
         arr[i - 1] - 1 === arr[i - 2]) || 
        (arr[i] + 1 === arr[i - 1] && 
         arr[i - 1] + 1 === arr[i - 2]))
      return false;
  }
  return true;
}

const arr = [1, 3, 5, 7, 9, 2, 4, 6, 8, 10];

document.getElementById('ans').textContent = isShuffledWell(arr);