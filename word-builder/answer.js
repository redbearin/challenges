wordBuilder = (ltrs, idx) => {
  const newArr = Array(ltrs.length).fill('*');
  for (let i = 0; i < idx.length; i++) {
    newArr[idx[i]] = ltrs[i];
  }
  return newArr.join('');
}

const ltrs = ["e", "t", "s", "t"];
const idx = [1, 3, 2, 0];

document.getElementById('ans').textContent = wordBuilder(ltrs, idx);

