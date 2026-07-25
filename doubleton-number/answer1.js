doubleton = (n) => {
  return new Set(String(++n).split("")).size === 2 ? n : doubleton(n);
}

const n = 10;

document.getElementById('ans').textContent = doubleton(n);