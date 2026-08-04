reverse = str => str.split('').reverse().join('');

const str = "The quick brown fox.";

document.getElementById('ans').textContent = reverse(str);