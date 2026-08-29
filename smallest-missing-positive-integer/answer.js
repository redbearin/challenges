minMissPos = arr => { 
  const woDups = [...new Set(arr)].sort((a,b) => a-b);
  console.log(woDups)
  for (let i = woDups.length - 1; i >= 0; i--) {
    if (woDups[i] - 1 !== woDups[i-1]) {
      return woDups[i] - 1;
    }
  }
}

const arr = [-2, 6, 4, 5, 7, -1, 7, 1, 3, 6, 6, -2, 9, 10, 2, 2];

document.getElementById('ans').textContent = minMissPos(arr);