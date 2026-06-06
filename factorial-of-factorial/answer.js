factFact = num => {
  let factFact = 1;
  let fact;
  for (let i = num; i > 1; i--) {
    fact = 1;
    for (let j = i; j > 1; j--) {
      fact *= j;
    }
    factFact *= fact;
  }
  return factFact;
}

const num = 4;

document.getElementById('ans').textContent = factFact(num);