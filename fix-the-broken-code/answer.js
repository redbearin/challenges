sortWord = word => word.split('').sort().join('');

const word = 'dcba';

document.getElementById('ans').textContent = sortWord(word);