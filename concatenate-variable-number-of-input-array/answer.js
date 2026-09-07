concat = () => {
  let newArr = arguments[0];
  for (let i = 1; i < arguments.length; i++) {
    newArr = newArr.concat(arguments[i]);
  }
  return JSON.stringify(newArr);
}


document.getElementById('ans').textContent = concat([1, 2, 3], [4, 5], [6, 7]);