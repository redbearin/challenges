littleBig = position => {
  if (position === 1) 
    return 5;
  if (position === 2)
    return 100;

  let little = 5;
  let big = 100;
  for (let i = 3; i <= position; i++) {
    if (i % 2) {
      little += 1;
      if (i === position) {
        return little;
      }
    }
    else {
      big *= 2;
      if (i === position)
        return big;
    }
  }
}

const position = 28;

document.getElementById('ans').textContent = littleBig(position);