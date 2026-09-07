cal = depth => {
  let ttlTime = 0;
  let timeBtnRests = 0;
  let distance = 0;
  while (distance < depth) {
    timeBtnRests += 1;
    ttlTime += 1;
    distance += 5;
    if (timeBtnRests === 30 && 
        distance !== depth) {
      ttlTime += 10;
      distance -= 30;
      timeBtnRests = 0;
    }
  }
  return ttlTime;
}

const depth = 150;

document.getElementById('ans').textContent = cal(depth);
