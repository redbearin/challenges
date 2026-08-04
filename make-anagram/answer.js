makeAnagram = (str1, str2) => {
  const str1Arr = str1.split('');
  const str2Arr= str2.split('');
  let idx;
  for (let i = 0; i < str1Arr.length; i++) {
    idx = str2Arr.indexOf(str1Arr[i]);
    if (idx !== -1) {
      str2Arr[idx] = '*';
      str1Arr[i] = '#';
    }
  }
  for (let i = 0; i < str2Arr.length; i++) {
    idx = str1Arr.indexOf(str2Arr[i]);
    if (idx !== -1) {
      str1Arr[idx] = '*';
      str2Arr[idx] = "#";
    }
  }
  return str1Arr.join("").replace(/[*#]/g, "").length + str2Arr.join("").replace(/[*#]/g, "").length;
}

const str1 = "cde";
const str2 = "abc";

document.getElementById('ans').textContent = makeAnagram(str1, str2);