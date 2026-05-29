lenLastWord = str => str.replace(/\s+/g, ' ').split(' ').sort((a, b) => b.length - a.length)[0].length;

const str = "   fly me   to   the moon  ";

document.getElementById('ans').textContent = lenLastWord(str);
