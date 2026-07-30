divingMinigame = arr => {
  let ttl = 10;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      if (ttl - 2 < 1) {
        return false;
      }
      ttl -= 2;
    }
    else {
      ttl <= 6 ?
      ttl += 4 :
      ttl = 10;
    }
  }
  return ttl > 0 ?
  true :
  false;
}

const arr = [-5, -15, -4, 0, 5];

document.getElementById('ans').textContent = divingMinigame(arr);