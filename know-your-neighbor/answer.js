plusSign = str => {
  // break into array at pluses
  const plusArr = str.split('+');
  // begin and end aren't pluses
  if (plusArr[0] !== "" || 
      plusArr[plusArr.length - 1] !== "")
    return false;
  // check middle groupings
  for (let i = 1; i < plusArr.length - 1; i++) {
    // more than one element
    if (plusArr[i].length > 1) {
      // element by element thru the grouping
      for (let j = 0; j < plusArr[i].length; j++) {
        // has a character
        if (plusArr[i].charCodeAt(j) > 64 &&
            plusArr[i].charCodeAt(j) < 91 ||
            plusArr[i].charCodeAt(j) > 96 &&
            plusArr[i].charCodeAt(j) < 123
            )
          return false;         
      }
    }
    // empty string
    if (!plusArr[i].length)
      return false;
  }
  return true;
}

const str = "+s+7+fg+r+8+";

document.getElementById('ans').textContent = plusSign(str);