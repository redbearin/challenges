const whoPassed = students => {
  const passed = [];
  let scoreArr;
  // initialize lowGrade flag
  let lowGrade = false;
  // go student by student through students object
  for (key in students) {
    // go grade by grade
    for (let i = 0; i < students[key].length; i++) {
      // put the score into an array
      scoreArr = students[key][i].split('/');
      // determine if the student received 100%
      if (+scoreArr[0]/+scoreArr[1] !== 1) {
        lowGrade = true;
        break;
      }
    }
    // all grades 100%
    if (!lowGrade) 
      passed.push(key);
    // reset unacceptable grade flag
    else
      lowGrade = false;
  }
  return JSON.stringify(passed.sort());
};

const students = {
  "Zach" : ["10/10", "2/4"],
  "Fred" : ["7/9", "2/3"]
};

document.getElementById('ans').textContent = whoPassed(students);