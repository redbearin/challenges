trueAlphabetic = str => {
  // create an array of letters/spaces
  let strArr = str.split('');
  // sort the array
  strArr.sort();
  // remove the spaces
  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i] === ' ') 
      continue;
    else {
      strArr = strArr.slice(i);
      break;
    }
  }
  // create a string from sorted array
  let sortedStr = strArr.join('');
  let alphaOrder = '';
  let ltr;
  // go element by element through original str
  for (let i = 0; i < str.length; i++) {
    // if a space add a space to alpha order string
    if (str[i] === ' ') 
      alphaOrder += ' ';
    // not a space add a letter from the 
    // sorted string
    else {
      ltr = sortedStr.slice(0,1);
      sortedStr = sortedStr.slice(1);
      alphaOrder += ltr;
    }
  }
  return alphaOrder;
}

const str = "have a nice day";

document.getElementById('ans').textContent = trueAlphabetic(str);