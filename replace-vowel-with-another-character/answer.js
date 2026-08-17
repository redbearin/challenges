replaceVowel = str => {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  const repVow = {a: 1, e: 2, i: 3, o: 4, u: 5};
  let modified = "";
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      modified += repVow[str[i]];
    }
    else {
      modified += str[i];
    }
  }
  return modified;
}

const str = "khandbari";

document.getElementById('ans').textContent = replaceVowel(str);