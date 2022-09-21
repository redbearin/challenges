const firstNonRepeatedCharacter = str => {
  // no letters, just a space
  if (str === '')
    return false;
  // only one letter
  else if (str.length === 1)
    return str;
  // object that holds letters and counts
  const ltrCounts = {};
  // go element by element thru str
  for (let i = 0; i < str.length; i++) {
    // letter is not in letterCounts
    if (!ltrCounts[str[i]]) {
      // add letter and count of 1
      ltrCounts[str[i]] = 1;
    }
    // letter aleady in ltrCounts
    else {
      // increment count for that letter
      ltrCounts[str[i]] += 1;
    }
  }
  // break ltrCounts obj into an array of subarrays
  const countArr = Object.entries(ltrCounts);
  // sort based on counts
  countArr.sort((a,b) => a[1] - b[1]);
  // last element has a count of 1
  if (countArr[countArr.length - 1][1] === 1)
    return false;
  // elements do not all have count of 1
  // first element has a count of 1
  else if (countArr[0][1] === 1)
    // return that letter
    return countArr[0][0]
  // none of criteria met
  return false;
}
const str = "hheelloo";

document.getElementById('ans').textContent = firstNonRepeatedCharacter(str);