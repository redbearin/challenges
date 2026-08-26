isUnfairHurdle = arr => {
  if(arr.length > 3) {
    return true;
  }
  const spaces = arr[0].match(/[#]( +)[#]/);
  if (spaces[1].length < 4) {
    return true;
  }
  return false;
}

const arr = [
  "#      #      #      #",
  "#      #      #      #"
];

document.getElementById('ans').textContent = isUnfairHurdle(arr);