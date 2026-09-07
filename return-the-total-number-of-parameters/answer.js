numberArgs = (...args) => {
  return args.length;
}

document.getElementById('ans').textContent = numberArgs("a", "b", "c");