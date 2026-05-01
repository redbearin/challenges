dance = (pairs, change) => {
  // start at 0 index
  let idxFromBeg = 0;
  const posRev = [];
  // switch positions of men
  if (change === 'men') {
    for (let i = pairs.length - 1; i >= 0; i--) {
      posRev.push([pairs[idxFromBeg][0], pairs[i][1]]);
      // increment index from beginning
      idxFromBeg++;
    }
  }
  // switch positions of women
  else {
    for (let i = pairs.length - 1; i >= 0; i--) {
      posRev.push([pairs[i][0], pairs[idxFromBeg][1]]);
      // increment index from beginning
      idxFromBeg++;
    }
  }
  return JSON.stringify(posRev);
};

const pairs = [
  ['Ana', 'Bob'],
  ['Amy', 'Josh'],
  ['Lisa', 'Tim']
];

const change = 'women';
document.getElementById('ans').textContent = dance(pairs, change);