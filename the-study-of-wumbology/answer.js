wumbo = str => str.replace('M', 'W');

const str =  "I LOVE MAKING CHALLENGES";

document.getElementById('ans').textContent = wumbo(str);