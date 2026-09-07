neighboring = str => {
  for (let i = 1; i < str.length; i++) {
    if (str.charCodeAt(i - 1) + 1 !== str.charCodeAt(i) &&
        str.charCodeAt(i) + 1 !== str.charCodeAt(i - 1)) {
      return false;
    }
  }
  return true;
}

const str = "abcdedcba";

document.getElementById('ans').textContent = neighboring(str);