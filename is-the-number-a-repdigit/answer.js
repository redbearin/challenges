isRepdigit = num => {
  if (num < 0) {
    return false;
  }
  if (num === 0) {
    return true;
  }
  const noRpts = [... new Set(num.toString().split(''))];
  if (noRpts.length === 1) {
    return true;
  }
  return false;
}

const num = 11;

document.getElementById('ans').textContent = isRepdigit(num);