possiblePath = arr => {
  // room possibilities from any given room
  // ie from room 2 you can go to 1 or H
  const possibilities = {1: [2], 2: [1, "H"], H: [2,4], 4: ['H', 3], 3: [4]};
  for (let i = 1; i < arr.length; i++) {
    // room is not a possibility from the prior room
    if (!possibilities[arr[i - 1]].includes(arr[i]))
      return false;
  }
  return true;
}

const arr = [4, 3, 4, "H", 4, "H"];

document.getElementById('ans').textContent = possiblePath(arr);
