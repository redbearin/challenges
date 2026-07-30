commonLastVowel = str => {
  str = str.replace(/[^a-zA-Z ]/g, "");
  const counts = {};
  const strArr = str.split(' ');
  for (let i = 0; i < strArr.length; i++) {
    for (let j = strArr[i].length - 1; j >=0; j--) {
      if (/([aeiouAEIOU])/.test(strArr[i][j])) {
        console.log('inside')
        counts[strArr[i][j]] ?
        counts[strArr[i][j]]++ :
        counts[strArr[i][j]] = 1;
        break;
      }
    }
  }
  return Object.entries(counts).sort((a,b) => b[1] - a[1])[0][0].toLowerCase();
}

const str = "amy and acts!";

document.getElementById('ans').textContent = commonLastVowel(str);