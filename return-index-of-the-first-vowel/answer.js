firstVowel = str => str.search(/[aeiou]/i);

const str = "STRAWBERRY";

document.getElementById('ans').textContent = firstVowel(str);