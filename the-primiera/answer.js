getPrimieraScore = deck => {
  let counts = {d: 0, h: 0, s: 0, c:0};
  let points = {A: 16, 2: 12, 3: 13, 4: 14, 5: 15, 6: 18, 7: 21, J: 10, K: 10, Q: 10 };
  for (let i = 0; i < deck.length; i++) {
    if (counts[deck[i][1]] === 0) {
      counts[deck[i][1]] = points[deck[i][0]];
    }
    else {
      if (points[deck[i][0]] > counts[deck[i][1]])
        counts[deck[i][1]] = points[deck[i][0]];
    } 
  }
  if (counts.d === 0 || 
      counts.h === 0 || 
      counts.s === 0 || 
      counts.c === 0)
    return 0;
  return counts.d + counts.h + counts.s + counts.c;
}

const deck = ["2d", "Jd", "Qc", "5s", "As"];

document.getElementById('ans').textContent = getPrimieraScore(deck);