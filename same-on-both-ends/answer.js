countSameEnds = str => {
  str = str.replace(/[^A-Za-z]/, "");
  const strArr = str.split(' ');
  count = 0;
  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i][0].toLowerCase() === 
        strArr[i][strArr[i].length - 1].toLowerCase()) {
      count++;
    }
  }
  return count;
}

const str = "No I am not in a gang.";

document.getElementById('ans').textContent = countSameEnds(str);