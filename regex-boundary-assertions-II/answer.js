accepted = words => {
  const culled = [];
  for (let i = 0; i < words.length; i++) {
    if (words[i][0] !== 'C') {
      culled.push(words[i]);
    }
  }
  return JSON.stringify(culled);
}

const words = ["Ducks", "Bears",  "Cats"];

document.getElementById('ans').textContent = accepted(words);