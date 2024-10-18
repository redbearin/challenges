charCount = (ltr, str) => {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === ltr) {
      count++;
    }
  }
  return count;
}

const ltr = 'a';
const str = "edabit";

document.getElementById('ans').textContent = charCount(ltr, str);