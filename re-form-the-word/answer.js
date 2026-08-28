getWord = (first, second) => {
  return first.slice(0, 1).toUpperCase() + first.slice(1) + second;
}

const first = "seas";
const second = "onal";

document.getElementById('ans').textContent = getWord(first, second);