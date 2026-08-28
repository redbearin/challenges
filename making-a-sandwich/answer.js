makeSandwich = (ingred, flavor) => {
  const sandwich = [];
  for (let i = 0; i < ingred.length; i++) {
    if (ingred[i] === flavor) {
      sandwich.push("bread", flavor, "bread");
    }
    else {
      sandwich.push(ingred[i]);
    }
  }
  return JSON.stringify(sandwich);
}

const ingred = ["ham", "ham"];
const flavor = 'ham'

document.getElementById('ans').textContent = makeSandwich(ingred, flavor);