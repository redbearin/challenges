const reverseTitle = title => {
  const titleArr = title.split(' ');
  const revTitleArr = [];
  let sub;
  for (let i =0; i < titleArr.length; i++) {
    sub = '';
    // first char of word to lowercase
    sub += titleArr[i][0].toLowerCase();
    // all other chars in word to capital
    for (let j = 1; j < titleArr[i].length; j++) {
      sub += titleArr[i][j].toUpperCase();
    }
    // add revised to word to arr
    revTitleArr.push(sub);
  }
  // combine new words into a string
  return revTitleArr.join(' ');
};

const title = "BOLD AND BRASH!";

document.getElementById('ans').textContent = reverseTitle(title);
