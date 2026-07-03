halloween = dat => dat.getMonth() === 9 && dat.getDate() === 31 ? 'Bonfire toffee' : 'toffee';

const dat = new Date("2013/10/31");

document.getElementById('ans').textContent = halloween(dat);