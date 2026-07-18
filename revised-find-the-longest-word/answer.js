findLongest = str => {
  str = str.replace(/[^A-Za-z\s]/g, "").toLowerCase();
  return str.split(' ').reduce((longest, current) => {
    return current.length > longest.length ? current : longest;
  }, "");
}

const str = "\"Strengths\" is the longest and most commonly used word that contains only a single vowel.";

document.getElementById('ans').textContent = findLongest(str);