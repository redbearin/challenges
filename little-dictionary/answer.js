dictionary = (initial, words) => {
  const matches = [];
  const len = initial.length;
  for (let i = 0; i < words.length; i++) {
    if (initial === words[i].slice(0,len)) {
      matches.push(words[i]);
    }
  }
  return JSON.stringify(matches);
}

const initial = "beau";
const words = ["pastry", "delicious", "name", "boring"];

document.getElementById('ans').textContent = dictionary(initial, words);