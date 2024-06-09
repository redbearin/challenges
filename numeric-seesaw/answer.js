seesaw = num => {
  if (!num || num === null) {
    return 'balanced';
  }
  const numStr = num.toString();
  const front = numStr.slice(0, Math.floor(numStr.length/2));
  const back = numStr.slice(Math.ceil(numStr.length/2));
  if (front > back) {
    return 'left';
  }
  if (front < back) {
    return 'right';
  }
  return "balanced";
}

const num = 585585;

document.getElementById('ans').textContent = seesaw(num);