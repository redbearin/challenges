countAdverbs = str => {
  str = str.replace(/[^a-zA-Z ]/g,"");
  const strArr = str.split(" ");
  let count = 0;
  for (let i = 0 ; i < strArr.length; i++) {
    if (strArr[i][strArr[i].length - 1] === 'y' && 
        strArr[i][strArr[i].length - 2] === 'l') {
      count++;
    }
  }
  return count;
}

const str = "She ran, hurriedly, towards the stadium.";

document.getElementById('ans').textContent = countAdverbs(str);