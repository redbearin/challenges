wordRank = str => {
  str = str.replace(/[^a-zA-z ]/g, "");
  const strArr = str.split(' ');
  let biggestCount = 0;
  let currentCount;
  let topRank; 
  let word;
  for (let i = 0; i < strArr.length; i++) {
    currentCount = 0;
    word = strArr[i].toLowerCase();
    for (let j = 0; j < strArr[i].length; j++) {
      currentCount += word.charCodeAt(j) - 96;
    }
    if (currentCount > biggestCount) {
      biggestCount = currentCount;
      topRank = strArr[i];
    }
  }
  return topRank;
}

const str = "He didn’t want to go to the dentist, yet he went anyway.";

document.getElementById('ans').textContent = wordRank(str);