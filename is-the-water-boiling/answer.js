isBoiling = temp => temp.slice(-1) === 'F' && +temp.slice(0, -1) >= 212 || temp.slice(-1) === 'C' && +temp.slice(0, -1) >= 100;
 
const temp = "212F";

document.getElementById('ans').textContent = isBoiling(temp);