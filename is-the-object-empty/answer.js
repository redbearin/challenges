isEmpty = obj => Object.keys(obj).length === 0;

const obj = {};

document.getElementById('ans').textContent = isEmpty(obj);
