allTruthy = (...args) => {
  for (let i = 0; i < args.length; i++) {
    if (!args[i]) {
      return false;
    }
  }
  return true;
}


document.getElementById('ans').textContent = allTruthy(5, 4, 3, 2, 1, 0);