wordBuilder = (arr, indices) => {
  let word = '';
  for (let i = 0; i < indices.length; i++) {
    word += arr[indices[i]];
  }
  return word;
}

const arr = ["e", "t", "s", "t"];
const indices = [3, 0, 2, 1];

document.getElementById('ans').textContent = wordBuilder(arr, indices);