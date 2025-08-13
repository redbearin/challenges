hammingDistance = (str1, str2) => {
  let count = 0;
  for (let i = 0; i < str1.length; i++) {
    if (str1[i] !== str2[i]) {
      count++;
    }
  }
  return count;
}
const str1 = "abcde";
const str2 = "bcdef";

document.getElementById('ans').textContent = hammingDistance(str1, str2);