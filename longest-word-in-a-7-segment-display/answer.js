longest7SegmentWord = words => {
  let len = 0;
  let longest = "";
  for (let i = 0; i < words.length; i++) {
    if (!/[kmvwx]/.test(words[i]) && len < words[i].length) {
      len = words[i].length;
      longest = words[i];
    }
  }
  return longest;
}

const words = ["velocity", "mackerel", "woven", "kingsmen"];

document.getElementById('ans').textContent = longest7SegmentWord(words);