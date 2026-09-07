isSastry = num => {
  if (Number.isInteger(Math.sqrt(+(num.toString() + (num + 1))))) {
    return true;
  }
  return false;
}

const num = 183;

document.getElementById('ans').textContent = isSastry(num);