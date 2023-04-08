const wordsToSentence = arr => {
  // clean the array
  for (let i = arr.length - 1; i >= 0; i--) {
    if (!arr[i])
      arr.splice(i, 1);
  }
  // nothing in array
  if (!arr.length)
    return '';
  // build the string
  // intialize the string
  let str = '';
  // go element by element thru array
  for (let i = 0; i < arr.length; i++) {
    // first element of array
    if (i === 0)
      str += arr[i];
    // last element of array
    else if (i === arr.length - 1)
      str += ' and ' + arr[i];
    // middle element
    else
      str += ', ' + arr[i];
  }
  return str;
};

const arr = [["Hello", "", "Bye"]];

document.getElementById('ans').textContent = wordsToSentence(arr);