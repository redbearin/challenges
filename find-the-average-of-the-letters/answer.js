averageIndex = ltrs => Math.round(ltrs.reduce((acc, val) => val.charCodeAt(0) - 96 + acc, 0)/ltrs.length * 100)/100;

const ltrs = ["a", "b", "c", "i"];

document.getElementById('ans').textContent = averageIndex(ltrs);