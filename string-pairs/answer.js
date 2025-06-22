stringPairs = str => {
  if (!str) {
    return JSON.stringify([]);
  }
  const arr = [];
  for (let i = 0; i < str.length; i += 2) {
    if (i >= str.length - 2) {
      arr.push(str.slice(i));
    }
    else {
      arr.push(str.slice(i, i+2));
    }
    str.slice(i, i+2);
  }
  if (arr[arr.length - 1].length === 1) {
    arr[arr.length - 1] = arr[arr.length - 1] + '*';
  }
  return JSON.stringify(arr);
}

const str = "edabit";

document.getElementById('ans').textContent = stringPairs(str);