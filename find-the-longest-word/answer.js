findLongest = str => {
  // create an array of words
  const strArr = str.split(' ');
  // sort array from longest to shortest
  strArr.sort((a,b) => b.length - a.length);
  // intitalize longest word
  let longestWord = '';
  // word by word thru sorted array of words
  for (let i = 0; i < strArr.length; i++) {
    // not first element of sorted array
    // word length is shorter than longest word
    // done
    if (i > 0 && strArr[i].length < longestWord.length)
      break;
    // first element not a letterr
    if (strArr[i].charCodeAt(0) < 65 || 
        strArr[i].charCodeAt(0) > 90 && strArr[i].charCodeAt(0) < 97 || 
        strArr[i].charCodeAt(0) > 122)
      strArr[i] = strArr[i].slice(1);
    // last element not a letter
    if (strArr[i].charCodeAt(strArr[i].length - 1) < 65 || 
        strArr[i].charCodeAt(strArr[i].length - 1) > 90 && 
          strArr[i].charCodeAt(strArr[i].length - 1) < 97 || 
        strArr[i].charCodeAt(strArr[i].length - 1) > 122)
      strArr[i] = strArr[i].slice(0, - 1);
    // if longer than longest word, change longest word
    if (strArr[i].length > longestWord.length) 
      longestWord = strArr[i];
  }
  return longestWord.toLowerCase();
}

const str = "A thing of beauty is a joy forever.";

document.getElementById('ans').textContent = findLongest(str);