stutter = str => (str.slice(0, 2) + '... ').repeat(2) + str;

const str = "incredible";

document.getElementById('ans').textContent = stutter(str);