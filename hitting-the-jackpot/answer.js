testJackpot = arr => {
  return [... new Set(arr)].length === 1 ?
    true :
    false;
}

const arr = ["SS", "SS", "SS", "Ss"];

document.getElementById('ans').textContent = testJackpot(arr);