stringCode = str => {
  const cleanedStr = str.replace(/[^a-zA-Z\s]/g,"");
  const strArr = cleanedStr.split(' ');
  const vowels = ["A", "E", "I", "O", "U", "a", "e", "i", "o", "u"];
  let vowelCt;
  let consCt;
  let counts = ["",""];
  for (let i = 0; i < strArr.length; i++) {
    vowelCt = 0;
    consCt = 0
    for (let j = 0; j < strArr[i].length; j++) {
      if (vowels.includes(strArr[i][j])) {
        vowelCt++;
      }
      else {
        consCt++;
      }
    }
    counts[0] += consCt + " ";
    counts[1] += vowelCt + " ";
  }
  counts[0] = counts[0].trim();
  counts[1] = counts[1].trim();
  return JSON.stringify(counts);
}

const str = "The first man to walk on the moon was Neil Armstrong.";

document.getElementById('ans').textContent = stringCode(str);