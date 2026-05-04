combinations = (...args) => Array.from(args).reduce((acc, val) =>
  {
    if (val === 0) {
      return acc * 1;
    }
    else { 
      return acc * val
    }
  }, 1);

document.getElementById('ans').textContent = combinations(0, 2, 3, 4, 5);