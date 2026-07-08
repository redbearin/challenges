const totalSeeds = watermelon => {
  // initialize
  // seeds in a quadrant
  let seedsInQuad = 0;
  // total seeds spit out
  let totalSeeds = 0;
  const mid = watermelon.length / 2;

  // go through elements in each quadrant
  // and ttl all seeds in quadrant
  // first quadrant
  for (let i = 0; i < mid; i++) {
    for (let j = 0 ; j < mid; j++) {
      if (watermelon[i][j] === 1)
        seedsInQuad++;
    }
  }
  if (seedsInQuad > 5)
    totalSeeds += seedsInQuad;
  seedsInQuad = 0;

  // third quadrant
  for (let i = 0; i < mid; i++) {
    for (let j = mid; j < watermelon[i].length; j++) {
      if (watermelon[i][j] === 1)
        seedsInQuad++;
    }
  }
  if (seedsInQuad > 5)
    totalSeeds += seedsInQuad;
  seedsInQuad = 0;

  // second quadrant
  for (let i = mid; i < watermelon.length; i++) {
    for (let j = 0 ; j < mid; j++) {
      if (watermelon[i][j] === 1)
        seedsInQuad++;
    }
  }
  if (seedsInQuad > 5)
    totalSeeds += seedsInQuad;
  seedsInQuad = 0;

  // fourth quadrant
  for (let i = mid; i < watermelon.length; i++) {
    for (let j = mid; j < watermelon[i].length; j++) {
      if (watermelon[i][j] === 1)
        seedsInQuad++;
    }
  }
  if (seedsInQuad > 5)
    totalSeeds += seedsInQuad;
  quarterSeeds = 0;

  return totalSeeds;
};

const watermelon = [
  [0, 0, 0, 0, 0, 0, 0, 0], 
  [0, 0, 0, 0, 1, 0, 0, 1], 
  [0, 0, 0, 0, 0, 1, 0, 0], 
  [0, 0, 0, 0, 0, 0, 0, 0], 
  [0, 0, 0, 1, 0, 0, 0, 0], 
  [0, 1, 0, 0, 1, 0, 1, 0], 
  [1, 0, 0, 0, 0, 0, 0, 0], 
  [1, 1, 0, 1, 1, 0, 0, 0]
];

document.getElementById('ans').textContent = totalSeeds(watermelon);