pad = str => str.length % 2 === 0 ?
  str + ' ' + 'lo'.repeat((140-str.length - 1)/2) + 'l':
  str + 'lo'.repeat((140-str.length)/2) + 'l';

const str = "I love the new challeng";

document.getElementById('ans').textContent = pad(str);