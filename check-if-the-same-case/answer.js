sameCase = str => /^[a-z]+$|^[A-Z]+$/.test(str);

const str = "ThE";

document.getElementById('ans').textContent = sameCase(str);