checkFlush = (table, hand) => {
  counts = [0,0,0,0];
  for (let i = 0; i < table.length; i++) {
    if (table[i][table[i].length - 1] === 'S')
      counts[0]++;
    if (table[i][table[i].length - 1] === 'C')
      counts[1]++;
    if (table[i][table[i].length - 1] === 'D') 
      counts[2]++;
    if (table[i][table[i].length - 1] === 'H')
      counts[3]++;
  }
  if (counts.includes(5))
    return true;
  if (counts.includes(4) || counts.includes(3)) {
    for (let i = 0; i < hand.length; i++) {
      if (hand[i][hand[i].length - 1] === 'S')
        counts[0]++;
      if (hand[i][hand[i].length - 1] === 'C')
        counts[1]++;
      if (hand[i][hand[i].length - 1] === 'D') 
        counts[2]++;
      if (hand[i][hand[i].length - 1]  === 'H')
        counts[3]++;
      console.log(counts)
    }
    if (counts.includes(5) || counts.includes(6)) {
      return true;
    }
  }
  return false; 
}

const table = ['10_S', '7_S', '9_H', '4_S', '3_S'];
const hand = ['K_S', 'Q_S'];

document.getElementById('ans').textContent = checkFlush(table, hand);