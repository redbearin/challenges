concat = (...args) => {
  let newArr = args[0];
  for (let i = 1; i < args.length; i++) {
    newArr = newArr.concat(args[i]);
  }
  return JSON.stringify(newArr);
}

document.getElementById('ans').textContent = concat([1, 2, 3], [4, 5], [6, 7]);