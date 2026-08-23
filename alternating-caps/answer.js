alternatingCaps = str => {
  const strArr = str.split(' ');
  let newStrArr = [];
  let cap = true;
  let word;
  for (let i = 0; i < strArr.length; i++) {
    word = '';
    for (let j = 0; j < strArr[i].length; j++) {
      cap ?
      word += strArr[i][j].toUpperCase() :
      word += strArr[i][j].toLowerCase(); 

      cap ? cap = false : cap = true;
    }
    newStrArr.push(word);
  }
  return newStrArr.join(' ');
}

const str = "How are you?";

document.getElementById('ans').textContent = alternatingCaps(str); 