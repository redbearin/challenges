copyObj = obj => JSON.stringify(structuredClone(obj));

const obj = { piano: 100, tv: 50 };

document.getElementById('ans').textContent = copyObj(obj);
