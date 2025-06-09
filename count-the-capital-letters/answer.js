capitalLetters = str => str.replace(/[a-z]/g, '').length;

const str = "fvLzpxmgXSDrobbgMVrc";

document.getElementById('ans').textContent = capitalLetters(str);