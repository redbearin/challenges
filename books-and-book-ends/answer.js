const countUniqueBooks = (str, end) => {
  let count = 0;
  let newStr = '';
  // go element by element thrs str
  for (let i = 0; i < str.length; i++) {
    // bookend
    if (str[i] === end) {
      // end of a set of books
      if (count === 1) 
        count = 0;
      // begin a set of books
      else 
        count++;
    }
    // add book
    if (count === 1 && 
        str[i] !== end)
      newStr += str[i];
  }
  // remove the duplicate books
  const noDups = [... new Set(newStr.split(''))];
  return noDups.length;
};

const str = "ZZABCDEF";
const end = "Z";

document.getElementById('ans').textContent = countUniqueBooks(str, end);