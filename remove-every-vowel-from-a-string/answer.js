removeVowels = str => {
  return str.replace(/([aeiouAEIOU])/g, '');
}

const str = "We're gonna build a wall!";

document.getElementById('ans').textContent = removeVowels(str);