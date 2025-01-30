sigilize = str => {
  const culled = str.replace(/\s/g, '').toUpperCase().split('').reverse();
  return JSON.stringify([... new Set(culled)].reverse().join('').replace(/[AEIOU]/g, ""));
}

const str = "i am healthy";

document.getElementById('ans').textContent = sigilize(str);