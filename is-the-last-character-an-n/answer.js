isLastCharacterN = str => str[str.length - 1] === 'n';

const str = "Dean";

document.getElementById('ans').textContent = isLastCharacterN(str);