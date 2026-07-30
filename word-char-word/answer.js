add = (ltr, str) => str.replace(/\s/g, ltr);

const ltr = "R";
const str = "javascript is fun";

document.getElementById('ans').textContent = add(ltr, str);