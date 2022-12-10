duplicates = str => {
  const charCts = {};
  // count number of times each char is present
  for (let i = 0; i < str.length; i++) {
    if (charCts[str[i]]) 
      charCts[str[i]] = charCts[str[i]] + 1;
    else 
      charCts[str[i]] = 1;
  }
  // convert to arr and sort highest to lowest counts
  charCtsArrSorted = Object.entries(charCts).sort((a, b) => b[1] - a[1]);

  let dupCount = 0;
  // count number of duplicates
  for (let i = 0; i < charCtsArrSorted.length; i++) {
    if (charCtsArrSorted[i][1] > 1)
      dupCount += charCtsArrSorted[i][1] - 1;
    else
      return dupCount;
  }
}

const str = "birthday";

document.getElementById('ans').textContent = duplicates(str);