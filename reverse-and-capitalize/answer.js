reverseCapitalize = str => str.toUpperCase().split('').reverse().join('');


const str = "hellothere";

document.getElementById('ans').textContent = reverseCapitalize(str);