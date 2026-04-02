toArray = str => JSON.stringify(str.split(','));

const str = "a, b, c, d";

document.getElementById('ans').textContent = toArray(str);