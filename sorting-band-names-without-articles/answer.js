bandNamesSort = arr => {
  const newArr = [];
  let sub;
  let newSub;
  for (let i = 0; i < arr.length; i++) {
    sub = arr[i].split(' ');
    for (let j = 0; j < sub.length; j++) {
      if (sub[j] !== "An" && 
          sub[j] !== "A" && 
          sub[j] !== "The") {
        newSub = sub.slice(j);
        break;
      }
    }
    newArr.push([newSub[0].toLowerCase(), arr[i]]);
  }
  newArr.sort();
  let finalArr = [];
  for (let i = 0; i < newArr.length; i++) {
    finalArr.push(newArr[i][1]);
  }
  return JSON.stringify(finalArr);
}

const arr = ["The New Yardbirds", "The Beatles", "The Square Roots", "On A Friday", "An Irony"];

document.getElementById('ans').textContent = bandNamesSort(arr);

