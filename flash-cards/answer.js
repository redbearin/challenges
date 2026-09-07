flash = cards => {
  if (cards[1] === 'x') {
    return cards[0] * cards[2];
	}
	if (cards[1] === '+') {
	  return cards[0] + cards[2];	
	}
	if (cards[1] === '-') {
	  return cards[0] - cards[2];	
	}
	if (cards[2] === 0) {
		return undefined;
	}
  return Math.round(cards[0] / cards[2] *100) / 100;
}

const cards = [3, "x", 7];

document.getElementById('ans').textContent = flash(cards);