findBrokenKeys = (correct, actual) => {
  const ltrs = [];
  for (let i = 0; i < correct.length; i++) {
    if (correct[i] !== actual[i]) {
      ltrs.push(correct[i])
    }
  }
  return JSON.stringify([...new Set(ltrs)]);
}

const correct = "happy birthday";
const actual = "hawwy birthday";

document.getElementById('ans').textContent = findBrokenKeys(correct, actual);

