countNumber = arr => {
  const flatArr = arr.flat(Infinity);
  let count = 0;
  for (let i = 0; i < flatArr.length; i++) {
    if (typeof(flatArr[i]) === 'number') {
      count++;
    }
  }
  return count;
}

const arr = [["", 17.2, 5, "edabit"]];

document.getElementById('ans').textContent = countNumber(arr);