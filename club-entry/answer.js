clubEntry = word => {
  const counts = {};
  for (let i = 0; i < word.length; i++) {
    if (counts[word[i]]) {
      return (word.charCodeAt(i) - 96) * 4
    }
    else {
      counts[word[i]] = 1;
    }
  }
}

const word = "hill";

document.getElementById('ans').textContent = clubEntry(word);