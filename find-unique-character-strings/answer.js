filterUnique = strs => {
  const unique = [];
  for (let i = 0; i < strs.length; i++) {
    if ([...new Set(strs[i].split(''))].join('') === strs[i]) {
      unique.push(strs[i])
    }
  }
  return JSON.stringify(unique);
}

const strs = ["abb", "abc", "abcdb", "aea", "bbb"];

document.getElementById('ans').textContent = filterUnique(strs)