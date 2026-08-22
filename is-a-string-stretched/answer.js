isStretched = (str1, str2) => {
  const str2LtrCounts = [[str2[0], 1]]
  for (let i = 1; i < str2.length; i++) {
    if (str2[i] !== str2[i-1]) {
      str2LtrCounts.push([str2[i], 1]);
    }
    else {
      str2LtrCounts[str2LtrCounts.length - 1][1] += 1;
    }
  }
  // console.log(str2LtrCounts)
  const str1LtrCounts = [[str1[0], 1]];
  for (let i = 1; i < str1.length; i++) {
    if (str1[i] !== str1[i-1]) {
      str1LtrCounts.push([str1[i], 1]);
    }
    else {
      str1LtrCounts[str1LtrCounts.length - 1][1] += 1;
    }
  }
  // not same letters
  if (str1LtrCounts.length !== str2LtrCounts.length) {
    // console.log('inside not same letters')
    return false;
  }
  // base count ratio
  const countRatio = str1LtrCounts[0][1]/str2LtrCounts[0][1];
  // console.log(countRatio)

  // check
  for (let i = 0; i < str2LtrCounts.length; i++) {
    if (str2LtrCounts[i][0] !== str1LtrCounts[i][0]) {
      // console.log('diifferent letters')
      return false;
    }
    else {
      if (str2LtrCounts[i][1] > str1LtrCounts[i][1] || str1LtrCounts[i][1]/str2LtrCounts[i][1] !== countRatio) {
        return false;
      }
    }
  }
  return true;
}

const str1 = "magneto";
const str2 = "magnet";

document.getElementById('ans').textContent = isStretched(str1, str2);