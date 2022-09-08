wordBuilder = (ltrs, indices) => {
  const rearranged = []
  for (let i = 0; i < ltrs.length; i++) {
    rearranged.push('*');
  }
  for (let i = 0; i < ltrs.length; i++) {
    rearranged[indices[i]] = ltrs[i];
  }
  return rearranged.join('');
}

const ltrs= ["g", "e", "o"];
const indices = [1, 0, 2];

document.getElementById('ans').textContent = wordBuilder(ltrs, indices);