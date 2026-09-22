const groupByFirstLetter = words => {
  const byLtr = {};
  for (const word of words) {
    if(!word) {
      continue;
    }
    const firstLtr = word[0].toLowerCase();
    byLtr[firstLtr] ?
      byLtr[firstLtr].push(word):
      byLtr[firstLtr] = [word];
    }
  return JSON.stringify(byLtr);
}

const words = ["Apple", "ant", "", "Banana", "BLUE"];

document.getElementById('ans').textContent = groupByFirstLetter(words);