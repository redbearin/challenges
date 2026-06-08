isCorrectAliases = (names, alias) => {
  let sub;
  for (let i = 0; i < names.length; i++) {
    sub = alias[i].split(' ');
    if (names[i][0] !== sub[0][0] || names[i][0] !== sub[1][0]) {
      return false;
    }
  }
  return true;
}

const names = ["Adrian M.", "Harriet S.", "Mandy T."];
const alias = ["Amazing Artichoke", "Hopeful Hedgehog", "Marvelous Mouse"];

document.getElementById('ans').textContent = isCorrectAliases(names, alias);