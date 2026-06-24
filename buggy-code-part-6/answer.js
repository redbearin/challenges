removeNumbers = str => str.replace(/[0-9]/g, "");

const str = "12ma23tt";

document.getElementById('ans').textContent = removeNumbers(str);