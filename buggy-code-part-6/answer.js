removeNumbers = str => str.split('').filter(c => !parseInt(c)).join('');

const str = "12ma23tt";

document.getElementById('ans').textContent = removeNumbers(str);