commonPre = strs => {
  let comm = '';
  let idx = 0;
  while (idx < strs[0].length) {
    for(let i = 1; i < strs.length; i++) {
      if (strs[i][idx] !== strs[i-1][idx]) {
        if (idx === 0) {
          return 'There is no common prefix among the input strings.';
        }
        return comm;
      }
    }
    comm += strs[0][idx];
    idx++;
  }
  return comm;
}

const strs = ["flower","flow","flight"];

document.getElementById('ans').textContent = commonPre(strs);