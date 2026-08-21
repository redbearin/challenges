formatAscii = (str, width) => {
  const regex = new RegExp(`.{1,${width}}`, 'g'); 
  return str.match(regex).join('\n');
}

const str = "0123456789";
const width = 2;

document.getElementById('ans').textContent = formatAscii(str, width);