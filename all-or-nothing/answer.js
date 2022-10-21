possiblyPerfect = (key, test) => {
  let incorrect = 0;
  let correct = 0;
  let noRqdAns = 0;
  // compare key answer with test answer
  for (let i = 0; i < key.length; i++) {
    if (key[i] === '_')
      noRqdAns++;
    else if (key[i] === test[i])
      correct++;
    else
      incorrect++;
  }
  // all required answers either correct
  // or incorrect
  if (correct + noRqdAns === key.length || 
      incorrect + noRqdAns === key.length)
    return true;
  // mix of correct and incorrect
  else 
    return false;
}

const key = ["A", "B", "C", "_"];
const test = ["B", "A", "C", "C"];

document.getElementById('ans').textContent = possiblyPerfect(key, test);