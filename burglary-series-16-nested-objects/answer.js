determineWhoCursedTheMost = obj => {
  let meCt = 0;
  let spouseCt  = 0;
  for (key in obj) {
    meCt += obj[key]['me'];
    spouseCt += obj[key]['spouse'];
  }
  if (meCt > spouseCt) {
    return 'ME!';
  }
  if (spouseCt > meCt) {
    return 'SPOUSE!';
  }
  return 'DRAW!'
}

const obj = {
  round1: {
    me: 10,
    spouse: 5,
  },
  round2: {
    me: 5,
    spouse: 10,
  },
  round3: {
    me: 10,
    spouse: 10,
  },
};

document.getElementById('ans').textContent = determineWhoCursedTheMost(obj);