const isRepeated = str => {
  // possible segment lengths
  const segments = [1,2,3,4,6,8,12];
  // initialize segment mismatch flag
  let segMismatch = false;
  // initialize array that will hold segments
  let arr;
  // go through all segment lengths
  for (let i = 0; i < segments.length; i++) {
    // build regex with section length
    let newStr = '.{' + segments[i] + '}';
    let regex = new RegExp(newStr, 'g');
    // build arr of segments of specific length
    arr = str.match(regex);
    // loop thru arr to find segment mismatches
    for (let j = 1; j < arr.length; j++) {
      if (arr[j] !== arr[j-1]) {
        segMismatch = true;
        break;
      }
    }
    // all segments are the same
    // return the number of segments
    if (!segMismatch)
      return 24 / segments[i];
    // reset segment mismatch flag
    segMismatch = false;
  }
  // there segment length that generates matches
  return 'False';
}

const str = ",,,,,,,,,,,,,,,,,,,,,,,,";
document.getElementById('ans').textContent = isRepeated(str);