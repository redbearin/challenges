finalResult = arr => {
  let ltrsTogether;
  while (arr.length) {
    ltrsTogether = 0;
    for (let i = 1; i < arr.length; i++) {
      // block of letters
      if (arr[i-1] === arr[i]) { 
        ltrsTogether = 2;
        // determine length of block
        for (let j = i + 1; j < arr.length; j++) {
          if (arr[j] === arr[i])
            ltrsTogether++;
          else
            break;
        }
        arr.splice(i-1, ltrsTogether);
        break;
      }
    }
    // no blocks found
    if (!ltrsTogether)
      break;
  }
  console.log(arr)
  return arr;
}

const arr = ["B", "B", "C", "C", "A", "A", "A"];

document.getElementById('ans').textContent = finalResult(arr);