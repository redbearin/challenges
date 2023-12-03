diceScore = throws => {
  const myThrow = {};
  for (let i = 0; i < throws.length; i++) {
    if (!myThrow[throws[i]]) {
      myThrow[throws[i]] = 1;
    }
    else {
      myThrow[throws[i]] += 1;
    }
  }
  let points = 0;
  for (let key in myThrow) {
    if (key === '2' && myThrow[key] >= 3) {
      points += 200;
    }
    if (key === '3' && myThrow[key] >= 3) {
      points += 300;
    }
    if (key === '4' && myThrow[key] >= 3) {
      points += 400;
    }
    if (key === '6' && myThrow[key] >= 3) {
      points += 600;
    } 
    if (key === '1') {
      if (myThrow[key] - 3 >= 0) {
        points += 1000 + (myThrow[key] - 3) * 100; 
      } 
      else {
        points += myThrow[key] * 100;
      }
    }
    if (key === '5') {
      if (myThrow[key] - 3 >= 0) {
        points += 500 + (myThrow[key] - 3) * 50; 
      } 
      else {
        points += myThrow[key] * 50;
      }
    }
  }
  return points;
}

const throws = [1,1,1,1,3];

document.getElementById('ans').textContent = diceScore(throws);