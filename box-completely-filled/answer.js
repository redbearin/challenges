completelyFilled = box => {
  if (box[0].length < 3) {
    return true;
  }
  for (let i = 0; i < box.length; i++) {
    if ([... new Set(box[i])].length > 2) {
      return false;
    }
  }
  return true;
}

const box = [
  "#####",
  "#* *#",
  "#***#",
  "#***#",
  "#####"
];

document.getElementById('ans').textContent = completelyFilled(box);