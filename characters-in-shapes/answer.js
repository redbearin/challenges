countCharacters = arr => {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    count += arr[i].length;
  }
  return count;
}

const arr = [
  "22222222",
  "22222222",
];

document.getElementById('ans').textContent = countCharacters(arr);