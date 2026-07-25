preventDistractions = str => /\b(anime|meme|vines|roasts|Danny\sDeVito)\b/.test(str) ? "NO!" : "Safe watching!";

const str = "How to ace BC Calculus in 5 Easy Steps";

document.getElementById('ans').textContent = preventDistractions(str);