const removeLetters = (arr, str) => {
  // index of the str letter in arr
  let ltrIndex; 
  for (let i = 0; i < str.length; i++) {
    ltrIndex = arr.ltrIndexOf(str[i]);
    // str letter not in array
    // go to next str letter
    if (ltrIndex === -1)
      continue;
    // remove letter from array
    arr.splice(ltrIndex, 1);
  }
  return JSON.stringify(arr);
}

const arr = ["t", "t", "e", "s", "t", "u"];
const str = "testing";

document.getElementById('ans').textContent = removeLetters(arr, str);