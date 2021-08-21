const maxOccur = str => {
  // letter counts
  let counts = {};
  // go ltr by ltr thru str
  // add letters and counts
  for (let i = 0; i < str.length; i++) {
    if (counts[str[i]])
      counts[str[i]] += 1;
    else
      counts[str[i]] = 1;
  }
  // create an array of subarray of letters
  // and counts
  const countsArr = Object.entries(counts);
  // sort the countsArr based on number 
  // of each letter
  countsArr.sort((a,b) => b[1] - a[1]);
  // if the highest letter count is 1
  // there is no letter repetition
  if (countsArr[0][1] === 1)
    return "No Repetition";
  // create an array of letters with top counts
  const maxLtrs = [countsArr[0][0]];
  // add all letter with same counts to 
  // array of letters
  for (let i = 1; i < countsArr.length; i++) {
    if (countsArr[i][1] === countsArr[0][1])
      maxLtrs.push(countsArr[i][0]);
  }
  return JSON.stringify(maxLtrs);
}

const str = "system admin";

document.getElementById('ans').textContent = maxOccur(str);