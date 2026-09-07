zipCode = str => /^\d{5}$/.test(str);

const str = '54687';

document.getElementById('ans').textContent = zipCode(str);