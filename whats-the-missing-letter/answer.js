const missingLetter = str => {
  for (let i = 1; i < str.length; i++) {
    if (str.charCodeAt(i-1) + 1 !== str.charCodeAt(i))
      return String.fromCharCode(str.charCodeAt(i-1) + 1);
  }
  return "No missing letter";
};

const str = "ghijklmno";

document.getElementById('ans').textContent = missingLetter(str);