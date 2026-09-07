bbqSkewers = skewers => {
  let vegCt = 0;
  let meatCt = 0;
  for (let i = 0; i < skewers.length; i++) {
    skewers[i].includes('x') ?
    meatCt++ :
    vegCt++;
  }
  return JSON.stringify([vegCt, meatCt]);
}

const skewers = [
  "--oooo-ooo--",
  "--xx--x--xx--",
  "--o---o--oo--",
  "--xx--x--ox--",
  "--xx--x--ox--"
];

document.getElementById('ans').textContent = bbqSkewers(skewers);