minMissPos = arr => { 
  const woDups = [...new Set(arr)].sort((a,b) => a-b);
  const fstPosIdx = woDups.findIndex(ele => ele > 0);
  if (woDups[fstPosIdx] > 1) {
    return 1;
  }
  for (let i = fstPosIdx + 1; i < woDups.length; i++) {
    if (woDups[i] !== woDups[i - 1] + 1) {
      return woDups[i - 1] + 1;
    }
  }
  return "No missing positive number.";
}

const arr = [-2, 6, 4, 5, 7, -1, 7, 3, 6, 6, -2, 9, 10, 2, 2];

document.getElementById('ans').textContent = minMissPos(arr);