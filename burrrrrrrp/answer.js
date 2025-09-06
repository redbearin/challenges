longBurp = rRep => 'Bu' + 'r'.repeat(rRep) + 'p';

const rRep = 9;

document.getElementById('ans').textContent = longBurp(rRep);