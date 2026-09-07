reverse = str => {
  let ltrIdx = 0;
  const regex = new RegExp("[a-zA-Z]","g");
  const ltrsOnly = str.replace(/[^a-zA-Z]/g, '').split('').reverse();
  console.log(ltrsOnly)
  let changed = '';
  for (let i = 0; i < str.length; i++) {
    if (/[a-zA-Z]/.test(str[i])) {
      changed += ltrsOnly[ltrIdx];
      ltrIdx++;
    }
    else {
      changed += str[i];
    }
  }
  return changed;
}

const str = "123a45";

document.getElementById('ans').textContent = reverse(str);