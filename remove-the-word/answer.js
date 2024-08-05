removeLetters = (arr, str) => {
  let i = 0;
  let idx;
  for (let i = 0; i < str.length; i++) {
    idx = arr.indexOf(str[i]);
    if (idx !== -1) {
      arr.splice(idx, 1);
    }
  }
  return JSON.stringify(arr);
}

const arr = ["b", "b", "l", "l", "g", "n", "o", "a", "w"];
const str = "balloon";


document.getElementById('ans').textContent = removeLetters(arr, str);