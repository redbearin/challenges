pHName = num => {
  if (num < 7) {
    return "acidic";
  }
  if (num > 7) {
    return "alkaline";
  }
  return "neutral";
}

const num = 5;

document.getElementById('ans').textContent = pHName(num);