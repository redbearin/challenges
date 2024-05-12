missingLetter = str => {
  for (let i = 1; i < str.length; i++) {
    if (str.charCodeAt(i) - 1 !== str.charCodeAt(i - 1)) {
      return String.fromCharCode(str.charCodeAt(i) - 1);
    }
  }
  return 'No Missing Letter';
}

const str = "ghijklmno";

document.getElementById('ans').textContent = missingLetter(str);