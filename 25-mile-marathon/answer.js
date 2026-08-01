marathonDistance = segs => {
  if (!segs || !segs.length) {
    return false;
  }
  let total = 0;
  for (let i = 0; i < segs.length; i++) {
    total += Math.abs(segs[i]);
  }
  if (total === 25) {
    return true;
  }
  return false;
}

const segs = [-6, 15, 4];

document.getElementById('ans').textContent = marathonDistance(segs);