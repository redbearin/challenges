isBoiling = str => str[str.length - 1] === 'F' && +str.slice(0,-1) >= 212 || str[str.length - 1] === 'C' && +str.slice(0,-1) >= 100;

const str = "212F";

document.getElementById('ans').textContent = isBoiling(str); 