filterString = str => JSON.stringify([str.match(/[A-Z]/g).length, str.match(/[a-z]/g).length, str.match(/[0-9]/g).length, str.match(/[^a-zA-Z0-9]/g).length]);

const str = "*$(#Mu12bas43hiR%@*!";

document.getElementById('ans').textContent = filterString(str);