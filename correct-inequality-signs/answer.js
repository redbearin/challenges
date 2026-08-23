correctSigns = str => {
  // split str into array
  const strArr = str.split(' ');
  // go element by element thru array
  for (let i = 0; i < strArr.length; i++) {
    // element is <
    if (strArr[i] === '<') {
      // number to left is > number to right
      if (+strArr[i - 1] >= +strArr[i + 1])
        return false;
    }
    // element is >
    else {
      // number to left is < number to right
      if (+strArr[i - 1] <= +strArr[i + 1])
        return false;
    }
  }
  return true;
}

const str = "1 < 2 < 6 < 9 > 3";

document.getElementById('ans').textContent = correctSigns(str);