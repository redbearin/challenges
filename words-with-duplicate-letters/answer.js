const noDuplicateLetters = str => {
  const strArr = str.split(' ');
  let ltrCounts;
  // go word by word thru strArr
  for (let i = 0; i < strArr.length; i++) {
    // intialize letter counts for word
    ltrCounts = {};
    // go letter by letter thru word
    for (let j = 0; j < strArr[i].length; j++) {
      // letter already exists
      if(ltrCounts[strArr[i][j]])
        return false;
      // lette does not exist
      else 
        ltrCounts[strArr[i][j]] = 1;
    }
  }
  // none of words have duplicate letters
  return true;
};

const str = "An apple a day keeps the doctor away.";

document.getElementById('ans').textContent = noDuplicateLetters(str);