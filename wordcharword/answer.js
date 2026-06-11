add = (ins, str) => str.split(' ').join(ins);

const ins = "R";
const str = "javascript is fun";

document.getElementById('ans').textContent = add(ins, str);