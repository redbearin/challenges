smashFactor = (bs, cs) => Math.round(bs/cs * 100)/100;

const bs = 139.4;
const cs = 93.8;

document.getElementById('ans').textContent = smashFactor(bs, cs);