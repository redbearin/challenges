sameLetterPattern = (str1, str2) => {
  for (let i = 0; i < str1.length; i++) {
    for (let j = 0; j < str1.length; j++) {
      if (i === j)
        continue;
      else {
        if (str1[i] === str1[j] && str2[i] !== str2[j])
          return false;
      }
    }
  }
  return true;
}

const str1 = "FFFF";
const str2 = "ABCD";

document.getElementById('ans').textContent = sameLetterPattern(str1, str2);