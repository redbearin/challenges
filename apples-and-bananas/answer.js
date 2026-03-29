Object.assign(String.prototype, {
  vreplace(vowel) {
      return this.replace(/([aeiou])/g, vowel);
  }
});

const vowel = 'u';
const str = "apples and bananas";

document.getElementById('ans').textContent = str.vreplace(vowel);

