lastItem = inp => inp.length === 0 ? "undefined" : inp[inp.length - 1];

const inp = [];

document.getElementById('ans').textContent = lastItem(inp);