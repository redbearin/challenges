indexFilter = (arr, str) => {
  let newStr = ''
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 0) {
      newStr += str[arr[i]];
    }
    else {
      newStr += str[str.length + arr[i]];
    }
  }
  return newStr.toLowerCase();
}

const arr = [7, -1, 5, 1];
const str = "She is the love of my love";

document.getElementById('ans').textContent = indexFilter(arr, str);