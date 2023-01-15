almostPalindrome = str => {
  let noMatchCt = 0;
  for (let i = 0; i < Math.floor(str.length/2); i++) {
    if(str[i] !== str[str.length - (i + 1)]) {
      noMatchCt++;
    }
    if (noMatchCt > 1) {
      return false;
    }
  }
  return !noMatchCt ? false : true;
}

const str = "abccia";

document.getElementById('ans').textContent = almostPalindrome(str);