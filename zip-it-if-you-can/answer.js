zipIt = (women, men) => {
  const combos = [];
  if (women.length !== men.length) {
    return "sizes don't match";
  }
  for (let i = 0; i < women.length; i++) {
    combos.push([women[i], men[i]]);
  }
  return JSON.stringify(combos);
}

const women = ["Elise", "Mary"];
const men = ["John", "Rick"]

document.getElementById('ans').textContent = zipIt(women, men);