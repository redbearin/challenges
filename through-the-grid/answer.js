gridPos = dims => {
  let rightFac = 1;
  let upFac = 1;
  let ttlFac = 1;

  const width = dims[0];
  if (width !== 1) {
    for (let i = 1; i <= width; i++) {
      rightFac *= i;
    }
  }

  const height = dims[1];
  if (height !== 1) {
    for (let i = 1; i <= height; i++) {
      upFac *= i;
    }
  }

  const ttl = dims[0] + dims[1];
  for (let i = 1; i <= ttl; i++) {
    ttlFac *= i;
  }
  
  return ttlFac/rightFac/upFac;
}

const dims = [6,4];

document.getElementById('ans').textContent = gridPos(dims);