hangman = (str, arr) => {
  // break the string into array
  const strArr = str.split('');
  const edited = [];
  // element by element thru strArr
  for (let i = 0; i < strArr.length; i++) {
    // match
    if (arr.includes(strArr[i].toLowerCase()))
      edited.push(strArr[i]);
    // no match and not a letter
    else if (!(/[a-zA-Z]/).test(strArr[i]))
      edited.push(strArr[i])
    // no match and a letter
    else
      edited.push('-');
  }
  return edited.join('');
}

const str = 'He"s a very naughty boy!';
const arr = ["e", "a", "y"];

document.getElementById('ans').textContent = hangman(str, arr);