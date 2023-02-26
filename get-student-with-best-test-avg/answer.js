const getBestStudent = students => {
  
  let sum;
  
  // go element by element thru the obj
  for (key in students) {
    sum = 0;
    // add up all the scores
    for (let i = 0; i < students[key].length; i++) {
      sum += students[key][i];
    }
    // replace the individual scores with the sum
    students[key] = sum / students[key].length;
  }
  // put the object elements into an arr and sort
  // on the average, highest to lowest
  sortedStudentsArr = Object.entries(students).sort((a,b) => b[1]-a[1]);

  return sortedStudentsArr[0][0];
};

const students = {
  Susan: [67, 84, 75, 63],
  Mike: [87, 98, 64, 71],
  Jim: [90, 58, 73, 86]
};

document.getElementById('ans').textContent = getBestStudent(students);