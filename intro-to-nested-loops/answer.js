printAllGroups = () => {
  const arr = ["a", "b", "c", "d", "e"];
  let str = '';
  for (let i = 1; i < 7; i++) {
    for (let j = 0; j < arr.length; j++) {
      str += i + arr[j] + ', ';
    }
  }
  return str.slice(0, -2);
}

document.getElementById('ans').textContent = printAllGroups();