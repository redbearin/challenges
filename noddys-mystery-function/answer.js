noddyFunction = str => !str.toLowerCase().includes('d');

const str = "FANTASTIC"

document.getElementById('ans').textContent = noddyFunction(str);