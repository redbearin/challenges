asterisk = str => /a.*c/g.test(str);

const str = "abccount";

document.getElementById('ans').textContent = asterisk(str);