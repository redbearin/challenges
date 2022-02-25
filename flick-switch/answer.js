flickSwitch = words => {
  let flickFlag = false;
  let values = [];
  // word by word thru words array
  for (let i = 0; i < words.length; i++) {
    // word is "flick"
    if (words[i] === 'flick') {
      // if already flagged turn flag off
      if (flickFlag)
        flickFlag = false;
      // if flag on, turn flag off
      else
        flickFlag = true;
    }
    // flag on 
    if (flickFlag) 
      values.push(false);
    // flag off
    else 
      values.push(true);
  }
  return JSON.stringify(values);
}

const words = [false, false, "flick", "sheep", "flick"];

document.getElementById('ans').textContent = flickSwitch(words);