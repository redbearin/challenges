isIcecreamSandwich = str => {
  if (str[0] !== str[str.length - 1]) {
    return false;
  }
  if ([... new Set (str.split(''))].length === 2) {
    for (let i = 0; i < str.length; i++) {
      if (str[i] !== str[str.length - (1 + i)]) {
        return false;
      }
      if (i > 0 && str[i] !== str[i-1]) {
        if ([... new Set (str.slice(i, -i).split(''))].length === 1) {
          return true;
        }
        return false;
      }
    }
  }
  return false;
}

const str = "CDC";

document.getElementById('ans').textContent = isIcecreamSandwich(str);