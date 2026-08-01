nothingIsNothing = (...arguments) => {
  for (let i = 0; i < arguments.length; i++) {
    if (!arguments[i]) {
      return false;
    }
  }
  return true;
}

document.getElementById('ans').textContent = nothingIsNothing(0, false, undefined, null);