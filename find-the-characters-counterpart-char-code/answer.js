counterpartCharCode = char => {
  return char === char.toLowerCase() ? char.toUpperCase().charCodeAt() : char.toLowerCase().charCodeAt();
}

const char = "a";

document.getElementById('ans').textContent = counterpartCharCode(char);