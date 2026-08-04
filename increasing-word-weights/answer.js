increasingWordWeights = str => {
  strNoPunc= str.replace(/[^a-zA-Z ]/, "");
  const strArr = strNoPunc.split(' ');
  let greatest = 0;
  let wordSum;
  for (let i = 0; i < strArr.length; i++) {
    wordSum = 0;
    for (let j = 0; j < strArr[i].length; j++) {
      wordSum += strArr[i].charCodeAt(j);
    }    
    if (wordSum < greatest) {
      return false;
    }
    else {
      greatest = wordSum;
    }
  }
  return true;
}

const str = "All other roads.";

document.getElementById('ans').textContent = increasingWordWeights(str);