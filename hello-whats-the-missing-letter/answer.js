missingLetter = str => {
  for (let i = 1; i < str.length; i++) {
    if (str.charCodeAt(i) - 1 !== str.charCodeAt(i - 1)) {
      return String.fromCharCode(str.charCodeAt(i) - 1);
    }
  }
}

const str = "abdefg";

document.getElementById('ans').textContent = missingLetter(str);