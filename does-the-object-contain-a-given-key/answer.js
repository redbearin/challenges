hasKey = (obj, ky) => Object.keys(obj).includes(ky);

const obj = { a: 44, b: 45, c: 46 };
const ky = "d";

document.getElementById('ans').textContent = hasKey(obj, ky);

