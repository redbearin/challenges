maxConsec = arr => {
  const uniSort = [... new Set(arr.sort((a,b)=> a-b))];
  let len = 1;
  let longest = 0;
  for (let i = 1; i < uniSort.length; i++) {
    if (uniSort[i-1] + 1 === uniSort[i]) {
      len++;
      if (i === uniSort.length - 1) {
        if (len > longest) {
          longest = len;
        }
      }
    }
    else {
      if (len > longest) {
        longest = len;
      }
      len = 1;
    }
  }
  return longest;
}

const arr = [14, 13, 7, 1, 4, 12, 3, 7, 7, 12, 11, 5, 7];

document.getElementById('ans').textContent = maxConsec(arr);