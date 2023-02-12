charCount = str => {
  const ltrCounts = {};
  str = str.toLowerCase();
  // build object that includes counts for
  // each letter
  for (let i =0; i < str.length; i++) {
    if (str.charCodeAt(i) > 96 && 
        str.charCodeAt(i) < 123) {
      if (ltrCounts[str[i]])
        ltrCounts[str[i]] = ltrCounts[str[i]] + 1;
      else
        ltrCounts[str[i]] = 1;
    }      
  }
  // break counts in array
  const ltrCountsArr = Object.entries(ltrCounts);
  // sort array by letter
  const sortedArr = ltrCountsArr.sort();
  // build the string with the letters and counts
  let newStr = '';
  for (let i = 0; i < sortedArr.length; i++) {
    newStr += sortedArr[i].join(':')
    if (i !== sortedArr.length - 1)
      newStr += ' ';
  }
  return newStr;
}

const str = "Now, I learn JavaScript";

document.getElementById('ans').textContent = charCount(str);