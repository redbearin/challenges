DECIMATOR = str => {
 return str.slice(0, -Math.ceil(str.length/10));
}

const str = "1234567890";

document.getElementById('ans').textContent = DECIMATOR(str);