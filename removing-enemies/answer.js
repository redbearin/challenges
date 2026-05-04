removeEnemies = (names, enemies) => {
  if (!enemies.length) {
    return JSON.stringify(names);
  }
  const eneRem= [];
  for (let i = 0; i < names.length; i++) {
    if (!enemies.includes(names[i])) {
      eneRem.push(names[i]);
    }
  }
  return JSON.stringify(eneRem);
}

const names = ["Adam", "Emmy", "Tanya", "Emmy"];
const enemies = ["Emmy"];

document.getElementById('ans').textContent = removeEnemies(names, enemies);