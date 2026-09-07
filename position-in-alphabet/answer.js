letterAtPosition = num => {
  if (num >= 1 && num <= 26) {
    if (Math.floor(num) === num) {
      return String.fromCharCode(num + 96);
    }
  }
  return "invalid";
}

const num = 26.0;
document.getElementById('ans').textContent = letterAtPosition(num);