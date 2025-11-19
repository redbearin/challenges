toScottishScreaming = str => str.toUpperCase().replace(/[AEIOU]/g, 'E');

const str = "hello world";

document.getElementById('ans').textContent = toScottishScreaming(str);