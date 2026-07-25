totalAmountAdjectives = obj => Object.keys(obj).length;

const obj = { a: "moron", b: "scumbag", c: "moron", d: "dirtbag" };

document.getElementById('ans').textContent = totalAmountAdjectives(obj);