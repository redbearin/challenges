split = str => {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let vowStr = '';
  let othStr = '';
  for (let i = 0; i < str.length; i++) {
    vowels.includes(str[i]) ?
    vowStr += str[i] :
    othStr += str[i];
  }
  return vowStr + othStr;
}

const str = "abcde";

document.getElementById('ans').textContent = split(str);