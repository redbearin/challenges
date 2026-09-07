overTwentyOne = arr => {
  const faceCards = ["J", "Q", "K"];
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    if (faceCards.includes(arr[i])) {
      total += 10;
    }
    else if (arr[i] === "A") {
      total += 1;
    }
    else {
      total += +arr[i];
    }
  }
  if (total <= 21) {
    return false;
  }
  return true;
}

const arr = ['A', 'J', 'K'];

document.getElementById('ans').textContent = overTwentyOne(arr);