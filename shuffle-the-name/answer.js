nameShuffle = str => str.split(' ').reverse().join(' ');

const str = "Donald Trump";

document.getElementById('ans').textContent = nameShuffle(str);