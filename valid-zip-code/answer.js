isValid = str => /^[0-9]{5}$/.test(str);

const str = "59001";

document.getElementById('ans').textContent = isValid(str);