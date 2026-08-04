averageWordLength = str => {
  const strArr = str.replace(/[^a-zA-Z ]/g,"").split(" ");
  let ttlLen = 0;
  for (let i = 0; i < strArr.length; i++) {
      ttlLen += strArr[i].length;
  }
  return Math.round(ttlLen/strArr.length * 100) / 100;
}

const str = 'I just planted a young oak tree, wonder how tall it will grow in a few years?';

document.getElementById('ans').textContent = averageWordLength(str);